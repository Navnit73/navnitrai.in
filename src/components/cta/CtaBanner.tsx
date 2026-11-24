import Link from "next/link";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  TrackedExternalLink,
  TrackedRouteLink,
} from "@/components/cta/TrackedLink";

interface CtaBannerProps {
  heading?: string;
  description?: string;
  whatsappMessage?: string;
  source?: string;
  variant?: "dark" | "amber";
}

export function CtaBanner({
  heading = "Ready to Build a Faster, Lead-Generating Website?",
  description = "Share your business goals directly with Navnit Rai. Get clear architecture recommendations, transparent scope, and direct execution without agency layers.",
  whatsappMessage,
  source = "cta_banner",
  variant = "dark",
}: CtaBannerProps) {
  const isDark = variant === "dark";

  return (
    <section
      aria-label="Project Consultation Call to Action"
      className={
        isDark
          ? "dark-surface border-t-2 border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white"
          : "border-t-2 border-b-2 border-[#0A0A0A] bg-[#FEF3C7] text-[#0A0A0A]"
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p
              className={`text-xs font-bold uppercase tracking-widest ${
                isDark ? "text-[#F59E0B]" : "text-[#92400E]"
              }`}
            >
              Direct Freelance Consultation
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              {heading}
            </h2>
            <p
              className={`mt-3 max-w-2xl text-base leading-relaxed ${
                isDark ? "text-neutral-300" : "text-neutral-800"
              }`}
            >
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:col-span-5 lg:justify-end">
            <TrackedExternalLink
              href={getWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              payload={{ source }}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              <MessageSquare aria-hidden="true" className="h-4 w-4" />
              <span>{siteConfig.ctas.primary}</span>
            </TrackedExternalLink>

            <TrackedRouteLink
              href="/contact"
              eventName="consultation_cta_click"
              payload={{ source }}
              className={buttonVariants({
                variant: isDark ? "outlineDark" : "secondary",
                size: "lg",
              })}
            >
              <span>{siteConfig.ctas.secondary}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </TrackedRouteLink>

            <TrackedExternalLink
              href={getTelUrl()}
              eventName="phone_call_click"
              payload={{ source }}
              className={buttonVariants({
                variant: isDark ? "outlineDark" : "outline",
                size: "lg",
              })}
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              <span>{siteConfig.ctas.call}</span>
            </TrackedExternalLink>
          </div>
        </div>
        <div
          className={`mt-6 border-t pt-4 text-xs ${
            isDark
              ? "border-neutral-800 text-neutral-400"
              : "border-amber-300 text-neutral-700"
          }`}
        >
          <span>{siteConfig.contact.responseWindow}</span>
          <span className="mx-2" aria-hidden="true">
            •
          </span>
          <Link href="/faq" className="underline underline-offset-4 hover:text-[#F59E0B]">
            Read pricing &amp; timeline FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
