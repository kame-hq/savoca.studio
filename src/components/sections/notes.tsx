"use client";

import { useRef } from "react";
import { RevealBlock, RevealWords } from "@/components/motion/reveal-words";
import { SectionLine } from "@/components/motion/section-line";

const proof = [
  "Most home service demand happens after hours.",
  "Deposits increase form conversions.",
  "Fast response wins deals.",
];

export function Notes() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="proof"
      className="relative px-6 lg:px-12 py-24 lg:py-44 border-t border-line bg-bg-alt"
    >
      <SectionLine targetRef={ref} />

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mb-20 lg:mb-32">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Three / Proof
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            className="leading-[0.95] tracking-[-0.025em] text-ink font-medium"
            style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
          >
            <RevealWords text="What actually" />{" "}
            <RevealWords
              text="drives bookings."
              className="font-serif italic font-normal text-mute-soft"
              delay={0.16}
            />
          </h2>
        </div>
      </div>

      <ol className="grid grid-cols-12 gap-x-6 lg:gap-x-8">
        {proof.map((line, i) => (
          <RevealBlock
            key={line}
            delay={i * 0.08}
            className="col-span-12 lg:col-span-9 lg:col-start-3 border-t border-line py-8 lg:py-10 flex items-start gap-6 lg:gap-10"
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp pt-2 tabular shrink-0 w-10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p
              className="leading-[1.05] tracking-[-0.02em] text-ink font-medium"
              style={{ fontSize: "clamp(22px, 2.8vw, 40px)" }}
            >
              {line}
            </p>
          </RevealBlock>
        ))}
        <RevealBlock
          delay={proof.length * 0.08 + 0.1}
          className="col-span-12 lg:col-span-9 lg:col-start-3 border-t border-ink py-10 lg:py-14"
        >
          <p
            className="font-serif italic leading-[1.05] tracking-[-0.02em] text-ink-soft"
            style={{ fontSize: "clamp(24px, 3.2vw, 48px)" }}
          >
            If you&apos;re slow or inconsistent, you lose.
          </p>
        </RevealBlock>
      </ol>
    </section>
  );
}
