import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organization Directory",
  description:
    "A who's-who of the organizations working against child sexual abuse material and online exploitation — reporting hotlines, detection-technology providers, investigative bodies, research institutes, perpetration-prevention helplines, policy alliances, and survivor support — mapped by what each one does and how to reach it.",
};

type Org = {
  name: string;
  region: string;
  what: string;
  reach: string;
  url: string;
};

type OrgGroup = { id: string; heading: string; intro: string; orgs: Org[] };

const GROUPS: OrgGroup[] = [
  {
    id: "report",
    heading: "Reporting hotlines & clearinghouses",
    intro: "Where to report CSAM or exploitation. If you don't know or trust the platform, report straight to one of these.",
    orgs: [
      { name: "NCMEC CyberTipline", region: "US / global", what: "The US congressionally-mandated clearinghouse; routes reports to law enforcement and platforms. Also runs Take It Down and the Child Victim Identification Program.", reach: "report.cybertip.org · 1-800-843-5678", url: "https://report.cybertip.org" },
      { name: "Internet Watch Foundation (IWF)", region: "UK / global", what: "Finds, assesses, and removes CSAM worldwide via notice-and-takedown; publishes the field's leading threat data and licenses hash lists to industry.", reach: "iwf.org.uk", url: "https://www.iwf.org.uk" },
      { name: "Cybertip.ca (C3P)", region: "Canada", what: "Canada's national tipline, operated by the Canadian Centre for Child Protection.", reach: "cybertip.ca", url: "https://www.cybertip.ca" },
      { name: "INHOPE", region: "Global network", what: "The network of 50+ national hotlines across 50+ countries; in-network removal averages ~1.4 days vs ~41 days out-of-network. Find your country's hotline here.", reach: "inhope.org", url: "https://www.inhope.org" },
      { name: "FBI", region: "US", what: "Investigates online child exploitation, including financial sextortion of minors.", reach: "tips.fbi.gov · 1-800-CALL-FBI", url: "https://tips.fbi.gov" },
    ],
  },
  {
    id: "detection",
    heading: "Detection-technology providers",
    intro: "The technology that finds CSAM at scale — hash-matching for known content, classifiers for novel content, and cross-platform signal-sharing.",
    orgs: [
      { name: "Thorn (Safer)", region: "US / global", what: "Builds Safer, a CSAM hash-matching + AI-classifier product used by 60+ platforms; co-authored the 'Safety by Design for Generative AI' industry standard. Runs NoFiltr youth education.", reach: "thorn.org · safer.io", url: "https://www.thorn.org" },
      { name: "Technology Coalition (Lantern)", region: "Industry alliance", what: "Runs Lantern, the first cross-platform signal-sharing program (hashes, keywords, URLs) so an offender pushed off one platform is detectable on the next.", reach: "technologycoalition.org", url: "https://www.technologycoalition.org" },
      { name: "Project Arachnid (C3P)", region: "Canada / global", what: "Proactively crawls the open web for known CSAM and issues removal notices at scale (tens of millions issued since 2017).", reach: "projectarachnid.ca", url: "https://projectarachnid.ca" },
      { name: "Microsoft PhotoDNA", region: "Global", what: "The original perceptual-hashing technology for detecting known CSAM, licensed widely to platforms and NGOs.", reach: "microsoft.com/photodna", url: "https://www.microsoft.com/en-us/photodna" },
    ],
  },
  {
    id: "prevention",
    heading: "Perpetration prevention & help-seeking",
    intro: "Confidential help for people worried about their own thoughts or behavior toward children — the demand-side lever. Attraction is distinct from offending; viewing CSAM harms a real child every time, and these services exist to stop harm before it happens.",
    orgs: [
      { name: "Lucy Faithfull Foundation / Stop It Now (UK)", region: "UK / Ireland", what: "The world's leading perpetration-prevention helpline; confidential, anonymous support for people concerned about their own or another's behavior.", reach: "Stop It Now UK: 0808 1000 900", url: "https://www.stopitnow.org.uk" },
      { name: "Stop It Now (USA)", region: "US", what: "US confidential helpline for people concerned about child sexual abuse, including their own thoughts.", reach: "1-888-773-8368", url: "https://stopitnow.org" },
      { name: "Prevention Project Dunkelfeld / Troubled Desire", region: "Germany / global", what: "Pioneering anonymous treatment for people attracted to minors who have not offended; Troubled Desire is its self-help web tool, available globally.", reach: "troubled-desire.com", url: "https://troubled-desire.com" },
      { name: "Moore Center 'Help Wanted' (Johns Hopkins)", region: "US", what: "Anonymous online prevention course for young people attracted to minors, led by Elizabeth Letourneau; built on the principle that attraction does not doom a person to offend.", reach: "moore.jhu.edu", url: "https://moore.jhu.edu" },
      { name: "ReDirection (Protect Children, Finland)", region: "Finland / global", what: "Anonymous self-help program for dark-web CSAM users; 26,000+ survey responses and tens of thousands of program sessions, with most users reporting reduced or ceased use.", reach: "suojellaanlapsia.fi", url: "https://www.suojellaanlapsia.fi/en/redirection" },
    ],
  },
  {
    id: "research-policy",
    heading: "Research, policy & standards",
    intro: "The bodies that produce the evidence base, set terminology, and coordinate the global response.",
    orgs: [
      { name: "WeProtect Global Alliance", region: "Global", what: "Multistakeholder alliance of governments, companies, and civil society; publishes the Global Threat Assessment and the Model National Response framework.", reach: "weprotect.org", url: "https://www.weprotect.org" },
      { name: "ECPAT International", region: "Global", what: "Network against the sexual exploitation of children; author of the Luxembourg Guidelines, the authority on survivor-centered terminology ('CSAM,' not 'child pornography').", reach: "ecpat.org", url: "https://ecpat.org" },
      { name: "Childlight (University of Edinburgh)", region: "Global / academic", what: "Global child-safety data institute; its 'Into the Light Index' (2024) estimated ~302 million children affected by online sexual abuse/exploitation in a year.", reach: "childlight.org", url: "https://childlight.org" },
      { name: "INTERPOL (ICSE database)", region: "Global / law enforcement", what: "Runs the International Child Sexual Exploitation database used by police worldwide to identify victims and offenders across borders.", reach: "interpol.int", url: "https://www.interpol.int/Crimes/Crimes-against-children" },
      { name: "Stanford Internet Observatory", region: "US / academic", what: "Research on platform abuse and CSAM, including the LAION-5B dataset finding and careful analysis of how CyberTipline data is (mis)interpreted.", reach: "cyber.fsi.stanford.edu", url: "https://cyber.fsi.stanford.edu/publication/how-fix-online-child-exploitation-reporting-system" },
    ],
  },
  {
    id: "survivor",
    heading: "Survivor support & image removal",
    intro: "Services for victims and survivors of CSAM and image-based abuse.",
    orgs: [
      { name: "Take It Down (NCMEC)", region: "Global", what: "Free service to remove or stop the spread of nude/sexual images of someone who was under 18, using on-device hashing — the image never leaves your device.", reach: "takeitdown.ncmec.org", url: "https://takeitdown.ncmec.org" },
      { name: "StopNCII.org", region: "Global", what: "The equivalent for adults (18+), including AI deepfakes; run by the UK Revenge Porn Helpline with platform partners.", reach: "stopncii.org", url: "https://stopncii.org" },
      { name: "Cyber Civil Rights Initiative (CCRI)", region: "US", what: "Support and a crisis helpline for victims of non-consensual intimate imagery; maintains platform-removal guidance.", reach: "1-844-878-2274 · cybercivilrights.org", url: "https://cybercivilrights.org" },
      { name: "RAINN", region: "US", what: "The largest US anti-sexual-violence organization; operates the National Sexual Assault Hotline.", reach: "1-800-656-HOPE · rainn.org", url: "https://www.rainn.org" },
    ],
  },
];

