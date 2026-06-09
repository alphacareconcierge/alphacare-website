import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { business } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: `${business.name} | Healthcare Advocacy in Greater Boston`,
    template: `%s | ${business.name}`
  },
  description:
    "Premium healthcare advocacy, care coordination, and concierge care management for families navigating aging in the Greater Boston Area.",
  keywords: [
    "Healthcare Advocacy",
    "Care Coordination",
    "Concierge Care Management",
    "Healthcare Navigation",
    "Aging Support",
    "Greater Boston Area",
    "AlphaCare Concierge Care Management"
  ],
  openGraph: {
    title: business.name,
    description: business.tagline,
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
