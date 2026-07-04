import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "For People Seeking Help",
  description:
    "Honest, non-judgmental guidance for people concerned about their own sexual interest in minors, struggling with CSAM use, or facing legal consequences. Confidentiality realities, evidence-based help, and what to do before things get worse.",
};

type Step = { kicker: string; body: string };

const preCharge: Step[] = [
  {
    kicker: "01 · Start with Troubled Desire if you can",
    body: "Troubled Desire is the lowest-friction option: a free, anonymous online self-help platform from Charité Berlin's Institute of Sexology and Sexual Medicine — the same institution behind Prevention Project Dunkelfeld. The site runs an anonymous self-assessment, offers knowledge resources and online counseling, and can route you to a therapist contact. Available in 11 languages, with a Tor address for additional privacy. Operated by a medical university, EU-cofunded, designed specifically for this audience. No personal data is stored or passed to third parties.",
  },
  {
    kicker: "02 · Stop It Now! for confidential phone support",
    body: "If you want to talk to a human, Stop It Now! operates free, confidential helplines specifically for people concerned about their own thoughts or behavior toward children, or someone else's. The US line is (888) 773-8368, UK and Ireland 0808 1000 900, Australia 1800 01 1800, with a sister program in the Netherlands. Trained specialists; the call is not the same as a confession to law enforcement.",
  },
  {
    kicker: "03 · Find evidence-based treatment",
    body: "The two psychotherapy approaches with the strongest research base for compulsive sexual behavior are Cognitive Behavioral Therapy (CBT) and Acceptance and Commitment Therapy (ACT). A 2025 meta-analysis found large effect sizes (SMD = 1.05) for psychotherapy in reducing problematic pornography use; ACT trials have achieved 92% viewing reductions. A Certified Sex Addiction Therapist (CSAT) is trained specifically for this population. Pharmacological options (SSRIs, naltrexone) work in conjunction with therapy when indicated. A zero-disclosure way to start on the CBT skills themselves is cognitive bibliotherapy: David Burns's Feeling Good and his free Feeling Good podcast teach the cognitive-distortion techniques the therapy uses, with no clinician and nothing to disclose — useful on its own and as a bridge into professional CBT. See the intervention chapter for the evidence summary, and Resources below.",
  },
  {
    kicker: "04 · Stop consuming. Do not justify continued use as part of getting help.",
    body: "Treatment outcomes are real and reproducible, but they begin once consumption stops, not in parallel with continued consumption. Recovery timelines are typically months to years and relapse is common but manageable. If you are continuing to actively consume CSAM, the legal exposure is increasing every day. The decision to seek help is the decision to stop, in that order.",
  },
];

const postCharge: Step[] = [
  {
    kicker: "01 · Hire a criminal defense attorney before talking to anyone else",
    body: "Attorney-client privilege is the strongest legal protection available to you. Conversations with therapists, clergy, friends, and family are not protected in most jurisdictions. Some are explicitly mandatory-reporting territory. Once you have counsel, your attorney can route the rest — including any treatment evaluation or therapy that will support mitigation — under privilege.",
  },
  {
    kicker: "02 · Treatment matters for the case and for the rest of your life",
    body: "Specialized post-conviction programs exist — Inform Plus and i-SOTP / i-Horizon in the UK, CEM-COPE in Australia — and have demonstrated improvements in pro-offending attitudes, socio-affective functioning, and mental health among CSAM offenders. Critically, the evidence shows that intensive treatment of low-risk offenders can paradoxically increase recidivism by 21%; the Risk-Need-Responsivity model requires matching treatment intensity to assessed risk. A good defense team will commission a forensic risk assessment to inform this.",
  },
  {
    kicker: "03 · The recidivism numbers are not what most people assume",
    body: "The Clark et al. (2025) meta-analysis of 21 studies and 15,077 CSAM offenders found a 3.41% rate of any sexual re-offending, 0.66% for contact sexual re-offending, and 3.05% for CSAM re-offending over approximately four years. The Seto et al. (2011) self-report study revealed approximately 55% of online offenders admitted contact offenses vs. a 12% rate in official records — important context that runs both ways. Numbers are useful in mitigation; they are not arguments for continued offending.",
  },
  {
    kicker: "04 · Find the right specialist for evaluation",
    body: "Forensic psychologists who specialize in this work are not the same as general therapists. They produce evaluations that hold up in court — Static-99R and Stable-2007 are the actuarial tools with the strongest evidence base. Computerized tools like the AASI-3 have significant validity controversies that defense and prosecution should both understand. Bay Area readers: Dr. Jerel Armstrong, Ph.D. (CA PSY27272) maintains a forensic practice specifically for this work; the IITAP CSAT directory finds clinicians elsewhere.",
  },
];

