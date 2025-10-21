import Link from "next/link";
import Image from "next/image";

type Project = {
  slug: string;
  title: string;
  thumbnail: string;
  summary: string;
  tags: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="group overflow-hidden rounded-lg border bg-card text-card-foreground transition-all hover:border-primary hover:shadow-lg hover:shadow-primary/10">
        <div className="relative h-40 w-full">
          <Image
            src={project.thumbnail || "favicon.ico"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
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
  );
}
