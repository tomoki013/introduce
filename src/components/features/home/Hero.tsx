"use client";

import Link from "next/link";
import {
  MotionSection,
  MotionH1,
  MotionH2,
  MotionDiv,
} from "@/components/common/Motion";

export default function Hero() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const glitchVariants = {
    hidden: { opacity: 0, x: -10, y: 10 },
    visible: {
      opacity: [0, 1, 0.2, 1, 0.5, 1],
      x: [0, -10, 5, -5, 10, 0],
      y: [0, 10, -5, 5, -10, 0],
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <MotionSection
      className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center p-4 text-center"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <MotionH1
        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl"
        variants={glitchVariants}
      >
        新しい世界への探究心を、
        <br />
        <span className="text-primary">技術</span>
        で形にする。
      </MotionH1>
      <MotionH2
        className="mt-4 text-lg text-muted-foreground md:text-xl"
        variants={glitchVariants}
      >
        Tomokichi&apos;s Portfolio
      </MotionH2>
      <MotionDiv variants={glitchVariants}>
        <Link
          href="/projects"
          className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          制作実績を見る
        </Link>
      </MotionDiv>
    </MotionSection>
  );
}
