import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "For Therapists",
  description:
    "Clinical guide for licensed mental-health professionals working with patients on problematic pornography use, sexual-trauma recovery, pre-offense sexual concerns, or active CSAM legal exposure. Screening, confidentiality conversation, evidence-based treatment, the therapeutic-vs-forensic role distinction, and self-care.",
};

type Topic = {
  id: string;
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
};

const topics: Topic[] = [
  {
    id: "screening",
    eyebrow: "01 · Screening",
    heading: "Ask routinely. Don't wait for disclosure.",
    body: (
      <>
        <p>
          Population-level estimates put problematic pornography use (PPU) at 3.2% globally
          in the International Sex Survey, with country-level ranges up to 16.6%. Of those,
          only 4–10% have ever sought treatment, and an additional 21–37% want help but
          don&apos;t seek it — typically citing cost and shame. The patient who would benefit
          from your help is usually already in your caseload; the rate-limiting step is the
          screening question, which most clinicians do not ask.
        </p>
        <p>
          Add to intake a single open-ended item: <em>&ldquo;Is there anything about your
          sexual life — pornography, online behavior, or sexual thoughts — that feels out of
          control or that you&apos;d want to talk about?&rdquo;</em>{" "}The framing matters. A
          checkbox for &ldquo;pornography addiction&rdquo; gets fewer truthful answers than
          an open question that doesn&apos;t require the patient to self-label. The
          Brief Pornography Screen (BPS) and Problematic Pornography Consumption Scale
          (PPCS-6) are validated follow-ups if the conversation opens.
        </p>
        <p>
          The same instrument set is appropriate across substance-use intake, depression and
          anxiety intake, and couples-therapy intake — not just sex-therapy specialty
          practice. Comorbidity rates are high; depression, anxiety, ADHD, trauma history,
          and substance use are routinely interlocked with PPU. The 2025 PLOS Global Public
          Health study confirmed significant associations between problematic pornography
          use and substance use patterns. Screen as a routine clinical practice.
        </p>
      </>
    ),
  },
  {
    id: "confidentiality",
    eyebrow: "02 · The confidentiality conversation",
    heading: "What to say in session one.",
    body: (
      <>
        <p>
          Patients struggling with sexual concerns frequently know more about your
          jurisdiction&apos;s mandatory-reporting law than you do — they have looked it up
          before walking into your office. The single most useful clinical move at intake
          is to name the rules out loud, before the patient asks indirectly or never
          discloses at all.
        </p>
        <p>
          A clean version, adapted to your state and licensure: <em>&ldquo;A few things I
          need to tell you about confidentiality. Most of what we discuss is private.
          There are specific exceptions — if I believe you&apos;re at imminent risk of
          harming yourself or someone else, if I learn a child or vulnerable adult is being
          abused, or if a court compels me. Past or ongoing consumption of sexual imagery
          involving minors generally falls into the abuse-disclosure category here in
          [state]; I would have to report. A general sexual interest in minors that hasn&apos;t
          been acted on is treated differently. If any of this is relevant, I want you to
          know the rules before you decide what to share.&rdquo;</em>
        </p>
        <p>
          This is not a script you read; it is a content area you cover. The clinical
          benefit is that patients can stage their disclosures intentionally and the
          relationship survives the inevitable moments when reporting obligations interact
          with the work. The legal-and-ethical benefit is that no one is surprised.
        </p>
        <p>
          For patients who are likely outside your reporting scope but want strong privacy,
          name the alternatives explicitly: <a href="https://troubled-desire.com/en/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Troubled Desire</a>{" "}
          is anonymous by construction, Stop It Now! operates under clinical confidentiality
          with explicit legal carve-outs, and an attorney consultation is the strongest
          legal protection for anyone with criminal exposure. Pointing patients at these is
          not a failure of the therapeutic relationship — it is care.
        </p>
      </>
    ),
  },
  {
    id: "ppu-treatment",
    eyebrow: "03 · Treating problematic pornography use",
    heading: "CBT and ACT, both with strong evidence.",
    body: (
      <>
        <p>
          The 2025 meta-analysis by López-Pinar, Esparza-Reig, and Bőthe (20 studies, 2,021
          participants) found large effect sizes for psychotherapy targeting PPU: SMD = 1.05
          for PPU reduction, SMD = 1.07 for frequency/duration reduction, SMD = 1.02 for
          sexual compulsivity, with gains maintained at follow-up (
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12231474/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Journal of Behavioral Addictions
          </a>
          ). The two modalities with the strongest individual support are CBT and ACT.
        </p>
        <p>
          <strong>Acceptance and Commitment Therapy (ACT)</strong>{" "}may be the better fit for
          most PPU cases because it addresses the &ldquo;control paradox&rdquo; directly —
          efforts to suppress urges often strengthen them. The landmark Twohig RCT at Utah
          State University found a 93% reduction in viewing for the ACT treatment group vs.
          21% for waitlist controls. 54% had ceased viewing entirely at post-treatment; 74%
          maintained at least a 70% reduction at 3-month follow-up (
          <a
            href="https://www.usu.edu/today/story/usu-research-yields-dramatic-results-in-treatment-for-pornography-addiction"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            USU
          </a>
          ). The values-clarification component is particularly useful when patients
          present with religious or moral incongruence as part of the distress.
        </p>
        <p>
          <strong>Cognitive Behavioral Therapy (CBT)</strong>{" "}remains the most-used
          approach and has the broader evidence base. Standard CBT formulations — trigger
          identification, cognitive restructuring, behavioral substitution, relapse
          prevention — translate cleanly. Mindfulness-Based Relapse Prevention shows
          meaningful results in pilot studies and pairs naturally with both CBT and ACT
          components.
        </p>
        <p>
          For the cognitive-restructuring step, <strong>David Burns</strong>&apos;s ten
          cognitive distortions — all-or-nothing thinking, <em>should</em>{" "}statements,
          labeling — give patients a shared vocabulary for catching the shame-laden thoughts
          that drive use. His{" "}
          <a
            href="https://feelinggood.com/"
            className="text-accent underline underline-offset-2"
          >
            Feeling Good
          </a>{" "}
          bibliotherapy (the self-help title most often &ldquo;prescribed&rdquo; for
          depression, with meta-analytic support) is a low-cost between-session adjunct, and
          the free Feeling Good podcast and distortion-based courses give patients a
          structured at-home track that is especially useful before or between sessions for
          the shame this work surfaces.
        </p>
        <p>
          Practical structure: 12–20 sessions for moderate presentations, weekly. Couples
          inclusion when relevant; partner secondary trauma is documented and often needs
          separate support. App-based adjuncts work in this space — the recovery-program
          apps (QUITTR, Brainbuddy, Relay, Cure) bridge between sessions and the
          accountability/blocking apps reduce the environmental friction patients are
          working against. See the <Link href="/apps" className="text-accent underline underline-offset-2">Apps directory</Link>{" "}
          for the current vendor landscape and the three-layer stack framework you can
          recommend.
        </p>
        <p>
          Relapse rates are real: 60–75% of patients experience at least one relapse within
          the first year, declining substantially after two years of sustained recovery.
          Normalize this at the outset. The clinical mistake to avoid is letting a single
          lapse end the work; the predictive variable is what happens in the week after a
          lapse, not whether one occurs.
        </p>
      </>
    ),
  },
  {
    id: "trauma",
    eyebrow: "04 · Trauma-informed care for survivors",
    heading: "If you treat sexual trauma, train in a specific modality.",
    body: (
      <>
        <p>
          Sexual trauma does not respond reliably to general talk therapy. The modalities
          with the strongest evidence base are <strong>EMDR</strong>, <strong>Trauma-Focused
          CBT</strong>, <strong>Internal Family Systems (IFS)</strong>, <strong>somatic
          experiencing</strong>, and <strong>prolonged exposure</strong>. A clinician
          without specific training in at least one of these is generally not the right
          referral for a CSA survivor, an adult sexual-assault survivor, or a patient
          whose intimate imagery was shared without consent — even if you are excellent at
          general therapy.
        </p>
        <p>
          If you do this work, follow the phase-based model: <strong>safety and
          stabilization</strong>{" "}first (often weeks to months), <strong>processing</strong>{" "}
          second (when the patient&apos;s nervous system can tolerate it), and{" "}
          <strong>integration</strong>{" "}third. Asking for detailed disclosure in early
          sessions is iatrogenic; a good trauma therapist will say so explicitly and
          patients respond to that framing.
        </p>
        <p>
          For survivors of CSAM circulation (imagery taken during childhood abuse that is
          now or was online), the clinical picture includes ongoing re-traumatization that
          general trauma protocols don&apos;t fully account for. Project Arachnid&apos;s
          Survivor Services and the Phoenix 11 advocacy group are the most useful
          adjacent supports; the underlying clinical work is still phase-based trauma
          therapy. See <Link href="/for-victims" className="text-accent underline underline-offset-2">For Survivors</Link>{" "}
          for the survivor-facing version of these resources, useful both for direct
          patient referral and for understanding the framing your patients respond to.
        </p>
        <p>
          For training: EMDRIA (<a href="https://www.emdria.org/find-an-emdr-therapist/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">emdria.org</a>)
          handles EMDR certification; ISSTD (<a href="https://www.isst-d.org/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">isst-d.org</a>)
          maintains training in trauma and dissociation; the IFS Institute offers
          progressive certification. NCTSN (National Child Traumatic Stress Network)
          materials are excellent for clinicians working with pediatric trauma.
        </p>
      </>
    ),
  },
  {
    id: "pre-offense",
    eyebrow: "05 · Working with pre-offense concerns",
    heading: "When a patient discloses sexual interest in minors but has not acted.",
    body: (
      <>
        <p>
          The clinical scenario: an adult patient discloses, often after months of therapy,
          a sexual interest in children and that they have not acted on it. The literature
          is clear that this disclosure is medically relevant and the patient generally
          experiences significant relief at being able to name it. Most US jurisdictions do{" "}
          <em>not</em>{" "}require reporting of an interest absent acting on it, but specifics
          vary and the line between &ldquo;thinking about&rdquo; and &ldquo;has acted on&rdquo;
          can become contested in clinical interviewing. Know your state&apos;s reporting
          statute precisely.
        </p>
        <p>
          The Prevention Project Dunkelfeld model at Charité – Universitätsmedizin Berlin is
          the most studied primary-prevention program in the world: free, medically
          confidential, combining behavioral therapy, sexual medicine, and pharmacological
          options. The 2024 long-term follow-up found <strong>0% new CSA among participants
          without prior CSA history</strong>, though CSAM continuation remained high at
          89.1% (
          <a
            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11568044/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Journal of Prevention
          </a>
          ). The clinical takeaway is that this work prevents new victims and is worth
          doing even when the patient&apos;s underlying interest cannot be fully
          extinguished.
        </p>
        <p>
          For US clinicians outside specialized programs, the realistic ladder is: (1) name
          the prevention-services option to the patient explicitly — <strong>Troubled
          Desire</strong>{" "}is anonymous, multi-language, online, and effectively designed as
          a confidential first step; <strong>Stop It Now!</strong>{" "}operates a US helpline
          under clinical confidentiality; (2) if you continue treatment yourself, use CBT
          targeted at urge management, supplement with naltrexone or SSRI consultation
          where indicated, and consult colleagues with specialized training; (3) coordinate
          with the patient on how disclosures should be staged given your reporting
          obligations. Document your clinical reasoning carefully.
        </p>
        <p>
          The clinical / ethical risk to avoid is over-disclosure to other parties out of
          unfocused anxiety. Patients who disclose <em>without having acted</em>{" "}generally
          do not meet mandatory-reporting thresholds. A reflexive call to law enforcement
          on an unactioned disclosure can cause significant harm without preventing any
          offense — and signals to every clinician&apos;s caseload that this disclosure is
          unsafe to make. The clinical literature supports the opposite: the system needs
          more, not fewer, safe places for people to disclose before any offense occurs.
        </p>
      </>
    ),
  },
  {
    id: "legal-exposure",
    eyebrow: "06 · Working with patients in legal proceedings",
    heading: "Therapeutic vs forensic — pick one role per case.",
    body: (
      <>
        <p>
          When a patient is charged, arrested, or under investigation for a CSAM-related
          offense, the most common clinical mistake is to blur the therapeutic and forensic
          roles. <strong>Don&apos;t.</strong>{" "}If you are providing treatment, you are not
          conducting a risk assessment; if you are conducting a forensic evaluation, you
          are not providing treatment. The forensic-vs-therapeutic role distinction is
          fundamental APA ethical guidance and the role you accept materially shapes both
          what the patient can disclose and what is admissible.
        </p>
        <p>
          Recommend the patient retain a criminal defense attorney before doing anything
          else if they have not already. Attorney-client privilege is the strongest legal
          protection available; anything you and the patient discuss is generally{" "}
          <em>not</em>{" "}privileged in most jurisdictions. Once counsel is involved, treatment
          can be routed under privilege via the attorney, which materially changes the
          patient&apos;s ability to engage clinically.
        </p>
        <p>
          Treatment that supports mitigation should be specifically CSAM-tailored, not
          generic sex-offender programming. Specialized programs — <strong>Inform Plus</strong>{" "}
          (UK, pre-conviction), <strong>i-SOTP / i-Horizon</strong>{" "}(UK, post-conviction),{" "}
          <strong>CEM-COPE</strong>{" "}(Australia), and the <strong>Dunkelfeld / Troubled
          Desire</strong>{" "}approach — have evidence behind them. Generic sex-offender
          programs designed for contact offenders produce little meaningful change in
          CSAM-only offenders.
        </p>
        <p>
          The Risk-Need-Responsivity (RNR) caveat is clinically important: intensive
          treatment of low-risk offenders may paradoxically <strong>increase recidivism by
          21%</strong>. Treatment intensity should be matched to actuarial risk, and the
          forensic evaluator (not the treating clinician) is the right person to produce
          that assessment. For attorneys, the matching paper is the Babchishin 2015
          meta-analysis on the CSAM-only vs contact-offender distinction; for the courtroom
          framing of the same evidence, see <Link href="/for-attorneys" className="text-accent underline underline-offset-2">For Attorneys</Link>.
        </p>
      </>
    ),
  },
  {
    id: "pharmacology",
    eyebrow: "07 · Pharmacological adjuncts",
    heading: "When to consult psychiatry.",
    body: (
      <>
        <p>
          The World Federation of Societies of Biological Psychiatry recommends combined
          psychotherapy plus pharmacotherapy over either alone for moderate to severe
          compulsive sexual behavior. As a non-prescribing therapist, the practical
          question is when to refer for a medication consult.
        </p>
        <p>
          <strong>SSRIs</strong>{" "}are first-line pharmacological treatment and frequently
          treat the comorbid depression or anxiety as well as reducing intrusive sexual
          thoughts and urges. Sertraline and paroxetine have the most case-series support;
          fluoxetine is also commonly used. Onset and dosing follow standard antidepressant
          patterns. Discuss with the prescriber that sexual side effects (reduced libido,
          delayed ejaculation) are part of the therapeutic mechanism here, not just a side
          effect to minimize.
        </p>
        <p>
          <strong>Naltrexone</strong>, an opioid receptor antagonist, shows strong results
          in case literature for compulsive sexual behavior — complete impulse control at
          100–150 mg/day in published case series (
          <a
            href="https://hal.sorbonne-universite.fr/hal-02880933v1/document"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            HAL Sorbonne
          </a>
          ). Tolerability is generally good; primary contraindication is opioid use. Worth
          discussing with the prescriber for patients whose presentations have an impulsive
          or craving-dominant character.
        </p>
        <p>
          <strong>Antiandrogens</strong>{" "}(cyproterone acetate, medroxyprogesterone acetate,
          GnRH agonists like leuprolide) are reserved for severe cases with clear
          paraphilic interest and informed consent, typically routed through specialized
          forensic-sexology programs rather than general psychiatry. These are not
          first-line; clinical settings that use them have specific protocols.
        </p>
      </>
    ),
  },
  {
    id: "ai-and-self-care",
    eyebrow: "08 · AI in practice and clinician self-care",
    heading: "Two emerging clinical realities.",
    body: (
      <>
        <p>
          <strong>AI&apos;s dual role.</strong>{" "}Generative AI is reshaping both the
          addiction surface and the treatment surface. Hyper-personalized AI-generated
          pornography may accelerate desensitization and tolerance cycles; therapist
          reports suggest roughly one-third of PPU clients now use AI-generated erotica in
          some form. AI companion chatbots simulating emotional connection may reinforce
          fantasy over reality and impede real-world relationship development. At the same
          time, AI-assisted therapy apps (24/7 coaching, between-session check-ins, urge
          tracking) genuinely improve outcomes for many patients. Develop competency in
          both — your patients are using these tools whether or not you raise them.
        </p>
        <p>
          <strong>Clinician self-care.</strong>{" "}Therapists who do this work consistently
          report higher rates of vicarious trauma, secondary traumatic stress, and burnout
          than colleagues in adjacent specialties. The well-documented protective factors
          are formal case consultation (not casual peer talk), regular supervision even for
          experienced clinicians, exposure limits (no caseload should be entirely
          CSA/CSAM patients), and personal therapy. The cultural pull in this work is
          toward isolation — the content is hard to discuss casually, and many clinicians
          fear they are seen as &ldquo;the sex therapist&rdquo; if they raise cases.
          Resist that pull. Find one or two consultation peers and meet regularly.
        </p>
        <p>
          The IITAP Certified Sex Addiction Therapist (CSAT) credential includes structured
          consultation; ATSA (Association for the Treatment and Prevention of Sexual
          Abuse) is the leading professional organization for clinicians working with
          sexual-offending populations and runs annual conferences worth attending. The
          ISST-D community provides similar structure for trauma-and-dissociation
          practitioners.
        </p>
      </>
    ),
  },
];

