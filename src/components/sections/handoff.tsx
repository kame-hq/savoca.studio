"use client";

import Link from "next/link";
import { Eyebrow, Glyph, Rule } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

const breakdowns = [
  "Calls get missed.",
  "Forms sit.",
  "Quotes go cold.",
  "Work gets tracked in texts.",
  "Reports get built after the damage is done.",
];

const markets: {
  icon: "house" | "compass" | "drop";
  name: string;
  who: string;
  leaks: string;
  journey: string;
}[] = [
  {
    icon: "house",
    name: "Home Services",
    who: "HVAC, plumbing, roofing, electrical, landscaping, pool, pest control, moving, cleaning.",
    leaks: "Missed calls, after-hours demand, slow quotes, no follow-up, no job-status visibility, weak review capture.",
    journey: "Capture → quote → schedule → run → collect → review → repeat.",
  },
  {
    icon: "compass",
    name: "Professional Services",
    who: "Law firms, accounting, insurance, consultants, real estate teams, agencies, recruiters.",
    leaks: "Intake sits, leads not qualified, no clear pipeline, proposals stall, no referral loop, manual reporting.",
    journey: "Intake → qualify → consult → proposal → close → onboard → report → retain.",
  },
  {
    icon: "drop",
    name: "Health & Local",
    who: "Dental, medspas, chiropractic, PT, veterinary, therapy, gyms, trainers, salons.",
    leaks: "Missed calls, no-shows, weak reactivation, poor booking flow, no deposits, no retention system.",
    journey: "Inquiry → book → confirm → show → pay → rebook → reactivate.",
  },
];

export function Handoff() {
  return (
    <section
      id="who"
      className="px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--paper)" }}
    >
      <Reveal>
        <Eyebrow>One · Where it leaks</Eyebrow>
        <h2
          className="font-serif mt-2"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          The handoff is where
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            revenue leaks.
          </span>
        </h2>

        <p
          className="font-sans mt-4 max-w-[60ch]"
          style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          Most service businesses do not lose because the service is bad. They
          lose in the handoff — between the call, the quote, the booking, the
          job, the payment, and the follow-up.
        </p>
      </Reveal>

      {/* The breakdown beats — operator voice, four-beat rhythm */}
      <Reveal delay={80}>
        <ul
          className="mt-7 flex flex-col"
          style={{ borderTop: "1px solid var(--rule)" }}
        >
          {breakdowns.map((b) => (
            <li
              key={b}
              className="font-serif"
              style={{
                fontSize: "clamp(20px, 2.4vw, 30px)",
                lineHeight: 1.25,
                letterSpacing: "-0.02em",
                color: "var(--ink)",
                padding: "10px 0",
                borderBottom: "1px solid var(--rule)",
              }}
            >
              {b}
            </li>
          ))}
        </ul>
        <p
          className="font-sans mt-4 max-w-[58ch]"
          style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          I build the websites, CRMs, automations, dashboards, and internal
          tools that keep those pieces working as one system — from first call
          to final report.
        </p>
      </Reveal>

      <Rule style={{ marginTop: 28 }} />

      {/* Three markets — same handoff problem, different leak points */}
      <Reveal delay={120}>
        <h3
          className="font-mono mt-7"
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--steel)",
            fontWeight: 500,
          }}
        >
          Built for service businesses
        </h3>
      </Reveal>

      <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {markets.map((m, i) => (
          <Reveal
            key={m.name}
            as="li"
            delay={140 + i * 80}
            className="glyph-host relative flex flex-col p-5 lg:p-[20px]"
            style={{
              border: "1px solid var(--rule)",
              background: "var(--paper)",
            }}
          >
            <div className="flex justify-between items-start">
              <h4
                className="font-serif"
                style={{
                  fontSize: "clamp(22px, 2vw, 26px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  fontWeight: 400,
                  color: "var(--ink)",
                }}
              >
                {m.name}
              </h4>
              <span className="glyph-svg">
                <Glyph name={m.icon} size={26} color="var(--ink)" />
              </span>
            </div>

            <p
              className="font-sans mt-2.5"
              style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-2)" }}
            >
              {m.who}
            </p>

            <div
              className="mt-3.5"
              style={{ paddingTop: 10, borderTop: "1px solid var(--rule)" }}
            >
              <span
                className="font-mono"
                style={{
                  fontSize: 9,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--steel)",
                  fontWeight: 500,
                }}
              >
                Where it leaks
              </span>
              <p
                className="font-sans mt-1"
                style={{ fontSize: 12.5, lineHeight: 1.5, color: "var(--ink-2)" }}
              >
                {m.leaks}
              </p>
            </div>

            <div className="flex-1" />

            <p
              className="font-mono mt-4"
              style={{
                fontSize: 10.5,
                letterSpacing: "0.04em",
                lineHeight: 1.6,
                color: "var(--money-2)",
                paddingTop: 10,
                borderTop: "1px solid var(--rule)",
                fontWeight: 600,
              }}
            >
              {m.journey}
            </p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={360}>
        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--steel)",
            }}
          >
            Vertical-specific playbooks — free, field-tested.
          </span>
          <Link
            href="/resources"
            className="cta-arrow-host font-mono inline-flex items-center gap-2"
            style={{
              background: "var(--ink)",
              color: "var(--bone)",
              padding: "12px 18px",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            See the playbooks <span className="cta-arrow">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
