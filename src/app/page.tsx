import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/features/projects/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ヒーローセクション */}
      <section className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-50 md:text-6xl">
          新しい世界への探究心を、
          <br />
          <span className="text-sky-500 dark:text-sky-400">技術</span>
          で形にする。
        </h1>
        <h2 className="mt-4 text-xl text-slate-700 dark:text-slate-300">
          Tomokichi&aposs Portfolio
        </h2>
        <Link
          href="/projects"
          className="mt-8 inline-block rounded-md bg-sky-500 px-6 py-3 font-bold text-white transition-transform hover:scale-105"
        >
          制作実績を見る
        </Link>
      </section>

      {/* About Me セクション */}
      <section id="about" className="mx-auto max-w-4xl scroll-mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-slate-50">
          About Me
        </h2>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <Image
            src="/images/avatar.png"
            alt="Tomokichi"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div className="text-center md:text-left">
            <p className="leading-relaxed">
              Next.jsとTypeScriptを軸に、再利用性の高いコンポーネント設計と、誰もがストレスなく使えるUI/UXの実現に情熱を注いでいます。この技術への探究心は、自身の「旅」の経験と深く結びついています...
            </p>
            <Link
              href="/about"
              className="mt-4 inline-block font-semibold text-sky-500 transition-colors hover:text-sky-600 dark:text-sky-400 dark:hover:text-sky-300"
            >
              もっと詳しく →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects セクション */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-slate-50">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Skills セクション */}
      <section id="skills" className="mx-auto max-w-4xl scroll-mt-20">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 dark:text-slate-50">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="rounded-lg bg-slate-100 px-4 py-2 text-lg font-semibold dark:bg-slate-800">
            Next.js
          </span>
          <span className="rounded-lg bg-slate-100 px-4 py-2 text-lg font-semibold dark:bg-slate-800">
            TypeScript
          </span>
          <span className="rounded-lg bg-slate-100 px-4 py-2 text-lg font-semibold dark:bg-slate-800">
            React
          </span>
          <span className="rounded-lg bg-slate-100 px-4 py-2 text-lg font-semibold dark:bg-slate-800">
            Tailwind CSS
          </span>
        </div>
      </section>
    </div>
  );
}
