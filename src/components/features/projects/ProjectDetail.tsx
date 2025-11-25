"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Map,
  CheckCircle,
  Lightbulb,
  Award,
} from "lucide-react";

interface TravelProjectDetailProps {
  project: any; // Using any to match json structure flexibility
}

export default function TravelProjectDetail({
  project,
}: TravelProjectDetailProps) {
  return (
    <article className="max-w-5xl mx-auto">
      {/* Navigation */}
      <div className="mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Destinations
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 bg-slate-900">
        <div className="relative h-[400px] md:h-[500px] w-full">
          <Image
            src={project.thumbnail || "/placeholder.jpg"}
            alt={project.title}
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider shadow-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-black font-montserrat text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              {project.summary}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-12">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          {/* Overview */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Map className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat">
                Journey Overview
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.overview}
            </p>
          </section>

          {/* Challenge & Solution */}
          <div className="grid gap-8">
            <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-red-500/10 rounded-lg text-red-500">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold font-montserrat">
                  The Challenge
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.challenge}
              </p>
            </section>

            <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-500">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold font-montserrat">
                  The Solution
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {project.details.solution}
              </p>
            </section>
          </div>

          {/* Outcome */}
          <section className="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                <Award className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold font-montserrat">
                Outcome & Learnings
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {project.details.outcome}
            </p>
          </section>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {/* Links Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Links
            </h3>
            <div className="space-y-3">
              {project.details.links.url && (
                <a
                  href={project.details.links.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors font-bold"
                >
                  <span>Visit Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
              {project.details.links.github && (
                <a
                  href={project.details.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-foreground hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors font-bold"
                >
                  <span>GitHub</span>
                  <Github className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Tech Stack Card */}
          <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-100 dark:border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.details.techStack.map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded text-sm font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
