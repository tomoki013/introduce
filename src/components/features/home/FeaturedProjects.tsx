"use client";

import ProjectCard from "@/components/features/projects/ProjectCard";
import { MotionSection, MotionDiv } from "@/components/common/Motion";
import type { Variants } from "framer-motion";

type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  summary: string;
  tags: string[];
  isFeatured: boolean;
  // Add other fields from projects.json if needed, but keep them optional
  // to satisfy ProjectCard's requirements.
  image?: string;
  description?: string;
  stack?: string[];
  url?: string;
  details?: object;
};

type Props = {
  projects: Project[];
};

export default function FeaturedProjects({ projects }: Props) {
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
        {projects.slice(0, 3).map((project) => (
          <MotionDiv key={project.slug} variants={skillVariants}>
            <ProjectCard project={project} />
          </MotionDiv>
        ))}
      </MotionDiv>
    </MotionSection>
  );
}
