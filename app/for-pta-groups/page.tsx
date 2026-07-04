import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "For PTA Groups",
  description:
    "A practical playbook for PTA presidents, boards, and parent-teacher groups suddenly fielding scared parents' questions about AI and child safety: the one genuinely new risk (AI-made sexual images), why 'just ban it' isn't a plan, a ready-to-run parent-night agenda, the questions parents will ask you with short answers, community device ground rules, and what to do if it happens at your school.",
};

type Topic = {
  id: string;
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
};

const topics: Topic[] = [
  {
    id: "the-role",
    eyebrow: "01 · The role",
    heading: "Overnight, you became the safety resource.",
    body: (
      <>
        <p>
          A parent corners you after a meeting. They have spiraled through every dark
          scenario about what their child might see, send, or do online, and they want to
          know where to even start. You are the PTA president, so they are asking{" "}
          <em>you</em>{" "}&mdash; and it is easy to stand there like a deer in headlights. This
          guide exists so you do not have to.
        </p>
        <p>
          You do not need to become an expert in AI or child-exploitation law. The realistic
          job of a parent group is narrower and more achievable: <strong>name the real
          risks calmly, give parents one place to start, and create a shared conversation</strong>{" "}
          so no single family is figuring it out alone at midnight. The rest of this page is
          the playbook &mdash; what is actually new, how to run a parent night, the questions
          you will be asked, and where to send people. The clinical and legal depth lives in
          the research; your job is to be the calm front door to it.
        </p>
      </>
    ),
  },
  {
    id: "the-new-risk",
    eyebrow: "02 · The new risk, named plainly",
    heading: "AI-made sexual images — made by kids, about kids.",
    body: (
      <>
        <p>
          Most online risks to children are not new: exposure to pornography, grooming,
          sextortion. The genuinely new one, the one driving the fear you are hearing, is
          this: free &ldquo;nudify&rdquo; and image-generator apps now let a child turn an
          ordinary photo of a classmate into a fake nude in seconds. The result is sexual
          abuse material of a real child who was never photographed that way.
        </p>
        <p>
          Two things make this land hard for parents. First, <strong>it is a crime</strong>.
          Under the federal <strong>TAKE IT DOWN Act</strong>{" "}(2025) and{" "}
          <strong>ENFORCE Act</strong>, AI-generated sexual images of minors are treated
          like any other child sexual abuse material, and students have already been arrested
          and expelled for making them. The nightmare a parent may voice to you &mdash; that
          they wake up and their own child has been arrested for making explicit images of
          another child &mdash; is real, and it is the fear to address head-on rather than
          around. Second, the <strong>target is a child too</strong>: a daughter can become
          the subject of a deepfake passed around a group chat. Both the child who makes it
          and the child it is made of need help, in different ways. The sourced detail is in{" "}
          <Link
            href="/report/ai-generated"
            className="text-accent underline underline-offset-2"
          >
            Chapter 04: AI-Generated Content
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "not-a-ban",
    eyebrow: "03 · Why banning it isn't a plan",
    heading: "Schools ban AI. Kids still have it.",
    body: (
      <>
        <p>
          The common first reflex &mdash; in schools and companies alike &mdash; is to ban
          AI outright. Schools ban it so students cannot cheat, hack the network, or commit
          exactly the offense above. It is an understandable instinct, and it is not a plan:
          a school ban does nothing about the personal phone, the friend&apos;s device, or
          the home laptop, where almost all of this actually happens. Banning at school
          removes the literacy, not the risk.
        </p>
        <p>
          What works is the boring middle path: <strong>guardrails plus literacy</strong>.
          Kids who understand what these tools are, what is illegal, and what to do when
          something goes wrong are far safer than kids whose only message was &ldquo;don&apos;t.&rdquo;
          A parent group is uniquely placed to carry the literacy half, because it reaches the
          home, where the devices actually live. That is the framing to bring to your
          administration: not whether to allow AI, but how to make sure every family has the
          same baseline of awareness.
        </p>
      </>
    ),
  },
  {
    id: "parent-night",
    eyebrow: "04 · Run a parent night",
    heading: "An agenda you can run in 75 minutes.",
    body: (
      <>
        <p>
          The single most useful thing a PTA can do is host one well-run parent session. A
          workable shape, start to finish:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Open with empowerment, not horror (5 min).</strong>{" "}State the goal: every
            parent leaves able to answer a few basic questions and knowing where to get help.
            No graphic examples, ever.
          </li>
          <li>
            <strong>Name the risks, briefly (15 min).</strong>{" "}The new one (AI-made sexual
            images) and the familiar ones (exposure, grooming, sextortion). Plain language,
            five minutes each, and a link to read more later rather than a deep dive.
          </li>
          <li>
            <strong>The home ground rules (15 min).</strong>{" "}Walk through the device and
            account norms below as a community baseline, not a lecture &mdash; it is easier
            for a family to hold a line that the whole grade is holding too.
          </li>
          <li>
            <strong>Where to get help (10 min).</strong>{" "}Hand out the one-page resource card
            (the questions-and-answers and links below). This is the part parents remember.
          </li>
          <li>
            <strong>The good side of AI (10 min).</strong>{" "}Close on something hopeful: a
            podcast generator, a homework-helper used well, a creative tool. Parents and kids
            both disengage from an all-fear message, and it is not an honest picture anyway.
          </li>
          <li>
            <strong>Questions (20 min).</strong>{" "}Expect the room to open up. The next section
            is your back-pocket Q&amp;A.
          </li>
        </ul>
        <p>
          Consider inviting a school counselor and a local law-enforcement liaison; some
          parent groups also bring in a trust-and-safety professional from a major platform.
          You do not need an expert to run a good night &mdash; you need a calm host and this
          agenda.
        </p>
      </>
    ),
  },
  {
    id: "how-to-talk",
    eyebrow: "05 · How to talk about it",
    heading: "Language that informs instead of clearing the room.",
    body: (
      <>
        <p>
          How you say it matters as much as what you say. A few rules that keep a parent
          audience with you:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Use plain words.</strong>{" "}&ldquo;AI-made sexual images&rdquo; or
            &ldquo;digital harm&rdquo; lands; the acronym <em>CSAM</em>{" "}and clinical jargon
            mostly create confusion and alarm in a general room. Save the precise terms for
            the written resources you hand out.
          </li>
          <li>
            <strong>Lead with what they can do.</strong>{" "}Every risk you name should be
            immediately followed by a concrete action. Fear without a next step is what sends
            a parent down the spiral; a next step is what pulls them out.
          </li>
          <li>
            <strong>Never show examples.</strong>{" "}You do not need to display anything to make
            the point, and displaying it can itself be harmful or illegal.
          </li>
          <li>
            <strong>Keep politics out of it.</strong>{" "}Child safety online is not yet a
            partisan fight, which is rare and valuable. Frame it as something every family
            wants regardless of where they sit, and it stays a room everyone can be in.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "questions",
    eyebrow: "06 · The questions you'll get",
    heading: "Short answers to keep in your back pocket.",
    body: (
      <>
        <p>
          The questions parents bring are remarkably consistent. Calm, short answers that
          point to a real resource are worth more than expertise:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>&ldquo;Where do I even start?&rdquo;</strong>{" "}One conversation and one
            settings check this week. Send them to{" "}
            <Link href="/for-parents" className="text-accent underline underline-offset-2">
              For Parents
            </Link>{" "}
            &mdash; conversations by age, device settings, and warning signs, in one place.
          </li>
          <li>
            <strong>&ldquo;How do I know what my kid is doing?&rdquo;</strong>{" "}You will not
            know everything, and surveillance is not the goal &mdash; an open line is. Know
            the apps on the device, keep devices in shared spaces, and make it safe to come to
            you when something goes wrong.
          </li>
          <li>
            <strong>&ldquo;Should my kid have a phone?&rdquo;</strong>{" "}There is no single
            right answer, but delaying a personal smartphone and starting with a shared family
            device or a call-only watch is a common, defensible choice &mdash; see the ground
            rules below.
          </li>
          <li>
            <strong>&ldquo;Someone made a fake image of my daughter.&rdquo;</strong>{" "}It can
            be reported and removed. NCMEC&apos;s{" "}
            <a
              href="https://takeitdown.ncmec.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Take It Down
            </a>{" "}
            service helps remove sexual images of minors, and the{" "}
            <Link href="/for-reporting" className="text-accent underline underline-offset-2">
              reporting directory
            </Link>{" "}
            shows where to report on each platform. Loop in the school and, for a crime,
            law enforcement.
          </li>
          <li>
            <strong>&ldquo;What if my own kid did something?&rdquo;</strong>{" "}They still need
            help, not only consequences.{" "}
            <Link href="/for-offenders" className="text-accent underline underline-offset-2">
              For People Seeking Help
            </Link>{" "}
            covers confidential support, and a defense attorney comes before any disclosure if
            charges are possible.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ground-rules",
    eyebrow: "07 · Community ground rules",
    heading: "Norms parents can adopt together.",
    body: (
      <>
        <p>
          Rules are easier to hold when a whole grade holds them at once &mdash; that is the
          quiet superpower of a parent group. A short, shareable baseline:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Delay the personal device.</strong>{" "}A shared family tablet or a
            call-only watch covers most real needs for younger children without handing over
            a private, always-on internet device. Many people who work in tech safety delay
            personal phones for their own kids for exactly this reason.
          </li>
          <li>
            <strong>Devices live in shared space.</strong>{" "}Charging overnight in the kitchen,
            not the bedroom, removes the highest-risk hours and is a norm a whole community
            can adopt without singling any child out.
          </li>
          <li>
            <strong>Turn the controls on.</strong>{" "}Built-in parental controls and content
            filters on phones, consoles, and app stores are imperfect but real friction. The{" "}
            <Link href="/for-parents#devices" className="text-accent underline underline-offset-2">
              devices section of For Parents
            </Link>{" "}
            walks through the settings.
          </li>
          <li>
            <strong>Know the apps, and talk early.</strong>{" "}The point is not to memorize every
            app but to keep the conversation ongoing and judgment-free, so a child tells you
            when something goes wrong instead of hiding it.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "if-it-happens",
    eyebrow: "08 · If it happens at your school",
    heading: "Your job is to route, not to investigate.",
    body: (
      <>
        <p>
          When an incident surfaces &mdash; a deepfake circulating, a sextortion case, images
          shared in a group chat &mdash; a parent leader&apos;s instinct may be to gather
          evidence or get ahead of it. Do not. This is a child-protection and possibly
          criminal matter, not a PTA investigation.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Do not collect, save, or forward the images.</strong>{" "}Handling them, even
            to &ldquo;prove&rdquo; what happened, can itself be an offense. Note where the
            material is (platform, account) and stop there.
          </li>
          <li>
            <strong>Route it to the people whose job it is.</strong>{" "}The school
            administration and counselor, and for a crime, law enforcement.{" "}
            <Link href="/for-educators" className="text-accent underline underline-offset-2">
              For Educators
            </Link>{" "}
            is the staff-side playbook you can share with them.
          </li>
          <li>
            <strong>Report and remove.</strong>{" "}The{" "}
            <Link href="/for-reporting" className="text-accent underline underline-offset-2">
              reporting directory
            </Link>{" "}
            and{" "}
            <a
              href="https://takeitdown.ncmec.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Take It Down
            </a>{" "}
            handle the platform side; NCMEC&apos;s CyberTipline ({" "}
            <a
              href="https://report.cybertip.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              report.cybertip.org
            </a>
            ) routes to law enforcement.
          </li>
          <li>
            <strong>Support both families.</strong>{" "}The targeted child&apos;s family needs
            removal and care; the family of the child who did it needs honest guidance too.
            Point each to{" "}
            <Link href="/get-help" className="text-accent underline underline-offset-2">
              Get Help
            </Link>
            .
          </li>
        </ul>
      </>
    ),
  },
];

export default function ForPtaGroupsPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/for-pta-groups" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For PTA leaders and parent-teacher groups
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            When scared parents come to you, have a plan.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            PTA presidents are increasingly the first person frightened parents ask about AI
            and child safety. You do not need to be an expert. You need to name the real
            risks calmly, run one good parent conversation, and know where to send people.
            This is that playbook.
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
                Hand these to parents
              </p>
              <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold tracking-tight leading-tight">
                The one-page resource set.
              </h2>
            </div>
            <div className="md:col-span-8 prose-research">
              <p>The pages worth putting on a slide or a printed card:</p>
              <ul>
                <li>
                  <Link href="/for-parents">For Parents</Link> &mdash; the individual-family
                  guide: conversations by age, device settings, warning signs, and what to do
                  if something happened.
                </li>
                <li>
                  <Link href="/get-help">Get Help</Link> &mdash; crisis lines and confidential
                  support, including the 988 lifeline and child-safety helplines.
                </li>
                <li>
                  <Link href="/for-reporting">For Reporting Content</Link> &mdash; where to
                  report and remove abusive or AI-made sexual content on every major platform.
                </li>
                <li>
                  <Link href="/for-educators">For Educators</Link> &mdash; the staff-side
                  incident playbook to share with your school administration.
                </li>
                <li>
                  <Link href="/report/ai-generated">Chapter 04: AI-Generated Content</Link>{" "}
                  &mdash; the sourced background for parents who want the full picture.
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
                A parent group is a front door, not a substitute for the school, a clinician,
                or law enforcement. The goal is to route families to the right help quickly,
                not to handle incidents yourselves.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Never collect, store, or forward suspected sexual images of a minor, even to
                document an incident. Report the location and let the clearinghouses and
                law enforcement handle the material.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If a child is in immediate danger, contact local emergency services first.
                For removal and reporting of sexual images of a minor, NCMEC&apos;s{" "}
                <a
                  href="https://takeitdown.ncmec.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  Take It Down
                </a>{" "}
                and the{" "}
                <Link
                  href="/for-reporting"
                  className="text-accent underline underline-offset-2"
                >
                  reporting directory
                </Link>{" "}
                are the fastest starts.
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
                href="/for-parents"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                For Parents →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
