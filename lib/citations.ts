import { chapters, type Block, type Chapter, type Section } from "@/content/report";

export type CitationEntry = {
  url: string;
  label: string;
  chapters: { number: string; title: string; slug: string }[];
};

function collectAnchorsFromHtml(html: string): { url: string; label: string }[] {
  const matches = Array.from(
    html.matchAll(/<a [^>]*href=['"]([^'"]+)['"][^>]*>(.*?)<\/a>/gs),
  );
  return matches
    .filter(([, url]) => !url.startsWith("/") && !url.startsWith("#"))
    .map(([, url, inner]) => ({
      url,
      label: inner.replace(/<[^>]+>/g, "").trim(),
    }));
}

function extractFromBlock(block: Block): { url: string; label: string }[] {
  if (block.type === "p" || block.type === "callout") return collectAnchorsFromHtml(block.html);
  if (block.type === "list")
    return block.items.flatMap((html) => collectAnchorsFromHtml(html));
  return [];
}

export function getCitations(): CitationEntry[] {
  const byUrl = new Map<string, CitationEntry>();

  for (const chapter of chapters as Chapter[]) {
    for (const section of chapter.sections as Section[]) {
      for (const block of section.blocks) {
        for (const { url, label } of extractFromBlock(block)) {
          const existing = byUrl.get(url);
          const chapterRef = {
            number: chapter.number,
            title: chapter.title,
            slug: chapter.slug,
          };
          if (existing) {
            if (!existing.chapters.some((c) => c.slug === chapter.slug)) {
              existing.chapters.push(chapterRef);
            }
          } else {
            byUrl.set(url, {
              url,
              label: label || url,
              chapters: [chapterRef],
            });
          }
        }
      }
    }
  }

  return Array.from(byUrl.values()).sort((a, b) =>
    a.label.localeCompare(b.label, "en", { sensitivity: "base" }),
  );
}
