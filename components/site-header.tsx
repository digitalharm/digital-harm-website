import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-rule no-print">
      <div className="max-w-6xl mx-auto px-5 h-14 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 group">
          <span className="font-serif font-semibold text-[15px] leading-none tracking-tight">
            The Digital Harm Project
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-x-4 lg:gap-x-5 text-[13px] text-muted">
          <Link href="/browse" className="hover:text-foreground transition-colors">
            Browse
          </Link>
          <Link href="/#chapters" className="hover:text-foreground transition-colors">
            Research
          </Link>
          <Link href="/get-help" className="hover:text-foreground transition-colors">
            Resources
          </Link>
          <Link href="/apps" className="hover:text-foreground transition-colors">
            Apps
          </Link>
          <Link href="/tools" className="hover:text-foreground transition-colors">
            Tools
          </Link>
          <Link href="/guides" className="hover:text-foreground transition-colors">
            Guides
          </Link>
          <Link href="/citations" className="hover:text-foreground transition-colors">
            Citations
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/search"
            aria-label="Search"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground transition-colors"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="hidden lg:inline">Search</span>
          </Link>
          <Link
            href="/help-now"
            className="inline-flex items-center gap-1.5 bg-crisis text-white px-3 py-1.5 rounded-md text-[13px] font-medium hover:bg-crisis/90 transition-colors"
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-white/80"
              aria-hidden
            />
            Get Help
          </Link>
        </div>
      </div>
    </header>
  );
}
