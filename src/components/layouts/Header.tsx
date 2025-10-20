"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import { FiMenu, FiX, FiGithub } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Tomokichi
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/about" className="transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/projects" className="transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/skills" className="transition-colors hover:text-primary">
            Skills
          </Link>
          <Link href="/contact" className="transition-colors hover:text-primary">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tomoki013/introduce"
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
      {isMenuOpen && (
        <div className="absolute left-0 w-full bg-background/95 p-4 md:hidden">
          <nav className="flex flex-col items-center gap-4">
            <Link href="/about" className="transition-colors hover:text-primary">
              About
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <Link href="/skills" className="transition-colors hover:text-primary">
              Skills
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-primary"
            >
              Contact
            </Link>
            <a
              href="https://github.com/tomoki013/introduce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl transition-colors hover:text-primary"
            >
              <FiGithub />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
