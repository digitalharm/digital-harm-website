import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule mt-24 bg-background no-print">
      <div className="max-w-6xl mx-auto px-5 py-12 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="font-serif font-semibold text-base mb-2">
            The Digital Harm Project
          </p>
          <p className="text-sm text-muted leading-relaxed max-w-md">
            A synthesis of peer-reviewed research, government data, and clinical
            evidence on pornography exposure, addiction, child sexual abuse material,
            and the technologies and treatments that protect against them.
          </p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-subtle mb-3 font-medium">
            Report
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="text-foreground hover:text-accent">
                Executive Summary
              </Link>
            </li>
            <li>
              <Link href="/#chapters" className="text-foreground hover:text-accent">
                Research
              </Link>
            </li>
            <li>
              <Link href="/apps" className="text-foreground hover:text-accent">
                Apps Directory
              </Link>
            </li>
            <li>
              <Link href="/tools" className="text-foreground hover:text-accent">
                Tools (Open Source)
              </Link>
            </li>
            <li>
              <a
                href="https://fightcsam.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
              >
                FightCSAM — Developer Docs ↗
              </a>
            </li>
            <li>
              <Link href="/citations" className="text-foreground hover:text-accent">
                Citations
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-foreground hover:text-accent">
                About the project
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-subtle mb-3 font-medium">
            Guides
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/guides" className="text-foreground hover:text-accent">
                All guides
              </Link>
            </li>
            <li>
              <Link href="/for-reporting" className="text-foreground hover:text-accent">
                For Reporting Content
              </Link>
            </li>
            <li>
              <Link href="/for-victims" className="text-foreground hover:text-accent">
                For Survivors
              </Link>
            </li>
            <li>
              <Link href="/for-educators" className="text-foreground hover:text-accent">
                For Educators
              </Link>
            </li>
            <li>
              <Link href="/for-pta-groups" className="text-foreground hover:text-accent">
                For PTA Groups
              </Link>
            </li>
            <li>
              <Link href="/for-offenders" className="text-foreground hover:text-accent">
                For People Seeking Help
              </Link>
            </li>
            <li>
              <Link href="/for-attorneys" className="text-foreground hover:text-accent">
                For Attorneys
              </Link>
            </li>
            <li>
              <Link href="/for-therapists" className="text-foreground hover:text-accent">
                For Therapists
              </Link>
            </li>
            <li>
              <Link href="/for-tech-ceos" className="text-foreground hover:text-accent">
                For Tech CEOs
              </Link>
            </li>
            <li>
              <Link href="/for-developers" className="text-foreground hover:text-accent">
                For Developers
              </Link>
            </li>
            <li>
              <Link href="/for-compliance-teams" className="text-foreground hover:text-accent">
                For Compliance Teams
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.12em] text-subtle mb-3 font-medium">
            Support
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/get-help" className="text-foreground hover:text-accent">
                Crisis & Helplines
              </Link>
            </li>
            <li>
              <Link href="/for-reporting" className="text-foreground hover:text-accent">
                Where to Report CSAM
              </Link>
            </li>
            <li>
              <Link href="/get-help#porn-recovery" className="text-foreground hover:text-accent">
                Recovery Resources
              </Link>
            </li>
            <li>
              <Link href="/get-help#offender-prevention" className="text-foreground hover:text-accent">
                Confidential Help
              </Link>
            </li>
            <li>
              <Link href="/get-help#families" className="text-foreground hover:text-accent">
                Parents & Families
              </Link>
            </li>
            <li>
              <Link href="/get-help/bay-area" className="text-foreground hover:text-accent">
                SF Bay Area
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <div className="max-w-6xl mx-auto px-5 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-subtle">
          <p>
            This site does not provide medical advice. If you or someone else is in
            immediate danger, contact local emergency services.
          </p>
          <p>Published 2026 · Last reviewed May 2026</p>
        </div>
      </div>
    </footer>
  );
}
