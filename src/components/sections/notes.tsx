"use client";

import { Reveal } from "@/components/motion/reveal";

const notes = [
  {
    label: "Field Note 01",
    title: "The 11pm scroll.",
    body: "Most aesthetic consults are booked between 9pm and midnight on Instagram. If the form requires a deposit before a human ever replies, you lose 60% of them.",
    icon: "/assets/notes/watch.svg",
  },
  {
    label: "Field Note 02",
    title: "The deposit is the qualifier.",
    body: "Web forms convert at 2.4x phone calls for aesthetic clinics — but only when the form ends with a deposit option. The deposit qualifies. The price doesn't.",
    icon: "/assets/notes/clipboard.svg",
  },
  {
    label: "Field Note 03",
    title: "The five-minute window.",
    body: "Reply to a consult inquiry inside five minutes and your booking odds are 21x what they are at thirty. After an hour, you're competing with three other clinics she Googled while waiting.",
    icon: "/assets/notes/phone.svg",
  },
];

export function Notes() {
  return (
    <section
      id="notes"
      className="relative px-6 lg:px-12 py-24 lg:py-44 border-t border-line bg-bg-alt"
    >
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 mb-20 lg:mb-32">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Three / Field Notes
        </div>
        <Reveal className="col-span-12 lg:col-span-9">
          <h2
            className="leading-[0.95] tracking-[-0.025em] text-ink font-medium"
            style={{ fontSize: "clamp(40px, 6vw, 96px)" }}
          >
            Things I keep{" "}
            <span className="font-serif italic font-normal text-mute-soft">
              learning the hard way.
            </span>
          </h2>
        </Reveal>
      </div>

      <ul className="grid grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-20">
        {notes.map((n, i) => (
          <Reveal
            key={n.label}
            delay={i * 0.06}
            className={
              i === 0
                ? "col-span-12 lg:col-span-6 lg:col-start-2"
                : i === 1
                  ? "col-span-12 lg:col-span-5 lg:col-start-7 lg:mt-20"
                  : "col-span-12 lg:col-span-7 lg:col-start-3 lg:mt-12"
            }
          >
            <article className="border-t border-line pt-6">
              <div className="flex items-start justify-between gap-6 mb-6">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-stamp pt-2">
                  {n.label}
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={n.icon}
                  alt=""
                  aria-hidden
                  className="w-28 h-28 lg:w-36 lg:h-36 shrink-0 -mt-2"
                />
              </div>
              <h3
                className="leading-[1] tracking-[-0.025em] text-ink font-medium font-serif italic"
                style={{ fontSize: "clamp(28px, 3.4vw, 52px)" }}
              >
                {n.title}
              </h3>
              <p className="mt-5 text-[16px] leading-[1.6] text-mute max-w-[58ch]">
                {n.body}
              </p>
            </article>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
