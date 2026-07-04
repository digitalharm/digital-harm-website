import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "For Survivors",
  description:
    "Survivor-centered guidance for people who have experienced sexual abuse, image-based abuse, sextortion, or grooming — at any point, recent or historical. Trauma-informed support, removal of circulating imagery, optional reporting paths, and resources for the people who love them.",
};

type Principle = { heading: string; body: string };

const principles: Principle[] = [
  {
    heading: "It was not your fault.",
    body: "Anyone who hurt you, anyone who took or shared an image of you without your consent, anyone who threatened or coerced you — they are the responsible party. Full stop. The argument you may be having with yourself about whether you could have prevented it is one a long line of survivors before you also had, and the answer is the same.",
  },
  {
    heading: "Trauma reactions are not weakness.",
    body: "Flashbacks, sleep problems, numbness, anxiety, anger, dissociation, complicated feelings about the person who harmed you, and the wish that you could just stop thinking about it — all of these are documented responses, not personal failures. They are also treatable. The brain is doing what brains do; it can be helped to do something different.",
  },
  {
    heading: "You decide the timeline.",
    body: "Telling anyone, reporting to anyone, getting therapy, removing imagery, talking to family — none of these have a deadline you missed. People disclose decades after the event. People disclose in pieces. People choose never to disclose to certain people in their life and that's a legitimate decision. The order, the audience, and the speed are yours.",
  },
  {
    heading: "Different paths lead to different needs.",
    body: "Someone who experienced childhood sexual abuse decades ago and someone whose intimate images were shared last week and someone being actively sextorted right now need different things in different orders. This page tries to lay out the options without telling you which one applies to you. You know better than anyone reading along with you.",
  },
  {
    heading: "Trauma-informed care is a specific thing.",
    body: "Not all therapists are trained in it. The modalities with the strongest evidence base for sexual-trauma recovery — EMDR, Trauma-Focused CBT, Internal Family Systems, somatic experiencing, prolonged exposure — are specific approaches, and finding a therapist who actually uses them is worth the extra step over taking the first available appointment.",
  },
];

type Step = { kicker: string; body: string };

const imageRemoval: Step[] = [
  {
    kicker: "01 · Take It Down (for imagery taken before age 18)",
    body: "NCMEC operates Take It Down — a free, anonymous service that uses hash technology to help remove or prevent the sharing of explicit images of someone taken when they were under 18. You generate a hash of the image yourself; the image itself never leaves your device. The hash is shared with participating platforms (Meta, Pornhub, OnlyFans, TikTok, Snapchat, X, and others) which match against new uploads. Imperfect, but real.",
  },
  {
    kicker: "02 · StopNCII.org (for adult intimate images)",
    body: "Run by the UK Revenge Porn Helpline in partnership with Meta and other platforms. Same hash-based approach as Take It Down but for images of adults. Free, the image stays on your device, and the hash is propagated to participating platforms. Pair it with Take It Down if some imagery is from before age 18 and some after.",
  },
  {
    kicker: "03 · Direct platform reporting",
    body: "Most major platforms (Meta, Google, Reddit, X, OnlyFans, Pornhub, Discord) have dedicated non-consensual intimate imagery reporting channels separate from general abuse reports. The Cyber Civil Rights Initiative maintains an updated list of these channels and the most effective wording for each. Direct platform reporting is the fastest path for material currently visible on a specific site.",
  },
  {
    kicker: "04 · Be honest about what's possible",
    body: "Once imagery has spread, full removal is rarely achievable — material that has been downloaded, shared on private channels, or hosted on non-cooperating sites continues to exist. The combination of hash-matching takedowns, platform reports, and DMCA notices substantially reduces visibility but does not eliminate it. This is not a moral failing of the systems or of you; it is the nature of the medium. Acknowledging it is part of taking care of yourself going forward.",
  },
];

