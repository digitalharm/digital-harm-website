import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "A calm, practical guide for parents and caregivers: how to talk about pornography and online sexual risk by age, recognize sextortion and grooming, set up devices sensibly, and get help fast if something goes wrong — including how to get a minor's intimate images taken down.",
};

type Section = { id: string; label: string };
const TOC: Section[] = [
  { id: "start-here", label: "Start here" },
  { id: "by-age", label: "Conversations by age" },
  { id: "sextortion", label: "Sextortion & warning signs" },
  { id: "grooming", label: "Grooming" },
  { id: "devices", label: "Devices & settings" },
  { id: "if-something-happened", label: "If something happened" },
  { id: "resources", label: "Trusted resources" },
];

export default function ForParentsPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/for-parents" />
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] mb-6">
            <Link href="/guides" className="text-subtle hover:text-foreground">
              Guides
            </Link>
            <span className="text-subtle">/</span>
            <span className="text-accent">For Parents</span>
          </div>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            For parents & caregivers
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted">
            You do not need to be a tech expert to protect your child. The
            research is consistent: the single biggest protective factor is an
            open, non-shaming relationship where a child believes they can tell
            you something bad happened and you will help, not punish. Everything
            below serves that.
          </p>
          <div className="mt-6 border border-warning/40 bg-warning/5 rounded-lg p-4 text-[14px] leading-relaxed">
            <strong className="text-foreground">If your child is in immediate danger</strong>{" "}
            or is being actively threatened or extorted, contact law enforcement
            (in the US, 911) and NCMEC&apos;s CyberTipline at{" "}
            <a href="https://report.cybertip.org" className="text-accent underline underline-offset-2" target="_blank" rel="noopener noreferrer">report.cybertip.org</a>{" "}
            or 1-800-843-5678. See{" "}
            <a href="#if-something-happened" className="text-accent underline underline-offset-2">
              If something happened
            </a>.
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 py-10">
        <nav className="mb-12 border border-rule rounded-lg p-4 bg-paper">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2.5">
            On this page
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px]">
            {TOC.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted hover:text-foreground underline-offset-2 hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Prose>
          <Section id="start-here" heading="Start here: the mindset that protects">
            <p>
              Children almost always encounter online sexual content and contact
              earlier than parents expect — often by accident, often on a
              friend&apos;s device, and rarely because they went looking. Shame
              and punishment teach a child one lesson: <em>don&apos;t tell mom or
              dad.</em> That is the opposite of what keeps them safe. The goal of
              every conversation below is to keep the channel open.
            </p>
            <Principles
              items={[
                ["Lead with safety, not blame.", "“You’re not in trouble. I’m glad you told me. Let’s figure it out together.” Say it before anything else, and mean it."],
                ["Talk early and often, in small doses.", "Not one terrifying “talk,” but many short, age-appropriate, matter-of-fact moments — in the car, doing dishes — so it never becomes a charged event."],
                ["Be askable.", "Answer the small questions calmly so your child trusts you with the big ones. The parent who reacts with horror to a small disclosure rarely hears the next one."],
                ["Curiosity is normal; coercion is not.", "Distinguish a child’s normal development and curiosity from someone exploiting it. Your job is to protect, not to police curiosity."],
              ]}
            />
          </Section>

          <Section id="by-age" heading="Conversations by age">
            <p>
              Tailor the message to where your child actually is. These are
              starting points, not scripts — your child&apos;s maturity matters
              more than the number.
            </p>
            <AgeBlock
              age="Under 5"
              points={[
                "Teach body autonomy and correct names for body parts — children who can name things can report things.",
                "The simple rule: no one should look at or take pictures of the parts a swimsuit covers, and secrets that make you feel bad should always be told.",
              ]}
            />
            <AgeBlock
              age="Ages 6–9"
              points={[
                "Expect first accidental exposure to pornography around this age, often via search, autoplay, or a peer’s device. Pre-empt it: “Sometimes you might see grown-up pictures or videos that feel confusing or yucky. It’s not your fault — just close it and come tell me.”",
                "Introduce the idea that people online aren’t always who they say they are, without making the whole internet frightening.",
              ]}
            />
            <AgeBlock
              age="Ages 10–12"
              points={[
                "Name pornography directly and honestly: what it is, that it’s made for adults, and that it’s often a poor and unrealistic teacher about real bodies, sex, and consent.",
                "Talk explicitly about not sharing photos of yourself, and that anyone who asks a kid for them is doing something wrong — even (especially) if it’s framed as a game, a dare, or a relationship.",
              ]}
            />
            <AgeBlock
              age="Teens"
              points={[
                "Move from rules to judgment: sextortion, deepfakes, image-based abuse, and how the “send a pic” ask escalates. Teens need to know exactly what to do if it happens to them or a friend — and that you will help without judgment.",
                "Discuss porn’s effect on expectations and relationships as a real, two-way conversation, not a lecture. Acknowledge that abstinence-only messaging tends to fail; honesty earns credibility.",
              ]}
            />
          </Section>

          <Section id="sextortion" heading="Sextortion: the threat that has surged">
            <p>
              Financial sextortion — coercing a young person into sending an
              intimate image, then threatening to release it unless they pay — has
              risen sharply and disproportionately targets teen boys. It moves
              fast, and the shame is engineered to keep the victim silent. Make
              sure your child knows the script before they ever need it.
            </p>
            <Callout title="Tell your child, in advance, exactly this">
              <p className="mb-0">
                “If anyone ever pressures you for a photo, or threatens you over
                one, you come to me <strong>immediately</strong> — day or night,
                no matter what the photo is. You will not be in trouble. We will
                handle it together. The person threatening you is the one breaking
                the law, not you.”
              </p>
            </Callout>
            <p className="mt-5 font-semibold text-foreground text-[15px]">
              Warning signs worth a gentle check-in:
            </p>
            <ul>
              <li>Sudden secrecy around a device, or panic when a notification arrives.</li>
              <li>Withdrawal, a drop in mood, or talk of hopelessness — sextortion has been linked to youth suicide; take it seriously.</li>
              <li>Asking about gift cards, money, or cryptocurrency out of the blue.</li>
              <li>A new “online friend” or fast-moving relationship they&apos;re cagey about.</li>
            </ul>
            <p>
              If it is happening: <strong>do not pay, do not comply with further
              demands, and do not delete anything</strong> — stop responding,
              save what you can as evidence, and report (see below). Paying rarely
              stops the threats.
            </p>
          </Section>

          <Section id="grooming" heading="Grooming: how it actually works">
            <p>
              Grooming is a slow process of building trust and secrecy, usually by
              someone who seeks access to children — frequently someone the family
              knows, not a stranger. Online, it often runs through games, DMs, and
              the private features of apps your child already uses. Patterns to
              know:
            </p>
            <ul>
              <li><strong>Excessive attention and flattery</strong>, gifts, or in-game currency that create a sense of special relationship and obligation.</li>
              <li><strong>Driving toward secrecy</strong> — “this is just between us,” moving to a more private app, asking your child to delete messages.</li>
              <li><strong>Gradual boundary-testing</strong> — sexualized jokes, then questions, then requests, each a small step past the last.</li>
              <li><strong>Isolation</strong> — subtly positioning the child against parents or friends (“they wouldn&apos;t understand us”).</li>
            </ul>
            <p>
              The defense is the same open relationship: a child who can tell you
              “this person is being weird” without fear is far harder to isolate.
            </p>
          </Section>

          <Section id="devices" heading="Devices & settings: useful, not a substitute">
            <p>
              Filters and controls reduce accidental exposure and buy time — they
              are worth setting up — but no tool replaces conversation, and savvy
              kids route around them. Use them as guardrails, not as the whole
              strategy.
            </p>
            <ul>
              <li><strong>Set up the basics:</strong> OS-level parental controls (Screen Time on iOS, Family Link on Android), content filtering, and age-appropriate app-store restrictions. Our <Link href="/apps" className="text-accent underline underline-offset-2">apps directory</Link> covers accountability and filtering tools.</li>
              <li><strong>Default to shared spaces and shared knowledge,</strong> especially for younger kids — devices used in common areas, accounts you can see, passwords you hold for a while.</li>
              <li><strong>Make a family device agreement</strong> together, so rules feel mutual rather than imposed — including charging phones outside bedrooms overnight, a real protective measure.</li>
              <li><strong>Revisit settings as they grow.</strong> The right amount of monitoring for an 8-year-old is surveillance to a 16-year-old; tighten controls down as you widen trust.</li>
              <li><strong>Be honest about monitoring.</strong> Covert spying, if discovered, can destroy the very trust that protects them. Tell them what you watch and why.</li>
            </ul>
          </Section>

          <Section id="if-something-happened" heading="If something happened">
            <p>
              Lead with relief that they told you. Then, depending on what
              occurred:
            </p>
            <ol>
              <li><strong>Preserve, don&apos;t destroy.</strong> Don&apos;t delete messages, accounts, or images in panic — they may be needed to report and to remove content. Do not forward suspected child sexual abuse material to anyone, including to “show” someone; that can itself be a crime. Screenshots of <em>conversations</em> (not of the imagery) help.</li>
              <li><strong>Report it.</strong> File with NCMEC&apos;s CyberTipline at <a href="https://report.cybertip.org" className="text-accent underline underline-offset-2" target="_blank" rel="noopener noreferrer">report.cybertip.org</a> (US: 1-800-843-5678), and contact local law enforcement if there is a threat or coercion. You do not have to be certain a crime occurred to report.</li>
              <li><strong>Get circulating images of a minor removed.</strong> NCMEC&apos;s <a href="https://takeitdown.ncmec.org" className="text-accent underline underline-offset-2" target="_blank" rel="noopener noreferrer">Take It Down</a> service helps remove or stop the spread of nude/partially-nude images of people who were under 18, working from a private hash of the image (the image itself never leaves the device). For adults, <a href="https://stopncii.org" className="text-accent underline underline-offset-2" target="_blank" rel="noopener noreferrer">StopNCII.org</a> does the same.</li>
              <li><strong>Tend to the child, not just the incident.</strong> Watch for shame, anxiety, or withdrawal, and bring in trauma-informed care if needed — our <Link href="/for-victims" className="text-accent underline underline-offset-2">survivors guide</Link> covers the modalities and how to find them.</li>
            </ol>
            <Callout tone="crisis" title="If your child is in crisis">
              <p className="mb-0">
                If your child expresses hopelessness or thoughts of suicide, call
                or text <strong>988</strong> (US Suicide &amp; Crisis Lifeline),
                available 24/7, and don&apos;t leave them alone. The shame around
                sextortion can feel unbearable to a teen; your steady, non-judging
                presence is protective.
              </p>
            </Callout>
          </Section>

          <Section id="resources" heading="Trusted resources for parents">
            <p>
              These independent organizations publish current, practical, and
              well-sourced guidance. We summarize and cross-check them; go to the
              source for depth.
            </p>
            <ResourceList
              items={[
                ["NCMEC — Take It Down & CyberTipline", "https://takeitdown.ncmec.org", "Report exploitation and remove minors’ intimate images."],
                ["Thorn for Parents (NoFiltr)", "https://www.thorn.org/parents/", "Research-based guidance on digital safety and youth."],
                ["Internet Matters", "https://www.internetmatters.org", "Age-by-age advice and setup guides for every major platform and device."],
                ["Common Sense Media", "https://www.commonsensemedia.org", "Age ratings and family media advice."],
                ["Protect Young Eyes", "https://www.protectyoungeyes.com", "Plain-language device setup walkthroughs and app reviews."],
                ["NCMEC NetSmartz / KidSmartz", "https://www.missingkids.org/netsmartz", "Age-appropriate safety education for kids and families."],
              ]}
            />
            <p className="mt-7 text-[14px] text-subtle">
              Related on this site:{" "}
              <Link href="/for-victims" className="text-accent underline underline-offset-2">For Survivors</Link>{" · "}
              <Link href="/for-educators" className="text-accent underline underline-offset-2">For Educators</Link>{" · "}
              <Link href="/get-help" className="text-accent underline underline-offset-2">Get Help</Link>{" · "}
              <Link href="/apps" className="text-accent underline underline-offset-2">Apps &amp; filtering</Link>
            </p>
          </Section>
        </Prose>
      </div>
    </article>
  );
}

