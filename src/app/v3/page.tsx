"use client";

// /v3 — SCROLL EXPERIENCE (wodniack-inspired, clean-room build on framer + lenis).
// Sticky "rooms": hero plane folds away into the floor, engines rise from depth
// behind pinned type, the story scrubs horizontally, work weaves through giant
// type, pricing folds up, finale flickers. Black / beige / green. Preview route.
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useVelocity, useMotionValue, useReducedMotion, MotionValue } from "motion/react";
import Lenis from "lenis";
import {
  Cursor, Grain, Magnetic, HeroReel, PathStrip, BandCard, Badges, Split, Preloader, Tilt,
  CREAM, INK, BONE, STEEL, MONEY, SIGNAL, RULE, EASE,
  PATH_SHORT, VERTICALS, BANDS, ENGINES, STORY, FAQ, COMPARE,
} from "../v2/shared";

const PORTFOLIO = [
  { name: "Krazy Strong", vertical: "Strength Coaching", img: "/img/portfolio/krazystrong.jpg", href: "https://krazystrong.app" },
  { name: "Squatzilla Fitness", vertical: "Metabolism + Strength", img: "/img/portfolio/squatzilla.jpg", href: "https://squatzilla.fitness" },
  { name: "Texas Tattoo", vertical: "Tattoo Parlor", img: "/img/portfolio/texastattoo.jpg", href: "https://texastattoo.app" },
];

const lab = "font-[JetBrains_Mono] text-[11px] tracking-[0.3em] uppercase";

/* drone layer — free-running aerial drift (decoupled from scroll) */
function DroneLayer({ reduce }: { reduce: boolean }) {
  return (
    <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden">
      {reduce ? (
        <img src="/video/bg-drone-poster.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: 0.55 }} />
      ) : (
        <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/video/bg-drone-poster.jpg" style={{ opacity: 0.55 }}>
          <source src="/video/bg-drone.mp4" type="video/mp4" />
        </video>
      )}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 35%, rgba(10,9,3,0.55) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,9,3,0.4), rgba(10,9,3,0.12) 40%, rgba(10,9,3,0.45))" }} />
    </div>
  );
}

/* thin custom scrollbar, green thumb */
function ScrollRail() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.3 });
  return (
    <div className="fixed right-0 top-0 bottom-0 z-[70] w-[3px] hidden md:block" style={{ background: "rgba(255,253,251,0.08)" }}>
      <motion.div className="w-full h-full origin-top" style={{ scaleY, background: MONEY }} />
    </div>
  );
}

