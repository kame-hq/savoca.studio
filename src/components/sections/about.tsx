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
            Built for medspas that run on{" "}
            <span className="font-serif italic font-normal text-mute-soft">
              consults, deposits, and rebooks.
            </span>
          </h2>
        </Reveal>
      </div>

      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mt-16 lg:mt-32">
        {/* Portrait — left margin */}
        <Reveal className="col-span-12 lg:col-span-3 lg:col-start-2 mb-8 lg:mb-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/about/portrait.svg"
            alt="Jack Savoca, illustrated portrait"
            className="w-48 lg:w-full max-w-[240px]"
          />
        </Reveal>

        {/* Bio block — right */}
        <Reveal className="col-span-12 lg:col-span-7" delay={0.1}>
          <div className="space-y-6 text-[17px] leading-[1.65] text-ink-soft max-w-[60ch]">
            <p>
              A decade of shipping product launches and revenue programs inside
              Indeed, Whole Foods Market, and Facebook ad ops.{" "}
              <span className="font-serif italic text-mute">
                The same playbook a Fortune 100 uses to recover lost pipeline,
                applied to a clinic losing ten consults a week to dead phone
                trees and silent forms.
              </span>
            </p>
            <p>
              Most medspas already pay for every tool they need. Booking page,
              phone system, CRM, deposit collection, follow-up. None of them
              talk. Leads die between tabs. Money walks out before the front
              desk notices.
            </p>
            <p>
              I install the wiring, watch the metrics for thirty days, and send
              a weekly report that names every recovered consult, every rebook,
              every deposit collected. No agency layer, no junior account
              manager, no 90-day onboarding. You get me, on the line.
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
                Facebook ad ops
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
