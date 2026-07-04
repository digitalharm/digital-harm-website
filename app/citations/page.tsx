import type { Metadata } from "next";
import Link from "next/link";
import { getCitations } from "@/lib/citations";
import { PageSchema } from "@/components/page-schema";

export const metadata: Metadata = {
  title: "Citations",
  description:
    "All citations from The Digital Harm Project, with links to original research, government data, and clinical reports.",
};

function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function CitationsPage() {
  const citations = getCitations();

  return (
    <article className="bg-background">
      <PageSchema path="/citations" />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            References
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Citations
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            Every claim in this research is cited. The full list below includes peer-reviewed
            research, government statistics, clinical reports, and journalism. Entries are
            de-duplicated and sorted alphabetically by publisher.
          </p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-3 order-2 md:order-1">
            <div className="md:sticky md:top-24 border-l border-rule pl-5">
              <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
                Reading the citations
              </p>
              <p className="text-sm text-muted leading-relaxed mb-5">
                Each entry shows the publisher or journal, the displayed link text used in the
                report, and which chapters cite it.
              </p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3 mt-8">
                Total
              </p>
              <p className="font-serif text-3xl text-foreground">{citations.length}</p>
              <p className="text-xs text-subtle mt-1">unique citations</p>
            </div>
          </aside>

          <div className="md:col-span-9 order-1 md:order-2 min-w-0">
            <ol className="border-t border-rule">
              {citations.map((src, i) => (
                <li
                  key={src.url}
                  className="border-b border-rule py-5 grid md:grid-cols-12 gap-3 md:gap-6"
                >
                  <div className="md:col-span-1">
                    <span className="font-mono text-xs text-subtle tabular-nums">
                      {String(i + 1).padStart(3, "0")}
                    </span>
                  </div>
                  <div className="md:col-span-8">
                    <p className="font-medium text-foreground text-[0.9375rem] leading-snug">
                      {src.label}
                    </p>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-accent break-all hover:underline underline-offset-2 mt-1.5 inline-block"
                    >
                      {hostname(src.url)}
                      <span className="text-subtle">
                        {(() => {
                          try {
                            const pathname = new URL(src.url).pathname;
                            return pathname.length > 40
                              ? pathname.slice(0, 40) + "…"
                              : pathname;
                          } catch {
                            return "";
                          }
                        })()}
                      </span>
                    </a>
                  </div>
                  <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end items-start md:pt-0.5">
                    {src.chapters.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/report/${c.slug}`}
                        className="text-[10px] uppercase tracking-wider font-medium text-muted bg-paper border border-rule px-1.5 py-0.5 rounded hover:border-accent hover:text-accent transition-colors"
                        title={c.title}
                      >
                        Ch. {c.number}
                      </Link>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </article>
  );
}
