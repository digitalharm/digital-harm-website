/**
 * Single source of truth for site-level constants used by SEO, JSON-LD, and
 * canonical URLs. Keep this free of secrets and of anything PII-bearing.
 *
 * Owner-supplied identity fields (logo, sameAs, contactPoint, funding) are
 * intentionally left as TODO placeholders — the JSON-LD builders OMIT any field
 * that is empty rather than emit a fabricated value. Fill these in when the
 * owner provides them; nothing here may be invented.
 */

export const SITE = {
  name: "The Digital Harm Project",
  /** Short name for breadcrumbs / compact UI. */
  shortName: "Digital Harm Project",
  url: "https://digitalharm.org",
  description:
    "A research review of pornography exposure, addiction, child sexual abuse material, AI-generated content, and the technologies and treatments that protect against them.",
  /** Publisher / organization identity. */
  organization: {
    name: "The Digital Harm Project",
    url: "https://digitalharm.org",
    // TODO(owner): provide a hosted logo URL (square, ≥112×112). Omitted from
    // JSON-LD until supplied.
    logo: "" as string,
    // TODO(owner): authoritative profile links (Wikipedia, official socials).
    sameAs: [] as string[],
    // TODO(owner): a non-crisis contact point if desired. The CRISIS lines are
    // never an "org contact" — they live in the content, not in Org schema.
    contactPoint: null as null | { contactType: string; url: string },
  },
} as const;

/** Resolve a path to an absolute canonical URL on the production origin. */
export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  // Drop a trailing slash except for the root.
  const normalized = clean !== "/" && clean.endsWith("/") ? clean.slice(0, -1) : clean;
  return `${SITE.url}${normalized === "/" ? "" : normalized}`;
}
