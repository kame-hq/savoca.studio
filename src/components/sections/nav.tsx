"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SVLogo } from "@/components/brand/v2";

const links = [
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "About", href: "#about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
            <SVLogo size={20} layout="inline" />
          </span>
          <span className="hidden md:inline-block">
            <SVLogo size={20} layout="inline" />
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 justify-self-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-money transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="cta-arrow-host justify-self-end font-mono uppercase text-bone bg-ink hover:bg-money transition-colors text-[10px] md:text-[11px] tracking-[0.12em] md:tracking-[0.14em] px-3 md:px-4 py-2 md:py-2.5 whitespace-nowrap inline-flex items-center gap-2"
        >
          Book a call <span className="cta-arrow">→</span>
        </Link>
      </div>
    </header>
  );
}
