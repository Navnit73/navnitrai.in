import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import {
  getServicesByCategory,
  servicesData,
  type ServiceCategory,
} from "@/data/services";
import { getWhatsAppUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Services in India | Next.js, React, E-Commerce & SEO",
  description:
    "Explore 14 specialized freelance web development services: business websites, custom apps, Next.js, React, Vue, e-commerce, redesign, speed optimization, and SEO.",
  path: "/services",
  keywords: [
    "web development services india",
    "freelance website development services",
    "next.js react ecommerce developer india",
  ],
});

const CATEGORY_ORDER: Array<{
  name: ServiceCategory;
  subtitle: string;
}> = [
  {
    name: "Core Websites",
    subtitle:
      "Lead-focused business websites, custom architectures, campaign landing pages, and online storefronts.",
  },
  {
    name: "Frontend & Full-Stack",
    subtitle:
      "Modern engineering across Next.js App Router, React, Vue.js, backend APIs, and database-backed web apps.",
  },
  {
    name: "Growth, SEO & Care",
    subtitle:
      "Safe website redesigns, Core Web Vitals speed tuning, technical SEO architecture, and ongoing maintenance.",
  },
];

export default function ServicesPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Development Services — Navnit Rai",
    url: `${siteConfig.url}/services`,
    hasPart: servicesData.map((svc) => ({
      "@type": "Service",
      name: svc.name,
      url: `${siteConfig.url}/services/${svc.slug}`,
      description: svc.heroSummary,
    })),
  };

  return (
    <>
      <JsonLd data={collectionSchema} />

      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
            ]}
          />

          <Badge variant="amber">14 Specialized Services</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Web Development Services Built for Speed &amp; Leads
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Whether launching a business website, scaling a D2C e-commerce store, or shipping a custom Next.js web application, every service follows strict performance, accessibility, and SEO engineering standards.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedExternalLink
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              payload={{ source: "services_hub_hero" }}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              <MessageSquare aria-hidden="true" className="h-4 w-4" />
              <span>{siteConfig.ctas.primary}</span>
            </TrackedExternalLink>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              <span>{siteConfig.ctas.secondary}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6 lg:px-8">
          {CATEGORY_ORDER.map((cat) => {
            const items = getServicesByCategory(cat.name);
            return (
              <div key={cat.name}>
                <div className="border-b-2 border-[#0A0A0A] pb-4">
                  <h2 className="text-2xl font-bold text-[#0A0A0A]">
                    {cat.name}
                  </h2>
                  <p className="mt-1 text-sm text-neutral-700">{cat.subtitle}</p>
                </div>

                <div className="mt-6 grid gap-6 md:grid-cols-2">
                  {items.map((svc) => (
                    <article
                      key={svc.slug}
                      className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-6"
                    >
                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <Badge variant="outline">{svc.category}</Badge>
                          <span className="font-mono text-xs text-neutral-600">
                            /{svc.slug}
                          </span>
                        </div>
                        <h3 className="mt-4 text-xl font-bold text-[#0A0A0A]">
                          <Link
                            href={`/services/${svc.slug}`}
                            className="hover:text-[#B45309] hover:underline"
                          >
                            {svc.name}
                          </Link>
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                          {svc.heroSummary}
                        </p>

                        <ul className="mt-4 space-y-1.5 text-xs text-neutral-800">
                          {svc.deliverables.slice(0, 3).map((d) => (
                            <li key={d} className="flex items-start gap-2">
                              <Check
                                aria-hidden="true"
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#B45309]"
                              />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4">
                        <Link
                          href={`/services/${svc.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                        >
                          <span>View Scope &amp; Deliverables</span>
                          <ArrowRight aria-hidden="true" className="h-4 w-4" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner source="services_hub_bottom" />
    </>
  );
}
