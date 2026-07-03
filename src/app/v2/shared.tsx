"use client";

// Shared chrome + data + components for the Savoca Studio single-brand site.
// Used by home (/), /pricing, /work. Off-Canon (raw §, Fraunces display).
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, animate, useReducedMotion } from "motion/react";
import Lenis from "lenis";

// Cream-beige site, dark cinematic hero. Canon-adjacent inks.
export const CREAM = "#EFE6D2";   // page ground
export const INK = "#1C1712";     // text on cream
export const BONE = "#F1E9D8";    // text over dark video
export const STEEL = "#6F6555";   // muted ink
export const MONEY = "#1B4D3E";   // Canon money-green accent
export const SIGNAL = "#D9442C";  // Canon signal-red, stamp marks only
export const RULE = "1px solid rgba(28,23,18,0.16)";
export const TEAL = "#8A7C64";    // warm taupe (hero pill on video)
export const SAND = "#8A7C64";
export const EASE = [0.16, 1, 0.3, 1] as const;
export const DIM = "#A29885";     // muted beige (over video)
export const SOFT = "#CFC5AF";    // soft beige (over video)
export const BORDER = "1px solid rgba(241,233,216,0.12)";

/* why-you-need-me strip */
export const BEFORE_AFTER: [string[], string[]] = [
  [
    "Calls go to voicemail while you work",
    "Quotes sit for days without a follow-up",
    "Jobs finish, invoices go out late",
    "Happy customers drift and never rebook",
  ],
  [
    "Every missed call gets a text back in seconds",
    "Quotes get chased automatically until yes or no",
    "Invoice goes out at closeout, tracked to paid",
    "Past customers come back on a schedule",
  ],
];

export const NAV: [string, string][] = [
  ["Work", "/work"],
  ["Systems", "/#systems"],
  ["Pricing", "/pricing"],
  ["Contact", "/#contact"],
];

/* ---- data ---- */
export const PATH_SHORT = ["Demand", "Captured", "Booked", "Delivered", "Paid", "Rebooked"];
export const PATH_LONG = ["First touch", "Intake", "Booking", "Scheduling", "Delivery", "Payment", "Follow-up", "Retention", "Reporting"];

// Stages mirror the hero revenue path: Demand → Captured → Booked → Delivered → Paid → Rebooked
export type Build = { n: string; title: string; blurb: string; built: string[]; measured: string[] };
export const BUILDS: Build[] = [
  { n: "01", title: "Captured", blurb: "Every call, form, message, and referral lands in one place — nothing slips.",
    built: ["Lead forms", "Missed-call text-back", "Shared inbox", "CRM capture", "Source tracking", "Routing rules"],
    measured: ["Capture rate", "First response time", "Missed call recovery", "Source visibility"] },
  { n: "02", title: "Booked", blurb: "Demand turns into appointments, jobs, estimates, or scheduled work.",
    built: ["Booking flows", "Calendars", "Estimate requests", "Quote follow-up", "Appointment reminders", "Team assignment"],
    measured: ["Lead-to-booked rate", "Quote turnaround time", "Appointment show rate", "Stalled requests"] },
  { n: "03", title: "Delivered", blurb: "The team knows what needs to happen, who owns it, and what is complete.",
    built: ["Task boards", "Work orders", "Job status", "Crew schedules", "Customer updates", "Internal handoffs"],
    measured: ["Work completion", "Schedule adherence", "Job cycle time", "Overdue work"] },
  { n: "04", title: "Paid", blurb: "Completed work becomes money in the bank — without chasing it.",
    built: ["Invoicing flow", "Deposits up front", "Payment links", "Quote-to-invoice handoff", "Overdue reminders", "Payment tracking"],
    measured: ["Time to paid", "Outstanding invoices", "Deposit rate", "Collected revenue"] },
  { n: "05", title: "Rebooked", blurb: "Customers get followed up with, reviewed, reactivated, and brought back.",
    built: ["Follow-up sequences", "Review requests", "Reactivation campaigns", "Renewal reminders", "Service history"],
    measured: ["Repeat booking", "Reviews requested", "Reactivation revenue", "Renewal risk"] },
];
export const REPORTING_LINE = "And one view across all of it — dashboards, a weekly revenue read, and revenue by source, service, and location.";

