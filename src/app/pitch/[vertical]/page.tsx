import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { playbooks, playbookSlugs } from "@/content/playbooks";
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
    title: `${p.vertical} — Pitch · Savoca.Studio`,
    description: `Savoca.Studio pitch deck for ${p.vertical}.`,
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

  return (
    <main className="deck">
      {/* ── Slide 1 — Cover ──────────────────────────────── */}
      <section className="slide slide-cover">
        <header className="slide-chrome-top">
          <span>Savoca.Studio · §</span>
          <span>{p.edition}</span>
        </header>

        <div>
          <div className="slide-cover-mark">§</div>
          <h1 className="slide-cover-vertical">
            {p.vertical}
          </h1>
          <p className="slide-cover-sub">
            No revenue left behind. · savoca.studio
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

      {/* ── Slide 5 — What I Build ──────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>05 · What I Build</span>
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
            { tag: "01", name: "The Partner / Solo", price: "$397/mo · live in ~1 wk", body: "Just you — owner-operator, one-person shop. Site + booking + lead-capture built and kept live." },
            { tag: "02", name: "The Partner / Studio", price: "$1,497/mo · live in ~2 wks", body: "An established business with a team. Phone + CRM + calendar + follow-up wired, weekly review, ongoing tuning." },
            { tag: "03", name: "The Partner / Operation", price: "$2,995/mo · live in ~2-4 wks", body: "Multi-location or high-volume. Custom-built system, monthly deep-dive, priority on-call." },
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
          <span>$500 kickoff deposit, credited · 3-month minimum</span>
          <span>savoca.studio/#services</span>
        </footer>
      </section>

      {/* ── Slide 6 — How (Timeline) ────────────────────── */}
      <section className="slide">
        <header className="slide-chrome-top">
          <span>06 · How</span>
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

      {/* ── Slide 7 — CTA (Dark) ────────────────────────── */}
      <section className="slide slide-cta">
        <header className="slide-chrome-top">
          <span>07 · Start</span>
          <span>30 minutes. No deck. No pitch.</span>
        </header>

        <div style={{ margin: "auto 0" }}>
          <h2 className="cta-headline">
            {p.ctaHeadline}
            <br />
            <span className="accent">Book the audit.</span>
          </h2>

          <p className="cta-body-dark">
            {p.ctaBody}
          </p>

          <div className="cta-button-row">
            cal.com/savoca/audit · 30 min · free →
          </div>
        </div>

        <footer className="slide-chrome-bottom">
          <span>Savoca.Studio · § · Austin TX</span>
          <span>jack@savoca.studio</span>
        </footer>
      </section>
    </main>
  );
}
