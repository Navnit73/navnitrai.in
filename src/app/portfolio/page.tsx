import type { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { liveProjects, portfolioItems } from "@/data/projects";
import { LiveProjectsGrid } from "@/components/portfolio/LiveProjects";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { CtaBanner } from "@/components/cta/CtaBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Portfolio: Live Websites & Web Apps | Navnit Rai",
  description:
    "Live websites and web apps built by Navnit Rai — passport photo tools, PDF form filler, Mac app store page and print templates with online payments, AI checks and fast Next.js pages.",
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

          <Badge variant="amber">Portfolio</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Live Websites &amp; Web Apps I&apos;ve Built
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Real products running today, used by customers in the UK, the US and worldwide — plus concept builds showing how I&apos;d approach common business websites.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
            Live projects
          </h2>
          <p className="mt-2 max-w-2xl text-base text-neutral-700">
            Open any of them and try it yourself.
          </p>
          <div className="mt-8">
            <LiveProjectsGrid projects={liveProjects} />
          </div>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
            Concept builds
          </h2>
          <p className="mt-2 mb-8 max-w-2xl text-base text-neutral-700">
            Sample plans for common business needs — manufacturers, online stores and clinics.
          </p>
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
