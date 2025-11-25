"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

// Define Project type locally based on usage and json structure
export interface Project {
  slug: string;
  title: string;
  isFeatured: boolean;
  thumbnail: string;
  tags: string[];
  summary: string;
  details: {
    overview: string;
    background: string;
    challenge: string;
    solution: string;
    outcome: string;
    techStack: string[];
    features: string[];
    links: {
      url: string;
      github: string;
    };
    images: string[];
  };
  // Add other fields if necessary based on projects.json
  id?: string; // slug is used as id usually
  githubUrl?: string; // mapped from links.github
  description?: string; // mapped from summary
}

interface TravelProjectsProps {
  projects: any[]; // Using any[] temporarily to avoid strict type mismatch with json import, but casting inside
}

export default function TravelProjects({ projects }: TravelProjectsProps) {
  return (
    <section
      id="projects"
      className="py-24 px-4 bg-slate-50 dark:bg-slate-900/50"
    >
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Destinations
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mt-2">
            FEATURED{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              WORKS
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore the digital landscapes I've crafted. Each project is a new
            journey into technology and design.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Postcard Stamp Effect */}
              <div className="absolute top-4 right-4 z-10 w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center rotate-12 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-sm">
                <span className="text-[10px] font-bold text-white uppercase text-center leading-tight">
                  VISITED
                  <br />
                  {new Date().getFullYear()}
                </span>
              </div>

              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.thumbnail || "/placeholder.jpg"} // Fallback
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  {project.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold mb-2 font-montserrat group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground line-clamp-2 mb-6">
                  {project.summary}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    Read More <ExternalLink className="h-3 w-3" />
                  </Link>
                  <div className="flex gap-3">
                    {project.details?.links?.github && (
                      <a
                        href={project.details.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
