# Content duplication audit

Per the standing goal: **identify** where the site has similar/parallel content
across pages. We are *not* eliminating it yet — this is the map.

Last updated: 2026-06. Grounded by a topic-presence scan across `app/` +
`content/`.

## The principle to aim for (later)

For each topic, one page should be the **canonical owner** that explains it in
full; every other page that needs it should **link** rather than re-explain.
That keeps the site from drifting out of sync (the real cost of duplication: a
number or a law gets updated in one place and not the others).

Two exceptions where redundancy is **intentional and should stay**:
1. **Safety-critical contacts** (988, NCMEC, Take It Down) — these *should*
   appear on many pages; a person in crisis shouldn't have to navigate.
2. **Audience-tailored framing** — "what sextortion means for a parent" vs "for
   a survivor" is legitimately different even if the underlying facts overlap.

The duplication worth fixing is the third kind: the *same explanation of the
same fact*, re-written on multiple pages, that can silently disagree.

---

## Clusters (canonical owner → where it's echoed)

| # | Topic | Canonical owner | Also substantively appears on | Type | Recommendation | Status |
|---|---|---|---|---|---|---|
| 1 | About / how we work | `/about` | (was `/editorial-standards`) | meta | merge | **done — merged + redirected** |
| 2 | Offender prevention (Troubled Desire, Stop It Now!, Dunkelfeld, "attraction ≠ offending", anonymity) | `/for-offenders` (action) | `/prevention` (explainer), `/get-help#offender-prevention` (directory) | parallel re-explanation | keep the 3 roles, but make `/prevention` the single "why/evidence" owner and have the others link in (not restate) | **cross-linked; consolidation pending** |
| 3 | Image removal (Take It Down, StopNCII, Report Remove, 48-hour right) | `/remove-images` (step-by-step) | `/for-victims` (removal as part of the survivor path), `/sextortion` | parallel mechanics | `/for-victims` & `/sextortion` should **link** to `/remove-images` for the how-to instead of repeating the tool list | **flagged — pending** |
| 4 | Sextortion response | `/sextortion` (survival guide) | `/for-victims`, `/for-parents`, `/help-now` | partly audience-tailored, partly parallel | keep audience framing; centralize the "do-not-pay / report / remove" *mechanics* on `/sextortion` and link | pending |
| 5 | Treatment evidence (CBT/ACT, López-Pinar 2025 meta-analysis, Twohig ACT trial, effect sizes) | `/report/interventions` (Ch 05) | `/for-therapists`, `/for-offenders`, `/get-help#porn-recovery` | same studies re-cited | guides cite the *finding* + link the chapter as the source of record; avoid re-stating numbers that can drift | pending |
| 6 | Legal landscape (§2258A, ENFORCE Act, TAKE IT DOWN Act, DSA, Online Safety Act, eSafety) | `/laws` (status tracker) | `/for-tech-ceos`, `/for-compliance-teams`, `/for-attorneys`, `/for-developers`, `/for-pta-groups`, Ch 04/07, `/csam-statistics` | **widest** parallel surface | `/laws` owns dates/status; guides summarize the *implication* for their audience and link `/laws` for the canonical status (so a passed bill updates in one place) | pending — highest drift risk |
| 7 | Detection tech (PhotoDNA, PDQ/TMK, NCMEC hash matching) | `/report/technology` (Ch 06) | `/tools`, `/for-developers`, `/for-tech-ceos`, `/for-compliance-teams` | layered (different depths) — mostly OK | mostly fine (different altitudes); watch for the *same* primitive explained 4× — point to Ch 06 for the canonical description | low priority |
| 8 | The Stanford "generative-AI miscount" caveat | Ch 04 (AI-Generated) | `/about`, `/for-attorneys`, `/for-compliance-teams`, `/for-tech-ceos` | same caveat repeated ~5× | one canonical statement in Ch 04; others link to it as "the data-integrity caveat" | pending — easy win |
| 9 | Porn-recovery resources (QUITTR, Covenant Eyes, Bark, etc.) | `/apps` (directory) | `/get-help#porn-recovery`, `/for-therapists`, Ch 06 | parallel resource lists | `/apps` owns the vendor list; others link rather than maintain their own | low priority |
| 10 | Organizations (NCMEC, IWF, RAINN, Lucy Faithfull…) | `/organizations` (directory) | `/get-help`, `/for-reporting` | overlapping directories | clarify roles: `/organizations` = who's who; `/get-help` = helplines; `/for-reporting` = where to report. Some entries legitimately appear in all three | low priority |

---

## Pages you've flagged (running list)

- **`/about` + `/editorial-standards`** → **merged** into `/about` (this turn).
- **`/prevention` + `/get-help#porn-recovery` + `/for-offenders`** → cross-linked
  the offender cluster; `/get-help#porn-recovery` is a *different* audience and
  was intentionally kept separate (see below).
- **`/remove-images` + `/for-victims`** → cluster #3 above. Recommend `/for-victims`
  link to `/remove-images` for the removal mechanics rather than restating them.
  (Not merged: `/for-victims` is a broad survivor guide; `/remove-images` is a
  focused task page. Link, don't merge.)

## Intentional — leave as-is

- **Crisis numbers (988, Samaritans, Crisis Text Line, NCMEC)** repeated across
  `/get-help`, `/help-now`, `/sextortion`, `/remove-images`, `/for-victims`,
  `/for-offenders`. This is on purpose; do not consolidate.
- **`/get-help#porn-recovery` is NOT a duplicate of the offender pages.**
  Compulsive pornography use and sexual interest in minors are distinct
  audiences the site separates deliberately; cross-linking them would conflate
  and stigmatize.

---

## If/when we do eliminate: suggested order

1. **#6 Legal landscape** — highest drift risk (laws change); make `/laws` the
   single source of status and have guides link it.
2. **#8 Stanford caveat** — easy, high-visibility win; one canonical statement.
3. **#3 Image removal** + **#4 Sextortion mechanics** — link the task pages from
   the survivor/parent guides.
4. **#2 Offender prevention** — define the explainer/action/directory hierarchy.
5. **#5 Treatment evidence** — guides cite-and-link the chapter.

The rest (#7, #9, #10) are low-priority; the duplication there is mostly
appropriate depth-layering or directory overlap.
