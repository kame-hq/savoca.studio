"use client";

import { Eyebrow, Rule } from "@/components/brand/v2";

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
      <Eyebrow>Three · Proof</Eyebrow>
      <h2
        className="font-serif mt-2"
        style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          lineHeight: 0.95,
          letterSpacing: "-0.035em",
          fontWeight: 400,
          fontVariationSettings: '"opsz" 96',
        }}
      >
        What actually
        <br />
        <span style={{ fontStyle: "italic", color: "var(--money)" }}>
          drives bookings.
        </span>
      </h2>
      <Rule style={{ marginTop: 22 }} />

      <ol className="mt-6 max-w-[820px]">
        {proof.map((line, i) => (
          <li
            key={line}
            className="flex items-baseline gap-4 lg:gap-8 py-5 lg:py-6"
            style={{ borderTop: i === 0 ? "0" : "1px solid var(--rule)" }}
          >
            {/* Tabular tick prefix — editorial weight */}
            <span
              className="font-mono tabular shrink-0"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--signal)",
                fontWeight: 500,
                paddingTop: 6,
                width: 24,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p
              className="font-serif flex-1"
              style={{
                fontSize: "clamp(22px, 3vw, 36px)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                fontWeight: 400,
                color: "var(--ink)",
                fontVariationSettings: '"opsz" 96',
              }}
            >
              {line}
            </p>
          </li>
        ))}
        <li
          className="font-serif italic mt-2 pt-6 list-none flex items-baseline gap-4 lg:gap-8"
          style={{
            borderTop: "2px solid var(--ink)",
          }}
        >
          <span
            className="font-mono tabular shrink-0"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--signal)",
              fontWeight: 500,
              fontStyle: "normal",
              paddingTop: 6,
              width: 24,
            }}
          >
            §
          </span>
          <span
            className="flex-1"
            style={{
              fontSize: "clamp(22px, 3vw, 36px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "var(--ink-2)",
              fontWeight: 400,
              fontVariationSettings: '"opsz" 96',
            }}
          >
            If you&apos;re slow or inconsistent, you lose.
          </span>
        </li>
      </ol>
    </section>
  );
}
