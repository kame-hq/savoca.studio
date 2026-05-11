"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SVLogo, SVInitial } from "@/components/brand/v2";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Playbooks", href: "/resources" },
  { label: "Calculator", href: "/calculator" },
  { label: "About", href: "/#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className="nav-enter fixed top-0 inset-x-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(251, 249, 244, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        }}
      >
        <div className="grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center gap-3 md:gap-0 px-5 md:px-10 lg:px-12 py-4">
          <Link
            href="/"
            aria-label="Savoca Studio"
            className="logo-host justify-self-start min-w-0"
          >
            <span className="md:hidden">
              <SVInitial size={38} color="var(--money)" />
            </span>
            <span className="hidden md:inline-flex items-baseline gap-3">
              <SVInitial size={44} color="var(--money)" />
              <SVLogo size={28} layout="inline" />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 justify-self-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-money transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right side: hamburger on mobile, CTA on desktop */}
          <div className="justify-self-end flex items-center gap-3">
            <Link
              href="/book"
              className="cta-arrow-host font-mono uppercase text-bone bg-ink hover:bg-money transition-colors text-[10px] md:text-[11px] tracking-[0.12em] md:tracking-[0.14em] px-3 md:px-4 py-2 md:py-2.5 whitespace-nowrap inline-flex items-center gap-2"
            >
              <span className="hidden sm:inline">Book a call</span>
              <span className="sm:hidden">Book</span>
              <span className="cta-arrow">→</span>
            </Link>

            {/* Hamburger — mobile only */}
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-ink/20 hover:border-money transition-colors"
            >
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
                <line x1="0" y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="7" x2="18" y2="7" stroke="currentColor" strokeWidth="1.5" />
                <line x1="0" y1="13" x2="18" y2="13" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[60] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
          />

          {/* Drawer panel */}
          <div
            className="absolute top-0 right-0 bottom-0 w-[88%] max-w-sm bg-ink text-bone flex flex-col"
            style={{ animation: "drawer-in 320ms cubic-bezier(0.22, 0.61, 0.36, 1) both" }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-bone/10">
              <SVInitial size={32} color="var(--money-2)" />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center w-10 h-10 border border-bone/20 hover:border-money-2 transition-colors text-bone"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="14" y1="2" x2="2" y2="14" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-1">
                {links.map((l, i) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      className="block py-4 font-serif text-[28px] leading-none tracking-[-0.02em] text-bone hover:text-money-2 transition-colors border-b border-bone/10"
                      style={{ fontVariationSettings: '"opsz" 72', animationDelay: `${i * 60}ms` }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Drawer footer */}
            <div className="px-6 py-6 border-t border-bone/10 flex flex-col gap-3">
              <Link
                href="/book"
                onClick={() => setMenuOpen(false)}
                className="cta-arrow-host font-mono uppercase text-ink bg-bone hover:bg-money-2 hover:text-bone transition-colors text-[12px] tracking-[0.14em] px-4 py-3 inline-flex items-center justify-between"
              >
                Book a call <span className="cta-arrow">→</span>
              </Link>
              <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-bone/60 mt-2">
                § · No revenue left behind
              </span>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes drawer-in {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
