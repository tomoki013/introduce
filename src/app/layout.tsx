import { Noto_Sans_JP, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ScrollProgress from "@/components/common/ScrollProgress";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { Metadata } from "next";

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
  metadataBase: new URL("https://tomokichi.netlify.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${shareTechMono.variable} ${notoSansJp.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <ScrollProgress />
          <Header />
          <main className="flex-1 text-sm md:text-base">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
