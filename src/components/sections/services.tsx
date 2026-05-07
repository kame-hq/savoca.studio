"use client";

import { Eyebrow, Glyph, Rule } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";
import { tierCtas, type TierSlug } from "@/lib/cta-links";

type Tier = {
  slug: TierSlug;
  n: string;
  icon: "net" | "stack" | "compass" | "clipboard";
  name: string;
  pitch: string;
  price: string;
  unit: string;
  bullets: string[];
  dark: boolean;
  mostPicked: boolean;
  proof: { label: string; href: string; caption: string } | null;
};

const tiers: Tier[] = [
  {
    slug: "catcher",
    n: "01",
    icon: "net",
    name: "The Catcher",
    pitch: "1-week audit. A written map of every place leads die.",
    price: "$349",
    unit: "one-time",
    bullets: ["Lead-capture audit", "Map of follow-up gaps"],
    dark: false,
    mostPicked: false,
    proof: null,
  },
  {
    slug: "stacker",
    n: "02",
    icon: "stack",
    name: "The Stacker",
    pitch: "2-week build. Phone, CRM, calendar, follow-up wired with off-the-shelf tools.",
    price: "$997",
    unit: "one-time",
    bullets: [
      "Everything in Catcher",
      "Phone → CRM → calendar wired",
      "Missed-call text-back",
      "After-hours capture",
    ],
    dark: true,
    mostPicked: true,
    proof: null,
  },
  {
    slug: "operator",
    n: "03",
    icon: "compass",
    name: "The Operator",
    pitch: "Custom-built system. When off-the-shelf tools don't fit your operating motion.",
    price: "$4,997",
    unit: "one-time",
    bullets: [
      "Vertical-specific data model",
      "Custom integrations + automations",
      "Live, owned by you, no vendor lock",
    ],
    dark: true,
    mostPicked: false,
    proof: {
      label: "Live example",
      href: "https://astroturf.dev",
      caption: "astroturf.dev — RevOps OS for synthetic turf",
    },
  },
  {
    slug: "partner",
    n: "04",
    icon: "clipboard",
    name: "The Partner",
    pitch: "Monthly retainer. Weekly review. On call for the hard calls.",
    price: "$2,495",
    unit: "per month",
    bullets: [
      "Weekly pipeline review",
      "On-call: tools, vendors, hires",
      "Monthly deep-dive + report",
    ],
    dark: false,
    mostPicked: false,
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
          const dark = t.dark;
          const mostPicked = t.mostPicked;
          const cardBg = dark ? "var(--ink)" : "var(--paper)";
          const cardFg = dark ? "var(--bone)" : "var(--ink)";
          return (
            <Reveal
              key={t.n}
              as="li"
              delay={i * 80}
              className={
                "glyph-host relative flex flex-col p-5 lg:p-[20px] " +
                (dark ? "tier-featured" : "")
              }
              style={{
                border: "1px solid var(--rule)",
                background: cardBg,
                color: cardFg,
              }}
            >
              {mostPicked && (
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
                    color: dark ? "var(--steel-2)" : "var(--steel)",
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
                  color: dark ? "var(--bone-2)" : "var(--ink-2)",
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
                        (dark ? "rgba(245,242,236,0.15)" : "var(--rule)"),
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
                    color: dark ? "var(--steel-2)" : "var(--money-2)",
                    fontWeight: 600,
                    paddingTop: 6,
                    borderTop:
                      "1px solid " +
                      (dark ? "rgba(245,242,236,0.15)" : "var(--rule)"),
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
                    color: dark ? "var(--bone)" : "var(--money)",
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
                    color: dark ? "var(--steel-2)" : "var(--steel)",
                    fontWeight: 500,
                  }}
                >
                  {t.unit}
                </span>
              </div>

              {(() => {
                const ctas = tierCtas(t.slug, t.name, t.price);
                return (
                  <div className="mt-4 flex flex-col gap-2">
                    <a
                      href={ctas.primary.href}
                      className="cta-arrow-host font-mono inline-flex items-center justify-center gap-2 transition-colors"
                      style={{
                        padding: "12px 14px",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        background: dark ? "var(--money)" : "var(--ink)",
                        color: "var(--bone)",
                        fontWeight: 500,
                      }}
                    >
                      <span>{ctas.primary.label}</span>
                      <span className="cta-arrow">→</span>
                    </a>
                    <a
                      href={ctas.secondary.href}
                      className="font-mono inline-flex items-center justify-center gap-1 transition-opacity hover:opacity-70"
                      style={{
                        padding: "6px 8px",
                        fontSize: 10,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: dark ? "var(--steel-2)" : "var(--steel)",
                        fontWeight: 500,
                      }}
                    >
                      {ctas.secondary.label}
                    </a>
                  </div>
                );
              })()}
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
