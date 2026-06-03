/**
 * Search-registry guard (plain JS, zero deps, runs on any Node).
 *
 * Every static page route must appear in PAGE_REGISTRY (lib/search.ts) so it is
 * discoverable through site search and the /browse map. This fails the build if
 * any route is missing.
 *
 * It reads lib/search.ts as TEXT and regexes the registered hrefs — it does NOT
 * import the module, because lib/search.ts uses the `@/content` path alias which
 * bare Node cannot resolve. (An earlier .ts version that imported it threw
 * ERR_MODULE_NOT_FOUND and, via the prebuild hook, broke every build and two
 * production deploys — hence this dependency-free, flag-free rewrite.)
 *
 * Why this guard exists: on 2026-05-31 four reference pages shipped UNINDEXED
 * because a registry edit silently failed while the commit claimed otherwise.
 * A page that can't be found may as well not exist.
 *
 * Run: `npm run lint:search`   ·   Exit 0 = all indexed, 1 = an unindexed route.
 */
import { readFileSync, readdirSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const APP_DIR = join(ROOT, "app");
const SEARCH_FILE = join(ROOT, "lib", "search.ts");

/** Routes that intentionally are not search results. Keep tiny + justified. */
const EXEMPT = new Set([
  "/search", // the search page itself is not a search result
]);

/** Pull registered hrefs out of the PAGE_REGISTRY array by reading source text. */
function registeredHrefs() {
  const src = readFileSync(SEARCH_FILE, "utf8");
  const start = src.indexOf("PAGE_REGISTRY");
  if (start === -1) throw new Error("PAGE_REGISTRY not found in lib/search.ts");
  const open = src.indexOf("[", start);
  const close = src.indexOf("\n];", open);
  if (open === -1 || close === -1) {
    throw new Error("Could not locate PAGE_REGISTRY array bounds in lib/search.ts");
  }
  const block = src.slice(open, close);
  const hrefs = new Set();
  for (const m of block.matchAll(/href:\s*"(\/[^"]*)"/g)) hrefs.add(m[1]);
  if (hrefs.size === 0) throw new Error("No hrefs parsed from PAGE_REGISTRY");
  return hrefs;
}

/** Recursively collect the route href for every page.tsx under app/. */
function collectRoutes(dir, routes = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) collectRoutes(join(dir, entry.name), routes);
    else if (entry.name === "page.tsx") routes.push(hrefFor(dir));
  }
  return routes;
}

/** Turn an app/ directory path into its public route href. */
function hrefFor(dir) {
  const rel = relative(APP_DIR, dir).split(/[/\\]/).filter(Boolean);
  // Drop Next.js route groups like "(marketing)" — they don't affect the URL.
  const segments = rel.filter((s) => !(s.startsWith("(") && s.endsWith(")")));
  return segments.length === 0 ? "/" : "/" + segments.join("/");
}

const registered = registeredHrefs();
const routes = collectRoutes(APP_DIR);

const missing = routes
  .filter((h) => !h.includes("[")) // dynamic routes index via their own builders
  .filter((h) => !EXEMPT.has(h))
  .filter((h) => !registered.has(h))
  .sort();

if (missing.length > 0) {
  console.error(
    "✗ Search-registry check failed — these routes are not in PAGE_REGISTRY (lib/search.ts):\n" +
      missing.map((h) => `    ${h}`).join("\n") +
      "\n\n  Add a { href, title, category, summary, keywords } entry for each,\n" +
      "  or add the route to EXEMPT in scripts/check-search-registry.mjs with a reason.",
  );
  process.exit(1);
}

const checked = routes.filter((h) => !h.includes("[") && !EXEMPT.has(h)).length;
console.log(
  `✓ Search-registry check passed (${checked} routes indexed, ${EXEMPT.size} exempt).`,
);
