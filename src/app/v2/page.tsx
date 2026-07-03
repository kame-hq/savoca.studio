"use client";

// Home (/) — TAB APP on cream. Dark cinematic video hero; all other panels are
// cream/ink spec-sheet style. Systems tab = why-you-need-me (before/after) →
// pipeline diagram → process row. Hash-synced tabs. Data + components in ./shared.
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Cursor, HeroReel, Split, PathStrip, Engines, ProcessStepper, StoryPlayer, BandCard, Badges, Grain, Magnetic, Tilt,
  CREAM, INK, BONE, STEEL, MONEY, SIGNAL, RULE, TEAL, EASE, PATH_SHORT, PATH_LONG, BANDS, REPORTING_LINE, VERTICALS, FAQ, COMPARE,
} from "./shared";

const PORTFOLIO = [
  { name: "Krazy Strong", vertical: "Strength Coaching", img: "/img/portfolio/krazystrong.jpg", href: "https://krazystrong.app",
    desc: "Brand, site, and booking flow for a strength coach — built to turn followers into clients." },
  { name: "Squatzilla Fitness", vertical: "Metabolism + Strength", img: "/img/portfolio/squatzilla.jpg", href: "https://squatzilla.fitness",
    desc: "Coaching site plus a client tracker with passwordless login — programs, check-ins, progress." },
  { name: "Texas Tattoo", vertical: "Tattoo Parlor", img: "/img/portfolio/texastattoo.jpg", href: "https://texastattoo.app",
    desc: "Poster-collage site with appointment requests for Dan Crowe's shop in Wimberley, Texas." },
];

const TABS: [string, string][] = [
  ["Home", ""], ["Systems", "systems"],
  ["Pricing", "pricing"], ["Work", "work"], ["About", "about"],
];

