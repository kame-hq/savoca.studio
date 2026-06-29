"use client";

// /pricing — the three bands, full detail. Chrome + data from ../v2/shared.
import { Shell, BandCard, Reveal, BANDS, TEAL, DIM } from "../v2/shared";

export default function Pricing() {
  return (
    <Shell>
      <section id="pricing" className="px-6 md:px-12 pt-32 lg:pt-44 pb-20 lg:pb-32">
        <p className="font-[JetBrains_Mono] text-[12px] tracking-[0.3em] uppercase mb-5" style={{ color: TEAL }}>Three ways to build</p>
        <Reveal className="font-[Fraunces] font-bold leading-[0.98] max-w-[20ch]" style={{ fontSize: "clamp(30px,5vw,60px)" }}>
          Built for the size and complexity of the business.
        </Reveal>
        <p className="font-[Fraunces] mt-5 max-w-[62ch] mb-10" style={{ fontSize: "clamp(16px,1.8vw,20px)", color: DIM }}>
          A solo practice does not need the same system as a multi-location service business. Savoca Studio is structured around how much revenue workflow the business needs to support. You work directly with me — no agency layers, no bloated consulting process, no one-time setup that gets forgotten.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5 items-stretch">
          {BANDS.map((b) => <BandCard key={b.n} b={b} />)}
        </div>
      </section>
    </Shell>
  );
}
