/**
 * "Cite this report" — produce a static, copy-pasteable citation string for a
 * page from its own metadata. Pure formatting; no tracking, no network, no
 * accessed-date hardcoding (callers pass the date or omit it).
 *
 * This is the lightweight v2.1 seam; the full multi-format (APA/MLA/Chicago/
 * BibTeX) cite-us kit is a v3.0 deliverable that can build on these helpers.
 */

import { SITE, absoluteUrl } from "@/lib/site";

export type CitationInput = {
  /** The page/work title (without the site suffix). */
  title: string;
  /** Path or absolute URL of the page. */
  path: string;
  /** Publication or last-updated year, e.g. "2026". Omit if unknown. */
  year?: string;
};

/**
 * A single plain-text citation line, e.g.:
 * The Digital Harm Project. "Sextortion: A Survival Guide." 2026.
 *   https://digitalharm.org/sextortion
 */
export function citationString(input: CitationInput): string {
  const url = absoluteUrl(input.path);
  const year = input.year ? ` ${input.year}.` : "";
  return `${SITE.name}. “${input.title}.”${year} ${url}`;
}
