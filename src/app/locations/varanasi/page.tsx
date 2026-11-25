import type { Metadata } from "next";
import { CityHubPage, cityHubMetadata } from "@/components/locations/CityHubPage";

// Content lives in src/data/locations.ts
export const metadata: Metadata = cityHubMetadata("varanasi");

export default function Page() {
  return <CityHubPage citySlug="varanasi" />;
}
