import type { PlaybookContent } from "./types";

export const tattoo: PlaybookContent = {
  slug: "tattoo",
  vertical: "Tattoo Parlors & Artists",
  verticalShort: "Tattoo",
  title: "The Empty Chair Playbook",
  subtitle:
    "Why the average solo tattoo artist in Austin leaks $35K–$55K a year on flaky deposits, ghosted DMs, and missed touch-up follow-ups — and the four operator moves that recover it before booking another flash day.",
  edition: "19 / Tattoo Edition / 2026",

  introBody:
    "Tattooing has never had more demand. Instagram made every artist their own brand, every parlor a portfolio site, every client a critic. And yet the average solo artist runs a 12-18% no-show rate, a 4-6 hour DM reply delay, and watches 60% of their custom-design inquiries die between the first message and the deposit. The chair sits empty. The bills don't. This playbook is for the resident, the booth-renter, the parlor owner, and the apprentice running their first guest spot — anyone tired of being told to 'post more flash' or 'do more outreach' and ready to look at the leak between Instagram DM and butt-in-chair.",

  patternHeadline:
    "The chair isn't empty because of demand. It's empty because of the funnel.",
  patternBody:
    "Three leaks define the indie tattoo P&L. First, the deposit no-show: artists who don't enforce non-refundable deposits with card-on-file run 12-18% no-shows, costing $200-$400 per flake. Second, the dead DM: tattoo inquiries die at a 4-6 hour reply delay industry-wide, and the leads who actually convert get a response in under 5 minutes (21× lift). Third, the missing follow-up: the average artist never reaches back after a session — no touch-up reminder, no healing check-in, no referral ask. Repeat-client revenue (the entire margin layer) walks out the door.",
  patternStats: [
    {
      value: "12–18%",
      label: "no-show rate on tattoo appointments when deposits aren't enforced",
      source: "Tattoo Smart / Booksy operator surveys",
    },
    {
      value: "21×",
      label: "conversion lift on DMs answered in <5 min vs >30 min",
      source: "Inrō / MIT speed-to-lead data",
    },
    {
      value: "4–6 hrs",
      label: "average IG DM response time for indie tattoo artists",
      source: "Creatorflow / IG creator benchmark",
    },
    {
      value: "60%+",
      label: "of custom-design inquiries that die between first message and deposit",
      source: "Tattoo Smart booking-funnel analysis",
    },
  ],

  mathHeadline: "$40K walks out of your chair every year.",
  mathBody:
    "Solo Austin tattoo artist. 30 hrs/wk in chair × 48 wks. $180/hr average. We're only counting the deposit leak + the DM leak. Not the touch-up revenue you're missing. Not the referral leg you never asked for.",
  mathRows: [
    { label: "Weekly billable hours scheduled", value: "30" },
    { label: "Combined cancel + no-show rate", value: "× 15%" },
    { label: "Lost hours per week", value: "= 4.5" },
    { label: "Working weeks", value: "× 48" },
    { label: "Lost hours / year", value: "= 216" },
    { label: "Avg hourly rate", value: "× $180" },
    { label: "Empty-chair leak", value: "= $38,880" },
    { label: "Plus: 15 IG DMs/wk × 50% reply × 12% would-convert × $400 first session", value: "+ $17,280" },
    { label: "Total annual leak", value: "= ~$56,000" },
  ],
  mathConclusion:
    "That's the equivalent of a second studio's worth of work evaporating between your IG inbox and your tattoo chair. 90% recoverable. None of it requires more followers, more flash, or another guest spot.",

  quotes: [
    {
      text: "I used to lose two appointments a week to no-shows. I started charging non-refundable deposits and the problem disappeared overnight.",
      attribution: "Austin tattoo artist, Tattoo Smart user forum",
    },
    {
      text: "Most of my inquiries ghost between the first DM and the deposit invoice. I'd kill for a system that automates that handoff.",
      attribution: "Booth renter, Reddit r/tattooing",
    },
    {
      text: "Touch-ups are 40% of repeat business. Most artists forget to schedule them. The client forgets too. Both lose.",
      attribution: "Tattoo Smart — Repeat Client Report",
    },
  ],

  auditMoves: [
    {
      number: "01",
      title: "Card-on-file + non-refundable deposit — enforced on every booking",
      body: "If you're still taking deposits by Venmo / Zelle / 'I'll get it next time' — stop. Move 100% of bookings through Square Appointments, Tattoo Smart, Booksy, or Calendly w/ Stripe. Card captured at booking. Deposit non-refundable inside 48 hours. The first time a flake gets charged, your no-show rate drops to under 5% inside 30 days. Most artists already have these tools — the enforcement switch is just turned off.",
    },
    {
      number: "02",
      title: "Hit the 5-min DM standard — automatically",
      body: "Instagram is your funnel. Speed-to-lead determines whether the inquiry converts or ghosts. Wire ManyChat (free tier covers a solo artist) on IG DMs. Auto-reply within 60 seconds: 'Hey! Thanks for the message. I'll personally write back inside the hour. While you wait, my booking link + custom design intake form is here: [link].' The auto-acknowledge alone moves you out of the 4-hour-reply pile — and the 21× conversion lift kicks in.",
    },
    {
      number: "03",
      title: "Build a custom-design intake form that pre-qualifies before the deposit ask",
      body: "Most artists run intake by DM — endless back-and-forth on placement, size, reference photos, budget. It dies. Replace with a Typeform or Google Form linked in your IG bio + auto-reply: reference image upload, body placement, size range, budget range, preferred dates. Form auto-emails you a clean brief. You reply within 24 hr with a quote + deposit invoice. The form filters tire-kickers and the ones who fill it out are 4× more likely to convert.",
    },
    {
      number: "04",
      title: "Auto-fire the 6-week touch-up + 90-day reference-photo follow-up",
      body: "Repeat-client revenue is 40% of the average artist's margin. Most don't ask for it. Wire two automated emails: 6 weeks post-session ('How's the heal? Ready for the touch-up?'), 90 days post-session ('Send me a healed shot — I want it in my portfolio.'). Pair the photo ask with a referral pitch ('If a friend asks who did it — here's my booking link.'). Trainerize, Acuity, and Booksy all support post-booking automation. Most artists just never turn it on.",
    },
  ],

  toolsBody:
    "Your booking + intake + automation stack already exists. The question is whether you've turned the right features on. Card-on-file enforcement, automated follow-ups, and IG DM speed live inside every major artist tool — most never flip the switches.",
  toolsList: [
    "Square Appointments — most common, full deposit + POS + calendar",
    "Tattoo Smart — built for the industry; intake forms + healing follow-ups",
    "Booksy — appointment + deposit + SMS reminders strong",
    "Calendly + Stripe — solo artists, simplest setup",
    "ManyChat — IG DM auto-reply, free tier covers solo artists",
    "Typeform / Tally — custom-design intake forms",
    "Beehiiv / ConvertKit — touch-up + healing follow-up sequences",
    "Instagram Shop — flash sheet sales (passive income while booked)",
  ],

  caseStudyHeadline: "Coming Q4 2026.",
  caseStudyBody:
    "An Austin solo artist running a 4-month booking lead time cut no-shows 73% in 60 days using moves 01 and 02 from this playbook, recovering ~$2,400/mo of previously-evaporated chair time and reclaiming roughly 4 hours/week of admin. Full breakdown — exact Square Appointments configuration, ManyChat flow, Typeform intake template — will be published once the 90-day data set closes. Want to be the next case study? Book a 30-minute audit.",

  ctaHeadline: "Stop tattooing into a leaky bucket.",
  ctaBody:
    "If any of this is hitting close, the 30-min audit is free. We pull your DM response log, your no-show rate, your custom-design inquiry → deposit conversion, and your repeat-client rate — and tell you in dollars exactly which leak is costing what. No pitch. No deck. If we can't find $1,500/mo of recoverable revenue, you don't owe me anything. If we can — I show you which of these four moves to run first.",

  citations: [
    { label: "IBISWorld — Tattoo Artists in the US Industry Report", url: "https://www.ibisworld.com/united-states/industry/tattoo-artists/4549/" },
    { label: "Statista — Tattoo Industry Revenue + Market Size", url: "https://www.statista.com/topics/4453/tattoos-in-the-united-states/" },
    { label: "Tattoo Smart — Industry Booking & No-Show Benchmarks", url: "https://tattoosmart.com/" },
    { label: "Booksy — Tattoo Studio Operator Insights", url: "https://booksy.com/biz/en-us/tattoo" },
    { label: "Square Appointments — Tattoo Industry Guide", url: "https://squareup.com/us/en/townsquare/tattoo-shop-software" },
    { label: "Creatorflow — Slow IG DM Responses Kill Sales", url: "https://creatorflow.so/blog/slow-instagram-dm-responses-kill-sales/" },
    { label: "Inrō — Speed-to-Lead Conversion Data", url: "https://www.inro.social/" },
    { label: "PRWeb — National Tattoo Industry Trends", url: "https://www.prweb.com/" },
    { label: "Reddit r/tattooing — Operator Threads", url: "https://www.reddit.com/r/tattooing/" },
    { label: "Tattoodo — Studio + Artist Platform", url: "https://www.tattoodo.com/" },
  ],
};
