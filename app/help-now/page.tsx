import type { Metadata } from "next";
import Link from "next/link";
import { Triage } from "@/components/triage";

export const metadata: Metadata = {
  title: "Get Help Now",
  description:
    "Answer one or two quick questions and we'll point you straight to the right help — for sextortion, leaked or non-consensual images, a child's safety, reporting abuse, your own pornography use, or your own worrying thoughts. No login, nothing to download.",
};

export default function HelpNowPage() {
  return (
    <article className="bg-background min-h-screen">
      <header className="border-b border-rule">
        <div className="max-w-2xl mx-auto px-5 pt-10 pb-7 md:pt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crisis mb-3">
            Get help now
          </p>
          <h1 className="font-serif font-semibold text-[2rem] md:text-[2.75rem] leading-[1.04] tracking-[-0.02em] mb-3">
            Let&apos;s find the right help, fast
          </h1>
          <p className="font-serif text-[1.125rem] leading-snug text-muted">
            Answer one or two quick questions. We&apos;ll point you straight to
            the page that helps — no login, nothing to download.
          </p>
          <div className="mt-5 rounded-lg border border-crisis/45 bg-crisis/5 p-3.5 text-[14px] leading-relaxed">
            <strong className="text-foreground">In immediate danger?</strong>{" "}
            Contact local emergency services. In the US you can call or text{" "}
            <a href="tel:988" className="text-accent underline underline-offset-2 font-medium">988</a>{" "}
            any time.
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-5 py-9 md:py-12">
        <Triage />
      </div>

      <div className="max-w-2xl mx-auto px-5 pb-16">
        <div className="border-t border-rule pt-5 text-[13px] text-muted">
          Prefer to look around yourself?{" "}
          <Link href="/browse" className="text-accent underline underline-offset-2">Browse everything</Link>
          {" · "}
          <Link href="/search" className="text-accent underline underline-offset-2">Search</Link>
          {" · "}
          <Link href="/get-help" className="text-accent underline underline-offset-2">All crisis lines</Link>
        </div>
      </div>
    </article>
  );
}
