"use client";

import { Eyebrow, Rule } from "@/components/brand/v2";
import { Reveal } from "@/components/motion/reveal";

/**
 * The Revenue Leak Map — the signature visual artifact.
 * Editorial systems diagram: the six handoffs revenue survives between
 * demand and delivery, with the leak marked at each one. Operational
 * editorial — evidence of how the work is thought about, not decoration.
 */

const flow: { label: string; desc: string; leak: string | null }[] = [
  {
    label: "Demand",
    desc: "The ad, the referral, the search, the DM.",
    leak: null,
  },
  {
    label: "Capture",
    desc: "The call, the form, the inbound message.",
    leak: "Goes unanswered — after-hours, no callback, no text-back.",
  },
  {
    label: "Respond",
    desc: "First reply. Qualification.",
    leak: "The reply lands hours late. Speed-to-lead collapses.",
  },
  {
    label: "Convert",
    desc: "The quote, the booking, the deposit.",
    leak: "The quote goes cold. No reminder, no follow-up sequence.",
  },
  {
    label: "Deliver",
    desc: "The job runs.",
    leak: "Tracked in text threads. No status, no clean handoff.",
  },
  {
    label: "Retain",
    desc: "Review, rebook, reactivate.",
    leak: "Never asked. No review request, no reactivation.",
  },
];

export function LeakMap() {
  return (
    <section
      className="px-6 md:px-10 lg:px-12 py-20 lg:py-28"
      style={{ background: "var(--bone)" }}
    >
      <Reveal>
        <Eyebrow>The Revenue Leak Map</Eyebrow>
        <h2
          className="font-serif mt-2"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          Demand to delivery —
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            and where it leaks.
          </span>
        </h2>
        <p
          className="font-sans mt-4 max-w-[60ch]"
          style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          Revenue takes the same path through every service business — six
          handoffs between the lead and the paid, finished job. The red marks
          are where it usually doesn&apos;t make it.
        </p>
        <Rule style={{ marginTop: 22 }} />
      </Reveal>

      <ol className="mt-9 max-w-[1000px]">
        {flow.map((step, i) => {
          const isLast = i === flow.length - 1;
          const dotColor = step.leak ? "var(--signal)" : "var(--money)";
          return (
            <Reveal
              key={step.label}
              as="li"
              delay={i * 70}
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-x-10 gap-y-2"
            >
              {/* Node column — carries the connecting spine */}
              <div
                className="relative pl-7 pb-9"
                style={{
                  borderLeft: isLast
                    ? "1px solid transparent"
                    : "1px solid var(--rule)",
                }}
              >
                <span
                  aria-hidden
                  className="absolute"
                  style={{
                    left: -5,
                    top: 3,
                    width: 9,
                    height: 9,
                    borderRadius: 9999,
                    background: dotColor,
                  }}
                />
                <div
                  className="font-mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--steel)",
                    fontWeight: 500,
                  }}
                >
                  {`0${i + 1}`}
                </div>
                <h3
                  className="font-serif mt-1"
                  style={{
                    fontSize: "clamp(24px, 2.4vw, 32px)",
                    lineHeight: 1,
                    letterSpacing: "-0.035em",
                    fontWeight: 400,
                    color: "var(--ink)",
                  }}
                >
                  {step.label}
                </h3>
                <p
                  className="font-sans mt-1.5"
                  style={{
                    fontSize: 13.5,
                    lineHeight: 1.5,
                    color: "var(--ink-2)",
                  }}
                >
                  {step.desc}
                </p>
              </div>

              {/* Annotation column — the leak, marked */}
              <div className="pb-9 lg:pt-6">
                {step.leak ? (
                  <div
                    style={{
                      borderLeft: "2px solid var(--signal)",
                      paddingLeft: 14,
                    }}
                  >
                    <span
                      className="font-mono"
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--signal)",
                        fontWeight: 600,
                      }}
                    >
                      Leak
                    </span>
                    <p
                      className="font-sans mt-1"
                      style={{
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "var(--ink)",
                      }}
                    >
                      {step.leak}
                    </p>
                  </div>
                ) : (
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "var(--money-2)",
                      fontWeight: 600,
                    }}
                  >
                    Money enters here
                  </span>
                )}
              </div>
            </Reveal>
          );
        })}
      </ol>

      {/* Visibility — the layer over all of it */}
      <Reveal delay={flow.length * 70}>
        <div
          className="mt-2 pt-7 max-w-[1000px]"
          style={{ borderTop: "2px solid var(--ink)" }}
        >
          <span
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--steel)",
              fontWeight: 500,
            }}
          >
            The layer over all of it
          </span>
          <p
            className="font-serif mt-2"
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              lineHeight: 1.15,
              letterSpacing: "-0.025em",
              fontWeight: 400,
              color: "var(--ink)",
            }}
          >
            Visibility —{" "}
            <span style={{ fontStyle: "italic", color: "var(--money)" }}>
              the reporting that would have caught every leak above.
            </span>
          </p>
          <p
            className="font-sans mt-4 max-w-[58ch]"
            style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}
          >
            Every red mark is money already spent on demand, lost before
            delivery. Each one is a system I build — and then keep running.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
