import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Info, MessageSquare } from "lucide-react";
import { siteConfig, SITE_LAST_MODIFIED } from "@/config/site";
import { buildArticleSchema, buildPageMetadata } from "@/lib/seo";
import { caseStudiesData, getCaseStudyBySlug } from "@/data/projects";
import { servicesData } from "@/data/services";
import { getWhatsAppUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta/CtaBanner";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

export function generateStaticParams() {
  return caseStudiesData.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    return buildPageMetadata({
      title: "Case Study Not Found | Navnit Rai",
      description: "The requested case study could not be found.",
      path: `/case-studies/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: study.seoTitle,
    description: study.metaDescription,
    path: `/case-studies/${study.slug}`,
    type: "article",
    publishedTime: SITE_LAST_MODIFIED,
    modifiedTime: SITE_LAST_MODIFIED,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) =>
    study.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: study.title,
          description: study.metaDescription,
          path: `/case-studies/${study.slug}`,
          publishedAt: SITE_LAST_MODIFIED,
          updatedAt: SITE_LAST_MODIFIED,
        })}
      />

      <article>
        <header className="border-b-2 border-[#0A0A0A] bg-white">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Case Studies", path: "/case-studies" },
                { name: study.title, path: `/case-studies/${study.slug}` },
              ]}
            />

            <Badge variant="amber">{study.industry}</Badge>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-4xl">
              {study.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              {study.targetUseCase}
            </p>

            <div className="mt-6 flex items-start gap-3 border border-[#0A0A0A] bg-[#FEF3C7] p-4 text-sm text-[#0A0A0A]">
              <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#92400E]" />
              <p>{study.statusNote}</p>
            </div>
          </div>
        </header>

        <div className="bg-neutral-50">
          <div className="mx-auto max-w-5xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
            <section className="border border-[#0A0A0A] bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#0A0A0A]">
                1. Business Problem &amp; Constraints
              </h2>
              <p className="mt-3 text-base leading-relaxed text-neutral-700">
                {study.problem}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-neutral-800">
                {study.constraints.map((c) => (
                  <li key={c} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#F59E0B]" aria-hidden="true" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-[#0A0A0A] bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#0A0A0A]">
                2. Engineering &amp; Architecture Decisions
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-neutral-800">
                {study.architectureDecisions.map((d) => (
                  <li key={d} className="border-l-2 border-[#F59E0B] pl-3">
                    {d}
                  </li>
                ))}
              </ul>
            </section>

            <div className="grid gap-6 md:grid-cols-2">
              <section className="border border-[#0A0A0A] bg-white p-6">
                <h2 className="text-lg font-bold text-[#0A0A0A]">
                  3. Conversion Rate Optimization (CRO)
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm text-neutral-700">
                  {study.conversionDesign.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#0A0A0A]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="border border-[#0A0A0A] bg-white p-6">
                <h2 className="text-lg font-bold text-[#0A0A0A]">
                  4. Technical SEO Implementation
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm text-neutral-700">
                  {study.seoEngineering.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#0A0A0A]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <section className="border border-[#0A0A0A] bg-white p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#0A0A0A]">
                5. Technical Implementation Highlights
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-800">
                {study.implementationNotes.map((note) => (
                  <li key={note} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-2 w-2 shrink-0 bg-[#F59E0B]" aria-hidden="true" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-neutral-400 bg-white p-6">
              <h2 className="text-lg font-bold text-[#0A0A0A]">
                6. Outcomes &amp; Verification Slot
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {study.outcomePlaceholderNote}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <TrackedExternalLink
                  href={getWhatsAppUrl(
                    `Hi Navnit, I want to discuss an architecture similar to: ${study.title}`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: `case_study_${study.slug}` }}
                  className={buttonVariants({ variant: "primary", size: "md" })}
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>
                <Link
                  href="/case-studies"
                  className={buttonVariants({ variant: "outline", size: "md" })}
                >
                  <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                  <span>All Case Studies</span>
                </Link>
              </div>
            </section>

            {relatedServices.length > 0 && (
              <section className="border border-[#0A0A0A] bg-white p-6">
                <h2 className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
                  Related Services
                </h2>
                <div className="mt-3 flex flex-wrap gap-3">
                  {relatedServices.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      className="border border-neutral-300 bg-neutral-50 px-3.5 py-2 text-sm font-semibold text-[#0A0A0A] hover:border-[#0A0A0A]"
                    >
                      {svc.name} →
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>

      <CtaBanner source={`case_study_${study.slug}`} />
    </>
  );
}
