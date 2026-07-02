"use client";

// /light — the beige fork: "operator's spec-sheet." Canon palette (paper/ink/money/signal),
// hairline ledger rules, square corners, no shadows, exhibit-framed reel, mono annotations.
// Same tab structure + data as the dark app. Preview route — compare against prod.
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  Cursor, Magnetic, Split, REEL, BUILDS, BANDS, STEPS, PATH_SHORT, PATH_LONG, REPORTING_LINE, EASE,
} from "../v2/shared";

const PAPER = "#FBF9F4";
const BONE2 = "#E8E2D3";
const INK = "#0E0E0C";
const STEEL = "#6B6B66";
const MONEY = "#1B4D3E";
const SIGNAL = "#D9442C";
const RULE = "1px solid #1818143A";

const PORTFOLIO = [
  { name: "Krazy Strong", vertical: "Strength coaching", img: "/img/portfolio/krazystrong.jpg", href: "https://krazystrong.app" },
  { name: "Squatzilla Fitness", vertical: "Metabolism + strength", img: "/img/portfolio/squatzilla.jpg", href: "https://squatzilla.fitness" },
  { name: "Texas Tattoo", vertical: "Tattoo parlor", img: "/img/portfolio/texastattoo.jpg", href: "https://texastattoo.app" },
];

const TABS: [string, string][] = [
  ["Home", ""], ["Systems", "systems"], ["Pricing", "pricing"], ["Work", "work"], ["About", "about"],
];

/* framed exhibit reel — small window, not full-bleed */
function ExhibitReel() {
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
    <figure style={{ border: RULE }} className="bg-white/40">
      <div className="relative aspect-[4/3] overflow-hidden" style={{ borderBottom: RULE }}>
        {REEL.map((c, i) => reduce ? (
          <img key={c.src} src={c.poster} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: i === 0 ? 1 : 0 }} />
        ) : (
          <video key={c.src} ref={(el) => { refs.current[i] = el; }} muted playsInline preload={i === 0 ? "auto" : "none"} poster={c.poster}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000" style={{ opacity: i === idx ? 1 : 0 }}>
            <source src={c.src} type="video/mp4" />
          </video>
        ))}
      </div>
      <figcaption className="flex items-center justify-between px-4 py-2.5 font-[JetBrains_Mono] text-[10px] tracking-[0.18em] uppercase" style={{ color: STEEL }}>
        <span>Fig. 0{idx + 1} — <span style={{ color: INK }}>{REEL[idx].label}</span></span>
        <span className="relative w-10 h-px overflow-hidden" style={{ background: "#18181426" }}>
          {!reduce && <motion.span key={idx} className="absolute inset-0 origin-left" style={{ background: SIGNAL }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 5.5, ease: "linear" }} />}
        </span>
      </figcaption>
    </figure>
  );
}

