import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { locationsData } from "@/data/locations";
import { getWhatsAppUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development in Lucknow, Gorakhpur, Kanpur & Faridabad | Navnit Rai",
  description:
    "Explore dedicated web development service hubs for Lucknow, Gorakhpur, Kanpur, Faridabad, and remote full-stack collaborations across India.",
  path: "/locations",
  keywords: [
    "freelance web developer uttar pradesh ncr",
    "website developer lucknow gorakhpur kanpur faridabad",
    "indian city web development services",
  ],
});

export default function LocationsHubPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Web Development Service Locations — Navnit Rai",
    url: `${siteConfig.url}/locations`,
    hasPart: locationsData.map((loc) => ({
      "@type": "WebPage",
      name: `Website Developer in ${loc.city}`,
      url: `${siteConfig.url}/locations/${loc.slug}`,
      description: loc.metaDescription,
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
              { name: "Locations", path: "/locations" },
            ]}
          />

          <Badge variant="amber">Regional Hubs &amp; Remote India</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Web Development Services Across Key Indian Cities
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Rather than publishing hundreds of duplicate thin city pages, I maintain dedicated regional hubs tailored to the distinct industrial, healthcare, educational, and D2C landscapes of Lucknow, Gorakhpur, Kanpur, and Faridabad—plus seamless remote work across India.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <TrackedExternalLink
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              payload={{ source: "locations_hub_hero" }}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              <MessageSquare aria-hidden="true" className="h-4 w-4" />
              <span>{siteConfig.ctas.primary}</span>
            </TrackedExternalLink>
            <Link
              href="/services"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <span>Browse National Services</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {locationsData.map((loc) => (
              <article
                key={loc.slug}
                className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-6 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    <span>{loc.stateRegion}</span>
                  </div>
                  <h2 className="mt-3 text-2xl font-bold text-[#0A0A0A]">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="hover:underline"
                    >
                      Website Developer in {loc.city}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                    {loc.marketOverview}
                  </p>

                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                      Key Local Corridors Covered
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {loc.commercialCorridors.map((corridor) => (
                        <span
                          key={corridor}
                          className="border border-neutral-300 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-800"
                        >
                          {corridor}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-neutral-200 pt-4">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                  >
                    <span>Explore {loc.city} Web Development Guide</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner source="locations_hub_bottom" />
    </>
  );
}
