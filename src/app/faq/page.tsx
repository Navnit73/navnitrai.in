import type { Metadata } from "next";
import Link from "next/link";
import { buildFaqSchema, buildPageMetadata } from "@/lib/seo";
import { allFaqsFlat, faqCategories } from "@/data/faqs";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta/CtaBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development FAQ | Pricing, Process, SEO & Support — Navnit Rai",
  description:
    "Clear answers on freelance web development pricing, timelines, Next.js vs WordPress, technical SEO, and ongoing website maintenance in India.",
  path: "/faq",
  keywords: [
    "freelance web development faq india",
    "website development pricing timeline questions",
    "freelance developer faq",
  ],
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(allFaqsFlat)} />

      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "FAQ", path: "/faq" },
            ]}
          />

          <Badge variant="amber">Answers &amp; Transparency</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Everything business owners and founders typically ask about timelines, INR project pricing, technical SEO, ownership, and ongoing support.
          </p>

          <nav aria-label="FAQ Sections" className="mt-6 flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="border border-neutral-300 bg-neutral-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0A0A0A] hover:border-[#0A0A0A] hover:bg-[#FEF3C7]"
              >
                {cat.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-5xl space-y-12 px-4 py-14 sm:px-6 lg:px-8">
          {faqCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-28">
              <h2 className="text-2xl font-bold text-[#0A0A0A]">{cat.title}</h2>
              <p className="mt-1.5 mb-5 text-sm text-neutral-700">
                {cat.description}
              </p>
              <Accordion items={cat.items} idPrefix={cat.id} />
            </section>
          ))}

          <div className="border border-[#0A0A0A] bg-white p-6">
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              Have a Specific Question About Your Site or City?
            </h2>
            <p className="mt-1.5 text-sm text-neutral-700">
              Review city-specific answers on{" "}
              <Link href="/locations/lucknow" className="font-semibold underline hover:text-[#B45309]">
                Lucknow
              </Link>
              ,{" "}
              <Link href="/locations/gorakhpur" className="font-semibold underline hover:text-[#B45309]">
                Gorakhpur
              </Link>
              ,{" "}
              <Link href="/locations/kanpur" className="font-semibold underline hover:text-[#B45309]">
                Kanpur
              </Link>
              , and{" "}
              <Link href="/locations/faridabad" className="font-semibold underline hover:text-[#B45309]">
                Faridabad
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="font-semibold underline hover:text-[#B45309]">
                ask directly via Contact
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBanner source="faq_bottom" />
    </>
  );
}
