import Link from "next/link";
import { Eyebrow, SVInitial } from "@/components/brand/v2";
import { CAL_DISCOVERY, CAL_DISCOVERY_LIVE } from "@/lib/cta-links";
import { CalEmbed } from "@/components/cal-embed";

export default function BookPage() {
  const calSlug = new URL(CAL_DISCOVERY).pathname.replace(/^\/|\/$/g, "");

  return (
    <main
      className="min-h-screen grain"
      style={{ background: "var(--paper)" }}
    >
      <div
        className="px-5 md:px-10 lg:px-12 py-4 flex items-center justify-between"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        <Link
          href="/"
          aria-label="Savoca Studio"
          className="font-serif italic"
          style={{ fontWeight: 500, fontSize: 20, letterSpacing: "-0.045em" }}
        >
          Savoca
          <span style={{ color: "var(--money-2)", fontStyle: "normal" }}>.</span>
          <span
            className="font-mono ml-2"
            style={{
              fontSize: 7,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 600,
              fontStyle: "normal",
              opacity: 0.85,
              verticalAlign: "1px",
            }}
          >
            Studio
          </span>
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

      <section className="px-5 md:px-10 lg:px-12 pt-12 lg:pt-16 pb-16 max-w-[900px]">
        <Eyebrow>Book</Eyebrow>
        <h1
          className="font-serif mt-3"
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            lineHeight: 0.95,
            letterSpacing: "-0.035em",
            fontWeight: 400,
          }}
        >
          30 minutes.
          <br />
          <span style={{ fontStyle: "italic", color: "var(--money)" }}>
            Straight answers.
          </span>
        </h1>
        <p
          className="font-sans mt-5 max-w-[60ch]"
          style={{ fontSize: 17, lineHeight: 1.55, color: "var(--ink-2)" }}
        >
          Pick a time. We&apos;ll talk about your inbound funnel — calls,
          forms, follow-up — and where revenue is leaking. If we&apos;re not a
          fit, I&apos;ll tell you who is.
        </p>

        {CAL_DISCOVERY_LIVE ? (
          <div className="mt-10">
            <CalEmbed link={calSlug} />
            <noscript>
              <a
                href={CAL_DISCOVERY}
                target="_blank"
                rel="noreferrer"
                className="font-mono inline-block mt-4"
                style={{ fontSize: 12, color: "var(--ink)" }}
              >
                Open booking page →
              </a>
            </noscript>
          </div>
        ) : (
          <div
            className="mt-10 p-8"
            style={{
              border: "1px solid var(--rule)",
              background: "var(--bone-2)",
            }}
          >
            <p
              className="font-mono mb-4"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--steel)",
                fontWeight: 500,
              }}
            >
              Booking system going live shortly
            </p>
            <p
              className="font-sans mb-4"
              style={{ fontSize: 16, lineHeight: 1.55, color: "var(--ink)" }}
            >
              Until the embed is wired, email me directly and I&apos;ll send
              over a calendar link the same day.
            </p>
            <a
              href="mailto:jack@savoca.studio?subject=Discovery%20call&body=Hi%20Jack%20%E2%80%94%20would%20like%20to%20book%2030%20min.%0A%0ABest%20times%20this%20week%3A%0A%0AThanks%2C%0A"
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
              Email me <span className="cta-arrow">→</span>
            </a>
          </div>
        )}

        <div className="mt-12 flex items-center gap-3">
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
