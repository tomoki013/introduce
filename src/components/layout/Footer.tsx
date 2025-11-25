"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiQiita, SiZenn } from "react-icons/si";
import Link from "next/link";

export default function TravelFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-white/50 py-12 backdrop-blur-sm dark:bg-slate-900/50 border-t border-dashed border-slate-300 dark:border-slate-700">
      {/* Decorative "Cut" Line */}
      <div className="absolute -top-3 left-0 right-0 flex justify-between px-4">
        {/* This creates the "ticket stub" cutout effect visually if we want, or just simple dashed line */}
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:text-left">
          {/* Brand & Copyright */}
          <div className="md:col-span-1">
            <Link
              href={`/`}
              className="text-xl font-bold font-montserrat tracking-wider"
            >
              TOMOKICHI<span className="text-primary">.AIR</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Engineering your next digital destination.
            </p>
            <div className="mt-6 text-xs text-muted-foreground font-mono">
              <p>© {new Date().getFullYear()} Tomokichi.</p>
              <p>All rights reserved.</p>
            </div>
          </div>

          {/* Spacer for alignment */}
          <div className="hidden md:block"></div>

          {/* Site Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider text-foreground">
              Links
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/news", label: "News" },
                { href: "/social", label: "Social" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold tracking-wider text-foreground">
              Social
            </h3>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              <SocialLink
                href="https://github.com/tomoki013"
                icon={FaGithub}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/tomoki-takagi-5b08a738b/"
                icon={FaLinkedin}
                label="LinkedIn"
              />
              <SocialLink
                href="https://qiita.com/tomoki013"
                icon={SiQiita}
                label="Qiita"
              />
              <SocialLink
                href="https://zenn.dev/tomoki013"
                icon={SiZenn}
                label="Zenn"
              />
            </div>
          </div>
        </div>
        {/* Legal Links */}
        <div className="mt-12 border-t border-dashed border-slate-300 dark:border-slate-700 pt-8 text-center">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <li>
              <Link
                href={`/privacy`}
                className="hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href={`/terms`}
                className="hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href={`/sitemap`}
                className="hover:text-primary transition-colors"
              >
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-all hover:bg-primary hover:text-white hover:-translate-y-1 dark:bg-slate-800 dark:text-slate-400"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
