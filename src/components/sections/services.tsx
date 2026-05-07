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
    price: "$349",
    unit: "one-time",
    cta: "Start audit →",
    bullets: ["Lead-capture audit", "Map of follow-up gaps"],
    featured: false,
    proof: null,
  },
  {
    n: "02",
    icon: "stack" as const,
    name: "The Stacker",
    pitch: "2-week build. Phone, CRM, calendar, follow-up wired with off-the-shelf tools.",
    price: "$997",
    unit: "one-time",
    cta: "Build with Stacker →",
    bullets: [
      "Everything in Catcher",
      "Phone → CRM → calendar wired",
      "Missed-call text-back",
      "After-hours capture",
    ],
    featured: true,
    proof: null,
  },
  {
    n: "03",
    icon: "compass" as const,
    name: "The Operator",
    pitch: "Custom-built system. When off-the-shelf tools don't fit your operating motion.",
    price: "$4,997",
    unit: "one-time",
    cta: "Talk through fit →",
    bullets: [
      "Vertical-specific data model",
      "Custom integrations + automations",
      "Live, owned by you, no vendor lock",
    ],
    featured: false,
    proof: {
      label: "Live example",
      href: "https://astroturf.dev",
      caption: "astroturf.dev — RevOps OS for synthetic turf",
    },
  },
  {
    n: "04",
    icon: "clipboard" as const,
    name: "The Partner",
    pitch: "Monthly retainer. Weekly review. On call for the hard calls.",
    price: "$2,495",
    unit: "per month",
    cta: "Talk through fit →",
    bullets: [
      "Weekly pipeline review",
      "On-call: tools, vendors, hires",
      "Monthly deep-dive + report",
    ],
    featured: false,
    proof: null,
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
          Four ways to stop
          <br />
          losing revenue.
        </h2>
        <Rule style={{ marginTop: 22 }} />
      </Reveal>

      <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {tiers.map((t, i) => {
          const featured = t.featured;
          const cardBg = featured ? "var(--ink)" : "var(--paper)";
          const cardFg = featured ? "var(--bone)" : "var(--ink)";
          return (
            <Reveal
              key={t.n}
              as="li"
              delay={i * 80}
              className={
                "glyph-host relative flex flex-col p-5 lg:p-[20px] " +
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
                  <Glyph name={t.icon} size={28} color={cardFg} />
                </span>
              </div>

              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(28px, 2.4vw, 34px)",
                  lineHeight: 1,
                  letterSpacing: "-0.035em",
                  marginTop: 24,
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

              {/* Proof link — only on tiers with a proof object */}
              {t.proof && (
                <a
                  href={t.proof.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono mt-3 inline-flex items-center gap-2 transition-colors hover:text-money-2"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: featured ? "var(--steel-2)" : "var(--money-2)",
                    fontWeight: 600,
                    paddingTop: 6,
                    borderTop:
                      "1px solid " +
                      (featured ? "rgba(245,242,236,0.15)" : "var(--rule)"),
                  }}
                >
                  <span>↗ {t.proof.label}</span>
                  <span
                    className="opacity-70"
                    style={{ fontWeight: 400, letterSpacing: "0.08em" }}
                  >
                    {t.proof.caption}
                  </span>
                </a>
              )}

              <div className="flex-1" />

              <div className="mt-5 flex items-baseline gap-2">
                <span
                  className="font-serif"
                  style={{
                    fontSize: "clamp(28px, 2.6vw, 34px)",
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
