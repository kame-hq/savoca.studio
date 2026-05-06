"use client";

import { useState } from "react";
import { Eyebrow, SVInitial } from "@/components/brand/v2";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("submitting");
    try {
      const res = await fetch("https://formsubmit.co/ajax/jack@savoca.studio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          _subject: "New audit request — savoca.studio",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const submitted = status === "success";

  return (
    <section
      id="contact"
      className="grain px-6 md:px-10 lg:px-12 pt-20 lg:pt-28 pb-12 lg:pb-16"
      style={{ background: "var(--ink)", color: "var(--bone)" }}
    >
      <Eyebrow color="var(--steel-2)" dotColor="var(--signal)">
        Five · Close
      </Eyebrow>

      <h2
        className="font-serif mt-3 max-w-[1200px]"
        style={{
          fontSize: "clamp(40px, 8vw, 88px)",
          lineHeight: 0.92,
          letterSpacing: "-0.035em",
          fontWeight: 400,
          fontVariationSettings: '"opsz" 144',
        }}
      >
        If leads aren&apos;t turning into revenue,
        <br />
        <span style={{ fontStyle: "italic", color: "var(--signal)" }}>
          something&apos;s not getting done.
        </span>
      </h2>

      <p
        className="font-sans mt-7 max-w-[540px]"
        style={{ fontSize: 17, lineHeight: 1.5, color: "var(--bone-2)" }}
      >
        30 minutes. Straight answers. If it&apos;s not a fit, I&apos;ll tell
        you.
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3.5">
        <a
          href="#book"
          className="cta-fill font-mono"
          style={{
            background: "var(--bone)",
            color: "var(--ink)",
            padding: "16px 22px",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          Get a call →
        </a>
        <a
          href="mailto:jack@savoca.studio"
          className="cta-fill font-mono"
          style={{
            border: "1.5px solid var(--bone)",
            color: "var(--bone)",
            padding: "16px 22px",
            fontSize: 12,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          jack@savoca.studio
        </a>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-[680px] relative"
        style={{ borderBottom: "1px solid rgba(245,242,236,0.4)" }}
      >
        {!submitted ? (
          <>
            <input
              type="email"
              required
              placeholder="you@yourbusiness.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="w-full bg-transparent py-4 pr-36 text-bone focus:outline-none placeholder:opacity-40 disabled:opacity-60"
              style={{ fontSize: 18 }}
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="cta-line font-mono absolute right-0 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 disabled:opacity-60"
              style={{
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--bone)",
                fontWeight: 500,
                background: "transparent",
                border: 0,
                padding: 0,
                cursor: "pointer",
              }}
            >
              <span>{status === "submitting" ? "Sending" : "Or send →"}</span>
            </button>
          </>
        ) : (
          <p
            className="font-serif italic py-4"
            style={{ fontSize: 18, color: "var(--bone)" }}
          >
            Got it. Reply within one business day.
          </p>
        )}
      </form>
      {status === "error" && (
        <p className="mt-4 font-sans" style={{ fontSize: 13, color: "var(--signal)" }}>
          Something broke on our side. Email{" "}
          <a href="mailto:jack@savoca.studio" className="underline">
            jack@savoca.studio
          </a>{" "}
          directly.
        </p>
      )}

      {/* Footer row — relative flex flow at end of section (not absolute).
          Fixes mobile breakage at low heights. */}
      <div
        className="mt-16 flex items-center justify-between font-mono pt-3.5"
        style={{
          borderTop: "1px solid rgba(245,242,236,0.25)",
          fontSize: 10,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          color: "var(--bone-2)",
          fontWeight: 500,
        }}
      >
        <span>Savoca Studio · 2026</span>
        <SVInitial size={22} color="var(--money-2)" />
        <span>savoca.studio</span>
      </div>
    </section>
  );
}
