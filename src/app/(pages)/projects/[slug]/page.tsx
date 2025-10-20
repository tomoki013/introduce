import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// ビルド時に各プロジェクトページのパスを静的に生成する
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  // プロジェクトが見つからない場合は404ページを表示
  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl">
      {/* ページヘッダー */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
          {project.summary}
        </p>
      </section>

      {/* メイン画像 */}
      <section className="mb-12">
        <div className="relative h-96 w-full overflow-hidden rounded-lg">
          <Image
            src={project.thumbnail || "/images/placeholder.png"}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>

      {/* プロジェクト情報 */}
      <section className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* 外部リンク */}
        <div className="md:col-span-1">
          <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-50">
            リンク
          </h2>
          <div className="space-y-3">
            {project.details.links.url && (
              <a
                href={project.details.links.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-500 transition-colors hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
              >
                <FiExternalLink /> サイトを見る
              </a>
            )}
            {project.details.links.github && (
              <a
                href={project.details.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sky-500 transition-colors hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
              >
                <FiGithub /> GitHubリポジトリ
              </a>
            )}
          </div>
        </div>

        {/* 技術スタック */}
        <div className="md:col-span-2">
          <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-50">
            使用技術
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.details.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-800 dark:bg-slate-700 dark:text-sky-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 詳細説明 */}
      <section className="prose prose-lg max-w-none dark:prose-invert prose-p:leading-relaxed prose-a:text-sky-500 dark:prose-a:text-sky-400">
        <h2>概要</h2>
        <p>{project.details.overview}</p>

        <h2>背景・目的</h2>
        <p>{project.details.background}</p>

        <h2>工夫した点</h2>
        <ul>
          {project.details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      {/* 戻るボタン */}
      <div className="mt-16 text-center">
        <Link
          href="/projects"
          className="inline-block rounded-md border border-slate-300 px-6 py-3 font-bold transition-colors hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800"
        >
          制作実績一覧へ戻る
        </Link>
      </div>
    </div>
  );
}
