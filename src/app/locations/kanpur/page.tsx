import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  MapPin,
  MessageSquare,
  Phone,
  RefreshCw,
  ShoppingCart,
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
import {
  TrackedExternalLink,
  TrackedRouteLink,
} from "@/components/cta/TrackedLink";

const loc = getLocationBySlug("kanpur")!;

export const metadata: Metadata = buildPageMetadata({
  title: loc.seoTitle,
  description: loc.metaDescription,
  path: "/locations/kanpur",
  keywords: [
    "kanpur website developer",
    "website developer in kanpur",
    "web developer in kanpur",
    "web development company in kanpur",
    "ecommerce development in kanpur",
    "kanpur website redesign",
    "kanpur website maintenance",
    "kanpur business website developer",
  ],
});

export default function KanpurLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          buildProfessionalServiceSchema({
            areaServed: ["Kanpur", "Panki", "Fazalganj", "Jajmau", "Swaroop Nagar"],
            url: absoluteUrl("/locations/kanpur"),
            description: loc.metaDescription,
          }),
          buildFaqSchema(loc.faqs),
        ]}
      />

      {/* Bespoke Industrial / Export Hero for Kanpur */}
      <section className="dark-surface border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            dark
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: "Kanpur", path: "/locations/kanpur" },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="amberSolid">Kanpur • Industrial &amp; Commercial Hub</Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                Kanpur Website Developer for Industrial B2B Exporters, D2C Brands &amp; SMEs
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-300">
                When domestic buyers and overseas importers verify suppliers across Panki, Fazalganj, Dada Nagar, or Jajmau, a weak template hurts credibility. As a direct{" "}
                <strong className="text-white">website developer in Kanpur</strong> and{" "}
                <strong className="text-white">Kanpur business website developer</strong>, I engineer export-ready B2B catalogs, D2C e-commerce stores, and fast company websites built to generate real RFQs.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl(loc.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "kanpur_hero", location: "Kanpur" }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>
                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{ source: "kanpur_hero", location: "Kanpur" }}
                  className={buttonVariants({ variant: "outlineDark", size: "lg" })}
                >
                  <span>{siteConfig.ctas.secondary}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </TrackedRouteLink>
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: "kanpur_hero", location: "Kanpur" }}
                  className={buttonVariants({ variant: "outlineDark", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.call}</span>
                </TrackedExternalLink>
              </div>
            </div>

            <aside className="border border-neutral-700 bg-neutral-900 p-6 lg:col-span-4">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Kanpur Zones Covered
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-200">
                {loc.commercialCorridors.map((zone) => (
                  <li key={zone} className="flex items-start gap-2">
                    <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Kanpur Industrial & D2C Narrative Blocks */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="border border-[#0A0A0A] bg-neutral-50 p-6">
              <Factory aria-hidden="true" className="h-6 w-6 text-[#B45309]" />
              <h2 className="mt-4 text-xl font-bold text-[#0A0A0A]">
                B2B Web Design &amp; Development Services in Kanpur
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
                Businesses searching for a{" "}
                <strong>website designer in Kanpur</strong>,{" "}
                <strong>Kanpur web designer</strong>, or{" "}
                <strong>web design services Kanpur</strong> often receive static brochure sites that bury product specs inside slow PDF downloads. I build structured B2B specification catalogs and RFQ forms so procurement buyers reach your desk immediately.
              </p>
              <Link
                href="/case-studies/b2b-industrial-catalog-architecture"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                <span>See B2B Catalog Blueprint</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>

            <article className="border border-[#0A0A0A] bg-neutral-50 p-6">
              <ShoppingCart aria-hidden="true" className="h-6 w-6 text-[#B45309]" />
              <h2 className="mt-4 text-xl font-bold text-[#0A0A0A]">
                E-Commerce Design &amp; Development in Kanpur
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
                Kanpur&apos;s footwear, leather accessories, and consumer manufacturing brands are expanding fast into D2C sales. As a{" "}
                <strong>Kanpur ecommerce website developer</strong> handling end-to-end{" "}
                <strong>ecommerce development in Kanpur</strong> and{" "}
                <strong>ecommerce design Kanpur</strong>, I engineer mobile-first storefronts with UPI/Razorpay readiness and GST clarity.
              </p>
              <Link
                href="/services/ecommerce-website-development"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                <span>Explore E-Commerce Scope</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>

            <article className="border border-[#0A0A0A] bg-neutral-50 p-6">
              <RefreshCw aria-hidden="true" className="h-6 w-6 text-[#B45309]" />
              <h2 className="mt-4 text-xl font-bold text-[#0A0A0A]">
                Kanpur Website Redesign, Maintenance &amp; Management
              </h2>
              <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
                Legacy websites built across Civil Lines or Swaroop Nagar years ago often fail on mobile phones. A careful{" "}
                <strong>Kanpur website redesign</strong> preserves existing Google rankings with 301 redirects while boosting speed—backed by reliable{" "}
                <strong>Kanpur website maintenance</strong> and <strong>Kanpur website management</strong> retainers.
              </p>
              <Link
                href="/services/website-redesign"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                <span>Explore Redesign Process</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Deep Editorial Analysis for Kanpur */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
          {loc.narrativeSections.map((section) => (
            <article key={section.heading} className="border border-[#0A0A0A] bg-white p-6 sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                {section.eyebrow}
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-800">
                {section.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </article>
          ))}

          <div className="border border-[#0A0A0A] bg-white p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
              <Building2 aria-hidden="true" className="h-4 w-4" />
              <span>Freelance Developer vs. Agency in Kanpur</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
              Why Direct Engineering Beats Generic Web Development Companies in Kanpur
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              Many local organizations start by searching for a <strong>web development company in Kanpur</strong>, <strong>website design company in Kanpur</strong>, or <strong>best web developer in Kanpur</strong>—only to find print-shop vendors pushing dated templates with zero technical SEO. Working directly with an independent engineer gives your company clean Next.js/TypeScript architecture, direct WhatsApp access, and full repository ownership.
            </p>
            <div className="mt-6 overflow-x-auto border border-[#0A0A0A]">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
                    <th scope="col" className="px-4 py-3 font-bold">Factor</th>
                    <th scope="col" className="px-4 py-3 font-bold text-[#F59E0B]">
                      Navnit Rai (Freelance)
                    </th>
                    <th scope="col" className="px-4 py-3 font-bold">Typical Agency</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-300 bg-white">
                  {loc.freelancerVsCompanyAngle.rows.map((row) => (
                    <tr key={row.factor}>
                      <th scope="row" className="px-4 py-3 font-bold text-[#0A0A0A]">
                        {row.factor}
                      </th>
                      <td className="bg-[#FEF3C7]/40 px-4 py-3 font-medium text-[#0A0A0A]">
                        {row.freelanceNavnit}
                      </td>
                      <td className="px-4 py-3 text-neutral-700">{row.typicalAgency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Kanpur FAQs */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#0A0A0A]">
            Kanpur Website Development — FAQs
          </h2>
          <Accordion items={loc.faqs} idPrefix="kanpur-faq" />
        </div>
      </section>

      {/* Regional Cross-Links */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
            Other Cities Covered
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/locations/lucknow"
              className="border border-[#0A0A0A] bg-white px-4 py-2 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
            >
              Website Developer in Lucknow →
            </Link>
            <Link
              href="/locations/gorakhpur"
              className="border border-[#0A0A0A] bg-white px-4 py-2 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
            >
              Website Developer in Gorakhpur →
            </Link>
            <Link
              href="/locations/faridabad"
              className="border border-[#0A0A0A] bg-white px-4 py-2 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
            >
              Website Developer in Faridabad →
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Looking for a Reliable Website Developer in Kanpur?"
        whatsappMessage={loc.whatsappMessage}
        source="kanpur_bottom"
      />
    </>
  );
}
