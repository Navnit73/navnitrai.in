import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { getMailtoUrl, getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { ContactForm } from "@/components/forms/ContactForm";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Navnit Rai | Free Website Project Consultation India",
  description:
    "Start your website or web app project. Message directly on WhatsApp, call, or submit your project brief for a structured technical proposal.",
  path: "/contact",
  keywords: [
    "hire freelance web developer india",
    "free website consultation india",
    "website project quote",
    "contact navnit rai",
  ],
});

export default function ContactPage() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Navnit Rai",
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "Person",
      name: siteConfig.brandName,
      email: siteConfig.contact.email,
      telephone: siteConfig.contact.phoneDisplay,
    },
  };

  const showPlaceholderNotice =
    siteConfig.contact.isPlaceholderPhone ||
    siteConfig.contact.isPlaceholderWhatsApp ||
    siteConfig.contact.isPlaceholderEmail;

  return (
    <>
      <JsonLd data={contactPageSchema} />

      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Contact", path: "/contact" },
            ]}
          />

          <Badge variant="amber">Direct Consultation</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Start Your Website or Web Application Project
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Share your requirements via the project form, message directly on WhatsApp for quick discussion, or call during working hours. You deal directly with the developer executing your build.
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Form */}
            <div className="lg:col-span-7">
              <h2 className="mb-4 text-xl font-bold text-[#0A0A0A]">
                Send Your Project Brief
              </h2>
              <ContactForm sourceContext="contact_page_form" />
            </div>

            {/* Direct Contact Channels */}
            <aside className="space-y-6 lg:col-span-5">
              <div className="border-2 border-[#0A0A0A] bg-[#0A0A0A] p-6 text-white dark-surface">
                <p className="font-mono text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                  Fastest Channel
                </p>
                <h2 className="mt-2 text-2xl font-bold">
                  {siteConfig.ctas.primary}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  Ideal for quick scope estimates, sharing an existing website URL for audit, or discussing timelines across Lucknow, Gorakhpur, Kanpur, Faridabad, or remote India.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <TrackedExternalLink
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="whatsapp_click"
                    payload={{ source: "contact_sidebar" }}
                    className={buttonVariants({ variant: "primary", size: "lg" })}
                  >
                    <MessageSquare aria-hidden="true" className="h-4 w-4" />
                    <span>{siteConfig.ctas.primary}</span>
                  </TrackedExternalLink>

                  <TrackedExternalLink
                    href={getTelUrl()}
                    eventName="phone_call_click"
                    payload={{ source: "contact_sidebar" }}
                    className={buttonVariants({ variant: "outlineDark", size: "lg" })}
                  >
                    <Phone aria-hidden="true" className="h-4 w-4" />
                    <span>
                      {siteConfig.ctas.call}: {siteConfig.contact.phoneDisplay}
                    </span>
                  </TrackedExternalLink>
                </div>
              </div>

              <div className="border border-[#0A0A0A] bg-white p-6">
                <h2 className="text-lg font-bold text-[#0A0A0A]">
                  Direct Contact Details
                </h2>
                <dl className="mt-4 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                    <div>
                      <dt className="font-semibold text-neutral-600">Phone</dt>
                      <dd>
                        <TrackedExternalLink
                          href={getTelUrl()}
                          eventName="phone_call_click"
                          payload={{ source: "contact_details_card" }}
                          className="font-bold text-[#0A0A0A] hover:underline"
                        >
                          {siteConfig.contact.phoneDisplay}
                        </TrackedExternalLink>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                    <div>
                      <dt className="font-semibold text-neutral-600">Email</dt>
                      <dd>
                        <TrackedExternalLink
                          href={getMailtoUrl("Website Development Enquiry")}
                          eventName="email_click"
                          payload={{ source: "contact_details_card" }}
                          className="font-bold text-[#0A0A0A] hover:underline"
                        >
                          {siteConfig.contact.email}
                        </TrackedExternalLink>
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                    <div>
                      <dt className="font-semibold text-neutral-600">Availability</dt>
                      <dd className="text-[#0A0A0A]">
                        {siteConfig.contact.workingHours} ({siteConfig.contact.responseWindow})
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                    <div>
                      <dt className="font-semibold text-neutral-600">Service Coverage</dt>
                      <dd className="text-[#0A0A0A]">
                        Lucknow, Gorakhpur, Kanpur, Faridabad, Delhi NCR &amp; Remote India
                      </dd>
                    </div>
                  </div>
                </dl>

                {showPlaceholderNotice && (
                  <div className="mt-5 border border-neutral-400 bg-[#FEF3C7] p-3 text-xs text-[#0A0A0A]">
                    <strong>Placeholder Config Active:</strong> Phone, WhatsApp, and email values currently read fallback placeholders from{" "}
                    <code className="font-mono font-semibold">src/config/site.ts</code>. Configure real details in{" "}
                    <code className="font-mono font-semibold">.env.local</code> before production launch.
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Consultation Guidance & Expectations */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border border-[#0A0A0A] bg-neutral-50 p-6">
              <h2 className="text-lg font-bold text-[#0A0A0A]">
                1. What Happens After Submitting?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Once your enquiry arrives, I review your business vertical, existing URL (if redesigning), and required integrations. Within 4 business hours, you receive a direct WhatsApp or email reply proposing a brief 15-minute discovery call or clear next questions.
              </p>
            </div>

            <div className="border border-[#0A0A0A] bg-neutral-50 p-6">
              <h2 className="text-lg font-bold text-[#0A0A0A]">
                2. Helpful Details to Share Up Front
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li className="flex items-start gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                  <span>Your primary goal (leads, online sales, or portal workflow).</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                  <span>Target cities or national reach requirements.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                  <span>2–3 reference websites whose structure you like.</span>
                </li>
              </ul>
            </div>

            <div className="border border-[#0A0A0A] bg-neutral-50 p-6">
              <h2 className="text-lg font-bold text-[#0A0A0A]">
                3. Clear Milestones Before Payment
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                Every commercial project receives a concise scope document breaking down pages, stack choices, milestone timelines, and exact INR fee schedules. Review{" "}
                <Link href="/faq" className="font-bold underline hover:text-[#B45309]">
                  pricing &amp; ownership FAQs
                </Link>{" "}
                or browse{" "}
                <Link href="/services" className="font-bold underline hover:text-[#B45309]">
                  all 14 service scopes
                </Link>{" "}
                anytime.
              </p>
            </div>
          </div>

          <div className="mt-10 border border-[#0A0A0A] bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0A0A0A]">
              Quick Answers Before Reaching Out
            </h2>
            <div className="mt-5 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-bold text-[#0A0A0A]">
                  Do you offer a free initial consultation?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                  Yes. Your initial discovery chat via WhatsApp, phone, or email is completely free. We review your current website (if any), outline realistic scope options, and give clear timeline estimates before you commit to anything.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0A0A0A]">
                  Can you work with clients outside Uttar Pradesh and NCR?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                  Yes. While dedicated city coverage focuses on Lucknow, Gorakhpur, Kanpur, and Faridabad, remote builds run smoothly across Bengaluru, Mumbai, Pune, Delhi, Hyderabad, and international time zones with structured staging reviews.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0A0A0A]">
                  What if I only need website speed optimization or maintenance?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                  Select Maintenance &amp; Management or Speed &amp; SEO Optimization in the project form and share your live URL. I start with a technical audit before recommending scoped fixes.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0A0A0A]">
                  Will I retain domain, hosting, and source code ownership?
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-700">
                  Always. Every domain registrar account, cloud hosting instance, and Git code repository stays registered directly under your own business ownership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
