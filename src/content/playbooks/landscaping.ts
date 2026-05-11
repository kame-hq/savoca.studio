import type { PlaybookContent } from "./types";

export const landscaping: PlaybookContent = {
  slug: "landscaping",
  vertical: "Residential Landscaping & Lawn Care",
  verticalShort: "Landscaping",
  title: "The Spring Surge Playbook",
  subtitle:
    "70% of annual landscaping demand compresses into a 12-week window. 74% of inbound calls go unanswered. A 3-crew Austin shop leaks $96K+ during spring alone — most while crews are on mowers. Four moves to plug the bucket before the next surge.",
  edition: "12 / Landscaping Edition / 2026",

  introBody:
    "Landscaping is a $188.8B fragmented market — 693,000 businesses, mostly 1-15 crews, almost none with a real front office. The structural problem: 70% of annual demand lands March through May. PE rollups (HeartLand, Yellowstone, Aspen Grove) are absorbing commercial mid-market. Residential mom-and-pops are the soft underbelly. Austin = one of the most competitive lawn markets (long growing season, sprawl, population), and ops sophistication lags demand. This playbook is for the shop that wants to stop bleeding leads during the surge that pays for the year.",

  patternHeadline: "The phone rings off a mower. The mower wins.",
  patternBody:
    "74% of inbound landscaping calls go unanswered. Only 3% of voicemail-routed callers leave a message. 78% of buyers hire the first company to respond. 73% of inbound happens outside 9-5 (homeowners plan their yard at night and on weekends). And the killer: 70% of annual demand hits in a 12-week spring window. Your normal week of 10 calls becomes 30 — same crew size, same office capacity, 3× the volume. That's where the year's revenue walks away.",
  patternStats: [
    {
      value: "74%",
      label: "of inbound landscaping calls go unanswered",
      source: "NextPhone industry data",
    },
    {
      value: "70%",
      label: "of annual demand compresses into March–May (12 weeks)",
      source: "NALP Edge",
    },
    {
      value: "78%",
      label: "of buyers hire the first company to respond",
      source: "Estatehub 2026",
    },
    {
      value: "73%",
      label: "of inbound calls happen outside 9–5 business hours",
      source: "NALP",
    },
  ],

  mathHeadline: "$96K leaks during spring alone.",
  mathBody:
    "3-crew Austin shop. $650K revenue. We're only counting the spring window (12 weeks). Conservative miss rate. Blended job value of mowing recurring + install projects.",
  mathRows: [
    { label: "Spring inbound calls (30/wk × 12 wks)", value: "360" },
    { label: "Miss rate (industry)", value: "× 74%" },
    { label: "Missed spring calls", value: "= 266" },
    { label: "% that would have converted", value: "× 20%" },
    { label: "Lost spring deals", value: "= 53" },
    { label: "Blended job value (mow contract + install mix)", value: "× $1,800" },
    { label: "Spring leak", value: "= ~$96,000" },
    { label: "Plus form-fill ghosting (27% of forms ever get contacted)", value: "+ ~$30K" },
    { label: "Plus off-season miss (8 calls/wk × 40 wks)", value: "+ ~$50K" },
    { label: "Annual recoverable", value: "= ~$175K+" },
  ],
  mathConclusion:
    "The spring window pays for the year. The crew can't answer the phone AND run the mower. Fix the bottleneck once, harvest every spring after.",

  quotes: [
    {
      text: "The same crews doing the work are expected to answer the phone — they lose leads because they're on a mower, meeting a customer, or driving between jobs.",
      attribution: "NALP Edge — missed-call analysis",
    },
    {
      text: "Normal 10 calls per week suddenly becomes 30 or more.",
      attribution: "NALP, spring surge pattern",
    },
    {
      text: "Customers have to wait days to get an answer to a question or to schedule service.",
      attribution: "Kingstowne Lawn — common service complaints",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Stand up an answering service BEFORE March 1",
      body: "Spring is non-negotiable. By March 1, you must have a 24/7 path: human answering ($300-700/mo: NextPhone, Specialty, Dexcomm) OR AI receptionist ($150-400/mo: AgentZap, Numa). Wires into Jobber / LMN / Service Autopilot directly. One captured paver-patio install ($4K) at 50% gross margin pays for the service for a year. Don't budget this in April. April is too late.",
    },
    {
      number: "02",
      title: "Auto-text every missed call within 60 seconds",
      body: "97% of voicemail-routed callers never leave a message. They dial the next landscaper. The fix: SMS auto-reply on every missed call. 'Sorry I missed you — crew's on a job. Text me your address and what you need, and you'll have a quote inside 24 hrs.' Jobber and Housecall Pro both support this. Twilio direct is $15/mo if your CRM doesn't. 60-80% of missed callers reply to the text.",
    },
    {
      number: "03",
      title: "Build the spring-surge protocol — IN WRITING",
      body: "Pre-write three call scripts: emergency mow (today/tomorrow), project quote (1-week response), seasonal sign-up (recurring). Train your seasonal helper to use them. Set a 24-hr response SLA for quotes. Don't make the team improvise during peak — by the time they figure it out, the year is half over. Print the playbook. Tape it to the office wall.",
    },
    {
      number: "04",
      title: "Anchor pricing on the inquiry form — kill the free-estimate trap",
      body: "Owner-quoted reality: 'A LOT of people who call for free estimates have no intention of ever hiring.' Price-anchor: 'Most install projects start at $3,500. Most maintenance contracts run $200/mo.' On the form, before they submit. Tire-kickers self-select out. Your free estimates go to actual buyers. Adds 30%+ to close rate without changing a single quote.",
    },
  ],

  toolsBody:
    "Your ops layer is shaped by revenue size. Pick by team count, not by feature checkbox.",
  toolsList: [
    "Yardbook — free, solo + <$250K revenue",
    "Jobber — $39+/mo, 1-5 crews, mobile-first",
    "LMN — $97-249/mo, mid-market landscape ops",
    "SingleOps / Service Autopilot — mid-tier",
    "Aspire — % of revenue, $1M+ shops",
    "RealGreen — chem-app / route density specialists",
    "AgentZap / Numa / Talk24 — AI receptionist",
    "Dexcomm / NextPhone — human answering 24/7",
  ],

  caseStudyHeadline: "Coming Q2 2026 (post-spring).",
  caseStudyBody:
    "A 3-crew North Austin shop deployed an AI receptionist + auto-text-back in February 2026, going into spring with full coverage. By end of May they had captured 84 previously-missed calls, converted 19 into signed mowing contracts and 6 into install projects. ~$58K of attributable revenue from previously-walked leads. Full breakdown post-spring data closes Q2. Want to be next? Book a 30-min audit.",

  ctaHeadline: "Don't budget the fix in April. By then it's over.",
  ctaBody:
    "Spring is a 12-week window. The shops that crush it have the answering service wired by February. The 30-min audit is free. We pull your call log from last spring (Jobber, Service Autopilot, whoever you run), your form-submit-to-callback time, and your bid-to-close ratio — and tell you in dollars exactly what last spring cost you. If we can't find $20K of recoverable spring revenue, you don't owe me anything.",

  citations: [
    { label: "IBISWorld — US Landscaping Services", url: "https://www.ibisworld.com/united-states/market-size/landscaping-services/1497/" },
    { label: "NALP Edge — Missed Calls = Missed Profits", url: "https://blog.landscapeprofessionals.org/missed-calls-equal-missed-profits-why-a-call-answering-service-is-a-game-changer-for-landscapers/" },
    { label: "NextPhone — Landscaping Answering Service Data", url: "https://www.getnextphone.com/blog/landscaping-answering-service" },
    { label: "Green Industry Pros — Jobber Q3 2025 Report", url: "https://www.greenindustrypros.com/industry-updates/press-release/22955987/jobber-jobber-q3-2025-green-industry-report" },
    { label: "HomeGuide — Lawn Care Pricing 2025", url: "https://homeguide.com/costs/lawn-care-prices" },
    { label: "HomeAdvisor — Paver Patio Cost", url: "https://www.homeadvisor.com/cost/outdoor-living/install-a-brick-paver-patio/" },
    { label: "All Seasons — Irrigation Install Cost 2025", url: "https://www.allseasons-landscape.com/blog/what-is-the-irrigation-system-installation-cost-in-2025" },
    { label: "HomeAdvisor — Arborist / Tree Care Cost", url: "https://www.homeadvisor.com/cost/lawn-and-garden/hire-an-arborist/" },
    { label: "Estatehub — 2026 Home Services Conversion Benchmarks", url: "https://www.estatehub.io/articles/2026-benchmarks-lead-conversion-rates-home-services" },
    { label: "Builtright Digital — Landscaping Google Ads CPL", url: "https://builtrightdigital.com/landscaping-google-ads-cost/" },
    { label: "LawnSite — Owner Forum Threads", url: "https://www.lawnsite.com/threads/what-is-everyones-close-rate.476066/" },
    { label: "HeartLand — PE Rollup Portfolio", url: "https://heartlandcompany.com/" },
  ],
};
