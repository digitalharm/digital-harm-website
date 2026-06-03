/**
 * Snapshot per-file git last-modified dates into a committed JSON file, so the
 * sitemap can report honest per-route dates EVEN on hosts that build from a
 * shallow git clone (Vercel does — without full history, a live `git log` falls
 * back to a single date and the sitemap loses its per-route signal).
 *
 * Run this locally (full history) before committing/deploying:
 *   node scripts/snapshot-route-dates.mjs
 * It writes lib/route-dates.generated.json. Commit that file. The sitemap reads
 * it at build time; the live git call remains only as a fallback.
 *
 * Safety: execFileSync with an argument array (no shell).
 */
import { execFileSync } from "node:child_process";
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;

/** Collect every page.tsx route file + the report content module. */
function routeFiles() {
  const files = new Set(["content/locales/en/report.ts"]);
  const walk = (dir) => {
    for (const e of readdirSync(join(ROOT, dir), { withFileTypes: true })) {
      const rel = `${dir}/${e.name}`;
      if (e.isDirectory()) walk(rel);
      else if (e.name === "page.tsx") files.add(rel.replace(/^\.\//, ""));
    }
  };
  walk("app");
  return [...files];
}

function gitDate(file) {
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || null;
  } catch {
    return null;
  }
}

const map = {};
let withDates = 0;
for (const f of routeFiles()) {
  const d = gitDate(f);
  if (d) {
    map[f] = d;
    withDates++;
  }
}

const outPath = join(ROOT, "lib/route-dates.generated.json");
writeFileSync(outPath, JSON.stringify(map, null, 2) + "\n");
console.log(
  `✓ snapshotted ${withDates}/${Object.keys(map).length || withDates} route dates → lib/route-dates.generated.json` +
    (existsSync(outPath) ? "" : " (write failed?)"),
);