export default function Home() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState("");
  const [menu, setMenu] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apply = () => {
      const h = window.location.hash.replace("#", "");
      setTab(TABS.some((t) => t[1] === h) ? h : "");
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  useEffect(() => { if (scroller.current) scroller.current.scrollTop = 0; }, [tab]);

  const go = (k: string) => {
    setTab(k); setMenu(false);
    history.replaceState(null, "", k ? `#${k}` : "#");
  };

  const lab = "font-[JetBrains_Mono] text-[11px] tracking-[0.3em] uppercase mb-4";

  return (
    <main className="fixed inset-0 flex flex-col overflow-hidden md:cursor-none" style={{ background: CREAM, color: INK }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Regular.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:900;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Italic.woff2') format('woff2');font-weight:400;font-style:italic;font-display:swap}
        @keyframes marq{from{transform:translateX(0)}to{transform:translateX(-33.3333%)}}
        @keyframes drift1{from{transform:translate(0,0) scale(1)}to{transform:translate(14vw,10vh) scale(1.18)}}
        @keyframes drift2{from{transform:translate(0,0) scale(1.1)}to{transform:translate(-12vw,-8vh) scale(0.95)}}
        @keyframes drift3{from{transform:translate(0,0) scale(0.95)}to{transform:translate(-8vw,6vh) scale(1.22)}}
        @keyframes flick{0%,91%,100%{opacity:1}92%{opacity:0.3}94%{opacity:0.9}96%{opacity:0.45}98%{opacity:1}}
        @keyframes nudge{0%,86%,100%{transform:translateX(0)}90%{transform:translateX(5px)}94%{transform:translateX(-2px)}}
      `}</style>
      {!reduce && <Cursor />}
      {/* living background: slow-breathing glows on near-black */}
      <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute rounded-full" style={{ width: "75vmax", height: "75vmax", left: "-25vmax", top: "-30vmax",
          background: "radial-gradient(circle, rgba(44,122,95,0.11) 0%, transparent 62%)",
          animation: reduce ? undefined : "drift1 60s ease-in-out infinite alternate" }} />
        <div className="absolute rounded-full" style={{ width: "70vmax", height: "70vmax", right: "-28vmax", bottom: "-32vmax",
          background: "radial-gradient(circle, rgba(241,233,216,0.055) 0%, transparent 60%)",
          animation: reduce ? undefined : "drift2 75s ease-in-out infinite alternate" }} />
        <div className="absolute rounded-full" style={{ width: "55vmax", height: "55vmax", left: "30%", top: "45%",
          background: "radial-gradient(circle, rgba(44,122,95,0.06) 0%, transparent 58%)",
          animation: reduce ? undefined : "drift3 90s ease-in-out infinite alternate" }} />
      </div>
      <Grain />

      {/* header + tab bar (cream) */}
      <header className="relative z-[60] shrink-0 flex items-center justify-between gap-6 px-6 md:px-10 py-4" style={{ borderBottom: RULE }}>
        <button data-cursor onClick={() => go("")} className="flex items-baseline gap-2.5 hover:opacity-70 transition-opacity">
          <span className="font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(28px,3vw,40px)", color: MONEY }}>§</span>
          <span className="font-[Redaction] font-black tracking-[-0.01em] leading-none" style={{ fontSize: "clamp(17px,1.9vw,25px)" }}>Savoca Studio</span>
        </button>

        <nav className="hidden md:flex items-center gap-7 font-[JetBrains_Mono] text-[12px] tracking-[0.16em] uppercase">
          {TABS.map(([t, k], i) => (
            <button key={k} data-cursor onClick={() => go(k)} className="relative py-1 transition-opacity hover:opacity-100"
              style={{ color: INK, opacity: tab === k ? 1 : 0.45 }}>
              <span className="mr-1.5 text-[9px] align-super" style={{ color: tab === k ? SIGNAL : "rgba(241,233,216,0.4)" }}>0{i + 1}</span>{t}
              {tab === k && <motion.span layoutId="tabink" className="absolute left-0 right-0 -bottom-0.5 h-px" style={{ background: INK }} />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden lg:flex items-center gap-2 font-[JetBrains_Mono] text-[10px] tracking-[0.14em] uppercase" style={{ color: STEEL }}>
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ background: MONEY }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: MONEY }} />
            </span>
            Austin, TX · Taking new builds
          </span>
          <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="hidden md:inline-block font-[JetBrains_Mono] text-[11px] tracking-[0.14em] uppercase px-5 py-2.5" style={{ background: MONEY, color: CREAM }}>Let&apos;s talk →</a></Magnetic>
          <button data-cursor aria-label="Open menu" onClick={() => setMenu(true)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="block w-7 h-px" style={{ background: INK }} /><span className="block w-7 h-px" style={{ background: INK }} />
          </button>
        </div>
      </header>

      {/* mobile menu — redo: living glows, lockup, italic-active rows */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-[85] md:hidden flex flex-col overflow-hidden" style={{ background: "#0B0806", color: INK }}
            initial={{ clipPath: "inset(0 0 100% 0)" }} animate={{ clipPath: "inset(0 0 0% 0)" }} exit={{ clipPath: "inset(0 0 100% 0)" }} transition={{ duration: 0.5, ease: EASE }}>
            {/* glows + watermark */}
            <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className="absolute rounded-full" style={{ width: "90vmax", height: "90vmax", left: "-40vmax", top: "-45vmax",
                background: "radial-gradient(circle, rgba(44,122,95,0.14) 0%, transparent 60%)",
                animation: reduce ? undefined : "drift1 45s ease-in-out infinite alternate" }} />
              <div className="absolute rounded-full" style={{ width: "80vmax", height: "80vmax", right: "-40vmax", bottom: "-40vmax",
                background: "radial-gradient(circle, rgba(241,233,216,0.06) 0%, transparent 58%)",
                animation: reduce ? undefined : "drift2 60s ease-in-out infinite alternate" }} />
              <span className="absolute -right-14 top-1/2 -translate-y-1/2 font-[Fraunces] font-black select-none leading-none" style={{ fontSize: "115vw", color: "rgba(44,122,95,0.07)" }}>§</span>
            </div>
            {/* top: lockup + close */}
            <div className="relative flex items-center justify-between px-6 pt-6">
              <span className="flex items-baseline gap-2">
                <span className="font-[Fraunces] font-black leading-none" style={{ fontSize: 30, color: "#2C7A5F" }}>§</span>
                <span className="font-[Redaction] font-black leading-none" style={{ fontSize: 19 }}>Savoca Studio</span>
              </span>
              <button data-cursor aria-label="Close menu" onClick={() => setMenu(false)} className="font-[JetBrains_Mono] text-[11px] tracking-[0.18em] uppercase px-3 py-2" style={{ border: "1px solid rgba(241,233,216,0.25)", color: INK }}>Close ✕</button>
            </div>
            {/* items */}
            <nav className="relative flex-1 flex flex-col justify-center px-6">
              {TABS.map(([t, k], i) => {
                const active = tab === k;
                return (
                  <motion.button key={k} onClick={() => go(k)}
                    initial={{ x: -28, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.14 + i * 0.07, duration: 0.55, ease: EASE }}
                    className="relative flex items-center justify-between text-left py-4"
                    style={{ borderBottom: "1px solid rgba(241,233,216,0.12)" }}>
                    <span className="flex items-baseline gap-4">
                      <span className="font-[JetBrains_Mono] text-[11px]" style={{ color: active ? "#2C7A5F" : "rgba(241,233,216,0.3)" }}>0{i + 1}</span>
                      {active ? (
                        <span className="font-[Fraunces] leading-none" style={{ fontSize: "clamp(42px,12vw,70px)", fontStyle: "italic", fontWeight: 400, color: "#F5EFE1" }}>{t}</span>
                      ) : (
                        <span className="font-[Redaction] font-black leading-none" style={{ fontSize: "clamp(42px,12vw,70px)", color: "rgba(241,233,216,0.42)" }}>{t}</span>
                      )}
                    </span>
                    {active && <span className="font-[JetBrains_Mono] text-[18px]" style={{ color: "#2C7A5F" }}>→</span>}
                  </motion.button>
                );
              })}
            </nav>
            {/* bottom: contact block */}
            <motion.div className="relative px-6 pb-8" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.5, ease: EASE }}>
              <div className="flex items-center justify-between mb-4 font-[JetBrains_Mono] text-[10px] tracking-[0.16em] uppercase" style={{ color: "#A29885" }}>
                <span className="flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full" style={{ background: "#2C7A5F" }} />
                  Austin, TX · Taking new builds
                </span>
                <span>jack@savoca.studio</span>
              </div>
              <a href="mailto:jack@savoca.studio" onClick={() => setMenu(false)} className="block text-center font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: "#2C7A5F", color: "#0B0806" }}>Let&apos;s talk →</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* panel area */}
      <div ref={scroller} className="relative flex-1 overflow-y-auto" style={{ perspective: 1400 }}>
        <AnimatePresence mode="wait">
          <motion.div key={tab}
            initial={{ rotateX: -16, y: 46, opacity: 0, transformOrigin: "top center" }}
            animate={{ rotateX: 0, y: 0, opacity: 1 }}
            exit={{ rotateX: 10, y: -28, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }} className="min-h-full">

            {/* HOME — dark cinematic hero, matted in cream */}
            {tab === "" && (<>
              <Tilt strength={1.6}>
              <section className="relative flex flex-col justify-end overflow-hidden m-2.5 md:m-4" style={{ color: BONE, minHeight: "calc(100dvh - 100px)", border: RULE }}>
                <HeroReel />
                <div className="relative z-10 px-6 md:px-10 pb-12 lg:pb-14 pt-16">
                  <p className="font-[JetBrains_Mono] text-[11px] md:text-[12px] tracking-[0.18em] md:tracking-[0.28em] uppercase mb-6" style={{ color: BONE, textShadow: "0 1px 14px rgba(0,0,0,0.75)" }}>Revenue systems for service businesses</p>
                  <Split text="I build the layer between demand and getting paid." go accentFrom={7} className="font-[Redaction] font-black leading-[0.9] tracking-[-0.015em] max-w-[17ch]" style={{ fontSize: "clamp(29px,8.4vw,102px)", textShadow: "0 2px 28px rgba(0,0,0,0.65)" }} />
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block whitespace-nowrap font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: BONE, color: "#0B0806", animation: reduce ? undefined : "nudge 7s ease-in-out infinite" }}>Let&apos;s talk →</a></Magnetic>
                    <button data-cursor onClick={() => go("systems")} className="whitespace-nowrap font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase opacity-80 hover:opacity-100 transition-opacity" style={{ color: BONE }}>See the system →</button>
                  </div>
                  <div className="mt-8"><PathStrip nodes={PATH_SHORT} accentLast flicker /></div>
                </div>
              </section>
              </Tilt>
              {/* verticals marquee */}
              <div className="overflow-hidden py-4 md:py-5 mx-2.5 md:mx-4 mb-4" style={{ borderTop: RULE, borderBottom: RULE, color: INK }}>
                <div className="flex items-center gap-8 w-max" style={{ animation: "marq 90s linear infinite" }}>
                  {[...Array(3)].flatMap((_, r) =>
                    VERTICALS.map((v) => (
                      <span key={`${r}-${v}`} className="flex items-center gap-8 shrink-0">
                        <span className="font-[Fraunces] whitespace-nowrap" style={{ fontSize: "clamp(18px,2.3vw,28px)", fontStyle: "italic", color: "rgba(242,235,220,0.4)" }}>{v}</span>
                        <span className="font-[Fraunces] font-black" style={{ color: "rgba(44,122,95,0.45)", fontSize: "clamp(13px,1.5vw,18px)" }}>§</span>
                      </span>
                    ))
                  )}
                </div>
              </div>
            </>)}

            {/* SYSTEMS — why you need it → the pipeline → the process */}
            {tab === "systems" && (
              <section className="relative overflow-hidden px-6 md:px-10 py-10 lg:py-14">
                <span aria-hidden className="absolute -right-10 -top-24 font-[Fraunces] font-black select-none leading-none pointer-events-none" style={{ fontSize: "clamp(280px,32vw,520px)", color: "rgba(44,122,95,0.10)" }}>§</span>
                <p className={lab} style={{ color: STEEL }}>Why a system</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[19ch] mb-3" style={{ fontSize: "clamp(27px,4.2vw,50px)" }}>
                  You&apos;re busy doing the work. That&apos;s when the money slips.
                </h2>
                <p className="font-[Redaction] mb-8 max-w-[54ch]" style={{ fontSize: "clamp(16px,1.9vw,20px)", color: STEEL }}>
                  Not from bad work — from missed calls, slow quotes, late invoices, and customers nobody follows up with. Here&apos;s one lead, start to finish:
                </p>
                <StoryPlayer />

                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <p className={lab} style={{ color: STEEL }}>The System</p>
                  <h2 className="font-[Redaction] font-bold leading-[0.98] mb-2" style={{ fontSize: "clamp(28px,4.2vw,52px)" }}>
                    One system. <span className="font-[Fraunces]" style={{ fontStyle: "italic", fontWeight: 400, color: MONEY }}>Three engines.</span>
                  </h2>
                  <p className="font-[Redaction] mb-8 max-w-[54ch]" style={{ fontSize: "clamp(16px,1.9vw,20px)", color: STEEL }}>
                    Aligned, connected, and built around one thing — getting paid.
                  </p>
                  <Engines />
                  <p className="font-[JetBrains_Mono] text-[11px] leading-relaxed mt-4 max-w-[64ch]" style={{ color: STEEL }}>{REPORTING_LINE}</p>
                </div>

                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <p className={lab} style={{ color: STEEL }}>The process</p>
                  <h2 className="font-[Redaction] font-bold leading-[0.95] mb-7" style={{ fontSize: "clamp(23px,3.2vw,38px)" }}>Build. Run. Measure. Improve.</h2>
                  <ProcessStepper />
                </div>
              </section>
            )}

            {/* PRICING */}
            {tab === "pricing" && (
              <section className="px-6 md:px-10 py-10 lg:py-14">
                <p className={lab} style={{ color: STEEL }}>Three ways to build</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[20ch]" style={{ fontSize: "clamp(26px,4vw,48px)" }}>Built for the size and complexity of the business.</h2>
                <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase mt-4 mb-8" style={{ color: MONEY }}>Built and run by Jack Savoca. No agency layers, no account team.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3" style={{ border: RULE }}>
                  {BANDS.map((b, i) => <BandCard key={b.n} b={b} last={i === BANDS.length - 1} />)}
                </div>

                {/* the promise */}
                <div className="mt-8 p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8" style={{ border: RULE, background: "rgba(44,122,95,0.10)" }}>
                  <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.24em] uppercase shrink-0" style={{ color: MONEY }}>The Promise</p>
                  <p className="font-[Redaction]" style={{ fontSize: "clamp(17px,2vw,22px)" }}>
                    If the first month doesn&apos;t show measurable improvement, the deposit comes back. After that, three months to let the system work — then month-to-month.
                  </p>
                </div>

                {/* vs the alternatives */}
                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <p className={lab} style={{ color: STEEL }}>The Alternatives</p>
                  <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: RULE }}>
                    {COMPARE.map(([who, cost, note], i) => (
                      <div key={who} className={`p-5 md:p-6 border-b md:border-b-0 ${i < COMPARE.length - 1 ? "md:border-r" : ""}`}
                        style={{ borderColor: "rgba(241,233,216,0.14)", background: i === COMPARE.length - 1 ? "rgba(44,122,95,0.14)" : "transparent" }}>
                        <h3 className="font-[Redaction] font-bold" style={{ fontSize: "clamp(18px,2vw,24px)", color: i === COMPARE.length - 1 ? MONEY : INK }}>{who}</h3>
                        <p className="font-[JetBrains_Mono] text-[12px] mt-1.5" style={{ color: INK }}>{cost}</p>
                        <p className="font-[Redaction] mt-2" style={{ fontSize: "14px", color: STEEL }}>{note}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <p className={lab} style={{ color: STEEL }}>Fair Questions</p>
                  <div style={{ border: RULE }}>
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
                </div>
              </section>
            )}

            {/* WORK — editorial showcase rows */}
            {tab === "work" && (
              <section className="relative overflow-hidden px-6 md:px-10 py-10 lg:py-14">
                <span aria-hidden className="absolute -right-12 top-[30%] font-[Fraunces] font-black select-none leading-none pointer-events-none" style={{ fontSize: "clamp(280px,30vw,500px)", color: "rgba(44,122,95,0.10)" }}>§</span>
                <p className={lab} style={{ color: STEEL }}>Selected Work</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[18ch]" style={{ fontSize: "clamp(26px,4vw,48px)" }}>
                  Real businesses. <span className="font-[Fraunces]" style={{ fontStyle: "italic", fontWeight: 400, color: MONEY }}>Live right now.</span>
                </h2>
                <div className="mt-10 space-y-14 lg:space-y-16">
                  {PORTFOLIO.map((p, i) => (
                    <motion.a key={p.href} data-cursor href={p.href} target="_blank" rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.6, ease: EASE, delay: i * 0.05 }}
                      className={`group grid gap-6 lg:gap-12 items-center lg:grid-cols-[1fr_1.15fr] ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                      <div className="lg:[direction:ltr]">
                        <div className="flex items-baseline gap-4">
                          <span className="font-[JetBrains_Mono] text-[12px]" style={{ color: MONEY }}>0{i + 1}</span>
                          <h3 className="font-[Redaction] font-black leading-none transition-colors" style={{ fontSize: "clamp(34px,5.4vw,68px)" }}>
                            {p.name}
                          </h3>
                        </div>
                        <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mt-3" style={{ color: MONEY }}>{p.vertical}</p>
                        <p className="font-[Redaction] mt-3 max-w-[44ch]" style={{ fontSize: "clamp(15px,1.8vw,19px)", color: STEEL }}>{p.desc}</p>
                        <span className="inline-flex items-center gap-2 mt-5 font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase" style={{ color: INK }}>
                          Visit the site <span className="transition-transform duration-300 group-hover:translate-x-1.5" style={{ color: MONEY }}>→</span>
                        </span>
                      </div>
                      <Tilt>
                        <div className="relative overflow-hidden aspect-[16/10]" style={{ border: RULE, boxShadow: "0 18px 50px -18px rgba(28,23,18,0.35)" }}>
                          <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover object-top grayscale-[0.4] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.05]" />
                          <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" style={{ background: "rgba(20,16,12,0.3)" }} />
                          <span className="absolute bottom-3 right-3 font-[JetBrains_Mono] text-[10px] tracking-[0.16em] uppercase px-3 py-1.5 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" style={{ background: "#F2EBDC", color: "#0B0806" }}>
                            {p.href.replace("https://", "")} ↗
                          </span>
                        </div>
                      </Tilt>
                    </motion.a>
                  ))}
                </div>
                <div className="mt-14 pt-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-10" style={{ borderTop: RULE }}>
                  <p className="font-[Redaction] font-bold" style={{ fontSize: "clamp(20px,2.6vw,30px)" }}>
                    Your shop could be <span className="font-[Fraunces]" style={{ fontStyle: "italic", fontWeight: 400, color: MONEY }}>next.</span>
                  </p>
                  <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block whitespace-nowrap font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: MONEY, color: CREAM }}>Let&apos;s talk →</a></Magnetic>
                </div>
              </section>
            )}

            {/* ABOUT */}
            {tab === "about" && (
              <section className="relative overflow-hidden px-6 md:px-10 py-10 lg:py-14">
                <span aria-hidden className="absolute -left-14 bottom-[-0.25em] font-[Fraunces] font-black select-none leading-none pointer-events-none" style={{ fontSize: "clamp(280px,34vw,540px)", color: "rgba(44,122,95,0.10)" }}>§</span>
                <p className={lab} style={{ color: STEEL }}>Why this works</p>
                <h2 className="font-[Redaction] font-bold leading-[0.96] mb-6 max-w-[16ch]" style={{ fontSize: "clamp(26px,4.2vw,50px)" }}>Not an agency. Not just software. Not advice.</h2>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
                  <div className="font-[Redaction] space-y-4 max-w-[52ch]" style={{ fontSize: "clamp(17px,2vw,22px)" }}>
                    <p>Savoca Studio builds the revenue workflow underneath the business — and keeps improving it with you.</p>
                    <p style={{ color: STEEL }}>You work directly with me — Jack Savoca. Program management and revenue operations background from larger companies, applied to service businesses.</p>
                  </div>
                  <div>
                    <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: MONEY }}>The revenue path</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-[JetBrains_Mono] text-[11px] tracking-[0.1em] uppercase" style={{ color: STEEL }}>
                      {PATH_LONG.map((n, i) => (<span key={n}>{i > 0 && <span className="mr-3" style={{ color: MONEY }}>→</span>}{n}</span>))}
                    </div>
                  </div>
                </div>
                <div className="mt-10"><Badges /></div>
                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <h2 className="font-[Redaction] font-black leading-[0.95] max-w-[18ch]" style={{ fontSize: "clamp(28px,4.6vw,62px)" }}>
                    Build the layer between demand and <span className="font-[Fraunces]" style={{ fontWeight: 400, fontStyle: "italic", color: MONEY }}>getting paid.</span>
                  </h2>
                  <div className="mt-6"><Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: MONEY, color: CREAM }}>Let&apos;s talk →</a></Magnetic></div>
                  <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.12em] mt-7" style={{ color: STEEL }}>jack@savoca.studio · Austin, TX</p>
                </div>
              </section>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
