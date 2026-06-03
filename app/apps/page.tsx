import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps Directory",
  description:
    "Comprehensive directory of mobile and desktop apps for pornography recovery — recovery programs, accountability and monitoring, content blockers, DNS filters, and operating-system parental controls.",
};

type Platform =
  | "iOS"
  | "Android"
  | "macOS"
  | "Windows"
  | "ChromeOS"
  | "Web"
  | "Hardware";

type App = {
  name: string;
  approach: string;
  description: string;
  platforms: Platform[];
  pricing: string;
  url: string;
  caveats?: string;
  featured?: boolean;
};

type Group = {
  id: string;
  label: string;
  heading: string;
  blurb: string;
  apps: App[];
};

const groups: Group[] = [
  {
    id: "recovery-programs",
    label: "Recovery & coaching",
    heading: "Recovery program apps",
    blurb:
      "Structured behavior-change apps — daily lessons, habit and streak tracking, urge-management tools, peer community, and increasingly AI-coached cognitive-behavioral exercises. These teach rather than surveil.",
    apps: [
      {
        name: "QUITTR",
        approach: "All-in-one 90-day program",
        description:
          "Content blocker, AI-coached CBT exercises, personalized plan, urge tracking, gamification, and community. The most feature-complete of the recovery-program apps — usable as a single tool rather than as part of a stack.",
        platforms: ["iOS", "Android"],
        pricing: "Subscription",
        url: "https://quittrapp.com/",
      },
      {
        name: "Brainbuddy",
        approach: "100-day neuroscience curriculum",
        description:
          "Daily tasks, meditations, urge-surfing exercises, and games framed as dopamine retraining. Strongest for users who want to understand the neurobiology of compulsive use, not just track abstinence.",
        platforms: ["iOS", "Android"],
        pricing: "Subscription",
        url: "https://www.brainbuddy.com/",
      },
      {
        name: "Relay",
        approach: "Group accountability",
        description:
          "Auto-matches users into small accountability groups for chat, daily check-ins, and shared goals. Operationalizes the finding that social accountability outperforms solo willpower.",
        platforms: ["iOS", "Android"],
        pricing: "Subscription",
        url: "https://www.joinrelay.app/",
      },
      {
        name: "Cure",
        approach: "Streak counter + education",
        description:
          "Streak counter, calendar view, achievement system, educational articles, and an optional family-control lock for added friction. The lightest of the recovery apps.",
        platforms: ["iOS"],
        pricing: "Freemium",
        url: "https://apps.apple.com/us/app/cure-quit-porn-addiction/id6742135839",
      },
      {
        name: "Fortify",
        approach: "Science-based recovery app",
        description:
          "Educational modules and progress tracking from Fight the New Drug. Non-religious. Particularly suited to users who want a clear curriculum without app-blocking lockouts.",
        platforms: ["iOS", "Android", "Web"],
        pricing: "Freemium",
        url: "https://www.joinfortify.com/",
      },
    ],
  },
  {
    id: "accountability",
    label: "Accountability & monitoring",
    heading: "Accountability and monitoring",
    blurb:
      "Tools that track activity and report to a trusted ally rather than blocking. Effective in research, but only useful if you have a partner, mentor, or therapist willing to receive the reports. Picking a tool is partly a choice of cultural framing — Covenant Eyes is explicitly Christian; Ever Accountable and rTribe are secular.",
    apps: [
      {
        name: "Covenant Eyes",
        approach: "Screen monitoring + ally reports",
        description:
          "AI-powered screenshot analysis on-device with blurred flagged images sent to an accountability partner. Defeats incognito mode since it captures screen content regardless of browser. Bundled \"Victory\" app layers structured quit-porn content on top.",
        platforms: ["iOS", "Android", "macOS", "Windows", "ChromeOS"],
        pricing: "$17–$27 / month",
        url: "https://www.covenanteyes.com/",
        caveats:
          "Explicitly Christian framing; endorsed by the American Association of Christian Counselors. iOS monitoring is limited to Safari due to Apple privacy restrictions.",
      },
      {
        name: "Ever Accountable",
        approach: "Activity reports + filtering",
        description:
          "Monitors activity, flags pornography, and sends easy-to-read reports to chosen allies. Includes optional content filtering, app blocking, and strong anti-circumvention measures. Secular framing.",
        platforms: ["iOS", "Android", "macOS", "Windows"],
        pricing: "Subscription",
        url: "https://everaccountable.com/",
      },
      {
        name: "rTribe",
        approach: "Anonymous community + check-ins",
        description:
          "Built by people in recovery for porn, drug, and food addictions. Anonymous profiles, peer messaging, sobriety tracking, and check-ins. Secular.",
        platforms: ["iOS", "Android"],
        pricing: "Freemium",
        url: "https://www.rtribe.org/",
      },
      {
        name: "Accountable2You",
        approach: "Family-style activity logs",
        description:
          "Activity logging with reports to chosen accountability partners; incognito-detection but no screenshot analysis. Lower price point than Covenant Eyes.",
        platforms: ["iOS", "Android", "macOS", "Windows"],
        pricing: "$7–$16 / month",
        url: "https://accountable2you.com/",
      },
      {
        name: "Bark Premium",
        approach: "AI alerts across 30+ platforms",
        description:
          "AI-powered selective alerts across social media (Discord, Instagram, Snapchat, etc.) detecting cyberbullying, predatory contact, and explicit content — without showing parents every message. Best fit for parents of teens.",
        platforms: ["iOS", "Android", "macOS", "Windows", "ChromeOS"],
        pricing: "$14 / month",
        url: "https://www.bark.us/",
        caveats: "Monitors after exposure rather than preventing it.",
      },
      {
        name: "Qustodio",
        approach: "Comprehensive family monitoring",
        description:
          "App blocking, web filtering, screen-time limits, location tracking, and call/SMS monitoring on Android. Broader than pornography-specific tools.",
        platforms: ["iOS", "Android", "macOS", "Windows", "ChromeOS"],
        pricing: "$4.58–$8.33 / month",
        url: "https://www.qustodio.com/",
      },
    ],
  },
  {
    id: "blockers",
    label: "Blockers & filters",
    heading: "Content blockers and filters",
    blurb:
      "Apps that prevent access at the device level. Best when paired with one of the recovery or accountability tools above — blockers raise the friction, recovery apps build the habit.",
    apps: [
      {
        name: "Canopy",
        approach: "AI real-time image filtering",
        description:
          "Detects and filters explicit images and videos across websites and many social apps in real time, without blocking entire sites. Includes sexting prevention that blocks inappropriate photos before they can be saved or sent.",
        platforms: ["iOS", "Android", "macOS", "Windows"],
        pricing: "$8–$10 / month",
        url: "https://canopy.us/",
      },
      {
        name: "Bulldog Blocker",
        approach: "AI blocker across apps + browsers",
        description:
          "Android-only AI porn blocker that locks down access across apps, browsers, and many social platforms. Strong anti-circumvention measures.",
        platforms: ["Android"],
        pricing: "Subscription",
        url: "https://www.bulldogblocker.com/",
      },
      {
        name: "Net Nanny",
        approach: "AI web filtering",
        description:
          "AI-based web filtering with real-time content analysis across browsers. Good iOS coverage relative to alternatives. Family-oriented.",
        platforms: ["iOS", "Android", "macOS", "Windows"],
        pricing: "$3.33–$7.50 / month",
        url: "https://www.netnanny.com/",
      },
    ],
  },
  {
    id: "dns-network",
    label: "DNS & network",
    heading: "DNS filters and network-level blocking",
    blurb:
      "Block adult-content domains before a connection is established — the highest-leverage layer because it covers every device on the network without per-device installation. Bypassed by VPN or cellular data, so not a complete defense alone.",
    apps: [
      {
        name: "CleanBrowsing",
        approach: "Public DNS filter",
        description:
          "Free Family, Adult, and Security filter tiers with DNS-over-HTTPS and DNS-over-TLS support. Processes 355 billion DNS requests monthly across 70 data centers. Configure once on your router and it covers every device on the network.",
        platforms: ["iOS", "Android", "macOS", "Windows", "Hardware"],
        pricing: "Free (paid tiers for advanced features)",
        url: "https://cleanbrowsing.org/filters/",
      },
      {
        name: "OpenDNS Family Shield",
        approach: "Zero-config public DNS",
        description:
          "Cisco-operated free DNS filter. Configure by setting DNS servers to 208.67.222.123 and 208.67.220.123 on your router or device.",
        platforms: ["iOS", "Android", "macOS", "Windows", "Hardware"],
        pricing: "Free",
        url: "https://www.opendns.com/setupguide/?url=familyshield",
      },
      {
        name: "Pi-hole",
        approach: "Self-hosted DNS sinkhole",
        description:
          "Self-hosted DNS filter on a Raspberry Pi (~$35–50 hardware) or any Linux machine. Community-maintained adult-content blocklists cover approximately 126,000 domains. Highest customizability for technical users.",
        platforms: ["Hardware"],
        pricing: "~$35–50 hardware + free software",
        url: "https://pi-hole.net/",
        caveats: "Requires technical setup; expect to spend an evening on it.",
      },
      {
        name: "Circle Home Plus",
        approach: "Hardware router add-on",
        description:
          "Hardware appliance that plugs into your existing router, providing deeper packet inspection, per-device controls, screen-time limits, and VPN detection.",
        platforms: ["Hardware"],
        pricing: "$129 device + $10/month",
        url: "https://meetcircle.com/",
      },
      {
        name: "Firewalla",
        approach: "All-in-one network security",
        description:
          "Hardware appliance with deep packet inspection, intrusion prevention, VPN, family controls, and no required subscription. Higher upfront cost.",
        platforms: ["Hardware"],
        pricing: "$179–$419 (no subscription)",
        url: "https://firewalla.com/",
      },
    ],
  },
  {
    id: "built-in",
    label: "OS built-in",
    heading: "Operating-system parental controls",
    blurb:
      "Every major operating system now includes serious built-in content controls. Often the simplest and most reliable starting point — no third-party install, no privacy trade-off, no extra cost.",
    apps: [
      {
        name: "Apple Screen Time",
        approach: "iOS, iPadOS, macOS",
        description:
          "Content restrictions, web filtering (three modes including whitelist-only), Communication Safety with on-device nudity detection, app limits, and — as of iOS 26 — complete remote management with zero-minute app blocking.",
        platforms: ["iOS", "macOS"],
        pricing: "Free (built-in)",
        url: "https://support.apple.com/en-us/105121",
      },
      {
        name: "Google Family Link",
        approach: "Android + ChromeOS",
        description:
          "App approval, web filtering with SafeSearch enforcement, screen-time limits, parent-managed contacts, and location.",
        platforms: ["Android", "ChromeOS", "iOS"],
        pricing: "Free (built-in)",
        url: "https://families.google/familylink/",
      },
      {
        name: "Microsoft Family Safety",
        approach: "Windows + Xbox + Android",
        description:
          "Age-based content ratings, web filtering in Edge, screen-time across Windows and Xbox, and — with Microsoft 365 — Copilot AI integration for content guidance.",
        platforms: ["Windows", "Android"],
        pricing: "Free (built-in)",
        url: "https://www.microsoft.com/en-us/microsoft-365/family-safety",
      },
    ],
  },
  {
    id: "generic-sobriety",
    label: "General sobriety",
    heading: "Generic sobriety apps adapted to porn",
    blurb:
      "Built for alcohol and drug recovery, these apps offer the same primitives — streak counters, trigger logs, coping-tool libraries, peer community. They lack porn-specific education and blocking, but for users who already use one of them for substance recovery, doubling them up for cross-addiction can be more sustainable than juggling two ecosystems.",
    apps: [
      {
        name: "Nomo",
        approach: "Multi-addiction sobriety tracker",
        description:
          "Multiple clocks for different sobrieties, accountability partners, encouragement chips, and a journal. Free, well-loved by 12-step communities.",
        platforms: ["iOS", "Android"],
        pricing: "Free",
        url: "https://nomoapp.io/",
      },
      {
        name: "SoberTool",
        approach: "Daily lesson + cravings",
        description:
          "Daily motivational lessons, sober time tracking, and an in-app coping-tool library. Developed by a licensed chemical-dependency counselor.",
        platforms: ["iOS", "Android"],
        pricing: "Free",
        url: "https://sobertool.com/",
      },
      {
        name: "WEconnect",
        approach: "Routines + peer support",
        description:
          "Daily-routine builder, reward system, peer meeting finder. Designed around the finding that structured routines reduce relapse risk.",
        platforms: ["iOS", "Android"],
        pricing: "Free",
        url: "https://www.weconnectrecovery.com/",
      },
      {
        name: "Sober Grid",
        approach: "Sober social network",
        description:
          "Geo-located peer community for people in recovery — find local sober friends, share check-ins, and request peer support. Optional paid coaching.",
        platforms: ["iOS", "Android"],
        pricing: "Free + optional paid coaching",
        url: "https://www.sobergrid.com/",
      },
    ],
  },
];

