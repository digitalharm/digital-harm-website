import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CSAM by the Numbers",
  description:
    "An authoritative, fully-cited statistics hub on child sexual abuse material and online child exploitation — CyberTipline report volumes, AI-generated CSAM trends, sextortion growth, and industry detection — each figure with its year and primary source (NCMEC, IWF, Thorn, Tech Coalition, WeProtect).",
};

type Stat = {
  figure: string;
  label: string;
  source: string;
  year: string;
  note?: string;
};

type StatGroup = {
  id: string;
  heading: string;
  intro: string;
  stats: Stat[];
};

// Every figure carries its year + primary source. When a number changes,
// update it here — this page is the canonical "state of the threat" reference
// the rest of the site links to. Do not add a statistic without a citable source.
const GROUPS: StatGroup[] = [
  {
    id: "reporting",
    heading: "Reporting volume (NCMEC CyberTipline)",
    intro:
      "The CyberTipline is the United States' congressionally-mandated clearinghouse for reports of online child sexual exploitation; US electronic service providers must report apparent CSAM to it under 18 U.S.C. § 2258A.",
    stats: [
      {
        figure: "20.5 million",
        label: "CyberTipline reports received in 2024",
        source: "NCMEC CyberTipline Report",
        year: "2024",
        note: "Down from a record 36.2M in 2023. The decline is largely an artifact of a 2024 report-bundling change (consolidating viral-meme reports), not a fall in abuse; adjusted for distinct incidents, 2024 is ~29.2M.",
      },
      {
        figure: "62.9 million",
        label: "Files (images, videos, other) in 2024 reports",
        source: "NCMEC CyberTipline Report",
        year: "2024",
      },
      {
        figure: "84%",
        label: "Of 2024 reports resolved to a location outside the US",
        source: "NCMEC",
        year: "2024",
      },
      {
        figure: "~21.3 million",
        label: "Reports in 2025 (NCMEC 'first look')",
        source: "NCMEC 2025 preliminary",
        year: "2025",
        note: "Preliminary figure published in early 2026; NCMEC referred 18.8M+ reports to law enforcement.",
      },
    ],
  },
  {
    id: "ai-csam",
    heading: "AI-generated CSAM",
    intro:
      "Generative AI has introduced a new and fast-growing category of abuse imagery. Read these figures carefully: a report flagged 'Generative AI' does not by itself confirm the file is AI-generated CSAM — the classification is ambiguous, and figures should not be conflated (see the accuracy note below).",
    stats: [
      {
        figure: "+1,325%",
        label: "Growth in generative-AI CyberTipline reports, 2023→2024 (4,700 → 67,000)",
        source: "NCMEC",
        year: "2024",
      },
      {
        figure: "245 reports / 7,644 images",
        label: "AI-generated CSAM the IWF actioned in 2024 (+380% vs 51 reports in 2023)",
        source: "IWF Annual Data & Insights Report",
        year: "2024",
        note: "7,063 were realistic enough to be treated as 'real' CSAM under UK law; 98% depicted girls. The IWF confirmed the first realistic AI-generated CSAM videos in 2024.",
      },
      {
        figure: "158,000",
        label: "Files categorized as generative-AI CSAM by NCMEC since 2023",
        source: "NCMEC 2025 preliminary",
        year: "2023–2025",
      },
    ],
  },
  {
    id: "sextortion",
    heading: "Sextortion & online enticement",
    intro:
      "Financial sextortion — coercing a minor into sending an intimate image, then extorting them — has grown faster than almost any other category and disproportionately targets teen boys.",
    stats: [
      {
        figure: "+192%",
        label: "Growth in online-enticement reports, 2023→2024 (186,000 → 546,000+)",
        source: "NCMEC",
        year: "2024",
        note: "Partly reflects the REPORT Act (signed May 2024) mandating enticement and trafficking reporting.",
      },
      {
        figure: "1.4 million",
        label: "Online-enticement reports in 2025 (+158% vs 2024)",
        source: "NCMEC 2025 preliminary",
        year: "2025",
      },
      {
        figure: "+323%",
        label: "Growth in child-sex-trafficking reports in 2025 (113,500+)",
        source: "NCMEC 2025 preliminary",
        year: "2025",
      },
    ],
  },
  {
    id: "scale",
    heading: "Scale of removal & detection",
    intro:
      "What the hotlines and industry detection systems handle gives a sense of the underlying volume of material in circulation.",
    stats: [
      {
        figure: "291,270",
        label: "Webpages of confirmed CSAM the IWF actioned in 2024 (a record, +5% vs 2023)",
        source: "IWF Annual Data & Insights Report",
        year: "2024",
        note: "Each webpage can contain one to thousands of images or videos. The IWF assessed a report every 74 seconds.",
      },
      {
        figure: ">50%",
        label: "Share of CSAM webpages the IWF finds that are hosted in the EU",
        source: "IWF",
        year: "2024",
        note: "The Netherlands is the single most-abused hosting location.",
      },
      {
        figure: "4.16 million",
        label: "Suspected CSAM files Thorn's Safer detected across partner platforms in 2024",
        source: "Thorn Safer Impact Report",
        year: "2024",
        note: "1,979,406 known files (hash matching) + 2,237,225 potential novel files (AI classifiers), across 112.3 billion files processed and 60+ platforms.",
      },
      {
        figure: "228.8 billion",
        label: "Files Thorn's Safer has processed cumulatively since 2019 (6.48M CSAM detected)",
        source: "Thorn Safer Impact Report",
        year: "2019–2024",
      },
    ],
  },
];

