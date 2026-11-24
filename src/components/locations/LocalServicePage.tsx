import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Clock, IndianRupee, MapPin, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildFaqSchema, buildPageMetadata, buildServiceSchema } from "@/lib/seo";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { getLocationBySlug } from "@/data/locations";
import { getServiceBySlug } from "@/data/services";
import {
  getLocalServicePage,
  getLocalServicePagesForCity,
  getSameServiceInOtherCities,
  type LocalServiceKind,
  type LocalServicePage as LocalServicePageData,
} from "@/data/local-services";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { TrackedExternalLink, TrackedRouteLink } from "@/components/cta/TrackedLink";

const processByKind: Record<LocalServiceKind, Array<{ title: string; text: string }>> = {
  ecommerce: [
    { title: "Chat about your products", text: "What you sell, how many products, and how you deliver today." },
    { title: "Fixed quote & plan", text: "Pages, payment, shipping setup, price and launch date in writing." },
    { title: "Build with previews", text: "You see the store as it's built, add products and test orders." },
    { title: "Launch & handover", text: "Store goes live, payments switched on, and you get a training video." },
  ],
  wordpress: [
    { title: "Quick chat", text: "What pages you need and what you'd like to update yourself." },
    { title: "Fixed quote", text: "Pages, features, price and delivery date — in writing." },
    { title: "Design & build", text: "Preview link to check the design and content as it's built." },
    { title: "Launch & training", text: "Site goes live and I show you how to edit it." },
  ],
  "web-app": [
    { title: "Understand the problem", text: "We map who uses the app and what they need to get done." },
    { title: "Plan the first version", text: "Screens, features, price and timeline agreed in writing." },
    { title: "Build in stages", text: "Each feature shared on a test link for you to try and give feedback." },
    { title: "Launch & support", text: "App goes live on your hosting, with code, data and training handed over." },
  ],
  maintenance: [
    { title: "Free website check", text: "I review speed, security, mobile view and access to your accounts." },
    { title: "Simple plan", text: "Monthly care plan or redesign quote — clear price, no long contract." },
    { title: "Fix & improve", text: "Urgent issues fixed first, then regular updates or the redesign." },
    { title: "Ongoing help", text: "Send changes on WhatsApp; get a plain-language monthly summary." },
  ],
};

/**
 * Creates the route exports for /locations/<city>/[service].
 * Each city folder has a thin page.tsx that calls this.
 */
export function localServiceRoute(citySlug: string) {
  function generateStaticParams() {
    return getLocalServicePagesForCity(citySlug).map((p) => ({ service: p.slug }));
  }

  async function generateMetadata({
    params,
  }: {
    params: Promise<{ service: string }>;
  }): Promise<Metadata> {
    const { service } = await params;
    const page = getLocalServicePage(citySlug, service);
    if (!page) {
      return buildPageMetadata({
        title: "Page Not Found | Navnit Rai",
        description: "The requested page could not be found.",
        path: `/locations/${citySlug}/${service}`,
        noIndex: true,
      });
    }
    return buildPageMetadata({
      title: page.seoTitle,
      description: page.metaDescription,
      path: `/locations/${citySlug}/${page.slug}`,
      keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    });
  }

  async function Page({ params }: { params: Promise<{ service: string }> }) {
    const { service } = await params;
    const page = getLocalServicePage(citySlug, service);
    if (!page) notFound();
    return <LocalServicePage page={page} />;
  }

  return { generateStaticParams, generateMetadata, Page };
}

const linkClass =
  "font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]";