export default function OrganizationsPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-4xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            Reference
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            Organization directory
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted max-w-2xl">
            Who&apos;s who in child protection online — grouped by what each
            organization actually does, with how to reach or report to each. The
            map of the ecosystem, in one place.
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-[13px]">
            {GROUPS.map((g) => (
              <a key={g.id} href={`#${g.id}`} className="text-muted hover:text-foreground underline-offset-2 hover:underline">
                {g.heading}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-5 py-10 space-y-14">
        {GROUPS.map((group) => (
          <section key={group.id} id={group.id} className="scroll-mt-20">
            <h2 className="font-serif text-2xl md:text-[1.75rem] font-semibold tracking-tight mb-2">
              {group.heading}
            </h2>
            <p className="text-[14px] text-muted leading-relaxed max-w-2xl mb-6">
              {group.intro}
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {group.orgs.map((org) => (
                <li key={org.name} className="border border-rule rounded-lg p-4 bg-paper flex flex-col">
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <h3 className="font-serif text-[1.0625rem] font-semibold text-foreground leading-tight">
                      {org.name}
                    </h3>
                  </div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-subtle mb-2">{org.region}</p>
                  <p className="text-[13.5px] text-foreground/90 leading-snug flex-1">{org.what}</p>
                  <p className="text-[12px] text-muted mt-2.5">{org.reach}</p>
                  <a href={org.url} target="_blank" rel="noopener noreferrer" className="text-[12px] text-accent underline underline-offset-2 mt-1">
                    Visit ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="border-t border-rule pt-8">
          <p className="text-[13px] text-muted leading-relaxed">
            Related:{" "}
            <Link href="/for-reporting" className="text-accent underline underline-offset-2">Where to report (114 platforms)</Link>{" · "}
            <Link href="/prevention" className="text-accent underline underline-offset-2">Prevention</Link>{" · "}
            <Link href="/remove-images" className="text-accent underline underline-offset-2">Get images removed</Link>{" · "}
            <Link href="/csam-statistics" className="text-accent underline underline-offset-2">The statistics</Link>
          </p>
          <p className="mt-3 text-[12px] text-subtle">Last reviewed May 2026. Contact details change; verify via each organization&apos;s site.</p>
        </section>
      </div>
    </article>
  );
}
