"use client";

import CookieConsent from "react-cookie-consent";
import Link from "next/link";

const CookieConsentBanner = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="同意"
      cookieName="tomokichi-cookie-consent"
      style={{
        background: "var(--background-semitransparent)",
        color: "var(--foreground)",
        backdropFilter: "blur(4px)",
        borderTop: "1px solid var(--border)",
      }}
      buttonStyle={{
        background: "var(--primary)",
        color: "var(--primary-foreground)",
        fontSize: "13px",
        borderRadius: "4px",
        padding: "8px 16px",
      }}
      expires={150}
    >
      このウェブサイトでは、サイトの利便性向上のためにクッキーを使用します。{" "}
      <Link href="/privacy#cookie-policy" className="text-accent underline">
        詳細を見る
      </Link>
    </CookieConsent>
  );
};

export default CookieConsentBanner;
