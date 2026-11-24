import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import {
  buildFaqSchema,
  buildPageMetadata,
  buildServiceSchema,
} from "@/lib/seo";
import { getServiceBySlug, servicesData } from "@/data/services";
import { serviceDeepDives } from "@/data/services-deep-dives";
import { locationsData } from "@/data/locations";
import { getCaseStudyBySlug } from "@/data/projects";
import { getBlogPostBySlug } from "@/data/blog";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
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

export function generateStaticParams() {
  return servicesData.map((svc) => ({ slug: svc.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return buildPageMetadata({
      title: "Service Not Found | Navnit Rai",
      description: "The requested service page could not be found.",
      path: `/services/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
    keywords: [service.primaryKeyword, ...service.secondaryKeywords],
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) =>
    service.relatedServiceSlugs.includes(s.slug)
  );
  const relatedCaseStudy = getCaseStudyBySlug(service.relatedCaseStudySlug);
  const relatedBlog = getBlogPostBySlug(service.relatedBlogSlug);
  const deepDiveSections = serviceDeepDives[service.slug] || [];

  return (
    <>
      <JsonLd
        data={[
          buildServiceSchema({
            name: service.name,
            description: service.metaDescription,
            path: `/services/${service.slug}`,
            category: service.category,
          }),
          buildFaqSchema(service.faqs),
        ]}
      />

      {/* Service Hero */}
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.name, path: `/services/${service.slug}` },
            ]}
          />

          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Badge variant="amber">{service.category}</Badge>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
                {service.h1}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-neutral-700">
                {service.heroSummary}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl(service.whatsappPrompt)}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{
                    source: `service_${service.slug}_hero`,
                    service: service.name,
                  }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>

                <TrackedRouteLink
                  href="/contact"
                  eventName="consultation_cta_click"
                  payload={{
                    source: `service_${service.slug}_hero`,
                    service: service.name,
                  }}
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  <span>{siteConfig.ctas.secondary}</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </TrackedRouteLink>

                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{
                    source: `service_${service.slug}_hero`,
                    service: service.name,
                  }}
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.call}</span>
                </TrackedExternalLink>
              </div>
            </div>

            <aside className="border-2 border-[#0A0A0A] bg-neutral-50 p-6 lg:col-span-4">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Core Stack &amp; Focus
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-[#0A0A0A] bg-white px-2.5 py-1 font-mono text-xs font-semibold text-[#0A0A0A]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-neutral-300 pt-4 text-sm text-neutral-700">
                <p className="font-bold text-[#0A0A0A]">Direct Freelancer Advantage</p>
                <p className="mt-1.5 leading-relaxed">
                  {service.whyDirectFreelancer}
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Problem & Ideal Clients */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-[#0A0A0A] bg-white p-6 sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Why Existing Setups Underperform
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                Common Bottlenecks Solved
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-700">
                {service.problemStatement}
              </p>
              <div className="mt-6 border-t border-neutral-200 pt-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#0A0A0A]">
                  Engineering Approach
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {service.architectureApproach}
                </p>
              </div>
            </div>

            <div className="border border-[#0A0A0A] bg-white p-6 sm:p-8">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Best Fit
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                Who This Service Is Built For
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-neutral-800">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Process */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">
                What Is Included
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                Key Deliverables
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-neutral-800">
                {service.deliverables.map((del) => (
                  <li
                    key={del}
                    className="flex items-start gap-3 border border-neutral-300 bg-neutral-50 p-3.5"
                  >
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]"
                    />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#B45309]">
                Delivery Sequence
              </p>
              <h2 className="mt-2 text-2xl font-bold text-[#0A0A0A]">
                4-Step Execution Workflow
              </h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {service.process.map((step) => (
                  <div
                    key={step.step}
                    className="border border-[#0A0A0A] bg-white p-5"
                  >
                    <span className="inline-block border border-[#0A0A0A] bg-[#F59E0B] px-2 py-0.5 font-mono text-xs font-bold text-[#0A0A0A]">
                      {step.step}
                    </span>
                    <h3 className="mt-3 text-base font-bold text-[#0A0A0A]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                      {step.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Engineering Context */}
      {deepDiveSections.length > 0 && (
        <section className="border-b border-neutral-300 bg-white">
          <div className="mx-auto max-w-5xl space-y-8 px-4 py-14 sm:px-6 lg:px-8">
            {deepDiveSections.map((sec) => (
              <article
                key={sec.heading}
                className="border-l-4 border-[#F59E0B] pl-5 sm:pl-7"
              >
                <h2 className="text-2xl font-bold text-[#0A0A0A]">
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
        </section>
      )}

      {/* Regional Availability & Proof Links */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="border border-[#0A0A0A] bg-white p-6">
              <h2 className="text-lg font-bold text-[#0A0A0A]">
                Local Availability Across India
              </h2>
              <p className="mt-2 text-sm text-neutral-700">
                Available remotely nationwide and directly aligned with commercial requirements across major regional hubs:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {locationsData.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 border border-neutral-300 bg-neutral-50 px-3 py-1.5 text-xs font-bold text-[#0A0A0A] hover:border-[#0A0A0A] hover:bg-[#FEF3C7]"
                  >
                    <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#B45309]" />
                    <span>{loc.city}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border border-[#0A0A0A] bg-white p-6">
              <h2 className="text-lg font-bold text-[#0A0A0A]">
                Relevant Blueprints &amp; Guides
              </h2>
              <div className="mt-3 space-y-3 text-sm">
                {relatedCaseStudy && (
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-[#B45309]">
                      Case Study:{" "}
                    </span>
                    <Link
                      href={`/case-studies/${relatedCaseStudy.slug}`}
                      className="font-semibold text-[#0A0A0A] underline hover:text-[#B45309]"
                    >
                      {relatedCaseStudy.title}
                    </Link>
                  </div>
                )}
                {relatedBlog && (
                  <div>
                    <span className="font-mono text-xs font-bold uppercase text-[#B45309]">
                      Guide:{" "}
                    </span>
                    <Link
                      href={`/blog/${relatedBlog.slug}`}
                      className="font-semibold text-[#0A0A0A] underline hover:text-[#B45309]"
                    >
                      {relatedBlog.title}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold text-[#0A0A0A]">
            {service.name} — Frequently Asked Questions
          </h2>
          <Accordion items={service.faqs} idPrefix={`svc-${service.slug}`} />
        </div>
      </section>

      {/* Lateral Related Services */}
      {relatedServices.length > 0 && (
        <section className="bg-neutral-50">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-[#0A0A0A]">
              Related Services You Might Need
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="border border-[#0A0A0A] bg-white p-4 hover:bg-[#FEF3C7] transition-colors"
                >
                  <p className="font-bold text-[#0A0A0A]">{rel.name}</p>
                  <p className="mt-1 text-xs text-neutral-700 line-clamp-2">
                    {rel.heroSummary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBanner
        heading={`Need Help With ${service.name}?`}
        whatsappMessage={service.whatsappPrompt}
        source={`service_${service.slug}_bottom`}
      />
    </>
  );
}
