"use client";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/features/projects/ProjectCard";
import type { Variants } from "framer-motion";
import {
  MotionSection,
  MotionH1,
  MotionH2,
  MotionDiv,
  MotionSpan,
} from "@/components/Motion";
import { Blog } from "@/components/blog/Blog";
import { News } from "@/components/features/news/News";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

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

  const skills = ["Next.js", "TypeScript", "React", "Tailwind CSS"];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ヒーローセクション */}
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

      {/* News セクション */}
      <News />

      {/* About Me セクション */}
      <MotionSection
        id="about"
        className="mx-auto max-w-4xl scroll-mt-20 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={sectionVariants}
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          About Me
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Image
            src="/images/introduce.jpg"
            alt="Tomokichi"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="text-center md:text-left">
            <p className="leading-relaxed text-muted-foreground">
              Next.jsとTypeScriptを軸に、再利用性の高いコンポーネント設計と、誰もがストレスなく使えるUI/UXの実現に情熱を注いでいます。この技術への探究心は、自身の「旅」の経験と深く結びついています...
            </p>
            <Link
              href="/about"
              className="mt-4 inline-block font-semibold text-primary transition-colors hover:text-primary/80"
            >
              もっと詳しく →
            </Link>
          </div>
        </div>
      </MotionSection>

      {/* Featured Projects セクション */}
      <MotionSection
        id="projects"
        className="mx-auto max-w-6xl scroll-mt-20 p-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Featured Projects
        </h2>
        <MotionDiv
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={sectionVariants}
        >
          {featuredProjects.slice(0, 3).map((project) => (
            <MotionDiv key={project.slug} variants={skillVariants}>
              <ProjectCard project={project} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </MotionSection>

      {/* Blog セクション */}
      <Blog />

      {/* Skills セクション */}
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
    </div>
  );
}
