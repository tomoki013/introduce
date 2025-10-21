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
              <li>
                <Link
                  href="/social"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  ソーシャル
                </Link>
              </li>
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
