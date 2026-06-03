import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sextortion: A Survival Guide",
  description:
    "If someone is threatening to share your intimate images unless you pay or send more — you are not alone, it is not your fault, and there is a clear way out. The exact steps to take right now, how to get images removed, and where to get help. Built on FBI and NCMEC guidance.",
};

type TocItem = { id: string; label: string };
const TOC: TocItem[] = [
  { id: "right-now", label: "What to do right now" },
  { id: "not-your-fault", label: "It is not your fault" },
  { id: "remove", label: "Get the images removed" },
  { id: "report", label: "Report it" },
  { id: "how-it-works", label: "How the scam works" },
  { id: "parents", label: "For parents" },
  { id: "help", label: "Crisis help" },
];

export default function SextortionPage() {
  return (
    <article className="bg-background">
      <header className="border-b border-rule">
        <div className="max-w-3xl mx-auto px-5 pt-12 pb-10 md:pt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent mb-4">
            Survival guide
          </p>
          <h1 className="font-serif font-semibold text-[2.25rem] md:text-[3rem] leading-[1.03] tracking-[-0.02em] mb-5">
            Sextortion: what to do right now
          </h1>
          <p className="font-serif text-[1.1875rem] leading-snug text-muted">
            Someone is threatening to share your private images unless you pay
            money or send more. Take a breath. This is a crime being committed
            against you, it happens to thousands of people, and there is a clear
            way through it. You will get past this.
          </p>
          <div className="mt-6 rounded-lg border border-crisis/45 bg-crisis/5 p-4 text-[14px] leading-relaxed">
            <p className="font-semibold text-foreground mb-2">The three rules, before anything else:</p>
            <ol className="list-decimal pl-5 space-y-2 mb-0 marker:font-semibold marker:text-foreground">
              <li><strong>Don&apos;t pay.</strong> Paying almost never makes it stop — it signals you&apos;ll pay again.</li>
              <li><strong>Stop responding</strong> to the blackmailer, but <strong>don&apos;t delete anything</strong> — you&apos;ll need it to report.</li>
              <li><strong>Tell someone</strong> and report it (below). If you&apos;re a minor, tell a trusted adult — you will not be in trouble.</li>
            </ol>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-5 py-10">
        <nav className="mb-12 border border-rule rounded-lg p-4 bg-paper">
          <p className="text-[10px] uppercase tracking-[0.18em] text-subtle font-semibold mb-2.5">
            On this page
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-[13.5px]">
            {TOC.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-muted hover:text-foreground underline-offset-2 hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-12 text-[15.5px] leading-relaxed text-foreground/90 [&_ul]:space-y-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:space-y-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_a]:break-words">
          <section id="right-now" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
              What to do right now
            </h2>
            <p>Follow these steps in order. They come from the FBI and NCMEC.</p>
            <ol>
              <li><strong>Stop all contact with the blackmailer.</strong> Don&apos;t reply, don&apos;t negotiate, don&apos;t threaten back. Engagement is what they want.</li>
              <li><strong>Do not pay</strong> — and if you already paid, stop. Compliance tends to escalate demands, not end them.</li>
              <li><strong>Don&apos;t delete the account or the messages.</strong> Before you block, take screenshots of the threats, the username, the profile, and any payment requests. This evidence is what lets platforms and law enforcement act. (Screenshot the <em>conversation</em> — you never need to keep the intimate image itself.)</li>
              <li><strong>Block the person</strong> on every app once you&apos;ve captured the evidence.</li>
              <li><strong>Report it</strong> — to the platform, to NCMEC, and to the FBI (see below).</li>
              <li><strong>Start a removal</strong> for any image that may be circulating (see below).</li>
              <li><strong>Tell someone you trust</strong> and don&apos;t go through it alone. If you&apos;re feeling hopeless, reach a crisis line now — call or text <strong>988</strong> (US).</li>
            </ol>
          </section>

          <section id="not-your-fault" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
              It is not your fault
            </h2>
            <p>
              Sextortionists are organized criminals who do this at scale, often
              from overseas, using practiced scripts designed to make you panic and
              act before you think. Being targeted does not make you foolish or to
              blame — the person threatening you is the one committing a crime.
            </p>
            <p>
              This is also one of the most common online crimes there is. NCMEC
              received <strong>more than 546,000 reports of online enticement,
              including sextortion, in 2024</strong> — roughly a threefold increase
              over the prior year — and that figure rose again in 2025. You are very
              far from alone, and the people you report to have seen this many times
              before.
            </p>
            <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 not-prose">
              <p className="font-semibold text-foreground text-[14.5px] mb-1.5">If you&apos;re a teenager reading this</p>
              <p className="text-[14px] leading-relaxed text-foreground/90 mb-0">
                Telling a parent feels like the scariest part — it is almost always
                the thing that ends it fastest. A good adult will be glad you told
                them and will help. You will not be in trouble for being the victim
                of a crime. The shame the blackmailer is counting on is exactly what
                loses its power the moment you tell someone.
              </p>
            </div>
          </section>

          <section id="remove" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
              Get the images removed
            </h2>
            <p>
              Free services can help stop an image from spreading — and crucially,
              <strong> they work without you ever uploading the image.</strong> Your
              device creates a digital fingerprint (a “hash”) of the image; only that
              fingerprint is shared with participating platforms, which use it to
              detect and block matches. The picture never leaves your phone.
            </p>
            <ul>
              <li><strong>Take It Down (NCMEC)</strong> — for images of someone who was <strong>under 18</strong> when the image was taken. Free and anonymous. <a href="https://takeitdown.ncmec.org" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">takeitdown.ncmec.org</a></li>
              <li><strong>StopNCII.org</strong> — for <strong>adults</strong> (18+), including AI-generated/deepfake images. Run by the UK Revenge Porn Helpline with Meta and other platforms. <a href="https://stopncii.org" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">stopncii.org</a></li>
              <li><strong>Report Remove (UK)</strong> — for under-18s in the UK, run by Childline and the IWF. <a href="https://www.childline.org.uk/info-advice/bullying-abuse-safety/online-mobile-safety/remove-nude-image-shared-online/" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">childline.org.uk</a></li>
            </ul>
            <p>
              A new US law, the <strong>TAKE IT DOWN Act</strong> (signed May 2025),
              also requires covered platforms to remove reported non-consensual
              intimate images — including AI deepfakes — within <strong>48 hours</strong>,
              enforced by the FTC. If a platform ignores a valid request, that
              non-compliance is itself reportable. Be honest with yourself about the
              limits, too: once an image has spread widely, hash-matching and
              takedowns sharply reduce its visibility but can&apos;t guarantee every
              copy is gone. That is not your failure — it is the nature of the medium,
              and it does not diminish the steps worth taking.
            </p>
            <p>
              For a step-by-step walkthrough of which removal tool fits your exact
              situation — and the restitution survivors can claim — see our{" "}
              <Link href="/remove-images" className="text-accent underline underline-offset-2">image-removal guide</Link>.
              The legal right behind that 48-hour deadline is tracked on the{" "}
              <Link href="/laws" className="text-accent underline underline-offset-2">laws &amp; policy page</Link>, and the{" "}
              <Link href="/organizations" className="text-accent underline underline-offset-2">organization directory</Link>{" "}
              lists groups that can help you directly.
            </p>
          </section>

          <section id="report" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
              Report it
            </h2>
            <ul>
              <li><strong>NCMEC CyberTipline</strong> — <a href="https://report.cybertip.org" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">report.cybertip.org</a> or 1-800-843-5678. Routes to law enforcement and the platforms.</li>
              <li><strong>FBI</strong> — <a href="https://tips.fbi.gov" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">tips.fbi.gov</a> or 1-800-CALL-FBI. The FBI treats financial sextortion of minors as a serious, actively-investigated crime.</li>
              <li><strong>The platform</strong> where it happened — every major app has a dedicated report flow for threats and intimate-image abuse. Report the account before you block it.</li>
              <li>Outside the US: your national hotline via <a href="https://www.inhope.org/EN/our-members" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">INHOPE</a>, or see our <Link href="/for-reporting" className="text-accent underline underline-offset-2">reporting guide</Link>.</li>
            </ul>
            <p>You do not have to be certain a crime occurred to report. Reporting agencies would far rather receive a report that turns out to be nothing than miss one that wasn&apos;t.</p>
          </section>

          <section id="how-it-works" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
              How the scam works (so you can spot it)
            </h2>
            <p>
              <strong>Financial sextortion</strong> — the fastest-growing form, which
              disproportionately targets teenage boys — usually runs a predictable
              arc: a stranger (often posing as a peer or an attractive young woman)
              starts a friendly or flirtatious chat on a social or gaming platform,
              quickly moves it to a more private app, persuades the target to send a
              nude or sexual image, and then immediately turns hostile: pay now, or
              the image goes to your family, your followers, your school. The whole
              cycle can take less than an hour. The accounts are frequently run by
              organized crime networks.
            </p>
            <p>
              Knowing the pattern is itself protection: a new “friend” who moves fast,
              pushes for images, and then pivots to threats is running this script.
              The same response applies no matter how far it has gone — stop, don&apos;t
              pay, preserve, report.
            </p>
          </section>

          <section id="parents" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
              For parents
            </h2>
            <p>
              If your child is being sextorted, your first words matter enormously:
              lead with “I&apos;m glad you told me, we&apos;ll handle this together,
              you&apos;re not in trouble.” Then work the steps above with them — don&apos;t
              pay, preserve evidence, block, report, remove. Watch for signs a child
              is being targeted but hasn&apos;t said anything: sudden secrecy or panic
              around a device, withdrawal, or out-of-the-blue requests for money or
              gift cards.
            </p>
            <p>
              The shame around sextortion can feel unbearable to a teen, and it has
              been linked to youth suicide — take any expression of hopelessness
              seriously and stay close. Our{" "}
              <Link href="/for-parents" className="text-accent underline underline-offset-2">guide for parents</Link>{" "}
              covers the prevention conversation in depth.
            </p>
          </section>

          <section id="help" className="scroll-mt-20">
            <h2 className="font-serif text-[1.625rem] md:text-[1.875rem] font-semibold tracking-tight mb-4">
              Crisis help
            </h2>
            <div className="rounded-lg border border-crisis/45 bg-crisis/5 p-4 not-prose">
              <ul className="space-y-2 text-[14px] leading-relaxed [&_a]:text-accent [&_a]:underline [&_a]:underline-offset-2 list-none pl-0">
                <li><strong>988 Suicide &amp; Crisis Lifeline (US)</strong> — call or text 988, 24/7. If you feel hopeless, reach out before doing anything else.</li>
                <li><strong>NCMEC</strong> — 1-800-843-5678 · <a href="https://report.cybertip.org" target="_blank" rel="noopener noreferrer">report.cybertip.org</a></li>
                <li><strong>Crisis Text Line</strong> — text HOME to 741741 (US)</li>
                <li><strong>Cyber Civil Rights Initiative helpline</strong> — 1-844-878-2274 (image abuse)</li>
              </ul>
            </div>
            <p className="mt-6 text-[14px] text-subtle">
              Related:{" "}
              <Link href="/for-victims" className="text-accent underline underline-offset-2">For Survivors</Link>{" · "}
              <Link href="/for-parents" className="text-accent underline underline-offset-2">For Parents</Link>{" · "}
              <Link href="/for-reporting" className="text-accent underline underline-offset-2">Where to report</Link>{" · "}
              <Link href="/csam-statistics" className="text-accent underline underline-offset-2">The statistics</Link>
            </p>
            <p className="mt-3 text-[12px] text-subtle">
              Sources: FBI and NCMEC sextortion guidance; NCMEC CyberTipline data
              (2024–2025). Last reviewed May 2026. This page is information, not legal
              advice.
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
