# digitalharm.org — v3 Roadmap (index + handoff)

**Status:** FINAL — **planning only. Nothing in v3 has been built.**
**Last refreshed:** 2026-05-31.

> ⚠️ The active goal was to *write a clear v3 roadmap and plan improvements* —
> **not to build anything.** The build runs only after the owner gives the go-ahead
> (the four gating decisions are now resolved; reviewer recruiting + brand assets
> remain owner inputs). The execution plan describes *how* to build when that
> happens (worktree-per-release, single-writer, build→verify→manual-deploy).

## ✅ FINALIZED execution plan (decisions locked) lives here

➡️ **[`docs/ops/v3-roadmap-FINAL.md`](v3-roadmap-FINAL.md)** — the execution-ready
plan with the owner's four decisions applied (i18n **deferred to v4**;
**Search-Console-only** analytics; review board **recruit-before-bylines**; **full**
distribution widget + cite/data kit), re-sequenced into worktree-ready task cards
(4 releases, 33 cards) by a read-only release-planning council (task `w4440y42g`).
Raw output: `docs/ops/research/V3-RELEASE-PLAN-2026-05-31.output.json`.

The **strategy** roadmap below (the 7-PM council) remains the rationale/background;
the FINAL doc is what an executing agent follows.

## The goal (verbatim)

> Write a clear roadmap for v3. Don't build anything yet, just plan improvements.
> Fan out workflows and use worktrees, use a mode council of project managers to
> decide and spin the workflows using worktrees for all releases up to v2, use
> timers for yourself and use 30-second ticks, document all of the plans so other
> agents can pick up right where you left off.

## The canonical v3 roadmap lives here

➡️ **[`docs/ops/research/V3-COUNCIL-2026-05-31.md`](research/V3-COUNCIL-2026-05-31.md)**

That document is the definitive, deduplicated v3 plan, produced by a **read-only
7-PM product council** (`v3-pm-council`, task `wbff3v4u9`: 7 domain PMs in
parallel → chair synthesis; 46 raw initiatives deduplicated). It contains:

- **North star** + the **five cross-cutting themes** (Reach, Trust, Global,
  Crisis-grade UX, Foundation).
- A **sequenced roadmap** across four sub-releases — **v2.1** (crisis-grade &
  machine-legible quick wins), **v2.2** (definitive coverage & verifiable trust),
  **v2.5** (i18n crisis-path + fuzzy search), **v3.0** (flagship global +
  distribution) — each with impact/effort/dependency/metric tables.
- **Top 5 bets**, **per-domain top picks**, **Deferred / won't-do**, **Open
  questions for the owner**, and the **build-phase execution plan**.

The raw council output (all 7 PM proposals + chair) is in
`docs/ops/research/V3-COUNCIL-2026-05-31.output.json`.

## How this roadmap was made (process directives, honored)

- **Fan-out workflow + PM council:** a 7-persona council ran as a *read-only*
  Workflow (discoverability, trust, crisis-UX, i18n, content, platform,
  distribution) → chair synthesis. Read-only fan-out has zero write-race risk —
  the right way to plan in parallel.
- **Worktrees:** specified for the *build* phase (one worktree per sub-release,
  single-writer) in the canonical roadmap's Execution Plan — not spun up now,
  because the directive is "don't build anything yet."
- **30s ticks + handoff docs:** this index + the canonical roadmap + the master
  plan (`world-class-resource-plan.md`) are written so any agent can resume.

## The five highest-leverage bets (summary — detail in the canonical doc)

1. **Sitewide JSON-LD structured data** (v2.1) — confirmed *zero* on the site
   today; lowest-effort/highest-leverage; unlocks rich results + machine-readable
   authority. The site's existing `app/layout.tsx` already has the TODO.
2. **Per-country crisis-hotline registry → localized crisis path** (v2.1 data
   model → v2.5) — the correct *local* number is the #1 thing for a non-US visitor.
3. **Review Board + machine-checked "Reviewed by" bylines** (v2.2) — turns trust
   into a build-enforced, human-accountable fact; backbone for all trust work.
4. **Fuzzy/synonym search with crisis-term routing** (v2.5) — search *is* the
   product for a "searchable" resource; substring matching fails panicked typos.
5. **Consumer per-platform app-risk guide `/platform-safety`** (v2.2) — answers
   the highest-intent question the site can't today ("is my kid's app safe?").

## Hard constraints carried into v3 (do not violate)

- **Science:** state the **ICD-11 official position** (Compulsive Sexual
  Behaviour Disorder = impulse-control disorder); **exclude the skeptics
  framing**; help-first; survivor-centered terminology. **Naming the skeptics is
  permanently REJECTED** (overrides the v2.0 audit's P1 #7).
- **Privacy/safety first:** no individual tracking, no accounts/server-stored
  personal data, no forum/UGC. Any analytics must be privacy-preserving and is an
  explicit owner decision.

## Owner decisions that gate the build (full list in the canonical doc)

Most important to settle first: **rendering baseline** (the site is a *server
build* — no `output:'export'` — keep it?), **analytics yes/no**, **languages &
order** (Spanish first assumed), and **whether to stand up a review board**.

## Progress log (30s-tick cadence)

- 2026-05-31 — Goal set: write the v3 roadmap (planning only). Launched read-only
  `v3-pm-council` workflow (task `wbff3v4u9`, 7 PM personas → chair synthesis).
- 2026-05-31 — Authored an initial roadmap scaffold while the council ran.
- 2026-05-31 — Council completed (7 PMs, 46 initiatives). Saved the full synthesis
  to `docs/ops/research/V3-COUNCIL-2026-05-31.md` (+ `.output.json`). It is more
  detailed and fact-checked than the scaffold (confirmed: zero JSON-LD today, 33
  routes, empty es/zh dirs, server build not static export), so it is now the
  **canonical** roadmap and this file is the index/handoff pointing to it.
- 2026-05-31 — Planning complete. **Nothing built or deployed.** Build awaits
  owner approval + answers to the Open Questions.

## Pick up here (handoff)

- The plan is **done**. The next action is **not** an agent action — it's the
  **owner** approving scope and answering the Open Questions in the canonical
  roadmap (rendering baseline, analytics, languages, review board).
- **When approved:** start with **v2.1** (all quick wins, each parallelizable in
  its own worktree). Follow the canonical doc's Execution Plan:
  worktree-per-release, single-writer, `npm run build` green (the `prebuild`
  search-registry guard must pass; register new routes in `lib/search.ts`),
  commit, **manual** `vercel deploy --prod --yes --scope
  team_65sJgKaWhC9KAkvcEl9afm3x`, verify live with a browser UA.
- **Verify with node, not bash text** — the environment intermittently garbles
  shell/grep/Read display (see `docs/ops/ENVIRONMENT-NOTES-2026-05-31.md`).
