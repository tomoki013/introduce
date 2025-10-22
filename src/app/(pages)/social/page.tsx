import { Metadata } from "next";
import SocialLinksClient from "../../../components/pages/social/SocialLinksClient";

export const metadata: Metadata = {
  title: "Social",
  description: "Tomokichiのソーシャルメディアリンク一覧です。",
};

export default function SocialPage() {
  return (
    <div className="mx-auto max-w-4xl p-4">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-foreground">Social Links</h1>
        <p className="mt-2 text-lg text-primary">
          SNSや活動のリンクをまとめています。
        </p>
      </section>

      <SocialLinksClient />
    </div>
  );
}
