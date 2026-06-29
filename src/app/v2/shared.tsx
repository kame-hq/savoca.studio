"use client";

// Shared chrome + data + components for the Savoca Studio single-brand site.
// Used by home (/), /pricing, /work. Off-Canon (raw §, Fraunces display).
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, animate, useReducedMotion } from "motion/react";
import Lenis from "lenis";

export const INK = "#070707";
export const BONE = "#FCFFF7";
export const TEAL = "#6C756B";
export const SAND = "#6C756B";
export const EASE = [0.16, 1, 0.3, 1] as const;
export const DIM = "#9A958B";
export const SOFT = "#C9C9C4";
export const BORDER = "1px solid rgba(236,231,221,0.1)";

export const NAV: [string, string][] = [
  ["Work", "/work"],
  ["Systems", "/#systems"],
  ["Pricing", "/pricing"],
  ["Contact", "/#contact"],
];

/* ---- data ---- */
export const PATH_SHORT = ["Demand", "Captured", "Booked", "Delivered", "Paid", "Rebooked"];
export const PATH_LONG = ["First touch", "Intake", "Booking", "Scheduling", "Delivery", "Payment", "Follow-up", "Retention", "Reporting"];

export type Build = { n: string; title: string; blurb: string; built: string[]; measured: string[] };
export const BUILDS: Build[] = [
  { n: "01", title: "Intake", blurb: "Calls, forms, messages, referrals, and requests captured in one place.",
    built: ["Lead forms", "Missed-call text-back", "Shared inbox", "CRM capture", "Source tracking", "Routing rules"],
    measured: ["Capture rate", "First response time", "Missed call recovery", "Source visibility"] },
  { n: "02", title: "Booking", blurb: "Demand turns into appointments, jobs, estimates, or scheduled work.",
    built: ["Booking flows", "Calendars", "Estimate requests", "Quote follow-up", "Appointment reminders", "Team assignment"],
    measured: ["Lead-to-booked rate", "Quote turnaround time", "Appointment show rate", "Stalled requests"] },
  { n: "03", title: "Delivery", blurb: "The team knows what needs to happen, who owns it, and what is complete.",
    built: ["Task boards", "Work orders", "Job status", "Crew schedules", "Customer updates", "Internal handoffs"],
    measured: ["Work completion", "Schedule adherence", "Job cycle time", "Overdue work"] },
  { n: "04", title: "Retention", blurb: "Customers get followed up with, reviewed, reactivated, and brought back.",
    built: ["Follow-up sequences", "Review requests", "Reactivation campaigns", "Renewal reminders", "Customer lists", "Service history"],
    measured: ["Follow-up completion", "Repeat booking", "Review requests", "Reactivation revenue"] },
  { n: "05", title: "Reporting", blurb: "The business can finally see what is happening.",
    built: ["Dashboards", "Weekly revenue view", "Source reporting", "Pipeline tracking", "Service or location reporting", "Monthly performance readout"],
    measured: ["Booked revenue", "Completed revenue", "Lost or stalled work", "Revenue by source", "Revenue by service", "Revenue by location"] },
];

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
export function Split({ text, go, className, style }: { text: string; go: boolean; className?: string; style?: React.CSSProperties }) {
  const words = text.split(" ");
  return (
    <h1 className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.22em] align-bottom pb-[0.18em] -mb-[0.18em]">
          <motion.span className="inline-block" initial={{ y: "115%" }} animate={go ? { y: 0 } : {}}
            transition={{ delay: 0.1 + i * 0.07, duration: 0.85, ease: EASE }}>{w}</motion.span>
        </span>
      ))}
    </h1>
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
      <span className="font-[Fraunces] font-black tracking-[-0.01em] leading-none" style={{ fontSize: b }}>Savoca Studio</span>
    </a>
  );
}

export function BandCard({ b }: { b: Band }) {
  return (
    <motion.div className="flex flex-col p-7 md:p-8 rounded-xl h-full" style={{ background: "#0E0E0E", border: BORDER }}
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.6, ease: EASE }}>
      <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase" style={{ color: TEAL }}>{b.n}</span>
      <h3 className="font-[Fraunces] font-bold mt-2 leading-none" style={{ fontSize: "clamp(26px,3vw,38px)" }}>{b.name}</h3>
      <p className="font-[Fraunces] mt-4" style={{ fontSize: "16px", color: SOFT }}>{b.who}</p>
      <p className="font-[Fraunces] mt-3" style={{ fontSize: "15px", color: DIM }}>{b.desc}</p>
      {b.desc2 && <p className="font-[Fraunces] mt-3" style={{ fontSize: "15px", color: DIM }}>{b.desc2}</p>}
      <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mt-7 mb-3" style={{ color: TEAL }}>Built around</p>
      <Bullets items={b.built} />
      {b.fits && (<>
        <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mt-6 mb-3" style={{ color: TEAL }}>Example fits</p>
        <Bullets items={b.fits} />
      </>)}
      <div className="mt-auto pt-7">
        <p className="font-[Fraunces] font-bold leading-none" style={{ fontSize: "clamp(30px,3.4vw,44px)", color: BONE }}>
          {b.price}<span className="font-[JetBrains_Mono] font-normal text-[13px] align-middle ml-2 opacity-70">/ mo</span>
        </p>
        <ul className="mt-3 space-y-1.5">
          {b.terms.map((t) => (<li key={t} className="font-[JetBrains_Mono] text-[12px] flex gap-2.5" style={{ color: SOFT }}><span style={{ color: TEAL }}>·</span><span>{t}</span></li>))}
        </ul>
        <a data-cursor href="/#contact" className="inline-block mt-6 font-[JetBrains_Mono] text-[12px] tracking-[0.14em] uppercase px-5 py-3 rounded-full" style={{ background: TEAL, color: INK }}>Book a call →</a>
      </div>
    </motion.div>
  );
}

