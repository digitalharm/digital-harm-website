/**
 * Build-time search index for the whole site.
 *
 * The index is assembled at build time from two sources:
 *   1. The research report chapters (content/locales/en/report) — every section
 *      becomes its own searchable entry, so a query lands on the exact section.
 *   2. A hand-maintained registry of the static pages (guides, resources, etc.)
 *      with rich keyword/summary text so they rank well.
 *
 * It is exposed two ways:
 *   - `searchDocuments` — the full corpus, imported directly by the /search
 *     page (a server component) so search works with zero client fetch and zero
 *     API route (ideal for static export on Vercel).
 *   - `scoreDocuments(query)` — a small, dependency-free ranking function shared
 *     by the page and any future API consumer.
 *
 * Keeping this in one module means "make the site searchable" has a single
 * source of truth: add a page to PAGE_REGISTRY (or a chapter to the report) and
 * it becomes searchable automatically.
 */

import { chapters } from "@/content/locales/en/report";
import type { Block } from "@/content/types";

export type SearchCategory =
  | "Report chapter"
  | "Guide"
  | "Resources"
  | "Tools"
  | "About";

export interface SearchDocument {
  /** Stable id (route + optional #section). */
  id: string;
  title: string;
  /** Route to link to, e.g. /report/technology#csam-detection */
  href: string;
  category: SearchCategory;
  /** Short human description shown in results. */
  summary: string;
  /** Flattened searchable text (lowercased at score time). */
  body: string;
  /** Extra keywords to boost recall for synonyms/acronyms. */
  keywords: string;
}

// --- 1. static page registry --------------------------------------------- //
// Rich summaries/keywords so these pages are findable by the terms a real
// person would type. Keep titles aligned with the page <h1>/metadata.

interface PageEntry {
  href: string;
  title: string;
  category: SearchCategory;
  summary: string;
  keywords: string;
}