const reportingSteps: Step[] = [
  {
    kicker: "01 · You do not have to report",
    body: "Reporting is one option, not an obligation. For some survivors it is part of recovery; for others it is harmful. There is no correct choice and no moral hierarchy. The decision deserves time and, ideally, conversation with a trauma-informed therapist or advocate before being made.",
  },
  {
    kicker: "02 · For active or recent harm: 911 or local law enforcement first",
    body: "If you are in immediate danger, if the person is still in your life, or if the imagery is being actively distributed and you want law enforcement involved now, 911 is the right channel. Many police departments have trained sexual assault investigators; some don't, and the experience is uneven. A victim advocate (often available through your local sexual assault crisis center) can accompany you.",
  },
  {
    kicker: "03 · For CSAM (imagery from when you were a minor): NCMEC CyberTipline",
    body: "The CyberTipline is the routing layer for online child sexual exploitation. Survivors can file reports about imagery of themselves; the system is set up to handle this with care. The report goes to law enforcement automatically. Filing is anonymous if you choose. Many survivors find the process itself difficult; some find it grounding. The Canadian Centre for Child Protection also runs a survivor support program (Project Arachnid Survivor Services) specifically for this experience.",
  },
  {
    kicker: "04 · For sextortion: FBI and NCMEC",
    body: "Sextortion is a federal crime; the FBI has dedicated intake. NCMEC CyberTipline routes there automatically. Critically: do not pay, do not send more imagery, do not engage further with the perpetrator. The harm escalates when victims comply; the FBI handles thousands of these cases. Save what you can (screenshots of the threats and the perpetrator's profile) before blocking.",
  },
  {
    kicker: "05 · Civil options separate from criminal",
    body: "Many US states now have civil causes of action specifically for non-consensual intimate imagery and AI-generated sexual content. The Cyber Civil Rights Initiative maintains a state-by-state index. Civil cases can produce removal orders, damages, and accountability when criminal cases stall. They are not free, but contingency arrangements are common.",
  },
];

const therapySteps: Step[] = [
  {
    kicker: "01 · Look for trauma-specific modalities",
    body: "The therapies with the strongest evidence base for sexual trauma include EMDR (Eye Movement Desensitization and Reprocessing), Trauma-Focused CBT, Internal Family Systems (IFS), somatic experiencing, and prolonged exposure. These are specific, named approaches — when you contact a therapist, ask whether they are trained in one or more of these and how often they treat sexual-trauma survivors specifically. Many capable general therapists are not the right fit for this work.",
  },
  {
    kicker: "02 · The directories",
    body: "Psychology Today's directory is the broadest; filter by issue (sexual abuse, PTSD, trauma) and by modality. EMDRIA maintains a directory specifically of EMDR-trained therapists. ISSTD (International Society for the Study of Trauma & Dissociation) lists trauma-and-dissociation specialists. For low-cost options, Open Path Collective lists sliding-scale therapists at $30–80/session.",
  },
  {
    kicker: "03 · Survivor-specific organizations",
    body: "RAINN operates the National Sexual Assault Hotline and can route you to local trauma-informed services. 1in6 specializes in male survivors of childhood sexual abuse and runs free online support groups. The Survivors Trust (UK) maintains a directory of specialist services. Pandora's Aquarium hosts a long-running online survivor community. Adult Survivors of Child Abuse (ASCA) runs structured group programs.",
  },
  {
    kicker: "04 · Pace matters",
    body: "The wish to \"get over it as quickly as possible\" is universal and is also at odds with how trauma processing actually works. A good trauma therapist will move at a pace your nervous system can tolerate. If a therapist is pushing you faster than feels safe, or asking you to do detailed retelling before you have stabilization skills in place, that is a sign to slow down or change therapists. The phase-based model (safety and stabilization → processing → integration) is widely accepted; reputable therapists follow it.",
  },
];

const concerns: { question: string; answer: string }[] = [
  {
    question: "Is it normal that I still feel this way years (or decades) later?",
    answer:
      "Yes. Time alone does not heal sexual trauma the way it heals many other wounds. The body and brain encode these events differently from ordinary memory, which is why the symptoms can return suddenly, feel current rather than past, and respond to triggers that seem unrelated. The good news embedded in this is that targeted therapy works at any timeline — people in their 60s and 70s have processed childhood abuse with the same success rates as people closer to the event.",
  },
  {
    question: "I have complicated feelings about the person who hurt me. Is that normal?",
    answer:
      "Yes, and it is one of the most documented and least talked-about parts of survivor experience. Many survivors love or have loved the person who harmed them, particularly when the perpetrator was a family member, caregiver, partner, or trusted authority. This does not make your trauma less real, your reaction less valid, or the harm less serious. It is a normal response to abusive relationships and a recurring theme in trauma therapy.",
  },
  {
    question: "Do I have to tell my therapist exactly what happened?",
    answer:
      "No. A good trauma therapist will not require detailed disclosure before treatment begins — early therapy focuses on stabilization, safety, and skill-building. Detailed processing comes later, on your timeline, and even then in pieces you choose. If a therapist insists on a full account in early sessions, that's a sign they are not using a trauma-informed approach. You can say \"I'm not ready to talk about details yet\" and a good therapist will work with that.",
  },
  {
    question: "If imagery of me is online, is it ever going to come down?",
    answer:
      "Some of it, sometimes. Take It Down and StopNCII.org reduce circulation on participating platforms substantially. Material on non-cooperating sites and material that has been downloaded to private collections continues to exist. This is the hardest reality of CSAM survivorship for adults whose childhood imagery circulates: the harm is ongoing, and the technology to fully reverse it does not exist. The Phoenix 11 survivor advocacy group writes and speaks publicly about this experience and the policy response it deserves. You are not alone in it.",
  },
  {
    question: "Will reporting force me to testify or relive it in court?",
    answer:
      "In most cases, no immediate court appearance is required to make a report. Criminal cases — when they advance — can require testimony, but most reports do not result in prosecution, and even prosecutions often resolve in plea agreements without victim testimony. Victim advocates can walk you through what to expect in your jurisdiction. Civil cases are different and more in your control. Reporting and pursuing a case are two separate decisions.",
  },
  {
    question: "Should I tell my partner / family / employer?",
    answer:
      "Each of these is a separate decision, and there is no requirement for any of them. Partners who don't know that something happened sometimes notice symptoms and may benefit from understanding the cause; many survivors describe relief after telling a trusted partner. Family disclosures are often more complicated, especially when the perpetrator was a family member. Employers almost never need to know. A therapist or advocate can help you think through who to tell, when, and how.",
  },
];

