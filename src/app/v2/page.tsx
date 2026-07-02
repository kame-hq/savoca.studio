"use client";

// Home (/) — TAB APP. No long scroll: top tabs swap panels in place. Each panel is
// its own screen (internally scrolls only if it overflows). Hash-synced so /#pricing
// etc deep-links a tab. Data + leaf components from ./shared. Off-Canon.
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Cursor, HeroReel, Split, Reveal, PathStrip, BuildExplorer, ProcessStepper, BandCard, Badges, Grain, Magnetic,
  INK, BONE, TEAL, DIM, EASE, BORDER, PATH_SHORT, PATH_LONG, BANDS,
} from "./shared";

const PORTFOLIO = [
  { name: "Krazy Strong", vertical: "Strength coaching", img: "/img/portfolio/krazystrong.jpg", href: "https://krazystrong.app" },
  { name: "Squatzilla Fitness", vertical: "Metabolism + strength", img: "/img/portfolio/squatzilla.jpg", href: "https://squatzilla.fitness" },
  { name: "Texas Tattoo", vertical: "Tattoo parlor", img: "/img/portfolio/texastattoo.jpg", href: "https://texastattoo.app" },
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

  const lab = "font-[JetBrains_Mono] text-[12px] tracking-[0.3em] uppercase mb-5";

  return (
    <main className="fixed inset-0 flex flex-col overflow-hidden md:cursor-none" style={{ background: INK, color: BONE }}>
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
      <Grain />

      {/* header + tab bar */}
      <header className="relative z-[60] shrink-0 flex items-center justify-between gap-6 px-6 md:px-12 py-5" style={{ borderBottom: BORDER }}>
        <button data-cursor onClick={() => go("")} className="flex items-baseline gap-2.5 hover:opacity-80 transition-opacity">
          <span className="font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(30px,3.2vw,42px)" }}>§</span>
          <span className="font-[Redaction] font-black tracking-[-0.01em] leading-none" style={{ fontSize: "clamp(18px,2vw,26px)" }}>Savoca Studio</span>
        </button>

        <nav className="hidden md:flex items-center gap-7 font-[JetBrains_Mono] text-[12px] tracking-[0.16em] uppercase">
          {TABS.map(([t, k], i) => (
            <button key={k} data-cursor onClick={() => go(k)} className="relative py-1 transition-opacity hover:opacity-100"
              style={{ color: BONE, opacity: tab === k ? 1 : 0.5 }}>
              <span className="mr-1.5 text-[9px] align-super" style={{ color: TEAL }}>0{i + 1}</span>{t}
              {tab === k && <motion.span layoutId="tabink" className="absolute left-0 right-0 -bottom-0.5 h-px" style={{ background: BONE }} />}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a data-cursor href="mailto:jack@savoca.studio" className="hidden md:inline-block font-[JetBrains_Mono] text-[12px] tracking-[0.14em] uppercase px-5 py-2.5 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a>
          <button data-cursor aria-label="Open menu" onClick={() => setMenu(true)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="block w-7 h-px" style={{ background: BONE }} /><span className="block w-7 h-px" style={{ background: BONE }} />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-[85] md:hidden flex flex-col" style={{ background: INK, color: BONE }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease: EASE }}>
            <div className="flex items-center justify-end px-6 pt-7">
              <button data-cursor aria-label="Close menu" onClick={() => setMenu(false)} className="font-[JetBrains_Mono] text-[12px] tracking-[0.18em] uppercase p-2" style={{ color: BONE }}>Close ✕</button>
            </div>
            <nav className="flex-1 flex flex-col justify-center gap-5 px-6">
              {TABS.map(([t, k]) => (
                <button key={k} onClick={() => go(k)} className="text-left font-[Redaction] font-black leading-none" style={{ fontSize: "clamp(40px,12vw,68px)", opacity: tab === k ? 1 : 0.6 }}>{t}</button>
              ))}
            </nav>
            <a href="mailto:jack@savoca.studio" onClick={() => setMenu(false)} className="mx-6 mb-8 text-center font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* panel area — only this scrolls, and only if a panel overflows */}
      <div ref={scroller} className="relative flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease: EASE }} className="min-h-full">

            {/* HOME */}
            {tab === "" && (
              <section className="relative min-h-full flex flex-col justify-end overflow-hidden">
                <HeroReel />
                <div className="relative z-10 px-6 md:px-12 pb-12 lg:pb-16 pt-16">
                  <p className="font-[JetBrains_Mono] text-[11px] md:text-[12px] tracking-[0.18em] md:tracking-[0.28em] uppercase mb-6" style={{ color: BONE, textShadow: "0 1px 14px rgba(0,0,0,0.75)" }}>Revenue systems for service businesses</p>
                  <Split text="I build the layer between demand and getting paid." go accentFrom={7} className="font-[Redaction] font-black leading-[0.9] tracking-[-0.015em] max-w-[17ch]" style={{ fontSize: "clamp(38px,6vw,102px)", textShadow: "0 2px 28px rgba(0,0,0,0.65)" }} />
                  <div className="mt-8 flex items-center gap-6">
                    <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a></Magnetic>
                    <button data-cursor onClick={() => go("systems")} className="font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase opacity-70 hover:opacity-100 transition-opacity" style={{ color: BONE }}>See the system →</button>
                  </div>
                  <div className="mt-8"><PathStrip nodes={PATH_SHORT} accentLast /></div>
                </div>
              </section>
            )}

            {/* SYSTEMS — what gets built (interactive) */}
            {tab === "systems" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>What gets built</p>
                <Reveal className="font-[Redaction] font-bold leading-[0.98] max-w-[18ch] mb-8" style={{ fontSize: "clamp(28px,4.4vw,52px)" }}>A working revenue system, not another tool.</Reveal>
                <BuildExplorer />
                <div className="mt-14 pt-10" style={{ borderTop: BORDER }}>
                  <p className={lab} style={{ color: TEAL }}>The process</p>
                  <Reveal className="font-[Redaction] font-bold leading-[0.95] max-w-[14ch] mb-8" style={{ fontSize: "clamp(28px,4.4vw,52px)" }}>Build. Run. Measure. Improve.</Reveal>
                  <ProcessStepper />
                </div>
              </section>
            )}

            {/* PRICING — three bands */}
            {tab === "pricing" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>Three ways to build</p>
                <Reveal className="font-[Redaction] font-bold leading-[0.98] max-w-[20ch]" style={{ fontSize: "clamp(28px,4.4vw,52px)" }}>Built for the size and complexity of the business.</Reveal>
                <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.16em] uppercase mt-5 mb-10" style={{ color: DIM }}>
                  You work directly with me. No agency layers.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
                  {BANDS.map((b) => <BandCard key={b.n} b={b} />)}
                </div>
              </section>
            )}

            {/* WORK — real portfolio */}
            {tab === "work" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>Selected work</p>
                <Reveal className="font-[Redaction] font-bold leading-[0.98] max-w-[16ch]" style={{ fontSize: "clamp(28px,4.4vw,52px)" }}>Sites and systems I&apos;ve built.</Reveal>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {PORTFOLIO.map((p) => (
                    <a key={p.href} data-cursor href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
                      <div className="relative overflow-hidden rounded-xl aspect-[16/10]" style={{ border: BORDER }}>
                        <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-[1.03]" />
                        <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0" style={{ background: "rgba(7,7,7,0.35)" }} />
                      </div>
                      <div className="flex items-baseline justify-between mt-4">
                        <h3 className="font-[Redaction] font-bold" style={{ fontSize: "clamp(20px,2.2vw,26px)" }}>{p.name}</h3>
                        <span className="font-[JetBrains_Mono] text-[12px] opacity-60 group-hover:opacity-100 transition-opacity">Visit ↗</span>
                      </div>
                      <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase mt-1" style={{ color: TEAL }}>{p.vertical}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* ABOUT — why + revenue path + contact */}
            {tab === "about" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>Why this works</p>
                <Reveal className="font-[Redaction] font-bold leading-[0.96] mb-7 max-w-[16ch]" style={{ fontSize: "clamp(28px,4.4vw,54px)" }}>Not an agency. Not just software. Not advice.</Reveal>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
                  <div className="font-[Redaction] space-y-4 max-w-[52ch]" style={{ fontSize: "clamp(18px,2.1vw,24px)", color: "#B7B2A6" }}>
                    <p style={{ color: BONE }}>Savoca Studio builds the revenue workflow underneath the business — and keeps improving it with you.</p>
                    <p>You work directly with me. Program management and revenue operations background from larger companies, applied to service businesses.</p>
                  </div>
                  <div>
                    <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: TEAL }}>The revenue path</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-[JetBrains_Mono] text-[12px] tracking-[0.12em] uppercase" style={{ color: DIM }}>
                      {PATH_LONG.map((n, i) => (<span key={n}>{i > 0 && <span className="mr-3" style={{ color: TEAL }}>→</span>}{n}</span>))}
                    </div>
                  </div>
                </div>
                <div className="mt-10"><Badges /></div>
                <div className="mt-12 pt-10" style={{ borderTop: BORDER }}>
                  <h2 className="font-[Redaction] font-black leading-[0.95] max-w-[18ch]" style={{ fontSize: "clamp(30px,5vw,68px)" }}>Build the layer between demand and getting paid.</h2>
                  <div className="mt-7"><Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a></Magnetic></div>
                  <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.12em] mt-8" style={{ color: DIM }}>jack@savoca.studio · Austin, TX</p>
                </div>
              </section>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
