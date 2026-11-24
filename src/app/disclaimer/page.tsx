import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_LAST_MODIFIED } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildPageMetadata({
  title: "Disclaimer | Navnit Rai (navnitrai.in)",
  description:
    "Disclaimer regarding reference architecture showcases, placeholder configuration details, external links, and SEO outcome expectations.",
  path: "/disclaimer",
});

export default function DisclaimerPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Disclaimer", path: "/disclaimer" },
          ]}
        />

        <h1 className="text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-4xl">
          Website &amp; Technical Disclaimer
        </h1>
        <p className="mt-2 font-mono text-xs text-neutral-600">
          Last updated: {SITE_LAST_MODIFIED} • Domain: {siteConfig.domain}
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-800">
          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              1. Reference Architectures &amp; Placeholders
            </h2>
            <p className="mt-2">
              Portfolio and case study entries currently presented on {siteConfig.domain} marked as &ldquo;Reference Architecture&rdquo; are engineering blueprints demonstrating technical implementation standards. Any configurable contact placeholders (such as default sample phone or email settings) are clearly identified until updated in configuration.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              2. Search Engine Ranking Expectations
            </h2>
            <p className="mt-2">
              SEO-friendly website development implements clean semantic markup, fast loading architecture, schema structured data, and logical URL mapping following search engine best practices. Because search rankings depend on market competition, domain authority, content depth, and algorithm updates, no specific Google ranking position is guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              3. Independent Entity Clarification
            </h2>
            <p className="mt-2">
              References to cities (Lucknow, Gorakhpur, Kanpur, Faridabad) or commercial corridors describe service areas supported by {siteConfig.brandName} and do not imply endorsement by local chambers, universities, or third-party entities.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              4. Questions
            </h2>
            <p className="mt-2">
              For clarifications, please reach out via our{" "}
              <Link href="/contact" className="font-semibold underline">
                Contact page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
