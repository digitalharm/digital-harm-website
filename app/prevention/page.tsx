import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Preventing Abuse Before It Happens",
  description:
    "Demand-side prevention: confidential help for people worried about their own sexual thoughts toward children, the programs that provide it (Dunkelfeld, Stop It Now, Help Wanted, ReDirection), and an honest look at what the evidence does — and does not — show about whether prevention treatment reduces offending.",
};

type Toc = { id: string; label: string };
const TOC: Toc[] = [
  { id: "why", label: "Why demand-side prevention" },
  { id: "attraction", label: "Attraction is not offending" },
  { id: "programs", label: "The programs" },
  { id: "confidentiality", label: "Can you get help anonymously?" },
  { id: "evidence", label: "Does it actually work?" },
  { id: "help", label: "Get help now" },
];

type Program = {
  name: string;
  region: string;
  what: string;
  stat: string;
  url: string;
};

const PROGRAMS: Program[] = [
  {
    name: "Prevention Project Dunkelfeld",
    region: "Germany",
    what: "The pioneering program offering confidential, free treatment to people attracted to minors who are not in contact with the justice system. ('Dunkelfeld' = the 'dark field' of undetected cases.)",
    stat: "~20,000 contacts over 20 years across 13 sites",
    url: "https://www.kein-taeter-werden.de",
  },
  {
    name: "Troubled Desire",
    region: "Germany / global",
    what: "Dunkelfeld's anonymous, self-guided web tool — a self-assessment and self-help modules — available worldwide in multiple languages for people who cannot access in-person care.",
    stat: "Thousands of users across dozens of countries",
    url: "https://troubled-desire.com",
  },
  {
    name: "Stop It Now (UK / Lucy Faithfull Foundation)",
    region: "UK / Ireland",
    what: "A confidential, anonymous helpline for anyone worried about their own thoughts or behavior, or about someone else's. The global standard for a perpetration-prevention helpline.",
    stat: "Thousands of helpline contacts each year (0808 1000 900)",
    url: "https://www.stopitnow.org.uk",
  },
  {
    name: "Stop It Now (USA)",
    region: "United States",
    what: "The US confidential helpline for people concerned about child sexual abuse — including their own thoughts and behavior.",
    stat: "1-888-773-8368",
    url: "https://stopitnow.org",
  },
  {
    name: "'Help Wanted' (Johns Hopkins Moore Center)",
    region: "United States",
    what: "An anonymous online prevention course for young people who are attracted to minors, developed by Elizabeth Letourneau's team — the US research flagship, built on the premise that attraction does not doom a person to offend.",
    stat: "Randomized trial underway",
    url: "https://moore.jhu.edu",
  },
  {
    name: "ReDirection (Protect Children, Finland)",
    region: "Finland / global",
    what: "An anonymous self-help program reaching people who use CSAM on the dark web, paired with the largest survey of that population to understand and interrupt their behavior.",
    stat: "26,000+ survey responses; most users report reduced or ceased use",
    url: "https://www.suojellaanlapsia.fi/en/redirection",
  },
];

