import type { Metadata } from "next";
import Link from "next/link";
import { playbooks, playbookSlugs } from "@/content/playbooks";
import { Glyph } from "@/components/brand/v2";
import { Nav } from "@/components/sections/nav";

export const metadata: Metadata = {
  title: "Playbooks — Savoca.Studio",
  description:
    "Vertical-specific RevOps playbooks for service businesses. Free. Field-tested. No fluff.",
};

export default function ResourcesIndex() {
  return (
    <>
      <Nav />
      <main className="bg-bone min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 lg:pb-32">
          <header className="mb-12 lg:mb-16">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-steel inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-money-2 inline-block" />
              The Playbooks · Free · Operator-grade
            </span>

            <h1
              className="font-serif text-[clamp(48px,8vw,96px)] leading-[0.95] tracking-[-0.035em] text-ink mt-6 mb-6 max-w-4xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Field guides for service businesses
              <span className="text-money italic"> that run on calls.</span>
            </h1>

            <p className="text-[18px] leading-[1.55] text-ink-2 max-w-2xl">
              {playbookSlugs.length} vertical-specific RevOps playbooks. Industry
              data, real operator language, four moves per playbook to plug the
              leaks already sitting in your funnel. Free.
            </p>
          </header>

          {/* ── Sub-nav: vertical quick jumps ──────────────── */}
          <nav
            aria-label="Playbook quick jump"
            className="sticky top-[68px] z-30 -mx-6 lg:-mx-12 px-6 lg:px-12 py-3 mb-12 bg-bone/95 backdrop-blur-md border-y border-rule overflow-x-auto"
          >
            <ul className="flex gap-2 flex-nowrap whitespace-nowrap">
              {playbookSlugs.map((slug) => {
                const p = playbooks[slug];
                return (
                  <li key={slug} className="flex-shrink-0">
                    <a
                      href={`#${slug}`}
                      className="font-mono text-[10px] tracking-[0.16em] uppercase text-ink-2 border border-rule px-3 py-2 rounded-full hover:border-money hover:text-money inline-flex items-center gap-2 transition-colors"
                    >
                      {p.icon && (
                        <span className="text-money">
                          <Glyph name={p.icon} size={14} color="currentColor" />
                        </span>
                      )}
                      {p.verticalShort}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* ── Playbook list ──────────────────────────────── */}
          <ul className="border-t border-rule">
            {playbookSlugs.map((slug) => {
              const p = playbooks[slug];
              const isStub = p.patternStats.length === 0;
              return (
                <li key={slug} id={slug} className="border-b border-rule scroll-mt-32">
                  <Link
                    href={`/resources/${slug}`}
                    className="grid grid-cols-[auto_1fr_auto] gap-6 lg:gap-10 items-start py-8 lg:py-12 group cta-arrow-host"
                  >
                    {/* Icon */}
                    {p.icon && (
                      <span className="hidden md:flex w-14 h-14 lg:w-16 lg:h-16 items-center justify-center border border-rule rounded-full text-money flex-shrink-0 group-hover:border-money group-hover:bg-money/5 transition-colors">
                        <Glyph name={p.icon} size={28} color="currentColor" />
                      </span>
                    )}

                    {/* Body */}
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-money font-semibold">
                          {p.edition.split(" / ")[0]}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-steel">
                          / {p.verticalShort}
                        </span>
                      </div>
                      <h2
                        className="font-serif text-[clamp(28px,3.8vw,42px)] leading-[1.05] tracking-[-0.025em] text-ink mb-3 font-medium"
                        style={{ fontVariationSettings: '"opsz" 96' }}
                      >
                        {p.title}
                        <span className="text-money italic ml-2">§</span>
                      </h2>
                      <p className="text-[15px] leading-[1.5] text-ink-2 max-w-2xl">
                        {p.subtitle}
                      </p>
                      {isStub && (
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-signal inline-block mt-3">
                          ◊ In production
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-money flex items-center gap-2 self-start pt-1 whitespace-nowrap">
                      Read
                      <span className="cta-arrow inline-block">→</span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <footer className="mt-20 lg:mt-28 pt-12 border-t border-rule flex justify-between items-center">
            <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-steel">
              No revenue left behind.
            </span>
            <Link
              href="/book"
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-ink border-b border-money-2 pb-1 hover:text-money-2 transition-colors"
            >
              Book a 30-min audit →
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