export type Band = {
  n: string; name: string; who: string; desc: string; desc2?: string;
  built: string[]; fits?: string[]; price: string; terms: string[];
};
export const BANDS: Band[] = [
  { n: "Band 01", name: "Solo Practice",
    who: "For one-person shops, independent specialists, and owner-led service businesses.",
    desc: "You need a simple revenue system that helps you capture demand, book work, follow up, and stay visible — without adding more admin to your day.",
    built: ["Site and booking flow", "Lead capture", "Missed-call or form follow-up", "Basic CRM", "Reminders", "Simple reporting"],
    price: "$297–$697", terms: ["$297 to start, credited to first month", "3-month minimum, then month-to-month", "Live in about 1 week"] },
  { n: "Band 02", name: "Studio",
    who: "For small teams with steady demand, shared calendars, and work moving through multiple hands.",
    desc: "You need one revenue workflow for the team: capture demand, assign ownership, book work, follow up, and review what is happening each week.",
    built: ["Phone, CRM, calendar, and follow-up", "Lead routing", "Team pipeline", "Quote or estimate follow-up", "Appointment reminders", "Reactivation campaigns", "Weekly revenue view"],
    price: "$997–$2,297", terms: ["$597 to start, credited to first month", "3-month minimum, then month-to-month", "Live in about 2 weeks"] },
  { n: "Band 03", name: "Service Business",
    who: "For larger teams, multi-location businesses, field crews, or industry-specific workflows.",
    desc: "You need a revenue system built around how the business actually runs — not just a CRM, booking tool, or dashboard.",
    desc2: "This may include jobs, crews, work orders, schedules, equipment, locations, customer updates, reporting, and retention.",
    built: ["Custom workflow", "CRM and scheduling", "Work orders or job tracking", "Crew, provider, or location visibility", "Customer communication", "Reporting by team, service, location, or contract", "Ongoing system improvement"],
    fits: ["Golf course maintenance crew", "Contractor or field service team", "Multi-location wellness business", "Specialty trade business", "Recurring service company"],
    price: "$2,297–$4,995", terms: ["$997 to start, credited to first month", "3-month minimum, then month-to-month", "Live in about 2–4 weeks"] },
];

export const EXAMPLES: [string, string, string[]][] = [
  ["Golf Course Maintenance", "A system for mowing schedules, irrigation issues, equipment logs, labor planning, chemical applications, weather delays, work orders, and superintendent visibility.",
    ["Schedule adherence", "Open work orders", "Issue resolution time", "Equipment downtime", "Labor by area", "Recurring contract health"]],
  ["Medspa or Wellness Studio", "A system for lead capture, booking, intake, appointment reminders, memberships, reviews, follow-up, and reactivation.",
    ["Lead-to-booked rate", "Show rate", "Repeat bookings", "Membership conversion", "Reactivation revenue", "Reviews requested"]],
  ["Contractor or Field Service", "A system for estimates, scheduling, crew assignment, customer updates, materials, job status, closeout, and review requests.",
    ["Quote turnaround", "Quote-to-job rate", "Job cycle time", "Completed jobs", "Customer update completion", "Revenue by job type"]],
  ["Multi-Location Service Business", "A system for location-level reporting, team routing, service performance, customer communication, and retention.",
    ["Revenue by location", "Booked work by team", "Response time by location", "Stalled work", "Retention risk", "Repeat service"]],
];

export type Step = { n: string; title: string; intro: string; listLabel: string; list: string[]; output: string };
export const STEPS: Step[] = [
  { n: "01", title: "Baseline", intro: "I map how revenue moves through the business today.", listLabel: "Inputs",
    list: ["Calls", "Forms", "Messages", "Quotes", "Jobs", "Schedules", "Payments", "Follow-ups", "Reporting"],
    output: "A clear view of what exists, what is manual, what is missing, and what should be measured." },
  { n: "02", title: "Build", intro: "I design and build the first working version of the system.", listLabel: "This may include",
    list: ["CRM setup", "Lead routing", "Booking flow", "Automations", "Forms", "Dashboards", "Customer communication", "Workflow boards", "Reporting"],
    output: "A live system the business can use." },
  { n: "03", title: "Run", intro: "I keep the system working after launch.", listLabel: "This includes",
    list: ["Fixes", "Updates", "Workflow changes", "Automation monitoring", "Vendor and tool support", "Reporting", "Small improvements"],
    output: "The system does not rot after launch." },
  { n: "04", title: "Improve", intro: "Each month, we review performance and decide what to improve next.", listLabel: "We look at",
    list: ["What came in", "What booked", "What got completed", "What got paid", "What stalled", "What came back", "What changed"],
    output: "A better system each month." },
];

