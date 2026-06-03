/**
 * Content-invariant guard (plain JS, zero deps, runs on any Node).
 *
 * Locks in the non-negotiable editorial + safety + privacy invariants of the
 * site so they cannot silently regress. Scans repo source (deterministic in CI;
 * no network). Fails the build (exit 1) if any invariant is violated.
 *
 * Invariants enforced:
 *  1. ICD-11 position PRESENT — the science chapter + editorial standards must
 *     keep the WHO ICD-11 CSBD (6C72, impulse-control) framing.
 *  2. Skeptics framing ABSENT — owner policy: do not name/relitigate the
 *     porn-science skeptics anywhere in app/ or content/.
 *  3. No on-site trackers — no analytics/advertising script hosts in source.
 *  4. Review bylines stay DARK — while REVIEW_BYLINES_ENABLED is false, no
 *     "Reviewed by" / "review in progress" byline string may render.
 *  5. Crisis numbers intact — the known-good hotline numbers must still appear
 *     on their crisis pages (a typo here can cost a life).
 *
 * Run: `node scripts/check-content-invariants.mjs`
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const failures = [];

/** Recursively read every source file under a dir, as one big lowercased blob + a per-file map. */
function collect(dir, exts = [".tsx", ".ts"]) {
  const out = [];
  const walk = (d) => {
    for (const e of readdirSync(d, { withFileTypes: true })) {
      const p = join(d, e.name);
      if (e.isDirectory()) {
        if (e.name === "node_modules" || e.name === ".next") continue;
        walk(p);
      } else if (exts.some((x) => e.name.endsWith(x))) {
        out.push({ path: p.replace(ROOT + "/", ""), text: readFileSync(p, "utf8") });
      }
    }
  };
  walk(join(ROOT, dir));
  return out;
}

const appFiles = collect("app");
const contentFiles = existsSync(join(ROOT, "content")) ? collect("content") : [];
const allText = [...appFiles, ...contentFiles].map((f) => f.text).join("\n");
const allLower = allText.toLowerCase();

// --- Invariant 1: ICD-11 position present ------------------------------------
if (!allText.includes("6C72") && !allLower.includes("compulsive sexual behaviour disorder")) {
  failures.push("ICD-11 position missing: expected '6C72' / 'Compulsive Sexual Behaviour Disorder' in content.");
}

// --- Invariant 2: skeptics framing absent ------------------------------------
// Owner policy: the page must not name/relitigate the skeptics. We flag the
// word "skeptic" anywhere in shipped content. (Citations to named researchers
// like Grubbs are fine; the banned move is framing a skeptic camp.)
for (const f of [...appFiles, ...contentFiles]) {
  if (/skeptic/i.test(f.text)) {
    failures.push(`Skeptics framing present in ${f.path} (owner policy: excluded).`);
  }
}

// --- Invariant 3: no on-site trackers ----------------------------------------
const TRACKER_HOSTS = [
  "google-analytics.com",
  "googletagmanager.com",
  "plausible.io",
  "umami",
  "mixpanel",
  "segment.com",
  "hotjar",
  "fullstory",
  "facebook.net/en_us/fbevents",
];
for (const host of TRACKER_HOSTS) {
  if (allLower.includes(host)) {
    failures.push(`Tracker reference '${host}' found in source (site policy: no on-site analytics).`);
  }
}

// --- Invariant 4: review bylines stay dark -----------------------------------
const rb = existsSync(join(ROOT, "lib/review-board.ts"))
  ? readFileSync(join(ROOT, "lib/review-board.ts"), "utf8")
  : "";
const bylinesEnabled = /REVIEW_BYLINES_ENABLED\s*=\s*true/.test(rb);
if (!bylinesEnabled) {
  // While disabled, no page may render a reviewer byline.
  for (const f of appFiles) {
    if (/reviewed by|review in progress|independently reviewed/i.test(f.text)) {
      failures.push(`Reviewer byline string in ${f.path} while REVIEW_BYLINES_ENABLED is false.`);
    }
  }
}

// --- Invariant 5: crisis numbers intact --------------------------------------
// Each entry: a known-good number that must still appear on a given route file.
const CRISIS = [
  { file: "app/help-now/page.tsx", needles: ["988"] },
  { file: "app/sextortion/page.tsx", needles: ["1-800-843-5678", "988"] },
  { file: "app/remove-images/page.tsx", needles: ["1-844-878-2274", "988"] },
];
for (const c of CRISIS) {
  const p = join(ROOT, c.file);
  if (!existsSync(p)) {
    failures.push(`Crisis page missing: ${c.file}`);
    continue;
  }
  const t = readFileSync(p, "utf8");
  for (const n of c.needles) {
    if (!t.includes(n)) {
      failures.push(`Crisis number '${n}' missing from ${c.file}.`);
    }
  }
}

// --- Report ------------------------------------------------------------------
if (failures.length > 0) {
  console.error(
    "✗ Content-invariant check FAILED:\n" + failures.map((f) => `    ${f}`).join("\n"),
  );
  process.exit(1);
}
console.log(
  `✓ Content-invariant check passed (ICD-11 present, skeptics absent, no trackers, bylines dark, crisis numbers intact).`,
);
