import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "Guides by Role",
  description:
    "Audience-specific guides drawing on the project's evidence base — practical playbooks for school staff, people seeking help, and attorneys representing clients in CSAM cases.",
};

type Guide = {
  href: string;
  audience: string;
  title: string;
  summary: string;
  details: string[];
};

const guides: Guide[] = [
  {
    href: "/for-parents",
    audience: "Parents & caregivers",
    title: "For Parents",
    summary:
      "A calm, practical guide for protecting your child without needing to be a tech expert — built on the finding that an open, non-shaming relationship is the single biggest protective factor.",
    details: [
      "Age-by-age conversations about pornography and online sexual risk, from under-5 through the teen years",
      "Sextortion — the threat that has surged against teens — with the exact script to give your child in advance and the warning signs to watch",
      "How grooming actually works, and how the same open relationship defends against it",
      "Device setup as guardrails (not a substitute), and a clear what-to-do path if something happened: preserve, report, take it down, and tend to the child",
    ],
  },
  {
    href: "/for-pta-groups",
    audience: "PTA & parent-teacher groups",
    title: "For PTA Groups",
    summary:
      "The organizer's playbook for the PTA president who has become the first person scared parents ask about AI and child safety — how to run one good parent conversation and route the whole community, without being an expert.",
    details: [
      "The genuinely new risk, named plainly: AI-made sexual images created by kids, about kids — and why it's a crime",
      "Why 'just ban AI' isn't a plan, and the guardrails-plus-literacy framing to bring to your school",
      "A ready-to-run 75-minute parent-night agenda, and language that informs without clearing the room",
      "The questions parents will ask you with short answers, community device ground rules, and what to do if it happens at your school",
    ],
  },
  {
    href: "/for-reporting",
    audience: "Anyone who finds CSAM or abuse",
    title: "For Reporting Content",
    summary:
      "A verified directory of where to report child sexual abuse material and abusive content across 114 platforms and the clearinghouses — each with its reporting channel, illegal-content policy, and US ESP reporting-duty status. If you don't know or don't trust the platform, report straight to a clearinghouse.",
    details: [
      "The two reporting paths: a platform's own abuse channel, or a clearinghouse like NCMEC's CyberTipline that routes to law enforcement and to the platforms",
      "114 platforms across social, messaging, AI image and video generators, cloud storage, forums, infrastructure, adult, gaming, and app stores and payment",
      "Clearinghouses of first resort: NCMEC, IWF, Cybertip.ca, INHOPE, the Australian eSafety Commissioner, and the FBI",
      "Safety notes: you don't need to confirm content is CSAM before reporting, and never download or screenshot suspected material to \"preserve evidence\"",
    ],
  },
  {
    href: "/for-victims",
    audience: "Survivors and victims",
    title: "For Survivors",
    summary:
      "Survivor-centered guidance for people who have experienced sexual abuse, image-based abuse, sextortion, or grooming — at any point, recent or historical.",
    details: [
      "Five things people often need to hear first, then practical paths through removal, reporting, and therapy",
      "Take It Down and StopNCII.org for circulating imagery, with honest framing about what can and can't be removed",
      "Trauma-informed care: the modalities (EMDR, TF-CBT, IFS, somatic, prolonged exposure) and the directories that find them",
      "Section for the partners, parents, and friends supporting a survivor — including the secondary-trauma research",
    ],
  },
  {
    href: "/for-educators",
    audience: "School staff",
    title: "For Educators",
    summary:
      "Practical playbooks for administrators, teachers, and school counselors handling the situations they're likely to encounter unprepared.",
    details: [
      "Six common scenarios with first steps, what not to do, sample language, who to involve, and refer-to links",
      "Pornography on a school device · image-based abuse · sextortion · AI deepfakes · grooming · compulsive use",
      "Universal principles, mandatory-reporting context, curriculum recommendations",
    ],
  },
  {
    href: "/for-offenders",
    audience: "People seeking help",
    title: "For People Seeking Help",
    summary:
      "Honest, non-judgmental guidance for people concerned about their own sexual thoughts, struggling with CSAM use, or already facing legal trouble. The most important first step is rarely the one shame is pointing at.",
    details: [
      "Confidentiality realities: what is privileged, what triggers mandatory reporting, and how anonymous prevention services close the gap",
      "Steps before charges: Troubled Desire, Stop It Now!, evidence-based treatment (CBT and ACT)",
      "Steps after charges: criminal defense first, treatment for mitigation, the Risk-Need-Responsivity model",
      "Honest answers to the questions people in this situation actually ask",
    ],
  },
  {
    href: "/for-tech-ceos",
    audience: "Founders, CTOs, T&S leadership",
    title: "For Tech CEOs",
    summary:
      "Operational guide for platforms that host user content and teams building AI image and video generation. What the legal floor actually requires, the minimum viable detection stack, and where executives face personal exposure.",
    details: [
      "Section 230's carve-out for federal child exploitation law (18 U.S.C. § 2258A), ENFORCE Act, TAKE IT DOWN Act",
      "Minimum viable stack with PhotoDNA, NCMEC Hash Sharing API, CyberTipline reporting, Cloudflare's free scanner — and the open-source PDQ/TMK alternative",
      "Scale-up layer: Thorn Safer, Hive AI, Project Arachnid Shield API",
      "AI-generation-specific obligations: training-data hygiene, prompt and output filtering, provenance signals, criminal-equivalent treatment under the ENFORCE Act",
      "Personal-liability landscape, the Apple NeuralHash cautionary tale, and a what-to-do-tomorrow checklist",
    ],
  },
  {
    href: "/for-developers",
    audience: "Engineers building protection",
    title: "For Developers",
    summary:
      "The hands-on implementation companion to the technology chapter and the open-source toolkit — how to actually wire up CSAM detection, and the one handling rule that turns good intentions into criminal exposure if you get it wrong.",
    details: [
      "The four-stage pipeline (ingest, hash, match, act) and where each stage runs",
      "Perceptual vs cryptographic hashing: PhotoDNA, the open PDQ/TMK alternative, and the hashkit crate",
      "Matching the NCMEC and IWF hash lists with multi-index hashing — never building your own corpus",
      "Handling a match without mishandling the file, AI-generation safeguards, testing without real material, and a first-week build sequence",
    ],
  },
  {
    href: "/for-therapists",
    audience: "Licensed mental-health clinicians",
    title: "For Therapists",
    summary:
      "Clinical guide for psychologists, LMFTs, LCSWs, psychiatrists, and counselors with patients across problematic pornography use, sexual-trauma recovery, pre-offense concerns, or active CSAM legal exposure.",
    details: [
      "The screening question to add at intake and the confidentiality conversation to have in session one",
      "CBT vs ACT for problematic pornography use, with effect sizes from the 2025 meta-analysis",
      "Trauma-informed modalities (EMDR, TF-CBT, IFS, somatic, prolonged exposure) and the phase-based model",
      "The therapeutic-vs-forensic role distinction, the Dunkelfeld/Troubled Desire prevention model, pharmacology, and clinician self-care",
    ],
  },
  {
    href: "/for-compliance-teams",
    audience: "Compliance, T&S ops, legal, audit",
    title: "For Compliance Teams",
    summary:
      "The documentation, audit, and process companion to the executive guide. Regulatory mapping across US, EU, UK, and Australia; the metrics that hold up at audit; vendor due-diligence; records retention; a 90-day buildout sequence for teams starting late.",
    details: [
      "Multi-jurisdictional regulatory map: 18 U.S.C. § 2258A, ENFORCE Act, TAKE IT DOWN Act, DSA, Online Safety Act, Australian eSafety",
      "Audit checklist: detection coverage matrix, hash-list provenance, CyberTipline reporting evidence, takedown SLA, moderator wellbeing, records retention, incident-response runbook",
      "Metrics that hold up: TTD/TTT/TTR, false-positive rates, appeals reversal, categorization caveats per the Stanford CIS finding",
      "Vendor due-diligence questionnaire and the eight internal policy documents auditors expect to find",
    ],
  },
  {
    href: "/for-attorneys",
    audience: "Defense counsel & prosecutors",
    title: "For Attorneys",
    summary:
      "Evidence-based context for attorneys representing clients in CSAM cases — recidivism data with the necessary caveats, risk-assessment instruments that hold up at trial vs. those that don't, treatment programs that matter for mitigation, and the AI-generated CSAM legal landscape.",
    details: [
      "The Clark et al. 2025 recidivism numbers paired with the Seto self-report gap",
      "Static-99R and Stable-2007 as defensible; AASI-3 validity controversies for cross-examination",
      "Specialized treatment programs (Inform Plus, i-SOTP, CEM-COPE, Dunkelfeld) vs. generic SOTPs",
      "ENFORCE Act, TAKE IT DOWN Act, US v. Anderegg, and the Stanford CIS finding on CyberTipline data integrity",
    ],
  },
];