const concerns: { question: string; answer: string }[] = [
  {
    question: "If I tell a therapist, will they call the police?",
    answer:
      "Disclosing past or ongoing CSAM consumption to a licensed therapist usually triggers mandatory reporting in the United States; specifics vary by state. Disclosing a sexual interest in children without a description of acting on it is generally not a reportable event, but interpretations vary. Troubled Desire and Stop It Now! were designed specifically to operate outside this dynamic — Troubled Desire is anonymous by construction and Stop It Now!'s reporters are bound by clinical confidentiality except where the law explicitly overrides. Before disclosing anything to a US-based clinician, ask what their reporting obligations are in your state. Ask your defense attorney for the same.",
  },
  {
    question: "Is it normal to feel suicidal right now?",
    answer:
      "Yes, and the risk is documented in the clinical literature for this population. The shame and isolation of this concern are part of what makes it difficult to treat; suicide is a recognized risk even among people who have not yet acted. If you are in immediate distress, the 988 Suicide and Crisis Lifeline (US, call or text 988) and Samaritans (UK and Ireland, 116 123) are free and 24/7. You do not need to disclose the specific cause to get support for the suicide risk itself.",
  },
  {
    question: "Will I lose my job, family, custody, immigration status?",
    answer:
      "If a charge or conviction occurs, all of these are possible and many are likely depending on jurisdiction, charge severity, and personal circumstances. This is part of why early defense counsel and early treatment matter — both for mitigation in the criminal case and for the parallel proceedings (employment, custody, immigration) that often follow. None of these consequences are arguments against seeking help; they are arguments for getting confidential help quickly through channels designed for it.",
  },
  {
    question: "What if I'm not sure whether what I'm doing is illegal?",
    answer:
      "Possession, receipt, and distribution of imagery depicting minors in sexual situations are illegal under federal law in the United States and equivalent laws in most countries. As of December 2025 (ENFORCE Act) and May 2025 (TAKE IT DOWN Act), AI-generated CSAM and non-consensual intimate imagery including AI deepfakes are subject to federal criminal penalties equivalent to traditional CSAM. \"It's only AI\" is no longer a legal distinction. If you are unsure, the safest course is to stop, secure counsel, and seek help.",
  },
  {
    question: "Is there a path back?",
    answer:
      "Yes. The Dunkelfeld 2024 long-term follow-up found 0% new contact offenses among participants without prior contact offense history, though CSAM continuation rates remained high (89.1%) — meaning the program prevents new victims but the underlying pull is hard to extinguish. The honest version is: full extinction of the interest itself is rare; reliable behavior change is achievable; ongoing management is the realistic frame. People do build meaningful lives after this, but the path is long and it requires sustained help.",
  },
];

