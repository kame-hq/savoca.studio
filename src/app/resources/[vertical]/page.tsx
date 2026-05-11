import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { playbooks, playbookSlugs } from "@/content/playbooks";
import { SVLogo } from "@/components/brand/v2";
import "./playbook.css";

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
    title: `${p.title} — Savoca.Studio`,
    description: p.subtitle,
  };
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<{ vertical: string }>;
}) {
  const { vertical } = await params;
  const p = playbooks[vertical];
  if (!p) notFound();

  return (
    <main className="playbook">
      {/* ── Cover ───────────────────────────────────────────── */}
      <section className="page page-cover">
        <header className="cover-header">
          <SVLogo size={22} layout="inline" />
          <span className="font-mono cover-edition">{p.edition}</span>
        </header>

        <div className="cover-body">
          <span className="font-mono cover-eyebrow">
            <span className="cover-eyebrow-dot" /> The Playbook · {p.verticalShort}
          </span>

          <h1 className="font-serif cover-title">
            {p.title}
            <span className="cover-signature">§</span>
          </h1>

          <p className="cover-subtitle">{p.subtitle}</p>
        </div>

        <footer className="cover-footer">
          <span className="font-mono cover-footer-l">No revenue left behind.</span>
          <span className="font-mono cover-footer-r">savoca.studio</span>
        </footer>
      </section>

      {/* ── Intro ────────────────────────────────────────────── */}
      <section className="page">
        <Eyebrow n="01" label="Why this playbook" />
        <div className="prose-block">
          <p>{p.introBody}</p>
        </div>
      </section>

      {/* ── The Pattern ──────────────────────────────────────── */}
      <section className="page">
        <Eyebrow n="02" label="The pattern" />
        <h2 className="font-serif section-headline">{p.patternHeadline}</h2>
        <div className="prose-block">
          <p>{p.patternBody}</p>
        </div>

        <div className="stat-grid">
          {p.patternStats.map((s, i) => (
            <div key={i} className="stat-cell">
              <span className="font-serif stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
              {s.source && (
                <span className="font-mono stat-source">{s.source}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── The Math ─────────────────────────────────────────── */}
      <section className="page page-money">
        <Eyebrow n="03" label="The math" theme="money" />
        <h2 className="font-serif section-headline section-headline-money">
          {p.mathHeadline}
        </h2>
        <div className="prose-block prose-money">
          <p>{p.mathBody}</p>
        </div>

        <table className="math-table">
          <tbody>
            {p.mathRows.map((r, i) => (
              <tr key={i}>
                <td className="math-table-label">{r.label}</td>
                <td className="math-table-value font-mono">{r.value}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="math-conclusion font-serif">{p.mathConclusion}</p>
      </section>

      {/* ── Real Operator Voices ─────────────────────────────── */}
      <section className="page">
        <Eyebrow n="04" label="Real operator voices" />
        <div className="quote-stack">
          {p.quotes.map((q, i) => (
            <blockquote key={i} className="quote">
              <p className="font-serif quote-text">&ldquo;{q.text}&rdquo;</p>
              <cite className="font-mono quote-attr">— {q.attribution}</cite>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ── The Four Audit Moves ─────────────────────────────── */}
      <section className="page">
        <Eyebrow n="05" label="Four moves to plug the leak" />
        <div className="audit-stack">
          {p.auditMoves.map((m) => (
            <article key={m.number} className="audit-move">
              <span className="font-mono audit-move-num">{m.number}</span>
              <div>
                <h3 className="font-serif audit-move-title">{m.title}</h3>
                <p className="audit-move-body">{m.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Tools sidebar ────────────────────────────────────── */}
      <section className="page">
        <Eyebrow n="06" label="Software in your stack" />
        <p className="prose-block">{p.toolsBody}</p>
        <ul className="tools-list">
          {p.toolsList.map((t, i) => (
            <li key={i} className="font-mono tools-item">
              {t}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Case Study ───────────────────────────────────────── */}
      <section className="page">
        <Eyebrow n="07" label="Case study" />
        <h2 className="font-serif section-headline">{p.caseStudyHeadline}</h2>
        <div className="prose-block">
          <p>{p.caseStudyBody}</p>
        </div>
      </section>

      {/* ── Close + CTA ──────────────────────────────────────── */}
      <section className="page page-close">
        <Eyebrow n="08" label="Close" theme="dark" />
        <h2 className="font-serif close-headline">{p.ctaHeadline}</h2>
        <p className="close-body">{p.ctaBody}</p>

        <div className="close-cta-row">
          <Link href="/book" className="close-cta-primary cta-arrow-host">
            Book a 30-min audit <span className="cta-arrow">→</span>
          </Link>
          <a href="mailto:hello@savoca.studio" className="close-cta-secondary">
            hello@savoca.studio
          </a>
        </div>

        <footer className="close-footer">
          <SVLogo size={20} layout="inline" color="var(--bone)" accent="var(--gold)" />
          <span className="font-mono close-footer-r">No revenue left behind.</span>
        </footer>
      </section>

      {/* ── Citations ────────────────────────────────────────── */}
      <section className="page page-citations">
        <Eyebrow n="·" label="Sources" />
        <ol className="citations-list">
          {p.citations.map((c, i) => (
            <li key={i} className="font-mono citation-item">
              {c.url ? (
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.label}
                </a>
              ) : (
                <span>{c.label}</span>
              )}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

/* ── tiny inline atoms ──────────────────────────────────────── */
function Eyebrow({
  n,
  label,
  theme = "default",
}: {
  n: string;
  label: string;
  theme?: "default" | "money" | "dark";
}) {
  const cls = `eyebrow eyebrow-${theme} font-mono`;
  return (
    <div className={cls}>
      <span className="eyebrow-num">{n}</span>
      <span className="eyebrow-rule" />
      <span className="eyebrow-label">{label}</span>
    </div>
  );
}
