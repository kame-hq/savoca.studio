"use client";

import Link from "next/link";
import { Eyebrow, Glyph, Rule, RuleThick } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

const rows = [
  {
    n: "01",
    slug: "medspa",
    icon: "drop" as const,
    name: "Medspas.",
    lines: [
      "Forms convert higher than calls.",
      "But no deposit. No follow-up.",
      "They book somewhere else.",
    ],
  },
  {
    n: "02",
    slug: "dental",
    icon: "tooth" as const,
    name: "Dental.",
    lines: [
      "Up to 40% of calls go unanswered.",
      "No callback. No recovery.",
      "That patient is gone.",
    ],
  },
  {
    n: "03",
    slug: "hvac",
    icon: "house" as const,
    name: "HVAC.",
    lines: [
      "Most demand hits after hours.",
      "You're closed when the phone rings.",
      "First to respond wins the job.",
    ],
  },
  {
    n: "04",
    slug: "plumbing-electrical",
    icon: "stack" as const,
    name: "Plumbing & Electrical.",
    lines: [
      "Voicemail box says full.",
      "85% of callers don't leave one.",
      "The next plumber gets the job.",
    ],
  },
  {
    n: "05",
    slug: "personal-injury-law",
    icon: "compass" as const,
    name: "Personal Injury Law.",
    lines: [
      "The wreck happened at 7pm.",
      "You picked up at 9am.",
      "They signed with Morgan & Morgan.",
    ],
  },
  {
    n: "06",
    slug: "veterinary",
    icon: "net" as const,
    name: "Veterinary.",
    lines: [
      "Half of bookings happen after hours.",
      "Your phone is closed. Corporate isn't.",
      "Independence is operational.",
    ],
  },
  {
    n: "07",
    slug: "personal-trainer",
    icon: "arrow" as const,
    name: "Personal Trainers.",
    lines: [
      "Empty slot. Same as no slot.",
      "DM sat 4 hours. They hired someone else.",
      "Pour more leads. Same leaky bucket.",
    ],
  },
  {
    n: "08",
    slug: "wedding-planner",
    icon: "drop" as const,
    name: "Wedding & Event Planners.",
    lines: [
      "40% of couples never hear back in 5 days.",
      "50% book the first reply.",
      "You lose on response time, not on craft.",
    ],
  },
  {
    n: "09",
    slug: "chiropractic-pt",
    icon: "stack" as const,
    name: "Chiropractic & PT.",
    lines: [
      "Retention plateaus at 40%.",
      "Top quartile hits 85%.",
      "Reactivation > acquisition.",
    ],
  },
  {
    n: "10",
    slug: "roofing",
    icon: "house" as const,
    name: "Roofing.",
    lines: [
      "Storm hits. 320 calls in 72 hours.",
      "60% miss rate at peak.",
      "78% book whoever picks up first.",
    ],
  },
  {
    n: "11",
    slug: "real-estate",
    icon: "clipboard" as const,
    name: "Real Estate Teams.",
    lines: [
      "Industry-average response: 15 hours.",
      "Best in class: 5 minutes.",
      "78% sign with the first agent.",
    ],
  },
  {
    n: "12",
    slug: "landscaping",
    icon: "net" as const,
    name: "Landscaping & Lawn Care.",
    lines: [
      "70% of demand in a 12-week window.",
      "Crew runs OR phone answers.",
      "Spring decides the year.",
    ],
  },
  {
    n: "13",
    slug: "moving",
    icon: "arrow" as const,
    name: "Moving Companies.",
    lines: [
      "Customers shop 3–5 movers.",
      "Book within 30 minutes.",
      "Whoever answers first wins 78%.",
    ],
  },
  {
    n: "14",
    slug: "insurance-agents",
    icon: "compass" as const,
    name: "Insurance Agencies.",
    lines: [
      "Quote 3–4 agencies simultaneously.",
      "78% bind with first responder.",
      "Industry-avg response: 47 minutes.",
    ],
  },
  {
    n: "15",
    slug: "pest-control",
    icon: "stack" as const,
    name: "Pest Control.",
    lines: [
      "Owners think they answer 97%.",
      "Reality: 66%.",
      "The owner IS the bottleneck.",
    ],
  },
  {
    n: "16",
    slug: "pool-service",
    icon: "drop" as const,
    name: "Pool Service.",
    lines: [
      "The missed call isn't $230 cleaning.",
      "It's a $1,500 pump replacement.",
      "Repair is where margin lives.",
    ],
  },
  {
    n: "17",
    slug: "mental-health",
    icon: "net" as const,
    name: "Mental Health & Therapy.",
    lines: [
      "11pm inquiry. 48-hour callback.",
      "Not a lost lead — someone who didn't get help.",
      "Continuity is the operating metric.",
    ],
  },
];

export function Who() {
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
          Revenue gets lost
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            wherever work breaks down.
          </span>
        </h2>

        <p
          className="font-sans mt-4 max-w-[62ch]"
          style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          A missed call, a dead follow-up, a scattered spreadsheet, a crew
          running on text messages. The vertical playbooks below map the
          capture &amp; convert side — where service businesses leak first.
          The work goes further: the CRM, the operations, the reporting.
        </p>

        <Rule style={{ marginTop: 22 }} />
      </Reveal>

      <ul className="mt-6">
        {rows.map((r, i) => (
          <Reveal
            key={r.n}
            delay={i * 40}
            as="li"
            className="who-row glyph-host relative grid items-center py-5 lg:py-6 grid-cols-[42px_42px_1fr] md:grid-cols-[64px_56px_1fr_2fr_auto] gap-5"
            style={{ borderTop: i === 0 ? "0" : "1px solid var(--rule)" }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              No. {r.n}
            </div>
            <span className="glyph-svg">
              <Glyph name={r.icon} size={42} color="var(--money)" />
            </span>
            <h3
              className="font-serif col-span-3 md:col-span-1"
              style={{
                fontSize: "clamp(24px, 2.6vw, 32px)",
                lineHeight: 1.05,
                letterSpacing: "-0.025em",
                fontWeight: 400,
                color: "var(--ink)",
              }}
            >
              {r.name}
            </h3>
            <div
              className="font-sans col-span-3 md:col-span-1 -mt-2 md:mt-0"
              style={{ fontSize: 14, lineHeight: 1.55, color: "var(--ink-2)" }}
            >
              {r.lines.map((l, k) => (
                <div
                  key={k}
                  style={{ opacity: k === r.lines.length - 1 ? 1 : 0.85 }}
                >
                  {l}
                </div>
              ))}
            </div>
            <Link
              href={`/resources/${r.slug}`}
              className="hidden md:inline-flex items-center gap-2 font-mono whitespace-nowrap"
              style={{
                fontSize: 10,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--money)",
              }}
            >
              Playbook
              <span aria-hidden>→</span>
            </Link>
          </Reveal>
        ))}
      </ul>

      <RuleThick style={{ marginTop: 6 }} />

      <Reveal delay={120}>
        <div className="mt-8 flex flex-wrap items-baseline justify-between gap-4">
          <span
            className="font-mono"
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--steel)",
            }}
          >
            Don&apos;t see your vertical? Email hello@savoca.studio.
          </span>
          <Link
            href="/resources"
            className="cta-arrow-host font-mono inline-flex items-center gap-2"
            style={{
              background: "var(--ink)",
              color: "var(--bone)",
              padding: "12px 18px",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            All 17 playbooks <span className="cta-arrow">→</span>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
