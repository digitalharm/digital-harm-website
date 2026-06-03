// Compatibility shim. Source of truth has moved to content/locales/en/report.ts
// as part of the in-progress i18n refactor. This shim restores the import paths
// the rest of the codebase still expects.
import { chapters } from "@/content/locales/en/report";

export { chapters };
export type { Block, Section, Chapter } from "@/content/types";

export function findChapter(slug: string) {
  return chapters.find((c) => c.slug === slug);
}

export function adjacentChapters(slug: string) {
  const i = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? chapters[i - 1] : null,
    next: i < chapters.length - 1 ? chapters[i + 1] : null,
  };
}
