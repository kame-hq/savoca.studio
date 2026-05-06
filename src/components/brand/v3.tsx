// Savoca Studio v3 — premium polish atoms
// Layered ON TOP of v2.tsx (do not duplicate v2 atoms here).

"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useState } from "react";

/* -------------------------------------------------------------------------- */
/*  VerticalRail — single static gutter rule, lg only                         */
/* -------------------------------------------------------------------------- */

/**
 * Editorial gutter — a 1px vertical hairline at left:48px (matches lg:px-12)
 * that runs the full document height. Static, not scroll-tied. Adds the
 * missing vertical axis to a page that's heavy on horizontal hairlines.
 */
export function VerticalRail() {
  return (
    <div
      aria-hidden
      className="hidden lg:block fixed top-0 bottom-0 w-px pointer-events-none z-[5]"
      style={{ left: 48, background: "var(--rule)" }}
    />
  );
}

/* -------------------------------------------------------------------------- */
/*  NumberTick — small mono "001" page-number tick                            */
/* -------------------------------------------------------------------------- */

export function NumberTick({
  n,
  color = "var(--steel)",
  className,
  style,
}: {
  n: string;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      className={"font-mono tabular " + (className ?? "")}
      style={{
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        color,
        fontWeight: 500,
        ...style,
      }}
    >
      {n}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  FieldNoteStamp — "FIELD NOTE 4 · 2026 / Q2" stamped square                */
/* -------------------------------------------------------------------------- */

/**
 * Editorial-stamp detail. Small inked square in signal red with mono caps
 * inside, 1px ink border + outer 0.5px hairline. References the v2 social
 * post template ("Field note · 003"). Ties the site to the publication
 * system as a visible signal.
 */
export function FieldNoteStamp({
  number,
  date = "2026 / Q2",
}: {
  number: string;
  date?: string;
}) {
  return (
    <div
      className="font-mono inline-flex flex-col items-start"
      aria-hidden
      style={{
        padding: "10px 14px",
        border: "1px solid var(--ink)",
        boxShadow: "0 0 0 0.5px var(--rule), inset 0 0 0 0.5px var(--rule)",
        background: "transparent",
        color: "var(--signal)",
        fontSize: 9,
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        fontWeight: 600,
        lineHeight: 1.5,
        transform: "rotate(-1.5deg)",
      }}
    >
      <div>Field Note {number}</div>
      <div style={{ color: "var(--ink-2)", marginTop: 2 }}>{date}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  MobileDrawer — off-canvas nav for small viewports                         */
/* -------------------------------------------------------------------------- */

export function MobileDrawer({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden" role="dialog" aria-modal="true">
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="drawer-backdrop absolute inset-0"
        style={{ background: "rgba(14,14,12,0.4)" }}
      />
      <aside
        className="drawer-panel absolute top-0 right-0 bottom-0 w-[80%] max-w-[340px] flex flex-col"
        style={{ background: "var(--ink)", color: "var(--bone)" }}
      >
        {children}
      </aside>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hamburger — icon button                                                   */
/* -------------------------------------------------------------------------- */

export function Hamburger({
  open,
  onClick,
  label = "Open menu",
  color = "var(--ink)",
}: {
  open: boolean;
  onClick: () => void;
  label?: string;
  color?: string;
}) {
  return (
    <button
      type="button"
      aria-label={open ? "Close menu" : label}
      aria-expanded={open}
      onClick={onClick}
      className="md:hidden inline-flex items-center justify-center"
      style={{
        width: 36,
        height: 36,
        background: "transparent",
        border: 0,
        cursor: "pointer",
      }}
    >
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden style={{ color }}>
        {open ? (
          <>
            <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
            <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.5" />
          </>
        ) : (
          <>
            <line x1="3" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="1.5" />
            <line x1="3" y1="15" x2="19" y2="15" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
      </svg>
    </button>
  );
}

/* -------------------------------------------------------------------------- */
/*  useActiveSection — scroll-based active section tracker for nav            */
/* -------------------------------------------------------------------------- */

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.1, 0.3] }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return active;
}
