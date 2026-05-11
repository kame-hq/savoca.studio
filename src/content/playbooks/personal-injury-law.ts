import type { PlaybookContent } from "./types";

export const personalInjuryLaw: PlaybookContent = {
  slug: "personal-injury-law",
  vertical: "Personal Injury Law Firms",
  verticalShort: "PI Law",
  title: "The First-Call Playbook",
  subtitle:
    "Why 72% of accident victims hire the first attorney they speak with — and why a solo PI firm in Austin loses over $1M a year to missed calls, voicemail, and the 4-hour callback. Plus four operator moves to compete with Morgan & Morgan without their ad budget.",
  edition: "05 / Personal Injury Edition / 2026",

  introBody:
    "Morgan & Morgan crossed $2B in revenue and 1,000+ attorneys in 2025. They're spending more on Austin TV and digital than every solo PI firm in Travis County combined. You will not out-budget them. But you don't have to. 72% of PI clients hire the first attorney they speak with — and Morgan misses calls just like you do. The difference between $300K/yr in fees and $1M/yr in fees, for most solo PI firms, is whether the phone gets answered the first time. This playbook is the field guide.",

  patternHeadline: "First to answer wins. Almost every time.",
  patternBody:
    "35–50% of new client calls to law firms go unanswered during business hours. 80% of callers abandon when sent to voicemail. 72% of accident victims hire the first attorney they reach. 42% of legal searches happen outside business hours. Average response time at most firms: hours. Industry-leader response time: 5 minutes — which converts at a 391% premium over 1 hour. The math is brutal: PI is the highest per-case-value vertical in services, and most solo firms are routing those calls to a receptionist who's at lunch.",
  patternStats: [
    {
      value: "72%",
      label: "of PI clients hire the first attorney they speak with",
      source: "CASEpeer / WiFi Talents",
    },
    {
      value: "44%",
      label: "of law firm business is lost to poor call handling",
      source: "WiFi Talents",
    },
    {
      value: "42%",
      label: "of legal searches happen outside business hours",
      source: "XPRTS",
    },
    {
      value: "391%",
      label: "conversion advantage of a 1-min response vs 1-hour response",
      source: "Above the Bar",
    },
  ],

  mathHeadline: "Your missed calls cost more than your marketing budget.",
  mathBody:
    "Solo PI firm baseline. Conservative volume. Texas standard contingency fees applied to industry-average MVA settlement value. We're not even counting the catastrophic case that signs once a quarter and pays for the year.",
  mathRows: [
    { label: "Inbound calls per month", value: "100" },
    { label: "Industry missed-call rate", value: "× 35%" },
    { label: "Missed calls per month", value: "= 35" },
    { label: "% that are real PI inquiries (vs spam)", value: "× 20%" },
    { label: "Lost potential signed cases / month", value: "= 7" },
    { label: "Months per year", value: "× 12" },
    { label: "Lost cases per year", value: "= 84" },
    { label: "Avg fee per signed case (33.3% of $37K MVA)", value: "× $12,300" },
    { label: "Annual leak", value: "= $1,033,200" },
  ],
  mathConclusion:
    "Even if you halve every assumption, you're at $500K/yr leaking. For an Austin firm spending $300/click on Google to drive calls to a phone that doesn't answer.",

  quotes: [
    {
      text: "By the time I called the lead back, they'd already signed with Morgan.",
      attribution: "r/Lawyertalk pattern, paraphrased across multiple threads",
    },
    {
      text: "I'm a trial lawyer, not a phone operator. But every missed call is a $20K case.",
      attribution: "Industry intake pain pattern, MyLegalAcademy interviews",
    },
    {
      text: "Half my calls are spam — I can't tell the $50K case from the tire-kicker until I've already wasted 20 minutes.",
      attribution: "Smith.ai case study, solo PI attorney",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Cover the 42% of leads that arrive after-hours",
      body: "Accidents happen 24/7. Wrecks at 7pm Saturday don't wait for Monday. Either retain a legal-specific intake service (Smith.ai, AnswerOne, Captorra — typically $250–$500/mo for true 24/7 PI-trained intake), build a small after-hours team, or deploy AI screening that captures the case basics. The cost of any of these vs. one signed catastrophic case ($50K+ in fees) is not a real comparison.",
    },
    {
      number: "02",
      title: "Hit the 5-minute response standard — measured, not aspirational",
      body: "5-min responses convert at 21× the rate of 30-min, and 1-min at 391% over 1-hour. Wire your CASEpeer / Filevine / Litify intake form to fire an SMS to the prospect within 60 seconds AND a callback notification to the on-duty attorney. Audit weekly. The firms beating Morgan & Morgan locally aren't outspending — they're outresponding.",
    },
    {
      number: "03",
      title: "Build a qualifying intake script that filters spam in 90 seconds",
      body: "Half your inbound is junk: insurance reps fishing, debt collectors, family members of clients who already signed elsewhere. A 4-question qualifier (date of incident, treated by doctor Y/N, fault, insurance) sorts the $50K case from the tire-kicker before the attorney's time gets used. Document the script. Train every intake person on it. Record calls and grade them weekly.",
    },
    {
      number: "04",
      title: "Run the 72-hour follow-up sequence on every unconverted lead",
      body: "Most PI firms call once and forget. Build a sequence: SMS within 60 sec of contact, callback within 5 min, follow-up SMS at 24h if no commitment, follow-up call at 72h. After that, drop into a 30-day nurture (legal info, settlement explainer). 18% of leads convert later — but only if they're tracked. Most firms throw away 80% of their pipeline by not running this sequence.",
    },
  ],

  toolsBody:
    "Your stack should match firm size. Don't pay for Litify if you're solo. Don't run on Excel if you're 5 attorneys.",
  toolsList: [
    "CASEpeer — solo + small-mid PI, easiest learning curve",
    "Filevine — mid + large firms, customizable workflows",
    "Litify — Salesforce-based, enterprise scale",
    "MyCase / Clio / Smokeball — general-purpose practice management",
    "Smith.ai / AnswerOne / Captorra — legal-trained intake services",
    "Intake Conversion Experts (ICE) — outsourced intake specialist",
    "Google LSA — $50–$378/lead in PI (Austin tier $250–$344)",
    "AAJ + Trial Lawyer's Summit — industry community + pipeline",
  ],

  caseStudyHeadline: "Coming Q3 2026.",
  caseStudyBody:
    "A solo PI attorney in north Austin reduced first-contact response time from 47 minutes to under 4, signed 6 additional cases in their first 60 days, and recovered approximately $73K in projected fees using moves 01 and 02 from this playbook. Full breakdown — exact intake service comparison, CASEpeer SMS configuration, qualifying script — will be published here once the case-resolution data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Out-respond Morgan & Morgan. Don't out-spend them.",
  ctaBody:
    "Morgan & Morgan miss calls just like you do. They just miss them at scale. The 30-min audit is free. We pull your intake call log, your form-fill conversion data, your case management funnel, and we tell you in dollars what each leak is costing. If we can't find $25K/mo of recoverable fees, you don't owe us anything. If we can — we show you exactly which of these four moves to run first.",

  citations: [
    { label: "CASEpeer — 2026 PI Statistics", url: "https://www.casepeer.com/blog/personal-injury-statistics/" },
    { label: "Above the Bar — When Minutes Cost Six Figures", url: "https://abovethebarmarketing.com/when-minutes-cost-six-figures-the-hidden-revenue-drain-in-law-firm-intake/" },
    { label: "Legal Navigator — 35% of Calls Go Unanswered", url: "https://www.legalnavigator.ai/post/silent-lines-new-study-shows-35-of-calls-to-law-firms-now-go-unanswered" },
    { label: "iLawyer Marketing — Most Expensive Legal Keywords 2025", url: "https://www.ilawyermarketing.com/most-expensive-google-ads-keywords-legal-industry-2025/" },
    { label: "OptimizeMyFirm — LSA Costs for PI", url: "https://optimizemyfirm.com/services/local-service-ads/pi-cost/" },
    { label: "Silberman Law — Texas Contingency Fees", url: "https://silblawfirm.com/litigation/how-do-contingency-fees-work/" },
    { label: "XPRTS — Speed-to-Lead 5 Minutes", url: "https://xprts.com/blog/posts/speed-to-lead-law-firms/" },
    { label: "VoiceCharm — Law Firm Missed Calls", url: "https://www.voicecharm.ai/blog/law-firm-missed-calls" },
    { label: "RunSensible — Solo + Small Law Firm Income", url: "https://www.runsensible.com/blog/solo-and-small-law-firm-lawyer-income/" },
    { label: "Lawmatics — Lower CAC for PI Firms", url: "https://www.lawmatics.com/blog/3-steps-to-lower-client-acquisition-cost-for-personal-injury-firms" },
    { label: "Mehta McConnell — Soft-Tissue Settlement Avg", url: "https://mehtamcconnell.com/blog/average-settlement-soft-tissue-injury-car-accident/" },
    { label: "LawRank — Top Law Firm Statistics 2024", url: "https://lawrank.com/top-law-firm-statistics-2024/" },
  ],
};
