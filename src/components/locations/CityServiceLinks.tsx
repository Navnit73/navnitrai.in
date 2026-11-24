import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getLocationBySlug } from "@/data/locations";
import { getLocalServicePagesForCity } from "@/data/local-services";

/** Links from a city hub page down to its dedicated city + service pages. */
export function CityServiceLinks({ citySlug }: { citySlug: string }) {
  const loc = getLocationBySlug(citySlug);
  const pages = getLocalServicePagesForCity(citySlug);
  if (!loc || pages.length === 0) return null;

  return (
    <section className="border-b border-neutral-300 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
          Services in {loc.city}
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0A0A0A] sm:text-3xl">
          Looking for something specific in {loc.city}?
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pages.map((p) => (
            <Link
              key={p.slug}
              href={`/locations/${citySlug}/${p.slug}`}
              className="group flex flex-col justify-between border border-[#0A0A0A] bg-neutral-50 p-5 hover:bg-[#FEF3C7]"
            >
              <span className="text-base font-bold text-[#0A0A0A]">
                {p.navLabel} in {loc.city}
              </span>
              <span className="mt-2 text-sm text-neutral-700">{p.priceLabel}</span>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] group-hover:text-[#B45309]">
                View details <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
