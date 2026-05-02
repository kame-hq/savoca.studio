"use client";

import { Reveal } from "@/components/motion/reveal";

const verticals = [
  {
    no: "01",
    name: "Medspas.",
    note: "Bookings, deposits, rebooks. Each step in the funnel loses near 15%.",
    icon: "/assets/who/syringe.svg",
  },
  {
    no: "02",
    name: "Dental.",
    note: "New-patient calls dropped, no callback. Insurance verification eats a day.",
    icon: "/assets/who/tooth.svg",
  },
  {
    no: "03",
    name: "Home services.",
    note: "After-hours calls, dispatcher SLAs, follow-up on quoted work, second-visit revenue.",
    icon: "/assets/who/wrench.svg",
  },
  {
    no: "04",
    name: "Pro services.",
    note: "Legal, fitness, accounting, consulting. Five-minute reply window — most miss it by an hour.",
    icon: "/assets/notes/clipboard.svg",
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

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-line">
        {verticals.map((v, i) => (
          <Reveal
            key={v.no}
            delay={i * 0.06}
            className={[
              "border-line",
              i < verticals.length - 1 ? "border-b" : "",
              "md:border-b-0",
              i % 2 === 0 ? "md:border-r" : "",
              i < 2 ? "md:border-b" : "",
              "lg:border-b-0",
              i < verticals.length - 1 ? "lg:border-r" : "",
            ].join(" ")}
          >
            <article className="h-full px-2 py-10 lg:px-6 lg:py-12 flex flex-col">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp">
                No. {v.no}
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={v.icon}
                alt=""
                aria-hidden
                className="mt-10 mb-12 w-16 h-16 lg:w-16 lg:h-16"
              />
              <h3
                className="uppercase font-bold leading-[0.95] tracking-[-0.01em] text-ink"
                style={{ fontSize: "clamp(28px, 2.6vw, 38px)" }}
              >
                {v.name}
              </h3>
              <p className="mt-6 font-serif italic text-[15px] leading-[1.55] text-mute max-w-[28ch]">
                {v.note}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
