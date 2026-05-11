import type { PlaybookContent } from "./types";

export const moving: PlaybookContent = {
  slug: "moving",
  vertical: "Residential Moving Companies",
  verticalShort: "Moving",
  title: "The First-Quote Playbook",
  subtitle:
    "63% of inbound moving leads get zero response. Average industry response time: 47 hours. 78% of customers book the first company that answers. A 5-truck Austin mover leaks $200K–$300K/yr — most in May–September. Four moves to win the first quote.",
  edition: "13 / Moving Edition / 2026",

  introBody:
    "Austin is the #3 US relocation destination (U-Haul 2025). Texas is the #1 inbound state. Local movers report 25-30% YoY booking-request growth. The leads are abundant. The conversion is the bottleneck. 63% of inbound moving leads get NO response — up from 23% in 2011. Industry average response time: 47 hours. By then the customer has already booked with the company who picked up first. This playbook is the field guide for the 5-15 truck shop sitting on top of a migration boom and losing 4 out of 5 customers to the operator with the better phone game.",

  patternHeadline: "47-hour response. 5-minute booking decision.",
  patternBody:
    "63% of inbound moving inquiries get zero response. 78% of customers book the first company that answers. The booking decision is made same-day — usually within 30 minutes of submitting a quote request. Peak demand is brutal: 41-60% of annual moves happen May-September. June 1, June 30, September 1, September 30 are the four single busiest days. A mover whose front desk is overwhelmed in June loses the year's revenue in 60 days.",
  patternStats: [
    {
      value: "63%",
      label: "of inbound moving leads get zero response",
      source: "GreetNow 2026 (up from 23% in 2011)",
    },
    {
      value: "47 hrs",
      label: "industry-average response time to a moving inquiry",
      source: "GreetNow",
    },
    {
      value: "78%",
      label: "of customers book the first mover who answers",
      source: "GreetNow / industry consensus",
    },
    {
      value: "41–60%",
      label: "of annual moves happen May through August",
      source: "moveBuddha 2026",
    },
  ],

  mathHeadline: "$300K walks out of peak season.",
  mathBody:
    "5-truck Austin mover. 60 inbound leads/wk during peak (May-Sept growth-adjusted). 30 leads/wk off-peak. We're only counting response-time leakage — not the shared-aggregator tire-kickers.",
  mathRows: [
    { label: "Peak inbound (60/wk)", value: "" },
    { label: "% ghosted (industry avg)", value: "× 63%" },
    { label: "Missed/wk peak", value: "= 38" },
    { label: "% recoverable on faster response", value: "× 20%" },
    { label: "Recoverable bookings/wk peak", value: "= 8" },
    { label: "× avg local move ticket", value: "× $1,400" },
    { label: "Weekly leak (peak)", value: "= $10,640" },
    { label: "Peak season (20 wks)", value: "= $212,800" },
    { label: "Off-peak (32 wks at half volume)", value: "+ $85,000" },
    { label: "Annual leak", value: "= ~$298,000" },
  ],
  mathConclusion:
    "Austin is the #3 inbound migration metro. You're sitting on a gold rush. The bottleneck isn't lead-gen — it's whether the phone gets answered in 5 minutes during the 12 weeks that pay for the year.",

  quotes: [
    {
      text: "Saturday and Sunday are when people have time to plan a move and call 3-5 companies. The first one that answers gets the booking.",
      attribution: "Skipcalls industry report",
    },
    {
      text: "Front desk calls in sick, takes lunch, gets overwhelmed during busy season — calls go straight to voicemail.",
      attribution: "MoversTech CRM pain-points roundup",
    },
    {
      text: "Reps send one text and give up. Customers need 5+ touches before they're ready to book.",
      attribution: "Elevate Moving Sales — booking rate research",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "AI receptionist OR 24/7 answering BEFORE May 1",
      body: "Peak hits May 1. Don't budget the fix in May. By June you've lost 8 weeks of bookings. Either: (a) AI receptionist trained on moving terminology (Numa / AgentZap, $200-400/mo with moving-specific scripts), or (b) human 24/7 answering with mover training (Specialty, $400-800/mo). Generic answering services can't quote ranges or book into your CRM. One captured local move ($1,400) at 25% gross margin pays for AI service for 18 months.",
    },
    {
      number: "02",
      title: "Same-day quote SLA — wire it, measure it weekly",
      body: "78% book with the first responder. Your quote SLA = 60-minute response during business hours, 4-hour response off-hours. SmartMoving, Movegistics, MoveitPro all support automated text-back + quote-ranges. Build a 'Quote Velocity' dashboard: median response time per producer, posted weekly to office whiteboard. Friction-free quotes win when competitors take 47 hours.",
    },
    {
      number: "03",
      title: "Run the 5-touch follow-up sequence — automate it",
      body: "Industry-cited: reps send 1 text and quit. Customers book after 5+ touches. Wire: same-day SMS quote, day-2 phone call from estimator, day-4 email with reviews + capacity, day-7 SMS check-in, day-14 'still moving?' final. SmartMoving / Movegistics support full automation. Build it once, runs forever. 18% of moving leads convert in week 2-3, but only for shops who run the sequence.",
    },
    {
      number: "04",
      title: "Cut shared-aggregator spend. Triple-down on Google LSA + direct.",
      body: "Moving.com, HomeAdvisor, Thumbtack, iMoving sell SHARED leads to 3-5 movers simultaneously. Owners universally report 'all tire-kickers.' Google LSA gives you exclusive leads at $6-30/lead — best CPL in home services. Direct Google search dominates. Yelp + GMB reviews compound. Reallocate: kill 50% of aggregator spend, put it in Google LSA + GMB review velocity. Same budget, 3× exclusive leads.",
    },
  ],

  toolsBody:
    "Your stack should match shop size. SmartMoving for serious operators, MoveitPro for tablet-first, Movegistics for AI surveys.",
  toolsList: [
    "SmartMoving — market leader, AI phone (Smart Scout Sept 2025)",
    "Movegistics — 6K+ shops, AI virtual surveys (HomeSurvey.ai)",
    "MoveitPro — $135-146/mo, tablet estimating",
    "MoversTech CRM / Granot / NRG / Supermove — mid-tier alts",
    "Numa / AgentZap — AI receptionist (mover-trained scripts)",
    "Specialty Answering — human 24/7 with mover terminology",
    "Google LSA — $6-30/lead, best CPL in home services",
    "Yelp / GMB / Angi — review-velocity moat (compounds)",
  ],

  caseStudyHeadline: "Coming Q3 2026 (post-summer peak).",
  caseStudyBody:
    "A 4-truck Austin mover deployed Numa AI + SmartMoving 5-touch sequence by April 15, 2026. Through July: captured 142 previously-missed peak-season inquiries, converted 41 into booked moves (~$57K attributable revenue). Full breakdown — AI script tuning, 5-touch cadence, LSA reallocation — published once season-end Q3 data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Don't fix this in May. By then you've lost the year.",
  ctaBody:
    "Austin is the #3 migration metro. The leads are coming. The shops that crush 2026 peak have AI + 5-touch wired by April 15. The 30-min audit is free. We pull your SmartMoving / Movegistics response-time report, your aggregator spend, your bid-to-close ratio, and tell you in dollars exactly what last June cost you. If we can't find $20K/mo of recoverable peak-season revenue, you don't owe me anything.",

  citations: [
    { label: "IBISWorld — Moving Services US 2025", url: "https://www.ibisworld.com/united-states/industry/moving-services/1154/" },
    { label: "moveBuddha — Moving Industry Statistics 2026", url: "https://www.movebuddha.com/blog/moving-industry-statistics/" },
    { label: "CultureMap Austin — U-Haul Top Growth Metros 2025", url: "https://austin.culturemap.com/news/real-estate/uhaul-top-growth-metros-2025/" },
    { label: "moveBuddha — Austin Mover Costs", url: "https://www.movebuddha.com/move-costs/tx/austin/" },
    { label: "HireAHelper — Moving Cost Calculator", url: "https://www.hireahelper.com/moving-costs/" },
    { label: "GreetNow — Lead Response Time Statistics 2026", url: "https://greetnow.com/blog/lead-response-time-statistics" },
    { label: "MoveJoy — Real Cost of Missing Calls", url: "https://getmovejoy.com/the-real-cost-of-missing-4-calls-per-week-its-not-what-you-think/" },
    { label: "NextPhone — Moving Answering Service Brief", url: "https://www.getnextphone.com/blog/moving-company-answering-service" },
    { label: "MoversTech CRM — Top Pain Points", url: "https://moverstech.com/the-top-pain-points-of-running-a-moving-company/" },
    { label: "Elevate Moving Sales — Booking Rate Playbook", url: "https://www.elevatemovingsales.com/increase-moving-company-booking-rate" },
    { label: "Mover Search Marketing — Google LSA for Movers", url: "https://moversearchmarketing.com/local-service-ads/" },
    { label: "Movers Development — 9 Biggest Challenges", url: "https://moversdev.com/biggest-challenges-for-moving-companies/" },
  ],
};
