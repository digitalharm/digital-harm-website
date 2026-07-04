import type { Metadata } from "next";
import Link from "next/link";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Open-source building blocks for CSAM detection, blocking, and prevention — the buildable layer beneath the project's technology chapter. Ten tools across hashing, integration, list infrastructure, and legal operations. None ship a hash list or handle real CSAM.",
};

type Status = "available" | "in-progress" | "planned" | "deferred";

type Tool = {
  slug: string;
  name: string;
  tagline: string;
  status: Status;
  wave: string;
  languages: string[];
  install?: string;
  chapterAnchor: string;
};

type Group = {
  id: string;
  label: string;
  heading: string;
  blurb: string;
  tools: Tool[];
};

const groups: Group[] = [
  {
    id: "hashing",
    label: "Hashing & conformance",
    heading: "The foundation: byte-identical hashing across runtimes",
    blurb:
      "PDQ and TMK+PDQF are the open-source perceptual hashing algorithms that the NCMEC Hash Sharing API accepts as supported fingerprint types. The drift problem — different language ports producing different hashes for the same image — is the silent-false-negative failure mode the conformance suite exists to kill.",
    tools: [
      {
        slug: "hashkit",
        name: "HashKit",
        tagline:
          "One WebAssembly core for PDQ and TMK+PDQF, with NCMEC-verified test vectors so every language produces the same hash.",
        status: "in-progress",
        wave: "Wave 1: Foundation",
        languages: ["Rust", "WASM", "Node", "Deno", "Bun", "Python"],
        install: "npm install @digitalharm/hashkit",
        chapterAnchor: "/report/technology#csam-detection",
      },
      {
        slug: "hashkit-match",
        name: "hashkit-match",
        tagline:
          "In-memory multi-index Hamming matcher over caller-supplied hash sets. Ships no hash lists.",
        status: "in-progress",
        wave: "Ships alongside HashKit",
        languages: ["Rust", "WASM"],
        install: "cargo add hashkit-match",
        chapterAnchor: "/report/technology#csam-detection",
      },
      {
        slug: "detectkit-test",
        name: "DetectKit-Test",
        tagline:
          "Synthetic non-CSAM test fixtures with engineered hash properties — verify your detection pipeline in CI without touching real CSAM.",
        status: "in-progress",
        wave: "Wave 1: Foundation",
        languages: ["TypeScript", "Python"],
        install: "pip install detectkit-test",
        chapterAnchor: "/report/technology#csam-detection",
      },
    ],
  },
  {
    id: "integration",
    label: "Integration & prevention",
    heading: "Drop-in middleware and prompt-side defense",
    blurb:
      "The integration layer compresses week-long PhotoDNA onboarding into an afternoon and adds defense in depth at the AI-generation prompt before any compute is spent. Designed so any platform can wire up the same protection as a Discord or Roblox.",
    tools: [
      {
        slug: "csam-shield",
        name: "CSAM-Shield",
        tagline:
          "One-line middleware for Express/Fastify/FastAPI/Hono that wires PhotoDNA, PDQ, NCMEC API, and Cloudflare CSAM Scanning behind a unified interface.",
        status: "in-progress",
        wave: "Wave 2: Drop-in adoption",
        languages: ["TypeScript", "Python"],
        install: "npm install @digitalharm/csam-shield",
        chapterAnchor: "/report/technology#csam-detection",
      },
      {
        slug: "promptshield",
        name: "PromptShield",
        tagline:
          "Lightweight classifier middleware for Stable Diffusion / FLUX / ComfyUI / vLLM that detects CSAM intent at the prompt, before compute is spent.",
        status: "in-progress",
        wave: "Wave 2: Drop-in adoption",
        languages: ["Python"],
        install: "pip install promptshield",
        chapterAnchor: "/report/ai-generated",
      },
      {
        slug: "c2pa-lite",
        name: "C2PA-Lite",
        tagline:
          "Pragmatic C2PA content credentials for generators that don't yet have provenance signaling.",
        status: "in-progress",
        wave: "Wave 5: re-promoted from Deferred — manifest layer scaffolded; watermark layer awaits research stabilization",
        languages: ["Rust"],
        chapterAnchor: "/report/ai-generated",
      },
    ],
  },
  {
    id: "list-infrastructure",
    label: "List infrastructure",
    heading: "Hash-list sync, audit, and pre-training screening",
    blurb:
      "These two tools sit on the credentialed layer — NCMEC, IWF, and Project Arachnid relationships are required to operate them in production. They are the natural home for the grant-funded credential-brokering work and ship after the foundation establishes the maintainer's standing.",
    tools: [
      {
        slug: "hashstream",
        name: "HashStream",
        tagline:
          "Version control and an audit trail for the CSAM hash lists you're legally on the hook for.",
        status: "in-progress",
        wave: "Wave 3: Credentialed infrastructure",
        languages: ["Go", "TypeScript"],
        install: "go install github.com/digitalharm/fight-csam/packages/hashstream/cmd/hashstreamd@latest",
        chapterAnchor: "/report/technology#csam-detection",
      },
      {
        slug: "trainguard",
        name: "TrainGuard",
        tagline:
          "Pre-flight screen for AI image/video training datasets against national hash lists. Generates compliance reports with chain-of-custody.",
        status: "in-progress",
        wave: "Wave 3: Credentialed infrastructure",
        languages: ["Python"],
        install: "pip install trainguard",
        chapterAnchor: "/report/ai-generated",
      },
    ],
  },
  {
    id: "legal-ops",
    label: "Legal & operations",
    heading: "CyberTipline filing, evidence retention, moderator wellbeing",
    blurb:
      "The legal endgame: filing statutory reports under 18 U.S.C. § 2258A, retaining evidence with proper chain of custody, and operationalizing moderator wellbeing as compliance. These ship last because they carry direct federal blast radius and require outside counsel on retainer.",
    tools: [
      {
        slug: "cybertip-cli",
        name: "CyberTip CLI",
        tagline:
          "NCMEC CyberTipline report submission with proper formatting, retry logic, evidence packaging, audit logging.",
        status: "in-progress",
        wave: "Wave 4: Legal endgame",
        languages: ["TypeScript", "Python"],
        install: "npm install -g @digitalharm/cybertip-cli",
        chapterAnchor: "/report/ai-generated#legal-landscape",
      },
      {
        slug: "evidencevault",
        name: "EvidenceVault",
        tagline:
          "Defensible records-retention with chain-of-custody metadata, preservation timers matching LE requests, jurisdiction-aware schedules.",
        status: "in-progress",
        wave: "Wave 4: Legal endgame",
        languages: ["Go"],
        install: "docker pull ghcr.io/digitalharm/evidencevault",
        chapterAnchor: "/report/technology#csam-detection",
      },
      {
        slug: "safemod",
        name: "SafeMod",
        tagline:
          "Moderator-wellness layer: blur-by-default media, hard exposure caps + mandatory breaks, and aggregate-only wellbeing signals — stores no personal or special-category data.",
        status: "in-progress",
        wave: "Wave 5: re-promoted from Deferred — privacy-by-construction (zero deps, no identifiers, k-anonymous aggregates)",
        languages: ["Rust"],
        chapterAnchor: "/report/technology",
      },
    ],
  },
];

