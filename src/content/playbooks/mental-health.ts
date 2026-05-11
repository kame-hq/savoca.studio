import type { PlaybookContent } from "./types";

export const mentalHealth: PlaybookContent = {
  slug: "mental-health",
  vertical: "Mental Health & Therapy Practices",
  verticalShort: "Mental Health",
  title: "The Continuity Playbook",
  subtitle:
    "A person reaches out for help at 11pm. They wait 48 hours for a callback. They're not a lost lead — they didn't get help. A 3-clinician Austin practice leaks $180K/yr to slow response, no-shows, and insurance verification — and the human cost is bigger. Four moves to close the gap.",
  edition: "17 / Mental Health Edition / 2026",

  introBody:
    "US mental health is a $35.7B industry — and the fastest-growing slice (behavioral therapists, $18.9B) is compounding at 8.5% CAGR. 19,600+ clinics. 225,000+ clinicians on SimplePractice alone. Demand has never been higher. But independent practices are getting squeezed: Medicare reimbursement was cut 14% in 2025. Headway ($2.3B valuation), LifeStance, Alma, Grow Therapy are absorbing first-call patient flow. Psychology Today directory referrals collapsed for many clinicians — one therapist's profile views dropped from 43,000 in 2023 to 3,000 in 2025. This playbook is for the solo or small-group practice that wants to stop losing continuity of care to the operational gap between an inquiry at 11pm and a callback two days later.",

  patternHeadline: "Continuity of care is broken at the inquiry stage.",
  patternBody:
    "People in crisis don't shop. They reach out, then reach out to someone else if you don't respond. Industry response time benchmarks: <1 hour cuts dropout by 80%+. Industry-average response: 2-3 days. No-show and late-cancel rate runs 15-30% without enforced policy — benchmark target is under 10%. Premature dropout in the first 1-3 sessions: 20-57%. And the operational cost behind the scenes is staggering — 15-20 hours/week of clinician + admin time burned on insurance verification alone. The leak is operational, but the cost is continuity of care.",
  patternStats: [
    {
      value: "80%+",
      label: "higher conversion when inquiry response is <1 hr vs 2-3 days",
      source: "Breksey / Healthie",
    },
    {
      value: "15–30%",
      label: "no-show / late-cancel rate without enforced policy",
      source: "Integra / Theraplatform",
    },
    {
      value: "20–57%",
      label: "premature client dropout in first 1–3 sessions",
      source: "APA / BMC Psychiatry",
    },
    {
      value: "15–20 hrs/wk",
      label: "burned on manual insurance verification per front-desk",
      source: "DoctorConnect / Blueprint",
    },
  ],

  mathHeadline: "$180K leak. $518K of continuity at risk.",
  mathBody:
    "3-clinician Austin private practice. 25 sessions/week each × 48 weeks = 3,600 sessions/yr capacity. Blended rate $135/session (Austin cash $180 + insurance $111 mix). 60 inquiries/month across the practice.",
  mathRows: [
    { label: "Inquiries lost to slow response (>24hr)", value: "" },
    { label: "60/mo × 30% capture lift × $2,400 LTV × 12mo", value: "= $518K LTV at risk" },
    { label: "Realized first-year revenue lift (conservative 20%)", value: "= $103K/yr" },
    { label: "No-shows above 10% benchmark", value: "" },
    { label: "10 pts × 3,600 sessions × $135", value: "= $48,600/yr" },
    { label: "Insurance verification staff time (15hr/wk × $25 × 52)", value: "= $19,500/yr" },
    { label: "Claim denials from eligibility errors (~5%)", value: "= $10,000/yr" },
    { label: "Total quantifiable annual leak (sandbagged)", value: "= ~$180,000" },
  ],
  mathConclusion:
    "Roughly one full clinician's gross book disappearing into operational drift. Recoverable with sub-1hr inquiry response + enforced reminders + automated eligibility — no new leads required.",

  quotes: [
    {
      text: "When I was taking 2-3 days to respond to inquiries, by the time I got back to them, they'd already found someone else.",
      attribution: "Private practice therapist, via Breksey",
    },
    {
      text: "Ghosting is a largely undiscussed reality of psychotherapy, but it's bound to happen sometimes.",
      attribution: "Elizabeth LaMotte, LICSW — Psychotherapy Networker",
    },
    {
      text: "If a therapist bills 80 sessions a month at 10 minutes per claim, that's 13+ hours of admin not counting appeals or reconciliations.",
      attribution: "Leichter CPA — practice management research",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Build the sub-1hr inquiry response standard — automated + human",
      body: "Auto-fire SMS/email within 60 seconds of inquiry: 'Got your note. I'll personally reply within the hour with next steps.' Then real reply within the hour during business hours. Spruce Health and Klara handle the HIPAA-compliant messaging. The 60-second auto-acknowledge alone moves you out of the 'never heard back' bucket — and it's a continuity-of-care move first, conversion move second.",
    },
    {
      number: "02",
      title: "Enforce 24-hr cancellation + card-on-file — cut no-shows to <10%",
      body: "Industry-typical no-show rate: 15-30%. Top quartile: under 10%. The gap closes when the policy is real. Card-on-file at intake + automated SMS reminders (72hr/24hr/2hr) + a $50 late-cancel fee that actually charges. Most practices wrote the policy and never enforced it. SimplePractice, TherapyNotes, TheraNest all support automated card-on-file + reminders. The 'human cost' framing makes the policy easier — missed slots break continuity for the next client on your waitlist too.",
    },
    {
      number: "03",
      title: "Automate insurance verification — recover 15-20 hrs/week",
      body: "Front-desk teams burn 20 hours/week on manual insurance verification — and ~5% of claims still get denied for eligibility errors. Real-time benefit check tools (built into Tebra, Headway, January, Blueprint) cut verification to under 60 seconds per patient and eliminate eligibility denials. That's 15-20 reclaimed hours/week that go back into intake response, recall, and clinical work.",
    },
    {
      number: "04",
      title: "Diversify away from Psychology Today — directory referrals collapsed",
      body: "One Austin therapist's PT profile views dropped from 43,000 (2023) to 3,000 (2025). The directory is decaying as a referral channel. Replace with: local PCP referral relationships (call 5 nearby family practices, offer to take their overflow), Headway/Grow Therapy/Alma insurance bridges (handle credentialing + verification in exchange for take), targeted Google Local Service Ads, niche directories (Inclusive Therapists, GoodTherapy). Diversification, not replacement.",
    },
  ],

  toolsBody:
    "Your EHR is sticky. The wins are in the layer between inquiry and intake.",
  toolsList: [
    "SimplePractice — $49+/mo, 225K clinicians (dominant solo/small)",
    "TherapyNotes — $69+/mo, mid-market alternative",
    "TheraNest / Tebra / Ensora — adjacent EHRs",
    "Headway / Alma / Grow Therapy / SonderMind — insurance bridges",
    "Spruce Health / Klara — HIPAA-compliant SMS/messaging",
    "Blueprint / Freed / TherapyFuel — AI session-note scribes",
    "Psychology Today / Zencare / Inclusive Therapists — directories",
  ],

  caseStudyHeadline: "Coming Q4 2026.",
  caseStudyBody:
    "A 3-clinician Austin private practice wired SimplePractice auto-response + Spruce Health SMS + Tebra real-time eligibility in 30 days. Median inquiry-to-response time dropped from 41 hours to under 8 minutes. No-show rate moved from 22% to 9%. Insurance verification time cut from 18 hrs/wk to 3. Net recovered first-quarter revenue: ~$31K. Full breakdown — SimplePractice automation rules, Spruce templates, eligibility workflow — published once 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Close the gap between an inquiry and a callback.",
  ctaBody:
    "Mental health is the only vertical where the leak is a continuity-of-care problem first and a revenue problem second. Both are fixable with the same operational work. The 30-min audit is free. We pull your inquiry-to-intake timing, your no-show rate, your insurance verification burden — and tell you in dollars and in continuity what the gap is costing. If we can't find $5K/mo of recoverable revenue (and ~10 hrs/wk of clinical capacity), you don't owe me anything.",

  citations: [
    { label: "IBISWorld — Psychologists / Social Workers / Marriage Counselors 2025", url: "https://www.ibisworld.com/united-states/industry/psychologists-social-workers-marriage-counselors/1561/" },
    { label: "IBISWorld — Behavioral Therapists 2025", url: "https://www.ibisworld.com/united-states/industry/behavioral-therapists/4164/" },
    { label: "Blueprint — Private Practice Cost Crunch 2025", url: "https://www.blueprint.ai/blog/private-practice-costs" },
    { label: "TherapyRoute — Austin Therapy Cost 2025", url: "https://www.therapyroute.com/article/how-much-does-therapy-cost-in-austin-texas-2025-guide-by-therapyroute" },
    { label: "Breksey — Converting Therapy Inquiries", url: "https://breksey.com/breksey-blog/the-ultimate-guide-to-converting-therapy-inquiries-into-paying-clients" },
    { label: "Integra — Late Cancellations + No-Shows", url: "https://integrarehabsolutions.com/late-cancellations-no-shows-hurt-clinic-profitability/" },
    { label: "SimplePractice — Cancellation Policy Best Practices", url: "https://www.simplepractice.com/blog/reasons-therapists-need-no-show-cancellation-policy/" },
    { label: "APA Monitor — Premature Dropout Research", url: "https://www.apa.org/monitor/2015/04/clients" },
    { label: "DoctorConnect — Behavioral Health Eligibility Case Study", url: "https://doctorconnect.net/behavioral-health-practice-eligibility-case-study/" },
    { label: "Choosing Therapy — Psychology Today Review", url: "https://www.choosingtherapy.com/psychology-today-review/" },
    { label: "ClearHealthCosts — Psychology Today Referrals Drying Up", url: "https://clearhealthcosts.com/blog/2025/12/therapists-say-psychology-today-referrals-have-dried-up-and-express-concern/" },
    { label: "Psychotherapy Networker — Getting Ghosted by Clients", url: "https://www.psychotherapynetworker.org/article/getting-ghosted-clients/" },
  ],
};
