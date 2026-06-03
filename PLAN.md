# PLAN — Handoff document for any agent picking this up

This file is the source of truth for the in-flight work on the Digital Harm
Report site at digitalharm.org. If you've just been invoked and aren't sure
where things stand, read this top-to-bottom before doing anything else.

Last touched: 2026-05-30. Goal: build the most comprehensive well-researched
guide on CSAM and CSAM prevention. The site IS the guide — do not create a
parallel `/csam-guide` route. Strengthen the existing 8-chapter report and
audience guides instead.

---

## What's shipped

**Site at https://digitalharm.org** — Next.js 16 App Router, deployed via Vercel.

- 8-chapter report at `/report/{slug}`: exposure, addiction, escalation,
  ai-generated, interventions, technology, prevention, recommendations
- 259 citations (auto-extracted from chapter HTML by `lib/citations.ts`)
- Ch 06 includes `platform-safety-orgs`: TikTok/Meta/X child-safety
  governance org charts with named leaders (most perishable content;
  quarterly refresh procedure below)
- ~117 minutes total reading time
- Last reviewed May 2026 (just expanded with workflow research)
- 9 audience guides at `/for-{slug}`: victims, educators, offenders,
  tech-ceos, developers, therapists, compliance-teams, attorneys, reporting
- `/guides` hub linking all nine, each card with a "Read the Guide" button.
  Tech trio: for-tech-ceos (strategy/legal), for-developers (implementation),
  for-compliance-teams (audit). for-developers is the code-level companion to
  `/tools` and Ch 06.
- `/for-reporting` guide ("For Reporting Content"): 114 platforms (108 + 6
  clearinghouses) across 10 categories — where to report CSAM by platform,
  with policy URLs and ESP duty flags. Data in
  `content/locales/en/reporting.ts`. Lives in the Guides collection (NOT a
  top-nav "Report" link — that collided with the site title). `/reporting`
  301-redirects here via `next.config.ts`. Surfaced by a crisis-toned card
  on `/get-help` and an entry in `/guides` + the footer Guides list.
- `/apps` directory: 27 mobile/desktop apps across 6 categories
- `/tools` directory: 10 OSS CSAM-defense tools surfacing
  github.com/digitalharm/fight-csam
- `/get-help` with 5 categories of confidential helplines
- `/get-help/bay-area` regional sub-page
- `/about`, `/citations`

**OSS portfolio at https://github.com/digitalharm/fight-csam** (private)

- Monorepo with 11 packages (10 tools + hashkit-match)
- Wave 1 scaffolded and compiling: hashkit, hashkit-match, detectkit-test
- Safety guard CI verified on real PR (`gh pr 1` closed unmerged)
- Roadmap document with 6-status taxonomy and acceptance criteria
- Lantern sponsorship outreach draft at `docs/outreach/lantern.md`

## Just landed (latest commit on `main`, deployed)

Commit `2c26d2e` — "Integrate CSAM research into existing chapters; revert
parallel /csam-guide". Added substantial new sections to chapters 03, 04,
05, 06, 07 from the wsi64vd96 workflow (566K tokens of subagent research
across 10 parallel agents). Specifically:

- Ch 03 Escalation: + Production typology, + Offender pathway models
- Ch 04 AI-Generated: + Generation deep dive, + Encryption debate, + Reading the numbers
- Ch 05 Interventions: + Prevention programs detail, + Survivors and ongoing harm
- Ch 06 Technology: + Distribution and economy, + Reporting pipeline, + Detection technical depth
- Ch 07 Prevention: + Cross-jurisdictional CSAM law

## Just completed (both workflows landed 2026-05-30)

1. **`wqbeqkpuo` → commit `8d8ea6b`** — v1.6 platform org-chart research
   (worktree-isolated, TikTok/Meta/X). Its synthesis agent wrote the
   populated section directly into Ch 06 `platform-safety-orgs`, so the
   `/tmp/v1.6-integrator.py` fallback was NOT needed. Named T&S/Child-Safety
   leaders with primary-source citations in `p` blocks; comparison table;
   stale "Eric Han" claim caught and corrected. Citations 230 -> 259.
   Gotcha fixed on the way in: `&amp;` in h3 `text` and table cells renders
   literally (those fields are plain JSX text, not `dangerouslySetInnerHTML`)
   — converted to raw `&` to match existing convention.

