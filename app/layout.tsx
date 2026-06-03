import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContentNotice } from "@/components/content-notice";
import { QuickExit } from "@/components/quick-exit";
import { JsonLd } from "@/components/jsonld";
import { organizationSchema, websiteSchema } from "@/lib/seo/schema";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Digital Harm Project — Pornography, CSAM, and Protective Technologies",
    template: "%s — The Digital Harm Project",
  },
  description:
    "A comprehensive research review of pornography addiction, escalation to child sexual abuse material, AI-generated content, therapeutic interventions, and protective technologies.",
  metadataBase: new URL("https://digitalharm.org"),
  openGraph: {
    title: "The Digital Harm Project",
    description:
      "Research review of pornography exposure, addiction, CSAM, AI-generated content, and the technologies and treatments that protect against them.",
    type: "article",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Site-wide structured data: publisher identity + search box. */}
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-foreground focus:text-background focus:px-3 focus:py-2 focus:rounded-md focus:text-sm"
        >
          Skip to content
        </a>
        <ContentNotice />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <QuickExit />
      </body>
    </html>
  );
}
