"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, MapPin } from "lucide-react";
import { Project } from "@/components/features/home/ProjectsSection";

interface TravelProjectsListProps {
  projects: any[]; // Using any[] to avoid strict type mismatch with json import
}

export default function ProjectsList({ projects }: TravelProjectsListProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
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
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={project.thumbnail || "/placeholder.jpg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-widest mb-1 opacity-80">
                <MapPin className="w-3 h-3" /> Destination
              </div>
              <h3 className="text-xl font-bold font-montserrat">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col grow">
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-primary/10 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-sm text-muted-foreground line-clamp-3 mb-6 grow">
              {project.summary}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700 mt-auto">
              <Link
                href={`/projects/${project.slug}`}
                className="text-sm font-bold text-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                Explore Guide <ExternalLink className="h-3 w-3" />
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
  );
}
