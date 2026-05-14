import type { PlaybookContent } from "./types";

export const golfCourse: PlaybookContent = {
  slug: "golf-course",
  vertical: "Golf Courses & Country Clubs",
  verticalShort: "Golf Course",
  title: "The Empty Tee Time Playbook",
  subtitle:
    "Why a typical Austin / Round Rock daily-fee course leaks $80K–$120K a year on tee-time no-shows, member dues churn, and outing requests that die in voicemail — and the four operator moves that recover it before the next aerification cycle.",
  edition: "18 / Golf Course Edition / 2026",

  introBody:
    "Golf is up. NGF reports 47 million Americans played a round in 2024 — the highest participation rate in over a decade. The waitlist at Forest Creek, Avery Ranch, Wolfdancer, and every other Austin-area course has never been longer. And yet the average daily-fee course in Texas runs a 9–12% tee-time no-show rate, an 18–22% annual member-dues churn rate, and books less than half the outings it gets requests for. The supply is constrained, the demand is record-high, and the floor is leaking. This playbook is for the GM, head pro, or member-services lead who's tired of being told to 'do more marketing' and wants to look at the operations behind the first tee instead.",

  patternHeadline:
    "Your tee sheet looks full. Your revenue says otherwise.",
  patternBody:
    "Three leaks define a course P&L in 2026. First, the tee-time no-show — 9–12% of weekend morning slots evaporate, and the system doesn't auto-rebook because most courses are still on phone-confirmation workflows. Second, the dues churn — members quit when nobody calls them in month 9 to check in; the average private club has zero structured member touchpoints between intake and renewal notice. Third, the outing request that dies — a corporate buyer emails the info@ inbox at 4pm Friday and never hears back; 60%+ of outing leads are lost to response delay. None of this is a marketing problem. All of it is operational.",
  patternStats: [
    {
      value: "9–12%",
      label: "tee-time no-show rate at daily-fee courses (weekend mornings hit 15%+)",
      source: "Lightspeed Golf, GolfNow industry data",
    },
    {
      value: "18–22%",
      label: "annual member dues churn rate at typical private / semi-private clubs",
      source: "NGCOA / Club Benchmarking 2024",
    },
    {
      value: "60%+",
      label: "outing / corporate event leads lost to slow response (>4 hr reply)",
      source: "GolfNow Business / Event-Temple operator survey",
    },
    {
      value: "$8–$15",
      label: "average F&B capture per round (industry potential: $22–$28)",
      source: "Club Benchmarking F&B Operating Report",
    },
  ],

  mathHeadline: "$95K walks off the first tee every year.",
  mathBody:
    "Semi-private Round Rock / Austin course. 180 rounds/day average, $72 weekend green fee + cart, $52 weekday. ~600 active members at $185/mo dues. We're only counting the three biggest leaks. Not the F&B miss. Not the lesson revenue. Not the cart-fleet underutilization.",
  mathRows: [
    { label: "Weekend rounds (Sat+Sun) × 50 wks", value: "= 18,000" },
    { label: "No-show rate", value: "× 10%" },
    { label: "Lost weekend rounds / year", value: "= 1,800" },
    { label: "Avg weekend round value (green + cart)", value: "× $72" },
    { label: "Tee-time leak", value: "= $129,600 gross" },
    { label: "Realistically recoverable (auto-rebook fills half)", value: "≈ $65,000" },
    { label: "Plus: 600 members × 20% churn × $185/mo × 6 mo avg replace gap", value: "+ $133,200 gross" },
    { label: "Realistically recoverable (cut churn 20% → 12%)", value: "≈ $26,640" },
    { label: "Plus: 1 missed outing/wk × $4,500 avg × 50% recoverable", value: "+ $5,625" },
    { label: "Conservative annual leak", value: "= ~$97,000" },
  ],
  mathConclusion:
    "Almost six figures of recoverable revenue sitting between the proshop phone, the membership director's inbox, and the GHIN system. Zero of it requires a course renovation, a tournament sponsor, or a new logo.",

  quotes: [
    {
      text: "We did 12,000 rounds last year. If we had recovered even half our no-shows we'd have done 13,500 and not added a single cart.",
      attribution: "Texas daily-fee GM, NGCOA roundtable",
    },
    {
      text: "Most clubs treat member onboarding as paperwork. The 60-day mark is where retention is actually won or lost.",
      attribution: "Club Benchmarking — Member Lifecycle Report",
    },
    {
      text: "Corporate outing buyers send the same RFP to four courses. The first to respond closes 60% of the time.",
      attribution: "GolfNow Business operator survey",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Wire credit-card hold + auto-rebook on tee-time bookings",
      body: "Stop confirming by phone. Every booking holds a credit card. 24-hr cancel window or charge half-rate. The moment a cancellation comes in, the system fires an SMS to the next 10 people on the waitlist with a one-click rebook link. Lightspeed Golf, Foreup, GolfNow, and Club Prophet all support this — most courses bought the feature and never turned it on. Recovery rate: 50–70% of cancelled slots get refilled inside 90 minutes.",
    },
    {
      number: "02",
      title: "Install a 60 / 90 / 270-day member touch sequence",
      body: "Members don't quit at month 12. They quit emotionally at month 4 when nobody noticed they hadn't played in 6 weeks. Build a structured sequence: Day 60 — 'How's the experience? What would make it a 10?' from the head pro. Day 90 — first guest pass + member-only event invite. Day 270 — pre-renewal coffee with the GM, not a renewal notice. NGCOA member-lifecycle data: structured touchpoints cut Y1 churn 30–40%. The script lives in HubSpot Starter ($15/mo) or just a Trello board if you want free.",
    },
    {
      number: "03",
      title: "Build a sub-1-hour outing-request response standard",
      body: "Corporate outings are $4,500–$25,000 each. The buyer is sending the same RFP to four courses. The first to call back wins 60% of the time. Wire a dedicated outings@ inbox that pages the events director on Slack / SMS the moment a lead comes in. Auto-acknowledge in 60 seconds ('Got it. We're pulling our calendar — call you back in the hour.'). Then real callback within the hour during business hours. Event-Temple, Tripleseat, and Cloudbeds all do this off-the-shelf for ~$80–$150/mo.",
    },
    {
      number: "04",
      title: "Move tee-time bookings 100% online + price-segment by time slot",
      body: "Phone bookings are dead weight — they consume proshop labor and lose data. Move 100% of public bookings online through your tee-sheet vendor's customer-facing booking widget. Then layer dynamic pricing: $85 Sat 7am, $65 Sat 11am, $45 Sat 2pm. GolfNow, Foreup, Chronogolf, and Lightspeed all support this — sometimes called 'yield management.' Courses that turn it on lift weekend revenue per round 12–18% without increasing rounds, because the early slots fill at a premium and the late slots fill at all.",
    },
  ],

  toolsBody:
    "Your tee-sheet, POS, and member-mgmt stack already exists. The question is whether the right features are turned on. Auto-rebook waitlists, card-on-file holds, outing CRM, and dynamic pricing live inside every major course tech stack — most operators never flip the switches.",
  toolsList: [
    "Lightspeed Golf — tee sheet + POS + F&B (Chronogolf legacy)",
    "Foreup — tee sheet + member mgmt + marketing automation",
    "GolfNow Business / G1 — tee sheet, dynamic pricing, marketing reach",
    "Club Prophet Systems — full-stack club ops, member-services strong",
    "Jonas Club Software — high-end private club operations",
    "Event-Temple / Tripleseat — outing + banquet CRM with SLA tracking",
    "ClubReady / HubSpot Starter — member touchpoint sequencing",
    "Toast / Square for F&B — better halfway-house attach rate",
  ],

  caseStudyHeadline: "Forest Creek pilot — coming Q1 2026.",
  caseStudyBody:
    "A semi-private 18-hole Round Rock course (200+ active members, ~45,000 rounds/year) is the planned pilot for the four-move stack — credit-card holds + auto-rebook waitlist + structured member touchpoints + sub-1-hour outing response. The full operational diff — exact Foreup configuration, member sequence templates, outings@ SLA tooling — will be published once the 90-day data closes. Want to be the next case study? Book a 30-minute walk-the-course audit.",

  ctaHeadline: "Stop losing weekend revenue to no-shows you never called back.",
  ctaBody:
    "If any of this is hitting close, the 30-minute audit is free. We walk the proshop, pull your last 90 days of tee-sheet data, your member churn report, and your outing inbox response times — and tell you in dollars exactly which leak is costing what. No pitch. No deck. If we can't find $25K+ of recoverable revenue, you don't owe me anything. If we can — I show you exactly which of these four moves to run first, in the order that pays back before the next aerification window.",

  citations: [
    { label: "National Golf Foundation — 2024 US Golf Participation", url: "https://www.ngf.org/2024-golf-participation-report/" },
    { label: "NGCOA — Operator Margin & Revenue Benchmark Report", url: "https://www.ngcoa.org/" },
    { label: "Club Benchmarking — Member Lifecycle & Retention Report", url: "https://www.clubbenchmarking.com/" },
    { label: "Lightspeed Golf — Tee Sheet No-Show Industry Data", url: "https://www.lightspeedhq.com/blog/golf-no-shows/" },
    { label: "Foreup — Auto-Rebook + Waitlist Documentation", url: "https://foreup.com/" },
    { label: "GolfNow Business — Dynamic Pricing Operator Guide", url: "https://business.golfnow.com/" },
    { label: "Event-Temple — Outing & Banquet SLA Benchmarks", url: "https://www.eventtemple.com/" },
    { label: "PGA of America — F&B Per-Round Capture Benchmarks", url: "https://www.pga.org/" },
    { label: "Tripleseat — Group Event Response-Time Data", url: "https://tripleseat.com/" },
    { label: "Club Prophet Systems — Private Club Operations", url: "https://clubprophetsystems.com/" },
  ],
};