/* SECTION 1 — hero: video plane folds into the floor as you leave */
function Hero({ reduce, go }: { reduce: boolean; go: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 32]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  return (
    <section ref={ref} className="relative" style={{ height: "165vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ perspective: 1100 }}>
        <motion.div className="absolute inset-2.5 md:inset-4 overflow-hidden origin-bottom" style={{ rotateX, scale, opacity, border: RULE, color: BONE, willChange: "transform, opacity", backfaceVisibility: "hidden" }}>
          <HeroReel />
          <motion.div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-12" style={{ y: textY }}>
            <p className={`${lab} mb-6`} style={{ color: BONE, textShadow: "0 1px 14px rgba(0,0,0,0.75)" }}>Revenue systems for service businesses</p>
            <Split text="I build the layer between demand and getting paid." go={go} accentFrom={7}
              className="font-[Redaction] font-black leading-[0.9] tracking-[-0.015em] max-w-[17ch]"
              style={{ fontSize: "clamp(38px,6.4vw,110px)", textShadow: "0 2px 28px rgba(0,0,0,0.65)" }} />
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block whitespace-nowrap font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: BONE, color: "#0A0903", animation: reduce ? undefined : "nudge 7s ease-in-out infinite" }}>Let&apos;s talk →</a></Magnetic>
              <span className="font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase opacity-80" style={{ color: BONE }}>Scroll ↓</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* SECTION 2 — engines rise from the floor behind pinned type */
function EngineCard({ e, i, p }: { e: (typeof ENGINES)[number]; i: number; p: MotionValue<number> }) {
  const start = 0.08 + i * 0.27, full = start + 0.16;
  const rotateX = useTransform(p, [start, full], [72, 0]);
  const y = useTransform(p, [start, full], ["55vh", "0vh"]);
  const opacity = useTransform(p, [start, start + 0.06], [0, 1]);
  const recede = useTransform(p, [full + 0.06, full + 0.2], [1, i === 2 ? 1 : 0.35]);
  return (
    <motion.div className="absolute origin-bottom w-[86vw] md:w-[400px]" style={{ willChange: "transform, opacity", rotateX, y, x: (i - 1) * 440, opacity: useTransform([opacity, recede], ([a, b]: number[]) => a * b) }}>
      <div className="p-6 md:p-7" style={{ background: "#000000", border: RULE, boxShadow: "0 30px 80px -30px rgba(0,0,0,0.8)" }}>
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center rounded-full font-[JetBrains_Mono] text-[11px]" style={{ width: 27, height: 27, background: MONEY, color: "#0A0903" }}>{e.n}</span>
          <h3 className="font-[Redaction] font-black leading-none" style={{ fontSize: "clamp(26px,3vw,36px)", color: INK }}>{e.name}</h3>
        </div>
        <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.16em] uppercase mt-3" style={{ color: MONEY }}>{e.stages}</p>
        <p className="font-[Redaction] mt-2" style={{ fontSize: "15px", color: STEEL }}>{e.line}</p>
        <p className="font-[Redaction] mt-3 pt-3" style={{ fontSize: "15px", color: INK, borderTop: RULE }}>{e.outcome}</p>
      </div>
    </motion.div>
  );
}
function EnginesRoom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 26, mass: 0.45 });
  const titleScale = useTransform(p, [0, 0.9], [1, 0.94]);
  const titleOpacity = useTransform(p, [0, 0.06], [0.35, 1]);
  return (
    <section ref={ref} id="engines" className="relative" style={{ height: "380vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center" style={{ perspective: 1200 }}>
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6" style={{ scale: titleScale, opacity: titleOpacity }}>
          <p className={lab} style={{ color: STEEL }}>The System</p>
          <h2 className="font-[Redaction] font-black leading-[0.95] mt-3" style={{ fontSize: "clamp(40px,8.5vw,130px)", color: "rgba(255,253,251,0.2)" }}>
            One system.<br /><span className="font-[Fraunces]" style={{ fontWeight: 400, fontStyle: "italic", color: "rgba(65,140,123,0.55)" }}>Three engines.</span>
          </h2>
        </motion.div>
        <div className="absolute inset-0 hidden md:block">
          {ENGINES.map((e, i) => <div key={e.n} className="absolute inset-0 flex items-center justify-center"><EngineCard e={e} i={i} p={p} /></div>)}
        </div>
        {/* mobile: cards stack center, one at a time */}
        <div className="absolute inset-0 md:hidden flex items-center justify-center">
          {ENGINES.map((e, i) => <MobileEngine key={e.n} e={e} i={i} p={p} />)}
        </div>
      </div>
    </section>
  );
}
function MobileEngine({ e, i, p }: { e: (typeof ENGINES)[number]; i: number; p: MotionValue<number> }) {
  const start = 0.08 + i * 0.28, full = start + 0.14, out = start + 0.28;
  const rotateX = useTransform(p, [start, full], [65, 0]);
  const y = useTransform(p, [start, full], ["60vh", "0vh"]);
  const opacity = useTransform(p, [start, full, i === 2 ? 1 : out, i === 2 ? 1 : out + 0.03], [0, 1, 1, i === 2 ? 1 : 0]);
  return (
    <motion.div className="absolute w-[86vw] origin-bottom" style={{ rotateX, y, opacity, willChange: "transform, opacity" }}>
      <div className="p-6" style={{ background: "#000000", border: RULE, boxShadow: "0 30px 80px -30px rgba(0,0,0,0.8)" }}>
        <div className="flex items-center gap-3">
          <span className="flex items-center justify-center rounded-full font-[JetBrains_Mono] text-[11px]" style={{ width: 26, height: 26, background: MONEY, color: "#0A0903" }}>{e.n}</span>
          <h3 className="font-[Redaction] font-black leading-none" style={{ fontSize: 28, color: INK }}>{e.name}</h3>
        </div>
        <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.16em] uppercase mt-3" style={{ color: MONEY }}>{e.stages}</p>
        <p className="font-[Redaction] mt-2" style={{ fontSize: 15, color: STEEL }}>{e.line}</p>
        <p className="font-[Redaction] mt-3 pt-3" style={{ fontSize: 15, color: INK, borderTop: RULE }}>{e.outcome}</p>
      </div>
    </motion.div>
  );
}