export const CRED = [
  { name: "Facebook", logo: "/logos/facebook.svg" },
  { name: "Whole Foods Market", logo: null },
  { name: "Indeed", logo: "/logos/indeed.svg" },
  { name: "FedEx", logo: "/logos/fedex.svg" },
];

/* ---- primitives ---- */
export function Split({ text, go, className, style, accentFrom }: { text: string; go: boolean; className?: string; style?: React.CSSProperties; accentFrom?: number }) {
  const words = text.split(" ");
  return (
    <h1 className={className} style={style}>
      {words.map((w, i) => (
        <motion.span key={i} className="inline-block mr-[0.22em]"
          style={accentFrom !== undefined && i >= accentFrom ? { fontWeight: 400, fontStyle: "italic", fontFamily: "Fraunces" } : undefined}
          initial={{ y: "0.5em", opacity: 0 }} animate={go ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.1 + i * 0.06, duration: 0.7, ease: EASE }}>{w}</motion.span>
      ))}
    </h1>
  );
}

/* ---- paper grain overlay ---- */
export function Grain() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[55]"
      style={{
        opacity: 0.05,
        mixBlendMode: "multiply",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "240px 240px",
      }} />
  );
}

/* ---- 3D tilt wrapper (desktop hover) ---- */
export function Tilt({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0), ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 260, damping: 20 });
  const sry = useSpring(ry, { stiffness: 260, damping: 20 });
  return (
    <motion.div ref={ref} style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect(); if (!r) return;
        ry.set(((e.clientX - r.left) / r.width - 0.5) * 7);
        rx.set(-((e.clientY - r.top) / r.height - 0.5) * 7);
      }}
      onMouseLeave={() => { rx.set(0); ry.set(0); }}>
      {children}
    </motion.div>
  );
}

/* ---- magnetic hover wrapper (desktop) ---- */
export function Magnetic({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16, mass: 0.25 });
  const sy = useSpring(y, { stiffness: 220, damping: 16, mass: 0.25 });
  return (
    <motion.div ref={ref} className="inline-block" style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect(); if (!r) return;
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}>
      {children}
    </motion.div>
  );
}

export function Reveal({ children, className, style, as: Tag = "h2" }: { children: React.ReactNode; className?: string; style?: React.CSSProperties; as?: "h2" | "p" }) {
  const M = Tag === "p" ? motion.p : motion.h2;
  return (
    <M className={className} style={style}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-12%" }} transition={{ duration: 0.7, ease: EASE }}>
      {children}
    </M>
  );
}

