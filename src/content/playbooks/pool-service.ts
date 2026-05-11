import type { PlaybookContent } from "./types";

export const poolService: PlaybookContent = {
  slug: "pool-service",
  vertical: "Residential Pool Service",
  verticalShort: "Pool Service",
  title: "The Repair Upsell Playbook",
  subtitle:
    "Texas has 1.1M residential pools. Austin's the highest per-capita luxury install market in the state. SMB pool shops miss 62% of calls during peak — and the missed lead isn't a $230/mo cleaning anymore. It's an $8K replaster. Four moves to stop bleeding repair revenue.",
  edition: "16 / Pool Service Edition / 2026",

  introBody:
    "US pool service is an $8.8B fragmented market — 78,000+ businesses, no player above 5% share. Texas alone: 1.1M residential pools, 2,100+ service companies. Solo + 2-5 person shops = 75-85% of the industry. PE noticed: SPS PoolCare hit 191 acquisitions by Jan 2026; Splash (Asymmetric Capital) rolls up shops at 3-5× EBITDA and exits at 12×+. The 1-15 truck shop IS the rollup target — and the one being out-marketed. Skimmer's 2026 industry report flagged the shift: growth is now repair-upsell-driven, not new-pool-driven. The missed lead isn't a $230/mo recurring contract anymore. It's a $1,500 pump or an $8K replaster.",

  patternHeadline: "Repair is the margin. Missed calls are the leak.",
  patternBody:
    "SMB pool shops miss 62% of inbound calls; peak season pushes that past 70%. 85% of voicemailed callers never call back. 67% immediately dial a competitor. Average missed pool call = $1,200 in lost revenue. Industry-typical leak: ~$126K/yr per shop. AND — per Skimmer 2026 — the growth driver flipped from new-account acquisition to repair-and-renovation upsell. A missed call used to mean losing a $230/mo recurring. Now it means losing a $1,500 pump replacement.",
  patternStats: [
    {
      value: "62%",
      label: "of inbound pool service calls missed during peak (70%+ in spike)",
      source: "Aira / Contractor in Charge",
    },
    {
      value: "67%",
      label: "of voicemailed callers immediately dial a competitor",
      source: "Aira",
    },
    {
      value: "$1,200",
      label: "average revenue lost per missed pool service call",
      source: "Housecall Pro",
    },
    {
      value: "45%",
      label: "of segment revenue is recurring. The other 55% is where margin lives.",
      source: "PoolFounder",
    },
  ],

  mathHeadline: "$371K of LTV leaks before you scale.",
  mathBody:
    "4-route Austin pool service shop. 200 recurring accounts at $226/mo = $542K recurring. Plus repair/renovation = $1.0-1.2M total. We're counting only the missed-call leak — not the ghosted form submissions (58% never hear back).",
  mathRows: [
    { label: "Peak-season inbound calls (15/wk × 20 wks)", value: "300" },
    { label: "Conservative miss rate (30%, well below 62% industry)", value: "× 30%" },
    { label: "Missed calls", value: "= 90" },
    { label: "% that immediately call competitor", value: "× 50%" },
    { label: "Lost qualified leads", value: "= 45" },
    { label: "Austin LTV (3-yr blended @ $2,750/yr)", value: "× $8,250" },
    { label: "Annual LTV leak", value: "= ~$371,000" },
    { label: "At industry-default 62% miss rate", value: "= ~$1.03M" },
  ],
  mathConclusion:
    "Conservative miss math leaks $371K. Industry average leaks over $1M. And the missed call you THINK was a $230/mo cleaning was actually a $1,500 pump replacement.",

  quotes: [
    {
      text: "Pissed-off customers don't complain — they just leave.",
      attribution: "Pool Magazine editorial — op-ed headline",
    },
    {
      text: "If they don't answer when I'm trying to give them money, how will they treat me when something goes wrong?",
      attribution: "Homeowner reasoning, via Pool Magazine",
    },
    {
      text: "Clients leave because uncertainty creeps in — not because the pool is bad.",
      attribution: "Service Autopilot — pool service retention research",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Pull your real call log + measure missed-call AUDS",
      body: "AUDS = Average Unanswered Dollars per Second. Pull last 60 days from your phone system (Skimmer/ServiceTitan/Jobber integrate, or use CallRail). Calculate: missed calls × $1,200 avg lost ticket. Most owners are off by 2-3× on what they think. Until you see the number, every other move feels optional.",
    },
    {
      number: "02",
      title: "Wire missed-call text-back BEFORE summer surge",
      body: "85% of voicemailed callers never call back. SMS auto-reply within 60 seconds turns 60-80% of missed callers into responses. Skimmer + Pool Brain + ServiceTitan all support this — most shops haven't turned it on. Twilio direct ($15-30/mo) if your CRM doesn't. One captured pump replacement ($1,500) pays for this for 5 years.",
    },
    {
      number: "03",
      title: "Build the repair upsell sequence into your route SOP",
      body: "Industry growth shifted from new accounts to repair upsell. Your existing recurring base IS the repair pipeline. Wire your CRM to flag every visit where the tech notes equipment age >5 years (pump, filter, heater, salt cell). Trigger a follow-up quote within 48 hours. Top-performing shops convert 25-40% of equipment-age flags into installs within 90 days.",
    },
    {
      number: "04",
      title: "Audit route density vs Austin geography — 50 → 60 pools/route",
      body: "Industry average: 50 pools/route. Top operators: 60-75. Wire route optimization in Skimmer or Pool Brain. Cluster by zip + drive-time, not by chronological signup. A 4-truck Austin shop adding 10 pools per route at $226/mo = $108K/yr in additional recurring with the same labor cost.",
    },
  ],

  toolsBody:
    "Your software maps to size + complexity. Skimmer is the modern default for 100-2K pool shops. PE-grade ops use Pool Brain or ServiceTitan.",
  toolsList: [
    "Skimmer — $29-49/tech/mo, modern default 100-2K pools",
    "Pool Brain — $500-1K/mo, route discipline + 500-2K pools",
    "HydroScribe — $200-500/mo, reporting-heavy operators",
    "Pool Office Manager — $200-500/mo, job costing focus",
    "ServiceTitan — $1K+/mo, enterprise multi-pool ops",
    "Jobber — <$200/mo, <100 pools generalist",
    "Pool Magazine + PHTA — industry intel + best practices",
  ],

  caseStudyHeadline: "Coming Q3 2026 (post-summer surge).",
  caseStudyBody:
    "A 4-truck Austin pool service shop deployed Skimmer + missed-call text-back + repair flagging in late April 2026. Through July: captured 67 previously-missed calls, closed 19 new recurring accounts and 14 equipment upsells (~$48K + ongoing $4.3K/mo recurring). Full breakdown — Skimmer integration, text-back SOP, equipment-age flagging rule — published once season-end data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Stop losing $8K replasters to voicemail.",
  ctaBody:
    "Austin pool shops are sitting on the highest LTV in the state, with PE buyers paying 12×+ EBITDA for operators with clean ops. The 30-min audit is free. We pull your call log, your repair-to-maintenance ratio, your route density — and tell you in dollars exactly which $1,500 pump and $8K replaster walked last month. If we can't find $10K/mo of recoverable revenue, you don't owe me anything.",

  citations: [
    { label: "IBISWorld — US Pool Cleaning Services 2026", url: "https://www.ibisworld.com/united-states/industry/swimming-pool-cleaning-services/4832/" },
    { label: "PoolFounder — Industry Statistics 2026", url: "https://www.poolfounder.com/pool-service-industry-statistics" },
    { label: "Bluewater — Austin Pool Cleaning Cost", url: "https://bluepoolwater.com/blog/pool-cleaning-cost-austin/" },
    { label: "Skimmer — 2026 State of Pool Service Report", url: "https://www.getskimmer.com/blog/skimmer-releases-2026-state-of-pool-service-report-highlighting-a-more-disciplined-digital-industry" },
    { label: "Pool Magazine — Pissed-off Customers Don't Complain", url: "https://www.poolmagazine.com/op-editorials/most-pissed-off-pool-customers-dont-complain/" },
    { label: "Aira — Missed Business Calls Statistics", url: "https://www.getaira.io/blog/missed-business-calls-statistics" },
    { label: "Contractor in Charge — Missed Call Stats Home Services", url: "https://contractorincharge.com/blog/missed-call-statistics-for-home-service-companies" },
    { label: "Housecall Pro — Missed Calls Research", url: "https://www.housecallpro.com/resources/missed-calls/" },
    { label: "Angi — Pool Repair Costs", url: "https://www.angi.com/articles/how-much-do-pool-repairs-cost.htm" },
    { label: "PoolDial — Software Landscape", url: "https://www.pooldial.com/resources/articles/business/pool-service-software-landscape" },
    { label: "PoolGuard Austin — Pool Statistics", url: "https://poolguardusa.com/pool-statistics-austin/" },
    { label: "Service Autopilot — Pool Retention Research", url: "https://www.serviceautopilot.com/pool-service/5-reasons-why-your-pool-service-clients-are-leaving/" },
  ],
};