export default function ForOffendersPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/for-offenders" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For people seeking help
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Help exists. Here&apos;s how to find it without making things worse.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            For people concerned about their own sexual thoughts about children, currently struggling
            with CSAM use, or already facing legal trouble. Reading this is not evidence of guilt.
            Seeking help is not the same as offending. The most important first step is rarely the
            one your shame is telling you to take.
          </p>
        </div>
      </header>

      <section className="border-b border-rule bg-crisis-soft/60 no-print">
        <div className="max-w-6xl mx-auto px-5 py-7 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-9">
            <p className="text-[10px] uppercase tracking-[0.18em] text-crisis font-semibold mb-1.5">
              If you are in immediate crisis
            </p>
            <p className="text-[0.9375rem] text-foreground leading-relaxed">
              Suicide risk in this population is documented. You can call or text{" "}
              <strong>988</strong> (US Suicide & Crisis Lifeline) or{" "}
              <strong>116 123</strong> (Samaritans, UK & Ireland) right now without disclosing the
              specific reason. You will be treated with respect, and the crisis itself will be
              taken seriously on its own terms.
            </p>
          </div>
          <div className="md:col-span-3 md:text-right">
            <Link
              href="/get-help#crisis"
              className="inline-flex items-center gap-1.5 bg-crisis text-white px-3.5 py-2 rounded-md text-sm font-medium hover:bg-crisis/90"
            >
              All crisis lines →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-14 md:py-16 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              Read this first
            </p>
            <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
              What confidentiality you do and don&apos;t have.
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              Most people who try to get help make a small mistake at this step that costs them
              dearly. Knowing the rules ahead of time is part of the help.
            </p>
          </div>
          <div className="md:col-span-8 space-y-5">
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1.5 leading-snug">
                Attorney-client privilege is the strongest protection.
              </h3>
              <p className="text-[0.9375rem] text-foreground leading-relaxed">
                Conversations with a criminal defense attorney about your situation — past, present,
                and contemplated — are protected by privilege in nearly every common-law
                jurisdiction. If you have any reason to suspect criminal exposure, this is the
                first call, before any therapist, friend, or family member.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1.5 leading-snug">
                Most therapists are mandatory reporters.
              </h3>
              <p className="text-[0.9375rem] text-foreground leading-relaxed">
                In the United States, licensed mental-health professionals are required to report
                ongoing or past CSAM consumption to law enforcement in most states. The specifics
                vary; disclosure of an interest absent acting on it is treated differently than
                disclosure of actual offenses. Before disclosing, ask any clinician what their
                reporting obligations are in your state.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1.5 leading-snug">
                Anonymous prevention services are designed for this gap.
              </h3>
              <p className="text-[0.9375rem] text-foreground leading-relaxed">
                <Link href="https://troubled-desire.com/en/" className="text-accent underline underline-offset-2">
                  Troubled Desire
                </Link>{" "}
                stores no personal data and offers a Tor address. Stop It Now! operates under
                clinical confidentiality with explicit carve-outs only where the law requires.
                These services were built specifically so that people can get help before crossing
                lines that trigger mandatory reporting.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1.5 leading-snug">
                Friends and family are not legally protected.
              </h3>
              <p className="text-[0.9375rem] text-foreground leading-relaxed">
                Conversations with people you love are not privileged. Spouses have testimonial
                privilege in many US jurisdictions but it is narrower than people imagine. Clergy
                privilege varies by state and increasingly carves out child-protection situations.
                Treat these conversations as morally important but not legally protected.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-lg font-semibold mb-1.5 leading-snug">
                Internet activity is not anonymous to law enforcement.
              </h3>
              <p className="text-[0.9375rem] text-foreground leading-relaxed">
                Hash-matching, AI classification, and platform-level cooperation with NCMEC mean
                that CSAM consumption is reliably surfaced and routed to law enforcement. The
                practical takeaway is simple: assume detection, plan accordingly, and stop now.
                See Chapter 06 of the research for the technical landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-12">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                If you have not been charged
              </p>
              <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
                Four steps, in order.
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-4">
                For people who have not been arrested, contacted by law enforcement, or otherwise
                drawn formal attention. The window for confidential, voluntary help is open. Use
                it.
              </p>
            </div>
            <div className="md:col-span-8 space-y-7">
              {preCharge.map((s) => (
                <div key={s.kicker}>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-2 font-mono">
                    {s.kicker}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-warning-soft/40">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-warning font-semibold mb-3">
                If you are already in legal trouble
              </p>
              <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
                The order matters.
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-4">
                If you have been arrested, charged, contacted by an investigator, served with a
                search warrant, or interviewed by law enforcement.
              </p>
            </div>
            <div className="md:col-span-8 space-y-7">
              {postCharge.map((s) => (
                <div key={s.kicker}>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-warning font-semibold mb-2 font-mono">
                    {s.kicker}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-foreground">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Honest answers
              </p>
              <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
                Questions people in your situation ask.
              </h2>
            </div>
            <div className="md:col-span-8 space-y-8">
              {concerns.map((c) => (
                <div key={c.question}>
                  <h3 className="font-serif text-lg font-semibold mb-2 leading-snug">
                    {c.question}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-foreground">{c.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-14 md:py-16">
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
            Resources at a glance
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-8">
            Where to start
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
            {[
              {
                label: "Troubled Desire",
                detail: "Anonymous, online, 11 languages. Charité Berlin.",
                href: "https://troubled-desire.com/en/",
              },
              {
                label: "Feeling Good (David Burns)",
                detail: "Free CBT podcast + courses. The cognitive-distortion self-help model; nothing to disclose.",
                href: "https://feelinggood.com/",
              },
              {
                label: "Stop It Now! (US)",
                detail: "(888) 773-8368. Free, confidential.",
                href: "https://stopitnow.org",
              },
              {
                label: "Stop It Now! UK & Ireland",
                detail: "0808 1000 900. Lucy Faithfull Foundation.",
                href: "https://www.stopitnow.org.uk",
              },
              {
                label: "Prevention Project Dunkelfeld",
                detail: "Free in-person treatment in Germany.",
                href: "https://www.dont-offend.org",
              },
              {
                label: "Find a CSAT",
                detail: "Certified Sex Addiction Therapist directory.",
                href: "https://iitap.com/page/CSATFindATherapist",
              },
              {
                label: "988 (US) · 116 123 (UK & Ireland)",
                detail: "Crisis lifelines, 24/7.",
                href: "/get-help#crisis",
              },
            ].map((r) => (
              <li key={r.label} className="bg-background p-5">
                <h3 className="font-serif text-base font-semibold mb-1 leading-snug">
                  {r.label}
                </h3>
                <p className="text-[0.8125rem] text-muted leading-relaxed mb-3">{r.detail}</p>
                {r.href.startsWith("http") ? (
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline underline-offset-2"
                  >
                    Visit website ↗
                  </a>
                ) : (
                  <Link
                    href={r.href}
                    className="text-sm text-accent hover:underline underline-offset-2"
                  >
                    See list →
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-background">
        <div className="max-w-6xl mx-auto px-5 py-14 md:py-16">
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
                Informational, not legal or medical advice. The mandatory-reporting and
                confidentiality information on this page describes the typical US framework and
                does not substitute for jurisdiction-specific counsel.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                This page is written for people seeking help. The clinical and policy context
                lives in the research: <Link href="/report/escalation" className="text-accent underline underline-offset-2">Chapter 03 (Escalation)</Link>,{" "}
                <Link href="/report/interventions" className="text-accent underline underline-offset-2">Chapter 05 (Interventions)</Link>, and the resources on the{" "}
                <Link href="/get-help" className="text-accent underline underline-offset-2">Get Help</Link>{" "}page. For why demand-side prevention works &mdash; that seeking help is not the same as offending, and that treatment reduces risk &mdash; see{" "}
                <Link href="/prevention" className="text-accent underline underline-offset-2">Preventing Abuse Before It Happens</Link>.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If you are the family member, partner, or therapist of someone you suspect is
                struggling, see <Link href="/get-help#families" className="text-accent underline underline-offset-2">Get Help → Parents and families</Link>{" "}
                and the partner-support resources there. If you are an attorney with a CSAM client,
                see <Link href="/for-attorneys" className="text-accent underline underline-offset-2">For Attorneys</Link>.
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/get-help"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                ← All helplines and recovery resources
              </Link>
              <Link
                href="/for-attorneys"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                For attorneys →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
