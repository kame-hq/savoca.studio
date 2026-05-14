"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Eyebrow, SVInitial, SVLogo } from "@/components/brand/v2";

const tierCopy: Record<string, { name: string; next: string }> = {
  solo: {
    name: "The Partner / Solo",
    next: "I'll email you within 1 business day to schedule the discovery call. Build starts within 1 week of kickoff.",
  },
  studio: {
    name: "The Partner / Studio",
    next: "I'll email you within 1 business day to scope the build. Setup starts within 1 week, weekly cadence the Monday after.",
  },
  operation: {
    name: "The Partner / Operation",
    next: "I'll email you within 1 business day to walk through scope. Custom build starts within 2 weeks of kickoff.",
  },
};

function ThanksContent() {
  const params = useSearchParams();
  const tier = params.get("tier") ?? "default";
  const copy = tierCopy[tier] ?? {
    name: "Savoca Studio",
    next: "I'll email you within 1 business day with next steps.",
  };

  return (
    <main
      className="min-h-screen grain"
      style={{ background: "var(--paper)" }}
    >
      <div
        className="px-5 md:px-10 lg:px-12 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        <Link href="/" aria-label="Savoca Studio" className="inline-flex">
          <SVLogo size={20} layout="inline" />
        </Link>
        <Link
          href="/"
          className="font-mono"
          style={{
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--steel)",
          }}
        >
          ← Home
        </Link>
      </div>

      <section className="px-5 md:px-10 lg:px-12 pt-16 lg:pt-24 pb-16 max-w-[900px]">
        <Eyebrow>
          <SVInitial size={12} color="var(--money)" /> You&apos;re in
        </Eyebrow>
        <h1
          className="font-serif mt-3"
          style={{
            fontSize: "clamp(40px, 7vw, 80px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          Got it.
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            {copy.name} engagement signed.
          </span>
        </h1>

        <p
          className="font-sans mt-7 max-w-[60ch]"
          style={{ fontSize: 18, lineHeight: 1.55, color: "var(--ink)" }}
        >
          {copy.next}
        </p>

        <p
          className="font-sans mt-5 max-w-[60ch]"
          style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          Receipt + confirmation are on the way to your inbox. If you don&apos;t
          see it within 5 min, check spam, then email{" "}
          <a
            href="mailto:jack@savoca.studio"
            className="underline"
            style={{ color: "var(--money)" }}
          >
            jack@savoca.studio
          </a>
          .
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/"
            className="cta-arrow-host font-mono inline-flex items-center gap-2"
            style={{
              background: "var(--ink)",
              color: "var(--bone)",
              padding: "14px 20px",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Back to site <span className="cta-arrow">→</span>
          </Link>
          <a
            href="mailto:jack@savoca.studio"
            className="font-mono inline-flex items-center gap-2 transition-colors hover:bg-ink hover:text-bone"
            style={{
              border: "1.5px solid var(--ink)",
              color: "var(--ink)",
              padding: "14px 20px",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Email me directly
          </a>
        </div>

        <div className="mt-16 flex items-center gap-3">
          <SVInitial size={20} color="var(--money-2)" />
          <span
            className="font-mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--steel)",
            }}
          >
            Savoca Studio · No revenue left behind.
          </span>
        </div>
      </section>
    </main>
  );
}

export default function ThanksPage() {
  return (
    <Suspense fallback={<div />}>
      <ThanksContent />
    </Suspense>
  );
}
