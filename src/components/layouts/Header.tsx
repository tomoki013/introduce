import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Tomokichi
        </Link>

        {/* デスクトップ用のナビゲーション */}
        <div className="hidden items-center gap-4 md:flex">
          <Link href="/about" className="transition-colors hover:text-sky-500">
            About
          </Link>
          <Link
            href="/projects"
            className="transition-colors hover:text-sky-500"
          >
            Projects
          </Link>
          <Link href="/skills" className="transition-colors hover:text-sky-500">
            Skills
          </Link>
          <Link
            href="/contact"
            className="transition-colors hover:text-sky-500"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-sky-500"
          >
            GitHub
          </a>
          <ThemeToggle />
        </div>
        {/* モバイル用のハンバーガーメニューは後ほどここに実装 */}
      </nav>
    </header>
  );
}
