import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "About",
  description:
    "About The Digital Harm Project — scope, method, and how to cite it, plus the editorial standards behind every page: primary sourcing, survivor-centered terminology, how we handle contested science, review cadence, independence, privacy, and corrections.",
};

type Toc = { id: string; label: string };
const TOC: Toc[] = [
  { id: "scope", label: "Scope" },
  { id: "method", label: "Citations & method" },
  { id: "not", label: "What this is not" },
  { id: "reuse", label: "Citing & reuse" },
  { id: "timeline", label: "Timeline" },
  { id: "promise", label: "The promise" },
  { id: "sourcing", label: "How we source" },
  { id: "terminology", label: "Terminology" },
  { id: "science", label: "The science" },
  { id: "currency", label: "Keeping it current" },
  { id: "independence", label: "Independence" },
  { id: "integrity", label: "Engineering integrity" },
  { id: "privacy", label: "Privacy & analytics" },
  { id: "corrections", label: "Corrections" },
];

const h2 =
  "font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4";

export default function AboutPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/about" />
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            About
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            About this project
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted">
            The Digital Harm Project is a research synthesis for parents, clinicians,
            educators, technologists, and policymakers who need a single grounded overview
            of a fast-moving evidence base. It takes no religious or partisan position. This
            page covers what the project is and how to cite it &mdash; and the editorial
            standards that govern every page.
          </p>
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
                <a
                  href={`#${s.id}`}
                  className="text-muted hover:text-foreground underline-offset-2 hover:underline"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12 text-[15.5px] leading-relaxed text-foreground/90 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_a]:break-words">
          {/* ---- The research ---- */}
          <section id="scope" className="scroll-mt-20">
            <h2 className={h2}>Scope</h2>
            <p>
              The research covers eight subject areas: early pornography exposure among minors;
              neurobiological and clinical models of pornography addiction; the contested
              escalation pathway from legal pornography to child sexual abuse material (CSAM);
              the emergence of AI-generated pornography and CSAM; therapeutic interventions for
              both populations; consumer and industrial technology solutions; legislative
              prevention strategies; and consolidated recommendations for individuals, families,
              technology companies, policymakers, educators, and clinicians.
            </p>
          </section>

          <section id="method" className="scroll-mt-20">
            <h2 className={h2}>Citations and method</h2>
            <p>
              Every empirical claim is cited. The full citations list is available on the{" "}
              <Link href="/citations" className="text-accent underline underline-offset-2">
                Citations
              </Link>{" "}
              page. Source types include peer-reviewed journal articles (preferred wherever
              available), government and NGO statistical releases, clinical reports, and
              journalism &mdash; generally in that order of preference. Where competing evidence
              exists (most notably around the gateway hypothesis from pornography to CSAM), the
              report presents the disagreement rather than resolving it.
            </p>
            <p>
              We make a particular effort to flag data-integrity issues that have shaped public
              discourse, such as the Stanford Center for Internet and Society&apos;s 2026 finding
              that inflated &ldquo;Generative AI&rdquo; CSAM report figures arose from a
              categorization artifact in NCMEC&apos;s CyberTipline pipeline. Good policy depends
              on good numbers.
            </p>
          </section>

          <section id="not" className="scroll-mt-20">
            <h2 className={h2}>What this is not</h2>
            <p>
              This is not a medical resource. It does not provide diagnosis, treatment
              recommendations for an individual, or legal advice. If you or someone you know is
              in crisis, the{" "}
              <Link href="/get-help" className="text-accent underline underline-offset-2">
                Get Help
              </Link>{" "}
              page lists 24/7 services.
            </p>
            <p>
              It is also not a comprehensive policy proposal. Where the research recommends specific
              policies (for example, privacy-preserving age-verification systems modeled on
              France&apos;s double-anonymity approach), those recommendations follow from the
              evidence presented; they are not the work of a legislative team.
            </p>
          </section>

          <section id="reuse" className="scroll-mt-20">
            <h2 className={h2}>Citing and reuse</h2>
            <p>
              You are welcome to cite, quote, and link to this research. Each chapter and section
              has a stable URL designed for direct citation. We ask only that you preserve
              linkbacks to primary sources rather than to our summary.
            </p>
          </section>

          <section id="timeline" className="scroll-mt-20">
            <h2 className={h2}>Timeline</h2>
            <p>
              The research underlying this project began in August 2023 and has been updated
              continuously since. The current edition was last reviewed in May 2026, with a
              substantial expansion adding ~150 new citations and new sections on CSAM production
              typology, distribution and economy, the reporting pipeline, detection technical
              depth, cross-jurisdictional law, the encryption debate, and survivors of CSAM
              circulation. The fast-moving areas in this research &mdash; AI-generated content, age
              verification law, and detection technology &mdash; will require periodic re-review.
            </p>
          </section>

          {/* ---- The standards behind every page ---- */}
          <section id="promise" className="scroll-mt-20 border-t border-rule pt-12">
            <p className="text-[11px] uppercase tracking-[0.18em] text-accent font-semibold mb-3">
              The standards behind every page
            </p>
            <h2 className={h2}>The promise</h2>
            <p>
              A resource on this subject is only worth as much as it is trustworthy. The
              commitments below are our contract with you; if we ever fall short of them, hold us
              to it. Four govern everything here:
            </p>
            <ul>
              <li>
                <strong>Accurate.</strong>{" "}Claims trace to a primary source. Where we summarize,
                we link to the original so you can check us.
              </li>
              <li>
                <strong>Honest about uncertainty.</strong>{" "}When the evidence is mixed, we say so
                and show both sides rather than flattening it into a tidy answer.
              </li>
              <li>
                <strong>Survivor- and person-centered.</strong>{" "}Our language follows the standards
                set by the people who work with survivors, not sensational convention.
              </li>
              <li>
                <strong>Current.</strong>{" "}Every reference page carries a &quot;last reviewed&quot;
                date, and fast-moving statistics are re-checked against their sources.
              </li>
            </ul>
          </section>

          <section id="sourcing" className="scroll-mt-20">
            <h2 className={h2}>How we source</h2>
            <p>We work outward from the most authoritative material available:</p>
            <ul>
              <li>
                <strong>Primary sources first.</strong>{" "}Statutes link to the bill or the U.S.
                Code; statistics link to the issuing body&apos;s own report (NCMEC, IWF, WeProtect,
                Childlight, INHOPE); clinical claims link to peer-reviewed research or to bodies
                like the WHO and AASECT.
              </li>
              <li>
                <strong>Named, dated, and quantified.</strong>{" "}A statistic without a year and a
                source is not a fact, it&apos;s a rumor. We attach all three or we leave it out.
              </li>
              <li>
                <strong>We distinguish a measurement from an estimate.</strong>{" "}&quot;Reports to
                the CyberTipline&quot; is a count; &quot;children affected globally&quot; is a
                modeled estimate. We don&apos;t let the second masquerade as the first.
              </li>
              <li>
                <strong>We note interpretation caveats.</strong>{" "}For example, a report flagged
                &quot;generative AI&quot; in NCMEC data is not the same as confirmed AI-generated
                CSAM &mdash; a distinction researchers at Stanford have stressed, and one we carry
                on the relevant pages.
              </li>
            </ul>
            <p>
              The complete reference list lives on the{" "}
              <Link href="/citations" className="text-accent underline underline-offset-2">
                citations page
              </Link>
              .
            </p>
          </section>

          <section id="terminology" className="scroll-mt-20">
            <h2 className={h2}>Terminology</h2>
            <p>
              Words shape how a harm is understood, so we follow the conventions established by
              survivors and the organizations that serve them:
            </p>
            <ul>
              <li>
                <strong>&quot;Child sexual abuse material&quot; (CSAM), not &quot;child
                pornography.&quot;</strong>{" "}The older phrase implies consent and a category of
                legitimate &quot;pornography,&quot; both of which are false. This follows the{" "}
                <a
                  href="https://ecpat.org/luxembourg-guidelines/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  Luxembourg Guidelines
                </a>
                , the international standard on this terminology.
              </li>
              <li>
                <strong>&quot;Survivor&quot; and person-first language.</strong>{" "}A person is not
                their worst experience or their diagnosis.
              </li>
              <li>
                <strong>&quot;Attraction&quot; is distinguished from &quot;offending.&quot;</strong>{" "}
                Conflating an unchosen interest with a chosen crime is both inaccurate and an
                obstacle to the prevention work that protects children.
              </li>
            </ul>
          </section>

          <section id="science" className="scroll-mt-20">
            <h2 className={h2}>How we handle the science</h2>
            <p>
              We are research-backed, and we follow the authoritative clinical position rather
              than picking studies to fit a narrative. We also hold one principle above any debate
              over terminology: people who are suffering deserve help, and nothing on this site
              will be written in a way that minimizes that.
            </p>
            <p>
              On compulsive sexual behavior, we follow the official position. The World Health
              Organization&apos;s ICD-11 recognizes{" "}
              <strong>Compulsive Sexual Behaviour Disorder</strong>{" "}(code 6C72) as a diagnosable{" "}
              <em>impulse-control disorder</em>{" "}&mdash; a persistent failure to control intense,
              repetitive sexual impulses that a person continues despite distress and serious
              consequences. (The American DSM-5 does not list it separately, having declined a
              proposed &quot;Hypersexual Disorder&quot; in 2013.) Whether the most precise label is
              &quot;disorder,&quot; &quot;compulsion,&quot; or &quot;addiction&quot; is something
              researchers continue to refine &mdash; but that does not change the part that matters
              here: for a meaningful number of people the loss of control is real, distressing, and
              treatable, and they deserve support rather than dismissal.
            </p>
            <p>
              So we apply two rules at once. We do not <em>overstate</em>{" "}the science: claims
              trace to peer-reviewed research and to bodies like the WHO, and we flag genuine
              uncertainty honestly (for example, that self-reported &quot;porn addiction&quot; can
              be amplified by moral distress). And we do not let careful hedging become a reason to{" "}
              <em>understate</em>{" "}harm or to withhold help. Where the evidence is still developing
              we say so; where a person is struggling, we point them toward help regardless of which
              word ultimately wins the argument.
            </p>
            <p>
              On the abuse of children there is no debate to balance. The harm of child sexual
              abuse and CSAM is settled, and we treat it with the moral clarity it demands.
            </p>
          </section>

          <section id="currency" className="scroll-mt-20">
            <h2 className={h2}>Keeping it current</h2>
            <ul>
              <li>
                <strong>&quot;Last reviewed&quot; dates.</strong>{" "}Reference pages state when they
                were last checked, so you can judge their freshness yourself.
              </li>
              <li>
                <strong>Perishable statistics are pinned.</strong>{" "}Fast-moving numbers (like the
                annual CyberTipline volume) are snapshotted, and an automated check flags us when a
                source&apos;s figure drifts from the one we published &mdash; so the site can&apos;t
                quietly fall out of date.
              </li>
              <li>
                <strong>Laws are tracked by status.</strong>{" "}Our{" "}
                <Link href="/laws" className="text-accent underline underline-offset-2">
                  policy tracker
                </Link>{" "}
                separates enacted law from proposed bills and dates each, because in this area
                yesterday&apos;s &quot;proposed&quot; is often miscited as today&apos;s &quot;law.&quot;
              </li>
            </ul>
          </section>

          <section id="independence" className="scroll-mt-20">
            <h2 className={h2}>Independence</h2>
            <p>
              When we point you to a hotline, a removal tool, or a treatment program, it is because
              it is the right resource for your situation &mdash; never because anyone paid for
              placement. We recommend services on their merit and track record. Where a tool is one
              of our own open-source projects, we say so plainly.
            </p>
          </section>

          <section id="integrity" className="scroll-mt-20">
            <h2 className={h2}>Engineering integrity</h2>
            <p>Trust isn&apos;t only editorial &mdash; it&apos;s built into how the site is made:</p>
            <ul>
              <li>
                <strong>Everything is checkable.</strong>{" "}The full report, every guide, and every
                resource are indexed and{" "}
                <Link href="/search" className="text-accent underline underline-offset-2">
                  searchable
                </Link>
                ; an automated build check ensures no page can ship without being findable.
              </li>
              <li>
                <strong>Open tools.</strong>{" "}The detection and prevention building blocks we publish
                are{" "}
                <Link href="/tools" className="text-accent underline underline-offset-2">
                  open source
                </Link>
                , so others can inspect, verify, and reuse them.
              </li>
              <li>
                <strong>Built to be safe to visit.</strong>{" "}This is a reference, not a tracker; we
                keep the site lightweight and free of intrusive instrumentation, mindful that some
                readers are in crisis or worried about being watched.
              </li>
            </ul>
          </section>

          <section id="privacy" className="scroll-mt-20">
            <h2 className={h2}>Privacy &amp; analytics</h2>
            <p>
              People come here in crisis, and some are worried about being watched. So our rule is
              simple and absolute: <strong>this site runs no on-site analytics and sets no
              cookies.</strong>
            </p>
            <ul>
              <li>
                <strong>No trackers, no cookies, no fingerprinting.</strong>{" "}There are no
                third-party analytics scripts, advertising pixels, or session recorders anywhere on
                the site &mdash; and never on crisis pages like{" "}
                <Link href="/help-now" className="text-accent underline underline-offset-2">
                  Get Help Now
                </Link>
                , sextortion, or image removal.
              </li>
              <li>
                <strong>How we learn what to improve.</strong>{" "}The only audience signal we use is
                aggregate Google Search Console data &mdash; the anonymous search terms that bring
                people here. It tells us which questions to answer better; it cannot identify you or
                follow you.
              </li>
              <li>
                <strong>Nothing you do here is stored.</strong>{" "}There are no accounts, no logins,
                and no forms that save personal information. Searches and the triage tool run without
                recording what you typed.
              </li>
            </ul>
            <p>
              If you want to be certain, open your browser&apos;s network inspector while you read
              &mdash; you will not find an analytics or tracking request.
            </p>
          </section>

          <section id="corrections" className="scroll-mt-20">
            <h2 className={h2}>Corrections</h2>
            <p>
              We will get things wrong, and when we do we want to fix them quickly and visibly. If
              you spot an error &mdash; an outdated figure, a broken link, a claim that has aged
              badly, or a resource that has changed &mdash; please tell us. Accuracy on this subject
              matters more than appearing infallible.
            </p>
            <p>
              <strong>This is not a crisis channel.</strong>{" "}A correction note may take time to
              reach us, so if you need help now, please use{" "}
              <Link href="/help-now" className="text-accent underline underline-offset-2">
                Get Help Now
              </Link>{" "}
              or the crisis lines on{" "}
              <Link href="/get-help" className="text-accent underline underline-offset-2">
                Get Help
              </Link>{" "}
              &mdash; those reach people who can respond immediately.
            </p>
            <p className="text-[14px] text-subtle">
              Related:{" "}
              <Link href="/citations" className="text-accent underline underline-offset-2">
                Citations
              </Link>{" · "}
              <Link href="/organizations" className="text-accent underline underline-offset-2">
                Organization directory
              </Link>
            </p>
            <p className="mt-3 text-[12px] text-subtle">Last reviewed May 2026.</p>
          </section>

          <p className="pt-4">
            <Link href="/" className="text-accent hover:underline underline-offset-2">
              &larr; Back to the research
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