export function Bullets({ items, color = SOFT }: { items: string[]; color?: string }) {
  return (
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="flex gap-2.5 font-[JetBrains_Mono] text-[12px] leading-snug" style={{ color }}>
          <span style={{ color: TEAL }}>·</span><span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

export function PathStrip({ nodes, accentLast }: { nodes: string[]; accentLast?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 md:gap-3 font-[JetBrains_Mono] text-[11px] md:text-[12px] tracking-[0.16em] uppercase overflow-x-auto pb-2 whitespace-nowrap">
      {nodes.map((node, i) => (
        <span key={node} className="flex items-center gap-2.5 md:gap-3 shrink-0">
          {i > 0 && <span style={{ color: TEAL }}>→</span>}
          <span style={{ color: accentLast && i === nodes.length - 1 ? BONE : i === 0 ? DIM : SOFT }}>{node}</span>
        </span>
      ))}
    </div>
  );
}

export function Lockup({ size = "md" }: { size?: "md" | "sm" }) {
  const a = size === "sm" ? "clamp(30px,3vw,42px)" : "clamp(38px,4vw,56px)";
  const b = size === "sm" ? "clamp(20px,2vw,28px)" : "clamp(22px,2.2vw,32px)";
  return (
    <a data-cursor href="/" className="flex items-baseline gap-2.5 hover:opacity-80 transition-opacity">
      <span className="font-[Fraunces] font-black leading-none" style={{ fontSize: a }}>§</span>
      <span className="font-[Redaction] font-black tracking-[-0.01em] leading-none" style={{ fontSize: b }}>Savoca Studio</span>
    </a>
  );
}

export function BandCard({ b, last }: { b: Band; last?: boolean }) {
  return (
    <motion.div className={`flex flex-col p-6 md:p-7 h-full border-b ${last ? "" : "lg:border-r"}`} style={{ borderColor: "rgba(28,23,18,0.16)", color: INK }}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.5, ease: EASE }}>
      <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase" style={{ color: SIGNAL }}>{b.n}</span>
      <h3 className="font-[Redaction] font-bold mt-1.5 leading-none" style={{ fontSize: "clamp(24px,2.8vw,36px)" }}>{b.name}</h3>
      <p className="font-[Redaction] mt-3" style={{ fontSize: "15px", color: "#3A342B" }}>{b.who}</p>
      <p className="font-[Redaction] mt-2.5" style={{ fontSize: "14px", color: STEEL }}>{b.desc}</p>
      <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mt-6 mb-2.5" style={{ color: MONEY }}>Built around</p>
      <div className="space-y-1.5">
        {b.built.map((it) => <p key={it} className="font-[JetBrains_Mono] text-[11.5px]" style={{ color: "#3A342B" }}>· {it}</p>)}
      </div>
      <div className="mt-auto pt-6">
        <p className="font-[Redaction] font-bold leading-none" style={{ fontSize: "clamp(28px,3vw,40px)", color: MONEY }}>
          {b.price}<span className="font-[JetBrains_Mono] font-normal text-[11px] align-middle ml-2" style={{ color: STEEL }}>/ mo</span>
        </p>
        <ul className="mt-3 space-y-1">
          {b.terms.map((t) => (<li key={t} className="font-[JetBrains_Mono] text-[11px]" style={{ color: STEEL }}>· {t}</li>))}
        </ul>
        <a data-cursor href="mailto:jack@savoca.studio" className="inline-block mt-5 font-[JetBrains_Mono] text-[11px] tracking-[0.14em] uppercase px-5 py-3" style={{ background: INK, color: CREAM }}>Book a call →</a>
      </div>
    </motion.div>
  );
}

export function Badges() {
  const row = [...CRED, ...CRED, ...CRED];
  return (
    <div className="relative overflow-hidden py-2" style={{ maskImage: "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)" }}>
      <div className="flex items-center gap-12 md:gap-16 w-max" style={{ animation: "marq 30s linear infinite" }}>
        {row.map((c, i) => (
          <span key={i} className="shrink-0 whitespace-nowrap font-[Redaction] font-black" style={{ fontSize: "clamp(18px,2vw,26px)", color: INK, opacity: 0.8 }}>{c.name}</span>
        ))}
      </div>
    </div>
  );
}

/* ---- hero reel: service-business clips cycling continuously ---- */
export const REEL = [
  { src: "/video/svc-barber.mp4", poster: "/video/svc-barber-poster.jpg", label: "Barbershop" },
  { src: "/video/svc-tattoo.mp4", poster: "/video/svc-tattoo-poster.jpg", label: "Tattoo Parlor" },
  { src: "/video/svc-nails.mp4", poster: "/video/svc-nails-poster.jpg", label: "Nail Salon" },
  { src: "/video/svc-mechanic.mp4", poster: "/video/svc-mechanic-poster.jpg", label: "Auto Shop" },
  { src: "/video/svc-detail.mp4", poster: "/video/svc-detail-poster.jpg", label: "Detail Shop" },
  { src: "/video/svc-plumber.mp4", poster: "/video/svc-plumber-poster.jpg", label: "Plumbing Co." },
];
export const VERTICALS = ["Barbershops", "Tattoo Parlors", "Nail Salons", "Med Spas", "Contractors", "Photographers", "Landscapers", "Cleaning Companies", "Auto Shops", "Detail Shops", "Plumbers", "Electricians"];

