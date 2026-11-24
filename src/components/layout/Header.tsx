"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageSquare, Phone, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { primaryNavLinks } from "@/data/navigation";
import { cn, getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { TrackedExternalLink } from "@/components/cta/TrackedLink";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-900 bg-white">
      {/* Top utility bar */}
      <div className="border-b border-neutral-200 bg-[#0A0A0A] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-block h-2 w-2 bg-[#F59E0B]"
            />
            <span className="font-medium text-neutral-200">
              {siteConfig.availability} — India (Lucknow, Gorakhpur, Kanpur, Faridabad &amp; Remote)
            </span>
          </div>
          <div className="flex items-center gap-4">
            <TrackedExternalLink
              href={getTelUrl()}
              eventName="phone_call_click"
              payload={{ source: "header_utility_bar" }}
              className="inline-flex items-center gap-1.5 font-medium text-neutral-200 hover:text-[#F59E0B] focus-visible:outline-2 focus-visible:outline-[#F59E0B]"
            >
              <Phone aria-hidden="true" className="h-3.5 w-3.5 text-[#F59E0B]" />
              <span>{siteConfig.contact.phoneDisplay}</span>
            </TrackedExternalLink>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#0A0A0A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center border border-[#0A0A0A] bg-[#F59E0B] font-mono text-sm font-bold text-[#0A0A0A]"
          >
            NR
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-tight">
              {siteConfig.brandName}
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-600">
              Freelance Web Developer
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-1 lg:flex">
          {primaryNavLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors border-b-2",
                  isActive
                    ? "border-[#F59E0B] text-[#0A0A0A] font-semibold"
                    : "border-transparent text-neutral-700 hover:text-[#0A0A0A] hover:border-neutral-300"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-2.5 md:flex">
          <TrackedExternalLink
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            eventName="whatsapp_click"
            payload={{ source: "header_cta" }}
            className={buttonVariants({ variant: "primary", size: "sm" })}
          >
            <MessageSquare aria-hidden="true" className="h-4 w-4" />
            <span>WhatsApp</span>
          </TrackedExternalLink>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "secondary", size: "sm" })}
          >
            {siteConfig.ctas.quote}
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation-drawer"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex min-h-11 min-w-11 items-center justify-center border border-[#0A0A0A] bg-white text-[#0A0A0A] lg:hidden cursor-pointer"
        >
          {mobileOpen ? (
            <X aria-hidden="true" className="h-5 w-5" />
          ) : (
            <Menu aria-hidden="true" className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-t border-neutral-900 bg-white lg:hidden"
        >
          <nav
            aria-label="Mobile Navigation"
            className="mx-auto flex max-w-7xl flex-col divide-y divide-neutral-200 px-4 py-2 sm:px-6"
          >
            {primaryNavLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "py-3.5 text-base font-medium",
                    isActive
                      ? "text-[#B45309] font-semibold"
                      : "text-[#0A0A0A]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-2.5 py-4">
              <TrackedExternalLink
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                eventName="whatsapp_click"
                payload={{ source: "mobile_menu_cta" }}
                className={buttonVariants({ variant: "primary", size: "md" })}
              >
                <MessageSquare aria-hidden="true" className="h-4 w-4" />
                <span>{siteConfig.ctas.primary}</span>
              </TrackedExternalLink>
              <TrackedExternalLink
                href={getTelUrl()}
                eventName="phone_call_click"
                payload={{ source: "mobile_menu_call" }}
                className={buttonVariants({ variant: "outline", size: "md" })}
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span>
                  {siteConfig.ctas.call}: {siteConfig.contact.phoneDisplay}
                </span>
              </TrackedExternalLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
