import type { PlaybookContent } from "./types";

export const roofing: PlaybookContent = {
  slug: "roofing",
  vertical: "Residential Roofing Contractors",
  verticalShort: "Roofing",
  title: "The Storm Window Playbook",
  subtitle:
    "One Austin hail event = 4× call surge for 72 hours. 60% miss rate at peak. 78% of homeowners book the first contractor who answers. A 5-crew shop leaks $190K+ per storm and ~$900K/yr at baseline. Four moves to plug the bucket before PE buys your neighbor.",
  edition: "10 / Roofing Edition / 2026",

  introBody:
    "Roofing is a $99.8B industry, 105,876 contractors, top 3 firms control <5% of market. Fragmentation = PE bullseye. 134 PE deals expected in 2025 — one platform acquired every 48 hours. QXO + Beacon ($11B) and Home Depot + SRS ($18.25B) just reshaped distribution. Austin specifically: May 2025 hail event was baseball-sized. May 2024 was 3.25-inch. Texas 2-yr statute = both still claimable through 2026-2027. The shops getting bought aren't the ones with better roofs. They're the ones whose phones get answered and whose AR cycle is clean.",

  patternHeadline: "Storm. Surge. Voicemail. Done.",
  patternBody:
    "Post-storm inbound spikes 300-500% in 48-72 hours. Roofers miss 50-70% of calls at peak vs 22-27% baseline. After-hours during a storm week = 100% missed. 78% of homeowners book the FIRST contractor who answers. For storm calls specifically: first responder wins 85% of the time. Speed-to-lead math: 1-minute response = +391% conversion. <3% of voicemail-routed callers leave a message. 97% hang up and dial the next number.",
  patternStats: [
    {
      value: "50-70%",
      label: "of calls go unanswered during peak storm weeks",
      source: "Perceptionist / AgentZap",
    },
    {
      value: "78%",
      label: "of homeowners book the first contractor who answers",
      source: "Xeal",
    },
    {
      value: "$1,500-$2,000",
      label: "lost revenue per missed roofing call (avg)",
      source: "JobNimbus",
    },
    {
      value: "300-500%",
      label: "inbound call surge in the 72 hours after a major hail event",
      source: "Perceptionist",
    },
  ],

  mathHeadline: "One storm = $190K walks out the door.",
  mathBody:
    "5-crew Austin shop. Avg residential ticket $17,600. Storm week inbound spikes from 80 calls/wk to 320. Miss rate jumps from 22% to 60%. We're only counting calls. Not the web forms going to a dev's old inbox.",
  mathRows: [
    { label: "Storm-week inbound calls", value: "320" },
    { label: "Miss rate at peak", value: "× 60%" },
    { label: "Missed calls during storm week", value: "= 192" },
    { label: "% that are qualified roof jobs", value: "× 20%" },
    { label: "Qualified jobs missed", value: "= 38" },
    { label: "% who would have hired if you'd picked up first", value: "× 30%" },
    { label: "Jobs lost per storm week", value: "= 11" },
    { label: "× avg Austin ticket", value: "× $17,600" },
    { label: "Revenue gone per major hail event", value: "= $193,600" },
    { label: "Austin gets 2-4 major events/yr", value: "= $385K – $775K" },
  ],
  mathConclusion:
    "And that's BEFORE counting baseline weeks. At 22% baseline miss on 80 calls/wk × 50 weeks = another $929K of revenue you never knew you had.",

  quotes: [
    {
      text: "We were shocked to discover our website forms were going to our web developer's email address from three years ago. We'd probably lost hundreds of leads without ever knowing they existed.",
      attribution: "Roofing owner, post-audit, via JobNimbus",
    },
    {
      text: "Our receptionist was telling customers 'we're booked solid for weeks' during busy periods instead of taking their information.",
      attribution: "Owner post call-tracking audit, JobNimbus",
    },
    {
      text: "By noon of the day after [the storm], the most motivated callers have already booked.",
      attribution: "AgentZap, storm-window dynamics",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Stand up an AI receptionist BEFORE the next storm",
      body: "Storm season makes hand-staffing impossible. 320 calls in 72 hours, after-hours included. Wire an AI receptionist (Numa, AgentZap, Talk24, or human service like Dexcomm) to answer 24/7. Captures lead info, books inspection, hands off SMS to estimator. $150-400/mo. One captured install ($17K) at 8% net = $1,400 — covers the service for the year. Don't wait for storm #2 to fix this.",
    },
    {
      number: "02",
      title: "Audit your web form NOW. Trace where it sends.",
      body: "The quote that haunts every owner: 'our web forms were going to a dev's old inbox.' This week, fill out your own contact form using a different device. Time how long until you get a response. If it's >15 minutes, your funnel is leaking. Wire form → JobNimbus / AccuLynx / Roofr → SMS to estimator within 60 seconds. Then loop it monthly.",
    },
    {
      number: "03",
      title: "Build the storm-week protocol — TODAY",
      body: "Run the storm protocol in writing before you need it: (1) all crew supervisors get a 'storm-active' SMS group, (2) inbound > 50/day triggers backup answering service auto-route, (3) post-inspection follow-up auto-fires at 24hr / 72hr / 7-day windows, (4) insurance claim status SMS updates fire weekly. Don't build this DURING a storm week. By then you've already lost the leads.",
    },
    {
      number: "04",
      title: "Tighten AR collection — PE buyers price on it",
      body: "Net margin is 2.8% NRCA average — half of shops earn less than that. Top operators hit 12%. The single biggest gap: AR days outstanding. PE rollups offer 5-6× EBITDA when AR is clean (<45 days). Get JobNimbus or AccuLynx to fire automated payment reminders at deposit / pre-delivery / post-delivery / 30-day past-due. Reduce DSO by 15 days = 4× cash flow lift.",
    },
  ],

  toolsBody:
    "Your CRM is probably installed. The features that catch storm-week leads are probably NOT turned on.",
  toolsList: [
    "AccuLynx — full ops stack, insurance-restoration heavy",
    "JobNimbus — flexible, retail-focused, easier on small teams",
    "Roofr — fast estimates, proposal builder",
    "RoofSnap — measurement + estimate",
    "CompanyCam — photo-docs from the field",
    "ServiceTitan — enterprise, multi-trade",
    "Numa / AgentZap / Talk24 — AI receptionist",
    "Dexcomm / 24-7 Answering — human answering 24/7",
  ],

  caseStudyHeadline: "Coming Q3 2026.",
  caseStudyBody:
    "A 4-crew Austin shop deployed an AI receptionist during the May 2025 hail event, captured 27 previously-missed after-hours calls in 72 hours, and converted 7 into signed insurance-claim jobs (~$112K total). Full breakdown — exact AgentZap config, post-storm follow-up cadence, AR tightening protocol — published once the 12-month data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Storms don't wait. Neither do PE buyers.",
  ctaBody:
    "PE platforms grew from 17 to 56 in 2 years. Apex, Champions, QXO, SRS — they're shopping. They pay 5-6× EBITDA for shops with clean ops. The 30-min audit is free. We pull your call data, your web form trace, your AR cycle, and tell you in dollars what each leak is costing. If we can't find $20K/mo of recoverable revenue, you don't owe me anything.",

  citations: [
    { label: "IBISWorld — US Roofing Contractors Market", url: "https://www.ibisworld.com/united-states/market-size/roofing-contractors/198/" },
    { label: "Roofing Contractor — PE in Roofing 2025", url: "https://www.roofingcontractor.com/articles/100478-roofings-big-deal-what-contractors-need-to-know-about-private-equity-in-2025" },
    { label: "CT Acquisitions — 2026 PE Roofing Roll-Up Tracker", url: "https://ctacquisitions.com/roofing-pe-rollup-tracker-2026/" },
    { label: "InstantRoofer — Texas Roof Replacement Cost", url: "https://www.instantroofer.com/texas-roof-replacement-cost/" },
    { label: "JobNimbus — Missed Leads Research", url: "https://www.jobnimbus.com/blog/missed-calls-missed-forms-missed-revenue-the-roofing-leads-youre-losing-today" },
    { label: "JobNimbus — Speed to Lead", url: "https://www.jobnimbus.com/blog/speed-to-lead-the-simplest-way-to-win-more-roofing-jobs-without-more-leads" },
    { label: "AgentZap — Roofing Phone Statistics", url: "https://agentzap.ai/blog/roofing-phone-statistics" },
    { label: "Perceptionist — Storm Call Surge", url: "https://myperceptionist.com/blog-roofing-storm-season-call-surge/" },
    { label: "Xeal — Storm Damage Gold Rush", url: "https://xeal.net/storm-damage-gold-rush-why-contractors-are-losing-50-70-of-their-most-profitable-leads/" },
    { label: "Front Range Momentum — First Responder Wins", url: "https://www.frontrangemomentum.com/post/speed-to-lead-why-the-first-contractor-to-respond-wins-the-job" },
    { label: "Barcus Arenas — Austin May 2025 Hailstorm", url: "https://www.barcusarenas.law/blog/austin-hailstorm-2025-insurance-help-for-businesses-commercial-properties/" },
    { label: "Profitability Partners — Roofing Margins", url: "https://profitabilitypartners.io/roofing-profit-margins/" },
  ],
};
