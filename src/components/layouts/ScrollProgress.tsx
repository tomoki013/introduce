"use client";

import { useScroll, motion } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 origin-[0%] bg-primary shadow-[0_0_10px_var(--primary),0_0_20px_var(--primary)] z-50"
      style={{ scaleX: scrollYProgress }}
    >
      <div className="absolute h-full w-full bg-primary/50 blur-sm" />
      <div className="absolute h-full w-full bg-primary/30 blur-lg" />
    </motion.div>
  );
}
