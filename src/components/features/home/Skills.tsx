"use client";

import { MotionSection, MotionDiv, MotionSpan } from "@/components/common/Motion";
import type { Variants } from "framer-motion";

export default function Skills() {
  const skills = ["Next.js", "TypeScript", "React", "Tailwind CSS"];

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

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -45 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <MotionSection
      id="skills"
      className="mx-auto max-w-4xl scroll-mt-20 p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
        Skills
      </h2>
      <MotionDiv
        className="flex flex-wrap justify-center gap-4"
        variants={sectionVariants}
      >
        {skills.map((skill) => (
          <MotionSpan
            key={skill}
            className="rounded-lg bg-secondary px-4 py-2 text-lg font-semibold"
            variants={skillVariants}
          >
            {skill}
          </MotionSpan>
        ))}
      </MotionDiv>
    </MotionSection>
  );
}
