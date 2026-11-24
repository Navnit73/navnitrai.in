import Link from "next/link";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { footerColumns } from "@/data/navigation";
import { getMailtoUrl, getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

export function Footer() {
  const hasPlaceholders =
    siteConfig.contact.isPlaceholderPhone ||
    siteConfig.contact.isPlaceholderWhatsApp ||
    siteConfig.contact.isPlaceholderEmail;

  return (
    <footer className="dark-surface border-t-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand summary */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center border border-[#F59E0B] bg-[#F59E0B] font-mono text-sm font-bold text-[#0A0A0A]"
              >
                NR
              </span>
              <div>
                <p className="text-base font-bold text-white">
                  {siteConfig.brandName}
                </p>
                <p className="text-xs uppercase tracking-wider text-[#F59E0B]">
                  Independent Freelance Web Developer
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-300">
              Engineering fast, SEO-structured websites, e-commerce storefronts,
              and custom web applications for Indian businesses across Lucknow,
              Gorakhpur, Kanpur, Faridabad, and pan-India remote teams.
            </p>

            <div className="mt-6 space-y-2.5 text-sm">
              <div>
                <TrackedExternalLink
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "footer" }}
                  className="inline-flex items-center gap-2 font-medium text-[#F59E0B] hover:underline"
                >
                  <MessageSquare aria-hidden="true" className="h-4 w-4" />
                  <span>{siteConfig.ctas.primary}</span>
                </TrackedExternalLink>
              </div>
              <div>
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: "footer" }}
                  className="inline-flex items-center gap-2 text-neutral-200 hover:text-white hover:underline"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-[#F59E0B]" />
                  <span>{siteConfig.contact.phoneDisplay}</span>
                </TrackedExternalLink>
              </div>
              <div>
                <TrackedExternalLink
                  href={getMailtoUrl("Website Project Enquiry")}
                  eventName="email_click"
                  payload={{ source: "footer" }}
                  className="inline-flex items-center gap-2 text-neutral-200 hover:text-white hover:underline"
                >
                  <Mail aria-hidden="true" className="h-4 w-4 text-[#F59E0B]" />
                  <span>{siteConfig.contact.email}</span>
                </TrackedExternalLink>
              </div>
            </div>

            {hasPlaceholders && (
              <p className="mt-4 border border-neutral-700 bg-neutral-900 p-2.5 text-xs text-neutral-300">
                Config Notice: Placeholder contact details active. Update{" "}
                <code className="font-mono text-[#F59E0B]">
                  src/config/site.ts
                </code>{" "}
                or environment variables before launch.
              </p>
            )}
          </div>

          {/* Core column */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Core
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerColumns.core.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerColumns.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-neutral-300 hover:text-white hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Legal column */}
          <div className="lg:col-span-3 space-y-8">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Locations
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {footerColumns.locations.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B]">
                Trust &amp; Legal
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm">
                {footerColumns.legal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-neutral-300 hover:text-white hover:underline"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-400 sm:flex-row sm:items-center">
          <p>
            &copy; 2026 {siteConfig.brandName} ({siteConfig.domain}). Independent Freelance Web Developer.
          </p>
          <p>{siteConfig.contact.workingHours}</p>
        </div>
      </div>
    </footer>
  );
}
