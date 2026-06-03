import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Attorneys",
  description:
    "Evidence-based context for attorneys representing clients in CSAM cases: recidivism data, the CSAM-only vs. contact-offender distinction, risk-assessment instruments and their validity caveats, treatment programs that matter for mitigation, the AI-generated CSAM legal landscape, and the Stanford CIS finding on CyberTipline data integrity.",
};

type Topic = {
  id: string;
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
};

const topics: Topic[] = [
  {
    id: "csam-only-vs-contact",
    eyebrow: "01 · The clinical distinction",
    heading: "CSAM-only offenders are not contact offenders.",
    body: (
      <>
        <p>
          The Babchishin, Hanson, and VanZuylen (2015) meta-analysis is the most-cited
          reference for the clinical distinction. CSAM-only offenders are typically young,
          white, highly educated, and employed in white-collar professions, with significant
          difficulties in intimate relationships, sexual intimacy, and self-esteem. Mixed
          offenders (CSAM plus contact) score significantly higher on pedophilic interest
          than CSAM-only offenders &mdash; meaning paraphilic interest, not escalation from
          legal content, drives the most serious cases (
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/24627189/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Archives of Sexual Behavior
          </a>
          ).
        </p>
        <p>
          Marx, Müller, and Beutel (2021) documented that 5.3% of clinical CSAM users have
          predominantly adult sexual preferences, suggesting non-pedophilic pathways exist
          driven by &ldquo;striving for new and increasingly exciting material&rdquo; (
          <a
            href="https://cyberpsychology.eu/article/download/13123/32647/32057"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Cyberpsychology
          </a>
          ). The takeaway: psychometric profiles are heterogeneous, and a clinically-grounded
          differentiation can be material to risk assessment, sentencing, and treatment planning.
        </p>
      </>
    ),
  },
  {
    id: "recidivism",
    eyebrow: "02 · Recidivism data",
    heading: "The official numbers are low — but read Seto carefully.",
    body: (
      <>
        <p>
          The Clark et al. (2025) meta-analysis is the current comprehensive reference,
          covering 21 studies of 15,077 CSAM offenders. Headline numbers over approximately
          four years: <strong>3.41%</strong> for any sexual re-offending, <strong>0.66%</strong>{" "}
          for contact sexual re-offending, and <strong>3.05%</strong> for CSAM re-offending (
          <a
            href="https://www.tandfonline.com/doi/full/10.1080/14789949.2025.2603236"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Journal of Forensic Psychiatry and Psychology
          </a>
          ). These are useful in mitigation but should be presented honestly.
        </p>
        <p>
          The Seto et al. (2011) self-report study is the necessary companion. It revealed
          that approximately <strong>55%</strong> of online offenders admitted to a contact
          sexual offense at some point in their history, against a <strong>12%</strong> rate
          in official records (
          <a
            href="https://pubmed.ncbi.nlm.nih.gov/21173158/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Sexual Abuse
          </a>
          ). Defense and prosecution both have to grapple with the gap between recorded
          re-offense rates and admitted historical offending. Don&apos;t use the Clark numbers
          alone.
        </p>
      </>
    ),
  },
  {
    id: "instruments",
    eyebrow: "03 · Risk-assessment instruments",
    heading: "What holds up at trial and what doesn't.",
    body: (
      <>
        <p>
          The actuarial tools with the strongest evidence base are <strong>Static-99R</strong>{" "}
          (static risk factors) and <strong>Stable-2007</strong> (dynamic risk factors).
          Acute-2007 covers proximal risk. These have been validated across multiple
          populations and are widely accepted in US, UK, Canadian, and Australian courts.
          They are the foundation of a defensible forensic risk assessment.
        </p>
        <p>
          Computerized viewing-time tools, particularly the <strong>Abel Assessment for
          Sexual Interest (AASI-3)</strong>, are widely used but have significant validity
          controversies. Massachusetts courts ruled the AASI inadmissible in 2002 (upheld
          2005). It has struggled to meet the Daubert standard in federal courts. The
          proprietary scoring algorithm is not transparent, and the foundational Abel &amp;
          Harlow Child Molestation Prevention Study was never peer-reviewed. Independent
          studies have concluded the tool is unreliable in adults and lacks sufficient
          evidence for adolescent use (
          <a
            href="https://en.wikipedia.org/wiki/Abel_Assessment"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Wikipedia overview
          </a>
          ). Defense counsel should be prepared to cross-examine on these grounds when
          AASI results are part of the prosecution&apos;s case.
        </p>
        <p>
          The <strong>Diana Screen</strong> (from Abel Screening Inc., Alameda, CA) is
          marketed primarily to institutions (schools, youth-serving organizations) as a
          pre-hire or pre-volunteer screening tool. Its evidence base in the peer-reviewed
          literature is thin and similar caveats apply. The <strong>Penile Plethysmograph
          (PPG)</strong> remains the laboratory-grade reference for measuring physiological
          sexual interest but is invasive, expensive, and used selectively.
        </p>
        <p>
          See <Link href="/report/escalation#risk-factors" className="text-accent underline underline-offset-2">Chapter 03 → Risk factors and forensic profiles</Link>{" "}
          for the full instruments discussion.
        </p>
      </>
    ),
  },
  {
    id: "treatment",
    eyebrow: "04 · Treatment for mitigation",
    heading: "Risk-Need-Responsivity, not maximum-intensity.",
    body: (
      <>
        <p>
          The Risk-Need-Responsivity (RNR) model is the established framework for matching
          treatment intensity to assessed risk. <strong>Critical:</strong> intensive treatment
          of low-risk offenders may paradoxically <strong>increase recidivism by 21%</strong>{" "}
          (
          <a
            href="https://smart.ojp.gov/somapi/chapter-7-effectiveness-treatment-adult-sex-offenders"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            OJP SOMAPI
          </a>
          ). Treatment planning premised on &ldquo;more is better&rdquo; can be cited in
          cross-examination as inconsistent with the evidence base.
        </p>
        <p>
          Specialized programs for CSAM-only offenders include:
        </p>
        <ul className="my-3 space-y-2">
          <li>
            <strong>Inform Plus</strong> (UK, 25 hours, pre-conviction) — targets
            pre-conviction populations with documented improvements in pro-offending attitudes,
            socio-affective functioning, and mental health.
          </li>
          <li>
            <strong>i-SOTP / i-Horizon</strong> (UK, 46–70 hours) — adult sex offender
            treatment, post-conviction.
          </li>
          <li>
            <strong>CEM-COPE</strong> (Australia, 20-hour group format) — draws from ACT,
            CBT, and DBT, targets emotional regulation, problematic internet use, and relapse
            prevention.
          </li>
          <li>
            <strong>Prevention Project Dunkelfeld / Troubled Desire</strong> (Germany /
            global online) — free, medically confidential. 2024 long-term follow-up showed 0%
            new CSA among participants without prior CSA history, though an 89.1% CSAM
            continuation rate (
            <a
              href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11568044/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Journal of Prevention
            </a>
            ). The 0% new-contact-offense figure is significant for mitigation arguments.
          </li>
          <li>
            <strong>Stop It Now!</strong> pilot data confirms benefits in modifying actions
            to minimize abuse risk (
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/26701278/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              PubMed
            </a>
            ).
          </li>
        </ul>
        <p>
          Generic sex-offender programs designed for contact offenders produce little
          meaningful change in CSAM-only offenders (
          <a
            href="https://www.aic.gov.au/sites/default/files/2020-10/ti607_enhancing_evidence-based_treatment_of_CSAM_offenders.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Australian Institute of Criminology
          </a>
          ). Routing a CSAM-only client to a generic program rather than a specialized one is
          a defensible criticism in mitigation.
        </p>
      </>
    ),
  },
  {
    id: "ai-generated",
    eyebrow: "05 · AI-generated CSAM",
    heading: "A fast-moving legal landscape.",
    body: (
      <>
        <p>
          The <strong>TAKE IT DOWN Act</strong> (signed May 19, 2025) criminalizes
          non-consensual intimate imagery including AI deepfakes, with penalties up to three
          years and a 48-hour takedown requirement for platforms. The <strong>ENFORCE Act</strong>{" "}
          (passed the Senate unanimously December 16, 2025) equalizes criminal penalties for
          AI-generated CSAM with traditional CSAM at the federal level (
          <a
            href="https://www.thorn.org/blog/the-enforce-act-addressing-ai-generated-csam-offenses/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Thorn
          </a>
          ;{" "}
          <a
            href="https://www.cornyn.senate.gov/news/cornyn-blumenthal-lee-kennedy-bill-to-prosecute-ai-generated-csam-passes-senate-unanimously/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Senator Cornyn
          </a>
          ). The UK Crime and Policing Bill (February 2025) creates an offense for making,
          adapting, possessing, or supplying a &ldquo;CSA image-generator.&rdquo;
        </p>
        <p>
          First Amendment challenges are live. In <em>U.S. v. Anderegg</em>, a court dismissed
          possession charges for wholly AI-generated CSAM citing <em>Stanley v. Georgia</em>{" "}
          (private possession), while allowing production and distribution charges to proceed.
          This is the first federal case heading to appellate court on AI CSAM and the First
          Amendment (
          <a
            href="https://techpolicy.press/court-rules-that-constitution-protects-private-possession-of-aigenerated-csam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Tech Policy Press
          </a>
          ). Production and distribution remain charges where the constitutional defense is
          significantly weaker even before the statutory changes.
        </p>
      </>
    ),
  },
  {
    id: "data-integrity",
    eyebrow: "06 · Evidence: Stanford CIS on CyberTipline integrity",
    heading: "Read the categorization labels before stipulating to figures.",
    body: (
      <>
        <p>
          In January 2026, Stanford&apos;s Center for Internet and Society published a
          letter to NCMEC analyzing the widely-cited &ldquo;Generative AI&rdquo; CyberTipline
          figures. The headline finding: the frequently-cited 485,000 &ldquo;AI-related&rdquo;
          reports from H1 2025 was misleading. <strong>380,000 of those reports originated
          from Amazon</strong>, and none of Amazon&apos;s reports involved AI-generated CSAM.
          They were hash hits to known CSAM found in AI training datasets. Stanford concluded
          that <strong>nearly 80% of all &ldquo;Generative AI&rdquo; CyberTipline reports
          involved no AI-generated CSAM at all</strong> (
          <a
            href="https://cyberlaw.stanford.edu/letter-to-ncmec-about-ai-csam-report-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Stanford CIS
          </a>
          ).
        </p>
        <p>
          The practical implication for defense counsel: where a charging document or expert
          report cites &ldquo;AI-generated&rdquo; CyberTipline numbers as scale or aggravating
          context, the underlying categorization is often unreliable. Demanding the underlying
          report categorization (and where AI was actually generated vs. matched against
          existing material) is a reasonable discovery posture. The same caveat applies to
          news-cycle and policy testimony that relies on aggregate &ldquo;AI CSAM&rdquo;
          figures.
        </p>
      </>
    ),
  },
  {
    id: "working-with-clinicians",
    eyebrow: "07 · Working with forensic clinicians",
    heading: "Who to retain and what to ask for.",
    body: (
      <>
        <p>
          A forensic psychological evaluation by a clinician who specializes in sexual
          behavior assessment is materially different from a general mental health evaluation,
          and the difference shows up in court. Look for a doctoral-level clinician with
          experience in <strong>Static-99R / Stable-2007 administration</strong>, who treats
          AASI results with appropriate evidentiary caution, and who can articulate the
          Risk-Need-Responsivity rationale for whatever treatment recommendation they make.
        </p>
        <p>
          Bay Area readers:{" "}
          <strong>
            <a
              href="https://www.armstrongphd.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Dr. Jerel Armstrong, Ph.D.
            </a>
          </strong>{" "}
          (CA PSY27272) maintains a forensic practice specifically for this work, including
          evaluation and consultation across the full instrument battery (Static-99R,
          Stable-2007, AASI-3, PPG, MSI-II) and courtroom testimony. Adults and juveniles.
          Elsewhere, the{" "}
          <a
            href="https://iitap.com/page/CSATFindATherapist"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            IITAP CSAT directory
          </a>{" "}
          locates Certified Sex Addiction Therapists by region for treatment retainer.
        </p>
        <p>
          Where the case will involve forensic digital evidence, the Project VIC
          International network has been the de-facto standard for over a decade. Defense
          can request audit logs and verification reports from any platform-level
          hash-matching that produced the evidence; see Chapter 06 of the research for the
          technical landscape.
        </p>
      </>
    ),
  },
  {
    id: "mitigation",
    eyebrow: "08 · Mitigation considerations",
    heading: "What the evidence base actually supports.",
    body: (
      <>
        <p>
          Mitigation that survives sentencing tends to share a few features: an
          evidence-based forensic evaluation by an appropriately credentialed specialist,
          documented engagement with a specialized treatment program (not a generic
          contact-offender program), a treatment plan calibrated to actuarial risk under the
          RNR model, and acknowledgment that recidivism risk is low but real.
        </p>
        <p>
          Arguments that depend on broad claims about &ldquo;not really hurting anyone&rdquo;
          will not survive contact with the evidence base, particularly given the documented
          ongoing harm to identified victims whose imagery circulates indefinitely and the
          re-traumatization that occurs each time their imagery is downloaded. Don&apos;t
          run them.
        </p>
        <p>
          What does survive: clinical heterogeneity (this client is not the worst-case
          archetype), demonstrated engagement with treatment, the Clark et al. recidivism
          numbers paired with honest acknowledgment of the Seto self-report gap, and the
          Dunkelfeld 2024 result on prevention of new contact offenses for the right
          clinical profile.
        </p>
      </>
    ),
  },
];

