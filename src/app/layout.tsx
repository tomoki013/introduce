import { Noto_Sans_JP, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollProgress from "@/components/common/ScrollProgress";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Metadata } from "next";
import CookieConsentBanner from "@/components/features/cookie/CookieConsentBanner";
import Script from "next/script";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-share-tech-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Tomokichi Official Website",
    template: "%s - Tomokichi Official Website",
  },
  description:
    "Welcome to my portfolio! I'm Tomokichi, a passionate developer specializing in web and mobile applications. Explore my projects, skills, and experiences.",
  authors: [{ name: "Tomokichi" }],
  openGraph: {
    title: "Tomokichi Official Website",
    description:
      "Welcome to my portfolio! I'm Tomokichi, a passionate developer specializing in web and mobile applications. Explore my projects, skills, and experiences.",
    url: "https://tomokichi.netlify.app/",
    siteName: "Tomokichi Official Website",
    type: "website",
    images: [
      {
        url: "favicon.ico",
        width: 1200,
        height: 630,
        alt: "Tomokichi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomokichi Official Website",
    description:
      "Welcome to my portfolio! I'm Tomokichi, a passionate developer specializing in web and mobile applications. Explore my projects, skills, and experiences.",
    images: ["favicon.ico"],
  },
  metadataBase: new URL("https://www.tomokichidiary.com"),
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        {/* Google Search Console */}
        <meta
          name="google-site-verification"
          content="qd9h_oeUkXKK0F-u4U5Z-c540MUq_Agst3K0rF8ERdM"
        />

        {/* Google Adsense */}
        <meta name="google-adsense-account" content="ca-pub-8687520805381056" />

        {/* 自動広告 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8687520805381056"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        ></Script>

        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XYSW6RY98H"
        ></Script>

        {/* Google Analytics */}
        <Script id="google-analytics">
          {`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-XYSW6RY98H');
					`}
        </Script>
      </head>
      <body
        className={`${shareTechMono.variable} ${notoSansJp.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <Header />
          <main className="flex-1 text-sm md:text-base">{children}</main>
          <Footer />
          <CookieConsentBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
