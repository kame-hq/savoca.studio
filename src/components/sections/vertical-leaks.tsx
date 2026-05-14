"use client";

import Link from "next/link";
import { Glyph } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

type Row = {
  n: string;
  slug: string;
  icon:
    | "drop"
    | "tooth"
    | "house"
    | "stack"
    | "compass"
    | "net"
    | "arrow"
    | "clipboard";
  name: string;
  lines: string[];
};

const rows: Row[] = [
  { n: "01", slug: "medspa", icon: "drop", name: "Medspas.", lines: ["Forms convert higher than calls.", "But no deposit. No follow-up.", "They book somewhere else."] },
  { n: "02", slug: "dental", icon: "tooth", name: "Dental.", lines: ["Up to 40% of calls go unanswered.", "No callback. No recovery.", "That patient is gone."] },
  { n: "03", slug: "hvac", icon: "house", name: "HVAC.", lines: ["Most demand hits after hours.", "You're closed when the phone rings.", "First to respond wins the job."] },
  { n: "04", slug: "plumbing-electrical", icon: "stack", name: "Plumbing & Electrical.", lines: ["Voicemail box says full.", "85% of callers don't leave one.", "The next plumber gets the job."] },
  { n: "05", slug: "personal-injury-law", icon: "compass", name: "Personal Injury Law.", lines: ["The wreck happened at 7pm.", "You picked up at 9am.", "They signed with Morgan & Morgan."] },
  { n: "06", slug: "veterinary", icon: "net", name: "Veterinary.", lines: ["Half of bookings happen after hours.", "Your phone is closed. Corporate isn't.", "Independence is operational."] },
  { n: "07", slug: "personal-trainer", icon: "arrow", name: "Personal Trainers.", lines: ["Empty slot. Same as no slot.", "DM sat 4 hours. They hired someone else.", "Pour more leads. Same leaky bucket."] },
  { n: "08", slug: "wedding-planner", icon: "drop", name: "Wedding & Event Planners.", lines: ["40% of couples never hear back in 5 days.", "50% book the first reply.", "You lose on response time, not on craft."] },
  { n: "09", slug: "chiropractic-pt", icon: "stack", name: "Chiropractic & PT.", lines: ["Retention plateaus at 40%.", "Top quartile hits 85%.", "Reactivation > acquisition."] },
  { n: "10", slug: "roofing", icon: "house", name: "Roofing.", lines: ["Storm hits. 320 calls in 72 hours.", "60% miss rate at peak.", "78% book whoever picks up first."] },
  { n: "11", slug: "real-estate", icon: "clipboard", name: "Real Estate Teams.", lines: ["Industry-average response: 15 hours.", "Best in class: 5 minutes.", "78% sign with the first agent."] },
  { n: "12", slug: "landscaping", icon: "net", name: "Landscaping & Lawn Care.", lines: ["70% of demand in a 12-week window.", "Crew runs OR phone answers.", "Spring decides the year."] },
  { n: "13", slug: "moving", icon: "arrow", name: "Moving Companies.", lines: ["Customers shop 3–5 movers.", "Book within 30 minutes.", "Whoever answers first wins 78%."] },
  { n: "14", slug: "insurance-agents", icon: "compass", name: "Insurance Agencies.", lines: ["Quote 3–4 agencies simultaneously.", "78% bind with first responder.", "Industry-avg response: 47 minutes."] },
  { n: "15", slug: "pest-control", icon: "stack", name: "Pest Control.", lines: ["Owners think they answer 97%.", "Reality: 66%.", "The owner IS the bottleneck."] },
  { n: "16", slug: "pool-service", icon: "drop", name: "Pool Service.", lines: ["The missed call isn't $230 cleaning.", "It's a $1,500 pump replacement.", "Repair is where margin lives."] },
  { n: "17", slug: "mental-health", icon: "net", name: "Mental Health & Therapy.", lines: ["11pm inquiry. 48-hour callback.", "Not a lost lead — someone who didn't get help.", "Continuity is the operating metric."] },
];

export function VerticalLeaks() {
  return (
    <section className="mt-16 lg:mt-24">
      <Reveal>
        <span
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--steel)",
            fontWeight: 500,
          }}
        >
          Where revenue leaks — by vertical
        </span>
        <p
          className="font-sans mt-3 max-w-[62ch]"
          style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          Same handoff problem, different leak points. Each playbook above maps
          one vertical&apos;s capture &amp; convert side — here&apos;s the
          short version of where the money goes.
        </p>
      </Reveal>

      <ul className="mt-6 border-t border-rule">
        {rows.map((r, i) => (
          <Reveal
            key={r.n}
            delay={i * 30}
            as="li"
            className="glyph-host relative grid items-center py-5 lg:py-6 grid-cols-[42px_42px_1fr] md:grid-cols-[64px_56px_1fr_2fr_auto] gap-5"
            style={{ borderBottom: "1px solid var(--rule)" }}
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

      <Reveal delay={120}>
        <span
          className="font-mono inline-block mt-6"
          style={{
            fontSize: 11,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--steel)",
          }}
        >
          Don&apos;t see your vertical? Email hello@savoca.studio.
        </span>
      </Reveal>
    </section>
  );
}
