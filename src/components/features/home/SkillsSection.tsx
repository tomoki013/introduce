"use client";

import { motion } from "framer-motion";
import {
  Check,
  Code,
  Database,
  Layout,
  Smartphone,
  Terminal,
} from "lucide-react";

const skills = [
  {
    category: "Frontend",
    icon: Layout,
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js"],
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Python", "PostgreSQL", "Firebase", "Supabase"],
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native", "Flutter", "Expo"],
  },
  {
    category: "Tools",
    icon: Terminal,
    items: ["Git", "Docker", "VS Code", "Figma", "Vercel"],
  },
];

export default function TravelSkills() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm">
            Inventory
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-montserrat mt-2">
            PACKING{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              LIST
            </span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Essential tools and technologies I carry on every journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border-2 border-slate-100 dark:border-slate-700 relative overflow-hidden"
            >
              {/* "Checked" Stamp Effect */}
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center rotate-12">
                <Check className="w-8 h-8 text-green-500 opacity-50" />
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <skillGroup.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-montserrat">
                  {skillGroup.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {skillGroup.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300"
                  >
                    <div className="w-4 h-4 rounded border-2 border-slate-300 dark:border-slate-600 flex items-center justify-center">
                      <div className="w-2 h-2 bg-primary rounded-sm" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
