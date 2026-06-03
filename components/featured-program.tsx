import Link from "next/link";

type Variant = "full" | "compact" | "sidebar";

const LOCATIONS = [
  "Capitola",
  "Concord",
  "El Cajon",
  "El Cerrito",
  "Escondido",
  "Hayward",
  "Merced",
  "Modesto",
  "Moreno Valley",
  "Salinas",
  "San Diego",
  "San Francisco",
  "San Luis Obispo",
  "San Mateo",
  "Santa Maria",
  "Stockton",
];

export function FeaturedProgram({ variant = "full" }: { variant?: Variant }) {
  if (variant === "compact") {
    return (
      <aside
        className="border border-rule bg-paper rounded-md p-5 not-italic"
        aria-label="Featured Program"
      >
        <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2">
          Featured Program
        </p>
        <p className="font-serif text-lg font-semibold mb-1.5 leading-snug">
          HOPE Program
        </p>
        <p className="text-sm text-muted leading-relaxed mb-4">
          California-based outpatient mental health agency. CASOMB-certified Adult
          Sexual Behavior Program with CBT, group, and family counseling. In-person
          and telehealth.
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <a
            href="tel:18007648068"
            className="font-medium text-foreground hover:text-accent"
          >
            (800) 764-8068
          </a>
          <a
            href="https://www.hopeprogram.biz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline underline-offset-2"
          >
            hopeprogram.biz ↗
          </a>
        </div>
      </aside>
    );
  }

  if (variant === "sidebar") {
    return (
      <aside
        className="border border-rule bg-paper rounded-md p-5"
        aria-label="Featured Program"
      >
        <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-3">
          Featured Program
        </p>
        <p className="font-serif text-base font-semibold mb-1.5 leading-tight">
          HOPE Program
        </p>
        <p className="text-[11px] uppercase tracking-wider text-subtle font-medium mb-3">
          California · CASOMB-certified
        </p>
        <p className="text-[0.8125rem] text-muted leading-relaxed mb-4">
          Outpatient mental health agency offering CBT-based Adult Sexual Behavior
          and Substance Use programs since 2008.
        </p>
        <div className="space-y-1 text-[0.8125rem]">
          <a
            href="tel:18007648068"
            className="block font-medium text-foreground hover:text-accent"
          >
            (800) 764-8068
          </a>
          <a
            href="https://www.hopeprogram.biz/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-accent hover:underline underline-offset-2"
          >
            hopeprogram.biz ↗
          </a>
        </div>
      </aside>
    );
  }

  return (
    <section
      aria-label="Featured Program"
      className="border-y border-rule bg-paper"
    >
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16 grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-3">
            Featured Program
          </p>
          <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight mb-3">
            HOPE Program
          </h2>
          <p className="text-[11px] uppercase tracking-wider text-subtle font-medium mb-4">
            Established 2008 · California
          </p>
          <p className="text-[0.9375rem] text-muted leading-relaxed">
            Outpatient mental health agency offering evidence-based, affordable
            treatment across California — including a specialized program
            certified by the California Sex Offender Management Board.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            <a
              href="tel:18007648068"
              className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-md font-medium hover:bg-foreground/90 transition-colors"
            >
              Call (800) 764-8068
            </a>
            <a
              href="https://www.hopeprogram.biz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline underline-offset-2"
            >
              hopeprogram.biz ↗
            </a>
          </div>
        </div>

        <div className="md:col-span-8 grid sm:grid-cols-2 gap-8">
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-3">
              Programs offered
            </p>
            <ul className="space-y-2 text-[0.9375rem]">
              {[
                "Adult Sexual Behavior Program",
                "Substance Use & Concurrent Disorders",
                "Trauma Program",
                "Mood & Anxiety Disorders",
                "Domestic Violence Program",
                "Youth Forensic Services",
                "Anger Management",
              ].map((p) => (
                <li key={p} className="pl-4 relative text-foreground">
                  <span
                    className="absolute left-0 top-3 w-2 h-px bg-subtle"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold mb-3">
              Clinical approach
            </p>
            <ul className="space-y-2 text-[0.9375rem]">
              {[
                "Cognitive-Behavioral Therapy (CBT)",
                "Individual, group, and family counseling",
                "Psychological evaluations and risk assessments",
                "Relapse prevention planning",
                "Specialized tracks for developmentally delayed and dual-diagnosis clients",
                "Telehealth and in-person sessions",
              ].map((p) => (
                <li key={p} className="pl-4 relative text-foreground">
                  <span
                    className="absolute left-0 top-3 w-2 h-px bg-subtle"
                    aria-hidden
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-rule">
        <div className="max-w-6xl mx-auto px-5 py-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-3">
            16 California locations
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.8125rem] text-muted">
            {LOCATIONS.map((loc) => (
              <li key={loc}>{loc}</li>
            ))}
          </ul>
          <p className="text-[11px] text-subtle mt-5 max-w-3xl leading-relaxed">
            The HOPE Program is featured here on its merits as a treatment resource —
            not a paid placement, and not a sponsor. Its inclusion is editorially
            independent of the research presented elsewhere in this report. See the{" "}
            <Link href="/about" className="underline underline-offset-2">
              About
            </Link>{" "}
            page for editorial policy and the{" "}
            <Link href="/get-help" className="underline underline-offset-2">
              Get Help
            </Link>{" "}
            page for the full list of unaffiliated, free helplines.
          </p>
        </div>
      </div>
    </section>
  );
}
