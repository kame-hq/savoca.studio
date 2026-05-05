"use client";

import { useRef } from "react";
import Link from "next/link";
import { RevealBlock, RevealWords } from "@/components/motion/reveal-words";
import { SectionLine } from "@/components/motion/section-line";

const tiers = [
  {
    no: "01",
    name: "The Catcher",
    price: "249",
    cadence: "one-time",
    cta: "Start audit",
    feature: false,
  },
  {
    no: "02",
    name: "The Stack",
    price: "999",
    cadence: "one-time",
    cta: "Build my stack",
    feature: true,
  },
  {
    no: "03",
    name: "Operator Partner",
    price: "2,995",
    cadence: "per month",
    cta: "Talk through fit",
    feature: false,
  },
];

const features: { label: string; tiers: [boolean, boolean, boolean] }[] = [
  { label: "Lead-capture audit", tiers: [true, true, true] },
  { label: "Map of follow-up gaps", tiers: [true, true, true] },
  { label: "Phone → CRM → calendar wired", tiers: [false, true, true] },
  { label: "Missed-call text-back", tiers: [false, true, true] },
  { label: "After-hours capture", tiers: [false, true, true] },
  { label: "Weekly pipeline review", tiers: [false, false, true] },
  { label: "On-call: tools, vendors, hires", tiers: [false, false, true] },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="services"
      className="relative px-6 lg:px-12 py-20 lg:py-32 border-t border-line"
    >
      <SectionLine targetRef={ref} />

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mb-12 lg:mb-20">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Two / Services
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            className="leading-[0.95] tracking-[-0.03em] text-ink font-medium"
            style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
          >
            <RevealWords text="Three ways to" />{" "}
            <RevealWords
              text="stop losing revenue."
              className="font-serif italic font-normal text-mute-soft"
              delay={0.18}
            />
          </h2>
        </div>
      </div>

      {/* DESKTOP TABLE — 4-col grid, hairline rules, no cell boxes */}
      <RevealBlock className="hidden lg:block" delay={0.05}>
        <div className="grid grid-cols-12 gap-x-8 border-t border-ink pt-8">
          {/* Header row */}
          <div className="col-span-3" />
          {tiers.map((t) => (
            <div key={t.no} className="col-span-3 relative">
              {t.feature && (
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">
                  Most picked
                </span>
              )}
              <h3
                className="leading-[1] tracking-[-0.025em] text-ink font-medium"
                style={{ fontSize: "clamp(28px, 2.6vw, 40px)" }}
              >
                <span className="font-serif italic">{t.name}</span>
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute pb-1">
                  $
                </span>
                <span
                  className="text-ink font-medium tracking-[-0.03em] tabular leading-[1] font-serif"
                  style={{ fontSize: "clamp(36px, 3.6vw, 56px)" }}
                >
                  {t.price}
                </span>
              </div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mt-1">
                {t.cadence}
              </div>
            </div>
          ))}
        </div>

        {/* Feature rows */}
        <ul className="mt-10 grid grid-cols-12 gap-x-8 border-t border-line">
          {features.map((f) => (
            <li
              key={f.label}
              className="col-span-12 grid grid-cols-12 gap-x-8 py-4 border-b border-line items-center"
            >
              <div className="col-span-3 text-[15px] text-ink-soft leading-[1.4]">
                {f.label}
              </div>
              {f.tiers.map((included, i) => (
                <div
                  key={i}
                  className={
                    "col-span-3 flex items-center " +
                    (tiers[i].feature ? "" : "")
                  }
                >
                  {included ? (
                    <span aria-label="Included" className="flex items-center gap-2">
                      <span className="block w-1.5 h-1.5 rounded-full bg-stamp" />
                      <span className="block w-6 h-px bg-stamp/60" />
                    </span>
                  ) : (
                    <span aria-label="Not included" className="text-mute-soft text-[18px] leading-none">
                      —
                    </span>
                  )}
                </div>
              ))}
            </li>
          ))}
        </ul>

        {/* CTA row */}
        <div className="mt-8 grid grid-cols-12 gap-x-8">
          <div className="col-span-3" />
          {tiers.map((t) => (
            <div key={t.no} className="col-span-3">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-[14px] text-ink font-medium"
                data-cursor-grow
              >
                <span>{t.cta}</span>
                <span className="block w-5 h-px bg-stamp transition-all duration-500 group-hover:w-12" />
              </Link>
            </div>
          ))}
        </div>
      </RevealBlock>

      {/* MOBILE — stacked tier cards with included features only */}
      <ul className="lg:hidden space-y-10 border-t border-ink pt-8">
        {tiers.map((t, ti) => (
          <RevealBlock key={t.no} delay={ti * 0.06}>
            <li
              className={
                "border-t pt-6 " +
                (t.feature ? "border-ink" : "border-line")
              }
            >
              {t.feature && (
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-stamp mb-2">
                  Most picked
                </span>
              )}
              <div className="flex items-end justify-between gap-4 flex-wrap">
                <h3
                  className="leading-[1] tracking-[-0.025em] text-ink font-medium"
                  style={{ fontSize: "clamp(30px, 8vw, 44px)" }}
                >
                  <span className="font-serif italic">{t.name}</span>
                </h3>
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute pb-1">
                      $
                    </span>
                    <span
                      className="text-ink font-medium tracking-[-0.03em] tabular leading-[1] font-serif"
                      style={{ fontSize: "clamp(34px, 9vw, 52px)" }}
                    >
                      {t.price}
                    </span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute mt-1">
                    {t.cadence}
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-2.5 text-[14px] text-ink-soft leading-[1.45]">
                {features
                  .filter((f) => f.tiers[ti])
                  .map((f) => (
                    <li key={f.label} className="flex items-start gap-3">
                      <span
                        aria-hidden
                        className="flex items-center gap-1.5 shrink-0 mt-2"
                      >
                        <span className="block w-1.5 h-1.5 rounded-full bg-stamp" />
                        <span className="block w-4 h-px bg-stamp/60" />
                      </span>
                      <span>{f.label}</span>
                    </li>
                  ))}
              </ul>

              <Link
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-[14px] text-ink font-medium group/cta"
                data-cursor-grow
              >
                <span>{t.cta}</span>
                <span className="block w-5 h-px bg-stamp transition-all duration-500 group-hover/cta:w-12" />
              </Link>
            </li>
          </RevealBlock>
        ))}
      </ul>
    </section>
  );
}
