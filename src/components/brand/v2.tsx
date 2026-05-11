// Savoca Studio v2 — brand atoms

import type { CSSProperties, ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Wordmark                                                                  */
/* -------------------------------------------------------------------------- */

type LogoLayout = "inline" | "stacked";

export function SVLogo({
  size = 28,
  color = "var(--ink)",
  accent = "var(--money-2)",
  layout = "stacked",
}: {
  size?: number;
  color?: string;
  accent?: string;
  layout?: LogoLayout;
}) {
  if (layout === "inline") {
    return (
      <span
        style={{
          display: "inline-flex",
          alignItems: "baseline",
          gap: size * 0.32,
          color,
          lineHeight: 1,
        }}
      >
        <span
          className="font-serif"
          style={{
            fontStyle: "italic",
            fontWeight: 500,
            fontSize: size,
            letterSpacing: "-0.045em",
          }}
        >
          Savoca
          <span
            style={{
              color: accent,
              fontStyle: "normal",
              marginLeft: -size * 0.02,
            }}
          >
            .
          </span>
        </span>
        <span
          className="font-mono"
          style={{
            fontWeight: 600,
            fontSize: size * 0.34,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color,
            opacity: 0.85,
            transform: `translateY(-${size * 0.14}px)`,
            display: "inline-block",
          }}
        >
          Studio
        </span>
      </span>
    );
  }

  // Stacked
  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        color,
        lineHeight: 1,
        letterSpacing: 0,
      }}
    >
      <span
        className="font-serif"
        style={{
          fontStyle: "italic",
          fontWeight: 500,
          fontSize: size,
          letterSpacing: "-0.045em",
        }}
      >
        Savoca
        <span
          style={{
            color: accent,
            fontStyle: "normal",
            marginLeft: -size * 0.02,
          }}
        >
          .
        </span>
      </span>
      <span
        className="font-mono"
        style={{
          marginTop: size * 0.06,
          paddingTop: size * 0.05,
          borderTop: `1px solid currentColor`,
          fontWeight: 600,
          fontSize: size * 0.22,
          letterSpacing: "0.42em",
          textTransform: "uppercase",
          textAlign: "right",
          opacity: 0.9,
        }}
      >
        Studio
      </span>
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Monogram + bare § initial                                                 */
/* -------------------------------------------------------------------------- */

export function SVMonogram({
  size = 96,
  fg = "var(--bone)",
  bg = "var(--ink)",
  accent = "var(--signal)",
  showRing = true,
  showDot = true,
}: {
  size?: number;
  fg?: string;
  bg?: string;
  accent?: string;
  showRing?: boolean;
  showDot?: boolean;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ display: "block" }} aria-hidden>
      <circle cx="50" cy="50" r="49" fill={bg} />
      {showRing && (
        <circle cx="50" cy="50" r="44" fill="none" stroke={fg} strokeWidth="0.5" opacity="0.45" />
      )}
      {showDot && <circle cx="94" cy="50" r="1.4" fill={accent} />}
      <text
        x="50"
        y="78"
        textAnchor="middle"
        style={{ fontFamily: "var(--font-fraunces-mono), Fraunces, Georgia, serif" }}
        fontWeight="700"
        fontSize="88"
        fill={fg}
      >
        §
      </text>
    </svg>
  );
}

export function SVInitial({
  size = 56,
  color = "var(--money)",
  weight = 700,
  className,
  style,
}: {
  size?: number;
  color?: string;
  weight?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      aria-hidden
      className={className}
      style={{
        fontFamily: "var(--font-fraunces-mono), Fraunces, Georgia, serif",
        fontWeight: weight,
        fontSize: size,
        color,
        lineHeight: 1,
        display: "inline-block",
        ...style,
      }}
    >
      §
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Eyebrow + NoMarker                                                        */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  color,
  dotColor = "var(--signal)",
}: {
  children: ReactNode;
  color?: string;
  dotColor?: string;
}) {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color: color ?? "var(--steel)",
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontWeight: 500,
      }}
    >
      <span
        aria-hidden
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: dotColor,
          display: "inline-block",
        }}
      />
      {children}
    </div>
  );
}

export function NoMarker({ n, color = "var(--steel)" }: { n: string | number; color?: string }) {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: 11,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        fontWeight: 500,
      }}
    >
      No. {String(n).padStart(2, "0")}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Glyph icon set — metaphor-driven, currentColor                            */
/* -------------------------------------------------------------------------- */

type GlyphName =
  | "drop"
  | "tooth"
  | "house"
  | "clipboard"
  | "net"
  | "stack"
  | "compass"
  | "arrow";

