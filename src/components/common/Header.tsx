"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import {
  MotionHeader,
  MotionDiv,
  MotionLink,
} from "@/components/common/Motion";
import { FiMenu, FiX, FiGithub } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkVariants = {
    hover: {
      scale: 1.05,
      color: "var(--primary)",
      transition: {
        duration: 0.2,
        yoyo: Infinity,
      },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <MotionHeader
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Tomokichi <span className="text-primary">Official</span> Website
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <MotionLink
            href="/about"
            className="glitch transition-colors hover:text-primary"
            data-text="About"
            variants={navLinkVariants}
            whileHover="hover"
          >
            About
          </MotionLink>
          <MotionLink
            href="/projects"
            className="glitch transition-colors hover:text-primary"
            data-text="Projects"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Projects
          </MotionLink>
          <MotionLink
            href="/blog"
            className="glitch transition-colors hover:text-primary"
            data-text="Skills"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Blog
          </MotionLink>
          <MotionLink
            href="/contact"
            className="glitch transition-colors hover:text-primary"
            data-text="Contact"
            variants={navLinkVariants}
            whileHover="hover"
          >
            Contact
          </MotionLink>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tomoki013"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <FiGithub />
          </a>
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-2xl md:hidden"
            aria-label="メニューを開閉する"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <MotionDiv
            className="absolute left-0 w-full bg-card p-4 md:hidden"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            <nav className="flex flex-col items-center gap-4">
              <MotionLink
                href="/about"
                className="glitch transition-colors hover:text-primary"
                data-text="About"
                variants={navLinkVariants}
                whileHover="hover"
              >
                About
              </MotionLink>
              <MotionLink
                href="/projects"
                className="glitch transition-colors hover:text-primary"
                data-text="Projects"
                variants={navLinkVariants}
                whileHover="hover"
              >
                Projects
              </MotionLink>
              <MotionLink
                href="/blog"
                className="glitch transition-colors hover:text-primary"
                data-text="Skills"
                variants={navLinkVariants}
                whileHover="hover"
              >
                Blog
              </MotionLink>
              <MotionLink
                href="/contact"
                className="glitch transition-colors hover:text-primary"
                data-text="Contact"
                variants={navLinkVariants}
                whileHover="hover"
              >
                Contact
              </MotionLink>
              <a
                href="https://github.com/tomoki013"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl transition-colors hover:text-primary"
              >
                <FiGithub />
              </a>
            </nav>
          </MotionDiv>
        )}
      </AnimatePresence>
    </MotionHeader>
  );
}
