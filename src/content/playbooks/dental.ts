import type { PlaybookContent } from "./types";

export const dental: PlaybookContent = {
  slug: "dental",
  vertical: "Independent Dental Practice",
  verticalShort: "Dental",
  title: "The Chair-Empty Playbook",
  subtitle:
    "How a solo general practice quietly leaks $150–$250K a year between the unanswered phone, the broken recall list, and the 11am no-show — and the four operator moves that plug it before the DSO comes shopping.",
  edition: "02 / Dental Edition / 2026",

  introBody:
    "Owner-share has dropped from 84.7% in 2005 to 72.5% in 2023. DSO affiliation doubled in a decade. The ones who are getting bought aren't the bad clinicians — they're the docs whose practice runs on a Frankenstein stack of Dentrix, sticky notes, and a front desk that's been understaffed since 2022. This playbook is for the doc who isn't ready to sell. It maps the three biggest leaks (calls, recall, no-shows) and shows you exactly what they cost. Then it gives you four moves to recover 15–25% of revenue without buying a single new patient.",

  patternHeadline: "Three leaks. Same drain.",
  patternBody:
    "Most practices think their problem is acquisition. It almost never is. 70% of new appointments still book by phone — and 35% of those calls go unanswered. 78% of voicemail-reachers hang up. 67% immediately call a competitor. Layer on a 60% recall rate (top quartile is 85%) and a 7–15% no-show rate, and the average solo GP is leaking $150K–$250K of revenue per year that's already inside the funnel.",
  patternStats: [
    {
      value: "35%",
      label: "of dental inbound calls go unanswered (50%+ at peak hours)",
      source: "Resonate / AgentZap",
    },
    {
      value: "70%",
      label: "of new dental appointments still book via phone, not online",
      source: "Weave / TrueLark",
    },
    {
      value: "$105K",
      label: "annual revenue lost per practice to no-shows alone",
      source: "Henry Schein One 2024 Industry Report",
    },
    {
      value: "$50–100K",
      label: "annual lift from raising recall rate by just 10 points",
      source: "Dentx / eAssist",
    },
  ],

  mathHeadline: "$93K just from the front desk. Before you count anything else.",
  mathBody:
    "Conservative single-doc GP. We're not even pulling in recall failures or no-shows yet. This is the front desk leak in isolation:",
  mathRows: [
    { label: "Missed calls per week", value: "30" },
    { label: "Weeks per year", value: "× 52" },
    { label: "Missed calls per year", value: "= 1,560" },
    { label: "% that are new-patient inquiries", value: "× 25%" },
    { label: "Lost new-patient calls", value: "= 390" },
    { label: "Industry close rate on answered new leads", value: "× 30%" },
    { label: "Lost first-year value per patient", value: "× $800" },
    { label: "Front-desk leak / year", value: "= $93,600" },
  ],
  mathConclusion:
    "Add Henry Schein One's $105K/yr no-show loss and a 60→85% recall lift worth another $50–100K and you're at $250K of recoverable revenue. With zero new ad spend.",

  quotes: [
    {
      text: "Phone calls — are you losing patients at 'Hello'?",
      attribution: "Dental Economics",
    },
    {
      text: "PPO Sharks: feeding on your practice's success. Most dentists are bleeding money daily because they don't know the rules of the PPO game.",
      attribution: "Dentaltown / Practiwrite",
    },
    {
      text: "Front-office turnover creates operational chaos beyond typical staffing shortages — financial conversations, insurance denials, unexpected out-of-pocket costs all break down.",
      attribution: "Dental Claim Support",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Pull the 30-day call log audit",
      body: "Most practices have call data and never look at it. Weave, NexHealth, RingCentral — all log inbound, missed, and abandoned. Pull a 30-day report, calculate your real miss rate, and segment by hour-of-day. You'll find a ~2-hour window (usually 11–1) where 45% of your misses cluster. Staff that one window first. Don't try to solve the whole day on day one.",
    },
    {
      number: "02",
      title: "Run a recall recovery sequence — properly",
      body: "Industry-average recall is 60%. Top-quartile practices hit 85%. Each 10 percentage points of recall lift = $50K–$100K/yr. Most practices send one robotic email and call it done. Replace it with: SMS at 6 weeks pre-due, automated call at 3 weeks, hand-call from front desk at 1 week, postcard at miss + 30 days. Track each touch's response rate. Cull what doesn't work. Repeat.",
    },
    {
      number: "03",
      title: "Implement the no-show insurance protocol",
      body: "Henry Schein One puts no-show losses at $105K/yr. The single biggest lever: deposit-required appointments for new patients (collect $50 at booking, refund at check-in or apply to first cleaning). Combine with 72-hr/24-hr/2-hr SMS confirmations. Practices that do both cut no-show rate from 12% to under 5%. That's 70+ recovered chair-hours per chair per year.",
    },
    {
      number: "04",
      title: "Get to 200 reviews, fast",
      body: "Practices with 200+ Google reviews and 4.7+ stars correlate with 2× revenue vs <50-review peers. Top practices add ~32 reviews per month. The ask should fire automatically post-appointment via SMS — not 'leave us a review,' but 'we'd appreciate a few words about your visit with Dr. [Name].' Review velocity matters more than total count for local pack ranking.",
    },
  ],

  toolsBody:
    "Three PMSes own >50% of the market — and your migration cost is the reason DSOs love consolidating you. Pick the one that fits your size and stop second-guessing.",
  toolsList: [
    "Dentrix — Henry Schein, dominant SMB share",
    "Eaglesoft — Patterson, deep installed base",
    "Open Dental — fastest-growing, 12,000+ installs, lowest TCO",
    "Curve Dental — cloud-native, modern UI",
    "Weave — patient comms + phones, dental-specific",
    "NexHealth — patient experience layer over your PMS",
    "Solutionreach / Lighthouse 360 — recall + reminder automation",
    "Dental Intelligence — KPI dashboards, recall analytics",
    "Tebra (formerly PatientPop) — marketing + reputation stack",
  ],

  caseStudyHeadline: "Coming Q4 2026.",
  caseStudyBody:
    "A 2-doctor general practice in Williamson County (TX) lifted recall from 58% to 79% in 90 days using move 02 from this playbook, recovering ~$67K of annual hygiene revenue and 410 chair-hours. Full breakdown — exact sequence cadence, SMS copy, phone scripts — will be published here once the 6-month data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Don't sell to a DSO. Run like one.",
  ctaBody:
    "The DSOs aren't beating you on clinical care. They're beating you on operations. The 30-min audit is free. We pull your call log, recall report, and no-show data, and we tell you in dollars what each leak is costing. If we can't find $5K/mo of recoverable revenue, you don't owe us anything. If we can — we show you exactly which of these four moves to run first.",

  citations: [
    { label: "ADA HPI — Trends in Dentist Income", url: "https://www.ada.org/resources/research/health-policy-institute/dental-practice-research/trends-in-dentist-income" },
    { label: "ADA HPI — Practice Ownership Trends", url: "https://www.ada.org/-/media/project/ada-organization/ada/ada-org/files/resources/research/hpi/practice_ownership_trends_dentistry_new_look_old_data.pdf" },
    { label: "Beckers Dental — DSO Consolidation 2024", url: "https://www.beckersdental.com/dso-dpms/10-things-to-know-about-dso-consolidation-in-2024/" },
    { label: "Resonate — Missed Calls Stats", url: "https://www.resonateapp.com/resources/missed-calls-dental-practices-statistics" },
    { label: "TrueLark — 8M Patient Conversations", url: "https://truelark.com/what-weve-learned-from-8-million-patient-conversations/" },
    { label: "Weave — Dental Call Tracking", url: "https://www.getweave.com/dental-call-tracking/" },
    { label: "Dental Economics — Losing Patients at Hello", url: "https://www.dentaleconomics.com/practice/article/16385208/phone-calls-are-you-losing-patients-at-hello" },
    { label: "Dentx — Recall Rate Benchmarks", url: "https://dentx.ca/blog/dental-recall-rate-benchmarks/" },
    { label: "eAssist — Hygiene Recall Numbers", url: "https://dentalbilling.com/hygiene-recall-recare-by-the-numbers/" },
    { label: "Henry Schein One — Scheduling/Retention Report", url: "https://www.beckersdental.com/dentists/where-dental-practices-stand-on-scheduling-patient-retention/" },
    { label: "Endorsa — Google Reviews for Dentists", url: "https://endorsa.ca/google-reviews-for-dentists" },
    { label: "Practiwrite — 200+ Reviews = 2x Revenue", url: "https://practiwrite.com/dental-practice-review-generation/" },
  ],
};