// The maturity ladder every tool climbs, from the roadmap's status taxonomy.
// Distinct from the wave sequence below: waves are *when* a tool is built,
// the ladder is *how mature* it is once building starts.
const maturityLadder: { name: string; blurb: string }[] = [
  { name: "Planned", blurb: "Designed; nothing beyond a README and a status line." },
  { name: "In progress", blurb: "Scaffolded and compiling; core functionality landing." },
  { name: "Alpha", blurb: "Real code, usable by early adopters who accept breaking changes." },
  { name: "Beta", blurb: "API stable; hardening for production." },
  { name: "Stable", blurb: "Production-ready. Semver applies." },
];

// The dependency-ordered build sequence. Waves describe why tools ship in a
// given order; tool membership is by slug so each card's status badge below
// stays sourced from the single `groups` definition above.
type RoadmapWave = {
  id: string;
  label: string;
  theme: string;
  summary: string;
  toolSlugs: string[];
};

const roadmapWaves: RoadmapWave[] = [
  {
    id: "wave-1",
    label: "Wave 1",
    theme: "Foundation",
    summary:
      "Byte-identical perceptual hashing and synthetic conformance fixtures. Everything downstream matches against these hashes, so the foundation ships first.",
    toolSlugs: ["hashkit", "hashkit-match", "detectkit-test"],
  },
  {
    id: "wave-2",
    label: "Wave 2",
    theme: "Drop-in adoption",
    summary:
      "One-line detection middleware and prompt-side prevention a small team can wire up in an afternoon — no enterprise contract required.",
    toolSlugs: ["csam-shield", "promptshield"],
  },
  {
    id: "wave-3",
    label: "Wave 3",
    theme: "Credentialed infrastructure",
    summary:
      "Hash-list version control and pre-training dataset screening. Operating these in production is gated on NCMEC / IWF / Project Arachnid relationships.",
    toolSlugs: ["hashstream", "trainguard"],
  },
  {
    id: "wave-4",
    label: "Wave 4",
    theme: "Legal endgame",
    summary:
      "Statutory CyberTipline reporting and defensible evidence retention. Production submission paths stay blocked until outside counsel signs off.",
    toolSlugs: ["cybertip-cli", "evidencevault"],
  },
  {
    id: "wave-5",
    label: "Wave 5",
    theme: "Provenance & satellites",
    summary:
      "C2PA content credentials for AI generators, re-promoted as a prevention primitive. SafeMod's moderator-wellbeing layer, also re-promoted from Deferred — rebuilt privacy-by-construction so it stores no personal or special-category data.",
    toolSlugs: ["c2pa-lite", "safemod"],
  },
];

