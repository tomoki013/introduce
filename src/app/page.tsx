import projects from "@/data/projects.json";
import { getAllPosts } from "@/lib/blog";
import { getAllNews } from "@/lib/news";
import Hero from "@/components/features/home/Hero";
import NewsSection from "@/components/features/home/NewsSection";
import ProjectsSection from "@/components/features/home/ProjectsSection";
import SkillsSection from "@/components/features/home/SkillsSection";
import ContactSection from "@/components/features/contact/ContactSection";

export default async function Home() {
  const featuredProjects = projects.filter((project) => project.isFeatured);
  // const latestPosts = getAllPosts().slice(0, 3); // Keeping this if needed later, but for now replacing with Travel components
  const news = await getAllNews();

  return (
    <div className="space-y-0">
      <Hero />
      <NewsSection news={news} />
      <ProjectsSection projects={featuredProjects} />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
