"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Plane, Map, User, Mail, Briefcase, Menu, X } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="relative flex items-center justify-between rounded-full bg-white/80 px-6 py-3 shadow-lg backdrop-blur-md dark:bg-slate-900/80 border border-white/20 dark:border-slate-700/50">
            {/* Logo / Brand */}
            <Link href="/" className="flex items-center gap-2 group z-50">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shadow-md transition-transform group-hover:rotate-12">
                <Plane className="h-6 w-6" />
              </div>
              <span className="hidden text-lg font-bold tracking-tight md:block font-montserrat">
                TOMOKICHI<span className="text-primary">.AIR</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
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
              <button
                ref={buttonRef}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="z-50 md:hidden rounded-full p-2 text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/80 pt-28 backdrop-blur-lg md:hidden"
            ref={menuRef}
          >
            <nav>
              <ul className="flex flex-col items-center gap-4">
                {navItems.map((item) => (
                  <li key={`mobile-${item.name}`}>
                    <Link
                      href={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 rounded-full px-6 py-3 text-lg font-semibold text-foreground transition-colors hover:bg-primary/10"
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