function LocalServicePage({ page }: { page: LocalServicePageData }) {
  const loc = getLocationBySlug(page.citySlug)!;
  const city = loc.city;
  const path = `/locations/${page.citySlug}/${page.slug}`;
  const globalService = getServiceBySlug(page.globalServiceSlug);
  const siblings = getLocalServicePagesForCity(page.citySlug).filter((p) => p.slug !== page.slug);
  const otherCities = getSameServiceInOtherCities(page);
  const steps = processByKind[page.kind];
  const source = `${page.citySlug}_${page.kind}`;

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            name: page.h1,
            description: page.metaDescription,
            path,
            category: page.navLabel,
            areaServed: [city, loc.stateRegion],
          }),
          buildFaqSchema(page.faqs),
        ]}
      />

      {/* Hero */}
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Locations", path: "/locations" },
              { name: city, path: `/locations/${page.citySlug}` },
              { name: page.navLabel, path },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Badge variant="amber">
                <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
                {city}, {loc.stateRegion}
              </Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl sm:leading-[1.1]">
                {page.h1}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-neutral-700">{page.heroLead}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl(page.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: `${source}_hero`, location: city, service: page.navLabel }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </TrackedExternalLink>
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: `${source}_hero`, location: city, service: page.navLabel }}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </TrackedExternalLink>
              </div>
              <p className="mt-4 text-sm text-neutral-600">
                Free first chat · No obligation · {siteConfig.contact.responseWindow.toLowerCase()}
              </p>
            </div>

            <aside className="border-2 border-[#0A0A0A] bg-neutral-50 p-6 sm:p-8 lg:col-span-5">
              <dl className="grid grid-cols-2 gap-4 border-b border-neutral-300 pb-5">
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    <IndianRupee aria-hidden="true" className="h-3.5 w-3.5" /> Price
                  </dt>
                  <dd className="mt-1 text-lg font-extrabold text-[#0A0A0A]">{page.priceLabel}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#B45309]">
                    <Clock aria-hidden="true" className="h-3.5 w-3.5" /> Time
                  </dt>
                  <dd className="mt-1 text-lg font-extrabold text-[#0A0A0A]">{page.timeline}</dd>
                </div>
              </dl>
              <p className="mt-5 text-sm font-bold uppercase tracking-wider text-[#0A0A0A]">
                What you get
              </p>
              <ul className="mt-3 space-y-2.5 text-sm">
                {page.included.slice(0, 5).map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                    <span className="text-neutral-800">{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">Who this is for</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
            Made for {city} businesses like yours
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {page.audiences.map((a) => (
              <article key={a.title} className="border border-neutral-300 bg-white p-6">
                <h3 className="text-lg font-bold text-[#0A0A0A]">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Local context */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
              {page.localSection.heading}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-neutral-800">
              {page.localSection.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="border border-[#0A0A0A] bg-[#FEF3C7] p-6">
              <h3 className="text-base font-bold text-[#0A0A0A]">Also available</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {page.localSection.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#0A0A0A]" />
                    <span className="text-neutral-900">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Everything included */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
            Everything included
          </h2>
          <ul className="mt-8 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {page.included.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-neutral-200 pb-4">
                <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
                <span className="font-medium text-[#0A0A0A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="dark-surface border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">How it works</h2>
          <ol className="mt-8 grid gap-px border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="bg-[#0A0A0A] p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center bg-[#F59E0B] font-extrabold text-[#0A0A0A]">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
            Questions about {page.navLabel.toLowerCase()} in {city}
          </h2>
          <Accordion items={page.faqs} idPrefix={`${source}-faq`} />
        </div>
      </section>

      {/* Internal links: up to hub, across city, across service */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
              More in {city}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href={`/locations/${page.citySlug}`} className={linkClass}>
                  Website developer in {city}
                </Link>
              </li>
              {siblings.map((s) => (
                <li key={s.slug}>
                  <Link href={`/locations/${s.citySlug}/${s.slug}`} className={linkClass}>
                    {s.navLabel} in {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {otherCities.length > 0 && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
                Same service, other cities
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {otherCities.map((o) => {
                  const oc = getLocationBySlug(o.citySlug)!;
                  return (
                    <li key={o.citySlug}>
                      <Link href={`/locations/${o.citySlug}/${o.slug}`} className={linkClass}>
                        {o.navLabel} in {oc.city}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {globalService && (
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
                Full service details
              </h2>
              <p className="mt-4 text-sm text-neutral-700">
                Read the complete guide to my{" "}
                <Link href={`/services/${globalService.slug}`} className={linkClass}>
                  {globalService.shortName.toLowerCase()} service
                </Link>
                , or{" "}
                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{ source: `${source}_links`, location: city }}
                  className={linkClass}
                >
                  send your project details
                </TrackedRouteLink>
                .
              </p>
              <Link
                href="/portfolio"
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
              >
                See sample projects <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <CtaBanner
        heading={`Let's talk about your ${page.navLabel.toLowerCase()} project in ${city}`}
        description="Send a WhatsApp message with a few lines about your business. I'll reply with ideas, a clear price and a timeline — free, with no obligation."
        whatsappMessage={page.whatsappMessage}
        source={`${source}_bottom`}
      />
    </>
  );
}
