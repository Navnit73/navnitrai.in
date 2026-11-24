import type { Metadata } from "next";
import Link from "next/link";
import { Info } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { portfolioItems } from "@/data/projects";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CtaBanner } from "@/components/cta/CtaBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development Portfolio & Reference Builds | Navnit Rai",
  description:
    "Inspect technical reference builds and frontend/full-stack web architectures engineered with Next.js, TypeScript, and Tailwind CSS.",
  path: "/portfolio",
  keywords: [
    "freelance web developer portfolio india",
    "next.js project showcase",
    "custom web app portfolio",
  ],
});

export default function PortfolioPage() {
  return (
    <>
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Portfolio", path: "/portfolio" },
            ]}
          />

          <Badge variant="amber">Technical Architectures</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Selected Builds &amp; Reference Architectures
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Architectural blueprints demonstrating how business websites, B2B RFQ catalogs, e-commerce storefronts, and custom web apps are engineered for speed, SEO, and conversions.
          </p>

          <div className="mt-6 flex items-start gap-3 border border-[#0A0A0A] bg-[#FEF3C7] p-4 text-sm text-[#0A0A0A]">
            <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#92400E]" />
            <p>
              <strong>Transparency Notice:</strong> These entries showcase technical reference architectures ready to customize in{" "}
              <code className="font-mono font-semibold">src/data/projects.ts</code>{" "}
              with live client URLs and verified outcomes—no fabricated client metrics or testimonials are displayed.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <PortfolioGrid items={portfolioItems} />

          <div className="mt-12 border border-[#0A0A0A] bg-white p-6">
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              Want Deep Technical Breakdowns?
            </h2>
            <p className="mt-1 text-sm text-neutral-700">
              Inspect full architectural constraints, schema implementations, and conversion flows in{" "}
              <Link href="/case-studies" className="font-bold underline hover:text-[#B45309]">
                Engineering Case Studies
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBanner source="portfolio_bottom" />
    </>
  );
}
