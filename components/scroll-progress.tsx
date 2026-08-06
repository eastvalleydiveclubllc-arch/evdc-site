"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Ultra-thin crimson hairline at the top of the viewport that fills
 * as you scroll through the page. Subtle luxury detail.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 22,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-px bg-crimson origin-left"
      aria-hidden
    />
  );
}
