"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion/reveal";

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
          _subject: "New medspa audit request — savoca.studio",
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
      className="relative px-6 lg:px-12 py-24 lg:py-48 border-t border-line"
    >
      <div className="grid grid-cols-12 gap-x-6 lg:gap-x-8">
        <div className="col-span-12 lg:col-span-2 mb-4 lg:mb-0 font-mono text-[11px] uppercase tracking-[0.18em] text-mute">
          Five / Contact
        </div>
        <div className="col-span-12 lg:col-span-9">
          <Reveal>
            <h2
              className="leading-[0.9] tracking-[-0.04em] text-ink font-medium"
              style={{ fontSize: "clamp(56px, 10vw, 184px)" }}
            >
              Stop losing money{" "}
              <span className="font-serif italic font-normal tracking-[-0.045em] text-ink-soft">
                between the cracks.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-20 lg:mt-32 text-[14px] text-mute max-w-[44ch] leading-[1.55]">
              No discovery deck. Thirty-minute call, plain talk. If we&apos;re
              not a fit, I&apos;ll tell you who is.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="mt-8 max-w-[680px] relative border-b border-ink"
            >
              {!submitted ? (
                <>
                  <input
                    type="email"
                    required
                    placeholder="you@yourclinic.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === "submitting"}
                    className="w-full bg-transparent py-5 pr-36 text-[20px] text-ink focus:outline-none placeholder:text-mute-soft/60 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="absolute right-0 top-1/2 -translate-y-1/2 group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] text-ink font-medium disabled:opacity-60"
                    data-cursor-grow
                  >
                    <span>{status === "submitting" ? "Sending" : "Get a call"}</span>
                    <span className="block w-6 h-px bg-ink transition-all duration-500 group-hover:w-14" />
                  </button>
                </>
              ) : (
                <p className="py-5 text-[18px] text-ink font-serif italic">
                  Got it. Reply within one business day.
                </p>
              )}
            </form>
            {status === "error" && (
              <p className="mt-4 text-[13px] text-stamp">
                Something broke on our side. Email{" "}
                <a href="mailto:jack@savoca.studio" className="underline">
                  jack@savoca.studio
                </a>{" "}
                directly.
              </p>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
