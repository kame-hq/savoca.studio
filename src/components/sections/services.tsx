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
    pitch: "1-week audit. You get a written map of every place leads die between phone, web form, and booking.",
    features: [
      "Lead-capture audit",
      "Map of follow-up gaps",
    ],
    cta: "Start audit",
    icon: "/assets/services/net.svg",
    feature: false,
  },
  {
    no: "02",
    name: "The Stacker",
    price: "999",
    cadence: "one-time",
    pitch: "2-week build. Phone, CRM, calendar, and follow-up wired so no inbound goes unanswered.",
    features: [
      "Lead-capture audit",
      "Map of follow-up gaps",
      "Phone → CRM → calendar wired",
      "Missed-call text-back",
      "After-hours capture",
    ],
    cta: "Build with Stacker",
    icon: "/assets/services/stack.svg",
    feature: true,
  },
  {
    no: "03",
    name: "The Operator",
    price: "2,995",
    cadence: "per month",
    pitch: "Monthly retainer. Weekly review of your pipeline and capture metrics. On call for tool, vendor, and hiring decisions.",
    features: [
      "Everything in The Stacker",
      "Weekly pipeline review",
      "On-call: tools, vendors, hires",
    ],
    cta: "Talk through fit",
    icon: "/assets/services/compass.svg",
    feature: false,
  },
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

      <ul className="space-y-10 lg:space-y-14">
        {tiers.map((t, i) => (
          <RevealBlock key={t.no} delay={i * 0.06}>
            <li
              className={
                "group grid grid-cols-12 gap-x-6 lg:gap-x-8 items-start border-t pt-7 lg:pt-10 pb-7 lg:pb-10 transition-colors duration-500 " +
                (t.feature ? "border-ink" : "border-line hover:border-ink")
              }
            >
              {/* Left rail: number + icon */}
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

              {/* Middle: name + pitch */}
              <div className="col-span-9 md:col-span-5">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <h3
                    className="leading-[0.98] tracking-[-0.025em] text-ink font-medium"
                    style={{ fontSize: "clamp(36px, 4.4vw, 64px)" }}
                  >
                    <span className="font-serif italic">{t.name}</span>
                  </h3>
                  {t.feature && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp">
                      Most picked
                    </span>
                  )}
                </div>
                <p className="mt-4 text-[16px] leading-[1.5] text-ink-soft max-w-[46ch]">
                  {t.pitch}
                </p>
              </div>

              {/* Features list */}
              <ul className="col-span-12 md:col-span-4 mt-6 md:mt-3 space-y-2.5 text-[14px] text-ink/90 leading-[1.5]">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="flex items-center gap-1.5 shrink-0 mt-2"
                    >
                      <span className="block w-1.5 h-1.5 rounded-full bg-stamp" />
                      <span className="block w-4 h-px bg-stamp/60" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* Right: price + CTA */}
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
                  <span className="block w-5 h-px bg-stamp transition-all duration-500 group-hover/cta:w-12" />
                </Link>
              </div>
            </li>
          </RevealBlock>
        ))}
      </ul>
    </section>
  );
}
