import { getAllPosts } from "@/lib/blog";
import projectsData from "@/data/projects.json";
import { SitemapClientPage } from "./SitemapClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap",
  description: "Tomokichi Official Websiteのサイトマップページです。",
};

export default function SitemapPage() {
  const posts = getAllPosts();
  const projects = projectsData;

  return <SitemapClientPage posts={posts} projects={projects} />;
}
