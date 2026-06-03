import Link from "next/link";
import { chapters } from "@/content/report";
import { FeaturedProgram } from "@/components/featured-program";
import { getCitations } from "@/lib/citations";

// The full report is ~2 hours, which reads as daunting. Group the chapters into
// three thematic tracks so a reader sees digestible ~30–55 min paths instead of
// one big number. Slugs must cover every chapter exactly once.
type ReadingTrack = { label: string; blurb: string; slugs: string[] };

const READING_TRACKS: ReadingTrack[] = [
  {
    label: "Understanding the harm",
    blurb:
      "How early exposure becomes compulsion, how it escalates toward CSAM, and the AI-generated frontier.",
    slugs: ["exposure", "addiction", "escalation", "ai-generated"],
  },
  {
    label: "The response",
    blurb: "What therapeutic treatment and detection technology actually achieve.",
    slugs: ["interventions", "technology"],
  },
  {
    label: "Prevention and action",
    blurb: "Prevention strategy, the policy recommendations, and where to get help.",
    slugs: ["prevention", "recommendations", "resources"],
  },
];

const round5 = (n: number) => Math.max(5, Math.round(n / 5) * 5);

/** A digestible reading-time range (±~10%, rounded to 5 min) for a base count. */
function readingRange(minutes: number): string {
  const lo = round5(minutes * 0.9);
  const hi = round5(minutes * 1.1);
  return lo === hi ? `${lo} min` : `${lo}–${hi} min`;
}

function trackMinutes(track: ReadingTrack): number {
  return track.slugs.reduce(
    (sum, s) => sum + (chapters.find((c) => c.slug === s)?.readingMinutes ?? 0),
    0,
  );
}

