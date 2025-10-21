import projects from "@/data/projects.json";
import { getAllPosts } from "@/lib/blog";
import Hero from "@/components/features/home/Hero";
import { News } from "@/components/features/news/News";
import AboutMe from "@/components/features/home/AboutMe";
import FeaturedProjects from "@/components/features/home/FeaturedProjects";
import LatestPosts from "@/components/features/blog/LatestPosts";
import Skills from "@/components/features/home/Skills";
import { FaRegNewspaper } from "react-icons/fa";
import { MotionDiv, MotionH2 } from "@/components/common/Motion";
import { Section } from "@/components/common/Section";
import Link from "next/link";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.isFeatured);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <Section>
        <div className="flex items-center gap-2">
          <FaRegNewspaper className="text-xl" />
          <MotionH2>News</MotionH2>
        </div>
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 space-y-4"
        >
          <News limit={5} />
          <div className="text-center">
            <Link
              href="/news"
              className="inline-block font-semibold text-primary transition-colors hover:text-primary/80"
            >
              View All →
            </Link>
          </div>
        </MotionDiv>
      </Section>
      <AboutMe />
      <FeaturedProjects projects={featuredProjects} />
      <LatestPosts posts={latestPosts} />
      <Skills />
    </div>
  );
}
