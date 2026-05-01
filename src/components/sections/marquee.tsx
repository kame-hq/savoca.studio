const items = [
  "Dental",
  "Medspa",
  "HVAC",
  "Aesthetics",
  "Home Services",
  "Legal",
  "Fitness",
  "Med Practice",
];

export function Marquee() {
  const doubled = [...items, ...items];
  return (
    <section
      className="relative border-y border-line py-6 overflow-hidden bg-bg-alt/40"
      aria-label="Industries served"
    >
      <div className="flex marquee-track w-max gap-16 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-serif italic text-mute text-[clamp(28px,3vw,48px)] leading-none flex items-center gap-16"
          >
            {item}
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-mute-soft/60" />
          </span>
        ))}
      </div>
    </section>
  );
}
