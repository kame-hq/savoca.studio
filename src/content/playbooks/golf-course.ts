import type { PlaybookContent } from "./types";

export const golfCourse: PlaybookContent = {
  slug: "golf-course",
  vertical: "Golf Courses & Country Clubs",
  verticalShort: "Golf Course",
  title: "The Revenue Per Round Playbook",
  subtitle:
    "Why a typical Austin / Round Rock semi-private course leaks $270–365K of cash a year and another $333K of member revenue it keeps losing to churn — and the four operator moves that close the gap.",
  edition: "18 / Golf Course Edition / 2026",

  introBody:
    "Demand has never been higher. NGF logged 545 million rounds in 2024 — a fifth straight year over 500M. Texas tips it further: waitlists at Forest Creek, Avery Ranch, Falconhead, Hills of Lakeway, Barton Creek. And while the demand line goes up, the operating line at the independent course goes sideways: 18–22% annual dues churn, 9–12% weekend no-shows, F&B capture stuck at $8–15 per round against an industry potential of $22–28, outing inquiries that die in voicemail. Arcis took its 15th Texas property in May. Bain bought Concert Golf in November. The rollups aren't a threat — they're proof the moves work. This playbook is for the GM, head pro, or owner who's tired of being told to 'do more marketing' and wants to look at the gap between an independent course and a well-run one.",

  patternHeadline: "Full sheet. Light till.",
  patternBody:
    "Three leaks. Same course. F&B capture per round runs $8–15 against a $22–28 industry potential — at 60% gross margin on the bev cart, that gap is $270K of profit a year on a 45,000-round book. Member dues churn runs 18–22% with no structured engagement between intake and renewal notice — every five points of churn cut keeps $333K of LTV on a 600-member book. Tee-time no-shows run 9–12% on weekend mornings (15%+ in summer) because most courses still confirm by phone with no card on file. The well-run courses — Arcis, Concert (now Bain), Invited (now KSL), Troon — fix all three in their first 90 days. The moves aren't proprietary. You don't need a $1.3 billion check to run them.",
  patternStats: [
    {
      value: "30¢",
      label:
        "Revenue gap per green-fee dollar. Independent course earns $1.15. Well-run course earns $1.45. Four operator moves close the gap.",
      source: "NGF — Course Economics in the Experience Era",
    },
    {
      value: "$10 / round",
      label:
        "F&B capture gap (industry potential $22–28 vs independent $8–15). $270K of profit a year on 45K rounds.",
      source: "Club Benchmarking F&B Operating Report",
    },
    {
      value: "18–22%",
      label:
        "Annual member dues churn at private and semi-private clubs. Every 5-point cut keeps $333K of 5-year member revenue.",
      source: "GGA Partners / Club Benchmarking 2024",
    },
    {
      value: "$1.3B",
      label:
        "Bain paid for Concert Golf in November. 14 clubs in 3 years, revenue doubled. Arcis took Woodlands CC in May — its 15th Texas property.",
      source: "Bain Capital + D CEO Magazine, May 2025",
    },
  ],

  mathHeadline:
    "$365K cash this year. $333K of member revenue you keep instead of losing to churn.",
  mathBody:
    "Representative independent Austin semi-private: ~45,000 rounds/year, 600 active members at $185/mo dues — a $1.33M recurring book on top of $2.7M in green-fee revenue. Four leaks at this scale:",
  mathRows: [
    {
      label: "F&B capture — $8–15/round vs industry $22–28. $10/round × 45K rounds × 60% bev-cart margin.",
      value: "= $270K profit",
    },
    {
      label: "Tee-time no-shows — 11% on 18K weekend rounds × $72. Auto-rebook fills half.",
      value: "≈ $65K",
    },
    {
      label: "Outing miss — 1 daily-fee/wk + 4 corporate quarterlies at $25K × 30% margin.",
      value: "≈ $30K",
    },
    {
      label: "Conservative cash recovered, year one (F&B + no-shows + outings)",
      value: "= $365,000",
    },
    {
      label: "Member churn — cut 15% to 10%. 30 members kept × $11,100 of 5-year dues each. (Multi-year revenue, not year-one cash.)",
      value: "+ $333K",
    },
  ],
  mathConclusion:
    "$365K of cash recovered in year one — and $333K of member revenue kept over five years on top. No renovation, no tournament sponsor, no new logo. The gap between an independent course and a well-run one is four operator moves and nine months of installation.",

  quotes: [
    {
      text: "I have the data now to prove we should not ever go back to letting a customer book a reservation without paying something up front.",
      attribution: "Dustin Volk, Head Pro, Valley View Golf Course — via foreUP case study",
    },
    {
      text: "In winter you can't get round in daylight if you start much after 12, so wasted tee times are keeping others from a proper game of golf.",
      attribution: "North Mimms, GolfMonthly forum (no-show thread)",
    },
    {
      text: "Concert Golf Partners doubled both revenue and profitability over three years, completing 14 strategic acquisitions and growing the platform from 25 to 39 clubs.",
      attribution: "Bain Capital × Concert Golf transaction note, November 17, 2025",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Card-on-file hold + auto-rebook waitlist on every tee-time",
      body: "The default tee-sheet workflow at most independents is still phone confirmation — no card, no penalty, no automation. The data is binary: foreUP-tracked courses without prepayment run an 81.97% show rate. With prepayment: 95.37%. That 13-point lift on a 45,000-round book × $60 average = $351K of recovered inventory (gross; recoverable share ~50%). Every booking holds a card. 24-hour cancel window or charge half-rate. The moment a cancellation comes in, the system fires an SMS to the next 10 on the waitlist with a one-tap rebook link. Foreup, Lightspeed Golf, Club Caddie, GolfNow G1, and Club Prophet all support card-on-file holds + waitlist auto-fire natively. Most courses bought the feature and never turned it on. Recovery: 50–70% of cancelled weekend slots refilled inside 90 minutes.",
    },
    {
      number: "02",
      title: "Use GHIN as the retention engine",
      body: "Most clubs treat GHIN as a record-keeping cost. The clubs that keep members use it as the core of their member-engagement program. GHIN is the largest handicapping service in the world (USGA, mandatory for member competition) and sits unused on the desktop. Wire GHIN sync into your tee sheet — Foreup, Clubessential, and Club Prophet all support it natively; Golf Genius runs the tournament layer on top — and use it to build flighted member-vs-member ladders, season-long handicap-improvement leaderboards, weekly group-low-net contests, all auto-rolled from the tee sheet. Pair with a 60 / 90 / 270 onboarding touch sequence — Day 60 head-pro check-in, Day 90 first guest pass, Day 270 pre-renewal coffee with the GM, not a renewal notice. Structured onboarding lifts 90-day retention from 68% to 85% (Club Solutions 2024). Cutting Y1 churn from 15% to 10% on a 600-member book keeps $333K of dues every year. The retention engine is already on the desk you're paying for.",
    },
    {
      number: "03",
      title: "In-cart F&B ordering + cart-GPS attach",
      body: "F&B is the highest-margin revenue stream on the property and the most underbooked. Industry potential per round: $22–28. Independent course typical: $8–15. The $10/round gap × 45K rounds = $450K of unbooked revenue, $270K of unbooked profit at 60% bev-cart margin. The fix isn't a bigger menu — it's the cart screen. Tagmarshal operates a cart-GPS network across 700+ courses with 15,000 in-cart screens; when a playing group approaches the halfway house, the screen fires a one-tap order ('Cold beer waiting at the turn — tap to add'). Toast or Square handles the halfway POS; Tagmarshal or Visage runs the cart layer; Foreup or Lightspeed syncs to the tee sheet. The cart-screen ad inventory alone earns $10K/season for the course — separate from the F&B attach lift, which runs $5–10 per round on the same labor in the first season.",
    },
    {
      number: "04",
      title: "Sub-1-hour outing-inquiry SLA with calendar-aware auto-quote",
      body: "Corporate outings run $4,500 daily-fee, $15K–50K for private weekend events. The buyer is sending the same RFP to four courses. The first to reply within an hour closes 60%+. Wire a dedicated outings@ inbox that pages the events director on Slack or SMS within 60 seconds of an inbound. Auto-acknowledge ('We got it — pulling our calendar, call you back in the hour.'). Real human callback inside the business-day hour. Tripleseat ($89–149/mo), Event-Temple, and Cloudbeds all run template-driven auto-quote on top — the Galloping Hill daily-fee case (NJ) cut delayed-response loss to competitor venues to near zero with Tripleseat's template engine. One missed daily-fee outing per week × $4,500 × 50% close = ~$5,600 of revenue. Four missed corporate quarterlies × $25K × 30% margin = $30K of profit. That's $35–40K of recoverable outing revenue annually, on workflow alone.",
    },
  ],

  toolsBody:
    "Your tee sheet, POS, member-mgmt stack, and GHIN sync already exist. The question is whether the right features are turned on. Auto-rebook waitlists, card-on-file holds, GHIN-driven competitions, in-cart F&B ordering, and outing-CRM SLAs all live inside the software a typical independent already pays for — most operators never flip the switches. Arcis, Concert, Invited, and Troon all run the same stack on Day 1.",
  toolsList: [
    "Foreup — tee sheet + member mgmt + GHIN sync + marketing automation (~1,700 NA clients)",
    "Lightspeed Golf (Chronogolf legacy) — tee sheet + POS + F&B",
    "Club Caddie — fastest-growing tee-sheet platform (+20% in 2025)",
    "GolfNow Business / G1 (NBC Sports Next) — tee sheet, dynamic pricing, marketplace reach",
    "Clubessential — native GHIN integration, private-club focus",
    "Club Prophet Systems — full-stack club ops with native GHIN sync",
    "Jonas Club Software — high-end private-club operations",
    "Golf Genius — GHIN tournament management layer (the standard)",
    "Tagmarshal — cart GPS + in-cart screens, 700+ courses, $10K/season cart-screen ad revenue",
    "Toast / Square — halfway house + bev-cart POS, tee-sheet integrations",
    "Tripleseat / Event-Temple / Cloudbeds — outing + banquet CRM with SLA tracking ($89–149/mo)",
  ],

  caseStudyHeadline: "Forest Creek pilot — closing the revenue-per-round gap on a 45K-round semi-private.",
  caseStudyBody:
    "A semi-private 18-hole Round Rock course (~200 active members, ~45,000 rounds/year) is the planned 2026 pilot for the four-move stack: card-on-file holds via Foreup, GHIN-driven member engagement through Golf Genius + Clubessential, in-cart F&B + Tagmarshal cart-screen attach with Toast halfway POS, and sub-1-hour outing SLA on Tripleseat. The full operational diff — exact Foreup card-hold configuration, GHIN flight-build template, Tagmarshal halfway-house menu sync, Tripleseat outing-quote template — will be published when the 90-day data closes. Want to be the next case study? Book a 30-minute walk-the-course conversation.",

  ctaHeadline:
    "Four operator moves. Nine months. Same course.",
  ctaBody:
    "The gap between an independent course and a well-run one is four operator moves. Card-on-file holds with an auto-rebook waitlist. GHIN wired into member engagement. In-cart F&B ordering on Tagmarshal screens. Sub-1-hour outing SLA on Tripleseat. The well-run courses run all four. 30 minutes — I walk the proshop, pull your foreUP or Lightspeed tee-sheet data from the last 90 days, your member retention report, your outings inbox response times, and I show you where the next $365K of cash and $333K of member revenue lives. No deck. No pitch. I show you which of the four moves pays back first, in the order that lands before the next aerification window.",

  citations: [
    { label: "NGF — Course Economics in the Experience Era (revenue-per-round benchmarks, $1B no-show opportunity)", url: "https://www.ngf.org/short-game/course-economics-in-the-experience-era/" },
    { label: "NGF — Rounds Played Report 2025 (545M rounds)", url: "https://www.ngf.org/member-publication/rounds-played-report-2025/" },
    { label: "GGA Partners — Key Benchmarking Standards in Golf (5–8% healthy attrition, 25% Y1 quit)", url: "https://ggapartners.com/2018/11/golf-benchmarking-standards/" },
    { label: "Club Benchmarking — F&B Profitability + Operating Report", url: "https://www.clubbenchmarking.com/blog/bid/295534/food-and-beverage-profitability" },
    { label: "foreUP — What No-Shows Are Costing You (Dustin Volk, 82% → 95% show-rate data)", url: "https://www.foreupgolf.com/what-no-shows-are-costing-you/" },
    { label: "Bain Capital — Acquisition of Concert Golf from Clearlake (Nov 17, 2025, $1.3B)", url: "https://www.baincapital.com/news/clearlake-exits-its-investment-concert-golf-partners-bain-capital-invests-support-further" },
    { label: "D CEO Magazine — Invited × Arcis Golf Strike Woodlands CC Deal (May 2025)", url: "https://www.dmagazine.com/business-economy/2025/05/invited-and-arcis-golf-strike-first-ever-deal/" },
    { label: "Tagmarshal — Cart-GPS Revenue (700 courses, 15K screens, $10K/season ad inventory)", url: "https://www.tagmarshal.com/how-tagmarshals-golf-cart-gps-technology-helps-courses-generate-additional-revenue/" },
    { label: "Club Solutions Magazine — Club Onboarding Retention (90-day 68% → 85%)", url: "https://clubsolutionsmagazine.com/2024/10/the-keys-to-retention-elevating-the-club-onboarding-experience/" },
    { label: "USGA / GHIN — handicap system + API integration", url: "https://www.ghin.com/" },
    { label: "Tripleseat — Galloping Hill Golf Course case", url: "https://tripleseat.com/blog/how-tripleseat-helps-galloping-hill-golf-course-provide-exceptional-events/" },
    { label: "The Business of Golf — Why PE Suddenly Loves Golf ($5.5B deployed in 18 months)", url: "https://www.thebusinessofgolf.co/p/why-private-equity-suddenly-loves-golf" },
  ],
};
