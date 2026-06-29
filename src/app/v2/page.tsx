"use client";

// Home (/) — lean single scroll. Hero → Revenue Path → What Gets Built (interactive,
// absorbs Metrics) → How It Works (interactive stepper) → Why → CTA. Bands → /pricing,
// Examples → /work. Chrome + data in ./shared. Off-Canon.
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "motion/react";
import {
  Shell, Preloader, Split, Reveal, PathStrip, BuildExplorer, ProcessStepper, Badges,
  INK, BONE, TEAL, DIM, BORDER, PATH_SHORT, PATH_LONG,
} from "./shared";

export default function Home() {
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  useEffect(() => { if (reduce) setLoaded(true); }, [reduce]);

  const lab = "font-[JetBrains_Mono] text-[12px] tracking-[0.3em] uppercase mb-5";

  return (
    <Shell>
      <AnimatePresence>{!reduce && !loaded && <Preloader key="pre" onDone={() => setLoaded(true)} />}</AnimatePresence>

      {/* HERO */}
      <section ref={heroRef} className="relative h-[100svh] w-full overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: heroY }}>
          {reduce ? (
            <img src="/video/hero-coin-poster.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
          ) : (
            <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="auto" poster="/video/hero-coin-poster.webp">
              <source src="/video/hero-coin.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>
        <div className="absolute inset-0" style={{ background: "rgba(70,76,70,0.28)", mixBlendMode: "multiply" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(11,11,9,0.92) 0%, rgba(11,11,9,0.15) 45%, rgba(11,11,9,0.55) 100%)" }} />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-12 lg:pb-16">
          <motion.p className="font-[JetBrains_Mono] text-[12px] tracking-[0.3em] uppercase mb-6" style={{ color: TEAL }}
            initial={{ opacity: 0 }} animate={loaded ? { opacity: 1 } : {}} transition={{ delay: 0.1, duration: 0.6 }}>
            Revenue systems for service businesses
          </motion.p>
          <Split text="I build the layer between demand and getting paid." go={loaded}
            className="font-[Fraunces] font-black leading-[0.92] tracking-[-0.01em] max-w-[18ch]" style={{ fontSize: "clamp(34px,5.4vw,86px)" }} />
          <motion.div className="mt-7 flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-12"
            initial={{ opacity: 0, y: 16 }} animate={loaded ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.7, duration: 0.7 }}>
            <p className="font-[Fraunces] max-w-[52ch]" style={{ fontSize: "clamp(17px,1.9vw,22px)", color: "#D6D1C5" }}>
              Savoca Studio builds the workflows, tools, automations, and reporting that turn service demand into booked work, completed work, paid work, and repeat customers.
            </p>
            <div className="flex items-center gap-5 shrink-0">
              <a data-cursor href="#contact" className="font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: TEAL, color: INK }}>Let&apos;s talk →</a>
              <a data-cursor href="#path" className="font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase hover:opacity-70 transition-opacity" style={{ color: BONE }}>See the system ↓</a>
            </div>
          </motion.div>
          <motion.div className="mt-8" initial={{ opacity: 0 }} animate={loaded ? { opacity: 1 } : {}} transition={{ delay: 1.0, duration: 0.7 }}>
            <PathStrip nodes={PATH_SHORT} accentLast />
          </motion.div>
        </div>
      </section>

      {/* REVENUE PATH */}
      <section id="path" className="px-6 md:px-12 py-20 lg:py-32">
        <p className={lab} style={{ color: TEAL }}>The revenue path</p>
        <Reveal className="font-[Fraunces] font-bold leading-[0.98] max-w-[16ch]" style={{ fontSize: "clamp(30px,5vw,60px)" }}>Revenue does not stop at the lead.</Reveal>
        <div className="mt-8 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16">
          <div className="font-[Fraunces] space-y-4 max-w-[54ch]" style={{ fontSize: "clamp(17px,1.9vw,21px)", color: "#B7B2A6" }}>
            <p>For a service business, revenue moves through a chain of handoffs.</p>
            <p>A call becomes a booked job. A quote becomes scheduled work. A completed visit becomes a paid invoice. A happy customer becomes a review, referral, or repeat booking.</p>
            <p>When that path lives across phones, texts, spreadsheets, inboxes, calendars, and memory, growth gets harder to manage.</p>
            <p style={{ color: BONE }}>Savoca Studio builds the system underneath it.</p>
          </div>
          <ol className="lg:pt-2">
            {PATH_LONG.map((n, i) => (
              <li key={n} className="flex items-center gap-4 py-3" style={{ borderBottom: BORDER }}>
                <span className="font-[JetBrains_Mono] text-[12px] shrink-0 w-7" style={{ color: TEAL }}>{String(i + 1).padStart(2, "0")}</span>
                <span className="font-[Fraunces] font-bold" style={{ fontSize: "clamp(18px,2vw,24px)" }}>{n}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* WHAT GETS BUILT — interactive */}
      <section id="systems" className="px-6 md:px-12 py-20 lg:py-32" style={{ borderTop: BORDER }}>
        <p className={lab} style={{ color: TEAL }}>What gets built</p>
        <Reveal className="font-[Fraunces] font-bold leading-[0.98] max-w-[18ch] mb-10" style={{ fontSize: "clamp(30px,5vw,60px)" }}>A working revenue system, not another tool.</Reveal>
        <BuildExplorer />
        <p className="font-[Fraunces] mt-10 max-w-[44ch]" style={{ fontSize: "clamp(18px,2.2vw,26px)", color: BONE }}>
          The system is working when more demand becomes booked work, completed work, paid work, and repeat business.
        </p>
      </section>

      {/* HOW IT WORKS — interactive */}
      <section className="px-6 md:px-12 py-20 lg:py-32" style={{ borderTop: BORDER }}>
        <p className={lab} style={{ color: TEAL }}>The process</p>
        <Reveal className="font-[Fraunces] font-bold leading-[0.95] max-w-[14ch] mb-10" style={{ fontSize: "clamp(32px,5vw,64px)" }}>Build. Run. Measure. Improve.</Reveal>
        <ProcessStepper />
      </section>

      {/* WHY */}
      <section id="about" className="px-6 md:px-12 py-24 lg:py-32" style={{ borderTop: BORDER }}>
        <div className="max-w-[1100px] mx-auto mb-12">
          <p className={lab} style={{ color: TEAL }}>Why this works</p>
          <Reveal className="font-[Fraunces] font-bold leading-[0.96] mb-7 max-w-[16ch]" style={{ fontSize: "clamp(30px,5vw,60px)" }}>Not an agency. Not just software. Not advice.</Reveal>
          <div className="font-[Fraunces] space-y-4 max-w-[58ch]" style={{ fontSize: "clamp(17px,2vw,22px)", color: "#B7B2A6" }}>
            <p>Agencies usually focus on getting more demand. Software companies sell tools. Consultants give recommendations.</p>
            <p style={{ color: BONE }}>Savoca Studio builds the revenue workflow underneath the business and keeps improving it with you.</p>
            <p>You work directly with me. I bring a background in program management, revenue operations, product launches, and cross-functional systems from larger companies, then apply it to service businesses that need cleaner growth, better visibility, and less manual chaos.</p>
          </div>
          <div className="font-[Fraunces] font-bold mt-9 space-y-1" style={{ fontSize: "clamp(20px,2.4vw,28px)" }}>
            <p style={{ color: DIM }}>The work is practical:</p>
            <p>Build the system.</p><p>Run the system.</p><p>Measure what changed.</p><p>Improve it every month.</p>
          </div>
        </div>
        <Badges />
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="px-6 md:px-12 py-32 lg:py-48" style={{ background: BONE, color: INK }}>
        <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.3em] uppercase mb-7" style={{ color: "#4A524A" }}>Get in touch</p>
        <h2 className="font-[Fraunces] font-black leading-[0.92] max-w-[16ch]" style={{ fontSize: "clamp(36px,7vw,108px)" }}>Build the layer between demand and getting paid.</h2>
        <p className="font-[Fraunces] mt-7 max-w-[56ch]" style={{ fontSize: "clamp(18px,2.2vw,24px)", color: "#3A403A" }}>
          If your business has calls, calendars, quotes, crews, jobs, customers, locations, or repeat work, there is a system behind the revenue. Savoca Studio helps build it.
        </p>
        <a data-cursor href="mailto:jack@savoca.studio" className="inline-block mt-9 font-[JetBrains_Mono] text-[13px] tracking-[0.15em] uppercase px-7 py-4 rounded-full" style={{ background: INK, color: BONE }}>Let&apos;s talk →</a>
        <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.12em] mt-10" style={{ color: "#3A403A" }}>jack@savoca.studio · Austin, TX</p>
      </section>
    </Shell>
  );
}
