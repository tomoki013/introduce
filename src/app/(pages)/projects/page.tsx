import ProjectsList from "@/components/features/projects/ProjectsList";
import projects from "@/data/projects.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Destinations | Projects",
  description:
    "Explore the digital landscapes I've crafted. A collection of my development journeys.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black font-montserrat mb-4 tracking-tight">
            TRAVEL <span className="text-primary">LOG</span>
          </h1>
          <p className="text-muted-foreground">
            A collection of destinations visited and worlds created.
          </p>
        </div>
        <ProjectsList projects={projects} />
      </div>
    </div>
  );
}
