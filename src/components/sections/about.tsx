"use client";

import { Eyebrow, Rule } from "@/components/brand/v2";
import { FieldNoteStamp } from "@/components/brand/v3";

const triplet: [string, string][] = [
  ["Audit.", "what's happening"],
  ["Fix.", "the system"],
  ["Track.", "what changes"],
];

export function About() {
  return (
    <section
      id="about"
      className="grain relative px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--paper)" }}
    >
      {/* Field Note stamp — top-right, system continuity (memorable beat #2) */}
      <div className="hidden md:block absolute top-12 right-12 lg:right-16">
        <FieldNoteStamp number="04" date="2026 / Q2" />
      </div>

      <Eyebrow>Four · About</Eyebrow>
      <h2
        className="font-serif mt-2 max-w-[900px]"
        style={{
          fontSize: "clamp(36px, 6vw, 64px)",
          lineHeight: 0.95,
          letterSpacing: "-0.035em",
          fontWeight: 400,
          fontVariationSettings: '"opsz" 96',
        }}
      >
        I fix the part where revenue
        <br />
        <span style={{ fontStyle: "italic", color: "var(--money)" }}>
          falls through.
        </span>
      </h2>
      <Rule style={{ marginTop: 22 }} />

      <div className="mt-8 max-w-[680px]">
        <p
          className="font-sans"
          style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}
        >
          Global product commercialization PM at Indeed. Previously Whole Foods
          Market and Facebook (now Meta).
        </p>
        <p
          className="font-sans mt-4"
          style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          Most service businesses already have what they need. Phone. CRM.
          Booking. Payments. They just don&apos;t work together. Calls get
          missed. Forms sit. Bookings don&apos;t confirm.
        </p>
      </div>

      {/* Audit / Fix / Track strip — with "30 days." 4th cell underneath */}
      <div className="mt-8 max-w-[680px]">
        <div
          className="grid grid-cols-3"
          style={{ border: "1px solid var(--rule)", borderBottom: 0 }}
        >
          {triplet.map(([word, caption], i) => (
            <div
              key={word}
              className="p-4"
              style={{
                borderRight: i < 2 ? "1px solid var(--rule)" : "0",
                background: i === 1 ? "var(--bone-2)" : "transparent",
              }}
            >
              <div
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 3vw, 30px)",
                  color: "var(--money)",
                  letterSpacing: "-0.035em",
                  lineHeight: 1,
                  fontWeight: 400,
                }}
              >
                {word}
              </div>
              <div
                className="font-mono mt-2"
                style={{
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--steel)",
                  fontWeight: 500,
                }}
              >
                {caption}
              </div>
            </div>
          ))}
        </div>
        {/* Duration cell — frames the 30-day commitment */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{
            border: "1px solid var(--rule)",
            background: "var(--ink)",
            color: "var(--bone)",
          }}
        >
          <span
            className="font-serif italic"
            style={{
              fontSize: "clamp(18px, 2vw, 24px)",
              letterSpacing: "-0.025em",
              fontWeight: 400,
            }}
          >
            30 days.
          </span>
          <span
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--steel-2)",
              fontWeight: 500,
            }}
          >
            measured
          </span>
        </div>
      </div>

      <p
        className="font-serif italic mt-6"
        style={{ fontSize: 18, color: "var(--ink)", fontWeight: 400 }}
      >
        No agency. No handoffs.{" "}
        <span style={{ color: "var(--money)" }}>You work with me.</span>
      </p>
    </section>
  );
}
