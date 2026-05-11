import type { PlaybookContent } from "./types";

export const plumbingElectrical: PlaybookContent = {
  slug: "plumbing-electrical",
  vertical: "Plumbing & Electrical Contractors",
  verticalShort: "Plumbing / Electrical",
  title: "The Voicemail Playbook",
  subtitle:
    "Why 62% of small-shop calls go to a full voicemail box, why 78% of those callers never call back, and the four operator moves to plug $45–$120K of annual leakage — with a Texas-specific lens on the master license bottleneck.",
  edition: "04 / Plumbing & Electrical Edition / 2026",

  introBody:
    "Plumbing is a $170B industry. Electrical is $237B. Both are PE rollup bullseyes right now — Apex Service Partners alone bought ~60 shops in 2025. The shops getting bought have something in common: they answer the phone. The ones being passed over are the ones whose Master is also their dispatcher, whose bookkeeper is also their receptionist, whose answering machine says 'mailbox is full.' This playbook is the field guide for both trades. The pain pattern is the same — emergency-driven, after-hours-heavy, master-license-bottlenecked. The fixes are the same too.",

  patternHeadline: "The mailbox is full. The competitor is two blocks away.",
  patternBody:
    "Small plumbing and electrical shops miss up to 62% of inbound calls during peak demand. 78% of voicemail-reachers won't leave a message. 85% of unanswered callers never call back. The average callback delay across both trades is 4.2 hours — by which time 67% of the lead has already booked the next contractor on the search results page. Layer on Texas's master license bottleneck (one Master per Electrical Contractor unless they own >50%, and a TDLR exam pass rate under 50%) and you have a workforce-supply problem stacked on top of a phone-answering problem.",
  patternStats: [
    {
      value: "62%",
      label: "of calls to small plumbing/electrical shops go unanswered at peak",
      source: "Signpost / Contractor in Charge",
    },
    {
      value: "85%",
      label: "of callers who hit voicemail or get no answer never call back",
      source: "CallbirdAI",
    },
    {
      value: "30–40%",
      label: "of all missed calls happen after business hours",
      source: "Westpark Communications",
    },
    {
      value: "$45–120K",
      label: "average annual revenue loss per contractor from missed calls",
      source: "CallbirdAI study, 1,200+ contractors",
    },
  ],

  mathHeadline: "Every $1K in LSA spend wastes $620 if your phone doesn't answer.",
  mathBody:
    "Single-truck Round Rock plumbing or electrical shop. Conservative volume, peak miss rate. We're only counting the lead-leak side — not the operational hours wasted dispatching to whoever did get through.",
  mathRows: [
    { label: "Inbound calls per week", value: "40" },
    { label: "Missed-call rate (peak)", value: "× 35%" },
    { label: "Missed calls per week", value: "= 14" },
    { label: "Weeks per year", value: "× 50" },
    { label: "Missed calls per year", value: "= 700" },
    { label: "Avg ticket (service mix)", value: "× $450" },
    { label: "If 25% would have booked", value: "× 25%" },
    { label: "Annual leak", value: "= $78,750" },
    { label: "Plus: 1 missed water heater install / mo", value: "+$32,400" },
  ],
  mathConclusion:
    "$110K of recoverable revenue. From the calls already coming in. Before you spend another dollar acquiring leads.",

  quotes: [
    {
      text: "Anyone else losing jobs to missed calls? Missed 47 calls in one month — only 5 left voicemail.",
      attribution: "PlumbingZone, 2-employee shop owner",
    },
    {
      text: "On-call system is a total mess. Passing around an on-call phone isn't realistic — guys claim no service.",
      attribution: "ElectricianTalk forum thread",
    },
    {
      text: "I have an answering service. What I need now is a scheduling service.",
      attribution: "ElectricianTalk thread title",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Stop letting the voicemail box fill up",
      body: "The most expensive missed call is the one where the customer hears 'this mailbox is full' and writes a 1-star Google review about it. Audit your phone setup this week: ensure voicemail-to-email is on, the box is cleared daily, and missed calls auto-text within 60 seconds. For under $50/mo, services like CallRail or even Twilio give you a real missed-call SMS layer.",
    },
    {
      number: "02",
      title: "Set a 5-minute response SLA across every channel",
      body: "MIT lead-response data shows 5-min responses are 21× more likely to qualify than 30-min responses. For emergency trades that ratio is closer to 100×. Wire ServiceTitan, Housecall Pro, or Jobber to text-back every missed call AND every web form within 60 seconds. Acknowledgement first, callback second. Most owners think this is a tech problem. It's a discipline problem.",
    },
    {
      number: "03",
      title: "Build a service membership program — not a coupon",
      body: "Plumbing or electrical members spend 2× annually and are 3× more likely to convert when their system fails. Most shops sell membership once at close-of-call. Build a multi-step funnel instead: post-service SMS pitch, 30-day re-pitch, anniversary discount. A well-built program lifts annual revenue per customer 20–40%, sometimes 50%+ of total revenue. (Plumbing example: $199/yr Platinum tier with priority emergency response.)",
    },
    {
      number: "04",
      title: "Solve the master-license bottleneck before the trucks scale",
      body: "Electrical especially: a single Master can only legally cover one Electrical Contractor unless they own >50% of the company. Texas TDLR Master exam first-attempt pass rate is under 50%. If you're growing, your bottleneck is your Master, not your trucks. Build a Journeyman-to-Master development pipeline (12,000 hours required) and partner with NECA / IEC training programs early. Plumbing has a parallel issue (now 2 years to Master, down from 4).",
    },
  ],

  toolsBody:
    "Your tooling is largely shared with HVAC. Pick by team size, not feature checkbox.",
  toolsList: [
    "ServiceTitan — 25+ tech shops, deep reporting, expensive",
    "Housecall Pro — 5–15 truck shops, mobile-first",
    "Jobber — 2–10 tech teams, lowest TCO",
    "FieldEdge / FieldPulse / Workiz / Service Fusion — mid-tier",
    "Google LSA — typical CPL $20–$70 plumbing, $25–$80 electrical",
    "Numa / Talk24 / AgentZap — AI receptionist for after-hours",
    "Dexcomm / 24/7 Answering — human answering",
    "PHCC (plumbing) + NECA / IEC (electrical) — training + advocacy",
  ],

  caseStudyHeadline: "Coming Q4 2026.",
  caseStudyBody:
    "A 3-truck plumbing shop in Cedar Park reduced after-hours missed calls 71% and converted three previously-lost emergency calls into water heater installs averaging $3,200 each in their first 30 days using moves 01 and 02. Full breakdown — voicemail audit findings, exact SMS auto-reply copy, dispatch SLA — will be published here once the 90-day data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "PE is buying your neighbor. They'll buy you next — or they won't.",
  ctaBody:
    "Apex, Champions, Climate Solutions, Evolution — they're all shopping in Texas. The shops getting bought are the ones with clean ops. The 30-min audit is free. We pull your call data, your dispatch logs, your AR cycle, and we tell you in dollars what each leak is costing. If we can't find $5K/mo of recoverable revenue, you don't owe us anything. If we can — we show you exactly which of these four moves to run first.",

  citations: [
    { label: "IBISWorld — Plumbers Industry", url: "https://www.ibisworld.com/united-states/industry/plumbers/1946/" },
    { label: "ServiceTitan — Plumbing Industry Statistics", url: "https://www.servicetitan.com/blog/plumbing-industry-statistics" },
    { label: "Arizton — US Electrical Contractors Market", url: "https://www.arizton.com/market-reports/us-electrical-contractors-market" },
    { label: "TSBPE — Texas Master Plumber Licensing", url: "https://tsbpe.texas.gov/license-types/master-plumber/" },
    { label: "TDLR — Master Electrician Requirements", url: "https://www.tdlr.texas.gov/electricians/apply/individuals/master-electrician.htm" },
    { label: "Signpost — Missed Calls Lost Revenue", url: "https://www.signpost.com/blog/how-much-revenue-do-home-services-businesses-lose-from-missed-calls/" },
    { label: "CallbirdAI — Contractors Lose Money on Missed Calls", url: "https://www.callbirdai.com/blog-contractors-lose-money-missed-calls" },
    { label: "PlumbingZone — Anyone else losing jobs to missed calls", url: "https://www.plumbingzone.com/threads/anyone-else-losing-jobs-to-missed-calls.91027/" },
    { label: "ElectricianTalk — On-call shifts thread", url: "https://www.electriciantalk.com/threads/on-call-shifts.303508/" },
    { label: "American Investment Council — PE in Plumbing & HVAC", url: "https://www.investmentcouncil.org/icymi-wsj-highlights-how-private-equity-transforms-plumbing-and-hvac-small-businesses-boosting-wages-and-growth/" },
    { label: "HomeAdvisor — Tankless Water Heater Cost", url: "https://www.homeadvisor.com/cost/plumbing/install-a-tankless-water-heater/" },
    { label: "HomeGuide — Electrical Panel Replacement Cost", url: "https://homeguide.com/costs/cost-to-replace-electrical-panel" },
  ],
};
