import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageSquare,
  Phone,
  Server,
  ShieldCheck,
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

const loc = getLocationBySlug("gorakhpur")!;

export const metadata: Metadata = buildPageMetadata({
  title: loc.seoTitle,
  description: loc.metaDescription,
  path: "/locations/gorakhpur",
  keywords: [
    "website developer in gorakhpur",
    "freelance web developer in gorakhpur",
    "web development company in gorakhpur",
    "gorakhpur website designer",
    "gorakhpur ecommerce website developer",
    "gorakhpur website hosting services",
    "gorakhpur website maintenance",
    "gorakhpur next js developer",
  ],
});

export default function GorakhpurLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          buildProfessionalServiceSchema({
            areaServed: ["Gorakhpur", "Golghar", "Taramandal", "GIDA", "Purvanchal"],
            url: absoluteUrl("/locations/gorakhpur"),
            description: loc.metaDescription,
          }),
          buildFaqSchema(loc.faqs),
        ]}
      />

      {/* Bespoke Gorakhpur Banner Header focused on Ownership & Reliability */}
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: "Gorakhpur", path: "/locations/gorakhpur" },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="amber">Gorakhpur • Purvanchal Commercial Hub</Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
                Freelance Website Developer in Gorakhpur With Full Ownership &amp; Ongoing Support
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Businesses across Golghar, Civil Lines, Medical Road, Taramandal, and GIDA need a{" "}
                <strong className="text-[#0A0A0A]">website developer in Gorakhpur</strong> who stays reachable after launch. I engineer fast{" "}
                <strong className="text-[#0A0A0A]">Gorakhpur business websites</strong>, online stores, custom software, and managed hosting setups—keeping domain and code ownership strictly in your name.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl(loc.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "gorakhpur_hero", location: "Gorakhpur" }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>
                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{ source: "gorakhpur_hero", location: "Gorakhpur" }}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <span>{siteConfig.ctas.secondary}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </TrackedRouteLink>
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: "gorakhpur_hero", location: "Gorakhpur" }}
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
                <span>No Vendor Lock-In Guarantee</span>
              </div>
              <h2 className="mt-2 text-lg font-bold text-[#0A0A0A]">
                100% Control Over Your Gorakhpur Digital Assets
              </h2>
              <ul className="mt-4 space-y-2 text-sm text-[#0A0A0A]">
                <li className="flex items-start gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#92400E]" />
                  <span>Domain &amp; DNS stay registered under your email.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#92400E]" />
                  <span>Cloud hosting billed transparently in your account.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#92400E]" />
                  <span>Clean Git repository delivered upon completion.</span>
                </li>
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Gorakhpur Commercial Sectors & Corridors */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                Regional Footprint
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                Why Gorakhpur Businesses Need Mobile-First Speed
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                {loc.marketOverview}
              </p>
              <div className="mt-6 border border-[#0A0A0A] bg-white p-5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#B45309]">
                  Key Gorakhpur Areas Served
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
                <div
                  key={ind.sector}
                  className="border border-[#0A0A0A] bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-[#0A0A0A]">
                    {ind.sector}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {ind.websiteNeed}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deep Editorial Essays Covering All Gorakhpur Services */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-5xl space-y-10 px-4 py-14 sm:px-6 lg:px-8">
          <article className="border-l-4 border-[#F59E0B] pl-5 sm:pl-7">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Design, Stores &amp; Lead Capture
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
              Gorakhpur Website Design, E-Commerce &amp; Landing Page Development
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              Many local organizations searching for a <strong>web designer in Gorakhpur</strong>, <strong>Gorakhpur website designer</strong>, or <strong>web design company in Gorakhpur</strong> receive bloated templates packed with slow animations that stall on regional mobile networks. Strong <strong>website design Gorakhpur</strong> prioritizes clean typography, accessible navigation, clear pricing/service breakdowns, and prominent phone and WhatsApp buttons.
            </p>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              For retail outlets around Golghar and distributors supplying Purvanchal towns, dedicated <strong>Gorakhpur ecommerce website developer</strong> builds unlock online catalogs with UPI/card checkout and structured category SEO. And when launching seasonal admissions or clinic packages, focused <strong>Gorakhpur landing page developer</strong> layouts convert Google and Meta ad clicks cleanly without homepage distractions.
            </p>
          </article>

          <article className="border-l-4 border-[#0A0A0A] pl-5 sm:pl-7">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Modern Full-Stack &amp; Custom Software
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
              React, Next.js, Full-Stack, Web Application &amp; SaaS Development in Gorakhpur
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              Founders and growing institutions in Eastern UP increasingly need custom operational software rather than static brochures. I work directly as a{" "}
              <strong>Gorakhpur React developer</strong>, <strong>Gorakhpur Next.js developer</strong>, and{" "}
              <strong>Gorakhpur full-stack developer</strong>—delivering booking engines, student/patient dashboards, and bespoke workflows as a{" "}
              <strong>Gorakhpur web application developer</strong>, <strong>Gorakhpur custom software developer</strong>, and <strong>Gorakhpur SaaS developer</strong>.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-bold">
              <Link href="/services/web-application-development" className="underline hover:text-[#B45309]">
                Web Application Scope →
              </Link>
              <Link href="/services/full-stack-development" className="underline hover:text-[#B45309]">
                Full-Stack Architecture →
              </Link>
              <Link href="/services/nextjs-development" className="underline hover:text-[#B45309]">
                Next.js Development →
              </Link>
            </div>
          </article>

          <article className="border border-[#0A0A0A] bg-neutral-50 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
              <Server aria-hidden="true" className="h-4 w-4" />
              <span>Hosting, Maintenance, WordPress &amp; SEO</span>
            </div>
            <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
              Gorakhpur Website Hosting Services, Maintenance, Redesign &amp; SEO
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              Unreliable shared hosting and forgotten updates take down more small-business sites in Gorakhpur than actual code bugs. Through transparent{" "}
              <strong>Gorakhpur website hosting services</strong> advisory, I set up fast cloud hosting directly in your account with SSL, automated backups, and DNS hygiene—avoiding shady middleman reseller lock-in.
            </p>
            <p className="mt-3 text-base leading-relaxed text-neutral-800">
              Whether you need <strong>WordPress website development in Gorakhpur</strong> stabilized by a dependable{" "}
              <strong>Gorakhpur WordPress developer</strong>, an SEO-safe <strong>Gorakhpur website redesign</strong> migrating onto modern Next.js, ongoing{" "}
              <strong>Gorakhpur website management</strong> and <strong>Gorakhpur website maintenance</strong>, or structured{" "}
              <strong>Gorakhpur website SEO services</strong>, every engagement stays transparent and documented.
            </p>
          </article>
        </div>
      </section>

      {/* Agency vs Freelancer Comparison */}
      <section className="border-b border-neutral-300 bg-neutral-50">
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
                    Typical Gorakhpur Web Company
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

      {/* Gorakhpur FAQs */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#0A0A0A]">
            Gorakhpur Website Development — FAQs
          </h2>
          <Accordion items={loc.faqs} idPrefix="gorakhpur-faq" />
        </div>
      </section>

      {/* Cross Links */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
            Nearby UP &amp; NCR Service Hubs
          </h2>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/locations/lucknow"
              className="border border-[#0A0A0A] bg-white px-4 py-2 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
            >
              Website Developer in Lucknow →
            </Link>
            <Link
              href="/locations/kanpur"
              className="border border-[#0A0A0A] bg-white px-4 py-2 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
            >
              Website Developer in Kanpur →
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
        heading="Need a Dependable Website Developer in Gorakhpur?"
        whatsappMessage={loc.whatsappMessage}
        source="gorakhpur_bottom"
      />
    </>
  );
}
