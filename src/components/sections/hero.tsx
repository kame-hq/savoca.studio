"use client";

import Link from "next/link";
import { IndustryStrip, SVInitial } from "@/components/brand/v2";

const stats: [string, string][] = [
  ["1 in 4", "inbound calls never gets a callback"],
  ["21×", "better close rate when you reply in 5 minutes"],
  ["10+ hrs", "a week lost to manual admin and chasing"],
  ["Most", "owners can't name their single biggest leak"],
];

export function Hero() {
  return (
    <section
      className="relative grain"
      style={{ background: "var(--paper)", paddingTop: 84 }}
    >
      {/* Status row */}
      <div
        className="grid grid-cols-3 items-start md:items-center px-5 md:px-10 lg:px-12 py-3 md:py-3.5 gap-3 md:gap-4 font-mono"
        style={{
          fontSize: 10,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "var(--steel)",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div>2026 / Q2</div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span
            aria-hidden
            className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: "var(--money-2)" }}
          />
          <span>Now booking</span>
        </div>
        <div className="text-right leading-[1.5]">
          <span className="block md:inline">Program Manager</span>
          <span className="hidden md:inline"> · </span>
          <span className="block md:inline">Indeed</span>
        </div>
      </div>

      {/* Headline + stat block */}
      <div className="px-6 md:px-10 lg:px-12 pt-12 lg:pt-16 pb-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-12">
        {/* Left — display */}
        <div>
          <h1
            className="hero-rise hero-rise-1 font-serif text-ink"
            style={{
              fontSize: "clamp(56px, 11vw, 132px)",
              lineHeight: 0.86,
              letterSpacing: "-0.035em",
              fontWeight: 400,
            }}
          >
            No revenue
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
            className="hero-rise hero-rise-2 font-mono"
            style={{
              marginTop: 18,
              fontSize: 13,
              letterSpacing: "0.04em",
              lineHeight: 1.55,
              color: "var(--ink)",
              fontWeight: 600,
              maxWidth: 580,
            }}
          >
            Capture more demand. Respond faster. Deliver with less drag. Prove
            the return.
          </p>

          <p
            className="hero-rise hero-rise-2 font-sans"
            style={{
              marginTop: 16,
              fontSize: 17,
              lineHeight: 1.55,
              color: "var(--ink-2)",
              maxWidth: 560,
            }}
          >
            savoca.studio builds the operating layer between demand and
            delivery — the systems that move revenue from first contact to
            finished job. I find the leak, build the system, and help keep it
            running.
          </p>

          <div className="hero-rise hero-rise-3 flex flex-wrap gap-3 mt-8">
            <Link
              href="/book"
              className="cta-arrow-host font-mono transition-colors inline-flex items-center gap-2"
              style={{
                background: "var(--ink)",
                color: "var(--bone)",
                padding: "14px 20px",
                fontSize: 12,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Find the leak <span className="cta-arrow">→</span>
            </Link>
            <Link
              href="#services"
              className="font-mono transition-colors hover:bg-ink hover:text-bone"
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

        {/* Right — stat block */}
        <div
          className="hero-rise hero-rise-4 lg:border-l lg:pl-6 lg:pt-0 pt-10 border-t lg:border-t-0"
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
            The leak, in four places
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
            It&apos;s rarely the pitch. Revenue slips in the handoff between
            every step — capture, response, delivery, and the reporting that
            would have caught it.
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {stats.map(([k, v]) => (
              <div
                key={k}
                style={{ borderTop: "1px solid var(--rule)", paddingTop: 10 }}
              >
                <div
                  className="font-serif"
                  style={{
                    fontSize: 42,
                    lineHeight: 1,
                    color: "var(--money)",
                    letterSpacing: "-0.035em",
                    fontWeight: 400,
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
            ))}
          </div>
        </div>
      </div>

      {/* Industry strip — anchors the hero to the page */}
      <IndustryStrip color="var(--ink)" />
    </section>
  );
}
