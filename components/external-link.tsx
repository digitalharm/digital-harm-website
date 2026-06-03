/**
 * ExternalLink — an outbound link with accessibility + safety baked in:
 *
 * - A UNIQUE accessible name: screen-reader users navigating by links list hear
 *   a distinct label per link instead of "Visit, Visit, Visit…". Pass `label`
 *   to override; otherwise the visible text is used and " (opens in a new tab)"
 *   is appended to the accessible name.
 * - The decorative "↗" glyph is `aria-hidden` so it isn't announced as
 *   "north east arrow" on every link.
 * - `rel="noopener noreferrer"` on every `target="_blank"` (no reverse-tabnabbing,
 *   no referrer leak — appropriate for a privacy-sensitive resource).
 *
 * Server component; no client JS, no tracking.
 */

import type { ReactNode } from "react";

export function ExternalLink({
  href,
  children,
  className,
  label,
  arrow = true,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  /** Explicit accessible name. Falls back to the visible text. */
  label?: string;
  /** Render the decorative ↗ glyph (default true). */
  arrow?: boolean;
}) {
  const accessibleName =
    (label ?? (typeof children === "string" ? children : undefined));
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={accessibleName ? `${accessibleName} (opens in a new tab)` : undefined}
      className={className}
    >
      {children}
      {arrow && (
        <>
          {" "}
          <span aria-hidden="true">↗</span>
        </>
      )}
    </a>
  );
}
