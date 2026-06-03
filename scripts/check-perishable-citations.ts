/**
 * Staleness control for the most perishable content on the site.
 *
 * Any Section carrying a `verified` stamp (currently the platform-safety-orgs
 * org chart in Ch 06) is asserting that its named individuals are current and
 * sourced. This check enforces the "sourced" half: every named person in a
 * verified section must appear in at least one p/callout/list block that also
 * carries an external citation. A name added — or left behind after an exec
 * departs — without a primary source fails the build.
 *
 * Run: pnpm lint:perishable   (or: npx tsx scripts/check-perishable-citations.ts)
 *
 * Note: only p/callout/list blocks are citation-bearing (see lib/citations.ts);
 * h3 and table blocks are intentionally ignored here for the same reason.
 */
// Import the data directly (not via the @/content/report shim, which Node's
// path resolver can't follow). The data file's only import is `import type`,
// which Node's type stripping removes, so this loads as pure data with no
// build step, no tsx, and no extra dependencies.
import { chapters } from "../content/locales/en/report.ts";
import type { Block } from "../content/types.ts";

// Tokens that mark a <strong> span as a title, org, committee, or law — not a
// person. Compared against each word of a 2-3 word candidate after stripping
// punctuation. Extend this list rather than loosening the person heuristic.
const NON_PERSON_TOKENS = new Set([
  "Head", "Chief", "Officer", "Committee", "Safety", "Trust", "Global",
  "Product", "Board", "Report", "Reports", "Organization", "Team", "Operations",
  "Standards", "Affairs", "Security", "President", "Vice", "Center", "Centre",
  "Act", "Policy", "Council", "Group", "Court", "Hash", "Senate", "Judiciary",
  "National", "Community", "Integrity", "Oversight", "Core", "Network",
  "Commissioner", "Foundation", "Experience", "Solutions", "Brand",
  "Information", "Legal", "Privacy", "Risk", "Strategy", "Audit",
  "Subcommittee", "Joint", "Venture", "Corp", "Inc", "Coalition", "Program",
]);

function citationBearingHtml(block: Block): string | null {
  if (block.type === "p" || block.type === "callout") return block.html;
  if (block.type === "list") return block.items.join(" ");
  return null;
}

function personNames(html: string): string[] {
  const names = new Set<string>();
  for (const match of html.matchAll(/<strong>([^<]+)<\/strong>/g)) {
    const text = match[1].replace(/&[a-z]+;/g, " ").trim();
    const words = text.split(/\s+/);
    if (words.length < 2 || words.length > 3) continue;
    // Every word must look like a capitalized name token (allow ., ', -).
    if (!words.every((w) => /^[A-Z][A-Za-z.'-]*$/.test(w))) continue;
    // Exclude any span containing a title/org token.
    if (words.some((w) => NON_PERSON_TOKENS.has(w.replace(/[.'-]/g, "")))) continue;
    names.add(text);
  }
  return [...names];
}

function hasExternalCitation(html: string): boolean {
  return /<a\s[^>]*href=['"]https?:\/\//.test(html);
}

const violations: string[] = [];
let verifiedSections = 0;
let namesChecked = 0;

for (const chapter of chapters) {
  for (const section of chapter.sections) {
    if (!section.verified) continue;
    verifiedSections++;

    // For each person, record whether ANY block that names them is cited.
    const personIsCited = new Map<string, boolean>();
    for (const block of section.blocks) {
      const html = citationBearingHtml(block);
      if (!html) continue;
      const cited = hasExternalCitation(html);
      for (const name of personNames(html)) {
        personIsCited.set(name, (personIsCited.get(name) ?? false) || cited);
      }
    }

    for (const [name, cited] of personIsCited) {
      namesChecked++;
      if (!cited) {
        violations.push(
          `  ${chapter.slug} § ${section.id}: "${name}" is named but no block mentioning them carries a citation`,
        );
      }
    }
  }
}

if (verifiedSections === 0) {
  console.error(
    "check-perishable-citations: found no `verified`-stamped sections. " +
      "If the stamp was intentionally removed, delete this check; otherwise restore it.",
  );
  process.exit(1);
}

if (violations.length > 0) {
  console.error(
    `\n✗ Perishable-citation check FAILED — ${violations.length} uncited named individual(s):\n`,
  );
  console.error(violations.join("\n"));
  console.error(
    "\nEvery named person in a `verified` section must be sourced. Add a " +
      "primary-source <a href> in a p/callout/list block that names them, or " +
      "remove the name. (Table cells do not count — they are not extracted " +
      "as citations.)\n",
  );
  process.exit(1);
}

console.log(
  `✓ Perishable-citation check passed: ${namesChecked} named individuals across ` +
    `${verifiedSections} verified section(s), all sourced.`,
);
