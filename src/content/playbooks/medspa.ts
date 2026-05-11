import type { PlaybookContent } from "./types";

export const medspa: PlaybookContent = {
  slug: "medspa",
  vertical: "Medical Spa & Aesthetics",
  verticalShort: "Medspa",
  title: "The Missed-Call Playbook",
  subtitle:
    "How a single-location medspa loses six figures a year between the front desk and the booking software — and the four moves that plug the leak without spending another dollar on ads.",
  edition: "01 / Medspa Edition / 2026",

  introBody:
    "You spent $30K, $50K, maybe $100K last year acquiring leads. Meta ads, Google Local, Instagram, the influencer collab that drove 200 DMs in a weekend. Then those leads hit your front desk and 35% of them never get answered. This playbook is for the RN-owners, NP-owners, and MD-owners who already run a great clinic. The leak isn't your service. It isn't your skill. It's the eight feet between the phone ringing and the appointment landing in Boulevard. We're going to map it, price it, and close it.",

  patternHeadline:
    "The leak isn't on your spreadsheet. It's at the front desk.",
  patternBody:
    "Industry data shows the average medspa misses up to 35% of inbound calls. 85% of callers who hit voicemail never leave a message — and 67% immediately call the next clinic on the search results page. Worse: 40% of inquiries land between 5pm and 9pm, and 20% on weekends. Right when your front desk has gone home and your owner-injector is at her own kid's soccer game.",
  patternStats: [
    {
      value: "35%",
      label: "of medspa inbound calls go unanswered industry-wide",
      source: "Hyperleap AI, MySalonDesk",
    },
    {
      value: "85%",
      label: "of missed-call leads never book — they pick the next clinic",
      source: "MySalonDesk",
    },
    {
      value: "60%",
      label: "of inquiries land outside 9–5 (40% evening, 20% weekend)",
      source: "FrontDesk.care",
    },
    {
      value: "21×",
      label: "more likely to qualify a lead with a 5-min response vs 30-min",
      source: "MIT / InsideSales / HBR",
    },
  ],

  mathHeadline: "What three missed calls a day actually cost.",
  mathBody:
    "Most owners I talk to think missed calls cost them $500. The real number is closer to $135K/yr — and that's only counting the first visit. Plug your own numbers in, but here's the conservative single-location math:",
  mathRows: [
    { label: "Missed calls per day", value: "3" },
    { label: "Operating days per year", value: "× 250" },
    { label: "Missed calls per year", value: "= 750" },
    { label: "Industry close rate on answered new leads", value: "× 30%" },
    { label: "Lost would-have-bookings", value: "= 225" },
    { label: "Avg first-visit ticket", value: "× $600" },
    { label: "Lost first-visit revenue / yr", value: "= $135,000" },
    { label: "Apply year-one LTV instead ($3K–$5K)", value: "= $675K–$1.13M" },
  ],
  mathConclusion:
    "Recovering even one in three of those calls puts $45K–$375K back on your P&L. Your CAC stays the same. Your ad spend stays the same. The only thing that changes is who picks up the phone.",

  quotes: [
    {
      text: "The 'Revenue Leak' isn't found in the back-office spreadsheets — it's happening at the front desk.",
      attribution: "VirtualNexGen, medspa industry analysis",
    },
    {
      text: "Asking a clinical professional to handle HIPAA-compliant intake, social DMs, phone calls, and in-person greeting is a recipe for high turnover.",
      attribution: "AestheticsPro, hidden-problems report",
    },
    {
      text: "Missed calls don't disappear. They go to competitors.",
      attribution: "AmSpa industry brief",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Cover the 5pm–9pm window",
      body: "60% of medspa inquiries arrive when the front desk has already gone home. Either staff a remote evening line, deploy an AI receptionist that books real Boulevard slots, or stand up a 24/7 answering service. The cost of any of these ($300–$900/mo) is 10× lower than the lost LTV of three after-hours calls per week.",
    },
    {
      number: "02",
      title: "Auto-text every missed call within 60 seconds",
      body: "85% of missed callers never leave voicemail. But 90% will respond to an SMS that says 'Sorry I missed you — I'm in a treatment. Want to book a consult or text me your question?' Most PMSes (Boulevard, Aesthetic Record, Vagaro) have this built in or wire to Twilio in an hour.",
    },
    {
      number: "03",
      title: "Lock in a 5-minute response standard",
      body: "Lead-response data from MIT and InsideSales shows responding within 5 minutes is 21× more effective than 30 minutes. That means form fills, IG DMs, Google Business messages — all of it. Wire your Boulevard inbox + Meta inbox + GBP messages into one notification stream. Set an SLA. Audit weekly.",
    },
    {
      number: "04",
      title: "Run a recall + rebooking sequence on every patient",
      body: "Most medspa software supports automated rebooking nudges, but most owners never turn them on. Botox patients should get a follow-up at 90 days, lasers at 30 days, weight-loss patients monthly. A simple 4-touch sequence (SMS + email) lifts repeat visits 15–25% — pure recovered revenue from existing patients.",
    },
  ],

  toolsBody:
    "Your stack is probably some combination of these. The right answer depends on whether you bias toward clinical depth (PatientNow, Aesthetic Record), client experience (Boulevard), or budget (Vagaro). Don't switch tools to fix a process problem.",
  toolsList: [
    "Boulevard — premium booking + client experience",
    "PatientNow — clinical EMR depth, strong photo + chart workflows",
    "Aesthetic Record — injection mapping, AI photo analysis",
    "Vagaro — entry-level, under $100/mo",
    "Mindbody — multi-vertical, scales to multi-location",
    "AestheticsPro — niche aesthetics-first PMS",
    "Cherry — financing for high-ticket plans",
    "Twilio — DIY SMS missed-call texting layer",
  ],

  caseStudyHeadline: "Coming Q3 2026.",
  caseStudyBody:
    "A 2-injector clinic in central Texas reduced missed calls 71% and recovered $18K/mo in attributable revenue inside 30 days using moves 01 and 02 from this playbook. Full breakdown — ad spend before/after, software changes, exact SLA configuration — will be published here once the 90-day data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Stop paying for ads to ring an empty desk.",
  ctaBody:
    "If any of this is hitting close, the 30-min audit is free. We pull your call data, your booking data, and your ad spend, and we tell you in dollars what each leak is costing per month. No deck. No upsell. If we can't find $5K/mo of recoverable revenue, you don't owe us anything. If we can — we'll show you exactly which of these four moves to run first.",

  citations: [
    { label: "AmSpa — Med Spa Statistics", url: "https://www.americanmedspa.org/resources/med-spa-statistics" },
    { label: "Boulevard — Average Medical Spa Revenue", url: "https://www.joinblvd.com/blog/average-medical-spa-revenue" },
    { label: "FrontDesk — Medspa Lead Conversion Guide", url: "https://frontdesk.care/resources/guides/medspa-lead-conversion" },
    { label: "Hyperleap AI — Salons & Medspas Lose Clients to Missed Calls", url: "https://hyperleap.ai/blog/salons-medspas-lose-clients-missed-calls" },
    { label: "MySalonDesk — Medspa Answering Service Data", url: "https://www.mysalondesk.com/medspa-answering-service" },
    { label: "rework.com — Lead Response Time Studies", url: "https://resources.rework.com/libraries/lead-management/lead-response-time" },
    { label: "PatientGain — Medical Spa Marketing ROI", url: "https://www.patientgain.com/medical-spa-marketing-roi" },
    { label: "Solomon Partners — MedSpa Market Overview Q2 2024", url: "https://solomonpartners.com/wp-content/uploads/2024/04/Solomon-Partners-MedSpa-Market-Overview.pdf" },
    { label: "AestheticsPro — Hidden Problems Blog", url: "https://www.aestheticspro.com/Blog/Hidden-Problems/" },
    { label: "24-7 Press Release — AI Receptionist for Med Spas", url: "https://www.24-7pressrelease.com/press-release/532385/ai-receptionist-for-med-spas-new-data-reveals-100k-annual-revenue-loss-from-missed-calls" },
  ],
};