const resources = [
  {
    label: "Take It Down (NCMEC)",
    detail: "Free hash-based removal for imagery taken before age 18.",
    href: "https://takeitdown.ncmec.org",
  },
  {
    label: "StopNCII.org",
    detail: "Free hash-based removal for adult intimate imagery. UK Revenge Porn Helpline + Meta.",
    href: "https://stopncii.org",
  },
  {
    label: "RAINN — National Sexual Assault Hotline",
    detail: "1-800-656-4673, 24/7. Confidential, free.",
    href: "https://www.rainn.org",
  },
  {
    label: "1in6 — male survivors of childhood sexual abuse",
    detail: "Free online support groups, peer chat, helpline.",
    href: "https://1in6.org",
  },
  {
    label: "Cyber Civil Rights Initiative",
    detail: "1-844-878-2274. Image-based abuse, including deepfakes.",
    href: "https://cybercivilrights.org",
  },
  {
    label: "Revenge Porn Helpline (UK)",
    detail: "0345 6000 459. Confidential support, AI-deepfake response.",
    href: "https://revengepornhelpline.org.uk",
  },
  {
    label: "Project Arachnid Survivor Services (Canadian Centre for Child Protection)",
    detail: "Dedicated support for survivors of CSAM circulation.",
    href: "https://protectchildren.ca/en/resources-research/survivor-services/",
  },
  {
    label: "Phoenix 11",
    detail: "Survivor-led advocacy specifically for survivors of CSAM circulation.",
    href: "https://www.thephoenix11.com",
  },
  {
    label: "The Survivors Trust (UK)",
    detail: "Directory of specialist services across the UK.",
    href: "https://www.thesurvivorstrust.org",
  },
  {
    label: "EMDRIA — find an EMDR therapist",
    detail: "Directory of clinicians trained in EMDR specifically.",
    href: "https://www.emdria.org/find-an-emdr-therapist/",
  },
  {
    label: "Open Path Collective",
    detail: "Sliding-scale therapists at $30–80/session.",
    href: "https://openpathcollective.org",
  },
  {
    label: "988 (US) · 116 123 (UK & Ireland)",
    detail: "Crisis lifelines, 24/7.",
    href: "/get-help#crisis",
  },
];

