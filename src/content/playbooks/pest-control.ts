import type { PlaybookContent } from "./types";

export const pestControl: PlaybookContent = {
  slug: "pest-control",
  vertical: "Residential Pest Control",
  verticalShort: "Pest Control",
  title: "The Recurring-Revenue Defense Playbook",
  subtitle:
    "Why a typical 3-truck Austin pest shop leaks $317K of cash + capacity a year and another $240K of what you'd sell for, sitting on the same revenue — and the four operator moves the rollups install on Day 1.",
  edition: "15 / Pest Control Edition / 2026",

  introBody:
    "US pest control is a $25-28B recurring-revenue machine — 33,000 businesses, 81% of them 1-2 location shops. Rollins spent $310M on acquisitions in 2025, 32 bolt-ons in 2024. Six weeks ago they bought Romex Pest Control ($29.7M revenue, 200+ employees across Austin, DFW, San Antonio, OKC). Anticimex entered Texas in June 2025 by taking 3 DFW shops in one day. Citation Capital took Aptive in August. The named Austin holdout — ABC Home Services, the Jenkins family, 800 employees since 1949 — is the foil. The independents getting the best offers all hit 80% recurring revenue first. The ones stuck at 74% sell for less, or don't sell at all. This playbook is for the owner who wants to build the book the rollups are paying for, on their own terms.",

  patternHeadline: "Phone's ringing. Truck's half-empty.",
  patternBody:
    "Four leaks. Same shop. The call-answer gap: owners think they answer 97% of calls; ServiceDirect's real home-service data says 66%. The 34-point delta is the front-door leak. The recurring-revenue gap: industry average is 74% recurring; the PE-buyable floor is 80%. That six-point spread is the difference between a 4× and a 6× sale multiple on the same revenue. The labor gap: NPMA 2025 cost study has labor at 25.8% of revenue; the operators winning route density push it under 21%. And the seasonality gap: Texas pest seasonality (termite swarm Feb-May, mosquito May-Sep, rodent Oct-Jan) maps perfectly to seasonal-recall sequences most shops never wire. Rollins, Anticimex, Aptive, Hawx, and Killingsworth install all four moves on Day 1. You don't need a PE check to do the same.",
  patternStats: [
    {
      value: "97% / 66%",
      label:
        "What owners THINK their call-answer rate is vs what it actually is. The 34-point gap is the entire front-door leak.",
      source: "ServiceDirect Home Service Call Performance Report",
    },
    {
      value: "6 pts",
      label:
        "Recurring-revenue gap. Industry typical 74%, PE-buyable floor 80%. Six points = 4× → 6× sale multiple, same revenue.",
      source: "NPMA 2025 Industry Cost Study",
    },
    {
      value: "$310M",
      label:
        "Rollins's 2025 acquisition spend (32 bolt-ons in 2024). April 2026: Rollins took Romex Pest Control — $29.7M revenue, 200+ employees, Austin / DFW / SA / OKC. Six weeks ago.",
      source: "Rollins Inc. 2025 earnings + PMP Magazine, April 2026",
    },
    {
      value: "25.8%",
      label:
        "Labor as % of revenue at typical shop. Route-density winners push it under 21% on the same revenue. Geography is the lever.",
      source: "NPMA / PCO Bookkeepers 2025 Cost Study",
    },
  ],

  mathHeadline: "$317K of cash. $240K more on what you'd sell for.",
  mathBody:
    "Representative independent Austin pest shop: 3 trucks, ~1,500 active accounts, ~$650K revenue, 70% residential / 30% commercial mix, recurring-revenue ratio at 74%. Four leaks at this scale:",
  mathRows: [
    {
      label: "Call-answer gap — 34 inbound missed/wk × 35% close × $480 annualized contract × 52",
      value: "= $175K cash leak",
    },
    {
      label: "Recurring-revenue shift — push the book from 74% to 80% (card-on-file + auto-rebill on termite/mosquito/rodent annuals)",
      value: "= $142K capacity unlock",
    },
    {
      label: "Route density — 25.8% → 21% labor on same revenue via PestPac/FieldRoutes geo-routing",
      value: "(folded into capacity)",
    },
    {
      label: "Sale multiple — same earnings, 6× vs 4× at the new recurring ratio",
      value: "= $240K more on what you'd sell for",
    },
    {
      label: "Conservative recoverable cash + capacity, year one",
      value: "= $317,000",
    },
  ],
  mathConclusion:
    "$317K of cash and capacity recovered in year one. Plus $240K on what you'd sell for, on the same revenue. None of it requires more leads, a bigger truck, or a hire you can't make in this labor market. Rollins paid 6× for shops that hit 80% recurring first. The 6-point gap is two operator moves and eight months of installation.",

  quotes: [
    {
      text: "When every call, quote, follow-up, and route decision has to pass through me, the business slows down. I am the bottleneck.",
      attribution: "Dennis Jenkins, ABC Home Services (Dallas/Austin) — via PMP Magazine",
    },
    {
      text: "Route density is the single biggest determinant of profitability in this business. You're not competing on chemistry. You're competing on geometry.",
      attribution: "Jamie Ogle, CEO, Lloyd Pest Control — via PCT Magazine",
    },
    {
      text: "Growth is capped because I can't find techs, not because I can't find customers. Every operator I know is in the same boat.",
      attribution: "Ashly Morrison, City Wide Exterminating — via PCT Magazine",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Push the recurring book from 74% to 80%",
      body: "Recurring revenue % is the metric this vertical is judged on at sale. Industry average 74%, PE-buyable floor 80% — six points is the difference between 4× and 6× at exit, same revenue. The move: card-on-file on every account at signup, auto-rebill on termite annuals + mosquito seasonals + rodent winter contracts, kill the manual collections cycle. PestPac, FieldRoutes, Briostack, and GorillaDesk all support card-on-file + ACH auto-debit + scheduled-billing automation natively. Most shops bought the feature and never turned it on. The 6-point shift on a $650K book moves the sale price from $720K to $1.1M — same business, same revenue, $400K more on the table.",
    },
    {
      number: "02",
      title: "Tighten route density — PestPac / FieldRoutes geo-clustered routing",
      body: "Labor is 25.8% of revenue at the typical shop (NPMA 2025). The shops winning the density game push it under 21% — not by paying techs less, by sending them on tighter geography. Geocode every account, route by ZIP cluster + day-of-week, force the dispatcher to assign by density-of-stop, not chronological booking order. PestPac and FieldRoutes both have route-optimization modules; densest residential operators hit 10-12 stops/day vs the 6-8 average. Lloyd Pest's Jamie Ogle: 'You're not competing on chemistry. You're competing on geometry.' On a 3-truck shop, 4.8 points of labor leverage = $31K of margin you keep without changing anything else.",
    },
    {
      number: "03",
      title: "Missed-call text-back + after-hours capture — close the 34-point gap",
      body: "Owners think they answer 97% of calls. ServiceDirect data on actual home-service shops: 66%. That 34-point gap is the front-door leak — on 1,500 accounts and ~40 inbound calls/week, a third of them never get a callback. Wire Twilio missed-call text-back (or Numa AI receptionist for $300-500/mo) into your existing phone line. Auto-text within 60 seconds of any missed call: 'Saw your call — booking now or call you back?' Pest-trained answering services (Call Porter, SkipCalls, Specialty Answering) integrate with PestPac and FieldRoutes and book directly into the dispatch board. One captured quarterly contract pays for 4 months of service. May call volume triples — get this wired before April 30.",
    },
    {
      number: "04",
      title: "Seasonal-recall sequencing — termite swarm, mosquito, rodent winter",
      body: "Texas pest seasonality is mechanical: subterranean termites swarm Feb-May, mosquitoes peak May-Sep, rodents move indoors Oct-Jan. The shops winning the recurring book wire automated recall sequences off the PestPac/FieldRoutes calendar — termite inspection bumps in January, mosquito add-ons in April, rodent winterization in September. SMS + email + auto-call on lapsed annuals. The seasonality is free demand — the operators capturing it are the ones with the calendar wired. Every $295 termite annual converted = $885 over 3 years on the same property.",
    },
  ],

  toolsBody:
    "Your dispatch board, route engine, billing system, and call layer already exist. The PE rollups (Rollins, Anticimex, Aptive, Hawx, Killingsworth) standardize the same setup on Day 1. The question is whether you've turned on the features you already pay for.",
  toolsList: [
    "PestPac (Workwave) — multi-unit / commercial-heavy, route optimization + ACH auto-debit",
    "FieldRoutes (ServiceTitan-owned) — powers 40 of the PCT Top 100, native card-on-file",
    "PestRoutes — direct FieldRoutes competitor, strong route engine",
    "Briostack — mid-tier, residential-focused, auto-rebill native",
    "GorillaDesk — $49+/mo, solo + small-shop entry point",
    "ServSuite — enterprise + commercial complex contracts",
    "Pocomos / Fieldster — cheap entry alternatives",
    "Call Porter / SkipCalls / Specialty Answering — pest-trained answering services, integrate with PestPac + FieldRoutes",
    "Twilio — missed-call text-back automation, $0.01/text",
    "Numa — AI receptionist, $300-500/mo, integrates with most PestPac/FieldRoutes deployments",
  ],

  caseStudyHeadline: "Round Rock pilot — closing the recurring-revenue gap on a 3-truck shop.",
  caseStudyBody:
    "A 3-route Round Rock pest shop is the planned 2026 pilot for the four-move stack: PestPac card-on-file + auto-rebill, FieldRoutes geo-routing, Call Porter pest-trained answering integration, and seasonal-recall sequencing off the dispatch calendar. The full operational diff — exact PestPac auto-rebill configuration, FieldRoutes density-routing rules, Call Porter integration spec, seasonal-recall template — will be published when the 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline:
    "Build the recurring book Rollins is paying 6× for — before they offer to do it for you.",
  ctaBody:
    "Rollins took Romex Pest Control on April 2 — $29.7M revenue, 200+ employees, Austin / DFW / San Antonio / OKC. Anticimex bought 3 DFW shops in one day in June. Citation Capital took Aptive in August. The shops fetching 6× all hit 80% recurring revenue first. The ones stuck at 74% sell at 4× — or don't sell at all. ABC Home Services is the named Austin holdout — Jenkins family, 800 employees, since 1949. Build what Rollins is paying for, or be ABC. 30 minutes — I walk the route board, pull your PestPac or FieldRoutes data, your call log, your AR cycle, and I show you in dollars where the next $317K of cash + capacity and $240K on the sale price live. No deck. No pitch. I show you which of the four operator moves pays back first, in the order that lands before the May termite surge.",

  citations: [
    { label: "NPMA / PCO Bookkeepers 2025 Pest Control Industry Cost Study (labor + recurring revenue benchmarks)", url: "https://www.npmapestworld.org/your-business/latest-news/npma-and-pco-bookkeepers-release-comprehensive-2025-pest-control-industry-cost-study/" },
    { label: "PCT 26th Strategic Analysis (industry size + operator survey)", url: "https://www.pctonline.com/page/pct-npma-annual-research-reports/" },
    { label: "ServiceDirect — Home Service Call Performance Report (97% perceived vs 66% actual)", url: "https://blog.servicedirect.com/home-service-call-performance-report" },
    { label: "PMP Magazine — Rollins acquires Romex Pest Control (April 2, 2026)", url: "https://www.mypmp.net/" },
    { label: "PCT Magazine — Anticimex Texas entry (DFW, June 2025)", url: "https://www.pctonline.com/" },
    { label: "Citation Capital → Aptive transaction (August 2024)", url: "https://www.aptivepest.com/" },
    { label: "Rollins Inc. — 2025 acquisition activity ($310M, 32 bolt-ons in 2024)", url: "https://investor.rollins.com/" },
    { label: "Capstone Partners — Pest Sector M&A Update", url: "https://www.capstonepartners.com/insights/article-pest-control-sector-update/" },
    { label: "Lion Business Brokers — TX Pest Control Q1 2025", url: "https://lionbusinessbrokers.com/pest-control-industry-update-q1-2025/" },
    { label: "FieldRoutes — Retention + Recurring Revenue Research", url: "https://www.fieldroutes.com/blog/retain-pest-control-customers" },
    { label: "Spring Green — Route Density Math", url: "https://springgreenfranchise.com/maximizing-route-density-the-1-factor-in-pest-profitability/" },
    { label: "Call Porter — Pest Control Missed-Call Cost Analysis", url: "https://callporter.com/blog/why-missed-calls-are-costing-pest-control-pros-thousands-and-how-to-fix-it/" },
  ],
};
