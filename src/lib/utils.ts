import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/config/site";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl(customMessage?: string): string {
  const digits = siteConfig.contact.whatsappNumber.replace(/\D/g, "");
  const message = encodeURIComponent(
    customMessage || siteConfig.contact.defaultWhatsAppMessage
  );
  return `https://wa.me/${digits}?text=${message}`;
}

export function getTelUrl(): string {
  const cleaned = siteConfig.contact.phoneRaw.replace(/[^\d+]/g, "");
  return `tel:${cleaned}`;
}

export function getMailtoUrl(subject?: string): string {
  const params = subject
    ? `?subject=${encodeURIComponent(subject)}`
    : "";
  return `mailto:${siteConfig.contact.email}${params}`;
}

export function absoluteUrl(path: string): string {
  if (!path || path === "/") {
    return siteConfig.url;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
