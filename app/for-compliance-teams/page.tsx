import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "For Compliance Teams",
  description:
    "Documentation, audit, and process guidance for compliance officers, trust-and-safety operations, legal teams, and internal audit at platforms with CSAM exposure. Regulatory mapping across US, EU, UK, and Australia; the metrics that hold up at audit; vendor due-diligence checklist; records-retention and incident-response frameworks.",
};

type Topic = {
  id: string;
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
};

const topics: Topic[] = [
  {
    id: "regulatory-map",
    eyebrow: "01 · Regulatory map",
    heading: "What you're complying with, by jurisdiction.",
    body: (
      <>
        <p>
          The CSAM compliance surface is unusually multilateral. A platform with global users
          is simultaneously subject to several non-aligned regimes. Map your exposure to the
          jurisdictions where you have users, employees, or counterparties — not just where
          you are incorporated.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>United States.</strong>{" "}18 U.S.C. § 2258A mandates reporting of apparent
            CSAM to NCMEC by US-based providers. The{" "}
            <a
              href="https://www.thorn.org/blog/the-enforce-act-addressing-ai-generated-csam-offenses/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              ENFORCE Act
            </a>{" "}
            (December 2025) and{" "}
            <a
              href="https://www.congress.gov/bill/119th-congress/senate-bill/146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              TAKE IT DOWN Act
            </a>{" "}
            (May 2025) extend criminal-equivalent treatment to AI-generated CSAM and impose a
            48-hour platform takedown requirement for non-consensual intimate imagery. Section
            230 does not immunize against federal child exploitation law.
          </li>
          <li>
            <strong>European Union.</strong>{" "}The{" "}
            <a
              href="https://digital-strategy.ec.europa.eu/en/policies/digital-services-act-package"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Digital Services Act (DSA)
            </a>{" "}
            applies to all online services serving EU users — illegal-content takedown
            obligations, transparency reports, risk assessments for Very Large Online
            Platforms. The EU&apos;s proposed CSAM Regulation backed down on mandatory client-side
            scanning in November 2025 but retained mitigation requirements. Treat as live and
            evolving.
          </li>
          <li>
            <strong>United Kingdom.</strong>{" "}The{" "}
            <a
              href="https://www.gov.uk/government/publications/online-safety-act-explainer/online-safety-act-explainer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Online Safety Act 2023
            </a>{" "}
            requires user-to-user services to assess CSAM risk, take proactive measures, and
            cooperate with Ofcom. Enforcement opened in mid-2025 with fines up to £18M or 10%
            of global revenue. The Crime and Policing Bill (February 2025) creates a new
            offense for &ldquo;CSA image-generator&rdquo; tools.
          </li>
          <li>
            <strong>Australia.</strong>{" "}The{" "}
            <a
              href="https://www.esafety.gov.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              eSafety Commissioner
            </a>{" "}
            issues legally enforceable transparency notices under the Online Safety Act —
            already invoked against Apple, Google, Meta, Microsoft, Discord, WhatsApp, Snap,
            and Skype. Industry codes for CSAM detection took effect for messaging and
            file-sharing services in 2024.
          </li>
          <li>
            <strong>Canada, Germany, France, Singapore</strong>{" "}and others each maintain their
            own reporting and takedown frameworks. The pattern is convergent toward
            criminal-equivalent treatment of AI-generated CSAM, mandatory reporting, and
            short takedown SLAs. Build for the strictest regime you face; relax only where
            you can document why.
          </li>
        </ul>
        <p>
          For deep context on the legislative trajectory, see{" "}
          <Link href="/report/prevention" className="text-accent underline underline-offset-2">
            Chapter 07: Prevention Strategies
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "audit-checklist",
    eyebrow: "02 · Audit checklist",
    heading: "What an external assessor will ask to see.",
    body: (
      <>
        <p>
          Whether the audit is internal, customer-driven (enterprise contracts increasingly
          require T&amp;S maturity attestation), or regulator-led, the artifacts you produce
          should already exist. The minimum production-readiness checklist:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Detection coverage matrix.</strong>{" "}Per content type (image, video, text,
            audio, AI-generated) and per pipeline stage (upload, storage-at-rest, sharing,
            export). Coverage should map to specific detection technologies — PhotoDNA, PDQ,
            TMK+PDQF, Safer, Hive, Project Arachnid Shield — with documented gaps where they
            exist.
          </li>
          <li>
            <strong>Hash list provenance and refresh cadence.</strong>{" "}Document which hash
            lists you query against (NCMEC, IWF, Project Arachnid, SaferList), at what
            frequency, and the last successful sync timestamp. Auditors will ask for the
            sync log.
          </li>
          <li>
            <strong>CyberTipline reporting evidence.</strong>{" "}Volume per period, time-to-report
            distribution, the named primary and backup reporters, the escalation path, and a
            sample (redacted) report walkthrough. The 18 U.S.C. § 2258A reporting requirement
            is the minimum demonstrable bar in the US.
          </li>
          <li>
            <strong>Takedown SLA evidence.</strong>{" "}Time-to-takedown distribution for
            confirmed CSAM, for non-consensual intimate imagery (TAKE IT DOWN Act 48-hour
            requirement), and for general adult content. Document misses and remediation.
          </li>
          <li>
            <strong>Moderator wellbeing program.</strong>{" "}Clinical-grade support contracts,
            exposure limits, rotation policy, screening-on-hire, and trauma-symptom tracking.
            This is now a contractual and reputational checkpoint, not optional culture work.
          </li>
          <li>
            <strong>Records retention.</strong>{" "}Preservation schedule for evidence (matching
            law-enforcement preservation requests), report copies, training logs, vendor
            agreements, and DPIA / PIA outcomes for any client-side or server-side scanning.
          </li>
          <li>
            <strong>Incident-response runbook.</strong>{" "}Triggers, ownership, communication
            plan (internal, external, regulator), notification thresholds, and post-incident
            review. The runbook should be tested in tabletop exercises at least annually.
          </li>
          <li>
            <strong>Training records.</strong>{" "}Annual completion certificates for moderators,
            engineers, legal, and executive teams. Include role-specific tracks; generic
            anti-harassment training does not satisfy this.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "metrics",
    eyebrow: "03 · Metrics that hold up",
    heading: "The numbers to track internally and report externally.",
    body: (
      <>
        <p>
          Vanity metrics (&ldquo;total content moderated&rdquo;) are weak. The metrics that
          stand up at audit and in transparency reports are operational, ratio-based, and
          contextualized.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Detection-pipeline volume by class.</strong>{" "}Hash matches vs AI-classifier
            matches vs human review, broken down by content type. Reveals where your stack is
            weakest.
          </li>
          <li>
            <strong>Time-to-detection (TTD).</strong>{" "}Wall-clock between upload and detection.
            For confirmed CSAM, sub-hour TTDs are the industry expectation. Track the p50
            and p99.
          </li>
          <li>
            <strong>Time-to-takedown (TTT).</strong>{" "}Between detection and content removal.
            Hard regulatory limits exist (TAKE IT DOWN Act, DSA, Online Safety Act); report
            both the SLA and your actual distribution.
          </li>
          <li>
            <strong>Time-to-report (TTR).</strong>{" "}Between detection and CyberTipline
            submission. Expect this to be tighter than TTT.
          </li>
          <li>
            <strong>False-positive rate.</strong>{" "}Reviewed and confirmed false positives over
            total flags, per detection technology. Helps you tune classifier sensitivity and
            documents reasonableness for cases where account action was taken in error.
          </li>
          <li>
            <strong>Appeals volume and reversal rate.</strong>{" "}What percentage of account
            actions are appealed and what percentage are reversed. Required under DSA;
            useful for procedural-fairness arguments under most regimes.
          </li>
          <li>
            <strong>Moderator exposure metrics.</strong>{" "}Average hours of exposure per
            reviewer per week, rotation compliance, and self-reported wellbeing measures.
            Increasingly cited in employment litigation.
          </li>
          <li>
            <strong>Categorization caveats.</strong>{" "}The Stanford CIS letter on NCMEC
            reporting demonstrated that approximately 80% of &ldquo;Generative AI&rdquo;
            CyberTipline reports involved no AI-generated CSAM &mdash; many were hash hits to
            known CSAM in AI training data. When you report aggregate numbers, document the
            categorization carefully (
            <a
              href="https://cyberlaw.stanford.edu/letter-to-ncmec-about-ai-csam-report-statistics/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Stanford CIS
            </a>
            ).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "vendor-diligence",
    eyebrow: "04 · Vendor due diligence",
    heading: "What to ask before signing.",
    body: (
      <>
        <p>
          When you onboard a detection vendor (Thorn, Hive, NetClean, others), the diligence
          questions go beyond accuracy claims and pricing. Ask for evidence on:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Hash list source and verification chain.</strong>{" "}Where the underlying
            CSAM hash list comes from, who has verified it, and the refresh cadence. NCMEC,
            IWF, and Project Arachnid integrations are the gold standard.
          </li>
          <li>
            <strong>Model training documentation.</strong>{" "}For AI classifiers, the training
            data sources, the validation methodology, and the false-positive / false-negative
            characterization on independent test sets. Public-benchmark claims should be
            cross-referenced.
          </li>
          <li>
            <strong>Data residency and processing scope.</strong>{" "}Where your content is
            processed, what metadata is retained, and how long. EU and UK contracts will
            require GDPR-compliant processing terms; California and other state laws are
            converging on similar standards.
          </li>
          <li>
            <strong>Security and access controls.</strong>{" "}SOC 2 Type II or equivalent;
            employee access logs to your content; encryption posture at rest and in transit;
            incident notification commitments.
          </li>
          <li>
            <strong>Government request handling.</strong>{" "}The vendor&apos;s policy for
            responding to subpoenas, warrants, and national-security requests against the
            data they hold on your behalf. Transparency commitments.
          </li>
          <li>
            <strong>Sunset and offboarding.</strong>{" "}Data destruction commitments, hash list
            access after contract end, and continuity if the vendor is acquired.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "policy-architecture",
    eyebrow: "05 · Policy architecture",
    heading: "The internal documents that should exist.",
    body: (
      <>
        <p>
          Auditors and regulators expect a layered set of internal documents. The minimum
          set:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Acceptable Use Policy.</strong>{" "}User-facing; specific prohibitions on
            CSAM, NCII, sexual content involving minors, and AI-generated sexual content of
            minors or non-consenting adults. Plain English, multiple languages where you
            serve users at scale.
          </li>
          <li>
            <strong>Content Moderation Policy.</strong>{" "}Internal-facing; the rules that
            moderators apply, with examples, edge cases, and escalation paths. Versioned;
            changes documented with rationale.
          </li>
          <li>
            <strong>Detection-and-reporting Standard Operating Procedure.</strong>{" "}The
            workflow from automated detection through human review to CyberTipline reporting.
            Named roles, named timelines, named tools.
          </li>
          <li>
            <strong>Law Enforcement Response Policy.</strong>{" "}How you handle subpoenas,
            warrants, emergency disclosure requests, and 2258A inquiries. Owned by counsel,
            documented for legal-process clarity.
          </li>
          <li>
            <strong>Moderator Wellbeing Program.</strong>{" "}The exposure limits, support
            services, screening process, and clinical contracts. Owned jointly by HR and
            T&amp;S leadership.
          </li>
          <li>
            <strong>Data Protection Impact Assessment (DPIA / PIA).</strong>{" "}Required under
            DSA and UK GDPR for any content scanning, particularly client-side or end-to-end.
            Should document the privacy / safety trade-off explicitly and the proportionality
            analysis.
          </li>
          <li>
            <strong>Transparency Reporting Standard.</strong>{" "}What you publish, on what
            cadence, with what level of categorization detail. Tracks both regulatory
            obligation (DSA quarterly) and voluntary disclosure.
          </li>
          <li>
            <strong>Records Retention Schedule.</strong>{" "}Per category (reports, evidence,
            training records, vendor agreements, incident logs) with legal-basis-for-retention
            and destruction triggers.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "governance-accountability",
    eyebrow: "06 · Governance and accountability",
    heading: "Who owns child safety, and who they answer to.",
    body: (
      <>
        <p>
          Increasingly a regulator&apos;s first question is not about your tooling but about
          your org chart: who is the named, accountable owner of child-safety enforcement,
          and where does that function report? The Australian eSafety Commissioner&apos;s
          mandatory transparency notices probe exactly this, and{" "}
          <Link
            href="/report/technology#platform-safety-orgs"
            className="text-accent underline underline-offset-2"
          >
            Chapter 06&apos;s comparison of TikTok, Meta, and X governance
          </Link>{" "}
          shows how differently large platforms answer it. What an assessor expects to see
          documented:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>A named accountable executive.</strong>{" "}One person &mdash; by role and
            by name &mdash; accountable for detection, CyberTipline reporting, and
            child-safety policy. &ldquo;The safety engineering team&rdquo; is not an answer
            regulators accept; a platform that effectively gave that answer drew a
            A$650,000 Australian Federal Court penalty in May 2026 for failing to fully
            comply with a transparency notice.
          </li>
          <li>
            <strong>A documented reporting line.</strong>{" "}An org chart showing where child
            safety sits and how escalation reaches the CEO. Note whether the function
            reports through legal: the duty to detect and report can conflict with
            legal&apos;s mandate to limit liability, and an assessor looks for that tension
            to be managed, not ignored.
          </li>
          <li>
            <strong>Board-level oversight, at scale.</strong>{" "}A safety, risk, or audit
            committee with a documented child-safety remit, meeting minutes, and a reporting
            cadence. For smaller companies the equivalent is a documented founder or CEO
            review on a fixed schedule.
          </li>
          <li>
            <strong>Continuity through turnover.</strong>{" "}The accountable role defined
            independently of the current officeholder, so an executive departure does not
            orphan the function. Document the interim-coverage plan.
          </li>
        </ul>
        <p>
          This is the compliance-side mirror of the structural advice in the{" "}
          <Link
            href="/for-tech-ceos#where-accountability-sits"
            className="text-accent underline underline-offset-2"
          >
            tech-CEO guide
          </Link>
          : the CEO makes the structural decision; compliance documents it, tests it, and
          can produce it on demand.
        </p>
      </>
    ),
  },
  {
    id: "incident-response",
    eyebrow: "07 · Incident response",
    heading: "When something goes wrong.",
    body: (
      <>
        <p>
          The incidents that consume the most compliance time are not the simple
          known-hash-matches. They are the edge cases: a high-profile victim, a media inquiry
          before you&apos;ve confirmed, a moderator wellbeing failure, a vendor breach, a
          failed report submission. A defensible incident-response framework:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Defined severity levels</strong>{" "}tied to specific notification
            obligations. Sev-1 for confirmed CSAM at scale, vendor compromise, or
            regulator-initiated inquiry; Sev-2 for ambiguous content involving minors or
            potential mandatory-reporting situations; Sev-3 for routine moderation
            disagreements. Each level has a named owner and a notification matrix.
          </li>
          <li>
            <strong>Legal in the loop early, not late.</strong>{" "}CyberTipline reporting is the
            standard path, but parallel exposure (civil claims, contractual breach,
            international notifications) often requires counsel to weigh in within hours.
          </li>
          <li>
            <strong>Communication discipline.</strong>{" "}A single source of truth for the
            incident timeline, a clear distinction between internal facts and external
            statements, and a defined no-comment threshold for active investigations. Press
            statements are part of the legal posture, not separate from it.
          </li>
          <li>
            <strong>Post-incident review with corrective action.</strong>{" "}Documented
            root-cause, specific remediation items with owners and dates, and an audit trail
            of completion. Regulators look for this; absence of post-incident review
            documentation is a finding.
          </li>
          <li>
            <strong>Tabletop exercises annually.</strong>{" "}Run plausible scenarios with the
            actual response team. Discover the gaps before the regulator does.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "personnel",
    eyebrow: "08 · Personnel and contractor exposure",
    heading: "The human-side requirements.",
    body: (
      <>
        <p>
          Beyond the technology and policy work, three personnel issues that compliance
          consistently has to manage:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Pre-hire screening for sensitive roles.</strong>{" "}Moderators, T&amp;S
            investigators, and engineers with production access to user content should be
            screened consistent with the role&apos;s exposure. Document the screening
            criteria and the legal basis for them.
          </li>
          <li>
            <strong>Clinical support contracts.</strong>{" "}Multiple class-action settlements
            (Meta, TikTok, others) have established that platform-provided clinical support
            for content moderators is now an industry baseline, not a benefit. Contract with
            specialist providers; document utilization without breaching confidentiality.
          </li>
          <li>
            <strong>Contractor and BPO oversight.</strong>{" "}If you use a third-party
            moderation provider, the wellbeing program and exposure limits are still your
            compliance responsibility. The contractual passthrough is necessary but not
            sufficient — document the audit you perform on the provider&apos;s actual
            practice.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "starting-from-scratch",
    eyebrow: "09 · If you're starting from scratch",
    heading: "A 90-day buildout sequence.",
    body: (
      <>
        <p>
          For compliance teams brought in late or after a regulatory inquiry, a defensible
          90-day buildout:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Days 0–30: Audit and stabilize.</strong>{" "}Inventory existing detection
            coverage, reporting workflow, and policy documents. Designate a primary
            CyberTipline reporter today. Engage outside counsel with 2258A experience. Pull
            existing detection vendor agreements for review.
          </li>
          <li>
            <strong>Days 30–60: Document and remediate.</strong>{" "}Write the standard
            operating procedures, the law-enforcement-response policy, and the moderator
            wellbeing program. Begin DPIA for any scanning that lacks one. Close the most
            visible coverage gaps (PhotoDNA enrollment, NCMEC API integration, Cloudflare
            scanner if applicable).
          </li>
          <li>
            <strong>Days 60–90: Test and report.</strong>{" "}Run a tabletop incident exercise.
            Stand up the metrics dashboard. Draft the first transparency report. Brief
            executive leadership and the board on residual risk.
          </li>
        </ul>
        <p>
          For the executive-decision side of the same exercise, see{" "}
          <Link href="/for-tech-ceos" className="text-accent underline underline-offset-2">
            For Tech CEOs
          </Link>
          . For the courtroom side of the same evidence base, see{" "}
          <Link href="/for-attorneys" className="text-accent underline underline-offset-2">
            For Attorneys
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function ForComplianceTeamsPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/for-compliance-teams" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For compliance, T&amp;S operations, legal, and internal audit
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            The documentation, audit, and process side of CSAM compliance.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            The companion to the strategic guide for executives — focused on the artifacts an
            external assessor or regulator will actually ask to see. Regulatory mapping
            across US, EU, UK, and Australia; the metrics that hold up at audit; vendor
            due-diligence; records retention; and a 90-day buildout sequence for teams
            starting late.
          </p>
        </div>
      </header>

      <nav className="border-b border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
            Contents
          </p>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-2 text-sm">
            {topics.map((t, i) => (
              <li key={t.id}>
                <a
                  href={`#${t.id}`}
                  className="text-foreground hover:text-accent underline-offset-2 hover:underline flex gap-2"
                >
                  <span className="font-mono text-xs text-subtle tabular-nums pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{t.heading.replace(/[.,]$/, "")}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 space-y-16">
        {topics.map((t) => (
          <section
            key={t.id}
            id={t.id}
            className="scroll-mt-20 grid md:grid-cols-12 gap-10 md:gap-16"
          >
            <div className="md:col-span-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-3">
                {t.eyebrow}
              </p>
              <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold tracking-tight leading-tight">
                {t.heading}
              </h2>
            </div>
            <div className="md:col-span-8 prose-research">{t.body}</div>
          </section>
        ))}

        <section className="border-t border-rule pt-14">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Notes on this page
            </h2>
            <ul className="space-y-3 text-[1.0625rem] leading-relaxed font-serif">
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-subtle" aria-hidden />
                Informational, not legal advice. Specific compliance obligations depend on
                jurisdiction, entity structure, and service profile. Counsel with experience
                in 2258A, the DSA, and the Online Safety Act is the right escalation for
                entity-specific planning.
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-subtle" aria-hidden />
                The vendor naming on this page is descriptive of the working ecosystem, not
                an endorsement. Diligence on any vendor mentioned here should still be
                performed independently.
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-subtle" aria-hidden />
                The underlying research and policy context lives in the chapters —
                particularly{" "}
                <Link href="/report/technology" className="text-accent underline underline-offset-2">
                  Chapter 06 (Technology Solutions)
                </Link>{" "}
                and{" "}
                <Link href="/report/prevention" className="text-accent underline underline-offset-2">
                  Chapter 07 (Prevention Strategies)
                </Link>
                .
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/guides"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                ← All guides
              </Link>
              <Link
                href="/for-tech-ceos"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                For Tech CEOs (strategic side) →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
