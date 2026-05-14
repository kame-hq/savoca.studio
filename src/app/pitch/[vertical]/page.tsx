import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { playbooks, playbookSlugs } from "@/content/playbooks";
import { SVLogo, SVInitial } from "@/components/brand/v2";
import "./pitch.css";

export async function generateStaticParams() {
  return playbookSlugs.map((vertical) => ({ vertical }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ vertical: string }>;
}): Promise<Metadata> {
  const { vertical } = await params;
  const p = playbooks[vertical];
  if (!p) return {};
  return {
    title: `${p.vertical} — Pitch · savoca.studio`,
    description: `savoca.studio pitch deck for ${p.vertical}.`,
  };
}

export default async function PitchDeck({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const p = playbooks[vertical];
  if (!p) notFound();

  const featuredQuote = p.quotes[0];
  const headlineStat = p.patternStats[0];

  // The Demand-to-Delivery System — universal flow, not vertical-specific.
  const leakFlow: { label: string; desc: string; leak: string | null }[] = [
    { label: "Demand", desc: "Ad, referral, search, the DM.", leak: null },
    {
      label: "Capture",
      desc: "The call, the form, the inbound.",
      leak: "Goes unanswered — no after-hours, no text-back.",
    },
    {
      label: "Respond",
      desc: "First reply. Qualification.",
      leak: "Reply lands hours late. Speed-to-lead collapses.",
    },
    {
      label: "Convert",
      desc: "Quote, booking, deposit.",
      leak: "Quote goes cold. No reminder, no sequence.",
    },
    {
      label: "Deliver",
      desc: "The job runs.",
      leak: "Tracked in texts. No status, no handoff.",
    },
    {
      label: "Retain",
      desc: "Review, rebook, reactivate.",
      leak: "Never asked. No review, no reactivation.",
    },
  ];

  return (
    <main className="deck">
      {/* ── Slide 1 — Cover ──────────────────────────────── */}
      <section className="slide slide-cover">
        <header className="slide-chrome-top">
          <span>savoca.studio</span>
          <span>{p.edition}</span>
        </header>

        <div className="slide-cover-center">
          <div className="slide-cover-lockup">
            <SVInitial size={104} color="var(--money)" />
            <SVLogo size={30} layout="inline" />
          </div>
          <h1 className="slide-cover-vertical">{p.vertical}</h1>
          <p className="slide-cover-sub">
            The operating layer between demand and delivery · savoca.studio
          </p>
        </div>

        <footer className="slide-chrome-bottom">
          <span>{p.verticalShort} · Operator Brief</span>
          <span>2026</span>
        </footer>
      </section>

      {/* ── Slide 2 — The Pattern ───────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>02 · The Pattern</span>
          <span>{p.verticalShort}</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          What's leaking
        </span>

        <h2 className="slide-title">
          {p.patternHeadline}
        </h2>

        <div className="slide-stats">
          {p.patternStats.slice(0, 4).map((s, i) => (
            <div key={i} className="slide-stat">
              <div className="slide-stat-value">{s.value}</div>
              <div className="slide-stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <footer className="slide-chrome-bottom">
          <span>Source: cited in full playbook</span>
          <span>savoca.studio/resources/{p.slug}</span>
        </footer>
      </section>

      {/* ── Slide 3 — The Math ──────────────────────────── */}
      <section className="slide slide-math">
        <header className="slide-chrome-top">
          <span>03 · The Math</span>
          <span>{p.verticalShort}</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          What it costs
        </span>

        <h2 className="math-headline">
          <span className="accent">$</span>
          {(() => {
            const last = p.mathRows[p.mathRows.length - 1];
            const m = last.value.match(/[\d,]+/);
            return m ? m[0] : "—";
          })()}
          <br />
          walks out the door.
        </h2>

        <p className="math-sub">
          {p.mathConclusion}
        </p>

        <footer className="slide-chrome-bottom">
          <span>Conservative worked example</span>
          <span>{p.verticalShort} operator math</span>
        </footer>
      </section>

      {/* ── Slide 4 — Operator Voice ────────────────────── */}
      {featuredQuote && (
        <section className="slide slide-quote">
          <header className="slide-chrome-top">
            <span>04 · Operator Voice</span>
            <span>{p.verticalShort}</span>
          </header>

          <div style={{ margin: "auto 0" }}>
            <div className="quote-mark">"</div>
            <p className="quote-text">{featuredQuote.text}</p>
            <p className="quote-attr">— {featuredQuote.attribution}</p>
          </div>

          <footer className="slide-chrome-bottom">
            <span>Verbatim from operator forums</span>
            <span>savoca.studio</span>
          </footer>
        </section>
      )}

      {/* ── Slide 5 — The Revenue Leak Map ──────────────── */}
      <section className="slide slide-leakmap">
        <header className="slide-chrome-top">
          <span>05 · The Revenue Leak Map</span>
          <span>{p.verticalShort}</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          The Demand-to-Delivery System
        </span>

        <h2 className="slide-title">
          Demand to delivery —{" "}
          <span className="slide-title-italic">and where it leaks.</span>
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
            Visibility —{" "}
            <em>the reporting that catches every leak above.</em>
          </span>
          <span className="leakmap-visibility-note">
            Every red mark is money already spent on demand, lost before
            delivery. Each one is a system I build — and then keep running.
          </span>
        </div>

        <footer className="slide-chrome-bottom">
          <span>The operating layer between demand and delivery</span>
          <span>savoca.studio</span>
        </footer>
      </section>

      {/* ── Slide 6 — What I Build ──────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>06 · What I Build</span>
          <span>Tier ladder</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          One partner · three bands
        </span>

        <h2 className="slide-title">
          I build it.
          <br />
          <span className="slide-title-italic">I run it.</span>
        </h2>

        <div className="tier-grid">
          {[
            { tag: "01", name: "The Partner / Solo", price: "$297–$697/mo · live in ~1 wk", body: "Just you — owner-operator, one-person shop. Site, booking, follow-up built and kept running." },
            { tag: "02", name: "The Partner / Studio", price: "$997–$2,297/mo · live in ~2 wks", body: "An established business with a team. Phone + CRM + calendar + follow-up wired, weekly review, ongoing tuning." },
            { tag: "03", name: "The Partner / Operation", price: "$2,297–$4,995/mo · live in ~2-4 wks", body: "Multi-location or high-volume. Custom-built system, monthly deep-dive, priority on-call." },
          ].map((t) => (
            <div key={t.tag} className="tier-card">
              <div className="tier-card-eyebrow">Band {t.tag}</div>
              <div className="tier-card-name">{t.name}</div>
              <div className="tier-card-price">{t.price}</div>
              <div className="tier-card-body">{t.body}</div>
            </div>
          ))}
        </div>

        <footer className="slide-chrome-bottom">
          <span>Kickoff deposit $297–$997 by band, credited · 3-month minimum</span>
          <span>savoca.studio/#services</span>
        </footer>
      </section>

      {/* ── Slide 7 — How (Timeline) ────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>07 · How</span>
          <span>30-day playbook</span>
        </header>

        <span className="slide-eyebrow">
          <span className="slide-eyebrow-dot" />
          Day 1 to Day 30
        </span>

        <h2 className="slide-title">
          Four moves.{" "}
          <span className="slide-title-italic">Real numbers.</span>
        </h2>

        <div className="timeline">
          {p.auditMoves.slice(0, 4).map((m) => (
            <div key={m.number} className="timeline-step">
              <div className="timeline-step-eyebrow">{m.number}</div>
              <div className="timeline-step-name">{m.title}</div>
              <div className="timeline-step-body">{m.body.slice(0, 180)}...</div>
            </div>
          ))}
        </div>

        <footer className="slide-chrome-bottom">
          <span>Full detail: savoca.studio/resources/{p.slug}</span>
          <span>30-day playbook</span>
        </footer>
      </section>

      {/* ── Slide 8 — CTA (Dark) ────────────────────────── */}
      <section className="slide slide-cta">
        <header className="slide-chrome-top">
          <span>08 · Start</span>
          <span>30 minutes. No deck. No pitch.</span>
        </header>

        <div style={{ margin: "auto 0" }}>
          <h2 className="cta-headline">
            {p.ctaHeadline}
            <br />
            <span className="accent">Book the call.</span>
          </h2>

          <p className="cta-body-dark">
            {p.ctaBody}
          </p>

          <div className="cta-button-row">
            cal.com/savoca/audit · 30 min · free →
          </div>
        </div>

        <footer className="slide-chrome-bottom">
          <span>savoca.studio · Austin TX</span>
          <span>jack@savoca.studio</span>
        </footer>
      </section>
    </main>
  );
}