export const PAGE_REGISTRY: PageEntry[] = [
  {
    href: "/",
    title: "The Digital Harm Project",
    category: "About",
    summary:
      "Research and practical guidance on CSAM prevention and the harms of pornography addiction — for parents, survivors, clinicians, educators, platforms, and developers.",
    keywords: "home overview csam child sexual abuse material pornography addiction prevention",
  },
  {
    href: "/for-reporting",
    title: "For Reporting Content",
    category: "Guide",
    summary:
      "Where to report child sexual abuse material across 114 platforms and the clearinghouses (NCMEC CyberTipline, IWF, Cybertip.ca, INHOPE, eSafety, FBI).",
    keywords: "report csam cybertipline ncmec iwf inhope clearinghouse takedown abuse hotline how to report",
  },
  {
    href: "/sextortion",
    title: "Sextortion: A Survival Guide",
    category: "Guide",
    summary:
      "Being threatened over an intimate image? The exact steps right now — don't pay, preserve evidence, report, remove — plus how the scam works and crisis help. Built on FBI and NCMEC guidance.",
    keywords: "sextortion blackmail extortion intimate image nude threat pay don't pay financial sextortion teen boys help right now take it down stopncii fbi ncmec crisis what to do",
  },
  {
    href: "/for-victims",
    title: "For Survivors",
    category: "Guide",
    summary:
      "Survivor-centered guidance: removal of circulating imagery (Take It Down, StopNCII), trauma-informed therapy, sextortion and grooming support.",
    keywords: "survivor victim image-based abuse sextortion grooming take it down stopncii trauma emdr revenge porn nudes removal",
  },
  {
    href: "/for-educators",
    title: "For Educators",
    category: "Guide",
    summary:
      "Playbooks for school staff: pornography on school devices, image-based abuse, sextortion, AI deepfakes, grooming, compulsive use — first steps and sample language.",
    keywords: "school teacher counselor administrator classroom curriculum deepfake students child safety",
  },
  {
    href: "/for-offenders",
    title: "For People Seeking Help",
    category: "Guide",
    summary:
      "Non-judgmental guidance for people concerned about their own sexual thoughts or CSAM use: confidentiality realities, prevention services, evidence-based treatment.",
    keywords: "self help prevention dunkelfeld troubled desire stop it now offending pedophilia attraction minors treatment cbt act",
  },
  {
    href: "/for-tech-ceos",
    title: "For Tech CEOs",
    category: "Guide",
    summary:
      "Operational guide for platforms and AI image/video teams: legal floor, minimum viable detection stack, executive personal exposure.",
    keywords: "platform trust and safety photodna ncmec hash sharing cloudflare thorn safer hive section 230 2258a enforce act ai generation",
  },
  {
    href: "/for-developers",
    title: "For Developers",
    category: "Guide",
    summary:
      "Hands-on implementation: the ingest→hash→match→act pipeline, perceptual vs cryptographic hashing, matching NCMEC/IWF lists, handling a match safely.",
    keywords: "engineering pdq tmk photodna hashkit perceptual hash multi-index matching api detection pipeline open source",
  },
  {
    href: "/for-therapists",
    title: "For Therapists",
    category: "Guide",
    summary:
      "Clinical guide: intake screening, CBT vs ACT for problematic pornography use with effect sizes, trauma modalities, therapeutic-vs-forensic role, pharmacology.",
    keywords: "clinician psychologist lmft lcsw psychiatrist counselor compulsive sexual behavior csbd cbt act emdr ifs intake",
  },
  {
    href: "/for-compliance-teams",
    title: "For Compliance Teams",
    category: "Guide",
    summary:
      "Documentation and audit companion: regulatory mapping (US/EU/UK/AU), audit checklist, metrics that hold up, vendor due-diligence, 90-day buildout.",
    keywords: "compliance audit dsa online safety act esafety records retention metrics ttd ttr vendor due diligence policy",
  },
  {
    href: "/for-attorneys",
    title: "For Attorneys",
    category: "Guide",
    summary:
      "Evidence-based context for CSAM cases: recidivism data with caveats, risk-assessment instruments, treatment for mitigation, AI-generated CSAM law.",
    keywords: "legal defense prosecutor recidivism static-99r stable-2007 aasi sentencing mitigation enforce act take it down anderegg",
  },
  {
    href: "/guides",
    title: "Guides by Role",
    category: "Guide",
    summary:
      "All audience-specific guides in one place: reporting, survivors, educators, people seeking help, tech CEOs, developers, therapists, compliance, attorneys.",
    keywords: "guides index by role audience playbooks",
  },
  {
    href: "/get-help",
    title: "Get Help",
    category: "Resources",
    summary:
      "Crisis lines, recovery programs, and support resources for problematic pornography use and for survivors — with regional and international options.",
    keywords: "help crisis hotline recovery support resources treatment programs sa saa slaa smart recovery",
  },
  {
    href: "/get-help/bay-area",
    title: "Bay Area Resources",
    category: "Resources",
    summary:
      "San Francisco Bay Area treatment, therapy, and support resources, including the HOPE Program.",
    keywords: "san francisco bay area california therapy clinic hope program local resources",
  },
  {
    href: "/apps",
    title: "Apps & Filtering Tools",
    category: "Resources",
    summary:
      "Directory of accountability software, content filters, and device-level tools for individuals and families.",
    keywords: "apps accountability covenant eyes filtering parental controls blocker screen time device",
  },
  {
    href: "/tools",
    title: "Open-source Tools",
    category: "Tools",
    summary:
      "Ten open-source building blocks for CSAM detection, blocking, and prevention — hashing, integration middleware, list infrastructure, and legal operations.",
    keywords: "open source hashkit csam-shield promptshield hashstream trainguard cybertip evidencevault c2pa pdq detection",
  },
  {
    href: "/citations",
    title: "Citations",
    category: "About",
    summary: "The full source list behind the report's claims and statistics.",
    keywords: "citations sources references bibliography studies research evidence",
  },
  {
    href: "/about",
    title: "About",
    category: "About",
    summary:
      "What this resource is, the methodology behind it, how it began as research in August 2023 — plus the editorial standards behind every page: primary sourcing, terminology, contested science, review cadence, independence, privacy, and corrections.",
    keywords: "about methodology mission who we are scope editorial standards how we vet sources sourcing terminology csam not child pornography luxembourg guidelines contested science accuracy corrections trust independence privacy last reviewed primary sources",
  },
  {
    href: "/help-now",
    title: "Get Help Now",
    category: "Resources",
    summary:
      "Answer one or two quick questions and we'll route you to the exact help you need — sextortion, leaked images, a child's safety, reporting abuse, recovery, or confidential help for your own thoughts.",
    keywords: "help now triage get help fast what do i do emergency urgent route guide me find help quickly start here decision tool i need help",
  },
  {
    href: "/browse",
    title: "Browse Everything",
    category: "Resources",
    summary:
      "The whole resource mapped by topic — every guide, tool, and reference grouped by what you are trying to do, with search.",
    keywords: "browse topic map site map index everything all pages directory navigate explore contents",
  },
  {
    href: "/csam-statistics",
    title: "CSAM by the Numbers",
    category: "Resources",
    summary:
      "The headline statistics on CSAM and online child exploitation — CyberTipline volumes, AI-generated CSAM growth, sextortion trends, and industry detection — each with its year and primary source.",
    keywords: "statistics stats data numbers cybertipline ncmec iwf thorn weprotect reports volume ai-generated sextortion trends state of the threat figures how many",
  },
  {
    href: "/for-parents",
    title: "For Parents",
    category: "Guide",
    summary:
      "A practical guide for parents: age-by-age conversations about pornography and online safety, sextortion warning signs and scripts, grooming, devices as guardrails, and what to do if something has happened.",
    keywords: "parents parenting kids children child teen son daughter my kid saw porn talk conversation age appropriate sextortion grooming devices screen time online safety family what to do",
  },
  {
    href: "/for-pta-groups",
    title: "For PTA Groups",
    category: "Guide",
    summary:
      "A playbook for PTA presidents and parent-teacher groups fielding scared parents' AI-safety questions: the new risk of AI-made sexual images, why banning AI isn't a plan, a ready-to-run parent-night agenda, the questions parents ask with short answers, community device ground rules, and what to do if it happens at your school.",
    keywords: "PTA PTO parent teacher association president board parent group meeting event parent night community school AI safety guardrails deepfake nudify AI image training session organize how to help other parents",
  },
  {
    href: "/laws",
    title: "Laws & Policy Tracker",
    category: "Resources",
    summary:
      "The current state of US and international law on CSAM and intimate-image abuse, separating enacted statutes (TAKE IT DOWN Act, REPORT Act, 2258A, EU DSA, UK OSA) from proposed bills (EARN IT, EU CSA Regulation) — each with status, date, and primary source.",
    keywords: "law laws policy legislation statute bill take it down act report act 2258a earn it dsa online safety act esafety enacted proposed regulation legal tracker section 230",
  },
  {
    href: "/organizations",
    title: "Organization Directory",
    category: "Resources",
    summary:
      "A who's-who of child-protection organizations mapped by function — reporting hotlines, detection tech, investigative bodies, research institutes, prevention helplines, policy alliances, survivor support.",
    keywords: "organizations directory ncmec iwf thorn tech coalition lantern project arachnid lucy faithfull stop it now weprotect ecpat inhope interpol childlight whos who hotlines",
  },
  {
    href: "/prevention",
    title: "Preventing Abuse Before It Happens",
    category: "Resources",
    summary:
      "Demand-side / perpetration prevention: confidential help for people worried about their own thoughts toward children, the programs that provide it (Dunkelfeld, Stop It Now, Help Wanted, ReDirection), and an honest look at what the evidence shows.",
    keywords: "prevention demand side perpetration dunkelfeld troubled desire stop it now help wanted moore center letourneau redirection attraction minors confidential help anonymous before offending does treatment work",
  },
  {
    href: "/remove-images",
    title: "Get Your Images Removed",
    category: "Resources",
    summary:
      "Step-by-step removal of intimate images: which free tool for your situation (Take It Down, StopNCII, Report Remove), how on-device hashing keeps it private, your 48-hour removal right, and the restitution survivors can claim.",
    keywords: "remove images takedown take it down stopncii report remove deepfake nude leaked revenge porn ncii 48 hour right restitution mashas law damages how to remove image online",
  },
];

