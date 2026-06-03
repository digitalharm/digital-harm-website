import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Educators",
  description:
    "Practical playbooks for administrators, teachers, and school counselors handling pornography exposure, sexting incidents, sextortion, deepfake abuse, grooming disclosures, and compulsive online behavior among students.",
};

type Audience = "administrator" | "teacher" | "counselor";

type Scenario = {
  id: string;
  audience: Audience[];
  title: string;
  summary: string;
  firstSteps: string[];
  involve: string;
  doNot: string[];
  referTo: { label: string; href: string }[];
  reportingNote?: string;
  sampleLanguage?: string;
};

const audienceLabel: Record<Audience, string> = {
  administrator: "Administrators",
  teacher: "Teachers",
  counselor: "Counselors",
};

const scenarios: Scenario[] = [
  {
    id: "porn-on-school-device",
    audience: ["administrator", "teacher", "counselor"],
    title: "A student is found viewing pornography on a school device.",
    summary:
      "Common, often discovered through filtering alerts or by a classroom-walking teacher. The instinct toward shame and discipline backfires. Frame as a health and safety conversation, not a moral incident.",
    firstSteps: [
      "If you are the teacher who discovered it: close the device or angle the screen away calmly, without spectacle. Move on with the lesson. Address it privately afterward — never in front of peers.",
      "Document what was seen and the time, briefly, for the record.",
      "Notify the counselor or designated administrator the same day. Do not surface the student's identity to staff who don't need to know.",
      "Before any conversation with the student, decide who should lead it (counselor preferred over administrator preferred over teacher) and whether a parent should be present given the student's age and home situation.",
    ],
    involve:
      "Counselor leads the student conversation. Administrator handles policy, parent notification, and any device-level response. Teacher may be involved as the reporting party but should not lead the conversation.",
    doNot: [
      "Do not lecture about the moral wrongness of pornography.",
      "Do not announce or imply to other students that this happened.",
      "Do not assume the student sought the content out — much exposure is accidental, and many school-issued-device incidents involve content the student stumbled into.",
      "Do not make device-level consequences (revoking the device) the entire response. The student still needs the conversation.",
    ],
    referTo: [
      { label: "Curriculum: Culture Reframed", href: "https://culturereframed.org" },
      { label: "Recovery for compulsive use (if pattern emerges)", href: "/get-help#porn-recovery" },
    ],
    sampleLanguage:
      "I want to talk with you about something I saw on your screen earlier. You're not in trouble. I'd like to understand what was happening and how I can help. A lot of people see things online they didn't go looking for; if that's what happened, I want to know.",
  },
  {
    id: "image-shared",
    audience: ["counselor", "administrator"],
    title: "A student discloses that intimate images of them are being shared.",
    summary:
      "Often called \"sexting\" but the framing matters: if the images are being shared without the student's consent, this is image-based abuse — not a behavior problem in the depicted student. The depicted student is a victim and should be treated as one. Time matters: every hour the images circulate, harm compounds.",
    firstSteps: [
      "Believe the student. Thank them for telling you.",
      "Ask only the questions you need to take the immediate next steps. Avoid investigative interviewing — leave that to trained professionals.",
      "Help the student remove the images at the source where possible. NCMEC's Take It Down service is free, anonymous, and works for images of anyone under 18 at the time the image was taken.",
      "Notify the designated reporting officer / administrator immediately.",
      "Identify who is sharing the images. Their family, the platform, or law enforcement may need to be contacted depending on whether the sharing students are minors and the nature of the sharing.",
    ],
    involve:
      "Counselor leads the student-facing support. Administrator handles reporting and platform/law-enforcement coordination. Loop in a trusted family member only with the student's awareness, unless mandatory reporting overrides that.",
    doNot: [
      "Do not ask the student to send you a copy of the image. Do not view it.",
      "Do not ask why the image existed or imply they should not have taken it. That's victim-blaming and not the issue at hand.",
      "Do not delay the takedown request to gather more facts. Submit the takedown now and continue the investigation in parallel.",
      "Do not loop in other students or have a classroom-level conversation about \"what happened.\"",
    ],
    referTo: [
      { label: "Take It Down (NCMEC) — free image takedown", href: "https://takeitdown.ncmec.org" },
      { label: "NCMEC CyberTipline", href: "https://report.cybertip.org" },
      { label: "Cyber Civil Rights Initiative — survivor support", href: "https://cybercivilrights.org" },
      { label: "Get Help: support for survivors", href: "/get-help#survivors" },
    ],
    reportingNote:
      "If either the depicted student or anyone in the shared chain is under 18, the imagery is legally CSAM in most jurisdictions and reporting is mandatory. Submit to NCMEC's CyberTipline as the standard channel; state-specific reporting may also apply.",
    sampleLanguage:
      "Thank you for telling me. I'm sorry this is happening. You haven't done anything wrong. I'm going to help you take steps to stop it from spreading, and I'm going to be careful about who I involve. Can you walk me through what you know is being shared, and where?",
  },
  {
    id: "sextortion",
    audience: ["counselor", "administrator", "teacher"],
    title: "A student appears to be the target of sextortion.",
    summary:
      "Sextortion — someone threatening to release images unless the student sends more, pays money, or performs an act — is now one of the most common online predator tactics. Boys are increasingly the targets. The danger window is short: the FBI and NCMEC document cases of youth suicide within hours of the initial threat. Speed of response is part of the safety response.",
    firstSteps: [
      "Get the student to safety first. Suicide risk is documented and elevated in sextortion cases. Pause everything else.",
      "Tell the student plainly: this is not their fault, the perpetrator is the criminal, and law enforcement and NCMEC handle thousands of these cases.",
      "Help the student stop responding to the perpetrator immediately — do not pay, do not send more.",
      "Preserve evidence: screenshot the threats and the perpetrator's profile before blocking. The student can then block.",
      "Submit a CyberTipline report and contact local law enforcement. If the perpetrator is on a specific platform, also report there.",
    ],
    involve:
      "Counselor for the student's safety and ongoing support. Administrator for law-enforcement coordination and family notification. Teacher's role is to recognize the signs and refer — withdrawal, sudden distress, secretiveness with phone, panic — and bring it to the counselor immediately.",
    doNot: [
      "Do not delay the safety-and-suicide assessment to discuss the imagery. That comes first.",
      "Do not pressure the student to show you the images or messages — screenshots for evidence can be handled by law enforcement or NCMEC.",
      "Do not assume the perpetrator will stop if the student complies. Compliance escalates the demands; this is documented across thousands of cases.",
    ],
    referTo: [
      { label: "NCMEC CyberTipline — report immediately", href: "https://report.cybertip.org" },
      { label: "Take It Down — free image takedown", href: "https://takeitdown.ncmec.org" },
      { label: "988 Suicide & Crisis Lifeline", href: "https://988lifeline.org" },
      { label: "Get Help: emergency contacts", href: "/get-help#crisis" },
    ],
    reportingNote:
      "Mandatory reporting applies. CyberTipline reports go to law enforcement automatically. The FBI has a dedicated sextortion intake; local law enforcement can route there or you can contact the FBI directly.",
    sampleLanguage:
      "I'm glad you came to me. You're not in trouble and you haven't done anything wrong. The person threatening you is the one breaking the law, and there are people whose job is to stop them. Right now I want to make sure you're safe — can we talk about how you're feeling, and then I'll walk through the next steps with you?",
  },
  {
    id: "deepfakes",
    audience: ["administrator", "counselor"],
    title: "AI-generated deepfake nudes of a student are circulating.",
    summary:
      "A new and rapidly escalating category. A student's face is grafted onto a sexual image generated by AI tools. Even though no original explicit photo exists, the harm is real and the imagery is treated as CSAM under recent US federal law (ENFORCE Act, TAKE IT DOWN Act). The depicted student is a victim of image-based abuse.",
    firstSteps: [
      "Treat exactly as you would non-AI image-based abuse: depicted student is a victim; rapid takedown is the priority.",
      "Submit a Take It Down request — NCMEC's service works for AI-generated imagery of minors as well as photographic.",
      "Identify the generating student(s). The student who created the imagery has committed a serious offense; the response should involve discipline, family, and likely law enforcement.",
      "If the AI tool used is identifiable (a specific service or app), report it to the platform.",
      "Provide counseling support to the depicted student. The psychological harm of AI-generated imagery is documented to be comparable to non-AI image-based abuse.",
    ],
    involve:
      "Administrator owns the disciplinary and reporting response toward the generator. Counselor owns the support response toward the depicted student. Coordinate with the family of the depicted student, and with law enforcement.",
    doNot: [
      "Do not dismiss the harm because the image is \"fake.\" The harm to the depicted student is not fake.",
      "Do not handle the disciplinary response toward the generator quietly to \"protect the school.\" Federal and many state laws now require reporting.",
      "Do not let the conversation drift into a technical discussion of which AI tool was used while support for the depicted student is delayed.",
    ],
    referTo: [
      { label: "Take It Down — supports AI-generated imagery", href: "https://takeitdown.ncmec.org" },
      { label: "Cyber Civil Rights Initiative", href: "https://cybercivilrights.org" },
      { label: "Read the AI-Generated Content chapter for context", href: "/report/ai-generated" },
    ],
    reportingNote:
      "Under the ENFORCE Act (December 2025) and the TAKE IT DOWN Act (May 2025), AI-generated CSAM is criminally equivalent to traditional CSAM in the United States. CyberTipline reports are mandatory.",
    sampleLanguage:
      "I want to be clear about something. What's happening to you is real harm, regardless of how the image was made. We are going to treat this the same way we would treat any image-based abuse — quickly, seriously, and with you as the priority. Here is what we're going to do in the next hour.",
  },
  {
    id: "grooming",
    audience: ["counselor", "administrator", "teacher"],
    title: "A student's disclosures or behavior suggest they're being groomed by an adult.",
    summary:
      "Grooming usually starts online and progresses gradually: an adult builds trust, isolates the student from peers and family, introduces sexual content or conversation, then pressures for in-person contact or imagery. The student often does not perceive it as abuse until late in the process and may defend the adult.",
    firstSteps: [
      "If the disclosure includes any contact, request for images, or attempt to meet in person — treat as an emergency. CyberTipline immediately; law enforcement.",
      "If the disclosure is earlier-stage (an adult is having intense online conversations with them, sending gifts, asking them to keep secrets) — still escalate to counselor and administrator the same day.",
      "Do not interview the student in detail. A forensic interviewer trained for child-victim work should lead the substantive interview. Asking leading questions can compromise both the student's recall and any future investigation.",
      "Preserve evidence: do not have the student delete messages or block the adult yet. Get a screenshot, then proceed under law-enforcement guidance.",
    ],
    involve:
      "Administrator and counselor immediately. Family notification depends on whether the family may be the source of the contact (it often is not, but can be). Law enforcement and NCMEC for evidence preservation and investigation.",
    doNot: [
      "Do not press the student to share the content of conversations beyond what they've already disclosed.",
      "Do not have the student confront the adult or send a message asking the adult to stop.",
      "Do not have the student delete the conversation. Evidence preservation matters.",
      "Do not promise full confidentiality. Be honest about mandatory reporting.",
    ],
    referTo: [
      { label: "NCMEC CyberTipline", href: "https://report.cybertip.org" },
      { label: "FBI — local field office for online enticement", href: "https://www.fbi.gov/contact-us/field-offices" },
      { label: "Read the Exposure chapter for prevalence and patterns", href: "/report/exposure" },
    ],
    reportingNote:
      "Mandatory. Online enticement of a minor is a federal crime; reporting via CyberTipline is the standard route. In many jurisdictions, school personnel are explicit mandatory reporters for suspected child sexual exploitation.",
    sampleLanguage:
      "What you've told me sounds important. I'm not going to be able to keep this just between us, and I want to be honest with you about that. The reason is that there are people whose job is to make sure this stops — and they're better at it than I am. I'll stay involved and support you through what comes next.",
  },
  {
    id: "compulsive-use",
    audience: ["counselor", "teacher"],
    title: "A student appears to be struggling with compulsive pornography use.",
    summary:
      "Less acute than the other scenarios but more common: a student whose attention, mood, sleep, or social functioning is visibly affected and who confides — or whose family confides — that pornography use feels out of control. Treat as a behavioral-health concern, not a discipline problem.",
    firstSteps: [
      "Listen without moralizing. Compulsive use is well-characterized in the clinical literature; the student likely already feels shame.",
      "Screen for the comorbidities that usually accompany it: depression, anxiety, social isolation, trauma, sleep problems. The pornography use is often a coping strategy for one of these.",
      "Discuss with the student what kind of support would feel useful — counseling, an accountability tool, a structured recovery program. Do not force a single path.",
      "If indicated, refer to a Certified Sex Addiction Therapist (CSAT) or to evidence-based treatment (CBT or ACT have the strongest evidence base for problematic pornography use).",
      "Coordinate family communication carefully and only with the student's knowledge if the student is a minor and their safety is not at issue.",
    ],
    involve:
      "Counselor leads. Teacher's role is recognition and referral. Family involvement depends on age, family dynamics, and the student's preferences.",
    doNot: [
      "Do not equate compulsive use with moral failure or sexual deviance.",
      "Do not promise a quick fix. Recovery timelines are typically months to years and relapse is part of the trajectory.",
      "Do not skip the comorbidities screen. Treating only the symptom rarely works.",
    ],
    referTo: [
      { label: "Find a CSAT — clinical directory", href: "https://iitap.com/page/CSATFindATherapist" },
      { label: "SAMHSA National Helpline (US)", href: "https://www.samhsa.gov/find-help/national-helpline" },
      { label: "Apps directory: recovery program apps", href: "/apps#recovery-programs" },
      { label: "Get Help: recovery resources", href: "/get-help#porn-recovery" },
    ],
    sampleLanguage:
      "Thanks for being honest with me about this. A lot of people struggle with it and almost no one talks about it. There are real tools and treatments that help, and there's no version of this conversation where I'm going to be disappointed in you. Want to talk about what would feel like the right next step?",
  },
];

