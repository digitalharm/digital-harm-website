import type { Metadata } from "next";
import Link from "next/link";
import { SearchBox } from "@/components/search-box";
import { scoreDocuments, searchDocuments, type SearchCategory } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search the full Digital Harm Project — research chapters, audience guides, recovery resources, and the open-source tools.",
};

const CATEGORY_ORDER: SearchCategory[] = [
  "Report chapter",
  "Guide",
  "Resources",
  "Tools",
  "About",
];

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const query = q.trim();
  const results = query ? scoreDocuments(query) : [];

  // Group results by category for a scannable layout.
  const grouped = new Map<SearchCategory, typeof results>();
  for (const r of results) {
    const list = grouped.get(r.category) ?? [];
    list.push(r);
    grouped.set(r.category, list);
  }

  return (
    <article className="bg-background min-h-[60vh]">
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-8 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            Search
          </p>
          <h1 className="font-serif font-semibold text-[2rem] md:text-[2.5rem] leading-[1.05] tracking-[-0.02em] mb-6">
            Find anything across the research, guides, and resources.
          </h1>
          <SearchBox initialQuery={query} autoFocus />
          {query && (
            <p className="text-[13px] text-subtle mt-3">
              {results.length} result{results.length === 1 ? "" : "s"} for{" "}
              <span className="text-foreground">“{query}”</span>
            </p>
          )}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 py-10">
        {!query && <BrowsePrompt />}

        {query && results.length === 0 && (
          <div className="text-muted text-[15px]">
            <p className="mb-3">No results for “{query}”.</p>
            <p className="text-subtle text-sm">
              Try a broader term, an acronym (e.g. “CSAM”, “NCMEC”, “CSBD”), or
              browse by role on the{" "}
              <Link href="/guides" className="text-accent underline underline-offset-2">
                guides
              </Link>{" "}
              page.
            </p>
          </div>
        )}

        {query &&
          results.length > 0 &&
          CATEGORY_ORDER.filter((c) => grouped.has(c)).map((category) => (
            <section key={category} className="mb-9">
              <h2 className="text-[11px] uppercase tracking-[0.18em] text-subtle font-semibold mb-3">
                {category}
              </h2>
              <ul className="space-y-4">
                {grouped.get(category)!.map((r) => (
                  <li key={r.id}>
                    <Link href={r.href} className="group block">
                      <span className="font-serif text-[1.0625rem] font-semibold text-foreground group-hover:text-accent transition-colors">
                        {r.title}
                      </span>
                      <span className="block text-[13.5px] text-muted leading-snug mt-0.5">
                        {r.summary}
                      </span>
                      <span className="block font-mono text-[11px] text-subtle mt-1">
                        {r.href}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
      </div>
    </article>
  );
}

function BrowsePrompt() {
  // With no query, show the searchable surface area so the page is never empty
  // and doubles as a navigation aid.
  const total = searchDocuments.length;
  const pages = searchDocuments.filter((d) => d.category !== "Report chapter");
  return (
    <div>
      <p className="text-muted text-[15px] mb-6">
        Search across <span className="text-foreground">{total}</span> indexed
        sections and pages — the full research report, every audience guide,
        recovery and crisis resources, and the open-source tools. Or jump
        straight to a section:
      </p>
      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
        {pages.map((p) => (
          <li key={p.id}>
            <Link
              href={p.href}
              className="text-[14px] text-foreground hover:text-accent underline-offset-2 hover:underline"
            >
              {p.title}
            </Link>
            <span className="text-subtle text-[12px]"> · {p.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
