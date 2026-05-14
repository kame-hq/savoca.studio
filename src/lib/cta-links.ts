/**
 * Savoca Studio — central CTA link config.
 *
 * Single source of truth for every booking + payment link on the site.
 *
 * OFFER MODEL (locked 2026-05-14 — see feedback_savoca_pricing memory):
 * One product, "The Partner", in 3 bands by client scale:
 *   - Solo      — from $750 setup  / $497/mo  retainer
 *   - Studio    — from $2,000 setup / $1,497/mo retainer
 *   - Operation — from $4,000 setup / $2,995/mo retainer
 * Build it, run it. Free discovery call scopes the build. 3-month minimum.
 *
 * SETUP STEPS:
 *
 * 1. CAL.COM
 *    - Discovery call event at cal.com/savoca/<slug>
 *    - CAL_DISCOVERY below = the public URL
 *
 * 2. STRIPE (optional — retainers are discovery-first, so payment links
 *    are not strictly required; useful for setup-fee deposits later)
 *    - Create Payment Links per band if/when you want pay-direct
 *    - Success URL → https://savoca.studio/thanks?tier=<slug>
 *
 * Until URLs are filled in, CTAs fall back to mailto.
 */

export const CAL_DISCOVERY = "https://cal.com/savoca/audit";
// TODO: rename the Cal.com event slug from "audit" to "discovery" — the
// offer no longer has an audit tier. URL still works as-is meanwhile.
export const CAL_DISCOVERY_LIVE = true;

export const STRIPE_SOLO = "https://buy.stripe.com/REPLACE_WITH_SOLO_LINK";
export const STRIPE_STUDIO = "https://buy.stripe.com/REPLACE_WITH_STUDIO_LINK";
export const STRIPE_OPERATION = "https://buy.stripe.com/REPLACE_WITH_OPERATION_LINK";
// Flip to true once real Stripe payment links are pasted above.
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

  const stripeUrl = {
    solo: STRIPE_SOLO,
    studio: STRIPE_STUDIO,
    operation: STRIPE_OPERATION,
  }[slug];

  // Every band is discovery-first — the retainer is a relationship, not a
  // checkout. Primary CTA = book the free discovery call.
  return {
    primary: { label: "Book a call", href: bookCallLink() },
    secondary: STRIPE_LIVE
      ? { label: "Pay setup deposit · " + price, href: stripeUrl }
      : { label: "Email me", href: mailto },
  };
}
