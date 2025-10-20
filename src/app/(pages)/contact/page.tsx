import { FiGithub, FiGlobe } from "react-icons/fi"; // react-icons を利用

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl">
      {/* ページヘッダー */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-50 md:text-5xl">
          お問い合わせ
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          お仕事のご依頼、技術的なご相談など、お気軽にご連絡ください。
        </p>
      </section>

      {/* お問い合わせフォーム */}
      {/* フォームの送信機能は別途実装が必要です (例: Formspree, Vercel Functions) */}
      <form className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block font-semibold text-slate-800 dark:text-slate-200"
          >
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-md border-gray-300 bg-white px-4 py-2 text-slate-800 focus:border-sky-500 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-semibold text-slate-800 dark:text-slate-200"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-md border-gray-300 bg-white px-4 py-2 text-slate-800 focus:border-sky-500 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-semibold text-slate-800 dark:text-slate-200"
          >
            お問い合わせ内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full rounded-md border-gray-300 bg-white px-4 py-2 text-slate-800 focus:border-sky-500 focus:ring-sky-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-sky-500 px-6 py-3 font-bold text-white transition-colors hover:bg-sky-600"
        >
          送信する
        </button>
      </form>

      {/* SNS */}
      <section className="mt-12 text-center">
        <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-slate-50">
          SNS
        </h2>
        <div className="flex justify-center gap-6">
          <a
            href="YOUR_GITHUB_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-3xl text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
          >
            <FiGithub />
          </a>
          <a
            href="YOUR_BLOG_URL"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blog"
            className="text-3xl text-slate-500 transition-colors hover:text-sky-500 dark:text-slate-400 dark:hover:text-sky-400"
          >
            <FiGlobe />
          </a>
        </div>
      </section>
    </div>
  );
}
