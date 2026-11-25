import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  MapPin,
  MessageSquare,
  Phone,
  ShoppingBag,
  Sparkles,
  Wrench,
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
import {
  TrackedExternalLink,
  TrackedRouteLink,
} from "@/components/cta/TrackedLink";

const loc = getLocationBySlug("lucknow")!;

export const metadata: Metadata = buildPageMetadata({
  title: loc.seoTitle,
  description: loc.metaDescription,
  path: "/locations/lucknow",
  keywords: [
    "website developer in lucknow",
    "website designer in lucknow",
    "web designer in lucknow",
    "website maker in lucknow",
    "best website developer in lucknow",
    "web development company in lucknow",
    "website design company lucknow",
    "lucknow website development company",
    "lucknow business website developer",
    "lucknow landing page developer",
    "lucknow website seo services",
  ],
});

export default function LucknowLocationPage() {
  return (
    <>
      <JsonLd
        data={[
          buildProfessionalServiceSchema({
            areaServed: ["Lucknow", "Gomti Nagar", "Hazratganj", "Uttar Pradesh", ...loc.nearbyAreas],
            url: absoluteUrl("/locations/lucknow"),
            description: loc.metaDescription,
          }),
          buildFaqSchema(loc.faqs),
        ]}
      />

      {/* Bespoke Split Hero tailored to Lucknow commercial sectors */}
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: "Lucknow", path: "/locations/lucknow" },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Badge variant="amber">Lucknow • State Capital Hub</Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
                Freelance Website Developer in Lucknow Built for Speed &amp; Real Enquiries
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                Whether you are searching for a reliable{" "}
                <strong className="text-[#0A0A0A]">website developer in Lucknow</strong>, a detail-oriented{" "}
                <strong className="text-[#0A0A0A]">Lucknow website designer</strong>, or an honest alternative to a layered{" "}
                <strong className="text-[#0A0A0A]">web development company in Lucknow</strong>, I engineer fast Next.js business sites, D2C e-commerce storefronts, and custom web applications directly with you.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl(loc.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "lucknow_hero", location: "Lucknow" }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>
                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{ source: "lucknow_hero", location: "Lucknow" }}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <span>{siteConfig.ctas.secondary}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </TrackedRouteLink>
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: "lucknow_hero", location: "Lucknow" }}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.call}</span>
                </TrackedExternalLink>
              </div>
            </div>

            <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] p-6 text-white dark-surface lg:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
                Lucknow Coverage Snapshot
              </p>
              <h2 className="mt-2 text-xl font-bold">
                Serving Growing Corridors Across Lucknow
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-neutral-200">
                {loc.commercialCorridors.map((zone) => (
                  <li key={zone} className="flex items-start gap-2.5">
                    <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#F59E0B]" />
                    <span>{zone}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-neutral-800 pt-4 text-xs text-neutral-300">
                Direct phone &amp; WhatsApp consulting ({siteConfig.contact.workingHours}) plus scheduled on-site discovery meetings in Lucknow for scoped commercial builds.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lucknow Vertical Matrix: 4 specialized pillars unique to Lucknow's economy */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Lucknow Market Realities
            </p>
            <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A] sm:text-3xl">
              Tailored Web Development Services in Lucknow Across Key Local Sectors
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              {loc.marketOverview}
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="border border-[#0A0A0A] bg-white p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                <ShoppingBag aria-hidden="true" className="h-4 w-4" />
                <span>Retail &amp; Chikankari D2C</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-[#0A0A0A]">
                E-Commerce Website Development in Lucknow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                From heritage Chikankari labels in Chowk and Hazratganj to modern lifestyle brands in Gomti Nagar, selling online requires mobile checkout clarity. As a{" "}
                <strong>Lucknow ecommerce website developer</strong>, I engineer fast storefronts with UPI/Razorpay checkout, clean product SEO, and zero plugin sluggishness so mobile shoppers complete orders without friction.
              </p>
              <Link
                href="/locations/lucknow/ecommerce-website-development"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                <span>E-commerce website development in Lucknow</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>

            <article className="border border-[#0A0A0A] bg-white p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                <Code2 aria-hidden="true" className="h-4 w-4" />
                <span>Startups &amp; Software</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-[#0A0A0A]">
                Lucknow React, Next.js, SaaS &amp; Full-Stack Development
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Founders building portals or software products in Vibhuti Khand and Sushant Golf City frequently look for a senior{" "}
                <strong>Lucknow React developer</strong>, <strong>Lucknow Next.js developer</strong>, or <strong>Lucknow SaaS developer</strong>. I work as your direct <strong>Lucknow full-stack developer</strong> and <strong>custom software developer</strong>—shipping typed APIs, PostgreSQL schemas, and clean dashboards without agency bloat.
              </p>
              <Link
                href="/locations/lucknow/web-application-development"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                <span>Web app &amp; React / Next.js development in Lucknow</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>

            <article className="border border-[#0A0A0A] bg-white p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                <Sparkles aria-hidden="true" className="h-4 w-4" />
                <span>SMEs, Clinics &amp; Institutes</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-[#0A0A0A]">
                Business Website Designer &amp; Landing Page Developer in Lucknow
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Whether you run a diagnostic center in Indira Nagar, a coaching institute in Aliganj, or a B2B consulting firm, hiring a focused{" "}
                <strong>Lucknow business website developer</strong> and <strong>website maker in Lucknow</strong> beats buying generic templates. Need paid-ad pages? Dedicated <strong>Lucknow landing page developer</strong> builds capture Google and Meta leads straight to WhatsApp.
              </p>
              <Link
                href="/services/business-website-development"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                <span>Explore Business Websites</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>

            <article className="border border-[#0A0A0A] bg-white p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                <Wrench aria-hidden="true" className="h-4 w-4" />
                <span>Care, Speed &amp; Local Search</span>
              </div>
              <h3 className="mt-3 text-xl font-bold text-[#0A0A0A]">
                Lucknow Website Redesign, Maintenance, WordPress &amp; SEO Services
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Already have a dated site? A structured <strong>Lucknow website redesign</strong> upgrades UI and Core Web Vitals while safeguarding rankings via 301 redirects. Need ongoing care? Get dependable <strong>Lucknow website maintenance</strong>, <strong>website management</strong>, <strong>WordPress website developer</strong> support (or clean Next.js migration), and technical <strong>Lucknow website SEO services</strong>.
              </p>
              <Link
                href="/locations/lucknow/website-maintenance-and-redesign"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                <span>Website maintenance &amp; redesign in Lucknow</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Deep Editorial Guide on Agency vs Freelancer in Lucknow */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <article>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                Transparent Comparison
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A] sm:text-3xl">
                Hiring an Independent Web Developer vs. a Web Development Company in Lucknow
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-800">
                Many business founders search phrases like <em>best website development company in Lucknow</em>, <em>website design company Lucknow</em>, or <em>web development agency in Lucknow</em> assuming a storefront office means dependable code. In reality, many mid-sized Lucknow web agencies separate sales from engineering: a sales executive promises custom quality, then passes your work to junior staff assembling slow multipurpose WordPress themes. When contact forms fail or Google updates Core Web Vitals requirements months later, you wait in ticket queues.
              </p>
              <p className="mt-3 text-base leading-relaxed text-neutral-800">
                Partnering directly with an independent engineer gives you clean accountability from discovery through deployment. Your domain registrar, cloud hosting account, and Git repository stay strictly in your name. You collaborate straight with the person designing semantic HTML, Schema.org markup, mobile UX, and backend integrations—turning your website into a durable business asset rather than an agency dependency.
              </p>
            </article>

            <div className="overflow-x-auto border border-[#0A0A0A]">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
                    <th scope="col" className="px-4 py-3.5 font-bold">Factor</th>
                    <th scope="col" className="px-4 py-3.5 font-bold text-[#F59E0B]">
                      Navnit Rai (Direct Freelancer)
                    </th>
                    <th scope="col" className="px-4 py-3.5 font-bold">
                      Typical Lucknow Agency
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

            <div className="border border-[#0A0A0A] bg-neutral-50 p-6">
              <h3 className="text-lg font-bold text-[#0A0A0A]">
                {loc.wordpressAndHostingNote.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {loc.wordpressAndHostingNote.body}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-bold">
                <Link
                  href="/blog/nextjs-vs-wordpress-indian-business-websites"
                  className="underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  Next.js vs WordPress Guide →
                </Link>
                <Link
                  href="/blog/freelance-web-developer-vs-agency-india"
                  className="underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  Freelancer vs Agency Breakdown →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CityPricingTable citySlug="lucknow" />

      <CityServiceLinks citySlug="lucknow" />

      {/* Lucknow FAQs */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#0A0A0A]">
            Lucknow Website Development — Frequently Asked Questions
          </h2>
          <Accordion items={loc.faqs} idPrefix="lucknow-faq" />
        </div>
      </section>

      <CityNearbyAreas citySlug="lucknow" />

      <CtaBanner
        heading="Ready to Work With a Dedicated Website Developer in Lucknow?"
        whatsappMessage={loc.whatsappMessage}
        source="lucknow_bottom"
      />
    </>
  );
}
