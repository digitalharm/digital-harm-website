import { PAGE_REGISTRY } from "@/lib/search";
import { chapters } from "@/content/locales/en/report";
import { SITE, absoluteUrl } from "@/lib/site";

// Curated machine-readable index for answer engines / coding agents (llmstxt.org).
// Built from the SAME sources as the sitemap + search index (PAGE_REGISTRY +
// report chapters), so new pages appear here automatically.
export const dynamic = "force-static";

function line(title: string, href: string, summary?: string): string {
  const url = absoluteUrl(href);
  return summary ? `- [${title}](${url}): ${summary}` : `- [${title}](${url})`;
}

export function GET(): Response {
  const inCat = (cat: string) =>
    PAGE_REGISTRY.filter((p) => p.category === cat && p.href !== "/");

  const out: string[] = [
    `# ${SITE.name}`,
    "",
    `> ${SITE.description}`,
    "",
    "A curated index for answer engines and coding agents. The research is a synthesis of peer-reviewed studies, government data, and clinical evidence, with every claim sourced. Help resources are crisis-first and never monetized.",
    "",
    "## Research report",
    ...chapters.map((c) => line(`${c.number}. ${c.title}`, `/report/${c.slug}`, c.dek)),
  ];

  const groups: Array<[string, string]> = [
    ["Guide", "## Guides (by audience)"],
    ["Resources", "## Reporting & resources"],
    ["Tools", "## Tools (open source)"],
    ["About", "## About & methodology"],
  ];
  for (const [cat, heading] of groups) {
    const items = inCat(cat);
    if (!items.length) continue;
    out.push("", heading, ...items.map((p) => line(p.title, p.href, p.summary)));
  }

  out.push(
    "",
    "## Related",
    line("Home / executive summary", "/", "Overview of the whole project."),
    "- [FightCSAM — open-source CSAM-safety toolkit](https://fightcsam.org): the developer tools (detect / report / prevent) maintained by The Digital Harm Project.",
    "",
  );

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