export function Badges() {
  const row = [...CRED, ...CRED, ...CRED];
  return (
    <div className="relative overflow-hidden py-2" style={{ maskImage: "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, #000 7%, #000 93%, transparent)" }}>
      <div className="flex items-center gap-14 md:gap-20 w-max" style={{ animation: "marq 30s linear infinite" }}>
        {row.map((c, i) => c.logo ? (
          <img key={i} src={c.logo} alt={c.name} className="shrink-0 opacity-85 hover:opacity-100 transition-opacity" style={{ height: "clamp(20px,2.2vw,28px)" }} />
        ) : (
          <span key={i} className="shrink-0 whitespace-nowrap font-[Fraunces] font-black opacity-85" style={{ fontSize: "clamp(19px,2.1vw,27px)", color: BONE }}>{c.name}</span>
        ))}
      </div>
    </div>
  );
}

/* ---- interactive: What Gets Built (tabs absorb Metrics) ---- */
export function BuildExplorer() {
  const [i, setI] = useState(0);
  const b = BUILDS[i];
  return (
    <div>
      <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
        {BUILDS.map((x, k) => (
          <button key={x.n} data-cursor onClick={() => setI(k)}
            className="font-[JetBrains_Mono] text-[12px] tracking-[0.12em] uppercase px-4 py-2.5 rounded-full transition-colors"
            style={k === i ? { background: BONE, color: INK } : { border: BORDER, color: SOFT }}>
            <span style={{ color: k === i ? TEAL : TEAL }}>{x.n}</span> &nbsp;{x.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={b.n} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: EASE }}
          className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14 rounded-xl p-7 md:p-10" style={{ background: "#0E0E0E", border: BORDER }}>
          <div>
            <h3 className="font-[Fraunces] font-bold leading-none" style={{ fontSize: "clamp(34px,5vw,64px)" }}>{b.title}</h3>
            <p className="font-[Fraunces] mt-4 max-w-[44ch]" style={{ fontSize: "clamp(17px,2vw,22px)", color: "#B7B2A6" }}>{b.blurb}</p>
            <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mt-8 mb-3" style={{ color: TEAL }}>Built with</p>
            <div className="grid grid-cols-2 gap-x-6"><Bullets items={b.built} color={DIM} /></div>
          </div>
          <div className="lg:pl-10 lg:border-l" style={{ borderColor: "rgba(236,231,221,0.1)" }}>
            <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: TEAL }}>Measured by</p>
            <Bullets items={b.measured} color={SOFT} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---- interactive: How It Works stepper ---- */
export function ProcessStepper() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px mb-8" style={{ background: "rgba(236,231,221,0.1)" }}>
        {STEPS.map((x, k) => (
          <button key={x.n} data-cursor onClick={() => setI(k)} className="text-left p-5 transition-colors"
            style={{ background: k === i ? "#161616" : INK }}>
            <span className="font-[JetBrains_Mono] text-[12px]" style={{ color: TEAL }}>{x.n}</span>
            <p className="font-[Fraunces] font-bold mt-1" style={{ fontSize: "clamp(18px,2vw,26px)", color: k === i ? BONE : DIM }}>{x.title}</p>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={s.n} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: EASE }}
          className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-14">
          <div>
            <p className="font-[Fraunces]" style={{ fontSize: "clamp(20px,2.6vw,30px)", color: BONE }}>{s.intro}</p>
            <p className="font-[Fraunces] mt-6 pt-5 max-w-[46ch]" style={{ fontSize: "16px", color: BONE, borderTop: BORDER }}>
              <span className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mr-2" style={{ color: TEAL }}>Output</span>{s.output}
            </p>
          </div>
          <div>
            <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: TEAL }}>{s.listLabel}</p>
            <div className="grid grid-cols-2 gap-x-6"><Bullets items={s.list} color={DIM} /></div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ---- chrome shell: fonts, cursor, rail, mobile menu, lenis, footer ---- */
function Cursor() {
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
      <style>{`@keyframes marq{from{transform:translateX(0)}to{transform:translateX(-33.3333%)}}`}</style>
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
            <a data-cursor href="/#contact" className="hidden md:inline-block font-[JetBrains_Mono] text-[12px] tracking-[0.14em] uppercase px-5 py-3 rounded-full" style={{ border: "1px solid rgba(252,255,247,0.4)", color: BONE }}>Let&apos;s talk →</a>
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
                <a key={t} href={href} onClick={() => setMenu(false)} className="font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(44px,13vw,72px)" }}>{t}</a>
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
    <motion.div className="fixed inset-0 z-[80] flex items-end justify-between px-8 pb-8" style={{ background: INK, color: BONE }}
      initial={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}>
      <span className="font-[Fraunces] font-black text-3xl">§</span>
      <span className="font-[Fraunces] font-black tabular-nums" style={{ fontSize: "clamp(56px,15vw,180px)", lineHeight: 0.8 }}>{n}</span>
    </motion.div>
  );
}
