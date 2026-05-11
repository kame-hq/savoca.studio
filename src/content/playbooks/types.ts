export type GlyphIcon =
  | "drop"
  | "tooth"
  | "house"
  | "clipboard"
  | "net"
  | "stack"
  | "compass"
  | "arrow";

export type Citation = {
  label: string;
  url?: string;
};

export type Stat = {
  value: string;
  label: string;
  source?: string;
};

export type AuditMove = {
  number: string;
  title: string;
  body: string;
};

export type Quote = {
  text: string;
  attribution: string;
};

export type MathRow = {
  label: string;
  value: string;
};

export type ChartBar = {
  label: string;
  value: number;
  display?: string; // optional rendered text (e.g. "$135K"); falls back to value
  highlight?: boolean;
};

export type PlaybookChart = {
  type: "bar" | "comparison" | "waterfall";
  title: string;
  subtitle?: string;
  axis?: string; // e.g. "calls / week" or "% of buyers"
  bars: ChartBar[];
  footnote?: string;
};

// Vertical-unique "why this vertical bleeds different" sidebar
export type Differentiator = {
  eyebrow: string;          // e.g. "Why medspas are different"
  headline: string;
  body: string;
  callout?: string;         // bold pull-stat
};

export type PlaybookContent = {
  slug: string;
  vertical: string;
  verticalShort: string;
  title: string;
  subtitle: string;
  edition: string;
  icon?: GlyphIcon;

  introBody: string;

  patternHeadline: string;
  patternBody: string;
  patternStats: Stat[];

  mathHeadline: string;
  mathBody: string;
  mathRows: MathRow[];
  mathConclusion: string;

  chart?: PlaybookChart;
  differentiator?: Differentiator;

  quotes: Quote[];
  auditMoves: AuditMove[];
  toolsBody: string;
  toolsList: string[];

  caseStudyHeadline: string;
  caseStudyBody: string;
  ctaHeadline: string;
  ctaBody: string;
  citations: Citation[];
};
