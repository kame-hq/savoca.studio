// Savoca Studio · Pitch Deck content — vertical-specific data
// Three verticals, same spine. Drop in this file alongside brand/pitch-deck.jsx.

window.DeckContent = {
  // ─────────────────────────────────────────────────────────────────────────
  "home-services": {
    vertical: "Home Services",
    cover: {
      title: "Where revenue leaks · in home services.",
    },
    hook: {
      stat: "85%",
      statLabel: "of homeowners hire the first contractor who calls back.",
      body: "Demand for home services is high. Patience for a delayed callback is not. The first business to respond is closing the job before your team even returns the call.",
      source: "Service Direct · Service Industry Lead Response Report, 2024",
    },
    problem: {
      title: "The job goes · to the fastest reply.",
      sub: "Most home services owners are competing on price and reviews. The leak isn't there. It's in the four handoffs between the first ring and the deposit.",
      points: [
        "Calls missed after 5pm",
        "Quotes that go cold",
        "Jobs tracked in texts",
        "Reviews never asked for",
      ],
    },
    verticalLeaks: {
      title: "The four leaks · in your shop.",
      leaks: [
        { stage: "02 · Capture", title: "After-hours calls die in voicemail.",  note: "60%+ of emergency demand hits outside business hours. Voicemail is a small, polite goodbye." },
        { stage: "03 · Respond", title: "Quote requests sit until morning.",     note: "By morning, the homeowner has two other quotes and a half-formed loyalty to whichever guy texted at 8pm." },
        { stage: "05 · Deliver", title: "Job status lives in text threads.",     note: "No customer-facing visibility. Anxious customers call the office. Office calls the tech. Tech calls the customer back." },
        { stage: "06 · Retain",  title: "Reviews never get asked for.",          note: "The happy customer is the review you'll never get. The silent system is one SMS away." },
      ],
    },
    deliverables: [
      { title: "Capture, wired",   body: "Missed-call text-back. After-hours form. SMS reply within 60s of any inbound — phone, web, DM." },
      { title: "Quote that closes",body: "Templated estimate flow. Auto-reminder at 24h and 72h. Deposit collected at the form, not after the close." },
      { title: "Job visibility",   body: "Status SMS to the customer at scheduled, on-the-way, on-site, complete. Cuts inbound 'where are you?' calls cold." },
      { title: "Review on autopilot", body: "Post-job SMS with one tap to leave a Google review. Negative path goes to you privately." },
      { title: "Pipeline reporting", body: "Weekly snapshot: where leads came from, where they died, which crew closed which jobs." },
      { title: "On-call partner",  body: "Tool changes, hires, vendor calls — I'm in the loop. No agency between you and the work." },
    ],
    pricingRec: "Studio",
    examples: [
      {
        band: "Operation",
        client: "AstroTurf",
        url: "astroturf.dev",
        summary: "RevOps system for a multi-location synthetic-turf installer. Custom data model, vertical-specific lead routing, install-day automation, and reporting that ties marketing spend to closed-job revenue.",
        stack: "Next.js · Supabase · Twilio · HubSpot · Stripe",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  "professional-services": {
    vertical: "Professional Services",
    cover: {
      title: "Where revenue leaks · in professional services.",
    },
    hook: {
      stat: "47 hrs",
      statLabel: "the average first-response time across professional service firms.",
      body: "Your prospect already met with a competitor by the time most firms reply. The leak isn't lead quality. It's the speed of the operating layer between intake and intro call.",
      source: "InsideSales · Lead Response Management Study, updated 2023",
    },
    problem: {
      title: "Intake is not · engagement.",
      sub: "Most firms confuse a submitted form for a started relationship. The handoff between intake and a real human conversation is where the deal is quietly lost — every time.",
      points: [
        "Intake forms sit overnight",
        "Proposals stall in inboxes",
        "No clear pipeline view",
        "Referral loop runs on luck",
      ],
    },
    verticalLeaks: {
      title: "The four leaks · in your firm.",
      leaks: [
        { stage: "02 · Capture", title: "Intake forms aren't intake.",            note: "A form fill isn't a client. Without an SMS or phone follow-up inside the speed-to-lead window, the prospect hires whoever called first." },
        { stage: "03 · Respond", title: "No qualification layer.",                note: "Senior time spent on bad-fit consults. The leak isn't a lawyer's hour — it's the good-fit prospect who walked while she was on a no-fit call." },
        { stage: "04 · Convert", title: "Proposals stall after the call.",        note: "Send, hope, follow up manually two weeks later. Most lost engagements were 'just about to sign' and forgot." },
        { stage: "06 · Retain",  title: "Referrals run on luck.",                 note: "The happiest client is the referral source you never asked. A system asks. It also tracks who said yes." },
      ],
    },
    deliverables: [
      { title: "Qualified intake",  body: "Form → enrichment → scoring → routing. Senior calendar protects itself; junior or async handles bad-fit." },
      { title: "Speed-to-lead",     body: "Auto SMS + email inside 5 minutes of any inbound. Calendar embed for self-serve booking on the qualified path." },
      { title: "Proposal pipeline", body: "Status visible to you and the prospect. Auto-nudge at 48h, 7d, 14d. Templated close paths for each service line." },
      { title: "Client lifecycle",  body: "Onboarding handoff, kickoff template, NPS at delivery, referral ask at the right moment." },
      { title: "Executive reporting", body: "Pipeline by source, stage, owner, value. The same governance you'd expect at an enterprise GTM." },
      { title: "On-call partner",   body: "Tool stack stays clean. New service lines stand up fast. You work with me, not a project manager." },
    ],
    pricingRec: "Operation",
    examples: [
      {
        band: "Operation",
        client: "MorningCut",
        url: "morningcut.golf",
        summary: "Operating layer for a high-end golf club — membership inquiry to onboarding, with reporting on inquiry-to-conversion and a clean intake that protects pro-shop time.",
        stack: "Next.js · Supabase · HubSpot · Stripe · Postmark",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  "health-local": {
    vertical: "Health & Local",
    cover: {
      title: "Where revenue leaks · in health & local.",
    },
    hook: {
      stat: "1 in 4",
      statLabel: "calls to a service business never gets a callback.",
      body: "Dental, medspa, vet, gyms, studios — these run on a phone, a calendar, and a chair. Every unanswered call is an unfilled seat and a patient who calls the practice down the road.",
      source: "Invoca · Call Tracking & Industry Benchmarks Report, 2024",
    },
    problem: {
      title: "The chair · is the asset.",
      sub: "An empty chair at 2pm Tuesday is not free. The leak is not the marketing — it's the handoff between the inquiry and the booked, paid, repeat visit.",
      points: [
        "Calls missed at lunch",
        "Forms filled, not followed",
        "No-shows without deposits",
        "Patients never reactivated",
      ],
    },
    verticalLeaks: {
      title: "The four leaks · in your practice.",
      leaks: [
        { stage: "02 · Capture", title: "Missed calls go to voicemail purgatory.", note: "Especially at lunch and after hours. The patient with a toothache isn't waiting for a callback — they're already on Google searching for the next practice." },
        { stage: "04 · Convert", title: "No deposit at booking.",                   note: "A booking without skin in the game is a coin flip with worse odds. The 'maybe' books somewhere with a smoother checkout." },
        { stage: "05 · Deliver", title: "No-shows without reminders.",              note: "The two-SMS reminder cadence cuts no-shows by a meaningful margin. Most practices send one — or none." },
        { stage: "06 · Retain",  title: "No reactivation system.",                  note: "Dormant patients are the cheapest revenue on the planet. A 90-day re-engagement sequence converts at rates that should embarrass every practice without one." },
      ],
    },
    deliverables: [
      { title: "Missed-call capture", body: "Auto-text within 60s of any unanswered call. Books straight to the calendar. Stops the patient from calling the next clinic on the list." },
      { title: "Deposit at booking",  body: "Online booking page with a deposit hold. Real intent, real calendar, real revenue protection." },
      { title: "No-show prevention",  body: "Two-SMS + email reminder cadence. Easy reschedule path. Recoups the chair before it goes empty." },
      { title: "Reactivation engine", body: "Dormant patients re-engaged on a 90-day cadence. New service offers timed to lifecycle, not blasts." },
      { title: "Review capture",      body: "Post-visit SMS with one-tap Google review. Negative path is private. Reviews compound, silence compounds faster." },
      { title: "Pipeline reporting",  body: "Source → booking → show → revenue → repeat. One view, weekly. The single biggest leak, named." },
    ],
    pricingRec: "Solo",
    examples: [
      {
        band: "Solo",
        client: "Krazy Strong",
        url: "krazystrong.app",
        summary: "Booking, lead capture, and automation layer for a solo strength coach. From DMs and form fills to a confirmed session — automated end-to-end, owner only sees clients who paid.",
        stack: "Next.js · Supabase · Stripe · Twilio",
      },
    ],
  },
};