2. **`wacxmxmar` → commit `12403e7`** — platform reporting directory (10
   category agents). 108 platforms now populate `reportingCategories` in
   `content/locales/en/reporting.ts` (+ 6 hand-verified clearinghouses =
   114 total on `/reporting`). Integrator at `/tmp/reporting-integrator.py`
   ran clean. Unverified-but-canonical URLs (X CSE form, etc.) kept with
   the caveat carried in each platform's `notes`.

Both deployed together. The drafted integrators remain in `/tmp` for the
next quarterly refresh (re-run workflows with `resumeFromRunId`).

## What's queued

The PM council (v0.1 → v2.0), the org-chart deep dive, and the
worktree-isolated research workflows are all DONE (see "Just completed"
above). v1.7 and v1.8 are now SHIPPED. Remaining:

1. **v1.7 — SHIPPED.** Operationalized accountability into `/for-tech-ceos`
   ("07 · Where accountability sits") and `/for-compliance-teams` ("06 ·
   Governance and accountability"), both linking the Ch 06 table without
   duplicating named leaders. Jump-navs auto-generate from the topics array.
2. **v1.8 — SHIPPED.** Staleness controls:
   - `Section.verified?: string` in `content/types.ts`; the chapter renderer
     shows a "Leadership verified {date}" badge. Set on `platform-safety-orgs`
     ("May 2026").
   - `/reporting` shows "Verified {reportingVerified}" (single source in
     `reporting.ts`).
   - `scripts/check-perishable-citations.ts` fails if any named individual in
     a `verified` section lacks a co-occurring citation. Runs on plain `node
     --experimental-strip-types` (no tsx/esbuild dep). Wired into a new
     `.github/workflows/ci.yml` (install → lint:perishable → build) and the
     `pnpm lint:perishable` script. Proven to bite (negative-tested).
   - Editorial standard codified below.
3. **v2.0 — SHIPPED.** Numeric scored accountability rubric (user chose the
   numeric form over qualitative tiers) in new Ch 06 section
   `accountability-scorecard`. Seven governance dimensions scored 0–3 (21
   max): TikTok 17, Meta 15, X 5. Every cell traces to the sourced facts in
   `platform-safety-orgs` above it. Carries a strict methodology callout
   ("measures governance structure, not which platform is safest"), is
   `verified`-stamped, and closes by tying to the Phoenix 11 /
   survivor-advocacy position in Ch 05
   (`interventions#survivors-and-ongoing-harm`). Person names deliberately
   kept out of this section's prose so the citation guard stays green while
   the institutional facts remain cited.

**The release plan through v2.0 is now complete.** Future work is refresh
(the perishable content) and any net-new research the user requests.

## Editorial standard for perishable / accountability content (v1.8)

This is the rule set the lint and the `verified` stamp enforce. Follow it for
any named-individual or platform-accountability content:

1. **Primary-source every named individual.** SEC/Companies House filing,
   official transparency report, eSafety mandatory notice, congressional
   testimony, or on-the-record press. The citation must live in a `p`,
   `callout`, or `list` block (NOT a table cell — `lib/citations.ts` does not
   extract those, and `check-perishable-citations.ts` will fail the build).
2. **Drop, don't hedge.** A claim that cannot be primary-sourced is removed,
   not softened with "reportedly." (The workflow dropped the stale "Eric Han"
   claim this way.)
3. **Allegation vs fact.** Unadjudicated claims are attributed to their record
   and framed as such: "testified that…", "alleging that…", "by consent
   ordered…". Never assert an unproven allegation as fact. Court penalties and
   filings are stated as the record shows them.
4. **Date the perishable.** Stamp accountability sections with `verified` and
   re-verify on the cadence below. The stamp is a promise; keep it true.
5. **Governance, not personality.** The framing is organizational structure
   (who reports to whom, where the function sits), not coverage of individuals.

## Release plan (PM council finalized, workflow wyzl9wk38)

- **v0.1** — Site scaffold + initial 8 chapters (shipped, 2026-02)
- **v0.5** — Audience guides + apps directory + bay-area resources (shipped)
- **v1.0** — Tools portfolio + OSS scaffold + research integration (shipped 2026-05-30)
- **v1.5** — Platform accountability section in Ch 06 (`platform-safety-orgs`).
  Skeleton-first: commit empty section to main, then v1.6 research populates it.
  TikTok / Meta / X — named VP-level leaders with primary-source citations
  living in `p` or `callout` blocks (NOT table cells — `lib/citations.ts`
  only extracts from p/callout/list). Tone gate on TikTok inside this
  release before extending to Meta and X.
- **v1.6** — Worktree-isolated research pipeline that POPULATES v1.5. Three
  parallel agents (one per platform), each writes its own draft file at
  `/tmp/platform-{slug}-draft.ts`. Synthesis on main integrates only the
  verified subset; unsourced claims dropped, not hedged.
- **v1.7** — Operationalize accountability into `/for-tech-ceos` (near
  `what-good-looks-like` and `personal-liability` sections) and
  `/for-compliance-teams` guides. No name duplication — guides reference
  the Ch 06 table.
- **v1.8** — Staleness controls: `last-verified` date concept on
  accountability blocks (touches `content/types.ts` + chapter renderer),
  CI lint failing on uncited named individuals, editorial standard in
  PLAN.md, legal-tone review pass.
- **v2.0** — Scored rubric applied uniformly across the three platforms,
  extensible. Inside Ch 06 and/or Ch 08 `technology-companies`. Do NOT
  spin up a parallel /accountability microsite (the /csam-guide lesson).
  Tie to Phoenix 11 / survivor-advocacy positions in Ch 05.

## Critical implementation gotchas (from council)

- **Existing Ch 06 already has a section with id `accountability`** (line 1031
  in report.ts) — it's the consumer monitoring-software section (Covenant
  Eyes, Bark). New corporate-accountability section MUST use distinct id,
  e.g. `platform-safety-orgs`.
