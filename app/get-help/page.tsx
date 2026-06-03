import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProgram } from "@/components/featured-program";

export const metadata: Metadata = {
  title: "Get Help",
  description:
    "Confidential helplines and recovery resources for problematic pornography use, individuals concerned about sexual interest in minors, parents, partners, and survivors.",
};

type Resource = {
  name: string;
  region: string;
  description: string;
  contact?: string;
  url?: string;
  cost?: string;
};

type Group = {
  id: string;
  label: string;
  tone: "info" | "crisis" | "warning";
  heading: string;
  blurb: string;
  resources: Resource[];
};

const groups: Group[] = [
  {
    id: "crisis",
    label: "If you are in immediate danger",
    tone: "crisis",
    heading: "Emergency contacts",
    blurb:
      "If you or someone else is in immediate danger, contact local emergency services. The contacts below are for crisis support and suicide prevention.",
    resources: [
      {
        name: "988 Suicide and Crisis Lifeline",
        region: "United States",
        description:
          "Free, confidential 24/7 support for people in distress, including those struggling with compulsive behavior and shame.",
        contact: "Call or text 988",
        url: "https://988lifeline.org",
      },
      {
        name: "Samaritans",
        region: "United Kingdom & Ireland",
        description:
          "24/7 listening support for anyone struggling, including emotional crises related to compulsive sexual behavior.",
        contact: "116 123",
        url: "https://www.samaritans.org",
      },
      {
        name: "Crisis Text Line",
        region: "US, UK, Canada, Ireland",
        description:
          "Free, 24/7 text-based crisis support from trained counselors.",
        contact: "Text HOME to 741741 (US/Canada), 85258 (UK), 50808 (Ireland)",
        url: "https://www.crisistextline.org",
      },
    ],
  },
  {
    id: "porn-recovery",
    label: "Help with pornography use",
    tone: "info",
    heading: "Recovery from problematic pornography use",
    blurb:
      "If your pornography use feels out of control, evidence supports both professional treatment and structured peer support. Cognitive Behavioral Therapy and Acceptance and Commitment Therapy have the strongest evidence base.",
    resources: [
      {
        name: "SAMHSA National Helpline",
        region: "United States",
        description:
          "Free, confidential 24/7 referral service for mental health and substance use issues, including behavioral addictions.",
        contact: "1-800-662-4357",
        url: "https://www.samhsa.gov/find-help/national-helpline",
        cost: "Free",
      },
      {
        name: "Find a CSAT (Certified Sex Addiction Therapist)",
        region: "International",
        description:
          "Directory of clinicians specifically trained to treat compulsive sexual behavior, maintained by IITAP.",
        url: "https://iitap.com/page/CSATFindATherapist",
      },
      {
        name: "Dr. Jerel Armstrong, Ph.D. — Forensic Psychology",
        region: "San Francisco Bay Area · CA PSY27272",
        description:
          "Forensic psychology practice offering clinical evaluation and treatment for hypersexuality, compulsive sexual behavior, and paraphilic disorders. Uses validated assessments (Static-99R, Stable-2007, AASI-3, PPG) and provides expert testimony. Adults and juveniles. Useful when a formal diagnostic or forensic evaluation is needed alongside or instead of self-directed recovery.",
        contact: "(628) 399-1748",
        url: "https://www.armstrongphd.com/",
      },
      {
        name: "Sex Addicts Anonymous (SAA)",
        region: "International",
        description:
          "12-step fellowship for those wanting to stop addictive sexual behavior. Free meetings, in-person and online.",
        url: "https://saa-recovery.org",
        cost: "Free",
      },
      {
        name: "Sexaholics Anonymous (SA)",
        region: "International",
        description:
          "12-step program with a specific sobriety definition. Research shows step advancement predicts reduced compulsive behavior.",
        url: "https://sa.org",
        cost: "Free",
      },
      {
        name: "r/PornFree",
        region: "Online",
        description:
          "Peer support community focused on quitting pornography. Less rigid than abstinence-only forums; emphasizes harm reduction.",
        url: "https://www.reddit.com/r/PornFree/",
        cost: "Free",
      },
      {
        name: "Fortify (by Fight the New Drug)",
        region: "International",
        description:
          "Science-based recovery app with educational modules and progress tracking. Non-religious.",
        url: "https://www.joinfortify.com",
      },
    ],
  },
  {
    id: "offender-prevention",
    label: "Help with sexual interest in minors",
    tone: "warning",
    heading: "Confidential support before harm occurs",
    blurb:
      "If you are concerned about your own sexual thoughts or behavior involving minors, confidential and legally protected help exists. Seeking help is not the same as offending. The resources below are designed specifically for prevention.",
    resources: [
      {
        name: "Stop It Now!",
        region: "US · UK & Ireland · Netherlands · Australia",
        description:
          "Free, confidential helpline for anyone concerned about their own thoughts or behavior toward children, or someone else's. Operated by the Safer Society Foundation (US) and the Lucy Faithfull Foundation (UK & Ireland), with sister programs in the Netherlands and Australia. Seeking help is not the same as offending.",
        contact:
          "US: 1-888-773-8368 · UK/IE: 0808 1000 900 · AU: 1800 01 1800",
        url: "https://stopitnow.org",
        cost: "Free",
      },
      {
        name: "Troubled Desire",
        region: "Worldwide (11 languages) · run by Charité Berlin",
        description:
          "Anonymous online self-help platform for people experiencing sexual attraction to children. Self-assessment session, knowledge resources, online counseling, and pathways to therapist contact. Run by the Institute of Sexology and Sexual Medicine at Charité – Universitätsmedizin Berlin (the medical university that operates Prevention Project Dunkelfeld), co-funded by the European Union. Available in English, German, Spanish, Arabic, Tagalog, Portuguese, Czech, Polish, Romanian, Maltese, and Lithuanian. Tor address also available for additional privacy.",
        url: "https://troubled-desire.com/en/",
        cost: "Free",
      },
      {
        name: "Prevention Project Dunkelfeld (Don't Offend)",
        region: "Germany",
        description:
          "The most studied primary prevention program in the world. Free, medically confidential in-person treatment combining behavioral therapy, sexual medicine, and pharmacological options. Operated by Charité Berlin, the same institution behind Troubled Desire.",
        url: "https://www.dont-offend.org",
        cost: "Free",
      },
    ],
  },
  {
    id: "families",
    label: "Parents and families",
    tone: "info",
    heading: "Support for parents, partners, and families",
    blurb:
      "If you have discovered concerning behavior in a loved one, or want to begin proactive conversations with your child, these resources offer evidence-based guidance.",
    resources: [
      {
        name: "Culture Reframed",
        region: "International",
        description:
          "Free, research-based parent courses (Program for Parents of Tweens, Program for Parents of Teens) on pornography's impact and family conversation.",
        url: "https://culturereframed.org",
        cost: "Free",
      },
      {
        name: "Internet Matters",
        region: "United Kingdom",
        description:
          "Practical, parent-focused guides on setting up parental controls and having age-appropriate conversations.",
        url: "https://www.internetmatters.org",
        cost: "Free",
      },
      {
        name: "NCMEC CyberTipline",
        region: "United States",
        description:
          "Report online exploitation of children, including grooming, sextortion, CSAM, and online enticement.",
        contact: "1-800-843-5678",
        url: "https://report.cybertip.org",
      },
      {
        name: "Take It Down",
        region: "International",
        description:
          "Free NCMEC service that helps minors remove or stop the spread of nude or sexually explicit images of themselves taken before age 18.",
        url: "https://takeitdown.ncmec.org",
        cost: "Free",
      },
      {
        name: "Recovering Couples Anonymous",
        region: "International",
        description:
          "Peer support for couples affected by compulsive behavior in one or both partners.",
        url: "https://www.recovering-couples.org",
        cost: "Free",
      },
    ],
  },
  {
    id: "survivors",
    label: "Survivors of abuse",
    tone: "info",
    heading: "Support for survivors",
    blurb:
      "If you have experienced sexual abuse, or had intimate images shared without your consent, these organizations offer confidential, trauma-informed support.",
    resources: [
      {
        name: "RAINN (National Sexual Assault Hotline)",
        region: "United States",
        description:
          "Free, confidential 24/7 hotline for survivors of sexual violence, including online abuse and image-based abuse.",
        contact: "1-800-656-4673",
        url: "https://www.rainn.org",
        cost: "Free",
      },
      {
        name: "Cyber Civil Rights Initiative",
        region: "United States",
        description:
          "Crisis helpline and removal support for victims of non-consensual intimate imagery (including deepfakes).",
        contact: "1-844-878-2274",
        url: "https://cybercivilrights.org",
      },
      {
        name: "Revenge Porn Helpline",
        region: "United Kingdom",
        description:
          "Confidential support for adults experiencing intimate image abuse, including AI-generated deepfakes.",
        contact: "0345 6000 459",
        url: "https://revengepornhelpline.org.uk",
      },
      {
        name: "NSPCC Helpline",
        region: "United Kingdom",
        description:
          "Free, confidential 24/7 support for anyone concerned about a child's safety.",
        contact: "0808 800 5000",
        url: "https://www.nspcc.org.uk",
      },
    ],
  },
];

