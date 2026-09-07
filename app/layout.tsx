import type { Metadata } from "next";
import type { Viewport } from "next";
import { Newsreader, Source_Sans_3 } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { business } from "@/lib/content";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"]
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "AlphaCare Concierge Care Management | Greater Boston",
    template: "%s | AlphaCare Concierge"
  },
  description:
    "Private concierge healthcare advocacy and complex care management serving Greater Boston families.",
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
    title: "AlphaCare Concierge Care Management | Greater Boston",
    description:
      "Private concierge healthcare advocacy and complex care management serving Greater Boston families.",
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
    canonical: "https://alphacareconcierge.com"
  }
};

export const viewport: Viewport = {
  themeColor: "#F7F3EC"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${newsreader.variable} ${sans.variable} flex min-h-screen flex-col bg-ivory font-sans text-navy antialiased`}>
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
