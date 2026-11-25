import Link from "next/link";
import { IndianRupee } from "lucide-react";
import { getLocationBySlug } from "@/data/locations";
import { getCityServiceHref, localServicePages } from "@/data/local-services";

const tiers: Array<{
  name: string;
  price: string;
  timeline: string;
  bestFor: string;
  serviceSlug: string;
  wordpress?: boolean;
}> = [
  {
    name: "Landing Page",
    price: "Under ₹25,000",
    timeline: "5–7 days",
    bestFor: "Google/Meta ad campaigns, admissions, single offers",
    serviceSlug: "landing-page-development",
  },
  {
    name: "Business Website",
    price: "₹25,000 – ₹60,000",
    timeline: "2–3 weeks",
    bestFor: "Clinics, schools, shops, consultants, local service firms",
    serviceSlug: "business-website-development",
  },
  {
    name: "WordPress Website",
    price: "₹25,000 – ₹60,000",
    timeline: "2–3 weeks",
    bestFor: "Businesses that post notices, results or blogs every week",
    serviceSlug: "website-development",
    wordpress: true,
  },
  {
    name: "E-Commerce Store",
    price: "₹60,000 – ₹1,50,000",
    timeline: "4–8 weeks",
    bestFor: "Retail, D2C brands, wholesalers, B2B catalogs",
    serviceSlug: "ecommerce-website-development",
  },
  {
    name: "Web App / Custom Software",
    price: "₹1,50,000+",
    timeline: "6–12 weeks",
    bestFor: "Portals, dashboards, booking systems, SaaS MVPs",
    serviceSlug: "web-application-development",
  },
  {
    name: "Maintenance & Redesign",
    price: "Quote after free check",
    timeline: "Monthly or one-time",
    bestFor: "Slow, hacked, outdated or abandoned websites",
    serviceSlug: "website-maintenance-management",
  },
];

function tierHref(citySlug: string, tier: { serviceSlug: string; wordpress?: boolean }) {
  if (tier.wordpress) {
    const wp = localServicePages.find((p) => p.citySlug === citySlug && p.kind === "wordpress");
    if (wp) return `/locations/${citySlug}/${wp.slug}`;
  }
  return getCityServiceHref(citySlug, tier.serviceSlug);
}

/** Transparent ₹ price table for a city hub (competes with directory price anchors). */
export function CityPricingTable({ citySlug }: { citySlug: string }) {
  const loc = getLocationBySlug(citySlug);
  if (!loc) return null;

  return (
    <section className="border-b border-neutral-300 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#B45309]">
          <IndianRupee aria-hidden="true" className="h-4 w-4" />
          Transparent Pricing
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
          Website Development Cost in {loc.city} ({loc.hindiName} में वेबसाइट का खर्च)
        </h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-neutral-700">
          Directory listings in {loc.city} advertise ₹5,000 &ldquo;website packages&rdquo;—usually a
          reused theme on shared hosting with a yearly renewal fee. Below are honest ranges for a
          custom, fast, Google-ready website that stays 100% in your name. You get a fixed written
          quote before any work starts.
        </p>

        <div className="mt-8 overflow-x-auto border border-[#0A0A0A]">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
                <th scope="col" className="px-4 py-3.5 font-bold">Service</th>
                <th scope="col" className="px-4 py-3.5 font-bold text-[#F59E0B]">Price</th>
                <th scope="col" className="px-4 py-3.5 font-bold">Timeline</th>
                <th scope="col" className="px-4 py-3.5 font-bold">Best for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-300 bg-white">
              {tiers.map((t) => (
                <tr key={t.name}>
                  <th scope="row" className="px-4 py-3.5 font-bold text-[#0A0A0A]">
                    <Link
                      href={tierHref(loc.slug, t)}
                      className="underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                    >
                      {t.name}
                    </Link>
                  </th>
                  <td className="bg-[#FEF3C7]/40 px-4 py-3.5 font-semibold text-[#0A0A0A]">
                    {t.price}
                  </td>
                  <td className="px-4 py-3.5 text-neutral-700">{t.timeline}</td>
                  <td className="px-4 py-3.5 text-neutral-700">{t.bestFor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-neutral-600">
          Domain (≈₹900–₹1,500/year) and hosting are billed directly to your account—no reseller
          markup. Full breakdown:{" "}
          <Link
            href="/blog/website-development-cost-india-2026"
            className="font-semibold underline hover:text-[#B45309]"
          >
            website development cost in India
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
