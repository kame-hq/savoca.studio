import type { Metadata } from "next";
import { SVLogo, SVInitial } from "@/components/brand/v2";
import "../../pitch/[vertical]/pitch.css";

export const metadata: Metadata = {
  title: "Tap In Embroidery — Growth Audit · Savoca Studio",
  description:
    "A no-charge growth audit of Tap In Embroidery's brand, website, and competitive position — prepared by Savoca Studio.",
};

/* One-off client deliverable. Content is hardcoded by design — not data-driven
   like /pitch/[vertical]. Reuses pitch.css chrome + brand/v2 components so it
   stays on-brand without a separate stylesheet. */

const leakFlow: { label: string; desc: string; leak: string | null }[] = [
  { label: "Demand", desc: "IG, Facebook, word of mouth.", leak: null },
  {
    label: "Capture",
    desc: "The quote request lands.",
    leak: "Only a Gmail address. No form, no after-hours catch.",
  },
  {
    label: "Respond",
    desc: "“Same-day quote” reply.",
    leak: "Holds only when you’re at the inbox — not the machine.",
  },
  {
    label: "Convert",
    desc: "Price, art approval, deposit.",
    leak: "Manual email thread. No pricing shown, quotes go cold.",
  },
  {
    label: "Deliver",
    desc: "Digitize, stitch, ship.",
    leak: "No status, no turnaround stated up front.",
  },
  {
    label: "Retain",
    desc: "Reorder, referral, review.",
    leak: "Never asked. No list, no review, no reorder nudge.",
  },
];