// --- 2. flatten report chapters into per-section documents ---------------- //

function blockText(block: Block): string {
  switch (block.type) {
    case "p":
    case "callout":
      return stripHtml(block.html);
    case "h3":
      return block.text;
    case "quote":
      return `${block.text} ${block.attribution ?? ""}`;
    case "stat":
      return `${block.figure} ${block.label} ${block.source ?? ""}`;
    case "table":
      return `${block.caption ?? ""} ${block.headers.join(" ")} ${block.rows
        .map((r) => r.join(" "))
        .join(" ")}`;
    case "list":
      return block.items.join(" ");
    default:
      return "";
  }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function chapterDocuments(): SearchDocument[] {
  const docs: SearchDocument[] = [];
  for (const chapter of chapters) {
    // One document for the chapter as a whole.
    docs.push({
      id: `/report/${chapter.slug}`,
      title: `${chapter.title}`,
      href: `/report/${chapter.slug}`,
      category: "Report chapter",
      summary: chapter.dek,
      body: `${chapter.title} ${chapter.dek}`,
      keywords: `chapter ${chapter.number} report`,
    });
    // One document per section, so a query lands on the exact section anchor.
    for (const section of chapter.sections) {
      const body = section.blocks.map(blockText).join(" ");
      docs.push({
        id: `/report/${chapter.slug}#${section.id}`,
        title: section.heading,
        href: `/report/${chapter.slug}#${section.id}`,
        category: "Report chapter",
        summary: `${chapter.title} — ${truncate(body, 160)}`,
        body: `${section.heading} ${body}`,
        keywords: `${chapter.title} chapter ${chapter.number}`,
      });
    }
  }
  return docs;
}

function truncate(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + "…";
}

// --- the corpus ----------------------------------------------------------- //

export const searchDocuments: SearchDocument[] = [
  ...PAGE_REGISTRY.map((p) => ({
    id: p.href,
    title: p.title,
    href: p.href,
    category: p.category,
    summary: p.summary,
    body: `${p.title} ${p.summary} ${p.keywords}`,
    keywords: p.keywords,
  })),
  ...chapterDocuments(),
];

// --- ranking -------------------------------------------------------------- //

export interface ScoredResult extends SearchDocument {
  score: number;
}

// Crisis-intent routing. People in distress search how they FEEL, not by
// keyword ("being blackmailed", "my kid saw porn", "leaked photos of me").
// When a query matches one of these intents, the action page that serves it
// gets a strong boost so it outranks incidental keyword hits. Regexes run
// against the lowercased query; keep them specific to avoid mis-routing. The
// boost is large enough to lead but below an exact title match (+50), so naming
// a page directly still wins.
const INTENT_BOOSTS: Array<{ re: RegExp; hrefs: string[]; boost: number }> = [
  {
    re: /blackmail|extort|sextort|threaten(ing|ed)?\s+to\s+(share|post|send|leak)|\b(pay (them|him|her|up)|should i pay)\b/,
    hrefs: ["/sextortion"],
    boost: 40,
  },
  {
    re: /revenge porn|leaked (nude|photo|image|pic)|shared my (nude|photo|image|pic)|deepfake|take ?down|remove .*(photo|image|picture|nude|pic)|stopncii/,
    hrefs: ["/remove-images"],
    boost: 40,
  },
  {
    re: /\bmy (kid|child|son|daughter|teen|teenager)\b|child saw|kid saw|caught my (kid|child|son|daughter)/,
    hrefs: ["/for-parents"],
    boost: 40,
  },
  {
    re: /addict|can'?t stop|compulsiv|quit (porn|watching)|recover/,
    hrefs: ["/get-help"],
    boost: 30,
  },
  {
    re: /attracted to (kids|children|minors)|worried about my (thoughts|urges|feelings)|prevent .*offend|before i (hurt|harm)/,
    hrefs: ["/prevention", "/for-offenders"],
    boost: 40,
  },
  {
    re: /report (csam|abuse|images|content)|found (csam|abuse)|where .*(do i |to )?report/,
    hrefs: ["/for-reporting"],
    boost: 30,
  },
];

/**
 * Dependency-free relevance scoring. Tokenizes the query and scores each
 * document by weighted field matches: title hits dominate, then keywords, then
 * body; an exact phrase match in the title is a strong boost. On top of that,
 * crisis-intent queries boost the action page that serves them (INTENT_BOOSTS)
 * so someone describing a situation in plain words still lands on the right
 * page. Good enough for a focused ~hundreds-of-docs corpus without a library.
 */
export function scoreDocuments(query: string, docs = searchDocuments): ScoredResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const tokens = Array.from(new Set(q.split(/\s+/).filter((t) => t.length >= 2)));
  if (tokens.length === 0) return [];

  // Resolve crisis intents once per query into a per-href boost map.
  const hrefBoost = new Map<string, number>();
  for (const { re, hrefs, boost } of INTENT_BOOSTS) {
    if (re.test(q)) {
      for (const href of hrefs) {
        hrefBoost.set(href, Math.max(hrefBoost.get(href) ?? 0, boost));
      }
    }
  }

  const results: ScoredResult[] = [];
  for (const doc of docs) {
    const title = doc.title.toLowerCase();
    const keywords = doc.keywords.toLowerCase();
    const body = doc.body.toLowerCase();

    let score = 0;
    // Exact phrase boosts.
    if (title.includes(q)) score += 50;
    else if (body.includes(q)) score += 12;

    for (const t of tokens) {
      if (title.includes(t)) score += 10;
      if (keywords.includes(t)) score += 5;
      if (body.includes(t)) score += 2;
    }

    const intent = hrefBoost.get(doc.href) ?? 0;
    score += intent;

    // Include the doc if a token matched anywhere, OR a crisis intent routed
    // here directly (so the action page surfaces even with no lexical overlap).
    const anyHit = tokens.some(
      (t) => title.includes(t) || keywords.includes(t) || body.includes(t),
    );
    if ((anyHit || intent > 0) && score > 0) results.push({ ...doc, score });
  }

  return results.sort((a, b) => b.score - a.score || a.title.localeCompare(b.title));
}
