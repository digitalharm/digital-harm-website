/**
 * Canonical-URL helpers. One place to turn a route path into the absolute,
 * canonical production URL so pages don't hand-roll (and drift on) their
 * canonical/OG/sitemap URLs.
 */

import type { Metadata } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

export { absoluteUrl };

/**
 * Build a page's metadata with a correct canonical URL + Open Graph/Twitter
 * cards derived from a single source of truth. Pages call this instead of
 * hand-writing `alternates.canonical` and duplicating title/description.
 */
export function pageMetadata(input: {
  title: string;
  description: string;
  /** Route path, e.g. "/laws". */
  path: string;
  /** Optional override for the OG/social type. */
  type?: "website" | "article";
}): Metadata {
  const url = absoluteUrl(input.path);
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      siteName: SITE.name,
      type: input.type ?? "article",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  };
}
