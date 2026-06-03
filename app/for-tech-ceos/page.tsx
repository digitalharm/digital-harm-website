import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Tech CEOs",
  description:
    "Operational guide for founders, CTOs, and trust-and-safety leadership at platforms that host user content. The legal floor, the minimum viable detection stack (PhotoDNA, NCMEC Hash Sharing, Cloudflare CSAM Scanning), what to add as you scale, AI-generation-specific obligations, and the personal-liability landscape.",
};

type Topic = {
  id: string;
  eyebrow: string;
  heading: string;
  body: React.ReactNode;
};

const topics: Topic[] = [
  {
    id: "the-floor",
    eyebrow: "01 · The legal floor",
    heading: "Section 230 does not cover federal child exploitation law.",
    body: (
      <>
        <p>
          The mental model many founders carry &mdash; that Section 230 immunity covers
          third-party user content &mdash; has explicit carve-outs for federal child
          exploitation law. <strong>18 U.S.C. § 2258A</strong>{" "}requires US-based providers
          who become aware of apparent CSAM to report it to NCMEC&apos;s CyberTipline, with
          civil and criminal penalties for failure. FOSTA-SESTA (2018) narrowed Section 230
          further for sex-trafficking-related claims. The <strong>ENFORCE Act</strong>{" "}
          (December 2025) and <strong>TAKE IT DOWN Act</strong> (May 2025) extend
          criminal-equivalent treatment to AI-generated CSAM and non-consensual intimate
          imagery, including a 48-hour platform takedown requirement.
        </p>
        <p>
          The practical implication: building a platform that hosts user-generated images or
          video without an integrated detection-and-reporting pipeline is not a
          we&apos;ll-figure-it-out-later problem. It is a structural feature of the legal
          regime, and the cost of getting it wrong is regulatory, reputational, civil, and
          (in some scenarios) personal-criminal.
        </p>
      </>
    ),
  },
  {
    id: "minimum-stack",
    eyebrow: "02 · The minimum viable stack",
    heading: "What every platform with user images should have.",
    body: (
      <>
        <p>
          The baseline is achievable for a small team, mostly with free tooling provided by
          government and nonprofit infrastructure. Four pieces:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>PhotoDNA</strong> (Microsoft, free for qualified organizations) for
            perceptual-hash matching against known CSAM. Application-gated through
            Microsoft&apos;s portal; takes weeks to onboard. Plan for it before you launch
            user-generated content, not after (
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
            <strong>NCMEC Hash Sharing API</strong> for the verified industry hash list (5M+
            vetted hashes, supports PhotoDNA, PDQ, MD5, and others). Free for qualified
            providers. This is what you match against (
            <a
              href="https://hashsharing.ncmec.org/npo/v2/documentation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              NCMEC Hash Sharing
            </a>
            ).
          </li>
          <li>
            <strong>CyberTipline reporting integration</strong>. Reports are submitted via
            API; designate a primary reporter and a backup, set up the legal escalation path
            internally, and document the report-handling SLA. Reports route to law
            enforcement automatically.
          </li>
          <li>
            <strong>Cloudflare&apos;s CSAM Scanning Tool</strong> if Cloudflare is in your
            stack. Free for all customers regardless of plan, fuzzy-hash matching against
            NCMEC databases, automatic HTTP 451 blocking. The fastest way to add a layer of
            coverage to an existing deployment (
            <a
              href="https://blog.cloudflare.com/the-csam-scanning-tool/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Cloudflare
            </a>
            ).
          </li>
        </ul>
        <p>
          If you prefer open-source primitives end-to-end, Meta&apos;s{" "}
          <strong>PDQ</strong> (image, BSD-licensed) and <strong>TMK+PDQF</strong> (video)
          algorithms are listed as supported fingerprint types in the NCMEC API, so you can
          integrate from <code>facebook/ThreatExchange</code> rather than through proprietary
          PhotoDNA licensing (
          <a
            href="https://github.com/facebook/ThreatExchange/tree/main/pdq"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            ThreatExchange
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: "scale-stack",
    eyebrow: "03 · The next layer, as you scale",
    heading: "When the minimum stack stops being enough.",
    body: (
      <>
        <p>
          Hash-matching covers known CSAM. It does not surface novel material or AI-generated
          imagery. As your volume grows, three additional layers are worth budgeting for.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Thorn Safer</strong> is the commercial leader for hash plus AI
            classification of novel CSAM. 2025 numbers: 82M+ verified hashes, 86+ platforms
            in the SaferList cross-platform sharing network, 415.4B files processed.
            Available via AWS Marketplace. Pricing scales with volume; reasonable budget for
            mid-stage platforms (
            <a
              href="https://safer.io/resources/safers-2025-impact-report/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Safer
            </a>
            ).
          </li>
          <li>
            <strong>Hive AI</strong> if you specifically need AI-generated CSAM detection.
            Hive received a DHS Cyber Crimes Center contract in 2025 to distinguish
            AI-generated material from real-victim imagery. Commercial API; reasonable
            adjunct to Safer for the AI-generation surface (
            <a
              href="https://www.technologyreview.com/2025/09/26/1124343/us-investigators-are-using-ai-to-detect-child-abuse-images-made-by-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              MIT Technology Review
            </a>
            ).
          </li>
          <li>
            <strong>Project Arachnid Shield API</strong> (Canadian Centre for Child
            Protection) is free for ESPs and offers proactive content scanning against the
            project&apos;s database. Project Arachnid has issued 141M+ takedown notices and
            processed 176B+ images; the Shield integration moves you from
            we-respond-to-reports posture to we-proactively-screen posture (
            <a
              href="https://shield.projectarachnid.com/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Shield API
            </a>
            ).
          </li>
        </ul>
        <p>
          See <Link href="/report/technology#csam-detection" className="text-accent underline underline-offset-2">Chapter 06 &rarr; CSAM detection technologies</Link>{" "}
          for the full landscape.
        </p>
      </>
    ),
  },
  {
    id: "operational",
    eyebrow: "04 · Operational basics",
    heading: "What lives outside the detection pipeline.",
    body: (
      <>
        <p>
          A defensible program is not just integration work. Four operational pieces that
          founders consistently underinvest in:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>A primary CyberTipline reporter and a backup.</strong>{" "}The first-encounter
            engineer or moderator should always have a designated routing target. Without
            this, reports get delayed by &ldquo;who should I tell?&rdquo; friction at the
            worst possible moment.
          </li>
          <li>
            <strong>A 24/7 takedown SLA</strong>. The TAKE IT DOWN Act sets 48 hours as the
            statutory minimum for non-consensual intimate imagery. Industry best practice for
            confirmed CSAM is much tighter. Document your SLA, audit against it, and report
            it transparently.
          </li>
          <li>
            <strong>Trauma support for human moderators.</strong> The mental-health load on
            human content reviewers is severe and well-documented; the multi-million-dollar
            settlements (Meta, TikTok) have made this a known cost center. Budget for
            clinical support, rotation policies, exposure limits, and screening upon hire.
            Cutting corners here is morally and financially expensive.
          </li>
          <li>
            <strong>Law-enforcement-request protocol</strong>. Once you start filing
            CyberTipline reports, you will receive follow-up legal process. Outside counsel
            with experience in this area is not optional; the protocol for receiving,
            scoping, and responding to subpoenas, warrants, and emergency disclosure requests
            should be documented and rehearsed.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "ai-generation",
    eyebrow: "05 · If you build AI generation",
    heading: "Image and video generation has specific obligations.",
    body: (
      <>
        <p>
          The Internet Watch Foundation&apos;s 2026 assessment found AI-generated CSAM
          videos increased <strong>26,385%</strong> year-over-year in 2025. If your product
          generates images or video, you are operating in this risk space whether or not
          your intended use case is sexual. Four engineering decisions that matter:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Training-data hygiene</strong>. The Stanford Internet Observatory found
            CSAM in the LAION-5B dataset in 2023, after which it was withdrawn and
            re-released without the matching items. If you train on web-scale image data,
            screen against NCMEC&apos;s industry hash list and document the chain of custody.
          </li>
          <li>
            <strong>Prompt and output filtering</strong>. Both layers; not one or the other.
            Hive AI and other classifiers can run on generated outputs; prompt-classifier
            ensembles handle the input side. Open-source detection like the Hugging Face
            NSFW classifiers cover the broader adult-content surface but are not CSAM-aware
            on their own.
          </li>
          <li>
            <strong>Provenance signals</strong>. C2PA-style content credentials and
            invisible-watermarking schemes are now the de-facto industry expectation.
            Implementing them does not by itself stop misuse, but the absence of them is
            increasingly an aggravating factor in regulatory and reputational terms.
          </li>
          <li>
            <strong>The ENFORCE Act equates AI-generated CSAM with traditional CSAM</strong>{" "}
            in US federal criminal law. The argument that &ldquo;no real victim&rdquo; means
            &ldquo;no real crime&rdquo; is no longer available. <em>U.S. v. Anderegg</em> is
            the first federal case heading to appellate court testing the First Amendment
            limits of private possession of wholly AI-generated CSAM; production and
            distribution charges have proceeded uncontroversially (
            <a
              href="https://techpolicy.press/court-rules-that-constitution-protects-private-possession-of-aigenerated-csam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Tech Policy Press
            </a>
            ).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "what-good-looks-like",
    eyebrow: "06 · What good looks like",
    heading: "Read your peers' transparency reports.",
    body: (
      <>
        <p>
          The companies that operate well in this space publish detailed transparency
          reports. The structure to look for: total content reviewed, hash-match volume, AI
          classifier volume, CyberTipline reports filed, takedown SLA met percentage, false
          positive disclosure, appeals handled, and moderator wellbeing metrics.
        </p>
        <p>
          A few reference points:{" "}
          <a
            href="https://transparency.meta.com/reports/community-standards-enforcement/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Meta&apos;s Community Standards Enforcement Report
          </a>
          ,{" "}
          <a
            href="https://transparencyreport.google.com/youtube-policy/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Google&apos;s YouTube Community Guidelines Enforcement Report
          </a>
          ,{" "}
          <a
            href="https://www.cloudflare.com/trust-hub/transparency/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Cloudflare&apos;s Transparency Report
          </a>
          ,{" "}
          <a
            href="https://discord.com/safety-transparency-reports"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Discord&apos;s Transparency Report
          </a>
          , and{" "}
          <a
            href="https://safer.io/resources/safers-2025-impact-report/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Thorn&apos;s Safer Impact Report
          </a>
          . The Australian eSafety Commissioner&apos;s mandatory transparency notices have
          surfaced enforcement-level detail from Apple, Google, Meta, Microsoft, Discord,
          WhatsApp, Snap, and Skype that is worth reading even outside Australia.
        </p>
        <p>
          The <strong>Stanford CIS analysis</strong>{" "}of NCMEC reporting data (January 2026)
          found that approximately 80% of &ldquo;Generative AI&rdquo; CyberTipline reports
          involved no AI-generated CSAM at all &mdash; many were hash hits to known CSAM in
          AI training data. The takeaway for executives: aggregate report numbers are not
          self-explanatory; ask vendors and your own teams what categories actually mean
          before quoting numbers externally (
          <a
            href="https://cyberlaw.stanford.edu/letter-to-ncmec-about-ai-csam-report-statistics/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-2"
          >
            Stanford CIS
          </a>
          ).
        </p>
      </>
    ),
  },
  {
    id: "where-accountability-sits",
    eyebrow: "07 · Where accountability sits",
    heading: "Name an owner, and don't bury them in legal.",
    body: (
      <>
        <p>
          Detection tooling is the easy part. The harder question is organizational: who,
          by name, is accountable when CSAM reaches your platform?{" "}
          <Link
            href="/report/technology#platform-safety-orgs"
            className="text-accent underline underline-offset-2"
          >
            Chapter 06 maps how TikTok, Meta, and X actually structure that accountability
          </Link>
          , and the contrast between them is the lesson. Four principles fall out of it
          &mdash; each worth adopting or rejecting deliberately, not by default.
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Name a single accountable owner.</strong>{" "}The thinnest structure in
            that comparison attributes child-safety enforcement to an unnamed
            &ldquo;safety engineering team&rdquo; with no individual accountable for it,
            and that gap is exactly what regulators moved against &mdash; including a
            A$650,000 Australian Federal Court penalty in May 2026 for failing to fully
            comply with a child-exploitation transparency notice. If you cannot name the
            person responsible for detection and CyberTipline reporting, you do not have a
            program; you have a hope.
          </li>
          <li>
            <strong>Keep child safety out of the pure legal chain.</strong>{" "}The most
            developed structure in the comparison deliberately moved Trust &amp; Safety out
            of its parent company&apos;s legal reporting line and into platform operations.
            Legal&apos;s mandate is to manage the company&apos;s liability, which can sit in
            direct tension with the duty to detect, preserve, and report. Whistleblower
            testimony before the Senate Judiciary Committee in September 2025 &mdash;
            alleging that a major platform&apos;s legal department directed the alteration
            and deletion of internal child-exploitation research &mdash; is the cautionary
            version of getting this wrong.
          </li>
          <li>
            <strong>Give it a direct line and, eventually, board oversight.</strong>{" "}
            Day-to-day operations can live deep in the org, but the accountable owner needs
            an unobstructed escalation path to the CEO for the most serious cases, and at
            scale a board-level safety or risk committee. The strongest example in Chapter
            06 pairs an operational owner with an independent board security committee; the
            weakest leaves the safety function reporting, in effect, to a single owner with
            no committee at all.
          </li>
          <li>
            <strong>Make the reporting line survive a reorg.</strong>{" "}Executives leave.
            One platform in the comparison left its safety organization reporting into an
            empty CEO seat for nearly a year after its chief executive resigned. Write the
            accountable role into your org chart as a role, not a person, so a departure
            does not silently orphan the function.
          </li>
        </ul>
        <p>
          None of this requires headcount you don&apos;t have. A five-person company can
          still designate a named CSAM-response owner, put the CEO in the escalation path,
          and write the reporting line down. Child-safety accountability is a structural
          decision a founder makes deliberately &mdash; or, by not making it, makes badly.
        </p>
      </>
    ),
  },
  {
    id: "personal-liability",
    eyebrow: "08 · Personal exposure",
    heading: "Where founders and officers actually face risk.",
    body: (
      <>
        <p>
          The exposure landscape for tech executives has shifted in the last two years. The
          specific situations where Section 230 and limited-liability protections become
          materially weaker:
        </p>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Knowing facilitation</strong>. Once a senior officer has actual knowledge
            of CSAM on the platform and fails to act, the doctrine becomes less protective.
            Document your escalation chain so you can prove timely action; ensure that the
            CEO or general counsel is in the escalation path for the most serious cases.
          </li>
          <li>
            <strong>Failure to report under 18 U.S.C. § 2258A</strong>. Civil and criminal
            penalties for failure to report apparent CSAM. The penalty structure scales with
            knowing-and-willful failures and with corporate vs individual scope; getting the
            reporting plumbing right is the cheapest insurance you can buy.
          </li>
          <li>
            <strong>Apple NeuralHash is the cautionary tale.</strong> Apple announced
            client-side scanning, paused after privacy backlash, and formally abandoned the
            program. The December 2024 class-action alleges that abandoning detection
            facilitates CSAM proliferation on iCloud. Whatever you decide about
            client-side-scanning trade-offs, document the reasoning and the privacy review;
            announcing then retreating is worse than either option pursued consistently (
            <a
              href="https://www.cnet.com/tech/services-and-software/apples-abandonment-of-icloud-csam-scanner-is-hurting-victims-lawsuit-alleges/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              CNET
            </a>
            ).
          </li>
          <li>
            <strong>Investor and acquirer due diligence</strong>. T&amp;S maturity is now a
            line item in late-stage diligence. The absence of a documented program is
            increasingly a deal blocker rather than a punch-list item; the cost of building
            it after the diligence email arrives is far higher than the cost of building it
            on day one.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "where-to-start",
    eyebrow: "09 · Where to start tomorrow",
    heading: "If you don't have a program yet.",
    body: (
      <>
        <ul className="my-3 space-y-3">
          <li>
            <strong>Designate a primary CyberTipline reporter and a backup</strong> by name,
            today. Add it to your runbook. Brief them on the escalation path.
          </li>
          <li>
            <strong>Apply for PhotoDNA access</strong>{" "}via Microsoft&apos;s portal. It takes
            weeks; start the clock. While you wait, consider Meta&apos;s open-source PDQ as
            an interim path that doesn&apos;t require the application.
          </li>
          <li>
            <strong>If you use Cloudflare, enable the CSAM Scanning Tool</strong>. It is
            free and on by configuration; this is the lowest-effort coverage you can add
            this week.
          </li>
          <li>
            <strong>Retain outside counsel with experience in 2258A reporting and law
            enforcement requests</strong>. This is not a general-purpose litigation retainer.
            Ask specifically about CyberTipline workflow, emergency disclosure requests, and
            content-moderation testimony.
          </li>
          <li>
            <strong>Read three transparency reports</strong>: the one closest to your scale,
            the one from the platform whose model you find most defensible, and{" "}
            <a
              href="https://safer.io/resources/safers-2025-impact-report/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Thorn&apos;s Safer Impact Report
            </a>{" "}
            for the operational benchmarks.
          </li>
          <li>
            <strong>If you generate images or video</strong>, audit your training data
            against NCMEC hashes, add a CSAM classifier to output filtering, and document the
            privacy review for any client-side detection you consider.
          </li>
        </ul>
        <p>
          None of this is optional in the way founders sometimes treat it. It is one of the
          handful of foundational compliance areas where the question is not whether to do
          it but when, and the answer to when is always &ldquo;earlier.&rdquo;
        </p>
      </>
    ),
  },
];

export default function ForTechCeosPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            For founders, CTOs, and trust-and-safety leadership
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            What to build, in what order, before you have to.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            The CSAM detection and reporting stack is one of the few foundational compliance
            areas where Section 230 doesn&apos;t bail you out, the law has personal-criminal
            edges, and the operational baseline is reachable with mostly-free tooling.
            Pragmatic guide for platforms that host user content and for teams building
            AI image and video generation.
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
                Reference into the research.
              </h2>
            </div>
            <div className="md:col-span-8 prose-research">
              <p>The pages worth bookmarking for the deeper picture:</p>
              <ul>
                <li>
                  <Link href="/report/technology">Chapter 06: Technology Solutions</Link>{" "}
                  &mdash; the full CSAM-detection landscape, including PhotoDNA, PDQ/TMK,
                  Thorn Safer, Project Arachnid, Cloudflare, Hive AI, and the adjacent
                  infrastructure callout (CrowdSec, Falco).
                </li>
                <li>
                  <Link href="/report/ai-generated">Chapter 04: AI-Generated Content</Link>{" "}
                  &mdash; scale, detection challenges, the Stanford CIS data-integrity
                  finding, the EU&apos;s November 2025 retreat on mandatory scanning, and the
                  Apple NeuralHash case study.
                </li>
                <li>
                  <Link href="/report/prevention">Chapter 07: Prevention Strategies</Link>{" "}
                  &mdash; the legislative landscape including age verification, ENFORCE Act,
                  and TAKE IT DOWN Act.
                </li>
                <li>
                  <Link href="/apps">Apps directory</Link> &mdash; consumer-side tools your
                  users may already be running on their devices; relevant for product teams
                  designing onboarding for parents and recovery audiences.
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
                Informational, not legal advice. Reporting obligations and personal-liability
                exposure vary by entity structure, jurisdiction, and role. Counsel with
                specific experience in 18 U.S.C. § 2258A and the ENFORCE Act is the right
                escalation for entity-specific planning.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Vendor naming on this page is descriptive of the working ecosystem, not an
                endorsement. We are not affiliated with any of the named platforms or
                tools.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Adjacent operational security (general intrusion detection, runtime
                monitoring) is not a substitute for the hash-and-classifier stack described
                here. See the &ldquo;Adjacent infrastructure&rdquo; callout in{" "}
                <Link
                  href="/report/technology#csam-detection"
                  className="text-accent underline underline-offset-2"
                >
                  Chapter 06
                </Link>{" "}
                for the honest framing.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                If your team encounters CSAM operationally and needs trauma support, see{" "}
                <Link href="/for-victims" className="text-accent underline underline-offset-2">
                  For Survivors
                </Link>{" "}
                for the resources we&apos;d point a moderator toward — particularly the
                trauma-informed therapy modalities. The mental-health load on T&amp;S staff
                is severe and deserves dedicated investment.
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
                href="/report/technology"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                Chapter 06: Technology Solutions →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
