import type { Metadata } from "next";
import Link from "next/link";
import {
  allCategories,
  clearinghouses,
  espDutyLabel,
  reportingCategories,
  reportingVerified,
  totalPlatformCount,
  type EspDuty,
  type ReportingCategory,
} from "@/content/locales/en/reporting";

export const metadata: Metadata = {
  title: "For Reporting Content",
  description:
    "A guide and verified directory of where to report child sexual abuse material and abusive content on every major platform — social networks, messaging apps, AI image generators, cloud storage, infrastructure, and more — plus each platform's illegal-content policy. Report to a clearinghouse like NCMEC's CyberTipline when you don't know or don't trust the platform.",
};

const espStyles: Record<EspDuty, string> = {
  "yes-us-esp": "text-accent bg-accent-soft border-accent/30",
  "non-us": "text-muted bg-paper border-rule",
  unclear: "text-warning bg-warning-soft border-warning/30",
  "not-applicable": "text-subtle bg-paper border-rule",
};

function CategorySection({ category }: { category: ReportingCategory }) {
  const single = category.platforms.length === 1;
  return (
    <section id={category.id} className="scroll-mt-20">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10">
        <div className="md:col-span-4">
          <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold border-l-2 bg-accent-soft border-accent text-accent mb-4">
            {category.label}
          </span>
          <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
            {category.heading}
          </h2>
        </div>
        <div className="md:col-span-8">
          <p className="font-serif text-[1.0625rem] leading-[1.7] text-foreground">
            {category.blurb}
          </p>
        </div>
      </div>

      <ul
        className={
          single
            ? "border border-rule bg-paper"
            : "grid sm:grid-cols-2 gap-px bg-rule border border-rule"
        }
      >
        {category.platforms.map((p) => (
          <li key={p.name} className="bg-background p-6 md:p-7 flex flex-col">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-serif text-lg font-semibold leading-tight">
                {p.name}
              </h3>
              <span
                className={`text-[9px] uppercase tracking-wider font-semibold border px-1.5 py-0.5 rounded shrink-0 ${espStyles[p.espDuty]}`}
              >
                {espDutyLabel[p.espDuty]}
              </span>
            </div>
            <p className="text-sm text-foreground leading-relaxed mb-4 flex-1">
              {p.notes}
            </p>
            <div className="space-y-1.5 text-sm mt-auto">
              {p.reportingUrl ? (
                <a
                  href={p.reportingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-accent hover:underline underline-offset-2 font-medium"
                >
                  Report abuse ↗
                </a>
              ) : (
                <span className="block text-subtle italic">
                  No dedicated report URL found
                </span>
              )}
              {p.reportingEmail && (
                <a
                  href={`mailto:${p.reportingEmail}`}
                  className="block text-accent hover:underline underline-offset-2 font-mono text-[0.8125rem]"
                >
                  {p.reportingEmail}
                </a>
              )}
              {p.policyUrl && (
                <a
                  href={p.policyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-muted hover:text-accent hover:underline underline-offset-2 text-[0.8125rem]"
                >
                  Illegal-content policy ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ReportingPage() {
  const categories = allCategories();
  const total = totalPlatformCount();

  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            Directory · {total} platforms · Verified {reportingVerified}
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Where to report CSAM.
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            A verified directory of where to report child sexual abuse material and
            abusive content on every major platform, plus each platform&apos;s
            illegal-content policy. If you don&apos;t know or don&apos;t trust the
            platform, report directly to a clearinghouse — they route to law
            enforcement and to the platforms.
          </p>
        </div>
      </header>

      <section className="border-b border-rule bg-crisis-soft/50 no-print">
        <div className="max-w-6xl mx-auto px-5 py-6 grid md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="text-[10px] uppercase tracking-[0.18em] text-crisis font-semibold mb-1.5">
              If a child is in immediate danger
            </p>
            <p className="text-[0.9375rem] text-foreground leading-relaxed">
              Contact local emergency services first (911 in the US). To report
              CSAM you&apos;ve encountered, the{" "}
              <a
                href="https://report.cybertip.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 font-medium"
              >
                NCMEC CyberTipline
              </a>{" "}
              (US) and the{" "}
              <a
                href="https://report.iwf.org.uk/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-2 font-medium"
              >
                IWF
              </a>{" "}
              (UK & international) accept reports of material hosted anywhere.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <a
              href="https://report.cybertip.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-crisis text-white px-3.5 py-2 rounded-md text-sm font-medium hover:bg-crisis/90"
            >
              Report to NCMEC ↗
            </a>
          </div>
        </div>
      </section>

      <nav className="border-b border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
            Jump to a category
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  className="text-foreground hover:text-accent underline-offset-2 hover:underline"
                >
                  {c.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="border-b border-rule bg-accent-soft/60">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
              How to use this
            </p>
            <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight">
              Two ways to report.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed">
              <strong>Report to the platform</strong>{" "}using its dedicated abuse
              channel — fastest for material currently visible on a specific
              service. <strong>Report to a clearinghouse</strong>{" "}when you
              don&apos;t know or don&apos;t trust the platform, or want a single
              channel that routes to law enforcement. The two are not mutually
              exclusive; do both for serious cases. The{" "}
              <span className="font-semibold">US ESP · § 2258A duty</span> badge
              marks platforms with a legal duty to report apparent CSAM to NCMEC
              under 18 U.S.C. § 2258A — useful context, but the public report
              channels below work regardless of a platform&apos;s status.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 space-y-20">
        {categories.map((category) => (
          <CategorySection key={category.id} category={category} />
        ))}

        {reportingCategories.length === 0 && (
          <section className="border-t border-rule pt-14">
            <div className="max-w-3xl">
              <div className="border-l-2 border-accent bg-accent-soft/40 px-6 py-5 rounded-r-md">
                <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
                  Directory expanding
                </p>
                <p className="text-[0.9375rem] leading-relaxed text-foreground">
                  Platform-specific reporting contacts (social networks, messaging
                  apps, AI image generators, cloud storage, infrastructure, adult
                  platforms, gaming, app stores, and payment rails) are being
                  verified and added. The clearinghouses above are the
                  report-of-first-resort and accept reports of material hosted on
                  any platform.
                </p>
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-rule pt-14">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Notes on this directory
            </h2>
            <ul className="space-y-3 text-[1.0625rem] leading-relaxed font-serif">
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Accuracy is the entire value of a reporting directory. Every entry
                is verified against the platform&apos;s live reporting flow at the
                time of review. URLs change; if one is broken, the clearinghouses
                above accept reports regardless of platform.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                You do not need to confirm that content is CSAM before reporting.
                Trained analysts at the clearinghouses and platforms make that
                assessment. Reporting in good faith is the right action.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Do not download, save, screenshot, or forward suspected CSAM to
                &ldquo;preserve evidence&rdquo; — that can itself be an offense.
                Report the location (URL, username, platform) and let the
                clearinghouse or platform handle preservation.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                For the technical and policy context behind platform CSAM
                obligations, see{" "}
                <Link
                  href="/report/technology"
                  className="text-accent underline underline-offset-2"
                >
                  Chapter 06: Technology Solutions
                </Link>{" "}
                and{" "}
                <Link
                  href="/report/prevention"
                  className="text-accent underline underline-offset-2"
                >
                  Chapter 07: Prevention Strategies
                </Link>
                . If you need support as a survivor, see{" "}
                <Link
                  href="/for-victims"
                  className="text-accent underline underline-offset-2"
                >
                  For Survivors
                </Link>
                .
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/get-help"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                ← Crisis lines and recovery resources
              </Link>
              <Link
                href="/report/technology"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                The detection landscape →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
