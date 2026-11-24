import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export interface SeoMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  type?: "website" | "article" | "profile";
  publishedTime?: string;
  modifiedTime?: string;
  noIndex?: boolean;
}

export function buildPageMetadata({
  title,
  description,
  path,
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime,
  noIndex = false,
}: SeoMetadataInput): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const ogImageUrl = absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    openGraph: {
      type,
      locale: "en_IN",
      url: canonicalUrl,
      siteName: `${siteConfig.brandName} — Freelance Web Developer`,
      title,
      description,
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${title} | ${siteConfig.brandName}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildPersonSchema() {
  const sameAs = Object.values(siteConfig.socials).filter(Boolean);
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.brandName,
    url: siteConfig.url,
    jobTitle: "Independent Freelance Web Developer",
    description: siteConfig.tagline,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneDisplay,
    knowsAbout: [
      "Website Development",
      "Next.js",
      "React.js",
      "Vue.js",
      "TypeScript",
      "Full-Stack Web Development",
      "E-Commerce Development",
      "Technical SEO",
      "Core Web Vitals Optimization",
    ],
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildProfessionalServiceSchema(overrides?: {
  areaServed?: string[];
  serviceType?: string[];
  url?: string;
  description?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${overrides?.url || siteConfig.url}/#service-provider`,
    name: `${siteConfig.brandName} — Freelance Web Development`,
    url: overrides?.url || siteConfig.url,
    description: overrides?.description || siteConfig.tagline,
    telephone: siteConfig.contact.phoneDisplay,
    email: siteConfig.contact.email,
    founder: {
      "@id": `${siteConfig.url}/#person`,
    },
    areaServed: (overrides?.areaServed || siteConfig.serviceAreas).map((city) => ({
      "@type": "City",
      name: city,
    })),
    ...(overrides?.serviceType
      ? { serviceType: overrides.serviceType }
      : {
          serviceType: [
            "Website Development",
            "Business Website Development",
            "Custom Website Development",
            "E-commerce Website Development",
            "Next.js Development",
            "Web Application Development",
            "SEO-Friendly Website Development",
          ],
        }),
    priceRange: "₹₹",
  };
}

export function buildWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: `${siteConfig.brandName} — Freelance Web Developer India`,
    description: siteConfig.tagline,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${siteConfig.url}/#person`,
    },
  };
}

export function buildServiceSchema({
  name,
  description,
  path,
  category,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  category: string;
  areaServed?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: category,
    url: absoluteUrl(path),
    provider: {
      "@id": `${siteConfig.url}/#person`,
    },
    areaServed: (areaServed || siteConfig.serviceAreas).map((area) => ({
      "@type": "Place",
      name: area,
    })),
  };
}

export function buildFaqSchema(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema({
  title,
  description,
  path,
  publishedAt,
  updatedAt,
}: {
  title: string;
  description: string;
  path: string;
  publishedAt: string;
  updatedAt: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(path),
    datePublished: publishedAt,
    dateModified: updatedAt,
    author: {
      "@type": "Person",
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.brandName,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
  };
}
