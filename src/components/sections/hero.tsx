"use client";

import Link from "next/link";
import { IndustryStrip, SVInitial } from "@/components/brand/v2";
import { NumberTick } from "@/components/brand/v3";

const stats: [string, string][] = [
  ["21×", "more likely to convert inside 5 min"],
  ["40%", "of dental calls go unanswered"],
  ["1st", "company to respond wins the job"],
];

export function Hero() {
  return (
    <section
      className="relative grain"
      style={{ background: "var(--paper)", paddingTop: 84 }}
    >
      {/* Page-number tick — editorial-spread metaphor (memorable beat #1) */}
      <NumberTick
        n="001"
        className="absolute"
        style={{ top: 90, left: 24, color: "var(--steel)" }}
      />

      {/* Status row */}
      <div
        className="grid grid-cols-3 items-center px-6 md:px-10 lg:px-12 py-3.5 font-mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--steel)",
          borderBottom: "1px solid var(--rule)",
          fontWeight: 500,
        }}
      >
        <div>2026 / Q2</div>
        <div className="flex items-center justify-center gap-2">
          <span
            aria-hidden
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--money-2)" }}
          />
          Now booking
        </div>
        <div className="text-right">Program Manager · Indeed</div>
      </div>

      {/* MOBILE stat tape — above-the-fold, before headline. Desktop hides this. */}
      <div className="lg:hidden grid grid-cols-3 px-6 md:px-10 mt-6">
        {stats.map(([k, v], i) => (
          <div
            key={k}
            className="px-2"
            style={{
              borderRight: i < 2 ? "1px solid var(--rule)" : "0",
            }}
          >
            <div
              className="font-serif"
              style={{
                fontSize: "clamp(28px, 8vw, 40px)",
                lineHeight: 1,
                color: "var(--money)",
                letterSpacing: "-0.035em",
                fontWeight: 400,
              }}
            >
              {k}
            </div>
            <div
              className="font-mono mt-1.5"
              style={{
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--steel)",
                lineHeight: 1.3,
                fontWeight: 500,
              }}
            >
              {v.split(" ").slice(0, 4).join(" ")}
            </div>
          </div>
        ))}
      </div>

      {/* Headline + stat block (desktop) */}
      <div className="px-6 md:px-10 lg:px-12 pt-10 lg:pt-16 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12">
        <div>
          <h1
            className="font-serif text-ink"
            style={{
              fontSize: "clamp(56px, 11vw, 132px)",
              lineHeight: 0.86,
              letterSpacing: "-0.035em",
              fontWeight: 400,
              fontVariationSettings: '"opsz" 144',
            }}
          >
            <span className="relative inline-block">
              <span
                style={{
                  fontSize: "1.12em",
                  letterSpacing: "-0.04em",
                  marginRight: "0.02em",
                }}
              >
                N
              </span>
              o revenue
              {/* Register tick — printer's mark beneath the drop cap. lg only. */}
              <span
                aria-hidden
                className="hidden lg:block absolute"
                style={{
                  left: 0,
                  bottom: "-6px",
                  width: "0.65em",
                  height: 1.5,
                  background: "var(--money-2)",
                }}
              />
            </span>
            <br />
            <span style={{ fontStyle: "italic" }}>left behind.</span>
            <SVInitial
              size={36}
              color="var(--money-2)"
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                verticalAlign: "super",
                marginLeft: 8,
                fontStyle: "normal",
                fontWeight: 600,
              }}
            />
          </h1>

          <p
            className="font-sans"
            style={{
              marginTop: 22,
              fontSize: 17,
              lineHeight: 1.5,
              color: "var(--ink-2)",
              maxWidth: 540,
            }}
          >
            RevOps for service businesses that run on calls, bookings, and
            follow-up. Built by an enterprise PM who got tired of watching
            shops, clinics, and firms lose money to tools they already pay for.
          </p>

          <div className="flex flex-wrap gap-3 mt-7">
            <Link
              href="#contact"
              className="cta-fill font-mono"
              style={{
                background: "var(--ink)",
                color: "var(--bone)",
                padding: "14px 20px",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Book a call →
            </Link>
            <Link
              href="#services"
              className="cta-fill font-mono"
              style={{
                border: "1.5px solid var(--ink)",
                color: "var(--ink)",
                padding: "14px 20px",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              See pricing
            </Link>
          </div>
        </div>

        {/* Right — stat block (desktop only — mobile uses tape above) */}
        <div
          className="hidden lg:block lg:border-l lg:pl-6"
          style={{ borderColor: "var(--rule)" }}
        >
          <div
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--steel)",
              fontWeight: 500,
            }}
          >
            Why speed wins
          </div>
          <p
            className="font-sans"
            style={{
              fontSize: 13,
              color: "var(--ink-2)",
              marginTop: 6,
              lineHeight: 1.45,
              maxWidth: 320,
            }}
          >
            Most service businesses lose deals at the handoff — not the pitch.
            The numbers below are what the data says about that gap.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {stats.map(([k, v]) => (
              <div
                key={k}
                className="flex items-baseline gap-3"
                style={{ paddingTop: 4 }}
              >
                {/* Money-green tick prefix replaces the top border */}
                <span
                  aria-hidden
                  className="shrink-0 mt-3"
                  style={{
                    width: 10,
                    height: 1,
                    background: "var(--money)",
                    display: "inline-block",
                  }}
                />
                <div className="flex-1">
                  <div
                    className="font-serif"
                    style={{
                      fontSize: 56,
                      lineHeight: 1,
                      color: "var(--money)",
                      letterSpacing: "-0.035em",
                      fontWeight: 400,
                      fontVariationSettings: '"opsz" 144',
                    }}
                  >
                    {k}
                  </div>
                  <div
                    className="font-sans"
                    style={{
                      fontSize: 12,
                      color: "var(--ink-2)",
                      marginTop: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    {v}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <IndustryStrip color="var(--ink)" />
    </section>
  );
}
