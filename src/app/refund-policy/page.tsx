import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_LAST_MODIFIED } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildPageMetadata({
  title: "Refund and Cancellation Policy | Navnit Rai (navnitrai.in)",
  description:
    "Milestone-based cancellation and refund policy for freelance website development and maintenance engagements with Navnit Rai.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Refund Policy", path: "/refund-policy" },
          ]}
        />

        <h1 className="text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-4xl">
          Refund and Cancellation Policy
        </h1>
        <p className="mt-2 font-mono text-xs text-neutral-600">
          Last updated: {SITE_LAST_MODIFIED} • Domain: {siteConfig.domain}
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-800">
          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              1. Milestone-Based Billing Clarity
            </h2>
            <p className="mt-2">
              Freelance web development projects are broken into transparent milestones (e.g., Architecture/Kickoff, Staging Implementation, and Launch Handover) so clients verify real working deliverables at each stage before advancing payments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              2. Cancellation Before Work Starts
            </h2>
            <p className="mt-2">
              If a project is cancelled in writing before technical work, discovery mapping, or code setup commences, unutilized advance deposits may be refunded minus any direct payment-processing charges or reserved scheduling fees specified in the proposal.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              3. Completed &amp; In-Progress Milestones
            </h2>
            <p className="mt-2">
              Once a milestone is delivered or substantial engineering work has been logged and shared on staging, completed work is non-refundable. Upon cancellation mid-project, all completed code and assets paid for up to that point are handed over cleanly.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              4. Monthly Maintenance Retainers
            </h2>
            <p className="mt-2">
              Ongoing maintenance plans can be cancelled prior to the next monthly billing cycle with zero lock-in penalty. Contact{" "}
              <Link href="/contact" className="font-semibold underline">
                {siteConfig.contact.email}
              </Link>{" "}
              for billing or cancellation requests.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
