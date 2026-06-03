import type { Metadata } from "next";
import Link from "next/link";
import { chapters } from "@/content/report";
import { SearchBox } from "@/components/search-box";

export const metadata: Metadata = {
  title: "Browse everything",
  description:
    "A complete topic map of The Digital Harm Project — the full research report, audience guides, recovery and crisis resources, reporting paths, and open-source tools. Find anything by topic or by who you are.",
};

type Item = { href: string; title: string; blurb: string };
type Group = { id: string; label: string; intro: string; items: Item[] };

// Curated topic map. This is the human-navigable companion to /search:
// everything on the site, grouped by what a visitor is trying to do.
const GROUPS: Group[] = [
  {
    id: "by-role",
    label: "Start with who you are",
    intro:
      "Every guide is a practical playbook written for one audience. Pick the one that fits your situation.",
    items: [
      { href: "/for-parents", title: "Parents & caregivers", blurb: "Age-by-age conversations, sextortion and grooming, device setup, and what to do if something happened." },
      { href: "/for-victims", title: "Survivors & victims", blurb: "Removal of circulating imagery, sextortion and grooming support, trauma-informed therapy." },
      { href: "/for-offenders", title: "People seeking help for themselves", blurb: "Confidentiality realities, anonymous prevention services, evidence-based treatment." },
      { href: "/for-educators", title: "Educators & school staff", blurb: "First steps for the situations schools encounter unprepared." },
      { href: "/for-therapists", title: "Therapists & clinicians", blurb: "Intake screening, CBT vs ACT, trauma modalities, the forensic-vs-therapeutic line." },
      { href: "/for-attorneys", title: "Attorneys", blurb: "Recidivism data with caveats, defensible risk instruments, AI-CSAM law." },
      { href: "/for-tech-ceos", title: "Tech founders & T&S leadership", blurb: "The legal floor, a minimum viable detection stack, personal exposure." },
      { href: "/for-compliance-teams", title: "Compliance & T&S operations", blurb: "Regulatory mapping, audit checklist, metrics, vendor due-diligence." },
      { href: "/for-developers", title: "Engineers building protection", blurb: "The ingest→hash→match→act pipeline and the one handling rule that matters." },
      { href: "/for-reporting", title: "Anyone who needs to report content", blurb: "Where to report CSAM across 114 platforms and the clearinghouses." },
    ],
  },
  {
    id: "get-help",
    label: "Get help now",
    intro: "Crisis lines, recovery programs, support, and the tools that block or remove content.",
    items: [
      { href: "/sextortion", title: "Sextortion survival guide", blurb: "Being threatened over an image? The exact steps right now — don't pay, preserve, report, remove." },
      { href: "/remove-images", title: "Get images removed", blurb: "Which free tool for your situation (Take It Down, StopNCII, Report Remove), and your 48-hour right." },
      { href: "/prevention", title: "Worried about your own thoughts?", blurb: "Confidential, anonymous help before anyone is harmed — and an honest look at what works." },
      { href: "/get-help", title: "Get Help", blurb: "Crisis lines, recovery programs, and support — regional and international." },
      { href: "/get-help/bay-area", title: "Bay Area resources", blurb: "San Francisco Bay Area treatment and support, including the HOPE Program." },
      { href: "/apps", title: "Apps & filtering tools", blurb: "Accountability software, content filters, and device-level controls." },
      { href: "/for-reporting", title: "Report abuse or CSAM", blurb: "The two reporting paths and the clearinghouses of first resort." },
    ],
  },
  {
    id: "research",
    label: "Read the research",
    intro:
      "The full report, chapter by chapter — from exposure and addiction through CSAM, AI-generated content, prevention, and recovery.",
    items: chapters.map((c) => ({
      href: `/report/${c.slug}`,
      title: `${c.number}. ${c.title}`,
      blurb: c.dek,
    })),
  },
  {
    id: "build",
    label: "Build protective technology",
    intro: "For engineers and platforms: the open-source toolkit and the implementation guide.",
    items: [
      { href: "/tools", title: "Open-source tools", blurb: "Ten building blocks for CSAM detection, blocking, and prevention." },
      { href: "/for-developers", title: "Developer guide", blurb: "How to wire detection up without mishandling the file." },
    ],
  },
  {
    id: "meta",
    label: "About this resource",
    intro: "How it was made and the sources behind every claim.",
    items: [
      { href: "/csam-statistics", title: "CSAM by the numbers", blurb: "The headline statistics, each with its year and primary source — the page to cite." },
      { href: "/laws", title: "Laws & policy tracker", blurb: "Enacted law vs proposed bills, each with status, date, and primary source." },
      { href: "/organizations", title: "Organization directory", blurb: "Who's who in child protection, mapped by function — hotlines, detection, prevention, research." },
      { href: "/about", title: "About", blurb: "What this is, the methodology, how it began as research in 2023, and the editorial standards behind every page." },
      { href: "/citations", title: "Citations", blurb: "The full source list behind every claim and statistic." },
      { href: "/guides", title: "All guides", blurb: "Every audience guide in one index." },
      { href: "/search", title: "Search", blurb: "Search the full report, guides, and resources." },
    ],
  },
];

export default function BrowsePage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-5xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            Browse everything
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5 max-w-3xl">
            The whole resource, mapped.
          </h1>
          <p className="font-serif text-[1.125rem] leading-snug text-muted max-w-2xl mb-7">
            Find anything two ways: jump to a topic below, or search across every
            chapter, guide, and resource.
          </p>
          <div className="max-w-xl">
            <SearchBox />
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-[13px]">
            {GROUPS.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="text-muted hover:text-foreground underline-offset-2 hover:underline"
              >
                {g.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-5 py-12 space-y-14">
        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold tracking-tight mb-1.5">
              {group.label}
            </h2>
            <p className="text-[14px] text-muted leading-relaxed max-w-2xl mb-6">
              {group.intro}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3.5">
              {group.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group block h-full border border-rule rounded-lg p-4 bg-paper hover:border-accent transition-colors"
                  >
                    <span className="font-serif text-[1.0625rem] font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </span>
                    <span className="block text-[13px] text-muted leading-snug mt-1">
                      {item.blurb}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </article>
  );
}
