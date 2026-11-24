import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site";
import {
  buildPersonSchema,
  buildProfessionalServiceSchema,
  buildWebSiteSchema,
} from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/cta/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Navnit Rai | Freelance Web Developer in India (Next.js & Full-Stack)",
    template: "%s",
  },
  description:
    "Hire Navnit Rai — independent freelance web developer in India building fast, SEO-ready business websites, e-commerce stores, and custom Next.js/React web applications.",
  applicationName: siteConfig.brandName,
  authors: [{ name: siteConfig.brandName, url: siteConfig.url }],
  creator: siteConfig.brandName,
  publisher: siteConfig.brandName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gaId = siteConfig.analytics.gaMeasurementId;

  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-[#0A0A0A]">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <JsonLd
          data={[
            buildPersonSchema(),
            buildWebSiteSchema(),
            buildProfessionalServiceSchema(),
          ]}
        />

        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
