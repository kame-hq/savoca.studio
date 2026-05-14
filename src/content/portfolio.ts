export type PortfolioItem = {
  slug: string;
  name: string;
  operator: string;
  vertical: string;
  tierDelivered: string;
  year: string;
  url: string;
  summary: string;
  delivered: string[];
  status: "live" | "in-production";
};

export const portfolio: Record<string, PortfolioItem> = {
  "krazy-strong": {
    slug: "krazy-strong",
    name: "Krazy Strong",
    operator: "Karen Lopez · Austin, TX",
    vertical: "Coaching · Hyrox + Deka athletics",
    tierDelivered: "Stacker",
    year: "2026",
    url: "https://krazystrong.app",
    summary:
      "Solo coach with a real audience and zero infrastructure. Built the lead-capture stack end-to-end — booking flow, program PDF auto-delivery, mobile-first marketing site — so she can convert DMs into paying clients without losing time chasing replies.",
    delivered: [
      "Mobile-first marketing site (krazystrong.app)",
      "Cal.com booking flow + auto-confirm",
      "Lead capture → instant program-PDF email via Resend",
      "Three-tier coaching offer ($60 / $150 / $250)",
      "ManyChat IG auto-reply install guide",
      "Brand system + asset pipeline",
    ],
    status: "live",
  },
};

export const portfolioSlugs = Object.keys(portfolio);