const platformLabel: Record<Platform, string> = {
  iOS: "iOS",
  Android: "Android",
  macOS: "macOS",
  Windows: "Windows",
  ChromeOS: "ChromeOS",
  Web: "Web",
  Hardware: "Hardware",
};

export default function AppsPage() {
  const totalCount = groups.reduce((acc, g) => acc + g.apps.length, 0);

  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-6xl mx-auto px-5 pt-14 pb-12 md:pt-20 md:pb-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-5">
            Directory · {totalCount} apps
          </p>
          <h1 className="font-serif font-semibold text-[2.5rem] md:text-[3.25rem] leading-[1.02] tracking-[-0.02em] mb-6 max-w-3xl">
            Apps directory
          </h1>
          <p className="font-serif text-[1.125rem] md:text-[1.25rem] leading-snug text-muted max-w-2xl">
            Mobile and desktop apps for pornography recovery, organized by what they
            actually do — recovery programs, accountability and monitoring, content
            blockers, DNS filters, and the parental controls already built into your
            operating system.
          </p>
        </div>
      </header>

      <nav className="border-b border-rule bg-paper no-print">
        <div className="max-w-6xl mx-auto px-5 py-5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-medium mb-3">
            Jump to
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {groups.map((g) => (
              <li key={g.id}>
                <a
                  href={`#${g.id}`}
                  className="text-foreground hover:text-accent underline-offset-2 hover:underline"
                >
                  {g.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <section className="border-b border-rule bg-accent-soft/60">
        <div className="max-w-6xl mx-auto px-5 py-8 md:py-10 grid md:grid-cols-12 gap-6">
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.18em] text-accent font-semibold mb-2">
              How to choose
            </p>
            <h2 className="font-serif text-xl md:text-2xl font-semibold tracking-tight leading-tight">
              Stack tools across categories.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-[0.9375rem] md:text-base text-foreground leading-relaxed">
              The most effective configurations combine one tool from each of three
              layers: a <strong>blocker or DNS filter</strong> to raise friction, a{" "}
              <strong>recovery program app</strong> to build the habit, and an{" "}
              <strong>accountability tool</strong> to add interpersonal stakes. Most
              users overshoot on blockers and under-invest in structure and
              accountability — flip the ratio.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 py-14 md:py-20 space-y-20">
        {groups.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <div className="grid md:grid-cols-12 gap-10 md:gap-16 mb-10">
              <div className="md:col-span-4">
                <span className="inline-block px-2 py-1 text-[10px] uppercase tracking-[0.18em] font-semibold border-l-2 bg-accent-soft border-accent text-accent mb-4">
                  {group.label}
                </span>
                <h2 className="font-serif text-3xl md:text-[2.25rem] font-semibold tracking-tight leading-tight">
                  {group.heading}
                </h2>
              </div>
              <div className="md:col-span-8">
                <p className="font-serif text-[1.0625rem] leading-[1.7] text-foreground">
                  {group.blurb}
                </p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 gap-px bg-rule border border-rule">
              {group.apps.map((app) => (
                <li
                  key={app.name}
                  className="bg-background p-6 md:p-7 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-3 mb-1.5">
                    <h3 className="font-serif text-lg md:text-xl font-semibold leading-tight">
                      {app.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-muted bg-paper border border-rule px-2 py-0.5 rounded shrink-0">
                      {app.pricing}
                    </span>
                  </div>
                  <p className="text-[11px] uppercase tracking-[0.12em] text-subtle font-medium mb-3">
                    {app.approach}
                  </p>
                  <p className="text-sm md:text-[0.9375rem] text-foreground leading-relaxed mb-4 flex-1">
                    {app.description}
                  </p>
                  {app.caveats && (
                    <p className="text-[0.8125rem] text-muted leading-snug mb-4 border-l-2 border-rule pl-3 italic">
                      {app.caveats}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {app.platforms.map((p) => (
                      <span
                        key={p}
                        className="text-[10px] uppercase tracking-wider font-medium text-muted bg-paper border border-rule px-1.5 py-0.5 rounded"
                      >
                        {platformLabel[p]}
                      </span>
                    ))}
                  </div>
                  <a
                    href={app.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-accent hover:underline underline-offset-2 mt-auto"
                  >
                    Visit website ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="border-t border-rule pt-14">
          <div className="max-w-3xl">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Notes on this directory
            </h2>
            <ul className="space-y-3 text-[1.0625rem] leading-relaxed font-serif">
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Inclusion is descriptive, not endorsement. Apps are listed because
                they exist, are operating, and have a clear use case — not because
                they have been clinically validated.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                Pricing and platform support change. The price column shows what
                the app advertised at the time of writing; check the website for
                current rates.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                iOS monitoring is significantly more restricted than Android due to
                Apple&apos;s privacy architecture, meaning every monitoring app
                performs worse on iPhones. This is the platform&apos;s constraint,
                not the apps&apos;.
              </li>
              <li className="pl-5 relative">
                <span
                  className="absolute left-0 top-3 w-2 h-px bg-subtle"
                  aria-hidden
                />
                For clinical context on accountability software, recovery apps, and
                the selection framework, see{" "}
                <Link
                  href="/report/technology"
                  className="text-accent underline underline-offset-2"
                >
                  Chapter 06: Technology Solutions
                </Link>
                .
              </li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              <Link
                href="/get-help"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                ← Crisis lines and recovery resources
              </Link>
              <Link
                href="/get-help/bay-area"
                className="text-sm text-accent hover:underline underline-offset-2"
              >
                Bay Area resources →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