export default function TapInAudit() {
  return (
    <main className="deck">
      {/* ── 01 — Cover ─────────────────────────────────── */}
      <section className="slide slide-cover">
        <header className="slide-chrome-top">
          <span>Savoca Studio</span>
          <span>Growth Audit · 2026</span>
        </header>

        <div className="slide-cover-center">
          <div className="slide-cover-lockup">
            <SVLogo size={46} layout="inline" />
            <SVInitial
              size={50}
              color="var(--money)"
              style={{ transform: "translateY(-0.08em)" }}
            />
          </div>
          <h1 className="slide-cover-vertical">Tap In Embroidery</h1>
          <p className="slide-cover-sub">
            Brand &amp; Website Growth Audit · Prepared for DeChaun Grice
          </p>
        </div>

        <footer className="slide-chrome-bottom">
          <span>tapinembroidery.com</span>
          <span>No charge · No obligation</span>
        </footer>
      </section>

      {/* ── 02 — What I looked at ──────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>02 · The Snapshot</span>
          <span>Tap In</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          What you’ve got today
        </span>

        <h2 className="slide-title">
          A real brand.{" "}
          <span className="slide-title-italic">A site that just sits there.</span>
        </h2>

        <div className="slide-body">
          <p>
            Four pages — Home, Portfolio, Services, Contact. A clean name, a
            tagline worth keeping (“Tap In, With Confidence”), and good-looking
            work in the portfolio.
          </p>
          <p>
            But the site is a brochure. It tells people you exist. It doesn’t
            <strong> catch a single lead</strong>, quote a single job, or follow
            up with anyone. Every dollar of work has to route through one Gmail
            inbox, by hand. That’s the leak — and it’s fixable.
          </p>
        </div>

        <footer className="slide-chrome-bottom">
          <span>Reviewed: home · portfolio · services · contact</span>
          <span>savoca.studio</span>
        </footer>
      </section>

      {/* ── 03 — Branding teardown ─────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>03 · The Brand</span>
          <span>Tap In</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          What’s working, what’s undercutting you
        </span>

        <h2 className="slide-title">The brand is ahead of the business.</h2>

        <div className="slide-stats">
          <div className="slide-stat">
            <div className="slide-stat-value">Keep</div>
            <div className="slide-stat-label">
              “Tap In, With Confidence.” It’s ownable, it’s a verb, and it fits
              the name. Build the whole identity around it.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value">Fix</div>
            <div className="slide-stat-label">
              You own tapinembroidery.com but email from
              <strong> @gmail.com</strong>. That one detail tells buyers
              “hobby,” not “shop.” A name@tapinembroidery.com address is a
              five-minute, trust-changing fix.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value">Add</div>
            <div className="slide-stat-label">
              No logo lockup, color, or type system shown. The portfolio proves
              the craft — the brand around it doesn’t match that quality yet.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value">Prove</div>
            <div className="slide-stat-label">
              Zero trust signals — no reviews, no job count, no “stitched for
              ___.” You’ve done the work; the site doesn’t say so.
            </div>
          </div>
        </div>

        <footer className="slide-chrome-bottom">
          <span>Brand is ahead — the plumbing is behind</span>
          <span>savoca.studio</span>
        </footer>
      </section>

      {/* ── 04 — Website teardown ──────────────────────── */}
      <section className="slide slide-math">
        <header className="slide-chrome-top">
          <span>04 · The Website</span>
          <span>Where it leaks</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          Six places the site loses you work
        </span>

        <h2 className="slide-title" style={{ fontSize: "44px" }}>
          A brochure can’t{" "}
          <span className="slide-title-italic">close.</span>
        </h2>

        <div className="slide-stats" style={{ marginTop: "0.5rem" }}>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "26px" }}>
              No phone, no form
            </div>
            <div className="slide-stat-label">
              Contact is one Gmail address. No tap-to-call, no quote form —
              every lead is a manual email.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "26px" }}>
              No price, no quote tool
            </div>
            <div className="slide-stat-label">
              Buyers can’t see a starting price or get an instant estimate. They
              bounce to a shop that shows one.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "26px" }}>
              “Same-day” with no system
            </div>
            <div className="slide-stat-label">
              The promise is good. It only holds when you’re at the inbox — not
              behind the machine on a run.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "26px" }}>
              No capture, no follow-up
            </div>
            <div className="slide-stat-label">
              No email list, no reorder nudge, no review ask. Every past
              customer is a cold start.
            </div>
          </div>
        </div>

        <footer className="slide-chrome-bottom">
          <span>Findings from the live site, 2026</span>
          <span>tapinembroidery.com</span>
        </footer>
      </section>

      {/* ── 05 — The Revenue Leak Map ──────────────────── */}
      <section className="slide slide-leakmap">
        <header className="slide-chrome-top">
          <span>05 · The Revenue Leak Map</span>
          <span>Tap In</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          From the DM to the reorder
        </span>

        <h2 className="slide-title">
          Where the work comes in —{" "}
          <span className="slide-title-italic">and where it slips out.</span>
        </h2>

        <div className="leakmap-flow">
          {leakFlow.map((step, i) => (
            <div key={step.label} className="leakmap-node">
              <span
                className="leakmap-dot"
                style={{
                  background: step.leak ? "var(--signal)" : "var(--money)",
                }}
              />
              <div className="leakmap-num">{`0${i + 1}`}</div>
              <div className="leakmap-name">{step.label}</div>
              <div className="leakmap-desc">{step.desc}</div>
              {step.leak ? (
                <div className="leakmap-leak">
                  <div className="leakmap-leak-tag">Leak</div>
                  <div className="leakmap-leak-text">{step.leak}</div>
                </div>
              ) : (
                <div className="leakmap-enter">Money in</div>
              )}
            </div>
          ))}
        </div>

        <div className="leakmap-visibility">
          <span className="leakmap-visibility-label">
            Five of six steps leak —{" "}
            <em>and every one runs through one inbox.</em>
          </span>
          <span className="leakmap-visibility-note">
            The work and the talent are there. What’s missing is the system that
            catches the lead, shows a price, follows up, and asks for the
            reorder — without you doing it by hand.
          </span>
        </div>

        <footer className="slide-chrome-bottom">
          <span>The backend of service business growth</span>
          <span>savoca.studio</span>
        </footer>
      </section>

      {/* ── 06 — What the competition does ─────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>06 · The Competition</span>
          <span>What good shops ship online</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          What buyers compare you to
        </span>

        <h2 className="slide-title" style={{ fontSize: "46px" }}>
          They quote in seconds.{" "}
          <span className="slide-title-italic">You quote in emails.</span>
        </h2>

        <div className="slide-stats" style={{ marginTop: "0.5rem" }}>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "24px" }}>
              Instant quote
            </div>
            <div className="slide-stat-label">
              Blankstyle &amp; Web2Ink price a job from logo size / stitch count
              on the spot. Stitch America: upload art, free estimate in one day.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "24px" }}>
              No surprise pricing
            </div>
            <div className="slide-stat-label">
              Broken Arrow shows pricing up front and an online designer. Buyers
              trust the shop that tells them the number before they ask.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "24px" }}>
              The going rate
            </div>
            <div className="slide-stat-label">
              ~$0.50–$1.50 per 1,000 stitches, $8–$30 a piece, $20–$100 one-time
              digitizing, 7–14 day turnaround. Most post it plainly.
            </div>
          </div>
          <div className="slide-stat">
            <div className="slide-stat-value" style={{ fontSize: "24px" }}>
              Your edge
            </div>
            <div className="slide-stat-label">
              You’re the local, named maker — DeChaun, not a faceless portal.
              That wins. But only if the site is as easy to buy from as theirs.
            </div>
          </div>
        </div>

        <footer className="slide-chrome-bottom">
          <span>Sources: Blankstyle · Stitch America · Broken Arrow · Web2Ink</span>
          <span>2026 industry rates</span>
        </footer>
      </section>

      {/* ── 07 — The math ──────────────────────────────── */}
      <section className="slide slide-math">
        <header className="slide-chrome-top">
          <span>07 · The Math</span>
          <span>Illustrative</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          What the leak quietly costs
        </span>

        <h2 className="math-headline">
          <span className="accent">$</span>1,800
          <br />
          a month, conservatively.
        </h2>

        <p className="math-sub">
          Illustrative, not your books: say 20 quote requests a month. If 4 land
          after hours and go cold, and 2 more bounce because there’s no price or
          form, that’s 6 lost jobs. At a modest $300 average order, that’s
          ~$1,800/mo — ~$21,600 a year — walking out before you ever see it. Cut
          that in half and the system still pays for itself many times over.
        </p>

        <footer className="slide-chrome-bottom">
          <span>Conservative, illustrative — we’d size it to your real numbers</span>
          <span>Tap In math</span>
        </footer>
      </section>

      {/* ── 08 — What I'd build ────────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>08 · The Fix</span>
          <span>One partner · built &amp; run</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          Find the leak → build the system → keep it running
        </span>

        <h2 className="slide-title" style={{ fontSize: "48px" }}>
          I build it.{" "}
          <span className="slide-title-italic">I keep it running.</span>
        </h2>

        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-step-eyebrow">01 · Capture</div>
            <div className="timeline-step-name">Quote form + tap-to-call</div>
            <div className="timeline-step-body">
              A real quote form and a phone CTA on every page. Domain email.
              Nothing depends on you checking Gmail.
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-step-eyebrow">02 · Price</div>
            <div className="timeline-step-name">Instant estimate</div>
            <div className="timeline-step-body">
              Buyers pick item + size + quantity and see a starting price on the
              spot — like the shops they’re comparing you to.
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-step-eyebrow">03 · Follow up</div>
            <div className="timeline-step-name">Auto reply + nudge</div>
            <div className="timeline-step-body">
              Same-day quote, automatically. A reminder if it goes quiet. A
              review + reorder ask after the job ships.
            </div>
          </div>
          <div className="timeline-step">
            <div className="timeline-step-eyebrow">04 · Prove</div>
            <div className="timeline-step-name">Brand + proof</div>
            <div className="timeline-step-body">
              Logo system around “Tap In, With Confidence,” real reviews on the
              page, and the portfolio doing sales work.
            </div>
          </div>
        </div>

        <footer className="slide-chrome-bottom">
          <span>The Partner / Solo · $297–$697/mo + $297 kickoff, credited · 3-mo min</span>
          <span>Built for an owner-operator shop</span>
        </footer>
      </section>

      {/* ── 09 — CTA ───────────────────────────────────── */}
      <section className="slide slide-cta">
        <header className="slide-chrome-top">
          <span>09 · Start</span>
          <span>30 minutes. No deck. No pitch.</span>
        </header>

        <div style={{ margin: "auto 0" }}>
          <h2 className="cta-headline">
            The work’s already good.
            <br />
            <span className="accent">Let’s make the site sell it.</span>
          </h2>

          <p className="cta-body-dark">
            This audit is free and yours to keep — use it with anyone. If you
            want the systems built and kept running, that’s what I do. One call,
            30 minutes, no slides. We’ll size the fix to your real numbers and
            you decide from there.
          </p>

          <div className="cta-button-row">
            cal.com/savoca/discovery · 30 min · free →
          </div>
        </div>

        <footer className="slide-chrome-bottom">
          <span>Jack Savoca · Savoca Studio · Austin TX</span>
          <span>jack@savoca.studio</span>
        </footer>
      </section>
    </main>
  );
}
