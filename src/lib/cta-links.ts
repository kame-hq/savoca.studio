/**
 * Savoca Studio — central CTA link config.
 *
 * Single source of truth for every booking + payment link on the site.
 * Replace placeholders with real URLs once Cal.com + Stripe are set up.
 *
 * SETUP STEPS (do these in order):
 *
 * 1. CAL.COM
 *    - Sign up at cal.com (free tier) using jack@savoca.studio
 *    - Pick username: jacksavoca (or savocastudio)
 *    - Create 1 event type: "30-min discovery call" — 30 min, generic intake form
 *    - Replace CAL_DISCOVERY below with the public URL
 *
 * 2. STRIPE
 *    - Sign up at stripe.com using your LLC info (or personal until LLC ready)
 *    - Create 4 Products:
 *      a. The Catcher — $349 one-time
 *      b. The Stacker — $997 one-time
 *      c. The Operator — $2,997 one-time
 *      d. The Partner — $1,497/mo recurring (monthly)
 *    - For each Product, create a Payment Link
 *    - Set Payment Link success URL to https://savoca.studio/thanks?tier=<slug>
 *    - Replace each STRIPE_* below with the real payment link URL
 *
 * 3. Push the updated config — links go live immediately
 *
 * Until those URLs are filled in, CTAs fall back to mailto so prospects can
 * still reach you. Mailto-fallback logic lives in `tierCta()` below.
 */

export const CAL_DISCOVERY = "https://cal.com/savoca/audit";
// Set this once Cal.com is configured. Until then, CTAs that point to
// "book a call" will fall back to mailto.
export const CAL_DISCOVERY_LIVE = true;

export const STRIPE_CATCHER = "https://buy.stripe.com/REPLACE_WITH_CATCHER_LINK";
export const STRIPE_STACKER = "https://buy.stripe.com/REPLACE_WITH_STACKER_LINK";
export const STRIPE_OPERATOR = "https://buy.stripe.com/REPLACE_WITH_OPERATOR_LINK";
export const STRIPE_PARTNER = "https://buy.stripe.com/REPLACE_WITH_PARTNER_LINK";
// Flip to true once real Stripe payment links are pasted above.
export const STRIPE_LIVE = false;

export const EMAIL = "jack@savoca.studio";

const INQUIRY_BODY_TEMPLATE = (tierName: string) =>
  `Hi Jack — interested in the ${tierName}.

A bit about us:
- Business name:
- Vertical (medspa / dental / home services / pro services):
- City:
- Approx monthly inbound calls:

Best time to talk this week:

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
        "Hi Jack — would like to book a 30-min discovery call.\n\nA bit about us:\n- Business:\n- Vertical:\n- City:\n\nBest times this week:\n\nThanks,\n"
      );
}

export type TierSlug = "catcher" | "stacker" | "operator" | "partner";

export type TierCtas = {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
};

export function tierCtas(slug: TierSlug, tierName: string, price: string): TierCtas {
  const inquirySubject = `${tierName} · ${price}`;
  const mailto = mailtoLink(inquirySubject, INQUIRY_BODY_TEMPLATE(tierName));

  const stripeUrl = {
    catcher: STRIPE_CATCHER,
    stacker: STRIPE_STACKER,
    operator: STRIPE_OPERATOR,
    partner: STRIPE_PARTNER,
  }[slug];

  // Discovery-first vs pay-first per tier:
  // - Catcher (low ticket, binary audit): pay-first allowed
  // - Stacker (mid-ticket, scope-fit matters): discovery-first
  // - Operator (custom build): discovery-first
  // - Partner (recurring): discovery-first
  if (slug === "catcher") {
    return {
      primary: STRIPE_LIVE
        ? { label: "Pay & start audit · " + price, href: stripeUrl }
        : { label: "Start audit", href: mailto },
      secondary: { label: "Talk first", href: bookCallLink() },
    };
  }

  return {
    primary: { label: "Book a call", href: bookCallLink() },
    secondary: STRIPE_LIVE
      ? { label: "Pay direct · " + price, href: stripeUrl }
      : { label: "Email me", href: mailto },
  };
}
