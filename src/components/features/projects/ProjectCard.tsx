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
      <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-all hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 dark:border-slate-700 dark:bg-slate-800">
        <div className="relative h-40 w-full">
          <Image
            src={project.thumbnail || "/images/placeholder.png"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-slate-50">
            {project.title}
          </h3>
          <p className="mb-3 text-sm text-slate-600 dark:text-slate-400">
            {project.summary}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-sky-100 px-2 py-1 text-xs font-semibold text-sky-800 dark:bg-slate-700 dark:text-sky-400"
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
