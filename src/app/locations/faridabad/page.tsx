import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Gauge,
  MapPin,
  MessageSquare,
  Phone,
  Target,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  buildFaqSchema,
  buildPageMetadata,
  buildProfessionalServiceSchema,
} from "@/lib/seo";
import { getLocationBySlug } from "@/data/locations";
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
import { getCityServiceHref } from "@/data/local-services";
import {
  TrackedExternalLink,
  TrackedRouteLink,
} from "@/components/cta/TrackedLink";

const loc = getLocationBySlug("faridabad")!;

export const metadata: Metadata = buildPageMetadata({
  title: loc.seoTitle,
  description: loc.metaDescription,
  path: "/locations/faridabad",
  keywords: [
    "website developer in faridabad",
    "faridabad website developer",
    "website designer faridabad",
    "web design company faridabad",
    "web development company in faridabad",
    "best website development company in faridabad",
    "website design company in faridabad",
    "faridabad website development company",
    "faridabad business website developer",
  ],
});

export default function FaridabadLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          buildProfessionalServiceSchema({
            areaServed: ["Faridabad", "IMT Faridabad", "NIT Faridabad", "Delhi NCR", ...loc.nearbyAreas],
            url: absoluteUrl("/locations/faridabad"),
            description: loc.metaDescription,
          }),
          buildFaqSchema(loc.faqs),
        ]}
      />

      {/* Bespoke NCR Benchmark Hero */}
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: "Faridabad", path: "/locations/faridabad" },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="amber">Faridabad • Delhi NCR Industrial Corridor</Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
                Freelance Website Developer in Faridabad Competing at Delhi-NCR Standards
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Buyers evaluating vendors across IMT Faridabad, Mathura Road, NIT, and Sector 15–21 compare you straight against Gurugram and Delhi competitors. As an independent{" "}
                <strong className="text-[#0A0A0A]">Faridabad website developer</strong> and{" "}
                <strong className="text-[#0A0A0A]">website designer in Faridabad</strong>, I build fast corporate sites, D2C storefronts, and high-converting NCR campaign landing pages without agency retainers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl(loc.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "faridabad_hero", location: "Faridabad" }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>
                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{ source: "faridabad_hero", location: "Faridabad" }}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <span>{siteConfig.ctas.secondary}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </TrackedRouteLink>
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: "faridabad_hero", location: "Faridabad" }}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.call}</span>
                </TrackedExternalLink>
              </div>
            </div>

            <aside className="border-2 border-[#0A0A0A] bg-neutral-50 p-6 lg:col-span-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                <Gauge aria-hidden="true" className="h-4 w-4" />
                <span>NCR Performance Edge</span>
              </div>
              <h2 className="mt-2 text-lg font-bold text-[#0A0A0A]">
                Built for Faridabad Sectors &amp; Industrial Estates
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                {loc.commercialCorridors.map((zone) => (
                  <li key={zone} className="flex items-start gap-2">
                    <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Narrative Editorial Blocks */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {loc.keyLocalIndustries.map((ind) => (
              <div key={ind.sector} className="border border-[#0A0A0A] bg-white p-6">
                <h2 className="text-lg font-bold text-[#0A0A0A]">{ind.sector}</h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {ind.websiteNeed}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            {loc.narrativeSections.map((sec) => (
              <article key={sec.heading} className="border-l-4 border-[#F59E0B] bg-white p-6 sm:p-8 border-t border-r border-b border-t-[#0A0A0A] border-r-[#0A0A0A] border-b-[#0A0A0A]">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                  {sec.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                  {sec.heading}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-800">
                  {sec.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Freelancer vs Agency Comparison + Service Paths */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
              <Target aria-hidden="true" className="h-4 w-4" />
              <span>Cost &amp; Execution Comparison</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A] sm:text-3xl">
              {loc.freelancerVsCompanyAngle.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              {loc.freelancerVsCompanyAngle.summary}
            </p>
          </div>

          <div className="mt-8 overflow-x-auto border border-[#0A0A0A]">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
                  <th scope="col" className="px-4 py-3.5 font-bold">Comparison Factor</th>
                  <th scope="col" className="px-4 py-3.5 font-bold text-[#F59E0B]">
                    Navnit Rai (Independent)
                  </th>
                  <th scope="col" className="px-4 py-3.5 font-bold">
                    Typical NCR Web Agency
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

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {loc.localServiceHighlights.map((svc) => (
              <div key={svc.title} className="border border-[#0A0A0A] bg-neutral-50 p-5">
                <h3 className="font-bold text-[#0A0A0A]">{svc.title}</h3>
                <p className="mt-2 text-sm text-neutral-700">{svc.description}</p>
                <Link
                  href={getCityServiceHref("faridabad", svc.targetServiceSlug)}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#B45309] hover:underline"
                >
                  <span>{svc.targetServiceLabel}</span>
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-[#0A0A0A] bg-[#FEF3C7] p-6">
            <h3 className="text-lg font-bold text-[#0A0A0A]">
              {loc.wordpressAndHostingNote.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[#0A0A0A]">
              {loc.wordpressAndHostingNote.body}
            </p>
            <ul className="mt-4 space-y-1.5 text-sm font-medium text-[#0A0A0A]">
              {loc.collaborationModel.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#92400E]" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CityPricingTable citySlug="faridabad" />

      <CityServiceLinks citySlug="faridabad" />

      {/* Faridabad FAQs */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#0A0A0A]">
            Faridabad Website Development — FAQs
          </h2>
          <Accordion items={loc.faqs} idPrefix="faridabad-faq" />
        </div>
      </section>

      <CityNearbyAreas citySlug="faridabad" />

      <CtaBanner
        heading="Ready to Upgrade Your Digital Presence in Faridabad?"
        whatsappMessage={loc.whatsappMessage}
        source="faridabad_bottom"
      />
    </>
  );
}