/* SECTION 3 — the story scrubs horizontally */
function StoryRoom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 70, damping: 26, mass: 0.45 });
  const x = useTransform(p, [0.05, 0.95], ["4vw", "-172vw"]);
  const header = (
    <div className="px-6 md:px-12 mb-8">
      <p className={lab} style={{ color: STEEL, textShadow: "0 1px 12px rgba(0,0,0,0.8)" }}>One Lead, Start To Finish</p>
      <h2 className="font-[Redaction] font-bold leading-[1.02] mt-3" style={{ fontSize: "clamp(26px,4vw,52px)", textShadow: "0 2px 20px rgba(0,0,0,0.75)" }}>
        You&apos;re busy doing the work.<br /><span className="font-[Fraunces]" style={{ fontWeight: 400, fontStyle: "italic", color: MONEY, textShadow: "0 2px 20px rgba(0,0,0,0.9)" }}>The system isn&apos;t.</span>
      </h2>
    </div>
  );
  const card = (b: (typeof STORY)[number], i: number, cls: string) => (
    <div key={i} className={cls} style={{ background: "#000000", border: RULE }}>
      <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase" style={{ color: b.who === "system" ? MONEY : STEEL }}>
        {b.t} · {b.who === "system" ? "The system" : b.who === "mark" ? "Your crew" : "A customer"}
      </p>
      <p className="font-[Redaction] mt-3" style={{ fontSize: "clamp(17px,1.6vw,21px)" }}>{b.text}</p>
      <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.16em] uppercase mt-4" style={{ color: "rgba(255,253,251,0.35)" }}>{String(i + 1).padStart(2, "0")} / 0{STORY.length} · {b.stage}</p>
    </div>
  );
  return (
    <section ref={ref} className="relative md:h-[320vh]">
      {/* desktop: pinned horizontal scrub */}
      <div className="hidden md:flex sticky top-0 h-screen overflow-hidden flex-col justify-center">
        {header}
        <div className="px-12 mb-6 h-px w-full max-w-[420px] overflow-hidden" style={{ background: "rgba(255,253,251,0.12)" }}>
          <motion.div className="h-full origin-left" style={{ scaleX: p, background: MONEY }} />
        </div>
        <motion.div className="flex gap-6 w-max pl-2" style={{ x, willChange: "transform" }}>
          {STORY.map((b, i) => card(b, i, `shrink-0 w-[26vw] p-6 ${i % 2 ? "mt-[34px]" : ""}`))}
        </motion.div>
      </div>
      {/* mobile: clean vertical story */}
      <div className="md:hidden py-14">
        {header}
        <div className="px-6 space-y-3">
          {STORY.map((b, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 0.5, ease: EASE }}>
              {card(b, i, "w-full p-5")}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* SECTION 4 — work: editorial index + cursor-chasing preview */
function Chrome({ item }: { item: (typeof PORTFOLIO)[number] }) {
  return (
    <div className="overflow-hidden rounded-lg" style={{ border: RULE, boxShadow: "0 40px 110px -25px rgba(0,0,0,0.9)", background: "#000000" }}>
      <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ borderBottom: RULE, background: "rgba(255,253,251,0.04)" }}>
        <span className="flex gap-1.5">{[0, 1, 2].map((d) => <span key={d} className="w-2 h-2 rounded-full" style={{ background: d === 0 ? MONEY : "rgba(255,253,251,0.18)" }} />)}</span>
        <span className="mx-auto font-[JetBrains_Mono] text-[10px] tracking-[0.1em]" style={{ color: STEEL }}>{item.href.replace("https://", "")}</span>
        <span className="w-8" />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        <img src={item.img} alt={item.name} className="absolute inset-0 h-full w-full object-cover object-top" />
      </div>
    </div>
  );
}
function WorkShowcase() {
  const [active, setActive] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0), my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 160, damping: 22, mass: 0.35 });
  const py = useSpring(my, { stiffness: 160, damping: 22, mass: 0.35 });
  return (
    <section id="work" ref={wrap} className="relative px-6 md:px-12 py-24 md:py-36"
      onMouseMove={(e) => {
        const r = wrap.current?.getBoundingClientRect(); if (!r) return;
        mx.set(e.clientX - r.left); my.set(e.clientY - r.top);
      }}
      onMouseLeave={() => setActive(null)}>
      <p className={lab} style={{ color: STEEL }}>Selected Work</p>
      <h2 className="font-[Redaction] font-bold leading-[0.98] mt-2 mb-10" style={{ fontSize: "clamp(24px,3.2vw,42px)" }}>
        Real businesses. <span className="font-[Fraunces]" style={{ fontWeight: 400, fontStyle: "italic", color: MONEY }}>Live right now.</span>
      </h2>
      <div style={{ borderTop: RULE }}>
        {PORTFOLIO.map((item, i) => (
          <div key={item.href} style={{ borderBottom: RULE }}>
            <a data-cursor href={item.href} target="_blank" rel="noopener noreferrer"
              className="group flex items-baseline gap-5 md:gap-8 py-6 md:py-8 transition-opacity duration-300"
              style={{ opacity: active === null || active === i ? 1 : 0.25 }}
              onMouseEnter={() => setActive(i)}
              onClick={(e) => { if (window.matchMedia("(hover: none)").matches) { e.preventDefault(); setOpen(open === i ? null : i); } }}>
              <span className="font-[JetBrains_Mono] text-[12px] shrink-0" style={{ color: MONEY }}>0{i + 1}</span>
              <span className="font-[Redaction] font-black leading-none" style={{ fontSize: "clamp(36px,7vw,96px)" }}>{item.name}</span>
              <span className="ml-auto text-right shrink-0">
                <span className="block font-[JetBrains_Mono] text-[10px] tracking-[0.18em] uppercase" style={{ color: STEEL }}>{item.vertical}</span>
                <span className="hidden md:block font-[JetBrains_Mono] text-[10px] tracking-[0.18em] uppercase mt-1 transition-colors group-hover:opacity-100 opacity-50" style={{ color: MONEY }}>Visit ↗</span>
              </span>
            </a>
            {/* mobile inline expand */}
            {open === i && (
              <motion.div className="md:hidden pb-6" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: EASE }}>
                <Chrome item={item} />
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase px-5 py-3" style={{ background: MONEY, color: "#0A0903" }}>Visit {item.href.replace("https://", "")} ↗</a>
              </motion.div>
            )}
          </div>
        ))}
      </div>
      {/* desktop cursor-chasing preview */}
      <motion.div className="hidden md:block absolute z-[8] w-[420px] pointer-events-none"
        style={{ left: px, top: py, x: "4%", y: "-50%", opacity: active !== null ? 1 : 0, transition: "opacity 0.25s" }}>
        {active !== null && <Chrome item={PORTFOLIO[active]} />}
      </motion.div>
    </section>
  );
}