export default function PreventionPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            Prevention
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            Preventing abuse before it happens
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted">
            Most child-protection effort focuses on detecting and reporting abuse
            after it occurs. <strong>Demand-side prevention</strong> works the
            other end of the problem: reaching people who are at risk of offending
            — before there is a victim — and giving them a confidential route to
            help. It is the most under-resourced lever in the field, and one of
            the most promising.
          </p>
          <div className="mt-6 rounded-lg border border-accent/30 bg-accent/5 p-4 text-[14px] leading-relaxed">
            <strong className="text-foreground">If you&apos;re worried about your own thoughts:</strong>{" "}
            you can get confidential help. In the UK/Ireland, Stop It Now:{" "}
            <strong>0808 1000 900</strong>. In the US, Stop It Now:{" "}
            <strong>1-888-773-8368</strong>. Anonymous self-help worldwide:{" "}
            <a href="https://troubled-desire.com" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Troubled Desire</a>.
            See <a href="#confidentiality" className="text-accent underline underline-offset-2">what is and isn&apos;t confidential</a> first.
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 py-10">
        <nav className="mb-12 border border-rule rounded-lg p-4 bg-paper">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2.5">On this page</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px]">
            {TOC.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted hover:text-foreground underline-offset-2 hover:underline">{s.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12 text-[15.5px] leading-relaxed text-foreground/90 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:break-words">
          <section id="why" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Why demand-side prevention</h2>
            <p>
              The logic is straightforward: every instance of abuse, and every
              piece of CSAM, has a person behind it who at some point might have
              been reached. A meaningful share of people who are attracted to
              minors do not want to act on it and are looking for help to make
              sure they never do. Public-health prevention meets them there —
              before there is a victim — rather than waiting for a crime to detect.
            </p>
            <p>
              This is uncomfortable terrain, and it is easy to recoil from. But the
              alternative — offering nothing to someone actively trying not to harm
              a child — protects no one. The programs below treat that person as
              someone who can be an ally in preventing abuse, while being
              unambiguous that <strong>viewing CSAM is a serious crime that harms a
              real child every time it is viewed.</strong>
            </p>
          </section>

          <section id="attraction" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Attraction is not offending</h2>
            <p>
              The single distinction this whole field rests on: <strong>being
              attracted to minors is not the same as abusing a child.</strong> The
              first is an unchosen sexual interest; the second is an action and a
              crime. Many people with this attraction never offend, and prevention
              programs are built precisely on the finding that attraction does not
              doom a person to offend.
            </p>
            <p>
              This matters practically, not just morally: stigma, isolation, and
              the belief that one is irredeemable are themselves risk factors and
              barriers to help-seeking. A person who believes there is confidential,
              non-judgmental support is far likelier to seek it before a crisis than
              one who believes disclosure means certain ruin.
            </p>
          </section>

          <section id="programs" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">The programs</h2>
            <p>The major demand-side programs, across the countries that pioneered them:</p>
            <ul className="not-prose space-y-3 list-none pl-0 mt-4">
              {PROGRAMS.map((p) => (
                <li key={p.name} className="border border-rule rounded-lg p-4 bg-paper">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="font-serif text-[1.0625rem] font-semibold text-foreground">{p.name}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-subtle">{p.region}</span>
                  </div>
                  <p className="text-[14px] text-foreground/90 leading-snug mt-1.5">{p.what}</p>
                  <p className="text-[12.5px] text-muted mt-2">{p.stat}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-[12px] text-accent underline underline-offset-2 mt-1 inline-block">Learn more ↗</a>
                </li>
              ))}
            </ul>
          </section>

          <section id="confidentiality" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Can you get help anonymously?</h2>
            <p>
              This is the decisive question for most people, and the honest answer
              depends on where you are — because mandatory-reporting law differs:
            </p>
            <ul>
              <li><strong>Germany</strong> — medical confidentiality is strong, and there is no mandatory reporting of undisclosed past offenses, which is precisely why the Dunkelfeld model could exist there. People can disclose attraction and seek treatment without that disclosure triggering a report.</li>
              <li><strong>United Kingdom &amp; Ireland</strong> — the Stop It Now helpline is confidential and can be used anonymously; you do not have to give your name to get help and information.</li>
              <li><strong>United States</strong> — this is the hardest case: licensed clinicians are generally mandated reporters, and the rules vary by state. Anonymous helplines and self-help tools exist partly to bridge that gap. Understand the specific limits before disclosing; an anonymous helpline can advise on what is and isn&apos;t confidential where you live.</li>
            </ul>
            <p>
              The practical takeaway: anonymous helplines and self-guided tools
              (Troubled Desire, ReDirection) exist specifically so that fear of
              exposure does not become the reason someone never gets help. Start
              there if confidentiality is your concern.
            </p>
          </section>

          <section id="evidence" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Does prevention treatment actually work?</h2>
            <p>
              Here is where most resources overclaim, and where being honest is
              what earns trust. The truthful answer is: <strong>the case for
              offering confidential help is strong, but rigorous proof that
              treatment reduces offending does not yet exist.</strong>
            </p>
            <ul>
              <li>A 2019 reappraisal (Mokros &amp; Banse) of the Dunkelfeld data found <strong>no demonstrated treatment-specific reduction</strong> in proneness to offend — a sobering finding for the field&apos;s flagship program.</li>
              <li>There is a live debate about <strong>iatrogenic (treatment-caused) effects</strong>: some research (e.g. Holper and colleagues, 2024) suggests intensive, risk-focused treatment can be counterproductive for genuinely low-risk individuals — a reminder that matching intensity to risk matters.</li>
              <li>The UK&apos;s large evaluation of its prison Sex Offender Treatment Programme (Mews et al., 2017) found participants reoffended at a <strong>slightly higher</strong> rate than comparisons — which led the UK to discontinue that program. Treatment is not automatically beneficial.</li>
              <li>No randomized controlled trial has yet shown that prevention treatment reduces actual offending. The Johns Hopkins 'Help Wanted' RCT is an attempt to generate exactly that evidence.</li>
            </ul>
            <p>
              None of this means prevention is futile — anonymous services
              demonstrably reach people who want help and have nowhere else to turn,
              and reducing isolation and increasing help-seeking are worth pursuing
              on their own terms. It means the field is still building its evidence
              base, and anyone who tells you prevention treatment is proven to stop
              offending is ahead of the science. We&apos;d rather tell you the truth.
            </p>
          </section>

          <section id="help" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Get help now</h2>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 not-prose">
              <ul className="space-y-2 text-[14px] leading-relaxed list-none pl-0 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2">
                <li><strong>Stop It Now UK / Ireland</strong> — 0808 1000 900 (confidential, anonymous)</li>
                <li><strong>Stop It Now USA</strong> — 1-888-773-8368</li>
                <li><strong>Troubled Desire</strong> — anonymous self-help worldwide · <a href="https://troubled-desire.com" target="_blank" rel="noopener noreferrer">troubled-desire.com</a></li>
                <li><strong>ReDirection</strong> — <a href="https://www.suojellaanlapsia.fi/en/redirection" target="_blank" rel="noopener noreferrer">suojellaanlapsia.fi</a></li>
              </ul>
            </div>
            <p className="mt-6 text-[14px] text-subtle">
              Related:{" "}
              <Link href="/get-help" className="text-accent underline underline-offset-2">Get Help &amp; helplines</Link>{" · "}
              <Link href="/for-offenders" className="text-accent underline underline-offset-2">For people seeking help</Link>{" · "}
              <Link href="/organizations" className="text-accent underline underline-offset-2">Organization directory</Link>{" · "}
              <Link href="/for-therapists" className="text-accent underline underline-offset-2">For therapists</Link>
            </p>
            <p className="mt-3 text-[12px] text-subtle">
              Sources include the Prevention Project Dunkelfeld, Lucy Faithfull
              Foundation, Johns Hopkins Moore Center, Protect Children (Finland),
              Mokros &amp; Banse (2019), Mews et al. (2017), and Holper et al.
              (2024). Last reviewed May 2026. Information, not clinical or legal
              advice.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
