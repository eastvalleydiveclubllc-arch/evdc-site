"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Cinematic page-load sequence.
 *
 * 0.0s – 1.2s  : diver silhouette arcs across the viewport (720° tumble)
 * 1.15s – 1.35s: crimson water line draws across
 * 1.25s – 1.9s : splash particles radiate from impact
 * 1.9s – 2.3s  : overlay dissolves, revealing the hero
 *
 * Plays once per browser tab (sessionStorage). Respects prefers-reduced-motion.
 */
export function DiveIntro() {
  const [show, setShow] = useState<null | boolean>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setShow(false);
      return;
    }
    const seen =
      typeof window !== "undefined" &&
      window.sessionStorage.getItem("evdc-intro-played") === "1";
    if (seen) {
      setShow(false);
      return;
    }
    setShow(true);
    const t = setTimeout(() => {
      setShow(false);
      window.sessionStorage.setItem("evdc-intro-played", "1");
    }, 1900);
    return () => clearTimeout(t);
  }, [reduce]);

  // Splash particle ring — 16 droplets radiating from the impact point.
  const particles = Array.from({ length: 16 }, (_, i) => {
    const angle = (i / 16) * Math.PI * 2;
    const dist = 180 + (i % 3) * 40;
    return {
      id: i,
      x: Math.cos(angle) * dist,
      y: Math.sin(angle) * dist - 20,
      size: 6 + (i % 3) * 3,
      delay: 1.2 + (i % 4) * 0.03,
    };
  });

  return (
    <AnimatePresence>
      {show === true && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-ink overflow-hidden pointer-events-none"
          aria-hidden
        >
          {/* Crimson water line — draws across at impact */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 1, 0.4] }}
            transition={{
              scaleX: { duration: 0.3, delay: 1.1, ease: [0.2, 0.8, 0.2, 1] },
              opacity: { duration: 0.9, delay: 1.1, times: [0, 0.2, 0.6, 1] },
            }}
            className="absolute left-0 right-0 top-[70vh] h-px bg-crimson origin-center"
          />

          {/* Diver arcing across viewport */}
          <motion.div
            initial={{
              left: "82vw",
              top: "-14vh",
              rotate: -20,
              scale: 0.55,
              opacity: 0,
            }}
            animate={{
              left: ["82vw", "60vw", "38vw", "22vw"],
              top: ["-14vh", "12vh", "42vh", "68vh"],
              rotate: [-20, 220, 520, 720],
              scale: [0.55, 0.85, 0.75, 0.3],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1.25,
              ease: [0.45, 0, 0.55, 1],
              times: [0, 0.35, 0.72, 1],
            }}
            className="absolute"
          >
            <svg
              viewBox="0 0 200 260"
              width="140"
              height="182"
              fill="var(--color-crimson)"
            >
              {/* Stylized diver in tuck — head + ball + extended leg */}
              <circle cx="100" cy="50" r="22" />
              <path d="M80 76 Q58 102 74 140 Q100 168 140 152 Q168 138 158 108 Q146 84 118 80 Z" />
              <path d="M130 94 L188 30 L200 42 L142 112 Z" />
              <path d="M78 124 Q60 150 78 172 Q94 180 100 170 Q94 152 86 146 Z" />
            </svg>
          </motion.div>

          {/* Splash particles */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                x: p.x,
                y: p.y,
                scale: [0, 1, 0.6],
              }}
              transition={{
                duration: 0.75,
                delay: p.delay,
                ease: "easeOut",
              }}
              className="absolute left-[22vw] top-[70vh] block rounded-full bg-crimson"
              style={{ width: p.size, height: p.size }}
            />
          ))}

          {/* Central flash at impact */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.9, 0], scale: [0, 1.4, 2] }}
            transition={{ duration: 0.55, delay: 1.18, ease: "easeOut" }}
            className="absolute left-[22vw] top-[70vh] w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(200,16,46,0.5) 0%, rgba(200,16,46,0) 70%)",
            }}
          />

          {/* Wordmark reveal — bottom-left signature */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: [0, 1, 1, 0], y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.35,
              times: [0, 0.2, 0.7, 1],
            }}
            className="absolute bottom-10 left-10 text-stone-500 text-[10px] tracking-[0.4em] uppercase"
          >
            East Valley Dive Club
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
