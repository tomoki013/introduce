"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function TravelBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-blue-200 via-blue-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-1000" />

      {/* Sun / Moon */}
      <div className="absolute top-10 right-10 w-24 h-24 rounded-full bg-yellow-300 blur-xl opacity-60 dark:bg-blue-100 dark:opacity-20 animate-pulse" />

      {/* Clouds */}
      <div className="absolute inset-0 opacity-40 dark:opacity-10">
        <Cloud top="10%" left="5%" duration={60} delay={0} scale={1.2} />
        <Cloud top="25%" left="60%" duration={80} delay={10} scale={0.8} />
        <Cloud top="15%" left="80%" duration={70} delay={5} scale={1} />
        <Cloud top="40%" left="20%" duration={90} delay={20} scale={1.5} />
        <Cloud top="60%" left="70%" duration={75} delay={15} scale={0.9} />
      </div>

      {/* Grid overlay for a bit of "Tech" feel mixed in */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

function Cloud({
  top,
  left,
  duration,
  delay,
  scale,
}: {
  top: string;
  left: string;
  duration: number;
  delay: number;
  scale: number;
}) {
  return (
    <motion.div
      className="absolute text-white dark:text-slate-400"
      style={{ top, left, scale }}
      animate={{
        x: ["-10vw", "110vw"],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "linear",
        delay: delay,
      }}
    >
      <svg
        width="100"
        height="60"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-0.14,0.006-0.279,0.017-0.418C11.595,13.034,11.055,13,10.5,13c-3.59,0-6.5,2.91-6.5,6.5c0,0.276,0.224,0.5,0.5,0.5h13c0.276,0,0.5-0.224,0.5-0.5S17.776,19,17.5,19z" />
        <path d="M17.5,6c-1.743,0-3.268,0.925-4.154,2.303C12.984,8.106,12.501,8,12,8c-3.314,0-6,2.686-6,6c0,0.686,0.115,1.346,0.326,1.968C6.119,15.989,6.06,16,6,16c0,0.276,0.224,0.5,0.5,0.5h1.163c0.413-2.988,2.986-5.323,6.126-5.48C13.882,10.938,13.939,11,14,11c0.021,0,0.041-0.003,0.061-0.004C14.302,8.167,16.732,6,19.5,6c0.169,0,0.335,0.01,0.5,0.024V6H17.5z" />
      </svg>
    </motion.div>
  );
}
