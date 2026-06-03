/**
 * Build-time "last modified" dates derived from git history, so the sitemap
 * reports when a page's source ACTUALLY last changed — not the build time.
 *
 * Why this matters: stamping every route with `new Date()` tells crawlers the
 * whole site changed on every deploy, which trains them to distrust the signal.
 * A git-derived date is honest and improves crawl efficiency.
 *
 * Robustness: this runs at build time (Node). If git is unavailable (e.g. a
 * shallow clone that doesn't contain the commit that touched a file, or a
 * sandbox without git), we fall back to a fixed conservative date — NEVER to
 * `new Date()`, so the sitemap can't silently start lying again.
 *
 * Safety: we use execFileSync with an argument array (no shell), so a file
 * path is passed as a literal argument and can never be interpreted as a
 * shell command, regardless of its characters.
 */

import { execFileSync } from "node:child_process";
import snapshot from "./route-dates.generated.json";

/** Conservative fallback when git can't answer. A real, stable past date. */
const FALLBACK = new Date("2026-05-31T00:00:00Z");

const SNAPSHOT: Record<string, string> = snapshot;

const cache = new Map<string, Date>();

/**
 * Last git commit date (committer ISO) for a repo-relative file.
 *
 * Resolution order: the committed snapshot (lib/route-dates.generated.json,
 * produced by scripts/snapshot-route-dates.mjs with full local history) →
 * live `git log` (works only where full history is present) → stable FALLBACK.
 * The snapshot is what makes per-route dates honest on shallow-clone hosts
 * like Vercel.
 */
export function gitLastModified(file: string): Date {
  const cached = cache.get(file);
  if (cached) return cached;

  // 1) Committed snapshot — present and correct on every host.
  const snap = SNAPSHOT[file];
  if (snap) {
    const d = new Date(snap);
    if (!Number.isNaN(d.getTime())) {
      cache.set(file, d);
      return d;
    }
  }

  // 2) Live git (full-history hosts only), then 3) stable fallback.
  let result = FALLBACK;
  try {
    // No shell: args are passed literally. `--` ends option parsing so a path
    // can never be mistaken for a flag.
    const out = execFileSync(
      "git",
      ["log", "-1", "--format=%cI", "--", file],
      { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    if (out) {
      const d = new Date(out);
      if (!Number.isNaN(d.getTime())) result = d;
    }
  } catch {
    // git unavailable — keep the stable fallback.
  }

  cache.set(file, result);
  return result;
}
