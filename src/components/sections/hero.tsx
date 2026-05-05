"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 220]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);

  return (
    <section
      ref={ref}
      className="relative pt-40 pb-32 lg:pt-56 lg:pb-56 px-6 lg:px-12 overflow-hidden"
    >
      {/* Organic blob — animated SVG ink mass behind type, asymmetric */}
      <OrganicBlob />

      <motion.div
        style={{ y, scale, opacity }}
        className="relative grid grid-cols-12 gap-x-6 lg:gap-x-8 z-10"
      >
        <div className="col-span-12 lg:col-span-2 mb-8 lg:mb-0 lg:pt-2">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute leading-relaxed"
          >
            <div>2026 / Q2</div>
            <div className="mt-1">Now booking</div>
            <div className="mt-4 text-ink">Program Manager</div>
            <div>Indeed</div>
          </motion.div>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <h1
            className="leading-[0.88] tracking-[-0.045em] text-ink font-medium relative"
            style={{ fontSize: "clamp(64px, 13vw, 200px)" }}
          >
            <RevealLine delay={0.1}>
              <span className="relative z-10">No revenue</span>
            </RevealLine>
            <RevealLine delay={0.28}>
              <span className="font-serif italic font-normal tracking-[-0.04em] relative z-10">
                left behind.
              </span>
            </RevealLine>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            className="mt-14 lg:mt-20 grid grid-cols-12 gap-6 items-end"
          >
            <p className="col-span-12 md:col-span-6 lg:col-start-2 text-[17px] leading-[1.55] text-mute-soft max-w-[44ch]">
              <span className="font-serif italic text-ink-soft">
                RevOps for the service businesses
              </span>{" "}
              that run on calls, bookings, and follow-up. Built by an
              enterprise PM who got tired of watching shops, clinics, and firms
              lose money to tools they already pay for.
            </p>
            <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col sm:flex-row md:justify-end gap-4 sm:gap-8 items-stretch sm:items-end">
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-3 text-[14px] text-ink font-medium"
                data-cursor-grow
              >
                <span className="h-12 px-7 rounded-full bg-ink text-bg inline-flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-0.5">
                  Book a call
                </span>
              </Link>
              <Link
                href="#services"
                className="group inline-flex items-center gap-2 text-[14px] text-ink min-h-[44px] py-3 sm:py-0 sm:h-12"
                data-cursor-grow
              >
                <span>See pricing</span>
                <span className="block w-6 h-px bg-ink transition-all duration-500 group-hover:w-12" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function RevealLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span
      className="block overflow-hidden"
      style={{
        paddingTop: "0.05em",
        paddingBottom: "0.28em",
        marginBottom: "-0.28em",
      }}
    >
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay, ease: [0.22, 0.61, 0.36, 1] }}
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function OrganicBlob() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end overflow-hidden">
      <svg
        viewBox="0 0 800 800"
        className="absolute -right-40 -top-20 lg:right-0 lg:top-20 w-[60vw] max-w-[860px] opacity-[0.08]"
        aria-hidden
      >
        <defs>
          <filter id="blob-blur">
            <feGaussianBlur stdDeviation="40" />
          </filter>
        </defs>
        <motion.path
          fill="var(--ink)"
          filter="url(#blob-blur)"
          initial={{ d: blobPaths[0] }}
          animate={{ d: blobPaths }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

const blobPaths = [
  "M 400 120 C 560 120 700 240 700 400 C 700 560 560 680 400 680 C 240 680 100 560 100 400 C 100 240 240 120 400 120 Z",
  "M 420 100 C 600 140 720 280 680 440 C 640 600 480 700 320 660 C 160 620 80 460 120 300 C 160 140 240 60 420 100 Z",
  "M 380 140 C 540 100 720 220 700 400 C 680 580 540 700 380 680 C 220 660 100 540 100 400 C 100 240 220 180 380 140 Z",
  "M 400 100 C 580 120 700 280 680 440 C 660 600 520 700 360 680 C 200 660 80 540 100 380 C 120 220 220 80 400 100 Z",
];
