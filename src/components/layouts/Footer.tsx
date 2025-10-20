import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-slate-700 dark:bg-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* サイトマップ */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100">
              サイトマップ
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  自己紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  制作実績
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  スキル
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* ソーシャル */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-slate-100">
              ソーシャル
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="YOUR_GITHUB_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="YOUR_BLOG_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
                >
                  ブログ
                </a>
              </li>
              {/* 必要であればX（旧Twitter）なども追加 */}
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-slate-500 dark:border-slate-700">
          <p>&copy; {currentYear} Tomokichi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