/* light build explorer */
function LightExplorer() {
  const [i, setI] = useState(0);
  const b = BUILDS[i];
  return (
    <div style={{ border: RULE }}>
      <div className="grid grid-cols-2 md:grid-cols-5" style={{ borderBottom: RULE }}>
        {BUILDS.map((x, k) => (
          <button key={x.n} data-cursor onClick={() => setI(k)} className="relative text-left px-4 py-3.5 transition-colors"
            style={{ borderRight: k < BUILDS.length - 1 ? RULE : undefined, background: k === i ? "#18181408" : "transparent" }}>
            <span className="font-[JetBrains_Mono] text-[10px]" style={{ color: k === i ? SIGNAL : STEEL }}>{x.n}</span>
            <p className="font-[Redaction] font-bold mt-0.5" style={{ fontSize: "clamp(15px,1.6vw,20px)", color: k === i ? INK : STEEL }}>{x.title}</p>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={b.n} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3, ease: EASE }}
          className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-6 md:p-8" style={{ borderRight: RULE }}>
            <h3 className="font-[Redaction] font-bold leading-none" style={{ fontSize: "clamp(30px,4vw,52px)", color: INK }}>{b.title}</h3>
            <p className="font-[Redaction] mt-3 max-w-[44ch]" style={{ fontSize: "clamp(16px,1.8vw,20px)", color: "#3A3A34" }}>{b.blurb}</p>
            <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mt-7 mb-2.5" style={{ color: MONEY }}>Built with</p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
              {b.built.map((it) => <span key={it} className="font-[JetBrains_Mono] text-[12px]" style={{ color: STEEL }}>· {it}</span>)}
            </div>
          </div>
          <div className="p-6 md:p-8" style={{ background: "#18181405" }}>
            <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mb-2.5" style={{ color: MONEY }}>Measured by</p>
            <div className="space-y-1.5">
              {b.measured.map((it) => <p key={it} className="font-[JetBrains_Mono] text-[12px]" style={{ color: INK }}>· {it}</p>)}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Light() {
  const reduce = useReducedMotion();
  const [tab, setTab] = useState("");
  const [menu, setMenu] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => { if (scroller.current) scroller.current.scrollTop = 0; }, [tab]);
  const go = (k: string) => { setTab(k); setMenu(false); };

  const lab = "font-[JetBrains_Mono] text-[11px] tracking-[0.3em] uppercase mb-4";

  return (
    <main className="fixed inset-0 flex flex-col overflow-hidden md:cursor-none" style={{ background: PAPER, color: INK }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,900&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      <style>{`
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Regular.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Bold.woff2') format('woff2');font-weight:900;font-style:normal;font-display:swap}
        @font-face{font-family:'Redaction';src:url('/fonts/redaction/Redaction-Italic.woff2') format('woff2');font-weight:400;font-style:italic;font-display:swap}
      `}</style>
      {!reduce && <Cursor />}
      {/* paper grain */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[55]"
        style={{ opacity: 0.05, mixBlendMode: "multiply",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "240px 240px" }} />

      {/* header */}
      <header className="relative z-[60] shrink-0 flex items-center justify-between gap-6 px-6 md:px-10 py-4" style={{ borderBottom: RULE, background: PAPER }}>
        <button data-cursor onClick={() => go("")} className="flex items-baseline gap-2.5 hover:opacity-70 transition-opacity">
          <span className="font-[Fraunces] font-black leading-none" style={{ fontSize: "clamp(28px,3vw,38px)", color: MONEY }}>§</span>
          <span className="font-[Redaction] font-black tracking-[-0.01em] leading-none" style={{ fontSize: "clamp(17px,1.9vw,24px)" }}>Savoca Studio</span>
        </button>
        <nav className="hidden md:flex items-stretch font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase" style={{ border: RULE }}>
          {TABS.map(([t, k], i) => (
            <button key={k} data-cursor onClick={() => go(k)} className="relative px-4 py-2 transition-colors"
              style={{ borderRight: i < TABS.length - 1 ? RULE : undefined, background: tab === k ? INK : "transparent", color: tab === k ? PAPER : STEEL }}>
              <span className="mr-1 text-[8px] align-super" style={{ color: tab === k ? SIGNAL : "#B0AFA6" }}>0{i + 1}</span>{t}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="hidden md:inline-block font-[JetBrains_Mono] text-[11px] tracking-[0.14em] uppercase px-5 py-2.5" style={{ background: MONEY, color: PAPER }}>Let&apos;s talk →</a></Magnetic>
          <button data-cursor aria-label="Open menu" onClick={() => setMenu(true)} className="md:hidden flex flex-col gap-1.5 p-2">
            <span className="block w-7 h-px" style={{ background: INK }} /><span className="block w-7 h-px" style={{ background: INK }} />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {menu && (
          <motion.div className="fixed inset-0 z-[85] md:hidden flex flex-col" style={{ background: PAPER, color: INK }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25, ease: EASE }}>
            <div className="flex items-center justify-end px-6 pt-6">
              <button data-cursor onClick={() => setMenu(false)} className="font-[JetBrains_Mono] text-[12px] tracking-[0.18em] uppercase p-2">Close ✕</button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-6">
              {TABS.map(([t, k], i) => (
                <button key={k} onClick={() => go(k)} className="flex items-baseline gap-3 text-left py-3 font-[Redaction] font-black leading-none" style={{ fontSize: "clamp(38px,11vw,64px)", borderBottom: RULE, opacity: tab === k ? 1 : 0.65 }}>
                  <span className="font-[JetBrains_Mono] text-[11px]" style={{ color: SIGNAL }}>0{i + 1}</span>{t}
                </button>
              ))}
            </nav>
            <a href="mailto:jack@savoca.studio" onClick={() => setMenu(false)} className="mx-6 mb-8 text-center font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: MONEY, color: PAPER }}>Let&apos;s talk →</a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* panels */}
      <div ref={scroller} className="relative flex-1 overflow-y-auto">
        <AnimatePresence mode="wait">
          <motion.div key={tab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3, ease: EASE }} className="min-h-full">

            {/* HOME — ledger hero, asymmetric, exhibit reel */}
            {tab === "" && (
              <section className="relative min-h-full grid lg:grid-cols-[1.25fr_0.75fr]">
                <div className="relative flex flex-col justify-between px-6 md:px-10 pt-14 lg:pt-20 pb-10" style={{ borderRight: RULE }}>
                  {/* faint § watermark */}
                  <span aria-hidden className="absolute -left-6 bottom-[-0.28em] font-[Fraunces] font-black select-none leading-none" style={{ fontSize: "clamp(300px,38vw,560px)", color: "#1818140A" }}>§</span>
                  <div className="relative">
                    <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.24em] uppercase mb-7" style={{ color: STEEL }}>
                      <span style={{ color: SIGNAL }}>●</span>&nbsp; Revenue systems for service businesses
                    </p>
                    <Split text="I build the layer between demand and getting paid." go accentFrom={7}
                      className="font-[Redaction] font-black leading-[0.92] tracking-[-0.015em] max-w-[15ch]"
                      style={{ fontSize: "clamp(40px,6.4vw,108px)", color: INK }} />
                    <style>{`h1 .italic-accent{color:${MONEY}}`}</style>
                    <div className="mt-9 flex items-center gap-6">
                      <Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: INK, color: PAPER }}>Let&apos;s talk →</a></Magnetic>
                      <button data-cursor onClick={() => go("systems")} className="font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase hover:opacity-60 transition-opacity" style={{ color: MONEY }}>See the system →</button>
                    </div>
                  </div>
                  <div className="relative mt-12 pt-5" style={{ borderTop: RULE }}>
                    <div className="flex items-center gap-2.5 font-[JetBrains_Mono] text-[10px] md:text-[11px] tracking-[0.16em] uppercase overflow-x-auto whitespace-nowrap" style={{ color: STEEL }}>
                      {PATH_SHORT.map((n, i) => (
                        <span key={n} className="flex items-center gap-2.5 shrink-0">
                          {i > 0 && <span style={{ color: SIGNAL }}>→</span>}
                          <span style={{ color: i === PATH_SHORT.length - 1 ? MONEY : undefined }}>{n}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex flex-col justify-center px-8 py-10 gap-4" style={{ background: "#18181405" }}>
                  <ExhibitReel />
                  <p className="font-[JetBrains_Mono] text-[10px] leading-relaxed tracking-[0.06em] max-w-[38ch]" style={{ color: STEEL }}>
                    The businesses this is built for: shops that run on calls, calendars, quotes, crews, jobs, and repeat customers.
                  </p>
                </div>
              </section>
            )}

            {/* SYSTEMS */}
            {tab === "systems" && (
              <section className="px-6 md:px-10 py-10 lg:py-14">
                <p className={lab} style={{ color: STEEL }}><span style={{ color: SIGNAL }}>02</span> — What gets built</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[18ch] mb-8" style={{ fontSize: "clamp(26px,4vw,48px)" }}>A working revenue system, not another tool.</h2>
                <LightExplorer />
                <p className="font-[JetBrains_Mono] text-[11px] leading-relaxed mt-4 max-w-[64ch]" style={{ color: STEEL }}>{REPORTING_LINE}</p>
                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <p className={lab} style={{ color: STEEL }}><span style={{ color: SIGNAL }}>—</span> The process</p>
                  <h2 className="font-[Redaction] font-bold leading-[0.95] mb-7" style={{ fontSize: "clamp(24px,3.4vw,40px)" }}>Build. Run. Measure. Improve.</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4" style={{ border: RULE }}>
                    {STEPS.map((s, i) => (
                      <div key={s.n} className="p-5 md:p-6" style={{ borderRight: i < STEPS.length - 1 ? RULE : undefined, borderBottom: RULE }}>
                        <span className="font-[JetBrains_Mono] text-[10px]" style={{ color: SIGNAL }}>{s.n}</span>
                        <h3 className="font-[Redaction] font-bold mt-1" style={{ fontSize: "clamp(19px,2vw,24px)" }}>{s.title}</h3>
                        <p className="font-[Redaction] mt-2" style={{ fontSize: "14px", color: "#3A3A34" }}>{s.intro}</p>
                        <p className="font-[JetBrains_Mono] text-[10px] leading-relaxed mt-3 pt-3" style={{ color: STEEL, borderTop: RULE }}>{s.output}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* PRICING */}
            {tab === "pricing" && (
              <section className="px-6 md:px-10 py-10 lg:py-14">
                <p className={lab} style={{ color: STEEL }}><span style={{ color: SIGNAL }}>03</span> — Three ways to build</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[20ch]" style={{ fontSize: "clamp(26px,4vw,48px)" }}>Built for the size and complexity of the business.</h2>
                <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.16em] uppercase mt-4 mb-8" style={{ color: MONEY }}>You work directly with me. No agency layers.</p>
                <div className="grid grid-cols-1 lg:grid-cols-3" style={{ border: RULE }}>
                  {BANDS.map((b, i) => (
                    <div key={b.n} className="flex flex-col p-6 md:p-7" style={{ borderRight: i < BANDS.length - 1 ? RULE : undefined, borderBottom: RULE }}>
                      <span className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase" style={{ color: SIGNAL }}>{b.n}</span>
                      <h3 className="font-[Redaction] font-bold mt-1.5 leading-none" style={{ fontSize: "clamp(24px,2.6vw,34px)" }}>{b.name}</h3>
                      <p className="font-[Redaction] mt-3" style={{ fontSize: "15px", color: "#3A3A34" }}>{b.who}</p>
                      <p className="font-[Redaction] mt-2.5" style={{ fontSize: "14px", color: STEEL }}>{b.desc}</p>
                      <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mt-6 mb-2.5" style={{ color: MONEY }}>Built around</p>
                      <div className="space-y-1.5">
                        {b.built.map((it) => <p key={it} className="font-[JetBrains_Mono] text-[11.5px]" style={{ color: "#3A3A34" }}>· {it}</p>)}
                      </div>
                      <div className="mt-auto pt-6">
                        <p className="font-[Redaction] font-bold leading-none" style={{ fontSize: "clamp(26px,2.8vw,38px)", color: MONEY }}>
                          {b.price}<span className="font-[JetBrains_Mono] font-normal text-[11px] align-middle ml-2" style={{ color: STEEL }}>/ mo</span>
                        </p>
                        <div className="mt-3 space-y-1">
                          {b.terms.map((t) => <p key={t} className="font-[JetBrains_Mono] text-[11px]" style={{ color: STEEL }}>· {t}</p>)}
                        </div>
                        <a data-cursor href="mailto:jack@savoca.studio" className="inline-block mt-5 font-[JetBrains_Mono] text-[11px] tracking-[0.14em] uppercase px-5 py-3" style={{ background: INK, color: PAPER }}>Book a call →</a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* WORK */}
            {tab === "work" && (
              <section className="px-6 md:px-10 py-10 lg:py-14">
                <p className={lab} style={{ color: STEEL }}><span style={{ color: SIGNAL }}>04</span> — Selected work</p>
                <h2 className="font-[Redaction] font-bold leading-[0.98] max-w-[16ch] mb-8" style={{ fontSize: "clamp(26px,4vw,48px)" }}>Sites and systems I&apos;ve built.</h2>
                <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: RULE }}>
                  {PORTFOLIO.map((p, i) => (
                    <a key={p.href} data-cursor href={p.href} target="_blank" rel="noopener noreferrer" className="group block p-5" style={{ borderRight: i < PORTFOLIO.length - 1 ? RULE : undefined }}>
                      <div className="relative overflow-hidden aspect-[16/10]" style={{ border: RULE }}>
                        <img src={p.img} alt={p.name} className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
                      </div>
                      <div className="flex items-baseline justify-between mt-3.5">
                        <h3 className="font-[Redaction] font-bold" style={{ fontSize: "clamp(18px,2vw,24px)" }}>{p.name}</h3>
                        <span className="font-[JetBrains_Mono] text-[11px] transition-colors" style={{ color: STEEL }}>Visit ↗</span>
                      </div>
                      <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.16em] uppercase mt-1" style={{ color: MONEY }}>{p.vertical}</p>
                    </a>
                  ))}
                </div>
              </section>
            )}

            {/* ABOUT */}
            {tab === "about" && (
              <section className="px-6 md:px-10 py-10 lg:py-14">
                <p className={lab} style={{ color: STEEL }}><span style={{ color: SIGNAL }}>05</span> — Why this works</p>
                <h2 className="font-[Redaction] font-bold leading-[0.96] mb-6 max-w-[16ch]" style={{ fontSize: "clamp(26px,4vw,50px)" }}>Not an agency. Not just software. Not advice.</h2>
                <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
                  <div className="font-[Redaction] space-y-4 max-w-[52ch]" style={{ fontSize: "clamp(17px,2vw,22px)" }}>
                    <p>Savoca Studio builds the revenue workflow underneath the business — and keeps improving it with you.</p>
                    <p style={{ color: STEEL }}>You work directly with me. Program management and revenue operations background from larger companies, applied to service businesses.</p>
                  </div>
                  <div>
                    <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: MONEY }}>The revenue path</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-[JetBrains_Mono] text-[11px] tracking-[0.1em] uppercase" style={{ color: STEEL }}>
                      {PATH_LONG.map((n, i) => (<span key={n}>{i > 0 && <span className="mr-3" style={{ color: SIGNAL }}>→</span>}{n}</span>))}
                    </div>
                    <p className="font-[JetBrains_Mono] text-[10px] tracking-[0.2em] uppercase mt-8 mb-2" style={{ color: MONEY }}>Background</p>
                    <p className="font-[Redaction] font-bold" style={{ fontSize: "clamp(16px,1.8vw,20px)" }}>Facebook · Whole Foods Market · Indeed · FedEx</p>
                  </div>
                </div>
                <div className="mt-12 pt-8" style={{ borderTop: RULE }}>
                  <h2 className="font-[Redaction] font-black leading-[0.95] max-w-[18ch]" style={{ fontSize: "clamp(28px,4.6vw,60px)" }}>Build the layer between demand and <span style={{ fontWeight: 400, fontStyle: "italic", color: MONEY }}>getting paid.</span></h2>
                  <div className="mt-6"><Magnetic><a data-cursor href="mailto:jack@savoca.studio" className="inline-block font-[JetBrains_Mono] text-[12px] tracking-[0.15em] uppercase px-7 py-4" style={{ background: MONEY, color: PAPER }}>Let&apos;s talk →</a></Magnetic></div>
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
