"use client";

import { motion } from "framer-motion";
import { Plane, MapPin, Calendar } from "lucide-react";

interface JourneyItem {
  date: string;
  title: string;
  category: string;
  description?: string;
}

interface TravelJourneyProps {
  journeys: JourneyItem[];
  title: string;
  icon?: "plane" | "map";
}

export default function TravelJourney({
  journeys,
  title,
  icon = "plane",
}: TravelJourneyProps) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon === "plane" ? (
            <Plane className="w-6 h-6" />
          ) : (
            <MapPin className="w-6 h-6" />
          )}
        </div>
        <h2 className="text-2xl font-bold font-montserrat">{title}</h2>
      </div>

      <div className="relative border-l-2 border-dashed border-slate-300 dark:border-slate-700 ml-6 space-y-12 pb-4">
        {journeys.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8"
          >
            {/* Dot on the line */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-4 border-primary" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1 text-sm font-mono font-bold text-primary bg-primary/5 px-2 py-1 rounded">
                <Calendar className="w-3 h-3" />
                {item.date}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground border border-slate-200 dark:border-slate-700 px-2 py-1 rounded">
                {item.category}
              </span>
            </div>

            <h3 className="text-lg font-bold mb-2">{item.title}</h3>

            {item.description && (
              <p className="text-muted-foreground text-sm leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-lg border border-slate-100 dark:border-slate-700">
                {item.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
