# The Digital Harm Project

A research-synthesis website covering pornography exposure, addiction,
escalation pathways to child sexual abuse material (CSAM), AI-generated
content, therapeutic interventions, and protective technologies — built
from peer-reviewed research, government statistics, and clinical evidence.

Production: **https://digitalharm.org**

## What's in here

- `app/` — Next.js App Router
  - `/` — cover, executive summary, chapter index
  - `/report/[slug]` — chapter pages with sticky in-chapter ToC
  - `/guides` + `/for-*` — audience guides (parents, educators, survivors,
    clinicians, attorneys, developers, and more)
  - `/get-help` — confidential helplines and recovery resources
  - `/for-reporting` — where and how to report CSAM
  - `/citations` — auto-extracted, deduplicated source list
  - `/apps`, `/tools` — vetted apps and open-source defense tooling
  - `/about` — scope, method, and editorial standards
- `content/locales/<lang>/report.ts` — typed chapter and section data
- `components/` — site shell, content-block renderer, content notices
- `lib/` — citation extraction, search registry, site constants
- `scripts/` — content-invariant, search-registry, and perishable-citation guards

## Local development

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # prebuild runs the search-registry + content-invariant guards
```

Stack: Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · Source Serif 4 + Inter.

## Deployment

Hosted on Vercel. Pushes to `main` build and deploy automatically to
production at **https://digitalharm.org** via Vercel's GitHub integration.

## Editorial notes

- Chapters are content-data-driven, sourced from a single typed file per locale
- Citations are extracted from the content rather than maintained in parallel
- A persistent "Get Help" link in the header always routes to crisis resources
- Any Featured Program (e.g., the HOPE Program) is editorially selected, **not**
  a paid placement; see `/about` for the editorial policy and independence statement
- Print-friendly CSS expands link URLs inline for citation in printed copies

## Status

Build passes; static pages prerender. Last reviewed May 2026.