/* pricing: objections + alternatives (per productized-studio research) */
export const FAQ: [string, string][] = [
  ["Do I own the system?", "Yes. Accounts, phone numbers, data — all in your name. If we ever part ways, it keeps running without me."],
  ["What tools do you use?", "Whatever fits the business — usually your existing phone and calendar, plus a CRM. No proprietary lock-in."],
  ["How fast is it live?", "Solo builds in about a week. Team and multi-location builds in two to four."],
  ["What if it doesn't work?", "If the first month doesn't show measurable improvement, the deposit comes back. That's the deal."],
  ["How much of my time does it take?", "One walkthrough to start. After that, as much or as little as you want — the point is fewer things on your plate."],
];
export const COMPARE: [string, string, string][] = [
  ["An Ops Hire", "$4,000–$8,000 / mo", "One person. Needs managing, takes vacations."],
  ["A Marketing Agency", "$2,000–$10,000 / mo", "More leads into the same leaky bucket."],
  ["Savoca Studio", "From $297 / mo", "The system itself — built, run, and improved."],
];
export function HeroReel() {
  const reduce = useReducedMotion();
  const [idx, setIdx] = useState(0);
  const refs = useRef<(HTMLVideoElement | null)[]>([]);
  useEffect(() => {
    if (reduce) return;
    const v = refs.current[idx];
    if (v) { v.currentTime = 0; v.play().catch(() => {}); }
    const t = setTimeout(() => setIdx((i) => (i + 1) % REEL.length), 5500);
    return () => clearTimeout(t);
  }, [idx, reduce]);
  return (
    <div className="absolute inset-0">
      {REEL.map((c, i) => reduce ? (
        <img key={c.src} src={c.poster} alt="" className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" style={{ opacity: i === 0 ? 1 : 0 }} />
      ) : (
        <video key={c.src} ref={(el) => { refs.current[i] = el; }} muted playsInline preload={i === 0 ? "auto" : "none"} poster={c.poster}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" style={{ opacity: i === idx ? 1 : 0 }}>
          <source src={c.src} type="video/mp4" />
        </video>
      ))}
      <div className="absolute inset-0" style={{ background: "rgba(74,66,54,0.3)", mixBlendMode: "multiply" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(20,16,12,0.97) 0%, rgba(20,16,12,0.55) 45%, rgba(20,16,12,0.35) 75%, rgba(20,16,12,0.5) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 52%, rgba(22,18,14,0.5) 100%)" }} />
      <div className="absolute bottom-4 right-5 md:bottom-6 md:right-8 flex items-center gap-3 font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase" style={{ color: BONE }}>
        <span style={{ color: TEAL }}>0{idx + 1} / 0{REEL.length}</span>
        <AnimatePresence mode="wait">
          <motion.span key={idx} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
            {REEL[idx].label}
          </motion.span>
        </AnimatePresence>
        <span className="relative w-10 h-px overflow-hidden" style={{ background: "rgba(241,233,216,0.25)" }}>
          {!reduce && <motion.span key={idx} className="absolute inset-0 origin-left" style={{ background: BONE }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5.5, ease: "linear" }} />}
        </span>
      </div>
    </div>
  );
}

/* ---- the pipeline: visual node diagram, click a stage ---- */
export function BuildExplorer() {
  const [i, setI] = useState(0);
  const b = BUILDS[i];
  return (
    <div style={{ color: INK }}>
      {/* node strip — the revenue path as a diagram */}
      <div className="relative flex items-start justify-between gap-2 mb-8 overflow-x-auto pb-2">
        <span aria-hidden className="absolute left-0 right-0 top-[13px] h-px" style={{ background: "rgba(28,23,18,0.22)" }} />
        {BUILDS.map((x, k) => (
          <button key={x.n} data-cursor onClick={() => setI(k)} className="relative z-10 flex flex-col items-center gap-2.5 shrink-0 px-2 group" style={{ minWidth: 90 }}>
            <span className="flex items-center justify-center rounded-full font-[JetBrains_Mono] text-[11px] transition-all"
              style={{ width: 27, height: 27, background: k === i ? MONEY : CREAM, color: k === i ? CREAM : STEEL, border: k === i ? `1px solid ${MONEY}` : "1px solid rgba(28,23,18,0.35)" }}>
              {k + 1}
            </span>
            <span className="font-[Redaction] font-bold leading-none transition-colors" style={{ fontSize: "clamp(15px,1.8vw,22px)", color: k === i ? INK : STEEL }}>{x.title}</span>
          </button>
        ))}
      </div>
      {/* stage detail */}
      <AnimatePresence mode="wait">
        <motion.div key={b.n} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3, ease: EASE }}
          className="grid lg:grid-cols-[1.15fr_0.85fr]" style={{ border: RULE }}>
          <div className="p-6 md:p-8" style={{ borderRight: RULE }}>
            <p className="font-[Redaction] max-w-[46ch]" style={{ fontSize: "clamp(19px,2.3vw,27px)" }}>{b.blurb}</p>
            <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mt-6 mb-2.5" style={{ color: MONEY }}>What I set up</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
              {b.built.map((it) => <span key={it} className="font-[JetBrains_Mono] text-[12px]" style={{ color: "#3A342B" }}>· {it}</span>)}
            </div>
          </div>
          <div className="p-6 md:p-8" style={{ background: "rgba(28,23,18,0.04)" }}>
            <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mb-2.5" style={{ color: MONEY }}>You see it in</p>
            <div className="space-y-1.5">
              {b.measured.map((it) => <p key={it} className="font-[JetBrains_Mono] text-[12px]" style={{ color: INK }}>· {it}</p>)}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---- how it works: compact 4-up row ---- */
