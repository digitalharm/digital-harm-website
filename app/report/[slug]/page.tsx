import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { adjacentChapters, chapters, findChapter } from "@/content/report";
import { BlockRenderer } from "@/components/blocks";
import { FeaturedProgram } from "@/components/featured-program";
import { JsonLd } from "@/components/jsonld";
import { articleSchema, breadcrumbListSchema } from "@/lib/seo/schema";
import { gitLastModified } from "@/lib/route-dates";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const chapter = findChapter(slug);
  if (!chapter) return {};
  return {
    title: chapter.title,
    description: chapter.dek,
  };
}

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = findChapter(slug);
  if (!chapter) notFound();

  const { prev, next } = adjacentChapters(slug);
  // Honest, git-derived freshness signal (all chapters derive from one module).
  const dateModified = gitLastModified("content/locales/en/report.ts").toISOString();

  return (
    <article className="bg-background">
      <JsonLd
        data={[
          articleSchema({
            title: chapter.title,
            description: chapter.dek,
            path: `/report/${slug}`,
            dateModified,
          }),
          breadcrumbListSchema([
            { name: "The Digital Harm Project", path: "/" },
            { name: `Chapter ${chapter.number}: ${chapter.title}`, path: `/report/${slug}` },
          ]),
        ]}
      />
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-12 pb-12 md:pt-16 md:pb-16">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.18em] mb-8">
            <Link href="/" className="text-subtle hover:text-foreground">
              ← All chapters
            </Link>
            <span className="text-subtle">/</span>
            <span className="font-mono text-accent">Chapter {chapter.number}</span>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <h1 className="font-serif font-semibold text-[2.25rem] sm:text-[2.75rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-5">
                {chapter.title}
              </h1>
              <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
                {chapter.dek}
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <p className="text-xs text-subtle uppercase tracking-wider">
                {chapter.readingMinutes} min read · {chapter.sections.length} sections
              </p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 grid md:grid-cols-12 gap-12 md:gap-16">
        <aside className="md:col-span-3 order-2 md:order-1 no-print">
          <nav className="md:sticky md:top-24 border-l border-rule pl-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
              In this chapter
            </p>
            <ol className="space-y-2.5">
              {chapter.sections.map((s, i) => (
                <li key={s.id} className="text-[0.875rem] leading-snug">
                  <a
                    href={`#${s.id}`}
                    className="text-muted hover:text-foreground transition-colors flex gap-2"
                  >
                    <span className="font-mono text-subtle text-xs tabular-nums pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{s.heading}</span>
                  </a>
                </li>
              ))}
            </ol>
            <div className="mt-10 -ml-5">
              <FeaturedProgram variant="sidebar" />
            </div>
          </nav>
        </aside>

        <div className="md:col-span-9 order-1 md:order-2 min-w-0">
          {chapter.sections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className={idx === 0 ? "" : "mt-16 pt-2 border-t border-rule-soft"}
            >
              <h2 className="font-serif text-[1.75rem] md:text-[2rem] font-semibold tracking-tight leading-tight mb-2">
                {section.heading}
              </h2>
              <div className="flex items-center gap-3 mb-7">
                <span className="font-mono text-[11px] text-subtle tabular-nums">
                  §{chapter.number}.{String(idx + 1).padStart(2, "0")}
                </span>
                <a
                  href={`#${section.id}`}
                  className="text-subtle hover:text-accent text-xs no-print"
                  aria-label="Permalink to this section"
                >
                  ¶
                </a>
                {section.verified && (
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-accent border border-accent/30 bg-accent-soft rounded px-1.5 py-0.5"
                    title="Named leadership in this section was verified against primary sources as of this date. This is the most perishable content on the site; see the refresh procedure in the project repository."
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-accent/70"
                      aria-hidden
                    />
                    Leadership verified {section.verified}
                  </span>
                )}
              </div>
              <div className="prose-research space-y-0">
                {section.blocks.map((block, i) => (
                  <BlockRenderer key={i} block={block} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <nav className="border-t border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-10 grid sm:grid-cols-2 gap-6">
          {prev ? (
            <Link
              href={`/report/${prev.slug}`}
              className="group block border border-rule rounded-md p-5 bg-background hover:border-accent transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-1.5">
                ← Previous · Ch. {prev.number}
              </p>
              <p className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                {prev.title}
              </p>
            </Link>
          ) : (
            <Link
              href="/"
              className="group block border border-rule rounded-md p-5 bg-background hover:border-accent transition-colors"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-1.5">
                ← Back to cover
              </p>
              <p className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                Executive summary &amp; contents
              </p>
            </Link>
          )}
          {next ? (
            <Link
              href={`/report/${next.slug}`}
              className="group block border border-rule rounded-md p-5 bg-background hover:border-accent transition-colors sm:text-right"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-1.5">
                Next · Ch. {next.number} →
              </p>
              <p className="font-serif text-lg font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">
                {next.title}
              </p>
            </Link>
          ) : (
            <Link
              href="/get-help"
              className="group block border border-rule rounded-md p-5 bg-background hover:border-crisis transition-colors sm:text-right"
            >
              <p className="text-[10px] uppercase tracking-[0.18em] text-crisis font-medium mb-1.5">
                Get Help →
              </p>
              <p className="font-serif text-lg font-semibold text-foreground group-hover:text-crisis transition-colors leading-tight">
                Confidential helplines and recovery resources
              </p>
            </Link>
          )}
        </div>
      </nav>
    </article>
  );
}
