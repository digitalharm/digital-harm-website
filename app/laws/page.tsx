import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "Laws & Policy Tracker",
  description:
    "The current state of US and international law on CSAM, online child exploitation, and intimate-image abuse — clearly separating ENACTED statutes from PROPOSED bills, each with its status, date, and primary source. Updated as the law changes.",
};

type Status = "enacted" | "proposed" | "in-force" | "phasing-in";

type Law = {
  name: string;
  jurisdiction: string;
  status: Status;
  statusDetail: string;
  what: string;
  url: string;
};

type LawGroup = { id: string; heading: string; intro: string; laws: Law[] };

const STATUS_LABEL: Record<Status, string> = {
  enacted: "Enacted",
  "in-force": "In force",
  "phasing-in": "Phasing in",
  proposed: "Proposed — not law",
};

const STATUS_STYLE: Record<Status, string> = {
  enacted: "text-[color:var(--accent)] border-[color:var(--accent)]",
  "in-force": "text-[color:var(--accent)] border-[color:var(--accent)]",
  "phasing-in": "text-[color:var(--warning)] border-[color:var(--warning)]",
  proposed: "text-subtle border-rule",
};

const GROUPS: LawGroup[] = [
  {
    id: "us-enacted",
    heading: "United States — enacted law",
    intro:
      "These are in force now. The most common public confusion in this area is treating proposed bills (below) as if they were law — these are the ones that actually are.",
    laws: [
      {
        name: "18 U.S.C. § 2258A — ESP reporting duty",
        jurisdiction: "US federal",
        status: "in-force",
        statusDetail: "Long-standing law",
        what: "Requires US electronic service providers that obtain actual knowledge of apparent CSAM to report it to NCMEC's CyberTipline. Failure-to-report penalties can reach $1M for larger providers. The backbone of US platform obligations.",
        url: "https://www.law.cornell.edu/uscode/text/18/2258A",
      },
      {
        name: "REPORT Act",
        jurisdiction: "US federal",
        status: "enacted",
        statusDetail: "Signed May 7, 2024",
        what: "Expands mandatory reporting to cover child sex trafficking and online enticement (not just CSAM), lengthens how long providers must preserve evidence, and raises failure-to-report penalties. Part of why 2024's enticement report numbers rose.",
        url: "https://www.congress.gov/bill/118th-congress/senate-bill/474",
      },
      {
        name: "TAKE IT DOWN Act",
        jurisdiction: "US federal",
        status: "enacted",
        statusDetail: "Signed May 19, 2025; platform compliance deadline ~May 2026",
        what: "Criminalizes publishing non-consensual intimate images — including AI deepfakes — and requires covered platforms to remove a reported image within 48 hours of a valid request, enforced by the FTC. The first federal removal right of its kind. (Distinct from NCMEC's separate 'Take It Down' hashing tool.)",
        url: "https://www.congress.gov/bill/119th-congress/senate-bill/146",
      },
      {
        name: "18 U.S.C. § 2255 — 'Masha's Law' (civil remedy)",
        jurisdiction: "US federal",
        status: "in-force",
        statusDetail: "Amended by the AVAA, 2018",
        what: "Lets CSAM survivors sue for civil damages with a statutory minimum of $150,000 per defendant. Paired with Paroline v. United States (2014) on restitution and the DOJ Child Pornography Victims Reserve (~$35,000 one-time defined monetary assistance). See the takedown guide for how to pursue these.",
        url: "https://www.law.cornell.edu/uscode/text/18/2255",
      },
    ],
  },
  {
    id: "us-proposed",
    heading: "United States — proposed (NOT law)",
    intro:
      "These are bills that have been introduced and debated but have not been enacted. They are frequently cited as if they were already law — they are not.",
    laws: [
      {
        name: "EARN IT Act",
        jurisdiction: "US federal",
        status: "proposed",
        statusDetail: "Introduced across multiple Congresses; never enacted",
        what: "Would narrow Section 230 immunity in relation to CSAM and create a national commission on best practices. Controversial for its potential effect on end-to-end encryption. Despite years of coverage, it has never become law.",
        url: "https://www.congress.gov/bill/118th-congress/senate-bill/1207",
      },
    ],
  },
  {
    id: "international",
    heading: "International",
    intro:
      "The other major regimes a global platform must track. Statuses differ sharply — some fully in force, some still in negotiation.",
    laws: [
      {
        name: "EU Digital Services Act (DSA)",
        jurisdiction: "European Union",
        status: "in-force",
        statusDetail: "Fully applicable since Feb 17, 2024",
        what: "Horizontal platform-governance regime: notice-and-action on illegal content (including CSAM), risk assessments and audits for very large platforms, transparency duties. Penalties up to 6% of global annual turnover.",
        url: "https://eur-lex.europa.eu/eli/reg/2022/2065",
      },
      {
        name: "EU CSA Regulation ('Chat Control')",
        jurisdiction: "European Union",
        status: "proposed",
        statusDetail: "In trilogue negotiation; not final",
        what: "Would create CSAM detection/removal obligations and, in contested drafts, detection orders that critics argue amount to client-side scanning of private messages — the core of the encryption debate. Not yet law; the scope keeps changing.",
        url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A52022PC0209",
      },
      {
        name: "UK Online Safety Act 2023",
        jurisdiction: "United Kingdom",
        status: "phasing-in",
        statusDetail: "Enacted 2023; Ofcom duties phasing in, child-safety duties live from Jul 2025",
        what: "Duties of care for user-to-user and search services, with strong child-protection requirements, age assurance, and codes of practice enforced by Ofcom. Penalties up to 10% of global turnover or £18M, with senior-manager liability.",
        url: "https://www.legislation.gov.uk/ukpga/2023/50/contents",
      },
      {
        name: "Australia Online Safety Act + under-16 social-media rule",
        jurisdiction: "Australia",
        status: "phasing-in",
        statusDetail: "OSA in force; under-16 restriction enforcement from Dec 10, 2025",
        what: "Empowers the eSafety Commissioner with removal powers and mandatory industry codes/standards; civil penalties; plus the world-first restriction on under-16 social-media accounts. Penalties up to AUD 49.5M.",
        url: "https://www.esafety.gov.au/",
      },
    ],
  },
];

