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

        <h2 id="cookie-policy" className="text-2xl font-bold mt-8 scroll-mt-20">
          第5条（クッキー（Cookie）について）
        </h2>
        <p>
          クッキー（Cookie）とは、お客様が本ウェブサイトをご覧になったという情報を、そのお客様のコンピュータ（またはスマートフォンやタブレットなどのインターネット接続可能な機器）内に記憶させておく機能のことです。クッキーを利用することにより、ご利用のコンピュータのウェブサイト訪問回数や訪問したページなどの情報を取得することができます。なお、クッキーを通じて収集する情報には、当社がお客様個人を識別できる情報は一切含まれておりません。
        </p>
        <p>
          また、お客様のブラウザの設定により、クッキーの機能を無効にすることもできます。クッキーの機能を無効にしても本ウェブサイトのご利用には問題ありません。
        </p>
        <p>
          多くのブラウザでは、クッキーを許可する設定が初期状態で有効になっていますが、ユーザーは自身の判断でクッキーを無効にすることができます。クッキーの設定変更方法については、各ブラウザの公式サポートページをご参照ください。
        </p>
        <ul className="list-disc pl-8">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647?hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/ja-jp/microsoft-edge/microsoft-edge-%E3%81%A7-cookie-%E3%82%92%E5%89%8A%E9%8A%A4%E3%81%99%E3%82%8B-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/ja/kb/block-websites-storing-cookies-site-data-firefox"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/ja-jp/guide/safari/sfri11471/mac"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              Safari
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mt-8">
          第6条（プライバシーポリシーの変更について）
        </h2>
        <p>
          当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。
        </p>

        <p className="mt-8">以上</p>
      </section>
    </div>
  );
}
