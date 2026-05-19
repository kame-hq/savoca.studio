// Savoca Studio · Pitch Deck shared components
// 1920×1080 landscape · field-manual editorial direction · print-to-PDF ready
// Renders inside a deck container; each slide is one <section class="slide">.

// ─── shells ────────────────────────────────────────────────────────────────
const Slide = ({ children, mode = "paper", noPad = false, style = {} }) => {
  const cls = mode === "ink" ? "slide ink" : mode === "money" ? "slide money" : "slide paper grain";
  return <section className={cls} style={{ ...(noPad ? {} : { padding: "88px 112px" }), ...style }}>{children}</section>;
};

const Eyebrow = ({ label, dot, dark = false }) => {
  const color = dark ? "rgba(245,242,236,0.6)" : "var(--steel)";
  return (
    <div style={{ fontFamily: "var(--mono)", fontSize: 22, letterSpacing: "0.22em", textTransform: "uppercase", color, display: "flex", alignItems: "center", gap: 16 }}>
      <span style={{ width: 11, height: 11, borderRadius: 999, background: dot || (dark ? "var(--money-2)" : "var(--money)"), display: "inline-block" }} />
      {label}
    </div>
  );
};

const Foot = ({ num, total = 12, vertical, dark = false }) => {
  const c = dark ? "rgba(245,242,236,0.55)" : "var(--steel)";
  const rule = dark ? "rgba(245,242,236,0.18)" : "var(--rule)";
  const sig = dark ? "var(--money-2)" : "var(--money)";
  return (
    <div style={{ position: "absolute", left: 112, right: 112, bottom: 56 }}>
      <div style={{ height: 1, background: rule, marginBottom: 18 }} />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontFamily: "var(--mono)", fontSize: 16, letterSpacing: "0.16em", textTransform: "uppercase", color: c }}>
        <span>Savoca Studio · {vertical}</span>
        <span style={{ fontFamily: "var(--serif)", fontSize: 30, color: sig, letterSpacing: 0, textTransform: "none" }}>§</span>
        <span>{String(num).padStart(2, "0")} / {String(total).padStart(2, "0")}</span>
      </div>
    </div>
  );
};

// ─── slide types ───────────────────────────────────────────────────────────

// 01 — Cover
const Cover = ({ vertical, title, prepared = "Prepared by Jack Savoca · Savoca Studio · 2026" }) => (
  <Slide>
    <Eyebrow label={`A brief for · ${vertical}`} />
    <div style={{ position: "absolute", left: 112, right: 112, top: "32%" }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 132, lineHeight: 0.95, letterSpacing: "-0.04em", color: "var(--ink)" }}>
        {title.split("·")[0].trim()}
      </div>
      {title.split("·")[1] && (
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 132, lineHeight: 0.95, letterSpacing: "-0.04em", color: "var(--money)", marginTop: 12 }}>
          {title.split("·")[1].trim()}
        </div>
      )}
    </div>
    <div style={{ position: "absolute", left: 112, bottom: 132 }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 64, letterSpacing: "-0.03em", color: "var(--ink)" }}>
        No revenue <span style={{ fontStyle: "italic", color: "var(--money)" }}>left behind.</span>
      </div>
      <div style={{ marginTop: 16, fontFamily: "var(--mono)", fontSize: 16, letterSpacing: "0.16em", color: "var(--steel)", textTransform: "uppercase" }}>
        {prepared}
      </div>
    </div>
    <Foot num={1} vertical={vertical} />
  </Slide>
);

