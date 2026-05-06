"use client";

import { SVInitial } from "@/components/brand/v2";

/**
 * Editorial break — mid-page typographic accent between Services and Proof.
 * Acts as a palate-cleanser before the data section. Single italic Fraunces
 * pull-quote with leading § initial in money-2.
 */
export function Break() {
  return (
    <aside
      id="break"
      aria-label="Editorial pull quote"
      className="px-6 md:px-10 lg:px-12 py-16 lg:py-28"
      style={{ background: "var(--bone)" }}
    >
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8">
        <blockquote className="col-span-12 lg:col-span-9 lg:col-start-3 relative">
          <SVInitial
            size={48}
            color="var(--money-2)"
            style={{
              fontSize: "clamp(36px, 4vw, 64px)",
              float: "left",
              lineHeight: 0.85,
              marginRight: 12,
              marginTop: 4,
            }}
          />
          <p
            className="font-serif italic"
            style={{
              fontSize: "clamp(28px, 5vw, 64px)",
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              color: "var(--ink)",
              fontWeight: 400,
            }}
          >
            Most service shops don&apos;t have a marketing problem. They have a
            follow-through problem.
          </p>
        </blockquote>
      </div>
    </aside>
  );
}
