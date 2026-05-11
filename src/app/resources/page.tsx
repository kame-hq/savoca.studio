import type { Metadata } from "next";
import Link from "next/link";
import { playbooks, playbookSlugs } from "@/content/playbooks";
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
        <div className="max-w-5xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 lg:pb-32">
          <header className="mb-16 lg:mb-24">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-steel inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-money-2 inline-block" />
              The Playbooks · Free · Operator-grade
            </span>

            <h1
              className="font-serif text-[clamp(48px,8vw,96px)] leading-[0.95] tracking-[-0.035em] text-ink mt-6 mb-8 max-w-4xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Field guides for service businesses
              <span className="text-money italic"> that run on calls.</span>
            </h1>

            <p className="text-[18px] leading-[1.55] text-ink-2 max-w-2xl">
              Vertical-specific RevOps playbooks. Industry data, real operator
              language, and four moves per playbook to plug the leaks already
              sitting inside your funnel. Free. No email gate yet — read in
              browser, save as PDF.
            </p>
          </header>

          <ul className="border-t border-rule">
            {playbookSlugs.map((slug) => {
              const p = playbooks[slug];
              const isStub = p.patternStats.length === 0;
              return (
                <li key={slug} className="border-b border-rule">
                  <Link
                    href={`/resources/${slug}`}
                    className="grid grid-cols-[1fr_auto] gap-8 items-baseline py-8 lg:py-12 group cta-arrow-host"
                  >
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-steel block mb-3">
                        {p.edition}
                      </span>
                      <h2
                        className="font-serif text-[clamp(28px,4vw,44px)] leading-[1.05] tracking-[-0.025em] text-ink mb-3"
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
                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-money flex items-center gap-2 self-end pb-2">
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
