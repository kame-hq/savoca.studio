"use client";

import { useRef } from "react";
import { RevealBlock, RevealWords } from "@/components/motion/reveal-words";
import { SectionLine } from "@/components/motion/section-line";

const verticals = [
  {
    no: "01",
    name: "Medspas.",
    lines: [
      "Forms convert higher than calls.",
      "But no deposit. No follow-up.",
      "They browse. They leave. They book somewhere else.",
    ],
    icon: "/assets/who/syringe.svg",
  },
  {
    no: "02",
    name: "Dental.",
    lines: [
      "Up to 40% of calls go unanswered.",
      "No callback. No recovery.",
      "That patient is gone.",
    ],
    icon: "/assets/who/tooth.svg",
  },
  {
    no: "03",
    name: "Home services.",
    lines: [
      "Most demand hits after hours.",
      "You're closed when the phone rings.",
      "First company to respond wins the job.",
    ],
    icon: "/assets/who/wrench.svg",
  },
  {
    no: "04",
    name: "Pro services.",
    lines: [
      "Speed decides everything.",
      "Inside 5 minutes: 21× more likely to convert.",
      "After 30: you're a backup option.",
    ],
    icon: "/assets/notes/clipboard.svg",
  },
];

export function Who() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="who"
      className="relative px-6 lg:px-12 py-24 lg:py-44 border-t border-line"
    >
      <SectionLine targetRef={ref} />

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mb-20 lg:mb-32">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          One / Who
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            className="leading-[0.95] tracking-[-0.025em] text-ink font-medium"
            style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
          >
            <RevealWords text="Your funnel isn't broken." />{" "}
            <RevealWords
              text="Your follow-through is."
              className="font-serif italic font-normal text-mute-soft"
              delay={0.18}
            />
          </h2>
        </div>
      </div>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-line">
        {verticals.map((v, i) => (
          <RevealBlock
            key={v.no}
            delay={i * 0.06}
            className={[
              "border-line",
              i < verticals.length - 1 ? "border-b" : "",
              "md:border-b-0",
              i % 2 === 0 ? "md:border-r" : "",
              i < 2 ? "md:border-b" : "",
              "lg:border-b-0",
              i < verticals.length - 1 ? "lg:border-r" : "",
            ].join(" ")}
          >
            <article className="h-full px-2 py-10 lg:px-6 lg:py-12 flex flex-col">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp">
                No. {v.no}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.icon}
                alt=""
                aria-hidden
                className="mt-10 mb-12 w-16 h-16 lg:w-16 lg:h-16"
              />
              <h3
                className="uppercase font-bold leading-[0.95] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(28px, 2.6vw, 38px)" }}
              >
                {v.name}
              </h3>
              <div className="mt-6 space-y-2 font-serif italic text-[15px] leading-[1.5] text-mute max-w-[30ch]">
                {v.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </article>
          </RevealBlock>
        ))}
      </ul>
    </section>
  );
}
