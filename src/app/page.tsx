import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Code2,
  Gauge,
  MapPin,
  MessageSquare,
  Phone,
  Search,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { portfolioItems } from "@/data/projects";
import { blogPostsData } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta/CtaBanner";
import {
  TrackedExternalLink,
  TrackedRouteLink,
} from "@/components/cta/TrackedLink";

export const metadata: Metadata = buildPageMetadata({
  title: "Navnit Rai | Freelance Web Developer in India (Next.js & Full-Stack)",
  description:
    "Hire Navnit Rai — independent freelance web developer in India building fast, SEO-ready Next.js business websites, e-commerce stores, and custom web apps across Lucknow, Gorakhpur, Kanpur, Faridabad & pan-India.",
  path: "/",
  keywords: [
    "freelance web developer india",
    "independent full stack developer india",
    "next.js freelance developer",
    "website developer lucknow gorakhpur kanpur faridabad",
  ],
});

const homeFaqs = [
  {
    question: "How is working with Navnit Rai different from hiring a web agency?",
    answer:
      "You speak directly with the engineer writing your code—eliminating account-manager relays, generic templates, and agency overhead. Every build starts from search intent, conversion UX, and clean TypeScript code you fully own.",
  },
  {
    question: "Which cities do you serve across India?",
    answer:
      "I serve businesses across Uttar Pradesh and Delhi-NCR—with dedicated local pages for Lucknow, Gorakhpur, Kanpur, and Faridabad—while collaborating seamlessly remotely with startups and SMEs nationwide.",
  },
  {
    question: "What technology stack do you build with?",
    answer:
      "Primarily Next.js App Router, React, TypeScript, Tailwind CSS, Vue.js/Nuxt, Node.js, and PostgreSQL—choosing server-rendered or statically pre-rendered architectures that load fast on Indian mobile connections.",
  },
  {
    question: "Are WhatsApp buttons, contact forms, and technical SEO included?",
    answer:
      "Yes. Click-to-WhatsApp, click-to-call, validated enquiry forms, self-referencing canonicals, XML sitemaps, clean heading structure, and Schema.org JSON-LD are standard in every build.",
  },
];

