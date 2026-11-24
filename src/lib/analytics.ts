"use client";

export type ConversionEventName =
  | "whatsapp_click"
  | "phone_call_click"
  | "email_click"
  | "consultation_cta_click"
  | "contact_form_submit"
  | "contact_form_success";

export interface ConversionPayload {
  source: string;
  label?: string;
  location?: string;
  service?: string;
}

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackConversion(
  eventName: ConversionEventName,
  payload: ConversionPayload
): void {
  if (typeof window === "undefined") {
    return;
  }

  const eventData = {
    event: eventName,
    ...payload,
    page_path: window.location.pathname,
  };

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(eventData);
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventData);
  }

  window.dispatchEvent(
    new CustomEvent("navnitrai:conversion", { detail: eventData })
  );
}
