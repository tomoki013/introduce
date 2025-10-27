"use client";

import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has been given or if the banner was dismissed
    const consentGiven = document.cookie.includes("tomokichi-cookie-consent=true");
    const consentDismissed = sessionStorage.getItem("cookie-consent-dismissed");

    if (!consentGiven && !consentDismissed) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setVisible(false);
  };

  const handleDecline = () => {
    sessionStorage.setItem("cookie-consent-dismissed", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <CookieConsent
            location="none"
            buttonText="同意"
            cookieName="tomokichi-cookie-consent"
            style={{
              background: "var(--background-semitransparent)",
              color: "var(--foreground)",
              backdropFilter: "blur(4px)",
              borderTop: "1px solid var(--border)",
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "16px",
            }}
            buttonStyle={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              fontSize: "13px",
              borderRadius: "4px",
              padding: "8px 16px",
              cursor: "pointer",
            }}
            expires={150}
            onAccept={handleAccept}
          >
            このウェブサイトでは、サイトの利便性向上のためにクッキーを使用します。{" "}
            <Link
              href="/privacy#cookie-policy"
              className="text-accent underline ml-2"
            >
              詳細を見る
            </Link>
            <button
              onClick={handleDecline}
              style={{
                position: "absolute",
                top: "50%",
                right: "16px",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "var(--foreground)",
                fontSize: "24px",
                cursor: "pointer",
              }}
              aria-label="Close cookie consent banner"
            >
              <CgClose />
            </button>
          </CookieConsent>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
