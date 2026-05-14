/**
 * Savoca Studio — central CTA link config.
 *
 * Single source of truth for every booking + payment link on the site.
 *
 * OFFER MODEL (locked 2026-05-14 — see feedback_savoca_pricing memory):
 * One product, "The Partner", in 3 bands by client scale. Each band is a
 * monthly range — current number is the floor, scope sets where in the range:
 *   - Solo      — $297–$697/mo     retainer · $297 deposit · live in ~1 week
 *   - Studio    — $997–$2,297/mo   retainer · $597 deposit · live in ~2 weeks
 *   - Operation — $2,297–$4,995/mo retainer · $997 deposit · live in ~2-4 weeks
 * Per-band kickoff deposit (Solo $297 / Studio $597 / Operation $997), credited
 * to month 1. The retainer covers the build AND the run. Free discovery call
 * scopes it. 3-month minimum.
 *
 * SETUP STEPS:
 *
 * 1. CAL.COM
 *    - Discovery call event at cal.com/savoca/<slug>
 *    - CAL_DISCOVERY below = the public URL
 *
 * 2. STRIPE (optional — retainers are discovery-first, so payment links
 *    are not strictly required; useful for the kickoff deposits later)
 *    - Create one deposit Payment Link per band ($297 / $597 / $997)
 *      + per-band retainer subscriptions
 *    - Success URL → https://savoca.studio/thanks?tier=<slug>
 *
 * Until URLs are filled in, CTAs fall back to mailto.
 */

export const CAL_DISCOVERY = "https://cal.com/savoca/audit";
// TODO: rename the Cal.com event slug from "audit" to "discovery" — the
// offer no longer has an audit tier. URL still works as-is meanwhile.
export const CAL_DISCOVERY_LIVE = true;

// Per-band kickoff deposit, credited to month 1 (Solo $297 / Studio $597 /
// Operation $997). TODO: one Stripe Payment Link per band; map by TierSlug.
export const STRIPE_DEPOSIT = "https://buy.stripe.com/REPLACE_WITH_DEPOSIT_LINK";
// Flip to true once the real Stripe deposit links are pasted above.
export const STRIPE_LIVE = false;

export const EMAIL = "jack@savoca.studio";

const INQUIRY_BODY_TEMPLATE = (tierName: string) =>
  `Hi Jack — interested in ${tierName}.

A bit about us:
- Business name:
- What we do:
- City:
- What's leaking (missed calls / no-shows / dead follow-up / not sure):

Best time for a quick discovery call this week:

Thanks,
`;

export function mailtoLink(subject: string, body: string): string {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function bookCallLink(): string {
  return CAL_DISCOVERY_LIVE
    ? CAL_DISCOVERY
    : mailtoLink(
        "Discovery call",
        "Hi Jack — would like to book a 30-min discovery call.\n\nA bit about us:\n- Business:\n- What we do:\n- City:\n\nBest times this week:\n\nThanks,\n"
      );
}

export type TierSlug = "solo" | "studio" | "operation";

export type TierCtas = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function tierCtas(slug: TierSlug, tierName: string, price: string): TierCtas {
  const inquirySubject = `${tierName} · ${price}`;
  const mailto = mailtoLink(inquirySubject, INQUIRY_BODY_TEMPLATE(tierName));

  // Every band is discovery-first — the retainer is a relationship, not a
  // checkout. Primary CTA = book the free discovery call. Secondary, once
  // Stripe is live, is the band's kickoff deposit link.
  void slug;
  return {
    primary: { label: "Book a call", href: bookCallLink() },
    secondary: STRIPE_LIVE
      ? { label: "Kickoff deposit", href: STRIPE_DEPOSIT }
      : { label: "Email me", href: mailto },
  };
}
