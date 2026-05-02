"use client";

import { Reveal } from "@/components/motion/reveal";

export function About() {
  return (
    <section
      id="about"
      className="relative px-6 lg:px-12 py-24 lg:py-44 border-t border-line"
    >
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Four / About
        </div>
        <Reveal className="col-span-12 lg:col-span-8">
          <h2
            className="leading-[0.95] tracking-[-0.025em] text-ink font-medium"
            style={{ fontSize: "clamp(36px, 5vw, 80px)" }}
          >
            Built for service businesses that run on{" "}
            <span className="font-serif italic font-normal text-mute-soft">
              calls, bookings, and follow-up.
            </span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mt-16 lg:mt-32">
        {/* Bio block */}
        <Reveal className="col-span-12 lg:col-span-9 lg:col-start-3" delay={0.1}>
          <div className="space-y-6 text-[17px] leading-[1.65] text-ink-soft max-w-[60ch]">
            <p>
              I&apos;m Jack Savoca. I&apos;m a Program Manager at Indeed in
              global product commercialization, where the programs I&apos;ve
              led drove{" "}
              <span className="text-ink font-medium">
                $100M and $30M in incremental revenue
              </span>{" "}
              for two of the company&apos;s flagship products. Before Indeed,
              I worked at Whole Foods Market and Facebook (now Meta).{" "}
              <span className="font-serif italic text-mute">
                Savoca Studio is the side of my work I run on my own — RevOps
                for service businesses that lose money between the cracks.
              </span>
            </p>
            <p>
              Most service businesses already pay for every tool they need.
              Phone, CRM, booking page, follow-up, payments. None of them talk
              to each other. Calls get missed. Forms go unanswered. Bookings
              never confirm. Money walks out before the front desk notices.
            </p>
            <p>
              I audit your stack, install the wiring, and watch the metrics for
              thirty days. Then I send a weekly report that names every
              recovered call, every booked appointment, every payment
              collected. No agency, no junior account manager, no 90-day
              onboarding. You get me, on the line.
            </p>
          </div>

          {/* Credit row — moved here */}
          <div className="mt-12 pt-6 border-t border-line grid grid-cols-2 gap-x-6">
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
        </Reveal>
      </div>
    </section>
  );
}
