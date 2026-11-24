import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Code2, MessageSquare, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { getWhatsAppUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

export const metadata: Metadata = buildPageMetadata({
  title: "About Navnit Rai | Independent Full-Stack Web Developer India",
  description:
    "Learn how Navnit Rai works directly with Indian founders and local businesses to ship maintainable, fast, SEO-structured websites and web applications.",
  path: "/about",
  type: "profile",
  keywords: [
    "navnit rai freelance web developer",
    "navnit rai web developer",
    "independent software engineer india",
  ],
});

export default function AboutPage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      name: siteConfig.brandName,
      url: siteConfig.url,
      jobTitle: "Independent Freelance Web Developer",
      description:
        "Independent full-stack web developer building Next.js, React, Vue.js, and SEO-first websites for businesses in India.",
    },
  };

  return (
    <>
      <JsonLd data={profileSchema} />

      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="amber">Independent Practice</Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
                About Navnit Rai — Independent Full-Stack Developer
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700">
                I partner directly with business owners, clinics, B2B manufacturers, D2C brands, and startup founders to design and engineer fast, conversion-focused websites and custom web applications—without bloated agency layers or disposable templates.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <TrackedExternalLink
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "about_hero" }}
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

            <aside className="border border-[#0A0A0A] bg-neutral-50 p-6 lg:col-span-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Practice Profile
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="border-b border-neutral-200 pb-2.5">
                  <dt className="font-semibold text-neutral-600">Role</dt>
                  <dd className="font-bold text-[#0A0A0A]">
                    Independent Freelance Full-Stack Developer
                  </dd>
                </div>
                <div className="border-b border-neutral-200 pb-2.5">
                  <dt className="font-semibold text-neutral-600">Primary Markets</dt>
                  <dd className="font-bold text-[#0A0A0A]">
                    Lucknow, Gorakhpur, Kanpur, Faridabad &amp; Remote Pan-India
                  </dd>
                </div>
                <div className="border-b border-neutral-200 pb-2.5">
                  <dt className="font-semibold text-neutral-600">Core Stack</dt>
                  <dd className="font-bold text-[#0A0A0A]">
                    Next.js, React, Vue.js, TypeScript, Node.js, PostgreSQL
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-neutral-600">Credentials &amp; Bio Note</dt>
                  <dd className="text-xs leading-relaxed text-neutral-700">
                    Years of experience counts, client testimonials, and verified biography additions can be updated directly in{" "}
                    <code className="font-mono text-[#0A0A0A]">src/app/about/page.tsx</code>{" "}
                    without fabricated metrics.
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[#0A0A0A]">
            Operating Principles
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="border border-[#0A0A0A] bg-white p-6">
              <Code2 aria-hidden="true" className="h-6 w-6 text-[#B45309]" />
              <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">
                1. Engineering Before Decoration
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Clean semantic HTML, accessible contrast, fast mobile loading, and maintainable TypeScript come before unnecessary animations.
              </p>
            </div>
            <div className="border border-[#0A0A0A] bg-white p-6">
              <CheckCircle2 aria-hidden="true" className="h-6 w-6 text-[#B45309]" />
              <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">
                2. SEO &amp; Conversion Built Together
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Traffic without conversion is vanity. Every page pairs clear search-intent architecture with prominent WhatsApp, call, and form entry points.
              </p>
            </div>
            <div className="border border-[#0A0A0A] bg-white p-6">
              <Shield aria-hidden="true" className="h-6 w-6 text-[#B45309]" />
              <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">
                3. Full Client Ownership &amp; Honesty
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Your domain, cloud accounts, and code stay strictly under your name. I never inflate promises, fabricate case results, or trap clients on proprietary platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
          <article className="border-l-4 border-[#F59E0B] pl-5 sm:pl-7">
            <h2 className="text-2xl font-bold text-[#0A0A0A]">
              Why Businesses Choose Direct Collaboration Over Layered Agencies
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              Across Indian markets—from manufacturing corridors in Kanpur and IMT Faridabad to fast-growing healthcare, education, and retail businesses in Lucknow and Gorakhpur—many owners feel burned after paying agencies for websites that looked polished in a slide deck yet failed to generate enquiries. Often, the problem isn&apos;t malice; it is organizational handoff loss. A salesperson collects vague notes, a junior designer picks a crowded theme, and a separate contractor installs fifteen heavy plugins just to make a contact form work.
            </p>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              Working independently eliminates those blind spots. When we scope your project, I evaluate your search competition, organize clean non-overlapping URL structures, design accessible flat interfaces that communicate credibility instantly, and write modular TypeScript code across both frontend and server routes. Every milestone ships to a real staging URL you test on your own phone before moving forward.
            </p>
          </article>

          <article className="border-l-4 border-[#0A0A0A] pl-5 sm:pl-7">
            <h2 className="text-2xl font-bold text-[#0A0A0A]">
              How Projects Are Scoped, Built &amp; Handed Over
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              Every engagement starts with clarity over guesswork. Before quoting fees or timelines, we align on who your buyers are, which products or services carry your best margins, and how leads reach you today—whether via direct phone calls, WhatsApp consultations, B2B RFQ sheets, or UPI online checkout. From there, deliverables are split into clear milestones covering information architecture, responsive UI implementation, technical SEO validation, and production deployment.
            </p>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              At launch, you receive complete control over your domain registrar, cloud infrastructure, and version-controlled Git codebase. Clients who prefer ongoing peace of mind can continue on structured monthly maintenance plans covering dependency patches, backups, speed verification, and new landing pages as campaigns grow.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-[#0A0A0A]">
                Core Technical Capabilities
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-neutral-800">
                <li className="border-l-2 border-[#F59E0B] pl-3">
                  <strong>Frontend &amp; SSR Frameworks:</strong> Next.js App Router, React 19, Vue.js 3 / Nuxt, TypeScript, Tailwind CSS v4.
                </li>
                <li className="border-l-2 border-[#F59E0B] pl-3">
                  <strong>Backend &amp; Persistence:</strong> Node.js APIs, Next.js Route Handlers, PostgreSQL, REST webhooks, Zod schema validation.
                </li>
                <li className="border-l-2 border-[#F59E0B] pl-3">
                  <strong>E-Commerce &amp; Integrations:</strong> Custom storefronts, Razorpay/Stripe payment flows, Shiprocket/CRM webhook patterns.
                </li>
                <li className="border-l-2 border-[#F59E0B] pl-3">
                  <strong>Technical SEO &amp; Web Vitals:</strong> Keyword-to-URL intent mapping, canonical hygiene, XML sitemaps, Schema.org JSON-LD, LCP/INP/CLS tuning.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0A0A0A]">
                Explore Services &amp; Locations
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                Browse dedicated service pages or regional hubs to see how projects are scoped for your sector or city:
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  href="/services"
                  className="border border-[#0A0A0A] bg-white px-4 py-3 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
                >
                  All 14 Web Services →
                </Link>
                <Link
                  href="/portfolio"
                  className="border border-[#0A0A0A] bg-white px-4 py-3 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
                >
                  Reference Portfolio →
                </Link>
                <Link
                  href="/locations/lucknow"
                  className="border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-[#0A0A0A] hover:border-[#0A0A0A]"
                >
                  Lucknow Hub →
                </Link>
                <Link
                  href="/locations/gorakhpur"
                  className="border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-[#0A0A0A] hover:border-[#0A0A0A]"
                >
                  Gorakhpur Hub →
                </Link>
                <Link
                  href="/locations/kanpur"
                  className="border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-[#0A0A0A] hover:border-[#0A0A0A]"
                >
                  Kanpur Hub →
                </Link>
                <Link
                  href="/locations/faridabad"
                  className="border border-neutral-300 bg-white px-4 py-3 text-sm font-semibold text-[#0A0A0A] hover:border-[#0A0A0A]"
                >
                  Faridabad Hub →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner source="about_bottom" />
    </>
  );
}
