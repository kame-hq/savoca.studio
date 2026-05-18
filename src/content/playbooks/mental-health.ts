import type { PlaybookContent } from "./types";

export const mentalHealth: PlaybookContent = {
  slug: "mental-health",
  vertical: "Mental Health & Therapy Practices",
  verticalShort: "Mental Health",
  title: "The Clinical Hour Playbook",
  subtitle:
    "Why a typical 3-clinician Austin private practice loses 5-8 clinical hours per clinician per week to admin drift — and the four operator moves that reconstitute a full clinician's gross book without hiring, before Headway and Alma own the contract.",
  edition: "13 / Mental Health Edition / 2026",

  introBody:
    "Private-practice therapy is in a quiet ownership shift, and most independent owners don't see it yet. Headway raised at $2.3 billion post-Series D in July 2024 (Spark Capital). Alma sits inside Thoma Bravo, Insight Partners, Cigna Ventures, and Optum Ventures at $800M. Grow Therapy hit $1B ARR by March 2026 at a $3B valuation. They own the contract between clinician and payer. When Optum cut therapy rates 30% in late 2024 — CPT 90834 went $144.27 → $103.30 effective January 1, 2025 — independents on the platforms found out by email. No contract to negotiate. Behavioral-health M&A is up 35% YoY in Q1 2025. 40+ PE-backed mental-health platforms are operating in the US. The independents who survive this shift do it by closing the operating-drift gap on their own panel: 5-8 clinical hours per clinician per week disappear into eligibility verification, no-show recovery, and inquiry follow-up. That's an entire clinician's gross book hiding in admin work. This playbook is for the practice owner who wants to own their hours and own their contract — before the next platform email tells them what their rate is now.",

  patternHeadline: "Fill the hour. Own the contract.",
  patternBody:
    "Four leaks define an independent private practice P&L in 2026. The credentialing villain is the spine: Headway, Alma, Grow Therapy, and SonderMind are aggregating clinicians into managed-panel pools they call 'credentialing-as-a-service,' and they're getting paid by the payer first — independents on the platforms are second in line and have zero leverage when rates change. The inquiry-to-intake leak is the second: 27.8% of prospective patients drop out by session 3, and most of that decay starts at the first phone call that took 6 hours to return. The eligibility-verification leak is the third: behavioral-health claim denials run 22-30% vs 19% for medical, and the front-desk burden to verify, resubmit, and chase recovery eats 5-8 clinical hours per clinician per week — an entire clinician's gross book lost to admin. And the Psychology Today decline is the fourth: California LMFT profile-view data fell from 32K → 2.6K (a 91% collapse), and Texas mirrors the trend. The practices that survive own their referral mix, run measurement-based care natively, and stay off the credentialing-as-a-service hook. The ones that don't get rate-cut by email.",
  patternStats: [
    {
      value: "$2.3B",
      label:
        "Headway's post-Series D valuation (Spark Capital, Jul 2024). Alma $800M (Thoma Bravo + Insight + Cigna Ventures + Optum Ventures). Grow Therapy $3B / $1B ARR (Mar 2026). They own the payer contract.",
      source: "Spark Capital + Thoma Bravo press + Grow Therapy Series E",
    },
    {
      value: "30% / $43",
      label:
        "Optum cut therapy rates late 2024 — CPT 90834 went $144.27 → $103.30 effective 1/1/25. Independents on the platforms found out by email. No contract to negotiate.",
      source: "APA / Optum behavioral-health rate notice 2025",
    },
    {
      value: "27.8%",
      label:
        "Patient dropout rate by session 3. The continuity leak isn't slow follow-up — it's the inquiry that took 6 hours to return and the first session that ended without a measurable next step.",
      source: "Frontiers in Psychology — therapy dropout meta-analysis",
    },
    {
      value: "5-8 hrs / wk",
      label:
        "Clinical hours per clinician lost to eligibility verification, denial recovery, and no-show chasing. Behavioral-health claim denial rate 22-30% vs 19% medical. That's an entire clinician's gross book lost to admin.",
      source: "Healthie + CoverMyMeds behavioral-health workflow data",
    },
  ],

  mathHeadline: "$160K of cash. One full clinician's gross book reclaimed from admin drift.",
  mathBody:
    "Representative independent Austin 3-clinician private practice: ~85 active clients per clinician, mix of self-pay ($120-225/session East-to-West) + BCBS-TX panel + a few Headway holdovers, ~22% no-show on intake/first 3 sessions, 5-8 hrs/wk per clinician burned on eligibility + denial work. Four leaks at this scale:",
  mathRows: [
    {
      label: "Inquiry → intake conversion — sub-1hr HIPAA-compliant reply via Spruce/Klara (industry conversion: 22% → 41% on <1hr response)",
      value: "= +$48K recurring",
    },
    {
      label: "No-show recovery — 3-touch Spruce sequence + intake deposit (22% → 9% on procedure-coded sessions)",
      value: "= +$52K cash",
    },
    {
      label: "Eligibility + denial automation — Healthie + CoverMyMeds wired into SimplePractice/TherapyNotes",
      value: "= 5-8 hrs / wk / clinician reclaimed",
    },
    {
      label: "Diversified referral + PSYPACT positioning (kill Psychology Today dependency, bill across 40+ states from Austin)",
      value: "= +$60K new client acquisition + retained ARPU",
    },
    {
      label: "Conservative cash recovered, year one",
      value: "= $160,000 + ~1 full clinician's gross book",
    },
  ],
  mathConclusion:
    "$160K of cash recovered in year one. Plus 5-8 clinical hours per clinician per week reclaimed from admin drift — across 3 clinicians, that's the equivalent of one full clinician's billable book sitting inside the practice you already run. Headway pays 3-5× revenue for practices that hit 80%+ MBC adoption. The ones still on paper PHQ-9s are getting de-credentialed. The math is symmetric: own your hours or hand them to the platform.",

  quotes: [
    {
      text: "We're being asked to give Alma our patient data, our outcomes data, our practice patterns — and they're being asked to give that to their VCs. There's no version of this where the clinician keeps the leverage.",
      attribution: "Melissa Flanagan, LCSW — published commentary on platform consolidation",
    },
    {
      text: "When Optum cut 90834 by 30 percent, I had zero leverage. No contract to renegotiate. No path to opt out without losing the referrals. That's not a contract. That's a notice.",
      attribution: "'Jeffrey,' LCPC — anonymized account, behavioral-health rate-cut commentary",
    },
    {
      text: "Clients ghost between the inquiry and the first session more often than they ghost between the first and third session. The intake is the leak — not the therapy.",
      attribution: "Elizabeth LaMotte, LICSW — via Psychotherapy Networker",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Sub-1hr HIPAA-compliant auto-acknowledge via Spruce or Klara",
      body: "The inquiry-to-intake leak is the highest-conversion lever in private practice — and the one most independents leave to a part-time front desk that returns calls in 4-8 hours. Industry benchmark: prospective patients booking within 1 hour of inquiry convert at 41%; those reached at 6 hours convert at 22%. The fix isn't faster phone tag. It's an auto-acknowledge that's HIPAA-compliant on first touch — Spruce Health ($25/clinician/mo) or Klara ($199+/mo) auto-text or auto-email within 60 seconds of any inquiry form, schedule a 15-min intake call within 24 hours, send a HIPAA intake packet via secure link before the call. On 40 inquiries/mo × 19-point conversion lift × $145 session × 12-session average course = $48K of recurring revenue per clinician. The practices that win this leak don't have more leads. They have a faster front door.",
    },
    {
      number: "02",
      title: "Measurement-based care wired native — Blueprint / Owl / SimplePractice integration",
      body: "Measurement-based care (MBC) — PHQ-9 for depression, GAD-7 for anxiety, automated symptom tracking session-to-session — is no longer optional. Headway, Alma, and most major commercial payers now require MBC for panel retention and credential renewal. Independents who don't run it are getting de-credentialed quarter-by-quarter without a public announcement. The move: wire Blueprint Health, Owl, or Healthie's MBC module natively into SimplePractice/TherapyNotes/Tebra. Patients complete PHQ-9 + GAD-7 in the secure portal 24 hours before session, scores auto-populate the chart, the clinician sees trendlines without manual entry. Owl + SimplePractice + Tebra all have native integrations. On the credentialing side, MBC is the moat: Headway and Alma can't easily de-credential a practice with measurable outcome data on every active client. Mental-health-only lever: no other vertical has a payer-required measurement framework that doubles as a retention insurance policy.",
    },
    {
      number: "03",
      title: "Eligibility + denial automation — Healthie + CoverMyMeds wired into the EHR",
      body: "Behavioral-health claim denial rate is 22-30% vs 19% for medical. The front-desk burden to verify eligibility upfront, chase denied claims, resubmit corrected coding, and follow AR consumes 5-8 clinical hours per clinician per week. The move: Healthie ($299+/mo) runs real-time eligibility verification at booking — checks BCBS-TX, Aetna, Cigna, Optum, Medicare against the client's policy and surfaces the copay before the session, not after. CoverMyMeds handles prior-auth for medication-management practices. Tebra's real-time eligibility module covers the broader payer panel. On a 3-clinician practice: 6 hours/week × 3 × $135/hr clinical billable rate = $126K of redirected capacity (you spend it on sessions, not on hold with payers) plus a meaningful denial-rate cut on the actual collections. Vertical-leveraged: behavioral-health-specific eligibility complexity (carve-out plans, EAP confusion, telehealth-state-licensing rules) makes the automation lift 3-4× what it is in medical primary care.",
    },
    {
      number: "04",
      title: "Diversified referral + PSYPACT — kill the Psychology Today dependency",
      body: "Psychology Today profile-view data is collapsing nationally — California LMFT views fell 91% (32K → 2.6K) over the last 3 years and Texas mirrors the trend. The practices still funneling 80%+ of new clients from PT are sitting on a single-source-of-failure that's failing in real time. The move is twofold. One: diversify referral mix — Google Business Profile optimization (most therapists never claim it), professional referral relationships (PCPs, OBs, psychiatrists), local employer EAP panels, Headway-as-funnel-only (use them to fill slots, keep the patient on your panel after session 3). Two: for PhD/PsyD owners — leverage PSYPACT. Texas joined PSYPACT via H.B. 1501 in 2019. You can bill clients in 40+ member states from your Austin office without separate state licenses. That's a 40× addressable market expansion and a defensive moat against Talkspace, BetterHelp, and Brightside who can't reach the same client base at the same clinical caliber. Mental-health-only lever: PSYPACT applies to no other licensed profession at this scope.",
    },
  ],

  toolsBody:
    "Your EHR, billing system, client-comm layer, and outcome-tracking stack already exist. The credentialing platforms (Headway, Alma, Grow) standardize the same operating stack post-onboard. The question is whether you've turned on the features you already pay for — and whether you own them or rent them from a platform whose investors get paid first.",
  toolsList: [
    "SimplePractice — cloud-native EHR + telehealth, the independent-practice standard",
    "TherapyNotes — competing EHR, strong on group-practice billing",
    "Tebra (Kareo/PatientPop merger) — EHR + real-time eligibility + practice growth",
    "Spruce Health — HIPAA-compliant 2-way SMS, $25/clinician/mo",
    "Klara — HIPAA-compliant patient comm, $199+/mo, multi-specialty",
    "Blueprint Health — measurement-based care platform, native SimplePractice integration",
    "Owl — MBC platform, strong on group-practice deployments",
    "Healthie — eligibility + denial management + EHR, $299+/mo",
    "CoverMyMeds — prior-auth automation, free for clinicians",
    "PSYPACT (psypact.org) — interstate practice license for PhD/PsyD across 40+ states",
  ],

  caseStudyHeadline: "Austin pilot — closing the admin-drift gap on a 3-clinician practice.",
  caseStudyBody:
    "A 3-clinician Austin private practice is the planned 2026 pilot for the four-move stack: Spruce sub-1hr HIPAA auto-acknowledge on inquiries, Blueprint Health MBC wired into SimplePractice, Healthie eligibility automation, and a Psychology Today decoupling SOP (Google Business Profile build, EAP panel applications, PSYPACT activation for the PhD owner). The full operational diff — Spruce auto-acknowledge template, Blueprint PHQ-9/GAD-7 sequence, Healthie eligibility rules per payer, GBP optimization SOP — will be published when the 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Own your hours. Own your contract.",
  ctaBody:
    "Headway raised at $2.3 billion last July. Alma sits inside Thoma Bravo, Insight Partners, Cigna Ventures, and Optum Ventures. Grow Therapy hit $1B ARR in March at a $3B valuation. Behavioral-health M&A is up 35% YoY in Q1 2025, with 40+ PE-backed platforms operating in the US. When Optum cut CPT 90834 by 30 percent on January 1, 2025 ($144.27 → $103.30), independents on the platforms learned by email. No contract. No leverage. No path to opt out without losing the referral flow. The independents who survive this shift own their hours (admin drift reclaimed via Spruce + Blueprint + Healthie) and own their contract (diversified referral + PSYPACT moat). The ones who don't, take whatever rate the platform sets in next year's email. 30 minutes — I walk your intake flow, pull your SimplePractice or TherapyNotes data, your eligibility queue, your no-show rate, your top referral source, and I show you in dollars + clinical hours exactly where the next $160K and the next clinician's gross book lives. No deck. No pitch. If I can't find $100K of recoverable revenue + 5 hrs/wk/clinician inside the four operator moves, you don't owe me anything.",

  citations: [
    { label: "Spark Capital — Headway Series D ($2.3B valuation, July 2024)", url: "https://www.sparkcapital.com/" },
    { label: "Grow Therapy — $3B valuation, $1B ARR (March 2026)", url: "https://growtherapy.com/" },
    { label: "APA / Optum behavioral-health rate notice (CPT 90834 cut effective 1/1/25)", url: "https://www.apaservices.org/" },
    { label: "Frontiers in Psychology — therapy dropout meta-analysis (27.8% by session 3)", url: "https://www.frontiersin.org/journals/psychology" },
    { label: "Healthie + CoverMyMeds — behavioral-health eligibility + denial workflow data", url: "https://www.gethealthie.com/" },
    { label: "PSYPACT — interstate practice for PhD/PsyD across 40+ states (TX since H.B. 1501, 2019)", url: "https://psypact.org/" },
    { label: "Blueprint Health — measurement-based care + Headway/Alma panel-retention data", url: "https://www.blueprint-health.com/" },
    { label: "Psychotherapy Networker — intake leak + ghosting commentary", url: "https://www.psychotherapynetworker.org/" },
    { label: "Behavioral Health Business — Q1 2025 M&A activity (35% YoY)", url: "https://bhbusiness.com/" },
    { label: "Today's Veterinary Business — credentialing-as-a-service framework (cross-vertical analog)", url: "https://todaysveterinarybusiness.com/" },
    { label: "Two Chairs + LifeStance — brick-and-mortar PE comparables", url: "https://www.twochairs.com/" },
    { label: "Family Care Center — South Austin brick-and-mortar opening (March 2026)", url: "https://fccwellbeing.com/" },
  ],
};