const toneStyles: Record<Group["tone"], string> = {
  info: "bg-accent-soft border-accent text-accent",
  warning: "bg-warning-soft border-warning text-warning",
  crisis: "bg-crisis-soft border-crisis text-crisis",
};

export default function GetHelpPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule bg-crisis-soft/50">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crisis mb-5">
            Confidential Resources
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.5rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Help exists for every situation in this research.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            Whether you are worried about your own use, concerned about a child or partner, or
            struggling with thoughts you have not told anyone about — confidential support is
            available. Many of these services are free.
          </p>
        </div>
      </header>

      <nav className="border-b border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
            Jump to
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="text-foreground hover:text-accent underline-offset-2 hover:underline"
                >
                  {g.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="border-b border-rule bg-crisis-soft/60">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-crisis font-semibold mb-2">
              Report abuse or CSAM
            </p>
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold tracking-tight leading-tight mb-1.5">
              Need to report abuse or child sexual abuse material?
            </h2>
            <p className="text-sm md:text-[0.9375rem] text-muted leading-relaxed max-w-2xl">
              A verified directory of where to report CSAM and abusive content
              across every major platform and the clearinghouses, with each
              platform&apos;s reporting channel and illegal-content policy. If you
              don&apos;t know or don&apos;t trust the platform, report directly to
              NCMEC&apos;s CyberTipline.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/for-reporting"
              className="inline-flex items-center gap-1.5 bg-crisis text-white px-4 py-2.5 rounded-md text-sm font-medium hover:bg-crisis/90 transition-colors"
            >
              Where to report →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-accent-soft">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
              Local · San Francisco Bay Area
            </p>
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold tracking-tight leading-tight mb-1.5">
              In the Bay Area? See the local resource directory.
            </h2>
            <p className="text-sm md:text-[0.9375rem] text-muted leading-relaxed max-w-2xl">
              Stanford&apos;s Addiction Medicine clinic explicitly treats
              pornography addiction. Plus CSAT-certified Bay Area therapists,
              hospital programs, peer-support meetings, and university counseling.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href="/get-help/bay-area"
              className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2.5 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              See Bay Area resources →
            </Link>
          </div>
        </div>
      </section>

      <FeaturedProgram variant="full" />

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 space-y-20">
        {groups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10">
              <div className="md:col-span-4">
                <span
                  className={`inline-block px-2 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold border-l-2 ${toneStyles[group.tone]} mb-4`}
                >
                  {group.label}
                </span>
                <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
                  {group.heading}
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-[1.0625rem] leading-[1.7] text-foreground">
                  {group.blurb}
                </p>
                {group.id === "offender-prevention" && (
                  <p className="mt-3 text-sm text-muted">
                    See also the step-by-step guide{" "}
                    <Link
                      href="/for-offenders"
                      className="text-accent underline underline-offset-2"
                    >
                      For People Seeking Help
                    </Link>{" "}
                    and the evidence behind prevention in{" "}
                    <Link
                      href="/prevention"
                      className="text-accent underline underline-offset-2"
                    >
                      Preventing Abuse Before It Happens
                    </Link>
                    .
                  </p>
                )}
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
              {group.resources.map((r) => (
                <li
                  key={r.name}
                  className="bg-background p-6 md:p-7 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-serif text-lg font-semibold leading-tight">
                      {r.name}
                    </h3>
                    {r.cost && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-accent bg-accent-soft px-2 py-0.5 rounded shrink-0">
                        {r.cost}
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-subtle font-medium mb-3">
                    {r.region}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed mb-5 flex-1">
                    {r.description}
                  </p>
                  <div className="space-y-1.5 text-sm">
                    {r.contact && (
                      <p className="font-medium text-foreground">{r.contact}</p>
                    )}
                    {r.url && (
                      <a
                        href={r.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:underline underline-offset-2 inline-flex items-center gap-1"
                      >
                        Visit website
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="border-t border-rule pt-14">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Important notes about this list
            </h2>
            <ul className="space-y-3 text-[1.0625rem] leading-relaxed font-serif">
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                This site is informational. It does not provide medical, legal, or therapeutic advice.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Contact information is current to the best of our knowledge as of February 2026.
                Hours and availability vary; visit the organization&apos;s website to confirm.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The confidentiality of each helpline is governed by that organization&apos;s policy
                and applicable mandatory reporting laws. Most prevention helplines explicitly do
                not require identifying information.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If you are aware of a child who is being harmed, please report immediately to
                local authorities or, in the United States, the{" "}
                <a
                  href="https://report.cybertip.org"
                  className="text-accent underline underline-offset-2"
                >
                  NCMEC CyberTipline
                </a>
                .
              </li>
            </ul>

            <div className="mt-10">
              <Link
                href="/"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                ← Back to the research
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