// 02 — Hook (huge stat)
const Hook = ({ vertical, num, stat, statLabel, body, source }) => (
  <Slide>
    <Eyebrow label="The hook · 01" />
    <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 80, alignItems: "center", height: "calc(100% - 220px)" }}>
      <div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 360, lineHeight: 0.85, letterSpacing: "-0.05em", color: "var(--money)" }}>
          {stat}
        </div>
        <div style={{ marginTop: 24, fontFamily: "var(--mono)", fontSize: 18, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>
          Source · {source}
        </div>
      </div>
      <div>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 64, lineHeight: 1.1, letterSpacing: "-0.025em", color: "var(--ink)" }}>
          {statLabel}
        </div>
        <div style={{ marginTop: 36, fontFamily: "var(--sans)", fontSize: 26, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 720 }}>
          {body}
        </div>
      </div>
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// 03 — Problem (handoff framing)
const Problem = ({ vertical, num, title, sub, points }) => (
  <Slide>
    <Eyebrow label="The problem · 02" />
    <div style={{ marginTop: 64, fontFamily: "var(--serif)", fontSize: 96, lineHeight: 1.02, letterSpacing: "-0.035em", color: "var(--ink)" }}>
      {title.split("·")[0].trim()}
      {title.split("·")[1] && (
        <span style={{ fontStyle: "italic", color: "var(--money)" }}> {title.split("·")[1].trim()}</span>
      )}
    </div>
    <div style={{ marginTop: 28, fontFamily: "var(--sans)", fontSize: 26, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 1280 }}>
      {sub}
    </div>
    <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: `repeat(${points.length}, 1fr)`, gap: 0, borderTop: "1px solid var(--rule)", borderBottom: "2px solid var(--ink)" }}>
      {points.map((p, i) => (
        <div key={i} style={{ padding: "32px 28px 32px 0", borderRight: i < points.length - 1 ? "1px solid var(--rule)" : "none" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>0{i + 1}</div>
          <div style={{ marginTop: 14, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 32, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--ink)" }}>{p}</div>
        </div>
      ))}
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// 04 — The system (Demand-to-Delivery)
const System = ({ vertical, num }) => (
  <Slide>
    <Eyebrow label="What I build · 03" />
    <div style={{ marginTop: 56, fontFamily: "var(--serif)", fontSize: 96, lineHeight: 1.0, letterSpacing: "-0.035em", color: "var(--ink)" }}>
      The <span style={{ fontStyle: "italic", color: "var(--money)" }}>Demand-to-Delivery</span> System.
    </div>
    <div style={{ marginTop: 28, fontFamily: "var(--sans)", fontSize: 26, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 1280 }}>
      The backend of service business growth — capture, response, follow-up, and reporting wired into one flow. So revenue gets through.
    </div>
    <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid var(--rule)" }}>
      {[
        ["Capture",   "Every inbound, no matter the hour."],
        ["Respond",   "Inside the speed-to-lead window."],
        ["Follow-up", "Through the convert and deliver stages."],
        ["Reporting", "Visibility over the whole layer."],
      ].map(([k, v], i) => (
        <div key={i} style={{ padding: "40px 28px", borderRight: i < 3 ? "1px solid var(--rule)" : "none", background: i % 2 ? "transparent" : "var(--bone-2)" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>0{i + 1}</div>
          <div style={{ marginTop: 18, fontFamily: "var(--serif)", fontSize: 42, lineHeight: 1, letterSpacing: "-0.02em", color: "var(--money)" }}>{k}</div>
          <div style={{ marginTop: 14, fontFamily: "var(--sans)", fontSize: 19, lineHeight: 1.4, color: "var(--ink-2)" }}>{v}</div>
        </div>
      ))}
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// 05 — Revenue Leak Map (6 stages)
const LeakMap = ({ vertical, num }) => {
  const stages = [
    { n: "01", t: "Demand",  s: "Money enters", leak: false, note: "Ads · referrals · search · DMs" },
    { n: "02", t: "Capture", s: "Calls · forms · DMs", leak: true,  note: "Unanswered, no callback, no text-back" },
    { n: "03", t: "Respond", s: "First reply", leak: true, note: "Lands hours late. Speed-to-lead collapses." },
    { n: "04", t: "Convert", s: "Quote · book · deposit", leak: true, note: "Goes cold. No reminder, no follow-up." },
    { n: "05", t: "Deliver", s: "The job runs", leak: true, note: "Text-thread tracked. No status, no handoff." },
    { n: "06", t: "Retain",  s: "Review · rebook · reactivate", leak: true, note: "Never asked. No system." },
  ];
  return (
    <Slide>
      <Eyebrow label="The Revenue Leak Map · 04" />
      <div style={{ marginTop: 24, fontFamily: "var(--serif)", fontSize: 64, lineHeight: 1.02, letterSpacing: "-0.035em", color: "var(--ink)" }}>
        Demand to delivery — <span style={{ fontStyle: "italic", color: "var(--money)" }}>and where it leaks.</span>
      </div>
      <div style={{ marginTop: 36, border: "1px solid var(--rule)" }}>
        {stages.map((s, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "80px 220px 240px 1fr 140px", gap: 24, padding: "18px 24px", borderTop: i === 0 ? "none" : "1px solid var(--rule)", alignItems: "center", background: s.leak ? "transparent" : "var(--bone-2)" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 20, letterSpacing: "0.14em", color: "var(--steel)" }}>{s.n}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 36, letterSpacing: "-0.02em", color: "var(--ink)" }}>{s.t}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.12em", color: "var(--steel)", textTransform: "uppercase" }}>{s.s}</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: 18, color: "var(--ink-2)" }}>{s.note}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase", textAlign: "right", color: s.leak ? "var(--signal)" : "var(--money)" }}>
              {s.leak ? "● leak" : "● enters"}
            </div>
          </div>
        ))}
      </div>
      <Foot num={num} vertical={vertical} />
    </Slide>
  );
};

