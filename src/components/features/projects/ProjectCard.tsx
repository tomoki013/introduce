import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/Motion";

type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  summary: string;
  tags: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  const cardVariants = {
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
        ease: "easeInOut",
      },
    },
  };

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
