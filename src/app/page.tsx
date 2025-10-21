import projects from "@/data/projects.json";
import { getAllPosts } from "@/lib/blog";
import Hero from "@/components/features/home/Hero";
import { News } from "@/components/features/news/News";
import AboutMe from "@/components/features/home/AboutMe";
import FeaturedProjects from "@/components/features/home/FeaturedProjects";
import LatestPosts from "@/components/features/blog/LatestPosts";
import Skills from "@/components/features/home/Skills";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.isFeatured);
  const latestPosts = getAllPosts().slice(0, 3);

  return (
    <div className="space-y-24 md:space-y-32">
      <Hero />
      <News limit={5} />
      <AboutMe />
      <FeaturedProjects projects={featuredProjects} />
      <LatestPosts posts={latestPosts} />
      <Skills />
    </div>
  );
}
