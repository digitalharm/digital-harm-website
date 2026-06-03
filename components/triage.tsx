"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Crisis triage router. A no-login, client-side branching flow that asks 1–2
 * plain-language questions and routes the person to the page that helps — it
 * does NOT duplicate any guidance, only points into the existing pages. Built
 * for someone in acute stress: large tap targets, one decision at a time, the
 * single most urgent instruction shown immediately on each result.
 */

type Dest = { href: string; label: string };

type Result = {
  title: string;
  // The one thing to know first, shown in a crisis-colored box.
  urgent?: string;
  steps: string[];
  primary: Dest;
  secondary?: Dest[];
  // Optional tappable phone lines.
  lines?: { label: string; tel: string }[];
};

type Node =
  | { kind: "question"; prompt: string; options: { label: string; sub?: string; next: string }[] }
  | { kind: "result"; result: Result };

const TREE: Record<string, Node> = {
  root: {
    kind: "question",
    prompt: "What's happening right now?",
    options: [
      { label: "Someone is threatening to share my private images", sub: "Blackmail, “sextortion,” pay-or-I-post", next: "r-sextortion" },
      { label: "A private image of me is already being shared", sub: "Leaked or posted without my consent", next: "q-age" },
      { label: "I'm worried about a child's safety", sub: "My child saw something, or someone is contacting them", next: "r-parents" },
      { label: "I found child sexual abuse material online", sub: "I need to report it", next: "r-reporting" },
      { label: "I'm struggling with my own pornography use", sub: "I want to cut back or stop", next: "r-recovery" },
      { label: "I'm worried about my own thoughts or urges", sub: "Toward children — I don't want to act on them", next: "r-prevention" },
      { label: "I survived sexual abuse and want support", sub: "Recent or in the past", next: "r-survivor" },
    ],
  },
  "q-age": {
    kind: "question",
    prompt: "Was the person in the image under 18 at the time it was taken?",
    options: [
      { label: "Yes — under 18", next: "r-remove-minor" },
      { label: "No — 18 or older", next: "r-remove-adult" },
      { label: "Not sure / prefer not to say", next: "r-remove-general" },
    ],
  },
  "r-sextortion": {
    kind: "result",
    result: {
      title: "Stop, breathe — you can get through this",
      urgent: "Do not pay. Do not delete anything. You are not in trouble, and you are not alone.",
      steps: [
        "Stop responding to the person — but do not delete the messages or images. They are evidence.",
        "Tell someone you trust. Carrying this alone is the thing that makes it feel hopeless.",
        "Report it, and get the image taken down.",
      ],
      primary: { href: "/sextortion", label: "Open the sextortion survival guide" },
      secondary: [{ href: "/remove-images", label: "Get the image removed" }],
      lines: [
        { label: "988 Suicide & Crisis Lifeline (US, call or text)", tel: "988" },
        { label: "NCMEC CyberTipline", tel: "1-800-843-5678" },
      ],
    },
  },
  "r-remove-minor": {
    kind: "result",
    result: {
      title: "There's a free service to take it down",
      urgent: "You never have to upload or send the image. The tools work from a fingerprint created on your own device.",
      steps: [
        "Use Take It Down (NCMEC) — it works for an image of you taken when you were under 18, even if you're an adult now.",
        "Our removal guide walks you through it and explains your 48-hour removal right.",
      ],
      primary: { href: "/remove-images", label: "Open the image-removal guide" },
      secondary: [{ href: "/for-victims", label: "Support for survivors" }],
      lines: [{ label: "NCMEC", tel: "1-800-843-5678" }],
    },
  },
  "r-remove-adult": {
    kind: "result",
    result: {
      title: "There's a free service to take it down",
      urgent: "You never have to upload or send the image. StopNCII creates a fingerprint on your device and shares only that.",
      steps: [
        "Use StopNCII.org — for adults, including AI deepfakes.",
        "Our removal guide walks you through it and your 48-hour removal right under the TAKE IT DOWN Act.",
      ],
      primary: { href: "/remove-images", label: "Open the image-removal guide" },
      secondary: [{ href: "/sextortion", label: "If you're being threatened over it" }],
      lines: [{ label: "Cyber Civil Rights Initiative helpline", tel: "1-844-878-2274" }],
    },
  },
  "r-remove-general": {
    kind: "result",
    result: {
      title: "There's a free way to take it down",
      urgent: "You never have to upload or send the image to use these tools.",
      steps: [
        "The removal guide routes you to the right free tool for your exact situation, whether the person was under or over 18.",
      ],
      primary: { href: "/remove-images", label: "Open the image-removal guide" },
      secondary: [{ href: "/sextortion", label: "If you're being threatened over it" }],
    },
  },
  "r-parents": {
    kind: "result",
    result: {
      title: "You can handle this — start here",
      urgent: "If a child is in immediate danger, contact local emergency services first.",
      steps: [
        "The parents' guide has age-by-age scripts, the sextortion warning signs, and a clear what-to-do path if something has already happened.",
      ],
      primary: { href: "/for-parents", label: "Open the guide for parents" },
      secondary: [
        { href: "/sextortion", label: "If your child is being threatened over an image" },
        { href: "/remove-images", label: "If an image needs to come down" },
      ],
      lines: [{ label: "NCMEC CyberTipline", tel: "1-800-843-5678" }],
    },
  },
  "r-reporting": {
    kind: "result",
    result: {
      title: "Report it — here's exactly where",
      urgent: "Do not download or screenshot the material to “save evidence.” Reporting it is enough; possessing it is a crime.",
      steps: [
        "You don't need to confirm anything before reporting.",
        "Report to NCMEC's CyberTipline, or use the directory to find the right channel for the platform.",
      ],
      primary: { href: "/for-reporting", label: "Where to report (full directory)" },
      secondary: [{ href: "/organizations", label: "Who's who in child protection" }],
      lines: [
        { label: "NCMEC CyberTipline", tel: "1-800-843-5678" },
        { label: "FBI", tel: "1-800-225-5324" },
      ],
    },
  },
  "r-recovery": {
    kind: "result",
    result: {
      title: "Reaching out early is strength, not failure",
      steps: [
        "Get Help lists confidential crisis lines and pornography-recovery programs.",
        "The apps directory covers blockers, filters, and recovery apps you can set up today.",
      ],
      primary: { href: "/get-help", label: "Open Get Help" },
      secondary: [{ href: "/apps", label: "Apps & filtering tools" }],
      lines: [{ label: "988 Suicide & Crisis Lifeline (US)", tel: "988" }],
    },
  },
  "r-prevention": {
    kind: "result",
    result: {
      title: "Confidential help exists — reaching for it protects children",
      urgent: "Being worried about your thoughts is not the same as acting on them, and seeking help is the responsible step.",
      steps: [
        "There is confidential, often anonymous support designed exactly for this.",
        "The prevention page explains what's available and what's confidential where you live.",
      ],
      primary: { href: "/prevention", label: "Open the prevention page" },
      secondary: [{ href: "/for-offenders", label: "For people seeking help" }],
      lines: [
        { label: "Stop It Now! (US)", tel: "1-888-773-8368" },
        { label: "Stop It Now! (UK & Ireland)", tel: "0808-1000-900" },
      ],
    },
  },
  "r-survivor": {
    kind: "result",
    result: {
      title: "What happened was not your fault",
      steps: [
        "The survivors' guide has trauma-informed paths through care, reporting (always optional), and image removal.",
      ],
      primary: { href: "/for-victims", label: "Open the guide for survivors" },
      secondary: [{ href: "/remove-images", label: "If images are circulating" }],
      lines: [
        { label: "RAINN National Sexual Assault Hotline", tel: "1-800-656-4673" },
        { label: "988 Suicide & Crisis Lifeline (US)", tel: "988" },
      ],
    },
  },
};

