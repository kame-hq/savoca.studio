"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SVLogo } from "@/components/brand/v2";
import { Hamburger, MobileDrawer, useActiveSection } from "@/components/brand/v3";

const links = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Proof", href: "#proof", id: "proof" },
  { label: "About", href: "#about", id: "about" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const active = useActiveSection(links.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 inset-x-0 z-50 transition-colors duration-300"
        style={{
          background: scrolled ? "rgba(251, 249, 244, 0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(10px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(10px)" : "none",
          borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        }}
      >
        <div className="grid grid-cols-[1fr_auto_1fr] md:grid-cols-3 items-center px-6 md:px-10 lg:px-12 py-4">
          <Link href="/" aria-label="Savoca Studio" className="justify-self-start">
            <span className="md:hidden">
              <SVLogo size={26} layout="inline" />
            </span>
            <span className="hidden md:inline-block">
              <SVLogo size={20} layout="inline" />
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 justify-self-center font-mono text-[11px] uppercase tracking-[0.16em] text-ink-2">
            {links.map((l) => {
              const isActive = active === l.id;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className="cta-line relative"
                  style={{
                    color: isActive ? "var(--money)" : undefined,
                  }}
                >
                  {l.label}
                  {isActive && (
                    <span
                      aria-hidden
                      className="absolute"
                      style={{
                        left: 0,
                        right: 0,
                        bottom: -3,
                        height: 1.5,
                        background: "var(--money-2)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="justify-self-end flex items-center gap-2">
            <Link
              href="#contact"
              className="cta-fill hidden md:inline-block font-mono text-[11px] uppercase tracking-[0.14em] text-bone bg-ink hover:bg-money transition-colors px-4 py-2.5"
            >
              Book a call →
            </Link>
            <Hamburger open={drawerOpen} onClick={() => setDrawerOpen((v) => !v)} />
          </div>
        </div>
      </header>

      <MobileDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <div className="px-7 pt-7 pb-4 flex items-center justify-between">
          <SVLogo size={22} layout="inline" color="var(--bone)" accent="var(--money-2)" />
        </div>
        <nav className="flex-1 px-7 pt-10 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setDrawerOpen(false)}
              className="font-serif italic"
              style={{
                fontSize: 36,
                letterSpacing: "-0.025em",
                lineHeight: 1,
                color: "var(--bone)",
                fontWeight: 400,
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="px-7 pb-7">
          <Link
            href="#contact"
            onClick={() => setDrawerOpen(false)}
            className="cta-fill block text-center font-mono"
            style={{
              padding: "16px 22px",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              background: "var(--bone)",
              color: "var(--ink)",
              fontWeight: 500,
            }}
          >
            Book a call →
          </Link>
        </div>
      </MobileDrawer>
    </>
  );
}