const principles: { heading: string; body: string }[] = [
  {
    heading: "Respond with curiosity, not punishment.",
    body: "Most situations in this list are health, safety, or victimization issues — not behavior problems. A punitive first reaction shuts down disclosure and damages the student's willingness to come back when they need help next time.",
  },
  {
    heading: "Believe the student.",
    body: "Particularly when a student discloses image-based abuse, sextortion, or grooming, the cost of an over-believed disclosure is small and the cost of an under-believed one can be catastrophic. Default to belief; investigate carefully but separately.",
  },
  {
    heading: "Don't investigate alone.",
    body: "For anything involving disclosure of abuse, do not conduct a substantive forensic interview. Document only what's needed to take the next step. Trained professionals do the deeper interviewing; well-meaning questions from staff can compromise both the student's recall and any future case.",
  },
  {
    heading: "Speed matters in some scenarios; speed is dangerous in others.",
    body: "Sextortion, active grooming, and circulating intimate imagery require same-hour response. Disclosure of past abuse, compulsive use, or accidental exposure benefits from a calmer, planned response. Match the tempo to the situation.",
  },
  {
    heading: "Know your mandatory reporting obligations.",
    body: "School personnel in most US jurisdictions are mandatory reporters for suspected child sexual exploitation. Reporting and supporting the student are not in tension — both happen. Be honest with the student upfront about what you can and cannot keep confidential.",
  },
];

