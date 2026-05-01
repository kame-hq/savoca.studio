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
            Built for businesses that run on{" "}
            <span className="font-serif italic font-normal text-mute-soft">
              calls, bookings, and follow-up.
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
              Twelve years putting RevOps and GTM in the right shape for
              companies of every size.{" "}
              <span className="font-serif italic text-mute">
                I started Savoca Studio because the same leaks I fix at
                enterprise scale are killing SMBs faster.
              </span>
            </p>
            <p>
              Most service businesses already pay for the right tools. They
              just don&apos;t talk to each other. The phone rings, no one picks
              up. The form submits, no one follows up. The booking happens, no
              one confirms. Money walks out between the cracks.
            </p>
            <p>
              I show up, audit the stack, wire it back together. No agency
              layer, no junior account manager, no 90-day onboarding. You talk
              to me.
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
                Day job
              </div>
              <div className="text-[14px] text-mute leading-[1.5]">
                Senior PM, Indeed
                <br />
                Global product commercialization
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
