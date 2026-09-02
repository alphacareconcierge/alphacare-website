import type { Metadata } from "next";
import type { Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { business } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500"],
  style: ["normal", "italic"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "AlphaCare | Concierge Care Management",
    template: "%s"
  },
  description:
    "AlphaCare provides private concierge care management, healthcare advocacy, and family coordination throughout Greater Boston and Massachusetts.",
  keywords: [
    "Healthcare Advocacy",
    "Care Coordination",
    "Concierge Care Management",
    "Healthcare Navigation",
    "Aging Support",
    "Greater Boston Area",
    "AlphaCare Concierge Care Management"
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "AlphaCare | Concierge Care Management",
    description:
      "AlphaCare provides private concierge care management, healthcare advocacy, and family coordination throughout Greater Boston and Massachusetts.",
    url: business.url,
    siteName: business.name,
    images: [
      {
        url: "/brand/alphacare-logo.png",
        width: 1200,
        height: 1200,
        alt: "AlphaCare Concierge Care Management"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  themeColor: "#FAF7F2"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="flex min-h-screen flex-col bg-ivory font-sans antialiased">
        <a
          href="#main-content"
          className="type-nav sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-3 focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
