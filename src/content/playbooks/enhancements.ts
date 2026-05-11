/**
 * Per-vertical chart + differentiator data.
 * Merged into each playbook in index.ts.
 * Keeps base content files clean; visual + unique-angle data lives here.
 */

import type { PlaybookChart, Differentiator } from "./types";

export type Enhancement = {
  chart?: PlaybookChart;
  differentiator?: Differentiator;
};

export const enhancements: Record<string, Enhancement> = {
  medspa: {
    chart: {
      type: "bar",
      title: "When inquiries arrive vs when you're staffed",
      subtitle: "Hour-of-day distribution · Austin medspa pattern",
      axis: "inquiry volume %",
      bars: [
        { label: "9am", value: 30 },
        { label: "12pm", value: 45 },
        { label: "3pm", value: 50 },
        { label: "6pm", value: 95, highlight: true, display: "95%" },
        { label: "9pm", value: 80, highlight: true, display: "80%" },
      ],
      footnote: "60% of medspa inquiries land 5–9pm. Front desk leaves at 6.",
    },
    differentiator: {
      eyebrow: "Why medspas bleed different",
      headline: "Your front desk handles HIPAA, social DMs, walk-ins — AND the phone.",
      body: "Unlike dental or trades, the medspa front desk is a clinical-adjacent role with regulatory exposure. Asking them to also be the inbound sales engine creates burnout that turns over every 8 months. The leak isn't a 'phone problem.' It's a job-design problem.",
      callout: "Separate the inbound function from the clinical front desk. Even part-time.",
    },
  },

  dental: {
    chart: {
      type: "waterfall",
      title: "Where 40% of recall disappears",
      subtitle: "Hygiene recall drop-off · industry average",
      axis: "% of patients remaining",
      bars: [
        { label: "Booked", value: 100, display: "100%" },
        { label: "Show", value: 88, display: "88%" },
        { label: "Recall sent", value: 75, display: "75%" },
        { label: "Recall worked", value: 60, display: "60%" },
        { label: "Top 25%", value: 85, highlight: true, display: "85%" },
      ],
      footnote: "Each 10% recall lift = $50–100K/yr. Top quartile hits 85%.",
    },
    differentiator: {
      eyebrow: "Why dental bleeds different",
      headline: "DSO consolidation pays premium for clean recall, not great clinical.",
      body: "Owner share dropped from 84.7% (2005) to 72.5% (2023). DSO buyers value retention infrastructure 5–10× more than chair speed. The recall reactivation system you build TODAY is the multiple you sell on tomorrow — whether you sell or not.",
      callout: "Don't sell to a DSO. Run like one.",
    },
  },

  hvac: {
    chart: {
      type: "bar",
      title: "Call volume — mild vs cooling spike",
      subtitle: "Austin / Round Rock 5-truck shop pattern",
      axis: "inbound calls / week",
      bars: [
        { label: "Mild wk", value: 80 },
        { label: "Onset", value: 140 },
        { label: "Peak", value: 320, highlight: true, display: "320" },
        { label: "Burnout", value: 80 },
      ],
      footnote: "Texas cooling peak quadruples inbound. Same crew. Same desk.",
    },
    differentiator: {
      eyebrow: "Why HVAC bleeds different",
      headline: "The year is 16 weeks. PE buyers know it.",
      body: "Cooling season compresses ~70% of revenue into 16 weeks. Capacity collapses. The shops being bought by Apex / Champions / Climate Solutions aren't the ones with newer trucks — they're the ones whose dispatch density survives peak. PE pays 5–6× EBITDA for clean ops, not for tools.",
      callout: "PE doesn't pay for trucks. They pay for whether you answered the phone in July.",
    },
  },

  "plumbing-electrical": {
    chart: {
      type: "waterfall",
      title: "Texas master-license bottleneck",
      subtitle: "Survival from apprentice to licensed Master",
      axis: "% surviving each gate",
      bars: [
        { label: "Apprentice", value: 100, display: "100%" },
        { label: "Journeyman", value: 60, display: "60%" },
        { label: "Master elig.", value: 30, display: "30%" },
        { label: "Master pass", value: 15, highlight: true, display: "15%" },
      ],
      footnote: "TDLR Master Electrician first-attempt pass rate <50%. One Master = legal cap.",
    },
    differentiator: {
      eyebrow: "Why these trades bleed different",
      headline: "You don't have a crew problem. You have a Master problem.",
      body: "Unlike HVAC or roofing, plumbing + electrical have hard licensing gates. Texas requires 12,000 hours under a Master to qualify for the exam — first-attempt pass rate under 50%. One Master = one legal Electrical Contractor (unless they own >50%). Your growth ceiling isn't trucks. It's whether you develop the next Master from inside.",
      callout: "Hiring isn't the bottleneck. Licensing is.",
    },
  },

  "personal-injury-law": {
    chart: {
      type: "comparison",
      title: "Conversion lift by response time",
      subtitle: "PI lead qualification rate · MIT + industry data",
      axis: "qualifying rate (indexed to <5 min)",
      bars: [
        { label: "<5 min", value: 100, display: "100%", highlight: true },
        { label: "30 min", value: 5, display: "5%" },
        { label: "1 hr", value: 14, display: "14%" },
        { label: "Avg PI", value: 4, display: "4%" },
      ],
      footnote: "Industry-average PI firm response = 47 min. 5-min = 21× qualification rate.",
    },
    differentiator: {
      eyebrow: "Why PI bleeds different",
      headline: "Morgan & Morgan misses calls too. They just miss them at scale.",
      body: "PI is the only vertical where a single missed call is a $20K–$200K case. The accident victim is calling 3–5 lawyers in the first hour. 72% sign with whoever picked up first. You don't out-spend Morgan & Morgan on Google Ads. You out-respond them at 7pm Tuesday.",
      callout: "First-to-answer wins 72% of PI cases. Cheaper than Google.",
    },
  },

  veterinary: {
    chart: {
      type: "bar",
      title: "Independent vs corporate-owned vet practices",
      subtitle: "PE + corporate consolidation share over time",
      axis: "% corporate-owned",
      bars: [
        { label: "2010", value: 5, display: "5%" },
        { label: "2015", value: 11, display: "11%" },
        { label: "2020", value: 16, display: "16%" },
        { label: "2024", value: 22, highlight: true, display: "22%" },
      ],
      footnote: "PE plowed $9.3B into vet care in just Q1 2024. Forecast: 60% corporate by 2034.",
    },
    differentiator: {
      eyebrow: "Why vet bleeds different",
      headline: "You're not competing with the corporate clinic. You're competing with their PHONE COVERAGE.",
      body: "PE buyers (Mars/VCA, NVA, Thrive, BluePearl) consolidated 22% of practices. Their pitch isn't better medicine — it's 24/7 phone coverage + online booking + automatic recall. The independent vet who builds those three things is the one PE buyers can't squeeze out (or pays premium for).",
      callout: "Stay independent on your terms. Operational debt is what PE buyers buy.",
    },
  },

  "personal-trainer": {
    chart: {
      type: "waterfall",
      title: "30-day slot economics",
      subtitle: "From booked to active client by month 3",
      axis: "% of clients",
      bars: [
        { label: "Booked", value: 100, display: "100%" },
        { label: "Show", value: 89, display: "89%" },
        { label: "Rebook", value: 60, display: "60%" },
        { label: "Mo. 3", value: 35, highlight: true, display: "35%" },
      ],
      footnote: "Avg client tenure: 8 months. 50% drop within 6. Empty slots can't be re-inventoried.",
    },
    differentiator: {
      eyebrow: "Why trainers bleed different",
      headline: "Your time is the inventory. There's no shelf to stock.",
      body: "Unlike a dental chair or HVAC truck, a personal trainer's empty slot can never be 're-stocked.' 6am Tuesday at 7am, gone forever. Slot economics are brutal: 17% cancel + 11% no-show on an $85 hour = $4,200/yr conservative loss. Real Austin trainers leak 4–6× that. The compounding cost isn't dollars — it's burnout.",
      callout: "Time can't be inventoried. Only reserved or wasted.",
    },
  },

  "wedding-planner": {
    chart: {
      type: "bar",
      title: "Engagement-season inquiry spike",
      subtitle: "Monthly inquiry volume · solo Austin planner",
      axis: "inquiries / month",
      bars: [
        { label: "Mar", value: 30 },
        { label: "Aug", value: 25 },
        { label: "Nov", value: 60 },
        { label: "Dec", value: 70, highlight: true, display: "70" },
        { label: "Feb", value: 85, highlight: true, display: "85" },
      ],
      footnote: "47% of proposals — and inquiries — land Thanksgiving through Valentine's.",
    },
    differentiator: {
      eyebrow: "Why wedding planners bleed different",
      headline: "You don't lose to better planners. You lose to faster ones.",
      body: "Top 2 reasons leads don't convert (universal across category + region): budget mismatch + ghosting. Both fixable BEFORE the discovery call by adding a price anchor + auto-reply within 60 sec. 40% of couples never hear back within 5 days. ~50% book the first vendor to reply. Speed > craft.",
      callout: "You're not losing weddings on craft. You're losing them on response time.",
    },
  },

  "chiropractic-pt": {
    chart: {
      type: "waterfall",
      title: "Patient retention by visit",
      subtitle: "Industry-average drop-off curve",
      axis: "% remaining",
      bars: [
        { label: "Visit 1", value: 100, display: "100%" },
        { label: "Visit 4", value: 75, display: "75%" },
        { label: "Visit 8", value: 55, display: "55%" },
        { label: "Visit 12", value: 40, highlight: true, display: "40%" },
      ],
      footnote: "Top quartile retention: 85%. Each 10 pts of retention lift = $50K+/yr.",
    },
    differentiator: {
      eyebrow: "Why chiro / PT bleed different",
      headline: "The #1 reason patients quit: 'I forgot.'",
      body: "Unlike medspa (price) or dental (insurance), the reason chiro + PT patients churn is verbatim from Strategic DC research — 'they forgot, pain went away.' Reactivation is the highest-ROI lever in the practice. Most clinics never run a structured 90-day lapsed-patient sequence. Top operators reactivate 25–40% within 90 days.",
      callout: "Reactivation > Acquisition. Every time. In this category.",
    },
  },

  roofing: {
    chart: {
      type: "bar",
      title: "Inbound calls — baseline vs storm week",
      subtitle: "Austin / Round Rock 5-crew shop",
      axis: "calls / 24 hr",
      bars: [
        { label: "Baseline", value: 80 },
        { label: "Day 1", value: 250 },
        { label: "Day 2", value: 320, highlight: true, display: "320" },
        { label: "Day 5", value: 180 },
      ],
      footnote: "78% of homeowners book whoever picks up first in the 72-hr storm window.",
    },
    differentiator: {
      eyebrow: "Why roofing bleeds different",
      headline: "The year is decided in 72 hours after each hailstorm.",
      body: "Most service businesses spread revenue across the year. Roofing spreads it across storm events. Austin gets 2–4 major hail events annually. The shops that win 2026 aren't the ones with more crews — they're the ones whose phones answer at midnight on a Wednesday because the next storm just hit. 134 PE deals expected in roofing in 2025. PE is buying the operator who built that capacity.",
      callout: "Roofing is event-driven revenue. Build the trigger system.",
    },
  },

  "real-estate": {
    chart: {
      type: "comparison",
      title: "Conversion by lead response time",
      subtitle: "MIT Oldroyd study · web leads",
      axis: "% qualifying lead (indexed)",
      bars: [
        { label: "<5 min", value: 100, display: "100%", highlight: true },
        { label: "30 min", value: 18, display: "18%" },
        { label: "2 hr", value: 11, display: "11%" },
        { label: "15 hr (avg)", value: 4, display: "4%" },
      ],
      footnote: "Industry-average team response: 917 min. Best-in-class: <5 min.",
    },
    differentiator: {
      eyebrow: "Why real estate teams bleed different",
      headline: "The CRM already wins. The accountability doesn't.",
      body: "Follow Up Boss, Sierra, BoldTrail, Lofty — all support 60-second auto-response. Most teams own them. Almost none enforce the SLA. The accountability layer (Team Captains, floor-time, weekly response-time leaderboard) is what separates Anthony Djon's $50M/mo Detroit team from yours. The tool wasn't the gap. The discipline was.",
      callout: "Buy fewer leads. Answer the ones you have.",
    },
  },

  landscaping: {
    chart: {
      type: "bar",
      title: "Annual revenue concentration",
      subtitle: "% of yearly revenue by quarter",
      axis: "% of annual revenue",
      bars: [
        { label: "Q1", value: 10, display: "10%" },
        { label: "Spring (12 wks)", value: 70, highlight: true, display: "70%" },
        { label: "Summer", value: 12, display: "12%" },
        { label: "Q4", value: 8, display: "8%" },
      ],
      footnote: "70% of demand compresses into a 12-week window. Crews + office can't both scale.",
    },
    differentiator: {
      eyebrow: "Why landscaping bleeds different",
      headline: "The mower runs OR the phone answers. Never both.",
      body: "Landscaping is unique among home services: the crew IS the office. There's no dispatcher in a separate building (like roofing) or a back office (like dental). The crew mows and answers the phone — and during the 12-week spring surge, 70% of inquiries arrive while crews are physically swinging a string trimmer. The 74% miss rate isn't laziness. It's physics.",
      callout: "Separate the crew from the inbound function. Even for 12 weeks.",
    },
  },

  moving: {
    chart: {
      type: "bar",
      title: "When customers decide who they hire",
      subtitle: "% who have booked by response window",
      axis: "% of bookings closed",
      bars: [
        { label: "5 min", value: 35, display: "35%" },
        { label: "1 hr", value: 78, highlight: true, display: "78%" },
        { label: "Same day", value: 92, display: "92%" },
        { label: "Next day", value: 95, display: "95%" },
      ],
      footnote: "78% book whoever picks up first. Same-day quotes win 92% of races.",
    },
    differentiator: {
      eyebrow: "Why moving bleeds different",
      headline: "Customers shop 3–4 movers simultaneously. They book in 30 minutes.",
      body: "Unlike dental (annual recall) or roofing (annual storm), moving leads decide same-day. The buyer requests 3–4 simultaneous quotes from competing movers, compares tradeoffs, and books within 30 minutes of their last response. Whoever responds first wins 78% of the time. There is no 'follow-up later' market. There's only first-to-quote.",
      callout: "Customer-decision window: 30 minutes. Industry-avg response: 47 hours.",
    },
  },

  "pest-control": {
    chart: {
      type: "comparison",
      title: "Owner thinks vs. reality — call answer rate",
      subtitle: "The 31-point gap that defines the bottleneck",
      axis: "% of inbound calls answered",
      bars: [
        { label: "Owner thinks", value: 97, display: "97%" },
        { label: "Reality", value: 66, highlight: true, display: "66%" },
        { label: "Best in class", value: 92, display: "92%" },
      ],
      footnote: "ServiceDirect: owners are off by 30 points on their own answer rate.",
    },
    differentiator: {
      eyebrow: "Why pest control bleeds different",
      headline: "The owner IS the dispatcher. That's the whole problem.",
      body: "Unlike HVAC (where there's a separate office) or dental (where the front desk is a clinical role), pest control owners RUN dispatch — for their own truck AND every other tech's. 36.8% of owners report tech-shortage caps growth more than demand caps it. The leak isn't a 'phone problem.' It's a job-description problem. Until the owner is out of dispatch, every operational metric is capped by their bandwidth.",
      callout: "Stop being the dispatcher. The growth ceiling lifts the moment you do.",
    },
  },

  "pool-service": {
    chart: {
      type: "bar",
      title: "Pool revenue mix — where margin really lives",
      subtitle: "Recurring vs. repair-upsell economics",
      axis: "% of annual revenue",
      bars: [
        { label: "Recurring", value: 45, display: "45%" },
        { label: "Repair", value: 32, highlight: true, display: "32%" },
        { label: "Renovation", value: 18, display: "18%" },
        { label: "New install", value: 5, display: "5%" },
      ],
      footnote: "Skimmer 2026: industry growth shifted from new accounts to repair upsell.",
    },
    differentiator: {
      eyebrow: "Why pool service bleeds different",
      headline: "The missed call isn't $230/mo cleaning. It's a $1,500 pump.",
      body: "Pool service is the only home-service vertical where industry-level growth has flipped from acquisition to repair-upsell. Skimmer's 2026 State of Pool Service report flagged the shift explicitly. Translation: the call you missed yesterday wasn't a $230/mo recurring contract — it was an $8K replaster, a $1,500 pump replacement, a $700 salt cell. The missed-call math math triples or 10×s when you reframe by ticket size.",
      callout: "Stop measuring missed calls by cleaning revenue. Measure by repair tickets.",
    },
  },

  "mental-health": {
    chart: {
      type: "waterfall",
      title: "Continuity drops at the inquiry stage",
      subtitle: "From inquiry to active client — industry pattern",
      axis: "% of inquiries reaching each step",
      bars: [
        { label: "Inquiry", value: 100, display: "100%" },
        { label: "Response", value: 60, display: "60%" },
        { label: "Booked", value: 35, display: "35%" },
        { label: "Session 3", value: 18, highlight: true, display: "18%" },
      ],
      footnote: "Premature dropout 20–57% in sessions 1–3. Most drop at the inquiry-response gap.",
    },
    differentiator: {
      eyebrow: "Why mental health is different",
      headline: "A 48-hour wait isn't a lost lead. It's someone who didn't get help.",
      body: "Mental health is the only vertical where the operational metric IS the clinical metric. Every other category counts missed calls in dollars. Here, the cost of a 48-hour callback delay is measured in continuity of care. Industry data shows 80%+ higher conversion when response is under an hour — but the more important number is that response time correlates directly with whether someone gets care or doesn't. The economic case lands harder because the human case is intact.",
      callout: "Continuity of care IS the operating metric. Revenue follows.",
    },
  },

  "insurance-agents": {
    chart: {
      type: "comparison",
      title: "Conversion by quote response time",
      subtitle: "Independent P&C agency binding rate (indexed)",
      axis: "binding rate (indexed)",
      bars: [
        { label: "<5 min", value: 100, display: "100%", highlight: true },
        { label: "30 min", value: 24, display: "24%" },
        { label: "1 hr", value: 12, display: "12%" },
        { label: "Avg 47m", value: 18, display: "18%" },
      ],
      footnote: "Insurance prospects quote 3–4 agencies simultaneously. 78% buy from the first.",
    },
    differentiator: {
      eyebrow: "Why insurance bleeds different",
      headline: "You're paying $30/lead to lose them by Tuesday.",
      body: "Insurance lead aggregators (EverQuote, QuoteWizard, MediaAlpha) sell SHARED leads to 3–5 agencies. You're racing the same clock as 4 competitors on every $30 lead. The math: aggregator spend × win-rate at 47-min response ≈ 4–5%. Most of your spend pays competitors. Reallocate 40% to Google LSA (exclusive leads $15–25) — you win every race because there's no race.",
      callout: "Stop racing on shared leads. Buy exclusive. Win every time.",
    },
  },
};
