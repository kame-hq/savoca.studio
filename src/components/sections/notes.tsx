"use client";

import { Eyebrow, Rule } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

const proof = [
  "Most home service demand happens after hours.",
  "Deposits increase form conversions.",
  "Fast response wins deals.",
];

export function Notes() {
  return (
    <section
      id="proof"
      className="px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--bone)" }}
    >
      <Reveal>
        <Eyebrow>Three · Proof</Eyebrow>
        <h2
          className="font-serif mt-2"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          What actually
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            drives bookings.
          </span>
        </h2>
        <Rule style={{ marginTop: 22 }} />
      </Reveal>

      <ol className="mt-6 max-w-[820px]">
        {proof.map((line, i) => (
          <Reveal
            key={line}
            as="li"
            delay={i * 80}
            className="flex items-start gap-5 lg:gap-8 py-5 lg:py-6"
            style={{ borderTop: i === 0 ? "0" : "1px solid var(--rule)" }}
          >
            <span aria-hidden className="shrink-0 mt-3 flex items-center gap-1.5">
              <span
                className="block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--signal)" }}
              />
              <span className="block w-7 h-px" style={{ background: "var(--rule)" }} />
            </span>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(22px, 3vw, 36px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 400,
                color: "var(--ink)",
              }}
            >
              {line}
            </p>
          </Reveal>
        ))}
        <Reveal
          as="li"
          delay={proof.length * 80}
          className="font-serif italic mt-2 pt-6 list-none"
          style={{
            borderTop: "2px solid var(--ink)",
            fontSize: "clamp(22px, 3vw, 36px)",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: "var(--ink-2)",
            fontWeight: 400,
          }}
        >
          If you&apos;re slow or inconsistent, you lose.
        </Reveal>
      </ol>
    </section>
  );
}
