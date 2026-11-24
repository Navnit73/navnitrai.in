import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { caseStudiesData } from "@/data/projects";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/cta/CtaBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Case Studies & Architecture Breakdowns | Navnit Rai",
  description:
    "Read engineering breakdowns covering B2B industrial portals, D2C e-commerce performance, and regional healthcare booking architectures.",
  path: "/case-studies",
  keywords: [
    "web development case studies",
    "next.js architecture breakdowns",
    "seo and performance case studies",
  ],
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Case Studies", path: "/case-studies" },
            ]}
          />

          <Badge variant="amber">System Design</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Engineering Case Studies &amp; Architecture Breakdowns
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Detailed walkthroughs explaining problem constraints, server/client boundaries, technical SEO structure, and conversion UX choices across real Indian business verticals.
          </p>

          <div className="mt-6 flex items-start gap-3 border border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-800">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
            <p>
              Case study entries below are structured technical reference architectures with clear outcome placeholder notes until populated with verified live client metrics.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {caseStudiesData.map((study) => (
              <article
                key={study.slug}
                className="border border-[#0A0A0A] bg-white p-6 sm:p-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <Badge variant="amber">{study.industry}</Badge>
                  <span className="font-mono text-xs text-neutral-600">
                    Reference Case Study
                  </span>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-[#0A0A0A]">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="hover:text-[#B45309] hover:underline"
                  >
                    {study.title}
                  </Link>
                </h2>

                <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-700">
                  {study.problem}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {study.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border border-neutral-300 bg-neutral-50 px-2.5 py-1 font-mono text-xs text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-neutral-200 pt-4">
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                  >
                    <span>Read Full Engineering Breakdown</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 border border-[#0A0A0A] bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0A0A0A]">
              How Technical Reference Architectures Benefit Real Clients
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
              Rather than inventing synthetic client reviews or inflated conversion percentages, these case study blueprints inspect the actual engineering mechanics behind fast Indian business websites: semantic B2B catalog tables ready for procurement RFQs, Next.js server-rendered D2C storefronts built for mobile UPI checkout speed, and accessible regional clinic portals free from duplicate doorway pages.
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
              Want to apply one of these architectures to your business? Review matching offerings in{" "}
              <Link href="/services/custom-website-development" className="font-bold underline hover:text-[#B45309]">
                Custom Website Development
              </Link>
              ,{" "}
              <Link href="/services/ecommerce-website-development" className="font-bold underline hover:text-[#B45309]">
                E-Commerce Development
              </Link>
              , or{" "}
              <Link href="/contact" className="font-bold underline hover:text-[#B45309]">
                request a consultation directly
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBanner source="case_studies_bottom" />
    </>
  );
}