export default function ForTherapistsPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/for-therapists" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For licensed mental-health professionals
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Clinical guide for therapists treating across this whole map.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            For psychologists, LMFTs, LCSWs, psychiatrists, and counselors whose patients
            include problematic pornography use, sexual-trauma survivors, pre-offense sexual
            concerns, or active CSAM legal exposure. The screening question to add at
            intake, the confidentiality conversation to have in session one, evidence-based
            treatment for each scenario, the therapeutic-vs-forensic role distinction, and
            the self-care practices clinicians in this space need.
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
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Reference into the research
              </p>
              <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold tracking-tight leading-tight">
                Where the underlying evidence lives.
              </h2>
            </div>
            <div className="md:col-span-8 prose-research">
              <ul>
                <li>
                  <Link href="/report/addiction">Chapter 02: Pornography Addiction Pathways</Link>{" "}
                  &mdash; the neurobiology, the ICD-11 / DSM-5 classification debate, and
                  the prevalence-of-problematic-use evidence base.
                </li>
                <li>
                  <Link href="/report/escalation">Chapter 03: Escalation to CSAM</Link>{" "}
                  &mdash; the gateway-hypothesis evidence, risk factors and forensic
                  profiles, and the assessment-instruments section (including the AASI-3
                  validity controversies).
                </li>
                <li>
                  <Link href="/report/interventions">Chapter 05: Therapeutic Interventions</Link>{" "}
                  &mdash; CBT and ACT effect sizes, the CSAM-specific treatment programs,
                  pharmacology, peer-support networks, and the Risk-Need-Responsivity model.
                </li>
                <li>
                  <Link href="/citations">Citations</Link> &mdash; every empirical claim
                  in the research is sourced.
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
                <span className="absolute left-0 top-3 w-2 h-px bg-subtle" aria-hidden />
                Informational, not a substitute for clinical supervision, consultation,
                or jurisdiction-specific legal advice. Mandatory-reporting law varies by
                state and by professional license type; consult your licensure board or
                an attorney familiar with mental-health law for case-specific guidance.
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-subtle" aria-hidden />
                The patient-facing guides on this site are designed so you can refer
                directly: <Link href="/for-victims" className="text-accent underline underline-offset-2">For Survivors</Link>{" "}
                for trauma-recovery patients,{" "}
                <Link href="/for-offenders" className="text-accent underline underline-offset-2">
                  For People Seeking Help
                </Link>{" "}
                for patients managing concerning thoughts or behavior, and{" "}
                <Link href="/for-attorneys" className="text-accent underline underline-offset-2">
                  For Attorneys
                </Link>{" "}
                for patients in legal proceedings to share with their counsel.
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-subtle" aria-hidden />
                The Apps directory at <Link href="/apps" className="text-accent underline underline-offset-2">/apps</Link>{" "}
                catalogs the recovery-program apps, accountability tools, and blockers
                that work as adjuncts to therapy for PPU.
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
                href="/report/interventions"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                Chapter 05: Therapeutic Interventions →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
