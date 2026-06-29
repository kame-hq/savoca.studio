"use client";

// Home (/) — TAB APP. No long scroll: top tabs swap panels in place. Each panel is
// its own screen (internally scrolls only if it overflows). Hash-synced so /#pricing
// etc deep-links a tab. Data + leaf components from ./shared. Off-Canon.
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Cursor, Split, Reveal, Bullets, PathStrip, BuildExplorer, ProcessStepper, BandCard, Badges,
  INK, BONE, TEAL, DIM, EASE, BORDER, PATH_SHORT, PATH_LONG, BANDS, EXAMPLES,
} from "./shared";

const TABS: [string, string][] = [
  ["Home", ""], ["Systems", "systems"], ["Process", "process"],
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
      <style>{`@keyframes marq{from{transform:translateX(0)}to{transform:translateX(-33.3333%)}}`}</style>
      {!reduce && <Cursor />}

      {/* header + tab bar */}
      <header className="relative z-[60] shrink-0 flex items-center justify-between gap-6 px-6 md:px-12 py-5" style={{ borderBottom: BORDER }}>
        <button data-cursor onClick={() => go("")} className="flex items-baseline gap-2.5 hover:opacity-80 transition-opacity">
          <span className="font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(30px,3.2vw,42px)" }}>§</span>
          <span className="font-[Fraunces] font-black tracking-[-0.01em] leading-none" style={{ fontSize: "clamp(18px,2vw,26px)" }}>Savoca Studio</span>
        </button>

        <nav className="hidden md:flex items-center gap-7 font-[JetBrains_Mono] text-[12px] tracking-[0.16em] uppercase">
          {TABS.map(([t, k]) => (
            <button key={k} data-cursor onClick={() => go(k)} className="relative py-1 transition-opacity"
              style={{ color: BONE, opacity: tab === k ? 1 : 0.5 }}>
              {t}
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
                <button key={k} onClick={() => go(k)} className="text-left font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(40px,12vw,68px)", opacity: tab === k ? 1 : 0.6 }}>{t}</button>
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
                <div className="absolute inset-0">
                  {reduce ? (
                    <img src="/video/hero-coin-poster.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
                  ) : (
                    <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/video/hero-coin-poster.webp">
                      <source src="/video/hero-coin.mp4" type="video/mp4" />
                    </video>
                  )}
                  <div className="absolute inset-0" style={{ background: "rgba(70,76,70,0.28)", mixBlendMode: "multiply" }} />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,9,0.94) 0%, rgba(11,11,9,0.15) 50%, rgba(11,11,9,0.4) 100%)" }} />
                </div>
                <div className="relative z-10 px-6 md:px-12 pb-12 lg:pb-16 pt-16">
                  <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.3em] uppercase mb-6" style={{ color: TEAL }}>Revenue systems for service businesses</p>
                  <Split text="I build the layer between demand and getting paid." go className="font-[Fraunces] font-black leading-[0.92] tracking-[-0.01em] max-w-[18ch]" style={{ fontSize: "clamp(34px,5.4vw,86px)" }} />
                  <div className="mt-7 flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12">
                    <p className="font-[Fraunces] max-w-[52ch]" style={{ fontSize: "clamp(17px,1.9vw,22px)", color: "#D6D1C5" }}>
                      Savoca Studio builds the workflows, tools, automations, and reporting that turn service demand into booked work, completed work, paid work, and repeat customers.
                    </p>
                    <div className="flex items-center gap-5 shrink-0">
                      <a data-cursor href="mailto:jack@savoca.studio" className="font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a>
                      <button data-cursor onClick={() => go("systems")} className="font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase hover:opacity-70 transition-opacity" style={{ color: BONE }}>See the system →</button>
                    </div>
                  </div>
                  <div className="mt-8"><PathStrip nodes={PATH_SHORT} accentLast /></div>
                </div>
              </section>
            )}

            {/* SYSTEMS — what gets built (interactive) */}
            {tab === "systems" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>What gets built</p>
                <Reveal className="font-[Fraunces] font-bold leading-[0.98] max-w-[18ch] mb-8" style={{ fontSize: "clamp(28px,4.4vw,52px)" }}>A working revenue system, not another tool.</Reveal>
                <BuildExplorer />
                <p className="font-[Fraunces] mt-10 max-w-[46ch]" style={{ fontSize: "clamp(18px,2.2vw,26px)", color: BONE }}>
                  The system is working when more demand becomes booked work, completed work, paid work, and repeat business.
                </p>
              </section>
            )}

            {/* PROCESS — interactive stepper */}
            {tab === "process" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>The process</p>
                <Reveal className="font-[Fraunces] font-bold leading-[0.95] max-w-[14ch] mb-8" style={{ fontSize: "clamp(30px,4.6vw,60px)" }}>Build. Run. Measure. Improve.</Reveal>
                <ProcessStepper />
                <p className="font-[Fraunces] mt-8" style={{ fontSize: "clamp(16px,1.8vw,20px)", color: DIM }}>
                  Each build starts with a baseline, then one working system — kept improving every month.
                </p>
              </section>
            )}

            {/* PRICING — three bands */}
            {tab === "pricing" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>Three ways to build</p>
                <Reveal className="font-[Fraunces] font-bold leading-[0.98] max-w-[20ch]" style={{ fontSize: "clamp(28px,4.4vw,52px)" }}>Built for the size and complexity of the business.</Reveal>
                <p className="font-[Fraunces] mt-5 max-w-[62ch] mb-10" style={{ fontSize: "clamp(16px,1.8vw,20px)", color: DIM }}>
                  A solo practice does not need the same system as a multi-location service business. You work directly with me — no agency layers, no bloated consulting process, no one-time setup that gets forgotten.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
                  {BANDS.map((b) => <BandCard key={b.n} b={b} />)}
                </div>
              </section>
            )}

            {/* WORK — example systems */}
            {tab === "work" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>Examples</p>
                <Reveal className="font-[Fraunces] font-bold leading-[0.98] max-w-[16ch]" style={{ fontSize: "clamp(28px,4.4vw,52px)" }}>Different businesses. Same revenue path.</Reveal>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(236,231,221,0.1)" }}>
                  {EXAMPLES.map(([title, blurb, measured]) => (
                    <div key={title} className="p-7 md:p-9" style={{ background: INK }}>
                      <h3 className="font-[Fraunces] font-bold" style={{ fontSize: "clamp(22px,2.6vw,32px)" }}>{title}</h3>
                      <p className="font-[Fraunces] mt-3 mb-6 max-w-[52ch]" style={{ fontSize: "16px", color: "#B7B2A6" }}>{blurb}</p>
                      <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: TEAL }}>Measured by</p>
                      <div className="grid grid-cols-2 gap-x-6"><Bullets items={measured} color={DIM} /></div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ABOUT — why + revenue path + contact */}
            {tab === "about" && (
              <section className="px-6 md:px-12 py-12 lg:py-16">
                <p className={lab} style={{ color: TEAL }}>Why this works</p>
                <Reveal className="font-[Fraunces] font-bold leading-[0.96] mb-7 max-w-[16ch]" style={{ fontSize: "clamp(28px,4.4vw,54px)" }}>Not an agency. Not just software. Not advice.</Reveal>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
                  <div className="font-[Fraunces] space-y-4 max-w-[58ch]" style={{ fontSize: "clamp(17px,2vw,22px)", color: "#B7B2A6" }}>
                    <p>Agencies usually focus on getting more demand. Software companies sell tools. Consultants give recommendations.</p>
                    <p style={{ color: BONE }}>Savoca Studio builds the revenue workflow underneath the business and keeps improving it with you.</p>
                    <p>You work directly with me. I bring a background in program management, revenue operations, product launches, and cross-functional systems from larger companies, then apply it to service businesses that need cleaner growth, better visibility, and less manual chaos.</p>
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
                  <h2 className="font-[Fraunces] font-black leading-[0.95] max-w-[18ch]" style={{ fontSize: "clamp(30px,5vw,68px)" }}>Build the layer between demand and getting paid.</h2>
                  <a data-cursor href="mailto:jack@savoca.studio" className="inline-block mt-7 font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a>
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
