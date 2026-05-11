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

export type PlaybookContent = {
  slug: string;
  vertical: string;
  verticalShort: string;
  title: string;
  subtitle: string;
  edition: string;

  introBody: string;

  patternHeadline: string;
  patternBody: string;
  patternStats: Stat[];

  mathHeadline: string;
  mathBody: string;
  mathRows: MathRow[];
  mathConclusion: string;

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
