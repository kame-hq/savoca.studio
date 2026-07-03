"use client";

// Home (/) — TAB APP on cream. Dark cinematic video hero; all other panels are
// cream/ink spec-sheet style. Systems tab = why-you-need-me (before/after) →
// pipeline diagram → process row. Hash-synced tabs. Data + components in ./shared.
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Cursor, HeroReel, Split, PathStrip, BuildExplorer, ProcessStepper, StoryPlayer, BandCard, Badges, Grain, Magnetic, Tilt,
  CREAM, INK, BONE, STEEL, MONEY, SIGNAL, RULE, TEAL, EASE, PATH_SHORT, PATH_LONG, BANDS, REPORTING_LINE, VERTICALS, FAQ, COMPARE,
} from "./shared";

const PORTFOLIO = [
  { name: "Krazy Strong", vertical: "Strength Coaching", img: "/img/portfolio/krazystrong.jpg", href: "https://krazystrong.app" },
  { name: "Squatzilla Fitness", vertical: "Metabolism + Strength", img: "/img/portfolio/squatzilla.jpg", href: "https://squatzilla.fitness" },
  { name: "Texas Tattoo", vertical: "Tattoo Parlor", img: "/img/portfolio/texastattoo.jpg", href: "https://texastattoo.app" },
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
      `}</style>
      {!reduce && <Cursor />}
      <Grain />

      {/* header + tab bar (cream) */}
      <header className="relative z-[60] shrink-0 flex items-center justify-between gap-6 px-6 md:px-10 py-4" style={{ borderBottom: RULE, background: CREAM }}>
        <button data-cursor onClick={() => go("")} className="flex items-baseline gap-2.5 hover:opacity-70 transition-opacity">
          <span className="font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(28px,3vw,40px)", color: MONEY }}>§</span>
          <span className="font-[Redaction] font-black tracking-[-0.01em] leading-none" style={{ fontSize: "clamp(17px,1.9vw,25px)" }}>Savoca Studio</span>
        </button>

        <nav className="hidden md:flex items-center gap-7 font-[JetBrains_Mono] text-[12px] tracking-[0.16em] uppercase">
          {TABS.map(([t, k], i) => (
            <button key={k} data-cursor onClick={() => go(k)} className="relative py-1 transition-opacity hover:opacity-100"
              style={{ color: INK, opacity: tab === k ? 1 : 0.45 }}>
              <span className="mr-1.5 text-[9px] align-super" style={{ color: SIGNAL }}>0{i + 1}</span>{t}
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

      {/* mobile menu (cream) */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-[85] md:hidden flex flex-col" style={{ background: CREAM, color: INK }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: EASE }}>
            <div className="flex items-center justify-end px-6 pt-6">
              <button data-cursor aria-label="Close menu" onClick={() => setMenu(false)} className="font-[JetBrains_Mono] text-[12px] tracking-[0.18em] uppercase p-2">Close ✕</button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6">
              {TABS.map(([t, k], i) => (
                <button key={k} onClick={() => go(k)} className="flex items-baseline gap-3 text-left py-3.5 font-[Redaction] font-black leading-none" style={{ fontSize: "clamp(38px,11vw,64px)", borderBottom: RULE, opacity: tab === k ? 1 : 0.6 }}>
                  <span className="font-[JetBrains_Mono] text-[11px]" style={{ color: SIGNAL }}>0{i + 1}</span>{t}
                </button>
              ))}
            </nav>
            <a href="mailto:jack@savoca.studio" onClick={() => setMenu(false)} className="mx-6 mb-8 text-center font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: MONEY, color: CREAM }}>Let&apos;s talk →</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* panel area */}
      <div ref={scroller} className="relative flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div key={tab}
            initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0.6 }}
            animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.55, ease: EASE }} className="min-h-full">

            {/* HOME — dark cinematic hero, matted in cream */}
            {tab === "" && (<>
              <section className="relative flex flex-col justify-end overflow-hidden m-2.5 md:m-4" style={{ color: BONE, minHeight: "calc(100dvh - 100px)", border: RULE }}>
                <HeroReel />
                <div className="relative z-10 px-6 md:px-10 pb-12 lg:pb-14 pt-16">
                  <p className="font-[JetBrains_Mono] text-[11px] md:text-[12px] tracking-[0.18em] md:tracking-[0.28em] uppercase mb-6" style={{ color: BONE, textShadow: "0 1px 14px rgba(0,0,0,0.75)" }}>Revenue systems for service businesses</p>
                  <Split text="I build the layer between demand and getting paid." go accentFrom={7} className="font-[Redaction] font-black leading-[0.9] tracking-[-0.015em] max-w-[17ch]" style={{ fontSize: "clamp(29px,8.4vw,102px)", textShadow: "0 2px 28px rgba(0,0,0,0.65)" }} />
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block whitespace-nowrap font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: BONE, color: INK }}>Let&apos;s talk →</a></Magnetic>
                    <button data-cursor onClick={() => go("systems")} className="whitespace-nowrap font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase opacity-80 hover:opacity-100 transition-opacity" style={{ color: BONE }}>See the system →</button>
                  </div>
                  <div className="mt-8"><PathStrip nodes={PATH_SHORT} accentLast /></div>
                </div>
              </section>
              {/* verticals marquee */}
              <div className="overflow-hidden py-4 md:py-5 mx-2.5 md:mx-4 mb-4" style={{ borderTop: RULE, borderBottom: RULE, color: INK }}>
                <div className="flex items-center gap-8 w-max" style={{ animation: "marq 36s linear infinite" }}>
                  {[...Array(3)].flatMap((_, r) =>
                    VERTICALS.map((v) => (
                      <span key={`${r}-${v}`} className="flex items-center gap-8 shrink-0">
                        <span className="font-[Fraunces] whitespace-nowrap" style={{ fontSize: "clamp(20px,2.6vw,32px)", fontStyle: "italic" }}>{v}</span>
                        <span className="font-[Fraunces] font-black" style={{ color: MONEY, fontSize: "clamp(14px,1.6vw,20px)" }}>§</span>
                      </span>
                    ))
                  )}
                </div>
              </div>
            </>)}

            {/* SYSTEMS — why you need it → the pipeline → the process */}
            {tab === "systems" && (
              <section className="relative overflow-hidden px-6 md:px-10 py-10 lg:py-14">
                <span aria-hidden className="absolute -right-10 -top-24 font-[Fraunces] font-black select-none leading-none pointer-events-none" style={{ fontSize: "clamp(280px,32vw,520px)", color: "rgba(27,77,62,0.05)" }}>§</span>
                <p className={lab} style={{ color: STEEL }}>Why a system</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[19ch] mb-3" style={{ fontSize: "clamp(27px,4.2vw,50px)" }}>
                  You&apos;re busy doing the work. That&apos;s when the money slips.
                </h2>
                <p className="font-[Redaction] mb-8 max-w-[54ch]" style={{ fontSize: "clamp(16px,1.9vw,20px)", color: STEEL }}>
                  Not from bad work — from missed calls, slow quotes, late invoices, and customers nobody follows up with. Here&apos;s one lead, start to finish:
                </p>
                <StoryPlayer />

                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <p className={lab} style={{ color: STEEL }}>The system</p>
                  <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[20ch] mb-8" style={{ fontSize: "clamp(24px,3.4vw,40px)" }}>
                    One system that moves every lead from first call to <span className="font-[Fraunces]" style={{ fontStyle: "italic", fontWeight: 400, color: MONEY }}>paid and rebooked.</span>
                  </h2>
                  <BuildExplorer />
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
                <div className="mt-8 p-6 md:p-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8" style={{ border: RULE, background: "rgba(27,77,62,0.05)" }}>
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
                        style={{ borderColor: "rgba(28,23,18,0.16)", background: i === COMPARE.length - 1 ? "rgba(27,77,62,0.06)" : "transparent" }}>
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

            {/* WORK — real portfolio */}
            {tab === "work" && (
              <section className="px-6 md:px-10 py-10 lg:py-14">
                <p className={lab} style={{ color: STEEL }}>Selected work</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[16ch] mb-8" style={{ fontSize: "clamp(26px,4vw,48px)" }}>Sites and systems I&apos;ve built.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: RULE }}>
                  {PORTFOLIO.map((p, i) => (
                    <a key={p.href} data-cursor href={p.href} target="_blank" rel="noopener noreferrer" className={`group block p-5 border-b md:border-b-0 ${i < PORTFOLIO.length - 1 ? "md:border-r" : ""}`} style={{ borderColor: "rgba(28,23,18,0.16)" }}>
                      <Tilt>
                        <div className="relative overflow-hidden aspect-[16/10]" style={{ border: RULE }}>
                          <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]" />
                        </div>
                      </Tilt>
                      <div className="flex items-baseline justify-between mt-3.5">
                        <h3 className="font-[Redaction] font-bold" style={{ fontSize: "clamp(18px,2vw,24px)" }}>{p.name}</h3>
                        <span className="font-[JetBrains_Mono] text-[11px] transition-colors group-hover:opacity-100 opacity-60" style={{ color: STEEL }}>Visit ↗</span>
                      </div>
                      <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.16em] uppercase mt-1" style={{ color: MONEY }}>{p.vertical}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* ABOUT */}
            {tab === "about" && (
              <section className="relative overflow-hidden px-6 md:px-10 py-10 lg:py-14">
                <span aria-hidden className="absolute -left-14 bottom-[-0.25em] font-[Fraunces] font-black select-none leading-none pointer-events-none" style={{ fontSize: "clamp(280px,34vw,540px)", color: "rgba(27,77,62,0.05)" }}>§</span>
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
                      {PATH_LONG.map((n, i) => (<span key={n}>{i > 0 && <span className="mr-3" style={{ color: SIGNAL }}>→</span>}{n}</span>))}
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