// 06 — Where it leaks (vertical-specific)
const VerticalLeaks = ({ vertical, num, title, leaks }) => (
  <Slide>
    <Eyebrow label={`Where it leaks · in ${vertical} · 05`} />
    <div style={{ marginTop: 40, fontFamily: "var(--serif)", fontSize: 76, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--ink)" }}>
      {title.split("·")[0].trim()}
      {title.split("·")[1] && <span style={{ fontStyle: "italic", color: "var(--money)" }}> {title.split("·")[1].trim()}</span>}
    </div>
    <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid var(--rule)", borderBottom: "2px solid var(--ink)" }}>
      {leaks.map((l, i) => (
        <div key={i} style={{ padding: "28px 32px 28px 0", borderRight: i % 2 === 0 ? "1px solid var(--rule)" : "none", borderBottom: i < leaks.length - 2 ? "1px solid var(--rule)" : "none" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>Stage {l.stage}</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.18em", color: "var(--signal)", textTransform: "uppercase" }}>● leak</div>
          </div>
          <div style={{ marginTop: 14, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 32, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--ink)" }}>{l.title}</div>
          <div style={{ marginTop: 8, fontFamily: "var(--sans)", fontSize: 19, lineHeight: 1.4, color: "var(--ink-2)" }}>{l.note}</div>
        </div>
      ))}
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// 07 — Operating Principles (dark)
const Principles = ({ vertical, num }) => (
  <Slide mode="ink">
    <Eyebrow label="Operating principles · 06" dark />
    <div style={{ marginTop: 40, fontFamily: "var(--serif)", fontSize: 80, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--bone)" }}>
      What actually <span style={{ fontStyle: "italic", color: "var(--money-2)" }}>moves the number.</span>
    </div>
    <div style={{ marginTop: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, borderTop: "1px solid rgba(245,242,236,0.18)", borderBottom: "2px solid var(--bone)" }}>
      {[
        ["01", "The fastest reply wins the job", "— not the best pitch."],
        ["02", "Most lost revenue leaks after the sale", "Not at it."],
        ["03", "If you can't see the leak", "you keep paying for it."],
        ["04", "Hustle patches it for a week", "A system fixes it for good."],
      ].map((p, i) => (
        <div key={i} style={{ padding: "32px 32px 32px 0", borderRight: i % 2 === 0 ? "1px solid rgba(245,242,236,0.18)" : "none", borderBottom: i < 2 ? "1px solid rgba(245,242,236,0.18)" : "none" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.18em", color: "rgba(245,242,236,0.55)", textTransform: "uppercase" }}>Principle {p[0]}</div>
          <div style={{ marginTop: 14, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 38, lineHeight: 1.15, letterSpacing: "-0.02em", color: "var(--bone)" }}>{p[1]}</div>
          <div style={{ marginTop: 6, fontFamily: "var(--sans)", fontSize: 22, lineHeight: 1.4, color: "rgba(245,242,236,0.8)" }}>{p[2]}</div>
        </div>
      ))}
    </div>
    <Foot num={num} vertical={vertical} dark />
  </Slide>
);

// 08 — What you get
const Deliverables = ({ vertical, num, items }) => (
  <Slide>
    <Eyebrow label="What you get · 07" />
    <div style={{ marginTop: 40, fontFamily: "var(--serif)", fontSize: 84, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--ink)" }}>
      The system, <span style={{ fontStyle: "italic", color: "var(--money)" }}>built and run.</span>
    </div>
    <div style={{ marginTop: 28, fontFamily: "var(--sans)", fontSize: 24, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 1280 }}>
      One retainer covers the build and the run — wired into the tools you already have, kept live as the business grows.
    </div>
    <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", columnGap: 60, rowGap: 22 }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "44px 1fr", alignItems: "baseline", paddingBottom: 16, borderBottom: "1px solid var(--rule)" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.16em", color: "var(--steel)" }}>·</div>
          <div style={{ fontFamily: "var(--sans)", fontSize: 22, lineHeight: 1.4, color: "var(--ink-2)" }}>
            <span style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "var(--ink)" }}>{it.title}.</span> {it.body}
          </div>
        </div>
      ))}
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// 09 — Live examples (case studies)
const LiveExamples = ({ vertical, num, examples }) => (
  <Slide>
    <Eyebrow label="Live examples · 08" />
    <div style={{ marginTop: 40, fontFamily: "var(--serif)", fontSize: 84, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--ink)" }}>
      Built. <span style={{ fontStyle: "italic", color: "var(--money)" }}>Running.</span> Today.
    </div>
    <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: `repeat(${examples.length}, 1fr)`, gap: 40 }}>
      {examples.map((e, i) => (
        <div key={i} style={{ border: "1px solid var(--rule)", background: "var(--bone-2)", padding: 36, minHeight: 460, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>Band · {e.band}</div>
            <div style={{ marginTop: 14, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 44, lineHeight: 1, letterSpacing: "-0.025em", color: "var(--ink)" }}>{e.client}</div>
            <div style={{ marginTop: 8, fontFamily: "var(--mono)", fontSize: 16, letterSpacing: "0.12em", color: "var(--money)", textTransform: "lowercase" }}>↗ {e.url}</div>
            <div style={{ marginTop: 22, fontFamily: "var(--sans)", fontSize: 19, lineHeight: 1.5, color: "var(--ink-2)" }}>{e.summary}</div>
          </div>
          <div style={{ marginTop: 22, fontFamily: "var(--mono)", fontSize: 14, letterSpacing: "0.16em", color: "var(--steel)", textTransform: "uppercase", borderTop: "1px solid var(--rule)", paddingTop: 18 }}>
            Stack · {e.stack}
          </div>
        </div>
      ))}
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// 10 — Pricing (Partner bands)
const Pricing = ({ vertical, num, recommended }) => (
  <Slide mode="ink">
    <Eyebrow label="The Partner · Pricing · 09" dark />
    <div style={{ marginTop: 40, fontFamily: "var(--serif)", fontSize: 76, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--bone)" }}>
      I build it. <span style={{ fontStyle: "italic", color: "var(--money-2)" }}>I run it.</span>
    </div>
    <div style={{ marginTop: 24, fontFamily: "var(--sans)", fontSize: 22, lineHeight: 1.55, color: "rgba(245,242,236,0.85)", maxWidth: 1280 }}>
      One partner, priced to your scale. Monthly retainer covers both the build and the run. Range lands on your scope at the discovery call.
    </div>
    <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
      {[
        { tier: "Solo",      price: "$297–$697",    depo: "$297", desc: "Owner-operator · solo practice", time: "Live in ~1 week" },
        { tier: "Studio",    price: "$997–$2,297",  depo: "$597", desc: "Established team · real volume",   time: "Live in ~2 weeks" },
        { tier: "Operation", price: "$2,297–$4,995",depo: "$997", desc: "Multi-location · ops budget",      time: "Live in ~2–4 weeks" },
      ].map((b, i) => {
        const active = b.tier === recommended;
        return (
          <div key={i} style={{ padding: "32px 28px", border: active ? "1px solid var(--money-2)" : "1px solid rgba(245,242,236,0.18)", background: active ? "rgba(44,122,95,0.15)" : "transparent", position: "relative" }}>
            {active && <div style={{ position: "absolute", top: -1, right: -1, background: "var(--money-2)", color: "var(--bone)", fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", padding: "6px 12px" }}>Likely fit</div>}
            <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.18em", color: "rgba(245,242,236,0.55)", textTransform: "uppercase" }}>Band 0{i + 1} · The Partner</div>
            <div style={{ marginTop: 12, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 50, letterSpacing: "-0.025em", color: "var(--bone)" }}>{b.tier}</div>
            <div style={{ marginTop: 4, fontFamily: "var(--sans)", fontSize: 17, color: "rgba(245,242,236,0.7)" }}>{b.desc}</div>
            <div style={{ marginTop: 20, fontFamily: "var(--serif)", fontSize: 44, letterSpacing: "-0.03em", color: "var(--money-2)" }}>{b.price}</div>
            <div style={{ marginTop: 2, fontFamily: "var(--mono)", fontSize: 12, letterSpacing: "0.16em", color: "rgba(245,242,236,0.6)", textTransform: "uppercase" }}>/ month</div>
            <div style={{ marginTop: 18, fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.12em", color: "rgba(245,242,236,0.7)", textTransform: "uppercase" }}>
              {b.depo} kickoff · credited mo 1<br/>{b.time} · 3-mo min
            </div>
          </div>
        );
      })}
    </div>
    <Foot num={num} vertical={vertical} dark />
  </Slide>
);

// 11 — About Jack
const About = ({ vertical, num }) => (
  <Slide>
    <Eyebrow label="About the partner · 10" />
    <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "start" }}>
      <div>
        <div style={{ fontFamily: "var(--serif)", fontSize: 96, lineHeight: 1, letterSpacing: "-0.035em", color: "var(--ink)" }}>
          Jack <span style={{ fontStyle: "italic", color: "var(--money)" }}>Savoca.</span>
        </div>
        <div style={{ marginTop: 14, fontFamily: "var(--mono)", fontSize: 16, letterSpacing: "0.16em", color: "var(--steel)", textTransform: "uppercase" }}>
          Program Manager · Indeed · Austin, TX
        </div>
        <div style={{ marginTop: 32, fontFamily: "var(--sans)", fontSize: 22, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 660 }}>
          Eight-plus years building commercialization programs at scale — turning product strategy into GTM execution, scalable operating systems, and measurable revenue outcomes.
        </div>
        <div style={{ marginTop: 22, fontFamily: "var(--sans)", fontSize: 22, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 660 }}>
          Same systems thinking that ships an enterprise launch, now built at the size of your shop. <span style={{ fontStyle: "italic", color: "var(--ink)" }}>You work with me.</span> No agency. No handoffs.
        </div>
      </div>
      <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: 40 }}>
        {[
          ["$150M+", "incremental revenue impact across global launches"],
          ["$280M",  "brand-revenue portfolio commercialized (Indeed)"],
          ["23",     "locales shipped on a single launch (Spotlight)"],
          ["8+ yrs", "shipping programs · Indeed · Meta · Whole Foods"],
        ].map((r, i) => (
          <div key={i} style={{ paddingTop: 18, paddingBottom: 18, borderBottom: i < 3 ? "1px solid var(--rule)" : "none" }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: 44, lineHeight: 1, letterSpacing: "-0.03em", color: "var(--money)" }}>{r[0]}</div>
            <div style={{ marginTop: 4, fontFamily: "var(--sans)", fontSize: 17, lineHeight: 1.4, color: "var(--ink-2)" }}>{r[1]}</div>
          </div>
        ))}
      </div>
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// 12 — Close + CTAs
const Close = ({ vertical, num }) => (
  <Slide mode="paper">
    <Eyebrow label="The next step · 11" />
    <div style={{ marginTop: 64, fontFamily: "var(--serif)", fontSize: 88, lineHeight: 1.02, letterSpacing: "-0.035em", color: "var(--ink)", maxWidth: 1640 }}>
      If the work comes in <br/>but the revenue doesn't, <br/><span style={{ fontStyle: "italic", color: "var(--money)" }}>something's leaking in the handoff.</span>
    </div>
    <div style={{ marginTop: 36, fontFamily: "var(--sans)", fontSize: 24, lineHeight: 1.55, color: "var(--ink-2)", maxWidth: 1280 }}>
      30 minutes. Straight answers. If it's not a fit, I'll tell you.
    </div>
    <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24 }}>
      {[
        { label: "Book a call",          v: "savoca.studio/book",            note: "30-minute discovery" },
        { label: "Run the calculator",   v: "savoca.studio/calculator",      note: "What you're losing · 30 sec" },
        { label: "Email me",             v: "jack@savoca.studio",            note: "Fastest path · I read everything" },
        { label: "Call / text",          v: "512.785.7783",                  note: "Austin, TX · weekdays" },
      ].map((c, i) => (
        <div key={i} style={{ border: "1px solid var(--rule)", padding: "26px 24px", background: "var(--bone-2)" }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 13, letterSpacing: "0.18em", color: "var(--steel)", textTransform: "uppercase" }}>{c.label}</div>
          <div style={{ marginTop: 14, fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 28, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--money)", wordBreak: "break-all" }}>{c.v}</div>
          <div style={{ marginTop: 10, fontFamily: "var(--sans)", fontSize: 15, color: "var(--ink-2)" }}>{c.note}</div>
        </div>
      ))}
    </div>
    <Foot num={num} vertical={vertical} />
  </Slide>
);

// Export
window.PitchDeck = { Slide, Cover, Hook, Problem, System, LeakMap, VerticalLeaks, Principles, Deliverables, LiveExamples, Pricing, About, Close };
