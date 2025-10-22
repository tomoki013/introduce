import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Tomokichi Official Websiteのプライバシーポリシーページです。",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <section className="mb-12 text-center">
        <h1 className="mt-6 text-4xl font-bold text-foreground">
          プライバシーポリシー
        </h1>
      </section>

      <section className="prose prose-lg max-w-none dark:prose-invert prose-p:leading-relaxed">
        <p>
          本ウェブサイトは、ユーザーの個人情報保護の重要性について認識し、個人情報の保護に関する法律（以下「個人情報保護法」といいます。）を遵守すると共に、以下のプライバシーポリシー（以下「本プライバシーポリシー」といいます。）に従い、適切な取扱い及び保護に努めます。
        </p>

        <h2 className="text-2xl font-bold mt-8">第1条（個人情報の定義）</h2>
        <p>
          本プライバシーポリシーにおいて、個人情報とは、個人情報保護法第2条第1項により定義された個人情報、すなわち、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの（他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます。）、もしくは個人識別符号が含まれる情報を意味するものとします。
        </p>

        <h2 className="text-2xl font-bold mt-8">第2条（個人情報の利用目的）</h2>
        <p>
          本ウェブサイトでは、お問い合わせフォームのご利用時に、お名前、メールアドレス等の個人情報をご登録いただく場合がございます。これらの個人情報は、質問に対する回答や必要な情報を電子メールなどでご連絡する場合に利用させていただくものであり、個人情報をご提供いただく際の目的以外では利用いたしません。
        </p>

        <h2 className="text-2xl font-bold mt-8">
          第3条（個人情報の第三者提供）
        </h2>
        <p>
          本ウェブサイトでは、個人情報は適切に管理し、以下に該当する場合を除いて第三者に開示することはありません。
        </p>
        <ul>
          <li>本人のご了解がある場合</li>
          <li>法令等への協力のため、開示が必要となる場合</li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">
          第4条（アクセス解析ツールについて）
        </h2>
        <p>
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
        </p>

        <h2 className="text-2xl font-bold mt-8">
          第5条（プライバシーポリシーの変更について）
        </h2>
        <p>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </p>

        <p className="mt-8">以上</p>
      </section>
    </div>
  );
}
