"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.22, 0.61, 0.36, 1] as const;

export function RevealWords({
  text,
  className,
  delay = 0,
  stagger = 0.07,
  y = 110,
  duration = 0.85,
}: {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  y?: number;
  duration?: number;
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  if (reduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12%" }}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
      variants={{ hidden: {}, visible: {} }}
      style={{ display: "inline" }}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
          style={{
            verticalAlign: "baseline",
            paddingTop: "0.05em",
            paddingBottom: "0.28em",
            marginBottom: "-0.28em",
          }}
        >
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: `${y}%`, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration, ease: EASE }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  );
}

export function RevealBlock({
  children,
  delay = 0,
  y = 12,
  duration = 0.7,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
