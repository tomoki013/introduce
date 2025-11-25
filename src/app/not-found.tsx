"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border-t-8 border-red-500"
      >
        <div className="p-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 text-red-500 mb-6">
            <AlertTriangle className="w-10 h-10" />
          </div>

          <h1 className="text-4xl font-black font-montserrat mb-2 text-slate-900 dark:text-white">
            FLIGHT CANCELLED
          </h1>
          <div className="text-sm font-mono text-red-500 font-bold tracking-widest mb-6">
            ERROR CODE: 404
          </div>

          <p className="text-muted-foreground mb-8">
            We apologize for the inconvenience. The destination you are looking
            for does not exist or has been moved to another terminal.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-bold text-white transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/25"
          >
            <Home className="w-4 h-4" /> Return to Home Base
          </Link>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-t border-slate-100 dark:border-slate-700">
          <div className="flex justify-between text-xs font-mono text-muted-foreground">
            <span>STATUS: MISSING</span>
            <span>GATE: CLOSED</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
