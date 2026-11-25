import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, MapPin, MessageSquare, Phone, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  buildFaqSchema,
  buildPageMetadata,
  buildProfessionalServiceSchema,
} from "@/lib/seo";
import { getLocationBySlug, type CityLocation } from "@/data/locations";
import { getCityServiceHref } from "@/data/local-services";
import { absoluteUrl, getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { CityServiceLinks } from "@/components/locations/CityServiceLinks";
import { CityPricingTable } from "@/components/locations/CityPricingTable";
import { CityNearbyAreas } from "@/components/locations/CityNearbyAreas";
import { TrackedExternalLink, TrackedRouteLink } from "@/components/cta/TrackedLink";

/**
 * Data-driven city hub (/locations/<city>). Used for cities whose content
 * lives entirely in src/data/locations.ts. Older hubs (Lucknow, Gorakhpur,
 * Kanpur, Faridabad) keep their hand-written pages.
 */
export function cityHubMetadata(citySlug: string): Metadata {
  const loc = getLocationBySlug(citySlug)!;
  return buildPageMetadata({
    title: loc.seoTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
    keywords: [loc.primaryKeyword, ...loc.secondaryKeywords],
  });
}

export function CityHubPage({ citySlug }: { citySlug: string }) {
  const loc: CityLocation = getLocationBySlug(citySlug)!;
  const source = `${loc.slug}_hero`;

  return (
    <>
      <JsonLd
        data={[
          buildProfessionalServiceSchema({
            areaServed: [loc.city, ...loc.nearbyAreas],
            url: absoluteUrl(`/locations/${loc.slug}`),
            description: loc.metaDescription,
          }),
          buildFaqSchema(loc.faqs),
        ]}
      />

      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: loc.city, path: `/locations/${loc.slug}` },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="amber">
                {loc.city} • {loc.stateRegion}
              </Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
                {loc.h1}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">{loc.heroLead}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl(loc.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source, location: loc.city }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>
                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{ source, location: loc.city }}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <span>{siteConfig.ctas.secondary}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </TrackedRouteLink>
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source, location: loc.city }}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.call}</span>
                </TrackedExternalLink>
              </div>
            </div>

            <aside className="border-2 border-[#0A0A0A] bg-[#FEF3C7] p-6 lg:col-span-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#92400E]">
                <ShieldCheck aria-hidden="true" className="h-4 w-4" />
                <span>How we work together</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[#0A0A0A]">
                {loc.collaborationModel.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#92400E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Market + industries */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                Local Market
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                What {loc.city} Businesses Need From a Website
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">{loc.marketOverview}</p>
              <div className="mt-6 border border-[#0A0A0A] bg-white p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  Key {loc.city} Areas Served
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-neutral-800">
                  {loc.commercialCorridors.map((zone) => (
                    <li key={zone} className="flex items-start gap-2">
                      <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
              {loc.keyLocalIndustries.map((ind) => (
                <div key={ind.sector} className="border border-[#0A0A0A] bg-white p-6">
                  <h3 className="text-lg font-bold text-[#0A0A0A]">{ind.sector}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{ind.websiteNeed}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Narrative sections */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
          {loc.narrativeSections.map((sec, i) => (
            <article
              key={sec.heading}
              className={`border-l-4 pl-5 sm:pl-7 ${i % 2 === 0 ? "border-[#F59E0B]" : "border-[#0A0A0A]"}`}
            >
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                {sec.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">{sec.heading}</h2>
              {sec.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-base leading-relaxed text-neutral-800">
                  {p}
                </p>
              ))}
              {sec.bullets && (
                <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                  {sec.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Service highlights */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A0A0A] sm:text-3xl">
            Web Development Services in {loc.city}
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {loc.localServiceHighlights.map((h) => (
              <Link
                key={h.title}
                href={getCityServiceHref(loc.slug, h.targetServiceSlug)}
                className="group flex flex-col justify-between border border-[#0A0A0A] bg-white p-6 hover:bg-[#FEF3C7]"
              >
                <div>
                  <h3 className="text-lg font-bold text-[#0A0A0A]">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">{h.description}</p>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] group-hover:text-[#B45309]">
                  {h.targetServiceLabel} <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 border border-[#0A0A0A] bg-white p-6">
            <h3 className="text-lg font-bold text-[#0A0A0A]">{loc.wordpressAndHostingNote.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700">
              {loc.wordpressAndHostingNote.body}
            </p>
          </div>
        </div>
      </section>

      {/* Freelancer vs company */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A0A0A] sm:text-3xl">
            {loc.freelancerVsCompanyAngle.heading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-700">
            {loc.freelancerVsCompanyAngle.summary}
          </p>
          <div className="mt-8 overflow-x-auto border border-[#0A0A0A]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
                  <th scope="col" className="px-4 py-3.5 font-bold">Criteria</th>
                  <th scope="col" className="px-4 py-3.5 font-bold text-[#F59E0B]">
                    Navnit Rai (Independent)
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Typical {loc.city} Web Company
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-300 bg-white">
                {loc.freelancerVsCompanyAngle.rows.map((row) => (
                  <tr key={row.factor}>
                    <th scope="row" className="px-4 py-3.5 font-bold text-[#0A0A0A]">
                      {row.factor}
                    </th>
                    <td className="bg-[#FEF3C7]/40 px-4 py-3.5 font-medium text-[#0A0A0A]">
                      {row.freelanceNavnit}
                    </td>
                    <td className="px-4 py-3.5 text-neutral-700">{row.typicalAgency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CityPricingTable citySlug={loc.slug} />

      <CityServiceLinks citySlug={loc.slug} />

      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#0A0A0A]">
            {loc.city} Website Development — FAQs
          </h2>
          <Accordion items={loc.faqs} idPrefix={`${loc.slug}-faq`} />
        </div>
      </section>

      <CityNearbyAreas citySlug={loc.slug} />

      <CtaBanner
        heading={`Need a Website Developer in ${loc.city}?`}
        whatsappMessage={loc.whatsappMessage}
        source={`${loc.slug}_bottom`}
      />
    </>
  );
}
