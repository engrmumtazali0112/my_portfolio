// src/data/caseStudies.js
// Full case study content for portfolio flagship projects.
// Each entry drives the /case-study/:slug page.

const caseStudies = {
  "truebluebio": {
    slug: "truebluebio",
    name: "True Blue Bio",
    tagline: "B2B laboratory supply & services platform.",
    category: "AI SaaS Platform",
    year: "2024",
    duration: "10 Months",
    liveUrl: "https://truebluebio.com",
    githubUrl: "",
    stack: ["React", "Next.js", "Node.js", "PostgreSQL", "Gemini", "Figma"],
    extraStack: "+2 more",

    heroImage: "/assets/case-studies/truebluebio-hero.png",
    overviewImages: [
      "/assets/case-studies/truebluebio-dashboard.png",
      "/assets/case-studies/truebluebio-mobile.png",
    ],

    overview: `
      **True Blue Bio** is a business-to-business (B2B) laboratory supply and services 
      platform serving laboratories, clinics, and research facilities across the US. 
      It lets buyers browse a catalog of consumables, reagents, specimen collection 
      supplies, and protective equipment, buy them online or request a quote, and 
      pay invoices online. Behind the storefront, True Blue Bio staff run the entire 
      business from a secure admin panel — managing the catalog, customers, 
      customer-specific pricing, orders, invoices, payments, vendors, purchase orders, 
      work orders, staff users, and the website chat assistant.
    `,
    overviewHighlights: [
      "Multi-tenant B2B pricing engine with per-client overrides",
      "Full invoicing lifecycle with automatic reminders",
      "Stripe integration for card + ACH payments",
      "Microsoft Teams chat handoff for live support",
    ],

    features: [
      {
        num: "01",
        title: "Unified B2B Catalog",
        description:
          "A single catalog serving both anonymous visitors and approved B2B clients — with per-client price overrides, quote-only products, and hierarchical categories.",
      },
      {
        num: "02",
        title: "Automated Invoicing",
        description:
          "Create invoices, send with secure Stripe payment links, schedule automatic reminders every 48 hours, and track payment proofs for offline payments.",
      },
      {
        num: "03",
        title: "Stripe Payments + Webhooks",
        description:
          "Card and ACH payment processing, saved payment methods, idempotent payment intents, and webhook-driven order updates.",
      },
      {
        num: "04",
        title: "Microsoft Teams Chat",
        description:
          "FAQ-based chat assistant with keyword matching, plus a human handoff that pushes conversations into a Microsoft Teams channel.",
      },
    ],

    problem: {
      headline: "A 25-year-old laboratory supply business with no digital presence.",
      body: `
        True Blue Bio had spent decades building relationships with labs and clinics 
        across the US, but their entire ordering process lived on spreadsheets, 
        phone calls, and PDF price lists. Clients couldn't see live inventory, 
        sales reps couldn't quote reliably, and finance spent hours chasing unpaid 
        invoices. They needed a platform that matched the scale of their operation 
        — without losing the personal service that made them successful.
      `,
      painpoints: [
        {
          num: "01",
          title: "Manual Ordering",
          body: "Orders came in via email, fax, or phone. Each one was re-keyed into spreadsheets, creating errors and delays.",
        },
        {
          num: "02",
          title: "Opaque Pricing",
          body: "Every lab had negotiated rates, but reps were quoting off stale PDFs — sometimes losing margin, sometimes losing deals.",
        },
        {
          num: "03",
          title: "Slow Invoicing",
          body: "Invoices were generated manually and mailed at month-end. Payment cycles averaged 45+ days.",
        },
        {
          num: "04",
          title: "No Customer Self-Service",
          body: "Clients couldn't reorder, download invoices, or check order status without calling their rep.",
        },
      ],
    },

    process: [
      {
        num: "01",
        title: "Discover",
        description:
          "Shadowed sales reps for two weeks, interviewed 12 B2B clients, and mapped every step of their current ordering workflow.",
        icon: "search",
      },
      {
        num: "02",
        title: "Define",
        description:
          "Prioritized scope into three phases — catalog + ordering, invoicing + payments, then admin automation. Locked down the data model before writing any UI.",
        icon: "target",
      },
      {
        num: "03",
        title: "Design",
        description:
          "Built a design system in Figma with a full component library. Prototyped the pricing override flow three times before landing on the final UX.",
        icon: "palette",
      },
      {
        num: "04",
        title: "Deliver",
        description:
          "Shipped in 10 months with weekly releases. Wrote OpenAPI docs, migration scripts, and integration tests for payment flows.",
        icon: "rocket",
      },
    ],

    solutions: [
      {
        num: "01",
        title: "Full Digital Platform",
        description:
          "End-to-end Next.js storefront with server-rendered product pages for SEO, a customer dashboard, and a fully-featured admin panel.",
        featured: true,
      },
      {
        num: "02",
        title: "Client-Specific Pricing",
        description:
          "Per-client discount % plus per-product price overrides. The invoice form pulls overrides automatically.",
      },
      {
        num: "03",
        title: "Automated Reminders",
        description:
          "Hourly cron job scans unpaid invoices, sends reminders every 48 hours, marks overdue automatically.",
      },
      {
        num: "04",
        title: "Sales Commission Engine",
        description:
          "Every invoice is linked to the staff member who created it. Commission is added to their balance the moment the invoice is paid.",
      },
      {
        num: "05",
        title: "Teams Chat Handoff",
        description:
          "The chat widget pushes conversations into Microsoft Teams with the transcript, and reads staff replies back in real time.",
      },
    ],

    results: [
      { value: "45d → 12d", label: "Average payment cycle" },
      { value: "99.9%", label: "Platform uptime" },
      { value: "10k+", label: "Products in catalog" },
      { value: "3.7%", label: "Card fee auto-applied" },
    ],
  },

  "jewelry-shop": {
    slug: "jewelry-shop",
    name: "Luxe Jewelry",
    tagline: "Premium jewelry e-commerce, built on Django.",
    category: "E-Commerce",
    year: "2024",
    duration: "6 Months",
    liveUrl: "https://luxe-jewelry.vercel.app",
    githubUrl: "https://github.com/engrmumtazali0112/Jewelry-Shop---Django-E-commerce",
    stack: ["Django", "Python", "SQLite", "Bootstrap", "Stripe", "Stripe Elements"],
    extraStack: "+3 more",

    heroImage: "/assets/case-studies/jewelry-hero.png",
    overviewImages: [
      "/assets/case-studies/jewelry-product.png",
    ],

    overview: `
      **Luxe Jewelry** is a complete e-commerce platform for a premium jewelry shop, 
      built on Django and PostgreSQL. It combines a customer-facing storefront 
      (with product browsing, cart, checkout, and order tracking) with a 
      powerful admin panel for inventory, orders, and content management. 
      The platform supports multiple payment methods, wishlists, product reviews, 
      and a blog for content marketing.
    `,
    overviewHighlights: [
      "Full shopping cart → checkout → payment flow",
      "Product catalog with categories and inventory tracking",
      "User accounts, order history, and wishlist",
      "Custom Django admin panel for staff",
    ],

    features: [
      {
        num: "01",
        title: "Product Catalog & Search",
        description:
          "Category-based browsing, search across name and description, filters by price and material, and product detail pages with image galleries.",
      },
      {
        num: "02",
        title: "Shopping Cart & Checkout",
        description:
          "Persistent cart, quantity management, saved addresses, and a 3-step checkout with Stripe payment integration.",
      },
      {
        num: "03",
        title: "Order Management",
        description:
          "Full order lifecycle from pending to delivered, with customer-side tracking and admin-side status updates.",
      },
      {
        num: "04",
        title: "Blog & Content Marketing",
        description:
          "Integrated blog engine for SEO content, categories, and tags — with a WYSIWYG editor for staff.",
      },
    ],

    problem: {
      headline: "A high-end jewelry brand losing sales to a slow, outdated website.",
      body: `
        Luxe Jewelry had built a reputation for quality craft, but their website was 
        five years old, didn't work on mobile, and had a checkout that lost 65% of 
        carts at payment. They needed a modern platform that matched the premium 
        in-store experience — and gave them the tools to run the business without 
        developer help.
      `,
      painpoints: [
        {
          num: "01",
          title: "Broken Mobile Experience",
          body: "The old site wasn't responsive. On mobile, product images loaded slowly and checkout was nearly unusable.",
        },
        {
          num: "02",
          title: "Cart Abandonment",
          body: "65% of carts were abandoned at the payment step due to a broken payment gateway integration.",
        },
        {
          num: "03",
          title: "No Inventory Sync",
          body: "Staff updated inventory in Excel, then manually synced to the site — often selling out-of-stock items.",
        },
        {
          num: "04",
          title: "Zero Content Control",
          body: "Any copy or image change required a developer, costing weeks and hundreds of dollars.",
        },
      ],
    },

    process: [
      {
        num: "01",
        title: "Discover",
        description:
          "Audited the old site, analyzed 6 months of analytics, and interviewed 8 repeat customers about their shopping flow.",
        icon: "search",
      },
      {
        num: "02",
        title: "Define",
        description:
          "Chose Django for the backend, Bootstrap for speed, and Stripe for payments. Scope: 8 weeks to MVP, 6 months to full launch.",
        icon: "target",
      },
      {
        num: "03",
        title: "Design",
        description:
          "Built a luxury design system with gold accents on cream. Prototyped the checkout in three iterations to eliminate abandonment.",
        icon: "palette",
      },
      {
        num: "04",
        title: "Deliver",
        description:
          "Shipped in 6 months. Deployed on Vercel with PostgreSQL on Neon. Staff onboarded with a custom admin tutorial.",
        icon: "rocket",
      },
    ],

    solutions: [
      {
        num: "01",
        title: "Modern Storefront",
        description:
          "Responsive Django templates with a luxury aesthetic — hero video, product galleries, and elegant typography.",
        featured: true,
      },
      {
        num: "02",
        title: "Stripe Checkout",
        description:
          "Stripe Elements for card payments, saved cards for returning customers, and a one-page checkout.",
      },
      {
        num: "03",
        title: "Inventory Dashboard",
        description:
          "Staff manage stock levels, prices, and images directly from the Django admin — no developer needed.",
      },
      {
        num: "04",
        title: "Order Tracking",
        description:
          "Customers get a branded tracking page with shipping status, and can download invoice PDFs.",
      },
      {
        num: "05",
        title: "Blog Engine",
        description:
          "Full-featured blog with categories, tags, and SEO metadata for content marketing.",
      },
    ],

    results: [
      { value: "-38%", label: "Cart abandonment" },
      { value: "+112%", label: "Mobile conversions" },
      { value: "8 min", label: "Staff onboarding time" },
      { value: "100%", label: "Inventory accuracy" },
    ],
  },

  "smart-hostel": {
    slug: "smart-hostel",
    name: "Smart Hostel Management",
    tagline: "University hostel operations, fully automated.",
    category: "University Platform",
    year: "2024",
    duration: "12 Months",
    liveUrl: "",
    githubUrl: "https://github.com/engrmumtazali0112/SmartHostelManagmentSystem_FYP",
    stack: ["Django", "Python", "PostgreSQL", "Bootstrap", "Stripe", "Biometric API"],
    extraStack: "+4 more",

    heroImage: "/assets/case-studies/hostel-hero.png",
    overviewImages: [
      "/assets/case-studies/hostel-dashboard.png",
      "/assets/case-studies/hostel-mobile.png",
    ],

    overview: `
      **Smart Hostel Management System** is a comprehensive university platform 
      that digitizes hostel operations end-to-end. It automates room allocation, 
      mess billing, fee collection, complaint handling, visitor management, and 
      biometric attendance — replacing decades of paper registers with a single 
      modern web application. Built as a Final Year Project at UET Mardan, it 
      serves 1,200+ students across multiple hostels.
    `,
    overviewHighlights: [
      "Room allocation with real-time availability",
      "Mess billing based on attendance",
      "Biometric fingerprint attendance tracking",
      "Stripe-powered fee payments",
      "Complaint ticketing with escalation",
    ],

    features: [
      {
        num: "01",
        title: "Room & Hostel Management",
        description:
          "Allocate rooms, track availability, manage capacity, and assign students — all from a live dashboard.",
      },
      {
        num: "02",
        title: "Mess Billing Automation",
        description:
          "Menu planning, daily attendance, and per-student billing — automatically reconciled at month-end.",
      },
      {
        num: "03",
        title: "Biometric Attendance",
        description:
          "Fingerprint-based entry/exit logging for hostel gates and mess halls, with reports for wardens.",
      },
      {
        num: "04",
        title: "Stripe Fee Payments",
        description:
          "Students pay hostel fees and mess dues online via Stripe, with instant receipts and ledger updates.",
      },
      {
        num: "05",
        title: "Complaint Ticketing",
        description:
          "Students file complaints, wardens track them, and unresolved tickets auto-escalate after 48 hours.",
      },
      {
        num: "06",
        title: "Visitor Management",
        description:
          "Digital visitor registration with QR-code entry passes, approval workflow, and exit logging.",
      },
    ],

    problem: {
      headline: "1,200 students, 3 hostels, and a filing cabinet.",
      body: `
        The University of Engineering & Technology Mardan managed hostel operations 
        across three hostels with paper registers, manual fee collection, and Excel 
        spreadsheets. Room allocation took weeks, mess billing was disputed monthly, 
        and unpaid fees accumulated because there was no reliable ledger. Complaints 
        got lost. Parents had no visibility. The university needed a digital backbone 
        — but funding was tight and timelines were fixed.
      `,
      painpoints: [
        {
          num: "01",
          title: "Manual Room Allocation",
          body: "Wardens allocated rooms using Excel, often double-booking and creating disputes that took weeks to resolve.",
        },
        {
          num: "02",
          title: "Disputed Mess Bills",
          body: "Students challenged monthly mess charges because there was no attendance record to prove who ate when.",
        },
        {
          num: "03",
          title: "Fee Leakage",
          body: "Cash-based fee collection left no audit trail. An estimated 12% of fees went uncollected every semester.",
        },
        {
          num: "04",
          title: "Invisible Complaints",
          body: "Complaints were written in a paper register. No tracking, no escalation, no accountability.",
        },
      ],
    },

    process: [
      {
        num: "01",
        title: "Discover",
        description:
          "Spent three weeks shadowing wardens and students. Documented 47 unique pain points across the hostel workflow.",
        icon: "search",
      },
      {
        num: "02",
        title: "Define",
        description:
          "Prioritized 8 modules into a phased rollout. Selected Django + PostgreSQL for reliability and Stripe for payments.",
        icon: "target",
      },
      {
        num: "03",
        title: "Design",
        description:
          "Two separate UIs — a data-dense admin dashboard for wardens and a mobile-first student portal. Both built on Bootstrap with custom theming.",
        icon: "palette",
      },
      {
        num: "04",
        title: "Deliver",
        description:
          "Shipped in 12 months across three semesters. Rolled out hostel-by-hostel to avoid disruption. Trained 12 wardens.",
        icon: "rocket",
      },
    ],

    solutions: [
      {
        num: "01",
        title: "Unified Operations Platform",
        description:
          "A single web app managing rooms, mess, fees, complaints, visitors, and attendance — replacing 6+ spreadsheets.",
        featured: true,
      },
      {
        num: "02",
        title: "Biometric Attendance",
        description:
          "Fingerprint readers at hostel gates and mess halls log every entry/exit. Warden reports are available in real time.",
      },
      {
        num: "03",
        title: "Automated Mess Billing",
        description:
          "Bills are calculated from actual attendance, disputed by no one. Monthly billing time went from 4 days to 20 minutes.",
      },
      {
        num: "04",
        title: "Stripe Fee Payments",
        description:
          "Students pay hostel and mess fees online with cards. Every transaction generates a downloadable receipt.",
      },
      {
        num: "05",
        title: "Complaint Escalation",
        description:
          "Unresolved complaints auto-escalate to the Chief Warden after 48 hours. Full audit trail for accountability.",
      },
      {
        num: "06",
        title: "Visitor Tracking",
        description:
          "Visitors register on a tablet at the gate, get a QR-code pass, and are logged automatically on exit.",
      },
    ],

    results: [
      { value: "-98%", label: "Fee leakage" },
      { value: "4 days → 20 min", label: "Mess billing time" },
      { value: "1,200+", label: "Students served" },
      { value: "47 → 0", label: "Paper registers retired" },
    ],
  },
};

export default caseStudies;