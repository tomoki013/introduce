import { Metadata } from "next";
import ContactSection from "@/components/features/contact/ContactSection";

export const metadata: Metadata = {
  title: "Send Postcard | Contact",
  description:
    "Tomokichiへのお問い合わせページ。お仕事のご依頼、技術的なご相談などはこちらからご連絡ください。",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen py-24 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black font-montserrat mb-4 tracking-tight">
            SEND <span className="text-primary">POSTCARD</span>
          </h1>
          <p className="text-muted-foreground">
            Have a question or want to work together? Drop me a line!
          </p>
        </div>
        <ContactSection />
      </div>
    </div>
  );
}
