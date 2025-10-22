import ProjectCard from "@/components/features/projects/ProjectCard";
import projects from "@/data/projects.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Tomokichiの制作実績ページ。これまで開発してきたプロダクトや大学での課題などを掲載しています。",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl p-4">
      {/* ページヘッダー */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          制作実績
        </h1>
        <p className="mt-4 text-muted-foreground">
          これまで開発してきたプロダクトや大学での課題などを掲載しています。
        </p>
      </section>

      {/* プロジェクト一覧グリッド */}
      <section>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
