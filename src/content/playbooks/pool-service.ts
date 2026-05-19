import type { PlaybookContent } from "./types";

export const poolService: PlaybookContent = {
  slug: "pool-service",
  vertical: "Residential Pool Service",
  verticalShort: "Pool Service",
  title: "The Repair Margin Playbook",
  subtitle:
    "Why a typical 4-truck Austin pool shop leaves $216K of profit on the same revenue — and the four operator moves SPS PoolCare (6 miles up the road) runs across all 191 shops it has bought.",
  edition: "16 / Pool Service Edition / 2026",

  introBody:
    "US pool service is $8.8B and fragmented — 78,000+ businesses, no player above 5% share. Texas alone: 1.1M residential pools, 2,100+ service companies. SPS PoolCare — headquartered six miles from your prospect in North Austin — closed its 191st acquisition on January 23 (Pool Troopers, $57M revenue, 16,182 accounts). Combined entity: $157M revenue, 42,000 weekly recurring services, 1,000+ employees, 19 markets. The gap between an independent shop and a well-run one isn't agronomy or chemistry. It's the playbook the rollups run on Day 1: repair attach, saltwater conversion, route density, missed-call capture. This playbook is for the owner who wants to build the book SPS pays for — without waiting for the unsolicited offer.",

  patternHeadline: "The route runs. The repairs pay.",
  patternBody:
    "Four leaks define an independent pool-service P&L in 2026. Service margins run 15-40%. Repair margins run 30-60% — and 42% of pros are actively expanding into repair this year (Skimmer 2026 State of Pool Service Report). The shops not pulling the repair lever are leaving the highest-margin revenue in the vertical on the table. Saltwater conversion is the second under-pulled lever: $2K-4.5K install, 60% margin, $1K-3K equipment add-on, and a salt-cell replacement annuity every 3-7 years at $600-1,500. Route density is the third — the densest operators hit 75 pools/truck vs the 60-pool average. And missed-call after-hours capture is the fourth — 85% of voicemailed pool callers never call back. SPS PoolCare is consolidating Texas market-by-market — Austin, DFW, Houston, Arlington — and the checklist they run on Day 1 is exactly the four moves above. The rollup is the proof, not the threat.",
  patternStats: [
    {
      value: "15-40% vs 30-60%",
      label:
        "Service margin vs repair margin. Skimmer 2026 report: 42% of pros are actively expanding into repair this year. The route covers payroll. Repairs are the business.",
      source: "Skimmer 2026 State of Pool Service Report",
    },
    {
      value: "$157M / 191",
      label:
        "SPS PoolCare's combined revenue after taking Pool Troopers Jan 23 — 191st acquisition. 42,000 weekly services, 1,000+ employees, +65% earnings-power lift. HQ: North Austin. Six miles from your prospect.",
      source: "Pool & Spa News, Feb 2026 + SPS PoolCare press release",
    },
    {
      value: "3-5× → 12×+",
      label:
        "What Splash (Asymmetric Capital Partners) pays at acquisition vs the multiple they exit at — pulled from their published investor memo. The spread is the playbook they run on Day 1.",
      source: "Asymmetric Capital Partners — Splash investment memo",
    },
    {
      value: "$2K-4.5K + annuity",
      label:
        "Saltwater conversion install (60% margin) plus salt-cell replacement every 3-7 years at $600-1,500. Highest-margin upsell in pool service. Most independents never pitch it.",
      source: "Skimmer — Breaking into Pool Repairs + High-Margin Services",
    },
  ],

  mathHeadline: "$216K of profit. Same revenue.",
  mathBody:
    "Representative independent Austin pool shop: 4 trucks, ~240 accounts at $215/mo recurring (SPS's own blended rate from their financials) = ~$620K recurring + ~$200K repair = ~$820K revenue. Four leaks at this scale:",
  mathRows: [
    {
      label: "Repair-attach gap — every route stop flags pump/heater/SWG age, auto-triggers upsell call",
      value: "= $46K profit",
    },
    {
      label: "Equipment-age upsell — pump replace $1,500, salt cell $700-1,500, on accounts with gear >7 yrs",
      value: "= $16K + replacement annuity",
    },
    {
      label: "Saltwater conversion — $2K-4.5K install, 60% margin, $1K-3K equip + compounding cell-replacement",
      value: "= $18K + compounding",
    },
    {
      label: "Route density — 60 → 75 pools/truck via Skimmer/Pool Brain geo-routing on existing geography",
      value: "= $116K",
    },
    {
      label: "Conservative profit recovered, year one (same revenue)",
      value: "= $216,000",
    },
  ],
  mathConclusion:
    "$216K of profit recovered on the same revenue. None of it requires new accounts, a fifth truck, or a price hike. SPS PoolCare is your neighbor. Splash buys independent shops at 3-5× and exits at 12×+. The 4-move gap is what they run on Day 1 — the difference between selling at 4× and 12×, same shop.",

  quotes: [
    {
      text: "We had the rare opportunity to take the top two companies in the industry and pull them together.",
      attribution: "Lance Martin, CEO, SPS PoolCare — on the Pool Troopers acquisition (Pool & Spa News, Feb 2026)",
    },
    {
      text: "More than 20 different private equity firms have their feelers out in this industry right now.",
      attribution: "Dennis Marunde, President, Arvidson Pools — Pool & Spa News",
    },
    {
      text: "They never return my calls.",
      attribution: "Real Austin customer of Cody Pools (largest Austin pool builder) — ComplaintsBoard, 2010",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Repair-attach SOP on every route stop",
      body: "Service margins run 15-40%. Repair margins run 30-60%. The independent shops leaving money on the table are the ones running service-only routes with no eyes on the equipment. The move: every route stop logs pump age, heater age, salt-cell age, filter age in Skimmer or Pool Brain — auto-flag any account with gear >7 years old for an upsell call from the office that week. 42% of pros are expanding into repair this year (Skimmer 2026 report) — the ones doing it well have the data layer in place first, the truck second. On a 240-account book, a 20% repair-attach lift = $46K of additional profit on the same routes you're already running.",
    },
    {
      number: "02",
      title: "Saltwater conversion playbook — the highest-margin upsell you're not pitching",
      body: "Saltwater conversion is $2,000-$4,500 install (60% margin), $1,000-$3,000 equipment add-on, and — the part most operators miss — a salt-cell replacement annuity every 3-7 years at $600-$1,500. The cell wears out. The customer is locked in. Your only competitor for the replacement is the customer's willingness to call Pinch a Penny. Most independents never pitch the conversion because it feels like a one-time installer's job. It isn't. It's the highest-margin recurring revenue stream pool service has, and Skimmer's 2026 industry report confirmed it as the #1 upsell expansion lever this year. On a 240-account book at 10% conversion = $18K cash year one + compounding cell-replacement revenue for the life of the pool.",
    },
    {
      number: "03",
      title: "Route density — 60 → 75 pools/truck via Skimmer/Pool Brain geo-routing",
      body: "The labor line is the lever in pool service. The densest operators in the country (Pinnacle Pool, Premier Pools service arm, the SPS Texas markets) hit 75 pools/truck/day vs the 60-pool industry average. The 15-stop gap × 4 trucks × 250 service days × $30/stop net margin = $116K of unbooked capacity sitting in your existing route geography. The move: geocode every account in Skimmer or Pool Brain, cluster by ZIP + day-of-week, force the dispatcher to assign by density-of-stop, not chronological signup order. Sealey Business Brokers' valuation guidance is explicit: route density trumps account count when PE values a shop. The density is the lever and the multiple at sale.",
    },
    {
      number: "04",
      title: "Missed-call text-back + after-hours capture",
      body: "85% of voicemailed pool callers never call back (industry-typical). The fix isn't hiring a CSR. It's wiring a missed-call text-back via Twilio ($0.01/text) or Numa AI receptionist ($300-500/mo) into your existing phone line. Auto-text within 60 seconds of any missed call: 'Saw your call — what's the pool issue? Quote within the hour.' Pool-aware answering services (PoolPhone, Specialty Answering) integrate with Skimmer and Pool Brain and book directly into your dispatch board. May call volume on pool service triples (post-cold-snap + algae season + equipment failures). The shops that win the spring rush have this wired by April. The ones that don't, lose them to the next-listed competitor.",
    },
  ],

  toolsBody:
    "Your route engine, billing system, repair workflow, and call layer already exist. SPS Texas, Splash, and every other consolidator run the same stack on Day 1. The question is whether you've turned on the features you already pay for.",
  toolsList: [
    "Skimmer — route + chemistry + service-stop data, the industry standard for independents",
    "Pool Brain — route + customer mgmt, strong on chemistry tracking + repair workflow",
    "Pool Office Manager — accounting + scheduling, $200-500/mo, reporting-heavy",
    "HydroScribe — $200-500/mo, reporting-focused alternative",
    "ServiceTitan — enterprise-tier, standard at SPS-acquired shops",
    "Twilio — missed-call text-back, $0.01/text, integrates with everything",
    "Numa — AI receptionist, $300-500/mo, pool-vertical-aware",
    "PoolPhone / Specialty Answering — pool-trained answering services, book into Skimmer + Pool Brain",
    "Sealey Business Brokers — pool-shop valuation + route-density appraisal",
  ],

  caseStudyHeadline: "Austin pilot — closing the repair-margin gap on a 4-truck shop.",
  caseStudyBody:
    "A 4-truck Austin pool shop (~240 active accounts, ~$820K revenue) is the planned 2026 pilot for the four-move stack: Skimmer-tracked repair-attach SOP, saltwater conversion playbook with Pinch a Penny–competitive pricing, geo-routed density tightening, and Twilio text-back. The full operational diff — Skimmer equipment-age flagging template, saltwater conversion proposal template, Pool Brain density-routing rules, Twilio integration spec — will be published when the 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline:
    "Build the repair book SPS pays for — before they take your accounts on the bid.",
  ctaBody:
    "SPS PoolCare is headquartered six miles from you. In January they closed their 191st acquisition (Pool Troopers, $57M revenue, 16,182 accounts) — combined $157M revenue, 42,000 weekly recurring services, 1,000+ employees across 19 markets. SPS Texas markets in press release: Austin, DFW, Houston, Arlington. Splash (Asymmetric Capital Partners) buys independent shops at 3-5× and exits at 12×+ — pulled from their published investor memo. The gap isn't agronomy or chemistry. It's the playbook. Repair attach. Saltwater conversion. Route density. Missed-call capture. The independent shops getting bid at 6×+ all hit those four first. 30 minutes — I ride your route board, pull your Skimmer or Pool Brain data, your equipment-age log, your repair-attach rate, your call log. No deck. No pitch. If I can't find $150K of recoverable profit inside the four operator moves, you don't owe me anything. If I can — I show you which one pays back first, in the order that lands before the May spring rush.",

  citations: [
    { label: "Skimmer 2026 State of Pool Service Report (margin + repair-expansion data)", url: "https://www.getskimmer.com/blog/skimmer-releases-2026-state-of-pool-service-report-highlighting-a-more-disciplined-digital-industry" },
    { label: "Pool Magazine — The State of Pool Service in 2026", url: "https://www.poolmagazine.com/pool-service-news/the-state-of-pool-service-in-2026-the-industry-isnt-slowing-down-its-tightening-up/" },
    { label: "SPS PoolCare press release — Pool Troopers acquisition (Jan 23, 2026)", url: "https://spspoolcare.com/news/nations-largest-pool-service-company-sps-poolcare-acquires-leading-pe-backed-competitor/" },
    { label: "PE Professional — SPS PoolCare adds Pool Troopers ($57M deal)", url: "https://peprofessional.com/2026/01/sps-poolcare-adds-pool-troopers-closes-its-largest-acquisition-to-date/" },
    { label: "Community Impact Austin — SPS local HQ (North Austin)", url: "https://communityimpact.com/austin/northwest-austin/business/2026/02/19/north-austin-based-sps-poolcare-acquires-pool-troopers/" },
    { label: "Asymmetric Capital Partners — Splash investment memo (3-5× buy → 12× exit)", url: "https://www.acp.vc/post/diving-in-announcing-our-investment-in-splash" },
    { label: "Pool & Spa News — Consolidation in the Pool & Spa Industry", url: "https://www.poolspanews.com/business/consolidation-and-the-pool-spa-industry_o" },
    { label: "KMF Advisors — Pool Service Business Profitability 2026", url: "https://www.kmfbusinessadvisors.com/pool-service-business-profitability-2026/" },
    { label: "Sealey Business Brokers — Route Density Valuation", url: "https://www.sealeybb.com/pool-route-valuation-secrets-revealed-why-your-route-density-trumps-your-account-count/" },
    { label: "Skimmer — Breaking into Pool Repairs + High-Margin Services", url: "https://www.getskimmer.com/blog/breaking-into-pool-repairs-and-high-margin-services-insights-from-the-experts" },
    { label: "Austin Energy — Pool Pump Rebate (TX-specific context)", url: "https://savings.austinenergy.com/residential/offerings/appliances-and-equipment/pool-pump" },
    { label: "ComplaintsBoard — Cody Pools Austin (real customer complaint, 2010)", url: "https://www.complaintsboard.com/cody-pools-breach-of-contract-c251221" },
  ],
};
