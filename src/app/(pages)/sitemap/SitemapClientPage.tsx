"use client";

import Link from "next/link";
import { Section } from "@/components/common/Section";
import { MotionDiv } from "@/components/common/Motion";
import { FaBookOpen, FaFolderOpen, FaFile } from "react-icons/fa";
import { PostData } from "@/lib/blog";

interface Project {
  slug: string;
  title: string;
}

interface SitemapClientPageProps {
  posts: PostData[];
  projects: Project[];
}

const pages = [
  { href: "/", title: "トップ" },
  { href: "/about", title: "自己紹介" },
  { href: "/projects", title: "制作実績" },
  { href: "/blog", title: "ブログ" },
  { href: "/news", title: "ニュース" },
  { href: "/skills", title: "スキル" },
  { href: "/contact", title: "お問い合わせ" },
  { href: "/social", title: "ソーシャル" },
  { href: "/terms", title: "利用規約" },
  { href: "/privacy", title: "プライバシーポリシー" },
  { href: "/sitemap", title: "サイトマップ" },
];

export function SitemapClientPage({
  posts,
  projects,
}: SitemapClientPageProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <Section
      title="Sitemap"
      titleClassName="text-4xl font-bold text-center text-primary"
      className="container mx-auto px-4 py-16"
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        {/* Pages Section */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold text-accent">
            <FaFile />
            Pages
          </h2>
          <ul className="space-y-2">
            {pages.map((page) => (
              <MotionDiv key={page.href} variants={itemVariants}>
                <Link
                  href={page.href}
                  className="glitch block rounded-md bg-card p-4 text-card-foreground transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                  data-text={page.title}
                >
                  {page.title}
                </Link>
              </MotionDiv>
            ))}
          </ul>
        </MotionDiv>

        {/* Blog Section */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold text-accent">
            <FaBookOpen />
            Blog Posts
          </h2>
          <ul className="space-y-2">
            {posts.map((post) => (
              <MotionDiv key={post.slug} variants={itemVariants}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="glitch block rounded-md bg-card p-4 text-card-foreground transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                  data-text={post.title}
                >
                  {post.title}
                </Link>
              </MotionDiv>
            ))}
          </ul>
        </MotionDiv>

        {/* Projects Section */}
        <MotionDiv
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold text-accent">
            <FaFolderOpen />
            Projects
          </h2>
          <ul className="space-y-2">
            {projects.map((project) => (
              <MotionDiv key={project.slug} variants={itemVariants}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="glitch block rounded-md bg-card p-4 text-card-foreground transition-transform hover:scale-105 hover:bg-accent hover:text-accent-foreground"
                  data-text={project.title}
                >
                  {project.title}
                </Link>
              </MotionDiv>
            ))}
          </ul>
        </MotionDiv>
      </div>
    </Section>
  );
}
