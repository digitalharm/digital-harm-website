import type { Chapter } from "@/content/types";
export type { Block, Section, Chapter } from "@/content/types";

export const chapters: Chapter[] = [
  {
    slug: "exposure",
    number: "01",
    title: "Early Pornography Exposure",
    dek: "Average age of first exposure is now 12–13. Cumulative exposure during adolescence accelerates sharply, and a large share is accidental rather than sought.",
    readingMinutes: 7,
    sections: [
      {
        id: "age-of-first-exposure",
        heading: "Age of first exposure",
        blocks: [
          {
            type: "p",
            html: "The average age of first pornography exposure has become a consistent finding across multiple large-scale studies. A 2022 survey by the Benenson Strategy Group of 1,358 U.S. teenagers found the average age of first exposure to be 12 years, with 54% of respondents having seen pornography by age 13 and 15% before age 11 (<a href='https://acpeds.org/the-impact-of-pornography-on-children/'>American College of Pediatricians</a>). The American Psychological Association reported a slightly higher average of 13.37 years, with a range extending down to age 5 (<a href='https://www.apa.org/news/press/releases/2017/08/pornography-exposure'>APA</a>). A major Australian study by Crabbe, Flood, and Adams (2024) found gender-differentiated patterns: boys averaged first exposure at 13.2 years compared to 14.1 years for girls (<a href='https://bravehearts.org.au/wp-content/uploads/2025/09/The-Impact-of-Pornography_Briefing-Paper-062025.pdf'>Bravehearts</a>).",
          },
          {
            type: "p",
            html: "Cumulative exposure data reveals the accelerating pace of exposure during early adolescence. By age 10, 5.7% of boys and 4.4% of girls had viewed online pornography. By age 14, more than half of boys (52.2%) and nearly a third of girls (32.5%) had been exposed (<a href='https://bravehearts.org.au/wp-content/uploads/2025/09/The-Impact-of-Pornography_Briefing-Paper-062025.pdf'>Bravehearts</a>). Notably, accidental exposure accounts for a significant share — the APA found that 43.5% of male first exposures were accidental, while the Benenson survey found 58% of teens encountered pornography online unintentionally and 44% accessed it on a school-issued device (<a href='https://acpeds.org/the-impact-of-pornography-on-children/'>American College of Pediatricians</a>).",
          },
          {
            type: "stat",
            figure: "44%",
            label: "of U.S. teens accessed pornography on a school-issued device",
            source: "Benenson Strategy Group, 2022",
          },
        ],
      },
      {
        id: "psychological-neurological",
        heading: "Psychological and neurological effects",
        blocks: [
          {
            type: "p",
            html: "The psychological consequences of early pornography exposure are wide-ranging and age-dependent. Pre-adolescent children exhibit immediate distress responses including anxiety, disgust, shock, and fear, with some developing obsessive behaviors around acting out sexual content. Among adolescents, a landmark NIH systematic review by Mestre-Bach and Potenza (2025), encompassing 44 longitudinal studies, found that higher baseline pornography consumption predicted psychosomatic symptoms at follow-up, while intentional pornography use was linked to poorer psychological well-being and lower life satisfaction (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC12223668/'>NIH Systematic Review</a>). Academic performance also suffers: Beyens et al. (2015) documented that increased pornography use was associated with declining academic performance in boys over a six-month period.",
          },
          {
            type: "p",
            html: "The association between pornography exposure and sexual aggression is particularly concerning. Ybarra et al. (2011) found that repeated intentional exposure to violent pornography was associated with a nearly sixfold increase in the likelihood of self-reported sexually aggressive behavior, consistent for both boys and girls (<a href='https://acpeds.org/the-impact-of-pornography-on-children/'>American College of Pediatricians</a>). Children under 12 who viewed pornography were statistically more likely to sexually assault peers.",
          },
          {
            type: "p",
            html: "From a neurological perspective, adolescent brains are uniquely vulnerable. Dr. Valerie Voon's 2014 Cambridge University research demonstrated that younger subjects showed enhanced reward circuit activity when exposed to pornography, indicating higher dopamine spikes and greater reward sensitivity than adults (<a href='https://neurosciencenews.com/psychology-addiction-triggers-neuroimaging-1179/'>Neuroscience News</a>). The landmark Kühn and Gallinat (2014) JAMA Psychiatry study of 64 healthy adult males found a significant negative correlation between pornography consumption and gray matter volume in the right caudate nucleus (r = −0.432), reduced putamen activation during sexual cue-reactivity, and lower functional connectivity between the reward system and dorsolateral prefrontal cortex — changes paralleling those documented in cocaine and alcohol addiction (<a href='https://jamanetwork.com/journals/jamapsychiatry/fullarticle/1874574'>JAMA Psychiatry</a>). A 2025 fNIRS study further found that high-frequency pornography viewers showed functional connectivity patterns &ldquo;strikingly similar to those observed in schizophrenia&rdquo; (<a href='https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2025.1477914/full'>Frontiers in Human Neuroscience</a>).",
          },
        ],
      },
      {
        id: "prevalence-trends",
        heading: "Prevalence and trends",
        blocks: [
          {
            type: "p",
            html: "Nationally representative studies from the United States, Canada, and Europe estimate that 63–68% of adolescents report lifetime pornography use (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC8773393/'>Archives of Sexual Behavior</a>). A 2022 Benenson survey found 73% of U.S. teens had consumed pornography, 67% of girls had intentionally sought it out, and 52% had seen violent or aggressive content depicted.",
          },
          {
            type: "p",
            html: "The concerning prevalence of extreme content exposure is noteworthy: 39% of boys and 23% of girls reported seeing scenes of sexual bondage online, while 15% of boys and 9% of girls reported seeing child pornography online (<a href='https://acpeds.org/the-impact-of-pornography-on-children/'>American College of Pediatricians</a>). Mobile devices now account for approximately 90% of pornography consumption among minors (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC12515835/'>Frontiers in Child and Adolescent Psychiatry</a>).",
          },
        ],
      },
    ],
  },
  {
    slug: "addiction",
    number: "02",
    title: "Pornography Addiction Pathways",
    dek: "Internet pornography activates the same reward circuitry as substance addiction. The ICD-11 formally recognizes Compulsive Sexual Behaviour Disorder, with 3–17% of users meeting criteria for problematic use.",
    readingMinutes: 8,
    sections: [
      {
        id: "neurobiology",
        heading: "Neurobiology of addiction",
        blocks: [
          {
            type: "p",
            html: "Internet pornography addiction follows the same neurobiological pathways as substance addiction. Love, Laier, Brand, Hatch, and Hajela (2015), in a comprehensive review published in <em>Behavioral Sciences</em>, synthesized the neurobiological evidence, demonstrating that sexual stimuli activate the mesolimbic dopamine pathway — the same reward circuitry that all drugs of abuse target (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC4600144/'>Behavioral Sciences</a>). Internet pornography may function as a &ldquo;supranormal stimulus,&rdquo; overriding evolutionarily developed reward systems by offering virtually unlimited sexual novelty, rendering real-world experiences comparatively less stimulating.",
          },
          {
            type: "p",
            html: "The Cambridge University study by Voon et al. (2014) is particularly significant. Compulsive sexual behavior subjects showed greater activation in the ventral striatum, dorsal anterior cingulate, and amygdala in response to sexually explicit videos — the same regions activated in drug addicts viewing drug stimuli. Critically, these subjects reported higher desire (&ldquo;wanting&rdquo;) for pornographic content but did not rate it higher on &ldquo;liking&rdquo; — a wanting-liking dissociation that is a signature feature of addiction (<a href='https://neurosciencenews.com/psychology-addiction-triggers-neuroimaging-1179/'>Neuroscience News</a>).",
          },
          {
            type: "p",
            html: "The molecular cascade underlying tolerance involves CREB-mediated dynorphin release that raises reward thresholds, and the accumulation of DeltaFosB — a transcription factor termed &ldquo;the molecular switch&rdquo; that persists for weeks to months and promotes compulsive use and relapse vulnerability. Volkow's three-stage addiction model — binge/intoxication, withdrawal/negative affect, and preoccupation/craving — maps directly onto clinical observations of pornography addiction progression.",
          },
        ],
      },
      {
        id: "diagnostic-classification",
        heading: "Diagnostic classification (ICD-11, DSM-5)",
        blocks: [
          {
            type: "p",
            html: "The World Health Organization formally included Compulsive Sexual Behaviour Disorder (CSBD) in the ICD-11 under code 6C72, classified as an Impulse Control Disorder. The diagnostic criteria specify a persistent pattern (6+ months) of failure to control intense, repetitive sexual impulses, with sexual activities becoming a central focus to the point of neglecting health and responsibilities, despite adverse consequences and diminishing satisfaction (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC5775124/'>World Psychiatry</a>).",
          },
          {
            type: "p",
            html: "Importantly, distress arising entirely from moral judgments about sexual behavior is explicitly insufficient for diagnosis — a provision addressing research by Grubbs et al. (2020) showing that significant self-reported &ldquo;pornography addiction&rdquo; is driven by moral incongruence rather than clinical compulsivity (<a href='https://journals.sagepub.com/doi/10.1177/2167702620922966'>Clinical Psychological Science</a>).",
          },
          {
            type: "p",
            html: "The American Psychiatric Association's DSM-5 does not include CSBD or pornography addiction as a standalone diagnosis, though &ldquo;Hypersexual Disorder&rdquo; was proposed and rejected in 2013. Researchers have noted a tension in the ICD-11 classification: as an Impulse Control Disorder, behavior should be &ldquo;rewarding to the person,&rdquo; yet CSBD criteria note that individuals engage in behaviors &ldquo;deriving little or no satisfaction&rdquo; — a contradiction that better fits the addiction model, particularly later-stage addiction in which compulsion replaces pleasure (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC9295218/'>Journal of Behavioral Addictions</a>).",
          },
        ],
      },
      {
        id: "prevalence-problematic-use",
        heading: "Prevalence of problematic use",
        blocks: [
          {
            type: "p",
            html: "The largest and most methodologically rigorous prevalence study is the International Sex Survey spanning 42 countries: 3.2% of participants met risk criteria for problematic pornography use (PPU) based on the Problematic Pornography Consumption Scale, with an estimated range of 3.2–16.6% across countries (<a href='https://saillab.ca/wp-content/uploads/2024/04/Addiction-2024-Bothe-Problematic-pornography-use-across-countries-genders-and-sexual-orientations-Insights-from.pdf'>Addiction</a>).",
          },
          {
            type: "p",
            html: "Among those with PPU, only 4–10% had ever sought treatment, while an additional 21–37% wanted help but did not seek it, primarily due to cost barriers. More restrictive, clinically-grounded estimates tend toward 2–10%, with wide prevalence ranges reflecting differences in measurement instruments, whether moral incongruence is accounted for, and population demographics.",
          },
          {
            type: "stat",
            figure: "4–10%",
            label: "of people meeting criteria for problematic pornography use have ever sought treatment",
            source: "International Sex Survey, 42 countries",
          },
        ],
      },
      {
        id: "escalation-patterns",
        heading: "Escalation patterns",
        blocks: [
          {
            type: "p",
            html: "A 2024 network analysis by Ince et al. across two independent male samples identified quantitative tolerance — escalating time required for satisfaction — as the most central node in escalation networks, statistically bridging other use patterns (binges, genre escalation, tab-jumping, edging) to all measured facets of PPU (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC7616041/'>Addictive Behaviors</a>).",
          },
          {
            type: "p",
            html: "Qualitative escalation — progression to more extreme content — is distinct but interconnected through the tolerance mechanism. The physiological impact is documented: 60% of young compulsive sexual behavior subjects (average age 25) reported erectile or arousal difficulty with real partners but not with pornography, indicating physiological tolerance effects (<a href='https://neurosciencenews.com/psychology-addiction-triggers-neuroimaging-1179/'>Neuroscience News</a>).",
          },
        ],
      },
    ],
  },
  {
    slug: "escalation",
    number: "03",
    title: "Escalation from Pornography to CSAM",
    dek: "Escalation from legal pornography to CSAM is empirically contested. It is possible but not inevitable, with pre-existing pedophilic interest a stronger predictor than pornography consumption alone. This chapter also covers the production typology behind the imagery — family-circle abuse, self-generated coercion, livestreamed production-on-demand — and the offender-pathway models that map onto it.",
    readingMinutes: 15,
    sections: [
      {
        id: "gateway-hypothesis",
        heading: "The gateway hypothesis: evidence and contestation",
        blocks: [
          {
            type: "p",
            html: "Whether legal pornography use can escalate to CSAM-seeking is among the most empirically contested areas in sexual offending research. The evidence suggests that escalation is possible but not inevitable, affecting a small proportion of users, with pre-existing sexual interest in children being a more potent predictor than pornography consumption per se.",
          },
          {
            type: "p",
            html: "Supporting evidence includes Nurmi et al. (2024), who analyzed 176,683 onion domains and surveyed 11,470 CSAM users, finding that &ldquo;problematic use of legal pornography can escalate to violent sexual behaviour and the use of CSAM&rdquo; through neurochemical reward conditioning (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC10991312/'>Scientific Reports</a>). Marx, Müller, and Beutel (2021) documented that 5.3% of clinical CSAM users had predominantly adult sexual preferences, suggesting non-pedophilic escalation pathways exist through &ldquo;striving for new and increasingly exciting material&rdquo; (<a href='https://cyberpsychology.eu/article/download/13123/32647/32057'>Cyberpsychology</a>).",
          },
          {
            type: "p",
            html: "However, Seto, Maric, and Barbaree (2001) argued in their landmark review that &ldquo;individuals who are already predisposed to sexually offend are the most likely to show an effect of pornography exposure&rdquo; — that men not predisposed to offend are &ldquo;unlikely to show an effect.&rdquo; This predisposition model substantially qualifies the gateway theory. Meta-analysis by Babchishin, Hanson, and VanZuylen (2015) found mixed offenders (CSAM + contact) were more pedophilic than CSAM-only offenders, further suggesting paraphilic interest — not escalation from legal content alone — drives the most severe cases (<a href='https://pubmed.ncbi.nlm.nih.gov/24627189/'>Archives of Sexual Behavior</a>).",
          },
        ],
      },
      {
        id: "risk-factors",
        heading: "Risk factors and forensic profiles",
        blocks: [
          {
            type: "p",
            html: "Research has identified several factors that elevate escalation risk. Pre-existing pedophilic or hebephilic sexual interest is the most robust predictor. Sexual compulsivity, adverse childhood experiences (particularly sexual abuse and emotional neglect), early exposure to sexually violent material, impaired emotional regulation, and the use of sex as a coping mechanism all contribute (<a href='https://pubmed.ncbi.nlm.nih.gov/24627189/'>Archives of Sexual Behavior</a>).",
          },
          {
            type: "p",
            html: "Babchishin et al. (2015) found CSAM-only offenders are typically young, white, highly educated, and employed in white-collar professions, with significant difficulties in intimate relationships, sexual intimacy, and self-esteem. Among CSAM users specifically, 65.3% first saw CSAM when they were children themselves, and 50.5% first encountered it accidentally (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC10991312/'>Scientific Reports</a>). Clinical comparison studies show CSAM users report significantly higher rates of childhood sexual abuse (10.7% vs. 1.7% in control groups) and emotional neglect (23.2% vs. 10.1%) (<a href='https://cyberpsychology.eu/article/download/13123/32647/32057'>Cyberpsychology</a>).",
          },
          {
            type: "h3",
            text: "Assessment instruments",
          },
          {
            type: "p",
            html: "Clinicians evaluating risk and sexual interest commonly use a small set of instruments: validated actuarial risk tools (Static-99R, Stable-2007, Acute-2007), the laboratory-grade Penile Plethysmograph (PPG), and computerized viewing-time measures. The most widely deployed of the viewing-time tools is the <strong>Abel Assessment for Sexual Interest (AASI)</strong>, developed by Dr. Gene Abel in 1995 and now in its third revision (AASI-3). The AASI presents images and measures both reaction-time gaze and subject-rated attraction, producing a profile of paraphilic interests including pedophilic patterns (<a href='https://en.wikipedia.org/wiki/Abel_Assessment'>Wikipedia overview</a>).",
          },
          {
            type: "p",
            html: "The same company also produces the <strong>Diana Screen</strong>, a self-administered screening questionnaire marketed to schools, youth-serving organizations, faith communities, foster-care agencies, and parents as a pre-hire or pre-volunteer screen for adults who will have unsupervised access to children. The developer, Abel Screening Inc., is based in Alameda, California; the company reports the Diana Screen has been administered to over 500,000 individuals (<a href='https://dianascreen.com/'>Diana Screen</a>).",
          },
          {
            type: "callout",
            tone: "warning",
            title: "Caveats on these instruments",
            html: "The AASI has significant validity controversies: Massachusetts courts ruled it inadmissible in 2002 (upheld 2005), it struggles to meet the Daubert standard in federal courts, the proprietary scoring algorithm is not transparent, and the foundational Abel &amp; Harlow Child Molestation Prevention Study was never peer-reviewed. Independent studies have concluded the tool is unreliable in adults and lacks sufficient evidence for adolescent use (<a href='https://en.wikipedia.org/wiki/Abel_Assessment'>Wikipedia: Abel Assessment</a>). The Diana Screen&apos;s evidence base is similarly thin in the peer-reviewed literature. Both tools are best understood as one input into a clinical or institutional risk picture — not standalone determinations of guilt, danger, or treatment course.",
          },
        ],
      },
      {
        id: "consumption-recidivism",
        heading: "CSAM consumption: psychology and recidivism",
        blocks: [
          {
            type: "p",
            html: "CSAM consumption displays addiction-like characteristics: 61.6% of surveyed users have tried to stop, 48.1% want to stop, yet 73.9% of those who sought help were unable to receive it (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC10991312/'>Scientific Reports</a>).",
          },
          {
            type: "p",
            html: "The most recent comprehensive meta-analysis by Clark et al. (2025), covering 21 studies of 15,077 CSAM offenders, found remarkably low recidivism rates: 3.41% for any sexual re-offending, 0.66% for contact sexual re-offending, and 3.05% for CSAM re-offending over approximately four years (<a href='https://www.tandfonline.com/doi/full/10.1080/14789949.2025.2603236'>Journal of Forensic Psychiatry and Psychology</a>).",
          },
          {
            type: "p",
            html: "However, self-report data from Seto et al. (2011) revealed that approximately 55% of online offenders admitted to a contact sexual offense — a stark contrast with the 12% rate in official records, suggesting substantial undercount (<a href='https://pubmed.ncbi.nlm.nih.gov/21173158/'>Sexual Abuse</a>).",
          },
          {
            type: "callout",
            tone: "info",
            title: "If you are struggling with sexual interest in minors",
            html: "Confidential, free support exists. <a href='/get-help#offender-prevention'>Stop It Now!</a> operates helplines in the US, UK, and Netherlands. Germany's <a href='/get-help#offender-prevention'>Prevention Project Dunkelfeld</a> provides free, medically confidential treatment. Seeking help is not the same as offending.",
          },
        ],
      },
      {
        id: "production-typology",
        heading: "Production typology: where CSAM actually comes from",
        blocks: [
          {
            type: "h3",
            text: "The production typology: most abuse begins close to home",
          },
          {
            type: "p",
            html: "The popular image of CSAM production — anonymous predators trading files on the dark web — describes the distribution layer, not the point of origin. The evidence on where abuse material actually comes from points overwhelmingly toward the child's own social environment: parents, relatives, and trusted acquaintances account for the vast majority of contact abuse, while the single fastest-growing detected category is material extracted from children by manipulation, deception, or extortion. Production is increasingly a paid, on-demand transaction — livestreamed abuse commissioned by paying offenders abroad and facilitated by a victim's own family — and increasingly a tactic of financial extortion rings operating at industrial scale. Understanding who produces this material, and the psychological and economic pathways that lead there, requires separating several distinct populations that public discourse routinely collapses: contact offenders, viewing-only offenders, financially motivated extortionists, and the larger undetected population of people with sexual interest in children who never offend at all.",
          },
          {
            type: "p",
            html: "The foundational fact about CSAM production is that it is, in the great majority of cases, a byproduct of contact abuse committed by someone the child knows. Across U.S. data syntheses, roughly <strong>90% of child sexual abuse is committed by someone known to the child or family</strong>, with relatives accounting for approximately 30% of perpetrators and non-relative acquaintances — family friends, neighbors, coaches, babysitters — accounting for roughly 60% (<a href=\"https://www.cdc.gov/child-abuse-neglect/about/about-child-sexual-abuse.html\">CDC, About Child Sexual Abuse</a>; <a href=\"https://www.nationalchildrensalliance.org/media-room/national-statistics-on-child-abuse/\">National Children's Alliance</a>). Strangers are a minority of perpetrators. When abuse is recorded, the recording typically happens within this same circle of access and trust.",
          },
          {
            type: "p",
            html: "This maps onto a rough typology of production. <strong>Intrafamilial and trusted-acquaintance production</strong> — abuse committed and recorded by a parent, relative, or someone with caregiving access — represents the largest share by victim count and is the hardest to detect, because it occurs inside private homes and trusted relationships rather than on monitored platforms. <strong>Organized network production</strong>, in which offenders collaborate to produce and trade novel material, is real but represents a smaller fraction of unique victims. <strong>Livestreamed abuse</strong> — discussed below — is a paid, on-demand variant concentrated in specific geographies. And <strong>sextortion-driven production</strong>, in which an offender coerces a victim into generating material the offender never had physical access to create, is a distinct and rapidly growing mode that inverts the usual proximity assumption: the offender is often a stranger on another continent.",
          },
          {
            type: "p",
            html: "These categories are not mutually exclusive, and the data infrastructure that would let analysts cleanly partition production by type does not exist. What the evidence does establish is that proximity, not anonymity, characterizes most production, and that the highest-volume detected material increasingly comes from neither the family home nor the organized network but from coerced self-production.",
          },
          {
            type: "h3",
            text: "The 'self-generated' category: a misleading label for a coercion problem",
          },
          {
            type: "p",
            html: "The Internet Watch Foundation, which assesses reported imagery at scale, now finds that the overwhelming majority of the material it actions falls into what it calls the <strong>'self-generated'</strong> category. In 2023, <strong>254,071 of the webpages IWF actioned — 92% — contained 'self-generated' imagery</strong>, up from 78% the prior year (<a href=\"https://www.iwf.org.uk/annual-report-2023/trends-and-data/self-generated-child-sex-abuse/\">IWF 2023 Annual Report</a>). IWF is explicit that it regards the term as <strong>inadequate and potentially misleading</strong> because it appears to place blame on the victim. The reality the label obscures is that children are <strong>groomed, deceived, or extorted</strong> into producing and sharing imagery, or recorded without their knowledge during a livestream — a practice traffickers and offenders call 'capping.' The imagery is technically captured on the child's own device, but the production is directed by an adult offender.",
          },
          {
            type: "p",
            html: "The most disturbing trend within this category is its migration toward younger children. IWF found <strong>104,282 'self-generated' reports featuring a 7-to-10-year-old in 2023, a 65% increase over 2022 and an increase of 1,816% since 2019</strong>, when only 5,443 such reports were recorded. The overwhelming majority depicted girls. IWF has separately warned of imagery involving <a href=\"https://www.iwf.org.uk/news-media/news/under-sixes-manipulated-into-disturbing-sexual-abuse-while-playing-alone-online-as-iwf-says-regulation-can-t-wait/\">children under six being manipulated into abuse while playing alone online</a>. The mechanism is consistent: offenders make contact on open social and gaming platforms, build a relationship or apply pressure, and direct the child to a webcam. The platform layer is not incidental to this production mode — it is the production environment.",
          },
          {
            type: "h3",
            text: "Financial sextortion: industrialized coerced production",
          },
          {
            type: "p",
            html: "Financial sextortion represents the clearest case of production driven by an external offender who never had physical access to the victim. The offender — typically posing as an attractive peer — induces a victim to send an intimate image, then immediately threatens to distribute it unless paid. NCMEC's CyberTipline received <strong>26,718 reports of financial sextortion in 2023, up from 10,731 in 2022</strong>, and by 2024 was receiving <strong>nearly 100 reports of financial sextortion per day</strong> (<a href=\"https://www.missingkids.org/blog/2025/ncmec-releases-new-data-2024-in-numbers\">NCMEC, 2024 in Numbers</a>). Thorn's analysis of more than 15 million CyberTipline reports found that the overwhelming majority of victims are <strong>boys aged 14 to 17 — roughly 90% male</strong> — a sharp reversal of historical sextortion patterns, which more often targeted girls (<a href=\"https://www.thorn.org/research/library/financial-sextortion/\">Thorn, Trends in Financial Sextortion</a>).",
          },
          {
            type: "p",
            html: "Much of this volume traces to West African networks who call themselves the <strong>'Yahoo Boys.'</strong> The Network Contagion Research Institute documented sextortion <strong>scripts and training materials circulating on TikTok, YouTube, Instagram, and Scribd — viewed roughly 500,000 times before removal</strong> (<a href=\"https://www.nbcnews.com/tech/internet/sextortion-yahoo-boys-snapchat-tiktok-teen-wizz-rcna134200\">NBC News reporting on the NCRI study</a>). Thorn found roughly 47% of analyzed reports showed connections to Nigeria and Côte d'Ivoire, and Homeland Security Investigations recorded a <strong>14,000% increase in CyberTipline reports involving predators in Côte d'Ivoire from FY21 to FY23</strong>. <a href=\"https://about.fb.com/news/2024/07/combating-financial-sextortion-scams-from-nigeria/\">Meta announced takedowns of Nigeria-based sextortion accounts in 2024</a>, and Nigerian nationals have been extradited to the U.S. in connection with cases that drove victims to suicide. NCMEC states it is aware of <strong>at least 36 teenage boys who have died by suicide since 2021</strong> after being sextorted; outside tallies counting Canada, the UK, and Australia put the figure higher. The coercion is fast and scripted: Thorn found 38% of analyzed chat logs included exaggerated threats to ruin the victim's life, with escalation sometimes occurring within hours.",
          },
          {
            type: "h3",
            text: "Paid livestreamed abuse and the economics of production-on-demand",
          },
          {
            type: "p",
            html: "Where self-generated material and sextortion are coerced from the victim's own device, livestreamed abuse is a commissioned, paid transaction — a market in which Western offenders pay facilitators in another country to abuse a child to order. The most rigorous prevalence estimate comes from <a href=\"https://www.weprotect.org/resources/case-study/scale-of-harm-prevalence-measurement-multi-sector-partnerships-and-survivor-engagement/\">International Justice Mission and the University of Nottingham Rights Lab's 'Scale of Harm' study</a>, released in September 2023 using 2022 data. It estimated that <strong>approximately 1 in 100 Filipino children — nearly half a million children — were trafficked to produce child sexual exploitation material, including livestreamed abuse, for sale to offenders abroad in a single year</strong>, with nearly a quarter of a million adults engaged in this trafficking.",
          },
          {
            type: "p",
            html: "The defining and most painful feature of this production mode is who facilitates it. IJM's casework and prevalence work consistently find that the traffickers are most often <strong>parents, relatives, or close family members of the victim</strong> — the same circle-of-trust dynamic that characterizes contact abuse generally, here monetized. The median victim age in IJM's earlier OSEC studies was around <strong>11 years, with a meaningful share of victims aged three or younger</strong>, and the median payment per abusive livestream documented by the Australian Institute of Criminology was roughly <strong>$33 USD</strong> (<a href=\"https://www.ijm.org/stories/online-sexual-exploitation-of-children-hidden-in-plain-sight\">IJM, OSEC</a>). The economic structure matters for prevention: this is abuse produced specifically because there is paying demand for it, which means demand-side interventions in offender countries are a tractable lever in a way they are not for intrafamilial abuse committed without commercial motive.",
          },
          {
            type: "h3",
            text: "Trafficking that produces CSAM versus CSAM that drives trafficking",
          },
          {
            type: "p",
            html: "Two causal directions are routinely conflated and worth separating. In the first, <strong>trafficking produces CSAM as a byproduct</strong>: a child is trafficked or exploited, and abuse material is generated incidentally or as a record. In the second, <strong>demand for CSAM drives trafficking</strong>: offenders' willingness to pay for novel, custom, or livestreamed material creates the economic incentive that pulls children into exploitation in the first place. The Philippine livestreaming market is the clearest example of the second direction — IJM frames it explicitly as exploitation <strong>'driven by foreign demand'</strong> — and it is precisely this demand-driven structure that makes the abuse responsive to enforcement and deterrence aimed at paying offenders.",
          },
          {
            type: "p",
            html: "The distinction has practical consequences. Where CSAM is a byproduct of trafficking, the intervention point is the trafficking situation itself. Where CSAM demand drives trafficking, disrupting the payment rails, the platforms, and the offender population can reduce the underlying incentive to traffic children at all. Most real cases sit on a spectrum between these poles, and the same child may be exploited both for in-person abuse and for produced material, but treating the two directions as identical leads to mismatched policy. It is also worth noting that the bulk of CSAM in circulation is not freshly produced to order; it is re-circulated known material, which is why hash-matching detection (covered elsewhere in this guide) addresses the distribution problem but does little to interrupt new production at the source.",
          },
        ],
      },
      {
        id: "offender-pathways",
        heading: "Offender pathway models and the contact-versus-CSAM-only question",
        blocks: [
          {
            type: "h3",
            text: "Offender pathways: what the etiological models actually claim",
          },
          {
            type: "p",
            html: "Beyond the well-litigated debate over assessment instruments, two etiological frameworks dominate the research literature on why contact sexual offending against children occurs. <a href=\"https://www.researchgate.net/publication/373261484_The_Four_Preconditions_Model_An_Assessment\">David Finkelhor's Four-Preconditions Model (1984)</a> proposes that abuse requires a sequence of conditions to be met: the offender must have <strong>motivation</strong> to abuse, must <strong>overcome internal inhibitions</strong>, must <strong>overcome external inhibitions</strong> (situational barriers, supervision), and must <strong>overcome the child's resistance</strong>. The model's enduring contribution is its insistence that motivation alone is insufficient — situational and relational factors must align — which is why supervision, environmental design, and reducing offender access remain core prevention levers.",
          },
          {
            type: "p",
            html: "<a href=\"https://link.springer.com/article/10.1007/s12119-020-09718-4\">Ward and Siegert's Pathways Model (2002)</a> integrated Finkelhor's work with later theories into a multifactorial account positing several distinct etiological routes, each anchored by a primary set of psychological vulnerabilities: <strong>intimacy and social-skill deficits, distorted sexual scripts, emotional dysregulation, and antisocial cognitions</strong> (a pure pedophilic-interest pathway is treated as a fifth route). The model's value is its rejection of a single offender 'profile' — different offenders arrive by different routes, with implications for differentiated treatment. The crucial caveat, acknowledged in the literature itself, is that <strong>empirical validation of these pathway models remains limited</strong>; cluster-analytic studies have found partial support, but the models are better understood as organizing frameworks for clinical formulation than as predictively validated etiologies. They describe contact-offending pathways and translate imperfectly to viewing-only and sextortion offenders, whose motivations (including, for the Yahoo Boys, ordinary financial fraud rather than sexual interest) often lie outside these models entirely.",
          },
          {
            type: "h3",
            text: "Contact offenders versus CSAM-only offenders: the self-report gap",
          },
          {
            type: "p",
            html: "The distinction between people who view CSAM and people who commit hands-on abuse is one of the most consequential — and most misunderstood — in the field. Building on the Babchishin work covered elsewhere in this guide, the pivotal earlier finding comes from <a href=\"https://journals.sagepub.com/doi/10.1177/1079063210369013\">Seto, Hanson, and Babchishin (2011)</a>, whose meta-analysis found that <strong>about 12% of CSAM offenders had an official criminal history of a contact sexual offense, but roughly 55% admitted to a contact offense in self-report studies</strong>. This gap is the empirical heart of the debate: it establishes both that the official record substantially understates contact offending among CSAM users, and that even by self-report a large minority of CSAM-only offenders deny any contact offending.",
          },
          {
            type: "p",
            html: "The recidivism picture sharpens the contrast. A systematic review synthesizing 32 studies reported a <strong>low crossover rate from CSAM-only offending to detected contact offending — on the order of 0.8% to 12%</strong> — with elevated risk concentrated among offenders with pedophilic interest, prior criminal history, and more severe or frequent CSAM engagement (<a href=\"https://www.tandfonline.com/doi/full/10.1080/14789949.2025.2603236\">systematic review and meta-analysis of online CSEM recidivism, 2025</a>). Sexual recidivism rates for CSAM-only offenders over follow-up periods of several years are consistently in the low single digits. The honest synthesis is twofold: most detected CSAM-only offenders do not go on to commit detected contact offenses, yet a substantial subset have already committed undetected contact offenses by the time they are caught. Both facts are true simultaneously, and prevention and risk-assessment policy that relies on only one of them will misfire.",
          },
          {
            type: "h3",
            text: "The darkfield: sexual interest, online grooming, and what we cannot see",
          },
          {
            type: "p",
            html: "The largest relevant population is the one that never enters any dataset. Community self-report research — notably <a href=\"https://www.researchgate.net/publication/272150170_How_Common_is_Men's_Self-Reported_Sexual_Interest_in_Prepubescent_Children\">Dombert et al. (2016)</a>, surveying 8,718 German men — found that roughly <strong>4.1% reported sexual fantasies involving prepubescent children, while only about 0.1% reported an actual pedophilic sexual preference</strong>, and prevalence estimates for pedophilic disorder in the general population cluster between 1% and 5%. The unavoidable implication is that sexual interest in children is far more prevalent than offending, and that a large number of people with such interest never act on it. This is the 'darkfield' (Dunkelfeld) — the dark figure of undetected interest and behavior that official statistics cannot capture.",
          },
          {
            type: "p",
            html: "The <a href=\"https://onlinelibrary.wiley.com/doi/abs/10.1111/jsm.12785\">German Prevention Project Dunkelfeld</a> (Beier et al.) was built precisely to reach this population, recruiting <strong>319 self-identified, help-seeking, undetected individuals attracted to children between 2005 and 2011</strong> into anonymous treatment — evidence both that such individuals exist in numbers and that some actively seek help to avoid offending. Dunkelfeld's data also underscores that self-reported behavior far exceeds officially recorded offending, complicating any inference from conviction statistics. The same darkfield problem applies to online grooming, the entry point for much coerced production. <a href=\"https://www.thorn.org/research/grooming-and-sextortion/\">Thorn's youth research</a> found that <strong>roughly 40% of young people online had been approached by someone they believed was trying to befriend and manipulate them, and about two-thirds had been asked to move from a public chat to a private conversation on another platform</strong> — a near-universal grooming signature. Time-to-victimization varies enormously: traditional grooming can unfold over weeks or months, while financial sextortion can escalate from first contact to crisis within hours, on the same handful of high-reach platforms — Instagram and Snapchat for initial contact, Snapchat and messaging apps as the migration destinations.",
          },
        ],
      },
    ],
  },
  {
    slug: "ai-generated",
    number: "04",
    title: "AI-Generated Content: The New Frontier",
    dek: "AI-generated CSAM videos surged 26,385% in 2025. Detection systems built for traditional CSAM cannot identify novel synthetic material. This chapter covers the generation pipeline in practice, the LAION-5B training-data contamination finding, the unsettled US law after Anderegg, the encryption debate, and how to read the headline statistics in light of the Stanford CIS finding that ~80% of \"Generative AI\" CyberTipline reports involved no AI-generated CSAM at all.",
    readingMinutes: 20,
    sections: [
      {
        id: "ai-pornography",
        heading: "AI-generated pornography: scale and impact",
        blocks: [
          {
            type: "p",
            html: "The proliferation of AI-generated pornographic content represents a paradigm shift in the landscape of online sexual material. An estimated 95% of all deepfakes are non-consensual pornography, with 99% targeting women. Deepfake pornography videos grew 464% between 2022 and 2023 (<a href='https://inside.theporn.com/deepfake-ai-porn-laws-2025/'>Inside the Porn</a>).",
          },
          {
            type: "p",
            html: "The hyper-customizability of AI-generated content may accelerate desensitization and tolerance cycles that characterize pornography addiction. One therapist specializing in sex addiction reports that approximately one-third of clients now use AI-generated erotica in some form (<a href='https://www.recoveryunplugged.com/pornography-addiction-and-the-emerging-threat-of-ai-generated-deepfakes/'>Recovery Unplugged</a>), while clinicians at Fifth Avenue Psychiatry note that AI companion chatbots simulating emotional connection may reinforce fantasy over reality and impede real-world relationship development.",
          },
        ],
      },
      {
        id: "ai-csam",
        heading: "AI-generated CSAM: the emerging crisis",
        blocks: [
          {
            type: "stat",
            figure: "26,385%",
            label: "year-over-year increase in AI-generated CSAM videos assessed in 2025",
            source: "Internet Watch Foundation",
          },
          {
            type: "p",
            html: "The Internet Watch Foundation's 2026 report documents an alarming escalation: 8,029 AI-generated CSAM images and videos were assessed in 2025, with AI-generated CSAM videos surging from 13 in 2024 to 3,443. Among AI-generated videos, 65% depicted Category A content (the most extreme), and 97% depicted girls (<a href='https://www.iwf.org.uk/about-us/why-we-exist/our-research/how-ai-is-being-abused-to-create-child-sexual-abuse-imagery/'>IWF</a>).",
          },
          {
            type: "p",
            html: "NCMEC's 2025 data revealed 21.3 million total CyberTipline reports, with 1.5 million indicating a generative AI nexus, over 7,000 reports of users generating or possessing AI-generated CSAM, and 145,000+ reports of users employing AI to alter CSAM (<a href='https://www.missingkids.org/blog/2026/the-work-never-stops-first-look-at-ncmecs-2025-data'>NCMEC</a>). The real-world impact on minors is tangible: 1 in 10 minors know someone who has used AI tools to generate nude images of other children (<a href='https://www.thorn.org/blog/ai-generated-child-sexual-abuse-the-new-digital-threat-we-must-confront-now/'>Thorn</a>).",
          },
        ],
      },
      {
        id: "data-integrity",
        heading: "Data integrity: the Stanford CIS findings",
        blocks: [
          {
            type: "p",
            html: "A critical nuance emerged in January 2026 when Stanford's Center for Internet and Society analyzed the NCMEC reporting data. The frequently cited figure of 485,000 &ldquo;AI-related&rdquo; NCMEC reports from the first half of 2025 was found to be misleading: 380,000 of those reports originated from Amazon, and none of Amazon's reports involved AI-generated CSAM. Instead, they were hash hits to known CSAM found in AI training data.",
          },
          {
            type: "p",
            html: "Stanford concluded that &ldquo;nearly 80% of all 'Generative AI' CyberTipline reports involved no AI-generated CSAM at all&rdquo; (<a href='https://cyberlaw.stanford.edu/letter-to-ncmec-about-ai-csam-report-statistics/'>Stanford CIS</a>). This finding underscores the importance of data integrity in shaping policy responses — inflated statistics risk misallocating resources and distorting public understanding of the actual threat landscape.",
          },
        ],
      },
      {
        id: "detection-challenges",
        heading: "Detection challenges and new tools",
        blocks: [
          {
            type: "p",
            html: "Traditional hash-matching systems like Microsoft's PhotoDNA — which compares file fingerprints against verified CSAM databases with a false positive rate of approximately 1 in 50 billion — are fundamentally unable to detect AI-generated CSAM since it constitutes novel material with no existing hash signature (<a href='https://www.microsoft.com/en-us/photodna'>Microsoft</a>). This gap has driven investment in AI-based detection: the DHS Cyber Crimes Center awarded a $150,000 contract to Hive AI specifically for AI-generated CSAM detection (<a href='https://www.technologyreview.com/2025/09/26/1124343/us-investigators-are-using-ai-to-detect-child-abuse-images-made-by-ai/'>MIT Technology Review</a>).",
          },
          {
            type: "p",
            html: "Thorn's Safer platform represents the most scaled detection effort. In 2025, Safer processed 415.4 billion files, detected approximately 1.5 million known CSAM files through hash matching, and used AI to flag 3.84 million potential novel CSAM files for human review. The platform serves over 80 platforms and maintains a hash library of 6.3 million image hashes and 64 million video hashes (<a href='https://www.thorn.org/blog/safer-impact-report-2026/'>Thorn</a>).",
          },
          {
            type: "p",
            html: "Apple's abandoned NeuralHash system illustrates the detection dilemma. Announced in August 2021, paused a month later, and formally abandoned in December 2022, NeuralHash would have performed client-side CSAM scanning of iCloud Photos. Apple concluded it &ldquo;could not implement without ultimately jeopardizing the security and privacy of our users.&rdquo; A class-action lawsuit filed in December 2024 alleges that Apple's abandonment facilitates CSAM proliferation on iCloud (<a href='https://www.cnet.com/tech/services-and-software/apples-abandonment-of-icloud-csam-scanner-is-hurting-victims-lawsuit-alleges/'>CNET</a>). Meanwhile, the EU backed down on mandatory CSAM detection orders in November 2025, opting for mitigation measures instead (<a href='https://9to5mac.com/2025/11/27/eu-backs-down-on-csam-scanning-but-apple-isnt-off-the-hook-yet/'>9to5Mac</a>).",
          },
        ],
      },
      {
        id: "legal-landscape",
        heading: "Legal and legislative landscape",
        blocks: [
          {
            type: "p",
            html: "The legislative response to AI-generated harmful content has been swift. The TAKE IT DOWN Act, signed May 19, 2025, criminalizes non-consensual intimate imagery including AI deepfakes, with penalties up to three years imprisonment and a 48-hour takedown requirement for platforms. The ENFORCE Act passed the Senate unanimously on December 16, 2025, equalizing criminal penalties for AI-generated CSAM with traditional CSAM (<a href='https://www.thorn.org/blog/the-enforce-act-addressing-ai-generated-csam-offenses/'>Thorn</a>; <a href='https://www.cornyn.senate.gov/news/cornyn-blumenthal-lee-kennedy-bill-to-prosecute-ai-generated-csam-passes-senate-unanimously/'>Senator Cornyn</a>).",
          },
          {
            type: "p",
            html: "Internationally, the UK's Crime and Policing Bill (February 2025) creates a new criminal offense for making, adapting, possessing, or supplying a &ldquo;CSA image-generator.&rdquo; First Amendment challenges are already emerging. In <em>U.S. v. Anderegg</em>, a court dismissed possession charges for wholly AI-generated CSAM citing <em>Stanley v. Georgia</em>, while allowing production and distribution charges to proceed — the first federal case heading to appellate court on AI CSAM and the First Amendment (<a href='https://techpolicy.press/court-rules-that-constitution-protects-private-possession-of-aigenerated-csam'>Tech Policy Press</a>).",
          },
        ],
      },
      {
        id: "generation-and-detection-deep-dive",
        heading: "How AI CSAM is generated, and why detection breaks",
        blocks: [
          {
            type: "h3",
            text: "The generation pipeline in practice: open-weight checkpoints, LoRA adapters, and node-based workflows",
          },
          {
            type: "p",
            html: "The volume figures are by now familiar, and the research covers them: the Internet Watch Foundation assessed 8,029 AI-generated images and videos as showing realistic child sexual abuse in 2025, with AI-CSAM video rising 26,385 percent year over year. What those numbers obscure is a concrete technical pipeline. Offenders are not prompting commercial products; they are running open-weight Stable Diffusion checkpoints locally, layering on small LoRA adapters trained on as few as twenty photographs of a specific child, and chaining the steps in node-based ComfyUI workflows. This section traces that pipeline — the models, the 2023 LAION-5B contamination that seeded part of it, the nudification economy adjacent to it, the detection problem it creates, and the unsettled US law that now distinguishes possessing such an image from making one.",
          },
          {
            type: "p",
            html: "The defining feature of the AI-CSAM problem is that the capable models are open-weight and run offline. Closed systems such as DALL-E and Midjourney process every request behind a provider's firewall with input and output filters applied; an open-weight model like Stable Diffusion can be downloaded in full, and <a href=\"https://stable-diffusion-art.com/midjourney-vs-stable-diffusion/\">the community circulated a filter-disabled build within days of the original v1 release</a>. Running a local interface such as AUTOMATIC1111 ships with the safety checker off by default, and disabling it elsewhere can be a single command-line flag (<strong>--disable-nsfw-filter</strong>). Once the filter is gone, the residual safety of a model depends entirely on what was — or was not — scrubbed from its training data.",
          },
          {
            type: "p",
            html: "The re-victimization mechanism is fine-tuning. The IWF's 2026 report states plainly that <a href=\"https://www.iwf.org.uk/about-us/why-we-exist/our-research/how-ai-is-being-abused-to-create-child-sexual-abuse-imagery/\">\"generative models can be trained and fine-tuned using photographic abuse imagery, directly re-victimising survivors,\"</a> and that Low-Rank Adaptation \"can create realistic deepfakes of specific children using as few as 20 existing images in as little as 15 minutes.\" A LoRA is a small adapter file — often a few hundred megabytes — that steers a base checkpoint toward a narrow concept without retraining the multi-gigabyte model itself. The IWF's forensic analysis found a single corpus of over 1,000 images that bore evidence of a specific freely-downloadable checkpoint model, with <strong>CSAM-finetuned LoRA models applied on top</strong> of it. The accompanying academic literature, including a March 2025 study correlating SafeLine hotline reports with dark-web forum discussion, emphasizes <a href=\"https://arxiv.org/abs/2503.00433\">\"the crucial role that the open-source AI models play\"</a> and documents how forum members share techniques to circumvent technological safeguards.",
          },
          {
            type: "p",
            html: "In practice these components are assembled in node-graph tools — ComfyUI is the dominant one — and the checkpoints and adapters themselves are traded through model-sharing hubs. The result is a modular kit: a base model trained for photorealism, an adapter trained for the prohibited concept, and a reproducible workflow that requires, in the IWF's words, that \"single applications can now generate abusive imagery with minimal effort, removing the need for technical expertise.\"",
          },
          {
            type: "h3",
            text: "LAION-5B: what the Stanford Internet Observatory found, and what remains in the wild",
          },
          {
            type: "p",
            html: "The clearest documented link between mainstream training data and this pipeline is the LAION-5B finding. In December 2023, the Stanford Internet Observatory, led by chief technologist David Thiel, reported that <a href=\"https://www.404media.co/laion-datasets-removed-stanford-csam-child-abuse/\">LAION-5B — the 5.85-billion-pair image-text dataset used to train Stable Diffusion — contained suspected CSAM</a>. Using perceptual and cryptographic hash matching against known-CSAM hash lists held by NCMEC and the Canadian Centre for Child Protection, the team identified more than 3,200 suspected items, of which at least 1,008 were externally validated. Thiel's conclusion was that anyone who downloaded the full dataset for training \"would absolutely have CSAM unless they took extraordinary measures.\" LAION took the dataset offline in response.",
          },
          {
            type: "p",
            html: "The remediation is documented but partial. In August 2024, LAION published <a href=\"https://laion.ai/blog/relaion-5b/\">Re-LAION-5B</a>, described as \"the first web-scale, text-link to images pair dataset to be thoroughly cleaned of known links to suspected CSAM.\" The cleaning matched URL and image MD5/SHA1 hashes against precomputed hashes \"WITHOUT ever having to touch suspected links or even having to inspect content,\" removing 2,236 suspect links flagged across three sources — 18 from the IWF, 1,129 from the Canadian Centre, and 1,714 from Thiel's Stanford report (a set that subsumes the original 1,008). LAION characterizes this as 0.000038 percent of the dataset and stresses that <strong>\"the datasets of LAION only contain links and metadata\"</strong> and that it \"has never distributed image content itself.\"",
          },
          {
            type: "p",
            html: "Two caveats matter for anyone assessing residual risk. First, LAION urges labs to migrate to Re-LAION but cannot recall copies already downloaded; the original index and unmaintained mirrors continue to circulate outside any central control, and a model already trained on the contaminated set is not retroactively cleaned by a fixed dataset. Second, hash-based scrubbing only removes <em>known</em> CSAM with a prior hash signature — novel or borderline material that was never catalogued would not have been caught.",
          },
          {
            type: "h3",
            text: "The nudification and deepfake economy: tooling marketed elsewhere, adapted for abuse",
          },
          {
            type: "p",
            html: "A parallel supply runs through \"nudify\" applications and face-swap deepfake tooling that is nominally marketed for adult or novelty use and is trivially adaptable to minors. The Institute to Address Commercial Sexual Exploitation notes the San Francisco City Attorney sued sixteen such sites in August 2024 out of <a href=\"https://cseinstitute.org/prompted-to-exploit-ai-and-the-creation-of-deepfake-pornography/\">at least ninety similar websites</a>, with marketing prompts such as \"Have someone to undress?\" Reporting collated alongside the IWF figures found that in 2025, <a href=\"https://www.elliptic.co/blog/ai-deepfake-undresser-tools-are-becoming-illegal\">nudify-related sites drew over 24 million visits in a single month</a>. Telegram has removed some of the most popular bots, but many resurface on bespoke domains or under new usernames.",
          },
          {
            type: "p",
            html: "The adaptation risk is not hypothetical even for guard-railed commercial products. Between December 25, 2025 and January 1, 2026, AI Forensics researchers analyzed roughly 12,500 image-generation requests and 20,000 images produced by Grok, the generator integrated into X; common prompts included \"remove,\" \"bikini,\" and \"clothing,\" and <strong>two percent of the resulting images depicted apparent minors, including children under five</strong>, in some cases in \"translucent or dental-floss bikinis.\" The episode illustrates how a general-purpose editing tool with image upload becomes a de facto nudification engine without any model ever being explicitly built for it.",
          },
          {
            type: "p",
            html: "The scale of the downstream reporting burden is now substantial. NCMEC's CyberTipline received <a href=\"https://www.nbcnews.com/tech/security/ai-child-exploitation-crisis-rcna259409\">more than one million reports tied to generative AI between January and September 2025</a>, and the DHS contract filing discussed below cites NCMEC data showing a 1,325 percent increase in generative-AI incidents during 2024.",
          },
          {
            type: "h3",
            text: "The synthetic-from-real-victim hybrid category",
          },
          {
            type: "p",
            html: "The most legally and ethically fraught material is neither fully synthetic nor a conventional photograph but a hybrid: AI tooling used to extend, age-shift, or otherwise modify imagery of a real, identifiable child. The Stanford HAI policy brief on AI-CSAM draws this distinction explicitly, separating <a href=\"https://hai.stanford.edu/assets/files/hai-policy-brief-addressing-ai-csam.pdf\">synthetic-only content generated from text prompts from victim-derived material — AI-generated deepfakes built on real photographs of actual minors — which it frames as a compounded harm</a> because it exploits an identifiable individual.",
          },
          {
            type: "p",
            html: "The LoRA mechanism is what makes this category cheap. Because an adapter can be trained on roughly twenty images of one child, an offender can take innocuous photographs — from a family member, a school, or social media — and produce an unlimited stream of novel abusive images of that specific minor. The same technique applied to existing CSAM allows offenders to generate new poses and scenarios of a known victim, directly re-victimizing survivors whose original abuse imagery is already in circulation. This collapses a distinction that older law and older detection both relied on: that an image either depicts a real abuse event or it does not. A victim-derived synthetic image depicts a real child who may never have been in the depicted situation, which complicates both the harm assessment and, as the next subsection shows, the question of whether a real victim is currently at risk and needs rescue.",
          },
          {
            type: "h3",
            text: "Why detection breaks: no hash baseline, and the classifier problem",
          },
          {
            type: "p",
            html: "The detection architecture that governs most of the CSAM field — perceptual hashing such as PhotoDNA, matched against curated hash lists — is structurally defeated by generative AI. PhotoDNA works by matching a query image to the fingerprint of a <em>previously catalogued</em> illegal image; every AI-generated image is novel, so it has no prior signature and clears hash-matching entirely. The Stanford HAI brief states the problem directly: traditional tools rely on matching known illegal images, and <a href=\"https://hai.stanford.edu/assets/files/hai-policy-brief-addressing-ai-csam.pdf\">\"novel AI content bypasses these systems entirely.\"</a> Detection therefore shifts from deterministic hash lookup to probabilistic machine-learning classifiers that attempt to recognize abuse content from pixels alone — a fundamentally less certain and more error-prone basis, and one that can be adversarially probed.",
          },
          {
            type: "p",
            html: "This classifier dependence is the technical premise of the September 2025 DHS contract with Hive AI. The Department of Homeland Security's Cyber Crimes Center awarded Hive a <a href=\"https://www.technologyreview.com/2025/09/26/1124343/us-investigators-are-using-ai-to-detect-child-abuse-images-made-by-ai/\">$150,000, three-month trial</a> for a tool that detects whether an image is AI-generated at all — not whether it is CSAM. Hive's detector was not trained on CSAM; per the company's CEO, \"there's some underlying combination of pixels in this image that we can identify\" as machine-generated, and the model is meant to generalize across image types. The investigative point is triage: the filing argues that flagging AI origin \"ensures that investigative resources are focused on cases involving real victims, maximizing the program's impact.\" A 2024 University of Chicago study found Hive's detector outranked four competitors at identifying AI-generated art, and Hive holds a separate Pentagon deepfake-detection contract — though the procurement filing itself was heavily redacted. The implicit logic is telling: because content-based CSAM classification is hard, agencies are investing first in the narrower, better-validated task of separating synthetic from real so that scarce human and rescue resources flow to images depicting children actually in danger.",
          },
          {
            type: "h3",
            text: "Commercial guardrails: where the closed models hold and where the gaps are",
          },
          {
            type: "p",
            html: "Guardrails vary sharply by release model. Closed, API-only generators apply filters at both input and output and never expose their weights. Research probing these systems finds <a href=\"https://stable-diffusion-art.com/midjourney-vs-stable-diffusion/\">Midjourney robustly flags most hazardous prompts</a>, while academic jailbreak work (SneakyPrompt, SurrogatePrompt) has shown DALL-E-class filters can sometimes be bypassed through prompt substitution — a containable gap, since the provider can patch the filter and the weights stay private. OpenAI, Google, Meta, and Microsoft also now embed provenance signals (discussed below), which closed deployment makes enforceable.",
          },
          {
            type: "p",
            html: "The open-weight frontier is where the gaps live, and the FLUX family from Black Forest Labs illustrates the genuine tension. Black Forest Labs filtered its pre-training data for NSFW content and CSAM, <a href=\"https://huggingface.co/black-forest-labs/FLUX.2-dev\">partnering with the Internet Watch Foundation to filter known CSAM from training data</a> and running targeted fine-tuning rounds intended to prevent synthetic CSAM and non-consensual intimate imagery. The FLUX.2 [dev] repository ships with input and output NSFW filters and a non-commercial license requiring filtering or manual review. But these are the same dynamics as Stable Diffusion: once weights are public, downstream users can strip the filters, and users reported FLUX could still produce NSFW output with the safety checker nominally enabled. A November 2025 discussion thread on the model's own repository contested even the IWF partnership. The structural conclusion is consistent across the open-weight field — pre-training data hygiene is the durable safety layer because it cannot be removed after the fact, whereas any post-hoc filter on a downloadable model is optional for the end user.",
          },
        ],
      },
      {
        id: "encryption-debate",
        heading: "The encryption debate",
        blocks: [
          {
            type: "h3",
            text: "Apple's NeuralHash: announcement, pause, abandonment, lawsuit",
          },
          {
            type: "p",
            html: "No question in child-safety technology is more contested than whether companies should scan end-to-end encrypted (E2EE) communications for child sexual abuse material. The debate is not a contest between people who want to protect children and people who do not; it is a genuine collision between two technically literate camps. On one side, the National Center for Missing & Exploited Children (NCMEC) and child-safety NGOs warn that encryption without a detection mechanism erases the reporting that rescues children. On the other, most of the world's leading cryptographers argue that client-side scanning cannot be built without creating a mass-surveillance infrastructure that will be abused and will not even work well. Between 2021 and 2026 the argument was litigated through three landmark episodes — Apple's NeuralHash, the EU's \"Chat Control,\" and the UK Online Safety Act — each of which ended in a retreat from mandatory scanning, and each of which left the underlying problem unresolved.",
          },
          {
            type: "p",
            html: "The canonical case study is Apple's. On <strong>5 August 2021</strong>, Apple announced a system to detect known CSAM in iCloud Photos using <strong>NeuralHash</strong>, a perceptual-hashing algorithm that would compare images on the device against a database of hashes supplied by NCMEC before upload. The design was an attempt to thread the needle: scanning would happen client-side, with a cryptographic \"threshold secret sharing\" scheme so Apple learned nothing until a user crossed a set number of matches. Within weeks the security community had demonstrated NeuralHash <a href=\"https://www.theregister.com/2023/09/07/uk_government_clause_online_safety_bill/\">hash collisions</a> and warned of false matches and government abuse. Roughly one month later, on 3 September 2021, Apple <a href=\"https://techcrunch.com/2021/09/03/apple-csam-detection-delayed/\">paused the rollout</a> \"to take additional time over the coming months to collect input and make improvements.\"",
          },
          {
            type: "p",
            html: "The pause became permanent. In <strong>December 2022</strong>, Apple formally abandoned the plan, stating it had concluded after consulting privacy and security experts that it was <strong>\"not practically possible to implement [CSAM-scanning] without ultimately imperiling the security and privacy of our users.\"</strong> In a fuller statement to the advocacy group Heat Initiative, an Apple executive wrote: <strong>\"Scanning every user's privately stored iCloud content would in our estimation pose serious unintended consequences for our users... Scanning for one type of content, for instance, opens the door for bulk surveillance and could create a desire to search other encrypted messaging systems across content types.\"</strong> Apple instead shipped opt-in <em>Communication Safety</em> features (on-device nudity detection in Messages that never reports outward) and, in 2022, <em>Advanced Data Protection</em>, which extends E2EE to iCloud backups — moving in the opposite direction from scanning. The reporting is documented by <a href=\"https://www.cnn.com/2022/12/08/tech/apple-csam-tool\">CNN</a>.",
          },
          {
            type: "p",
            html: "In <strong>December 2024</strong>, this reversal produced a novel lawsuit. In <a href=\"https://cdn.arstechnica.net/wp-content/uploads/2024/12/Amy-et.-al.-v.-Apple-Case-24-cv-08832-Doc-1-Complaint-12-07-2024.pdf\"><em>\"Amy\" and \"Jessica\" v. Apple Inc.</em></a> (N.D. Cal., Case No. 5:24-cv-08832, filed 7 December 2024), two survivors depicted in long-circulating abuse series sued on behalf of a proposed class. The complaint reframes the abandonment as a <strong>product-liability</strong> question: it alleges Apple's devices and iCloud are \"defectively designed\" products, that Apple \"announced [it] would not implement NeuralHash or any other child pornography detection tools,\" and that this \"affirmatively\" choosing not to act \"amplif[ied] the already significant risk and harm.\" The suit pleads liquidated damages of <strong>$150,000 per victim under 18 U.S.C. § 2255</strong>, with reporting putting the potential class at up to 2,680 victims and exposure near $1.2 billion (<a href=\"https://www.prnewswire.com/news-releases/apple-sued-for-knowingly-hosting-child-sexual-abuse-material-on-its-products-failing-to-protect-survivors-302325571.html\">plaintiffs' announcement</a>). The case sets the two values — a victim's interest in detection and a user's interest in confidentiality — directly against each other in a U.S. court.",
          },
          {
            type: "h3",
            text: "The EU's \"Chat Control\": from mandatory detection orders to a November 2025 retreat",
          },
          {
            type: "p",
            html: "The European Union's <strong>Regulation to Prevent and Combat Child Sexual Abuse (CSAR)</strong> — proposed by Commissioner Ylva Johansson on <strong>11 May 2022</strong> and nicknamed \"Chat Control\" by critics — was the most ambitious attempt to mandate detection. As drafted, national authorities could issue <strong>detection orders</strong> compelling platforms, including E2EE messengers, to scan all users' content for both known and <em>previously unseen</em> CSAM and for grooming (text). Because no method exists to scan inside E2EE without breaking it, the mechanism implied <strong>client-side scanning</strong> on every device.",
          },
          {
            type: "p",
            html: "The proposal stalled for three and a half years against a wall of opposition. The <strong>European Parliament's LIBE committee voted on 14 November 2023</strong> to strip mandatory detection, exclude E2EE services, and limit scanning to targeted orders against specific suspects. The Council could not assemble a qualified majority: votes were pulled in <a href=\"https://techcrunch.com/2024/05/02/eu-csam-scanning-council-proposal-flaws/\">June 2024</a> and repeatedly in 2025 as Germany, and ultimately Denmark's own presidency, backed away from a scanning mandate. The turning point came on <strong>26 November 2025</strong>, when the Council finally adopted a <a href=\"https://euperspectives.eu/2025/11/eu-countries-agree-position-on-chat-contr/\">general approach</a> that <strong>removed mandatory scanning entirely</strong>. Detection of CSAM became <strong>voluntary</strong> — the Council instead made permanent the temporary \"ePrivacy derogation\" (set to expire in April 2026) that lets providers scan if they choose, and replaced detection orders with a tiered <strong>risk-classification regime</strong> in which services are rated low-, medium-, or high-risk and high-risk services face \"strengthened risk assessment and mitigation obligations.\"",
          },
          {
            type: "p",
            html: "The retreat did not end the fight. Digital-rights groups, led by <a href=\"https://edri.org/our-work/csa-regulation-document-pool/\">EDRi</a> and MEP Patrick Breyer, warn that Article 4's open-ended duty to take \"all appropriate risk mitigation measures\" is a back door: a high-risk designation could be used to pressure providers into de facto scanning, and a built-in review clause lets the Commission revisit mandatory detection later. The Council position now enters <strong>trilogue</strong> negotiations with the Parliament and Commission, so the final text remained unsettled going into 2026.",
          },
          {
            type: "h3",
            text: "The UK's \"spy clause\": Section 122 and Apple's threat to pull iMessage",
          },
          {
            type: "p",
            html: "The United Kingdom's <a href=\"https://www.legislation.gov.uk/ukpga/2023/50/section/122\"><strong>Online Safety Act 2023, Section 122</strong></a> empowers the regulator <strong>Ofcom</strong> to issue \"technology notices\" requiring a messaging provider to use \"accredited technology\" to identify and remove CSAM — language critics dubbed the <strong>\"spy clause,\"</strong> because for an E2EE service the only way to comply is client-side scanning. The provision triggered an unusually public confrontation: in 2023 <strong>Apple, WhatsApp (Meta), and Signal</strong> all indicated they would rather <strong>withdraw their encrypted services from the UK</strong> than build a scanning backdoor. Apple stated in June 2023 that compelling such capability \"could put UK citizens at greater risk\" and threatened to pull <strong>iMessage and FaceTime</strong> from the UK rather than weaken encryption.",
          },
          {
            type: "p",
            html: "The government <a href=\"https://www.theregister.com/2023/09/07/uk_government_clause_online_safety_bill/\">climbed down</a> in early September 2023, days before the Bill's final Lords stages. A minister told Parliament that Ofcom would only require scanning <strong>\"where technically feasible\"</strong> and where a technology had been independently accredited as meeting minimum accuracy standards — and conceded that <strong>no such technology currently exists</strong> for E2EE. Crucially, <strong>Section 122 was not removed from the statute</strong>; the power remains on the books, dormant, pending a feasibility that researchers argue cannot be met without breaking encryption. The <a href=\"https://www.eff.org/deeplinks/2023/09/uk-government-knows-how-extreme-online-safety-bill\">Electronic Frontier Foundation</a> and Amnesty International characterized the move as a face-saving deferral rather than a genuine repeal — a pattern that recurs across all three jurisdictions.",
          },
          {
            type: "h3",
            text: "The researcher consensus: client-side scanning as a security own-goal",
          },
          {
            type: "p",
            html: "The most striking feature of this debate is the near-uniformity of expert opinion against client-side scanning. In October 2021 — directly in response to Apple's NeuralHash — fourteen of the world's most senior cryptographers and security researchers published <a href=\"https://arxiv.org/abs/2110.07450\"><strong>\"Bugs in our Pockets: The Risks of Client-Side Scanning\"</strong></a> (later in the <em>Journal of Cybersecurity</em>). The authors include <strong>Hal Abelson, Ross Anderson, Steven Bellovin, Josh Benaloh, Matt Blaze, Jon Callas, Whitfield Diffie, Susan Landau, Peter Neumann, Ron Rivest, Bruce Schneier, Vanessa Teague, and Carmela Troncoso</strong> — a roster that includes inventors of public-key cryptography and the RSA algorithm. Their conclusion is blunt: client-side scanning (CSS) <strong>\"neither guarantees efficacious crime prevention nor prevents surveillance. Indeed, the effect is the opposite... CSS by its nature creates serious security and privacy risks for all society, while the assistance it can provide for law enforcement is at best problematic.\"</strong> Their central worry is <strong>scope creep</strong>: once a scanning client is installed on every phone, the hash list is a control point that can be silently expanded — by a government, a court, or a coerced provider — from CSAM to copyrighted material, dissident speech, or political imagery, with no way for users to verify what is being matched.",
          },
          {
            type: "p",
            html: "This was not a one-off. Against the EU CSAR, an open letter from <strong>over 300 (ultimately 465) scientists and researchers</strong> was published on <strong>4 July 2023</strong> (<a href=\"https://edri.org/our-work/open-letter-hundreds-of-scientists-warn-against-eus-proposed-csa-regulation/\">EDRi</a>), followed by a refreshed letter signed by <strong>270 experts across more than 30 countries on 2 May 2024</strong>, including Harvard's Bruce Schneier and Johns Hopkins's Matthew Green. Their technical claim is categorical: <strong>\"Detection in end-to-end encrypted services by definition undermines encryption protection,\"</strong> and the detection technologies are <strong>\"deeply flawed and vulnerable to attacks.\"</strong> The breadth of the signatory base — spanning academia and researchers at IBM, Intel, and Microsoft — is itself the argument: this is not a fringe civil-liberties position but the considered view of the field that builds the systems in question.",
          },
          {
            type: "h3",
            text: "The other camp: NCMEC and the child-safety sector",
          },
          {
            type: "p",
            html: "The opposing case is made most forcefully by <strong>NCMEC</strong>, which sits at the center of the U.S. reporting system and sees the consequences of encryption in its own data. NCMEC's position is more careful than \"ban encryption.\" It states it <strong>\"support[s] efforts to improve online privacy\"</strong> but opposes E2EE deployed <strong>\"with no exceptions for detecting child sexual abuse material,\"</strong> warning that otherwise <strong>\"millions of incidents of abuse will remain hidden\"</strong> (<a href=\"https://ncmec.org/theissues/end-to-end-encryption\">NCMEC, End-to-End Encryption</a>). NCMEC has estimated that <strong>more than half of its CyberTipline reports would be lost</strong> if major platforms encrypt without a detection mechanism — a number that drives the entire child-safety argument.",
          },
          {
            type: "p",
            html: "The most-cited empirical support is Meta. After Messenger moved to default E2EE in December 2023, NCMEC reported that the CyberTipline received reports of roughly <strong>7 million fewer incidents in 2024 than in 2023</strong>, with Meta's encryption the likeliest cause (<a href=\"https://www.nbcnews.com/tech/security/child-exploitation-watchdog-says-meta-encryption-led-sharp-decrease-ti-rcna205548\">NBC News</a>). To the child-safety sector, this is the debate's hardest fact: encryption demonstrably shrinks the funnel through which abuse is discovered, and the cryptographers' objections do not, on their own, replace the reports that go missing. NGOs such as the WeProtect Global Alliance and (in the UK) the NSPCC press the same point — the NSPCC noted Apple was implicated in 337 recorded CSAM offences in England and Wales in 2022–23 while making a tiny number of NCMEC reports, arguing the gap reflects a deliberate choice not to look. The child-safety camp frames the cryptographers as solving for one value (confidentiality) while externalizing the cost onto a population — abused children — that cannot advocate for itself.",
          },
          {
            type: "h3",
            text: "The technical reality: false positives, the base-rate problem, and the signal-to-noise gap",
          },
          {
            type: "p",
            html: "Underneath the politics is a measurable engineering problem. Perceptual hashing (matching <em>known</em> CSAM) is comparatively reliable but vulnerable to adversarial collisions and to silent hash-list expansion. The harder problem is detecting <em>unknown</em> CSAM with classifiers, which is where false positives explode. Because real CSAM is a vanishingly small fraction of all messages, even a very accurate classifier triggers enormous numbers of false alarms — the classic <strong>base-rate problem</strong>. The 2024 scientists' letter put concrete numbers on it: WhatsApp alone carries <strong>~140 billion messages per day</strong>, so even if only 1 in 100 were image messages run through a detector, a 0.1% error rate would generate roughly <strong>1.4 million false positives every single day</strong> (<a href=\"https://techcrunch.com/2024/05/02/eu-csam-scanning-council-proposal-flaws/\">TechCrunch</a>). Each false positive is an innocent person's private photo surfaced to a human reviewer or to police.",
          },
          {
            type: "p",
            html: "Real-world reporting bears out the noise. Data cited from the Irish national police (An Garda Síochána) found that of 4,192 NCMEC referrals reviewed, only <strong>852 (20.3%) were confirmed actionable CSAM</strong>, with the remainder either non-actionable or outright false positives — meaning roughly four in five referrals consumed investigative resources without identifying illegal material. Researchers argue this cuts against the child-safety case on its own terms: more scanning does not straightforwardly mean more rescued children if the additional signal is buried in noise and the people who traffic CSAM migrate to channels (custom apps, dark-web forums, the open Tor services tracked by Project Arachnid) that are not covered by consumer-app scanning at all.",
          },
          {
            type: "p",
            html: "This is the <strong>signal-to-noise</strong> crux of the debate, and it is where the two camps genuinely talk past each other. NCMEC's \"half of all reports would vanish\" and the cryptographers' \"1.4 million false positives a day\" are both true, because they measure different things: the first measures how much detection mainstream-platform scanning currently produces, and the second measures the cost of forcing that detection through encryption at population scale. The unresolved empirical question — how much of the CSAM that actually moves through E2EE channels would be caught by scanning that determined offenders can evade — is the one neither side can yet answer with confidence.",
          },
          {
            type: "h3",
            text: "Where the debate stands in 2026",
          },
          {
            type: "p",
            html: "By 2026 the legislative score is three-for-three in favor of the cryptographers — but only on the surface. Apple abandoned NeuralHash and now litigates the consequences; the EU Council retreated to voluntary detection on 26 November 2025; and the UK left Section 122 on the books but acknowledged it cannot be used until an accredited, accurate technology exists. In every case the <strong>mandate to scan was defeated or deferred, not because legislators were persuaded children don't need protection, but because no one could rebut the claim that the technology cannot be deployed safely.</strong>",
          },
          {
            type: "p",
            html: "Yet none of the underlying powers were truly repealed. Section 122 is dormant, not deleted. The EU's voluntary regime is heading into trilogue with critics warning that \"risk mitigation\" obligations could reintroduce scanning by another name, and the ePrivacy derogation keeps voluntary scanning legal indefinitely. The U.S. has no scanning mandate, but the <em>Amy v. Apple</em> litigation, the EARN IT Act's periodic revivals, and state-level suits keep pressure on providers. The likely 2026 equilibrium is therefore not resolution but <strong>stalemate plus displacement</strong>: mandatory client-side scanning stays politically and technically blocked; the policy energy shifts to voluntary detection, age verification, default-on safety features for minors, and offender-side interventions; and the volume of genuinely E2EE traffic — and of AI-generated CSAM that hash-matching cannot catch — keeps growing. The encryption debate has not been won by either side. It has been postponed, and the gap between what detection systems can see and what abuse actually occurs is widening inside it.",
          },
        ],
      },
      {
        id: "reading-the-numbers",
        heading: "Reading the numbers: detection scale, the dark figure, and the bundling artifact",
        blocks: [
          {
            type: "h3",
            text: "The CyberTipline: 20.5 million reports, and why that number went down",
          },
          {
            type: "p",
            html: "Almost everything the public knows about the scale of child sexual abuse material comes from a handful of counting institutions — the U.S. CyberTipline, the Internet Watch Foundation, Project Arachnid, and a small number of detection vendors — and almost every figure they produce is an artifact of detection capacity, statutory reporting duties, and platform behavior rather than a direct measure of how much abuse material exists or is being produced. The headline statistics are real, but they are downstream of where the searchlights happen to point. In 2024 and the first half of 2025 this gap produced a textbook failure: a single ambiguous checkbox on a reporting form generated six months of \"AI-CSAM is flooding the internet\" headlines that a Stanford researcher and two Bloomberg reporters later showed were built on data that, in roughly four of five cases, involved no AI-generated material at all. This section sets out what the major counting systems actually report, why year-over-year deltas are mostly noise about methodology, and what can and cannot be inferred about true prevalence — the \"dark figure\" of unreported abuse.",
          },
          {
            type: "p",
            html: "The U.S. <a href=\"https://www.missingkids.org/blog/2025/ncmec-releases-new-data-2024-in-numbers\">National Center for Missing & Exploited Children (NCMEC) reported that its CyberTipline received 20.5 million reports of suspected child sexual exploitation in 2024</a>, containing 62.9 million files — approximately 33.1 million videos, 28 million images, and nearly 2 million other file types, per <a href=\"https://www.thorn.org/blog/what-the-2024-ncmec-cybertipline-report-says-about-child-safety/\">Thorn's analysis</a>. On its face this is a <strong>43% decrease</strong> from the 36.2 million reports filed in 2023, and a naive reading would suggest the problem is shrinking. It is not.",
          },
          {
            type: "p",
            html: "The decline is an accounting artifact. NCMEC introduced a <strong>\"bundling\"</strong> feature allowing platforms to consolidate reports tied to a single viral incident — for example, a piece of abusive meme content shared by thousands of users — into one report or a smaller set, rather than filing a separate report per user. When the 2024 data is re-expressed as discrete incidents rather than reports, the figure rises to <strong>29.2 million separate incidents</strong>. Bundling reduces redundant paperwork for both platforms and NCMEC's analysts, but it severs the year-over-year comparability of the raw report count. The 43% \"drop\" is therefore not evidence of less abuse; it is evidence that the unit of measurement changed.",
          },
          {
            type: "p",
            html: "This is the recurring lesson of CyberTipline data. The count is overwhelmingly a function of how many platforms are scanning, how aggressively they scan, what the law obliges them to forward, and how those reports are aggregated. U.S. providers are required under 18 U.S.C. § 2258A to report apparent CSAM they become aware of, but the statute does not require them to look for it — so the volume reflects the diligence of a self-selecting set of large platforms far more than it reflects the underlying population of offenders or images.",
          },
          {
            type: "h3",
            text: "The dark figure: what detection cannot count",
          },
          {
            type: "p",
            html: "Every figure above shares one limitation: it measures detected material, and detection is non-random. Criminology calls the gap between recorded and actual offending the <strong>\"dark figure\"</strong> of crime, and for CSAM that figure is both large and unquantifiable in principle. Detection is concentrated where scanning is deployed and content is hash-matchable; it falls off sharply for end-to-end encrypted channels, peer-to-peer file sharing, the Tor-based dark web, self-hosted infrastructure in non-cooperating jurisdictions, and — most consequentially — for abuse that is never recorded as media at all, or recorded and never shared online. Contact abuse that produces no distributed file generates no CyberTipline report, no IWF assessment, and no hash hit.",
          },
          {
            type: "p",
            html: "This makes \"prevalence\" and \"detection\" categorically different quantities that are routinely conflated. A rise in detected volume is consistent with at least four distinct underlying realities — more production, more sharing of existing material, better or more widely deployed detection, or a change in reporting/statutory obligations — and the data almost never distinguish among them. Thorn's own framing is the appropriate epistemic stance: <strong>\"Lower numbers don't necessarily mean less abuse. In some cases, they mean less visibility into it.\"</strong> The 2024 CyberTipline decline (a bundling artifact) and the 2025 AI surge (a checkbox artifact) are the same error in opposite directions.",
          },
          {
            type: "p",
            html: "For journalists, policymakers, and compliance leads, the operational rule that follows is narrow but firm: a year-over-year percentage change in any CSAM metric should be presumed to reflect a methodology, deployment, or statutory change until proven otherwise. Where production is genuinely changing — as the IWF's bounded AI figures and survivor reports of recirculated material suggest in specific subdomains — the evidence comes from careful, definitionally-stable, manually-verified counts, not from the largest and most-quoted aggregate numbers.",
          },
          {
            type: "h3",
            text: "Geography and platform concentration",
          },
          {
            type: "p",
            html: "Hosting of CSAM is geographically concentrated and, importantly, concentrated in cooperative Western jurisdictions rather than lawless ones — because that is where cheap, reliable, high-bandwidth hosting exists and where the IWF can actually see it. In 2024 the <a href=\"https://www.iwf.org.uk/news-media/news/charity-raises-alarm-over-surge-in-level-of-child-sexual-abuse-imagery-hosted-in-eu/\">IWF traced 62% of the webpages it actioned to hosting services in EU countries</a> — 181,112 webpages, an 11-percentage-point rise on 2023. The single largest host country remained the <strong>Netherlands at 29% of the global total (83,037 URLs)</strong>, down from 33% in 2023, with sharp increases in Bulgaria, Romania, Lithuania and Poland; Poland's actioned URLs jumped from 94 in 2023 to 8,077 in 2024.",
          },
          {
            type: "p",
            html: "These host-country league tables, published annually by the IWF, are frequently misread as showing where offenders or victims are located. They show neither. They show where abusive content is <em>stored</em>, which tracks the global data-center industry and the IWF's UK/EU-centric vantage point. A country topping the list is generally a country with abundant commercial hosting and reasonable cooperation, not a country with permissive law; jurisdictions that host content but do not cooperate are systematically under-represented because their content is harder to detect, attribute, and action.",
          },
          {
            type: "p",
            html: "By platform type, the distribution is consistent year to year: dedicated image hosts and cyberlockers dominate distribution of catalogued material (per the IWF site-type analysis), large mainstream social and cloud platforms generate the bulk of <em>CyberTipline reports</em> precisely because they scan and are legally obliged to report, and the most severe and novel material disproportionately lives on dedicated dark-web forums and encrypted channels that the reporting systems can barely reach. The asymmetry is the point: the platforms that report the most are not necessarily where the most or the worst material is — they are where detection and legal duty overlap. Whoever scans, reports.",
          },
        ],
      },
    ],
  },
  {
    slug: "interventions",
    number: "05",
    title: "Therapeutic Interventions",
    dek: "CBT and ACT show large effect sizes for problematic pornography use, with one trial achieving a 93% reduction. CSAM-specific programs — Dunkelfeld, Troubled Desire, Stop It Now!, Inform Plus, i-SOTP, CEM-COPE — have varying evidence quality. This chapter also covers survivors of CSAM circulation, whose ongoing-harm experience requires different clinical scaffolding than standard sexual-trauma protocols.",
    readingMinutes: 19,
    sections: [
      {
        id: "porn-treatments",
        heading: "Pornography addiction treatments",
        blocks: [
          {
            type: "p",
            html: "<strong>Cognitive Behavioral Therapy (CBT)</strong> is the most widely used and best-evidenced treatment for problematic pornography use. A 2025 meta-analysis in the <em>Journal of Behavioral Addictions</em> by López-Pinar, Esparza-Reig, and Bőthe (20 studies, 2,021 participants) found that psychotherapy — primarily CBT and ACT — produced large effect sizes for PPU reduction (SMD = 1.05), frequency/duration reduction (SMD = 1.07), and sexual compulsivity (SMD = 1.02), with gains maintained at follow-up (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC12231474/'>Journal of Behavioral Addictions</a>).",
          },
          {
            type: "p",
            html: "<strong>Cognitive bibliotherapy</strong> delivers that same cognitive model as structured self-administered reading, which matters because shame keeps many people with problematic use from ever reaching a clinician. The Stanford psychiatrist <a href='https://feelinggood.com/'>David D. Burns</a>, who trained under cognitive-therapy founder Aaron Beck, brought the approach to a general readership in <em>Feeling Good: The New Mood Therapy</em> (1980) and popularized the widely-taught list of ten cognitive distortions — all-or-nothing thinking, overgeneralization, <em>should</em> statements, labeling, and the rest — that name the thought patterns CBT works on. Surveys of US and Canadian mental-health professionals rank <em>Feeling Good</em> the self-help book most often &ldquo;prescribed&rdquo; for depression, and a meta-analysis of cognitive bibliotherapy found a large pooled effect on depressive symptoms (<a href='https://pubmed.ncbi.nlm.nih.gov/9194011/'>Cuijpers, 1997</a>). That direct evidence base is for depression and anxiety, not problematic pornography use specifically — but the distortions it trains readers to catch (the all-or-nothing &ldquo;I have ruined everything,&rdquo; the shame-laden labeling of the self) are the same engine that drives compulsive use as escape and then blocks help-seeking, which makes structured bibliotherapy a low-cost on-ramp to the skills the clinician-delivered CBT above formalizes. Burns's site hosts the free <a href='https://feelinggood.com/'>Feeling Good podcast</a> and free distortion-based depression and anxiety courses.",
          },
          {
            type: "p",
            html: "<strong>Acceptance and Commitment Therapy (ACT)</strong> shows equivalently strong results. The landmark Utah State University randomized clinical trial by Twohig and colleagues found a 93% reduction in pornography viewing for the ACT treatment group versus 21% for waitlist controls. At post-treatment, 54% had ceased viewing entirely; at 3-month follow-up, 74% maintained at least a 70% reduction (<a href='https://www.usu.edu/today/story/usu-research-yields-dramatic-results-in-treatment-for-pornography-addiction'>Utah State University</a>). ACT is particularly suited to PPU because it directly addresses the &ldquo;control paradox&rdquo; — efforts to suppress urges often strengthen them.",
          },
          {
            type: "p",
            html: "<strong>Twelve-step programs</strong> (Sex Addicts Anonymous, Sexaholics Anonymous, Porn Addicts Anonymous) provide community accountability. A 2018 study in the <em>Journal of Behavioral Addictions</em> found that advancement in the SA program significantly predicted lower CSB severity, improved self-control, and higher well-being (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC6174596/'>Journal of Behavioral Addictions</a>). <strong>Mindfulness-Based Relapse Prevention</strong> shows promise: a pilot study found significant reductions in time spent viewing pornography and in anxiety, depression, and obsessive-compulsive symptoms (<a href='https://escholarship.org/uc/item/0s04g512'>eScholarship</a>).",
          },
          {
            type: "p",
            html: "<strong>Pharmacological approaches</strong> remain off-label but clinically important. SSRIs are considered first-line pharmacological treatment, reducing obsessive thoughts and sexual urges. Naltrexone, an opioid receptor antagonist, shows strong results: case literature documents complete control over sexual urges at 100–150 mg/day (<a href='https://hal.sorbonne-universite.fr/hal-02880933v1/document'>HAL Sorbonne</a>). The World Federation of Societies of Biological Psychiatry recommends combined psychotherapy plus pharmacotherapy over either alone. Relapse rates remain significant: 60–75% of individuals experience at least one relapse within the first year, though rates decline substantially after two years of sustained recovery.",
          },
          {
            type: "table",
            caption: "Evidence summary for major pornography addiction interventions",
            headers: ["Intervention", "Effect size / Key outcome", "Evidence level"],
            rows: [
              ["CBT", "SMD 1.05 (large) for PPU reduction", "Strong (meta-analysis, multiple RCTs)"],
              ["ACT", "92% viewing reduction; 54% cessation", "Strong (RCT)"],
              ["Mindfulness-MBRP", "Significant reduction in use + distress", "Moderate (pilot RCT)"],
              ["12-Step programs", "Step advancement predicts reduced CSB", "Moderate (correlational)"],
              ["Naltrexone", "Complete impulse control at 100–150 mg/day", "Moderate (case series)"],
              ["SSRIs", "First-line; reduces urges + treats comorbidities", "Moderate (open-label)"],
            ],
          },
        ],
      },
      {
        id: "csam-treatment",
        heading: "CSAM offender treatment programs",
        blocks: [
          {
            type: "p",
            html: "Traditional sex offender programs designed for contact offenders produce little meaningful change in CSAM-only offenders (<a href='https://www.aic.gov.au/sites/default/files/2020-10/ti607_enhancing_evidence-based_treatment_of_CSAM_offenders.pdf'>Australian Institute of Criminology</a>). This has driven development of specialized programs.",
          },
          {
            type: "p",
            html: "<strong>CEM-COPE</strong> (Australia) draws from ACT, CBT, and DBT in a 20-hour group format targeting emotional regulation, problematic internet use, and relapse prevention. The UK's <strong>i-SOTP/i-Horizon</strong> program (46–70 hours) and <strong>Inform Plus</strong> (25 hours) target pre-conviction populations with demonstrated improvements in pro-offending attitudes, socio-affective functioning, and mental health.",
          },
          {
            type: "p",
            html: "Germany's <strong>Prevention Project Dunkelfeld</strong> (&ldquo;Don't Offend&rdquo;) is the world's most studied primary prevention program for pedophilic individuals. Founded in Berlin in 2005 at Charité – Universitätsmedizin Berlin, it provides free, medically confidential treatment combining behavioral therapy, sexual medicine, and pharmacological options. A 2024 long-term follow-up found 0% new CSA among participants without prior CSA history, but a troublingly high 89.1% CSAM continuation rate (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC11568044/'>Journal of Prevention</a>).",
          },
          {
            type: "p",
            html: "Because Dunkelfeld&apos;s in-person treatment is geographically limited to Germany, Charité Berlin also operates <strong>Troubled Desire</strong>, a free, anonymous online platform that extends the same methodology globally. The site offers a self-assessment session, knowledge resources, online counseling, and pathways to therapist contact in 11 languages, with a Tor address for additional privacy. EU-cofunded (<a href='https://troubled-desire.com/en/'>Troubled Desire</a>).",
          },
          {
            type: "p",
            html: "The <strong>Stop It Now!</strong> helpline provides free, confidential support in the US, UK, and Netherlands for individuals concerned about their own or others' behavior, with pilot studies confirming benefits in modifying actions to minimize abuse risk (<a href='https://pubmed.ncbi.nlm.nih.gov/26701278/'>PubMed</a>).",
          },
          {
            type: "p",
            html: "Clinical work in this area is shaped by the assessment instruments it can draw on. Actuarial risk tools (Static-99R, Stable-2007) have the strongest evidence base. Computerized viewing-time tools like the <strong>Abel Assessment for Sexual Interest (AASI-3)</strong> are widely used despite ongoing court-admissibility and methodological controversies, and the Alameda-based developer&apos;s <strong>Diana Screen</strong> is marketed as an institutional pre-hire screen for adults working with children (<a href='https://dianascreen.com/'>Diana Screen</a>). See <a href='/report/escalation#risk-factors'>Chapter 03 &rarr; Risk factors</a> for caveats on these instruments.",
          },
          {
            type: "callout",
            tone: "warning",
            title: "A critical therapeutic distinction",
            html: "Intensive treatment of low-risk offenders may paradoxically <strong>increase recidivism by 21%</strong>, reinforcing the importance of the Risk-Need-Responsivity model's risk-matched treatment intensity (<a href='https://smart.ojp.gov/somapi/chapter-7-effectiveness-treatment-adult-sex-offenders'>OJP SOMAPI</a>).",
          },
        ],
      },
      {
        id: "emerging",
        heading: "Emerging approaches",
        blocks: [
          {
            type: "p",
            html: "<strong>Neurofeedback</strong> trains the brain toward healthier patterns through real-time EEG feedback. Paradise Creek Recovery Center integrates it into residential treatment for sexual addictions, reporting measurable improvements in self-control and mood within weeks — though evidence remains preliminary and primarily clinical (<a href='https://www.paradisecreekrecovery.com/rewiring-the-brain-with-neurofeedback-to-overcome-compulsive-sexual-behaviors/'>Paradise Creek</a>).",
          },
          {
            type: "p",
            html: "<strong>AI-assisted therapy</strong> includes 24/7 AI coaching apps like QUITTR, Covenant Eyes' AI-powered screen monitoring with accountability partner integration, and chatbot-assisted CBT delivery. The dual-edged nature of AI in this space is significant: hyper-personalized AI-generated pornography may accelerate desensitization and lower the threshold for compulsive use, while AI companion chatbots may reinforce fantasy over reality. Clinicians increasingly call for AI to be incorporated into relapse prevention planning as a specific modality of compulsive use requiring therapeutic attention (<a href='https://www.psychiatrynyc.com/blog/a-new-crisis-the-impact-of-ai-on-sex-addiction/'>Fifth Avenue Psychiatry</a>).",
          },
          {
            type: "p",
            html: "<strong>Peer support networks</strong> like NoFap (957,000+ members), r/PornFree, and Your Brain Rebalanced provide community and accountability. Research from London South Bank University found that NoFap members construct a recovery narrative around overcoming vulnerability and restoring identity, meeting genuine psychological needs — though the commitment to strict abstinence framing was also &ldquo;a major factor for maintaining distress&rdquo; when lapses occur (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC8275519/'>Archives of Sexual Behavior</a>). These communities function best as complements to professional treatment rather than standalone solutions.",
          },
        ],
      },
      {
        id: "prevention-programs-deep-dive",
        heading: "Prevention programs: the evidence base in detail",
        blocks: [
          {
            type: "h3",
            text: "Prevention Project Dunkelfeld: the 2024 long-term follow-up, read carefully",
          },
          {
            type: "p",
            html: "Programs designed to prevent or interrupt the use of child sexual abuse material now span three continents and a decade of evaluation, from Germany's Prevention Project Dunkelfeld and its online offshoot Troubled Desire, to the Lucy Faithfull Foundation's Stop It Now! and Inform Plus in the United Kingdom, to Australia's CEM-COPE. The field has matured enough to support a meaningful claim: that CSAM-only offenders are a distinct population whose treatment needs differ from those of contact offenders, and that intensity must be calibrated to assessed risk rather than to the severity of the offense category alone. But the evidentiary foundation remains thinner than the policy weight placed on it. Almost every published evaluation is an uncontrolled pre-post cohort study; the single longest follow-up of a dedicated prevention cohort reports a CSAM-continuation rate near 90 percent; and several widely deployed programs have no published outcome data at all. What follows is an attempt to state precisely what the evidence does and does not show.",
          },
          {
            type: "p",
            html: "The most cited datapoint in offender-prevention advocacy comes from the Prevention Project Dunkelfeld (PPD), the Berlin-based program offering confidential, non-judicial treatment to self-referred men with pedophilic or hebephilic disorder. In 2024, the project's research group published a long-term follow-up in the <a href=\"https://link.springer.com/article/10.1007/s10935-024-00792-0\">Journal of Prevention</a> (Schuler, Gieseler, Schweder, Mokros, Beier and colleagues; PubMed <a href=\"https://pubmed.ncbi.nlm.nih.gov/39269516/\">39269516</a>, full text at <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC11568044/\">PMC11568044</a>). Of 110 men who had completed treatment between 2005 and 2017, 56 (50.9 percent) were reached for follow-up an average of 74 months (range 12–130) after treatment. This is, to date, the longest-horizon outcome study of a dedicated, non-forensic CSAM-prevention cohort.",
          },
          {
            type: "p",
            html: "The headline finding that advocates most often cite is real but narrow: among the 30 men with <strong>no prior history of contact child sexual abuse, there were zero new contact offenses</strong> over the follow-up. Among the 26 men who did report prior contact abuse, 7.7 percent (2 of 26; 95% CI 2.1–24.1 percent) reoffended — one an exclusively pedophilic man who abused his girlfriend's 8-year-old son while on medication, the other a man who concealed his probation status. The authors note that this self-reported contact-recidivism rate is broadly comparable to the officially recorded sexual recidivism rates established meta-analytically in convicted populations.",
          },
          {
            type: "p",
            html: "The far less-quoted finding is the CSAM-continuation rate. Of the men who had used CSAM before treatment, <strong>89.1 percent (95% CI 77.0–95.3) reported continued use at follow-up</strong> — up from 76.1 percent immediately post-treatment. This is dramatically higher than the roughly 2–13 percent recidivism reported in convicted offender samples (Helmus and colleagues). Crucially, the picture is not uniformly bleak: among those who continued, 45.2 percent reported a reduction in the severity of material consumed, with the modal category shifting from severe content toward 'erotic posing,' and only about 5 percent escalating. One man with no prior CSAM use began consuming it during follow-up. On cognition, only one of three measured constructs held: improvements in CSAM-supportive attitudes (ASENIC scale) persisted with a large effect (d ≈ 0.98), while gains in CSA-supportive attitudes and cognitive victim empathy decayed back toward baseline.",
          },
          {
            type: "h3",
            text: "What the Dunkelfeld data cannot establish — and the König exchange",
          },
          {
            type: "p",
            html: "The PPD follow-up is observational and, by the authors' own admission, cannot support causal claims. There was <strong>no control group</strong>; outcomes were <strong>self-reported</strong> without access to criminal records, so problematic behavior was likely under-reported; and 36 percent of the eligible cohort could not be located, raising the possibility that those lost to follow-up differed systematically from those retained. The authors are explicit: 'The purely observational nature of this study and the lack of a control group impede causal conclusions; therefore, well-controlled studies are imperative.' They further concede that iatrogenic effects 'cannot be completely ruled out,' while arguing that persistent erotic attraction is an at-least-equally plausible explanation for the observed continuation.",
          },
          {
            type: "p",
            html: "This methodological fragility has been litigated in print. A 2025 critique by König prompted a published rebuttal from the project group, <a href=\"https://link.springer.com/article/10.1007/s10935-025-00859-6\">'Preventing Child Sexual Abuse in the Dunkelfeld: A Public Health Imperative Requiring Context-Appropriate Science — A Response to König (2025),'</a> also in the Journal of Prevention. The dispute centers on whether the absence of a randomized control, combined with the very high CSAM-continuation rate, undermines the program's foundational claim to prevent harm, or whether the ethical impossibility of withholding treatment from a help-seeking, high-distress population makes context-appropriate observational science the correct standard. Readers should treat the 'zero new contact offenses among first-time-presenting men' result as suggestive and ethically important, not as proof of efficacy. It is the kind of finding that justifies continued investment and better-controlled study designs, not a settled effect size.",
          },
          {
            type: "h3",
            text: "Troubled Desire: scaling prevention online, with usage data but no outcome trial",
          },
          {
            type: "p",
            html: "<a href=\"https://troubled-desire.com/en/about\">Troubled Desire</a>, operated by the Institute of Sexology and Sexual Medicine at Charité – Universitätsmedizin Berlin under Klaus M. Beier, is the leading example of online-delivered, anonymous offender prevention. It extends the Dunkelfeld model into a self-help architecture: an anonymous self-assessment followed by self-management training modules drawn from the Berlin Dissexuality Therapy program, addressing emotion regulation, mindfulness, and integration of sexual interest into the self-concept. It is deliberately built for reach into jurisdictions without confidential treatment options: the public site now lists <strong>11 languages</strong> (German, English, Czech, Spanish, Portuguese, Arabic, Tagalog, Polish, Romanian, Maltese, and Lithuanian) and provides a <strong>Tor onion address</strong> for anonymous access. Its expansion has been supported by <strong>European Commission funding</strong>, including the STOP-CSAM project launched in 2023.",
          },
          {
            type: "p",
            html: "The best public usage data come from a descriptive analysis in <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC7935650/\">JMIR Mental Health (Schuler et al., 2021)</a>, covering the period when seven language versions were live. Of 4,161 users who completed the self-assessment, 78.9 percent (3,281) reported a sexual interest in children; the cohort was 90.9 percent male, roughly 80 percent under age 40, with the single most common age band being 19–21. Access was concentrated in Germany (54.7 percent) and the United States (11.4 percent). These figures demonstrate <strong>uptake and reach</strong> — that an anonymous tool can attract a young, distressed, partly undetected population — but they are explicitly not outcome data. There is no published randomized or controlled evaluation establishing that completing the modules reduces CSAM use or contact offending. On the question of whether online self-management changes behavior, Troubled Desire is the strongest delivery model and the clearest evidence gap simultaneously.",
          },
          {
            type: "h3",
            text: "Stop It Now! and the UK deterrence-campaign evidence",
          },
          {
            type: "p",
            html: "The Lucy Faithfull Foundation's Stop It Now! helpline (UK and Ireland, with sibling programs in the United States and the Netherlands) is the longest-running confidential prevention service of its kind. The most rigorous published evaluation of its public-facing deterrence work is <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC11311905/\">'The Impact of a Public Health Campaign to Deter Viewing of Child Sexual Abuse Images Online'</a> (Newman and colleagues, 2023), which triangulated 11,190 unique helpline callers, 109,432 new website visitors, and three online surveys. Active campaign periods produced measurable surges in help-seeking — new-caller rates rising from roughly 10.8 to 14.8 per day, and website traffic up 123.6 percent between campaigns. Among a small, self-selected survey subset (n=53), 66 percent reported some behavioral change, and of those, 80 percent said they had stopped viewing child sexual abuse images.",
          },
          {
            type: "p",
            html: "The authors are careful, and the caveats are decisive: these are self-reported, unverified outcomes from a 'biased sample' of unusually motivated respondents, with no control group, and — most importantly — the measures capture help-seeking and self-reported intent, <strong>not verified deterrence from offending</strong>. The Foundation has acknowledged this gap directly. Under its <a href=\"https://www.lucyfaithfull.org.uk/stop-it-now-chosen-as-part-of-flagship-global-research-project/\">Prevention Global</a> initiative, its in-house team is now conducting two larger evaluations of the Stop It Now! helpline and the Get Help self-help resource, the results of which (through the 2024–2026 cycle) are intended to move the evidence beyond the 2014 independent NatCen evaluation and the campaign-impact case study. As of this writing, the durable, controlled efficacy evidence those evaluations are designed to produce is not yet published.",
          },
          {
            type: "h3",
            text: "Inform Plus, i-SOTP, and the UK community-treatment record",
          },
          {
            type: "p",
            html: "Two UK community programs supply the best-quantified pre-post evidence for CSAM-specific intervention. <a href=\"https://ecsa.lucyfaithfull.org/inform-plus\">Inform Plus</a>, the Lucy Faithfull Foundation's psycho-educational program for people who have downloaded indecent images, was evaluated by Gillespie, Bailey, Squire, Carey, Eldridge and Beech in <em>Sexual Abuse: A Journal of Research and Treatment</em> (2016). In a sample of 92 adult men completing pre- and post-program measures, the program produced reductions in depression, anxiety and stress; improvements in locus of control and self-esteem; and decreases in offense-supportive distorted cognitions, with gains persisting 8–12 weeks post-completion. The authors note that identifying a suitable control group was not possible, and the study reports no recidivism outcomes.",
          },
          {
            type: "p",
            html: "The accredited probation-delivered counterpart, the Internet Sex Offender Treatment Programme (<strong>i-SOTP</strong>), was accredited for community use in England and Wales in 2006 and evaluated by Middleton, Mandeville-Norden and Hayes (Journal of Sexual Aggression, 2009). Across 264 convicted internet offenders, pre-post psychometrics showed improved socio-affective functioning and reduced pro-offending attitudes. The related <strong>Inform Younger</strong> (for younger adults) and the prison/probation <strong>Horizon</strong> program (which subsumed i-SOTP work after the 2017 restructuring of England and Wales's sex-offender treatment provision) report directional improvement across treatment targets, but — like nearly everything in this field — lack controlled recidivism evidence. The consistent signal across Inform Plus and i-SOTP is that <strong>relatively short psycho-educational interventions improve the dynamic risk markers</strong> (affect, self-management, distorted cognitions) thought to underlie CSAM use; the consistent gap is that none of these UK evaluations demonstrates a reduction in actual reoffending against a comparison group.",
          },
          {
            type: "h3",
            text: "CEM-COPE and the integrative Australian model",
          },
          {
            type: "p",
            html: "Australia's CEM-COPE (Coping with Child Exploitation Material Use) program, developed in 2019 by Forensicare (the Victorian Institute of Forensic Mental Health) under contract to Corrections Victoria, represents the most theoretically integrative of the dedicated CSAM programs. It was described by Stephens, McLean, Cubitt and others in the Australian Institute of Criminology's <a href=\"https://www.aic.gov.au/publications/tandi/tandi607\">Trends & Issues paper 607</a>. The program is structured as 10 two-hour group sessions and explicitly excludes those who have produced CSAM, engaged in solicitation, or committed current or prior contact offenses — operationalizing the CSAM-only/contact distinction at the level of eligibility.",
          },
          {
            type: "p",
            html: "The associated treatment framework (see <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC11639055/\">Gobbett, McLean and colleagues, Psychiatry, Psychology and Law, 2023</a>) draws on an integrative blend of <strong>cognitive-behavioral therapy, acceptance and commitment therapy (ACT), dialectical-behavior-therapy-derived emotion-regulation skills, and compassion-focused therapy</strong>, organized around the Risk-Need-Responsivity and Good Lives models and informed by the ERICSO (Estimated Risk of Internet Child Sexual Offending) risk tool. Early reported outcomes are encouraging on process measures — the AIC work suggests CSEM users are amenable to community treatment with beneficial change in affective and interpersonal functioning following psycho-education. But CEM-COPE belongs to the group of programs (alongside Troubled Desire and iHorizon) with <strong>no published controlled outcome or recidivism evaluation</strong>. An international evaluation of repeat-offending outcomes is being pursued through Australia's National Centre for Action on Child Sexual Abuse; its results are not yet available.",
          },
          {
            type: "h3",
            text: "Differentiation, modality, and pharmacological adjuncts",
          },
          {
            type: "p",
            html: "The case for treating CSAM-only offenders as a distinct population is now empirical, not merely theoretical. Beyond the actuarial work distinguishing CSAM-only from contact offenders, the clearest cautionary datapoint concerns <strong>modality and group composition</strong>: in mixed homogeneous groups, the Australian framework literature reports that 91 percent of internet/CAM-only participants relapsed despite treatment, versus 20 percent of contact offenders in the same program — a result that argues strongly against blending the two populations and, more broadly, that has pushed leading clinicians (notably the CEM-COPE-adjacent framework) toward <strong>individualized over group-based delivery</strong> for the CSAM-only cohort. The wider sex-offender-treatment literature does not show group therapy to be inferior per se, but for this specific population the contamination and mismatch risks are real.",
          },
          {
            type: "p",
            html: "Pharmacological treatment functions as an adjunct, not a stand-alone intervention, and is governed by the <a href=\"https://www.tandfonline.com/doi/abs/10.1080/15622975.2020.1744723\">WFSBP 2020 guidelines for the pharmacological treatment of paraphilic disorders</a> (Thibaut and colleagues), which set out a six-level algorithm escalating by risk. In routine clinical practice the laddered pattern is: <strong>SSRIs</strong> (and, for compulsive-sexual-behavior presentations, sometimes augmented with <strong>naltrexone</strong>) as the lowest-intensity option for men with milder paraphilic intensity or comorbid depression/compulsivity; <strong>antiandrogens such as cyproterone acetate</strong> at intermediate levels; and <strong>GnRH agonists (e.g., triptorelin, leuprolide)</strong> reserved for the highest-risk individuals where substantial suppression of sexual drive is clinically indicated and consented to. In the PPD follow-up itself, 28.6 percent of participants had used medication (SSRIs, androgen antagonists, GnRH agonists) during treatment, with only 6 still medicated at follow-up — a reminder that pharmacotherapy in voluntary prevention settings is typically time-limited and adjunctive to psychological work, and that the evidence base for these agents, like the behavioral programs they accompany, rests largely on guideline consensus and small trials rather than large randomized data.",
          },
        ],
      },
      {
        id: "survivors-and-ongoing-harm",
        heading: "Survivors of CSAM circulation: ongoing harm as a category",
        blocks: [
          {
            type: "h3",
            text: "Ongoing victimization as a category of harm, not an aggravating factor",
          },
          {
            type: "p",
            html: "Most frameworks for sexual abuse assume a discrete event: harm occurs, then recovery begins. Child sexual abuse material breaks that assumption. When a child's abuse is photographed or filmed and the recording circulates, the victimization becomes structurally ongoing — re-instantiated each time the file is traded, each time the survivor is recognized, each time a takedown almost works. The clinical, legal, and advocacy literature has increasingly treated this as a distinct category of harm rather than an aggravating feature of contact abuse. This section surfaces what survivors themselves have said about that reality — principally through the Phoenix 11, the Canadian Centre for Child Protection's survivor research, and U.S. restitution jurisprudence — and attends throughout to the tension between supporting survivor advocacy and speaking over it.",
          },
          {
            type: "p",
            html: "Clinicians and survivors describe CSAM circulation as producing a qualitatively distinct injury — one that resists the temporal logic of recovery. In the Canadian Centre for Child Protection's (C3P) advocacy report, a survivor identified as Claire put it plainly: <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"there's always a bit that's stuck there, because it's ongoing and people are still using it for sexual satisfaction.\"</a> The clinical literature echoes this. In her work with children victimized in CSAM, Leonard (2010) observed that continuous circulation can <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">prevent survivors from \"putting their abuse in the past since their victimisation is ongoing at the hands of CSAM consumers.\"</a> A 2019 study of 107 CSAM survivors found that guilt and shame tied to the ongoing circulation of abuse images correlated with higher levels of trauma and distress, distinct from the contact abuse itself.",
          },
          {
            type: "p",
            html: "U.S. courts have formally recognized this distinction. As C3P's researchers note, lawyers in the United States <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"have drawn on the legal statements of survivors to establish that ongoing CSAM distribution and consumption is an additional harm distinct from other experiences of sexual abuse\"</a> (citing Cassell & Marsh, 2019; Rothman, 2010; Sheldon-Sherman, 2013). This is the conceptual foundation beneath the restitution regime discussed below: the law now treats the trafficking of a survivor's childhood images as an injury that each possessor independently inflicts.",
          },
          {
            type: "p",
            html: "The re-traumatization is not abstract. C3P's companion guide for professionals states that clients are <a href=\"https://content.c3p.ca/pdfs/C3P_WorkingWithSurvivors_Professionals_en.pdf\">\"traumatised and continuously retraumatised as soon as they're notified or have knowledge of their image having been traded,\"</a> and that ongoing distribution \"can keep survivors in a state of persistent retraumatisation.\" The injury is reactivated by the very systems — notification, monitoring, takedown — designed to help.",
          },
          {
            type: "h3",
            text: "The International Survivors' Survey: what the data show",
          },
          {
            type: "p",
            html: "The most cited quantitative portrait of this population is C3P's <a href=\"https://protectchildren.ca/en/resources-research/survivors-survey-results/\">International Survivors' Survey</a>, launched in January 2016 with results released in September 2017. Over roughly 18 months, 150 adult survivors whose childhood abuse was recorded and distributed contributed responses — at the time, the first dataset of its kind on the role of the internet in this form of abuse.",
          },
          {
            type: "p",
            html: "The findings document both the severity of the underlying abuse and the specific weight of circulation. The abuse typically began very young and was prolonged: 56% reported abuse beginning before age four, 87% before age eleven, and 42% endured abuse for ten years or more. A majority — 82% — said the primary offender was a parent or member of the extended family, and roughly half (74 respondents) described organized abuse involving multiple offenders. Threats were common; 67% were threatened with physical harm, including death threats.",
          },
          {
            type: "p",
            html: "The survey isolates harms that follow specifically from recording and distribution. Nearly <strong>70% of respondents lived with fear of being recognized</strong> by someone who had seen their imagery, and 30 respondents reported they actually had been identified by such a person — collapsing the boundary between the online image and offline safety. Eighty-five percent anticipated needing ongoing or future therapy. These figures should be read as indicative rather than representative: the sample is self-selected, skewed toward survivors connected to support services, and toward those well enough to participate.",
          },
          {
            type: "h3",
            text: "The Phoenix 11: survivors organizing on their own terms",
          },
          {
            type: "p",
            html: "The <a href=\"https://thephoenix11.com/statements/phoenix11-five-country-statement/\">Phoenix 11</a> are eleven women whose childhood sexual abuse was recorded and continues to circulate online. Convened in 2018 by C3P and the U.S. National Center for Missing & Exploited Children (NCMEC), they describe themselves as \"the world's first collective of child sexual abuse material survivor advocates.\" A parallel male survivor group, the Chicago Males, formed in 2020. Their existence reframes the policy conversation: as C3P's researchers observe, <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"for the first time, politicians and technology companies are accountable to the people who are most directly affected by their decisions on CSAM.\"</a>",
          },
          {
            type: "p",
            html: "Their policy positions are concrete and, at points, sharply at odds with the privacy framing dominant in encryption debates. In a January 24, 2024 letter submitted to the Senate Judiciary Committee ahead of Mark Zuckerberg's testimony, the group opposed Meta's rollout of end-to-end encryption on Messenger and Instagram without CSAM safeguards, arguing it <a href=\"https://protectchildren.ca/en/press-and-media/news-releases/2024/phoenix-11-letter-to-senate\">\"prioritizes profit over children and survivors\"</a> and posing six questions, including why Meta uses client-side scanning for malware but not for known CSAM. In their statement to the Five Country Ministerial, they argued governments should <a href=\"https://thephoenix11.com/statements/phoenix11-five-country-statement/\">\"mandate that tech companies use currently available technology that detects and removes known CSAM while preserving privacy for law abiding citizens,\"</a> noting that \"tech companies are already scanning private messages for problematic malware and viruses — yet they refuse to scan for hash values to remove images of children being raped.\"",
          },
          {
            type: "p",
            html: "Critically, the Phoenix 11 reject tools designed for a different population. They have stated that consent-based removal mechanisms <a href=\"https://thephoenix11.com/statements/phoenix11-five-country-statement/\">\"do not help us because we never had ownership over the imagery of our abuse and did not consent to its creation\"</a> — a direct caution against assuming that frameworks built for non-consensual intimate image abuse among adults map onto CSAM survivors.",
          },
          {
            type: "h3",
            text: "The Survivor Services Program and the discovery problem",
          },
          {
            type: "p",
            html: "C3P operates a dedicated <a href=\"https://protectchildren.ca/en/stand-with-survivors/\">survivor support function</a> for people whose abuse imagery has been shared online, as well as victims of luring, sextortion, and non-consensual distribution. Per C3P's own description, the team works to disrupt the availability of abusive material, connect survivors and caregivers to additional support, help survivors navigate multi-system responses, and assist with victim impact statements for criminal proceedings — a combination of takedown, case coordination, and clinical referral that few other organizations provide in one place. Removal is operationalized through <a href=\"https://protectchildren.ca/en/stand-with-survivors/\">Project Arachnid</a>, C3P's detection-and-notice platform, which the organization reports has driven the removal of more than six million images.",
          },
          {
            type: "p",
            html: "The \"discovery problem\" — how a survivor learns their imagery is circulating — is one of the most destabilizing features of this harm. As C3P describes it, survivors who know imagery was created but are unsure whether it spread <a href=\"https://www.protectchildren.ca/en/\">\"may learn it is online in unexpected ways,\"</a> which is why structured notification \"facilitates safety planning, a critical component of recovery.\" Without it, discovery often arrives through the worst possible channel: direct harassment. In C3P's September 4, 2024 report, <a href=\"https://protectchildren.ca/en/press-and-media/news-releases/2024/new-report-csam-removal-survivor-experiences\">Experiences of child sexual abuse material survivors</a>, one survivor recounted, \"people have mailed me the images and sent them through Twitter, threatening to dox me.\"",
          },
          {
            type: "p",
            html: "Takedown itself becomes a chronic, unpaid labor. A survivor in the same report said, <a href=\"https://protectchildren.ca/en/press-and-media/news-releases/2024/new-report-csam-removal-survivor-experiences\">\"We shouldn't have to spend 2+ hours every single day looking for our own abuse.\"</a> The C3P advocacy report frames this as a safety necessity, not a choice: because law enforcement and agencies typically do not address offenders who target identified survivors, <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"victims and survivors can spend considerable time online seeking out and reporting their own CSAM to maintain their safety\"</a> (Salter & Hanson, 2021).",
          },
          {
            type: "h3",
            text: "Restitution after Paroline: 18 U.S.C. § 2259 and the AVAA",
          },
          {
            type: "p",
            html: "U.S. federal law gives CSAM survivors a restitution mechanism unavailable in most jurisdictions — though one whose architecture was reshaped by a single Supreme Court decision. In <a href=\"https://supreme.justia.com/cases/federal/us/572/434/\">Paroline v. United States, 572 U.S. 434 (2014)</a>, the survivor known by the pseudonym \"Amy\" sought roughly $3.4 million from a defendant who possessed two images of her abuse. The Court held that restitution under 18 U.S.C. § 2259 is available only to the extent a defendant's offense <strong>proximately caused</strong> the victim's losses, rejecting the Fifth Circuit's rule that each possessor was liable for the entire aggregate loss. District courts were instead instructed to award an amount reflecting <a href=\"https://www.law.cornell.edu/supremecourt/text/12-8561\">\"the defendant's relative role in the causal process\"</a> — neither \"severe\" nor a \"token or nominal amount\" — weighing factors such as the number of past and likely future defendants and whether the defendant reproduced or distributed the images. The result, as commentators noted, was unpredictable, often modest awards and a fact-intensive calculation imposed on survivors in every case.",
          },
          {
            type: "p",
            html: "Congress responded with the <a href=\"https://www.law.cornell.edu/uscode/text/18/2259\">Amy, Vicky, and Andy Child Pornography Victim Assistance Act of 2018 (AVAA)</a>, which amended § 2259. For trafficking-type offenses the statute now sets a <strong>mandatory minimum of $3,000</strong> in restitution per defendant (§ 2259(b)(2)(B)), preserving Paroline's proximate-cause logic while guaranteeing a floor. The AVAA also created an alternative survivors can elect: <strong>\"defined monetary assistance\"</strong> of <strong>$35,000</strong> (CPI-adjusted in later years) payable once from the Child Pornography Victims Reserve under § 2259B, funded by special assessments and forfeitures (§ 2259(d)). The reserve lets a survivor obtain a fixed sum without litigating restitution against an endless series of individual possessors. The statute defines the \"full amount of the victim's losses\" expansively — medical and psychological care, therapy, lost income, attorneys' fees, and \"any other relevant losses\" (§ 2259(c)(2)).",
          },
          {
            type: "p",
            html: "The contrast with other systems is instructive, and survivor-identified. Under Canada's regime, restitution is <a href=\"https://www.protectchildren.ca/en/\">\"barely ever mentioned in cases, much less actually ordered,\"</a> and C3P documents only a single reported CSAM-creation case where restitution was considered (and denied). A Phoenix 11 member, Brianna, described the consequence of having <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"absolutely no option for restitution\"</a> in her case: she is left to \"compartmentalise\" her trauma so that she can \"put my head down and work.\"",
          },
          {
            type: "h3",
            text: "Trauma-informed care that fits — and why standard protocols fall short",
          },
          {
            type: "p",
            html: "The dominant evidence-based trauma treatments — <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC9879871/\">trauma-focused cognitive behavioral therapy (TF-CBT) and eye movement desensitization and reprocessing (EMDR)</a> — were validated largely on single-incident or bounded trauma and typically follow a phase-based model: stabilization and safety first, then trauma processing. Many CSAM survivors present instead with complex PTSD arising from prolonged, often familial abuse beginning in early childhood. The literature is candid that for this presentation, standard trauma-focused therapies reliably reduce core PTSD symptoms but show <a href=\"https://pmc.ncbi.nlm.nih.gov/articles/PMC9879871/\">\"more variable and often smaller effects for disturbances in self-organization\"</a> — the affect-regulation, self-concept, and relational disturbances central to complex trauma. This is part of why clinicians increasingly pair these modalities with parts-based and relational approaches such as Internal Family Systems, though the controlled evidence base for IFS in this population remains thin.",
          },
          {
            type: "p",
            html: "The deeper mismatch is structural. Standard sexual-assault protocols presume the index trauma is in the past and can be processed toward resolution; for CSAM survivors whose imagery still circulates, the trauma is not over. C3P survivors describe therapists who could not accommodate this. Lucy cycled through clinicians, including <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"one who did not understand why she needed to receive CSAM notifications and another who tried to use child therapy techniques on her as an adult,\"</a> and Brianna observed that therapists \"are not quite prepared to hear what we have to say\" and lack training to work with CSAM survivors. A 2022 study of Canadian mental-health workers, conducted with C3P, found a significant lack of training in recognizing and responding to online child sexual exploitation. The corollary on the survivor side: notification can itself precipitate acute crisis. Ethan described how the initial receipt of CSAM notifications <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">triggered a major crisis that, while \"devastating,\" he credits with forcing him to confront abuse he had been avoiding with alcohol and drugs</a> — a reminder that the same event can be both injurious and, with support, a turning point.",
          },
          {
            type: "h3",
            text: "Legal process, agency, and the line between support and paternalism",
          },
          {
            type: "p",
            html: "Participation in the justice system is itself a vector of re-traumatization, and survivors do not experience it as neutral. The C3P advocacy report describes survivors <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"left to their own devices to navigate the implications where offenders were convicted or not convicted, where there were simultaneous court matters or multiple prosecutions spread over time, and the consequences for their health and safety once their abusers were released.\"</a> The structure of charges can deliver its own message: Lucy explained that the pattern of charges in her case \"delivered painful messages to her about the ways in which some aspects of her abuse were considered more serious than others.\" Mandatory-reporting regimes add another bind — one survivor's therapist felt obliged to report, triggering a lengthy police investigation that ended without charges. Against this backdrop, victim impact statements and advocacy both require survivors to recount trauma publicly, repeatedly, to audiences with power over them.",
          },
          {
            type: "p",
            html: "The Salter and Woodlock research — <a href=\"https://protectchildren.ca/en/resources-research/survivor-advocacy-report/\">Step Forward. Take a Chance. You're Not Alone</a> (March 6, 2024), based on interviews with nine members of the Phoenix 11 and Chicago Males — is unusually honest about the costs of advocacy alongside its benefits. Every survivor described advocacy as personally healing, tied to finding others who understood them, but advocacy also \"came at a high emotional cost,\" requiring survivors to repeat traumatic accounts to different audiences. Brianna argued the Phoenix 11 should not have to keep <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"throwing a bunch of emotion out and retraumatising ourselves\"</a> to be respected as activists, and the report concludes flatly that <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"it is not the responsibility of CSAM victims and survivors to take up the burden of advocacy to secure their rights to safety, health, privacy, and dignity.\"</a>",
          },
          {
            type: "p",
            html: "This is where agency and paternalism are most in tension. The same survivors who found voice in advocacy insisted on controlling its terms: some Phoenix 11 members said they would <a href=\"https://content.c3p.ca/pdfs/C3P_SurvivorAdvocacyReport_en.pdf\">\"only talk about their circumstances at times and places of their choosing, when they were confident that the benefits outweighed the personal cost.\"</a> C3P's companion guide for professionals frames the ethic for those who work alongside survivors: a therapist quoted in it stressed, <a href=\"https://content.c3p.ca/pdfs/C3P_WorkingWithSurvivors_Professionals_en.pdf\">\"you want the client to have their own agency,\"</a> and that professionals must have \"done their own work\" so they are \"not projecting.\" The groups themselves were constituted by survivors making \"independent decisions,\" but within a scaffold of institutional and legal support — the practical answer to the paternalism problem being neither speaking for survivors nor abandoning them to navigate alone, but backstopping their own choices. As the broader point for anyone writing about this population: the load-bearing material in this section is survivor-authored, and it should be surfaced, not paraphrased over.",
          },
        ],
      },
    ],
  },
  {
    slug: "technology",
    number: "06",
    title: "Technology Solutions",
    dek: "From DNS filters and recovery-program apps to industrial-scale CSAM detection processing 415 billion files annually, the technology landscape spans household tools, structured behavior-change software, hash-sharing networks, distribution-and-economy patterns, the reporting pipeline from CyberTipline to arrest, and the technical detail of how perceptual hashing actually works.",
    readingMinutes: 26,
    sections: [
      {
        id: "landscape",
        heading: "The landscape",
        blocks: [
          {
            type: "p",
            html: "Technology against pornography harm operates at four distinct scales, and the most useful mental model recognizes them as a stack. At the <strong>device level</strong>, parental controls and content blockers create friction at the point of use. At the <strong>network level</strong>, DNS filters and hardware appliances block before a request leaves the home. At the <strong>application level</strong>, recovery programs build new habits and accountability tools add interpersonal stakes. And at the <strong>platform and law-enforcement level</strong>, hash-matching and AI classification surface known and novel CSAM at industrial scale — Thorn&apos;s Safer platform alone processed 415 billion files in 2025 (<a href='https://www.thorn.org/blog/safer-impact-report-2026/'>Thorn</a>).",
          },
          {
            type: "p",
            html: "Among consumer layers, the strongest configurations combine one tool from each of three rows: a <strong>blocker or DNS filter</strong> to raise the friction of access, a <strong>recovery program app</strong> to build the habit, and an <strong>accountability tool</strong> to add interpersonal consequence. Households tend to overshoot on blockers and under-invest in structure and accountability — the evidence base supports the opposite balance.",
          },
          {
            type: "p",
            html: "This chapter surveys each category in turn: accountability and monitoring software, recovery program apps, DNS and network filtering, the device-level controls now built into every major operating system, the industrial-scale CSAM detection platforms that law enforcement and large internet companies depend on, and the DRM and screen-recording protections that round out the platform layer. For a side-by-side, app-by-app comparison with platform pills and pricing, see the dedicated <a href='/apps'>Apps directory</a>.",
          },
        ],
      },
      {
        id: "accountability",
        heading: "Accountability and monitoring software",
        blocks: [
          {
            type: "p",
            html: "Consumer software for pornography accountability and monitoring spans a spectrum from screen-capture accountability systems to AI-powered social media surveillance.",
          },
          {
            type: "table",
            caption: "Comparison of major accountability and monitoring platforms",
            headers: [
              "Feature",
              "Covenant Eyes",
              "Bark Premium",
              "Qustodio",
              "Canopy",
              "Net Nanny",
              "Accountable2You",
            ],
            rows: [
              ["Primary approach", "Accountability", "AI alerts", "Comprehensive", "Image filtering", "AI web filtering", "Accountability"],
              ["Screenshot AI", "Yes (blurred)", "No", "No", "No", "No", "Logs only"],
              ["Social media", "Screen capture", "30+ platforms", "Android only", "No", "No", "Activity logs"],
              ["Incognito detect", "Yes", "No", "No", "No", "No", "Yes"],
              ["Partner alerts", "Yes (core)", "No", "No", "No", "No", "Yes (core)"],
              ["Monthly cost", "$17–$27", "$14", "$4.58–$8.33", "$8–$10", "$3.33–$7.50", "$7–$16"],
              ["iOS limitation", "Safari only", "WiFi only", "Limited social", "Some", "Good", "Limited"],
            ],
          },
          {
            type: "p",
            html: "<strong>Covenant Eyes</strong> is the market leader, using AI-powered screenshot analysis that captures the screen at least once per minute, analyzes content on-device, and sends blurred flagged images to a chosen accountability partner. It defeats incognito mode since it captures screen content regardless of browser mode. Twenty-plus years in market and over a million users have produced mature support and documentation, and the bundled &ldquo;Victory&rdquo; app now layers structured quit-porn content on top of monitoring (<a href='https://everaccountable.com/blog/covenant-eyes-alternatives/'>Ever Accountable comparison</a>). Two important selection factors: Covenant Eyes uses explicitly Christian framing and is endorsed by the American Association of Christian Counselors — motivating for some users, irrelevant or off-putting for others — and the iOS implementation is limited to Safari (<a href='https://support.covenanteyes.com/hc/en-us/articles/11976472404763-How-does-monitoring-work'>Covenant Eyes Support</a>).",
          },
          {
            type: "p",
            html: "<strong>Bark</strong> differentiates through AI-powered selective alerts across 30+ social media platforms, detecting cyberbullying, predatory contact, and explicit content without showing parents every message — though it monitors after exposure rather than preventing it (<a href='https://whitelist.video/blog/bark-parental-control-review-2026'>Whitelist Video</a>). <strong>Canopy</strong> uniquely censors explicit images in real time using AI without blocking entire websites, plus offers sexting prevention that blocks inappropriate photos before they can be saved or sent (<a href='https://www.safetydetectives.com/best-parental-control/canopy/'>Safety Detectives</a>). <strong>Ever Accountable</strong> and <strong>rTribe</strong> occupy a similar accountability niche without the Christian framing of Covenant Eyes; rTribe was built by people in recovery and supports porn, drug, and food addictions with anonymous profiles, peer messaging, and check-ins (<a href='https://rehabs.com/treatment/smartphone-apps/'>Rehabs.com</a>).",
          },
        ],
      },
      {
        id: "recovery-apps",
        heading: "Recovery program apps",
        blocks: [
          {
            type: "p",
            html: "A newer category, distinct from monitoring software, focuses on structured behavior change — daily lessons, habit and streak tracking, urge-management tools, peer community, and increasingly AI-coached cognitive-behavioral exercises. Where Covenant Eyes-style tools surveil, recovery apps teach (<a href='https://www.addictionhelp.com/porn/apps/'>AddictionHelp.com</a>).",
          },
          {
            type: "table",
            caption: "Recovery-program app landscape",
            headers: ["App", "Approach", "Notable features", "Best fit"],
            rows: [
              [
                "QUITTR",
                "90-day program",
                "Content blocker, AI &ldquo;therapist&rdquo; chat, personalized plan, tracking, gamification, community",
                "All-in-one: blocking plus coaching plus tracking",
              ],
              [
                "Brainbuddy",
                "100-day neuroscience curriculum",
                "Daily tasks, meditations, urge-surfing exercises, mini-games framed as dopamine retraining, community",
                "Education-heavy; users wanting to understand the neurobiology",
              ],
              [
                "Relay",
                "Group accountability",
                "Auto-matched small groups, chat, daily check-ins, shared goals",
                "People who do better with peer accountability than solo apps",
              ],
              [
                "Cure",
                "Streak and education",
                "Streak counter, calendar view, achievement system, articles, optional family-control lock",
                "Light-touch tracking with motivational structure",
              ],
            ],
          },
          {
            type: "p",
            html: "<strong>QUITTR</strong> is the most feature-complete of the recovery-program apps, bundling a content blocker with a 90-day curriculum, AI-coached CBT-style exercises, urge tracking, and a community — usable as a single tool rather than as part of a stack (<a href='https://quittrapp.com/porn-addiction/best-apps'>QUITTR comparison</a>; <a href='https://play.google.com/store/apps/details?id=com.quittrapp.quittr_mobile_application_2'>Google Play</a>). <strong>Brainbuddy</strong> is the most pedagogically rich, organized around a 100-day curriculum that explains the neuroscience and pairs it with daily tasks, meditations, and games designed to retrain reward circuitry (<a href='https://play.google.com/store/apps/details?id=com.brainbuddy.android&hl=en_US'>Google Play</a>).",
          },
          {
            type: "p",
            html: "<strong>Relay</strong> (a Y Combinator-backed startup) takes a different shape: instead of solo tracking, it auto-matches users into small accountability groups for chat, check-ins, and shared goals — operationalizing the well-supported finding that social accountability outperforms solo willpower (<a href='https://www.ycombinator.com/companies/relay-health'>Y Combinator</a>). <strong>Cure</strong> is the lightest of the four, foregrounding the streak counter and education with an optional family-control lock for added friction (<a href='https://apps.apple.com/us/app/cure-quit-porn-addiction/id6742135839'>App Store</a>).",
          },
          {
            type: "p",
            html: "<strong>Generic sobriety apps adapted to porn</strong> — <strong>Nomo</strong>, <strong>SoberTool</strong>, <strong>WEconnect</strong>, <strong>Sober Grid</strong> — were built for alcohol and drug recovery but offer many of the same primitives: streak counters, trigger logs, coping-tool libraries, and peer community. They lack porn-specific education and blocking, but for users who already use one of them for substance recovery, doubling them up for cross-addiction can be more sustainable than juggling two ecosystems (<a href='https://www.therecoveryvillage.com/recovery/free-apps-for-recovery/'>The Recovery Village</a>).",
          },
          {
            type: "callout",
            tone: "info",
            title: "How to choose",
            html: "If you need a hard wall against access: layer a dedicated blocker (<strong>Canopy</strong>, <strong>Bulldog Blocker</strong>) or DNS filter underneath QUITTR's built-in blocker. If you need structure and coaching: <strong>Brainbuddy</strong>, <strong>QUITTR</strong>, <strong>Relay</strong>, or <strong>Cure</strong>. If you need an ally and reports: <strong>Covenant Eyes</strong> (Christian framing), <strong>Ever Accountable</strong>, <strong>Accountable2You</strong>, or <strong>rTribe</strong>. Most effective stacks combine one tool from each row — e.g., DNS filter + Covenant Eyes + Brainbuddy.",
          },
        ],
      },
      {
        id: "network-filtering",
        heading: "Network and DNS filtering",
        blocks: [
          {
            type: "p",
            html: "DNS filtering operates at the network level, blocking adult content domains before connections are established. <strong>CleanBrowsing</strong> processes 355 billion DNS requests monthly across 70 data centers serving 4.5+ million devices, offering free Family, Adult, and Security filter tiers with DNS-over-HTTPS and DNS-over-TLS support (<a href='https://cleanbrowsing.org/filters/'>CleanBrowsing</a>).",
          },
          {
            type: "p",
            html: "<strong>OpenDNS Family Shield</strong> from Cisco provides free, zero-configuration DNS filtering by simply changing DNS settings (208.67.222.123 / 208.67.220.123) (<a href='https://www.wizcase.com/parental-control/opendns-family-shield/'>WizCase</a>). <strong>Pi-hole</strong> provides self-hosted DNS filtering on a Raspberry Pi (~$35–50), with community-maintained adult content blocklists covering approximately 126,000 domains (<a href='https://discourse.pi-hole.net/t/how-to-block-porn-and-hentai-easily/80575'>Pi-hole Discourse</a>).",
          },
          {
            type: "p",
            html: "DNS filtering's fundamental limitation is that it blocks only at the domain level, cannot inspect HTTPS content, and is bypassed by VPN usage or cellular data connections. Hardware solutions like <strong>Circle Home Plus</strong> ($129 + $10/month) and <strong>Firewalla</strong> ($179–$419, no subscription) provide deeper packet inspection and VPN detection capabilities.",
          },
        ],
      },
      {
        id: "device-controls",
        heading: "Device-level parental controls",
        blocks: [
          {
            type: "p",
            html: "All major operating systems include built-in parental controls. <strong>Apple Screen Time</strong> provides content restrictions, web filtering (three modes including whitelist-only), communication safety with on-device nudity detection, and — as of iOS 26 — complete remote management and zero-minute app blocking (<a href='https://support.apple.com/en-us/105121'>Apple Support</a>). <strong>Google Family Link</strong> offers app approval, web filtering, SafeSearch enforcement, and parent-managed contacts for Android and ChromeOS (<a href='https://safety.google/intl/en_sg/settings/parental-controls/'>Google Safety Center</a>). <strong>Microsoft Family Safety</strong> extends across Windows, Xbox, and Android with age-based content ratings and — with Microsoft 365 — Copilot AI integration (<a href='https://learn.microsoft.com/en-us/answers/questions/5307422/what-are-the-family-safety-default-settings-can-fa'>Microsoft Learn</a>).",
          },
          {
            type: "p",
            html: "A persistent cross-platform limitation: iOS monitoring is significantly more restricted for third-party tools due to Apple's privacy architecture, meaning every monitoring solution performs worse on iPhones than on Android devices.",
          },
        ],
      },
      {
        id: "csam-detection",
        heading: "CSAM detection technologies",
        blocks: [
          {
            type: "p",
            html: "Industrial-scale CSAM detection rests on a stack of complementary technologies: hash algorithms that fingerprint known imagery, hash-sharing networks that distribute those fingerprints across platforms, AI classifiers that surface novel material, and forensic tools that connect platform-level signals to law-enforcement investigation. Each layer was developed by a different organization; together they constitute the working defense.",
          },
          {
            type: "h3",
            text: "Hashing algorithms",
          },
          {
            type: "p",
            html: "<strong>PhotoDNA</strong> (Microsoft and Dartmouth, 2009) remains the foundation — a perceptual hashing technology with a false-positive rate of approximately 1 in 50 billion, deployed free to qualified organizations and used by Facebook, Google, Dropbox, and hundreds of platforms (<a href='https://www.microsoft.com/en-us/photodna'>Microsoft</a>). PhotoDNA is closed; access is gated through Microsoft's application process.",
          },
          {
            type: "p",
            html: "<strong>Meta PDQ</strong> (Pretty Darn Quick) is the open-source counterpart. PDQ produces 256-bit signatures via Discrete Cosine Transform and is released under the BSD license in Meta's <code>facebook/ThreatExchange</code> repository, with official C++, PHP, Python, Java, and WebAssembly implementations plus community ports. The companion <strong>TMK+PDQF</strong> algorithm covers video, producing 256KB signatures. Both are listed as supported fingerprint types in NCMEC's Hash Sharing API, meaning a platform can integrate PDQ end-to-end against the verified national hash list without proprietary licensing (<a href='https://github.com/facebook/ThreatExchange/tree/main/pdq'>ThreatExchange</a>).",
          },
          {
            type: "h3",
            text: "Hash-sharing networks",
          },
          {
            type: "p",
            html: "The hashes themselves are useless without a curated, verified, continuously updated list to match against. Three national-scale networks distribute these lists. <strong>NCMEC Hash Sharing</strong> (United States) operates a RESTful API in three environments (industry, law enforcement, NPO) supporting MD5, SHA-1, PhotoDNA, PDQ, NetClean, Videntifier, TMK+PDQF, and others. The industry platform holds over five million triple-vetted CSAM hash values, of which approximately 74% originate from Google. NCMEC's Video Hash Initiative Project hashed 435,000 videos in 2025 alone (<a href='https://hashsharing.ncmec.org/npo/v2/documentation/'>NCMEC Hash Sharing</a>).",
          },
          {
            type: "p",
            html: "The UK's <strong>Internet Watch Foundation Hash List</strong> distributes verified hashes to 200+ member technology companies, complemented by Keyword, URL, and Non-Photographic Imagery URL lists plus takedown notices and payment-provider alerts. The IWF processes more than 7,000 reports per week (<a href='https://www.iwf.org.uk/our-technology/our-services/'>IWF Services</a>).",
          },
          {
            type: "p",
            html: "Canada's <strong>Project Arachnid</strong>, operated by the Canadian Centre for Child Protection, is the most aggressive of the three — an automated web crawler that has processed over 176 billion images, flagged more than 126 million for review, and issued over 141 million takedown notices to hosts. The free <strong>Shield API</strong> lets electronic service providers proactively scan uploaded content against its database; documented integrations include the Chevereto image-host platform. 18 partner organizations across 17 countries and 76 analysts staff the program (<a href='https://projectarachnid.ca/en/'>Project Arachnid</a>; <a href='https://shield.projectarachnid.com/docs/'>Shield API</a>).",
          },
          {
            type: "h3",
            text: "Platform deployment",
          },
          {
            type: "p",
            html: "<strong>Cloudflare's CSAM Scanning Tool</strong> brings the hash-matching layer to every Cloudflare customer regardless of plan, free, with fuzzy-hash matching against NCMEC databases, automatic HTTP 451 blocking, and adjustable sensitivity thresholds. Given Cloudflare's footprint, this single product significantly raises the floor of detection coverage across the public web (<a href='https://blog.cloudflare.com/the-csam-scanning-tool/'>Cloudflare</a>). <strong>Google's Content Safety API and CSAI Match</strong> are partner-only services prioritizing novel suspected CSAM for human review; combined, they process more than 4 billion pieces of content per month for partners including Adobe and Reddit (<a href='https://protectingchildren.google/tools-for-partners/'>Google for Partners</a>).",
          },
          {
            type: "p",
            html: "<strong>Thorn's Safer</strong> platform combines hash-matching with AI classification at scale. As of 2025, Safer Match holds over 82 million verified CSAM hash values (recently expanded by 51.6 million), and SaferList connects 86+ platforms for cross-platform signal sharing. The platform processed 415.4 billion files in 2025 and flagged 1.3 million potential child-exploitation text lines for review (<a href='https://safer.io/resources/safers-2025-impact-report/'>Safer 2025 Impact Report</a>; <a href='https://www.thorn.org/blog/today-the-internet-is-safer/'>Thorn</a>).",
          },
          {
            type: "h3",
            text: "AI detection for novel and AI-generated material",
          },
          {
            type: "p",
            html: "Hash-matching cannot surface previously unseen imagery, and it is blind to AI-generated CSAM by construction. AI classifiers fill the gap. <strong>Hive AI</strong> received a $150,000 DHS Cyber Crimes Center contract in 2025 specifically to distinguish AI-generated CSAM from real-victim imagery, citing a 1,325% rise in genAI-related NCMEC reports the prior year (<a href='https://www.technologyreview.com/2025/09/26/1124343/us-investigators-are-using-ai-to-detect-child-abuse-images-made-by-ai/'>MIT Technology Review</a>). Safer's AI classifier flagged 3.84 million potential novel CSAM files in 2025 for human review. <strong>Microsoft's Two Hat acquisition</strong> (2021) and its previous CEASE.ai novel-CSAM project are now folded into Microsoft's Community Sift product line (<a href='https://blogs.microsoft.com/blog/2021/10/29/microsoft-acquires-two-hat-to-collaborate-on-online-safety-and-digital-wellness-solutions-for-online-communities/'>Microsoft</a>). <strong>WebPurify</strong> operates a human+AI hybrid moderation service that the company credits with contributions to 500+ child-predator arrests in the past year (<a href='https://www.webpurify.com/blog/insights-into-csam-moderation/'>WebPurify</a>).",
          },
          {
            type: "p",
            html: "Microsoft's general-purpose <strong>Azure Content Moderator</strong> was deprecated in February 2024 (full retirement March 2027) and was never a CSAM-specific tool — Microsoft explicitly directed customers to PhotoDNA for that workload. Its successor, <strong>Azure AI Content Safety</strong>, scans for sexual, violent, hate, and self-harm content but is similarly not a CSAM solution (<a href='https://learn.microsoft.com/en-us/azure/ai-services/content-moderator/overview'>Azure docs</a>). General-purpose AI moderation APIs are easy to confuse with CSAM detection; they are not the same product and should not be deployed as a substitute.",
          },
          {
            type: "h3",
            text: "Forensic and policy infrastructure",
          },
          {
            type: "p",
            html: "<strong>Project VIC International</strong> provides the standardized VICS data model enabling interoperability across digital-forensics vendors (MSAB, Magnet Forensics, Cellebrite, ADF, Oxygen Forensics, Griffeye) used by police forces in the US, UK (CAID), Canada, Australia, and parts of Europe, Africa, and MENA. Active 2025 programs include KATALYST (capacity building) and GPUs for Good (donated GPU compute for ICAC labs) (<a href='https://www.projectvic.org'>Project VIC</a>). At the policy layer, the <strong>WeProtect Global Alliance</strong> coordinates 320+ members — governments, private companies, civil society, intergovernmental organizations — producing the Model National Response, Prevention Framework, and recurring threat assessments. WeProtect does not operate detection technology itself; it produces the policy substrate the technology operates in (<a href='https://www.weprotect.org/'>WeProtect</a>).",
          },
          {
            type: "table",
            caption: "CSAM detection approaches compared",
            headers: ["Approach", "Strengths", "Weaknesses"],
            rows: [
              ["Cryptographic hashing (MD5, SHA)", "Perfect precision for exact duplicates", "Cannot detect modified files or novel content"],
              ["Perceptual hashing (PhotoDNA, PDQ, TMK)", "Matches near-duplicates; ~1-in-50B false positives", "Cannot detect new CSAM; vulnerable to sufficient modification"],
              ["AI/ML classification (Safer AI, Hive AI)", "Detects novel and AI-generated CSAM", "Higher false-positive rate; requires human review"],
              ["Hybrid hash-first, AI-second", "Maximizes recall while minimizing review burden", "Complexity; requires robust training data"],
              ["Crawl + take-down (Project Arachnid)", "Proactive removal at host level rather than only at upload", "Cannot prevent re-upload; depends on hoster compliance"],
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Adjacent infrastructure, not CSAM tools",
            html: "Platforms hosting user content also lean on general-purpose security tools like <strong>CrowdSec</strong> (open-source, MIT-licensed crowdsourced IPS that distributes IP blocklists across deployments) and <strong>Falco</strong> (CNCF-graduated runtime security that detects anomalous syscall patterns in containers and Kubernetes). Neither is a CSAM detection tool, neither maintains a CSAM-specific blocklist or ruleset, and neither has published trust-and-safety deployments. They belong in a defense-in-depth conversation about hosting platforms — alongside WAFs, anomaly detection, and DDoS protection — but they should not be confused with the hash and classifier stack described above (<a href='https://github.com/crowdsecurity/crowdsec'>CrowdSec</a>; <a href='https://falco.org/about/'>Falco</a>).",
          },
        ],
      },
      {
        id: "platform-safety-orgs",
        heading: "Platform accountability: who is organized to answer for child safety",
        verified: "May 2026",
        blocks: [
          {
            type: "p",
            html: "Every major user-content platform has a public-facing CEO and a much less visible Trust &amp; Safety / Child Safety leadership layer below them where day-to-day CSAM operations actually live. This section maps that second layer for TikTok, Meta, and X — the named VP/Head-of leadership, who they report to, and where child safety sits within the company structure (does it report to legal, to product, or to a board safety committee?). All named individuals carry a primary-source citation and are current as of May 2026; this is the most perishable content on the site, so claims that could not be tied to a primary or primary-adjacent source were dropped rather than hedged, and the refresh procedure is documented in <a href='https://github.com/digitalharm/digital-harm-website/blob/main/PLAN.md'>PLAN.md</a>. The framing is governance structure, not personality coverage.",
          },
          {
            type: "h3",
            text: "TikTok: Trust & Safety pulled out of the legal chain and into platform leadership",
          },
          {
            type: "p",
            html: "At TikTok, Trust &amp; Safety governance is defined less by a single named czar than by a deliberate move to pull the function out of the legal/parent-company chain and place it under platform leadership. Until early 2024, global Trust &amp; Safety reported up through ByteDance General Counsel Erich Andersen. In a reorganization announced on 27 February 2024, oversight shifted to <strong>Adam Presser</strong>, then Head of Operations and Trust &amp; Safety, who reported directly to TikTok CEO <strong>Shou Zi Chew</strong> rather than to ByteDance — a structural change first reported by <a href='https://www.tubefilter.com/2024/02/28/tiktok-reorganization-trust-and-safety-leader-adam-presser/'>Tubefilter</a>. The prior global T&amp;S head, Cormac Keenan, who had led the function from Dublin since 2020, moved into a non-executive advisory role.",
          },
          {
            type: "p",
            html: "The senior Trust &amp; Safety leader today is <strong>Sandeep Grover</strong>, whom TikTok&rsquo;s own careers publication identifies as <strong>Global Head of Trust &amp; Safety Core Experience</strong> in a November 2024 leadership profile (<a href='https://lifeattiktok.com/blog/detail/20241012113941'>lifeattiktok.com</a>). A 31 July 2025 reorganization, confirmed via an internal memo from Shou Zi Chew and reported by <a href='https://techcrunch.com/2025/07/31/tiktok-merges-its-core-product-and-trust-safety-teams/'>TechCrunch</a>, merged TikTok&rsquo;s Core Product and Trust &amp; Safety Product teams into a single Product organization, with Grover named head of Global Trust &amp; Safety; the memo coverage did not disclose his exact reporting line, which we therefore do not assert. Child Safety is a named sub-function inside Trust &amp; Safety: <strong>Sarah Hawkins Brass</strong> serves as Global Head of Child Safety Operations and leads the Global Child Safety Team (CST), whose mandate is detecting and reporting child sexual abuse material and predatory behavior, including referrals to the National Center for Missing &amp; Exploited Children — a role documented in a December 2024 profile by the <a href='https://www.usfca.edu/news/usf-grad-tiktok-exec'>University of San Francisco</a>. Distinct from Trust &amp; Safety, security and data protection sit in a separate Global Security Organization under <strong>Kim Albarella</strong>, Global Head of Security since 2022, per TikTok&rsquo;s own <a href='https://lifeattiktok.com/blog/detail/20250029152826'>January 2025 profile</a>.",
          },
          {
            type: "p",
            html: "The platform&rsquo;s child-safety posture is most directly visible in regulatory and legislative records. Shou Zi Chew testified before the US Senate Judiciary Committee on 31 January 2024 at its hearing on the online child sexual exploitation crisis, stating that TikTok employed more than 40,000 trust and safety professionals and would invest over two billion dollars in trust and safety that year (<a href='https://newsroom.tiktok.com/en-us/opening-statement-senate-judiciary-committee-hearing'>TikTok Newsroom</a>; <a href='https://www.judiciary.senate.gov/imo/media/doc/2024-01-31_-_testimony_-_chew.pdf'>Senate Judiciary</a>). Leadership has since turned over substantially: Eric Han — named in older materials as US Head of Safety — left that role on 12 May 2023 and is not in any current safety position (<a href='https://www.scmp.com/tech/big-tech/article/3219201/tiktoks-us-trust-and-safety-head-departs-role-pressure-mounts'>South China Morning Post</a>); and following the 23 January 2026 US ownership deal, Adam Presser became CEO of the carved-out US entity, TikTok USDS Joint Venture LLC, where content moderation, algorithm, and data-security safeguards are overseen by an American-majority board Security Committee chaired by independent director Raul Fernandez, with Will Farrell as Chief Security Officer (<a href='https://usdsjv.tiktok.com/'>TikTok USDS</a>; <a href='https://www.aljazeera.com/amp/news/2026/1/23/who-controls-tiktoks-us-platform-under-new-deal'>Al Jazeera</a>).",
          },
          {
            type: "h3",
            text: "Meta: no single safety chief, three lines converging on the CEO",
          },
          {
            type: "p",
            html: "Meta has no single executive titled Chief Trust &amp; Safety Officer; child-safety accountability is distributed across three lines that all terminate at CEO Mark Zuckerberg. The public-facing safety lead is <strong>Antigone Davis, Vice President and Global Head of Safety</strong> — a role she has held continuously, contrary to reports that she left in 2023. She was named as &ldquo;Meta global head of safety&rdquo; in coverage of the March 2026 New Mexico consumer-protection trial, where jurors weighed statements by Zuckerberg, Instagram head Adam Mosseri, and Davis and found Meta liable, ordering $375 million in damages (<a href='https://www.npr.org/2026/03/24/g-s1-115019/new-mexico-meta-children-mental-health'>NPR</a>; <a href='https://www.cbsnews.com/news/meta-harmful-to-children-mental-health-new-mexico-jury-finds/'>CBS News</a>).",
          },
          {
            type: "p",
            html: "The integrity function — the enforcement machinery behind Meta&rsquo;s Community Standards — sits inside the <strong>Product</strong> organization rather than under a standalone safety or legal chief. Meta&rsquo;s own executive page states that Head of Product <strong>Naomi Gleit</strong> &ldquo;oversees the growth team, integrity team and social impact team&rdquo; (<a href='https://www.meta.com/media-gallery/executives/naomi-gleit/'>Meta</a>), and Tech:NYC describes her as leading Central Products and &ldquo;the shift to AI-powered integrity and support&rdquo; (<a href='https://www.technyc.org/leaders/naomi-gleit'>Tech:NYC</a>). <strong>Guy Rosen</strong>, who led integrity and safety for years and became Meta&rsquo;s first <strong>Chief Information Security Officer</strong> in June 2022, has since shifted toward security and AI operations (<a href='https://www.securitymagazine.com/articles/97791-guy-rosen-named-ciso-at-meta'>Security Magazine</a>). No primary source names a dedicated VP- or Head-of-Integrity beneath Gleit, so none is asserted here. On the policy side, <strong>Joel Kaplan</strong> became <strong>Chief Global Affairs Officer</strong> in January 2025, replacing Nick Clegg (<a href='https://www.axios.com/2025/01/02/meta-nick-clegg-step-down-republican-joel-kaplan'>Axios</a>).",
          },
          {
            type: "p",
            html: "The legal and policy layer exerts unusually direct control over what Meta knows and discloses about child harm. At a September 9, 2025 hearing before the Senate Judiciary Subcommittee on Privacy, Technology, and the Law (&ldquo;Hidden Harms&rdquo;), former Meta researchers <strong>Jason Sattizahn</strong> and <strong>Cayce Savage</strong> testified that Meta&rsquo;s legal department directed the alteration and deletion of internal data on the sexual exploitation of minors and created &ldquo;social issues protocols&rdquo; restricting research into suicide, eating disorders, and child trafficking (<a href='https://www.judiciary.senate.gov/committee-activity/hearings/hidden-harms-examining-whistleblower-allegations-that-meta-buried-child-safety-research'>Senate Judiciary</a>; <a href='https://www.techpolicy.press/transcript-us-senate-hearing-on-examining-whistleblower-allegations-that-meta-buried-child-safety-research/'>Tech Policy Press transcript</a>). The Chief Legal Officer who oversees that department reports directly to Zuckerberg; the seat passed from Jennifer Newstead (who left for Apple) to <strong>C.J. Mahoney</strong> in January 2026 (<a href='https://www.axios.com/2026/01/06/meta-hires-chief-legal-officer-cj-mahoney'>Axios</a>). At the board level, Meta restructured its committees in June 2025: per its 2026 proxy statement, it disbanded the Audit &amp; Risk Oversight and Privacy &amp; Product Compliance committees and created a new <strong>Audit &amp; Privacy Committee</strong> overseeing the privacy program and product/regulatory compliance, alongside a <strong>Risk &amp; Strategy Committee</strong> (<a href='https://www.sec.gov/Archives/edgar/data/1326801/000162828026025532/meta-20260416.htm'>Meta DEF 14A, 2026</a>). The independent <a href='https://transparency.meta.com/oversight/overview/'>Oversight Board</a> remains an external check on content decisions, and Meta continues to publish quarterly <a href='https://transparency.meta.com/reports/integrity-reports-q2-2025/'>Integrity Reports</a> and report child-exploitation material to NCMEC.",
          },
          {
            type: "h3",
            text: "X: a single Head of Safety, no named child-safety lead, and an empty CEO seat",
          },
          {
            type: "p",
            html: "At X, accountability for child safety is structurally diffuse. The most senior named safety leader is <strong>Kylie McRoberts</strong>, promoted internally in April 2024 to lead the team Elon Musk renamed from &ldquo;Trust &amp; Safety&rdquo; to simply &ldquo;Safety&rdquo; (he called &ldquo;Trust&rdquo; a &ldquo;euphemism for censorship&rdquo;). McRoberts is a roughly four-year company veteran who previously worked on privacy and safe-browsing at Google, and the RSAC 2026 conference still lists her as <a href='https://www.rsaconference.com/experts/kylie-mcroberts'>&ldquo;Head of Trust and Safety, X,&rdquo;</a> confirming she remains in the role as of 2026. Her appointment was announced alongside <strong>Yale Cohen</strong> as <a href='https://www.socialmediatoday.com/news/x-formerly-twitter-appoints-head-of-safety/712089/'>Head of Brand Safety and Advertiser Solutions</a> — an advertiser-facing, commercial role distinct from user-safety and child-safety enforcement.",
          },
          {
            type: "p",
            html: "No primary source names a dedicated child-safety executive at X, and the gap is itself a governance finding. X&rsquo;s own <a href='https://transparency.x.com/en/reports/global-reports/2025-transparency-report'>2025 Global Transparency Report</a> attributes child-sexual-exploitation enforcement to &ldquo;our safety engineering team&rdquo; and to an unnamed &ldquo;international, cross-functional team with 24-hour coverage,&rdquo; never to an accountable individual. The report logs 313,917 NCMEC reports and 1,790,852 child-safety account suspensions for July–December 2024 but identifies no leader responsible for those systems. When NBC News pressed X on a June 2025 surge of accounts advertising abuse material, X again pointed only to its <a href='https://www.nbcnews.com/tech/tech-news/x-accounts-peddle-child-abuse-musk-material-thorn-cuts-ties-rcna212107'>@Safety account and &ldquo;the incredible work of our safety engineering team,&rdquo;</a> declining to surface a named executive.",
          },
          {
            type: "p",
            html: "The reporting structure above the safety function is unusually flat because the chief-executive seat is empty. <strong>Linda Yaccarino</strong> — who had personally testified before the Senate Judiciary Committee on 31 January 2024 that X had strengthened child-exploitation enforcement &ldquo;with more tools and technology&rdquo; — <a href='https://variety.com/2025/digital/news/linda-yaccarino-resigns-ceo-x-twitter-1236450704/'>resigned as CEO on 9 July 2025</a>. No successor has been named through May 2026, leaving the safety organization reporting, in effect, up to owner Elon Musk, who holds the Chairman and CTO titles; the corporate parent also shifted when X Corp became a subsidiary of Musk&rsquo;s xAI on 28 March 2025. External pressure has meanwhile intensified: on 21 May 2026 the Australian Federal Court, by consent, ordered X Corp to pay a A$650,000 civil penalty for failing to fully comply with the eSafety Commissioner&rsquo;s child-sexual-exploitation transparency notice, with <a href='https://www.miragenews.com/x-corp-fined-for-transparency-fail-on-child-1677731/'>Justice Wheelahan stating that a &ldquo;penalty near the maximum&rdquo; was warranted</a> so it would act &ldquo;as a real deterrent and not simply a cost of doing business&rdquo;; separately, the nonprofit Thorn <a href='https://www.nbcnews.com/tech/tech-news/x-accounts-peddle-child-abuse-musk-material-thorn-cuts-ties-rcna212107'>terminated its detection-tooling contract with X in June 2025 over nonpayment</a>, after which X said it was moving to in-house CSAM hash-matching — again managed without a publicly named accountable child-safety leader.",
          },
          {
            type: "table",
            caption: "Child-safety governance structure: TikTok, Meta, and X (as of May 2026). Citations for every named individual appear in the narrative above. “Not disclosed” means no primary source states the reporting line.",
            headers: ["Platform", "Top named safety/integrity leader", "Where child safety reports", "Dedicated child-safety lead"],
            rows: [
              [
                "TikTok",
                "Sandeep Grover, Global Head of Trust & Safety Core Experience",
                "Into platform operations under CEO Shou Zi Chew (exact line not disclosed post-July 2025 reorg), deliberately moved out of the ByteDance legal chain in Feb 2024",
                "Sarah Hawkins Brass, Global Head of Child Safety Operations (leads the Global Child Safety Team / CST)",
              ],
              [
                "Meta",
                "Antigone Davis, VP & Global Head of Safety (public face); integrity enforcement under Naomi Gleit, Head of Product",
                "Three lines all converging on CEO Mark Zuckerberg: Safety org, Integrity inside Product, and Legal/compliance; no single Chief Trust & Safety Officer",
                "None named below the VP layer; no primary source identifies a dedicated child-safety operations head",
              ],
              [
                "X",
                "Kylie McRoberts, Head of Safety (function renamed from “Trust & Safety”)",
                "Not disclosed; rolls up to owner Elon Musk (Chairman/CTO) — CEO seat vacant since Linda Yaccarino resigned 9 Jul 2025; no board safety committee",
                "None named; X attributes CSE/CSAM work to an unnamed “safety engineering team” / “cross-functional team”",
              ],
            ],
          },
          {
            type: "p",
            html: "Read across the three, a common shape emerges and so does the key divergence. All three locate day-to-day child-safety operations well below the CEO and decline, in their public record, to name a single accountable child-safety executive — TikTok and X both attribute the work to teams and organizations rather than one person, and Meta has no Chief Trust &amp; Safety Officer at all. What differs is where the function is anchored and how legible that anchor is. TikTok has the most articulated structure, having deliberately relocated Trust &amp; Safety out of the parent-company legal chain into platform operations and, post-deal, into an American-majority board Security Committee. Meta diffuses the responsibility across three lines — Safety, Product-owned Integrity, and a Legal department that whistleblowers testified actively shaped what child-harm research could exist — all ultimately reporting to one founder-CEO. X is the outlier in the opposite direction: a single renamed Safety function, no child-safety lead, no board safety committee, and an empty CEO seat, leaving the function reporting in effect to a sole owner — a thinness that regulators and a child-safety nonprofit have both moved against in 2025–2026.",
          },
        ],
      },
      {
        id: "accountability-scorecard",
        heading: "Scoring the three: a governance rubric",
        verified: "May 2026",
        blocks: [
          {
            type: "p",
            html: "The narrative above compresses into a rubric. The scorecard below rates TikTok, Meta, and X across seven dimensions of child-safety <em>governance structure</em> &mdash; each scored 0 to 3, for a maximum of 21. Every score is derived from the public, sourced facts established in the section above: who is named and accountable, where the function reports, whether a board oversees it, what the company discloses, and how regulators have responded. It is deliberately a measure of structure, not of sentiment.",
          },
          {
            type: "callout",
            tone: "warning",
            title: "What this scores — and what it does not",
            html: "This rubric measures <strong>observable governance structure as of May 2026</strong> &mdash; not which platform is &ldquo;safest&rdquo; for children, and not the absolute volume of harm on each. A platform can have articulated governance and still host serious abuse; a thinly-governed platform is not necessarily worse at removing any given image. Scores reflect what each company has placed on the public record (filings, transparency reports, testimony, regulatory findings), so a low score can reflect non-disclosure as much as a genuine gap. This is a lens for accountability, not a safety rating, and it is a snapshot the refresh cadence will move.",
          },
          {
            type: "table",
            caption: "Child-safety governance rubric, scored 0–3 per dimension (0 = absent or undisclosed, 3 = articulated and disclosed). As of May 2026; every score traces to the sourced facts above. This measures governance structure, not absolute child-safety outcomes.",
            headers: ["Dimension (0–3)", "TikTok", "Meta", "X"],
            rows: [
              ["Named child-safety accountability", "3 — Global Head of Child Safety Operations", "2 — safety VP, no dedicated child-safety lead", "1 — Head of Safety; CSE work attributed to an unnamed team"],
              ["Independence from the legal chain", "3 — moved into platform operations", "1 — diffuse; legal dept implicated in research", "1 — reports in effect to a sole owner"],
              ["Board-level safety oversight", "3 — board Security Committee, independent chair", "2 — Audit & Privacy Committee plus external Oversight Board", "0 — no board safety committee"],
              ["Detection + reporting disclosure", "2 — program disclosed; less tool-level detail", "3 — extensive; largest NCMEC reporter", "1 — in-house hashing after Thorn cut ties"],
              ["Transparency-reporting depth", "2 — enforcement reports", "3 — Community Standards plus Integrity reports", "2 — publishes volumes, attribution-thin"],
              ["Independent external check", "2 — independent board plus CSO", "3 — independent Oversight Board", "0 — Thorn terminated; no oversight body"],
              ["Regulatory standing", "2 — divestiture scrutiny, no CSE penalty", "1 — jury liability finding (New Mexico)", "0 — court penalty for notice non-compliance"],
              ["Total (of 21)", "17", "15", "5"],
            ],
          },
          {
            type: "p",
            html: "A few cells carry most of the weight. On <strong>independence</strong>, TikTok scores highest because it deliberately relocated Trust and Safety out of its parent company&rsquo;s legal chain into platform operations, while Meta&rsquo;s integrity function sits inside Product and its legal department was the subject of <a href='https://www.judiciary.senate.gov/committee-activity/hearings/hidden-harms-examining-whistleblower-allegations-that-meta-buried-child-safety-research'>September 2025 whistleblower testimony</a> about shaping child-harm research. On <strong>oversight</strong> and <strong>independent checks</strong>, Meta scores highest for its external <a href='https://transparency.meta.com/oversight/overview/'>Oversight Board</a> and detailed <a href='https://transparency.meta.com/reports/integrity-reports-q2-2025/'>Integrity Reports</a>, even as its <strong>regulatory standing</strong> is dragged down by the <a href='https://www.npr.org/2026/03/24/g-s1-115019/new-mexico-meta-children-mental-health'>New Mexico liability finding</a>. X scores lowest on five of seven dimensions: it names no child-safety lead, convenes no board safety committee, lost its <a href='https://www.nbcnews.com/tech/tech-news/x-accounts-peddle-child-abuse-musk-material-thorn-cuts-ties-rcna212107'>detection partnership with Thorn</a>, and drew an <a href='https://www.miragenews.com/x-corp-fined-for-transparency-fail-on-child-1677731/'>A$650,000 Australian Federal Court penalty</a> for failing to answer a child-exploitation transparency notice.",
          },
          {
            type: "p",
            html: "The rubric matters because accountability, in the survivors&rsquo; framing, is finally about whether someone can be named and answered to. The <a href='/report/interventions#survivors-and-ongoing-harm'>Phoenix 11 and the survivor-advocacy positions in Chapter 05</a> insist that a system which cannot identify who is responsible for detecting and reporting their childhood abuse cannot be held responsible for failing to. A high governance score is not absolution; it is the precondition for accountability at all. A score of 5 out of 21 is not merely a thin org chart &mdash; it is a measure of how hard it would be, today, to find the person who answers for a child&rsquo;s report.",
          },
        ],
      },
      {
        id: "drm",
        heading: "Screen recording and DRM protection",
        blocks: [
          {
            type: "p",
            html: "Digital Rights Management prevents screen recording of video content through hardware-secured decryption. On iOS/iPadOS with FairPlay, macOS Safari, Windows Edge with PlayReady SL3000, and Android with Widevine L1, screen recording prevention is approximately 100% effective. However, desktop Chrome and Firefox browsers support only Widevine L3 (software-only), making screen recording fully possible (<a href='https://inkryptvideos.com/screen-recording-protection-with-drm-in-2025/'>Inkrypt Videos</a>). Forensic watermarking — embedding invisible, user-specific identifiers into video streams — provides deterrence and traceability when prevention fails, reducing piracy by approximately 40%.",
          },
        ],
      },
      {
        id: "distribution-and-economy",
        heading: "Distribution infrastructure and the CSAM economy",
        blocks: [
          {
            type: "h3",
            text: "The clearnet–darknet split: volume on the surface, commerce in the shadows",
          },
          {
            type: "p",
            html: "The popular image of child sexual abuse material is the dark web: hidden services, anonymity software, untraceable money. The data tells a different story. The Internet Watch Foundation confirmed 291,273 webpages containing CSAM in 2024, of which only 531 — roughly two-tenths of one percent — were on the dark web. The overwhelming majority sits on the open internet, on cyberlockers and image hosts run by legitimate companies, hosted in EU data centers, and surfaced to law enforcement by the same mainstream platforms that report tens of millions of files a year to the U.S. CyberTipline. But the infrastructure splits along a sharp axis: the open web is where the volume lives, while the dark web is where the <strong>commerce</strong> concentrates. Of those 531 dark web URLs, 82% were commercial; of the far larger clearnet total, only 2% was. Understanding where CSAM lives and how it moves means tracking two parallel economies — a vast non-commercial sharing ecosystem and a smaller, hardening commercial one that has pivoted decisively to cryptocurrency, disguised websites, and abuse-to-order production in the global South.",
          },
          {
            type: "p",
            html: "The most persistent misconception about CSAM distribution is that it is primarily a dark web phenomenon. The <a href=\"https://www.iwf.org.uk/annual-data-insights-report-2024/data-and-insights/commercial-dark-web-urls/\">Internet Watch Foundation's 2024 data</a> directly contradicts this: of 291,273 webpages confirmed to contain child sexual abuse imagery, the IWF identified only <strong>531 dark web URLs</strong> distributing such material — about 0.18% of the total actioned. The open web, indexed and accessible through ordinary browsers, carries the bulk of detected material.",
          },
          {
            type: "p",
            html: "What the dark web concentrates is not volume but <strong>commerce</strong>. Of those 531 dark web URLs, 437 (82%) were assessed as commercial — operations selling access for profit. On the clearnet, by contrast, only 7,028 of the 291,273 pages (2%) were commercial in nature, per the <a href=\"https://www.iwf.org.uk/annual-data-insights-report-2024/data-and-insights/commercial-urls/\">IWF's commercial URL analysis</a>. The structural reading is that anonymity infrastructure is expensive and inconvenient enough that it is reserved disproportionately for paid transactions, while the much larger non-commercial trade — peer-to-peer sharing, forum distribution, cloud-storage abuse — proliferates on the surface web because it is free and frictionless.",
          },
          {
            type: "p",
            html: "This distinction matters for intervention strategy. The clearnet problem is fundamentally a content-moderation and hash-matching problem at scale, addressable through the detection stack (PhotoDNA, hash lists, proactive scanning). The dark web problem is a financial-intelligence and infrastructure-takedown problem, where following the money — increasingly cryptocurrency — has proven more productive than trying to deanonymize the network itself.",
          },
          {
            type: "h3",
            text: "Hosting patterns: legitimate providers, abused at scale",
          },
          {
            type: "p",
            html: "Detected CSAM is hosted overwhelmingly on legitimate, free services rather than purpose-built criminal infrastructure. The <a href=\"https://www.iwf.org.uk/annual-data-insights-report-2024/data-and-insights/site-types/\">IWF found</a> that in 2024, 285,112 URLs (98%) used free hosting and only 4,981 (2%) used paid hosting. <strong>Image hosts</strong> were the single most-abused website type, followed by cyberlockers — file-storage and file-sharing services where a single uploaded file can be linked from many forums and chat rooms. Offenders also exploited 59 legitimate hacked websites in 2024, a 23% rise from the prior year, embedding criminal content inside compromised but otherwise lawful domains.",
          },
          {
            type: "p",
            html: "The platforms that surface the most material to authorities are the largest consumer services, reflecting both their scale and the comparative thoroughness of their proactive scanning. The <a href=\"http://ncmec.org/content/dam/missingkids/pdfs/cybertiplinedata2024/2024-reports-by-esp.pdf\">NCMEC 2024 reports-by-ESP breakdown</a> shows Facebook submitting 8,590,357 CyberTipline reports, Instagram 3,320,008, WhatsApp 1,851,086, TikTok 1,359,806, Google 1,175,084, and Snapchat 1,174,698, with Reddit (334,597), Discord (241,354), Microsoft Online Operations (101,009), Pinterest (65,810), and Amazon Photos (42,051) further down. These numbers measure detection and reporting effort, <strong>not</strong> prevalence — a platform that scans aggressively will report more than one that does not, and Meta's properties account for the lion's share precisely because they scan unencrypted surfaces. Dedicated forum and imageboard infrastructure, where committed offender communities organize, generates few CyberTipline reports because those services do not self-report; that material instead surfaces through the IWF, Project Arachnid, and law-enforcement crawling.",
          },
          {
            type: "p",
            html: "Research into forum structure underscores that these dedicated communities are highly organized. A 2024 study in <a href=\"https://www.nature.com/articles/s41599-024-03954-x\">Humanities and Social Sciences Communications</a> mapped darknet CSAM forum networks and identified distinct key-player roles in public replies and private messaging, while work published in <a href=\"https://www.sciencedirect.com/science/article/pii/S0145213424002059\">Child Abuse & Neglect</a> analyzed why users continue contributing to such forums through frameworks of social exchange, social capital, and social learning — a reminder that the infrastructure is sustained by community dynamics, not merely technology.",
          },
          {
            type: "h3",
            text: "Hosting geography: a European problem, concentrated in a handful of providers",
          },
          {
            type: "p",
            html: "The IWF's annual geographic breakdowns consistently locate the majority of detected CSAM hosting in Europe — a function of where cheap, high-capacity, well-connected hosting is available, not of where offenders or victims are. In 2024, EU member states hosted roughly 62% of the criminal URLs the IWF actioned. The <a href=\"https://www.iwf.org.uk/annual-data-insights-report-2025/online-hosting/geographic-insights/\">2025 data</a> recorded 310,437 URLs, with EU member states accounting for 196,101 (63%).",
          },
          {
            type: "p",
            html: "The 2025 country-level figures show how concentrated and volatile this hosting is: <strong>Bulgaria 87,959 URLs (28%)</strong>, the United States 49,021 (16%), the Netherlands 33,788 (11%), Romania 21,188 (7%), France 20,475 (7%), Germany 18,401 (6%), Malaysia 17,046 (5%), and Moldova 9,941 (3%). The year-over-year swings are dramatic and tied to specific providers rather than national trends: Bulgaria rose 19 percentage points (attributed by the IWF to \"just a few particular sites\"), France rose 6 and Germany 4, while the Netherlands — long a top host — fell 18 points, which the IWF credits to effective monitoring and fast takedowns. The UK itself hosts almost nothing: 951 URLs in 2025, 0.30% of the global total, with 88% removed within 24 hours.",
          },
          {
            type: "p",
            html: "The practical implication is that hosting geography is a moving target driven by a small number of abuse-tolerant or slow-to-respond hosting companies. A single non-cooperative provider migrating between top-level domains and jurisdictions can shift an entire country's apparent share, which is why the IWF emphasizes notice-and-takedown speed and provider relationships over national attribution.",
          },
          {
            type: "h3",
            text: "The commercial pivot: disguised websites, domain hopping, and cryptocurrency",
          },
          {
            type: "p",
            html: "The commercial CSAM trade has evolved sophisticated evasion and monetization techniques. The defining clearnet innovation is the <a href=\"https://www.iwf.org.uk/annual-data-insights-report-2024/data-and-insights/commercial-disguised-websites/\">\"disguised website\"</a>: a site that displays legal adult pornography to ordinary visitors but reveals criminal imagery only to users arriving through a specific digital pathway — particular referrer headers, cookies, or both in sequence. The IWF uncovered <strong>3,033 disguised websites in 2024</strong>, representing 43% of all 7,028 commercial sites and up four percentage points from 2023. These sites take at least twice as long to access and action as ordinary URLs, and they compound evasion with top-level-domain hopping, repeatedly changing TLDs to outrun blocklists.",
          },
          {
            type: "p",
            html: "The payment infrastructure has shifted toward cryptocurrency while retaining legacy rails. Among 2024 commercial URLs, the IWF observed 518 offering virtual-currency payment (1,067 instances), 291 showing money-transfer services (506 instances), and 42 displaying credit-card options (105 instances), while 1,345 URLs concealed payment methods entirely behind paywalls. The IWF operates dedicated <strong>Virtual Currency Alerts</strong>, sharing intelligence on payment addresses linked to CSAM with industry and law enforcement. Chainalysis's <a href=\"https://www.chainalysis.com/blog/crypto-human-trafficking-2026/\">2026 crypto crime analysis</a> reports that commercial CSAM operations have consolidated around subscription models (typically under $100/month) rather than pay-per-item sales, that roughly half of CSAM-related transactions are under $100, and that vendors increasingly launder proceeds through Monero and no-KYC \"instant exchanger\" swap services after collecting payment in mainstream coins.",
          },
          {
            type: "p",
            html: "U.S. financial regulators have built out the red-flag framework to match. FinCEN's February 2024 <a href=\"https://www.fincen.gov/news/news-releases/fincen-sees-increase-bsa-reporting-involving-use-convertible-virtual-currency\">Financial Trend Analysis</a> found 2,311 Bank Secrecy Act reports referencing convertible virtual currency in connection with online child sexual exploitation and human trafficking for 2020–2021, totaling over <strong>$412 million</strong> in flagged suspicious activity, and identified four recurring typologies: darknet CSAM marketplaces, peer-to-peer exchanges, CVC mixers, and CVC kiosks. This regulatory architecture — alerts, advisories, and SAR red flags — is now the primary mechanism by which the commercial trade is disrupted, displacing the credit-card-coalition approach that defined anti-CSAM finance efforts a decade ago.",
          },
          {
            type: "h3",
            text: "Tor hidden services and the deanonymization toolkit: Playpen and Welcome to Video",
          },
          {
            type: "p",
            html: "Two landmark operations define how law enforcement has dismantled major dark web CSAM platforms — one through network exploitation, the other through blockchain analysis. In <strong>Operation Pacifier (2015)</strong>, the FBI seized the Tor hidden service \"Playpen\" after a foreign tip revealed its IP address, then continued operating the site from a government server in Newington, Virginia for roughly two weeks while deploying a <a href=\"https://www.eff.org/pages/playpen-cases-frequently-asked-questions\">Network Investigative Technique (NIT)</a> — malware exploiting a Tor Browser/Firefox vulnerability to exfiltrate real IP and MAC addresses from over 1,300 visiting computers. The operation produced hundreds of arrests internationally but generated a wave of Fourth Amendment litigation: because the single warrant authorized searches well beyond the issuing magistrate's district, courts suppressed evidence in numerous cases under the then-existing Rule 41, as documented in <a href=\"https://www.lawfaremedia.org/article/judicial-framework-evaluating-network-investigative-techniques\">Lawfare's judicial-framework analysis</a>. The controversy directly drove the December 2016 amendments to Rule 41 expanding magistrates' authority to issue remote-search warrants.",
          },
          {
            type: "p",
            html: "The second model — following the money — proved both less legally fraught and more scalable. The 2019 takedown of <strong>\"Welcome to Video,\"</strong> a South Korea–based Tor marketplace selling CSAM videos, relied on the fact that the site transacted entirely in Bitcoin. As <a href=\"https://www.npr.org/2019/10/16/770628069/one-of-the-worst-forms-of-evil-more-than-330-arrested-in-child-porn-site-bust\">NPR reported</a>, investigators working with Chainalysis traced approximately $353,000 in Bitcoin across the public blockchain to deanonymize buyers, resulting in administrator Son Jong-woo's arrest and 337 further arrests across 23 U.S. states and multiple countries, alongside the rescue of children from ongoing abuse. Welcome to Video became the template — later chronicled in Andy Greenberg's <em>Tracers in the Dark</em> — for treating cryptocurrency's permanent ledger as an investigative asset rather than an obstacle, and it explains the subsequent vendor migration toward Monero and mixing services described above.",
          },
          {
            type: "h3",
            text: "Livestreamed abuse and production-on-demand: the foreign-demand economy",
          },
          {
            type: "p",
            html: "The most economically distinctive form of CSAM is not stored material at all but <strong>live, abuse-to-order production</strong>, in which a buyer in a wealthy country commissions and directs abuse of a child abroad in real time. The Philippines is the documented epicenter. The 2023 <a href=\"https://www.ijmuk.org/stories/1-in-100-children-sexually-exploited-in-livestreams-new-abuse-images-and-videos-in-the-philippines-last-year-driven-by-foreign-demand\">Scale of Harm study</a> by International Justice Mission and the University of Nottingham Rights Lab estimated that nearly half a million Filipino children — roughly <strong>1 in 100</strong> — were trafficked to produce child sexual exploitation material in a single year, with the trade driven explicitly by foreign demand. IJM has documented a 250% rise in Philippine IP addresses linked to such exploitation between 2014 and 2017.",
          },
          {
            type: "p",
            html: "The defining feature of this ecosystem is its economics and its facilitators. Payments to local traffickers are small in dollar terms but locally significant: single livestreams have been documented earning roughly 2,000 pesos (about $44), and offenders have paid as little as $25 per session — enough, against impoverished local wages, to sustain ongoing demand. Crucially, facilitators are frequently the child's own family members or close acquaintances, who in some communities rationalize livestreamed abuse as not \"real\" because it involves no in-person contact by the paying offender. The top demand countries, consistent across IJM and Philippine Anti-Money Laundering Council data since 2015, are the United States (by a wide margin), the United Kingdom, Australia, and Canada. Abuse has historically been transmitted over consumer video platforms including Skype and similar services, and arranged through Facebook, dating apps, and messaging tools.",
          },
          {
            type: "p",
            html: "Payment patterns make these cases simultaneously traceable and hard to prosecute. Research compiled by the University of Nottingham Rights Lab on <a href=\"https://www.nottingham.ac.uk/research/beacons-of-excellence/rights-lab/resources/reports-and-briefings/2023/october/payment-methods-and-investigation-of-financial-transactions-in-online-sexual-exploitation-of-children-cases.pdf\">financial investigation in OSEC cases</a> notes that money-transfer services such as Western Union, WorldRemit, Remitly, and PayPal are the dominant rails, and that proof of payment is often the single most important piece of evidence — because livestreamed abuse, unlike stored CSAM, leaves no file on the offender's device. The Philippines criminalized this conduct comprehensively through Republic Act 11930 (the 2022 Anti-OSAEC law), and the Philippine Internet Crimes Against Children Center (PICACC) has driven hundreds of rescues, but prosecution remains constrained by the evidentiary problem of crimes that, by design, produce no persistent artifact.",
          },
          {
            type: "h3",
            text: "Sextortion as an organized criminal economy",
          },
          {
            type: "p",
            html: "Financial sextortion has emerged as the fastest-growing form of online child exploitation and is structurally distinct from traditional CSAM markets: it is extractive rather than collection-driven, monetizing coercion rather than content, and is run as a high-volume scam operation. The dominant actors are West African, principally Nigerian, cybercriminals known colloquially as <strong>\"Yahoo Boys\"</strong> — a loose subculture rather than a single syndicate — who deceive predominantly teenage boys into sending explicit images and then extort them under threat of exposure. The FBI has reported an increase of more than 1,000% in financial sextortion targeting minors over an 18-month period, with the crime concentrated in the U.S., Canada, and Australia.",
          },
          {
            type: "p",
            html: "The scale of the criminal infrastructure became visible through platform enforcement. In July 2024, <a href=\"https://about.fb.com/news/2024/07/combating-financial-sextortion-scams-from-nigeria/\">Meta disrupted</a> a Nigeria-based operation, removing approximately <strong>63,000 Instagram accounts</strong> engaged in financial sextortion — including a coordinated network of about 2,500 accounts run by roughly 20 individuals — plus around 7,200 Facebook assets (1,300 accounts, 200 Pages, and 5,700 Groups) that functioned as a marketplace, selling scamming scripts, how-to guides, and stock photo collections for building fake profiles. Meta reported minor-targeting accounts to NCMEC and shared signals through the Tech Coalition's Lantern program, and classified the Yahoo Boys under its Dangerous Organizations and Individuals policy.",
          },
          {
            type: "p",
            html: "The financial-intelligence picture is developing in parallel. FinCEN issued a dedicated <a href=\"https://www.fincen.gov/news/news-releases/fincen-issues-notice-financially-motivated-sextortion\">Notice on Financially Motivated Sextortion</a> in 2025, cataloguing the payment rails — gift cards, peer-to-peer payment apps, and cryptocurrency, frequently routed through money mules — and the red flags that distinguish these flows. Together with NCMEC's 2024 figures showing nearly 100 financial-sextortion reports per day and a 192% surge in online enticement reports, the evidence points to a maturing, organized criminal economy that has industrialized a coercion-based business model at a scale comparable to romance-scam operations run from the same region.",
          },
        ],
      },
      {
        id: "reporting-pipeline",
        heading: "The reporting pipeline: from CyberTipline to arrest",
        blocks: [
          {
            type: "h3",
            text: "The CyberTipline and the statutory duty that feeds it",
          },
          {
            type: "p",
            html: "When a platform discovers child sexual abuse material (CSAM), it triggers a pipeline that is at once highly engineered and chronically under-resourced. In the United States, the path runs from a statutorily compelled report, through the National Center for Missing & Exploited Children (NCMEC), to one of 61 regional task forces and a handful of federal agencies. Internationally, a parallel architecture of hash lists, INTERPOL databases, and Europol coordination tries to stitch jurisdictions together across a system where a single evidence request can take ten months. This section traces what actually happens at each stage — the legal duties, the triage, the forensic chain to victim identification, and the documented gap between report volume and law-enforcement capacity. The numbers are precise, recent, and sobering: of the 21.3 million reports NCMEC received in 2025, more than 4.5 million were classed as informational rather than actionable, and over 10 percent of industry reports arrived with inadequate information.",
          },
          {
            type: "p",
            html: "The CyberTipline, operated by NCMEC since 1998, is the legally designated reporting mechanism for U.S.-based online services and has received <a href=\"https://www.missingkids.org/theissues/csam\">more than 195 million reports since inception</a>. It accepts reports across eight categories — child sexual abuse material, online enticement, child sex molestation, child sex trafficking, child sex tourism, unsolicited obscene material sent to a child, misleading domain names, and misleading words or images. Providers file through a dedicated reporting API or a manual web form; NCMEC analysts then attempt to geolocate the incident (via IP, account data, or content) and route it to the appropriate law-enforcement agency for independent investigation.",
          },
          {
            type: "p",
            html: "The feed is compelled by <a href=\"https://www.law.cornell.edu/uscode/text/18/2258A\">18 U.S.C. § 2258A</a>, which requires any provider with <strong>actual knowledge</strong> of an apparent CSAM violation to report it to the CyberTipline as soon as reasonably possible. Critically, the duty is reactive, not proactive: the statute expressly states providers are not required to monitor users or affirmatively search, screen, or scan for violations. The REPORT Act amendments (2024) extended the evidence-preservation window from 90 days to <strong>one year</strong> and expanded mandatory categories to include child sex trafficking and enticement — a change NCMEC credits for the 55 percent rise in trafficking reports.",
          },
          {
            type: "p",
            html: "Penalties for knowing failure to report are tiered by platform size: a first violation runs to <strong>$600,000</strong> (under 100 million monthly active users) or <strong>$850,000</strong> (at or above that threshold), rising to $850,000 and $1,000,000 for subsequent violations. A statutory safe harbor immunizes providers and NCMEC from civil liability for actions taken to comply, which is what makes the voluntary transmission of suspect content and subscriber data legally tenable.",
          },
          {
            type: "h3",
            text: "Triage at NCMEC and the actionability problem",
          },
          {
            type: "p",
            html: "Volume is the defining operational fact. The CyberTipline received <a href=\"https://www.missingkids.org/cybertiplinedata\">21.3 million reports in 2025, containing 61.8 million images, videos, and other files</a> — down from a 2023 peak of 36.2 million, a decline NCMEC attributes partly to report \"bundling\" and to reduced submissions following end-to-end-encryption rollouts rather than to any drop in underlying abuse. Reporting is extraordinarily concentrated: more than 2,000 ESPs are registered, but <strong>just over 300 actually submitted reports in 2025, and five ESPs accounted for over 75 percent of all reports</strong>.",
          },
          {
            type: "p",
            html: "NCMEC triages each submission and escalates the roughly 51,000 reports per year flagged as a child in imminent danger. But the headline volume overstates investigable signal. In 2025, <strong>more than 4.5 million reports were designated informational rather than actionable referrals</strong>, and <strong>over 10 percent of industry-submitted reports contained inadequate information</strong> for law enforcement to act. Roughly 2 million reports resolved to the U.S. (1.9 million to a specific state), while <a href=\"https://www.missingkids.org/cybertiplinedata\">77 percent of reports involved CSAM uploaded by users outside the United States</a>, pushing the bulk of the caseload into the slower cross-border channels.",
          },
          {
            type: "p",
            html: "These caveats are the operational complement to the Stanford Internet Observatory's 2024 finding (covered in Chapter 04) that the system's data integrity — duplication, incomplete fields, and the mismatch between report counts and discrete incidents — limits how much the topline number can be read as a measure of either abuse prevalence or enforcement workload.",
          },
          {
            type: "h3",
            text: "From report to arrest: the forensic and legal chain",
          },
          {
            type: "p",
            html: "A report does not authorize action on its own. Under Fourth Amendment doctrine, <a href=\"https://www.nyccriminalattorneys.com/ncmec-cybertipline-report-what-actually-happens-after-youre-reported/\">law enforcement generally must obtain a warrant before opening files</a> that a government agent has not already lawfully viewed, and a warrant application requires probable cause built on more than the report alone — typically corroborating subscriber records obtained from the provider. Hash matching is the entry point: a file's PhotoDNA fingerprint is checked against known-CSAM databases. The often-cited <strong>1-in-50-billion false-positive rate</strong> for PhotoDNA is a vendor figure that has never been independently verified, and researchers have argued operational error rates are materially higher at scale — a contested point relevant to how much investigative weight a bare hash match should carry.",
          },
          {
            type: "p",
            html: "Once a device or account is lawfully seized, examiners use the <a href=\"https://www.projectvic.org/project-vic\">Project VIC International</a> ecosystem to triage seized media at volume: known files are auto-categorized against shared hash sets so investigators can focus human review on unknown material that may depict an unidentified, still-at-risk child. New or unidentified images are submitted to NCMEC's <a href=\"https://www.missingkids.org/theissues/csam\">Child Victim Identification Program (CVIP)</a>, established in 2002, which has reviewed more than 425 million images and videos and helped identify more than 19,100 children; over 30,000 victims total have been identified by law enforcement and recorded with NCMEC. The lag between report and any charge is long and largely undocumented in aggregate — reports enter investigative backlogs, and NCMEC and law enforcement both acknowledge that most never result in charges, constrained by staffing, forensic-evidence volume, and turnover.",
          },
          {
            type: "h3",
            text: "Project VIC International and the interoperable forensic data model",
          },
          {
            type: "p",
            html: "Project VIC International, founded in 2012, is the connective tissue of modern CSAM forensics. Its core artifact is the <a href=\"https://www.projectvic.org/vics-data-model\">VICS Data Model</a> (built 2013), a standardized schema that lets otherwise-incompatible forensic tools exchange case data, hash values, and categorization tags. <strong>More than 30 technology vendors</strong> — including Magnet AXIOM, Oxygen Forensics, MSAB, and ADF Solutions — have implemented the standard, putting interoperable tooling in the hands of <strong>5,000+ law-enforcement partners</strong>.",
          },
          {
            type: "p",
            html: "The payoff is scale and victim-centricity. Project VIC became the <a href=\"https://www.projectvic.org/project-vic\">worldwide licensee of Microsoft's PhotoDNA for the crimes-against-children use case</a>, collapsing the near-duplicate review burden, and added VICS Safer (a MITRE machine-learning classifier, 2019) and VICS Point (built with Microsoft AI for Good) to surface likely-CSAM from file attributes. Through this ecosystem, <strong>law-enforcement partners have discovered over 6 million new child abuse images, videos, and related files</strong> — material not previously in any known-hash database, each new file a potential thread to an unidentified victim. The \"Victims First\" framing is operationally literal: the value of categorizing the known is that it frees analyst attention for the unknown.",
          },
          {
            type: "h3",
            text: "The international architecture: IWF, INTERPOL ICSE, and Europol",
          },
          {
            type: "p",
            html: "Outside the U.S., the <a href=\"https://www.iwf.org.uk/our-technology/our-services/\">Internet Watch Foundation (IWF)</a> performs the analogous clearinghouse role for the UK and supplies the broader industry. Its Image Hash List holds <a href=\"https://www.iwf.org.uk/our-technology/our-services/image-hash-list/\">over 3.2 million unique hashes</a>, expressed in PhotoDNA, MD5, SHA-1, and SHA-256, and is distributed to licensed members either via API or through Microsoft's PhotoDNA cloud service — meaning IWF-confirmed material flows back into platform-side detection worldwide. The IWF also maintains URL, keyword, and non-photographic-imagery lists used for blocking and takedown.",
          },
          {
            type: "p",
            html: "For victim identification across borders, the operational system is INTERPOL's <a href=\"https://www.interpol.int/en/Crimes/Crimes-against-children/International-Child-Sexual-Exploitation-database\">International Child Sexual Exploitation (ICSE) database</a>. (The acronym sometimes given as \"I-CAID\" refers to its predecessor, the INTERPOL Child Abuse Image Database, ICAID, in use from 2001 until ICSE launched in 2009.) ICSE connects specialist investigators in <strong>68–70 countries plus Europol</strong>, holds roughly 4.9 million images and videos, uses image and video comparison to link victims, abusers, and places, and has assisted in identifying more than <strong>42,300 victims</strong> — on average about seven children identified per day. Europol's <a href=\"https://www.europol.europa.eu/crime-areas/child-sexual-exploitation\">European Cybercrime Centre (EC3)</a> coordinates the EU operational response, hosting international victim-identification taskforces at The Hague and running the crowdsourced <a href=\"https://www.europol.europa.eu/stopchildabuse\">Stop Child Abuse – Trace an Object</a> campaign. Under the EMPACT framework, coordinated efforts such as Operation Daylight have disseminated 611 intelligence packages to member states, opening 207 investigations and producing 75 arrests or convictions in a single action cycle.",
          },
          {
            type: "h3",
            text: "Cross-border friction: MLATs, the CLOUD Act, and Five Eyes",
          },
          {
            type: "p",
            html: "The international system's weakest link is evidence transfer. A formal Mutual Legal Assistance Treaty (MLAT) request — still the default route when data sits with a provider in another country — can take <a href=\"https://academic.oup.com/cybersecurity/article/8/1/tyac014/6909060\">120 days to ten months to fulfill</a>, a timeline widely regarded as incompatible with fast-moving CSAM cases where content and a child's safety are both time-sensitive. The U.S. <a href=\"https://www.crossborderdataforum.org/cloudactfaqs/\">CLOUD Act (2018)</a> was designed to route around this for partner countries with executive agreements, enabling faster cross-border access to data held by U.S. providers and supporting a \"freeze-before-lose\" preservation request — recommended as the first act of any cloud investigation — so that evidence is held while slower legal process runs.",
          },
          {
            type: "p",
            html: "Governance is coordinated at the political level by the Five Country Ministerial (Five Eyes: Australia, Canada, New Zealand, the United Kingdom, and the United States). In March 2020 it launched, with WeProtect and six industry partners, the <a href=\"https://www.weprotect.org/resources/library/voluntary-principles-to-counter-online-child-sexual-exploitation-and-abuse/\">Voluntary Principles to Counter Online Child Sexual Exploitation and Abuse</a> — 11 principles covering proactive grooming detection, reporting to authorities, and transparency, since endorsed by more than 20 companies and the G7. The Five Eyes Tackling Child Sexual Abuse Working Group continues to promote the framework, conducting a virtual roadshow with industry through 2025, though the principles remain non-binding.",
          },
          {
            type: "h3",
            text: "Domestic enforcement capacity and survivor services",
          },
          {
            type: "p",
            html: "The U.S. front line is the <a href=\"https://ojjdp.ojp.gov/programs/internet-crimes-against-children-task-force-program\">Internet Crimes Against Children (ICAC) Task Force Program</a>, a network of <strong>61 task forces</strong> spanning nearly 5,500 federal, state, local, and Tribal agencies, funded through the Office of Juvenile Justice and Delinquency Prevention. The program received <strong>$39.9 million in FY 2024</strong> (down from $42.4 million in FY 2023) and, in that year, conducted approximately 203,467 investigations leading to more than 12,600 arrests and trained roughly 46,000 professionals. The arithmetic — over 200,000 investigations against a 20-million-plus annual report inflow, much of it non-actionable or offshore — illustrates the triage forced by the volume gap. Federal cases are typically worked by the FBI and Homeland Security Investigations (HSI) in coordination with ICAC affiliates.",
          },
          {
            type: "p",
            html: "On the survivor side, once a child is identified through CVIP, NCMEC provides crisis intervention, peer support through Team HOPE, referrals to a specialized network of CSAM-literate therapists, and image-removal support — tagging and notifying providers to take down circulating material and registering survivors so they can be notified when their imagery surfaces in new cases. That notification channel feeds the restitution system: under <a href=\"https://www.jamesmarshlaw.com/federal-criminal-restitution-for-child-pornography-victims/\">18 U.S.C. § 2259</a>, and following the Supreme Court's apportionment ruling in <a href=\"https://fedsoc.org/fedsoc-review/paroline-v-united-states-the-question-of-restitution\">Paroline v. United States (2014)</a>, courts must order restitution to identified victims of CSAM trafficking. The Amy, Vicky, and Andy Child Pornography Victim Assistance Act of 2018 set a statutory floor of <strong>at least $3,000 per defendant</strong> and created a one-time <strong>$35,000 defined-monetary-assistance</strong> payment (inflation-indexed) administered by the Department of Justice — converting each new prosecution into a potential restitution event for survivors whose images continue to circulate.",
          },
        ],
      },
      {
        id: "detection-technical-depth",
        heading: "Detection technology: how it actually works",
        blocks: [
          {
            type: "h3",
            text: "How perceptual hashing actually works: PhotoDNA, PDQ, and the Hamming-distance threshold",
          },
          {
            type: "p",
            html: "For fifteen years, the defense against child sexual abuse material has rested on a single elegant idea: reduce an image to a short, robust fingerprint, and compare it against a curated list of fingerprints derived from confirmed abuse content. This is how Microsoft PhotoDNA, Meta's PDQ, and the video equivalent TMK+PDQF work, and it is why a known image can be detected across dozens of platforms the instant it is re-uploaded. But perceptual hashing has two structural limits that now define the arms race. It only finds what is already on a list, and it can be defeated by an adversary willing to transform an image enough to push it past the matching threshold. Generative AI has attacked both flanks at once — producing a limitless supply of novel imagery that no hash list has ever seen, while end-to-end encryption removes the server-side vantage point from which scanning has always operated. What follows is a technical account of how detection works today, what defeats it, and where the cryptographic and machine-learning frontiers are headed.",
          },
          {
            type: "p",
            html: "Perceptual hashing differs fundamentally from cryptographic hashing. An MD5 or SHA-1 digest changes completely if a single pixel changes; that fragility makes it useful only for byte-identical duplicates. A perceptual hash is engineered to do the opposite — to remain stable under the transformations that leave an image visually recognizable (recompression, resizing, minor color shifts) so that a re-encoded copy still matches the original. <strong>Microsoft PhotoDNA</strong> (2009) achieves this by converting the image to greyscale, resizing it to a common scale, partitioning it into a grid of cells, and computing intensity-gradient histograms per cell, yielding a <strong>144-byte (1,152-bit)</strong> fingerprint. <strong>Meta's PDQ</strong> (open-sourced 2019) is built on the <strong>Discrete Cosine Transform</strong>: it downsamples the luminance channel, applies a two-dimensional DCT, and thresholds the resulting spectral coefficients around their median to emit a <strong>256-bit</strong> hash plus a quality metric, an approach the <a href=\"https://arxiv.org/html/2406.00918v1/\">comparative analysis by Hao et al. (arXiv 2406.00918)</a> confirms produces a 256-bit value with a quality factor. Apple's abandoned <strong>NeuralHash</strong> (2021) took a third route — a convolutional neural network producing an embedding hashed to <strong>96 bits</strong>.",
          },
          {
            type: "p",
            html: "Matching is a nearest-neighbor problem in <strong>Hamming distance</strong> — the count of differing bits between two hashes. Meta's <a href=\"https://github.com/facebook/ThreatExchange/tree/main/pdq\">reference PDQ implementation</a> sets the canonical conventions: a distance <strong>≤ 31</strong> (out of 256 bits) is treated as a match, and hashes with a quality score <strong>≤ 49</strong> are discarded as too low-information to compare reliably. The implementation is candid that these thresholds were \"determined by experimentation and not by any rigorous methodology.\" PhotoDNA's operational selling point has long been an extremely low false-positive rate, frequently cited at roughly <strong>1 in 50 billion</strong> comparisons — a figure that comes from Microsoft and its deployment partners rather than from independent published replication, a caveat worth keeping in view.",
          },
          {
            type: "h3",
            text: "Matching at scale: Multi-Index Hashing and the FAISS pipeline",
          },
          {
            type: "p",
            html: "A naive linear scan — comparing an incoming hash against every entry in a list of tens of millions — is too slow for platform-scale ingestion. The standard acceleration is <strong>Multi-Index Hashing (MIH)</strong>, which exploits the pigeonhole principle: if two 256-bit hashes are within Hamming distance r, and the hash is split into m contiguous substrings, then they must match exactly in at least one substring when r < m. MIH therefore builds m separate hash tables keyed on substrings, retrieves a small candidate set via exact substring lookups, and verifies full Hamming distance only on those candidates. This converts an O(N) scan into something far closer to sub-linear for the small radii (r ≤ 31) used in practice.",
          },
          {
            type: "p",
            html: "In deployed systems the index is typically realized with Facebook AI Similarity Search (FAISS) or equivalent. Meta's PDQ documentation reports its <a href=\"https://github.com/facebook/ThreatExchange/tree/main/pdq\">FAISS-backed matcher sustaining roughly 4,000 images per second</a>, and the Canadian Centre for Child Protection states that <a href=\"https://protectchildren.ca/en/programs-and-initiatives/project-arachnid/\">Project Arachnid processes \"tens of thousands of images a second\"</a>. The engineering trade-off is the usual recall-versus-latency tension: tighter thresholds and exact-substring indexing minimize false positives but risk missing near-duplicates that fall just outside the radius.",
          },
          {
            type: "h3",
            text: "The harder problem: video hashing with TMK+PDQF",
          },
          {
            type: "p",
            html: "Video defeats naive image hashing because the same clip can be re-encoded at different frame rates, resolutions, and bitrates, and because the unit of comparison is a temporal sequence rather than a still. Meta's answer, co-developed and open-sourced alongside PDQ, is <strong>TMK+PDQF</strong> (Temporal Match Kernel + PDQ-Float). The system extracts frames, computes a floating-point PDQ descriptor per frame, and then aggregates these descriptors across time using a <strong>Temporal Match Kernel</strong> that encodes the video as a fixed-length vector capturing both per-frame appearance and temporal structure. Matching then compares these aggregate signatures, with a fine-grained alignment step to handle temporal offset.",
          },
          {
            type: "p",
            html: "Video hashing remains markedly harder than image hashing, and benchmarking confirms it. The Technology Coalition's <a href=\"https://technologycoalition.org/wp-content/uploads/Tech-Coalition-Video-Hash-Benchmark-Paper.pdf\">PHVSpec video-hash benchmark</a> evaluates perceptual video-hashing systems against transformations specific to video and finds wide variation in robustness. Practical complications include key-frame extraction (which frames to sample, and how to stay stable when an adversary inserts or drops frames), partial-clip matching (a few seconds of known CSAM spliced into a longer benign video), and the much larger storage and compute footprint — reflected in NCMEC's hash-sharing API, which classifies <a href=\"https://hashsharing.ncmec.org/npo/v2/documentation/\">TMK+PDQF among its \"large\" file-based fingerprint types</a> rather than the compact inline hashes used for stills.",
          },
          {
            type: "h3",
            text: "Adversarial evasion and the novel-image problem",
          },
          {
            type: "p",
            html: "Perceptual hashing is robust to incidental transformations but not to deliberate ones. The <a href=\"https://arxiv.org/html/2406.00918v1/\">Hao et al. security analysis</a> quantifies this: against simple image edits at the standard threshold, <strong>rotation defeated PhotoDNA, PDQ, and NeuralHash essentially 100% of the time</strong>, and filtering succeeded against PhotoDNA in 94% of cases. PhotoDNA was found \"not robust to filtering, rotating, resizing, mirroring, bordering, cropping.\" The intuition is geometric: hashes built on grid or DCT alignment are sensitive to operations that shift that alignment, which is why Meta's documentation explicitly warns PDQ \"does not guarantee exact rotational invariance.\" The same paper offers an important counterweight, however — against query-limited <em>black-box adversarial</em> attacks under realistic distortion budgets, success rates collapsed to near zero (PDQ 0%, PhotoDNA 1%, NeuralHash 14% untargeted), because the discrete, noisy nature of hash outputs makes gradient estimation unreliable. So crude transforms work; sophisticated minimal-perturbation attacks largely do not.",
          },
          {
            type: "p",
            html: "But the decisive shift is not evasion of a known image — it is the generation of imagery that was never on any list. Because every AI-generated image is a <strong>novel artifact</strong>, hash matching is constitutively blind to it. The <a href=\"https://www.iwf.org.uk/about-us/why-we-exist/our-research/how-ai-is-being-abused-to-create-child-sexual-abuse-imagery/\">Internet Watch Foundation</a> documents that fine-tuned models and <strong>LoRA</strong> adapters let offenders \"create realistic deepfakes of specific children using as few as 20 existing images in as little as 15 minutes,\" producing material \"indistinguishable from real photographic imagery to the untrained eye.\" The IWF reports AI-generated videos rising 26,385% between 2024 and 2025 (from a small 2024 base of single-digit videos to 3,443 in 2025). Against an adversary that manufactures infinite unique violations, a fingerprint of known content is structurally insufficient — which is precisely the gap classifiers exist to fill.",
          },
          {
            type: "h3",
            text: "AI classifiers: detecting the unknown via embeddings",
          },
          {
            type: "p",
            html: "Where hashing answers \"have I seen this exact image before,\" a classifier answers \"does this image depict abuse,\" generalizing to content it has never encountered. This is the only viable response to novel and AI-generated material. <strong>Thorn's Safer</strong> classifier and <strong>Hive AI</strong> (which deploys a CSAM classifier built in partnership with Thorn) are the dominant commercial offerings. Architecturally these are deep convolutional and increasingly vision-transformer models trained for multi-label classification; Hive's broader stack is explicitly a <a href=\"https://thehive.ai/blog/multi-label-classification\">multi-label classification system</a> that assigns independent confidence scores across categories. The <a href=\"https://docs.thehive.ai/docs/csam-detection-api\">Hive CSAM detection API</a> is designed as a two-stage pipeline — hash matching first to catch known content, then, if no match is found, the media is routed to the classifier to flag <strong>novel CSAM</strong>, with outputs returned as confidence scores between 0 and 1 across classes that distinguish CSAM from adult pornography.",
          },
          {
            type: "p",
            html: "A defining operational constraint is the handling of training data and the source media itself. Both Thorn and Hive use an <strong>embedding-first</strong> design: media is converted to a numeric embedding and <a href=\"https://docs.thehive.ai/docs/csam-detection-api\">\"the original media is permanently deleted\"</a> after the embedding is computed, so the production system never durably stores abuse imagery. The deeper unsolved tension is training-data sourcing: a classifier must learn the visual signature of abuse without its developers possessing or circulating that material, which forces reliance on tightly controlled access within law-enforcement and NCMEC-sanctioned environments, hashed-and-segregated datasets, and — increasingly discussed but contested — synthetic or partially synthetic training examples that approximate the target distribution without depicting real victims. The contamination risk is real in both directions: a poorly governed training set could itself become a vector for abuse imagery, while an over-broad classifier raises false-positive and over-removal concerns that hashing's precision largely avoids.",
          },
          {
            type: "h3",
            text: "The encrypted-content frontier: PSI, threshold secret sharing, and homomorphic proposals",
          },
          {
            type: "p",
            html: "Server-side scanning presumes the operator can see the content. End-to-end encryption removes that vantage point, and the proposed responses are among the most contested in the field. The most fully specified attempt was <strong>Apple's 2021 CSAM Detection system</strong>, which would have run NeuralHash on-device and used a <strong>Private Set Intersection (PSI)</strong> protocol to compare each image's hash against a blinded NCMEC hash database <em>without</em> the device learning the list or the server learning non-matching images. As the <a href=\"https://decentralizedthoughts.github.io/2021-08-29-the-private-set-intersection-psi-protocol-of-the-apple-csam-detection-system/\">protocol analysis by Ittai Abraham</a> details, the construction leaned on Diffie-Hellman random self-reducibility and Reed-Solomon decoding via the Coppersmith-Sudan algorithm, layered with <strong>threshold secret sharing</strong> so that Apple could decrypt the associated \"safety vouchers\" only once an account exceeded a set number of matches — a design Apple claimed bounded false-account reporting at roughly one in a trillion per year. Apple <strong>abandoned the system in 2022</strong> after researchers demonstrated NeuralHash collisions and a coalition of cryptographers warned that any client-side scanning channel is repurposable for broader surveillance.",
          },
          {
            type: "p",
            html: "The frontier beyond PSI is largely theoretical. <strong>Fully homomorphic encryption (FHE)</strong> would in principle let a server compute a hash-match over ciphertext it cannot read; recent work such as the <a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12063338/\">Summation-based Private Segmented Membership Test from threshold-FHE</a> explores private membership queries of exactly this shape. But FHE's per-operation cost remains orders of magnitude too high for population-scale image ingestion, leaving a sharp gap between what is <strong>mathematically possible</strong> and what is <strong>deployable</strong>. The honest summary: PSI plus threshold disclosure is implementable but politically radioactive after the Apple episode; FHE-based scanning is not yet practical; and <strong>federated learning</strong> — training shared classifiers across platforms without centralizing the underlying media — is plausible for model improvement but does not by itself solve detection inside an encrypted channel.",
          },
          {
            type: "h3",
            text: "Project Arachnid and the distinct problem of detecting CSAM on Tor",
          },
          {
            type: "p",
            html: "The <strong>Canadian Centre for Child Protection's Project Arachnid</strong> is the most aggressive open-and-dark-web crawler in the field. As of May 2026 it reports having <a href=\"https://www.projectarachnid.ca/en/\">processed over 176 billion images, triggered 126 million suspect media for analyst review, and issued 141 million takedown notices</a>. Its detection core is image and video hashing — exact matching plus PhotoDNA-style perceptual matching against multiple hash sources including its own Arachnid list and the IWF list — fronted by the no-cost <a href=\"https://shield.projectarachnid.com/docs/\">Shield API</a> that lets platforms compare their media against Arachnid's fingerprints. Classification of detected suspect media is performed by a global analyst network the Centre describes as <a href=\"https://protectchildren.ca/en/programs-and-initiatives/project-arachnid/\">18 hotlines across 17 countries</a> coordinating through the \"Arachnid Orb.\"",
          },
          {
            type: "p",
            html: "What makes Tor detection technically distinct is less the hashing than the crawling and the topology. A standard web crawler resolves DNS, follows links, and can be rate-managed against known hosts; a Tor crawler must route through the onion network, contend with non-indexable <strong>.onion hidden services</strong> that publish no sitemap and are reachable only via shared addresses, tolerate high latency and frequent unavailability, and discover content through references rather than enumeration. The Centre's own characterization reframes the threat model usefully: <a href=\"https://protectchildren.ca/en/programs-and-initiatives/project-arachnid/\">\"the vast majority of CSAM detected by Project Arachnid is not physically hosted on the dark web,\"</a> which instead \"acts as the main conduit for directing individuals on where to find it on the clear web.\" The operational consequence is that effective Tor work is reconnaissance — mapping the directory layer that points to clear-web hosting — as much as it is takedown, since the abusive payload usually sits on a conventional, hash-scannable, takedown-amenable provider.",
          },
          {
            type: "h3",
            text: "Hash-list governance, the CyberTipline, and false-positive recovery",
          },
          {
            type: "p",
            html: "Detection is only as trustworthy as the lists it matches against, which makes governance a first-order technical concern. <strong>NCMEC</strong> operates two hash-sharing platforms — one for industry members to contribute their own hashes to one another, and one through which NCMEC distributes more than <a href=\"https://www.technologycoalition.org/knowledge-hub/update-on-voluntary-detection-of-csam\">five million hash values of confirmed CSAM</a> to vetted companies. The integrity control is human review: a reported file is <strong>confirmed by analysts at least three times</strong> before its hash is added to a list. The <a href=\"https://hashsharing.ncmec.org/npo/v2/documentation/\">Hash Sharing API</a> supports a deliberately heterogeneous set of fingerprint types — MD5, SHA-1, PhotoDNA, PDQ, and NetClean as compact inline hashes, plus Videntifier, TMK+PDQF, and SSVH variants as large file-based fingerprints — and tags entries with the standardized industry severity classifications <strong>A1, A2, B1, B2</strong>. Crucially for false-positive recovery, the API exposes a community <strong>feedback mechanism</strong>: members can submit affirmative (upvote) or negative (downvote, with a coded reason) feedback on individual fingerprints and revise it later, so a disputed or erroneous hash can be flagged through distributed validation rather than unilateral central adjudication. This matters because a bad list entry propagates to every subscriber simultaneously; the downvote channel is the principal correction path.",
          },
          {
            type: "p",
            html: "The reporting backbone these lists feed is the CyberTipline, and its modernization is the operational counterpart to the technical arms race. The <a href=\"https://cyber.fsi.stanford.edu/news/cybertipline-report\">2024 Stanford Internet Observatory report</a> — drawn from 66 interviews and on-site work at NCMEC — found the system strained by volume and by poor API field completeness from reporting platforms, with only roughly half of tips actionable and law enforcement overwhelmed at triage. Reporting volume fell from <strong>36.2 million reports in 2023 to 20.5 million in 2024</strong>, a decline driven substantially by a 2024 <strong>report-bundling feature</strong> that lets large platforms consolidate viral-meme-style mass incidents into single reports while retaining per-user detail. The throughline of \"CyberTipline 2.0\" modernization is exactly this: better-structured API submissions, deduplication, and prioritization so that the marginal new threat — vast volumes of novel AI imagery that hashing cannot pre-filter — does not bury the actionable signal that reaches a child.",
          },
        ],
      },
    ],
  },
  {
    slug: "prevention",
    number: "07",
    title: "Prevention Strategies",
    dek: "Half of US states now require age verification. The Supreme Court upheld Texas's law in June 2025. Yet evidence shows these laws displace traffic rather than reduce consumption. This chapter also maps how CSAM-specific law differs across the US, UK, EU, Canada, Australia, and the major outliers — the structural variations that shape platform compliance and cross-border investigation.",
    readingMinutes: 13,
    sections: [
      {
        id: "age-verification",
        heading: "Legislative approaches to age verification",
        blocks: [
          {
            type: "p",
            html: "The legislative landscape for age verification has transformed rapidly. The US Supreme Court's June 27, 2025 decision in <em>Free Speech Coalition v. Paxton</em> upheld Texas's age verification law 6–3, ruling that requiring websites to verify users' ages does not violate the First Amendment (<a href='https://www.texastribune.org/2025/06/27/texas-porn-websites-age-verification-law-supreme-court/'>Texas Tribune</a>). Following Louisiana's 2023 pioneering law, approximately half of all US states have enacted or are implementing age verification requirements as of early 2026 (<a href='https://action.freespeechcoalition.com/age-verification-resources/state-avs-laws/'>Free Speech Coalition</a>).",
          },
          {
            type: "p",
            html: "Internationally, the UK's Online Safety Act 2023 mandates robust age verification for all pornographic platforms serving UK users, with enforcement beginning July 25, 2025, and fines up to £18 million or 10% of global revenue (<a href='https://www.yoti.com/blog/understanding-age-verification-online-safety-act/'>Yoti</a>). Australia expanded age verification to adult websites, explicit video games, and AI chatbots in March 2026, while France implemented a &ldquo;double anonymity&rdquo; system using intermediaries to check age without pornography sites knowing user identity (<a href='https://www.bbc.com/news/articles/cwy92qpv424o'>BBC News</a>; <a href='https://english.elpais.com/technology/2024-05-07/how-age-verification-to-access-porn-works-in-france-they-wont-know-anything-about-you-other-than-that-youre-an-adult.html'>El País</a>).",
          },
          {
            type: "p",
            html: "Yet the effectiveness evidence is cautionary. The most significant empirical study found that age verification laws produced a 51% reduction in searches for Pornhub — the primary compliant platform — but this appears to reflect displacement rather than cessation. Users migrate to less regulated, less moderated platforms, with researchers concluding the laws are &ldquo;unlikely to achieve their stated goals and may, in fact, encourage riskier behaviors&rdquo; (<a href='https://mashable.com/article/age-verification-laws-dont-work-nyu-study'>Mashable</a>).",
          },
          {
            type: "p",
            html: "Privacy concerns are substantial: a 2025 Discord data breach through a third-party age verification vendor exposed approximately 70,000 users' government-issued ID cards (<a href='https://www.marketplace.org/story/2026/02/26/age-verification-rules-on-social-media-spark-privacy-concerns'>Marketplace</a>), and AI-based facial age estimation demonstrates documented racial and gender bias (<a href='https://www.sydney.edu.au/news-opinion/news/2024/06/11/is-age-verification-for-pornography-access-reliable-research-suggests-no-sexual-health-expert.html'>University of Sydney</a>).",
          },
        ],
      },
      {
        id: "education",
        heading: "Educational programs",
        blocks: [
          {
            type: "p",
            html: "Educational prevention remains underdeveloped relative to its importance. <strong>Fight the New Drug</strong> is a non-religious nonprofit reaching millions globally through science-based awareness campaigns about pornography's harms, partnering with the Fortify recovery app and maintaining a US state age verification law tracker (<a href='https://fightthenewdrug.org/about/'>Fight the New Drug</a>). <strong>Culture Reframed</strong>, founded by Dr. Gail Dines, operates on a public health model, offering free research-based parent courses, a porn-critical sex education curriculum for adolescents launched in 2023, and in 2024 launched a working group with Child Advocacy Centers (<a href='https://culturereframed.org/'>Culture Reframed</a>). The UK's <strong>Reward Foundation</strong> provides free professional courses on pornography's neurological impacts, originally approved by the Royal College of General Practitioners (<a href='https://www.rewardfoundation.org/'>Reward Foundation</a>).",
          },
          {
            type: "p",
            html: "A notable gap: there is currently no widely adopted, evidence-based, specifically pornography-focused curriculum for US schools. The failure of D.A.R.E.'s lecture-based drug prevention model — producing no significant differences in drug use — underscores that program design matters more than mere delivery (<a href='https://pubmed.ncbi.nlm.nih.gov/8781009/'>PubMed</a>). The recently proposed &ldquo;Navigating Realities&rdquo; curriculum integrates critical thinking, consent education, and the reality/fantasy distinction using a rights-based framework (<a href='https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2025.1509262/full'>Frontiers in Education</a>).",
          },
        ],
      },
      {
        id: "breaking-addiction",
        heading: "Breaking the addiction: evidence-based frameworks",
        blocks: [
          {
            type: "p",
            html: "Evidence-based approaches to quitting pornography converge on a multi-component framework. The foundation is understanding the neurological basis: pornography activates the same reward circuitry as substance addiction, with tolerance developing through dopamine receptor downregulation (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC4600144/'>Behavioral Sciences</a>).",
          },
          {
            type: "p",
            html: "Environmental design — removing devices from bedrooms, installing accountability software, curating social media feeds — reduces reliance on willpower by creating friction between trigger and access (<a href='https://therapevo.com/podcasts/porn-addiction-brain-shame-relapse/'>Therapevo</a>). Trigger identification and mapping enables preemptive planning for high-risk situations (loneliness, boredom, stress, sleeplessness).",
          },
          {
            type: "p",
            html: "Professional treatment through Certified Sex Addiction Therapists (CSATs) is recommended for moderate to severe addiction, with CBT and ACT demonstrating the strongest evidence base. Accountability structures — trusted allies receiving device activity reports through tools like Covenant Eyes — create interpersonal consequence for use. The evolution from &ldquo;accountability partner&rdquo; to &ldquo;ally&rdquo; reflects research that supportive, goal-oriented collaboration outperforms punitive, shame-based accountability (<a href='https://www.bebroken.org/post/breaking-free-together-how-covenant-eyes-and-the-victory-app-are-transforming-recovery-from-pornogr'>Be Broken</a>).",
          },
          {
            type: "p",
            html: "Brain recovery follows a predictable trajectory: withdrawal symptoms (irritability, cravings) peak in the first 30 days; adjustment occurs during weeks 4–12 as the brain adapts to reduced dopamine flooding; and recovery strengthens over months 3–12+ as the reward system normalizes and cognitive function improves. Dopamine receptor sensitivity restoration may take several months to over a year, with occasional cravings persisting for years while becoming increasingly manageable (<a href='https://recovery.com/resources/how-long-to-rewire-the-brain-from-addiction/'>Recovery.com</a>).",
          },
        ],
      },
      {
        id: "vulnerable-populations",
        heading: "Protecting vulnerable populations",
        blocks: [
          {
            type: "p",
            html: "Children and adolescents require layered protection combining technical controls, proactive shame-free conversations (ideally beginning by ages 8–10), and age-appropriate sex education distinguishing pornography from real-world sexuality. A 2025 review found that the psychological consequences of pornography exposure in minors are &ldquo;strikingly similar&rdquo; to those experienced by child sexual abuse victims, including difficulties trusting others, emotional isolation, and dissociation (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC12515835/'>Frontiers in Child and Adolescent Psychiatry</a>).",
          },
          {
            type: "p",
            html: "People with developmental disabilities face dramatically elevated risk: victimization rates are ten times higher than for those without disabilities (<a href='http://www.ontario.ca/document/child-and-parent-resource-institute-cpri-sexual-behaviours-team-recommended-resources/sexuality-and-developmental-disability-guide-parents'>Ontario Ministry</a>). Individuals in substance abuse recovery are neurobiologically vulnerable to cross-addiction, as both pornography and substance addictions share the same mesolimbic dopamine pathways — a 2025 PLOS Global Public Health study confirmed significant associations between problematic pornography use and substance use patterns (<a href='https://pmc.ncbi.nlm.nih.gov/articles/PMC12611143/'>PLOS Global Public Health</a>). Partners and family members experience secondary trauma requiring its own therapeutic attention, with research showing partners derive the greatest benefit from counselors, mutual help groups, and trusted friends rather than from the addicted individual (<a href='https://www.recoveryranch.com/addiction-blog/where-do-partners-of-sex-addicts-turn-for-help/'>Recovery Ranch</a>).",
          },
        ],
      },
      {
        id: "cross-jurisdictional-csam-law",
        heading: "Cross-jurisdictional CSAM law: a side-by-side map",
        blocks: [
          {
            type: "h3",
            text: "United States: a real-child statute, an obscenity backstop, and reporting without a search duty",
          },
          {
            type: "p",
            html: "Child sexual abuse material is illegal almost everywhere, but the legal architecture varies enormously in ways that matter for platform compliance and international policing. Jurisdictions diverge on four structural questions: whether the law reaches only depictions of real children or also wholly synthetic and drawn imagery; what age threshold defines a \"child\"; whether providers face mandatory reporting or proactive-detection duties; and how penalties are graduated across possession, distribution, and production. The period from May 2025 through December 2025 was unusually active — the U.S. Supreme Court upheld age-verification mandates, the U.S. Congress passed the ENFORCE Act targeting AI-generated material, the United Kingdom criminalized \"CSA image generators,\" and the European Union's most ambitious detection mandate collapsed into a voluntary regime. The map below traces those structural differences and the recent legislative motion reshaping them.",
          },
          {
            type: "p",
            html: "The U.S. federal scheme rests on three pillars. <strong>18 U.S.C. § 2252</strong> and <strong>§ 2252A</strong> criminalize the knowing possession, receipt, distribution, transportation, and production of \"child pornography\" — defined at <a href=\"https://www.law.cornell.edu/uscode/text/18/2256\">18 U.S.C. § 2256(8)</a> to require a visual depiction of an actual minor (a person under 18), including images digitally altered to appear to be an identifiable real child. This real-child requirement is the legacy of <a href=\"https://en.wikipedia.org/wiki/Ashcroft_v._Free_Speech_Coalition\">Ashcroft v. Free Speech Coalition (2002)</a>, which struck down a ban on wholly virtual imagery as overbroad under the First Amendment. Purely synthetic material that depicts no real child therefore falls outside § 2252A and is instead prosecuted under the federal obscenity statutes, principally <a href=\"https://www.law.cornell.edu/uscode/text/18/1466A\">18 U.S.C. § 1466A</a>, which reaches obscene visual depictions of minors including drawings and computer-generated images but carries different evidentiary burdens and protections.",
          },
          {
            type: "p",
            html: "The third pillar is mandatory reporting. <a href=\"https://www.law.cornell.edu/uscode/text/18/2258A\">18 U.S.C. § 2258A</a> requires electronic communication service and remote computing service providers to report apparent violations to NCMEC's CyberTipline \"as soon as reasonably possible after obtaining actual knowledge.\" Critically, subsection (f) disclaims any affirmative-search obligation: \"Nothing in this section shall be construed to require a provider to ... affirmatively search, screen, or scan\" for violations, nor to monitor users or communications. This actual-knowledge-plus-no-monitoring-duty structure — distinct from the EU's contemplated detection orders — is the foundation on which U.S. platform compliance is built. Failure to report draws fines under § 2258A(e) of up to $150,000 for a first violation and $300,000 for subsequent violations by larger providers. The <a href=\"https://en.wikipedia.org/wiki/REPORT_Act\">REPORT Act</a> (Pub. L. 118-59, May 2024) expanded the obligation to cover child sex-trafficking and online-enticement offenses and extended the data-retention window for reported material to one year.",
          },
          {
            type: "h3",
            text: "United States 2025: the ENFORCE Act and the Paxton age-verification turn",
          },
          {
            type: "p",
            html: "Two 2025 developments shifted the U.S. landscape. First, the <a href=\"https://www.thorn.org/blog/the-enforce-act-critical-updates-to-federal-law-for-addressing-ai-generated-csam-offenses/\">ENFORCE Act</a> (Enhancing Necessary Federal Offenses Regarding Child Exploitation Act) was introduced in the House on August 1, 2025, in the Senate on October 23, 2025, and passed the Senate on December 16, 2025. It targets the post-Ashcroft gap created by generative AI: it clarifies that producing AI-modified CSAM is punishable whether or not the offender intended to distribute it, and seeks to harmonize penalties so that offenders prosecuted under the obscenity statutes for AI-generated material face the same consequences as those charged under § 2252A — presumption of pretrial detention, mandatory sex-offender registration, supervised release, and no statute of limitations. The legislative urgency tracked a reported surge in AI-generated CSAM CyberTipline reports, which NCMEC data placed at roughly 440,000 in the first half of 2025 against approximately 7,000 for all of 2024. Separately, § 2258A was amended on December 18, 2025 (Pub. L. 119-60, § 8202(i)) to require that \"all supplemental data included in the report\" be preserved.",
          },
          {
            type: "p",
            html: "Second, in <a href=\"https://www.congress.gov/crs-product/LSB11354\">Free Speech Coalition, Inc. v. Paxton</a>, decided June 27, 2025, the Supreme Court (6-3, Justice Thomas writing) upheld a Texas statute requiring commercial sites whose content is more than one-third \"sexual material harmful to minors\" to verify users' ages. The Court held that such laws receive only <strong>intermediate scrutiny</strong> because they impose merely an incidental burden on adults' protected speech, rejecting the strict-scrutiny standard the dissent (Justice Kagan, joined by Sotomayor and Jackson) urged. While Paxton concerns adult pornography rather than CSAM directly, it materially lowers the constitutional bar for state online child-protection mandates and is expected to accelerate age-verification legislation nationwide.",
          },
          {
            type: "h3",
            text: "United Kingdom: pseudo-photographs, non-photographic images, and the world's first image-generator offense",
          },
          {
            type: "p",
            html: "The UK regime is layered across statutes. The <a href=\"https://www.legislation.gov.uk/ukpga/1978/37\">Protection of Children Act 1978</a> (England and Wales) criminalizes taking, making, distributing, and possessing \"indecent photographs\" of children, and since the Criminal Justice and Public Order Act 1994 expressly includes \"pseudo-photographs\" — images appearing to be photographs, capturing realistic composites and, in practice, photorealistic AI output. The <a href=\"https://www.legislation.gov.uk/ukpga/1988/33\">Criminal Justice Act 1988</a> separately criminalizes simple possession. The <a href=\"https://www.legislation.gov.uk/ukpga/2009/25/section/62\">Coroners and Justice Act 2009</a>, section 62, extended the law to non-photographic \"prohibited images\" of children — covering cartoons, drawings, and CGI that are not photorealistic — a notable contrast with the U.S. real-child rule. The age threshold is 18. Maximum penalties run to 10 years for making or distribution under the 1978 Act.",
          },
          {
            type: "p",
            html: "Two recent instruments extend the reach. The <a href=\"https://www.gov.uk/government/publications/online-safety-act-explainer/online-safety-act-explainer\">Online Safety Act 2023</a> moved into active enforcement through 2025, with Ofcom's illegal-content duties and child-safety codes taking effect and obliging in-scope services to use proportionate measures (including, where appropriate, hash-matching) against CSAM. The <a href=\"https://www.gov.uk/government/publications/crime-and-policing-act-2026-factsheets/crime-and-policing-act-2026-child-sexual-abuse-material-factsheet\">Crime and Policing Act 2026</a> (from the Bill introduced February 25, 2025) created what the government describes as the world's first offense of making, adapting, possessing, supplying, or offering a \"CSA image generator\" — software or models optimized to produce CSAM — punishable by up to five years' imprisonment, with CSAM defined by reference to the 1978 and 2009 Acts. It also extended the section 69 Serious Crime Act 2015 \"paedophile manual\" offense to AI-generated imagery, and added a Technology Testing Defence empowering the Secretary of State to authorize designated bodies (and Ofcom) to possess such generators for safety testing.",
          },
          {
            type: "h3",
            text: "European Union: a directive floor, the DSA notice regime, and the collapse of mandatory detection",
          },
          {
            type: "p",
            html: "The EU operates a harmonization floor rather than a single criminal code. <a href=\"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32011L0093\">Directive 2011/93/EU</a> obliges member states to criminalize CSAM and defines it to include not only depictions of real children but also \"realistic images\" of a child engaged in sexually explicit conduct, plus material depicting any person \"appearing to be a child.\" The directive ties the relevant age in part to the national age of sexual consent and gives states discretion over realistic imagery where the depicted person was in fact an adult. Because it is a directive, transposition varies, producing the national divergences described below. Horizontally, the <a href=\"https://eur-lex.europa.eu/eli/reg/2022/2065/oj\">Digital Services Act</a> imposes Article 16 notice-and-action obligations requiring platforms to enable reporting of illegal content and act on it, and Article 18 requires notifying authorities of suspected serious offenses threatening life or safety — a reactive framework rather than a detection mandate.",
          },
          {
            type: "p",
            html: "The contested instrument is the proposed CSA Regulation (\"CSAR,\" popularly \"Chat Control\"), tabled by the Commission on May 11, 2022, which would have empowered authorities to issue <strong>detection orders</strong> compelling providers — potentially including end-to-end encrypted services via client-side scanning — to scan for CSAM. After years of deadlock, the Council reached a general approach on November 26, 2025 under the Danish presidency that <strong>dropped the mandatory-detection obligation</strong>, leaving scanning voluntary and preserving the status quo under the interim derogation to the ePrivacy Directive (<a href=\"https://eur-lex.europa.eu/eli/reg/2021/1232/oj\">Regulation 2021/1232</a>). The revised text emphasizes risk-mitigation duties and age verification while adding a review clause directing the Commission to reassess detection obligations within roughly three years. Critics, including <a href=\"https://cadeproject.org/updates/eu-rolls-out-revised-chat-control-plan-dropping-mandatory-scanning-but-keeping-key-risks/\">civil-society groups</a>, characterize the risk-mitigation language as a route by which compelled scanning could return. The file now proceeds to trilogue.",
          },
          {
            type: "h3",
            text: "Canada and Australia: expansive definitions, mandatory reporting, and carriage-service offenses",
          },
          {
            type: "p",
            html: "<strong>Canada</strong> has one of the broadest definitions in the common-law world. <a href=\"https://laws-lois.justice.gc.ca/eng/acts/c-46/section-163.1.html\">Criminal Code section 163.1</a> reaches visual representations, written material, and audio recordings depicting or advocating sexual activity with a person under 18, and the Supreme Court in <a href=\"https://en.wikipedia.org/wiki/R_v_Sharpe\">R v Sharpe (2001)</a> confirmed that \"person\" includes \"visual works of the imagination,\" extending the law to purely fictional and drawn depictions while carving a narrow private-use exception. Penalties are graduated with mandatory minimums (e.g., for possession and accessing), though some minimums have faced constitutional challenge. Canada layers a statutory reporting duty atop this: the federal mandatory-reporting Act, in force December 8, 2011 (and renamed in 2024 to reference \"child sexual abuse and exploitation material\"), requires any person who provides an Internet service to the public to report tips about CSAM URLs to the designated agency (the Canadian Centre for Child Protection, which operates Project Arachnid) and to notify police where they have reasonable grounds to believe their service has been used for an offense. Non-compliance is a summary offense with graduated fines rising to $10,000 for repeat individual offenders.",
          },
          {
            type: "p",
            html: "<strong>Australia</strong> criminalizes \"child abuse material\" at the Commonwealth level under the <a href=\"https://www.unodc.org/cld/en/legislation/aus/criminal_code_cth/chapter_10_-_part_10.6_-_division_474_telecommunications_offences/sections_474.22-25/sections_474.19-25.html\">Criminal Code Act 1995</a>: section 474.22 (using a carriage service for child abuse material) carries a maximum of 15 years, and the definition in section 473.1 covers any representation of a person who is or appears to be under 18 — explicitly reaching drawings, dolls, and computer-generated images, again contrasting with the U.S. real-child limit. Regulation is reinforced by the <a href=\"https://www.esafety.gov.au/industry/basic-online-safety-expectations/child-sexual-exploitation-and-abuse-material-and-activity\">Online Safety Act 2021</a>, under which the eSafety Commissioner issues enforceable transparency and reporting notices — for example, the periodic notices given to Apple, Discord, Google, Meta, Microsoft, Skype, Snap, and WhatsApp on July 22, 2024 — backed by civil penalties, alongside removal-notice powers and the Basic Online Safety Expectations.",
          },
          {
            type: "h3",
            text: "Germany, France, Japan, and the authoritarian outliers",
          },
          {
            type: "p",
            html: "<strong>Germany</strong> illustrates how transposition of the EU directive produces national idiosyncrasy. Under <a href=\"https://www.unodc.org/cld/en/legislation/deu/german_criminal_code/special_part_-_chapter_thirteen/section_184_b-d/section_184_b-d.html\">§ 184b StGB</a>, \"child\" material concerns depictions of persons under 14, with a separate juvenile category (§ 184c) for those aged 14 to 18 — a lower core threshold than the under-18 standard prevalent elsewhere, reflecting the German age of consent. A controversial 2021 reform had elevated possession to a felony with a one-year minimum; a 2024 amendment partially reversed this to restore judicial discretion after courts and prosecutors warned the rigid minimum swept in adolescents and inadvertent recipients. German law also treats simulated and non-real depictions inconsistently across the possession and production variants. <strong>France</strong> criminalizes CSAM under Article 227-23 of the Penal Code, with the maximum for production and distribution rising to seven years' imprisonment and a €100,000 fine, and has been a leader in mandating age verification for explicit sites under its 2024 SREN law.",
          },
          {
            type: "p",
            html: "<strong>Japan</strong> is the notable late mover among industrialized democracies: simple possession of CSAM was not criminalized until the 2014 amendment to the Act on Punishment of Activities Relating to Child Prostitution and Child Pornography, which passed June 18, 2014, took effect with a one-year grace period, and carries up to one year's imprisonment or a fine. The reform pointedly <strong>excluded manga, anime, and computer-generated imagery</strong>, a carve-out secured on free-expression grounds by publishers and bar associations and repeatedly criticized by child-protection advocates as a major gap. <strong>Russia and China</strong> formally prohibit CSAM — Russia under Articles 242.1 and 242.2 of its Criminal Code, China under provisions on disseminating obscene materials — but enforcement operates within broader censorship and surveillance apparatuses oriented toward state control of information rather than victim-centered safeguarding, and neither participates in the Western reporting ecosystem (NCMEC CyberTipline, INHOPE hotlines) in the way that shapes cross-border evidence flows, complicating mutual legal assistance in transnational cases.",
          },
        ],
      },
    ],
  },
  {
    slug: "recommendations",
    number: "08",
    title: "Recommendations",
    dek: "Effective protection requires coordinated action across families, schools, technology platforms, legislatures, and clinical settings. No single intervention is sufficient alone. Each section below has a companion guide with the operational details.",
    readingMinutes: 9,
    sections: [
      {
        id: "individuals",
        heading: "For people struggling with pornography use",
        blocks: [
          {
            type: "p",
            html: "Seek professional treatment through a Certified Sex Addiction Therapist employing CBT or ACT — both demonstrate the strongest evidence for reducing problematic use, with ACT trials achieving 92% viewing reductions. Implement environmental controls (accountability software, blockers, DNS filters) and build accountability relationships with trusted allies. Address underlying conditions — depression, anxiety, trauma, loneliness — through integrated treatment. Expect a recovery timeline of months to years, with relapse as a common but manageable part of the process rather than evidence of failure.",
          },
          {
            type: "p",
            html: "If you are concerned about your own sexual thoughts or behavior involving minors, or are facing legal exposure related to CSAM, the order of operations matters: attorney-client privilege is the strongest legal protection available, most US therapists are mandatory reporters, and anonymous prevention services like <strong>Troubled Desire</strong> (Charité Berlin, 11 languages) and <strong>Stop It Now!</strong> are designed for the gap.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Companion guide",
            html: "See <a href='/for-offenders'>For People Seeking Help</a> for the operational version of these recommendations — confidentiality realities, four-step paths before and after charges, and honest answers to common questions. <a href='/get-help'>Get Help</a> lists crisis lines and pornography-recovery programs, and the <a href='/apps'>Apps directory</a> covers the recovery-program apps (QUITTR, Brainbuddy, Relay, Cure, Fortify) and how to stack them with blockers and accountability tools.",
          },
        ],
      },
      {
        id: "survivors",
        heading: "For survivors and people who have been harmed",
        blocks: [
          {
            type: "p",
            html: "Trauma-informed care is a specific approach — not all therapists are trained in it. The modalities with the strongest evidence base for sexual-trauma recovery are EMDR, Trauma-Focused CBT, Internal Family Systems, somatic experiencing, and prolonged exposure. Ask any prospective clinician whether they are trained in one or more of these and how often they treat sexual-trauma survivors specifically.",
          },
          {
            type: "p",
            html: "Reporting is an option, not a duty. For circulating imagery, <strong>Take It Down</strong> (NCMEC, for imagery taken before age 18) and <strong>StopNCII.org</strong> (for adult intimate imagery) use hash technology to remove material from participating platforms without requiring the survivor to view, hold, or transmit the image. Removal is partial — material on non-cooperating sites continues to exist. Be honest about what removal can and cannot achieve, and pair it with trauma support.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Companion guide",
            html: "See <a href='/for-victims'>For Survivors</a> for the survivor-centered operational version — five principles people often need to hear, paths through removal and reporting (each optional), trauma-informed therapy modalities and directories, and a section for partners and family supporting a survivor.",
          },
        ],
      },
      {
        id: "families",
        heading: "For families",
        blocks: [
          {
            type: "p",
            html: "Deploy layered technology: DNS filtering at the network level (CleanBrowsing, OpenDNS, Pi-hole), device-level controls (Apple Screen Time, Google Family Link, Microsoft Family Safety), and accountability or monitoring software appropriate to the child's age. Begin proactive, shame-free conversations about pornography before the average age of first exposure — currently 12 to 13 in US samples. For teens, balance monitoring with increasing privacy: the Bark selective-alert model represents a middle ground between surveillance and abdication. Respond to discovered use with curiosity and compassion, not punishment.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Companion resources",
            html: "See <a href='/for-parents'>For Parents</a> for the full caregiver playbook — age-by-age conversations from under-5 through the teen years, the sextortion script to give your child in advance, how grooming actually works, and a clear what-to-do path if something has happened. Browse the <a href='/apps'>Apps directory</a> for side-by-side comparison of OS built-in controls, DNS filters, blockers, and family-focused monitoring tools. For school-side situations a parent encounters (sexting incidents, deepfake imagery, grooming concerns), see <a href='/for-educators'>For Educators</a> — the same six scenarios apply at home. <a href='/get-help#families'>Get Help → Parents and families</a> lists Culture Reframed, Internet Matters, NCMEC CyberTipline, Take It Down, and other parent-facing resources.",
          },
        ],
      },
      {
        id: "educators",
        heading: "For educators",
        blocks: [
          {
            type: "p",
            html: "Adopt evidence-based curricula that address pornography literacy, not just general digital safety. The Culture Reframed curriculum and the <em>Navigating Realities</em> framework provide non-religious, research-backed models. Avoid D.A.R.E.-style lecture-based approaches; interactive, peer-centered designs with emotional-competency building demonstrate superior outcomes. Train school counselors to routinely screen for problematic pornography use during behavioral-health intake — many students are looking for permission to bring it up, and routine screening creates that permission. Designate a primary CyberTipline reporter and a backup per school site so first-encounter teachers always have a clear handoff.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Companion guide",
            html: "See <a href='/for-educators'>For Educators</a> for the practical playbooks: six common scenarios (pornography on a school device, image-based abuse, sextortion, AI deepfakes, grooming, compulsive use) with first steps, what not to do, sample language, who to involve, and mandatory-reporting notes.",
          },
        ],
      },
      {
        id: "technology-companies",
        heading: "For technology companies",
        blocks: [
          {
            type: "p",
            html: "Section 230 does not cover federal child exploitation law. 18 U.S.C. § 2258A mandates reporting of apparent CSAM to NCMEC, and the ENFORCE Act (December 2025) and TAKE IT DOWN Act (May 2025) extend criminal-equivalent treatment to AI-generated CSAM with a 48-hour platform takedown requirement. The minimum viable detection stack is largely free for qualified organizations: <strong>PhotoDNA</strong> (Microsoft), the <strong>NCMEC Hash Sharing API</strong>, CyberTipline reporting integration, and Cloudflare's free <strong>CSAM Scanning Tool</strong>. Open-source alternatives (Meta's <strong>PDQ</strong> and <strong>TMK+PDQF</strong>) work end-to-end against the NCMEC API.",
          },
          {
            type: "p",
            html: "Scale beyond the minimum requires AI classification of novel material (<strong>Thorn Safer</strong>, <strong>Hive AI</strong>) and proactive crawl-and-takedown integration (<strong>Project Arachnid Shield API</strong>, free for ESPs). Invest in trauma support for human moderators — multi-million-dollar settlements (Meta, TikTok) have made this an industry baseline, not a benefit. If your product generates images or video, screen training data against NCMEC hashes, add classifiers on both prompt and output, and implement provenance signals (C2PA, watermarking) — the absence of these is increasingly an aggravating factor.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Companion guides",
            html: "Three companion guides cover the build. <a href='/for-tech-ceos'>For Tech CEOs</a> is the founder-level decision framework: legal floor, minimum stack, scale-up layer, AI-generation specifics, and personal-liability landscape. <a href='/for-developers'>For Developers</a> is the hands-on implementation companion — the four-stage detection pipeline, perceptual versus cryptographic hashing, and the one file-handling rule that turns good intentions into criminal exposure if you get it wrong. <a href='/for-compliance-teams'>For Compliance Teams</a> is the documentation-and-audit companion: regulatory map across US/EU/UK/Australia, audit checklist, metrics that hold up, vendor due diligence, and a 90-day buildout. The <a href='/tools'>open-source toolkit</a> provides the building blocks.",
          },
        ],
      },
      {
        id: "policymakers",
        heading: "For policymakers",
        blocks: [
          {
            type: "p",
            html: "Support privacy-preserving age verification standards (the EU's zero-knowledge proof prototype and France's double-anonymity system represent the most promising models). Equalize legal penalties for AI-generated CSAM with traditional CSAM, as the ENFORCE Act now does at the federal level in the US, and complement that with platform takedown requirements as the TAKE IT DOWN Act does. Fund prevention programs modeled on Project Dunkelfeld's voluntary, confidential treatment approach — Charité Berlin's <strong>Troubled Desire</strong> extends this globally and demonstrates that anonymous online delivery scales. Address the behavioral-substitution problem: age verification laws that merely displace traffic to less regulated platforms achieve little without broader enforcement infrastructure. Read aggregate CSAM-reporting figures with care — the Stanford CIS analysis of NCMEC data found that approximately 80% of &ldquo;Generative AI&rdquo; CyberTipline reports involved no AI-generated CSAM at all. Invest in research to close evidence gaps, particularly on pornography-specific educational program effectiveness.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Reference",
            html: "The <a href='/laws'>Laws &amp; policy tracker</a> is the at-a-glance companion — enacted law versus proposed bills across the US, EU, UK, and Australia, each dated and sourced — and the <a href='/organizations'>organization directory</a> maps the bodies that coordinate the response. <a href='/report/prevention'>Chapter 07: Prevention Strategies</a> covers the full legislative landscape: <em>Free Speech Coalition v. Paxton</em>, the UK Online Safety Act, Australia's eSafety regime, the EU's DSA and the November 2025 retreat on mandatory CSAM scanning. <a href='/report/ai-generated'>Chapter 04: AI-Generated Content</a> covers the Stanford CIS finding in detail.",
          },
        ],
      },
      {
        id: "clinicians",
        heading: "For therapists and healthcare providers",
        blocks: [
          {
            type: "p",
            html: "Routinely screen for problematic pornography use alongside standard mental-health and substance-use assessments. Develop competency in AI's dual role — as a tool accelerating addiction through hyper-personalized content, and as a therapeutic aid through monitoring and coaching applications. Integrate pharmacological options (SSRIs, naltrexone) with psychotherapy for moderate to severe presentations. For survivors, ensure trauma-informed competency in EMDR, TF-CBT, IFS, somatic experiencing, or prolonged exposure rather than treating sexual trauma with general talk therapy. Differentiate CSAM-only offender treatment from contact-offender treatment, using lower-intensity, CSAM-specific programs aligned with the Risk-Need-Responsivity model — intensive treatment of low-risk offenders may paradoxically increase recidivism by 21%.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Companion guides",
            html: "<a href='/for-therapists'>For Therapists</a> is the dedicated clinical guide: screening at intake, the confidentiality conversation, CBT vs ACT effect sizes for PPU, trauma-informed modalities (EMDR, TF-CBT, IFS, somatic, prolonged exposure), the therapeutic-vs-forensic role distinction, pharmacological adjuncts, and clinician self-care. The patient-facing pages — <a href='/for-victims'>For Survivors</a>, <a href='/for-offenders'>For People Seeking Help</a>, and <a href='/for-attorneys'>For Attorneys</a> — are designed to be shared directly with patients in the relevant scenarios.",
          },
        ],
      },
      {
        id: "attorneys",
        heading: "For attorneys and legal professionals",
        blocks: [
          {
            type: "p",
            html: "Read the recidivism evidence in pairs: the Clark et al. (2025) meta-analysis found 3.41% any sexual re-offending and 0.66% contact re-offending over four years, while the Seto et al. (2011) self-report study found approximately 55% of online offenders admitted historical contact offenses against a 12% rate in official records. Both are useful; neither stands alone in mitigation. Static-99R and Stable-2007 are the actuarial tools with the strongest evidence base and the most defensible courtroom posture; the AASI-3 has significant validity controversies primed for cross-examination. Treatment routed through specialized CSAM programs (Inform Plus, i-SOTP, CEM-COPE, Dunkelfeld) is materially distinct from generic sex-offender treatment and is the right reference when arguing fit.",
          },
          {
            type: "p",
            html: "For AI-generated CSAM cases, the Stanford CIS January 2026 finding on CyberTipline categorization is a reasonable discovery posture: where charging documents or expert reports cite aggregate &ldquo;Generative AI&rdquo; figures, the underlying categorization is often misleading (380,000 Amazon hash hits to known CSAM in AI training data were labeled as generative). <em>U.S. v. Anderegg</em> is the first federal appellate test of the First Amendment limits of private possession of wholly AI-generated CSAM; production and distribution charges remain on weaker constitutional ground.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Companion guide",
            html: "See <a href='/for-attorneys'>For Attorneys</a> for the full eight-section operational version: clinical distinction, recidivism data, assessment instruments, treatment programs that matter for mitigation, AI-generated CSAM legal landscape, evidence integrity, working with forensic clinicians, and mitigation that survives sentencing.",
          },
        ],
      },
    ],
  },
  {
    slug: "resources",
    number: "09",
    title: "Getting Help & Taking Action",
    dek: "Everything the research points to, gathered in one place: where to report, how to get images removed, where to find help and recovery, the open-source tools, the law, and the full library of role-specific guides. If you need to act, start here.",
    readingMinutes: 6,
    sections: [
      {
        id: "help-now",
        heading: "If you need help right now",
        blocks: [
          {
            type: "callout",
            tone: "crisis",
            title: "Immediate situations",
            html: "If a child is in immediate danger, contact local emergency services. If someone is threatening you over an intimate image, go straight to the <a href='/sextortion'>sextortion survival guide</a> — do not pay, do not delete, preserve the evidence, and tell someone. In the US you can reach the 988 Suicide &amp; Crisis Lifeline by call or text, and NCMEC's CyberTipline at 1-800-843-5678.",
          },
          {
            type: "p",
            html: "The rest of this chapter is a directory: for each of the most common reasons people come to this site, the place to start and the page that takes you the rest of the way.",
          },
        ],
      },
      {
        id: "reporting",
        heading: "Where to report",
        blocks: [
          {
            type: "p",
            html: "If you have found child sexual abuse material, or someone is being exploited, you do not need to confirm anything before reporting — and you should never download or screenshot suspected material to &ldquo;preserve evidence.&rdquo; Report to the platform, or straight to a clearinghouse if you do not know or trust the platform.",
          },
          {
            type: "list",
            items: [
              "<a href='/for-reporting'>For Reporting Content</a> — a verified directory of where to report across 114 platforms and the clearinghouses, each with its channel and US reporting-duty status.",
              "<a href='/organizations'>Organization directory</a> — who is who in child protection, mapped by function: hotlines, detection technology, investigators, researchers, prevention helplines, and survivor support.",
              "Clearinghouses of first resort: NCMEC's CyberTipline (report.cybertip.org, 1-800-843-5678), the IWF, Cybertip.ca, INHOPE for your national hotline, and the FBI at tips.fbi.gov.",
            ],
          },
        ],
      },
      {
        id: "image-removal",
        heading: "Getting intimate images removed",
        blocks: [
          {
            type: "p",
            html: "Free services can remove or block an intimate image, and the best ones work without you ever uploading the picture, using an on-device hash. Once an image has spread widely no service can guarantee every copy is gone — but takedowns dramatically reduce its reach, and that is worth doing.",
          },
          {
            type: "list",
            items: [
              "<a href='/remove-images'>Get your images removed</a> — a decision guide that routes you to the right free tool for your situation and explains your 48-hour removal right under the TAKE IT DOWN Act.",
              "<strong>Take It Down</strong> (NCMEC) for imagery of someone under 18; <strong>StopNCII.org</strong> for adults, including AI deepfakes; <strong>Report Remove</strong> (Childline/IWF) for young people in the UK.",
              "<a href='/sextortion'>Sextortion survival guide</a> if an image is being used to threaten or extort you.",
            ],
          },
        ],
      },
      {
        id: "help-recovery",
        heading: "Help and recovery",
        blocks: [
          {
            type: "p",
            html: "Whether you are struggling with your own pornography use, supporting someone who is, or worried about your own sexual thoughts, there is confidential help — and reaching for it early is a sign of strength, not failure.",
          },
          {
            type: "list",
            items: [
              "<a href='/get-help'>Get Help</a> — crisis lines, pornography-recovery programs, and support, with regional and international options.",
              "<a href='/apps'>Apps &amp; filtering tools</a> — accountability software, content filters, and recovery apps for individuals and families.",
              "<a href='/prevention'>Preventing abuse before it happens</a> — confidential, often anonymous help for people worried about their own sexual thoughts toward children, with an honest account of what the evidence shows.",
            ],
          },
        ],
      },
      {
        id: "protective-tech",
        heading: "Protective technology",
        blocks: [
          {
            type: "p",
            html: "If you build or run a platform — especially one that hosts user content or generates images — detection is no longer optional, and much of the core tooling is free for qualified organizations.",
          },
          {
            type: "list",
            items: [
              "<a href='/tools'>Open-source tools</a> — building blocks for CSAM detection, blocking, reporting, and prevention, including perceptual hashing and reporting integrations.",
              "<a href='/for-developers'>For Developers</a> — the hands-on implementation guide to wiring detection up correctly, including the file-handling rule that matters most.",
              "<a href='/for-tech-ceos'>For Tech CEOs</a> and <a href='/for-compliance-teams'>For Compliance Teams</a> for the decision and audit layers.",
            ],
          },
        ],
      },
      {
        id: "know-the-law",
        heading: "Know the law and your rights",
        blocks: [
          {
            type: "p",
            html: "The legal landscape moves quickly, and the most common mistake is treating a proposed bill as if it were already law. Two things worth knowing: survivors of CSAM have under-claimed financial remedies, and platforms now face hard removal deadlines.",
          },
          {
            type: "list",
            items: [
              "<a href='/laws'>Laws &amp; policy tracker</a> — enacted law versus proposed bills across the US, EU, UK, and Australia, each with its status, date, and primary source.",
              "Restitution for survivors: &ldquo;Masha's Law&rdquo; (18 U.S.C. § 2255) provides a $150,000 statutory-minimum civil claim, alongside criminal restitution and the DOJ Victims Reserve — the <a href='/remove-images'>removal guide</a> explains how to pursue these.",
            ],
          },
        ],
      },
      {
        id: "guide-library",
        heading: "The complete guide library",
        blocks: [
          {
            type: "p",
            html: "The recommendations in Chapter 08 are deliberately concise. Each one has a companion guide that translates it into step-by-step action for the people most likely to need it. The full set:",
          },
          {
            type: "list",
            items: [
              "<a href='/for-parents'>For Parents</a> — protecting your child without needing to be a tech expert.",
              "<a href='/for-victims'>For Survivors</a> — survivor-centered paths through removal, reporting, and care.",
              "<a href='/for-offenders'>For People Seeking Help</a> — confidential, non-judgmental guidance for people worried about their own thoughts or behavior.",
              "<a href='/for-educators'>For Educators</a> — playbooks for the situations school staff meet unprepared.",
              "<a href='/for-reporting'>For Reporting Content</a> — where and how to report CSAM and abuse.",
              "<a href='/for-therapists'>For Therapists</a> — the clinical companion: screening, modalities, and the forensic-versus-therapeutic line.",
              "<a href='/for-tech-ceos'>For Tech CEOs</a>, <a href='/for-developers'>For Developers</a>, and <a href='/for-compliance-teams'>For Compliance Teams</a> — the build, implementation, and audit layers for platforms.",
              "<a href='/for-attorneys'>For Attorneys</a> — evidence-based context for counsel in CSAM cases.",
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Browse everything",
            html: "Prefer to explore by topic? The <a href='/browse'>browse page</a> maps the entire resource, and <a href='/search'>search</a> covers every chapter, guide, and resource. All the role guides also live together at <a href='/guides'>Guides by role</a>.",
          },
        ],
      },
    ],
  },
];