export default function HomePage() {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="amber">Independent Freelance Developer</Badge>
                <Badge variant="outline">India • UP &amp; NCR Focus</Badge>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Independent Freelance Web Developer for{" "}
                <span className="bg-[#FEF3C7] px-1.5 text-[#0A0A0A] underline decoration-[#F59E0B] decoration-4 underline-offset-4">
                  Fast, High-Converting
                </span>{" "}
                Websites
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
                I help businesses and founders across India—especially in{" "}
                <Link
                  href="/locations/lucknow"
                  className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  Lucknow
                </Link>
                ,{" "}
                <Link
                  href="/locations/gorakhpur"
                  className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  Gorakhpur
                </Link>
                ,{" "}
                <Link
                  href="/locations/kanpur"
                  className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  Kanpur
                </Link>
                , and{" "}
                <Link
                  href="/locations/faridabad"
                  className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  Faridabad
                </Link>
                —launch SEO-structured websites, online stores, and full-stack Next.js applications built to generate real enquiries.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "home_hero" }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-5 w-5" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>

                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{ source: "home_hero" }}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <span>{siteConfig.ctas.secondary}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </TrackedRouteLink>

                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: "home_hero" }}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.call}</span>
                </TrackedExternalLink>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-700">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Check aria-hidden="true" className="h-4 w-4 text-[#B45309]" />
                  Direct engineer collaboration
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Check aria-hidden="true" className="h-4 w-4 text-[#B45309]" />
                  100% code &amp; domain ownership
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Check aria-hidden="true" className="h-4 w-4 text-[#B45309]" />
                  Technical SEO &amp; Core Web Vitals built-in
                </span>
              </div>
            </div>

            {/* Right engineering spec card */}
            <aside className="border-2 border-[#0A0A0A] bg-neutral-50 p-6 lg:col-span-4">
              <div className="flex items-center justify-between border-b border-neutral-300 pb-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
                  Engineering Standards
                </span>
                <span className="inline-block h-2.5 w-2.5 bg-[#F59E0B]" aria-hidden="true" />
              </div>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Code2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
                  <div>
                    <p className="font-bold text-[#0A0A0A]">Modern Stack Ownership</p>
                    <p className="text-neutral-700">
                      Next.js App Router, React, Vue.js, TypeScript, Tailwind CSS &amp; PostgreSQL.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Search aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
                  <div>
                    <p className="font-bold text-[#0A0A0A]">Zero-Cannibalization SEO</p>
                    <p className="text-neutral-700">
                      Intent-mapped URLs, JSON-LD schema, clean canonicals &amp; crawlable HTML.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Gauge aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
                  <div>
                    <p className="font-bold text-[#0A0A0A]">Mobile Speed &amp; CRO</p>
                    <p className="text-neutral-700">
                      Built for Indian 4G connections with clear WhatsApp, call &amp; form paths.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
                  <div>
                    <p className="font-bold text-[#0A0A0A]">Honest Execution</p>
                    <p className="text-neutral-700">
                      Transparent scopes, milestone previews &amp; zero fake metrics or lock-in.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="mt-6 border-t border-neutral-300 pt-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  <span>{siteConfig.ctas.work}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Problem-Solution Framing Band */}
      <section className="dark-surface border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#F59E0B]">
              Why Businesses Lose Leads Online
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Most Business Websites Look Fine on a Laptop—and Fail Where Customers Actually Decide
            </h2>
          </div>

          <div className="mt-8 grid gap-px border border-neutral-800 bg-neutral-800 md:grid-cols-3">
            <div className="bg-[#0A0A0A] p-6">
              <span className="font-mono text-xs font-bold text-[#F59E0B]">01 / SPEED</span>
              <h3 className="mt-2 text-lg font-bold">Heavy Templates Kill Mobile Patience</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Bloated WordPress sliders and unoptimized scripts force Indian mobile visitors to wait seconds before seeing your phone number or offer.
              </p>
            </div>
            <div className="bg-[#0A0A0A] p-6">
              <span className="font-mono text-xs font-bold text-[#F59E0B]">02 / SEARCH INTENT</span>
              <h3 className="mt-2 text-lg font-bold">Weak Architecture Blocks Google Discovery</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Missing service pages, duplicate thin city pages, and broken headings keep high-intent local buyers from ever finding you organically.
              </p>
            </div>
            <div className="bg-[#0A0A0A] p-6">
              <span className="font-mono text-xs font-bold text-[#F59E0B]">03 / CONVERSION</span>
              <h3 className="mt-2 text-lg font-bold">Buried CTAs Waste Paid &amp; Organic Clicks</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                Without obvious WhatsApp entry points, clear service scope, and frictionless enquiry forms, interested prospects simply bounce back to search results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                Specialized Services
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
                14 Dedicated Web Development &amp; SEO Services
              </h2>
              <p className="mt-2 max-w-2xl text-base text-neutral-700">
                Every service page targets a distinct business requirement—from high-speed corporate sites and online stores to custom React, Next.js, Vue.js, and full-stack applications.
              </p>
            </div>
            <Link
              href="/services"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              <span>View All 14 Services</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <article
                key={service.slug}
                className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-6 hover:bg-neutral-50 transition-colors"
              >
                <div>
                  <Badge variant="neutral">{service.category}</Badge>
                  <h3 className="mt-4 text-xl font-bold text-[#0A0A0A]">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-[#B45309] hover:underline"
                    >
                      {service.name}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
                    {service.heroSummary}
                  </p>
                </div>

                <div className="mt-6 border-t border-neutral-200 pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                  >
                    <span>Explore {service.shortName}</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Compact directory of all 14 services */}
          <div className="mt-10 border border-neutral-300 bg-neutral-50 p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0A0A]">
              Complete Service Directory
            </h3>
            <div className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {servicesData.map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-800 hover:text-[#B45309] hover:underline"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-[#F59E0B]" aria-hidden="true" />
                  <span>{svc.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus Section */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                Local Market Coverage
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Serving Businesses in Lucknow, Gorakhpur, Kanpur &amp; Faridabad
              </h2>
              <p className="mt-2 max-w-2xl text-base text-neutral-700">
                Dedicated local landing guides tailored to each city&apos;s commercial corridors—with zero spammy duplicate doorway pages.
              </p>
            </div>
            <Link
              href="/locations"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              <span>Explore Service Areas</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locationsData.map((loc) => (
              <article
                key={loc.slug}
                className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-6"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    <MapPin aria-hidden="true" className="h-4 w-4" />
                    <span>{loc.stateRegion}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-[#0A0A0A]">
                    <Link
                      href={`/locations/${loc.slug}`}
                      className="hover:underline"
                    >
                      Website Developer in {loc.city}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {loc.heroLead}
                  </p>
                </div>

                <div className="mt-5 border-t border-neutral-200 pt-4">
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                  >
                    <span>{loc.city} Services</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Reference Architectures Preview */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                Technical Blueprints
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Reference Architectures &amp; Case Studies
              </h2>
              <p className="mt-2 max-w-2xl text-base text-neutral-700">
                Inspect how real B2B catalogs, e-commerce storefronts, and healthcare portals are architected for Core Web Vitals and conversion.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href="/portfolio"
                className={buttonVariants({ variant: "outline", size: "md" })}
              >
                <span>View Portfolio</span>
              </Link>
              <Link
                href="/case-studies"
                className={buttonVariants({ variant: "secondary", size: "md" })}
              >
                <span>Read Case Studies</span>
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {portfolioItems.slice(0, 3).map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between border border-[#0A0A0A] bg-neutral-50 p-6"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <Badge variant="amber">{item.category}</Badge>
                    <span className="font-mono text-[11px] font-semibold uppercase text-neutral-600">
                      {item.statusTag}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {item.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="border border-neutral-300 bg-white px-2 py-0.5 font-mono text-xs text-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {item.caseStudySlug && (
                  <div className="mt-6 border-t border-neutral-300 pt-4">
                    <Link
                      href={`/case-studies/${item.caseStudySlug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                    >
                      <span>Inspect Architecture Breakdown</span>
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process & Freelancer Advantage */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Execution Workflow
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
              How Projects Move From Enquiry to Live Launch
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                num: "01",
                title: "Discovery & Intent Map",
                text: "We review your business goals, target cities/services, and conversion flow via WhatsApp or call before locking scope.",
              },
              {
                num: "02",
                title: "Wireframe & UI Architecture",
                text: "Clear layout structure, responsive typography, and frictionless WhatsApp/form paths designed first.",
              },
              {
                num: "03",
                title: "Iterative Engineering",
                text: "Clean Next.js/React/Full-Stack builds shared on staging URLs per milestone so you inspect real pages early.",
              },
              {
                num: "04",
                title: "SEO QA & Handover",
                text: "Metadata, canonicals, sitemaps, accessibility, and Core Web Vitals verified prior to launch with full asset handover.",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="border border-[#0A0A0A] bg-white p-6"
              >
                <span className="inline-block border border-[#0A0A0A] bg-[#F59E0B] px-2.5 py-1 font-mono text-xs font-bold text-[#0A0A0A]">
                  STEP {step.num}
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog & Guides Strip */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
                Practical Guides
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Guides on Website Cost, Next.js &amp; Technical SEO
              </h2>
            </div>
            <Link
              href="/blog"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              <Layers aria-hidden="true" className="h-4 w-4" />
              <span>All Articles</span>
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {blogPostsData.slice(0, 3).map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between border border-neutral-300 bg-white p-6 hover:border-[#0A0A0A] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    <span className="text-[#B45309]">{post.category}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#0A0A0A]">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                  >
                    <span>Read Guide</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Home FAQs */}
      <section className="bg-neutral-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#B45309]">
              Quick Answers
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Common Questions Before Starting a Project
            </h2>
          </div>
          <Accordion items={homeFaqs} idPrefix="home-faq" />
          <div className="mt-6 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
            >
              <span>Browse All Frequently Asked Questions</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner source="home_bottom" />
    </>
  );
}
