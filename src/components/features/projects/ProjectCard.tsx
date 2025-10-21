"use client";

import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/Motion";
import type { Variants, Easing } from "framer-motion";

type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  summary: string;
  tags: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const cardVariants: Variants = {
    initial: {
      scale: 1,
      boxShadow: "0px 0px 0px var(--primary-a10)",
      borderColor: "var(--border)",
    },
    hover: {
      scale: 1.02,
      boxShadow: [
        "0px 0px 0px var(--primary-a10)",
        "0px 0px 30px var(--primary-a10)",
        "0px 0px 10px var(--primary-a10)",
        "0px 0px 25px var(--primary-a10)",
      ],
      borderColor: "var(--primary)",
      transition: {
        duration: 0.4,
        // Use a typed easing function created from cubic-bezier control points.
        ease: cubicBezier(0.42, 0, 0.58, 1),
      },
    },
  };

  // Create a cubic-bezier easing function compatible with framer-motion's Easing type.
  // This is a lightweight implementation that returns a function (t:number)=>number.
  function cubicBezier(x1: number, y1: number, x2: number, y2: number): Easing {
    // Implementation based on Robert Penner's approach adapted for small usage.
    // For accuracy-critical uses, consider importing a well-tested library.
    return function (t: number) {
      // Use Bernstein polynomial form for cubic Bezier y(t):
      // B(t) = (1-t)^3*0 + 3(1-t)^2*t*y1 + 3(1-t)*t^2*y2 + t^3*1
      const u = 1 - t;
      const tt = t * t;
      const uu = u * u;
      const v = 3 * uu * t * y1 + 3 * u * tt * y2 + tt * t;
      return v;
    };
  }

  const imageVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <MotionDiv whileHover="hover" variants={cardVariants}>
      <Link href={`/projects/${project.slug}`}>
        <div className="group overflow-hidden rounded-lg border bg-card text-card-foreground transition-all">
          <MotionDiv className="relative h-40 w-full" variants={imageVariants}>
            <Image
              src={project.thumbnail || "favicon.ico"}
              alt={project.title}
              fill
              objectFit="cover"
            />
          </MotionDiv>
          <div className="p-4">
            <h3
              className="group-hover:glitch mb-2 text-lg font-bold"
              data-text={project.title}
            >
              {project.title}
            </h3>
            <p className="mb-3 text-sm text-muted-foreground">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </MotionDiv>
  );
}
