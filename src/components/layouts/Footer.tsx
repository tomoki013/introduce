import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-4">
          {/* サイトマップ */}
          <div>
            <h4 className="font-bold">サイトマップ</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  トップ
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  自己紹介
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  制作実績
                </Link>
              </li>
              <li>
                <Link
                  href="/skills"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  スキル
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>

          {/* ソーシャル */}
          <div>
            <h4 className="font-bold">ソーシャル</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="https://github.com/tomoki013/introduce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.tomokichidiary.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  ともきちの旅行日記
                </a>
              </li>
              {/* 必要であればX（旧Twitter）なども追加 */}
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2025
            {currentYear > 2025 ? ` - ${currentYear} ` : " "}
            Tomokichi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
