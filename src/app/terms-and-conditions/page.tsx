import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, SITE_LAST_MODIFIED } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms and Conditions | Navnit Rai (navnitrai.in)",
  description:
    "Terms and conditions governing freelance web development enquiries, project scope, deliverables, intellectual property, and website usage.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Terms & Conditions", path: "/terms-and-conditions" },
          ]}
        />

        <h1 className="text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-2 font-mono text-xs text-neutral-600">
          Last updated: {SITE_LAST_MODIFIED} • Provider: {siteConfig.legalName}
        </p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed text-neutral-800">
          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              1. Scope &amp; Proposals
            </h2>
            <p className="mt-2">
              Information published on {siteConfig.domain} describes service capabilities and general scope ranges. Formal project delivery begins only after both parties confirm a written scope document specifying deliverables, milestones, timeline, and fees.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              2. Client Responsibilities
            </h2>
            <p className="mt-2">
              Timely project delivery depends on timely provision of brand assets, domain/hosting credentials (registered in client&apos;s own name), copy inputs, and staging approvals within agreed review windows.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              3. Intellectual Property Ownership
            </h2>
            <p className="mt-2">
              Upon receipt of full agreed milestone payments, custom source code, repository access, and site assets created specifically for the project transfer cleanly to the client, excluding open-source third-party libraries licensed under their respective MIT/Apache licenses.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              4. Third-Party Services
            </h2>
            <p className="mt-2">
              Third-party fees (domain registration, cloud servers, paid fonts, payment gateway transaction charges, or external SaaS APIs) remain billed directly between the client and those service providers unless agreed otherwise in writing.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#0A0A0A]">
              5. Legal Entity Placeholder Notice
            </h2>
            <p className="mt-2">
              Business registration, GSTIN (where applicable), and jurisdiction details are formalized directly on individual client proposals/invoices. Contact{" "}
              <Link href="/contact" className="font-semibold underline">
                {siteConfig.contact.email}
              </Link>{" "}
              for billing queries.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
