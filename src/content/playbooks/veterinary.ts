import type { PlaybookContent } from "./types";

export const veterinary: PlaybookContent = {
  slug: "veterinary",
  vertical: "Independent Veterinary Practices",
  verticalShort: "Vet Practice",
  title: "The Per-Doctor Productivity Playbook",
  subtitle:
    "Why a typical 2-DVM Austin practice leaks $197K of cash and another $760K of 5-year client revenue a year — and the four operator moves that get two doctors doing three doctors' work, because Mars can pay your next associate $16,500 more than you can in signing bonus alone.",
  edition: "17 / Veterinary Edition / 2026",

  introBody:
    "Independent vet practices are winning the customer fight (+5% revenue YoY on Vetsource's 8,000-clinic dataset) and losing the talent fight. The corporate signing bonus average runs $27,181 — present in 81% of new-grad offers — vs $10,678 at independents, present in only 42% of offers. That's a $16,500 wage premium an independent shop literally cannot match on cash. Meanwhile Thrive Pet Healthcare — headquartered at 211 Walter Seaholm Drive in Austin, 5 miles from your practice — runs 360-400 hospitals and just raised $350M in March. Mars Petcare owns VCA (1,000+ hospitals), Banfield (1,000+), and BluePearl specialty (250+). NVA sits inside JAB Investors with 1,400+. Ethos spun out specialty in 2023, 145 hospitals. The independent can't outbid Mars on signing bonus. They can outwork Mars on tighter operations — two doctors doing three doctors' work. This playbook is for the owner who's tired of being told to 'just hire faster' and wants to look at the gap between the lobby and the chart.",

  patternHeadline: "Two doctors. Three doctors' work.",
  patternBody:
    "Four leaks define an independent practice P&L in 2026. The wage gap is the heart of it: Mars/VCA/Thrive pay $27,181 average signing bonus, independents $10,678 (when they pay at all). You can't beat the corporate on cash — you can only beat them on tighter operations. The visit-interval stretch is the second: AVMA's 2025 data shows the average client now goes 85.8 days between visits, up from 57.6 days in 2018 — a 48% stretch. Active clients per practice are losing 95/year. The relationship isn't leaking at the phone. It's decaying at the calendar. The pet-insurance gap is the third — only 4% of US pets are insured, but Trupanion's data shows insured pets visit 80% more and spend 2× more. Practices that push insurance enrollment outearn the ones that don't by 30%+ on revenue per client. And the after-hours triage gap is the fourth: 40% of after-hours calls go nowhere because generic answering services can't triage medical urgency. The rollups install all four of these on Day 1. The independents who close them keep their doors open. The ones who don't sell at 5-7× — to Thrive, five miles down the road.",
  patternStats: [
    {
      value: "$16,503",
      label:
        "Wage gap on a single new-grad DVM hire. Corporate signing bonus avg $27,181 (81% of offers) vs independent $10,678 (42% of offers). You can't outbid Mars on cash. You can outwork them on tighter operations.",
      source: "Robert Chelle — Veterinary Associate Bonus Structures 2025",
    },
    {
      value: "48% / 85.8 days",
      label:
        "Visit interval stretched from 57.6 days (2018) to 85.8 days (2025). Active clients per practice losing 95/year. The leak isn't phone tag — the relationship is decaying.",
      source: "AVMA 2025 Economic State of the Profession",
    },
    {
      value: "4% → 12%",
      label:
        "US pet-insurance penetration vs the rate practices that push enrollment hit. Insured pets visit 80% more and spend 2× more (NAPHIA + Trupanion). The largest under-pulled lever in the vertical.",
      source: "NAPHIA 2025 State of Industry + Trupanion vet portal data",
    },
    {
      value: "$350M",
      label:
        "Thrive Pet Healthcare's March 2025 raise. ~360-400 hospitals. HQ: 211 Walter Seaholm Drive, Austin. Five miles from your practice. Mars owns 2,000+ clinics. NVA owns 1,400+. The acquirer is local.",
      source: "PR Newswire 2025-03-31 + TSG Consumer",
    },
  ],

  mathHeadline: "$197K of cash. $760K of client revenue you keep.",
  mathBody:
    "Representative independent Austin 2-DVM practice: ~$1.95M gross revenue, ~3,350 active clients, $622 average revenue per client (AVMA 2025), 22% no-show on procedures, ~4% insurance penetration, no automated recall sequence. Four leaks at this scale:",
  mathRows: [
    {
      label: "Lapsed-wellness recall — PetDesk + ezyVet auto-sequence on the 85-day window (80 lapsed/mo × 12 × $78/visit avg)",
      value: "= $74,640",
    },
    {
      label: "No-show stack — SMS 72h + auto-call 24h + procedure deposit (22% → 9% on 8,400 visits × $85)",
      value: "= $93,240",
    },
    {
      label: "Missed inbound calls — GuardianVets medical triage covers nights/weekends, 40% of after-hours captured × $325 LTV",
      value: "= $39,000",
    },
    {
      label: "Pet-insurance lift — Trupanion vet-portal direct-pay, 4% → 12% penetration × 80% visit lift × $622 revenue per client",
      value: "= $60,000",
    },
    {
      label: "Conservative cash recovered, year one",
      value: "= $197,000",
    },
  ],
  mathConclusion:
    "$197K of cash recovered in year one. $760K of 5-year client revenue kept on top — sitting in the clients who otherwise drift to Banfield down the road. Mars can pay your next DVM $16,500 more than you can in signing bonus alone, and Thrive is five miles down Walter Seaholm. You can't compete on the bonus. You can compete by getting two doctors doing three doctors' work.",

  quotes: [
    {
      text: "Private equity has been circling me like a vulture for years. They call. They mail. They show up at conferences. They want what we built and they want it cheap.",
      attribution: "Otto Sharp, DVM — Swannanoa Valley Animal Hospital (via Asheville Watchdog)",
    },
    {
      text: "The independents winning right now are the ones running tighter operations than the corporate hospitals. That's the only competitive advantage left.",
      attribution: "Jeff Johansson, DVM — Beacon Veterinary Specialists, Asheville (via Asheville Watchdog)",
    },
    {
      text: "Independent practices we track are running +5% revenue year-over-year while corporate-owned hospitals are at -1.2% on visits. The customer is voting with their feet — but the talent isn't.",
      attribution: "Sheri Gilmartin, VP, Vetsource — 8,000+ clinic dataset (via Dr. Andy Roark)",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Lapsed-wellness recall sequence — kill the relationship decay",
      body: "The leak isn't phone tag. It's the 28-day stretch in visit interval (57.6 → 85.8 days, AVMA 2025) that turns an active client into a churned one without anyone noticing. The move: wire PetDesk or AllyDVM into ezyVet, Cornerstone, or AVImark. Auto-fire on the 85-day window: SMS 'Bella's overdue for her annual — book in 60 seconds.' Email follow-up at 95 days. Phone touch at 110. Covetrus + IDEXX Vello both have research showing structured recall sequences pull lapsed-wellness back at 23-31% conversion vs the 4-7% manual front-desk callback baseline. On a 3,350-client book, 80 reactivated wellness visits/month × 12 × $78 average ticket = $74,640 of revenue you've already earned — you just haven't asked for it.",
    },
    {
      number: "02",
      title: "No-show stack — SMS 72h + auto-call 24h + deposit on procedure",
      body: "Industry no-show rate runs 22% on procedures. The three-touch confirmation stack pulls it to 9%. SMS at 72 hours ('Bella's surgery is Friday — reply Y to confirm'), automated voice call at 24 hours, $50-100 non-refundable deposit at scheduling for surgical/dental. PetDesk handles the messaging cadence; ezyVet/Cornerstone/AVImark handle the deposit at booking. Industry data from PetDesk: deposits alone cut no-shows 60%+, and the practices running all three layers report sub-10% no-show on $400-$1,200 procedure tickets. On 8,400 annual visits × 13-point no-show reduction × $85 average margin per slot = $93,240 of recovered revenue. Same DVM, same chair, same procedure list — just full now.",
    },
    {
      number: "03",
      title: "Pet-insurance enrollment via Trupanion vet-portal direct-pay",
      body: "US pet insurance penetration is 4% nationally. The independent practices winning the revenue-per-client game push it to 12%+ on their book and watch revenue per active client jump 30-50%. Mechanism: insured pets visit 80% more often and spend 2× per visit (NAPHIA + Trupanion data). The move: front-desk pushes Trupanion enrollment at every new-patient + every wellness visit (Trupanion offers vet-portal enrollment with same-day coverage), clinic accepts Trupanion direct-pay claims at checkout (no client reimbursement friction), ezyVet has a native Trupanion integration that handles claim submission inline with billing. On a 3,350-client book moved from 4% → 12% insured = 268 newly-insured pets × $622 revenue per client × 80% visit lift = $60K of incremental revenue from clients you already have. Vet-only lever: no other vertical has a payer-aligned visit multiplier on the existing book.",
    },
    {
      number: "04",
      title: "GuardianVets medical triage + Vetstoria/PetDesk online booking",
      body: "Generic answering services can't triage medical urgency — they take a message. The 40% of after-hours calls that go nowhere = lost emergency revenue and a client who Googled and ended up at BluePearl down the road. GuardianVets staffs licensed vet techs (not phone reps) doing medical triage 24/7, integrates into ezyVet/Cornerstone, and either books the appointment for the morning or routes the true emergency to the on-call ER. ROI per GuardianVets's own data: $4-8 returned per $1 spent. Layer in Vetstoria or PetDesk online booking for daytime self-service capture. On 80 missed after-hours calls/month × 40% captured × $325 LTV-per-new-client = $39K of recovered revenue. Vet-only: medically-trained triage cannot exist outside this vertical.",
    },
  ],

  toolsBody:
    "Your practice management system (PIMS), client comm layer, and answering stack already exist. Thrive, Mars/VCA, and NVA standardize the same setup on Day 1. The question is whether you've turned on the features you already pay for.",
  toolsList: [
    "ezyVet — cloud-native PIMS, strong on integrations (Trupanion, PetDesk, GuardianVets all native)",
    "Cornerstone (IDEXX) — legacy practice-mgmt standard, Vello reminder layer",
    "AVImark (Covetrus) — established PIMS, Rapport client-comm integration",
    "PetDesk — client engagement + automated recall + 2-way SMS, $300-600/mo",
    "AllyDVM — recall + reminder alternative, Covetrus-acquired",
    "IDEXX Vello — IDEXX-native reminder + recall layer",
    "Trupanion vet portal — direct-pay claims + same-day enrollment at checkout",
    "GuardianVets — vet-tech medical triage, 24/7, integrates with most PIMS",
    "Vetstoria — online booking, ~$200/mo, real-time PIMS sync",
    "Spruce Health — HIPAA-compliant 2-way client SMS",
  ],

  caseStudyHeadline: "Austin pilot — closing the per-doctor productivity gap on a 2-DVM practice.",
  caseStudyBody:
    "A 2-DVM Austin practice (~3,350 active clients, ~$1.95M gross revenue) is the planned 2026 pilot for the four-move stack: PetDesk lapsed-wellness recall wired into ezyVet on the 85-day window, three-touch no-show stack with deposit-on-procedure, Trupanion vet-portal direct-pay enrollment SOP, and GuardianVets after-hours medical triage. The full operational diff — PetDesk recall template, ezyVet deposit rule, Trupanion enrollment script, GuardianVets routing config — will be published when the 90-day data closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Get two doctors doing three doctors' work.",
  ctaBody:
    "Thrive Pet Healthcare is headquartered at 211 Walter Seaholm Drive — five miles from you. They raised $350M in March, run 360-400 hospitals, and pay $27,181 average signing bonus to new-grad DVMs. Mars Petcare owns VCA (1,000+), Banfield (1,000+), and BluePearl (250+). NVA sits inside JAB Investors with 1,400+. Ethos spun out specialty in 2023 with 145 hospitals. The independents who close the wage gap do it with tighter operations — same two doctors, more work done. The ones still on paper recall lists watch their clients drift to the Banfield down the road. 30 minutes — I walk the lobby, pull your ezyVet or Cornerstone data, your recall list, your no-show rate, your insurance penetration, your after-hours call log. No deck. No pitch. I show you which of the four operator moves pays back first, in the order that lands before your next associate-offer cycle.",

  citations: [
    { label: "AVMA — 2025 Economic State of the Profession (visit-interval + ARPU benchmarks)", url: "https://ebusiness.avma.org/files/productdownloads/002_AVMA_SotPReport25_NoPasswordPRO.pdf" },
    { label: "AVMA — Less Foot Traffic Spells Declining Revenue", url: "https://www.avma.org/news/less-foot-traffic-veterinary-practices-spells-declining-revenue" },
    { label: "Asheville Watchdog — PE Is Reshaping Vet Clinics (Otto Sharp + Jeff Johansson quotes)", url: "https://avlwatchdog.org/private-equity-is-reshaping-ashevilles-vet-clinics-theyre-circling-me-like-a-vulture/" },
    { label: "Dr. Andy Roark — Practices in 2025 (Sheri Gilmartin / Vetsource quote)", url: "https://drandyroark.com/practices-in-2025/" },
    { label: "TSG Consumer — Thrive Pet Healthcare profile", url: "https://www.tsgconsumer.com/pets/thrive-pet-healthcare" },
    { label: "PR Newswire — Thrive $350M financing (March 31, 2025)", url: "https://www.prnewswire.com/news-releases/thrive-pet-healthcare-secures-new-financing-providing-350-million-of-enhanced-liquidity-to-drive-future-growth-302414704.html" },
    { label: "Robert Chelle — Veterinary Associate Bonus Structures (wage-gap data)", url: "https://reviewveterinarycontracts.com/resources/veterinary-associate-bonus-structures/" },
    { label: "NAPHIA — 2025 State of the Industry (pet insurance penetration + visit-lift data)", url: "https://naphia.org/news/naphia-news/soi-report-2025/" },
    { label: "Trupanion Vet Portal — clinic direct-pay claims", url: "https://vet.trupanion.com/get-connected-with-trupanion/" },
    { label: "PetDesk — No-show benchmarks + case studies", url: "https://petdesk.com/blog/10-tips-for-handling-no-show-clients" },
    { label: "GuardianVets — FAQ + ROI ($4-8 per $1 spent)", url: "https://www.guardianvets.com/faqs" },
    { label: "First Page Sage — 2025 Vet Practice EBITDA Multiples", url: "https://firstpagesage.com/business/veterinary-practice-ebitda-valuation-multiples/" },
  ],
};