/* --- small presentational helpers (kept local to avoid import risk) --- */

function Prose({ children }: { children: React.ReactNode }) {
  return <div className="space-y-12">{children}</div>;
}

function Section({ id, heading, children }: { id: string; heading: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
        {heading}
      </h2>
      <div className="space-y-4 text-[15.5px] leading-relaxed text-foreground/90 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:space-y-2.5 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:break-words">
        {children}
      </div>
    </section>
  );
}

function Principles({ items }: { items: [string, string][] }) {
  // All content is author-written literal text — render as plain (React-escaped)
  // strings; no dangerouslySetInnerHTML, no XSS surface.
  return (
    <div className="grid sm:grid-cols-2 gap-3 not-prose">
      {items.map(([title, body]) => (
        <div key={title} className="border border-rule rounded-lg p-4 bg-paper">
          <p className="font-semibold text-foreground text-[14.5px] mb-1">{title}</p>
          <p className="text-[13px] text-muted leading-snug">{body}</p>
        </div>
      ))}
    </div>
  );
}

function AgeBlock({ age, points }: { age: string; points: string[] }) {
  return (
    <div className="border-l-2 border-accent/40 pl-4">
      <p className="font-semibold text-foreground text-[15px] mb-1.5">{age}</p>
      <ul className="space-y-2">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  );
}

function Callout({
  title,
  tone = "info",
  children,
}: {
  title: string;
  tone?: "info" | "crisis";
  children: React.ReactNode;
}) {
  const cls =
    tone === "crisis"
      ? "border-crisis/40 bg-crisis/5"
      : "border-accent/30 bg-accent/5";
  return (
    <div className={`border ${cls} rounded-lg p-4 not-prose`}>
      <p className="font-semibold text-foreground text-[14.5px] mb-1.5">{title}</p>
      <div className="text-[14px] leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

function ResourceList({ items }: { items: [string, string, string][] }) {
  return (
    <ul className="not-prose space-y-2.5">
      {items.map(([name, url, blurb]) => (
        <li key={url} className="border border-rule rounded-lg p-3.5 bg-paper">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[14.5px] text-foreground hover:text-accent underline-offset-2 hover:underline"
          >
            {name} ↗
          </a>
          <p className="text-[13px] text-muted leading-snug mt-0.5">{blurb}</p>
        </li>
      ))}
    </ul>
  );
}