export default function Home() {
  const citationCount = getCitations().length;
  const trackMins = READING_TRACKS.map(trackMinutes);
  const partLo = round5(Math.min(...trackMins) * 0.9);
  const partHi = round5(Math.max(...trackMins) * 1.1);
  return (
    <>
      <section className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-16 pb-20 md:pt-24 md:pb-28">
          <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-6">
                A Research Synthesis · 2026
              </p>
              <h1 className="font-serif font-semibold text-[2.5rem] sm:text-[3.25rem] md:text-[4rem] leading-[0.98] tracking-[-0.02em] text-foreground mb-7">
                Pornography, addiction, and the technologies that protect children online.
              </h1>
              <p className="font-serif text-[1.25rem] md:text-[1.3125rem] leading-snug text-muted max-w-2xl">
                A synthesis of peer-reviewed research, government statistics, and clinical evidence on
                exposure, neurobiology, escalation pathways to child sexual abuse material, AI-generated
                content, treatment effectiveness, and the legislative and technical landscape.
              </p>
            </div>
            <div className="md:col-span-4 md:pb-3">
              <dl className="grid grid-cols-2 gap-6 md:block md:space-y-6">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-1">
                    Chapters
                  </dt>
                  <dd className="font-serif text-2xl text-foreground">
                    {chapters.length}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-1">
                    Citations
                  </dt>
                  <dd className="font-serif text-2xl text-foreground">{citationCount}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-1">
                    Reading time
                  </dt>
                  <dd className="font-serif text-2xl text-foreground">
                    {partLo}–{partHi}
                    <span className="text-base text-subtle"> min</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-1">
                    Last reviewed
                  </dt>
                  <dd className="font-serif text-2xl text-foreground">May 2026</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-paper">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
                Executive Summary
              </p>
              <p className="text-sm text-muted leading-relaxed">
                A four-paragraph orientation to the scale, science, and stakes
                of the issues covered in this research.
              </p>
            </div>
            <div className="md:col-span-9 prose-research">
              <p className="drop-cap">
                Pornography exposure among minors has become a defining public health challenge of
                the digital era. Research consistently documents that the average age of first
                exposure now falls between 12 and 13 years, with over half of adolescents encountering
                explicit content by age 13. The neurobiological evidence is compelling: pornography
                activates the same mesolimbic dopamine pathways as substance addiction, producing
                measurable structural brain changes including reduced gray matter in the striatum
                and weakened connectivity between reward centers and prefrontal cortex. An estimated
                3–17% of the population meets criteria for problematic pornography use, with the World
                Health Organization formally recognizing Compulsive Sexual Behaviour Disorder in the
                ICD-11.
              </p>
              <p>
                The relationship between legal pornography consumption and escalation to child sexual
                abuse material (CSAM) is empirically contested but not negligible. A minority of heavy
                pornography users — particularly those with pre-existing pedophilic interest, adverse
                childhood experiences, or compulsive patterns — may escalate to CSAM consumption.
                Simultaneously, the emergence of AI-generated CSAM has introduced an unprecedented
                crisis: the Internet Watch Foundation assessed over 8,000 AI-generated CSAM images
                and videos in 2025, with AI-generated CSAM videos increasing by 26,385% year-over-year.
                Legislative responses are accelerating globally, including the unanimous Senate passage
                of the ENFORCE Act in December 2025 equalizing penalties for AI-generated and traditional
                CSAM.
              </p>
              <p>
                On the intervention side, Cognitive Behavioral Therapy and Acceptance and Commitment
                Therapy demonstrate large effect sizes for reducing problematic pornography use, with
                ACT trials achieving 92% reductions in viewing. Prevention programs from Germany&apos;s
                Project Dunkelfeld to the UK&apos;s Inform Plus offer specialized treatment for individuals
                at risk of CSAM offending, though CSAM recidivism rates remain stubbornly high even among
                treated populations. Technology solutions span from accountability software and DNS
                filtering to industrial-scale CSAM detection platforms like Thorn&apos;s Safer, which
                processed over 415 billion files and detected millions of CSAM files in 2025.
              </p>
              <p>
                Age verification legislation has swept across approximately half of US states following
                the Supreme Court&apos;s June 2025 ruling upholding Texas&apos;s law, though research
                suggests these laws primarily displace traffic rather than reduce consumption. No single
                intervention — whether technological, therapeutic, legislative, or educational — is
                sufficient alone. Effective protection requires sustained, coordinated effort across
                families, schools, technology platforms, legislatures, and clinical settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-background">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                Find your path
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight">
                Start with your situation.
              </h2>
            </div>
            <Link
              href="/browse"
              className="text-sm text-accent font-medium hover:underline underline-offset-2"
            >
              Browse everything →
            </Link>
          </div>
          <p className="text-[0.9375rem] text-muted leading-relaxed max-w-2xl mb-8">
            The research is the evidence base. These guides turn it into a practical
            playbook for whoever you are — and if you just need help today, start
            there.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              ["/get-help", "I need help now", "Crisis lines, recovery programs, and support — for your own use or a loved one's.", true],
              ["/for-parents", "I'm a parent", "Age-by-age conversations, sextortion and grooming, devices, and what to do if something happened."],
              ["/for-victims", "I'm a survivor", "Removing circulating imagery, trauma-informed care, and support at any point — recent or historical."],
              ["/for-offenders", "I'm worried about myself", "Confidential, non-judgmental guidance, anonymous prevention services, and evidence-based treatment."],
              ["/for-educators", "I work with kids", "Playbooks for school staff and the situations they encounter unprepared."],
              ["/for-tech-ceos", "I run a platform", "The legal floor, a minimum viable detection stack, and where executives face exposure."],
            ].map(([href, title, blurb, crisis]) => (
              <li key={href as string}>
                <Link
                  href={href as string}
                  className={`group block h-full rounded-lg border p-4 transition-colors ${
                    crisis
                      ? "border-crisis/40 bg-crisis/5 hover:border-crisis"
                      : "border-rule bg-paper hover:border-accent"
                  }`}
                >
                  <span
                    className={`font-serif text-[1.0625rem] font-semibold transition-colors ${
                      crisis ? "text-crisis" : "text-foreground group-hover:text-accent"
                    }`}
                  >
                    {title}
                  </span>
                  <span className="block text-[13px] text-muted leading-snug mt-1">
                    {blurb}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="chapters" className="bg-background">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                Contents
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-tight">
                The nine chapters
              </h2>
            </div>
            <p className="hidden sm:block text-sm text-muted">
              Read straight through, or pick a track. Each chapter stands alone.
            </p>
          </div>

          <ol className="border-t border-rule">
            {READING_TRACKS.flatMap((track) => {
              const trackChapters = track.slugs
                .map((s) => chapters.find((c) => c.slug === s))
                .filter((c): c is (typeof chapters)[number] => Boolean(c));
              return [
                <li
                  key={`track-${track.label}`}
                  className="border-b border-rule bg-paper/40"
                >
                  <div className="grid md:grid-cols-12 gap-4 md:gap-8 items-baseline py-5 -mx-5 px-5">
                    <div className="hidden md:block md:col-span-1" />
                    <div className="md:col-span-8">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-accent font-semibold">
                        {track.label}
                      </p>
                      <p className="mt-1 text-sm text-muted max-w-2xl">
                        {track.blurb}
                      </p>
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      <p className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        {readingRange(trackMinutes(track))}
                      </p>
                    </div>
                  </div>
                </li>,
                ...trackChapters.map((ch) => (
                  <li key={ch.slug} className="border-b border-rule">
                    <Link
                      href={`/report/${ch.slug}`}
                      className="group grid md:grid-cols-12 gap-4 md:gap-8 items-start py-7 md:py-8 hover:bg-paper transition-colors -mx-5 px-5"
                    >
                      <div className="md:col-span-1">
                        <span className="font-mono text-xs text-subtle tabular-nums">
                          {ch.number}
                        </span>
                      </div>
                      <div className="md:col-span-7">
                        <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground leading-tight tracking-tight group-hover:text-accent transition-colors">
                          {ch.title}
                        </h3>
                        <p className="mt-2 text-[0.9375rem] text-muted leading-relaxed max-w-2xl">
                          {ch.dek}
                        </p>
                      </div>
                      <div className="md:col-span-3 md:text-right">
                        <p className="text-xs text-subtle uppercase tracking-wider">
                          {ch.readingMinutes} min · {ch.sections.length} sections
                        </p>
                      </div>
                      <div className="md:col-span-1 md:text-right">
                        <span className="text-muted group-hover:text-accent transition-colors text-xl">
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                )),
              ];
            })}
          </ol>
        </div>
      </section>

      <FeaturedProgram variant="full" />

      <section className="bg-paper border-t border-rule">
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-20 grid md:grid-cols-3 gap-10">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-crisis font-semibold mb-3">
              If you need help today
            </p>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-tight">
              You are not alone.
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Confidential helplines exist in every category covered in this research — for people
              struggling with their own use, parents worried about a child, partners affected by a
              loved one&apos;s behavior, and individuals concerned about sexual interest in minors.
            </p>
            <Link
              href="/get-help"
              className="inline-flex items-center gap-1.5 text-crisis font-medium text-sm hover:underline"
            >
              See crisis resources →
            </Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              For families
            </p>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-tight">
              Layered protection works.
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              No single tool is sufficient. The strongest defense combines network-level filtering,
              device-level controls, accountability software where appropriate, and proactive
              conversation that begins before the average age of first exposure.
            </p>
            <Link
              href="/report/technology"
              className="inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:underline"
            >
              Read the technology chapter →
            </Link>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              For policymakers
            </p>
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-tight">
              Evidence over intuition.
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Age verification laws displace traffic more than they reduce consumption. The Stanford
              CIS findings on NCMEC data integrity show why inflated statistics misallocate
              resources. Prevention programs work when they match risk to treatment intensity.
            </p>
            <Link
              href="/report/recommendations"
              className="inline-flex items-center gap-1.5 text-accent font-medium text-sm hover:underline"
            >
              See policy recommendations →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
