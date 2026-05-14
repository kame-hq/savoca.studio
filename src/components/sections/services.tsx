"use client";

import { Eyebrow, Glyph, Rule } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";
import { tierCtas, type TierSlug } from "@/lib/cta-links";

type Band = {
  slug: TierSlug;
  n: string;
  icon: "net" | "stack" | "compass" | "clipboard";
  name: string;
  forWho: string;
  retainer: { lo: string; hi: string };
  deposit: string;
  buildTime: string;
  bullets: string[];
  dark: boolean;
  mostPicked: boolean;
  proof: { href: string; caption: string }[];
};

const bands: Band[] = [
  {
    slug: "solo",
    n: "01",
    icon: "net",
    name: "Solo",
    forWho: "Just you — owner-operator, one-person shop, solo practice.",
    retainer: { lo: "297", hi: "697" },
    deposit: "297",
    buildTime: "live in ~1 week",
    bullets: [
      "Site + booking + lead-capture, built",
      "Automations kept live",
      "Monthly check-in, minor tweaks",
    ],
    dark: false,
    mostPicked: false,
    proof: [
      { href: "https://krazystrong.app", caption: "krazystrong.app" },
    ],
  },
  {
    slug: "studio",
    n: "02",
    icon: "stack",
    name: "Studio",
    forWho: "An established business with a team and real inbound volume.",
    retainer: { lo: "997", hi: "2,297" },
    deposit: "597",
    buildTime: "live in ~2 weeks",
    bullets: [
      "Phone + CRM + calendar + follow-up, wired",
      "Weekly pipeline review + monthly call",
      "Ongoing automation tuning, new flows",
      "On-call for tools + vendors",
    ],
    dark: true,
    mostPicked: true,
    proof: [],
  },
  {
    slug: "operation",
    n: "03",
    icon: "compass",
    name: "Operation",
    forWho: "Multi-location or high-volume — a real operations budget.",
    retainer: { lo: "2,297", hi: "4,995" },
    deposit: "997",
    buildTime: "live in ~2-4 weeks",
    bullets: [
      "Custom-built system, fit to your industry",
      "Weekly review + monthly deep-dive",
      "New builds + integrations as you grow — included",
      "Priority on-call",
    ],
    dark: false,
    mostPicked: false,
    proof: [
      { href: "https://astroturf.dev", caption: "astroturf.dev" },
      { href: "https://morningcut.golf", caption: "morningcut.golf" },
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--bone)" }}
    >
      <Reveal>
        <Eyebrow>Two · The Partner</Eyebrow>
        <h2
          className="font-serif mt-2"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          I build it.
          <br />
          I run it.
        </h2>
        <p
          className="font-sans mt-4 max-w-[58ch]"
          style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          One partner, priced to your scale — and we improve it together over
          time. The monthly retainer covers both the build and the run; the
          range lands on your scope during the discovery call. A kickoff
          deposit, sized to your band and credited to month one, just says
          let&apos;s go.
        </p>
        <Rule style={{ marginTop: 22 }} />
      </Reveal>

      <ul className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {bands.map((t, i) => {
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
                  Band {t.n}
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
                The Partner
                <span
                  style={{
                    fontStyle: "italic",
                    color: dark ? "var(--bone-2)" : "var(--money)",
                  }}
                >
                  {" "}
                  / {t.name}
                </span>
              </h3>

              <p
                className="font-sans mt-2.5"
                style={{
                  fontSize: 13,
                  lineHeight: 1.5,
                  color: dark ? "var(--bone-2)" : "var(--ink-2)",
                }}
              >
                {t.forWho}
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

              {t.proof.length > 0 && (
                <div
                  className="mt-3 flex flex-col gap-1.5"
                  style={{
                    paddingTop: 8,
                    borderTop:
                      "1px solid " +
                      (dark ? "rgba(245,242,236,0.15)" : "var(--rule)"),
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: dark ? "var(--steel-2)" : "var(--steel)",
                      fontWeight: 500,
                    }}
                  >
                    {t.proof.length > 1 ? "Live examples" : "Live example"}
                  </span>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    {t.proof.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono inline-flex items-center gap-1 transition-colors hover:text-money-2"
                        style={{
                          fontSize: 11,
                          letterSpacing: "0.04em",
                          color: dark ? "var(--bone-2)" : "var(--money-2)",
                          fontWeight: 600,
                        }}
                      >
                        ↗ {p.caption}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex-1" />

              {/* Pricing — retainer headline + explicit terms, stated plainly */}
              <div
                className="mt-5"
                style={{
                  paddingTop: 14,
                  borderTop:
                    "1px solid " +
                    (dark ? "rgba(245,242,236,0.15)" : "var(--rule)"),
                }}
              >
                {/* Retainer — monthly range, unmistakably ongoing */}
                <span className="flex items-baseline gap-1.5 flex-wrap">
                  <span
                    className="font-serif"
                    style={{
                      fontSize: "clamp(30px, 2.8vw, 40px)",
                      lineHeight: 1,
                      letterSpacing: "-0.035em",
                      color: dark ? "var(--bone)" : "var(--money)",
                      fontWeight: 400,
                    }}
                  >
                    ${t.retainer.lo}–${t.retainer.hi}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 12,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: dark ? "var(--bone-2)" : "var(--ink-2)",
                      fontWeight: 600,
                    }}
                  >
                    / month
                  </span>
                </span>
                <p
                  className="font-sans mt-0.5"
                  style={{
                    fontSize: 12,
                    lineHeight: 1.4,
                    color: dark ? "var(--bone-2)" : "var(--ink-2)",
                  }}
                >
                  Ongoing retainer — covers the build and the run.
                </p>

                {/* Terms — plain, readable, not fine print */}
                <ul
                  className="font-sans mt-3 list-none p-0"
                  style={{ fontSize: 12, lineHeight: 1.6 }}
                >
                  {[
                    `$${t.deposit} to start — credited to your first month`,
                    "3-month minimum, then month-to-month",
                    t.buildTime.charAt(0).toUpperCase() + t.buildTime.slice(1),
                  ].map((line) => (
                    <li
                      key={line}
                      className="flex gap-2"
                      style={{ color: dark ? "var(--bone-2)" : "var(--ink-2)" }}
                    >
                      <span style={{ color: dark ? "var(--steel-2)" : "var(--money)" }}>
                        ·
                      </span>
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(() => {
                const ctas = tierCtas(
                  t.slug,
                  `The Partner / ${t.name}`,
                  `$${t.retainer.lo}–$${t.retainer.hi}/mo`
                );
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

      <Reveal>
        <p
          className="font-mono mt-5"
          style={{
            fontSize: 11,
            letterSpacing: "0.04em",
            color: "var(--steel)",
            lineHeight: 1.6,
          }}
        >
          The retainer covers the build and the run — a monthly range per band,
          set on the discovery call. Each band&apos;s kickoff deposit
          ($297–$997) is credited to month one. 3-month minimum, then
          month-to-month.
        </p>
      </Reveal>
    </section>
  );
}
