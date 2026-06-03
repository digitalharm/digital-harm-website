import type { HelpGroup } from "@/content/types";

export const helpGroups: HelpGroup[] = [
  {
    id: "crisis",
    label: "If you are in immediate danger",
    tone: "crisis",
    heading: "Emergency contacts",
    blurb:
      "If you or someone else is in immediate danger, contact local emergency services. The contacts below are for crisis support and suicide prevention.",
    resources: [
      {
        name: "988 Suicide and Crisis Lifeline",
        region: "United States",
        description:
          "Free, confidential 24/7 support for people in distress, including those struggling with compulsive behavior and shame.",
        contact: "Call or text 988",
        url: "https://988lifeline.org",
      },
      {
        name: "Samaritans",
        region: "United Kingdom & Ireland",
        description:
          "24/7 listening support for anyone struggling, including emotional crises related to compulsive sexual behavior.",
        contact: "116 123",
        url: "https://www.samaritans.org",
      },
      {
        name: "Crisis Text Line",
        region: "US, UK, Canada, Ireland",
        description:
          "Free, 24/7 text-based crisis support from trained counselors.",
        contact: "Text HOME to 741741 (US/Canada), 85258 (UK), 50808 (Ireland)",
        url: "https://www.crisistextline.org",
      },
    ],
  },
  {
    id: "porn-recovery",
    label: "Help with pornography use",
    tone: "info",
    heading: "Recovery from problematic pornography use",
    blurb:
      "If your pornography use feels out of control, evidence supports both professional treatment and structured peer support. Cognitive Behavioral Therapy and Acceptance and Commitment Therapy have the strongest evidence base.",
    resources: [
      {
        name: "SAMHSA National Helpline",
        region: "United States",
        description:
          "Free, confidential 24/7 referral service for mental health and substance use issues, including behavioral addictions.",
        contact: "1-800-662-4357",
        url: "https://www.samhsa.gov/find-help/national-helpline",
        cost: "Free",
      },
      {
        name: "Find a CSAT (Certified Sex Addiction Therapist)",
        region: "International",
        description:
          "Directory of clinicians specifically trained to treat compulsive sexual behavior, maintained by IITAP.",
        url: "https://iitap.com/page/CSATFindATherapist",
      },
      {
        name: "Dr. Jerel Armstrong, Ph.D. — Forensic Psychology",
        region: "San Francisco Bay Area · CA PSY27272",
        description:
          "Forensic psychology practice offering clinical evaluation and treatment for hypersexuality, compulsive sexual behavior, and paraphilic disorders. Uses validated assessments (Static-99R, Stable-2007, AASI-3, PPG) and provides expert testimony. Adults and juveniles. Useful when a formal diagnostic or forensic evaluation is needed alongside or instead of self-directed recovery.",
        contact: "(628) 399-1748",
        url: "https://www.armstrongphd.com/",
      },
      {
        name: "Sex Addicts Anonymous (SAA)",
        region: "International",
        description:
          "12-step fellowship for those wanting to stop addictive sexual behavior. Free meetings, in-person and online.",
        url: "https://saa-recovery.org",
        cost: "Free",
      },
      {
        name: "Sexaholics Anonymous (SA)",
        region: "International",
        description:
          "12-step program with a specific sobriety definition. Research shows step advancement predicts reduced compulsive behavior.",
        url: "https://sa.org",
        cost: "Free",
      },
      {
        name: "r/PornFree",
        region: "Online",
        description:
          "Peer support community focused on quitting pornography. Less rigid than abstinence-only forums; emphasizes harm reduction.",
        url: "https://www.reddit.com/r/PornFree/",
        cost: "Free",
      },
      {
        name: "Fortify (by Fight the New Drug)",
        region: "International",
        description:
          "Science-based recovery app with educational modules and progress tracking. Non-religious.",
        url: "https://www.joinfortify.com",
      },
    ],
  },
  {
    id: "offender-prevention",
    label: "Help with sexual interest in minors",
    tone: "warning",
    heading: "Confidential support before harm occurs",
    blurb:
      "If you are concerned about your own sexual thoughts or behavior involving minors, confidential and legally protected help exists. Seeking help is not the same as offending. The resources below are designed specifically for prevention.",
    resources: [
      {
        name: "Stop It Now!",
        region: "US · UK & Ireland · Netherlands · Australia",
        description:
          "Free, confidential helpline for anyone concerned about their own thoughts or behavior toward children, or someone else's. Operated by the Safer Society Foundation (US) and the Lucy Faithfull Foundation (UK & Ireland), with sister programs in the Netherlands and Australia. Seeking help is not the same as offending.",
        contact:
          "US: 1-888-773-8368 · UK/IE: 0808 1000 900 · AU: 1800 01 1800",
        url: "https://stopitnow.org",
        cost: "Free",
      },
      {
        name: "Troubled Desire",
        region: "Worldwide (11 languages) · run by Charité Berlin",
        description:
          "Anonymous online self-help platform for people experiencing sexual attraction to children. Self-assessment session, knowledge resources, online counseling, and pathways to therapist contact. Run by the Institute of Sexology and Sexual Medicine at Charité – Universitätsmedizin Berlin (the medical university that operates Prevention Project Dunkelfeld), co-funded by the European Union. Available in English, German, Spanish, Arabic, Tagalog, Portuguese, Czech, Polish, Romanian, Maltese, and Lithuanian. Tor address also available for additional privacy.",
        url: "https://troubled-desire.com/en/",
        cost: "Free",
      },
      {
        name: "Prevention Project Dunkelfeld (Don't Offend)",
        region: "Germany",
        description:
          "The most studied primary prevention program in the world. Free, medically confidential in-person treatment combining behavioral therapy, sexual medicine, and pharmacological options. Operated by Charité Berlin, the same institution behind Troubled Desire.",
        url: "https://www.dont-offend.org",
        cost: "Free",
      },
    ],
  },
  {
    id: "families",
    label: "Parents and families",
    tone: "info",
    heading: "Support for parents, partners, and families",
    blurb:
      "If you have discovered concerning behavior in a loved one, or want to begin proactive conversations with your child, these resources offer evidence-based guidance.",
    resources: [
      {
        name: "Culture Reframed",
        region: "International",
        description:
          "Free, research-based parent courses (Program for Parents of Tweens, Program for Parents of Teens) on pornography's impact and family conversation.",
        url: "https://culturereframed.org",
        cost: "Free",
      },
      {
        name: "Internet Matters",
        region: "United Kingdom",
        description:
          "Practical, parent-focused guides on setting up parental controls and having age-appropriate conversations.",
        url: "https://www.internetmatters.org",
        cost: "Free",
      },
      {
        name: "NCMEC CyberTipline",
        region: "United States",
        description:
          "Report online exploitation of children, including grooming, sextortion, CSAM, and online enticement.",
        contact: "1-800-843-5678",
        url: "https://report.cybertip.org",
      },
      {
        name: "Take It Down",
        region: "International",
        description:
          "Free NCMEC service that helps minors remove or stop the spread of nude or sexually explicit images of themselves taken before age 18.",
        url: "https://takeitdown.ncmec.org",
        cost: "Free",
      },
      {
        name: "Recovering Couples Anonymous",
        region: "International",
        description:
          "Peer support for couples affected by compulsive behavior in one or both partners.",
        url: "https://www.recovering-couples.org",
        cost: "Free",
      },
    ],
  },
  {
    id: "survivors",
    label: "Survivors of abuse",
    tone: "info",
    heading: "Support for survivors",
    blurb:
      "If you have experienced sexual abuse, or had intimate images shared without your consent, these organizations offer confidential, trauma-informed support.",
    resources: [
      {
        name: "RAINN (National Sexual Assault Hotline)",
        region: "United States",
        description:
          "Free, confidential 24/7 hotline for survivors of sexual violence, including online abuse and image-based abuse.",
        contact: "1-800-656-4673",
        url: "https://www.rainn.org",
        cost: "Free",
      },
      {
        name: "Cyber Civil Rights Initiative",
        region: "United States",
        description:
          "Crisis helpline and removal support for victims of non-consensual intimate imagery (including deepfakes).",
        contact: "1-844-878-2274",
        url: "https://cybercivilrights.org",
      },
      {
        name: "Revenge Porn Helpline",
        region: "United Kingdom",
        description:
          "Confidential support for adults experiencing intimate image abuse, including AI-generated deepfakes.",
        contact: "0345 6000 459",
        url: "https://revengepornhelpline.org.uk",
      },
      {
        name: "NSPCC Helpline",
        region: "United Kingdom",
        description:
          "Free, confidential 24/7 support for anyone concerned about a child's safety.",
        contact: "0808 800 5000",
        url: "https://www.nspcc.org.uk",
      },
    ],
  },
];
