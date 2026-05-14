"use client";

import { Eyebrow, Rule } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

const triplet: [string, string][] = [
  ["Find.", "the leak"],
  ["Build.", "the system"],
  ["Run.", "what holds"],
];

export function About() {
  return (
    <section
      id="about"
      className="grain px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--bone-2)" }}
    >
      <Reveal>
        <Eyebrow>Four · About</Eyebrow>
        <h2
          className="font-serif mt-2 max-w-[900px]"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          I build the operating layer
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            between demand and delivery.
          </span>
        </h2>
        <Rule style={{ marginTop: 22 }} />
      </Reveal>

      <Reveal delay={120} className="mt-8 max-w-[680px]">
        <p
          className="font-sans"
          style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}
        >
          Most service businesses don&apos;t have a demand problem. They have an
          operating problem — leads go unanswered, quotes stall, follow-up
          disappears, and the owner can&apos;t see where revenue leaked until
          the month is already over.
        </p>
        <p
          className="font-sans mt-4"
          style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          I build the systems that move revenue through the business: capture,
          response, scheduling, follow-up, reporting, retention. The tools
          usually already exist. The problem is the handoff between them.
        </p>
        <p
          className="font-mono mt-5"
          style={{
            fontSize: 11,
            letterSpacing: "0.04em",
            lineHeight: 1.6,
            color: "var(--steel)",
          }}
        >
          Product commercialization PM at Indeed. Previously Meta and Whole
          Foods Market.
        </p>
      </Reveal>

      {/* Find / Build / Run strip */}
      <Reveal
        delay={200}
        className="mt-8 grid grid-cols-3 max-w-[680px]"
        style={{ border: "1px solid var(--rule)" }}
      >
        {triplet.map(([word, caption], i) => (
          <div
            key={word}
            className="p-4"
            style={{
              borderRight: i < 2 ? "1px solid var(--rule)" : "0",
              background: i === 1 ? "var(--paper)" : "transparent",
            }}
          >
            <div
              className="font-serif"
              style={{
                fontSize: "clamp(22px, 3vw, 30px)",
                color: "var(--money)",
                letterSpacing: "-0.035em",
                lineHeight: 1,
                fontWeight: 400,
              }}
            >
              {word}
            </div>
            <div
              className="font-mono mt-2"
              style={{
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              {caption}
            </div>
          </div>
        ))}
      </Reveal>

      <Reveal
        delay={300}
        as="p"
        className="font-serif italic mt-6"
        style={{ fontSize: 18, color: "var(--ink)", fontWeight: 400 }}
      >
        No agency. No handoffs.{" "}
        <span style={{ color: "var(--money)" }}>You work with me.</span>
      </Reveal>
    </section>
  );
}