// Each guide is the operational companion to a recommendation in the research.
// This maps a guide back to that recommendation, making the two congruent and
// bidirectionally linked (the recommendations link out to the guides in Ch08).
const REPORT_ANCHOR: Record<string, string> = {
  "/for-parents": "/report/recommendations#families",
  "/for-victims": "/report/recommendations#survivors",
  "/for-offenders": "/report/recommendations#individuals",
  "/for-educators": "/report/recommendations#educators",
  "/for-reporting": "/report/resources#reporting",
  "/for-therapists": "/report/recommendations#clinicians",
  "/for-tech-ceos": "/report/recommendations#technology-companies",
  "/for-developers": "/report/recommendations#technology-companies",
  "/for-compliance-teams": "/report/recommendations#technology-companies",
  "/for-attorneys": "/report/recommendations#attorneys",
};

export default function GuidesPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/guides" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            By role
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Guides for the people most often called to act.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            The research sets out what the evidence says, and{" "}
            <Link href="/report/recommendations" className="text-accent underline underline-offset-2">
              Chapter 08: Recommendations
            </Link>{" "}
            distills it into recommendations by audience. These guides are the operational
            companions to those recommendations — the step-by-step version for the people most
            likely to need it in the moment, from parents and survivors to school staff,
            clinicians, platform teams, and attorneys.
          </p>
        </div>
      </header>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
            By situation
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            Facing something right now?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Link
              href="/sextortion"
              className="block border border-rule rounded-md p-5 bg-paper hover:border-accent transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-crisis font-semibold mb-2">
                Sextortion
              </p>
              <h3 className="font-serif text-lg font-semibold mb-1.5">
                Sextortion: a survival guide
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                If someone is threatening to share intimate images: the immediate steps, why
                not to pay, and how to report and remove.
              </p>
            </Link>
            <Link
              href="/remove-images"
              className="block border border-rule rounded-md p-5 bg-paper hover:border-accent transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                Image removal
              </p>
              <h3 className="font-serif text-lg font-semibold mb-1.5">
                Remove an intimate image
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Step-by-step removal with the right free tool &mdash; Take It Down, StopNCII,
                Report Remove &mdash; and your 48-hour takedown right.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <nav className="border-b border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-6 md:py-7">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-4">
            Jump to a guide
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {guides.map((g) => (
              <li key={g.href}>
                <a
                  href={`#${g.href.replace(/^\//, "")}`}
                  className="group flex h-full items-center gap-2 rounded-md border border-rule bg-background px-3.5 py-2.5 hover:border-accent hover:bg-accent-soft/40 transition-colors"
                >
                  <span className="flex-1 min-w-0">
                    <span className="block text-[0.875rem] font-medium text-foreground leading-snug group-hover:text-accent transition-colors">
                      {g.title}
                    </span>
                    <span className="block text-[0.6875rem] text-subtle mt-0.5 leading-tight">
                      {g.audience}
                    </span>
                  </span>
                  <span
                    className="shrink-0 text-subtle group-hover:text-accent transition-colors text-sm"
                    aria-hidden
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20">
        <ol className="border-t border-rule">
          {guides.map((g) => (
            <li
              key={g.href}
              id={g.href.replace(/^\//, "")}
              className="border-b border-rule scroll-mt-20"
            >
              <Link
                href={g.href}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 items-start py-10 md:py-12 -mx-5 px-5 hover:bg-paper transition-colors"
              >
                <div className="md:col-span-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-1.5">
                    For
                  </p>
                  <p className="font-serif text-base text-foreground leading-snug">
                    {g.audience}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold text-foreground leading-tight tracking-tight group-hover:text-accent transition-colors mb-3">
                    {g.title}
                  </h2>
                  <p className="text-[1.0625rem] text-muted leading-relaxed mb-4 max-w-2xl">
                    {g.summary}
                  </p>
                  <ul className="space-y-1.5">
                    {g.details.map((d) => (
                      <li
                        key={d}
                        className="pl-5 relative text-[0.875rem] text-foreground/85 leading-relaxed"
                      >
                        <span
                          className="absolute left-0 top-2.5 w-2 h-px bg-subtle"
                          aria-hidden
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium group-hover:bg-accent transition-colors">
                    Read the Guide
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
              {REPORT_ANCHOR[g.href] && (
                <p className="pb-8 md:pb-10 -mt-2 text-[13px] text-subtle">
                  <Link
                    href={REPORT_ANCHOR[g.href]}
                    className="hover:text-accent underline underline-offset-2"
                  >
                    ↘ The recommendation behind this guide, in the research
                  </Link>
                </p>
              )}
            </li>
          ))}
        </ol>

        <section className="mt-16">
          <p className="text-[11px] uppercase tracking-[0.18em] text-subtle font-semibold mb-5">
            Beyond the guides
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
          <Link
            href="/get-help"
            className="block border border-rule rounded-md p-5 bg-paper hover:border-accent transition-colors"
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-crisis font-semibold mb-2">
              Direct help, no playbook
            </p>
            <h3 className="font-serif text-lg font-semibold mb-1.5">
              Get Help: crisis lines and recovery resources
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Confidential helplines for crisis, pornography recovery, offender prevention,
              parents and families, and survivors.
            </p>
          </Link>
          <Link
            href="/"
            className="block border border-rule rounded-md p-5 bg-paper hover:border-accent transition-colors"
          >
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
              The underlying research
            </p>
            <h3 className="font-serif text-lg font-semibold mb-1.5">
              The Digital Harm Project
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Eight chapters synthesizing the peer-reviewed research, clinical evidence, and
              policy landscape these guides draw on.
            </p>
          </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
