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
    pitch: "Find where leads drop.",
    bullets: [
      "Audit calls, forms, booking",
      "Map where follow-up breaks",
    ],
    cta: "Start audit",
    icon: "/assets/services/net.svg",
  },
  {
    no: "02",
    name: "The Stack",
    price: "999",
    cadence: "one-time",
    pitch: "Make sure every lead gets worked.",
    bullets: [
      "Phone → CRM → calendar → follow-up connected",
      "Missed-call text-back",
      "After-hours capture",
    ],
    cta: "Build my stack",
    feature: true,
    icon: "/assets/services/stack.svg",
  },
  {
    no: "03",
    name: "Operator Partner",
    price: "2,995",
    cadence: "per month",
    pitch: "I stay on it every week.",
    bullets: [
      "Pipeline + capture metrics",
      "On-call for tools, vendors, hires",
    ],
    cta: "Talk through fit",
    icon: "/assets/services/compass.svg",
  },
];

export function Services() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="services"
      className="relative px-6 lg:px-12 py-24 lg:py-44 border-t border-line"
    >
      <SectionLine targetRef={ref} />

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mb-20 lg:mb-32">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Two / Services
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            className="leading-[0.95] tracking-[-0.025em] text-ink font-medium"
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

      <ul className="space-y-12 lg:space-y-16">
        {tiers.map((t, i) => (
          <RevealBlock key={t.no} delay={i * 0.05}>
            <li
              className={
                "group grid grid-cols-12 gap-x-6 lg:gap-x-8 items-start border-t pt-7 lg:pt-9 pb-7 lg:pb-9 transition-colors duration-500 " +
                (t.feature ? "border-ink" : "border-line hover:border-ink")
              }
            >
              <div className="col-span-3 md:col-span-1 flex flex-col items-start gap-3 pt-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute tabular">
                  {t.no}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.icon}
                  alt=""
                  aria-hidden
                  className="w-14 h-14 lg:w-20 lg:h-20"
                />
              </div>
              <div className="col-span-9 md:col-span-5">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3
                    className="leading-[0.98] tracking-[-0.022em] text-ink font-medium"
                    style={{ fontSize: "clamp(36px, 4.2vw, 64px)" }}
                  >
                    {t.name}
                  </h3>
                  {t.feature && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp">
                      Most picked
                    </span>
                  )}
                </div>
                <p className="mt-5 text-[16px] leading-[1.55] text-ink-soft max-w-[46ch]">
                  {t.pitch}
                </p>
              </div>
              <ul className="col-span-12 md:col-span-4 mt-6 md:mt-3 space-y-3 text-[14px] text-ink/85 leading-[1.5]">
                {t.bullets.map((b) => (
                  <li key={b} className="flex gap-4">
                    <span className="block w-6 h-px bg-mute-soft mt-3 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="col-span-12 md:col-span-2 mt-8 md:mt-0 md:text-right">
                <div className="flex items-baseline md:justify-end gap-1">
                  <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-mute pb-1.5">
                    $
                  </span>
                  <span
                    className="text-ink font-medium tracking-[-0.03em] tabular leading-[1] font-serif"
                    style={{ fontSize: "clamp(48px, 5vw, 72px)" }}
                  >
                    {t.price}
                  </span>
                </div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mt-2">
                  {t.cadence}
                </div>
                <Link
                  href="#contact"
                  className="mt-7 inline-flex items-center gap-2 text-[13px] text-ink font-medium group/cta"
                  data-cursor-grow
                >
                  <span>{t.cta}</span>
                  <span className="block w-5 h-px bg-ink transition-all duration-500 group-hover/cta:w-10" />
                </Link>
              </div>
            </li>
          </RevealBlock>
        ))}
      </ul>
    </section>
  );
}