export function ProcessStepper() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ border: RULE, color: INK }}>
      {STEPS.map((s, i) => (
        <div key={s.n} className="p-5 md:p-6" style={{ borderRight: i < STEPS.length - 1 ? RULE : undefined, borderBottom: RULE }}>
          <span className="font-[JetBrains_Mono] text-[10px]" style={{ color: SIGNAL }}>{s.n}</span>
          <h3 className="font-[Redaction] font-bold mt-1" style={{ fontSize: "clamp(19px,2vw,24px)" }}>{s.title}</h3>
          <p className="font-[Redaction] mt-2" style={{ fontSize: "14px", color: "#3A342B" }}>{s.intro}</p>
          <p className="font-[JetBrains_Mono] text-[10px] leading-relaxed mt-3 pt-3" style={{ color: STEEL, borderTop: RULE }}>{s.output}</p>
        </div>
      ))}
    </div>
  );
}

/* ---- the story player: one lead, start to finish (the "explainer video") ---- */
type Beat = { t: string; who: "them" | "system" | "mark"; text: string; stage: string };
const STORY: Beat[] = [
  { t: "TUE 2:14 PM", who: "them", text: "Incoming call — you're mid-job. It rings out.", stage: "Demand" },
  { t: "TUE 2:14 PM", who: "system", text: "Auto-text goes back: “Sorry we missed you — want to book or get a quote?”", stage: "Captured" },
  { t: "TUE 2:31 PM", who: "them", text: "“Yeah — can you do Thursday morning?”", stage: "Captured" },
  { t: "TUE 2:32 PM", who: "system", text: "Booking link sent. Thursday 9:00 AM confirmed. Reminder scheduled.", stage: "Booked" },
  { t: "THU 8:00 AM", who: "system", text: "Reminder text goes out. No-show avoided.", stage: "Booked" },
  { t: "THU 11:02 AM", who: "mark", text: "Job closed out on the work order.", stage: "Delivered" },
  { t: "THU 11:03 AM", who: "system", text: "Invoice sent automatically. Paid by card that afternoon.", stage: "Paid" },
  { t: "FRI 9:00 AM", who: "system", text: "Review request sent — five stars posted.", stage: "Rebooked" },
  { t: "6 WEEKS LATER", who: "system", text: "Rebook reminder goes out. They book again. Nobody had to remember.", stage: "Rebooked" },
];
const STORY_STAGES = ["Demand", "Captured", "Booked", "Delivered", "Paid", "Rebooked"];
export function StoryPlayer() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    if (reduce || !playing) return;
    const t = setTimeout(() => setI((x) => (x + 1) % STORY.length), 3000);
    return () => clearTimeout(t);
  }, [i, playing, reduce]);
  const beat = STORY[i];
  const stageIdx = STORY_STAGES.indexOf(beat.stage);
  return (
    <div style={{ border: RULE, color: INK }}>
      {/* stage tracker */}
      <div className="flex items-center gap-0 px-5 md:px-7 pt-5 overflow-x-auto">
        {STORY_STAGES.map((s, k) => (
          <div key={s} className="flex items-center shrink-0">
            {k > 0 && <span className="w-5 md:w-9 h-px mx-1.5" style={{ background: k <= stageIdx ? MONEY : "rgba(28,23,18,0.2)" }} />}
            <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.14em] uppercase transition-colors duration-300"
              style={{ color: k === stageIdx ? MONEY : k < stageIdx ? INK : "rgba(28,23,18,0.35)" }}>{s}</span>
          </div>
        ))}
      </div>
      {/* the beat */}
      <div className="px-5 md:px-7 py-6 md:py-8 min-h-[132px] md:min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: EASE }}>
            <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mb-2.5" style={{ color: beat.who === "system" ? MONEY : STEEL }}>
              {beat.t} · {beat.who === "system" ? "The system" : beat.who === "mark" ? "Your crew" : "A customer"}
            </p>
            <p className="font-[Redaction] max-w-[46ch]" style={{ fontSize: "clamp(19px,2.6vw,30px)" }}>{beat.text}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* transport */}
      <div className="flex items-center justify-between px-5 md:px-7 py-3.5" style={{ borderTop: RULE }}>
        <div className="flex items-center gap-1.5">
          {STORY.map((_, k) => (
            <button key={k} data-cursor aria-label={`Beat ${k + 1}`} onClick={() => { setI(k); setPlaying(false); }} className="relative h-4 w-6 flex items-center">
              <span className="w-full overflow-hidden" style={{ height: 2, background: "rgba(28,23,18,0.18)" }}>
                {k === i && playing && !reduce ? (
                  <motion.span className="block h-full origin-left" style={{ background: MONEY }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 3, ease: "linear" }} />
                ) : (
                  <span className="block h-full" style={{ background: k <= i ? MONEY : "transparent" }} />
                )}
              </span>
            </button>
          ))}
        </div>
        <button data-cursor onClick={() => setPlaying((p) => !p)} className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase" style={{ color: STEEL }}>
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

