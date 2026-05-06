"use client";

import Link from "next/link";
import { Eyebrow, Glyph, Rule } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

const tiers = [
  {
    n: "01",
    icon: "net" as const,
    name: "The Catcher",
    pitch: "1-week audit. A written map of every place leads die.",
    price: "$249",
    unit: "one-time",
    cta: "Start audit →",
    bullets: ["Lead-capture audit", "Map of follow-up gaps"],
    featured: false,
  },
  {
    n: "02",
    icon: "stack" as const,
    name: "The Stacker",
    pitch: "2-week build. Phone, CRM, calendar, follow-up wired.",
    price: "$999",
    unit: "one-time",
    cta: "Build with Stacker →",
    bullets: [
      "Everything in Catcher",
      "Phone → CRM → calendar wired",
      "Missed-call text-back",
      "After-hours capture",
    ],
    featured: true,
  },
  {
    n: "03",
    icon: "compass" as const,
    name: "The Operator",
    pitch: "Monthly retainer. Weekly review. On call for the hard calls.",
    price: "$2,995",
    unit: "per month",
    cta: "Talk through fit →",
    bullets: [
      "Everything in Stacker",
      "Weekly pipeline review",
      "On-call: tools, vendors, hires",
    ],
    featured: false,
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--paper)" }}
    >
      <Reveal>
        <Eyebrow>Two · Services</Eyebrow>
        <h2
          className="font-serif mt-2"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          Three ways to stop
          <br />
          losing revenue.
        </h2>
        <Rule style={{ marginTop: 22 }} />
      </Reveal>

      <ul className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-3.5">
        {tiers.map((t, i) => {
          const featured = t.featured;
          const cardBg = featured ? "var(--ink)" : "var(--paper)";
          const cardFg = featured ? "var(--bone)" : "var(--ink)";
          return (
            <Reveal
              key={t.n}
              as="li"
              delay={i * 100}
              className={
                "glyph-host relative flex flex-col p-5 lg:p-[22px] " +
                (featured ? "tier-featured" : "")
              }
              style={{
                border: "1px solid var(--rule)",
                background: cardBg,
                color: cardFg,
              }}
            >
              {featured && (
                <span
                  className="font-mono absolute"
                  style={{
                    top: -10,
                    right: 14,
                    background: "var(--money)",
                    color: "var(--bone)",
                    padding: "3px 8px",
                    fontSize: 9,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Most picked
                </span>
              )}

              <div className="flex justify-between items-start">
                <span
                  className="font-mono"
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: featured ? "var(--steel-2)" : "var(--steel)",
                    fontWeight: 500,
                  }}
                >
                  No. {t.n}
                </span>
                <span className="glyph-svg">
                  <Glyph name={t.icon} size={32} color={cardFg} />
                </span>
              </div>

              <h3
                className="font-serif"
                style={{
                  fontSize: 38,
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  marginTop: 26,
                  fontWeight: 400,
                }}
              >
                {t.name}
              </h3>

              <p
                className="font-sans mt-2.5"
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: featured ? "var(--bone-2)" : "var(--ink-2)",
                }}
              >
                {t.pitch}
              </p>

              <ul className="font-sans mt-3.5 list-none p-0 space-y-0">
                {t.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      borderTop:
                        "1px solid " +
                        (featured ? "rgba(245,242,236,0.15)" : "var(--rule)"),
                      padding: "5px 0",
                      fontSize: 12,
                      lineHeight: 1.7,
                      opacity: 0.92,
                    }}
                  >
                    · {b}
                  </li>
                ))}
              </ul>

              <div className="flex-1" />

              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className="font-serif"
                  style={{
                    fontSize: 36,
                    lineHeight: 1,
                    letterSpacing: "-0.035em",
                    color: featured ? "var(--bone)" : "var(--money)",
                    fontWeight: 400,
                  }}
                >
                  {t.price}
                </span>
                <span
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: featured ? "var(--steel-2)" : "var(--steel)",
                    fontWeight: 500,
                  }}
                >
                  {t.unit}
                </span>
              </div>

              <Link
                href="#contact"
                className="cta-arrow-host font-mono mt-4 inline-flex items-center justify-center gap-2 transition-colors"
                style={{
                  padding: "12px 14px",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  background: featured ? "var(--money)" : "var(--ink)",
                  color: "var(--bone)",
                  fontWeight: 500,
                }}
              >
                <span>{t.cta.replace(" →", "")}</span>
                <span className="cta-arrow">→</span>
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
