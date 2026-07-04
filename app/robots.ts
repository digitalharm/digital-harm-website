import type { MetadataRoute } from "next";

/**
 * Allow full crawling and point crawlers at the sitemap. This is a public
 * educational resource; broad discoverability is the goal.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Explicitly allow AI answer/citation + training crawlers — this is a
      // public educational resource; we want answer engines to cite it.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Applebot-Extended",
          "CCBot",
          "Bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://digitalharm.org/sitemap.xml",
    host: "https://digitalharm.org",
  };
}