export default function ForVictimsPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/for-victims" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For survivors and victims
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            If something happened to you. You don&apos;t have to figure it all out today.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            For people who have experienced sexual abuse, image-based abuse, sextortion, or
            grooming — recently or long ago. The pages and helplines below were chosen for being
            trauma-informed, survivor-led where possible, and honest about what they can and
            cannot do.
          </p>
          <p className="text-sm text-subtle mt-6 max-w-2xl">
            We use &ldquo;survivor&rdquo; throughout this page because most people who have lived
            through this prefer it, but &ldquo;victim&rdquo; is also a legitimate and accurate
            word. Use whichever feels right for you.
          </p>
        </div>
      </header>

      <section className="border-b border-rule bg-crisis-soft/60 no-print">
        <div className="max-w-6xl mx-auto px-5 py-7 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-9">
            <p className="text-[10px] uppercase tracking-[0.18em] text-crisis font-semibold mb-1.5">
              If you are in immediate distress
            </p>
            <p className="text-[0.9375rem] text-foreground leading-relaxed">
              Call or text <strong>988</strong> in the United States or{" "}
              <strong>116 123</strong> in the UK and Ireland. The{" "}
              <strong>RAINN National Sexual Assault Hotline</strong> at{" "}
              <strong>1-800-656-4673</strong> is free, confidential, and 24/7. You will be
              believed; you do not need to disclose details to be supported.
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
              Five things people often need to hear.
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              These apply whether the harm was last week or fifty years ago.
            </p>
          </div>
          <div className="md:col-span-8 space-y-7">
            {principles.map((p) => (
              <div key={p.heading}>
                <h3 className="font-serif text-lg font-semibold mb-1.5 leading-snug">
                  {p.heading}
                </h3>
                <p className="text-[0.9375rem] text-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              If imagery exists
            </p>
            <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
              Removing what can be removed.
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              If intimate or sexual imagery of you is circulating online — taken when you were a
              minor, taken as an adult without your consent, taken consensually then shared
              without consent, or generated by AI. None of these require you to view, hold, or
              transmit the imagery yourself.
            </p>
          </div>
          <div className="md:col-span-8 space-y-7">
            {imageRemoval.map((s) => (
              <div key={s.kicker}>
                <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-2 font-mono">
                  {s.kicker}
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              If you want to report
            </p>
            <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
              Reporting is an option, not a duty.
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              These are the formal channels if you want to use them. Many survivors choose not
              to, or wait years. That is a legitimate choice. If you decide to report, an
              advocate can help you navigate it.
            </p>
          </div>
          <div className="md:col-span-8 space-y-7">
            {reportingSteps.map((s) => (
              <div key={s.kicker}>
                <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-2 font-mono">
                  {s.kicker}
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              If you want therapy
            </p>
            <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
              Finding the right kind of help.
            </h2>
            <p className="text-sm text-muted leading-relaxed mt-4">
              Trauma-informed care is a specific approach. General therapists are not always
              trained in it. These are the modalities, directories, and survivor-specific
              organizations with the strongest evidence base.
            </p>
          </div>
          <div className="md:col-span-8 space-y-7">
            {therapySteps.map((s) => (
              <div key={s.kicker}>
                <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-2 font-mono">
                  {s.kicker}
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-paper">
        <div className="max-w-6xl mx-auto px-5 py-14 md:py-16 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              If you love someone who has been harmed
            </p>
            <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold tracking-tight leading-tight">
              Supporting a survivor.
            </h2>
          </div>
          <div className="md:col-span-8 prose-research">
            <p>
              Partners, family members, and close friends play a significant role in survivor
              recovery — research consistently shows that the response to disclosure is one of
              the strongest predictors of long-term outcomes. A few things that the trauma
              literature is clear about:
            </p>
            <ul>
              <li>
                <strong>Believe them first. Ask questions later, if at all.</strong> The
                disclosure conversation is not the time to clarify details or test the story.
              </li>
              <li>
                <strong>Don&apos;t demand a path of action.</strong> Many well-meaning loved
                ones push for reporting, confrontation, or particular treatments. The survivor
                gets to choose the timeline and the path.
              </li>
              <li>
                <strong>Don&apos;t make the disclosure about your reaction.</strong> Strong
                feelings (rage, grief, guilt for not noticing) are valid and need somewhere to
                go — that somewhere should not be the survivor.
              </li>
              <li>
                <strong>Take care of your own secondary trauma.</strong> Partners and parents
                of survivors experience documented secondary trauma. The Recovery Ranch and
                similar resources note that partners often benefit most from independent
                support — their own therapist, a partner-of-survivors group, a trusted friend
                — rather than relying on the survivor as the primary source of processing.
              </li>
              <li>
                <strong>Be patient with non-linear recovery.</strong> Setbacks, anniversary
                reactions, and triggered episodes are part of the process, not signs of
                failure or regression. The trajectory matters more than the day-to-day.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              Honest answers
            </p>
            <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
              Questions survivors actually ask.
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
            {resources.map((r) => (
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
                Informational, not therapy or legal advice. Specific decisions about therapy,
                reporting, civil action, or disclosure benefit from working with a
                trauma-informed clinician or advocate who knows your situation and jurisdiction.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The page tries to be honest about what removal of online imagery can and cannot
                achieve. We didn&apos;t want to set up expectations the technology cannot meet.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If you are searching this site looking for resources for your own use of CSAM or
                concerning sexual thoughts, those are also covered here — see{" "}
                <Link
                  href="/for-offenders"
                  className="text-accent underline underline-offset-2"
                >
                  For People Seeking Help
                </Link>
                . They are not the same audience as this page but both exist on this site
                because the realistic response to this set of harms includes paths for everyone
                involved.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                For the underlying research and policy context, see the chapters —
                particularly <Link href="/report/exposure" className="text-accent underline underline-offset-2">Chapter 01 (Early Exposure)</Link>,{" "}
                <Link href="/report/ai-generated" className="text-accent underline underline-offset-2">Chapter 04 (AI-Generated Content)</Link>, and{" "}
                <Link href="/report/prevention" className="text-accent underline underline-offset-2">Chapter 07 (Prevention)</Link>.
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
                href="/get-help#survivors"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                Full survivor resource list →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
