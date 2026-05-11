import type { PlaybookContent } from "./types";

export const chiropracticPt: PlaybookContent = {
  slug: "chiropractic-pt",
  vertical: "Chiropractic & Physical Therapy",
  verticalShort: "Chiro / PT",
  title: "The Recall Recovery Playbook",
  subtitle:
    "Solo chiro at $500K/yr is leaking $89K — 18% of collections — through missed calls, no-shows, and lapsed patients. Four operator moves to recover it before the PE rollup absorbs your neighbor.",
  edition: "09 / Chiropractic + PT Edition / 2026",

  introBody:
    "Chiropractic is a $2.2B/yr cottage industry: 65,000 practices, 70% sole proprietors, flat growth, real margin squeeze. PT is the bigger story — $53B, 50,000+ clinics, and 2,591 PE-affiliated locations as of 2024. Confluent Health, Athletico, ATI are absorbing 1-5 doc clinics monthly. The independents who survive aren't the ones with better adjustments — they're the ones who answer the phone, reduce no-shows, and rebook lapsed patients. This playbook maps the three leaks and gives you four moves to close them.",

  patternHeadline: "Three leaks. Same drain.",
  patternBody:
    "Small healthcare practices miss up to 30% of inbound calls. No-show rate: 12-18% for chiro, 10-21% for PT (outliers >50%). And the killer — patient retention stops at 40-60%. The #1 reason patients quit isn't dissatisfaction. It's 'they forgot — pain went away.' Reactivation alone moves a clinic from 30% to 60% capacity. None of this is a marketing problem. It's all a follow-through problem.",
  patternStats: [
    {
      value: "30%",
      label: "of inbound calls go unanswered at small healthcare practices",
      source: "Perfect Patients / ACA Today",
    },
    {
      value: "12-18%",
      label: "no-show rate for chiropractic visits (PT outliers up to 21%+)",
      source: "ChiroSpring / PMC study",
    },
    {
      value: "40-60%",
      label: "average retention rate. Top quartile hits 85%.",
      source: "Strategic DC / ChiroEco",
    },
    {
      value: "$400-$500",
      label: "CAC per new patient via Google Ads (CPL $50-200)",
      source: "Intelliplans",
    },
  ],

  mathHeadline: "18% of collections — recoverable.",
  mathBody:
    "Solo Austin chiropractor. 120 booked appts/mo, $65 avg ticket, ~$500K annual collections. We're counting three leaks. Not the credentialing nightmare. Not the PPO write-offs. Just the operational gaps.",
  mathRows: [
    { label: "Missed calls/mo (~20 unanswered)", value: "" },
    { label: "× 25% would-have-booked × $2,275 LTV", value: "= $3,400/mo" },
    { label: "No-shows: 120 appts × 12%", value: "= $936/mo" },
    { label: "Lapsed patient reactivation: 8/mo × ~$390 LTV", value: "= $3,120/mo" },
    { label: "Monthly recoverable", value: "= ~$7,500" },
    { label: "Annual recoverable", value: "= ~$89,000" },
    { label: "% of annual collections", value: "= ~18%" },
  ],
  mathConclusion:
    "$89K sitting on the table for a $500K practice. That's the new associate you can't justify hiring, paid for by patients you already paid to acquire.",

  quotes: [
    {
      text: "Lacking great front desk staff with big turnover every 8-10 months.",
      attribution: "Chiropractor, Alignable owner forum",
    },
    {
      text: "Front desk has to stop, pick up the phone, leave messages, and shuffle things around. Staff shift gears instead of moving through the day.",
      attribution: "ChiroSpring, no-show breakdown",
    },
    {
      text: "The number one reason patients stop coming is they forgot. They didn't have as much pain anymore and forgot to make a follow-up.",
      attribution: "Strategic DC, retention research",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Cover the missed-call gap with text-back automation",
      body: "30% of calls go unanswered. <3% of voicemail-routed callers leave a message. The fix: auto-text every missed call within 60 seconds. 'Sorry I missed you — text me here or book online: [link].' OpenPhone, ChiroSpring built-in, or Twilio direct ($15-50/mo). 60-80% of missed callers reply to the SMS (vs <15% leaving voicemail).",
    },
    {
      number: "02",
      title: "Cut no-shows in half with a real reminder cadence",
      body: "Industry no-show is 12-18%, top quartile is 4-6%. The gap: most practices send one robotic SMS. Replace with: 72-hr SMS confirmation + 24-hr auto-call + 2-hr 'see you soon' text. Add a 24-hour cancellation policy charging $25 (small, real). Practices doing this cut no-shows 48%+. On 120 appts/mo at $65 = $560/mo recovered with zero new patients.",
    },
    {
      number: "03",
      title: "Run a 90-day lapsed-patient recall sequence",
      body: "40-60% of patients drop off because they forgot. Reactivation is the highest ROI in the practice. Build it: at day 60 since last visit, fire automated SMS ('Hey, it's been a minute — pain back?'). Day 75, automated call from front desk. Day 90, postcard. Day 120, $50 'wellness check' coupon. Top practices reactivate 25-40% of lapsed within 90 days. ChiroEco data: this alone moves clinics from 30% → 60% capacity.",
    },
    {
      number: "04",
      title: "Audit your front-desk handoff — and document it",
      body: "Front desk turns over every 8-10 months in chiro practices. Every turnover = phone scripts forgotten, intake forms abandoned, recall lists dropped. Write a 4-page front desk SOP: answer-script, intake protocol, recall workflow, no-show handling. Print it. Train it. Re-audit quarterly. The systems run the practice, not the person — that's the difference between PE-target and PE-bait.",
    },
  ],

  toolsBody:
    "Your stack already includes most of what you need. Audit what's TURNED ON vs what's installed.",
  toolsList: [
    "ChiroTouch — 12,500+ practices, market leader ($650/mo)",
    "ChiroFusion / Genesis / ChiroSpring — alternatives",
    "WebPT — PT market leader",
    "Jane App — fast-growing, $54/mo, cleaner UX",
    "Prompt / ClinicSource / SimplePractice — PT alternatives",
    "Weave — patient comms + phones, dental/chiro stack",
    "Solutionreach / Demandforce / Tebra — recall automation",
    "Twilio + Zapier — DIY text-back layer",
  ],

  caseStudyHeadline: "Coming Q4 2026.",
  caseStudyBody:
    "A solo Austin chiropractic office reactivated 14 lapsed patients in 60 days using move 03 from this playbook, recovering ~$5,400/mo in additional visit revenue. Full breakdown — exact ChiroSpring recall cadence, SMS copy, and front-desk SOP — will be published once the 90-day data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Don't sell to a PE rollup. Run like one.",
  ctaBody:
    "PE buyers aren't paying premium for great adjustments. They're paying for clean recall, low no-show rates, and predictable AR. The 30-min audit is free. We pull your missed-call log, no-show rate, and recall report, and tell you in dollars what each leak is costing. If we can't find $3K/mo of recoverable revenue, you don't owe me anything.",

  citations: [
    { label: "IBISWorld — Chiropractors US 2025", url: "https://www.ibisworld.com/united-states/industry/chiropractors/1559/" },
    { label: "GlobeNewswire — $53B PT Clinics Market 2025", url: "https://www.globenewswire.com/news-release/2025/05/02/3073073/28124/en/U-S-Physical-Therapy-Clinics-Market-Analysis-2025-53-Billion-Industry-Primed-for-Consolidation.html" },
    { label: "JAAOS — PE Acquisition of PT Clinics 2010-2024", url: "https://www.ovid.com/journals/jaaos/pdf/10.5435/jaaos-d-25-00650~trends-in-private-equity-acquisition-of-us-physical-therapy" },
    { label: "Perfect Patients — Cost of Missed Calls", url: "https://www.perfectpatients.com/the-cost-of-missed-calls/" },
    { label: "ACA Today — Missed Calls Hurting Your Practice", url: "https://www.acatoday.org/news-publications/missed-calls-hurting-your-practice-capture-every-opportunity-for-care/" },
    { label: "ChiroSpring — Reduce Patient No-Shows", url: "https://www.chirospring.com/articles/reduce-patient-no-shows" },
    { label: "ChiroEco — Patient Reactivation", url: "https://www.chiroeco.com/patient-reactivation/" },
    { label: "Strategic DC — Front Desk Success", url: "https://strategicdc.com/the-1-secret-to-front-desk-chiropractic-success/" },
    { label: "American Chiropractor — Profitability 2025", url: "https://theamericanchiropractor.com/article/2025/6/1/unlocking-chiropractic-profitability" },
    { label: "Veeva Clinics — Adjustment Cost Guide", url: "https://veevaclinics.com/cost-of-chiropractic-adjustment/" },
    { label: "SpryPT — PT Cost Guide 2026", url: "https://www.sprypt.com/blog/how-much-does-physical-therapy-cost-with-without-insurance" },
    { label: "Intelliplans — Chiro Google Ads CPL", url: "https://intelliplans.com/ppc/google-ads-ppc-costs-for-chiropractors/" },
  ],
};
