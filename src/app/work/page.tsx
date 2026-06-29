"use client";

// /work — example systems by industry, full detail. Chrome + data from ../v2/shared.
import { Shell, Reveal, Bullets, EXAMPLES, INK, TEAL, DIM } from "../v2/shared";

export default function Work() {
  return (
    <Shell>
      <section id="work" className="px-6 md:px-12 pt-32 lg:pt-44 pb-20 lg:pb-32">
        <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.3em] uppercase mb-5" style={{ color: TEAL }}>Examples</p>
        <Reveal className="font-[Fraunces] font-bold leading-[0.98] max-w-[16ch]" style={{ fontSize: "clamp(30px,5vw,60px)" }}>
          Different businesses. Same revenue path.
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(236,231,221,0.1)" }}>
          {EXAMPLES.map(([title, blurb, measured]) => (
            <div key={title} className="p-7 md:p-9" style={{ background: INK }}>
              <h3 className="font-[Fraunces] font-bold" style={{ fontSize: "clamp(22px,2.6vw,32px)" }}>{title}</h3>
              <p className="font-[Fraunces] mt-3 mb-6 max-w-[52ch]" style={{ fontSize: "16px", color: "#B7B2A6" }}>{blurb}</p>
              <p className="font-[JetBrains_Mono] text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: TEAL }}>Measured by</p>
              <div className="grid grid-cols-2 gap-x-6"><Bullets items={measured} color={DIM} /></div>
            </div>
          ))}
        </div>
      </section>
    </Shell>
  );
}
