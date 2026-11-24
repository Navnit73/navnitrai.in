export interface PortfolioItem {
  id: string;
  title: string;
  category: "Business Website" | "E-Commerce" | "Web Application" | "SEO & Redesign";
  statusTag: string;
  summary: string;
  problemSolved: string;
  stack: string[];
  architectureHighlights: string[];
  caseStudySlug?: string;
}

export interface CaseStudyItem {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  industry: string;
  statusNote: string;
  targetUseCase: string;
  problem: string;
  constraints: string[];
  architectureDecisions: string[];
  conversionDesign: string[];
  seoEngineering: string[];
  implementationNotes: string[];
  outcomePlaceholderNote: string;
  techStack: string[];
  relatedServiceSlugs: string[];
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ref-b2b-catalog",
    title: "B2B Industrial Product Catalog & RFQ Portal",
    category: "Business Website",
    statusTag: "Reference Architecture",
    summary:
      "Technical blueprint built for Indian manufacturing & export suppliers (Kanpur / Faridabad use case) needing fast product spec tables and instant RFQ / WhatsApp conversion.",
    problemSolved:
      "Replaces slow PDF catalogs and unsearchable brochure pages with structured product spec URLs ready for B2B procurement searches.",
    stack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Zod API", "Schema.org"],
    architectureHighlights: [
      "Filterable SKU specification pages with canonical URL hygiene",
      "Multi-product RFQ shortlist feeding directly into validated email/webhook & WhatsApp",
      "Zero client-side page builder bloat for fast mobile loading on factory floors",
    ],
    caseStudySlug: "b2b-industrial-catalog-architecture",
  },
  {
    id: "ref-d2c-store",
    title: "High-Speed Next.js D2C E-Commerce Storefront",
    category: "E-Commerce",
    statusTag: "Reference Architecture",
    summary:
      "Mobile-first storefront blueprint designed for Indian D2C brands optimizing mobile checkout speed, UPI payment readiness, and category SEO.",
    problemSolved:
      "Eliminates multi-second mobile freezes caused by heavy theme scripts and unindexed faceted filter loops.",
    stack: ["Next.js", "React 19", "TypeScript", "Razorpay-Ready Flow", "SSR/ISR"],
    architectureHighlights: [
      "Server-rendered product pages with Product/Offer structured data",
      "Lightweight cart drawer and transparent GST/shipping calculation UX",
      "Strict canonical handling across sort and filter query parameters",
    ],
    caseStudySlug: "d2c-nextjs-ecommerce-storefront",
  },
  {
    id: "ref-clinic-portal",
    title: "Multi-City Healthcare Clinic & Appointment Portal",
    category: "Web Application",
    statusTag: "Reference Architecture",
    summary:
      "Reference architecture for specialty clinics and diagnostic centers across Lucknow and Gorakhpur needing fast department pages, doctor rosters, and appointment triage.",
    problemSolved:
      "Connects local treatment search intent cleanly to department pages and one-tap WhatsApp/call appointment booking.",
    stack: ["Next.js", "TypeScript", "PostgreSQL Schema", "LocalBusiness JSON-LD"],
    architectureHighlights: [
      "Department + city location structure with zero duplicate doorway pages",
      "Accessible WCAG 2.2 AA booking form with instant slot preference capture",
      "Structured Physician / MedicalClinic JSON-LD and breadcrumbs",
    ],
    caseStudySlug: "multi-city-healthcare-clinic-portal",
  },
  {
    id: "ref-saas-dashboard",
    title: "B2B Operations & Subscription SaaS Workspace",
    category: "Web Application",
    statusTag: "Reference Architecture",
    summary:
      "Clean dark/light high-contrast internal portal template built for multi-role approvals, client deliverables tracking, and CSV exports.",
    problemSolved:
      "Replaces scattered WhatsApp threads and manual Excel sheets with role-gated application workflows.",
    stack: ["React 19", "Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    architectureHighlights: [
      "Keyboard-accessible filterable data tables and strict server-side authorization",
      "Modular Zod schemas shared across frontend forms and API endpoints",
      "Predictable loading, empty, and validation error states",
    ],
  },
  {
    id: "ref-ppc-landing",
    title: "Zero-Bloat Campaign Landing System",
    category: "SEO & Redesign",
    statusTag: "Reference Architecture",
    summary:
      "High-contrast landing architecture engineered for Google Ads and Meta Lead campaigns with sub-second above-the-fold clarity.",
    problemSolved:
      "Fixes wasted ad spend caused by slow multi-purpose WordPress themes and unclear mobile CTAs.",
    stack: ["Next.js Static Shell", "Tailwind CSS", "GA4 / DataLayer Events"],
    architectureHighlights: [
      "Focused single-offer hierarchy with distraction-free sticky mobile CTA",
      "Built-in conversion tracking triggers for WhatsApp, tel:, and form submissions",
      "Honeypot + timestamp anti-spam protection on lead capture",
    ],
  },
  {
    id: "ref-legacy-migration",
    title: "SEO-Safe WordPress to Next.js Migration Kit",
    category: "SEO & Redesign",
    statusTag: "Reference Architecture",
    summary:
      "Structured migration workflow preserving indexed URLs, executing 1:1 301 redirects, and eliminating legacy plugin vulnerabilities.",
    problemSolved:
      "Prevents organic ranking drops during website redesigns while sharply lowering ongoing maintenance risks.",
    stack: ["Next.js", "301 Redirect Map", "XML Sitemap", "Canonical Audit"],
    architectureHighlights: [
      "Automated URL inventory & redirect matrix before DNS cutover",
      "Clean HTML5 semantic refactor and dynamic Open Graph generation",
      "Core Web Vitals validation targeting green LCP, INP, and CLS",
    ],
  },
];

