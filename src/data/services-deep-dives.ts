export interface ServiceDeepDiveSection {
  heading: string;
  paragraphs: string[];
}

export const serviceDeepDives: Record<string, ServiceDeepDiveSection[]> = {
  "website-development": [
    {
      heading: "Why Clean Foundation Architecture Matters More Than Visual Polish Alone",
      paragraphs: [
        "Most commercial websites fail quietly because appearance is treated separately from engineering. When a developer stitches together heavy themes, unoptimized hero banners, and nested page-builder wrappers, mobile users on mid-range Indian smartphones wait several seconds before reading a single headline or tapping a contact button.",
        "My website development workflow reverses that priority. Before styling buttons or typography, I map out exact page hierarchy, server-rendered HTML structure, and direct WhatsApp/phone/form conversion triggers so every route performs predictably under real network conditions.",
      ],
    },
    {
      heading: "Built-In Crawlability, Metadata & Conversion Paths From Day One",
      paragraphs: [
        "Instead of patching SEO plugins after launch, clean heading outlines (single H1, logical H2/H3 structure), self-referencing canonicals, XML sitemaps, and Schema.org JSON-LD ship inside the codebase itself. Every business enquiry path—click-to-call, pre-filled WhatsApp chat, and validated form—works reliably across desktop and mobile without hidden friction.",
      ],
    },
  ],
  "business-website-development": [
    {
      heading: "Turning Company Credibility Into Measurable Enquiries",
      paragraphs: [
        "B2B procurement teams, clinic patients, and SME buyers evaluate vendors quickly: if your services sound vague or contact options hide in the footer, they leave for the next search result. Business website development focuses on communicating exact capabilities, regional trust signals, and working processes in clear human language.",
        "For manufacturers, service firms, and local institutions across Uttar Pradesh and Delhi-NCR, each core offering receives a clear breakdown with realistic deliverables, objection-handling FAQs, and immediate WhatsApp/consultation options tailored to how Indian decision-makers actually reach out.",
      ],
    },
    {
      heading: "Designed for Longevity Without Agency Dependence",
      paragraphs: [
        "Many Indian SMEs get trapped paying recurring fees simply to change a phone number or add a new service line. By building modular TypeScript components and keeping domain, DNS, and cloud hosting directly under your company account, you own a dependable business asset you can grow freely.",
      ],
    },
  ],
  "custom-website-development": [
    {
      heading: "When Off-The-Shelf Templates Become a Liability",
      paragraphs: [
        "Drag-and-drop themes are fine until your business requires custom quotation logic, multi-step service calculators, fast searchable product specifications, or integrations with internal CRMs and payment gateways. Forcing bespoke workflows through third-party CMS plugins slows pages down and causes brittle breakage on routine updates.",
        "Custom website development writes only the UI components, TypeScript data contracts, and API routes your product actually uses—eliminating megabytes of unused CSS/JS while giving you exact visual control over flat, accessible layouts.",
      ],
    },
    {
      heading: "Clean Code Boundaries Ready for Future Expansion",
      paragraphs: [
        "When your brochure or marketing site later needs an authenticated customer portal, dealer login, or database-backed directory, custom Next.js/TypeScript architecture lets you add those modules incrementally inside the same repository rather than starting over from scratch.",
      ],
    },
  ],
  "ecommerce-website-development": [
    {
      heading: "Engineered for Indian Mobile Shoppers & UPI Checkouts",
      paragraphs: [
        "In Indian D2C and wholesale commerce, mobile browsing dominates traffic—often arriving straight from Instagram ads or Google Shopping on 4G connections. Heavy storefront scripts that freeze cart drawers or delay variant switching directly erode paid ad ROAS and checkout completions.",
        "I engineer fast server-rendered product and category routes paired with crisp mobile cart interactions, upfront GST and shipping clarity, COD/prepaid guidance, and secure server-verified Razorpay, Cashfree, or Stripe webhook flows.",
      ],
    },
    {
      heading: "Preventing Faceted Filter & Category Duplicate SEO Issues",
      paragraphs: [
        "Many online stores accidentally generate thousands of crawlable URLs across size, color, price, and sort query combinations—wasting crawl budget and diluting category rankings. Every storefront build enforces clean canonical tags, indexable category hubs, and complete Product/Offer JSON-LD markup.",
      ],
    },
  ],
  "nextjs-development": [
    {
      heading: "True App Router Engineering vs. Misconfigured Client SPAs",
      paragraphs: [
        "Using Next.js properly means understanding where server rendering ends and client interactivity begins. Turning entire marketing or catalog pages into `'use client'` trees defeats the framework—forcing browsers to download large JavaScript bundles before rendering core text.",
        "I structure App Router projects around clean Server Components, static or cached ISR data shells, targeted client islands for forms/filters, native `next/font` and `next/image` optimization, and Next.js Metadata API endpoints for sitemaps, canonicals, and Open Graph images.",
      ],
    },
    {
      heading: "Flexible Cloud Deployment Without Platform Lock-In",
      paragraphs: [
        "Whether your team deploys to Vercel, AWS, Docker containers, or a standalone Node.js VPS in India, Next.js builds run cleanly with predictable caching headers, secure Route Handlers, and strong TypeScript type safety across frontend and server boundaries.",
      ],
    },
  ],
  "react-development": [
    {
      heading: "Modular Component Systems That Scale Without Fragile State Bugs",
      paragraphs: [
        "As React applications grow, ad-hoc component nesting leads to tangled prop-drilling, excessive re-renders, and inconsistent error handling. Building sustainable React frontends requires disciplined component boundaries, typed API interfaces, and predictable loading and empty states.",
        "I author accessible React 19 + TypeScript component libraries with clean keyboard focus management, native semantic elements, Zod-validated forms, and lean bundle sizes free of heavy runtime dependencies.",
      ],
    },
    {
      heading: "Seamless Integration With Existing REST or GraphQL Backends",
      paragraphs: [
        "Whether connecting to a Node.js microservice, Python/Django API, Laravel backend, or SaaS headless API, React views remain cleanly decoupled from data-fetching adapters so backend evolution never forces UI rewrites.",
      ],
    },
  ],
  "vuejs-development": [
    {
      heading: "Pragmatic Vue 3 Composition API & Nuxt SSR Execution",
      paragraphs: [
        "Vue 3 with `<script setup>` and TypeScript offers a fast, clean developer experience—especially for teams maintaining existing Laravel, Node, or Python stacks. I structure reusable composables, predictable Pinia stores, and crisp Tailwind UI views that stay simple for internal teams to extend long after handoff.",
        "When public organic search indexation is needed alongside reactive UI, Nuxt provides server-side rendering, route metadata management, and clean static pre-rendering without forcing a framework rewrite away from Vue.",
      ],
    },
    {
      heading: "Safe Vue 2 End-of-Life Upgrades",
      paragraphs: [
        "Many businesses still operate legacy Vue 2 dashboards with outdated Webpack setups and deprecated libraries. I audit package compatibility, migrate Options API modules cleanly to Vue 3 + Vite, and verify critical user flows step by step.",
      ],
    },
  ],
  "landing-page-development": [
    {
      heading: "Message Match & Distraction-Free Conversion Architecture",
      paragraphs: [
        "Sending Google Search or Meta Lead ad traffic to a cluttered multi-menu website dilutes buyer focus and burns budget. High-converting landing pages align headline copy directly with the visitor's search phrase, answer immediate skepticism with real scope details, and keep one primary conversion goal front and center.",
        "Every landing page omits heavy navigation bloat, prioritizes instant mobile first-paint speed, and positions click-to-WhatsApp, phone, and short validated lead forms where mobile thumbs reach naturally.",
      ],
    },
    {
      heading: "Clean Conversion Telemetry Ready for Paid Campaigns",
      paragraphs: [
        "Without accurate tracking, ad platforms optimize for cheap clicks instead of real enquiries. Built-in conversion hooks fire structured events on WhatsApp clicks, phone taps, and verified form submissions—making GA4, GTM, Google Ads, and Meta Pixel reporting straightforward.",
      ],
    },
  ],
  "website-redesign": [
    {
      heading: "Modernizing Design & Mobile UX Without Losing Hard-Earned Rankings",
      paragraphs: [
        "Too many website redesign projects erase years of search visibility overnight because developers change URL structures without 301 redirects, remove descriptive service text in favor of short slogans, or deploy sluggish client-side scripts over clean static HTML.",
        "My redesign workflow treats URL equity as an asset: before touching visual layouts, I export every indexed path, map exact 1-to-1 permanent 301 redirects where slugs evolve, preserve core topical headings and schema coverage, and upgrade typography, contrast, and speed safely.",
      ],
    },
    {
      heading: "Fixing Lead Leaks Left Behind by Outdated Sites",
      paragraphs: [
        "Beyond fresh flat visual styling, every redesign diagnoses why visitors weren't converting previously—replacing generic contact links with contextual WhatsApp triggers, clarifying service scopes, and ensuring WCAG 2.2 AA mobile usability.",
      ],
    },
  ],
  "website-maintenance-management": [
    {
      heading: "Preventing Silent Downtime, Broken Forms & Security Drift",
      paragraphs: [
        "Websites rarely fail noisily—more often an expired SSL record, broken SMTP webhook, outdated dependency vulnerability, or unmonitored CMS plugin stops enquiry notifications silently for weeks while ad campaigns keep spending.",
        "Consistent website maintenance and management replaces reactive panic fixes with scheduled preventive care: framework and security updates tested on staging, periodic end-to-end contact form and WhatsApp verification, off-site backups, and uptime checks.",
      ],
    },
    {
      heading: "Responsive Content & Feature Updates Without Agency Ticket Delays",
      paragraphs: [
        "Need new team pages, updated pricing tables, seasonal campaign banners, or fresh service announcements? Monthly maintenance plans give your business direct engineering support on Git-tracked deployments without maintaining full-time in-house staff.",
      ],
    },
  ],
  "website-speed-optimization": [
    {
      heading: "Fixing Root Performance Bottlenecks Beyond Caching Plugins",
      paragraphs: [
        "Installing surface-level cache plugins rarely moves real Core Web Vitals metrics when pages suffer from un-sized hero images, synchronous third-party tracking scripts, oversized JavaScript bundles, or slow unindexed server responses.",
        "I diagnose real network waterfalls and main-thread execution profiles—optimizing Largest Contentful Paint (LCP) via priority image sizing and clean SSR HTML, cutting Interaction to Next Paint (INP) latency by removing heavy main-thread hydration work, and eliminating Cumulative Layout Shift (CLS) with explicit media dimensions.",
      ],
    },
    {
      heading: "Speed Gains That Compound Across Both SEO and Paid Ads",
      paragraphs: [
        "Faster mobile pages improve Google Core Web Vitals field assessments while cutting abandonment on slower regional 4G connections across Uttar Pradesh and tier-2 Indian cities—meaning both organic rankings and paid traffic convert better.",
      ],
    },
  ],
  "seo-friendly-website-development": [
    {
      heading: "Engineering Search Intent & Anti-Cannibalization Into the Codebase",
      paragraphs: [
        "Technical SEO fails when marketing teams write content on top of broken site architecture. Duplicate filter URLs, missing canonicals, competing city/service doorway pages, and client-only rendering block Google from rewarding strong content.",
        "I start from a clean keyword-to-URL intent map so every page owns a distinct topical goal, then enforce self-referencing canonicals, semantic HTML5 headings, dynamic XML sitemaps, crawlable internal link hubs, and validated JSON-LD structured data directly inside server-rendered templates.",
      ],
    },
    {
      heading: "Clean Foundations Aligned With Google Search Essentials",
      paragraphs: [
        "Zero keyword stuffing, zero thin scraped city clones, and zero deceptive tricks—just fast, accessible, genuinely useful web pages structured cleanly for search crawlers and human visitors alike.",
      ],
    },
  ],
  "web-application-development": [
    {
      heading: "Replacing Manual Spreadsheets With Reliable Custom Workflows",
      paragraphs: [
        "Growing Indian clinics, distributors, coaching networks, and SaaS founders often hit a ceiling running operations across WhatsApp groups and shared Excel files. Off-the-shelf enterprise software frequently forces rigid workflows and steep per-seat annual licensing.",
        "Custom web application development delivers focused portals built strictly around your roles, approvals, booking rules, or subscription workflows—giving teams a clean browser workspace accessible from desktop or mobile.",
      ],
    },
    {
      heading: "Security, Validation & Maintainable Relational Data Models",
      paragraphs: [
        "Every interactive portal is engineered with strict server-side session/role checks, Zod payload validation, parameterized PostgreSQL queries, and clear loading/error UI states—building reliable software rather than fragile demo prototypes.",
      ],
    },
  ],
  "full-stack-development": [
    {
      heading: "One Accountable Engineer Across UI, APIs, Database & Deployment",
      paragraphs: [
        "Splitting product development across disconnected frontend and backend freelancers often slows teams down with mismatched API payloads, unclear bug ownership, and duplicate coordination meetings.",
        "As a full-stack TypeScript engineer, I own the entire vertical feature slice—sharing strict validation schemas from React/Next.js UI components straight through Node.js API handlers into PostgreSQL migrations and cloud deployment scripts.",
      ],
    },
    {
      heading: "Production Hardening & Documentation From Day One",
      paragraphs: [
        "Security headers, rate limiting, clean environment isolation, error handling, and concise architecture READMEs come baked into delivery so your application launches stably and stays easy for future engineers to onboard onto.",
      ],
    },
  ],
};
