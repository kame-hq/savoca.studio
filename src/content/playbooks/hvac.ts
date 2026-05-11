import type { PlaybookContent } from "./types";

export const hvac: PlaybookContent = {
  slug: "hvac",
  vertical: "Residential HVAC Contractors",
  verticalShort: "HVAC",
  title: "The After-Hours Playbook",
  subtitle:
    "How a 5-truck HVAC shop bleeds $290K to $580K a year during cooling season — most of it after 5pm, on a phone nobody answers — and the four moves to recover it before private equity buys your neighbor.",
  edition: "03 / HVAC Edition / 2026",

  introBody:
    "PE rolled up 23% of HVAC deals in 2024, up from 8% in 2023. Champions Group sold to Blackstone for $2.5B. Climate Solutions, Evolution Mechanical, Apex — they're all shopping in Texas right now. The ones being bought aren't the technically best operators. They're the shops whose dispatch, intake, and AR are clean. This playbook is the field guide for the owner-operator who wants to either run a tighter shop or hand over a more valuable one. It maps where the money leaks between the truck and the bank account, and gives you four moves that compound during peak season.",

  patternHeadline: "75% of emergency calls go to whoever answers first.",
  patternBody:
    "Texas heat doesn't wait until 9am. 31% of HVAC emergency calls come in after business hours. Small to mid shops miss up to 62% of calls during peak season. 78% of those callers don't leave a voicemail. 67% immediately call the next number on the list. The first contractor to answer wins the job in 75%+ of emergency situations. Every missed call between 5pm Friday and 9am Monday isn't a lead lost — it's a $5,000 install that went to the truck behind yours.",
  patternStats: [
    {
      value: "62%",
      label: "of small/mid HVAC shops' calls go unanswered at peak (35% baseline)",
      source: "Contractor in Charge / Numa",
    },
    {
      value: "31%",
      label: "of HVAC emergency calls come in after business hours",
      source: "AgentZap",
    },
    {
      value: "75%",
      label: "of emergency jobs go to the first contractor who answers",
      source: "Dexcomm / Instant Sales Funnels",
    },
    {
      value: "$700–$1,050",
      label: "avg revenue lost per missed emergency service call",
      source: "Adaptify / Instant Sales Funnels",
    },
  ],

  mathHeadline: "Half a million dollars walks out the door every cooling season.",
  mathBody:
    "Conservative residential 5-truck Austin shop. Summer-weighted. We're only counting service calls — not the install jobs that started as a service call.",
  mathRows: [
    { label: "Inbound calls per week (peak)", value: "150" },
    { label: "Missed-call rate (peak)", value: "× 35%" },
    { label: "Missed calls per week", value: "= 52" },
    { label: "Avg lost revenue per missed call (low end)", value: "× $350" },
    { label: "Weekly leak (peak)", value: "= $18,200" },
    { label: "Texas cooling-season weeks", value: "× 16" },
    { label: "Service-call leak per cooling season", value: "= $291,200" },
    { label: "If 1 in 4 was an install ($5K avg)", value: "+$650,000" },
  ],
  mathConclusion:
    "At your shop's median 5.8% net margin, recovering even 20% of the leak = $58–116K of recovered revenue and $3.4–6.7K net profit lift. If a quarter of those calls convert to installs, multiply by 5 to 10.",

  quotes: [
    {
      text: "Most small service owners build a 'Frankenstein Stack' — WhatsApp for dispatching, Excel for scheduling, QuickBooks for invoicing. The owner is the bridge holding them together.",
      attribution: "Repair-CRM, small-shop pattern study",
    },
    {
      text: "Sending a tech across town for a $99 tune-up when they were just two blocks away from a major repair kills fuel budget and wastes billable hours.",
      attribution: "VirtualNexgen, dispatch density analysis",
    },
    {
      text: "A poorly managed schedule is the fastest way to lose your best talent.",
      attribution: "ServiceTitan podcast, with Vanessa Gonzales",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Stand up the after-hours channel before next heat wave",
      body: "31% of your emergency calls come in after 5pm. You need a real path: 24/7 answering service ($300–$800/mo), an AI receptionist that books real ServiceTitan slots ($150–$400/mo), or a rotating on-call line with a $50 emergency dispatch fee that funds the coverage. The math always wins — one captured emergency install ($7K–$13K) pays for a year of any of these options.",
    },
    {
      number: "02",
      title: "Hit the 5-minute response standard on every channel",
      body: "Lead-response data shows responding within 5 minutes is 100× more likely to connect than at 30 minutes. That means missed calls auto-text within 60 sec, web form fills get a callback, Google LSA messages get acknowledged. Most ServiceTitan and Housecall Pro setups support this — but most shops never turn it on. Wire it once, audit weekly.",
    },
    {
      number: "03",
      title: "Build a maintenance plan funnel — not a maintenance plan",
      body: "Maintenance members spend 2× the average customer per year and are 3× more likely to convert when their system fails. Most HVAC shops sell their plan once at the close of a service call. Build a multi-step funnel instead: post-service SMS pitch, 30-day re-pitch, end-of-season offer, referral discount. A well-built program lifts annual revenue per customer 20–40%, sometimes 50%+ of total revenue.",
    },
    {
      number: "04",
      title: "Audit dispatch density and stop sending trucks across town",
      body: "Most 5-truck shops are running at ~62% truck utilization. Tightening it 10 points is worth more than adding a truck. Run a 30-day dispatch density audit: pull every job from ServiceTitan, geocode the addresses, calculate avg miles between jobs. If you're over 15 miles average, you're losing 1–2 calls per truck per day to drive time.",
    },
  ],

  toolsBody:
    "Your stack already exists. The right answer is usually 'use what you have, properly' — not 'switch to ServiceTitan.' But know what's available and what each is good for.",
  toolsList: [
    "ServiceTitan — enterprise FSM, 4,000+ shops, deep reporting",
    "Housecall Pro — 15,000+ small/mid shops, mobile-first",
    "Jobber — 2–10 truck shops, lowest TCO",
    "FieldEdge / Service Fusion / FieldPulse — mid-tier alternatives",
    "Numa / AgentZap / Talk24 — AI receptionist for after-hours",
    "Dexcomm / 24/7 Answering — human answering services",
    "Levergy / Ryno Strategic — HVAC-specific marketing agencies",
    "Google LSA — typically $30–$85 per qualified HVAC lead",
  ],

  caseStudyHeadline: "Coming Q3 2026.",
  caseStudyBody:
    "A 6-truck HVAC shop in Pflugerville reduced after-hours missed calls 84% and recovered $42K of cooling-season revenue in their first 60 days using moves 01 and 02 from this playbook. Full breakdown — exact answering-service vs AI cost-per-conversion, ServiceTitan SLA configuration, dispatch density delta — will be published here once the season-end data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Run a tighter shop. Or sell a more valuable one.",
  ctaBody:
    "The PE buyers aren't paying premiums for trucks. They're paying premiums for shops with clean dispatch, full call answer rates, and predictable AR. The 30-min audit is free. We pull your call data, your dispatch logs, your booking-to-cash cycle, and we tell you in dollars what each leak is costing. If we can't find $10K/mo of recoverable revenue, you don't owe us anything. If we can — we show you exactly which of these four moves to run before next cooling season.",

  citations: [
    { label: "Workyard — 75+ HVAC Facts and Statistics 2025", url: "https://www.workyard.com/construction-management/hvac-facts-statistics" },
    { label: "ServiceTitan — HVAC Statistics 2026", url: "https://www.servicetitan.com/blog/hvac-statistics" },
    { label: "Housecall Pro — 2026 HVAC Industry Trends", url: "https://www.housecallpro.com/resources/hvac-industry-trends/" },
    { label: "Capstone Partners — HVAC Services M&A Update July 2025", url: "https://www.capstonepartners.com/insights/article-hvac-services-ma-update/" },
    { label: "AgentZap — HVAC Phone Statistics", url: "https://agentzap.ai/blog/hvac-phone-statistics" },
    { label: "Contractor in Charge — Missed Call Statistics", url: "https://contractorincharge.com/blog/missed-call-statistics-for-home-service-companies" },
    { label: "Adaptify — Real Cost of Missed Calls", url: "https://www.adaptify.tech/article/cost-of-missed-calls-hvac" },
    { label: "Dexcomm — #1 Reason HVAC Loses Service Jobs", url: "https://www.dexcomm.com/blog/-the-1-reason-why-hvac-companies-miss-out-on-service-jobs" },
    { label: "FIELDBOSS — 2025 HVAC Customer Survey", url: "https://www.fieldboss.com/blog/hvacs-real-problem-isnt-price-its-poor-communication/" },
    { label: "Sera — HVAC Membership Math", url: "https://sera.tech/blog/the-math-of-hvac-membership-plans" },
    { label: "Therapeutic Tax — HVAC Profit Margins (ACCA Benchmarking)", url: "https://therapeutictax.com/blog/hvac-profit-margins" },
    { label: "WebFX — 2026 HVAC Marketing Benchmarks", url: "https://www.webfx.com/blog/home-services/hvac-marketing-benchmarks/" },
  ],
};
