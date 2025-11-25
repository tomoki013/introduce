"use client";

import { motion } from "framer-motion";
import { Plane, MapPin, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TravelHero() {
  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-20">
      <div className="relative w-full max-w-5xl">
        {/* Boarding Pass Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-white shadow-2xl dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
        >
          {/* Top Strip (Airline Color) */}
          <div className="h-4 w-full bg-primary" />

          <div className="flex flex-col md:flex-row">
            {/* Main Section (Left) */}
            <div className="flex-1 p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2 text-primary font-bold tracking-widest">
                  <Plane className="h-5 w-5" />
                  <span>TOMOKICHI AIRLINES</span>
                </div>
                <div className="text-xs font-mono text-muted-foreground border border-muted-foreground/30 px-2 py-1 rounded">
                  FIRST CLASS
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Passenger Name
                  </p>
                  <h1 className="text-4xl md:text-6xl font-black text-foreground font-montserrat tracking-tight">
                    TOMOKICHI
                  </h1>
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      From
                    </p>
                    <div className="text-2xl font-bold font-mono">TOKYO</div>
                    <div className="text-sm text-muted-foreground">Japan</div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      To
                    </p>
                    <div className="text-2xl font-bold font-mono text-primary">
                      THE WORLD
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Global Web
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A travel-loving engineer building immersive web experiences.
                    Currently boarding for new adventures in frontend
                    development.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/projects"
                  className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/30"
                >
                  <MapPin className="h-5 w-5" />
                  View Destinations
                </Link>
                <Link
                  href="/blog"
                  className="group flex items-center gap-2 rounded-full border-2 border-slate-200 px-8 py-4 font-bold text-slate-600 transition-all hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-300"
                >
                  <Calendar className="h-5 w-5" />
                  Read Blog
                </Link>
              </div>
            </div>

            {/* Stub Section (Right) - Separated by dashed line */}
            <div className="relative hidden md:flex w-80 flex-col justify-between border-l-2 border-dashed border-slate-300 bg-slate-50 p-8 dark:bg-slate-900/50 dark:border-slate-700">
              {/* Cutout Circles */}
              <div className="absolute -left-3 top-0 h-6 w-6 rounded-full bg-background" />
              <div className="absolute -left-3 bottom-0 h-6 w-6 rounded-full bg-background" />

              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Flight No
                  </p>
                  <div className="text-3xl font-black font-mono">TK-013</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Date
                  </p>
                  <div className="text-xl font-bold font-mono">
                    {new Date().toLocaleDateString()}
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Gate
                  </p>
                  <div className="text-3xl font-black font-mono text-primary">
                    A1
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                    Seat
                  </p>
                  <div className="text-3xl font-black font-mono">1A</div>
                </div>
              </div>

              <div className="mt-auto">
                {/* Barcode simulation */}
                <div
                  className="h-12 w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')] opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(90deg, currentColor 0, currentColor 2px, transparent 2px, transparent 4px)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
