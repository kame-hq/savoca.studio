import type { PlaybookChart as ChartType } from "@/content/playbooks/types";

/**
 * Custom SVG chart for playbook pages.
 * Three types: bar (volume), comparison (two-state), waterfall (sequential drop).
 * Brand colors: money green for highlight, steel for baseline, ink for axis.
 */
export function PlaybookChart({ chart }: { chart: ChartType }) {
  const max = Math.max(...chart.bars.map((b) => b.value));
  const padTop = 30;
  const padBot = 40;
  const padLeft = 24;
  const padRight = 24;
  const w = 720;
  const h = 320;
  const innerW = w - padLeft - padRight;
  const innerH = h - padTop - padBot;
  const barCount = chart.bars.length;
  const slot = innerW / barCount;
  const barW = Math.min(slot * 0.65, 72);

  return (
    <figure className="playbook-chart">
      <header className="playbook-chart-header">
        <div className="playbook-chart-title">{chart.title}</div>
        {chart.subtitle && (
          <div className="playbook-chart-subtitle">{chart.subtitle}</div>
        )}
      </header>

      <svg
        viewBox={`0 0 ${w} ${h}`}
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={chart.title}
        className="playbook-chart-svg"
      >
        {/* Grid lines — 4 horizontal */}
        {[0, 0.25, 0.5, 0.75, 1].map((p, i) => {
          const y = padTop + innerH * (1 - p);
          return (
            <line
              key={i}
              x1={padLeft}
              x2={w - padRight}
              y1={y}
              y2={y}
              stroke="#18181420"
              strokeWidth="0.5"
            />
          );
        })}

        {/* Bars */}
        {chart.bars.map((bar, i) => {
          const x = padLeft + slot * i + (slot - barW) / 2;
          const barH = (bar.value / max) * innerH;
          const y = padTop + innerH - barH;
          const fill = bar.highlight ? "var(--money)" : "#A8A8A1";
          const display = bar.display ?? String(bar.value);
          return (
            <g key={i}>
              {/* Bar */}
              <rect
                x={x}
                y={y}
                width={barW}
                height={barH}
                fill={fill}
              />
              {/* Value label above bar */}
              <text
                x={x + barW / 2}
                y={y - 8}
                textAnchor="middle"
                fontFamily="var(--font-fraunces), Georgia, serif"
                fontSize="18"
                fontWeight="500"
                fill={bar.highlight ? "var(--money)" : "var(--ink-2)"}
              >
                {display}
              </text>
              {/* X-axis label below bar */}
              <text
                x={x + barW / 2}
                y={h - padBot + 18}
                textAnchor="middle"
                fontFamily="var(--font-jetbrains-mono), monospace"
                fontSize="10"
                letterSpacing="0.05em"
                fill="var(--steel)"
                style={{ textTransform: "uppercase" }}
              >
                {bar.label}
              </text>
            </g>
          );
        })}

        {/* Y-axis */}
        <line
          x1={padLeft}
          x2={padLeft}
          y1={padTop}
          y2={padTop + innerH}
          stroke="var(--ink)"
          strokeWidth="1"
        />
        {/* X-axis */}
        <line
          x1={padLeft}
          x2={w - padRight}
          y1={padTop + innerH}
          y2={padTop + innerH}
          stroke="var(--ink)"
          strokeWidth="1"
        />
      </svg>

      <footer className="playbook-chart-footer">
        {chart.axis && (
          <span className="playbook-chart-axis">— {chart.axis}</span>
        )}
        {chart.footnote && (
          <span className="playbook-chart-footnote">{chart.footnote}</span>
        )}
      </footer>
    </figure>
  );
}
