# Environment & recovery notes — 2026-05-31 (read this before trusting the shell)

This session hit a **degraded local environment** that produced *intermittently
garbled tool output* — and that garbling masked real failures for a while. If
you are the next agent, internalize this before you trust anything.

## What went wrong (and how it hid)

1. **Shell/grep/Read display became unreliable.** Symptoms seen: garbled git
   SHAs in `git push` output; a `grep -n` reporting a **32,721-line** file that
   is actually **~391 lines**; a `Read` showing a `keywords:` line "repeated"
   several times when the file had it once; `git status` and `git diff HEAD`
   disagreeing about whether a file was modified.

2. **Edits reported success but did not persist to commits.** Several
   `lib/search.ts` edits earlier in the session returned "updated successfully"
   yet the committed file did not contain them. Commit `b32b37e`
   ("fix(search): actually register laws/orgs/prevention/remove-images")
   in fact registered **nothing** — `git show HEAD:lib/search.ts | grep /laws`
   returned 0.

3. **Consequence:** all 8 content pages (browse, csam-statistics, for-parents,
   laws, organizations, prevention, remove-images, editorial-standards) were
   live as routes but **absent from site search**. This was hidden because
   search queries matched the report *chapters* (e.g. "earn it act" hit the
   policy chapter), so results were non-empty and looked fine.

4. **A guard made it worse.** The first `scripts/check-search-registry.ts`
   imported `lib/search.ts`, which uses the `@/content` path alias that bare
   Node cannot resolve under `--experimental-strip-types`. Wired as `prebuild`,
   it threw `ERR_MODULE_NOT_FOUND` and **broke every build** → two prod deploys
   failed → `/editorial-standards` was 404.

## How it was resolved (commit ~`3460689`)

- Added all 8 pages to `PAGE_REGISTRY` in one Edit (anchored on the `/about`
  entry, confirmed verbatim by a clean Read).
- Replaced the guard with **`scripts/check-search-registry.mjs`** — plain JS,
  **no imports, no flags**; it reads `lib/search.ts` as *text* and regexes the
  registered hrefs. Bulletproof against the alias problem. Still wired as
  `prebuild`.
- Verified the fix with **shell-independent** checks (see below).

## THE RULE: verify with node, not with bash text

In this environment, **trust only node-level checks**; treat `grep`/`cat`/`Read`
*display* as advisory.

- **File structure:** `node -e "const s=require('fs').readFileSync('lib/search.ts','utf8'); console.log(s.split('\n').length, (s.match(/href:/g)||[]).length)"`
- **What's committed:** `git show HEAD:lib/search.ts | grep -c '/laws'` (piping
  to `grep -c` of a git plumbing stream was reliable; bare `grep -n` on the
  working file was not).
- **Sync state:** run `git rev-parse HEAD` and `git rev-parse origin/main`
  inside a `node -e` via `execSync` and compare strings.
- **Live site:** use Node global `fetch` with a browser `User-Agent`, and assert
  the **page TITLE** appears in the `/search?q=…` HTML — never accept a bare 200
  as proof a page is searchable. (Remember `&` renders as `&amp;`, so check
  titles without the ampersand, e.g. search for "Laws" not "Laws & Policy".)

## Deploy reminders (unchanged)

- Git auto-deploy is broken. Deploy manually:
  `vercel deploy --prod --yes --scope team_65sJgKaWhC9KAkvcEl9afm3x`
- Production is behind a bot challenge; always pass a browser `User-Agent` when
  fetching/curling, or you get a 403 "Vercel Security Checkpoint".
- **Single-writer discipline still applies.** If a second agent touches this
  repo concurrently, stop — the persistence failures above are exactly what a
  two-writer race looks like.

## Still open

- **Science-balance editorial decision** is the one true blocker awaiting the
  owner (see world-class-resource-plan.md → "Open decision pending").
- **v2.0 completeness-audit workflow** was *not* run (the Workflow tool rejected
  a `run_in_background` param). Re-launch without it when the environment is
  stable: 5 read-only auditors (accuracy / navigation / competitive-gaps /
  clarity+a11y / external-links) → synthesis → punch-list.
