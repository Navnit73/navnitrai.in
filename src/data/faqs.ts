export interface FaqCategory {
  id: string;
  title: string;
  description: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}

export const faqCategories: FaqCategory[] = [
  {
    id: "working-together",
    title: "Working With an Independent Freelance Developer",
    description:
      "How direct collaboration with Navnit Rai differs from traditional agencies.",
    items: [
      {
        question: "Why hire an independent freelance developer instead of a web development agency?",
        answer:
          "With an agency, your brief passes through sales representatives, project managers, and junior developers. Working directly with me means you speak straight to the senior engineer architecting your code, SEO structure, and conversion flow—resulting in cleaner output and zero agency markup.",
      },
      {
        question: "Do you work with clients outside Lucknow, Gorakhpur, Kanpur, and Faridabad?",
        answer:
          "Yes. While I actively serve businesses across Uttar Pradesh (Lucknow, Gorakhpur, Kanpur) and Delhi-NCR (Faridabad, Noida, Gurugram, Delhi), projects run smoothly remotely for startups and SMEs across India.",
      },
      {
        question: "How do project communication and approvals work?",
        answer:
          "Communication stays crisp and structured: WhatsApp for quick daily decisions, scheduled phone/video calls for milestone reviews, and staging preview URLs so you inspect working pages throughout the build.",
      },
    ],
  },
  {
    id: "pricing-timelines",
    title: "Pricing, Milestones & Timelines",
    description: "Transparent factors shaping project scope and delivery speed.",
    items: [
      {
        question: "How much does a website cost in India?",
        answer:
          "Pricing depends on real engineering scope rather than arbitrary page counts. Focused campaign landing pages sit under ₹25,000; custom business websites typically fall in the ₹25,000–₹60,000 range; custom e-commerce and tailored web applications range from ₹60,000 to ₹1,50,000+ depending on integrations.",
      },
      {
        question: "How are payments structured?",
        answer:
          "Projects run on transparent milestone schedules—typically an initial booking deposit to start architecture & design, a mid-project staging milestone, and final payment prior to production handover.",
      },
      {
        question: "What is the typical delivery timeline?",
        answer:
          "A focused landing page takes 4–7 days, a multi-page business website takes 2–3 weeks, and custom e-commerce or web application builds take 4–8 weeks depending on content readiness and integrations.",
      },
    ],
  },
  {
    id: "seo-technology",
    title: "Technology Stack & Technical SEO",
    description: "How Next.js, React, Vue, and technical SEO work together.",
    items: [
      {
        question: "Why do you recommend Next.js for business and e-commerce websites?",
        answer:
          "Next.js renders clean HTML on the server, loads fast on Indian 4G networks, eliminates fragile plugin security holes common in bloated CMS setups, and gives fine-grained control over canonicals, sitemaps, Core Web Vitals, and structured data.",
      },
      {
        question: "Can you still help if my current site runs on WordPress?",
        answer:
          "Yes. I can advise honestly whether optimizing/maintaining your existing WordPress setup makes sense or whether migrating to a faster custom Next.js build will deliver better long-term ROI.",
      },
      {
        question: "Is technical SEO included in every website build?",
        answer:
          "Yes. Clean URL hierarchy, semantic H1–H3 structure, unique titles and meta descriptions, self-referencing canonicals, XML sitemap, robots.txt, and core JSON-LD schema are standard engineering practice—not an extra upsell.",
      },
    ],
  },
  {
    id: "ownership-support",
    title: "Code Ownership, Hosting & Maintenance",
    description: "Control over your digital assets after launch.",
    items: [
      {
        question: "Who owns the source code, domain, and hosting accounts?",
        answer:
          "You retain 100% ownership of your domain, cloud hosting accounts, and final repository code upon milestone completion. There is zero vendor lock-in.",
      },
      {
        question: "Do you provide ongoing maintenance after launch?",
        answer:
          "Yes. Through dedicated maintenance and management plans (or scoped requests), I handle dependency updates, backups, uptime checks, speed monitoring, and new page additions.",
      },
      {
        question: "Are the phone number and case studies on navnitrai.in verified?",
        answer:
          "Any placeholder configuration values (such as sample phone/email placeholders in the configuration file) and reference architecture case studies are explicitly labeled until replaced with your live credentials and client outcomes.",
      },
    ],
  },
];

export const allFaqsFlat = faqCategories.flatMap((cat) => cat.items);
