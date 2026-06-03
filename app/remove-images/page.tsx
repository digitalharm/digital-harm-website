import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Your Images Removed",
  description:
    "A step-by-step guide to removing intimate images that are online or being threatened — which free tool to use for your situation (Take It Down, StopNCII, Report Remove), how the on-device-hash privacy works, your 48-hour removal right under the TAKE IT DOWN Act, and the restitution survivors can claim.",
};

type Toc = { id: string; label: string };
const TOC: Toc[] = [
  { id: "which-tool", label: "Which tool is for you" },
  { id: "how-it-works", label: "How removal works" },
  { id: "your-right", label: "Your 48-hour right" },
  { id: "restitution", label: "Restitution & damages" },
  { id: "limits", label: "Honest limits" },
  { id: "help", label: "Get help" },
];

export default function RemoveImagesPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            Action guide
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            Get your images removed
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted">
            If an intimate image of you is online, or someone is threatening to
            share one, there are free services that can help take it down or stop
            it spreading — and the best ones work <strong>without you ever
            uploading the image.</strong> This guide routes you to the right one
            for your situation and walks the steps.
          </p>
          <div className="mt-6 rounded-lg border border-crisis/45 bg-crisis/5 p-4 text-[14px] leading-relaxed">
            <strong className="text-foreground">Being actively threatened or extorted?</strong>{" "}
            Start with the{" "}
            <Link href="/sextortion" className="text-accent underline underline-offset-2">sextortion survival guide</Link>{" "}
            first — don&apos;t pay, preserve evidence, report — then come back here
            to remove the image.
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 py-10">
        <nav className="mb-12 border border-rule rounded-lg p-4 bg-paper">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2.5">On this page</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px]">
            {TOC.map((s) => (
              <li key={s.id}><a href={`#${s.id}`} className="text-muted hover:text-foreground underline-offset-2 hover:underline">{s.label}</a></li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12 text-[15.5px] leading-relaxed text-foreground/90 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:break-words">
          <section id="which-tool" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Which tool is for you</h2>
            <p>Find the row that matches your situation:</p>
            <div className="not-prose space-y-3 mt-4">
              <ToolCard
                situation="The image is of someone who was UNDER 18"
                tool="Take It Down (NCMEC)"
                url="https://takeitdown.ncmec.org"
                detail="Free and anonymous. Works for an image of you taken when you were a minor — even if you are now an adult. Creates an on-device hash that participating platforms (Meta, TikTok, Snapchat, OnlyFans, Pornhub, X, and others) use to detect and block the image."
              />
              <ToolCard
                situation="The image is of an ADULT (18+), including AI deepfakes"
                tool="StopNCII.org"
                url="https://stopncii.org"
                detail="Free. Run by the UK Revenge Porn Helpline with Meta and other platforms. Same on-device-hash approach; covers non-consensual intimate images of adults, including AI-generated/deepfake images."
              />
              <ToolCard
                situation="You are a young person in the UK"
                tool="Report Remove (Childline + IWF)"
                url="https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/remove-nude-image-shared-online/"
                detail="Free service from Childline and the Internet Watch Foundation to report and remove nude images of under-18s in the UK."
              />
              <ToolCard
                situation="The imagery is part of known CSAM in circulation"
                tool="Project Arachnid + NCMEC CVIP"
                url="https://projectarachnid.ca"
                detail="Project Arachnid proactively detects and issues removal notices for known CSAM across the web; NCMEC's Child Victim Identification Program supports identified victims, including registering for notifications. Best pursued with survivor-support advocates (see below)."
              />
              <ToolCard
                situation="It's on a specific platform right now"
                tool="The platform's own NCII report flow"
                url="https://cybercivilrights.org/online-removal/"
                detail="Most major platforms have a dedicated non-consensual-intimate-imagery report channel, separate from general abuse reports. The Cyber Civil Rights Initiative maintains an up-to-date list and the most effective wording for each — often the fastest path for content visible on one site."
              />
            </div>
          </section>

          <section id="how-it-works" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">How removal works (and why it&apos;s private)</h2>
            <p>
              The hardest part for most people is the fear of having to send the
              image to someone. With Take It Down and StopNCII, <strong>you
              don&apos;t.</strong> Here is what actually happens:
            </p>
            <ol>
              <li>On your own device, you select the image. The tool computes a <strong>hash</strong> — a digital fingerprint, an irreversible string of numbers unique to that image.</li>
              <li>Only the <strong>hash</strong> is sent to the service — never the picture. The image stays on your device.</li>
              <li>Participating platforms compare new and existing uploads against that hash. When something matches, they can block or remove it.</li>
            </ol>
            <p>
              This is the same perceptual-hashing technology platforms use to detect
              known CSAM, turned to the survivor&apos;s benefit. If you want the
              technical detail, our{" "}
              <Link href="/for-developers" className="text-accent underline underline-offset-2">developer guide</Link>{" "}
              explains hashing in depth.
            </p>
          </section>

          <section id="your-right" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Your 48-hour removal right</h2>
            <p>
              In the United States, the <strong>TAKE IT DOWN Act</strong> (signed
              May 2025) gives you a legal right, not just a courtesy: covered
              platforms must remove a reported non-consensual intimate image —
              including AI deepfakes — within <strong>48 hours</strong> of a valid
              request, and must make reasonable efforts to remove copies. The
              Federal Trade Commission enforces it (platforms have until around May
              2026 to comply). If a platform ignores a valid request, that failure
              is itself something you can report to the FTC. See the{" "}
              <Link href="/laws" className="text-accent underline underline-offset-2">laws &amp; policy tracker</Link>{" "}
              for the details.
            </p>
          </section>

          <section id="restitution" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Restitution &amp; damages most survivors don&apos;t know about</h2>
            <p>
              If you are a survivor of CSAM, US law provides financial remedies that
              are widely under-claimed:
            </p>
            <ul>
              <li><strong>&quot;Masha&apos;s Law&quot; (18 U.S.C. § 2255)</strong> — a civil claim with a <strong>$150,000 statutory minimum</strong> in damages per defendant, for victims of child sexual exploitation.</li>
              <li><strong>Criminal restitution</strong> — under Paroline v. United States (2014), survivors whose images circulate can seek restitution from people convicted of possessing them.</li>
              <li><strong>DOJ Child Pornography Victims Reserve</strong> — a &quot;defined monetary assistance&quot; option (around $35,000, one-time) available through NCMEC&apos;s Child Victim Identification Program, without litigating each case.</li>
            </ul>
            <p>
              These are legal processes; an attorney experienced in this area (for
              example, the practitioners profiled for survivors, and the resources
              in our{" "}
              <Link href="/for-attorneys" className="text-accent underline underline-offset-2">attorneys guide</Link>) can advise on eligibility.
            </p>
          </section>

          <section id="limits" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Honest limits</h2>
            <p>
              You deserve the truth rather than false reassurance: once an image has
              spread widely — downloaded, re-shared in private channels, or hosted
              on sites that don&apos;t cooperate — <strong>no service can guarantee
              every copy is gone.</strong> What hash-matching takedowns, platform
              reports, and the new legal right <em>can</em> do is dramatically
              reduce its visibility and reach, block it from the major platforms,
              and stop most re-uploads. That is real and worth doing. The remaining
              difficulty is a property of the medium, not a failure on your part —
              and it does not define your future.
            </p>
          </section>

          <section id="help" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">Get help</h2>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 not-prose">
              <ul className="space-y-2 text-[14px] leading-relaxed list-none pl-0 [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2">
                <li><strong>Cyber Civil Rights Initiative helpline</strong> — 1-844-878-2274 (image abuse)</li>
                <li><strong>NCMEC</strong> — 1-800-843-5678 · <a href="https://report.cybertip.org" target="_blank" rel="noopener noreferrer">report.cybertip.org</a></li>
                <li><strong>RAINN</strong> — 1-800-656-HOPE</li>
                <li><strong>988</strong> — if you are in crisis, call or text 988 (US)</li>
              </ul>
            </div>
            <p className="mt-6 text-[14px] text-subtle">
              Related:{" "}
              <Link href="/sextortion" className="text-accent underline underline-offset-2">Sextortion survival guide</Link>{" · "}
              <Link href="/for-victims" className="text-accent underline underline-offset-2">For Survivors</Link>{" · "}
              <Link href="/organizations" className="text-accent underline underline-offset-2">Organization directory</Link>{" · "}
              <Link href="/laws" className="text-accent underline underline-offset-2">Laws &amp; policy</Link>
            </p>
            <p className="mt-3 text-[12px] text-subtle">
              Sources: NCMEC Take It Down, StopNCII.org, Childline/IWF Report
              Remove, Project Arachnid, the TAKE IT DOWN Act (2025), 18 U.S.C.
              §§ 2255 &amp; 2259. Last reviewed May 2026. Information, not legal advice.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}

function ToolCard({
  situation,
  tool,
  url,
  detail,
}: {
  situation: string;
  tool: string;
  url: string;
  detail: string;
}) {
  return (
    <div className="border border-rule rounded-lg p-4 bg-paper">
      <p className="text-[12px] uppercase tracking-[0.08em] text-subtle font-semibold mb-1">
        {situation}
      </p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="font-serif text-[1.125rem] font-semibold text-accent underline underline-offset-2">
        {tool} ↗
      </a>
      <p className="text-[13.5px] text-foreground/90 leading-snug mt-1.5">{detail}</p>
    </div>
  );
}