/* ---- before/after: why you need this ---- */
export function BeforeAfter() {
  const [before, after] = BEFORE_AFTER;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2" style={{ border: RULE, color: INK }}>
      <div className="p-6 md:p-8" style={{ borderRight: RULE, borderBottom: RULE }}>
        <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: SIGNAL }}>Without a system</p>
        <div className="space-y-3">
          {before.map((it) => (
            <p key={it} className="flex gap-3 font-[Redaction]" style={{ fontSize: "clamp(15px,1.7vw,19px)", color: "#3A342B" }}>
              <span className="font-[JetBrains_Mono] text-[12px] pt-0.5 shrink-0" style={{ color: SIGNAL }}>✕</span>{it}
            </p>
          ))}
        </div>
      </div>
      <div className="p-6 md:p-8" style={{ borderBottom: RULE, background: "rgba(27,77,62,0.05)" }}>
        <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: MONEY }}>With the system</p>
        <div className="space-y-3">
          {after.map((it) => (
            <p key={it} className="flex gap-3 font-[Redaction]" style={{ fontSize: "clamp(15px,1.7vw,19px)", color: INK }}>
              <span className="font-[JetBrains_Mono] text-[12px] pt-0.5 shrink-0" style={{ color: MONEY }}>✓</span>{it}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---- chrome shell: fonts, cursor, rail, mobile menu, lenis, footer ---- */
export function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    const m = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); setBig(!!(e.target as HTMLElement).closest("a,button,[data-cursor]")); };
    window.addEventListener("mousemove", m); return () => window.removeEventListener("mousemove", m);
  }, [x, y]);
  return (
    <motion.div aria-hidden className="pointer-events-none fixed z-[90] rounded-full hidden md:block"
      style={{ left: sx, top: sy, x: "-50%", y: "-50%", background: BONE, mixBlendMode: "difference" }}
      animate={{ width: big ? 54 : 13, height: big ? 54 : 13 }} transition={{ type: "spring", stiffness: 400, damping: 28 }} />
  );
}

