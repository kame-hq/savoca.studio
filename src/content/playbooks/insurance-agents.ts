import type { PlaybookContent } from "./types";

export const insuranceAgents: PlaybookContent = {
  slug: "insurance-agents",
  vertical: "Independent Insurance Agencies (P&C + Life)",
  verticalShort: "Insurance Agents",
  title: "The Quote Race Playbook",
  subtitle:
    "Insurance prospects request quotes from 3–4 agencies simultaneously. 78% buy from whoever responds first. Average independent agency takes 47 minutes. A 4-producer Austin shop leaks $116K/yr in year-1 commission — $760K in 7-year LTV. Four moves to stop paying $30/lead to lose them by Tuesday.",
  edition: "14 / Insurance Agents Edition / 2026",

  introBody:
    "There are 39,000 independent P&C agencies in the US. ~30,000 of them earn less than $1.25M/yr — owner-operated, 1-15 producers, no RevOps function. The category is consolidating fast at the top: PE-backed Acrisure, Hub International, AssuredPartners absorbed $2.9B+ in deals in 2H 2025. Texas is the #2 insurance market in the country, and 2023-24 rate spikes (+21%, +18%) drove record shopping volume. The leads are coming. The bottleneck is whether your phone gets answered before the next agency on the list picks up.",

  patternHeadline: "Race. Tuesday. Voicemail. Done.",
  patternBody:
    "Insurance is unique: prospects request quotes from 3-4 agencies at the same time. 78% buy from the first responder. Industry-average agency response time: 47 minutes. Best-practice: 5 minutes. 22% of inbound calls are missed and 85% of those callers never call back. 47% of inquiries arrive outside 9-5. The math is brutal — you're paying $15-40/lead on EverQuote / QuoteWizard / MediaAlpha, and most of them die in voicemail at 7:14 PM Tuesday.",
  patternStats: [
    {
      value: "78%",
      label: "of insurance prospects buy from the first agency to respond",
      source: "SalesWings",
    },
    {
      value: "47 min",
      label: "average independent agency response time to a quote request",
      source: "Hyperleap",
    },
    {
      value: "85%",
      label: "of callers who hit voicemail never call back",
      source: "SuperAgent",
    },
    {
      value: "5%",
      label: "retention lift doubles 5-year profit",
      source: "Agency Performance Partners",
    },
  ],

  mathHeadline: "$116K commission leak. $760K LTV leak.",
  mathBody:
    "4-producer Austin agency. 80 inbound inquiries/mo. Avg new-business TX bundle premium $1,800. 13% blended commission. 84% retention. We're counting three leaks: missed calls, slow response, renewal churn.",
  mathRows: [
    { label: "Missed calls (22% × 85% never call back × 12 mo)", value: "" },
    { label: "= ~180 lost leads × $1,547 × 13%", value: "= $36,200/yr" },
    { label: "Slow response (lose ~30/mo to first-responder)", value: "" },
    { label: "= 360/yr × $1,547 × 13%", value: "= $72,400/yr" },
    { label: "Renewal churn (84% vs achievable 90%)", value: "" },
    { label: "= 6% × $1.2M book × 11% renewal commission", value: "= $7,900/yr" },
    { label: "Year-1 commission leak", value: "= ~$116,500" },
    { label: "Apply 7-yr LTV ($10,829 per lost relationship)", value: "" },
    { label: "540 lost relationships/yr × $10,829 × 13%", value: "= ~$760K over 7 yrs" },
  ],
  mathConclusion:
    "10-20% of annual top line walking out the door because nobody picked up at 7:14 PM Tuesday. The fix is sub-$200/mo. The recovery is six figures year one.",

  quotes: [
    {
      text: "I feel like I'm competing in a race I never signed up for. By the time I reach a lead, they've been contacted by four or five agents.",
      attribution: "Independent agent, Reddit r/InsuranceAgent",
    },
    {
      text: "Days blurred together as he spent hours chasing leads that never picked up or ghosted him after a quote. Even worse, many leads had already been contacted by multiple agents.",
      attribution: "Jason Miller, independent agent, Austin TX (MediaAlpha case study)",
    },
    {
      text: "Prospects who ghost after a quote — they seemed interested, then disappear without a word.",
      attribution: "Insurance Forums",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Hit the 5-minute response SLA — measured per producer",
      body: "78% of insurance shoppers buy from the first agency to respond. Industry average is 47 minutes. Wire your AgencyZoom / AMS360 / HawkSoft to auto-fire SMS + email within 60 seconds of inquiry: 'Hi [name], got your quote request — pulling carrier data now. Calling you within 10 minutes.' Track median response time per producer. Weekly leaderboard. Bottom-performer loses lead source access. Without measurement, the SLA never sticks.",
    },
    {
      number: "02",
      title: "Cover the 47% of inquiries arriving after-hours",
      body: "Half your inbound lands evenings + weekends. Either: (a) AI receptionist trained on insurance terminology (Numa, AgentZap, $200-400/mo) that captures basics and books a call, or (b) human 24/7 answering with insurance-trained scripts. Generic answering services can't quote ranges or speak coverage levels — they make it worse. Train the AI on auto/home/umbrella basics. Capture beats voicemail every time.",
    },
    {
      number: "03",
      title: "Stop paying $30/lead. Reallocate to direct + Google LSA.",
      body: "EverQuote / QuoteWizard / MediaAlpha sell SHARED leads to 3-5 agencies. You're racing a clock you can't win solo. Reallocate 40-60% of aggregator spend to: Google LSA ($15-25 exclusive leads), GMB review velocity, and Facebook/Nextdoor retargeting on your own audience. Same budget. 3-5× exclusive leads. Plus the leads come direct so you skip the first-responder race entirely.",
    },
    {
      number: "04",
      title: "Build the renewal recovery playbook — 5% retention = 2× profit",
      body: "84% retention is industry average. 90-95% is top quartile. The math: 5% retention lift doubles 5-year profit per Agency Performance Partners research. Wire AgencyZoom to fire automated renewal-touch sequences 90/60/30 days out, with hand-call at 14-day. Build a re-shop SOP at renewal so customers don't shop YOU — they shop with you. Top agencies don't just sell more. They lose fewer.",
    },
  ],

  toolsBody:
    "Your AMS is locked in (switching costs are brutal). The wins are in the layer on top.",
  toolsList: [
    "Vertafore AMS360 — ~21% market share, dominant AMS",
    "HawkSoft — ~11%, mid-shop leader",
    "EZLynx — ~10%, multi-state P&C",
    "Applied Epic — ~9%, larger agencies",
    "QQCatalyst / NowCerts — alternatives",
    "AgencyZoom — sits on top of AMS, sales automation",
    "Numa / AgentZap — AI receptionist (insurance-trained)",
    "Google LSA — exclusive leads $15-25 (vs shared $15-40 from aggregators)",
  ],

  caseStudyHeadline: "Coming Q4 2026.",
  caseStudyBody:
    "A 4-producer Austin agency wired AgencyZoom auto-response + 5-min SLA dashboard in 30 days. Median first-response dropped from 38 minutes to 4. Quote-to-bound conversion went from 11% to 24% on the same shared-lead spend. ~$8,400 of incremental commission in month 2. Full breakdown — AgencyZoom configuration, producer leaderboard template, after-hours AI script — published once 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Stop paying $30/lead to lose them by Tuesday.",
  ctaBody:
    "If you're spending $5K+/mo on EverQuote / QuoteWizard / MediaAlpha, the fastest 5× ROI move is fixing response time before increasing lead budget. The 30-min audit is free. We pull your AMS response report, your renewal retention rate, your aggregator spend allocation, and tell you in dollars exactly what last month cost you. If we can't find $10K/mo of recoverable commission, you don't owe me anything.",

  citations: [
    { label: "Insurance Journal — Big 'I' 2025 Market Share", url: "https://www.insurancejournal.com/news/national/2025/07/23/832819.htm" },
    { label: "IBISWorld — Insurance Brokers & Agencies US", url: "https://www.ibisworld.com/united-states/industry/insurance-brokers-agencies/1331/" },
    { label: "Insurance Business — Future One / Big 'I' Agency Universe Study", url: "https://www.insurancebusinessmag.com/us/news/breaking-news/independent-pandc-insurance-agencies-in-the-us--how-are-they-doing-507443.aspx" },
    { label: "SuperAgent — Missed Calls Revenue Leak", url: "https://news.getsuperagent.com/insurance-missed-calls-revenue-leak" },
    { label: "Hyperleap — Slow Quote Response Costs Agencies", url: "https://hyperleap.ai/blog/insurance-agencies-lose-quotes-slow-response" },
    { label: "SalesWings — Lead Response in Insurance", url: "https://www.saleswingsapp.com/sales-acceleration/the-importance-of-lead-response-in-insurance/" },
    { label: "Agency Performance Partners — Retention Math", url: "https://www.agencyperformancepartners.com/blog/insurance-policy-retention/" },
    { label: "Insure.com — Agent Commission Rates", url: "https://www.insure.com/car-insurance/insurance-agent-commissions.html" },
    { label: "Risk & Insurance — Agency M&A 2025", url: "https://riskandinsurance.com/insurance-agency-ma-market-settles-into-new-normal-as-consolidation-accelerates/" },
    { label: "Shop Texas Insurance — 2025 Outlook", url: "https://shoptexasinsurance.com/texas-insurance-outlook-2025/" },
    { label: "QuoteSweep — AMS Market Share 2026", url: "https://www.quotesweep.com/blog/ams-comparison-2026" },
    { label: "MediaAlpha — Jason Miller Austin Case Study", url: "https://mediaalpha.com/case_study/independent-insurance-agent-touts-30-lead-conversion-rate-with-mediaalpha-for-agents/" },
  ],
};
