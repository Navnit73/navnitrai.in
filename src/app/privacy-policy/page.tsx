import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_LAST_MODIFIED } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy | Navnit Rai (navnitrai.in)",
  description:
    "Privacy policy explaining how enquiry form data, WhatsApp referrals, and minimal analytics are handled on navnitrai.in.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]}
        />

        <h1 className="text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 font-mono text-xs text-neutral-600">
          Last updated: {SITE_LAST_MODIFIED} • Domain: {siteConfig.domain}
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-800">
          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              1. Information Collected
            </h2>
            <p className="mt-2">
              When you submit a consultation or quote request on {siteConfig.domain}, we collect only the details you voluntarily provide: your name, email address, phone/WhatsApp number, project category, budget range, and project description.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              2. How Your Information Is Used
            </h2>
            <p className="mt-2">
              Submitted contact information is used strictly to evaluate your project requirements, respond with scope/timeline recommendations, and coordinate requested consultations. Personal details are never sold, rented, or shared with third-party lead brokers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              3. WhatsApp, Phone &amp; Third-Party Links
            </h2>
            <p className="mt-2">
              Clicking WhatsApp consultation links opens WhatsApp (Meta Platforms) subject to WhatsApp&apos;s own privacy policy. Standard phone and email links open your device&apos;s default dialer or mail application.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              4. Analytics &amp; Security Logs
            </h2>
            <p className="mt-2">
              If Google Analytics or privacy-respecting conversion telemetry is enabled via environment configuration, aggregated page interaction and CTA conversion events may be recorded to measure enquiry performance. Anti-spam mechanisms inspect transient request headers solely to prevent automated form abuse.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              5. Data Deletion &amp; Contact
            </h2>
            <p className="mt-2">
              In alignment with India&apos;s Digital Personal Data Protection principles, you may request correction or deletion of your enquiry details at any time by emailing{" "}
              <span className="font-mono font-semibold">{siteConfig.contact.email}</span>{" "}
              or via our{" "}
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
