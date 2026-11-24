export type ServiceCategory =
  | "Core Websites"
  | "Frontend & Full-Stack"
  | "Growth, SEO & Care";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  detail: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  shortName: string;
  category: ServiceCategory;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroSummary: string;
  problemStatement: string;
  whyDirectFreelancer: string;
  idealFor: string[];
  deliverables: string[];
  architectureApproach: string;
  techStack: string[];
  process: ServiceProcessStep[];
  faqs: ServiceFaq[];
  relatedServiceSlugs: string[];
  relatedCaseStudySlug: string;
  relatedBlogSlug: string;
  whatsappPrompt: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "website-development",
    name: "Website Development",
    shortName: "Website Development",
    category: "Core Websites",
    seoTitle: "Website Development Services India | Navnit Rai Freelance Developer",
    metaDescription:
      "End-to-end website development built with modern code, clean UI, accessibility, and technical SEO to convert organic visitors into leads.",
    h1: "Website Development Services",
    primaryKeyword: "website development",
    secondaryKeywords: [
      "website development services",
      "freelance website developer india",
      "end-to-end website build",
    ],
    heroSummary:
      "Complete website builds from information architecture and UI design to deployment, structured around mobile speed, Google indexability, and direct customer enquiries.",
    problemStatement:
      "Many websites look passable on a desktop mockup but stall on 4G mobile connections, bury contact options behind slow scripts, or ship with broken heading hierarchies that prevent Google from understanding what the business sells.",
    whyDirectFreelancer:
      "Working directly with an independent engineer means the person designing your information architecture is the same person writing semantic HTML, configuring canonical tags, and tuning performance—no handoff loss between sales, junior designers, and outsourced coders.",
    idealFor: [
      "Growing businesses launching their first credible web presence",
      "Founders replacing DIY builders or outdated brochure sites",
      "Service providers who rely on phone, WhatsApp, and form enquiries",
      "Organizations needing clean source-code ownership without recurring agency lock-in",
    ],
    deliverables: [
      "Responsive mobile-first UI engineered for WCAG 2.2 AA contrast and usability",
      "Semantic HTML5 structure with single H1 hierarchy and clean internal linking",
      "WhatsApp, click-to-call, and spam-protected contact form integration",
      "Technical SEO baseline: XML sitemap, robots.txt, canonical tags, and Schema.org JSON-LD",
      "Production deployment setup with SSL, caching headers, and analytics hooks",
    ],
    architectureApproach:
      "Every site starts with a search-intent map and user conversion path before a single component is styled. Pages are server-rendered or statically pre-rendered in Next.js and TypeScript so search bots receive complete HTML immediately while visitors enjoy instant navigation.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Schema.org JSON-LD"],
    process: [
      {
        step: "01",
        title: "Scope & Conversion Mapping",
        detail:
          "Define target audiences, core pages, WhatsApp/call entry points, and required integrations without bloated features.",
      },
      {
        step: "02",
        title: "Wireframe & UI System",
        detail:
          "Establish clear typography, flat accessible components, and scannable content sections built around visitor questions.",
      },
      {
        step: "03",
        title: "Clean Full-Stack Build",
        detail:
          "Develop server-rendered pages, forms, metadata, and structured data with strict TypeScript validation.",
      },
      {
        step: "04",
        title: "Pre-Launch Audit & Handover",
        detail:
          "Verify Core Web Vitals, mobile layouts, canonical URLs, and 404/form error handling before live launch.",
      },
    ],
    faqs: [
      {
        question: "How long does a standard website development project take?",
        answer:
          "Scope dictates timeline. A focused 5–8 page business website typically takes 2–3 weeks once copy and assets are finalized, while multi-module custom portals take 4–8 weeks.",
      },
      {
        question: "Do I get full ownership of the domain, hosting, and source code?",
        answer:
          "Yes. All repositories, domains, and cloud accounts remain under your business ownership with documented handover instructions.",
      },
      {
        question: "Are WhatsApp buttons and enquiry forms included by default?",
        answer:
          "Yes. Every commercial build includes centrally configurable WhatsApp triggers, click-to-call links, and validated contact forms.",
      },
      {
        question: "Can you help structure content if my existing website copy is weak?",
        answer:
          "Yes. Every engagement includes structural copy guidance so headings, service breakdowns, and CTAs answer what Indian buyers actually look for.",
      },
    ],
    relatedServiceSlugs: [
      "business-website-development",
      "custom-website-development",
      "seo-friendly-website-development",
      "full-stack-development",
    ],
    relatedCaseStudySlug: "b2b-industrial-catalog-architecture",
    relatedBlogSlug: "website-development-cost-india-2026",
    whatsappPrompt:
      "Hi Navnit, I need end-to-end website development for my business.",
  },
  {
    slug: "business-website-development",
    name: "Business Website Development",
    shortName: "Business Websites",
    category: "Core Websites",
    seoTitle: "Business Website Development India | Lead-Focused Company Sites",
    metaDescription:
      "Professional business website development for Indian SMEs, B2B manufacturers, clinics, and service firms engineered for trust and enquiries.",
    h1: "Business Website Development",
    primaryKeyword: "business website development",
    secondaryKeywords: [
      "company website developer india",
      "corporate website development",
      "b2b lead generation website",
    ],
    heroSummary:
      "Credible, conversion-focused websites built for Indian SMEs, clinics, B2B suppliers, consultants, and service enterprises that need steady enquiries rather than digital brochures.",
    problemStatement:
      "Most Indian SME company sites rely on generic multi-purpose templates overloaded with stock clichés, hidden phone numbers, and vague service claims that fail to build buyer confidence.",
    whyDirectFreelancer:
      "Instead of paying agency account-manager overhead for a recycled theme, you work directly with a developer who structures service pages, trust markers, and enquiry friction-reduction around how your customers evaluate vendors.",
    idealFor: [
      "B2B manufacturers, distributors, and industrial suppliers",
      "Healthcare clinics, diagnostic labs, and specialist practices",
      "Law, accounting, architecture, and B2B consulting practices",
      "Education institutes and regional service providers across UP and NCR",
    ],
    deliverables: [
      "Clear service architecture with dedicated landing pages per core offering",
      "Trust-first layout: verifiable credentials, transparent process, and structured FAQs",
      "Frictionless RFQ, appointment, or consultation forms with spam filtering",
      "LocalBusiness / ProfessionalService JSON-LD structured data",
      "Mobile-thumb-friendly WhatsApp and click-to-call sticky bar",
    ],
    architectureApproach:
      "I organize business sites around buyer intent: immediate value clarity above the fold, proof of process, specific deliverables, objection-handling FAQs, and low-friction enquiry options tailored for both desktop procurement teams and mobile founders.",
    techStack: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Zod Validation"],
    process: [
      {
        step: "01",
        title: "Customer & Offer Audit",
        detail:
          "Identify which services bring your best margins and what questions buyers ask before calling.",
      },
      {
        step: "02",
        title: "Lead Funnel Design",
        detail:
          "Structure CTAs for WhatsApp quick chats, formal RFQ forms, and direct phone consultations.",
      },
      {
        step: "03",
        title: "Modular Page Build",
        detail:
          "Build fast static/SSR service pages, team/about credentials, and trust documentation.",
      },
      {
        step: "04",
        title: "Local & Technical SEO Setup",
        detail:
          "Align metadata, schema, and regional city signals to support organic discovery.",
      },
    ],
    faqs: [
      {
        question: "What makes a business website generate more enquiries?",
        answer:
          "Clarity over decoration: visitors immediately see what you do, who you serve, how your process works, and can contact you via WhatsApp, phone, or form in under 5 seconds.",
      },
      {
        question: "Can I add more service pages or team updates later?",
        answer:
          "Yes. Content structures are modular so new services, FAQs, or case studies can be added cleanly without breaking design consistency.",
      },
      {
        question: "Do you build B2B catalogs without full e-commerce checkout?",
        answer:
          "Yes. Many manufacturers in Kanpur, Faridabad, and Lucknow prefer product specification catalogs hooked directly to Request-for-Quote (RFQ) forms and WhatsApp.",
      },
      {
        question: "Will the site integrate with our Google Business Profile?",
        answer:
          "Yes. Landing URLs, NAP consistency, and LocalBusiness/ProfessionalService schema are aligned to reinforce your local search presence.",
      },
    ],
    relatedServiceSlugs: [
      "website-development",
      "seo-friendly-website-development",
      "landing-page-development",
      "website-maintenance-management",
    ],
    relatedCaseStudySlug: "multi-city-healthcare-clinic-portal",
    relatedBlogSlug: "seo-checklist-for-local-business-websites-india",
    whatsappPrompt:
      "Hi Navnit, I want to build a lead-focused business website for my company.",
  },
  {
    slug: "custom-website-development",
    name: "Custom Website Development",
    shortName: "Custom Websites",
    category: "Core Websites",
    seoTitle: "Custom Website Development India | Bespoke Architecture — Navnit Rai",
    metaDescription:
      "Custom website development without bloated templates. Clean TypeScript code, tailored workflows, bespoke integrations, and full ownership.",
    h1: "Custom Website Development",
    primaryKeyword: "custom website development",
    secondaryKeywords: [
      "bespoke website development india",
      "custom coded website",
      "custom software developer",
    ],
    heroSummary:
      "Purpose-built websites coded from scratch when off-the-shelf themes and rigid CMS plugins cannot support your workflows, performance targets, or brand differentiation.",
    problemStatement:
      "Pre-made themes ship megabytes of unused CSS and JavaScript, break whenever plugins update, and force unique business workflows into awkward workarounds.",
    whyDirectFreelancer:
      "You collaborate straight with the engineer writing every component, API route, and database integration—ensuring tight security, predictable maintenance, and zero licensing bloat.",
    idealFor: [
      "Businesses outgrowing slow WordPress/Elementor or drag-and-drop builders",
      "Companies needing interactive calculators, multi-step quote engines, or CRM sync",
      "Brands requiring a crisp, distinct UI system without template fatigue",
      "Startups preparing a scalable codebase ready for future web app modules",
    ],
    deliverables: [
      "100% custom TypeScript & React/Next.js codebase with zero bloated theme dependencies",
      "Bespoke interactive modules (calculators, quote estimators, dynamic directories)",
      "Custom API integrations with CRMs, webhooks, ERPs, or payment gateways",
      "Strict input validation, security headers, and zero-trust form handling",
      "Clean Git repository documentation for long-term engineering handoff",
    ],
    architectureApproach:
      "I design a clean domain model and component library tailored strictly to what your product needs—keeping client JavaScript minimal, enforcing strict types across UI and API boundaries, and eliminating third-party plugin vulnerabilities.",
    techStack: ["Next.js", "TypeScript", "React 19", "Tailwind CSS v4", "REST / GraphQL APIs"],
    process: [
      {
        step: "01",
        title: "Technical Requirements Spec",
        detail:
          "Document custom data flows, user journeys, third-party APIs, and security constraints.",
      },
      {
        step: "02",
        title: "Design System & Architecture",
        detail:
          "Establish reusable UI tokens, flat layout grids, and server/client data boundaries.",
      },
      {
        step: "03",
        title: "Iterative Milestones",
        detail:
          "Deliver working staging previews per milestone so you inspect real pages early.",
      },
      {
        step: "04",
        title: "QA & Production Rollout",
        detail:
          "Run typechecks, accessibility verification, security headers check, and deployment.",
      },
    ],
    faqs: [
      {
        question: "When should a business choose custom website development over WordPress?",
        answer:
          "Choose custom development when speed, security, bespoke quote/booking flows, high Core Web Vitals, or long-term code maintainability matter more than drag-and-drop plugin widgets.",
      },
      {
        question: "Can we still edit text or add blog posts easily?",
        answer:
          "Yes. Custom builds can connect cleanly to headless CMS options, Markdown/MDX repositories, or tailored admin panels depending on your editorial workflow.",
      },
      {
        question: "Is custom development harder to maintain later?",
        answer:
          "Quite the opposite when written cleanly in TypeScript and Next.js—there are no fragile plugin conflicts breaking after routine updates.",
      },
      {
        question: "Can custom websites integrate with Razorpay, Zoho, or WhatsApp APIs?",
        answer:
          "Yes. Server-side Next.js route handlers connect securely to Indian payment gateways, CRMs, webhooks, and messaging providers.",
      },
    ],
    relatedServiceSlugs: [
      "nextjs-development",
      "full-stack-development",
      "web-application-development",
      "website-speed-optimization",
    ],
    relatedCaseStudySlug: "b2b-industrial-catalog-architecture",
    relatedBlogSlug: "nextjs-vs-wordpress-indian-business-websites",
    whatsappPrompt:
      "Hi Navnit, I need a custom-coded website tailored to specific business workflows.",
  },
  {
    slug: "ecommerce-website-development",
    name: "E-Commerce Website Development",
    shortName: "E-Commerce",
    category: "Core Websites",
    seoTitle: "E-Commerce Website Development India | Fast Stores & Checkout UX",
    metaDescription:
      "Conversion-focused e-commerce website development with fast mobile catalogs, UPI/card checkout readiness, inventory workflows, and product SEO.",
    h1: "E-Commerce Website Development",
    primaryKeyword: "ecommerce website development",
    secondaryKeywords: [
      "online store development india",
      "next.js ecommerce developer",
      "d2c storefront development",
    ],
    heroSummary:
      "High-speed online storefronts built for Indian D2C brands, wholesalers, and retail stores—designed around mobile browsing, UPI-first checkout readiness, and clean category SEO.",
    problemStatement:
      "Slow mobile product pages, confusing shipping/COD expectations, and cluttered checkout screens kill conversion rates on Indian 4G networks where most shoppers browse from phones.",
    whyDirectFreelancer:
      "You get an engineer who tunes product listing load times, faceted category canonicals, payment gateway reliability, and checkout clarity without forcing expensive monthly app subscriptions for basic store functionality.",
    idealFor: [
      "D2C consumer brands scaling direct sales beyond marketplaces",
      "Wholesalers and distributors digitizing dealer/retailer ordering",
      "Regional retail businesses in Lucknow, Kanpur, Gorakhpur, and NCR launching online catalogs",
      "Stores migrating off slow WooCommerce setups to faster architectures",
    ],
    deliverables: [
      "Fast mobile-first catalog, filtering, and product detail architecture",
      "Razorpay / Cashfree / UPI / Stripe payment integration readiness",
      "Cart drawer, clear GST/shipping summaries, and streamlined checkout UX",
      "Clean category/product URLs, Product schema markup, and canonical pagination",
      "Order notification hooks, inventory status management, and admin workflows",
    ],
    architectureApproach:
      "Product catalog and category routes are server-rendered or statically revalidated for sub-second first load and full search engine crawlability, while cart and checkout interactions execute smoothly on the client with strict server-side price/order validation.",
    techStack: ["Next.js", "TypeScript", "Stripe / Razorpay APIs", "PostgreSQL / Headless Commerce"],
    process: [
      {
        step: "01",
        title: "Catalog & Checkout Blueprint",
        detail:
          "Map SKU variants, shipping zones, COD/prepaid rules, and GST invoicing requirements.",
      },
      {
        step: "02",
        title: "Storefront & Product UX",
        detail:
          "Design high-contrast product cards, transparent pricing/delivery signals, and thumb-friendly mobile navigation.",
      },
      {
        step: "03",
        title: "Checkout & Payment Integration",
        detail:
          "Implement cart state, server-verified totals, payment webhooks, and confirmation workflows.",
      },
      {
        step: "04",
        title: "Product SEO & Speed QA",
        detail:
          "Configure clean canonicals, Product/Offer JSON-LD, image optimization, and checkout testing.",
      },
    ],
    faqs: [
      {
        question: "Do you build custom Next.js storefronts as well as headless/Shopify integrations?",
        answer:
          "Yes. Depending on your SKU count and operations team, I build custom Next.js + PostgreSQL/Stripe/Razorpay storefronts or fast custom storefronts backed by Shopify/headless CMS APIs.",
      },
      {
        question: "Are Indian payment methods like UPI, netbanking, and cards supported?",
        answer:
          "Yes. Integrations follow Razorpay/Cashfree/PayU patterns supporting UPI, cards, wallets, and webhook-verified order status updates.",
      },
      {
        question: "How do you prevent SEO duplicate content on filtered product pages?",
        answer:
          "Filtered and paginated views use disciplined canonical rules and clean category landing pages so search equity consolidates instead of diluting.",
      },
      {
        question: "Can you support B2B bulk/MOQ pricing alongside retail checkout?",
        answer:
          "Yes. Custom pricing tiers, minimum order quantities, or hybrid checkout + RFQ workflows can be built cleanly.",
      },
    ],
    relatedServiceSlugs: [
      "custom-website-development",
      "nextjs-development",
      "website-speed-optimization",
      "landing-page-development",
    ],
    relatedCaseStudySlug: "d2c-nextjs-ecommerce-storefront",
    relatedBlogSlug: "how-to-choose-ecommerce-platform-india",
    whatsappPrompt:
      "Hi Navnit, I want to discuss building or upgrading an e-commerce website.",
  },
  {
    slug: "nextjs-development",
    name: "Next.js Development",
    shortName: "Next.js Development",
    category: "Frontend & Full-Stack",
    seoTitle: "Next.js Development Services India | App Router & SSR — Navnit Rai",
    metaDescription:
      "Senior freelance Next.js developer building App Router, SSR/SSG sites, fast web applications, and SEO-first architectures in TypeScript.",
    h1: "Next.js Development Services",
    primaryKeyword: "next.js development",
    secondaryKeywords: [
      "next.js developer india",
      "app router development services",
      "freelance next.js engineer",
    ],
    heroSummary:
      "Production-grade Next.js App Router engineering combining Server Components, static/ISR performance, clean Metadata API SEO, and full-stack Route Handlers.",
    problemStatement:
      "Many React teams adopt Next.js but accidentally turn entire routes into client-side `'use client'` trees—losing SSR SEO benefits, inflating JavaScript bundles, and causing hydration jank.",
    whyDirectFreelancer:
      "You hire a developer fluent in modern Next.js App Router architecture—Server vs Client boundaries, streaming Suspense, Metadata/OG generation, and secure server mutations—without paying agency retainers.",
    idealFor: [
      "SEO-critical business sites and content hubs migrating from slow SPAs or WordPress",
      "SaaS products needing a unified marketing site and authenticated application shell",
      "Startups building fast MVPs with Next.js Route Handlers and PostgreSQL",
      "Teams fixing slow Core Web Vitals or misconfigured legacy Pages Router codebases",
    ],
    deliverables: [
      "App Router architecture with strict Server/Client component separation",
      "Static generation (SSG), Incremental Static Regeneration (ISR), or Cache Components tuning",
      "Dynamic XML sitemaps, Metadata API canonicals, and edge/dynamic OG images",
      "Zod-validated API Route Handlers and Server Actions",
      "Core Web Vitals optimization targeting crisp LCP, low INP, and zero CLS",
    ],
    architectureApproach:
      "I keep interactive islands focused and small while rendering content, navigation, metadata, and structured data directly on the server. Data fetching, image sizing, and font loading follow strict Next.js performance defaults.",
    techStack: ["Next.js App Router", "React 19", "TypeScript", "Tailwind CSS v4", "Vercel / Node"],
    process: [
      {
        step: "01",
        title: "Rendering Strategy Design",
        detail:
          "Classify every route as static, cached/ISR, or request-dynamic to maximize speed and freshness.",
      },
      {
        step: "02",
        title: "Typed Component Architecture",
        detail:
          "Build modular UI primitives and clean server data loaders with strict TypeScript contracts.",
      },
      {
        step: "03",
        title: "SEO & API Integration",
        detail:
          "Wire Metadata API, JSON-LD, dynamic sitemaps, and validated backend endpoints.",
      },
      {
        step: "04",
        title: "Bundle & Vitals Profiling",
        detail:
          "Audit client bundle weight, image dimensions, caching headers, and production build output.",
      },
    ],
    faqs: [
      {
        question: "Do you work with the modern Next.js App Router as well as older Pages Router migrations?",
        answer:
          "Yes. New builds use the latest Next.js App Router cleanly, and I also upgrade legacy Pages Router or Create React App projects incrementally.",
      },
      {
        question: "Why is Next.js better for SEO than a standard React SPA?",
        answer:
          "Next.js sends fully rendered HTML, title tags, canonicals, and structured data directly in the initial response rather than making search crawlers wait for client-side JavaScript.",
      },
      {
        question: "Can Next.js run on our own VPS or AWS instead of Vercel?",
        answer:
          "Yes. Next.js builds cleanly for Docker, standalone Node servers on AWS/DigitalOcean/Hostinger VPS, or managed edge platforms.",
      },
      {
        question: "Can you join an existing engineering team for a Next.js sprint?",
        answer:
          "Yes. I regularly collaborate via GitHub/GitLab PRs, code reviews, and structured sprint scopes.",
      },
    ],
    relatedServiceSlugs: [
      "react-development",
      "full-stack-development",
      "website-speed-optimization",
      "seo-friendly-website-development",
    ],
    relatedCaseStudySlug: "d2c-nextjs-ecommerce-storefront",
    relatedBlogSlug: "nextjs-vs-wordpress-indian-business-websites",
    whatsappPrompt:
      "Hi Navnit, I am looking for a Next.js developer for my project.",
  },
  {
    slug: "react-development",
    name: "React.js Development",
    shortName: "React.js Development",
    category: "Frontend & Full-Stack",
    seoTitle: "React.js Development Services India | Modular UI Engineering",
    metaDescription:
      "Freelance React.js developer building responsive interactive frontends, complex dashboards, accessible component systems, and API integrations.",
    h1: "React.js Development Services",
    primaryKeyword: "react.js development",
    secondaryKeywords: [
      "react developer india",
      "react frontend development",
      "react component library engineer",
    ],
    heroSummary:
      "Clean, maintainable React interfaces for dashboards, interactive SaaS workflows, customer portals, and modular design systems built in strict TypeScript.",
    problemStatement:
      "Unstructured React codebases quickly tangle into prop-drilling, unpredictable re-renders, inaccessible custom dropdowns, and fragile state bugs as features grow.",
    whyDirectFreelancer:
      "You get senior-level React architecture—predictable state flow, accessible keyboard-friendly UI controls, and clean REST/GraphQL data handling—delivered rapidly without onboarding a large team.",
    idealFor: [
      "Product startups building interactive client portals or analytics dashboards",
      "Teams needing a clean React component system aligned to Figma specs",
      "Businesses upgrading legacy jQuery or older frontend interfaces to React + TypeScript",
      "Founders needing extra senior frontend capacity for product releases",
    ],
    deliverables: [
      "TypeScript React UI components with predictable state and error boundaries",
      "Accessible forms, tables, filters, modals, and keyboard navigation (WCAG 2.2 AA)",
      "Clean API integration layer with loading, empty, and retry states",
      "Reusable Tailwind CSS design tokens with consistent responsive behavior",
      "Performance tuning to eliminate unnecessary re-renders and heavy dependencies",
    ],
    architectureApproach:
      "Components stay small, composable, and cleanly separated between presentation, state logic, and API adapters. Accessibility semantics (native buttons, ARIA attributes, focus management) are built in from day one rather than patched later.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Zod", "REST / GraphQL"],
    process: [
      {
        step: "01",
        title: "UI & State Inventory",
        detail:
          "Audit screens, data shapes, edge states, and interactive workflows before coding.",
      },
      {
        step: "02",
        title: "Component System Foundation",
        detail:
          "Build accessible primitives (inputs, buttons, tables, navigation) with strict types.",
      },
      {
        step: "03",
        title: "Feature & API Wiring",
        detail:
          "Connect real endpoints with optimistic feedback, validation, and error handling.",
      },
      {
        step: "04",
        title: "Cross-Device Verification",
        detail:
          "Test keyboard navigation, mobile breakpoints, and clean lint/type checks.",
      },
    ],
    faqs: [
      {
        question: "Should I choose React.js or Next.js for my project?",
        answer:
          "If public SEO and fast first-page load matter (marketing pages, catalogs, content), Next.js is ideal. For authenticated internal dashboards or embedding inside an existing backend, standalone React works great.",
      },
      {
        question: "Can you work from our existing Figma designs or API documentation?",
        answer:
          "Yes. I convert Figma frames or product specs directly into responsive, pixel-faithful React + Tailwind components.",
      },
      {
        question: "Do you refactor messy existing React codebases?",
        answer:
          "Yes—cleaning up state bugs, adding TypeScript safety, fixing accessibility issues, and shrinking bundle sizes.",
      },
    ],
    relatedServiceSlugs: [
      "nextjs-development",
      "vuejs-development",
      "web-application-development",
      "full-stack-development",
    ],
    relatedCaseStudySlug: "b2b-industrial-catalog-architecture",
    relatedBlogSlug: "freelance-web-developer-vs-agency-india",
    whatsappPrompt:
      "Hi Navnit, I need a freelance React.js developer for a frontend project.",
  },
  {
    slug: "vuejs-development",
    name: "Vue.js Development",
    shortName: "Vue.js Development",
    category: "Frontend & Full-Stack",
    seoTitle: "Vue.js Development Services India | Clean Frontend & Nuxt Apps",
    metaDescription:
      "Independent Vue.js developer creating fast, maintainable Vue 3 and Nuxt interfaces, admin dashboards, and legacy frontend migrations.",
    h1: "Vue.js Development Services",
    primaryKeyword: "vue.js development",
    secondaryKeywords: [
      "vue developer india",
      "nuxt vue frontend development",
      "vue 3 composition api developer",
    ],
    heroSummary:
      "Pragmatic Vue 3 and Nuxt frontend engineering for SaaS portals, internal admin tools, and crisp single-page or server-rendered interfaces.",
    problemStatement:
      "Many Vue 2 applications are stuck on end-of-life dependencies or cluttered Options API components that slow down feature delivery and complicate TypeScript adoption.",
    whyDirectFreelancer:
      "Work directly with a polyglot frontend engineer comfortable across modern Vue 3 Composition API, Pinia state, Nuxt SSR, and clean REST integrations—ideal for small product teams that want dependable delivery.",
    idealFor: [
      "Businesses running existing Laravel + Vue or Node + Vue applications needing feature expansion",
      "Startups migrating legacy Vue 2 apps safely to Vue 3 + Vite + TypeScript",
      "SaaS teams building Nuxt marketing/application portals",
      "Operations teams needing crisp Vue admin dashboards and data tables",
    ],
    deliverables: [
      "Vue 3 Composition API (`<script setup>`) components with TypeScript",
      "Pinia state management and clean typed API service layers",
      "Nuxt 3 SSR/SEO implementation where public organic search visibility is needed",
      "Vue 2 to Vue 3 migration planning and dependency cleanup",
      "Responsive accessible layouts built with Tailwind CSS",
    ],
    architectureApproach:
      "I favor clean composables, strict component props/emits typing, and lean Vite/Nuxt bundles—avoiding unnecessary plugin bloat so pages stay responsive even on modest hardware.",
    techStack: ["Vue 3", "Nuxt", "TypeScript", "Pinia", "Tailwind CSS", "Vite"],
    process: [
      {
        step: "01",
        title: "Codebase or Spec Review",
        detail:
          "Inspect existing Vue versions, API endpoints, or UI specs to plan clean deliverables.",
      },
      {
        step: "02",
        title: "Composable & Store Design",
        detail:
          "Structure shared composables, Pinia stores, and validated form models.",
      },
      {
        step: "03",
        title: "UI & Endpoint Implementation",
        detail:
          "Build responsive views with clear loading, empty, and error feedback.",
      },
      {
        step: "04",
        title: "Build Optimization & Handoff",
        detail:
          "Verify production Vite/Nuxt bundle output, route transitions, and documentation.",
      },
    ],
    faqs: [
      {
        question: "Can you add new features to an existing Laravel + Vue or Django + Vue app?",
        answer:
          "Yes. Vue pairs naturally with existing REST/JSON backends like Laravel, Node/Express, or Django.",
      },
      {
        question: "Do you handle Vue 2 to Vue 3 upgrades?",
        answer:
          "Yes. I audit deprecated packages, migrate critical components cleanly to Composition API, and test workflows thoroughly.",
      },
      {
        question: "When should I use Nuxt vs standard Vue SPA?",
        answer:
          "Use Nuxt when search engines need pre-rendered HTML for public pages; use a Vite + Vue 3 SPA for authenticated dashboards and internal tools.",
      },
    ],
    relatedServiceSlugs: [
      "react-development",
      "nextjs-development",
      "web-application-development",
      "full-stack-development",
    ],
    relatedCaseStudySlug: "multi-city-healthcare-clinic-portal",
    relatedBlogSlug: "freelance-web-developer-vs-agency-india",
    whatsappPrompt:
      "Hi Navnit, I need help with a Vue.js / Nuxt frontend project.",
  },
  {
    slug: "landing-page-development",
    name: "Landing Page Development",
    shortName: "Landing Pages",
    category: "Core Websites",
    seoTitle: "Landing Page Development Services | High-Converting Campaign Pages",
    metaDescription:
      "Fast, mobile-first landing page development designed for Google Ads, Meta Ads, and WhatsApp/form lead capture without bloat.",
    h1: "Landing Page Development",
    primaryKeyword: "landing page development",
    secondaryKeywords: [
      "high converting landing page developer",
      "campaign landing page india",
      "lead generation landing page",
    ],
    heroSummary:
      "Focused single-goal landing pages built to convert paid ad clicks (Google Ads, Meta Ads) and social traffic into WhatsApp chats, phone calls, and qualified leads.",
    problemStatement:
      "Sending paid ad traffic to a slow homepage full of navigation distractions wastes ad spend. Visitors bounce in seconds when the offer isn't crystal clear or forms feel clunky on mobile.",
    whyDirectFreelancer:
      "I craft landing pages around Conversion Rate Optimization (CRO) fundamentals—message match, scannable objection handling, instant load under 1 second, and clean GA4/Pixel event hooks—not generic drag-and-drop templates.",
    idealFor: [
      "Businesses running Google Search or Meta Lead Ads in Lucknow, NCR, or pan-India",
      "Product launches, SaaS waitlists, workshops, and high-ticket consultation offers",
      "Clinics, coaching centers, and real-estate/B2B campaigns needing dedicated ad pages",
      "Founders testing a new service line before investing in a full multi-page site",
    ],
    deliverables: [
      "Focused single-goal layout with distraction-free conversion path",
      "Clear above-the-fold value proposition paired with WhatsApp & form actions",
      "Lightweight sub-second page load with zero bloated page-builder scripts",
      "Structured FAQ and process sections addressing common buyer objections",
      "Event hooks ready for Google Ads, GA4, and Meta Pixel conversion tracking",
    ],
    architectureApproach:
      "Every landing page minimizes external scripts and layout shifts so mobile visitors arriving from paid clicks see the headline, trust context, and enquiry CTA immediately—paired with clean analytics events on every CTA click and form submit.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Conversion Event Hooks"],
    process: [
      {
        step: "01",
        title: "Offer & Ad Message Alignment",
        detail:
          "Align headline and CTA copy directly with the keywords and ads bringing visitors in.",
      },
      {
        step: "02",
        title: "CRO Section Blueprint",
        detail:
          "Structure hero proof, problem/solution clarity, deliverables, FAQs, and form placement.",
      },
      {
        step: "03",
        title: "Ultra-Fast Build",
        detail:
          "Code static/edge-cached HTML with crisp responsive mobile sizing and zero bloat.",
      },
      {
        step: "04",
        title: "Tracking & Launch QA",
        detail:
          "Verify form submission, WhatsApp pre-filled messages, and analytics event triggers.",
      },
    ],
    faqs: [
      {
        question: "How fast can a custom landing page be delivered?",
        answer:
          "Most single-offer campaign landing pages can be designed, coded, and verified within 4–7 days once your offer details and assets are ready.",
      },
      {
        question: "Can the landing page integrate with Google Ads and Meta conversion tracking?",
        answer:
          "Yes. Buttons, phone clicks, WhatsApp clicks, and form completions dispatch clean events ready for GA4, GTM, Google Ads, and Meta Pixel.",
      },
      {
        question: "Should my landing page be indexed on Google or noindexed?",
        answer:
          "For organic service landing pages, we index with canonical metadata; for duplicate PPC A/B test variants, we configure noindex cleanly to avoid duplicate content issues.",
      },
    ],
    relatedServiceSlugs: [
      "business-website-development",
      "website-speed-optimization",
      "website-redesign",
      "seo-friendly-website-development",
    ],
    relatedCaseStudySlug: "multi-city-healthcare-clinic-portal",
    relatedBlogSlug: "website-development-cost-india-2026",
    whatsappPrompt:
      "Hi Navnit, I need a high-converting landing page for an upcoming campaign.",
  },
  {
    slug: "website-redesign",
    name: "Website Redesign",
    shortName: "Website Redesign",
    category: "Growth, SEO & Care",
    seoTitle: "Website Redesign Services India | Speed, UX & SEO Preservation",
    metaDescription:
      "Modernize outdated, slow websites with a structured website redesign that upgrades mobile UX, Core Web Vitals, and conversion rates safely.",
    h1: "Website Redesign Services",
    primaryKeyword: "website redesign",
    secondaryKeywords: [
      "website revamp services india",
      "modernize business website",
      "redesign website without losing seo",
    ],
    heroSummary:
      "Upgrade dated, slow, or low-converting websites into modern, crisp, mobile-ready platforms while carefully preserving existing URL equity and search rankings.",
    problemStatement:
      "Many redesigns look fresher on launch day but silently crash organic traffic because developers forget 301 redirects, drop key headings, break canonicals, or replace lightweight pages with heavy scripts.",
    whyDirectFreelancer:
      "I treat redesign as both a UI/UX upgrade and a disciplined technical migration—auditing your current indexed URLs, mapping every redirect, fixing conversion leaks, and modernizing the stack safely.",
    idealFor: [
      "Established businesses embarrassed by a 5+ year old non-responsive site",
      "Companies suffering high mobile bounce rates and weak form/WhatsApp leads",
      "Sites trapped on sluggish WordPress themes or insecure outdated plugins",
      "Brands re-positioning for higher-ticket B2B or national clients",
    ],
    deliverables: [
      "Pre-redesign audit of existing URLs, rankings, UX bottlenecks, and conversion gaps",
      "Modern, flat, high-contrast UI/UX redesign aligned to current brand credibility",
      "Complete 301 redirect mapping and canonical verification to protect Google rankings",
      "Performance overhaul eliminating legacy render-blocking scripts",
      "Updated Schema.org markup, XML sitemap, and mobile CTA enhancements",
    ],
    architectureApproach:
      "Before replacing old templates, I inventory every live URL and search-performing page so nothing valuable disappears on launch. New layouts prioritize scannability, accessible typography, and fast server rendering.",
    techStack: ["Next.js", "TypeScript", "301 Redirect Mapping", "Tailwind CSS", "SEO Audit"],
    process: [
      {
        step: "01",
        title: "Legacy Site & Traffic Audit",
        detail:
          "Catalog existing URLs, top landing pages, broken links, and conversion friction points.",
      },
      {
        step: "02",
        title: "URL & Information Architecture Map",
        detail:
          "Preserve high-value slugs or configure exact 1-to-1 301 redirects for restructured URLs.",
      },
      {
        step: "03",
        title: "Modern Build & Content Refresh",
        detail:
          "Rebuild frontend and backend cleanly with fast mobile UX and clear CTAs.",
      },
      {
        step: "04",
        title: "Safe Cutover & Post-Launch Crawl",
        detail:
          "Verify redirects, sitemaps, canonicals, and form flows immediately after DNS cutover.",
      },
    ],
    faqs: [
      {
        question: "Will redesigning my website hurt my current Google rankings?",
        answer:
          "Not when migrated properly. By mapping every old URL to its new destination with clean 301 redirects, preserving semantic content intent, and improving Core Web Vitals, rankings typically stabilize and improve.",
      },
      {
        question: "Can you migrate an old WordPress or PHP site to Next.js?",
        answer:
          "Yes. Content, media, and URL paths can be migrated cleanly while keeping redirects intact.",
      },
      {
        question: "Do I lose my existing email accounts when redesigning the website?",
        answer:
          "No. Website hosting/DNS updates keep MX/SPF/DKIM email records untouched so business emails continue running uninterrupted.",
      },
    ],
    relatedServiceSlugs: [
      "website-speed-optimization",
      "seo-friendly-website-development",
      "business-website-development",
      "website-maintenance-management",
    ],
    relatedCaseStudySlug: "b2b-industrial-catalog-architecture",
    relatedBlogSlug: "website-redesign-without-losing-seo-rankings",
    whatsappPrompt:
      "Hi Navnit, I want to redesign my existing website while protecting SEO and improving leads.",
  },
  {
    slug: "website-maintenance-management",
    name: "Website Maintenance and Management",
    shortName: "Maintenance & Management",
    category: "Growth, SEO & Care",
    seoTitle: "Website Maintenance and Management Services India | Navnit Rai",
    metaDescription:
      "Reliable ongoing website maintenance, security updates, performance monitoring, backups, and feature updates from an independent developer.",
    h1: "Website Maintenance and Management",
    primaryKeyword: "website maintenance and management",
    secondaryKeywords: [
      "website care plan india",
      "ongoing website support",
      "website management freelancer",
    ],
    heroSummary:
      "Proactive technical care, dependency updates, uptime checks, bug fixes, and regular content or feature updates so your website never silently breaks or goes stale.",
    problemStatement:
      "Websites often degrade months after launch: SSL certificates lapse, contact forms silently fail, dependencies fall behind on security patches, or minor layout tweaks wait weeks for an unresponsive freelancer.",
    whyDirectFreelancer:
      "You get dependable direct engineering support on transparent monthly or ad-hoc retainers—meaning small edits, new landing sections, and urgent fixes happen quickly without ticket queues.",
    idealFor: [
      "Businesses without an in-house web developer",
      "Companies running active marketing campaigns needing regular landing updates",
      "E-commerce and service sites requiring uptime, form, and security checks",
      "Founders taking over a codebase left unmaintained by a previous vendor",
    ],
    deliverables: [
      "Scheduled dependency, security, and framework patches",
      "Periodic contact form, WhatsApp link, SSL, and broken-link verification",
      "Automated off-site code and database backup workflows",
      "Monthly content updates, new service/blog uploads, and landing tweaks",
      "Uptime monitoring and Core Web Vitals regression checks",
    ],
    architectureApproach:
      "Maintenance runs on disciplined Git workflows and staging checks—even small content or package updates are verified before hitting production so your live customer-facing site never suffers surprise downtime.",
    techStack: ["Next.js / React", "Node.js", "Git CI/CD", "Cloud Hosting / DNS", "Monitoring"],
    process: [
      {
        step: "01",
        title: "Baseline Technical Health Audit",
        detail:
          "Review repository, hosting setup, backups, SSL, form delivery, and existing errors.",
      },
      {
        step: "02",
        title: "Stabilization & Backup Setup",
        detail:
          "Fix immediate security/UX issues and establish reliable backups and version control.",
      },
      {
        step: "03",
        title: "Ongoing Updates & Monitoring",
        detail:
          "Execute monthly patches, content additions, and link/form health checks.",
      },
      {
        step: "04",
        title: "Monthly Status Summary",
        detail:
          "Receive concise notes on completed updates, uptime, and recommended improvements.",
      },
    ],
    faqs: [
      {
        question: "Can you maintain a website you did not originally build?",
        answer:
          "Yes, provided you have repository/hosting access. I begin with a short onboarding audit to document the current codebase and fix critical risks first.",
      },
      {
        question: "Are hosting and domain renewals included or separate?",
        answer:
          "You keep direct billing ownership of your domain and hosting accounts so you never lose control, while I manage configuration, DNS, SSL, and deployments.",
      },
      {
        question: "Can I book one-off fixes instead of a monthly plan?",
        answer:
          "Yes. Both structured monthly care retainers and scoped one-off repair/update engagements are available.",
      },
    ],
    relatedServiceSlugs: [
      "website-speed-optimization",
      "website-redesign",
      "seo-friendly-website-development",
      "website-development",
    ],
    relatedCaseStudySlug: "multi-city-healthcare-clinic-portal",
    relatedBlogSlug: "nextjs-vs-wordpress-indian-business-websites",
    whatsappPrompt:
      "Hi Navnit, I need ongoing website maintenance and management support.",
  },
  {
    slug: "website-speed-optimization",
    name: "Website Speed Optimization",
    shortName: "Speed Optimization",
    category: "Growth, SEO & Care",
    seoTitle: "Website Speed Optimization Services | Core Web Vitals — Navnit Rai",
    metaDescription:
      "Technical website speed optimization targeting LCP, INP, CLS, bundle bloat, image delivery, and server response times for better rankings.",
    h1: "Website Speed Optimization",
    primaryKeyword: "website speed optimization",
    secondaryKeywords: [
      "core web vitals optimization india",
      "page speed developer",
      "improve lcp inp cls",
    ],
    heroSummary:
      "Targeted engineering remediation to fix slow Largest Contentful Paint (LCP), sluggish Interaction to Next Paint (INP), layout shifts (CLS), and bloated JavaScript.",
    problemStatement:
      "Installing surface-level cache plugins rarely fixes real performance problems caused by oversized unoptimized images, heavy third-party trackers, render-blocking CSS/JS, and slow server TTFB.",
    whyDirectFreelancer:
      "I profile network waterfalls, main-thread blocking tasks, and server rendering pipelines directly in Chrome DevTools and Lighthouse—fixing actual root causes rather than masking scores.",
    idealFor: [
      "Websites failing Google Search Console Core Web Vitals assessments",
      "Stores and lead-gen sites losing mobile visitors on 4G connections",
      "Next.js/React apps weighed down by oversized client bundles",
      "Marketing teams whose paid ad conversion rates suffer from slow load times",
    ],
    deliverables: [
      "Detailed performance waterfall and Core Web Vitals diagnostic audit",
      "Image format/dimension optimization (AVIF/WebP, priority hero preloading)",
      "JavaScript bundle splitting, unused script removal, and third-party tag deferral",
      "Font loading optimization (`font-display: swap`) and CLS elimination",
      "Server caching headers, compression, and database/API latency tuning",
    ],
    architectureApproach:
      "Speed optimization is treated systematically from server TTFB down to main-thread hydration: shrink payload sizes, eliminate blocking requests above the fold, reserve explicit media dimensions, and defer non-critical scripts.",
    techStack: ["Chrome DevTools", "Lighthouse", "Next.js", "Edge Caching", "Image Optimization"],
    process: [
      {
        step: "01",
        title: "Real Bottleneck Profiling",
        detail:
          "Inspect mobile waterfalls, main-thread long tasks, TTFB, and layout shift triggers.",
      },
      {
        step: "02",
        title: "Prioritized Fix Plan",
        detail:
          "Rank changes by real user impact across LCP, INP, CLS, and total page weight.",
      },
      {
        step: "03",
        title: "Code & Asset Remediation",
        detail:
          "Refactor heavy components, optimize fonts/images, and tune server caching.",
      },
      {
        step: "04",
        title: "Before/After Verification",
        detail:
          "Verify measurable improvements across desktop and mobile test runs without breaking features.",
      },
    ],
    faqs: [
      {
        question: "Do faster websites directly help SEO and ad conversions?",
        answer:
          "Yes. Core Web Vitals are a Google ranking signal, and faster mobile rendering measurably reduces user bounce before your primary CTA even appears.",
      },
      {
        question: "Can you speed up a slow Next.js, React, or WordPress site?",
        answer:
          "Yes. I optimize custom React/Next.js builds at the bundle/SSR level and also audit WordPress/WooCommerce bottlenecks or recommend migration if theme bloat is severe.",
      },
      {
        question: "Will speed optimization break my tracking pixels or animations?",
        answer:
          "No. Scripts are deferred or loaded strategically so analytics and UX keep working cleanly without blocking initial page rendering.",
      },
    ],
    relatedServiceSlugs: [
      "seo-friendly-website-development",
      "nextjs-development",
      "website-redesign",
      "website-maintenance-management",
    ],
    relatedCaseStudySlug: "d2c-nextjs-ecommerce-storefront",
    relatedBlogSlug: "nextjs-vs-wordpress-indian-business-websites",
    whatsappPrompt:
      "Hi Navnit, my website is loading slowly and I want help optimizing Core Web Vitals and speed.",
  },
  {
    slug: "seo-friendly-website-development",
    name: "SEO-Friendly Website Development",
    shortName: "SEO-Friendly Websites",
    category: "Growth, SEO & Care",
    seoTitle: "SEO-Friendly Website Development India | Clean Code & Schema",
    metaDescription:
      "Websites engineered from the ground up for Google indexing: semantic HTML, clean URLs, dynamic sitemaps, structured data, and fast TTFB.",
    h1: "SEO-Friendly Website Development",
    primaryKeyword: "seo-friendly website development",
    secondaryKeywords: [
      "technical seo web development",
      "schema and crawl architecture",
      "seo ready website developer india",
    ],
    heroSummary:
      "Websites built with clean technical SEO foundations baked into the codebase—not bolted on afterward—so Google crawls, understands, and ranks your core pages cleanly.",
    problemStatement:
      "Even great copy cannot rank if a site suffers from client-side-only rendering, duplicate parameter URLs, missing canonicals, cannibalized city pages, or broken heading structures.",
    whyDirectFreelancer:
      "As both a full-stack developer and SEO architect, I align keyword intent mapping, URL topology, internal links, Schema.org markup, and server-side rendering inside a single cohesive build.",
    idealFor: [
      "Service businesses competing for high-intent local and national Google searches",
      "Brands launching a new domain and wanting zero technical SEO debt from day one",
      "Sites suffering from indexation bloat, duplicate pages, or keyword cannibalization",
      "Content-driven sites needing clean taxonomy, breadcrumbs, and article schema",
    ],
    deliverables: [
      "Intent-clustered site architecture preventing page cannibalization",
      "Server-rendered HTML with clean semantic landmarks and H1–H3 structure",
      "Automated self-referencing canonicals, Open Graph, and dynamic XML sitemaps",
      "Validated JSON-LD schemas (Service, LocalBusiness/ProfessionalService, FAQPage, Article, BreadcrumbList)",
      "Breadcrumb trails and intentional hub-and-spoke internal linking modules",
    ],
    architectureApproach:
      "Technical SEO is part of routing and data modeling: each URL owns one distinct search intent, dynamic filters never pollute indexable URLs, and every page renders full metadata and structured data directly in the initial HTML payload.",
    techStack: ["Next.js Metadata API", "JSON-LD Schema", "XML Sitemaps", "Semantic HTML5"],
    process: [
      {
        step: "01",
        title: "Keyword & Intent Mapping",
        detail:
          "Group target queries by intent so each URL owns a non-overlapping topical mission.",
      },
      {
        step: "02",
        title: "Crawlable URL & Link Topology",
        detail:
          "Design shallow page depth (<= 3 clicks), breadcrumbs, and contextual cross-links.",
      },
      {
        step: "03",
        title: "Schema & Metadata Engineering",
        detail:
          "Implement reusable metadata generators, canonicals, sitemaps, and JSON-LD blocks.",
      },
      {
        step: "04",
        title: "Pre-Indexation QA Audit",
        detail:
          "Verify rendered HTML tags, robots directives, heading hierarchy, and broken links.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between SEO-friendly development and monthly SEO marketing?",
        answer:
          "SEO-friendly development ensures your site architecture, rendering speed, canonicals, schema, and URL structure follow Google best practices so content and backlinks can actually perform.",
      },
      {
        question: "Do you guarantee #1 Google rankings?",
        answer:
          "No honest developer guarantees #1 rankings—search algorithms depend on competition, authority, and content consistency. What I guarantee is a clean, technically compliant foundation built to rank.",
      },
      {
        question: "Can you audit keyword cannibalization before building our pages?",
        answer:
          "Yes. Every multi-page build starts with a keyword-to-URL mapping sheet to ensure pages support rather than compete against each other.",
      },
    ],
    relatedServiceSlugs: [
      "website-speed-optimization",
      "website-redesign",
      "nextjs-development",
      "business-website-development",
    ],
    relatedCaseStudySlug: "multi-city-healthcare-clinic-portal",
    relatedBlogSlug: "seo-checklist-for-local-business-websites-india",
    whatsappPrompt:
      "Hi Navnit, I want an SEO-friendly website build or technical SEO architecture overhaul.",
  },
  {
    slug: "web-application-development",
    name: "Web Application Development",
    shortName: "Web Applications",
    category: "Frontend & Full-Stack",
    seoTitle: "Web Application Development India | SaaS, Portals & Dashboards",
    metaDescription:
      "Custom web application development for client portals, SaaS MVPs, booking engines, and internal operations tools with clean API design.",
    h1: "Web Application Development",
    primaryKeyword: "web application development",
    secondaryKeywords: [
      "custom web app developer india",
      "saas mvp developer",
      "client portal dashboard development",
    ],
    heroSummary:
      "Interactive, database-backed web applications—customer portals, SaaS MVPs, booking workflows, and internal operations dashboards—engineered for reliability and growth.",
    problemStatement:
      "Spreadsheet workflows, disconnected WhatsApp approvals, and manual invoicing slow down growing teams, while bloated enterprise software forces businesses into rigid annual licenses.",
    whyDirectFreelancer:
      "I translate messy operational workflows directly into clean, typed web applications—shipping a usable v1 quickly while keeping database schemas and authentication cleanly extendable.",
    idealFor: [
      "Founders building a lean SaaS MVP ready for paying early adopters",
      "Service businesses wanting client portals, document uploads, or status tracking",
      "Clinics, institutes, or B2B distributors needing custom booking/order workflows",
      "Operations teams replacing error-prone spreadsheets with custom dashboards",
    ],
    deliverables: [
      "Role-based authentication and protected user/admin workflows",
      "Clean relational database modeling (PostgreSQL / Prisma / Drizzle)",
      "Interactive tables, filters, search, multi-step forms, and status pipelines",
      "REST/JSON APIs with server-side validation and error handling",
      "Deployment setup with environment isolation and database migration scripts",
    ],
    architectureApproach:
      "I focus on core workflows first—strict schema integrity, clear authorization checks on every server endpoint, predictable client state, and modular boundaries so future features don't require rewriting v1.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js", "Tailwind CSS", "Zod"],
    process: [
      {
        step: "01",
        title: "Workflow & Data Modeling",
        detail:
          "Define user roles, entities, permissions, and core daily actions.",
      },
      {
        step: "02",
        title: "MVP Scope & Wireframes",
        detail:
          "Trim non-essential complexity so v1 ships fast and delivers real value.",
      },
      {
        step: "03",
        title: "Full-Stack Implementation",
        detail:
          "Build database schema, authenticated APIs, and responsive dashboard UI.",
      },
      {
        step: "04",
        title: "Testing & Staging Review",
        detail:
          "Validate edge cases, permissions, error handling, and production deployment.",
      },
    ],
    faqs: [
      {
        question: "Can you build an MVP for a SaaS startup so we can validate with early users?",
        answer:
          "Yes. I specialize in scoping pragmatic v1 SaaS applications—auth, billing readiness, core workflows, and clean UI—without over-engineering months of speculative complexity.",
      },
      {
        question: "How do you handle security and role permissions in web apps?",
        answer:
          "Every API route and mutation verifies session identity and role permissions strictly on the server alongside Zod input validation.",
      },
      {
        question: "Can the web app connect to WhatsApp notifications or payment gateways?",
        answer:
          "Yes. Webhooks, Razorpay/Stripe payments, email alerts, and messaging integrations can be built straight into application events.",
      },
    ],
    relatedServiceSlugs: [
      "full-stack-development",
      "nextjs-development",
      "custom-website-development",
      "react-development",
    ],
    relatedCaseStudySlug: "multi-city-healthcare-clinic-portal",
    relatedBlogSlug: "website-development-cost-india-2026",
    whatsappPrompt:
      "Hi Navnit, I want to build a custom web application or SaaS MVP.",
  },
  {
    slug: "full-stack-development",
    name: "Full-Stack Development",
    shortName: "Full-Stack",
    category: "Frontend & Full-Stack",
    seoTitle: "Full-Stack Web Development India | Frontend, Backend & Database",
    metaDescription:
      "End-to-end full-stack development across React/Next.js, Node.js/TypeScript, REST APIs, PostgreSQL, authentication, and cloud deployment.",
    h1: "Full-Stack Development Services",
    primaryKeyword: "full-stack development",
    secondaryKeywords: [
      "full stack web developer india",
      "node nextjs typescript developer",
      "end to end web engineering",
    ],
    heroSummary:
      "Unified frontend, backend API, database design, and cloud deployment ownership from a single senior full-stack TypeScript engineer.",
    problemStatement:
      "Splitting a small or mid-sized product across disconnected frontend and backend contractors causes API mismatches, finger-pointing when bugs occur, and double communication overhead.",
    whyDirectFreelancer:
      "One engineer owns the entire vertical slice—from UI form validation and TypeScript contracts down to SQL queries, caching, and production deployment—cutting delivery friction dramatically.",
    idealFor: [
      "Startups and SMEs needing one reliable engineer to ship complete products",
      "Companies connecting modern Next.js/React frontends to Node.js and PostgreSQL backends",
      "Teams replacing fragmented scripts with a cohesive TypeScript monorepo or app",
      "Businesses needing custom webhooks, CRM pipelines, and authenticated APIs",
    ],
    deliverables: [
      "End-to-end TypeScript architecture sharing schemas between frontend and backend",
      "Next.js / React / Vue UI paired with Node.js APIs and PostgreSQL/MongoDB persistence",
      "Authentication, rate limiting, input validation, and structured error logging",
      "Third-party integrations (payments, email, webhooks, cloud storage)",
      "Production CI/CD, environment setup, and clear README/architecture docs",
    ],
    architectureApproach:
      "Shared validation schemas (Zod), strict TypeScript interfaces, parameterized database queries, and clean separation of domain logic from transport routes ensure your app stays reliable as traffic and team size grow.",
    techStack: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "Docker / Cloud"],
    process: [
      {
        step: "01",
        title: "System Architecture Spec",
        detail:
          "Design database tables, API contracts, auth model, and hosting topology.",
      },
      {
        step: "02",
        title: "Backend & Data Layer",
        detail:
          "Implement migrations, secure endpoints, integrations, and validation rules.",
      },
      {
        step: "03",
        title: "Frontend Interface Integration",
        detail:
          "Connect typed UI views with crisp loading, validation, and error feedback.",
      },
      {
        step: "04",
        title: "Production Hardening",
        detail:
          "Configure security headers, env management, backups, and deployment scripts.",
      },
    ],
    faqs: [
      {
        question: "What backend and database stack do you primarily work with?",
        answer:
          "Primarily Node.js, TypeScript, Next.js Route Handlers, Express/Fastify, and PostgreSQL (via Prisma or Drizzle), along with Redis/REST integrations as needed.",
      },
      {
        question: "Can you take over an existing full-stack repository?",
        answer:
          "Yes. I can audit an existing codebase, stabilize critical bugs, add tests/types, and continue feature delivery cleanly.",
      },
      {
        question: "How do we track progress during a full-stack engagement?",
        answer:
          "Work runs in clear milestone sprints with regular staging preview links, Git commits, and direct WhatsApp/call check-ins.",
      },
    ],
    relatedServiceSlugs: [
      "web-application-development",
      "nextjs-development",
      "custom-website-development",
      "ecommerce-website-development",
    ],
    relatedCaseStudySlug: "d2c-nextjs-ecommerce-storefront",
    relatedBlogSlug: "freelance-web-developer-vs-agency-india",
    whatsappPrompt:
      "Hi Navnit, I need a full-stack developer for an end-to-end web project.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): ServiceItem[] {
  return servicesData.filter((service) => service.category === category);
}
