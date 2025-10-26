import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Tomokichi Official Websiteの利用規約ページです。",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <section className="mb-12 text-center">
        <h1 className="mt-6 text-4xl font-bold text-foreground">利用規約</h1>
      </section>

      <section className="prose prose-lg max-w-none dark:prose-invert prose-p:leading-relaxed">
        <h2 className="text-2xl font-bold">第1条（適用）</h2>
        <p>
          本規約は、本ウェブサイトの利用に関する一切の関係に適用されるものとします。
        </p>

        <h2 className="text-2xl font-bold mt-8">第2条（禁止事項）</h2>
        <p>
          ユーザーは、本ウェブサイトの利用にあたり、以下の行為をしてはなりません。
        </p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>犯罪行為に関連する行為</li>
          <li>
            本ウェブサイトのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為
          </li>
          <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
          <li>その他、本ウェブサイトが不適切と判断する行為</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">第3条（免責事項）</h2>
        <p>
          本ウェブサイトのコンテンツ・情報について、可能な限り正確な情報を掲載するよう努めておりますが、正確性や安全性を保証するものではありません。当サイトに掲載された内容によって生じた損害等の一切の責任を負いかねますのでご了承ください。
        </p>

        <h2 className="text-2xl font-bold mt-8">第4条（クッキーの使用）</h2>
        <p>
          本ウェブサイトでは、一部のコンテンツにおいてクッキーを使用しています。クッキーの使用に関する詳細は、別途定める<a
            href="/privacy#cookie-policy"
            className="text-accent hover:underline"
          >
            プライバシーポリシー
          </a>をご参照ください。
        </p>

        <h2 className="text-2xl font-bold mt-8">第5条（本規約の変更）</h2>
        <p>
          本ウェブサイトは、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
        </p>

        <p className="mt-8">以上</p>
      </section>
    </div>
  );
}