export default function CsamStatisticsPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            State of the threat
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            CSAM by the numbers
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted max-w-2xl">
            The headline statistics on child sexual abuse material and online
            child exploitation — each figure with the year it describes and the
            primary source that published it. Numbers in this space are easy to
            misquote; we cite carefully and flag the caveats.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-[13px]">
            {GROUPS.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="text-muted hover:text-foreground underline-offset-2 hover:underline">
                {g.heading}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-5 py-10 space-y-14">
        <div className="border border-warning/40 bg-warning/5 rounded-lg p-4 text-[13.5px] leading-relaxed">
          <strong className="text-foreground">Read these numbers responsibly.</strong>{" "}
          A CyberTipline report flagged “Generative AI” does not necessarily mean
          the file is AI-generated CSAM — the category is ambiguous, and reporting
          on it has sometimes conflated flag counts with confirmed AI CSAM
          (Stanford Internet Observatory / Riana Pfefferkorn, 2025–26). Report
          counts also reflect changes in reporting law and platform tooling, not
          only changes in underlying abuse. Where that matters, we say so.
        </div>

        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold tracking-tight mb-2">
              {group.heading}
            </h2>
            <p className="text-[14px] text-muted leading-relaxed max-w-2xl mb-6">
              {group.intro}
            </p>
            <ul className="space-y-3">
              {group.stats.map((s, i) => (
                <li key={i} className="border border-rule rounded-lg p-4 bg-paper">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="font-serif text-2xl md:text-[1.75rem] font-semibold text-accent tabular-nums">
                      {s.figure}
                    </span>
                    <span className="text-[15px] text-foreground font-medium">
                      {s.label}
                    </span>
                  </div>
                  {s.note && (
                    <p className="text-[13px] text-muted leading-snug mt-2">{s.note}</p>
                  )}
                  <p className="font-mono text-[11px] text-subtle mt-2">
                    {s.source} · {s.year}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="border-t border-rule pt-8">
          <h2 className="font-serif text-xl font-semibold tracking-tight mb-3">
            Sources & further reading
          </h2>
          <p className="text-[14px] text-muted leading-relaxed mb-4">
            Every figure above is drawn from the primary publisher&apos;s own
            reporting. Go to the source for full methodology:
          </p>
          <ul className="space-y-2 text-[14px]">
            {[
              ["NCMEC CyberTipline data", "https://www.missingkids.org/cybertiplinedata"],
              ["Internet Watch Foundation — Annual Reports", "https://www.iwf.org.uk/about-us/why-we-exist/our-research/"],
              ["Thorn — Safer Impact Report", "https://www.thorn.org/research/"],
              ["Tech Coalition — Lantern", "https://www.technologycoalition.org/lantern"],
              ["WeProtect Global Alliance — Global Threat Assessment", "https://www.weprotect.org/global-threat-assessment-23/"],
              ["Stanford Cyber Policy Center — Riana Pfefferkorn on CyberTipline data", "https://cyber.fsi.stanford.edu/publication/how-fix-online-child-exploitation-reporting-system"],
            ].map(([name, url]) => (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
                  {name} ↗
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[14px] text-subtle">
            Related:{" "}
            <Link href="/report/ai-generated" className="text-accent underline underline-offset-2">AI-generated CSAM chapter</Link>{" · "}
            <Link href="/for-reporting" className="text-accent underline underline-offset-2">Where to report</Link>{" · "}
            <Link href="/citations" className="text-accent underline underline-offset-2">All citations</Link>
          </p>
          <p className="mt-4 text-[12px] text-subtle">Last reviewed May 2026.</p>
        </section>
      </div>
    </article>
  );
}
