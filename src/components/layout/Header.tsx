"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Plane, Map, User, Mail, Briefcase } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { name: "Home", path: "/", icon: Plane },
  { name: "Projects", path: "/projects", icon: Map },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
  { name: "News", path: "/news", icon: Briefcase },
];

export default function TravelHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between rounded-full bg-white/80 px-6 py-3 shadow-lg backdrop-blur-md dark:bg-slate-900/80 border border-white/20 dark:border-slate-700/50">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform group-hover:rotate-12">
              <Plane className="h-6 w-6" />
            </div>
            <span className="hidden text-lg font-bold tracking-tight md:block font-montserrat">
              TOMOKICHI<span className="text-primary">.AIR</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-primary-foreground"
                          : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute inset-0 rounded-full bg-primary"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <span
                        className={`relative z-10 flex items-center gap-2 ${
                          isActive ? "text-white" : ""
                        }`}
                      >
                        <item.icon className="h-4 w-4" />
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Nav & Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            {/* Mobile Menu Button could go here */}
          </div>
        </div>
      </div>
    </header>
  );
}