export default function ForAttorneysPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For defense counsel, prosecutors, and family-law attorneys
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            The evidence base for CSAM cases.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            Calm, evidence-based context that informs mitigation, treatment recommendations, plea
            negotiations, and risk assessments. The clinical picture is more heterogeneous and the
            recidivism data more favorable than the headline framing — but the qualifications and
            data-integrity issues matter at every step.
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
          <section key={t.id} id={t.id} className="scroll-mt-20 grid md:grid-cols-12 gap-10 md:gap-16">
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
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Reference index
              </p>
              <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold tracking-tight leading-tight">
                Where the underlying material lives.
              </h2>
            </div>
            <div className="md:col-span-8 prose-research">
              <p>
                The clinical and policy material on this page is drawn from the research.
                For the original sources and the surrounding context, see:
              </p>
              <ul>
                <li>
                  <Link href="/report/escalation">Chapter 03: Escalation from Pornography to CSAM</Link> &mdash;
                  risk factors, forensic profiles, the gateway-hypothesis debate, and the assessment
                  instruments discussion.
                </li>
                <li>
                  <Link href="/report/ai-generated">Chapter 04: AI-Generated Content</Link> &mdash;
                  scale, detection challenges, the Stanford CIS data-integrity finding, and the
                  legislative landscape.
                </li>
                <li>
                  <Link href="/report/interventions">Chapter 05: Therapeutic Interventions</Link>{" "}
                  &mdash; CBT and ACT effect sizes, the CSAM-specific treatment programs, Risk-Need-Responsivity.
                </li>
                <li>
                  <Link href="/report/technology">Chapter 06: Technology Solutions</Link> &mdash;
                  hash-matching, AI classification, Project VIC, the platform-level detection
                  stack relevant to forensic evidence questions.
                </li>
                <li>
                  <Link href="/citations">Full citations</Link> &mdash; every empirical claim is
                  sourced.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-rule pt-14">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Notes on this page
            </h2>
            <ul className="space-y-3 text-[1.0625rem] leading-relaxed font-serif">
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Informational, not legal advice. Specific case strategy depends on
                jurisdiction, charges, and facts. The material here is the evidence base
                attorneys generally find useful for case planning, expert engagement, and
                cross-examination preparation.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The Clark et al. (2025) and Babchishin et al. (2015) papers are the two most
                useful single references to have at hand. The Stanford CIS letter on NCMEC
                data integrity is the most useful recent development for defense work
                involving AI-generated CSAM allegations.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If your client has not been charged but is concerned about exposure, see{" "}
                <Link href="/for-offenders" className="text-accent underline underline-offset-2">
                  the page for people seeking help
                </Link>
                . The order of operations matters: privilege first, treatment second.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                For school staff handling adjacent situations (disclosed grooming, deepfake
                imagery of students, sextortion), see{" "}
                <Link href="/for-educators" className="text-accent underline underline-offset-2">
                  For Educators
                </Link>
                .
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/for-offenders"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                ← For people seeking help
              </Link>
              <Link
                href="/report/escalation"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                Chapter 03: Escalation →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
