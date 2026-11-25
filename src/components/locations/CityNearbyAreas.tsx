import Link from "next/link";
import { MapPin } from "lucide-react";
import { getLocationBySlug, locationsData } from "@/data/locations";

/**
 * Nearby districts served from a city hub + links to the other city hubs.
 * Districts are listed as plain text (no thin per-district doorway pages).
 */
export function CityNearbyAreas({ citySlug }: { citySlug: string }) {
  const loc = getLocationBySlug(citySlug);
  if (!loc) return null;
  const otherHubs = locationsData.filter((l) => l.slug !== citySlug);

  return (
    <section className="border-b border-neutral-300 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
              Around {loc.city}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0A0A0A]">
              Website Developer for {loc.city} &amp; Nearby Districts
            </h2>
            <p className="mt-3 text-base leading-relaxed text-neutral-700">
              Not inside {loc.city} city? I work with shops, schools, clinics, manufacturers and
              startups across the region on WhatsApp, phone and video calls—in Hindi or English—with
              the same pricing, previews and post-launch support.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {loc.nearbyAreas.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 border border-[#0A0A0A] bg-white px-3 py-1.5 text-sm font-medium text-[#0A0A0A]"
                >
                  <MapPin aria-hidden="true" className="h-3.5 w-3.5 text-[#B45309]" />
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-700">
              Other city service hubs
            </h3>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {otherHubs.map((hub) => (
                <Link
                  key={hub.slug}
                  href={`/locations/${hub.slug}`}
                  className="border border-[#0A0A0A] bg-white px-4 py-3 text-sm font-bold text-[#0A0A0A] hover:bg-[#FEF3C7]"
                >
                  Website Developer in {hub.city} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
