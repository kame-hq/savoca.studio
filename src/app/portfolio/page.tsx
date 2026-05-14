import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { portfolio, portfolioSlugs } from "@/content/portfolio";
import { Nav } from "@/components/sections/nav";
import { SVInitial } from "@/components/brand/v2";

export const metadata: Metadata = {
  title: "Portfolio — Savoca Studio",
  description:
    "Real RevOps builds for service operators. The systems behind the businesses.",
};

export default function PortfolioIndex() {
  return (
    <>
      <Nav />
      <main className="bg-bone min-h-screen">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 pt-32 lg:pt-40 pb-20 lg:pb-32">
          <header className="mb-12 lg:mb-16">
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-steel inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-money-2 inline-block" />
              The Portfolio · Operators in motion
            </span>

            <h1
              className="font-serif text-[clamp(48px,8vw,96px)] leading-[0.95] tracking-[-0.035em] text-ink mt-6 mb-6 max-w-4xl"
              style={{ fontVariationSettings: '"opsz" 144' }}
            >
              Systems built for
              <span className="text-money italic"> real operators.</span>
            </h1>

            <p className="text-[18px] leading-[1.55] text-ink-2 max-w-2xl">
              Every build solves the same problem in a different vertical — stop
              losing revenue between the cracks. No template work, no agency
              theater, no recurring lock-in unless it earns its keep.
            </p>
          </header>

          {/* ── Portfolio list ─────────────────────────────── */}
          <ul className="border-t border-rule">
            {portfolioSlugs.map((slug) => {
              const p = portfolio[slug];
              return (
                <li
                  key={slug}
                  id={slug}
                  className="border-b border-rule scroll-mt-32"
                >
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="grid grid-cols-1 lg:grid-cols-[380px_1fr_auto] gap-6 lg:gap-10 items-start py-8 lg:py-12 group cta-arrow-host"
                  >
                    <div
                      className="relative w-full aspect-[4/5] lg:aspect-[3/4] overflow-hidden border border-rule bg-ink"
                      style={{ minHeight: 220 }}
                    >
                      <Image
                        src={p.image.src}
                        alt={p.image.alt}
                        fill
                        sizes="(min-width: 1024px) 380px, 100vw"
                        style={{ objectFit: "cover", objectPosition: "center 25%" }}
                        className="transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-3 mb-3">
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-money font-semibold">
                          {p.tierDelivered}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-steel">
                          / {p.vertical}
                        </span>
                        <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-steel">
                          / {p.year}
                        </span>
                      </div>
                      <h2
                        className="font-serif text-[clamp(32px,4.4vw,56px)] leading-[1] tracking-[-0.03em] text-ink mb-3 font-medium"
                        style={{ fontVariationSettings: '"opsz" 96' }}
                      >
                        {p.name}
                        <SVInitial
                          size={22}
                          color="var(--money)"
                          style={{ marginLeft: 8, verticalAlign: "middle" }}
                        />
                      </h2>
                      <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-steel mb-4">
                        {p.operator}
                      </p>
                      <p className="text-[15px] leading-[1.55] text-ink-2 max-w-2xl mb-5">
                        {p.summary}
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 max-w-2xl">
                        {p.delivered.map((d) => (
                          <li
                            key={d}
                            className="font-mono text-[12px] tracking-[0.04em] text-ink-2 py-1 border-b border-rule/60"
                          >
                            · {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-money flex items-center gap-2 self-start pt-1 whitespace-nowrap lg:justify-self-end">
                      Visit site
                      <span className="cta-arrow inline-block">→</span>
                    </span>
                  </a>
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
              Book a 30-min call →
            </Link>
          </footer>
        </div>
      </main>
    </>
  );
}
