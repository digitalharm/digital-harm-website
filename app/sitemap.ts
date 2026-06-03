import type { MetadataRoute } from "next";
import { chapters } from "@/content/report";
import { PAGE_REGISTRY } from "@/lib/search";
import { gitLastModified } from "@/lib/route-dates";

const BASE = "https://digitalharm.org";

/**
 * Map a route href to the source file whose git history best represents "when
 * this page last changed". Most routes map to their own page.tsx; a few derive
 * their content from a data module, so we point at that instead.
 */
function sourceFileFor(href: string): string {
  if (href === "/") return "app/page.tsx";
  return `app${href}/page.tsx`;
}

/**
 * Sitemap generated from the same single source of truth the search index uses
 * (PAGE_REGISTRY) plus the research chapters, so new pages appear in search AND
 * the sitemap automatically.
 *
 * `lastModified` is GIT-DERIVED per route (lib/route-dates.ts), not the build
 * time — so crawlers see honest per-page change dates instead of "everything
 * changed on every deploy". The research chapters all derive from one content
 * module, so they share that module's last-modified date.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const reportModified = gitLastModified("content/locales/en/report.ts");

  const staticPages = PAGE_REGISTRY.map((p) => ({
    url: `${BASE}${p.href === "/" ? "" : p.href}`,
    lastModified: gitLastModified(sourceFileFor(p.href)),
    changeFrequency: "monthly" as const,
    priority: p.href === "/" ? 1 : 0.7,
  }));

  const browseAndSearch = [
    { url: `${BASE}/browse`, lastModified: gitLastModified("app/browse/page.tsx"), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/search`, lastModified: gitLastModified("app/search/page.tsx"), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const chapterPages = chapters.map((c) => ({
    url: `${BASE}/report/${c.slug}`,
    lastModified: reportModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...browseAndSearch, ...chapterPages];
}
