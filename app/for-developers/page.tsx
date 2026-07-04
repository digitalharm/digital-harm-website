import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "For Developers",
  description:
    "A hands-on implementation guide for engineers building CSAM detection and prevention: the detection pipeline, perceptual vs cryptographic hashing (PhotoDNA, PDQ/TMK), matching the NCMEC and IWF hash lists, how to handle a match without mishandling the file, AI-generation safeguards, testing without real material, and the FightCSAM open-source toolkit.",
};

type Topic = {
  id: string;
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
};

const topics: Topic[] = [
  {
    id: "pipeline",
    eyebrow: "01 · The pipeline",
    heading: "What a detection pipeline actually does.",
    body: (
      <>
        <p>
          Strip away the vendors and a CSAM detection system is four stages:{" "}
          <strong>ingest, hash, match, act</strong>. A file arrives (upload, message
          attachment, generated output); you compute one or more perceptual hashes of it;
          you compare those hashes against verified lists of known illegal material; and on
          a match you take a defined action &mdash; block, queue for human review, and, if
          you are a US provider, report. Everything else is detail layered on these four
          stages.
        </p>
        <p>
          The two design decisions that matter early are <strong>where</strong>{" "}hashing
          runs and <strong>when</strong>{" "}matching happens. Hashing at the edge (client or
          upload handler) saves bandwidth but is easier to tamper with; hashing server-side
          on ingest is the common baseline. Matching can be synchronous (block the upload
          until it clears) or asynchronous (accept, then scan and retro-act); most teams run
          a fast known-hash check inline and push slower classifier work to a queue. Build
          the pipeline so a new hash source or classifier can be added as a stage without a
          rewrite &mdash; you will add several over time.
        </p>
      </>
    ),
  },
  {
    id: "hashing",
    eyebrow: "02 · Hashing",
    heading: "Perceptual hashing is the workhorse, not cryptographic.",
    body: (
      <>
        <p>
          A cryptographic hash (MD5, SHA-256) changes completely if a single pixel changes,
          so it only catches byte-identical files &mdash; useless once an image is resized,
          recompressed, or re-saved. <strong>Perceptual hashing</strong>{" "}produces a
          fingerprint that stays close for visually similar images, so a match survives the
          transformations offenders routinely apply. Matching is then a Hamming-distance
          threshold, not an equality check.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>PhotoDNA</strong>{" "}(Microsoft) is the long-standing industry perceptual
            hash for images. Free for qualified organizations, but application-gated and
            slow to onboard &mdash; start the request before you need it (
            <a
              href="https://www.microsoft.com/en-us/photodna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              PhotoDNA
            </a>
            ).
          </li>
          <li>
            <strong>PDQ and TMK+PDQF</strong>{" "}(Meta, open-source) are the unrestricted
            alternative: PDQ for images, TMK+PDQF for video. You can read the algorithm,
            run it without an application, and self-host the matching. This is usually where
            a small team starts (
            <a
              href="https://github.com/facebook/ThreatExchange"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              ThreatExchange / PDQ
            </a>
            ).
          </li>
          <li>
            <strong>Cryptographic hashes still have a place</strong>{" "}&mdash; as a fast exact
            dedupe layer in front of perceptual matching, and for the file-identity records
            you keep for reporting. They are a complement, not the detection mechanism.
          </li>
        </ul>
        <p>
          The open-source{" "}
          <Link href="/tools" className="text-accent underline underline-offset-2">
            hashkit
          </Link>{" "}
          crate wraps perceptual hashing behind one Rust/WASM API so the same hashing runs
          server-side and at the edge without reimplementation.
        </p>
      </>
    ),
  },
  {
    id: "matching",
    eyebrow: "03 · Matching the lists",
    heading: "Match against verified lists. Never build your own.",
    body: (
      <>
        <p>
          You do not assemble a corpus of known CSAM to match against &mdash; possessing one
          is both illegal and unnecessary. Instead you match against <em>hash lists</em>{" "}
          maintained by clearinghouses, which distribute only the fingerprints, never the
          images.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>NCMEC Hash Sharing API</strong>{" "}&mdash; the verified industry list
            (millions of vetted hashes across PhotoDNA, PDQ, MD5 and more). Free for
            qualified US providers (
            <a
              href="https://report.cybertip.org/hashsharing/v2/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              NCMEC Hash Sharing
            </a>
            ).
          </li>
          <li>
            <strong>IWF Hash List</strong>{" "}&mdash; the UK equivalent, used by 200+ platforms
            internationally, with category metadata (
            <a
              href="https://www.iwf.org.uk/our-technology/our-services/hash-list/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              IWF Hash List
            </a>
            ).
          </li>
          <li>
            <strong>Project Arachnid Shield API</strong>{" "}(Canadian Centre for Child
            Protection) &mdash; matching-as-a-service if you would rather not host the list
            and matcher yourself.
          </li>
        </ul>
        <p>
          At small scale a linear Hamming-distance scan is fine. Past a few hundred thousand
          hashes, use <strong>multi-index hashing (MIH)</strong>{" "}so lookups stay sub-linear;{" "}
          <Link href="/tools" className="text-accent underline underline-offset-2">
            hashkit-match
          </Link>{" "}
          implements MIH so you are not hand-rolling the index. Treat the hash list as
          sensitive infrastructure: the filenames and counts are restricted, and the safety
          guard CI in the toolkit blocks them from ever landing in a commit.
        </p>
      </>
    ),
  },
  {
    id: "handling",
    eyebrow: "04 · Handling a match",
    heading: "The one rule you cannot break: do not mishandle the file.",
    body: (
      <>
        <div className="border-l-2 border-crisis bg-crisis-soft/50 pl-5 pr-4 py-4 my-2 rounded-r-md">
          <p className="text-[0.9375rem] leading-relaxed">
            <strong>Do not download, copy, move, screenshot, or assemble a store of
            suspected CSAM</strong>{" "}&mdash; not to &ldquo;build a training set,&rdquo; not to
            &ldquo;preserve evidence,&rdquo; not for QA. Doing so can itself be a criminal
            offense, even with good intent. Your system flags a <em>location and a hash</em>,
            not a saved copy.
          </p>
        </div>
        <p>
          When your pipeline matches apparent CSAM, the correct sequence is: remove or block
          public access, restrict the original in place (do not exfiltrate it), and, if you
          are a US-based provider, <strong>report to the NCMEC CyberTipline</strong>. Under{" "}
          <strong>18 U.S.C. § 2258A</strong>{" "}that report is a legal duty once you have actual
          knowledge, with civil and criminal penalties for failure; NCMEC exposes an API so
          reporting is part of the pipeline, not a manual afterthought. Preservation happens
          through the legal-process channel and your normal retention of the account record,
          not by your team making copies of the material.
        </p>
        <p>
          Two engineering implications follow. First, design the match handler so the file
          itself is never written to a new location, a log, an error report, or a screenshot
          &mdash; pass references (storage key, hash, account ID), never bytes. Second, put a
          named human and a legal-escalation path behind the queue; an automated match is a
          report trigger and a human-review trigger, and the most serious categories should
          reach counsel quickly. See{" "}
          <Link
            href="/for-compliance-teams"
            className="text-accent underline underline-offset-2"
          >
            For Compliance Teams
          </Link>{" "}
          for the reporting-evidence and retention records an auditor will later expect.
        </p>
      </>
    ),
  },
  {
    id: "ai-generation",
    eyebrow: "05 · If you build generation",
    heading: "Generative pipelines need prompt-side and output-side defense.",
    body: (
      <>
        <p>
          If you run image or video generation, hash-matching known material is not enough
          &mdash; the risk is novel synthetic CSAM, which by definition is not on any list.
          Defense is layered, and the cheapest layer is the earliest:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Prompt-side filtering</strong>{" "}blocks known abuse-seeking prompts and
            combinations before any compute is spent. It is imperfect against obfuscation
            but removes the casual majority and creates a logged signal.
          </li>
          <li>
            <strong>Output classifiers</strong>{" "}(Thorn Safer, Hive AI, and similar) score
            generated frames for apparent CSAM before delivery. This is where novel material
            is caught; budget for it as a real inference cost.
          </li>
          <li>
            <strong>Training-data hygiene</strong>{" "}&mdash; scan and document that training
            sets were checked against known-CSAM hashes, after the LAION findings made this a
            baseline expectation rather than a nicety.
          </li>
          <li>
            <strong>Provenance</strong>{" "}&mdash; sign outputs with C2PA / Content Credentials
            so downstream systems can distinguish your generations and so abuse is traceable.
          </li>
        </ul>
        <p>
          The legal frame matters for prioritization: the <strong>ENFORCE Act</strong>{" "}and{" "}
          <strong>TAKE IT DOWN Act</strong>{" "}extend criminal-equivalent treatment to
          AI-generated CSAM, so &ldquo;it was synthetic&rdquo; is not a defense. The
          background is in{" "}
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
    id: "testing",
    eyebrow: "06 · Testing safely",
    heading: "Validate the pipeline without ever touching real material.",
    body: (
      <>
        <p>
          You cannot use real CSAM to test &mdash; ever, for any reason. The pipeline is
          still fully testable, because hashing and matching are content-agnostic: a matcher
          that correctly flags a <em>benign</em>{" "}image whose hash you planted in a test list
          is exercising the exact same code path it would on real input.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Synthetic hash vectors</strong>{" "}&mdash; generate perceptual hashes of
            ordinary, licensed test images, load them into a fixture &ldquo;known&rdquo;
            list, and assert the pipeline matches, near-matches (post-resize), and correctly
            ignores unrelated images. This covers ingest, hashing, threshold tuning, and the
            match handler.
          </li>
          <li>
            <strong>detectkit-test</strong>{" "}in the toolkit ships exactly these
            benign-by-construction conformance vectors, so your matcher&apos;s
            Hamming-distance behavior is verified against a shared baseline rather than
            ad-hoc fixtures.
          </li>
          <li>
            <strong>Handler tests</strong>{" "}&mdash; assert the negative behaviors explicitly:
            that a match writes no copy of the file, emits no bytes to logs, and produces a
            correctly-shaped report payload from references only.
          </li>
        </ul>
        <p>
          Treat &ldquo;a match never causes the file to be copied anywhere&rdquo; as a
          first-class test, not a code-review hope.
        </p>
      </>
    ),
  },
  {
    id: "toolkit",
    eyebrow: "07 · The toolkit",
    heading: "What the open-source portfolio gives you.",
    body: (
      <>
        <p>
          The{" "}
          <Link href="/tools" className="text-accent underline underline-offset-2">
            FightCSAM
          </Link>{" "}
          portfolio is the buildable layer beneath the detection landscape &mdash; designed
          so any platform can wire up the same protection as a much larger one,
          without weeks of per-provider integration. The pieces a developer reaches for
          first:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>hashkit</strong>{" "}&mdash; one Rust/WASM perceptual-hashing API that runs
            identically server-side and at the edge.
          </li>
          <li>
            <strong>hashkit-match</strong>{" "}&mdash; multi-index Hamming-distance matching that
            stays sub-linear across millions of hashes.
          </li>
          <li>
            <strong>detectkit-test</strong>{" "}&mdash; benign conformance vectors for validating
            a matcher without real material.
          </li>
          <li>
            <strong>The integration and list-infrastructure tools</strong>{" "}&mdash; drop-in
            middleware that compresses PhotoDNA-style onboarding and standardizes
            CyberTipline reporting payloads.
          </li>
        </ul>
        <p>
          Every package ships under a safety policy enforced in CI: no hash-list filenames,
          no image binaries outside a tight allowlist, no credential patterns. The repository
          and per-tool status live on the{" "}
          <Link href="/tools" className="text-accent underline underline-offset-2">
            tools page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "where-to-start",
    eyebrow: "08 · Where to start",
    heading: "A first-week sequence for a small team.",
    body: (
      <>
        <p>
          If you host user images or run generation and have nothing in place, this order
          gets you from zero to a defensible baseline without waiting on any single gated
          dependency:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Day 1 &mdash; start the gated requests.</strong>{" "}File for PhotoDNA and
            NCMEC Hash Sharing access now; they take time. In parallel, stand up open PDQ
            hashing so you are not blocked waiting.
          </li>
          <li>
            <strong>Day 2&ndash;3 &mdash; build ingest and hashing.</strong>{" "}Hash every
            uploaded or generated image on ingest with hashkit; store references, never the
            material itself.
          </li>
          <li>
            <strong>Day 3&ndash;4 &mdash; wire matching and the handler.</strong>{" "}Match
            against your available list with hashkit-match; implement the match handler with
            the no-copy guarantee and a human-review queue. Test it end-to-end with
            detectkit-test vectors.
          </li>
          <li>
            <strong>Day 5 &mdash; reporting and escalation.</strong>{" "}Integrate the
            CyberTipline report path, designate a primary and backup reporter, and write down
            the legal-escalation contact. Document the whole flow for the audit you will face
            later.
          </li>
        </ul>
        <p>
          That is the minimum viable stack. The strategic version &mdash; what to add as you
          scale, and where executives face personal exposure &mdash; is in{" "}
          <Link href="/for-tech-ceos" className="text-accent underline underline-offset-2">
            For Tech CEOs
          </Link>
          ; the audit and documentation companion is{" "}
          <Link
            href="/for-compliance-teams"
            className="text-accent underline underline-offset-2"
          >
            For Compliance Teams
          </Link>
          .
        </p>
      </>
    ),
  },
];

export default function ForDevelopersPage() {
  return (
    <article className="bg-background">
      <PageSchema path="/for-developers" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For engineers building CSAM protection
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Wire up the detection stack &mdash; without mishandling what you find.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            The implementation companion to the technology chapter and the open-source
            toolkit: how the detection pipeline fits together, which hashing and matching
            infrastructure to use, and the one handling rule that turns good intentions into
            a criminal-exposure problem if you get it wrong.
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
                Where this material lives
              </p>
              <h2 className="font-serif text-2xl md:text-[1.875rem] font-semibold tracking-tight leading-tight">
                Reference into the research and the repo.
              </h2>
            </div>
            <div className="md:col-span-8 prose-research">
              <p>The pages worth bookmarking for the deeper picture:</p>
              <ul>
                <li>
                  <Link href="/report/technology">Chapter 06: Technology Solutions</Link>{" "}
                  &mdash; the full CSAM-detection landscape: PhotoDNA, PDQ/TMK, Thorn Safer,
                  Project Arachnid, Cloudflare, Hive AI, the reporting pipeline, and the
                  detection technical-depth section.
                </li>
                <li>
                  <Link href="/tools">Tools (open source)</Link> &mdash; the FightCSAM
                  portfolio with per-tool status and the repository link.
                </li>
                <li>
                  <Link href="/report/ai-generated">Chapter 04: AI-Generated Content</Link>{" "}
                  &mdash; why hash-matching alone fails on synthetic material and what the
                  classifiers actually catch.
                </li>
                <li>
                  <Link href="/for-tech-ceos">For Tech CEOs</Link> and{" "}
                  <Link href="/for-compliance-teams">For Compliance Teams</Link> &mdash; the
                  strategic and audit companions to this implementation guide.
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
                Implementation guidance, not legal advice. The § 2258A reporting duty and the
                handling rules carry criminal exposure; counsel experienced in child-safety
                law is the right escalation for entity-specific questions.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Tool and vendor naming is descriptive of the working ecosystem, not an
                endorsement. We are not affiliated with the named providers.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The single most important line on this page: a match flags a location and a
                hash, never a saved copy. If your design ever needs the bytes somewhere new,
                stop and re-read{" "}
                <a
                  href="#handling"
                  className="text-accent underline underline-offset-2"
                >
                  Handling a match
                </a>
                .
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If your team is exposed to this material operationally, the mental-health load
                is real. See{" "}
                <Link href="/for-victims" className="text-accent underline underline-offset-2">
                  For Survivors
                </Link>{" "}
                for the trauma-informed resources we&apos;d point a reviewer toward.
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
                href="/tools"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                The open-source toolkit →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
