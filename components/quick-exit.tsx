"use client";

/**
 * Quick Exit — a safety affordance for visitors who may be monitored (an abuse
 * survivor, a sextortion victim, someone whose device is watched). It lets them
 * leave this site instantly and reduces the trail.
 *
 * Behavior:
 * - A persistent, always-visible button (bottom-right), present on every route.
 * - Press it, OR press Escape twice quickly, to leave.
 * - On leave: replace the current page in history with a neutral site via
 *   `location.replace` (so the browser Back button does NOT return here), and
 *   try to open a neutral page in a new tab as the foreground.
 *
 * Privacy: ZERO network calls, no cookies, no storage. Honors reduced-motion.
 * It cannot erase browser history entirely (no web API can), and the affordance
 * is intentionally honest about that in its label/title rather than implying a
 * guarantee.
 */

import { useEffect, useRef } from "react";

/** Where Quick Exit sends the visitor. A neutral, universally-innocuous page. */
const SAFE_URL = "https://www.weather.com";

export function QuickExit() {
  const lastEsc = useRef(0);

  function leave() {
    // Open a neutral page in a new tab (becomes the visible foreground)…
    try {
      window.open(SAFE_URL, "_blank", "noopener,noreferrer");
    } catch {
      // ignore — the replace below is the real guarantee
    }
    // …and replace THIS page so Back doesn't come back to the site.
    window.location.replace(SAFE_URL);
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      const now = Date.now();
      if (now - lastEsc.current < 600) {
        leave();
      }
      lastEsc.current = now;
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <button
      type="button"
      onClick={leave}
      aria-label="Quick exit — leave this site now (press Escape twice)"
      title="Leave this site quickly. Press Escape twice for the same. This does not erase your full browser history."
      className="quick-exit no-print"
    >
      <span aria-hidden="true">✕</span> Quick exit
    </button>
  );
}
