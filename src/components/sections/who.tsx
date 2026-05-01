"use client";

import { Reveal } from "@/components/motion/reveal";

const verticals = [
  {
    no: "01",
    name: "Dental practices",
    note: "Calls dropped, no callback. New-patient form leaks. Insurance verification takes a day.",
    priority: true,
    offset: "lg:col-start-2 lg:col-span-7",
  },
  {
    no: "02",
    name: "Medspas + aesthetic clinics",
    note: "Booking page, intake form, deposit, reminder. Each step loses near 15%.",
    priority: true,
    offset: "lg:col-span-6 lg:col-start-7 lg:mt-32",
  },
  {
    no: "03",
    name: "HVAC + home services",
    note: "After-hours calls, dispatcher SLAs, follow-up on quoted work.",
    priority: false,
    offset: "lg:col-start-2 lg:col-span-4 lg:mt-12",
  },
  {
    no: "04",
    name: "Anyone who runs on inbound and follow-up",
    note: "Med, dental, legal, fitness, professional services.",
    priority: false,
    offset: "lg:col-span-4 lg:col-start-8 lg:mt-24",
  },
];

export function Who() {
  return (
    <section
      id="who"
      className="relative px-6 lg:px-12 py-24 lg:py-44 border-t border-line"
    >
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mb-20 lg:mb-32">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          One / Who
        </div>
        <Reveal className="col-span-12 lg:col-span-9">
          <h2
            className="leading-[0.95] tracking-[-0.025em] text-ink font-medium"
            style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
          >
            If you run one of these,{" "}
            <span className="font-serif italic font-normal text-mute-soft">
              we should talk.
            </span>
          </h2>
        </Reveal>
      </div>

      <ul className="grid grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-16 lg:gap-y-24 lg:gap-y-0">
        {verticals.map((v, i) => (
          <Reveal
            key={v.no}
            delay={i * 0.06}
            className={"col-span-12 md:col-span-6 " + v.offset}
          >
            <div
              className={
                "group relative pt-6 border-t " +
                (v.priority ? "border-ink" : "border-line")
              }
            >
              <div className="flex items-baseline justify-between mb-5">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute tabular">
                  {v.no}
                </span>
                {v.priority && (
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-stamp">
                    Priority focus
                  </span>
                )}
              </div>
              <h3
                className={
                  "leading-[0.98] tracking-[-0.025em] text-ink font-medium " +
                  (v.priority ? "" : "text-mute-soft")
                }
                style={{
                  fontSize: v.priority
                    ? "clamp(44px, 5vw, 80px)"
                    : "clamp(24px, 2.6vw, 32px)",
                }}
              >
                {v.name}
              </h3>
              <p
                className={
                  "mt-5 leading-[1.55] " +
                  (v.priority
                    ? "text-[15px] text-mute max-w-[46ch]"
                    : "text-[14px] text-mute-soft max-w-[40ch]")
                }
              >
                {v.note}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
