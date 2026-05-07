"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Eyebrow, SVInitial, Rule } from "@/components/brand/v2";

type Vertical = "medspa" | "dental" | "home" | "pro" | "other";

const verticalLabels: Record<Vertical, string> = {
  medspa: "Medspa",
  dental: "Dental",
  home: "Home services",
  pro: "Pro services",
  other: "Other",
};

const defaultValueByVertical: Record<Vertical, number> = {
  medspa: 600,
  dental: 3000,
  home: 800,
  pro: 2500,
  other: 500,
};

const verticalNote: Record<Vertical, string> = {
  medspa: "First-treatment value — botox / filler / Morpheus / first facial.",
  dental: "Lifetime new-patient value — most US practices land $2,500–5,000.",
  home: "Single-job average — varies by trade. HVAC service call ~$300, full system ~$8,000.",
  pro: "First-engagement value — legal retainer, accounting setup, fitness signup.",
  other: "Adjust to match your typical first-customer revenue.",
};

const CALLBACK_RECOVERY_RATE = 0.3; // 30% recovered within 24h
const BOOKING_CONVERSION_IF_RECOVERED = 0.4; // 40% would book

export default function CalculatorPage() {
  const [vertical, setVertical] = useState<Vertical>("medspa");
  const [monthlyCalls, setMonthlyCalls] = useState(80);
  const [missedRate, setMissedRate] = useState(30);
  const [avgValue, setAvgValue] = useState(defaultValueByVertical.medspa);

  // Update avgValue when vertical changes (unless user has overridden)
  const onVerticalChange = (v: Vertical) => {
    setVertical(v);
    setAvgValue(defaultValueByVertical[v]);
  };

  const result = useMemo(() => {
    const missed = Math.round(monthlyCalls * (missedRate / 100));
    const unrecovered = Math.round(missed * (1 - CALLBACK_RECOVERY_RATE));
    const wouldBook = Math.round(unrecovered * BOOKING_CONVERSION_IF_RECOVERED);
    const monthlyLost = wouldBook * avgValue;
    const annualLost = monthlyLost * 12;
    return { missed, unrecovered, wouldBook, monthlyLost, annualLost };
  }, [monthlyCalls, missedRate, avgValue]);

  const fmtUsd = (n: number) =>
    "$" +
    n.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <main
      className="grain min-h-screen"
      style={{ background: "var(--paper)" }}
    >
      {/* Header bar — minimal, just the wordmark + back link */}
      <div
        className="px-5 md:px-10 lg:px-12 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        <Link
          href="/"
          className="font-serif italic"
          aria-label="Savoca Studio"
          style={{
            fontWeight: 500,
            fontSize: 20,
            letterSpacing: "-0.045em",
          }}
        >
          Savoca
          <span style={{ color: "var(--money-2)", fontStyle: "normal" }}>.</span>
          <span
            className="font-mono ml-2"
            style={{
              fontSize: 7,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
              fontStyle: "normal",
              opacity: 0.85,
              verticalAlign: "1px",
            }}
          >
            Studio
          </span>
        </Link>
        <Link
          href="/"
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--steel)",
          }}
        >
          ← Home
        </Link>
      </div>

      {/* Header */}
      <section className="px-5 md:px-10 lg:px-12 pt-12 lg:pt-16 pb-8 max-w-[1100px]">
        <Eyebrow>§ Calculator</Eyebrow>
        <h1
          className="font-serif mt-3"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          How much revenue
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            are you leaving on the table?
          </span>
        </h1>
        <p
          className="font-sans mt-5 max-w-[60ch]"
          style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          Quick math on missed calls, unreturned voicemails, and the leads that
          slip through your follow-up. Adjust the inputs — numbers update live.
        </p>
        <Rule style={{ marginTop: 22 }} />
      </section>

      {/* Form + Result split */}
      <section className="px-5 md:px-10 lg:px-12 pb-20 lg:pb-28 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 max-w-[1100px]">
        {/* Inputs */}
        <div className="space-y-8">
          {/* Vertical */}
          <div>
            <label
              className="font-mono block mb-3"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              01 · Your vertical
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {(Object.keys(verticalLabels) as Vertical[]).map((v) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => onVerticalChange(v)}
                  className="font-mono px-3 py-2.5 transition-colors"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    border:
                      "1px solid " +
                      (vertical === v ? "var(--ink)" : "var(--rule)"),
                    background:
                      vertical === v ? "var(--ink)" : "transparent",
                    color: vertical === v ? "var(--bone)" : "var(--ink-2)",
                    cursor: "pointer",
                    fontWeight: 500,
                  }}
                >
                  {verticalLabels[v]}
                </button>
              ))}
            </div>
            <p
              className="font-sans mt-3"
              style={{
                fontSize: 12,
                color: "var(--steel)",
                lineHeight: 1.45,
              }}
            >
              {verticalNote[vertical]}
            </p>
          </div>

          {/* Monthly inbound calls */}
          <div>
            <label
              htmlFor="monthly-calls"
              className="font-mono block mb-3"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              02 · Monthly inbound calls
            </label>
            <input
              id="monthly-calls"
              type="number"
              min={10}
              max={10000}
              value={monthlyCalls}
              onChange={(e) =>
                setMonthlyCalls(Math.max(0, Number(e.target.value) || 0))
              }
              className="font-serif w-full bg-transparent focus:outline-none"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                lineHeight: 1,
                letterSpacing: "-0.035em",
                color: "var(--ink)",
                borderBottom: "1px solid var(--ink)",
                paddingBottom: 6,
                fontWeight: 400,
              }}
            />
            <p
              className="font-sans mt-2"
              style={{
                fontSize: 12,
                color: "var(--steel)",
                lineHeight: 1.45,
              }}
            >
              Total inbound, including answered + missed.
            </p>
          </div>

          {/* Missed-call rate */}
          <div>
            <label
              htmlFor="missed-rate"
              className="font-mono block mb-3"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              03 · Estimated missed-call rate
            </label>
            <div className="flex items-baseline gap-4">
              <span
                className="font-serif tabular"
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  color: "var(--money)",
                  fontWeight: 400,
                  minWidth: 90,
                }}
              >
                {missedRate}%
              </span>
              <input
                id="missed-rate"
                type="range"
                min={0}
                max={100}
                step={5}
                value={missedRate}
                onChange={(e) => setMissedRate(Number(e.target.value))}
                className="flex-1"
                style={{ accentColor: "var(--money)" }}
              />
            </div>
            <p
              className="font-sans mt-2"
              style={{
                fontSize: 12,
                color: "var(--steel)",
                lineHeight: 1.45,
              }}
            >
              Industry baseline: medspas ~25%, dental ~40%, home services ~50% (after-hours heavy).
            </p>
          </div>

          {/* Avg customer value */}
          <div>
            <label
              htmlFor="avg-value"
              className="font-mono block mb-3"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              04 · Avg new-customer value (USD)
            </label>
            <div className="flex items-baseline gap-2">
              <span
                className="font-serif"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 40px)",
                  lineHeight: 1,
                  color: "var(--steel)",
                  fontWeight: 400,
                }}
              >
                $
              </span>
              <input
                id="avg-value"
                type="number"
                min={50}
                max={50000}
                step={50}
                value={avgValue}
                onChange={(e) =>
                  setAvgValue(Math.max(0, Number(e.target.value) || 0))
                }
                className="font-serif tabular flex-1 bg-transparent focus:outline-none"
                style={{
                  fontSize: "clamp(36px, 5vw, 56px)",
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  color: "var(--ink)",
                  borderBottom: "1px solid var(--ink)",
                  paddingBottom: 6,
                  fontWeight: 400,
                }}
              />
            </div>
          </div>
        </div>

        {/* Result */}
        <div className="lg:sticky lg:top-12 self-start">
          <div
            style={{
              border: "1px solid var(--rule)",
              padding: "32px 24px",
              background: "var(--bone)",
            }}
          >
            <div
              className="font-mono mb-4 flex items-center gap-2"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--signal)",
                fontWeight: 500,
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--signal)" }}
                aria-hidden
              />
              Lost revenue
            </div>
            <div
              className="font-serif tabular"
              style={{
                fontSize: "clamp(56px, 10vw, 96px)",
                lineHeight: 0.92,
                letterSpacing: "-0.04em",
                color: "var(--ink)",
                fontWeight: 400,
              }}
            >
              {fmtUsd(result.monthlyLost)}
              <span
                className="font-mono"
                style={{
                  fontSize: 14,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--steel)",
                  marginLeft: 8,
                }}
              >
                /mo
              </span>
            </div>
            <div
              className="font-serif italic mt-2"
              style={{
                fontSize: "clamp(20px, 3vw, 28px)",
                lineHeight: 1,
                letterSpacing: "-0.025em",
                color: "var(--money)",
                fontWeight: 400,
              }}
            >
              {fmtUsd(result.annualLost)} a year. That&apos;s the math.
            </div>

            <Rule style={{ marginTop: 24, marginBottom: 16 }} />

            {/* Math breakdown */}
            <ul className="font-mono space-y-2.5 list-none p-0">
              {[
                [`${result.missed.toLocaleString()}`, "missed calls / month"],
                [
                  `${result.unrecovered.toLocaleString()}`,
                  "likely never returned (~70%)",
                ],
                [
                  `${result.wouldBook.toLocaleString()}`,
                  "would have booked at ~40% conversion",
                ],
                [fmtUsd(avgValue), "avg new-customer value"],
              ].map(([k, v]) => (
                <li
                  key={v}
                  className="flex items-baseline gap-3"
                  style={{
                    fontSize: 12,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--ink-2)",
                  }}
                >
                  <span
                    className="tabular shrink-0 text-right"
                    style={{
                      width: 80,
                      color: "var(--money)",
                      fontWeight: 600,
                    }}
                  >
                    {k}
                  </span>
                  <span style={{ flex: 1, color: "var(--steel)" }}>{v}</span>
                </li>
              ))}
            </ul>

            <Rule style={{ marginTop: 20, marginBottom: 20 }} />

            <p
              className="font-sans"
              style={{
                fontSize: 13,
                lineHeight: 1.5,
                color: "var(--steel)",
              }}
            >
              Estimates use industry-default loss rates. The 1-week Catcher
              audit replaces every default with your real numbers — pulled
              from your actual call logs, web form data, and booking system.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="cta-arrow-host font-mono inline-flex items-center gap-2 transition-colors"
              style={{
                background: "var(--ink)",
                color: "var(--bone)",
                padding: "14px 20px",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Book the audit · $249 <span className="cta-arrow">→</span>
            </Link>
            <a
              href="mailto:jack@savoca.studio?subject=Calculator%20follow-up"
              className="font-mono inline-flex items-center gap-2 transition-colors hover:bg-ink hover:text-bone"
              style={{
                border: "1.5px solid var(--ink)",
                color: "var(--ink)",
                padding: "14px 20px",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Email me the math
            </a>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <SVInitial size={20} color="var(--money-2)" />
            <span
              className="font-mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
              }}
            >
              Savoca Studio · No revenue left behind.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