const GLYPHS: Record<GlyphName, ReactNode> = {
  // Drop — water/serum droplet for Medspas
  drop: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* teardrop body */}
      <path d="M24 6 C24 6 12 22 12 30 A12 12 0 0 0 36 30 C36 22 24 6 24 6 Z" />
      {/* highlight glint inside */}
      <path d="M19 30 A4 4 0 0 0 24 34" strokeWidth="1.2" opacity="0.7" />
    </svg>
  ),
  // Tooth — literal molar (crown + two roots)
  tooth: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* crown — top rounded shape */}
      <path d="M14 8 C12 8 10 10 10 14 C10 18 12 22 12 26 C12 30 13 34 15 38 C16 41 17 42 18 42 C19 42 20 40 20 36 C20 32 21 30 22 30 C23 30 24 30 24 30 C24 30 25 30 26 30 C27 30 28 32 28 36 C28 40 29 42 30 42 C31 42 32 41 33 38 C35 34 36 30 36 26 C36 22 38 18 38 14 C38 10 36 8 34 8 C30 8 28 10 24 10 C20 10 18 8 14 8 Z" />
      {/* surface ridge */}
      <path d="M16 16 C18 18 22 18 24 18 C26 18 30 18 32 16" strokeWidth="1.2" opacity="0.7" />
    </svg>
  ),
  // House — literal house silhouette (roof + walls + door + chimney)
  house: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* roof */}
      <path d="M6 24 L24 8 L42 24" />
      {/* chimney */}
      <path d="M34 14 L34 9 L38 9 L38 17" />
      {/* walls */}
      <path d="M10 22 L10 42 L38 42 L38 22" />
      {/* door */}
      <path d="M20 42 L20 30 L28 30 L28 42" />
      {/* door knob */}
      <circle cx="26" cy="36" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  // Clipboard — literal (board + clip + paper lines)
  clipboard: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {/* board */}
      <path d="M10 10 L38 10 L38 42 L10 42 Z" />
      {/* clip */}
      <path d="M19 6 L29 6 L29 13 L19 13 Z" />
      {/* paper lines */}
      <path d="M16 22 L32 22" />
      <path d="M16 28 L32 28" />
      <path d="M16 34 L26 34" />
    </svg>
  ),
  net: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 8 L42 8 L30 24 L30 38 L18 42 L18 24 Z" />
      <path d="M6 8 L18 24" />
      <path d="M42 8 L30 24" />
    </svg>
  ),
  stack: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M24 6 L42 14 L24 22 L6 14 Z" />
      <path d="M6 22 L24 30 L42 22" />
      <path d="M6 30 L24 38 L42 30" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 32 A18 18 0 0 1 42 32" />
      <path d="M11 32 L11 30" />
      <path d="M16 22 L17 23" />
      <path d="M24 18 L24 20" />
      <path d="M32 22 L31 23" />
      <path d="M37 32 L37 30" />
      <path d="M24 32 L33 22" strokeWidth="2" />
      <circle cx="24" cy="32" r="2" fill="currentColor" stroke="none" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 48 48" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M8 24 L40 24" />
      <path d="M30 14 L40 24 L30 34" />
    </svg>
  ),
};

export function Glyph({
  name,
  size = 48,
  color = "var(--ink)",
}: {
  name: GlyphName;
  size?: number;
  color?: string;
}) {
  return (
    <div style={{ width: size, height: size, color, flexShrink: 0 }}>{GLYPHS[name]}</div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Industry strip — marquee at hero bottom                                   */
/* -------------------------------------------------------------------------- */

const INDUSTRIES = [
  "Dental",
  "Medspa",
  "HVAC",
  "Veterinary",
  "Legal",
  "Wellness",
  "Fitness",
  "Real Estate",
];

export function IndustryStrip({
  color = "var(--ink)",
  bg = "transparent",
}: {
  color?: string;
  bg?: string;
}) {
  // Doubled for seamless loop with translateX(-50%) keyframe
  const doubled = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <div
      style={{
        background: bg,
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
        overflow: "hidden",
        padding: "14px 0",
      }}
      aria-label="Industries served"
    >
      <div
        className="industry-track font-serif w-max"
        style={{
          display: "flex",
          gap: 36,
          fontSize: "clamp(22px, 3vw, 32px)",
          color,
          whiteSpace: "nowrap",
          letterSpacing: "-0.02em",
        }}
      >
        {doubled.map((w, i) => (
          <span
            key={`${w}-${i}`}
            style={{ display: "inline-flex", alignItems: "center", gap: 36 }}
          >
            <span style={{ fontStyle: i % 2 ? "italic" : "normal" }}>{w}</span>
            {/* SVG separator — avoids unicode emoji rendering on iOS */}
            <span
              aria-hidden
              style={{ display: "inline-flex", alignItems: "center", color: "var(--signal)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                <path d="M7 1 L7 13" />
                <path d="M1 7 L13 7" />
                <path d="M2.5 2.5 L11.5 11.5" />
                <path d="M11.5 2.5 L2.5 11.5" />
              </svg>
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hairline rule helpers                                                     */
/* -------------------------------------------------------------------------- */

export function Rule({ color = "var(--rule)", className, style }: { color?: string; className?: string; style?: CSSProperties }) {
  return (
    <hr
      className={className}
      style={{ height: 1, background: color, border: 0, margin: 0, ...style }}
    />
  );
}

export function RuleThick({ color = "var(--ink)", className, style }: { color?: string; className?: string; style?: CSSProperties }) {
  return (
    <hr
      className={className}
      style={{ height: 2, background: color, border: 0, margin: 0, ...style }}
    />
  );
}
