import type { PlaybookContent } from "./types";

export const realEstate: PlaybookContent = {
  slug: "real-estate",
  vertical: "Real Estate Teams (5–15 agents)",
  verticalShort: "Real Estate",
  title: "The 5-Minute Playbook",
  subtitle:
    "Average real estate agent takes 15 hours to respond to a lead. 78% of inquiries close with the first agent who responds. A 5-agent Austin team burning $270K/yr on Zillow leads leaves $448K of GCI on the table. Four moves to fix it without buying more leads.",
  edition: "11 / Real Estate Edition / 2026",

  introBody:
    "The market is fragmented: 3M licensed agents, 1.5M NAR members, 28% on teams. Median 2024 GCI was $58,100 — 37% of agents made less than $50K. Austin median sale: $530K, slowing. The post-NAR-settlement workflow chaos hit harder than commission compression. This playbook isn't about better marketing. It's about closing the gap between when a lead submits the form and when an agent calls back. That gap, on industry average, is 15 hours. Best-in-class is 5 minutes. The conversion delta between those two numbers is your business.",

  patternHeadline: "First to answer. First to sign.",
  patternBody:
    "MIT's Oldroyd study: 5-min lead response vs 30-min = 100× more likely to contact, 21× more likely to qualify. 78% of inquiries close with the first agent to respond. Industry-average response time: 917 minutes — 15+ hours. Most Zillow leads convert 1-2% cold. With proper speed-to-lead workflow, top operators hit 5-10%. The CRM you already pay for has speed-to-lead built in. Most teams don't enforce the SLA.",
  patternStats: [
    {
      value: "15 hrs",
      label: "industry-average response time to new real estate leads",
      source: "AgentZap / Fyxer",
    },
    {
      value: "78%",
      label: "of inquiries close with the first agent to respond",
      source: "Verse.ai speed-to-lead study",
    },
    {
      value: "21×",
      label: "more likely to qualify lead at 5-min response vs 30-min",
      source: "MIT Oldroyd study",
    },
    {
      value: "$180",
      label: "avg paid lead cost (Zillow + Realtor.com blended)",
      source: "Thunderbit / Clever",
    },
  ],

  mathHeadline: "$448K of GCI walks out the inbox.",
  mathBody:
    "5-agent Austin team. 25 inbound web leads/agent/month = 1,500/yr. Avg lead spend $180 = $270K/yr in marketing. Current response time: industry-average 15+ hours.",
  mathRows: [
    { label: "Annual leads", value: "1,500" },
    { label: "Current conversion (15-hr response)", value: "× 1%" },
    { label: "Closings/yr at current pace", value: "= 15" },
    { label: "Best-in-class conversion (<5 min response)", value: "× 5%" },
    { label: "Closings/yr at <5 min response", value: "= 75" },
    { label: "Delta", value: "= 60 missed closings" },
    { label: "Austin avg $530K × 2.82% × 50% team split", value: "× $7,473 GCI/deal" },
    { label: "Annual recoverable GCI", value: "= $448,380" },
  ],
  mathConclusion:
    "You're paying $270K/yr to acquire leads and burning $448K of GCI because the median response is 15 hours. The CRM you already own can fix this. Most teams never enforce the SLA.",

  quotes: [
    {
      text: "Most agents fall behind not because they don't care, but because they don't have a system. This is a workflow problem, not a willpower problem.",
      attribution: "ACC Solutions — real estate lead response analysis",
    },
    {
      text: "Real estate leads ignore agents because their follow-up is slow, weak, or forgettable. Most agents lose the deal before the first conversation even starts.",
      attribution: "Manic Marketing",
    },
    {
      text: "Data without action is just expensive storage. The real problem emerges when nobody has time to execute the tasks the CRM creates.",
      attribution: "NurtureWorq, CRM-neglect research",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Pull your FUB response-time report. Look at the median.",
      body: "Most team leaders THINK their team responds in 5 minutes. The report says 4 hours. Pull Follow Up Boss / Sierra / BoldTrail's last-30-day response report. Filter by lead source. Look at median, not average (one outlier hides the leak). If median > 10 min, you have a six-figure problem. Read the data before changing anything else.",
    },
    {
      number: "02",
      title: "Auto-fire SMS + email within 60 seconds — your CRM already can",
      body: "FUB, Sierra, BoldTrail, Lofty — all support 60-second automated response. Most teams don't turn it on because 'it feels impersonal.' The MIT data says the opposite: speed > polish. Wire it: 'Hey [name] — got your inquiry on [address]. Pulling comps + neighborhood data right now. Calling you within the hour.' Now the agent has 60 min instead of 5 to make a real call.",
    },
    {
      number: "03",
      title: "Build a 'floor time' SLA — accountability layer on top of CRM",
      body: "Anthony Djon's 100-agent Detroit teamerage doing $50M/mo uses 'Team Captains' + strict floor-time rotation. The agent on floor takes ANY inbound during their shift. Speed-to-lead measured weekly. Bottom 20% loses lead-source access for the next month. Without accountability, the SLA never sticks. Your CRM has the tracking. Use it.",
    },
    {
      number: "04",
      title: "Run the 7-touch nurture sequence on unconverted leads",
      body: "Most inquiries convert in 6-18 months, not 6-18 hours. Anthony Djon's rule: hit a new lead every day for the first week, then once a week until they buy or clearly opt out. Wire FUB or BoldTrail to fire: same-day text, day 2 video email, day 4 market update, day 7 hand-call, week 2 neighborhood email, week 4 'still looking?' SMS. 18% of slow-burn leads convert in months 2-6. Most teams throw them away at week 2.",
    },
  ],

  toolsBody:
    "Your team probably already runs one of these. The features that catch speed-to-lead are probably NOT turned on.",
  toolsList: [
    "Follow Up Boss — $57/seat/mo, hub for high-volume teams",
    "Sierra Interactive — SEO + 24/7 text qualification",
    "BoldTrail (kvCORE) — all-in-one, $500-1,200/mo for teams",
    "Lofty (Chime) — AI Copilot, Google PPC heavy",
    "Zillow Premier Agent — paid leads, $139-450/lead by ZIP",
    "Realtor.com ReadyConnect / OpCity — 30-35% referral fee",
    "BombBomb — 1-to-1 video for nurture",
    "Maverick / Shiloh — call psychoanalysis + scoring",
  ],

  caseStudyHeadline: "Coming Q3 2026.",
  caseStudyBody:
    "A 7-agent Austin team reduced median first-response time from 4 hours to 90 seconds in 30 days using moves 02 and 03 from this playbook. Lead-to-appointment conversion went from 1.4% to 4.8%. Full breakdown — exact FUB SLA configuration, floor-time rotation script, and 7-touch sequence — published once 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Don't buy more leads. Answer the ones you have.",
  ctaBody:
    "If you're spending $20K+/mo on Zillow + Realtor.com leads, the fastest 10× ROI move is fixing speed-to-lead before you increase budget. The 30-min audit is free. We pull your CRM's response-time report, your lead-to-appointment funnel, and your floor-time enforcement, and tell you in dollars exactly which deals walked. If we can't find $20K/mo of recoverable GCI, you don't owe me anything.",

  citations: [
    { label: "NAR — Membership Data 2025", url: "https://www.nar.realtor/membership" },
    { label: "NAR — Teams Attract Roughly a Quarter of Agents", url: "https://www.nar.realtor/magazine/real-estate-news/commentary/teams-attract-roughly-a-quarter-of-agents" },
    { label: "MIT Oldroyd Lead Response Study", url: "https://25649.fs1.hubspotusercontent-na2.net/hub/25649/file-13535879-pdf/docs/mit_study.pdf" },
    { label: "AgentZap — 2026 Real Estate Lead Statistics", url: "https://agentzap.ai/blog/real-estate-lead-statistics" },
    { label: "Verse.ai — Speed to Lead Statistics", url: "https://verse.ai/blog/speed-to-lead-statistics" },
    { label: "NAR — Settlement Overview", url: "https://www.nar.realtor/the-facts/what-the-nar-settlement-means-for-home-buyers-and-sellers" },
    { label: "Redfin — Austin Housing Market", url: "https://www.redfin.com/city/30818/TX/Austin/housing-market" },
    { label: "Clever — Texas Average Real Estate Commission", url: "https://listwithclever.com/average-real-estate-commission-rate/texas/" },
    { label: "Inman — How One Team Closes $50M/mo", url: "https://www.inman.com/2025/10/06/this-team-does-50m-a-month-heres-how-they-convert-leads/" },
    { label: "Saleswise — Best CRM for Real Estate Teams", url: "https://www.saleswise.ai/blog/best-crm-for-real-estate-teams" },
    { label: "Thunderbit — Zillow Lead Costs", url: "https://thunderbit.com/blog/zillow-leads-costs-and-how-to-find" },
    { label: "RealGeeks — Lead Conversion Rates", url: "https://www.realgeeks.com/blog/how-much-do-real-estate-leads-convert" },
  ],
};
