"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let dotX = mouseX;
    let dotY = mouseY;
    let ringX = mouseX;
    let ringY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const tick = () => {
      // Dot snaps fast
      dotX += (mouseX - dotX) * 0.5;
      dotY += (mouseY - dotY) * 0.5;
      // Ring lags smoothly
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      dot.style.transform = `translate(${dotX}px, ${dotY}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(tick);
    };

    const onEnterInteractive = () => {
      ring.style.width = "56px";
      ring.style.height = "56px";
      ring.style.borderColor = "rgba(255,255,255,0.9)";
    };
    const onLeaveInteractive = () => {
      ring.style.width = "36px";
      ring.style.height = "36px";
      ring.style.borderColor = "rgba(255,255,255,0.6)";
    };

    document.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    const interactives = document.querySelectorAll("a, button, input, [data-cursor-grow]");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring transition-[width,height,border-color] duration-200 ease-out" />
    </>
  );
}
