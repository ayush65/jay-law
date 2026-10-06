import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { DM_Serif_Display, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import ScrollAnimations from "@/components/ScrollAnimations";
import {
  siteUrl,
  siteName,
  siteDescription,
  contactPhone,
  contactEmail,
} from "@/lib/site";

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteUrl}/#legal-service`,
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/icon.svg`,
  description: siteDescription,
  telephone: contactPhone,
  email: contactEmail,
  priceRange: "$$",
  areaServed: "NZ",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NZ",
  },
  founder: {
    "@type": "Person",
    name: "Jayanthi Vallipuram",
  },
  foundingDate: "2022",
};

/**
 * Adds `js` to <html> only when motion will be safe (no reduced-motion
 * preference, IntersectionObserver available). CSS uses it to decide
 * whether reveal states may hide content; a failsafe timer guarantees
 * content is never stuck hidden if hydration fails.
 */
const revealGuard = `(function(){try{var r=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!r&&"IntersectionObserver"in window){document.documentElement.classList.add("js")}if(!r){window.__revealFailsafe=window.setTimeout(function(){var y=window.innerHeight||document.documentElement.clientHeight;document.querySelectorAll("[data-reveal]:not(.is-visible)").forEach(function(el){if(el.getBoundingClientRect().top<y){el.classList.add("is-visible")}});document.querySelectorAll(".process-step").forEach(function(el){el.classList.add("is-active")})},4500)}}catch(e){}})()`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Property, Immigration, Family & Commercial Law`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "Jay Law",
    "family law",
    "immigration law",
    "property law",
    "commercial law",
    "New Zealand lawyer",
    "conveyancing",
    "legal aid",
    "Oranga Tamariki",
    "domestic violence protection order",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteName} | Property, Immigration, Family & Commercial Law`,
    description: siteDescription,
    siteName,
    type: "website",
    locale: "en_NZ",
    url: siteUrl,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Property, Immigration, Family & Commercial Law`,
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f7f4ec",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en-NZ"
      className={`${dmSerif.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script dangerouslySetInnerHTML={{ __html: revealGuard }} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileActionBar />
        <ScrollAnimations />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