export function Shell({ children, showHeader = true }: { children: React.ReactNode; showHeader?: boolean }) {
  const reduce = useReducedMotion();
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    let raf = 0; const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, [reduce]);

  return (
    <main style={{ background: INK, color: BONE }} className="relative md:cursor-none overflow-clip">
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Regular.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:900;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Italic.woff2') format('woff2');font-weight:400;font-style:italic;font-display:swap}
        @keyframes marq{from{transform:translateX(0)}to{transform:translateX(-33.3333%)}}
      `}</style>
      {!reduce && <Cursor />}

      {/* right rail (desktop) */}
      <nav className="fixed right-5 lg:right-8 top-1/2 -translate-y-1/2 z-[70] hidden md:flex flex-col items-end gap-3.5 font-[JetBrains_Mono] text-[11px] tracking-[0.18em] uppercase" style={{ color: BONE, mixBlendMode: "difference" }}>
        {NAV.map(([t, href]) => (
          <a key={t} data-cursor href={href} className="group flex items-center gap-2.5 opacity-55 hover:opacity-100 transition-opacity">
            {t}<span className="h-px w-3 transition-all duration-300 group-hover:w-6" style={{ background: "currentColor" }} />
          </a>
        ))}
      </nav>

      {/* header (lockup + mobile hamburger) */}
      {showHeader && (
        <div className="absolute top-0 inset-x-0 z-[60] flex items-center justify-between px-6 md:px-12 pt-7">
          <Lockup />
          <div className="flex items-center gap-3">
            <a data-cursor href="/#contact" className="hidden md:inline-block font-[JetBrains_Mono] text-[12px] tracking-[0.14em] uppercase px-5 py-3 rounded-full" style={{ border: "1px solid rgba(241,233,216,0.4)", color: BONE }}>Let&apos;s talk →</a>
            <button data-cursor aria-label="Open menu" onClick={() => setMenu(true)} className="md:hidden flex flex-col gap-1.5 p-2">
              <span className="block w-7 h-px" style={{ background: BONE }} /><span className="block w-7 h-px" style={{ background: BONE }} />
            </button>
          </div>
        </div>
      )}

      {/* mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-[85] md:hidden flex flex-col" style={{ background: INK, color: BONE }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
            <div className="flex items-center justify-between px-6 pt-7">
              <Lockup size="sm" />
              <button data-cursor aria-label="Close menu" onClick={() => setMenu(false)} className="font-[JetBrains_Mono] text-[12px] tracking-[0.18em] uppercase p-2" style={{ color: BONE }}>Close ✕</button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-5 px-6">
              {NAV.map(([t, href]) => (
                <a key={t} href={href} onClick={() => setMenu(false)} className="font-[Redaction] font-black leading-none" style={{ fontSize: "clamp(44px,13vw,72px)" }}>{t}</a>
              ))}
            </nav>
            <a href="/#contact" onClick={() => setMenu(false)} className="mx-6 mb-8 text-center font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a>
          </motion.div>
        )}
      </AnimatePresence>

      {children}

      {/* footer */}
      <footer className="px-6 md:px-12 py-16" style={{ background: INK, color: BONE, borderTop: BORDER }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <Lockup size="sm" />
            <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.14em] uppercase mt-4" style={{ color: DIM }}>Revenue systems for service businesses</p>
          </div>
          <nav className="font-[JetBrains_Mono] text-[12px] tracking-[0.18em] uppercase flex gap-6" style={{ color: SOFT }}>
            {NAV.map(([t, href]) => (<a key={t} data-cursor href={href} className="hover:opacity-70">{t}</a>))}
          </nav>
          <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.12em]" style={{ color: DIM }}>Austin, TX · jack@savoca.studio</p>
        </div>
      </footer>
    </main>
  );
}

export { Preloader };
function Preloader({ onDone }: { onDone: () => void }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    const c = animate(0, 100, { duration: 1.2, ease: EASE, onUpdate: (v) => setN(Math.round(v)), onComplete: () => setTimeout(onDone, 200) });
    return () => c.stop();
  }, [onDone]);
  return (
    <motion.div className="fixed inset-0 z-[80] flex items-end justify-between px-8 pb-8" style={{ background: CREAM, color: INK }}
      initial={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
      <span className="font-[Fraunces] font-black text-3xl" style={{ color: MONEY }}>§</span>
      <span className="font-[Redaction] font-black tabular-nums" style={{ fontSize: "clamp(56px,15vw,180px)", lineHeight: 0.8 }}>{n}</span>
    </motion.div>
  );
}