- **Table block cells don't surface on /citations.** `lib/citations.ts`
  extracts `<a href>` from `p`, `callout`, and `list` block types only.
  Every named leader's citation must live in a sourced narrative block.
- **Worktree mechanics**: Workflow's `isolation: 'worktree'` per agent gives
  each subagent its own git copy. For platform research, simpler: each
  agent writes to `/tmp/platform-{slug}-draft.ts` (no shared file conflict),
  with worktrees giving belt-and-suspenders isolation.
- **Commit skeleton on main FIRST**, then run research, then integrate.
  Running parallel agents against an empty integration target invites the
  exact merge conflict the isolation is meant to prevent.

## Refresh procedure (for v1.6 re-runs as executives change)

This is the most perishable content on the site. Procedure:

1. Re-run the v1.6 platform research workflow with `resumeFromRunId` to
   refresh from cache where unchanged.
2. Each agent verifies named individuals against a primary source: SEC
   or Companies House filing, official transparency report, eSafety
   mandatory notice, on-the-record press. Drop (don't soften) claims
   that can't be primary-sourced.
3. Synthesis pass updates the `last-verified` date stamp.
4. Build, deploy, update changelog with date.

Cadence: at minimum quarterly. Pre-emptively after major executive
departures (e.g. a Head of Trust & Safety leaving).

## Where research outputs live

- Workflow `wsi64vd96` output (10 sections, 566K tokens) at
  `/private/tmp/claude-501/-Users-colin-Code-addiction/.../tasks/wsi64vd96.output`
- Parsed structured version at `/tmp/csam-guide-sections.json`
- Per-chapter additions at `/tmp/chapter-{slug}-additions.ts` (already
  integrated into report.ts; kept for reference)

## How to resume

1. Read this file
2. Read the most recent commit messages: `git log --oneline -5`
3. Check this file's "What's queued" section for the next move
4. If unsure, look at TaskList in the active session

## Architecture reminders (learned the hard way)

- **The site IS the guide.** Do not create parallel structures.
- **Audience guides translate evidence into action.** They don't duplicate
  chapter content; they operationalize it for a role.
- **Citations are auto-extracted** from chapter HTML by `lib/citations.ts`.
  Adding a new `<a href>` inside a chapter body block automatically shows
  up on `/citations`. Don't maintain a separate list.
- **The `/tools` page surfaces the OSS repo.** Don't duplicate it on the
  site; link to the repo's docs.
- **Safety guard CI** in the OSS repo blocks: hash-list filenames, image
  binaries outside allowlist, credential patterns. Don't disable it.

## Repos

- Site: https://github.com/digitalharm/digital-harm-website (public)
- OSS: https://github.com/digitalharm/fight-csam (private)
- Local site: `/Users/colin/Code/digital-harm-website`
- Local OSS: `/Users/colin/Code/fight-csam`

## Style

- No em dashes in code (but en dashes are fine in prose)
- No emojis unless user asks
- Source Serif 4 body, Inter UI
- Clinical, careful, citation-dense voice; never sensationalist
- Convert relative dates to absolute (we're in May 2026 reference frame)
