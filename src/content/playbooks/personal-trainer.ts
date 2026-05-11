import type { PlaybookContent } from "./types";

export const personalTrainer: PlaybookContent = {
  slug: "personal-trainer",
  vertical: "Personal Trainers & Online Coaches",
  verticalShort: "Personal Trainer",
  title: "The Empty Slot Playbook",
  subtitle:
    "Why the average Austin solo trainer leaks $40K–$50K a year on cancellations, no-shows, and ghosted DMs — and the four operator moves that plug it before you add a single new client.",
  edition: "07 / Personal Trainer Edition / 2026",

  introBody:
    "The US personal training industry just posted its first contraction in five years. Corporate gyms own the foot traffic. ClassPass commoditizes the session. A flood of online coaches saturates Instagram. There are 329,000 personal training businesses in America and the average one has 1.1 employees — one human, a phone, a Trainerize login, and a half-full schedule. This playbook is for the solo trainer who's tired of being told to 'post more content' or 'run more ads' and wants to look at the leak inside the funnel instead. The math is brutal. The fixes are 90% process, 10% tools.",

  patternHeadline:
    "Your funnel isn't dry. It's leaking.",
  patternBody:
    "Two leaks define the indie trainer's P&L. First, the empty slot: 17% cancellation rate, 11% no-show rate, and 36% of cancels arrive in the last 2 hours — when there's no time to refill the spot. Second, the dead DM: trainers average a 4–6 hour reply time, and leads contacted within 5 minutes convert 21× the rate of leads contacted after 30. The bucket has holes. More marketing just pours faster.",
  patternStats: [
    {
      value: "17% + 11%",
      label: "industry cancellation rate + no-show rate per session",
      source: "SchedulingKit / multi-source",
    },
    {
      value: "21×",
      label: "conversion lift on DMs answered in <5 min vs 30 min",
      source: "Inrō / Creatorflow / MIT lead-response data",
    },
    {
      value: "4–6 hrs",
      label: "average creator/coach DM response time",
      source: "Creatorflow",
    },
    {
      value: "$4,200+",
      label: "industry-cited annual loss to cancels/no-shows per trainer (conservative)",
      source: "SchedulingKit",
    },
  ],

  mathHeadline: "$45K walks out of your schedule every year.",
  mathBody:
    "Solo Austin trainer. 20 sessions/wk × 50 wks, $85 avg session. We're only counting the schedule leak + the DM leak. Not the price-shopper who never books. Not the cancelled package mid-tenure.",
  mathRows: [
    { label: "Weekly sessions booked", value: "20" },
    { label: "Combined cancel + no-show rate", value: "× 28%" },
    { label: "Lost sessions per week", value: "= 5.6" },
    { label: "Working weeks", value: "× 50" },
    { label: "Lost sessions / year", value: "= 280" },
    { label: "Avg session value", value: "× $85" },
    { label: "Empty-slot leak", value: "= $23,800" },
    { label: "Plus: 10 IG DMs/wk × 30% reply × 15% would-convert × $400 first-month", value: "+ $21,800" },
    { label: "Total annual leak", value: "= ~$45,600" },
  ],
  mathConclusion:
    "That's the equivalent of a second part-time income evaporating between your front desk and your Calendly. 90% recoverable. None of it requires another follower.",

  quotes: [
    {
      text: "Quite often, people ghost you because they are afraid to tell you stuff they think you don't want to hear.",
      attribution: "Personal Trainer Development Center (PTDC)",
    },
    {
      text: "Do they hate me? Did I say something? Should I even be a fitness professional?",
      attribution: "PTDC — on the self-talk after a client ghosts",
    },
    {
      text: "Most trainers follow up once and give up. The majority of sales happen between the fifth and twelfth contact point.",
      attribution: "Trainerize sales playbook, multi-source",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Hit the 5-minute DM standard — automatically",
      body: "IG is your top of funnel. Speed-to-lead determines everything. Wire a 60-second auto-reply on IG DMs (ManyChat is the indie-trainer default — free tier covers a solo coach). Auto-message says 'Hey! Thanks for the DM — I'll personally write back inside the hour. While you wait, here's my session menu / consult booking link.' Then manual reply within 5 min during business hours. The 21× conversion lift is not a typo.",
    },
    {
      number: "02",
      title: "Enforce a 24-hour cancellation policy + auto-rebook",
      body: "24-hour policy cuts no-shows 48%. But most trainers wrote one and never enforced it because the conversation feels awkward. Wire it into Acuity / Trainerize: same-day cancels charge full rate, and the booking page immediately offers a rebook link to the next available slot. 62% of cancellers want to reschedule — they just need the friction removed. Pair with SMS reminders at 48hr, 24hr, and 2hr (attendance lift: 22%).",
    },
    {
      number: "03",
      title: "Replace single-session selling with recurring weekly slots",
      body: "À la carte clients churn at 2.6× the rate of recurring-slot clients. Default every new client into a fixed weekly slot (Tues 6am, Sat 9am — pick two, lock them). When a client buys a 10-pack, the booking flow asks them to claim their two recurring slots before checkout. Trainerize, Acuity, and Calendly all support this — it's almost never turned on. 68% of clients prefer recurring; you just have to offer it as the default.",
    },
    {
      number: "04",
      title: "Build a 5–12 touch follow-up sequence for every consult",
      body: "Industry data: most sales happen between touches 5 and 12. Average trainer follows up once. Build a sequence: same-day SMS thanks, 48-hr value email (a one-pager on your method), 7-day case study email, 14-day soft check-in, 30-day reactivation. Tools: Trainerize built-in nurture, or Beehiiv/ConvertKit free. Templates take 2 hours to write once. Doubles your consult-to-close rate.",
    },
  ],

  toolsBody:
    "Your stack already exists. The question is whether the right features are turned on. Auto-reminders, recurring slots, and cancellation enforcement live inside every major trainer tool — most coaches never flip the switch.",
  toolsList: [
    "Trainerize — veteran, broad ecosystem, strong client app",
    "TrueCoach — clean text-based UX, lifters love it",
    "Everfit — most automation features, integration creep",
    "ABC Trainerize / My PT Hub / PT Distinction — alternatives",
    "MindBody / Vagaro — studio + multi-trainer ops",
    "Acuity / Calendly — scheduling-only, integrates everywhere",
    "ManyChat — IG DM auto-reply, free tier covers solo",
    "Beehiiv / ConvertKit — follow-up nurture sequences",
  ],

  caseStudyHeadline: "Coming Q4 2026.",
  caseStudyBody:
    "An Austin Hyrox-coached solo trainer cut no-shows 68% in 30 days using moves 01 and 02 from this playbook, recovering ~$3,200/mo of previously-evaporated session revenue. Full breakdown — exact ManyChat flow, Acuity SLA configuration, recurring-slot enforcement script — will be published here once the 90-day data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Stop pouring leads into a leaky bucket.",
  ctaBody:
    "If any of this is hitting close, the 30-min audit is free. We pull your DM response log, your booking calendar, your cancellation rate, and your consult-to-close conversion — and tell you in dollars exactly which leak is costing what. No pitch. No deck. If we can't find $1,500/mo of recoverable revenue, you don't owe me anything. If we can — I show you exactly which of these four moves to run first.",

  citations: [
    { label: "BLS — Fitness Trainers Occupational Outlook", url: "https://www.bls.gov/ooh/personal-care-and-service/fitness-trainers-and-instructors.htm" },
    { label: "IBISWorld — Personal Trainers in the US", url: "https://www.ibisworld.com/united-states/industry/personal-trainers/4189/" },
    { label: "Health & Fitness Association — 2025 Global Industry Report", url: "https://www.healthandfitness.org/2025-global-fitness-industry-report-shows-record-growth-and-whats-next-for-the-market/" },
    { label: "SchedulingKit — Personal Training Statistics", url: "https://schedulingkit.com/es/statistics/personal-training-statistics" },
    { label: "Trainerize — Pricing Personal Training Sessions", url: "https://www.trainerize.com/blog/how-much-to-charge-for-personal-training/" },
    { label: "FitBudd — 2025 Online Coaching Pricing Benchmarks", url: "https://www.fitbudd.com/post/how-much-to-charge-for-online-personal-training-in-2025" },
    { label: "Glassdoor — Austin Personal Trainer Salary", url: "https://www.glassdoor.com/Salaries/austin-tx-personal-trainer-salary-SRCH_IL.0,9_IM60_KO10,26.htm" },
    { label: "Creatorflow — Slow IG DM Responses Kill Sales", url: "https://creatorflow.so/blog/slow-instagram-dm-responses-kill-sales/" },
    { label: "PTDC — How to Reengage Clients Who Ghost", url: "https://www.theptdc.com/articles/how-to-reengage-clients-who-ghost" },
    { label: "Lift The Bar — Clients Ghosting After Pricing", url: "https://liftthebar.com/personal-trainer-daily-clients-ghosting-after-asking-for-your-prices/" },
    { label: "TrueCoach — Personal Trainer Burnout", url: "https://truecoach.co/blog/personal-trainer-burnout/" },
    { label: "Origym — PT Consultation Close Rate", url: "https://www.origym.co.uk/blog/personal-training-consultation/" },
  ],
};
