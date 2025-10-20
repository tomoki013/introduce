import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import ProjectCard from "@/components/features/projects/ProjectCard";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* ヒーローセクション */}
      <section className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center p-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-6xl">
          新しい世界への探究心を、
          <br />
          <span className="text-primary">技術</span>
          で形にする。
        </h1>
        <h2 className="mt-4 text-lg text-muted-foreground md:text-xl">
          Tomokichi&aposs Portfolio
        </h2>
        <Link
          href="/projects"
          className="mt-8 inline-block rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          制作実績を見る
        </Link>
      </section>

      {/* About Me セクション */}
      <section id="about" className="mx-auto max-w-4xl scroll-mt-20 p-4">
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
      </section>

      {/* Featured Projects セクション */}
      <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 p-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* Skills セクション */}
      <section id="skills" className="mx-auto max-w-4xl scroll-mt-20 p-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">
          Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="rounded-lg bg-secondary px-4 py-2 text-lg font-semibold">
            Next.js
          </span>
          <span className="rounded-lg bg-secondary px-4 py-2 text-lg font-semibold">
            TypeScript
          </span>
          <span className="rounded-lg bg-secondary px-4 py-2 text-lg font-semibold">
            React
          </span>
          <span className="rounded-lg bg-secondary px-4 py-2 text-lg font-semibold">
            Tailwind CSS
          </span>
        </div>
      </section>
    </div>
  );
}
