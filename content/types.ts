export type Locale = "en" | "es" | "zh";

export const LOCALES: { code: Locale; label: string; nativeLabel: string }[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "es", label: "Spanish", nativeLabel: "Español" },
  { code: "zh", label: "Chinese", nativeLabel: "中文" },
];

export const DEFAULT_LOCALE: Locale = "en";

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "es" || value === "zh";
}

export type Block =
  | { type: "p"; html: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "stat"; figure: string; label: string; source?: string }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { type: "list"; items: string[] }
  | {
      type: "callout";
      tone?: "info" | "warning" | "crisis";
      title?: string;
      html: string;
    };

export type Section = {
  id: string;
  heading: string;
  blocks: Block[];
  // Optional "leadership/contacts verified as of" stamp for perishable
  // content (e.g. the platform-safety-orgs org chart). Display string like
  // "May 2026". Rendered as a small dated badge in the section header.
  verified?: string;
};

export type Chapter = {
  slug: string;
  number: string;
  title: string;
  dek: string;
  readingMinutes: number;
  sections: Section[];
};

export type HelpResource = {
  name: string;
  region: string;
  description: string;
  contact?: string;
  url?: string;
  cost?: string;
};

export type HelpGroup = {
  id: string;
  label: string;
  tone: "info" | "warning" | "crisis";
  heading: string;
  blurb: string;
  resources: HelpResource[];
};

export type BayAreaResource = {
  name: string;
  region: string;
  description: string;
  address?: string;
  contacts?: string[];
  url?: string;
  cost?: string;
  featured?: boolean;
};

export type BayAreaGroup = {
  id: string;
  label: string;
  tone: "info" | "warning" | "crisis";
  heading: string;
  blurb: string;
  resources: BayAreaResource[];
};

export type Platform =
  | "iOS"
  | "Android"
  | "macOS"
  | "Windows"
  | "ChromeOS"
  | "Web"
  | "Hardware";

export type App = {
  name: string;
  approach: string;
  description: string;
  platforms: Platform[];
  pricing: string;
  url: string;
  caveats?: string;
  featured?: boolean;
};

export type AppGroup = {
  id: string;
  label: string;
  heading: string;
  blurb: string;
  apps: App[];
};