/* SECTION 5 — pricing folds up from the floor */
function PricingFold() {
  return (
    <section id="pricing" className="relative px-6 md:px-12 py-24 md:py-32" style={{ perspective: 1200 }}>
      <p className={lab} style={{ color: STEEL }}>Three Ways To Build</p>
      <h2 className="font-[Redaction] font-bold leading-[0.98] mt-2 max-w-[20ch]" style={{ fontSize: "clamp(28px,4.4vw,54px)" }}>Built for the size and complexity of the business.</h2>
      <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase mt-4 mb-10" style={{ color: MONEY }}>Built and run by Jack Savoca. No agency layers.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3" style={{ border: RULE }}>
        {BANDS.map((b, i) => (
          <motion.div key={b.n} className="origin-bottom" initial={{ rotateX: 34, y: 60, opacity: 0 }} whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-12%" }} transition={{ duration: 0.7, ease: EASE, delay: i * 0.12 }}>
            <BandCard b={b} last={i === BANDS.length - 1} />
          </motion.div>
        ))}
      </div>
      <div className="mt-8 p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8" style={{ border: RULE, background: "rgba(65,140,123,0.10)" }}>
        <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.24em] uppercase shrink-0" style={{ color: MONEY }}>The Promise</p>
        <p className="font-[Redaction]" style={{ fontSize: "clamp(17px,2vw,22px)" }}>
          If the first month doesn&apos;t show measurable improvement, the deposit comes back. After that, three months to let the system work — then month-to-month.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3" style={{ border: RULE }}>
        {COMPARE.map(([who, cost, note], i) => (
          <div key={who} className={`p-5 md:p-6 border-b md:border-b-0 ${i < COMPARE.length - 1 ? "md:border-r" : ""}`}
            style={{ borderColor: "rgba(255,253,251,0.14)", background: i === COMPARE.length - 1 ? "rgba(65,140,123,0.14)" : "transparent" }}>
            <h3 className="font-[Redaction] font-bold" style={{ fontSize: "clamp(18px,2vw,24px)", color: i === COMPARE.length - 1 ? MONEY : INK }}>{who}</h3>
            <p className="font-[JetBrains_Mono] text-[12px] mt-1.5" style={{ color: INK }}>{cost}</p>
            <p className="font-[Redaction] mt-2" style={{ fontSize: "14px", color: STEEL }}>{note}</p>
          </div>
        ))}
      </div>
      <div className="mt-10" style={{ border: RULE }}>
        {FAQ.map(([q, a], i) => (
          <details key={q} className="group" style={{ borderBottom: i < FAQ.length - 1 ? RULE : undefined }}>
            <summary data-cursor className="flex items-center justify-between cursor-pointer list-none px-5 md:px-6 py-4">
              <span className="font-[Redaction] font-bold" style={{ fontSize: "clamp(16px,1.9vw,21px)" }}>{q}</span>
              <span className="font-[JetBrains_Mono] text-[14px] transition-transform group-open:rotate-45" style={{ color: MONEY }}>+</span>
            </summary>
            <p className="px-5 md:px-6 pb-5 font-[Redaction] max-w-[64ch]" style={{ fontSize: "15px", color: STEEL }}>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* SECTION 6 — finale */
function Finale() {
  return (
    <section id="contact" className="relative overflow-hidden px-6 md:px-12 py-28 md:py-40">
      <span aria-hidden className="absolute -right-16 top-1/2 -translate-y-1/2 font-[Fraunces] font-black select-none leading-none pointer-events-none" style={{ fontSize: "min(90vw,700px)", color: "rgba(65,140,123,0.07)" }}>§</span>
      <p className={lab} style={{ color: STEEL }}>Why This Works</p>
      <div className="relative mt-4 font-[Redaction] space-y-4 max-w-[52ch]" style={{ fontSize: "clamp(17px,2vw,22px)" }}>
        <p>Savoca Studio builds the revenue workflow underneath the business — and keeps improving it with you.</p>
        <p style={{ color: INK }}>You work directly with me — Jack Savoca. I spent my career shipping products and running revenue operations inside Fortune 500 companies: <span style={{ color: MONEY }}>Facebook, Whole Foods Market, Indeed, and FedEx.</span></p>
      </div>
      <div className="mt-8"><Badges /></div>
      <div className="relative mt-16">
        <h2 className="font-[Redaction] font-black leading-[0.92] max-w-[16ch]" style={{ fontSize: "clamp(36px,7.5vw,120px)" }}>
          Build the layer between demand and <span className="font-[Fraunces]" style={{ fontWeight: 400, fontStyle: "italic", color: MONEY, animation: "flick 9s linear 2s infinite" }}>getting paid.</span>
        </h2>
        <div className="mt-9"><Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-8 py-5" style={{ background: MONEY, color: "#0A0903" }}>Let&apos;s talk →</a></Magnetic></div>
        <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.12em] mt-9" style={{ color: STEEL }}>jack@savoca.studio · Austin, TX · Taking new builds</p>
      </div>
    </section>
  );
}

export default function V3() {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { if (reduce) setLoaded(true); }, [reduce]);
  const { scrollY } = useScroll();
  const vel = useVelocity(scrollY);
  const sigRotate = useSpring(useTransform(vel, [-2400, 2400], [-22, 22]), { stiffness: 220, damping: 18, mass: 0.3 });
  const trackSkew = useSpring(useTransform(vel, [-3000, 3000], [4, -4]), { stiffness: 200, damping: 22, mass: 0.3 });
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.35, smoothWheel: true, touchMultiplier: 1.4 });
    let raf = 0; const loop = (t: number) => { lenis.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, [reduce]);

  return (
    <main className="relative overflow-x-clip md:cursor-none" style={{ background: CREAM, color: INK }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Regular.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:900;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Italic.woff2') format('woff2');font-weight:400;font-style:italic;font-display:swap}
        @keyframes marq{from{transform:translateX(0)}to{transform:translateX(-33.3333%)}}
        @keyframes marqR{from{transform:translateX(-33.3333%)}to{transform:translateX(0)}}
        @keyframes flick{0%,91%,100%{opacity:1}92%{opacity:0.3}94%{opacity:0.9}96%{opacity:0.45}98%{opacity:1}}
        @keyframes nudge{0%,86%,100%{transform:translateX(0)}90%{transform:translateX(5px)}94%{transform:translateX(-2px)}}
        @keyframes drift1{from{transform:translate(0,0) scale(1)}to{transform:translate(14vw,10vh) scale(1.18)}}
        @keyframes drift2{from{transform:translate(0,0) scale(1.1)}to{transform:translate(-12vw,-8vh) scale(0.95)}}
      `}</style>
      {!reduce && <Cursor />}
      <AnimatePresence>{!reduce && !loaded && <Preloader key="pre" onDone={() => setLoaded(true)} />}</AnimatePresence>
      <DroneLayer reduce={!!reduce} />
      <Grain />
      <ScrollRail />

      {/* fixed header */}
      <header className="fixed top-0 inset-x-0 z-[60] flex items-center justify-between px-6 md:px-10 py-4" style={{ background: "linear-gradient(to bottom, rgba(11,8,6,0.9), transparent)" }}>
        <a data-cursor href="#" className="flex items-baseline gap-2.5 hover:opacity-70 transition-opacity">
          <motion.span className="inline-block font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(28px,3vw,40px)", color: MONEY, rotate: sigRotate }}>§</motion.span>
          <span className="font-[Redaction] font-black tracking-[-0.01em] leading-none" style={{ fontSize: "clamp(17px,1.9vw,25px)" }}>Savoca Studio</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase" style={{ color: INK }}>
          <a data-cursor href="#engines" className="opacity-60 hover:opacity-100 transition-opacity">Systems</a>
          <a data-cursor href="#work" className="opacity-60 hover:opacity-100 transition-opacity">Work</a>
          <a data-cursor href="#pricing" className="opacity-60 hover:opacity-100 transition-opacity">Pricing</a>
          <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block px-5 py-2.5" style={{ background: MONEY, color: "#0A0903" }}>Let&apos;s talk →</a></Magnetic>
        </nav>
      </header>

      <Hero reduce={!!reduce} go={loaded} />

      {/* dual opposing marquees, velocity-skewed */}
      <motion.div className="mx-2.5 md:mx-4 my-2" style={{ skewX: trackSkew }}>
        <div className="overflow-hidden py-3 md:py-4" style={{ borderTop: RULE, borderBottom: RULE }}>
          <div className="flex items-center gap-8 w-max" style={{ animation: "marq 80s linear infinite" }}>
            {[...Array(3)].flatMap((_, r) =>
              VERTICALS.map((v) => (
                <span key={`${r}-${v}`} className="flex items-center gap-8 shrink-0">
                  <span className="font-[Fraunces] whitespace-nowrap" style={{ fontSize: "clamp(18px,2.3vw,28px)", fontStyle: "italic", color: "rgba(255,253,251,0.42)" }}>{v}</span>
                  <span className="font-[Fraunces] font-black" style={{ color: "rgba(65,140,123,0.45)", fontSize: "clamp(13px,1.5vw,18px)" }}>§</span>
                </span>
              ))
            )}
          </div>
        </div>
      </motion.div>
      <EnginesRoom />
      <StoryRoom />
      <WorkShowcase />
      <PricingFold />
      <Finale />
    </main>
  );
}
