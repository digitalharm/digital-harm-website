import type { Block } from "@/content/report";

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p
          className="text-[1.0625rem] leading-[1.75] text-foreground"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    case "h3":
      return (
        <h3 className="font-sans text-[0.8125rem] uppercase tracking-[0.12em] font-semibold text-muted mt-10 mb-3">
          {block.text}
        </h3>
      );
    case "quote":
      return (
        <blockquote className="my-8 border-l-2 border-accent pl-6 py-1">
          <p className="font-serif text-[1.375rem] leading-snug text-foreground italic">
            &ldquo;{block.text}&rdquo;
          </p>
          {block.attribution && (
            <footer className="mt-3 text-sm text-muted not-italic">
              — {block.attribution}
            </footer>
          )}
        </blockquote>
      );
    case "stat":
      return (
        <aside className="my-8 border-t border-b border-rule py-7 grid sm:grid-cols-[auto_1fr] items-baseline gap-4 sm:gap-8">
          <div className="font-serif text-5xl sm:text-6xl font-semibold text-accent tracking-tight leading-none">
            {block.figure}
          </div>
          <div>
            <p className="text-base text-foreground leading-snug">{block.label}</p>
            {block.source && (
              <p className="mt-2 text-xs text-subtle uppercase tracking-wider font-medium">
                {block.source}
              </p>
            )}
          </div>
        </aside>
      );
    case "table":
      return (
        <figure className="my-10">
          <div className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
            <table className="w-full font-sans text-sm">
              <thead>
                <tr>
                  {block.headers.map((h) => (
                    <th
                      key={h}
                      className="text-left font-semibold py-3 px-3.5 border-b-2 border-foreground text-[0.7rem] uppercase tracking-[0.08em] text-muted align-bottom"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="py-3 px-3.5 border-b border-rule align-top leading-relaxed"
                      >
                        {j === 0 ? (
                          <span className="font-medium text-foreground">{cell}</span>
                        ) : (
                          <span className="text-foreground/85">{cell}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-xs text-subtle italic">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "list":
      return (
        <ul className="my-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="pl-5 relative text-foreground">
              <span
                className="absolute left-0 top-3 w-2 h-px bg-subtle"
                aria-hidden
              />
              <span dangerouslySetInnerHTML={{ __html: item }} />
            </li>
          ))}
        </ul>
      );
    case "callout": {
      const tone = block.tone ?? "info";
      const styles: Record<string, string> = {
        info: "border-accent/30 bg-accent-soft text-foreground",
        warning: "border-warning/30 bg-warning-soft text-foreground",
        crisis: "border-crisis/30 bg-crisis-soft text-foreground",
      };
      const labels: Record<string, string> = {
        info: "Note",
        warning: "Caution",
        crisis: "If you need help",
      };
      return (
        <aside className={`my-8 border-l-2 ${styles[tone]} px-6 py-5 rounded-r-md`}>
          <p className="text-[10px] uppercase tracking-[0.18em] font-semibold text-muted mb-2">
            {block.title ?? labels[tone]}
          </p>
          <div
            className="text-[0.9375rem] leading-relaxed [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2"
            dangerouslySetInnerHTML={{ __html: block.html }}
          />
        </aside>
      );
    }
  }
}
