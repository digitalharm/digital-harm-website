import { JsonLd } from "@/components/jsonld";
import { articleSchema, breadcrumbListSchema } from "@/lib/seo/schema";
import { PAGE_REGISTRY } from "@/lib/search";
import { gitLastModified } from "@/lib/route-dates";
import { SITE } from "@/lib/site";

/**
 * Per-page Article + Breadcrumb JSON-LD for a static content route.
 *
 * Title/description come from PAGE_REGISTRY (the single source of truth the
 * sitemap + search already use); dateModified is git-derived (honest, not build
 * time). No author/reviewer identity is emitted — publisher is the Organization
 * only (see lib/review-board.ts: bylines stay dark until real reviewers sign).
 * Renders nothing for a path not in the registry.
 */
export function PageSchema({ path }: { path: string }) {
  const entry = PAGE_REGISTRY.find((p) => p.href === path);
  if (!entry) return null;
  const dateModified = gitLastModified(`app${path}/page.tsx`).toISOString();
  return (
    <JsonLd
      data={[
        articleSchema({
          title: entry.title,
          description: entry.summary,
          path,
          dateModified,
        }),
        breadcrumbListSchema([
          { name: SITE.shortName, path: "/" },
          { name: entry.title, path },
        ]),
      ]}
    />
  );
}
