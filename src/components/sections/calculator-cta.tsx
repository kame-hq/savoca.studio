"use client";

import Link from "next/link";
import { Eyebrow, Rule, SVInitial } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

/**
 * Inline banner — soft pre-rate-card CTA pointing prospects at the calculator
 * so they can run their own numbers before reading the price tiers.
 * Lives between Who and Services. Dark treatment matches the Close section's
 * editorial weight — full-bleed ink, signal-red italic, inverse CTA.
 */
export function CalculatorCTA() {
  return (
    <aside
      aria-label="Revenue calculator preview"
      className="relative px-6 md:px-10 lg:px-12 py-12 lg:py-16"
      style={{
        background: "var(--ink)",
        color: "var(--bone)",
      }}
    >
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 items-end">
        <Reveal className="col-span-12 lg:col-span-2 mb-4 lg:mb-0">
          <Eyebrow color="var(--steel-2)" dotColor="var(--signal)">
            § Calculator
          </Eyebrow>
        </Reveal>

        <Reveal delay={80} className="col-span-12 lg:col-span-7">
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              fontWeight: 400,
              color: "var(--bone)",
            }}
          >
            Want to know what you&apos;re losing before you read the prices?
            <br />
            <span style={{ fontStyle: "italic", color: "var(--signal)" }}>
              Run the math.
            </span>
          </p>
        </Reveal>

        <Reveal
          delay={160}
          className="col-span-12 lg:col-span-3 lg:text-right mt-4 lg:mt-0"
        >
          <Link
            href="/calculator"
            className="cta-arrow-host font-mono inline-flex items-center gap-2 transition-opacity hover:opacity-90"
            style={{
              background: "var(--bone)",
              color: "var(--ink)",
              padding: "14px 20px",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Open calculator <span className="cta-arrow">→</span>
          </Link>
        </Reveal>
      </div>

      <Rule color="rgba(245,242,236,0.25)" style={{ marginTop: 32 }} />

      <div className="mt-3 flex items-center gap-2">
        <SVInitial size={16} color="var(--money-2)" />
        <span
          className="font-mono"
          style={{
            fontSize: 10,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--steel-2)",
          }}
        >
          30-second estimate · no email required
        </span>
      </div>
    </aside>
  );
}