export const caseStudiesData: CaseStudyItem[] = [
  {
    slug: "b2b-industrial-catalog-architecture",
    title: "B2B Manufacturing Catalog & RFQ Architecture",
    seoTitle: "B2B Industrial Catalog Architecture Case Study | Navnit Rai",
    metaDescription:
      "Technical breakdown of an RFQ-focused B2B manufacturing catalog structured for fast search, Core Web Vitals, and WhatsApp/email lead capture.",
    industry: "Industrial Manufacturing & B2B Export (Kanpur / Faridabad Profile)",
    statusNote:
      "Technical Reference Architecture — Placeholder case study slot (ready to populate with verified client metrics and screenshots in src/data/projects.ts).",
    targetUseCase:
      "Manufacturers and industrial suppliers needing procurement teams to browse technical SKUs easily and submit structured quote requests without building an unnecessary B2C checkout.",
    problem:
      "Traditional industrial websites hide specifications inside 20MB downloadable PDF brochures that Google barely indexes and mobile buyers abandon on slow connections. When overseas buyers or domestic procurement managers compare factory vendors online, slow pages and missing certification/capacity clarity cause immediate drop-offs before an RFQ is ever sent.",
    constraints: [
      "Hundreds of product variants with technical dimensions, material grades, tolerances, and MOQs",
      "Need fast page rendering across mobile networks without complex enterprise ERP synchronization overhead",
      "Both formal email RFQs (for corporate buyers) and rapid WhatsApp specification inquiries (for MSME traders) required",
      "Must avoid indexing thin filter/query combinations while keeping core category and product spec URLs discoverable",
    ],
    architectureDecisions: [
      "Modeled product categories and spec sheets as static/ISR Next.js routes so every product specification loads instantly and gets indexed cleanly.",
      "Built an interactive multi-item RFQ tray backed by local client state that pre-populates a structured quote form or formatted WhatsApp summary.",
      "Eliminated heavy UI carousel libraries in favor of clean comparison tables with crisp borders for mobile horizontal scrolling.",
      "Separated static catalog data from validated Zod API submission routes so inquiry capture stays fast and spam-protected.",
    ],
    conversionDesign: [
      "Placed persistent 'Request Quote for This Spec' and WhatsApp buttons beside technical spec tables rather than hiding a generic contact form in the footer.",
      "Added MOQ, GST readiness, target city/port, and dispatch timeline fields directly into the RFQ workflow to qualify leads before sales callbacks.",
    ],
    seoEngineering: [
      "Hierarchical BreadcrumbList schema across Category -> Subcategory -> Specification pages.",
      "Self-referencing canonical tags preventing filtered attribute URLs (`?grade=`, `?size=`) from diluting crawl budget.",
      "Structured Product schema with manufacturer, SKU, and category properties emitted directly in SSR HTML.",
    ],
    implementationNotes: [
      "Semantic HTML tables allow industrial buyers to scan tolerances and material codes cleanly even on small mobile screens.",
      "Explicit media aspect ratios and pre-sized product schematic placeholders prevent Cumulative Layout Shift (CLS) during loading.",
      "Modular data layer enables quick CSV/JSON catalog expansion without rebuilding page templates.",
    ],
    outcomePlaceholderNote:
      "Placeholder Slot: No client results are fabricated here. When deployed for your manufacturing client, verified Search Console impressions, RFQ conversion count, and Lighthouse lab/field metrics are populated here.",
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Zod", "JSON-LD"],
    relatedServiceSlugs: [
      "business-website-development",
      "custom-website-development",
      "seo-friendly-website-development",
    ],
  },
  {
    slug: "d2c-nextjs-ecommerce-storefront",
    title: "High-Speed Next.js D2C E-Commerce Architecture",
    seoTitle: "D2C Next.js E-Commerce Storefront Case Study | Navnit Rai",
    metaDescription:
      "Reference storefront architecture combining fast server-rendered catalog routes, Indian payment readiness, and mobile checkout UX.",
    industry: "Direct-to-Consumer (D2C) Retail & Commerce",
    statusNote:
      "Technical Reference Architecture — Placeholder case study slot (no fabricated revenue or conversion numbers).",
    targetUseCase:
      "Growing Indian D2C brands losing mobile ad traffic due to sluggish script-heavy storefront templates and cluttered multi-step checkouts.",
    problem:
      "Standard page-builder stores load dozens of third-party tracking and widget scripts synchronously, stalling First Contentful Paint and frustrating mobile UPI shoppers arriving from Instagram or Google Shopping ads. Unchecked query parameter URLs also create massive SEO duplication across collection pages.",
    constraints: [
      "Fast initial render on mid-range Android devices over variable 4G mobile networks",
      "Server-verified pricing, GST breakdown, COD/prepaid policy clarity, and Razorpay/UPI webhook verification",
      "Clean SEO indexation for main categories without indexing infinite sort/price URLs",
    ],
    architectureDecisions: [
      "Separated static/cached server-rendered catalog shells from lightweight client cart and variant selection islands.",
      "Implemented strict server-side recalculation of cart line items, shipping rules, and GST totals before payment order creation.",
      "Deferred non-essential marketing pixels cleanly after main content hydration so Interaction to Next Paint (INP) stays responsive.",
    ],
    conversionDesign: [
      "Displayed delivery window clarity, UPI/COD options, and concise return summary cleanly near the primary Add to Bag button.",
      "Added direct WhatsApp product assistance trigger for sizing, shade, or bulk order questions on high-consideration SKUs.",
    ],
    seoEngineering: [
      "Clean `/category/[slug]` and `/product/[slug]` topology with canonical protection against `?sort=` and `?price=` parameter duplicates.",
      "Complete Product, Offer, and BreadcrumbList JSON-LD emitted directly in SSR HTML.",
    ],
    implementationNotes: [
      "Server-verified payment webhooks isolate order confirmation state from fragile client redirect callbacks.",
      "Pre-rendered category shells enable instant back/forward browsing without losing scroll or filter context.",
      "Optimized image sizing rules prevent layout shifts on product grids over slower 4G connections.",
      "Structured shipping/COD policy disclosures directly beside primary checkout CTAs cut cart abandonment friction.",
      "Clean separation between server catalog queries and client cart state keeps main-thread hydration fast.",
    ],
    outcomePlaceholderNote:
      "Placeholder Slot: Replace with verified store Lighthouse reports, Core Web Vitals field data, and checkout completion metrics upon client launch.",
    techStack: ["Next.js", "React 19", "TypeScript", "Payment Webhooks", "Tailwind CSS"],
    relatedServiceSlugs: [
      "ecommerce-website-development",
      "nextjs-development",
      "website-speed-optimization",
    ],
  },
  {
    slug: "multi-city-healthcare-clinic-portal",
    title: "Regional Healthcare Clinic & Appointment Portal Architecture",
    seoTitle: "Multi-City Healthcare Clinic & Booking Portal Case Study | Navnit Rai",
    metaDescription:
      "Architectural blueprint for regional clinics and diagnostic centers needing local SEO landing pages, doctor schedules, and WhatsApp triage.",
    industry: "Healthcare Clinics & Diagnostics (Lucknow / Gorakhpur Profile)",
    statusNote:
      "Technical Reference Architecture — Placeholder case study slot (zero fabricated patient/client metrics).",
    targetUseCase:
      "Specialty clinics and diagnostic centers serving patients across city zones that need trust-first medical information, clear doctor timings, and instant mobile appointment requests.",
    problem:
      "Patients searching for local clinics on phones frequently land on outdated pages with broken appointment widgets, unreadable JPEG/PDF scans of doctor timings, or duplicate thin city pages that confuse both visitors and Google.",
    constraints: [
      "WCAG 2.2 AA readability, high contrast, and generous touch targets for patients across all age groups",
      "Clean architectural separation between specialty/department pages and city clinic hub pages",
      "Immediate WhatsApp and click-to-call triage alongside structured callback forms with anti-spam safeguards",
    ],
    architectureDecisions: [
      "Built dedicated hub pages per clinic branch paired with distinct specialty department pages—eliminating spammy city×symptom doorway duplication.",
      "Structured doctor availability schedules cleanly in responsive semantic HTML tables rather than embedded raster images.",
      "Created a lightweight callback & appointment preference API with honeypot validation and clear confirmation feedback.",
    ],
    conversionDesign: [
      "Top utility bar with click-to-call reception link and direct WhatsApp appointment button reachable on every page.",
      "Branch landmark directions, OPD hours, and transparent pre-visit FAQs positioned right before booking CTAs.",
    ],
    seoEngineering: [
      "MedicalClinic / LocalBusiness JSON-LD with branch-specific areaServed and contact metadata.",
      "FAQPage schema covering consultation preparation, diagnostic reporting timings, and booking steps.",
    ],
    implementationNotes: [
      "Zero dependency on heavy third-party booking iframes that block initial paint and break mobile scrolling.",
      "Clean keyboard and screen-reader navigation across department filters and accordion FAQs.",
      "Explicit branch landmark directions, OPD windows, and diagnostic report timelines reduce repetitive front-desk inquiry calls.",
      "Spam-protected appointment callback handler validates phone formatting and timestamps server-side.",
      "Canonical city-branch landing structure prevents overlapping search signals across regional specialties.",
    ],
    outcomePlaceholderNote:
      "Placeholder Slot: Replace with verified appointment volume and local search visibility data once integrated for a live healthcare partner.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "WCAG 2.2 AA", "JSON-LD"],
    relatedServiceSlugs: [
      "business-website-development",
      "web-application-development",
      "seo-friendly-website-development",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyItem | undefined {
  return caseStudiesData.find((c) => c.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Live products — real websites I designed, built and run             */
/* ------------------------------------------------------------------ */

export interface LiveProject {
  name: string;
  url: string;
  domain: string;
  category: string;
  market: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const liveProjects: LiveProject[] = [
  {
    name: "Passport Photo Checker",
    url: "https://passport-photo-checker.com/",
    domain: "passport-photo-checker.com",
    category: "Web App",
    market: "Worldwide",
    summary:
      "Upload a photo and instantly see if it meets passport, visa and ID rules for 50+ countries — then download a correctly sized photo.",
    highlights: [
      "In-browser face detection checks the photo automatically",
      "Country-specific size and background rules",
      "Print-ready PDF sheets",
    ],
    stack: ["Next.js", "MediaPipe AI", "MongoDB", "Cloudinary"],
  },
  {
    name: "PixPassport UK",
    url: "https://pixpassport.uk/",
    domain: "pixpassport.uk",
    category: "E-Commerce",
    market: "United Kingdom",
    summary:
      "Make a UK passport photo online for GOV.UK applications. Upload a phone photo, check it against HMPO guidance and pay to download.",
    highlights: [
      "Paid downloads with online checkout",
      "Automatic photo checks against official UK guidance",
      "Order emails and digital delivery",
    ],
    stack: ["Next.js", "MediaPipe AI", "Razorpay", "MongoDB"],
  },
  {
    name: "idphoto.us",
    url: "https://idphoto.us/",
    domain: "idphoto.us",
    category: "E-Commerce",
    market: "United States",
    summary:
      "Passport and ID photo maker for the U.S. and 60+ countries, with a free preview, pay-once download and plain-English guides.",
    highlights: [
      "Free preview, pay once to download",
      "Guides content built for Google search",
      "Automated email delivery",
    ],
    stack: ["Next.js", "MediaPipe AI", "Razorpay", "MongoDB"],
  },
  {
    name: "EasyFormsPDF",
    url: "https://easyformspdf.com/",
    domain: "easyformspdf.com",
    category: "Web App",
    market: "US & UK",
    summary:
      "Fill and sign official IRS forms (W-9, W-4, W-8BEN, 1099-NEC) and UK legal templates free in the browser — files never leave the user's device.",
    highlights: [
      "PDF filling and signing fully in the browser",
      "Privacy-first: no file uploads to a server",
      "Fast static pages for each form",
    ],
    stack: ["Next.js", "pdf-lib", "PDF.js", "TypeScript"],
  },
  {
    name: "MyMacStorage",
    url: "https://mymacstorage.com/",
    domain: "mymacstorage.com",
    category: "SaaS / Product Site",
    market: "Worldwide",
    summary:
      "Website and checkout for a Mac app that frees up storage — finds caches, duplicates and app leftovers safely in one scan.",
    highlights: [
      "Product landing page that sells a paid app",
      "Online payments and licence delivery",
      "Built to rank for “Mac storage full” searches",
    ],
    stack: ["Next.js", "Dodo Payments", "MongoDB"],
  },
  {
    name: "PrintSheet Template",
    url: "https://printsheet-template.com/",
    domain: "printsheet-template.com",
    category: "Web App",
    market: "Worldwide",
    summary:
      "Free online maker for photo sheets, business cards, labels, stickers and jar & bottle labels — design and print from the browser.",
    highlights: [
      "Ready templates for cards, labels and stickers",
      "QR code and barcode generation",
      "Print-ready PDF export",
    ],
    stack: ["Next.js", "jsPDF", "PayPal", "QR / Barcode"],
  },
];
