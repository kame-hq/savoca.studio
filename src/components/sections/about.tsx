"use client";

import { useRef } from "react";
import { RevealBlock, RevealWords } from "@/components/motion/reveal-words";
import { SectionLine } from "@/components/motion/section-line";

export function About() {
  const ref = useRef<HTMLElement>(null);

  return (
    <section
      ref={ref}
      id="about"
      className="relative px-6 lg:px-12 py-24 lg:py-44 border-t border-line"
    >
      <SectionLine targetRef={ref} />

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Four / About
        </div>
        <div className="col-span-12 lg:col-span-9">
          <h2
            className="leading-[0.95] tracking-[-0.025em] text-ink font-medium"
            style={{ fontSize: "clamp(36px, 5.4vw, 88px)" }}
          >
            <RevealWords text="I fix the part where" />{" "}
            <RevealWords
              text="revenue falls through."
              className="font-serif italic font-normal text-mute-soft"
              delay={0.22}
            />
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mt-16 lg:mt-32">
        <RevealBlock className="col-span-12 lg:col-span-9 lg:col-start-3" delay={0.1}>
          <div className="space-y-12 lg:space-y-14 max-w-[60ch]">
            {/* Bio block */}
            <div className="text-[17px] leading-[1.55] text-ink-soft">
              <p>
                I&apos;m a{" "}
                <span className="text-ink font-medium">
                  global product commercialization program manager
                </span>{" "}
                at <span className="text-ink font-medium">Indeed</span>,
                focused on{" "}
                <span className="font-serif italic text-ink">
                  go-to-market strategy and execution.
                </span>
              </p>
            </div>

            {/* Diagnosis block */}
            <div className="space-y-3 text-[17px] leading-[1.55] text-ink-soft">
              <p>Most service businesses already have what they need.</p>
              <p className="font-serif italic text-mute">
                Phone. CRM. Booking. Payments.
              </p>
              <p>They just don&apos;t work together.</p>
              <p className="text-mute">Calls get missed.</p>
              <p className="text-mute">Forms sit.</p>
              <p className="text-mute">Bookings don&apos;t confirm.</p>
            </div>

            {/* Process block */}
            <div className="grid grid-cols-2 gap-x-6 lg:gap-x-12 gap-y-10">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mb-4">
                  I:
                </div>
                <ul className="space-y-2.5 text-[16px] text-ink leading-[1.45]">
                  <li>Audit what&apos;s happening</li>
                  <li>Fix the system</li>
                  <li>Track what changes</li>
                </ul>
              </div>
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mb-4">
                  For 30 days, you&apos;ll see:
                </div>
                <ul className="space-y-2.5 text-[16px] text-ink leading-[1.45]">
                  <li>Calls recovered</li>
                  <li>Appointments booked</li>
                  <li>Payments captured</li>
                </ul>
              </div>
            </div>

            {/* Closing line */}
            <div className="space-y-1 text-[18px] leading-[1.4]">
              <p className="text-ink font-medium">No agency. No handoffs.</p>
              <p className="font-serif italic text-mute">You work with me.</p>
            </div>
          </div>

          {/* Credit row */}
          <div className="mt-12 pt-6 border-t border-line grid grid-cols-2 gap-x-6 max-w-[60ch]">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mb-2">
                The operator
              </div>
              <div className="text-[14px] text-ink leading-[1.5]">
                Jack Savoca
              </div>
              <div className="text-[14px] text-mute leading-[1.5]">
                Solo, by design
              </div>
            </div>
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mb-2">
                Track record
              </div>
              <div className="text-[14px] text-ink leading-[1.5]">
                Indeed
                <span className="text-mute"> — current</span>
              </div>
              <div className="text-[14px] text-mute leading-[1.5]">
                Whole Foods Market
                <br />
                Facebook (now Meta)
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
