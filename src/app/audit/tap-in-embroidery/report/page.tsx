import type { Metadata } from "next";
import { SVLogo, SVInitial } from "@/components/brand/v2";
import "./report.css";

export const metadata: Metadata = {
  title: "Tap In Embroidery — Brand, Website & Industry Report · Savoca Studio",
  description:
    "A long-form growth report on Tap In Embroidery's brand, website, and the embroidery industry — prepared by Savoca Studio.",
};

/* One-off client deliverable (long-form portrait report). Companion to the
   landscape audit deck at ../page.tsx. Content hardcoded by design. */

export default function TapInReport() {
  return (
    <main className="report">
      {/* ── Cover ──────────────────────────────────────── */}
      <section className="page page-cover">
        <header className="rpt-top">
          <span>Savoca Studio</span>
          <span>Growth Report · 2026</span>
        </header>

        <div className="cover-center">
          <div className="cover-lockup">
            <SVLogo size={40} layout="inline" />
            <SVInitial size={44} color="var(--money)" />
          </div>
          <div className="cover-kicker">Brand · Website · Industry</div>
          <h1 className="cover-title">Tap In Embroidery</h1>
          <p className="cover-sub">
            A working read on where the business stands today, what the
            embroidery market rewards, and the shortest path from a good brand
            to a site that sells.
          </p>
          <div className="cover-meta">
            <span>Prepared for DeChaun Grice</span>
            <span>Prepared by Jack Savoca · Savoca Studio</span>
            <span>tapinembroidery.com · 21 May 2026</span>
          </div>
        </div>

        <footer className="rpt-bottom">
          <span>The backend of service business growth</span>
          <span>No charge · Yours to keep</span>
        </footer>
      </section>

      {/* ── Contents ───────────────────────────────────── */}
      <section className="page">
        <header className="rpt-top">
          <span>Contents</span>
          <span>Tap In Embroidery</span>
        </header>

        <span className="rpt-eyebrow">
          <span className="rpt-eyebrow-dot" />
          What’s inside
        </span>
        <h1 className="rpt-h1">Four reads, one path.</h1>

        <div className="toc">
          <div className="toc-row">
            <span className="toc-num">I</span>
            <span className="toc-name">The Brand</span>
            <span className="toc-desc">What’s ahead, what’s undercutting it</span>
          </div>
          <div className="toc-row">
            <span className="toc-num">II</span>
            <span className="toc-name">The Website</span>
            <span className="toc-desc">Page by page · where it leaks</span>
          </div>
          <div className="toc-row">
            <span className="toc-num">III</span>
            <span className="toc-name">The Industry</span>
            <span className="toc-desc">Market · how buyers shop · the going rate</span>
          </div>
          <div className="toc-row">
            <span className="toc-num">IV</span>
            <span className="toc-name">The Opportunity</span>
            <span className="toc-desc">What we’d build, sized to you</span>
          </div>
        </div>

        <div className="rpt-body" style={{ marginTop: "2rem" }}>
          <p className="rpt-lead">
            This isn’t a pitch with the serial numbers filed off. It’s the same
            read I’d do for a paying client: look hard at the brand and the
            site, set both against what the market actually rewards, and point
            at the few moves that change the number. Use it with anyone.
          </p>
        </div>

        <footer className="rpt-bottom">
          <span>Savoca Studio · Austin TX</span>
          <span>jack@savoca.studio</span>
        </footer>
      </section>

      {/* ── Part I — The Brand ─────────────────────────── */}
      <section className="page">
        <header className="rpt-top">
          <span>I · The Brand</span>
          <span>Tap In Embroidery</span>
        </header>

        <div className="rpt-part">Part I</div>
        <h1 className="rpt-h1">
          The brand is{" "}
          <span className="rpt-italic">ahead of the business.</span>
        </h1>

        <div className="rpt-body">
          <p className="rpt-lead">
            Most shops your size have the opposite problem — a working site and
            a forgettable name. You’ve got the harder half right: a name that’s
            a verb, a tagline worth building a company on, and a portfolio that
            proves the hands. What’s missing is everything that turns that into
            booked work.
          </p>

          <h2 className="rpt-h2">The name and the line</h2>
          <p>
            <strong>“Tap In, With Confidence.”</strong> is the most valuable
            thing on the whole property. It’s short, it’s active, it owns the
            name, and it says something true about the experience — you bring a
            vague idea, you leave sure. Keep it. Don’t dilute it with a second
            tagline. The mission line — “creativity deserves a clear path from
            vision to reality” — is fine as supporting text, but it’s soft;
            “Tap In, With Confidence” should lead every surface.
          </p>

          <div className="rpt-pull">
            A tagline you can build a logo, a voice, and a checkout around is
            rare. <em>Most shops never find one. You already have it.</em>
          </div>

          <h2 className="rpt-h2">Where the brand undercuts itself</h2>
          <p>
            The gap between the work and the wrapper shows up in four places.
            None are expensive to fix — the first one takes five minutes.
          </p>

          <div className="rpt-ledger">
            <div className="rpt-ledger-row">
              <span className="rpt-ledger-tag">Keep</span>
              <span className="rpt-ledger-body">
                <strong>“Tap In, With Confidence.”</strong> + the portfolio.
                Real proof of craft. Make it the spine of the identity.
              </span>
            </div>
            <div className="rpt-ledger-row">
              <span className="rpt-ledger-tag neg">Fix</span>
              <span className="rpt-ledger-body">
                You own <strong>tapinembroidery.com</strong> but email from a{" "}
                <strong>@gmail.com</strong> address. To a business buyer that
                reads “side hustle,” not “shop.” A
                you@tapinembroidery.com address is a same-day, trust-changing
                fix and costs almost nothing.
              </span>
            </div>
            <div className="rpt-ledger-row">
              <span className="rpt-ledger-tag neg">Add</span>
              <span className="rpt-ledger-body">
                No logo lockup, color, or type system you can point to. The
                identity should be as finished as the stitching — one
                wordmark, two colors, one typeface, used the same way every
                time.
              </span>
            </div>
            <div className="rpt-ledger-row">
              <span className="rpt-ledger-tag neg">Prove</span>
              <span className="rpt-ledger-body">
                Zero trust signals — no reviews, no job count, no names you’ve
                stitched for. You’ve earned the proof; the brand just doesn’t
                show it. Social proof is the cheapest conversion lift there is.
              </span>
            </div>
          </div>
        </div>

        <footer className="rpt-bottom">
          <span>I · The Brand</span>
          <span>savoca.studio</span>
        </footer>
      </section>

      {/* ── Part II — The Website ──────────────────────── */}
      <section className="page">
        <header className="rpt-top">
          <span>II · The Website</span>
          <span>Tap In Embroidery</span>
        </header>

        <div className="rpt-part">Part II</div>
        <h1 className="rpt-h1">
          A brochure can’t <span className="rpt-italic">close.</span>
        </h1>

        <div className="rpt-body">
          <p className="rpt-lead">
            Four pages — Home, Portfolio, Services, Contact. They tell a visitor
            you exist. None of them catch a lead, show a price, or move someone
            to a committed next step. Every job has to route through one inbox,
            by hand. Here’s the page-by-page read.
          </p>
        </div>

        <h2 className="rpt-h2">Page by page</h2>
        <div className="rpt-rows">
          <div className="rpt-row">
            <span className="rpt-row-key">Home</span>
            <span className="rpt-row-val">
              Sets the tone well, but the only ask is “tap in.” No quote form,
              no price, no phone. <span className="leak">The visitor with money in hand has nowhere to put it.</span>
            </span>
          </div>
          <div className="rpt-row">
            <span className="rpt-row-key">Portfolio</span>
            <span className="rpt-row-val">
              The strongest page — real work, real proof. But it’s a gallery,
              not a sales tool: no captions, no “want this for your team?”
              next to the pieces. <span className="leak">Proof with no path forward.</span>
            </span>
          </div>
          <div className="rpt-row">
            <span className="rpt-row-key">Services</span>
            <span className="rpt-row-val">
              Lists what you do, not what it costs or how fast.{" "}
              <span className="leak">No pricing, no turnaround, no minimums — every answer requires an email.</span>
            </span>
          </div>
          <div className="rpt-row">
            <span className="rpt-row-key">Contact</span>
            <span className="rpt-row-val">
              One Gmail address and “8am–6pm CST.” No form, no phone, no
              tap-to-call.{" "}
              <span className="leak">“Same-day quote” only holds when you’re at the inbox, not behind the machine.</span>
            </span>
          </div>
        </div>

        <h2 className="rpt-h2">The leak map</h2>
        <div className="rpt-body">
          <p>
            Trace one job from first contact to repeat order and you can see
            exactly where the money slips out:
          </p>
          <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "10.5px", lineHeight: 2, color: "var(--ink)", letterSpacing: "0.04em" }}>
            Demand <span style={{ color: "var(--money-2)" }}>(IG/FB/word of mouth → money in)</span><br />
            → Capture <span style={{ color: "var(--signal)" }}>· leak: gmail only, no form</span><br />
            → Respond <span style={{ color: "var(--signal)" }}>· leak: holds only at the inbox</span><br />
            → Convert <span style={{ color: "var(--signal)" }}>· leak: manual thread, no price shown</span><br />
            → Deliver <span style={{ color: "var(--signal)" }}>· leak: no status, no turnaround stated</span><br />
            → Retain <span style={{ color: "var(--signal)" }}>· leak: never asked — no review, no reorder</span>
          </p>
          <div className="rpt-pull">
            Five of six steps leak — <em>and every one runs through a single inbox.</em>
          </div>
        </div>

        <footer className="rpt-bottom">
          <span>II · The Website</span>
          <span>tapinembroidery.com · reviewed 2026-05-21</span>
        </footer>
      </section>

      {/* ── Part III — The Industry ────────────────────── */}
      <section className="page">
        <header className="rpt-top">
          <span>III · The Industry</span>
          <span>Tap In Embroidery</span>
        </header>

        <div className="rpt-part">Part III</div>
        <h1 className="rpt-h1">
          A growing market that{" "}
          <span className="rpt-italic">rewards the easy buy.</span>
        </h1>

        <div className="rpt-body">
          <p className="rpt-lead">
            The wind is at your back. Decorated apparel is one of the faster-
            growing corners of consumer goods, and embroidery is the biggest
            slice of it. The catch: demand is up, margins are tightening, and
            buyers increasingly pick the shop that makes quoting and ordering
            effortless. That last part is where Tap In is exposed — and where
            the opportunity is.
          </p>
        </div>

        <h2 className="rpt-h2">The market</h2>
        <div className="rpt-figs">
          <div className="rpt-fig">
            <div className="rpt-fig-val">
              <span className="unit">$</span>68B
            </div>
            <div className="rpt-fig-label">
              Global decorated-apparel market by 2030, up from ~$29B in 2023 —
              ~13% CAGR.
            </div>
          </div>
          <div className="rpt-fig">
            <div className="rpt-fig-val">40%+</div>
            <div className="rpt-fig-label">
              Of that market is embroidery — the dominant decoration method, not
              a niche.
            </div>
          </div>
          <div className="rpt-fig">
            <div className="rpt-fig-val">~14%</div>
            <div className="rpt-fig-label">
              Annual growth of online custom-apparel ordering — buying is moving
              to the web, fast.
            </div>
          </div>
          <div className="rpt-fig">
            <div className="rpt-fig-val">~13%</div>
            <div className="rpt-fig-label">
              U.S. decorated-apparel growth rate. Demand is healthy; the fight
              is over who’s easiest to buy from.
            </div>
          </div>
        </div>

        <h2 className="rpt-h2">How buyers actually shop</h2>
        <div className="rpt-body">
          <p>
            The buyer comparing you to other shops is doing it in tabs. The shop
            that shows a price and takes the order while they’re still
            interested usually wins — not because the work is better, but
            because the path is shorter. The category leaders have made the
            quote instant:
          </p>
          <div className="rpt-rows">
            <div className="rpt-row">
              <span className="rpt-row-key">Blankstyle</span>
              <span className="rpt-row-val">Instant quote + a stitch-count estimator. A price before they ask.</span>
            </div>
            <div className="rpt-row">
              <span className="rpt-row-key">Stitch America</span>
              <span className="rpt-row-val">Upload your art, get a free estimate back in one business day.</span>
            </div>
            <div className="rpt-row">
              <span className="rpt-row-key">Broken Arrow</span>
              <span className="rpt-row-val">Pricing up front + an online designer. No surprises at checkout.</span>
            </div>
            <div className="rpt-row">
              <span className="rpt-row-key">Web2Ink</span>
              <span className="rpt-row-val">Prices a job straight from logo size / stitch count.</span>
            </div>
          </div>
        </div>

        <footer className="rpt-bottom">
          <span>III · The Industry</span>
          <span>2026 market + pricing data — sources p. last</span>
        </footer>
      </section>

      {/* ── Part III (cont.) — The going rate ──────────── */}
      <section className="page">
        <header className="rpt-top">
          <span>III · The Industry (cont.)</span>
          <span>Tap In Embroidery</span>
        </header>

        <span className="rpt-eyebrow">
          <span className="rpt-eyebrow-dot" />
          The going rate
        </span>
        <h1 className="rpt-h1">
          Post the number, <span className="rpt-italic">win the buyer.</span>
        </h1>

        <div className="rpt-body">
          <p className="rpt-lead">
            Showing pricing plainly is now table stakes. A credible pricing
            page doesn’t have to be cheap — it has to be clear. Here’s the 2026
            U.S. reference range, so yours lands as informed, not guessed.
          </p>

          <div className="rpt-figs">
            <div className="rpt-fig">
              <div className="rpt-fig-val">
                <span className="unit">$</span>0.50–1.50
              </div>
              <div className="rpt-fig-label">Per 1,000 stitches — the base unit of embroidery pricing.</div>
            </div>
            <div className="rpt-fig">
              <div className="rpt-fig-val">
                <span className="unit">$</span>8–30
              </div>
              <div className="rpt-fig-label">Per piece, by stitch count + garment. Chest logo ~5–8k stitches; full back 15–25k.</div>
            </div>
            <div className="rpt-fig">
              <div className="rpt-fig-val">
                <span className="unit">$</span>20–100
              </div>
              <div className="rpt-fig-label">One-time digitizing to convert a logo into a stitch file.</div>
            </div>
            <div className="rpt-fig">
              <div className="rpt-fig-val">7–14d</div>
              <div className="rpt-fig-label">Standard turnaround; 5–7 day rush at +25%. Many shops run no minimum.</div>
            </div>
          </div>

          <div className="rpt-pull">
            Margins are tightening across the category.{" "}
            <em>The shops that win don’t cut price — they cut friction.</em>
          </div>

          <h2 className="rpt-h2">Your opening</h2>
          <p>
            Your edge is the part the big portals can’t copy: you’re the local,
            named maker — DeChaun, not a faceless upload form. That’s exactly
            what the “personal touch” trend rewards, and it’s why a small shop
            can still win business from the national sites. But it only converts
            if buying from you is as easy as buying from them. Match their path,
            keep your face on it, and the edge is yours.
          </p>
        </div>

        <footer className="rpt-bottom">
          <span>III · The Industry</span>
          <span>2026 pricing reference — not Tap In’s rates</span>
        </footer>
      </section>

      {/* ── Part IV — The Opportunity ──────────────────── */}
      <section className="page">
        <header className="rpt-top">
          <span>IV · The Opportunity</span>
          <span>Tap In Embroidery</span>
        </header>

        <div className="rpt-part">Part IV</div>
        <h1 className="rpt-h1">
          Make the site as good as{" "}
          <span className="rpt-italic">the work.</span>
        </h1>

        <div className="rpt-body">
          <p className="rpt-lead">
            You don’t need a rebrand or a bigger ad budget. You need the
            plumbing the market already expects, built once and kept running.
            Four moves, in order.
          </p>
        </div>

        <h2 className="rpt-h2">The build</h2>
        <div className="rpt-rows">
          <div className="rpt-row">
            <span className="rpt-row-key">1 · Capture</span>
            <span className="rpt-row-val">
              A real quote form and tap-to-call on every page, plus a domain
              email. Nothing depends on you checking Gmail. Every request gets
              caught and logged.
            </span>
          </div>
          <div className="rpt-row">
            <span className="rpt-row-key">2 · Price</span>
            <span className="rpt-row-val">
              An instant estimate — item, size, quantity in, a starting price
              out — so you match the shops buyers compare you to.
            </span>
          </div>
          <div className="rpt-row">
            <span className="rpt-row-key">3 · Follow up</span>
            <span className="rpt-row-val">
              Same-day quote, automatically. A nudge if it goes quiet. A review
              + reorder ask after the job ships — so past customers stop being
              cold starts.
            </span>
          </div>
          <div className="rpt-row">
            <span className="rpt-row-key">4 · Prove</span>
            <span className="rpt-row-val">
              A finished identity around “Tap In, With Confidence,” reviews on
              the page, and a portfolio that asks for the sale.
            </span>
          </div>
        </div>

        <h2 className="rpt-h2">What the leak quietly costs (illustrative)</h2>
        <div className="rpt-body">
          <p>
            Not your books — a worked example. Say 20 quote requests a month. If
            4 land after hours and go cold, and 2 more bounce for lack of a
            price or form, that’s 6 lost jobs. At a modest $300 average order,
            that’s <strong>~$1,800/mo — ~$21,600 a year</strong> walking out
            before you see it. Halve it and the system still pays for itself many
            times over. In a real engagement we’d size this to your actual
            numbers in the first call.
          </p>
        </div>

        <h2 className="rpt-h2">How I’d work with you</h2>
        <div className="rpt-body">
          <p>
            One product, three bands by the size of the business. For an
            owner-operator shop, that’s{" "}
            <strong>The Partner / Solo — $297–$697/mo</strong>, plus a $297
            kickoff credited to month one, with a 3-month minimum. I find the
            leak, build the system, and keep it running — you stay behind the
            machine. The band is a starting recommendation, not a fixed quote;
            we set the real scope on the call.
          </p>
        </div>

        <footer className="rpt-bottom">
          <span>IV · The Opportunity</span>
          <span>The Partner / Solo · find → build → keep running</span>
        </footer>
      </section>

      {/* ── CTA + Sources ──────────────────────────────── */}
      <section className="page page-cta">
        <header className="rpt-top">
          <span>Start</span>
          <span>30 minutes · no deck · no pitch</span>
        </header>

        <div style={{ margin: "auto 0" }}>
          <h2 className="cta-h">
            The work’s already good.
            <br />
            <span className="accent">Let’s make the site sell it.</span>
          </h2>
          <p className="cta-p">
            This report is free and yours to keep — use it with anyone. If you
            want these systems built and kept running, that’s what I do. One
            call, thirty minutes, no slides. We’ll size the fix to your real
            numbers and you decide from there.
          </p>
          <span className="cta-btn">cal.com/savoca/discovery · 30 min · free →</span>

          <p style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "8.5px", lineHeight: 1.7, color: "var(--steel-2)", letterSpacing: "0.06em", marginTop: "2.5rem", maxWidth: "6in" }}>
            SOURCES — Live site tapinembroidery.com (home/portfolio/services/contact),
            reviewed 21 May 2026. Market + growth: Grand View Research, Technavio,
            Future Market Insights (decorated/custom apparel). Pricing + turnaround
            norms: French Press Custom, The Apparel Factory, Thread Logic, Bolt
            Printing, Arklavo. Competitor features: Blankstyle, Stitch America,
            Broken Arrow, Web2Ink, Printify. Figures are industry references, not
            Tap In’s books.
          </p>
        </div>

        <footer className="rpt-bottom">
          <span>Jack Savoca · Savoca Studio · Austin TX</span>
          <span>jack@savoca.studio</span>
        </footer>
      </section>
    </main>
  );
}