export default function LawsPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/laws" />
      <header className="border-b border-rule">
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            Reference
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            Laws &amp; policy tracker
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted max-w-2xl">
            The current state of the law on CSAM, online child exploitation, and
            intimate-image abuse — with the one distinction most coverage gets
            wrong made explicit: which of these are <strong>enacted law</strong>{" "}
            and which are merely <strong>proposed bills</strong>.
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
        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold tracking-tight mb-2">
              {group.heading}
            </h2>
            <p className="text-[14px] text-muted leading-relaxed max-w-2xl mb-6">
              {group.intro}
            </p>
            <ul className="space-y-3">
              {group.laws.map((law) => (
                <li key={law.name} className="border border-rule rounded-lg p-4 bg-paper">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-1.5">
                    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] font-semibold border rounded ${STATUS_STYLE[law.status]}`}>
                      {STATUS_LABEL[law.status]}
                    </span>
                    <span className="font-mono text-[11px] text-subtle">{law.jurisdiction}</span>
                  </div>
                  <h3 className="font-serif text-[1.125rem] font-semibold text-foreground leading-tight">
                    {law.name}
                  </h3>
                  <p className="text-[12px] text-subtle mt-0.5">{law.statusDetail}</p>
                  <p className="text-[14px] text-foreground/90 leading-relaxed mt-2">{law.what}</p>
                  <a href={law.url} target="_blank" rel="noopener noreferrer" className="inline-block text-[12px] text-accent underline underline-offset-2 mt-2">
                    Primary source ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="border-t border-rule pt-8">
          <p className="text-[13px] text-muted leading-relaxed">
            This is a plain-language summary for orientation, <strong>not legal
            advice</strong>; follow the primary-source link for the authoritative
            text, and consult counsel for your situation. Compliance teams and
            platforms: see{" "}
            <Link href="/for-compliance-teams" className="text-accent underline underline-offset-2">For Compliance Teams</Link>{" "}
            and{" "}
            <Link href="/for-tech-ceos" className="text-accent underline underline-offset-2">For Tech CEOs</Link>{" "}
            for the operational detail. Related:{" "}
            <Link href="/csam-statistics" className="text-accent underline underline-offset-2">CSAM by the numbers</Link>.
          </p>
          <p className="mt-3 text-[12px] text-subtle">
            Last reviewed May 2026. Statutes change; verify status against the
            primary source before relying on it.
          </p>
        </section>
      </div>
    </article>
  );
}
