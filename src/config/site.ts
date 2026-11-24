export const SITE_LAST_MODIFIED = "2026-11-23";

const phoneDisplay =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY?.trim() || "+91-00000-00000";
const phoneRaw =
  process.env.NEXT_PUBLIC_PHONE_RAW?.trim() || "+910000000000";
const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "910000000000";
const contactEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@navnitrai.in";

export const siteConfig = {
  brandName: "Navnit Rai",
  legalName: "Navnit Rai — Independent Freelance Web Developer",
  domain: "navnitrai.in",
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://navnitrai.in",
  tagline: "Independent Full-Stack & Next.js Freelance Web Developer in India",
  availability:
    process.env.NEXT_PUBLIC_AVAILABILITY_LABEL?.trim() ||
    "Accepting select freelance projects",
  contact: {
    phoneDisplay,
    phoneRaw,
    whatsappNumber,
    email: contactEmail,
    isPlaceholderPhone: !process.env.NEXT_PUBLIC_PHONE_RAW,
    isPlaceholderWhatsApp: !process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    isPlaceholderEmail: !process.env.NEXT_PUBLIC_CONTACT_EMAIL,
    workingHours: "Mon–Sat, 10:00 AM – 7:00 PM IST",
    responseWindow: "Usually responds within 4 business hours",
    defaultWhatsAppMessage:
      "Hi Navnit, I visited navnitrai.in and would like to discuss a website/web development project.",
  },
  serviceAreas: [
    "Lucknow",
    "Gorakhpur",
    "Kanpur",
    "Faridabad",
    "Delhi NCR",
    "Uttar Pradesh",
    "India",
  ],
  socials: {
    github: process.env.NEXT_PUBLIC_GITHUB_URL?.trim() || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL?.trim() || "",
    x: process.env.NEXT_PUBLIC_X_URL?.trim() || "",
  },
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || "",
  },
  ctas: {
    primary: "Discuss Your Project on WhatsApp",
    secondary: "Get a Free Project Consultation",
    call: "Call Now",
    quote: "Request a Quote",
    work: "View My Work",
    start: "Start Your Project",
  },
} as const;

export type SiteConfig = typeof siteConfig;
