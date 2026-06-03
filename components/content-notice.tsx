"use client";

import { useEffect, useState } from "react";

export function ContentNotice() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const v = typeof window !== "undefined" ? sessionStorage.getItem("dhr-notice-dismissed") : "1";
    setDismissed(v === "1");
  }, []);

  if (dismissed) return null;

  return (
    <div className="bg-foreground text-background text-sm no-print">
      <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-start gap-4">
        <span className="font-mono text-[10px] tracking-[0.18em] uppercase opacity-70 pt-0.5 hidden sm:inline">
          Notice
        </span>
        <p className="flex-1 leading-relaxed">
          This report discusses pornography, addiction, child sexual abuse material, and sexual
          violence. If you need immediate support, see{" "}
          <a href="/get-help" className="underline underline-offset-2">
            Get Help
          </a>
          .
        </p>
        <button
          aria-label="Dismiss notice"
          onClick={() => {
            sessionStorage.setItem("dhr-notice-dismissed", "1");
            setDismissed(true);
          }}
          className="text-background/70 hover:text-background pt-0.5 cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
