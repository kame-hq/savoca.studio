import type { PlaybookContent } from "./types";

export const veterinary: PlaybookContent = {
  slug: "veterinary",
  vertical: "Independent Veterinary Practices",
  verticalShort: "Veterinary",
  title: "The Phone-Tag Playbook",
  subtitle:
    "PE bought 22% of US vet practices. They're circling the rest. Why a 2-doc independent clinic loses $100K to phone tag and another $50K to no-shows — and the four moves that buy you another decade of independence.",
  edition: "06 / Veterinary Edition / 2026",

  introBody:
    "PE has poured $51.6B into vet care historically. Another $9.3B in just the first four months of 2024. Mars/VCA, NVA, BluePearl, Thrive, MVP+SVP — they own ~22% of US vet practices and are forecasted to hit 60% within a decade. The owners getting sold aren't the ones losing money. They're the ones whose ops are too brittle to compete for talent. This playbook is for the independent owner who isn't ready to sell. It maps the leak that PE buyers exploit when they pitch you (\"we'll fix your phones\"), and shows you how to fix it yourself. Same math, fewer strings.",

  patternHeadline: "They're circling for a reason. Your phone is one of them.",
  patternBody:
    "24–30% of inbound calls go unanswered at the average vet practice — 35% during peak hours. 85% of missed callers never try again. 72% of after-hours callers won't leave a voicemail. Half of online bookings happen after hours. A typical 3-doctor clinic loses ~540 calls per year, leading to ~459 missed appointments and over $100K in recoverable annual revenue. Add a 14–18% no-show rate (vs. 6–9% with proper reminders) and you're at $150K of leakage — exactly the operational story PE buyers tell when they pitch you on the rollup.",
  patternStats: [
    {
      value: "24–30%",
      label: "of vet practice inbound calls unanswered (35%+ at peak)",
      source: "Today's Veterinary Business / AgentZap",
    },
    {
      value: "50%",
      label: "of online vet bookings happen after-hours",
      source: "PetDesk / Vetstoria",
    },
    {
      value: "$100K+",
      label: "annual revenue lost to phone tag at a 3-doc practice",
      source: "PuppiLot / Today's Veterinary Business",
    },
    {
      value: "94%",
      label: "of pet owners read reviews before choosing a vet",
      source: "IDEXX",
    },
  ],

  mathHeadline: "$150K leaks out of an average independent practice every year.",
  mathBody:
    "Conservative 2-doctor Round Rock practice. We're counting calls and no-shows only. Not the recall failures. Not the dental upsells that didn't happen because the front desk never followed up.",
  mathRows: [
    { label: "Inbound calls per week", value: "150" },
    { label: "Missed-call rate", value: "× 25%" },
    { label: "Missed calls per year", value: "= 1,950" },
    { label: "% that are new clients", value: "× 8%" },
    { label: "Lost new-client opportunities / yr", value: "= 156" },
    { label: "First-year client value", value: "× $500" },
    { label: "Year-one new-client leak", value: "= $78,000" },
    { label: "Plus 14% no-show on $1.5M practice", value: "+$50,000" },
    { label: "Total recoverable / yr", value: "= $128,000+" },
  ],
  mathConclusion:
    "Apply $4,000–10,000 lifetime value instead of first-year value and the leak crosses $700K in foregone LTV. Same calls. Same chairs. Same staff. Different phone-answering math.",

  quotes: [
    {
      text: "They're circling me like a vulture. They wanted to throw money at me, but they were going to totally change everything. I said, 'Nope.'",
      attribution: "Otto Sharp, DVM — Swannanoa Valley Animal Hospital",
    },
    {
      text: "Phone tag is real. It adds to stress and takes time away from patients already in the building.",
      attribution: "Clinic manager, PuppiLot case study",
    },
    {
      text: "A CSR on the phone with a grieving client when three more lines light up, a walk-in needs checkout, and a doctor is asking where the lab results are — she can't clone herself.",
      attribution: "Today's Veterinary Business, on the six-figure phone problem",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Add online booking — and route 50% of after-hours demand to it",
      body: "Half of online vet bookings happen after-hours. Most independent practices still don't have it wired. PetDesk, Vetstoria, Otto, and Petly all integrate with Cornerstone, AVImark, and ezyVet. Setup is one afternoon. Capture rate goes up 12–25% in 30 days because clients stop falling through the after-hours gap.",
    },
    {
      number: "02",
      title: "Stand up an after-hours triage line — actual or AI",
      body: "GuardianVets, Absent Answer, and emerging AI receptionists handle medically-trained vet triage starting around $300–$700/mo. The math: one captured emergency consult ($150–$400) per week pays for the service. The retention math (those clients stay 5–10 years) makes it a giveaway. Don't wait for the next $5K dental cleaning to walk away because the line was busy.",
    },
    {
      number: "03",
      title: "Cut no-shows from 14% to 6% with a real reminder cadence",
      body: "Industry no-show is 14–18% without reminders, 6–9% with. Most independents are running one ezyVet auto-email and calling it done. Replace with: SMS at 72-hr, automated call at 24-hr, hand-call from CSR at 2-hr for high-value (dental, surgery) appointments. Practices doing all three cut no-shows by half. On a $1.5M practice, that's $50–80K of recovered chair time.",
    },
    {
      number: "04",
      title: "Build a Google reviews engine — 200+ at 4.7+ stars",
      body: "94% of pet owners read reviews before choosing. Independent practices that hit 200+ Google reviews and 4.7+ stars consistently outrank corporate-owned competitors in local search — even when the corporate is spending 5× on Google Ads. Wire your PIMS to fire a review request SMS post-visit. Aim for 20–30 reviews/month sustained. Respond to every one — the response rate signals to Google.",
    },
  ],

  toolsBody:
    "Vet practice software is mid-consolidation (74% now cloud-based). Pick by depth-of-integration with the comms layer you actually need.",
  toolsList: [
    "Cornerstone — IDEXX, dominant SMB share",
    "AVImark — Covetrus, 51% market share in California",
    "ezyVet — modern cloud-native PIMS",
    "Provet Cloud / IDEXX Neo / Pulse / Shepherd — challengers",
    "PetDesk — patient comms + reminders + booking",
    "Vetstoria — online booking, integrates broadly",
    "Otto / Petly / PetsApp / Digitail — emerging client experience layer",
    "GuardianVets / Absent Answer — after-hours triage",
    "AAHA Connexity / VMX / WVC — industry conferences worth attending",
  ],

  caseStudyHeadline: "Coming Q3 2026.",
  caseStudyBody:
    "A 2-doctor independent practice in central Texas reduced after-hours missed calls 67% and lifted online booking conversion 34% in 60 days using moves 01 and 02 from this playbook, recovering ~$23K of attributable monthly revenue. Full breakdown — exact PetDesk + GuardianVets configuration, Cornerstone integration steps, no-show cadence — will be published here once the 6-month data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Stay independent. Or sell on your terms.",
  ctaBody:
    "PE buyers want practices that leak — they're paying premiums for the operational lift they know they can squeeze out. The 30-min audit is free. We pull your call data, your booking funnel, your no-show rate, and we tell you in dollars what each leak is costing. If we can't find $5K/mo of recoverable revenue, you don't owe us anything. If we can — we show you exactly which of these four moves to run first. Independence is operational. Run a tighter shop, keep the keys.",

  citations: [
    { label: "AVMA — Economic State of the Profession", url: "https://www.avma.org/resources-tools/reports-statistics" },
    { label: "dvm360 — 2025 Economic State", url: "https://www.dvm360.com/view/2025-economic-state-of-the-veterinary-profession-trends-and-opportunities-for-your-practice" },
    { label: "AAHA — Corporate Consolidation + PE", url: "https://www.aaha.org/trends-magazine/publications/corporate-consolidation-and-the-rise-of-private-equity/" },
    { label: "Stateline — PE Snapping Up Vet Clinics", url: "https://stateline.org/2024/03/29/vets-fret-as-private-equity-snaps-up-clinics-pet-care-companies/" },
    { label: "Asheville Watchdog — Owner Verbatim Quotes", url: "https://avlwatchdog.org/private-equity-is-reshaping-ashevilles-vet-clinics-theyre-circling-me-like-a-vulture/" },
    { label: "Today's Veterinary Business — Six-Figure Phone Problem", url: "https://todaysveterinarybusiness.com/the-six-figure-problem-with-your-phone-system/" },
    { label: "PuppiLot — Missed-Call Cost Analysis", url: "https://www.puppilot.co/blog/are-you-missing-calls-what-is-it-costing-your-veterinary-clinic/" },
    { label: "AgentZap — Veterinary Phone Statistics", url: "https://agentzap.ai/blog/veterinary-phone-statistics" },
    { label: "ezyVet — No-Show Rates", url: "https://www.ezyvet.com/blog/how-veterinary-practices-can-reduce-no-show-rates" },
    { label: "Covetrus — Reminder Effectiveness White Paper", url: "https://software.covetrus.com/veterinary-insights/white-papers/improve-veterinary-reminder-effectiveness/" },
    { label: "Practice Life — Veterinary Client LTV", url: "https://www.practicelife.com/en/latest/the-lifetime-value-of-a-veterinary-client/" },
    { label: "IDEXX — Google Reviews + Vet SEO", url: "https://software.idexx.com/resources/blog/google-reviews-and-veterinary-seo-how-to-rank-higher-in-local-searches" },
  ],
};
