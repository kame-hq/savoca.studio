export function Footer() {
  return (
    <footer className="relative border-t border-line px-6 lg:px-12 pt-16 lg:pt-24 pb-10 bg-bg-alt">
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8 gap-y-10">
        <div className="col-span-12 lg:col-span-7">
          <div
            className="leading-[0.92] tracking-[-0.035em] text-ink font-medium"
            style={{ fontSize: "clamp(48px, 6vw, 112px)" }}
          >
            Savoca{" "}
            <span className="font-serif italic font-normal text-mute-soft">
              Studio.
            </span>
          </div>
          <div className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-mute max-w-[40ch] space-y-1">
            <div>RevOps for service businesses</div>
            <div>Solo, by design</div>
          </div>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mb-5">
            Services
          </h4>
          <ul className="space-y-2.5 text-[14px] text-ink">
            <li><a href="#services" className="hover:text-mute transition-colors">Catcher</a></li>
            <li><a href="#services" className="hover:text-mute transition-colors">Stack</a></li>
            <li><a href="#services" className="hover:text-mute transition-colors">Operator Partner</a></li>
          </ul>
        </div>

        <div className="col-span-6 lg:col-span-2">
          <h4 className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute mb-5">
            Reach
          </h4>
          <ul className="space-y-2.5 text-[14px] text-ink">
            <li><a href="mailto:jack@savoca.studio" className="hover:text-mute transition-colors">jack@savoca.studio</a></li>
            <li><a href="https://www.linkedin.com/in/jacksavoca" target="_blank" rel="noopener noreferrer" className="hover:text-mute transition-colors">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-6 border-t border-line flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-mute">
        <span>Savoca Studio, 2026</span>
        <span className="tabular">savoca.studio</span>
      </div>
    </footer>
  );
}
