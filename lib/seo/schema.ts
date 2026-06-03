/**
 * Typed schema.org (JSON-LD) builders. Each returns a plain, JSON-serializable
 * object — render it with <JsonLd> (components/jsonld.tsx).
 *
 * Rules baked in:
 * - NO PII and NO user data ever goes into structured data.
 * - Owner-identity fields that are empty are OMITTED, never faked (see lib/site.ts).
 * - These are pure data builders: no React, no DOM, no network.
 */

import { SITE, absoluteUrl } from "@/lib/site";

type Json = Record<string, unknown>;

/** Organization — the publisher identity. Mount once, site-wide. */
export function organizationSchema(): Json {
  const org = SITE.organization;
  const node: Json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    url: org.url,
  };
  if (org.logo) node.logo = org.logo;
  if (org.sameAs.length > 0) node.sameAs = org.sameAs;
  if (org.contactPoint) {
    node.contactPoint = {
      "@type": "ContactPoint",
      contactType: org.contactPoint.contactType,
      url: org.contactPoint.url,
    };
  }
  return node;
}

/**
 * WebSite — enables the SERP sitelinks search box pointing at /search?q={query}.
 * Mount once, site-wide.
 */
export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/** Article / MedicalWebPage for a content page. */
export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
  medical?: boolean;
}): Json {
  const node: Json = {
    "@context": "https://schema.org",
    "@type": input.medical ? "MedicalWebPage" : "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntityOfPage: absoluteUrl(input.path),
    isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
    publisher: organizationSchema(),
  };
  if (input.datePublished) node.datePublished = input.datePublished;
  if (input.dateModified) node.dateModified = input.dateModified;
  return node;
}

/** FAQPage from a list of plain Q/A strings. */
export function faqPageSchema(items: { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.question,
      acceptedAnswer: { "@type": "Answer", text: it.answer },
    })),
  };
}

/** BreadcrumbList from ordered {name, path} crumbs. */
export function breadcrumbListSchema(crumbs: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}
