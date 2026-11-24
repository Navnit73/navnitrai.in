/**
 * City + service landing pages (e.g. /locations/lucknow/ecommerce-website-development).
 *
 * Anti-cannibalization rules:
 * - Each page owns ONE search intent in ONE city. Its primary/secondary keywords
 *   must not appear in the keyword list of any other page (including the
 *   city hub page in src/app/locations/<city>/page.tsx).
 * - The city hub keeps broad terms ("website developer / designer / web
 *   development company in <city>") and links down to these pages with
 *   exact-intent anchors. These pages link back up with the hub anchor.
 * - The global /services/<slug> pages target non-local intent.
 */

export type LocalServiceKind = "ecommerce" | "wordpress" | "web-app" | "maintenance";

export interface LocalServicePage {
  citySlug: "lucknow" | "gorakhpur" | "kanpur" | "faridabad";
  slug: string;
  kind: LocalServiceKind;
  /** Short label used in link lists: `${navLabel} in ${city}` */
  navLabel: string;
  globalServiceSlug: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroLead: string;
  priceLabel: string;
  timeline: string;
  audiences: Array<{ title: string; text: string }>;
  included: string[];
  localSection: {
    heading: string;
    paragraphs: string[];
    bullets: string[];
  };
  faqs: Array<{ question: string; answer: string }>;
  whatsappMessage: string;
}

