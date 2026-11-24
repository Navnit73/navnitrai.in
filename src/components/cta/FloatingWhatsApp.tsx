"use client";

import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackConversion } from "@/lib/analytics";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={siteConfig.ctas.primary}
        onClick={() =>
          trackConversion("whatsapp_click", { source: "floating_button" })
        }
        className="inline-flex min-h-12 items-center gap-2.5 border-2 border-[#0A0A0A] bg-[#F59E0B] px-4 py-3 text-sm font-bold text-[#0A0A0A] hover:bg-[#D97706] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A0A0A]"
      >
        <MessageSquare aria-hidden="true" className="h-5 w-5 shrink-0" />
        <span className="hidden sm:inline">WhatsApp Consultation</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>
    </div>
  );
}
