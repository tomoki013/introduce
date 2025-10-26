"use client";

import { useState, useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import Link from "next/link";
import { CgClose } from "react-icons/cg";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);

  useEffect(() => {
    const consentDismissed = sessionStorage.getItem("cookie-consent-dismissed");
    if (!consentDismissed) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const handleDecline = () => {
    sessionStorage.setItem("cookie-consent-dismissed", "true");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          {!accepted ? (
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
              }}
              buttonStyle={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontSize: "13px",
                borderRadius: "4px",
                padding: "8px 16px",
                margin: "0 16px 0 0",
                cursor: "pointer",
              }}
              expires={150}
              onAccept={handleAccept}
            >
              <>
                このウェブサイトでは、サイトの利便性向上のためにクッキーを使用します。{" "}
                <Link
                  href="/privacy#cookie-policy"
                  className="text-accent underline"
                >
                  詳細を見る
                </Link>
              </>
              <button
                onClick={handleDecline}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--foreground)",
                  fontSize: "24px",
                  cursor: "pointer",
                  padding: "8px",
                  marginRight: "16px",
                }}
                aria-label="Close cookie consent banner"
              >
                <CgClose />
              </button>
            </CookieConsent>
          ) : (
            <CookieConsent
              location="none"
              buttonText="ありがとうございます！"
              cookieName="tomokichi-cookie-consent" // This is still needed
              style={{
                background: "var(--background-semitransparent)",
                color: "var(--foreground)",
                backdropFilter: "blur(4px)",
                borderTop: "1px solid var(--border)",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              buttonStyle={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
                fontSize: "13px",
                borderRadius: "4px",
                padding: "8px 16px",
                cursor: "default",
              }}
            >
              <span className="text-center w-full">
                ご協力に感謝いたします。
              </span>
            </CookieConsent>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsentBanner;