function telHref(tel: string): string {
  return "tel:" + tel.replace(/[^0-9+]/g, "");
}

export function Triage() {
  const [id, setId] = useState<string>("root");
  const [history, setHistory] = useState<string[]>([]);

  const node = TREE[id] ?? TREE.root;

  function go(next: string) {
    setHistory((h) => [...h, id]);
    setId(next);
  }
  function back() {
    setHistory((h) => {
      if (h.length === 0) return h;
      const prev = h[h.length - 1];
      setId(prev);
      return h.slice(0, -1);
    });
  }
  function restart() {
    setHistory([]);
    setId("root");
  }

  return (
    <div>
      {history.length > 0 && (
        <button
          onClick={back}
          className="mb-5 inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground"
        >
          <span aria-hidden>←</span> Back
        </button>
      )}

      {node.kind === "question" ? (
        <div>
          <h2 className="font-serif text-[1.5rem] md:text-[1.875rem] font-semibold tracking-tight mb-6">
            {node.prompt}
          </h2>
          <ul className="space-y-3">
            {node.options.map((opt) => (
              <li key={opt.next}>
                <button
                  onClick={() => go(opt.next)}
                  className="group w-full text-left rounded-lg border border-rule bg-paper px-5 py-4 hover:border-accent hover:bg-accent-soft/40 transition-colors flex items-center gap-3"
                >
                  <span className="flex-1">
                    <span className="block font-medium text-[1.0625rem] text-foreground group-hover:text-accent transition-colors leading-snug">
                      {opt.label}
                    </span>
                    {opt.sub && (
                      <span className="block text-[13px] text-muted mt-0.5 leading-snug">{opt.sub}</span>
                    )}
                  </span>
                  <span className="shrink-0 text-subtle group-hover:text-accent transition-colors" aria-hidden>→</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <ResultCard result={node.result} onRestart={restart} />
      )}
    </div>
  );
}

function ResultCard({ result, onRestart }: { result: Result; onRestart: () => void }) {
  return (
    <div>
      <h2 className="font-serif text-[1.625rem] md:text-[2rem] font-semibold tracking-tight mb-4">
        {result.title}
      </h2>

      {result.urgent && (
        <div className="rounded-lg border border-crisis/45 bg-crisis/5 p-4 mb-5 text-[15px] leading-relaxed font-medium text-foreground">
          {result.urgent}
        </div>
      )}

      <ol className="space-y-3 mb-6 list-decimal pl-5 text-[15.5px] leading-relaxed text-foreground/90">
        {result.steps.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <div className="flex flex-col gap-3">
        <Link
          href={result.primary.href}
          className="inline-flex items-center justify-center gap-2 bg-foreground text-background px-5 py-3 rounded-md text-[15px] font-medium hover:bg-accent transition-colors"
        >
          {result.primary.label}
          <span aria-hidden>→</span>
        </Link>
        {result.secondary?.map((d) => (
          <Link
            key={d.href}
            href={d.href}
            className="inline-flex items-center gap-2 text-[14px] text-accent underline underline-offset-2"
          >
            {d.label}
            <span aria-hidden>→</span>
          </Link>
        ))}
      </div>

      {result.lines && result.lines.length > 0 && (
        <div className="mt-6 border-t border-rule pt-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2.5">
            Talk to someone now
          </p>
          <ul className="space-y-1.5 text-[14px]">
            {result.lines.map((l) => (
              <li key={l.tel}>
                <a href={telHref(l.tel)} className="text-accent underline underline-offset-2 font-medium">
                  {l.tel}
                </a>{" "}
                <span className="text-muted">— {l.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        onClick={onRestart}
        className="mt-8 inline-flex items-center gap-1.5 text-[13px] text-muted hover:text-foreground"
      >
        <span aria-hidden>↺</span> Start over
      </button>
    </div>
  );
}
