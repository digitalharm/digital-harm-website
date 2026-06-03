"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

/**
 * The search input island. Submitting navigates to /search?q=… so results are
 * rendered server-side (no client-side result fetching, works on static export).
 * `autoFocus` is used on the /search page; the header uses a compact variant.
 */
export function SearchBox({
  initialQuery = "",
  autoFocus = false,
  placeholder = "Search the report, guides, and resources…",
}: {
  initialQuery?: string;
  autoFocus?: boolean;
  placeholder?: string;
}) {
  const router = useRouter();
  const [value, setValue] = useState(initialQuery);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const q = value.trim();
    router.push(q ? `/search?q=${encodeURIComponent(q)}` : "/search");
  }

  return (
    <form onSubmit={submit} role="search" className="w-full">
      <div className="flex items-center gap-2 border border-rule rounded-lg bg-paper px-3 py-2.5 focus-within:border-accent transition-colors">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-subtle shrink-0"
          aria-hidden
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="search"
          name="q"
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          aria-label="Search"
          className="flex-1 bg-transparent outline-none text-[15px] text-foreground placeholder:text-subtle"
        />
        <button
          type="submit"
          className="text-[13px] font-medium text-accent hover:underline underline-offset-2 shrink-0"
        >
          Search
        </button>
      </div>
    </form>
  );
}
