import type { PlaybookContent } from "./types";

export const pestControl: PlaybookContent = {
  slug: "pest-control",
  vertical: "Residential Pest Control",
  verticalShort: "Pest Control",
  title: "The Owner-Bottleneck Playbook",
  subtitle:
    "Owners think they answer 97% of calls. Reality: 66%. A 3-route Austin shop leaks $175K/yr — $77K to missed calls, $71K to no-shows, $27K to retention drop. Four moves to take the owner out of the bottleneck.",
  edition: "15 / Pest Control Edition / 2026",

  introBody:
    "US pest control is a $25-28B recurring-revenue machine with 33,000 businesses — 81% of them 1-2 location shops. PE is consolidating fast (Rollins did 32 acquisitions in 2024; Citation Capital bought Aptive). Texas is a top-3 market: subterranean termites are year-round, mosquito season runs April-November. The window for a tight 3-15 route shop to capture local share is wide open right now. But there's a structural problem unique to this vertical: the owner is the dispatcher, the estimator, the seller, AND the tech-shortage solver. This playbook is for the operator who wants to take themselves out of the bottleneck.",

  patternHeadline: "You're not in the business. You ARE the bottleneck.",
  patternBody:
    "Owners think they answer 97% of calls. ServiceDirect's actual home-service data: 66%. The gap between perceived and real is the entire leak. 22% of pest control calls go unanswered industry-wide. 60% of prospects move to the next listing if not answered quickly. 5-min response converts 5-10× the rate of 1-hour. May call volume triples. Tech shortage caps growth for 37% of owners. None of this is solvable by 'work harder.' It's solvable by removing the owner from dispatch.",
  patternStats: [
    {
      value: "66%",
      label: "actual home-service call answer rate (owners THINK 97%)",
      source: "ServiceDirect Performance Report",
    },
    {
      value: "22%",
      label: "of pest control calls go unanswered industry-wide",
      source: "Call Porter / Market Disruptors",
    },
    {
      value: "60%",
      label: "of prospects move to next listing if not answered quickly",
      source: "FieldRoutes",
    },
    {
      value: "37%",
      label: "of owners say tech headcount — not demand — caps growth",
      source: "PCT 26th Strategic Analysis",
    },
  ],

  mathHeadline: "$175K of hard cash. Annual.",
  mathBody:
    "3-route Austin pest control shop. $650K revenue. Quarterly recurring at $125/visit, 600 active accounts. We're counting hard cash leaks only — not the route-density opportunity.",
  mathRows: [
    { label: "22% missed × 40 inbound/wk × 52 wks", value: "" },
    { label: "× 35% would-have-closed × $480 annualized contract", value: "= $77,000/yr" },
    { label: "Locked-gate no-shows: 1/day/truck × 3 trucks × 250 days", value: "" },
    { label: "× $95 stop value", value: "= $71,000/yr" },
    { label: "Retention 78% vs target 87% (9 pt gap)", value: "" },
    { label: "× 600 customers × $500 LTV slice/yr", value: "= $27,000/yr" },
    { label: "Total annual cash leak", value: "= ~$175,000" },
    { label: "Plus route-density gap (6 stops vs 8 industry-target)", value: "+ $142K capacity" },
  ],
  mathConclusion:
    "Hard cash leak: $175K/yr on a $650K shop. That's 27% of top line walking away while you do dispatch. Take yourself out of dispatch — the math takes care of itself.",

  quotes: [
    {
      text: "When every call, quote, follow-up, and route decision has to pass through me, the business slows down. I am the bottleneck.",
      attribution: "Pest control owner, via Market Disruptors",
    },
    {
      text: "I thought we were answering everything. Pulled the call records — we were at 71%.",
      attribution: "Owner post-audit, Call Porter",
    },
    {
      text: "Growth is capped because I can't find techs, not because I can't find customers.",
      attribution: "PCT 26th Strategic Analysis — 36.8% of owner respondents",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Audit your real call-answer rate THIS WEEK",
      body: "Owners are off by 30 percentage points on what they think their answer rate is. CallRail or your existing CRM phone log will tell you the truth in 15 minutes. Pull the last 30 days. Filter by 'unanswered + no voicemail.' Multiply by industry conversion rates. The number you get is the floor of your annual cash leak — and the wake-up call for what to fix first.",
    },
    {
      number: "02",
      title: "Stand up an answering service BEFORE May 1",
      body: "May call volume triples. Owners can't handle it solo and tech shortage means hiring a CSR isn't fast enough. Pest-trained answering services (Call Porter, SkipCalls, Specialty) run $300-700/mo and integrate with PestRoutes, FieldRoutes, GorillaDesk. They book directly into your system. One captured quarterly contract pays for 4 months of service.",
    },
    {
      number: "03",
      title: "Fix locked-gate no-shows — the $71K invisible bleed",
      body: "Most owners count missed calls. Almost nobody counts locked-gate no-shows. One tech / one truck / one $95 stop wasted per day × 3 trucks × 250 days = $71K/yr. The fix: SMS confirmation 24 hours before, second SMS the morning of, gate-code field required in CRM. FieldRoutes and PestRoutes both support this — most shops never turn it on.",
    },
    {
      number: "04",
      title: "Tighten route density — 6 stops → 8 = $142K capacity unlock",
      body: "Industry-average density: 6 stops/tech/day. Target: 8. The 2-stop gap × 3 trucks × 250 days × $95 = $142K of unbooked capacity sitting in your existing route geography. Wire PestRoutes / FieldRoutes route optimization. Cluster by zip, not by chronological booking order. Densest operators in the industry hit 10-12 stops/day on residential.",
    },
  ],

  toolsBody:
    "Your stack maps to size. Switching costs are real — pick by current revenue, not by feature checkbox.",
  toolsList: [
    "GorillaDesk — $49+/mo, solo + small shops",
    "Pocomos / Fieldster — cheap entry alternatives",
    "FieldRoutes (ServiceTitan-owned) — powers 40 of PCT Top 100",
    "PestRoutes — direct competitor to FieldRoutes",
    "Briostack — mid-tier alternative",
    "PestPac (Workwave) — multi-unit / commercial-heavy",
    "ServSuite — enterprise + commercial complex contracts",
    "Call Porter / SkipCalls / Specialty — pest-trained answering",
  ],

  caseStudyHeadline: "Coming Q3 2026.",
  caseStudyBody:
    "A 3-route Round Rock pest control shop deployed a pest-trained answering service April 15, 2026 — before May surge. Captured 84 previously-missed inbound calls in 30 days. Closed 22 into new quarterly contracts (~$10.5K monthly recurring). Full breakdown — exact Call Porter integration with PestRoutes, gate-code SOP, route-density rebuild — published once 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Get yourself out of dispatch. The math takes care of itself.",
  ctaBody:
    "If you're answering your own phone at 7pm Tuesday, you're the bottleneck. The 30-min audit is free. We pull your actual call-answer rate, your route density, your retention curve — and tell you in dollars exactly where the bottleneck is costing you. If we can't find $10K/mo of recoverable revenue, you don't owe me anything.",

  citations: [
    { label: "IBISWorld — Pest Control US Industry", url: "https://www.ibisworld.com/united-states/industry/pest-control/1495/" },
    { label: "NPMA 2025 Pest Control Industry Cost Study", url: "https://www.npmapestworld.org/your-business/latest-news/npma-and-pco-bookkeepers-release-comprehensive-2025-pest-control-industry-cost-study/" },
    { label: "PCT 26th Strategic Analysis", url: "https://www.pctonline.com/page/pct-npma-annual-research-reports/" },
    { label: "ServiceDirect — Home Service Call Performance Report", url: "https://blog.servicedirect.com/home-service-call-performance-report" },
    { label: "Call Porter — Pest Control Missed Calls", url: "https://callporter.com/blog/why-missed-calls-are-costing-pest-control-pros-thousands-and-how-to-fix-it/" },
    { label: "Market Disruptors — Pest Missing Calls", url: "https://marketdisruptorsagency.com/resources/pest-control-problems/pest-control-missing-calls-losing-customers" },
    { label: "FieldRoutes — Retention Research", url: "https://www.fieldroutes.com/blog/retain-pest-control-customers" },
    { label: "Spring Green — Route Density Math", url: "https://springgreenfranchise.com/maximizing-route-density-the-1-factor-in-pest-profitability/" },
    { label: "Cube Creative — Pest KPIs + ROI", url: "https://cubecreative.design/blog/pest-control-marketing/kpis-that-drive-profit" },
    { label: "SkipCalls — Pest Answering Service Guide", url: "https://skipcalls.com/blog/pest-control-answering-service-guide" },
    { label: "Capstone Partners — Pest Sector Update", url: "https://www.capstonepartners.com/insights/article-pest-control-sector-update/" },
    { label: "Lion Business — TX Pest Control Q1 2025", url: "https://lionbusinessbrokers.com/pest-control-industry-update-q1-2025/" },
  ],
};