export const localServicePages: LocalServicePage[] = [
  /* ================================================================ */
  /* LUCKNOW                                                           */
  /* ================================================================ */
  {
    citySlug: "lucknow",
    slug: "ecommerce-website-development",
    kind: "ecommerce",
    navLabel: "E-Commerce Website Development",
    globalServiceSlug: "ecommerce-website-development",
    seoTitle: "E-Commerce Website Development in Lucknow | Online Store Developer",
    metaDescription:
      "E-commerce website development in Lucknow for Chikankari, fashion, food and retail brands. Fast mobile stores with UPI/Razorpay checkout, GST-ready orders and Google-friendly product pages.",
    h1: "E-Commerce Website Development in Lucknow",
    primaryKeyword: "ecommerce website development in lucknow",
    secondaryKeywords: [
      "e commerce website development in lucknow",
      "ecommerce development company in lucknow",
      "ecommerce development in lucknow",
      "ecommerce website development company in lucknow",
      "ecommerce website in lucknow",
      "lucknow ecommerce website developer",
    ],
    heroLead:
      "Sell your products online with a fast store that works on every phone. I build e-commerce websites for Lucknow brands — from Chikankari and fashion labels to sweets, bakeries and home décor — with UPI checkout, simple order management and product pages that show up on Google.",
    priceLabel: "₹60,000 – ₹1,50,000",
    timeline: "4–8 weeks",
    audiences: [
      {
        title: "Chikankari & fashion labels",
        text: "Show fabric, colour and size options clearly, with zoomable photos and a size guide, so buyers outside Lucknow order with confidence.",
      },
      {
        title: "Sweets, bakery & food brands",
        text: "Take pre-orders, set delivery areas inside Lucknow, and add festive gift boxes for Diwali, Eid and Raksha Bandhan.",
      },
      {
        title: "Showrooms moving online",
        text: "Hazratganj or Aminabad shop with a loyal customer base? Put your catalogue online and let regulars reorder on WhatsApp.",
      },
    ],
    included: [
      "Product pages with photos, variants (size, colour) and stock",
      "Cart and checkout with UPI, cards and cash on delivery via Razorpay",
      "GST invoice details and shipping charges by pin code",
      "Order emails and WhatsApp order alerts for you",
      "Simple admin panel to add products and manage orders",
      "Category pages set up properly for Google search",
      "Fast loading on mobile, even on slow networks",
      "Store, domain and payment accounts in your name",
    ],
    localSection: {
      heading: "Why Lucknow brands need a proper online store, not just an Instagram page",
      paragraphs: [
        "A lot of Lucknow sellers start on Instagram or WhatsApp — and that works until orders grow. Then you're answering the same price and size questions all day, tracking payments in screenshots, and losing buyers who just want to click 'Buy'. A real e-commerce website takes over that work: customers see prices, pick options, pay by UPI and get a confirmation, while you just pack and ship.",
        "Lucknow's handmade products — Chikankari kurtas, zardozi work, attar, and famous mithai — sell well across India and abroad. But buyers from Delhi, Bengaluru or Dubai can't touch the fabric, so your store must build trust with clear photos, honest descriptions, return policy, and fast pages. That's what I focus on, instead of flashy effects that slow your store down.",
        "Unlike a large e-commerce development company in Lucknow, you talk directly to me — the person building your store. No account managers, no monthly lock-in, and no surprise charges for 'plugins'.",
      ],
      bullets: [
        "Shipping rules for Lucknow local delivery vs. pan-India courier",
        "Option to add Shiprocket or similar courier integration",
        "Product descriptions written to rank for searches like “Lucknowi chikankari kurti online”",
        "Option to move your existing Shopify or WooCommerce store",
      ],
    },
    faqs: [
      {
        question: "How much does an e-commerce website cost in Lucknow?",
        answer:
          "Most custom online stores fall between ₹60,000 and ₹1,50,000 depending on the number of products, payment and shipping setup, and special features like wholesale pricing. You get a written quote before work starts.",
      },
      {
        question: "Can customers pay with UPI, cards and cash on delivery?",
        answer:
          "Yes. I set up Razorpay (or another gateway you prefer) so customers can pay by UPI, debit/credit card, net banking or wallets. Cash on delivery can be turned on for selected pin codes.",
      },
      {
        question: "Will I be able to add products myself?",
        answer:
          "Yes. You get a simple admin panel to add products, change prices, update stock and see orders. I also give a short video walkthrough after launch.",
      },
      {
        question: "Can you move my store from Shopify or WooCommerce?",
        answer:
          "Yes. I can move your products, customers and order history, and set up redirects so you don't lose Google rankings from your old store.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Lucknow and want to discuss an e-commerce website for my business.",
  },
  {
    citySlug: "lucknow",
    slug: "wordpress-website-development",
    kind: "wordpress",
    navLabel: "WordPress Website Development",
    globalServiceSlug: "website-development",
    seoTitle: "WordPress Website Developer in Lucknow | Fast, Secure WordPress Sites",
    metaDescription:
      "Freelance WordPress website developer in Lucknow. Custom WordPress sites, theme fixes, speed and security cleanup — or an honest switch to Next.js when WordPress is slowing you down.",
    h1: "WordPress Website Developer in Lucknow",
    primaryKeyword: "wordpress website developer in lucknow",
    secondaryKeywords: [
      "wordpress development company in lucknow",
      "wordpress development company lucknow",
      "lucknow wordpress developer",
    ],
    heroLead:
      "Want a WordPress website you can update yourself? I build clean, fast WordPress sites for Lucknow businesses, fix slow or hacked WordPress sites, and tell you honestly when a different setup would serve you better.",
    priceLabel: "₹25,000 – ₹60,000",
    timeline: "2–3 weeks",
    audiences: [
      {
        title: "Businesses that post often",
        text: "Schools, coaching institutes and clinics in Aliganj or Indira Nagar that add notices, results or blog posts every week.",
      },
      {
        title: "Owners of slow WordPress sites",
        text: "If your current site takes 6+ seconds to open on mobile, I'll clean up the theme and plugins and speed it up.",
      },
      {
        title: "Hacked or broken sites",
        text: "Spam links, redirects to strange websites, or a white screen? I remove malware, update everything and lock it down.",
      },
    ],
    included: [
      "Custom design — not a ₹2,000 theme with your logo swapped in",
      "Only the plugins you actually need (fewer plugins = faster, safer)",
      "Easy editing so you can change text, photos and posts",
      "WhatsApp, call and enquiry form buttons",
      "Basic Google setup: titles, descriptions, sitemap, Search Console",
      "Security hardening and automatic backups",
      "Hosting and domain set up in your name",
      "Training video on how to update your site",
    ],
    localSection: {
      heading: "WordPress or something else? An honest answer for Lucknow businesses",
      paragraphs: [
        "Many WordPress development companies in Lucknow build every website on WordPress because that's what their team knows. The result is often a heavy theme with 30 plugins that loads slowly, breaks after updates, and gets hacked. WordPress itself isn't the problem — the way it's set up is.",
        "WordPress is a great choice if you'll be posting regularly and want to edit everything yourself. If your site is mostly fixed pages (services, about, contact) and speed on mobile matters more, a Next.js site will usually be faster and need almost no maintenance. I build both, so I'll recommend whichever fits — not whichever is easier for me.",
        "Either way, you get a site that's yours: your hosting account, your domain, your login. No agency holding your site hostage.",
      ],
      bullets: [
        "Speed-up for existing WordPress sites: theme cleanup, image compression, caching",
        "WooCommerce setup for small product catalogues",
        "Moving from WordPress to Next.js without losing Google rankings",
        "Ongoing WordPress updates via a maintenance plan",
      ],
    },
    faqs: [
      {
        question: "How much does a WordPress website cost in Lucknow?",
        answer:
          "A custom WordPress business website usually costs ₹25,000–₹60,000 depending on the number of pages and features. Fixing or speeding up an existing WordPress site is quoted separately after a free check.",
      },
      {
        question: "Can you fix my hacked WordPress site?",
        answer:
          "Yes. I clean the malware, remove unknown admin users, update WordPress, themes and plugins, add security protection and set up backups so it doesn't happen again.",
      },
      {
        question: "Should I use WordPress or Next.js?",
        answer:
          "Choose WordPress if you'll update content often and want to do it yourself. Choose Next.js if speed, security and low maintenance matter more. I'll explain the trade-offs for your business in a short call.",
      },
      {
        question: "Will I be able to edit my WordPress website myself?",
        answer:
          "Yes. I set up simple editing for your pages and posts and give you a short training video. You won't need to call a developer to change a phone number or add a photo.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Lucknow and need help with a WordPress website.",
  },
  {
    citySlug: "lucknow",
    slug: "web-application-development",
    kind: "web-app",
    navLabel: "Web App, React & Next.js Development",
    globalServiceSlug: "web-application-development",
    seoTitle: "Web Application Developer in Lucknow | React, Next.js & SaaS Developer",
    metaDescription:
      "Lucknow web application developer for startups and businesses: React and Next.js developer, full-stack and SaaS development, custom software, dashboards and portals — built directly with you.",
    h1: "Web Application, React & Next.js Developer in Lucknow",
    primaryKeyword: "lucknow web application developer",
    secondaryKeywords: [
      "lucknow react developer",
      "lucknow next js developer",
      "lucknow full stack developer",
      "lucknow custom software developer",
      "lucknow saas developer",
    ],
    heroLead:
      "Need software, not just a website? I build web apps for Lucknow startups and businesses — booking systems, customer portals, admin dashboards and SaaS products — using React, Next.js and Node.js. You work directly with the developer, from idea to launch.",
    priceLabel: "₹1,50,000+",
    timeline: "Depends on features (usually 6–12 weeks)",
    audiences: [
      {
        title: "Startup founders",
        text: "Have an idea and need a first version (MVP) to show investors or early customers? I help you cut it down to what matters and ship it.",
      },
      {
        title: "Growing businesses",
        text: "Running your business on Excel sheets and WhatsApp groups? A custom dashboard can track orders, staff, stock or students in one place.",
      },
      {
        title: "Teams needing a React / Next.js developer",
        text: "Already have a product? I can join as a freelance React or Next.js developer to build features or fix performance.",
      },
    ],
    included: [
      "Planning session to turn your idea into clear screens and features",
      "Logins for admins, staff and customers with the right permissions",
      "Database design (PostgreSQL) that won't break as you grow",
      "Admin dashboard with reports and exports",
      "Payment, SMS, email or WhatsApp integrations if needed",
      "Preview link so you test each feature as it's built",
      "Secure hosting set up in your company's cloud account",
      "Full source code handed over to you",
    ],
    localSection: {
      heading: "Building software in Lucknow without hiring a full tech team",
      paragraphs: [
        "Lucknow's startup scene is growing — from edtech and healthtech founders in Gomti Nagar to businesses near Shaheed Path digitising how they work. But hiring a full-time React developer, backend developer and designer is expensive and slow. For a first version, one experienced full-stack developer is often faster and far cheaper.",
        "As a freelance full-stack developer in Lucknow, I handle the whole thing: the screens your users see (React / Next.js), the server and database behind it (Node.js, PostgreSQL), and putting it live. Because one person builds it all, nothing gets lost between teams, and you always know who to ask.",
        "If you're comparing custom software developers in Lucknow, ask who will actually write the code and who will own it afterwards. With me, the answer is simple: I write it, and you own it — every line.",
      ],
      bullets: [
        "SaaS products with subscriptions and multiple customer accounts",
        "Coaching and school portals: attendance, fees, tests, results",
        "Clinic and diagnostic booking systems with reports",
        "Internal tools to replace spreadsheets and paper registers",
      ],
    },
    faqs: [
      {
        question: "How much does a web application cost in Lucknow?",
        answer:
          "Custom web apps usually start around ₹1,50,000. The final price depends on the number of user types, screens and integrations. I suggest starting with a smaller first version and adding features once real users try it.",
      },
      {
        question: "Can you build a SaaS product for my startup?",
        answer:
          "Yes. I build SaaS products with sign-up, subscription billing, separate customer accounts and admin tools — starting with a focused first version you can launch quickly.",
      },
      {
        question: "Do you work as a freelance React or Next.js developer on existing projects?",
        answer:
          "Yes. If you already have a product, I can work on specific features, fix bugs, or improve speed. We can agree on a fixed scope or a monthly arrangement.",
      },
      {
        question: "Who owns the code and the app?",
        answer:
          "You do. The code is stored in your company's GitHub account, and the app runs on hosting in your name. There's no lock-in.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Lucknow and want to discuss a web app / software project.",
  },
  {
    citySlug: "lucknow",
    slug: "website-maintenance-and-redesign",
    kind: "maintenance",
    navLabel: "Website Maintenance & Redesign",
    globalServiceSlug: "website-maintenance-management",
    seoTitle: "Website Maintenance & Redesign in Lucknow | Website Management Services",
    metaDescription:
      "Website maintenance, management and redesign in Lucknow. Updates, backups, security, speed fixes and modern redesigns that keep your Google rankings — from an independent developer.",
    h1: "Website Maintenance, Management & Redesign in Lucknow",
    primaryKeyword: "lucknow website maintenance",
    secondaryKeywords: ["lucknow website management", "lucknow website redesign"],
    heroLead:
      "Old website looking outdated? Developer stopped answering calls? I take care of Lucknow business websites — regular updates, backups, security and small changes — and redesign old sites into modern, fast ones without losing your Google rankings.",
    priceLabel: "Monthly plan or one-time redesign",
    timeline: "Redesign: 2–4 weeks",
    audiences: [
      {
        title: "Your developer disappeared",
        text: "Very common in Lucknow. I'll recover access to your domain, hosting and site, then keep it running.",
      },
      {
        title: "Your site looks 10 years old",
        text: "Not mobile-friendly, slow, hard to read? A redesign makes it modern while keeping the pages Google already ranks.",
      },
      {
        title: "You want someone on call",
        text: "Need a price changed, a new page added or a banner for a sale? Send it on WhatsApp and it gets done.",
      },
    ],
    included: [
      "Software, plugin and security updates",
      "Regular backups you can restore anytime",
      "Uptime monitoring — I know when your site goes down",
      "Small content changes: text, photos, prices, new pages",
      "Speed checks and fixes",
      "Monthly report in plain language",
      "Redesign with 301 redirects so rankings are protected",
      "Domain and hosting renewals tracked so nothing expires",
    ],
    localSection: {
      heading: "Keeping Lucknow business websites working — and looking current",
      paragraphs: [
        "Most Lucknow businesses got their website made once and then forgot about it. Years later, the contact form doesn't send emails, the SSL certificate has expired so browsers show a 'Not secure' warning, and the design looks old next to competitors. Every one of those things quietly costs you enquiries.",
        "Website management doesn't need to be expensive. A simple monthly plan covers updates, backups, security and small changes, so you never have to hunt for a developer again. You message me on WhatsApp, and it gets done.",
        "When a site is too old to patch, a redesign is the better choice. I keep your existing page addresses (or redirect them properly), carry over your content, and rebuild the design for mobile — so you get a modern look without starting from zero in Google.",
      ],
      bullets: [
        "Free first check of your current website: speed, security, mobile, Google",
        "Recovery of domain and hosting access from old developers",
        "Fixing broken contact forms and email delivery",
        "Redesign of WordPress, Wix or old HTML sites",
      ],
    },
    faqs: [
      {
        question: "How much does website maintenance cost in Lucknow?",
        answer:
          "It depends on the size of your site and how often you need changes. I offer simple monthly plans, quoted after a free check of your current website — no long contracts.",
      },
      {
        question: "Will a redesign hurt my Google rankings?",
        answer:
          "Not if it's done properly. I keep your existing page addresses or set up 301 redirects, carry over titles and content, and resubmit your sitemap to Google so rankings are protected.",
      },
      {
        question: "My old developer has my website login. Can you help?",
        answer:
          "Yes. I'll help you recover access to your domain, hosting and website — usually through the domain registrar and hosting company — and move everything into your own name.",
      },
      {
        question: "Can you maintain a website you didn't build?",
        answer:
          "Yes. I maintain WordPress, Next.js, React and plain HTML websites. I'll first review the site and let you know of any urgent issues.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Lucknow and need help maintaining / redesigning my website.",
  },

  /* ================================================================ */
  /* GORAKHPUR                                                         */
  /* ================================================================ */
  {
    citySlug: "gorakhpur",
    slug: "ecommerce-website-development",
    kind: "ecommerce",
    navLabel: "E-Commerce Website Development",
    globalServiceSlug: "ecommerce-website-development",
    seoTitle: "E-Commerce Website Developer in Gorakhpur | Online Store Development",
    metaDescription:
      "Gorakhpur e-commerce website developer for retailers, wholesalers and terracotta & handloom sellers. Fast mobile stores with UPI checkout, local delivery and pan-India shipping.",
    h1: "E-Commerce Website Developer in Gorakhpur",
    primaryKeyword: "gorakhpur ecommerce website developer",
    secondaryKeywords: [
      "ecommerce website development in gorakhpur",
      "online store developer gorakhpur",
    ],
    heroLead:
      "Take your Gorakhpur shop online. I build simple, fast online stores for retailers, wholesalers and local makers — with UPI payments, local delivery around Gorakhpur, and courier shipping across India.",
    priceLabel: "₹60,000 – ₹1,50,000",
    timeline: "4–8 weeks",
    audiences: [
      {
        title: "Golghar & Bank Road retailers",
        text: "Electronics, clothing, footwear or grocery stores that want customers to order online for home delivery.",
      },
      {
        title: "Terracotta & handloom makers",
        text: "Gorakhpur terracotta (ODOP product) and handloom sellers who want to reach buyers across India, not just local fairs.",
      },
      {
        title: "Wholesalers & distributors",
        text: "Let shop owners from Deoria, Basti, Kushinagar and nearby towns see your catalogue and order in bulk.",
      },
    ],
    included: [
      "Product catalogue with photos, prices and stock",
      "UPI, card and cash on delivery payments via Razorpay",
      "Local delivery zones for Gorakhpur plus courier shipping",
      "Wholesale / bulk pricing option for B2B buyers",
      "Order alerts on WhatsApp and email",
      "Easy admin panel to manage products and orders",
      "Pages set up to show on Google",
      "Hindi + English content option",
    ],
    localSection: {
      heading: "Selling online from Gorakhpur — to your city and the rest of India",
      paragraphs: [
        "Customers in Gorakhpur now shop on their phones just like customers in big cities — but most local shops still don't have an online store. That gap is your opportunity. A simple store lets regular customers reorder without calling, and lets new customers from Civil Lines, Taramandal or nearby towns find you on Google.",
        "Gorakhpur also has products the whole country wants: terracotta craft from Aurangabad village, handloom textiles, and regional food products. With a proper online store and good product photos, these can sell far beyond local markets.",
        "I keep the store simple to run. You shouldn't need a computer expert to add a product or check today's orders — it all works from your phone.",
      ],
      bullets: [
        "Separate prices for retail customers and wholesale buyers",
        "Delivery charges by area within Gorakhpur",
        "Bilingual product pages (Hindi and English) for local buyers",
        "Help with product photos and descriptions on request",
      ],
    },
    faqs: [
      {
        question: "What does an e-commerce website cost in Gorakhpur?",
        answer:
          "A custom online store usually costs between ₹60,000 and ₹1,50,000, depending on products, payments, delivery setup and features like wholesale pricing. You get a fixed written quote first.",
      },
      {
        question: "Can I offer local home delivery in Gorakhpur?",
        answer:
          "Yes. I can set up delivery zones and charges for areas within Gorakhpur, plus courier shipping for orders from other cities.",
      },
      {
        question: "Can the website be in Hindi?",
        answer:
          "Yes. Product names and descriptions can be in Hindi, English, or both — whatever your customers are most comfortable with.",
      },
      {
        question: "Do I need to visit an office to get started?",
        answer:
          "No. We can do everything over WhatsApp and phone. You share product details and photos, and I share preview links as the store is built.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Gorakhpur and want an online store for my business.",
  },
  {
    citySlug: "gorakhpur",
    slug: "wordpress-website-development",
    kind: "wordpress",
    navLabel: "WordPress Website Development",
    globalServiceSlug: "website-development",
    seoTitle: "WordPress Website Development in Gorakhpur | WordPress Developer",
    metaDescription:
      "WordPress website development in Gorakhpur for schools, hospitals, coaching centres and shops. Easy-to-edit, fast and secure WordPress sites from a freelance Gorakhpur WordPress developer.",
    h1: "WordPress Website Development in Gorakhpur",
    primaryKeyword: "wordpress website development in gorakhpur",
    secondaryKeywords: ["gorakhpur wordpress developer"],
    heroLead:
      "Get a WordPress website you can update yourself — notices, results, photos and blog posts — without calling a developer every time. I build fast, secure WordPress sites for Gorakhpur schools, hospitals, coaching centres and local businesses.",
    priceLabel: "₹25,000 – ₹60,000",
    timeline: "2–3 weeks",
    audiences: [
      {
        title: "Schools & coaching centres",
        text: "Post admission notices, exam results, events and photo galleries yourself, any time.",
      },
      {
        title: "Hospitals on Medical Road",
        text: "Keep doctor timings, departments and health camp updates current without technical help.",
      },
      {
        title: "Shops & service businesses",
        text: "Update offers, prices and photos from your phone, and get enquiries on WhatsApp.",
      },
    ],
    included: [
      "Custom, mobile-friendly design for your business",
      "Simple editor for pages, notices, posts and galleries",
      "Hindi and English content support",
      "WhatsApp, call and enquiry form buttons",
      "Google basics: titles, sitemap, Search Console, Google Maps",
      "Security setup and automatic backups",
      "Hosting and domain in your name",
      "Hands-on training (video call or recorded)",
    ],
    localSection: {
      heading: "A WordPress website Gorakhpur businesses can actually manage",
      paragraphs: [
        "Many websites in Gorakhpur were built and then never updated, because changing anything meant calling the developer. WordPress solves that — when it's set up simply. You log in, edit the text or upload a photo, and click update.",
        "The problem is that cheap WordPress sites are often loaded with heavy themes and dozens of plugins. They become slow on mobile data and easy to hack. I build WordPress sites lean: only what you need, kept updated, and backed up automatically.",
        "If you mostly need a fixed set of pages and very little editing, I may suggest a different, faster setup instead. You'll get an honest recommendation either way.",
      ],
      bullets: [
        "Notice board and results section for schools and institutes",
        "Doctor and department pages for hospitals and clinics",
        "Google Maps and Google Business Profile linking",
        "Fixing and speeding up existing WordPress websites",
      ],
    },
    faqs: [
      {
        question: "How much does a WordPress website cost in Gorakhpur?",
        answer:
          "A custom WordPress website usually costs ₹25,000–₹60,000 depending on pages and features like galleries, notices or blogs. You get a written quote before starting.",
      },
      {
        question: "Can my staff update the website?",
        answer:
          "Yes. I create separate logins for your staff and train them. They can post notices, results or photos without being able to break the design.",
      },
      {
        question: "Can the website have both Hindi and English?",
        answer:
          "Yes. Pages can be in Hindi, English, or both, depending on who your visitors are.",
      },
      {
        question: "My WordPress site is slow. Can you fix it?",
        answer:
          "Usually, yes. I check the theme, plugins, images and hosting, then remove what's slowing it down. If it can't be fixed properly, I'll tell you honestly.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Gorakhpur and need a WordPress website.",
  },
  {
    citySlug: "gorakhpur",
    slug: "web-application-development",
    kind: "web-app",
    navLabel: "Web App, React & Next.js Development",
    globalServiceSlug: "web-application-development",
    seoTitle: "Web Application Developer in Gorakhpur | Custom Software & SaaS",
    metaDescription:
      "Gorakhpur web application developer: custom software, React and Next.js development, full-stack and SaaS builds for GIDA manufacturers, hospitals, schools and startups.",
    h1: "Web Application & Custom Software Developer in Gorakhpur",
    primaryKeyword: "gorakhpur web application developer",
    secondaryKeywords: [
      "gorakhpur custom software developer",
      "gorakhpur react developer",
      "gorakhpur next js developer",
      "gorakhpur full stack developer",
      "gorakhpur saas developer",
    ],
    heroLead:
      "Replace registers, Excel sheets and scattered WhatsApp groups with software built for how your business works. I build custom web apps for Gorakhpur manufacturers, hospitals, schools and startups — usable on any phone or computer.",
    priceLabel: "₹1,50,000+",
    timeline: "Depends on features (usually 6–12 weeks)",
    audiences: [
      {
        title: "GIDA manufacturers & distributors",
        text: "Track orders, dispatch, stock and dealer payments in one place instead of separate registers.",
      },
      {
        title: "Hospitals, labs & schools",
        text: "Appointment booking, patient reports, fee collection, attendance and results — built around your process.",
      },
      {
        title: "Local startups",
        text: "Need a React / Next.js or full-stack developer for your first product? Build it in Gorakhpur, without hiring a whole team.",
      },
    ],
    included: [
      "Understanding your current process before designing anything",
      "Separate logins for owner, staff, dealers or customers",
      "Works on mobile, tablet and computer",
      "Reports and Excel/PDF export",
      "SMS, WhatsApp, email or payment integration",
      "Data stored securely with regular backups",
      "Training for your staff",
      "Full source code and data owned by you",
    ],
    localSection: {
      heading: "Custom software for Gorakhpur businesses — without big-city costs",
      paragraphs: [
        "Ready-made software rarely fits how a Gorakhpur business actually runs. A distributor in GIDA has a different dealer credit system than a Lucknow one; a hospital on Medical Road has its own way of handling OPD and reports. Custom software is built around your way of working, so your staff actually use it.",
        "You don't need to go to Noida or Bengaluru for this. As a full-stack developer working with Gorakhpur clients, I handle everything — the design, the React / Next.js screens, the backend and database, and putting it online — and you can reach me directly on WhatsApp throughout.",
        "We start small: the one or two features that save the most time. Once your team is using them, we add more. That keeps your cost low and makes sure every feature is actually useful.",
      ],
      bullets: [
        "Dealer and distributor order management",
        "OPD, appointment and lab report systems",
        "School and coaching management: fees, attendance, tests",
        "SaaS products for startups based in Gorakhpur",
      ],
    },
    faqs: [
      {
        question: "How much does custom software cost in Gorakhpur?",
        answer:
          "Custom web applications usually start around ₹1,50,000. The cost depends on features, user types and integrations. Starting with a small first version keeps it affordable.",
      },
      {
        question: "Will it work on mobile phones?",
        answer:
          "Yes. Everything I build works in the phone's browser, so staff can use it on their own phones without installing anything.",
      },
      {
        question: "What if my staff aren't comfortable with computers?",
        answer:
          "I keep screens simple, can add Hindi labels, and train your staff. The goal is software that's easier than the register they're using now.",
      },
      {
        question: "Can you build a SaaS product or app for my startup?",
        answer:
          "Yes. I build SaaS products and web apps with React, Next.js, Node.js and PostgreSQL, starting with a focused first version you can launch and test.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Gorakhpur and want to discuss custom software / a web app.",
  },
  {
    citySlug: "gorakhpur",
    slug: "website-maintenance-and-redesign",
    kind: "maintenance",
    navLabel: "Website Maintenance, Redesign & Hosting",
    globalServiceSlug: "website-maintenance-management",
    seoTitle: "Website Maintenance, Redesign & Hosting in Gorakhpur",
    metaDescription:
      "Website maintenance, management, redesign and hosting services in Gorakhpur. Keep your site updated, secure and fast — or redesign it — with hosting set up in your own name.",
    h1: "Website Maintenance, Redesign & Hosting in Gorakhpur",
    primaryKeyword: "gorakhpur website maintenance",
    secondaryKeywords: [
      "gorakhpur website management",
      "gorakhpur website redesign",
      "gorakhpur website hosting services",
    ],
    heroLead:
      "Keep your Gorakhpur business website working, safe and up to date. I handle updates, backups, hosting and small changes, and redesign old websites so they look modern and work well on mobile.",
    priceLabel: "Monthly plan or one-time redesign",
    timeline: "Redesign: 2–4 weeks",
    audiences: [
      {
        title: "Website is down or expired",
        text: "Domain or hosting expired, or the site shows errors? I'll get it back online and set up reminders.",
      },
      {
        title: "Old, non-mobile website",
        text: "If your site was made years ago and looks broken on phones, a redesign brings it up to date.",
      },
      {
        title: "Need reliable hosting",
        text: "Cheap shared hosting making your site slow? I'll move it to fast, reliable hosting in your name.",
      },
    ],
    included: [
      "Hosting setup or migration — account in your name",
      "Domain and SSL renewal tracking",
      "Software and security updates",
      "Automatic backups",
      "Small changes on WhatsApp request",
      "Speed and uptime monitoring",
      "Redesign with old page redirects kept",
      "Plain-language monthly summary",
    ],
    localSection: {
      heading: "Website care and hosting for Gorakhpur businesses",
      paragraphs: [
        "A common story in Gorakhpur: someone made the website years ago, put the domain and hosting in their own name, and now can't be reached. The site breaks or expires, and the business owner doesn't even have the login. I help recover those accounts and move everything into your name — so this never happens again.",
        "Hosting matters more than most people think. Very cheap hosting is often slow and goes down often, which hurts both customers and Google rankings. I'll set up good hosting suited to your site's size and keep an eye on it for you.",
        "If your site is too old to fix, a redesign is the way forward. I keep your important pages and their addresses, so you don't lose the Google traffic you already have.",
      ],
      bullets: [
        "Free check of your current site, domain and hosting",
        "Recovery of domain and hosting access",
        "Moving from slow shared hosting to faster hosting",
        "Redesign of old WordPress or HTML sites",
      ],
    },
    faqs: [
      {
        question: "Do you provide website hosting in Gorakhpur?",
        answer:
          "I set up and manage hosting for you, but the hosting account is always in your name. That way you stay in control and can never be locked out.",
      },
      {
        question: "How much does website maintenance cost?",
        answer:
          "It depends on your site's size and how often you need changes. After a free check, I suggest a simple monthly plan with no long contract.",
      },
      {
        question: "My domain expired. Can you get my website back?",
        answer:
          "Often yes, if it's still within the renewal grace period. Message me as soon as possible and I'll check the domain status and help you renew it.",
      },
      {
        question: "Will redesigning my website affect Google?",
        answer:
          "Done properly, no. I keep your page addresses or set up redirects, and carry over titles and content so your rankings are protected.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Gorakhpur and need help with website maintenance / hosting / redesign.",
  },

  /* ================================================================ */
  /* KANPUR                                                            */
  /* ================================================================ */
  {
    citySlug: "kanpur",
    slug: "ecommerce-website-development",
    kind: "ecommerce",
    navLabel: "E-Commerce Website Development",
    globalServiceSlug: "ecommerce-website-development",
    seoTitle: "E-Commerce Website Developer in Kanpur | E-Commerce Design & Development",
    metaDescription:
      "Kanpur e-commerce website developer for leather, footwear, apparel and D2C brands. E-commerce design and development with UPI checkout, B2B bulk ordering and export-ready catalogues.",
    h1: "E-Commerce Website Developer in Kanpur",
    primaryKeyword: "kanpur ecommerce website developer",
    secondaryKeywords: ["ecommerce development in kanpur", "ecommerce design kanpur"],
    heroLead:
      "Kanpur makes products the whole world buys — leather goods, footwear, textiles. I design and build online stores that let Kanpur brands sell directly to customers across India, and take bulk orders from retailers and buyers.",
    priceLabel: "₹60,000 – ₹1,50,000",
    timeline: "4–8 weeks",
    audiences: [
      {
        title: "Leather & footwear brands",
        text: "Jajmau and Unnao belt manufacturers launching their own brand online instead of only supplying others.",
      },
      {
        title: "Apparel & hosiery makers",
        text: "Sell sizes and colours clearly, with stock tracked per variant, directly to customers nationwide.",
      },
      {
        title: "B2B suppliers",
        text: "Let retailers and distributors see your catalogue, wholesale prices and minimum order quantities, and order online.",
      },
    ],
    included: [
      "Store design that matches your brand, not a generic theme",
      "Products with size/colour variants and stock per variant",
      "UPI, card and COD checkout through Razorpay",
      "Separate retail and wholesale pricing with minimum quantities",
      "GST invoices and shipping by pin code",
      "Order dashboard and WhatsApp/email alerts",
      "Fast product and category pages built for Google",
      "Option for international enquiry forms for export buyers",
    ],
    localSection: {
      heading: "From Kanpur factory to customer's doorstep",
      paragraphs: [
        "For decades, Kanpur's leather, footwear and textile units have made products that other brands sell. Today, any Kanpur manufacturer can build their own brand and sell directly — keeping much more of the profit. The online store is where that brand lives.",
        "Good e-commerce design matters here. Buyers comparing your shoes or bags with big brands need sharp photos, clear sizing, honest return policies and a quick checkout. A slow or confusing store loses those sales, no matter how good the product is.",
        "Many Kanpur businesses sell both retail and wholesale. I can build both into one store: retail customers see normal prices, while approved trade buyers log in to see wholesale rates and minimum order quantities.",
      ],
      bullets: [
        "Size charts for footwear and apparel",
        "Wholesale login with trade pricing",
        "Enquiry forms for export and bulk buyers",
        "Moving from IndiaMART-only listings to your own branded store",
      ],
    },
    faqs: [
      {
        question: "How much does an e-commerce website cost in Kanpur?",
        answer:
          "A custom online store typically costs ₹60,000–₹1,50,000. Wholesale pricing, many product variants or export features can affect the price. You get a written quote first.",
      },
      {
        question: "Can one store handle both retail and wholesale orders?",
        answer:
          "Yes. Retail customers see normal prices, and approved wholesale buyers log in to see trade prices and minimum order quantities.",
      },
      {
        question: "Do you also design the store, or only develop it?",
        answer:
          "Both. I handle the e-commerce design (layout, look and feel, product pages) and the development, so it all fits together.",
      },
      {
        question: "Can export buyers enquire through the website?",
        answer:
          "Yes. I can add an enquiry or quote request form for international buyers alongside the regular checkout for Indian customers.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Kanpur and want to discuss an e-commerce website for my brand.",
  },
  {
    citySlug: "kanpur",
    slug: "website-maintenance-and-redesign",
    kind: "maintenance",
    navLabel: "Website Maintenance & Redesign",
    globalServiceSlug: "website-maintenance-management",
    seoTitle: "Website Maintenance & Redesign in Kanpur | Website Management",
    metaDescription:
      "Website maintenance, management and redesign in Kanpur for manufacturers, exporters, coaching institutes and local businesses. Updates, security, speed and modern redesigns.",
    h1: "Website Maintenance, Management & Redesign in Kanpur",
    primaryKeyword: "kanpur website maintenance",
    secondaryKeywords: ["kanpur website management", "kanpur website redesign"],
    heroLead:
      "Is your company website outdated or not looked after? I maintain and redesign websites for Kanpur manufacturers, exporters, coaching institutes and local businesses — so your site looks professional and keeps bringing enquiries.",
    priceLabel: "Monthly plan or one-time redesign",
    timeline: "Redesign: 2–4 weeks",
    audiences: [
      {
        title: "Manufacturers & exporters",
        text: "Buyers judge your company by your website. An outdated one costs you trust before the first call.",
      },
      {
        title: "Kakadeo coaching institutes",
        text: "Keep batches, results and admission details updated every session without chasing a developer.",
      },
      {
        title: "Shops & local services",
        text: "Need offers, timings or photos changed regularly? Send it on WhatsApp and it's done.",
      },
    ],
    included: [
      "Regular software and security updates",
      "Backups and quick restore if anything breaks",
      "Uptime and speed monitoring",
      "Content updates on request",
      "Fixing broken forms and email",
      "Domain, SSL and hosting renewal tracking",
      "Redesign with SEO-safe redirects",
      "Simple monthly report",
    ],
    localSection: {
      heading: "Why Kanpur companies should not ignore their website",
      paragraphs: [
        "Many Kanpur industrial units got a website built for an exhibition or a buyer request years ago — and haven't touched it since. Today, international and domestic buyers check your website before replying to your quote. An old design, broken product pages or a 'Not secure' warning tells them you may not be a serious supplier.",
        "A redesign fixes that: modern look, clear product categories, certifications and factory photos, and an easy enquiry form. I keep your existing pages' Google rankings by redirecting old addresses properly.",
        "After that, a simple maintenance plan keeps everything updated and secure, so you never end up with an outdated site again.",
      ],
      bullets: [
        "Product catalogue and certification pages for exporters",
        "Batch, fees and results pages for coaching institutes",
        "Free check of speed, security and mobile issues",
        "Takeover of sites built by other developers or agencies",
      ],
    },
    faqs: [
      {
        question: "How much does website maintenance cost in Kanpur?",
        answer:
          "Monthly plans depend on site size and how many changes you need. I suggest a plan after a free check, with no long-term contract.",
      },
      {
        question: "How long does a website redesign take?",
        answer:
          "Most redesigns take 2–4 weeks, depending on the number of pages and how quickly content and photos are ready.",
      },
      {
        question: "Will I lose my Google rankings after redesign?",
        answer:
          "No, if it's done correctly. I keep or redirect old page addresses and carry over important content, so search engines understand the change.",
      },
      {
        question: "Can you take over a site another agency built?",
        answer:
          "Yes. I review the site first, collect all access details, and point out anything urgent before taking over maintenance.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Kanpur and need website maintenance / redesign.",
  },

  /* ================================================================ */
  /* FARIDABAD                                                         */
  /* ================================================================ */
  {
    citySlug: "faridabad",
    slug: "ecommerce-website-development",
    kind: "ecommerce",
    navLabel: "E-Commerce Website Development",
    globalServiceSlug: "ecommerce-website-development",
    seoTitle: "E-Commerce Website Development Company in Faridabad | Online Stores",
    metaDescription:
      "E-commerce website development in Faridabad for NCR D2C brands, wholesalers and industrial suppliers. Fast stores with UPI checkout, B2B ordering and NCR delivery — built by an independent developer.",
    h1: "E-Commerce Website Development in Faridabad",
    primaryKeyword: "ecommerce website development company in faridabad",
    secondaryKeywords: ["faridabad ecommerce website developer"],
    heroLead:
      "Build an online store that sells across Delhi-NCR and India. I develop fast e-commerce websites for Faridabad D2C brands, wholesalers and industrial suppliers — with UPI checkout, bulk ordering and quick delivery setup for NCR.",
    priceLabel: "₹60,000 – ₹1,50,000",
    timeline: "4–8 weeks",
    audiences: [
      {
        title: "NCR D2C brands",
        text: "Home, kitchen, apparel and lifestyle brands that want their own store instead of depending only on marketplaces.",
      },
      {
        title: "Industrial & spare parts suppliers",
        text: "IMT and Sector 58–59 businesses selling tools, spares or components online to workshops and contractors.",
      },
      {
        title: "Wholesalers",
        text: "Let retailers across NCR browse stock, see trade prices and place repeat orders online.",
      },
    ],
    included: [
      "Fast product and category pages",
      "UPI, card and COD checkout via Razorpay",
      "Search and filters for large catalogues (parts, SKUs)",
      "Wholesale pricing and quote requests",
      "Same-day / next-day delivery zones for NCR",
      "GST invoices and order dashboard",
      "WhatsApp and email order alerts",
      "Store, domain and payment accounts in your name",
    ],
    localSection: {
      heading: "An online store built for Faridabad and NCR buyers",
      paragraphs: [
        "Faridabad sits right next to one of India's biggest online-shopping markets. Buyers in Delhi, Gurugram and Noida expect fast delivery and a smooth checkout — and your store needs to match what they're used to from big platforms.",
        "Selling only on marketplaces means high commissions and no direct relationship with your customers. Your own store lets you keep more of each sale, build repeat customers, and run your own offers. Many brands use both: marketplaces for discovery, their own store for loyal buyers.",
        "For industrial suppliers, the challenge is different: hundreds of SKUs with technical specs. I build clear search and filters so a buyer can find the exact part by size, model or specification, then order or request a quote.",
      ],
      bullets: [
        "Product search by part number, size or specification",
        "Quote request for bulk orders",
        "Delivery zones for Faridabad, Delhi, Gurugram and Noida",
        "Moving from Shopify or WooCommerce to a faster custom store",
      ],
    },
    faqs: [
      {
        question: "How much does an e-commerce website cost in Faridabad?",
        answer:
          "Most custom online stores cost ₹60,000–₹1,50,000 depending on catalogue size, filters, payment and delivery setup. You get a written quote before starting.",
      },
      {
        question: "Is it better to have my own store or sell on marketplaces?",
        answer:
          "Ideally both. Marketplaces help new customers find you; your own store avoids commissions and builds repeat buyers. I can help you set up your store to work alongside marketplaces.",
      },
      {
        question: "Can you handle a large catalogue of industrial parts?",
        answer:
          "Yes. I build search and filters by specification, part number or category, and can import products in bulk from Excel.",
      },
      {
        question: "Are you an agency?",
        answer:
          "No — I'm an independent developer. You work directly with the person building your store, which keeps communication simple and costs fair.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Faridabad and want to discuss an e-commerce website.",
  },
  {
    citySlug: "faridabad",
    slug: "website-maintenance-and-redesign",
    kind: "maintenance",
    navLabel: "Website Maintenance & Redesign",
    globalServiceSlug: "website-maintenance-management",
    seoTitle: "Website Maintenance & Redesign in Faridabad | Website Management",
    metaDescription:
      "Website maintenance, management and redesign in Faridabad for MSMEs, auto-component manufacturers, hospitals and real estate firms. Secure, fast and up-to-date websites.",
    h1: "Website Maintenance, Management & Redesign in Faridabad",
    primaryKeyword: "faridabad website maintenance",
    secondaryKeywords: ["faridabad website management", "faridabad website redesign"],
    heroLead:
      "Keep your Faridabad company website secure, fast and professional. I maintain and redesign websites for MSMEs, auto-component manufacturers, hospitals and real estate firms — with quick help on WhatsApp whenever you need a change.",
    priceLabel: "Monthly plan or one-time redesign",
    timeline: "Redesign: 2–4 weeks",
    audiences: [
      {
        title: "Auto & engineering MSMEs",
        text: "OEM buyers check your website, capabilities and certifications. It should look as solid as your factory.",
      },
      {
        title: "Hospitals & clinics",
        text: "Doctor lists, timings and services change often — keep them accurate so patients don't call the wrong number.",
      },
      {
        title: "Real estate firms",
        text: "Update projects, prices and availability quickly, and make sure enquiry forms actually reach your sales team.",
      },
    ],
    included: [
      "Security and software updates",
      "Regular backups",
      "Uptime and speed monitoring",
      "Content changes on WhatsApp request",
      "Contact form and email delivery checks",
      "Domain, SSL and hosting renewals tracked",
      "Redesign with SEO-safe redirects",
      "Clear monthly summary",
    ],
    localSection: {
      heading: "Website care for Faridabad's manufacturers and businesses",
      paragraphs: [
        "Faridabad's industrial belt — IMT, Sector 58–59 and along Mathura Road — supplies some of India's biggest automotive and engineering companies. When a procurement team shortlists suppliers, your website is often the first thing they check. Outdated pages, missing certifications or a broken contact form can quietly take you off the list.",
        "A redesign brings your site up to the standard of your work: capabilities, machinery, certifications (ISO, IATF), clients served and a clear way to send an RFQ. Your existing Google rankings are protected with proper redirects.",
        "After that, I keep the site maintained and secure each month, and make updates whenever you add new products, certifications or projects.",
      ],
      bullets: [
        "Capabilities, machinery and certification pages for manufacturers",
        "RFQ / quote forms that send straight to email and WhatsApp",
        "Free review of speed, security and mobile issues",
        "Takeover of websites built by other agencies",
      ],
    },
    faqs: [
      {
        question: "How much does website maintenance cost in Faridabad?",
        answer:
          "It depends on your site's size and how often you need updates. After a free check, I suggest a simple monthly plan without a long-term contract.",
      },
      {
        question: "How long does a website redesign take?",
        answer:
          "Usually 2–4 weeks, depending on pages and how quickly content, photos and certifications are shared.",
      },
      {
        question: "Will the redesign affect my Google rankings?",
        answer:
          "Not when done properly. I keep or redirect existing page addresses and keep important content, so your rankings are protected.",
      },
      {
        question: "Do you visit Faridabad in person?",
        answer:
          "Most work happens over WhatsApp, phone and video calls, which keeps things quick. In-person meetings can be arranged for larger projects.",
      },
    ],
    whatsappMessage:
      "Hi Navnit, I'm from Faridabad and need website maintenance / redesign.",
  },
];

export function getLocalServicePagesForCity(citySlug: string): LocalServicePage[] {
  return localServicePages.filter((p) => p.citySlug === citySlug);
}

export function getLocalServicePage(
  citySlug: string,
  slug: string
): LocalServicePage | undefined {
  return localServicePages.find((p) => p.citySlug === citySlug && p.slug === slug);
}

/** Same service kind in other cities — for cross-city linking. */
export function getSameServiceInOtherCities(page: LocalServicePage): LocalServicePage[] {
  return localServicePages.filter(
    (p) => p.kind === page.kind && p.citySlug !== page.citySlug
  );
}

const kindByGlobalService: Record<string, LocalServiceKind> = {
  "ecommerce-website-development": "ecommerce",
  "website-redesign": "maintenance",
  "website-maintenance-management": "maintenance",
  "web-application-development": "web-app",
  "nextjs-development": "web-app",
  "react-development": "web-app",
  "full-stack-development": "web-app",
};

/**
 * Best internal link for a service mentioned on a city hub page: the
 * dedicated city + service page if one exists, else the global service page.
 */
export function getCityServiceHref(citySlug: string, globalServiceSlug: string): string {
  const kind = kindByGlobalService[globalServiceSlug];
  const local = kind
    ? localServicePages.find((p) => p.citySlug === citySlug && p.kind === kind)
    : undefined;
  return local ? `/locations/${citySlug}/${local.slug}` : `/services/${globalServiceSlug}`;
}
