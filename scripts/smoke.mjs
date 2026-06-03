/**
 * Post-deploy smoke test (plain JS, zero deps). Fetches the LIVE site with a
 * browser User-Agent (production is behind a Vercel bot challenge that 403s a
 * bare agent) and asserts the few things that must never be broken:
 *
 *  - the home page returns 200 and carries JSON-LD structured data;
 *  - the crisis entry point /help-now returns 200 and shows a crisis number;
 *  - the sitemap returns 200.
 *
 * Asserts CONTENT, never a bare 200. Run after a production deploy:
 *   node scripts/smoke.mjs            (defaults to https://digitalharm.org)
 *   node scripts/smoke.mjs https://preview-url.vercel.app
 *
 * Exit 0 = all good, 1 = a smoke check failed.
 */

const BASE = (process.argv[2] || "https://digitalharm.org").replace(/\/$/, "");
const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36";

const checks = [
  {
    path: "/",
    must: [{ label: "JSON-LD present", test: (h) => h.includes("application/ld+json") }],
  },
  {
    path: "/help-now",
    must: [{ label: "crisis number 988", test: (h) => h.includes("988") }],
  },
  {
    path: "/sitemap.xml",
    must: [{ label: "urlset", test: (h) => h.includes("<urlset") || h.includes("<url>") }],
  },
];

const failures = [];

for (const c of checks) {
  const url = `${BASE}${c.path}`;
  try {
    const r = await fetch(url, { headers: { "User-Agent": UA } });
    if (r.status !== 200) {
      failures.push(`${c.path} → HTTP ${r.status} (expected 200)`);
      continue;
    }
    const html = await r.text();
    for (const m of c.must) {
      if (!m.test(html)) failures.push(`${c.path} → missing: ${m.label}`);
    }
    console.log(`  ${failures.length ? " " : "✓"} ${c.path} (${r.status})`);
  } catch (err) {
    failures.push(`${c.path} → fetch error: ${err.message}`);
  }
}

if (failures.length > 0) {
  console.error("\n✗ Smoke test FAILED:\n" + failures.map((f) => `    ${f}`).join("\n"));
  process.exit(1);
}
console.log(`\n✓ Smoke test passed against ${BASE}`);
