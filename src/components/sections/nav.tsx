"use client";

import Link from "next/link";
import { motion } from "motion/react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Proof", href: "#proof" },
  { label: "About", href: "#about" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -12, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 mix-blend-difference text-bg"
    >
      <div className="px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-[14px] tracking-[-0.01em] font-medium"
          data-cursor-grow
        >
          Savoca <span className="font-serif italic">Studio</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[13px]">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative group"
              data-cursor-grow
            >
              {l.label}
              <span className="absolute left-0 right-0 -bottom-1 h-px bg-bg scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 ease-out" />
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="text-[13px] inline-flex items-center gap-2 group"
          data-cursor-grow
        >
          <span>Book a call</span>
          <span className="block w-5 h-px bg-bg transition-all duration-500 group-hover:w-10" />
        </Link>
      </div>
    </motion.header>
  );
}
