import { FiGithub, FiGlobe } from "react-icons/fi"; // react-icons を利用

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl p-4">
      {/* ページヘッダー */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground md:text-5xl">
          お問い合わせ
        </h1>
        <p className="mt-4 text-muted-foreground">
          お仕事のご依頼、技術的なご相談など、お気軽にご連絡ください。
        </p>
      </section>

      {/* お問い合わせフォーム */}
      {/* フォームの送信機能は別途実装が必要です (例: Formspree, Vercel Functions) */}
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="mb-2 block font-semibold">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border bg-input px-4 py-2 focus:border-ring focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block font-semibold">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md border bg-input px-4 py-2 focus:border-ring focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block font-semibold">
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border bg-input px-4 py-2 focus:border-ring focus:ring-ring"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-primary px-6 py-3 font-bold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          送信する
        </button>
      </form>

      {/* SNS */}
      <section className="mt-12 text-center">
        <h2 className="mb-4 text-xl font-bold text-foreground">SNS</h2>
        <div className="flex justify-center gap-6">
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-3xl text-muted-foreground transition-colors hover:text-primary"
          >
            <FiGithub />
          </a>
          <a
            href="YOUR_BLOG_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
            className="text-3xl text-muted-foreground transition-colors hover:text-primary"
          >
            <FiGlobe />
          </a>
        </div>
      </section>
    </div>
  );
}
