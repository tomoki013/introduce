"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PostData } from "@/lib/blog";
import { Plane, Map, FileText, ExternalLink } from "lucide-react";

interface Project {
  slug: string;
  title: string;
}

interface SitemapClientPageProps {
  posts: PostData[];
  projects: Project[];
}

const pages = [
  { href: "/", title: "HOME", code: "HME" },
  { href: "/about", title: "ABOUT", code: "ABT" },
  { href: "/projects", title: "PROJECTS", code: "PRJ" },
  { href: "/blog", title: "BLOG", code: "BLG" },
  { href: "/news", title: "NEWS", code: "NWS" },
  { href: "/skills", title: "SKILLS", code: "SKL" },
  { href: "/contact", title: "CONTACT", code: "CNT" },
  { href: "/social", title: "SOCIAL", code: "SOC" },
  { href: "/terms", title: "TERMS", code: "TRM" },
  { href: "/privacy", title: "PRIVACY", code: "PRV" },
  { href: "/sitemap", title: "SITEMAP", code: "MAP" },
];

export function SitemapClientPage({ posts, projects }: SitemapClientPageProps) {
  return (
    <section className="min-h-screen py-20 px-4 font-mono">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-widest text-yellow-500 mb-2">
            DEPARTURES
          </h1>
          <p className="text-slate-400 uppercase tracking-widest text-sm">
            Select your destination
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Main Pages */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-2xl font-bold text-yellow-500 border-b-2 border-yellow-500 pb-2">
              <Map className="h-6 w-6" />
              <h2>MAIN TERMINAL</h2>
            </div>
            <div className="rounded-lg overflow-hidden border border-slate-700">
              <div className="grid grid-cols-[1fr_auto] gap-4 p-4 text-xs uppercase tracking-widest border-b border-slate-700">
                <div>Destination</div>
                <div>Code</div>
              </div>
              <div className="divide-y divide-slate-700">
                {pages.map((page, index) => (
                  <motion.div
                    key={page.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={page.href}
                      className="grid grid-cols-[1fr_auto] gap-4 p-4 hover:bg-yellow-500/10 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <Plane className="h-4 w-4 text-yellow-500 rotate-45 group-hover:translate-x-1 transition-transform" />
                        <span className="font-bold text-lg tracking-wider group-hover:text-yellow-400 transition-colors">
                          {page.title}
                        </span>
                      </div>
                      <div className="text-slate-400 font-mono">
                        {page.code}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* Projects */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-2xl font-bold text-blue-400 border-b-2 border-blue-400 pb-2">
                <ExternalLink className="h-6 w-6" />
                <h2>PROJECTS</h2>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-700">
                <div className="divide-y divide-slate-700">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project.slug}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`/projects/${project.slug}`}
                        className="block p-4 hover:bg-blue-500/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-lg tracking-wider group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </span>
                          <span className="text-xs text-green-400 border border-green-400/30 px-2 py-1 rounded bg-green-400/10">
                            BOARDING
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-2xl font-bold text-pink-400 border-b-2 border-pink-400 pb-2">
                <FileText className="h-6 w-6" />
                <h2>BLOG LOGS</h2>
              </div>
              <div className="rounded-lg overflow-hidden border border-slate-700">
                <div className="divide-y divide-slate-700">
                  {posts.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="block p-4 hover:bg-pink-500/10 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-lg tracking-wider group-hover:text-pink-400 transition-colors truncate max-w-[80%]">
                            {post.title}
                          </span>
                          <span className="text-xs text-slate-500">
                            {new Date(post.date).toLocaleDateString()}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