const statusStyles: Record<Status, string> = {
  available: "bg-accent-soft text-accent border-accent",
  "in-progress": "bg-warning-soft text-warning border-warning",
  planned: "bg-paper text-muted border-rule",
  deferred: "bg-paper text-subtle border-rule",
};

const statusLabel: Record<Status, string> = {
  available: "Available",
  "in-progress": "In progress",
  planned: "Planned",
  deferred: "Deferred",
};

export default function ToolsPage() {
  const total = groups.reduce((acc, g) => acc + g.tools.length, 0);

  // Derive the status callout from the data so it cannot drift when
  // statuses change. Order matches statusLabel; zero-count statuses are
  // dropped so the callout reads cleanly (e.g. "10 In progress, 1 Deferred"
  // rather than "0 Available, 10 In progress, 0 Planned, 1 Deferred").
  const statusCounts = groups
    .flatMap((g) => g.tools)
    .reduce<Record<Status, number>>(
      (acc, t) => {
        acc[t.status] = (acc[t.status] ?? 0) + 1;
        return acc;
      },
      { available: 0, "in-progress": 0, planned: 0, deferred: 0 },
    );
  const statusOrder: Status[] = ["available", "in-progress", "planned", "deferred"];
  const presentStatuses = statusOrder.filter((s) => statusCounts[s] > 0);
  // Read naturally with the "OSS projects" noun: a single status reads
  // "11 OSS projects in progress"; a mix reads
  // "11 OSS projects — 10 in progress, 1 deferred". Stays drift-proof.
  const callout =
    presentStatuses.length === 1
      ? `${total} OSS projects ${statusLabel[presentStatuses[0]].toLowerCase()}`
      : `${total} OSS projects — ${presentStatuses
          .map((s) => `${statusCounts[s]} ${statusLabel[s].toLowerCase()}`)
          .join(", ")}`;

  // Slug → tool lookup so the roadmap waves render live status badges from
  // the same `groups` data the detailed cards use (no second source of truth).
  const toolBySlug = new Map(groups.flatMap((g) => g.tools).map((t) => [t.slug, t]));

  return (
    <article className="bg-background">
      <PageSchema path="/tools" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            Open-source · {total} tools
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Buildable infrastructure for CSAM defense.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            Open-source building blocks for CSAM detection, blocking, and prevention. The
            companion portfolio to{" "}
            <Link
              href="/report/technology"
              className="text-accent underline underline-offset-2"
            >
              Chapter 06: Technology Solutions
            </Link>{" "}
            — designed so any platform can wire up the same protective
            infrastructure as a Discord or Roblox without weeks of per-provider
            integration. New to this? Start with the{" "}
            <Link
              href="/for-developers"
              className="text-accent underline underline-offset-2"
            >
              For Developers guide
            </Link>
            .
          </p>
          <p className="text-sm text-subtle mt-6 max-w-2xl">
            Status reflects current readiness. Repository:{" "}
            <a
              href="https://github.com/digitalharm/fight-csam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              digitalharm/fight-csam
            </a>{" "}
            (private during initial bring-up; flipping public after the safety guard CI is
            battle-tested on real PR traffic).
          </p>
        </div>
      </header>

      <section className="border-b border-rule bg-foreground text-background">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-background/70 font-semibold mb-2">
              For developers
            </p>
            <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-1.5">
              Build with these tools at FightCSAM.
            </h2>
            <p className="text-sm md:text-[0.9375rem] text-background/80 leading-relaxed max-w-2xl">
              FightCSAM is the developer home for this toolkit — quickstarts and API
              docs for every tool, a guided golden path to a compliant pipeline, and
              an analyzed directory of the wider open-source safety-tools ecosystem.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="https://fightcsam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-background text-foreground px-4 py-2.5 rounded-md text-sm font-medium hover:bg-background/90 transition-colors"
            >
              Visit FightCSAM ↗
            </a>
          </div>
        </div>
      </section>

      <nav className="border-b border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
            Jump to a category
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

      <section className="border-b border-rule bg-accent-soft/60">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
              How this fits
            </p>
            <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight">
              The buildable layer.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed">
              These tools sit one layer below the existing detection infrastructure
              (PhotoDNA, NCMEC, IWF, Project Arachnid, Cloudflare CSAM Scanning, Thorn
              Safer, Hive AI). They do not replace it — they make it cheaper to consume.
              For engineers wiring it up, see{" "}
              <Link
                href="/for-developers"
                className="text-accent underline underline-offset-2"
              >
                For Developers
              </Link>
              . For platform leaders deciding what to build, see{" "}
              <Link
                href="/for-tech-ceos"
                className="text-accent underline underline-offset-2"
              >
                For Tech CEOs
              </Link>
              . For compliance and audit context, see{" "}
              <Link
                href="/for-compliance-teams"
                className="text-accent underline underline-offset-2"
              >
                For Compliance Teams
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-rule bg-paper">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2">
              Roadmap and status
            </p>
            <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight mb-1.5">
              Current state: {callout}.
            </h2>
            <p className="text-sm md:text-[0.9375rem] text-muted leading-relaxed max-w-2xl">
              The full roadmap documents each tool&apos;s current state, next
              milestone, acceptance criteria for status promotion, and the
              cross-tool dependency map. Status badges below pull from that
              source of truth.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="https://github.com/digitalharm/fight-csam/blob/main/docs/roadmap.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-foreground text-background px-4 py-2.5 rounded-md text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              See the roadmap ↗
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 space-y-20">
        {groups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10">
              <div className="md:col-span-4">
                <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold border-l-2 bg-accent-soft border-accent text-accent mb-4">
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
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
              {group.tools.map((t) => (
                <li
                  key={t.slug}
                  className="bg-background p-6 md:p-7 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight">
                      {t.name}
                    </h3>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold border px-2 py-0.5 rounded shrink-0 ${statusStyles[t.status]}`}
                    >
                      {statusLabel[t.status]}
                    </span>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-subtle font-medium mb-3">
                    {t.wave}
                  </p>
                  <p className="text-sm md:text-[0.9375rem] text-foreground leading-relaxed mb-4 flex-1">
                    {t.tagline}
                  </p>
                  {t.install && (
                    <pre className="bg-paper border border-rule rounded px-3 py-2 text-[0.8125rem] font-mono text-foreground overflow-x-auto mb-3">
                      {t.install}
                    </pre>
                  )}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {t.languages.map((lang) => (
                      <span
                        key={lang}
                        className="text-[10px] uppercase tracking-wider font-medium text-muted bg-paper border border-rule px-1.5 py-0.5 rounded"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm mt-auto">
                    <a
                      href={`https://fightcsam.org/docs/${t.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2"
                    >
                      Docs ↗
                    </a>
                    <a
                      href={`https://github.com/digitalharm/fight-csam/tree/main/packages/${t.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline underline-offset-2"
                    >
                      GitHub ↗
                    </a>
                    <Link
                      href={t.chapterAnchor}
                      className="text-accent hover:underline underline-offset-2"
                    >
                      Context in report →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="border-t border-rule pt-14 bg-warning-soft/40 -mx-5 px-5 pt-10 pb-10 md:-mx-0 md:px-10 md:pt-12 md:pb-12 rounded-md">
          <div className="max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-warning font-semibold mb-3">
              Scope & safety
            </p>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              What this portfolio is not.
            </h2>
            <ul className="space-y-3 text-[1.0625rem] leading-relaxed font-serif">
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-warning" aria-hidden />
                <strong>None of these tools ship a CSAM hash list.</strong> National hash
                data lives at NCMEC, IWF, and Project Arachnid under specific legal
                frameworks. It stays there. The portfolio implements the algorithms and
                clients that consume those lists, never the lists themselves.
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-warning" aria-hidden />
                <strong>None of these tools handle real CSAM imagery.</strong> Tests use
                synthetic non-CSAM fixtures from{" "}
                <a
                  href="https://github.com/digitalharm/fight-csam/tree/main/packages/detectkit-test"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  detectkit-test
                </a>{" "}
                with engineered hash properties.
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-warning" aria-hidden />
                <strong>These tools do not provide legal compliance by default.</strong>{" "}
                Adoption does not satisfy 18 U.S.C. § 2258A, DSA Article 16, the UK
                Online Safety Act, or any other regulatory regime. Counsel remains
                required.
              </li>
              <li className="pl-5 relative">
                <span className="absolute left-0 top-3 w-2 h-px bg-warning" aria-hidden />
                <strong>Detection-assist, not a guarantee.</strong> Hash-matching catches
                known material; AI classification catches novel material with false
                positives. Human review remains essential.
              </li>
            </ul>
            <p className="mt-6 text-sm text-muted">
              See the full{" "}
              <a
                href="https://github.com/digitalharm/fight-csam/blob/main/docs/safety-policy.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                safety policy
              </a>{" "}
              for the threat model and the CI guard that enforces these rules.
            </p>
          </div>
        </section>

        <section id="roadmap" className="border-t border-rule pt-14 scroll-mt-20">
          <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Roadmap: the build sequence
          </h2>
          <p className="font-serif text-[1.0625rem] leading-relaxed max-w-2xl mb-10">
            Tools ship in dependency order across five waves — the foundation
            first, because everything downstream hashes through it. Within each
            wave, a tool climbs a maturity ladder from Planned to Stable.
          </p>

          <div className="mb-12">
            <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-4">
              Maturity ladder
            </p>
            <ol className="flex flex-wrap items-stretch gap-2">
              {maturityLadder.map((step, i) => (
                <li key={step.name} className="flex items-stretch gap-2">
                  <div className="border border-rule rounded-md bg-paper px-3 py-2.5 max-w-[12rem]">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-mono text-[10px] text-subtle">{i + 1}</span>
                      <span className="font-semibold text-[0.8125rem] tracking-tight">
                        {step.name}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted leading-snug">{step.blurb}</p>
                  </div>
                  {i < maturityLadder.length - 1 && (
                    <span aria-hidden className="self-center text-subtle text-sm">
                      →
                    </span>
                  )}
                </li>
              ))}
            </ol>
            <p className="text-[11px] text-subtle mt-3">
              A sixth status, <span className="font-semibold">Deferred</span>, marks
              work intentionally postponed or spun out — not on the active roadmap.
            </p>
          </div>

          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-5">
            Build waves
          </p>
          <ol className="space-y-3">
            {roadmapWaves.map((wave) => (
              <li
                key={wave.id}
                className="grid md:grid-cols-12 gap-4 md:gap-8 border border-rule rounded-lg p-5 bg-paper"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent mb-1">
                    {wave.label}
                  </p>
                  <h3 className="font-serif text-lg font-semibold tracking-tight leading-tight">
                    {wave.theme}
                  </h3>
                </div>
                <div className="md:col-span-9">
                  <p className="text-[0.9375rem] text-muted leading-relaxed mb-3">
                    {wave.summary}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {wave.toolSlugs.map((slug) => {
                      const tool = toolBySlug.get(slug);
                      if (!tool) return null;
                      return (
                        <span
                          key={slug}
                          className="inline-flex items-center gap-1.5 border border-rule rounded-md px-2.5 py-1 bg-background"
                        >
                          <span className="text-[0.8125rem] font-medium tracking-tight">
                            {tool.name}
                          </span>
                          <span
                            className={`inline-block px-1.5 py-0.5 text-[9px] uppercase tracking-[0.12em] font-semibold border rounded ${statusStyles[tool.status]}`}
                          >
                            {statusLabel[tool.status]}
                          </span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-rule pt-14">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Funding and sponsorship
            </h2>
            <p className="font-serif text-[1.0625rem] leading-relaxed">
              The portfolio is self-funded by anonymous individuals and organizations who
              want this infrastructure to exist — there is no per-seat licensing, and no
              platform pays for its own copy. The alignment matters: this is plumbing every
              platform needs and rebuilds poorly, so it is built as a public good and given
              away, with the goal of the widest possible adoption rather than revenue.
            </p>
            <p className="mt-4 text-sm text-muted">
              If you would like to help sustain or expand the work, sponsorship is welcome.
              See the{" "}
              <a
                href="https://github.com/digitalharm/fight-csam/blob/main/docs/sponsorship.md"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2"
              >
                sponsorship document
              </a>{" "}
              for ways to contribute, or email{" "}
              <a
                href="mailto:sponsor@digitalharm.org"
                className="text-accent underline underline-offset-2"
              >
                sponsor@digitalharm.org
              </a>
              .
            </p>
          </div>
        </section>

        <section className="border-t border-rule pt-14">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Notes
            </h2>
            <ul className="space-y-3 text-[1.0625rem] leading-relaxed font-serif">
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The portfolio is intentionally fixed at 10 tools. New packages need a
                design conversation before opening a PR. See{" "}
                <a
                  href="https://github.com/digitalharm/fight-csam/blob/main/.github/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  CONTRIBUTING
                </a>
                .
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                The build order matters: foundation first (no credentials needed),
                drop-in adoption second, credentialed infrastructure third, legal
                endgame last. See the{" "}
                <a
                  href="https://github.com/digitalharm/fight-csam/blob/main/docs/sequencing.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-2"
                >
                  sequencing document
                </a>{" "}
                for the rationale.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Both originally-deferred tools have since been re-promoted and
                built: SafeMod was rebuilt privacy-by-construction (zero
                dependencies, no identifiers stored, aggregate-only k-anonymous
                wellbeing signals), which removes the GDPR special-category-data
                concern that caused its deferral; C2PA-Lite ships its manifest
                layer, with real signing behind an <code>upstream</code> feature
                flag pending the c2pa-rs dependency decision. The portfolio now
                has no indefinitely-deferred tools.
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/report/technology"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                ← Chapter 06: Technology Solutions
              </Link>
              <Link
                href="/for-tech-ceos"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                For Tech CEOs →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
