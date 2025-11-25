import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { Metadata } from "next";
import ProjectDetail from "@/components/features/projects/ProjectDetail";

// 2. 動的にメタデータを生成
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    notFound();
  }

  return {
    title: project.title,
    description: project.details.overview,
    openGraph: {
      title: project.title,
      description: project.details.overview,
      type: "article",
      images: project.thumbnail
        ? [
            {
              url: project.thumbnail,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [],
    },
    twitter: {
      title: project.title,
      description: project.details.overview,
      images: project.thumbnail ? [project.thumbnail] : [],
    },
  };
}

// ビルド時に各プロジェクトページのパスを静的に生成する
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const project = projects.find((p) => p.slug === params.slug);

  // プロジェクトが見つからない場合は404ページを表示
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <ProjectDetail project={project} />
    </div>
  );
}
