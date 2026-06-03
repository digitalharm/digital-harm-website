import type { MetadataRoute } from "next";

/**
 * Allow full crawling and point crawlers at the sitemap. This is a public
 * educational resource; broad discoverability is the goal.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://digitalharm.org/sitemap.xml",
    host: "https://digitalharm.org",
  };
}