export default function ForEducatorsPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For administrators, teachers, and school counselors
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            A practical playbook for situations you weren&apos;t trained for.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            Six common scenarios — pornography on a school device, sexting incidents, sextortion,
            AI-generated deepfakes, grooming concerns, compulsive use — with calm, specific first
            steps, what not to do, and where to refer. Designed to be useful in the moment, not
            studied beforehand.
          </p>
        </div>
      </header>

      <nav className="border-b border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
            Jump to a situation
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {scenarios.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="text-foreground hover:text-accent underline-offset-2 hover:underline"
                >
                  {s.title.replace(/\.$/, "")}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-14 md:py-16 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              Universal principles
            </p>
            <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
              Read these first.
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              They apply to every scenario below and to many situations not on this list.
            </p>
          </div>
          <div className="md:col-span-8 space-y-7">
            {principles.map((p) => (
              <div key={p.heading}>
                <h3 className="font-serif text-lg font-semibold mb-1.5 leading-snug">
                  {p.heading}
                </h3>
                <p className="text-[0.9375rem] text-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-warning-soft/50">
        <div className="max-w-6xl mx-auto px-5 py-10 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-warning font-semibold mb-2">
              Legal note
            </p>
            <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight">
              Mandatory reporting
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[0.9375rem] text-foreground leading-relaxed">
              School personnel in nearly all US jurisdictions are mandatory reporters for suspected
              child sexual exploitation. Reporting obligations vary by state for other categories
              (peer-to-peer sexting, deepfakes), and federal law (ENFORCE Act, TAKE IT DOWN Act)
              now criminalizes AI-generated CSAM. The{" "}
              <a
                href="https://report.cybertip.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                NCMEC CyberTipline
              </a>{" "}
              is the standard reporting channel and routes to law enforcement automatically.
              Consult your district&apos;s legal counsel for jurisdiction-specific obligations.
              This page is informational, not legal advice.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 space-y-20">
        {scenarios.map((s, idx) => (
          <section key={s.id} id={s.id} className="scroll-mt-20">
            <div className="mb-8">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="font-mono text-xs text-subtle tabular-nums">
                  §{String(idx + 1).padStart(2, "0")}
                </span>
                {s.audience.map((a) => (
                  <span
                    key={a}
                    className="text-[10px] uppercase tracking-[0.12em] font-medium text-muted bg-paper border border-rule px-1.5 py-0.5 rounded"
                  >
                    {audienceLabel[a]}
                  </span>
                ))}
              </div>
              <h2 className="font-serif text-[1.75rem] md:text-[2.25rem] font-semibold tracking-tight leading-tight mb-4 max-w-3xl">
                {s.title}
              </h2>
              <p className="font-serif text-[1.0625rem] leading-[1.7] text-foreground max-w-3xl">
                {s.summary}
              </p>
            </div>

            <div className="grid md:grid-cols-12 gap-8 md:gap-10">
              <div className="md:col-span-7">
                <h3 className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-4">
                  First steps
                </h3>
                <ol className="space-y-3 mb-10">
                  {s.firstSteps.map((step, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-[auto_1fr] gap-3.5 text-[0.9375rem] leading-relaxed"
                    >
                      <span className="font-mono text-xs text-subtle tabular-nums pt-1.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>

                <h3 className="text-[11px] uppercase tracking-[0.18em] text-crisis font-semibold mb-4">
                  What not to do
                </h3>
                <ul className="space-y-2 mb-10">
                  {s.doNot.map((item, i) => (
                    <li
                      key={i}
                      className="pl-5 relative text-[0.9375rem] leading-relaxed text-foreground"
                    >
                      <span
                        className="absolute left-0 top-2.5 w-2 h-px bg-crisis"
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {s.sampleLanguage && (
                  <div className="border-l-2 border-accent pl-5 py-1 mb-2">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-muted font-semibold mb-2">
                      Sample language
                    </p>
                    <p className="font-serif text-[1.0625rem] italic leading-snug text-foreground">
                      &ldquo;{s.sampleLanguage}&rdquo;
                    </p>
                  </div>
                )}
              </div>

              <aside className="md:col-span-5 space-y-7">
                <div className="border border-rule bg-paper p-5 rounded-md">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2">
                    Who to involve
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-foreground">
                    {s.involve}
                  </p>
                </div>

                {s.reportingNote && (
                  <div className="border-l-2 border-warning bg-warning-soft/40 p-5 rounded-r-md">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-warning font-semibold mb-2">
                      Mandatory reporting
                    </p>
                    <p className="text-[0.9375rem] leading-relaxed text-foreground">
                      {s.reportingNote}
                    </p>
                  </div>
                )}

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-subtle font-semibold mb-3">
                    Refer to
                  </p>
                  <ul className="space-y-2">
                    {s.referTo.map((r) => {
                      const external = r.href.startsWith("http");
                      return (
                        <li key={r.href} className="text-[0.9375rem]">
                          {external ? (
                            <a
                              href={r.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-accent hover:underline underline-offset-2"
                            >
                              {r.label} ↗
                            </a>
                          ) : (
                            <Link
                              href={r.href}
                              className="text-accent hover:underline underline-offset-2"
                            >
                              {r.label} →
                            </Link>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </aside>
            </div>
          </section>
        ))}

        <section className="border-t border-rule pt-16">
          <div className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Beyond the situations
              </p>
              <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
                Curriculum and prevention.
              </h2>
              <p className="text-sm text-muted leading-relaxed mt-4">
                The strongest schools don&apos;t wait for incidents. Prevention is curriculum.
              </p>
            </div>
            <div className="md:col-span-8 prose-research">
              <p>
                The research base on pornography-specific educational programs is thin compared to
                drug or violence prevention, but a clear pattern has emerged: lecture-based
                approaches don&apos;t work (the D.A.R.E. model is the cautionary example), while
                interactive, peer-centered designs with emotional-competency building outperform.
                Two organizations have built defensible, non-religious curricula schools can adopt
                without political baggage:
              </p>
              <ul>
                <li>
                  <a
                    href="https://culturereframed.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Culture Reframed
                  </a>{" "}
                  — public-health framework with free parent courses and a porn-critical
                  curriculum for adolescents launched 2023. Their working group with Child Advocacy
                  Centers is a useful reference model.
                </li>
                <li>
                  <a
                    href="https://www.rewardfoundation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reward Foundation
                  </a>{" "}
                  (UK) — free professional courses on the neurological impacts, originally
                  approved by the Royal College of General Practitioners.
                </li>
                <li>
                  The <em>Navigating Realities</em> framework (
                  <a
                    href="https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1509262/full"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Frontiers in Education
                  </a>
                  ) integrates critical thinking, consent education, and reality/fantasy
                  distinction using a rights-based framework.
                </li>
              </ul>
              <p>
                The single most underused intervention is also the simplest: train counselors to
                screen routinely for compulsive pornography use during behavioral-health intake.
                Many students are looking for permission to bring it up; routine screening creates
                the permission.
              </p>
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
                Informational, not legal advice. Mandatory-reporting law varies by jurisdiction.
                Consult your district&apos;s legal counsel and the relevant state agency before
                building this into formal protocol.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The scenarios are the most common categories we observe in the literature and in
                practitioner reports. They are not exhaustive. Edge cases — a student displaying
                concerning sexual interest in younger peers, a staff member of concern, a parent
                whose own behavior is the issue — require case-by-case professional judgment.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If you operate in the United States and have not already done so, designate a
                primary CyberTipline reporter for your school or district so that the
                first-encounter teacher always has a clear handoff.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The clinical and policy context behind these playbooks lives in the research:
                see <Link href="/report/exposure" className="text-accent underline underline-offset-2">
                  Chapter 01: Early Exposure
                </Link>
                , <Link href="/report/ai-generated" className="text-accent underline underline-offset-2">
                  Chapter 04: AI-Generated Content
                </Link>
                , and <Link href="/report/prevention" className="text-accent underline underline-offset-2">
                  Chapter 07: Prevention Strategies
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
                href="/for-offenders"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                For people seeking help →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
