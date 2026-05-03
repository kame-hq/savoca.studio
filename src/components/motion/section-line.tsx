"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { type RefObject } from "react";

export function SectionLine({
  targetRef,
}: {
  targetRef: RefObject<HTMLElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 85%", "end 40%"],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const reduced = useReducedMotion();

  return (
    <motion.div
      style={reduced ? { scaleY: 1 } : { scaleY }}
      className="hidden lg:block absolute left-12 top-44 bottom-44 w-px bg-line-strong origin-top pointer-events-none"
      aria-hidden
    />
  );
}
