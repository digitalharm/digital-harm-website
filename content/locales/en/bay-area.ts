import type { BayAreaGroup } from "@/content/types";

export const bayAreaGroups: BayAreaGroup[] = [
  {
    id: "featured-medical",
    label: "Strongest medical fit",
    tone: "warning",
    heading: "The clearest Bay Area medical option",
    blurb:
      "Of the Bay Area academic medical programs we reviewed, only Stanford's Addiction Medicine Dual Diagnosis Clinic publicly names pornography among the behavioral addictions it treats. If you want clinical care in the Bay Area for problematic pornography use, this is the most direct starting point.",
    resources: [
      {
        name: "Stanford Addiction Medicine Dual Diagnosis Clinic",
        region: "Palo Alto · Stanford Medicine",
        description:
          "The clinic's public materials state it treats \"substance use disorders, behavioral addictions (videogames, gambling, shopping, pornography, etc.), and co-occurring psychiatric disorders.\" Outpatient, evidence-based; weekly therapy groups plus individual psychiatry.",
        address: "401 Quarry Rd., Palo Alto, CA 94304",
        contacts: ["Adults: (650) 498-9111 (option 2 for new patients)", "Youth: (650) 723-5511"],
        url: "https://med.stanford.edu/psychiatry/patient_care/addictionmedicine.html",
        cost: "Insurance verified at intake; commercial insurance accepted",
        featured: true,
      },
    ],
  },
  {
    id: "peer-support",
    label: "Free peer support",
    tone: "info",
    heading: "12-step and peer recovery (Bay Area meetings)",
    blurb:
      "Free, peer-led recovery fellowships with active in-person and online meetings throughout the Bay Area. The intergroup websites below list meeting times, locations, and dial-in details. Voluntary contributions only.",
    resources: [
      {
        name: "Bay Area Sex Addicts Anonymous (SAA) Intergroup",
        region: "SF, East Bay, North Bay, South Bay",
        description:
          "Local meeting list plus dedicated newcomer phone lines staffed by members in recovery. Multiple meetings per day across the region.",
        contacts: [
          "Men's newcomer line: (510) 906-1644",
          "Women's newcomer line: (925) 338-0996",
          "General info: (415) 340-1962",
          "info@bayareasaa.org",
        ],
        url: "https://bayareasaa.org/meetings/",
        cost: "Free",
      },
      {
        name: "Sexaholics Anonymous (SA) — Northern California Intergroup",
        region: "Bay Area & Northern California",
        description:
          "Meetings throughout Northern California, in-person and online. SA holds a stricter sobriety definition than other fellowships; check the site to understand the program before attending.",
        contacts: ["meetings@sabayarea.org"],
        url: "https://sabayarea.org/",
        cost: "Free",
      },
      {
        name: "Sex and Love Addicts Anonymous (S.L.A.A.) — SF & East Bay",
        region: "San Francisco & East Bay",
        description:
          "Local in-person and Zoom meetings. Lists trans- and nonbinary-affirming meetings. Callbacks within 24 hours.",
        contacts: ["(415) 979-4715", "info@slaa-sfeb.org"],
        url: "https://slaa-sfeb.org/",
        cost: "Free",
      },
      {
        name: "LGBTQ+ Sex Addicts Anonymous",
        region: "San Francisco",
        description:
          "Friday-night meeting tailored to LGBTQ+ members of SAA.",
        contacts: ["fridaynightsaa@gmail.com"],
        url: "https://www.lgbtqsaa.com/friday",
        cost: "Free",
      },
      {
        name: "Recovering Couples Anonymous (RCA) — Bay Area",
        region: "Bay Area",
        description:
          "Open to couples whose only requirement is a desire to remain committed. SF in-person \"Date Night\" meeting Fri 7–9pm; Bay Area Club hosts weekly Zoom RCA meetings.",
        url: "https://recovering-couples.org/meetings/san-francisco-rca/",
        cost: "Free",
      },
    ],
  },
  {
    id: "clinical-practices",
    label: "Specialized therapists",
    tone: "info",
    heading: "Specialized clinical practices",
    blurb:
      "Bay Area therapists and clinics that explicitly treat sexual compulsivity and problematic pornography use. Most offer a free initial consultation by phone; ask whether they sliding-scale fee or accept your insurance before scheduling.",
    resources: [
      {
        name: "Dr. Seth Prosterman, Ph.D., LMFT",
        region: "San Francisco (Cow Hollow)",
        description:
          "Certified Sex Therapist whose practice explicitly names \"sexual compulsivity, sexual problematic behavior, sexual addiction\" among its specialties. CBT and humanistic approach. Free initial consultation.",
        address: "2918 Webster St. (at Union), San Francisco, CA 94123",
        contacts: ["(415) 948-9590"],
        url: "https://www.sextherapy.org/",
      },
      {
        name: "Dr. Jerel Armstrong, Ph.D. — Forensic Psychology",
        region: "San Francisco Bay Area · CA PSY27272",
        description:
          "Forensic psychology practice offering clinical evaluation and treatment for hypersexuality, compulsive sexual behavior, and paraphilic disorders. Uses validated assessments (Static-99R, Stable-2007, AASI-3, PPG), provides expert testimony, and treats both adults and juveniles. Useful when a formal diagnostic or forensic evaluation is needed.",
        contacts: [
          "(628) 399-1748",
          "Assessment@ArmstrongPhD.com",
          "Expedited: Bless@ArmstrongPhD.com",
        ],
        url: "https://www.armstrongphd.com/",
      },
      {
        name: "Robert Schnitzius, LMFT, CSAT — Inner Wisdom",
        region: "Berkeley & Oakland",
        description:
          "Certified Sex Addiction Therapist (CSAT) and trauma-informed practitioner (EMDR, EFT). Individual, couples, and group therapy. Free 20-minute phone consultation.",
        address: "Elmwood (Berkeley) and Lake Merritt (Oakland) offices",
        contacts: ["(510) 394-2209"],
        url: "https://sexaddicthelp.com/robert-schnitzius/",
      },
      {
        name: "Sex Addict Help — group practice",
        region: "Multiple Bay Area offices + telehealth",
        description:
          "Group of Bay Area psychotherapists specializing in sexual addiction and compulsion (15–30 years' experience). Trauma modalities including EMDR and IFS alongside individual, couples, and family work. Contact via the site to be matched to a clinician.",
        url: "https://sexaddicthelp.com/",
      },
      {
        name: "Bay Area CBT Center — Sex Therapy",
        region: "San Francisco & Oakland",
        description:
          "Sex therapy using CBT, schema, and somatic methods. Their public materials emphasize desire, arousal, trauma, and identity rather than compulsivity specifically — call to confirm fit before booking if problematic pornography use is the primary concern.",
        address: "45 Franklin St #300, SF · 4283 Piedmont Ave., Oakland",
        contacts: ["(415) 941-5373"],
        url: "https://bayareacbtcenter.com/sex-therapy/",
      },
      {
        name: "IITAP CSAT Directory",
        region: "National finder",
        description:
          "The International Institute for Trauma & Addiction Professionals maintains the Certified Sex Addiction Therapist (CSAT) directory. Filter by zip code or city to find Bay Area clinicians.",
        url: "https://iitap.com/page/CSATFindATherapist",
      },
    ],
  },
  {
    id: "hospital-programs",
    label: "Hospital & medical center",
    tone: "info",
    heading: "Hospital and medical center programs",
    blurb:
      "Most Bay Area hospital behavioral-health programs treat general addiction and mental health, not pornography specifically. They are listed below as referral pathways: a clinician inside one of these programs can route to the right sub-specialty, including the Stanford program above.",
    resources: [
      {
        name: "Kaiser Permanente — Addiction Medicine & Recovery Services",
        region: "Multiple Bay Area campuses (SF, Oakland, San Jose, Santa Clara, Redwood City)",
        description:
          "Outpatient and intensive-outpatient addiction programs for Kaiser members. General addiction medicine; not pornography-specific, but the entry point for Kaiser members seeking behavioral-addiction care.",
        contacts: [
          "Mental health & addiction: 1-888-937-5748",
          "General: 1-800-464-4000",
        ],
        url: "https://healthy.kaiserpermanente.org/northern-california/health-wellness/mental-health/services",
        cost: "Kaiser member benefits apply",
      },
      {
        name: "John Muir Behavioral Health Center",
        region: "Concord",
        description:
          "Inpatient and outpatient (PHP/IOP) treatment for substance use and mental health.",
        address: "2740 Grant St., Concord (inpatient) · 4080 Port Chicago Hwy., Concord (outpatient)",
        contacts: [
          "24/7 inpatient: (925) 674-4100 or (800) 680-6555",
          "PHP/IOP: (925) 674-4265",
        ],
        url: "https://www.johnmuirhealth.com/services/behavioral-health-services.html",
        cost: "Most insurance accepted; verify by phone",
      },
      {
        name: "El Camino Health — Scrivner Center for Mental Health & Addiction",
        region: "Mountain View",
        description:
          "Inpatient mental health, outpatient mental health, PHP/IOP including for substance use.",
        address: "2500 Grant Rd., Mountain View",
        contacts: ["(650) 940-7291", "Main: (650) 988-8468"],
        url: "https://www.elcaminohealth.org/services/mental-health",
        cost: "Most insurance accepted",
      },
      {
        name: "UCSF Addiction Care Team (ACT)",
        region: "San Francisco · Zuckerberg SF General",
        description:
          "Hospital-based addiction consultation service, primarily for inpatients. Not a self-referral outpatient clinic, but a real and active UCSF addiction program useful to know if you or a loved one is hospitalized.",
        url: "https://act.ucsf.edu/",
      },
    ],
  },
  {
    id: "university",
    label: "University counseling",
    tone: "info",
    heading: "University counseling centers",
    blurb:
      "Short-term counseling, psychiatry, and referrals for enrolled students. None advertises a dedicated pornography-addiction track, but all treat the underlying concerns (compulsive behavior, anxiety, relationships, substance use) and can refer to specialized providers in the Bay Area.",
    resources: [
      {
        name: "Stanford CAPS · Vaden Health Services",
        region: "Palo Alto",
        description:
          "Brief individual and group therapy, psychiatry, and 24/7 crisis support for enrolled Stanford students.",
        contacts: [
          "Appointments: (650) 723-3785",
          "24/7 crisis: (650) 498-2336 ext. 2",
        ],
        url: "https://vaden.stanford.edu/caps",
        cost: "Covered by Stanford student health fee",
      },
      {
        name: "UC Berkeley · University Health Services Counseling",
        region: "Berkeley",
        description:
          "Counseling available to all enrolled UC Berkeley students regardless of insurance plan.",
        address: "Tang Center, 2222 Bancroft Way, Berkeley, CA 94720",
        contacts: ["(510) 642-2000"],
        url: "https://uhs.berkeley.edu/counseling",
        cost: "Available to all enrolled students",
      },
      {
        name: "UCSF · Student Mental Health & Wellbeing",
        region: "San Francisco (Parnassus & Mission Bay)",
        description:
          "Mental health care for UCSF graduate and professional students at Parnassus and Mission Bay campuses.",
        address: "500 Parnassus Ave., Level P8 · 1675 Owens St., 3rd Floor",
        contacts: ["(415) 476-1281"],
        url: "https://studentmentalhealth.ucsf.edu/",
      },
      {
        name: "SF State · Counseling & Psychological Services",
        region: "San Francisco",
        description:
          "Brief therapy, crisis consultation, and groups; their site explicitly lists sexuality, gender identity, and substance use among common presenting concerns.",
        address: "Gator Student Health Center, 3rd floor, 730 Font Blvd., SF 94132",
        contacts: ["(415) 338-2208"],
        url: "https://psyservs.sfsu.edu/",
        cost: "Covered by student health fee",
      },
      {
        name: "SJSU · Counseling & Psychological Services",
        region: "San Jose",
        description:
          "Same-day support, brief therapy, psychiatry, case management. Brief, goal-oriented model with referrals out for longer-term care.",
        contacts: ["(408) 924-5678"],
        url: "https://www.sjsu.edu/counseling/",
        cost: "Funded by student health fee",
      },
      {
        name: "USF · Counseling and Psychological Services",
        region: "San Francisco",
        description:
          "Free counseling for enrolled USF students plus a 24/7 All Hours Line.",
        address: "Gillson Hall, Lower Level, 2325 Golden Gate Ave., SF 94118",
        contacts: [
          "Appointments: (415) 422-6352",
          "24/7 All Hours: (855) 531-0761",
        ],
        url: "https://www.usfca.edu/life-at-usf/campus-experience/counseling-psychological-services",
        cost: "Free to enrolled students",
      },
      {
        name: "Santa Clara University · CAPS at Cowell Center",
        region: "Santa Clara",
        description:
          "Short-term therapy, crisis support, groups, and workshops.",
        contacts: [
          "Appointments: (408) 554-4501 (M–F 8:30a–5p)",
          "24/7 crisis: (408) 554-5220",
        ],
        url: "https://www.scu.edu/bewell/caps/",
        cost: "Covered for enrolled SCU students",
      },
      {
        name: "UC Santa Cruz · CAPS",
        region: "Santa Cruz",
        description:
          "Brief individual therapy, group counseling, psychiatry, same-day crisis services, and \"Let's Talk\" drop-ins.",
        address: "Cowell Student Health Center, 2nd floor, 525 McLaughlin Drive",
        contacts: ["(831) 459-2628 (24/7 after-hours available)"],
        url: "https://caps.ucsc.edu/",
      },
    ],
  },
  {
    id: "local-crisis",
    label: "Local crisis lines",
    tone: "crisis",
    heading: "Bay Area crisis and access lines",
    blurb:
      "If you are in immediate danger, call 911. The lines below are Bay Area-rooted alternatives to 988 with deep local referral networks.",
    resources: [
      {
        name: "SF Suicide Prevention",
        region: "San Francisco · 24/7",
        description:
          "24/7 crisis line, plus dedicated Drug Info and Relapse lines directly relevant to compulsive-behavior support.",
        contacts: [
          "24/7 crisis: (415) 781-0500",
          "Drug Info: (415) 362-3400",
          "Relapse Line: (415) 834-1144",
          "TTY: (415) 227-0245",
          "Text CRISIS to (415) 200-2920",
        ],
        url: "https://sfsuicide.org/",
        cost: "Free, confidential",
      },
      {
        name: "SF Behavioral Health Access Line",
        region: "San Francisco · 24/7",
        description:
          "SFDPH line to find and connect with mental health and substance-use services in San Francisco. Telehealth medication treatment for opioid use 8a–midnight.",
        contacts: ["1-888-246-3333"],
        url: "https://www.sf.gov/departments--department-public-health--behavioral-health",
      },
      {
        name: "Marin Behavioral Health & Recovery Services Access",
        region: "Marin County · 24/7",
        description:
          "All-ages access line for Marin County behavioral health.",
        contacts: [
          "Access: (888) 818-1115",
          "24/7 crisis: (415) 473-6666",
        ],
        url: "https://www.marinbhrs.org/access",
      },
    ],
  },
];
