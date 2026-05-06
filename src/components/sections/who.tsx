"use client";

import { Eyebrow, Glyph, Rule, RuleThick } from "@/components/brand/v2";

const rows = [
  {
    n: "01",
    icon: "syringe" as const,
    name: "Medspas.",
    lines: [
      "Forms convert higher than calls.",
      "But no deposit. No follow-up.",
      "They book somewhere else.",
    ],
  },
  {
    n: "02",
    icon: "tooth" as const,
    name: "Dental.",
    lines: [
      "Up to 40% of calls go unanswered.",
      "No callback. No recovery.",
      "That patient is gone.",
    ],
  },
  {
    n: "03",
    icon: "wrench" as const,
    name: "Home services.",
    lines: [
      "Most demand hits after hours.",
      "You're closed when the phone rings.",
      "First to respond wins the job.",
    ],
  },
  {
    n: "04",
    icon: "clipboard" as const,
    name: "Pro services.",
    lines: [
      "Speed decides everything.",
      "Inside 5 min: 21× more likely to convert.",
      "After 30: you're a backup option.",
    ],
  },
];

export function Who() {
  return (
    <section
      id="who"
      className="px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--paper)" }}
    >
      <Eyebrow>One · Who</Eyebrow>
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
        Your funnel isn&apos;t broken.
        <br />
        <span style={{ fontStyle: "italic", color: "var(--money)" }}>
          Your follow-through is.
        </span>
      </h2>
      <Rule style={{ marginTop: 22 }} />

      <ul className="mt-6">
        {rows.map((r, i) => (
          <li
            key={r.n}
            className="who-row glyph-host grid items-center py-5 lg:py-6 grid-cols-[42px_42px_1fr] md:grid-cols-[64px_56px_1fr_2fr] gap-5"
            style={{ borderTop: i === 0 ? "0" : "1px solid var(--rule)" }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              No. {r.n}
            </div>
            <span className="glyph-svg">
              <Glyph name={r.icon} size={42} color="var(--money)" />
            </span>
            <h3
              className="font-serif col-span-3 md:col-span-1"
              style={{
                fontSize: "clamp(26px, 3vw, 36px)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                fontWeight: 400,
                color: "var(--ink)",
              }}
            >
              {r.name}
            </h3>
            <div
              className="font-sans col-span-3 md:col-span-1 -mt-2 md:mt-0"
              style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}
            >
              {r.lines.map((l, k) => (
                <div
                  key={k}
                  style={{ opacity: k === r.lines.length - 1 ? 1 : 0.85 }}
                >
                  {l}
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
      <RuleThick style={{ marginTop: 6 }} />
    </section>
  );
}
