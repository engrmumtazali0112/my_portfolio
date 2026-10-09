// src/Components/CaseStudy/CaseStudyData.js

// ===== TRUE BLUE BIO =====
import tbbHome from "../../assets/projects/tbb-home.webp";
import tbbProduct from "../../assets/projects/tbb-product.webp";
import tbbAdmin from "../../assets/projects/tbb-admin.webp";

// ===== FINGERPRINT ATTENDANCE =====
import fingerprintHero from "../../assets/projects/fingerprint-attendance-1-hero.png";
import fingerprintLaptop from "../../assets/projects/fingerprint-attendance-2-laptop.png";
import fingerprintTablet from "../../assets/projects/fingerprint-attendance-3-ipad.png";
import fingerprintMobile from "../../assets/projects/fingerprint-attendance-4-iphone.png";

// ===== FINANCEAI =====
import financeaiHero from "../../assets/projects/financeai-1-hero.png";
import financeaiLaptop from "../../assets/projects/financeai-2-laptop.png";
import financeaiTablet from "../../assets/projects/financeai-3-ipad.png";
import financeaiMobile from "../../assets/projects/financeai-4-iphone.png";

// ===== AI VISIBILITY =====
import aiVisibilityHero from "../../assets/projects/ai-visibility-1-hero.png";
import aiVisibilityLaptop from "../../assets/projects/ai-visibility-2-laptop.png";
import aiVisibilityTablet from "../../assets/projects/ai-visibility-3-ipad.png";
import aiVisibilityMobile from "../../assets/projects/ai-visibility-4-iphone.png";

// ===== LUXE JEWELRY =====
import luxeHero from "../../assets/projects/luxe-hero.webp";
import luxeOverview from "../../assets/projects/luxe-overview.webp";
import luxeHome from "../../assets/projects/luxe-home.webp";
import luxeProduct from "../../assets/projects/luxe-product.webp";
import luxeAdmin from "../../assets/projects/luxe-admin.webp";

// ===== UNIVERSITY ADMIN =====
import hostelHero from "../../assets/projects/hostel-hero.webp";
import hostelOverview from "../../assets/projects/hostel-overview.webp";
import hostelDashboard from "../../assets/projects/hostel-dashboard.webp";
import hostelAttendance from "../../assets/projects/hostel-attendance.webp";
import hostelPayment from "../../assets/projects/hostel-payment.webp";

// ===== AXON FORGE =====
import axonHero from "../../assets/projects/axon-forge-1-hero.png";
import axonLaptop from "../../assets/projects/axon-forge-2-laptop.png";
import axonTablet from "../../assets/projects/axon-forge-3-tablet.png";
import axonMobile from "../../assets/projects/axon-forge-4-mobile.png";

// ===== STUDENT COMPLAINT =====
import complaintHero from "../../assets/projects/student-complaint-1-hero.png";
import complaintLaptop from "../../assets/projects/student-complaint-2-laptop.png";
import complaintTablet from "../../assets/projects/student-complaint-3-tablet.png";
import complaintMobile from "../../assets/projects/student-complaint-4-mobile.png";

// ===== SUFRAH =====
import sufrahHero from "../../assets/projects/sufrah-1-hero.png";
import sufrahLaptop from "../../assets/projects/sufrah-2-laptop.png";
import sufrahTablet from "../../assets/projects/sufrah-3-ipad.png";
import sufrahMobile from "../../assets/projects/sufrah-4-iphone.png";
const caseStudies = [
  {
  slug: "true-blue-bio",
  accent: "#2563eb",
  title: "True Blue Bio",
  tagline: "B2B laboratory supplies store with quotes, Net-30 invoicing and an operations admin.",
  liveUrl: "https://truebluebio.com/",               // ← ADD THIS
  sourceUrl: "https://github.com/engrmumtazali0112/true-blue-bio",  // ← optional
  cover: tbbHome,
  hero: tbbHome,
  role: "Full-stack developer",
  stack: ["React", "Node / Express", "MongoDB", "Stripe", "JWT auth"],
  overviewText:
      "True Blue Bio sells consumables, reagents and PPE to labs and clinics. Approved accounts see their own pricing and can pay by card or on Net-30 invoice, while large orders go through a bulk quote request instead of the cart.",
    overviewImg: tbbAdmin,
    flow: [
      "Browse the catalog or search by part number",
      "Add to cart, or request a bulk quote",
      "Check out with Stripe or Net-30 invoice",
      "Track orders and invoices in the account area",
      "Staff manage products, pricing, vendors and work orders in admin",
    ],
    modules: [
      { name: "Homepage", text: "Search-first hero, category shortcuts with item counts, featured products and trust strip (24-hour shipping, Stripe checkout, Net-30, account pricing).", img: tbbHome },
      { name: "Catalog and product page", text: "Filterable catalog, SKU, stock level, size variants, account-specific price next to list price, spec table and a bulk quote button.", img: tbbProduct },
      { name: "Cart, checkout and quote", text: "Cart with quantity changes, checkout with card or invoice, and a quote form for bulk and custom orders." },
      { name: "Customer account", text: "Order history, invoices, saved addresses and quote status." },
      { name: "Admin dashboard", text: "Revenue and orders trend, category mix, outstanding invoices, pending client approvals, plus pages for products, pricing, vendors, work orders, users and roles.", img: tbbAdmin },
    ],
  },
  {
  slug: "luxe-jewelry-store",
  accent: "#a98a3d",
  title: "Luxe Jewelry — E-Commerce Store",
  tagline: "A full e-commerce flow for fine jewelry, from collection pages to checkout and admin.",
  liveUrl: "https://luxejewelrydesign.store/",       // ← ADD THIS
  sourceUrl: "https://github.com/engrmumtazali0112/Jewelry-Shop---Django-E-commerce",
  cover: luxeHero,
  hero: luxeHero,
  role: "Full-stack developer",
  stack: ["Django", "PostgreSQL", "Bootstrap", "Stripe", "Django admin"],
  overviewImg: luxeOverview,
  overviewText:
      "Luxe Jewelry covers the whole buying journey: a branded homepage, filterable collections, a detailed product page, a cart, a three-step checkout and an order confirmation, with a separate admin for the shop owner.",
    flow: [
      "Land on the homepage and open a collection",
      "Filter by category, metal, price and size, then sort",
      "Pick a ring size and add to cart or wishlist",
      "Update the cart, then check out: shipping, delivery, payment",
      "Receive an order confirmation and track the order",
    ],
    modules: [
      { name: "Homepage", text: "Hero banner, best sellers and new arrivals, free-shipping and certified-diamond trust badges.", img: luxeHome },
      { name: "Collection page", text: "Product grid with category, metal, price and size filters, and sorting by newest or price." },
      { name: "Product detail", text: "Image gallery, rating and reviews, size selector, stock status, quantity, add to cart, wishlist and expandable details, shipping and reviews.", img: luxeProduct },
      { name: "Cart and checkout", text: "Cart drawer with quantities, promo code and subtotal, then shipping address, delivery option and card, PayPal or cash on delivery." },
      { name: "Confirmation and account", text: "Order number, summary and delivery estimate, plus login, register, password reset, order history and saved addresses." },
      { name: "Admin panel", text: "Sales, orders, stock and customer stats, low-stock alerts, order statuses, blog posts and contact inbox.", img: luxeAdmin },
    ],
  },
  {
    slug: "university-administration-system",
    accent: "#2563eb",
    title: "University Administration Management System",
    tagline: "Hostel, fees, mess, complaints and biometric attendance in one role-based system.",
    cover: hostelHero,
    hero: hostelHero,
    role: "Final year project, full-stack developer",
    stack: ["Django", "Bootstrap", "PostgreSQL", "Stripe", "Biometric device API"],
    overviewImg: hostelOverview,
    overviewText:
      "SmartHostel replaces paper registers for hostel staff and students. Admins allocate rooms and track fees, while students pay on their phone, file complaints and check attendance.",
    flow: [
      "Admin registers a student and allocates a room",
      "Student sees the room, mess balance and pending fees",
      "Student pays the hostel fee by card, bank or cash",
      "Complaints are filed, prioritised and resolved",
      "Fingerprint scans feed the daily attendance grid",
    ],
    modules: [
      { name: "Admin dashboard", text: "Total students, rooms occupied, pending fees, open complaints, fee collection trend and recent registrations.", img: hostelDashboard },
      { name: "Hostels and rooms", text: "Block-wise room grid with occupied, available and maintenance states and bed occupancy." },
      { name: "Fee payment", text: "Mobile payment screen with card, bank or cash options and a Stripe-secured card form.", img: hostelPayment },
      { name: "Mess and visitors", text: "Weekly menu, mess balance and visitor booking." },
      { name: "Complaints", text: "Category, priority and status tracking from open to resolved." },
      { name: "Biometric attendance", text: "Present, absent and leave counts with a per-student monthly grid fed by fingerprint devices.", img: hostelAttendance },
    ],
  },
  {
  slug: "axon-forge",
  accent: "#1E88E5",
  title: "Axon Forge — Agency Platform",
  tagline: "A remote-first software agency site with services, portfolio, blog and quote workflow.",
  liveUrl: "https://axon-forge.vercel.app/",         // ← ADD THIS
  sourceUrl: "https://github.com/engrmumtazali0112/next-tech-solutions",
  cover: axonHero,
  hero: axonHero,
  role: "Full-stack developer",
  stack: ["React", "Vite", "FastAPI", "PostgreSQL", "Tailwind CSS"],
  overviewImg: axonLaptop,
  overviewText:
      "Axon Forge presents a remote-first development agency: services, portfolio, expertise, team and a blog, with a clear Get a quote path. A FastAPI backend serves the content and handles quote and contact requests.",
    flow: [
      "Visitor lands on the homepage and sees live projects",
      "Browses services, expertise and the portfolio",
      "Reads blog articles filtered by category",
      "Checks the team and testimonials",
      "Sends a quote request or books a free consultation",
    ],
    modules: [
      { name: "Homepage and portfolio", text: "Product-first hero, featured case study cards with stack pills and links to full case studies.", img: axonLaptop },
      { name: "Services", text: "Six service cards covering web apps, AI/ML, mobile, cloud and DevOps, database design and API integration, followed by a five-step delivery process.", img: axonTablet },
      { name: "Blog", text: "Category tabs, search, and article cards with date and read time on a dark mobile layout.", img: axonMobile },
      { name: "About and contact", text: "Company story, stats (projects, clients, hourly rate, reply time), core values and a quote form." },
    ],
  },
  {
    slug: "student-complaint-system",
    accent: "#1a73e8",
    title: "Student Complaint Management System",
    tagline: "Multi-portal university complaints with status tracking, escalation and admin ratings.",
    cover: complaintHero,
    hero: complaintHero,
    role: "Full-stack developer",
    stack: ["Flutter", "Django", "PostgreSQL", "Django REST Framework"],
    overviewImg: complaintLaptop,
    overviewText:
      "Students file complaints to the right department, admins resolve or reject them, and a super admin watches department stats, escalations and admin ratings. Students rate each resolution out of five stars.",
    flow: [
      "Student submits a complaint to a department",
      "Admin reviews it and resolves or rejects with a reason",
      "Student tracks status in real time",
      "Student rates the admin on a resolved complaint",
      "Super admin reviews escalations, departments and ratings",
    ],
    modules: [
      { name: "Admin portal", text: "Totals for pending, resolved and rejected, a searchable complaint list and View Details, Resolve and Reject actions.", img: complaintLaptop },
      { name: "Student portal", text: "Profile with live stats and a submit form with title, type, department, description and optional attachment.", img: complaintTablet },
      { name: "Resolved and rating", text: "Resolved complaints with dates and a five-star Rate Admin Performance flow.", img: complaintMobile },
      { name: "Super admin dashboard", text: "Department charts, escalated complaints and an Admin Ratings page with averages and department filter." },
    ],
  },
  {
  slug: "fingerprint-attendance-system",
  accent: "#2563eb",
  title: "Fingerprint Attendance System",
  tagline: "A modern, secure, biometric attendance platform for university students and admins.",
  liveUrl: "",
  sourceUrl: "https://github.com/engrmumtazali0112/fingerprint_attendance_system",
  category: "Biometric · University",
  year: "2025",
  duration: "2 Months",
  cover: fingerprintHero,
  hero: fingerprintHero,
  role: "Full-stack developer",
  stack: ["Django", "SQLite", "Bootstrap 5", "Digital Persona SDK"],
  overviewImg: fingerprintLaptop,
  overviewText:
    "Fingerprint Attendance System replaces manual roll-calls with biometric identification. Students register up to 10 fingerprints; the system records attendance per meal (Breakfast, Lunch, Dinner), prevents duplicate entries, and exposes a full admin panel with CSV export and print-ready reports.",
  flow: [
    "Admin registers a new student with roll number and department",
    "Student places finger on the scanner to enroll up to 10 fingerprints",
    "System stores the encrypted template against the student record",
    "During meals, the student scans a finger to check in",
    "Attendance is recorded with a live timestamp — duplicates auto-rejected",
    "Admin views the dashboard, filters by date/department/meal, and exports CSV",
  ],
  modules: [
    { name: "Student directory", text: "Searchable, filterable list of all students with roll number, department, year, fingerprint count and per-student actions.", img: fingerprintLaptop },
    { name: "Fingerprint registration", text: "Multi-finger enrollment flow with live scanning UI, progress feedback, and per-finger save confirmation.", img: fingerprintTablet },
    { name: "Live attendance scanning", text: "Scanner-ready screen with real-time clock, meal selector, and instant success/failure feedback.", img: fingerprintMobile },
    { name: "Student profile", text: "Complete student record: personal info, department, active status, registered fingerprints, and recent attendance history." },
    { name: "Attendance reports", text: "Date-range filters, department/meal/student filters, CSV export and print-ready layouts." },
    { name: "Admin dashboard", text: "Live statistics — total students, registrations today, meals served — plus quick actions." },
  ],
},

{
  slug: "sufrah",
  accent: "#c9a961",
  title: "Sufrah — Subscription Manager Pro",
  tagline: "A 9-app restaurant & meal-subscription platform serving Islamabad & Rawalpindi.",
  liveUrl: "https://workspacesufras-production.up.railway.app",
  sourceUrl: "https://github.com/engrmumtazali0112/sufrah",
  category: "Restaurant SaaS",
  year: "2026",
  duration: "7 Months",
  cover: sufrahHero,
  hero: sufrahHero,
  role: "Full-stack developer",
  stack: ["React", "Node.js", "MongoDB", "Stripe", "Expo"],
  overviewImg: sufrahLaptop,
  overviewText:
    "Sufrah runs a rooftop restaurant, café, and meal-subscription business end-to-end. Nine integrated apps share one backend: public website, customer portal, admin workspace, floor app, cashier, kitchen display, rider app, sales portal, and manager portal. Every order — dine-in, takeaway, delivery, or meal-plan box — flows through the same pipeline: kitchen → pack → dispatch → rider → delivered. Subscriptions renew automatically, riders set ETAs, and customers track deliveries live.",
  flow: [
    "Guest browses the public site, picks a meal plan or restaurant dish",
    "Order sent to the kitchen display — New → Cooking → Ready",
    "Rider app shows the box with 'Packed & checked by' confirmation",
    "Rider sets an ETA and delivers with photo proof",
    "Customer rates the delivery; rating feeds Driver Performance",
    "Manager approves subscriptions, dispatches deliveries, and reviews audit log",
  ],
  modules: [
    { name: "Public website & menu", text: "Restaurant, café, catering, meal plans, weekly menu, events, corporate dining, gym partnerships, and takeaway cart. Every enquiry form creates a CRM lead.", img: sufrahHero },
    { name: "Kitchen display", text: "Live Tickets kanban with New / Cooking / Ready / Late lanes. Prep list, dish sold-out toggle, per-ticket times, and daily report.", img: sufrahLaptop },
    { name: "Restaurant floor app", text: "Table-plan with statuses (Available, Food ready, Dining, Need attention), ready-at-pass banner, dine-in / takeaway / delivery order flow.", img: sufrahTablet },
    { name: "Rider app", text: "Today's runs, restaurant deliveries, live ETA, kitchen sign-off status, photo-proof delivery, and full history.", img: sufrahMobile },
    { name: "Customer portal", text: "My Plan, Meal Schedule (skip / swap / reschedule meals), Deliveries with live tracking and rating, Payments, Profile, and Corporate." },
    { name: "Admin workspace", text: "Dashboard, Site Content (12 page editors), Restaurant Orders, Menu & Stock, Customers, Corporate accounts, Subscriptions, Deliveries, Payments, CRM Leads, Plans, Meal Library, Invoices, Expenses, Reports, Blog, Notifications, Driver Performance, Users & Roles, Settings." },
    { name: "Sales & Manager portals", text: "Sales reps work leads → customers → new subscriptions. Sales Managers approve subscriptions and set team targets. Managers dispatch deliveries, review meal exceptions, and audit log every approval." },
    { name: "Automated jobs", text: "Past meals flip to Delivered / Missed every 15 minutes. WhatsApp / SMS notifications go out on subscription events. Late kitchen tickets surface red on the board." },
  ],
},
{
  slug: "financeai",
  accent: "#6366f1",
  title: "FinanceAI — Personal Finance Assistant",
  tagline: "An AI-driven, multi-user financial companion with natural-language Q&A and receipt OCR.",
  liveUrl: "",
  sourceUrl: "https://github.com/engrmumtazali0112/finance-assistant",
  category: "AI · Fintech",
  year: "2025",
  duration: "3 Months",
  cover: financeaiHero,
  hero: financeaiHero,
  role: "Full-stack developer",
  stack: ["Next.js 14", "TypeScript", "Supabase", "Claude API", "Recharts"],
  overviewImg: financeaiLaptop,
  overviewText:
    "FinanceAI lets users talk to their money. Ask natural-language questions over your spending data, upload receipts for automatic OCR and categorisation, set budgets, detect anomalies, and get cut-back suggestions — all with strict per-user isolation via Supabase row-level security. The intent router sends 80%+ of queries to Claude Haiku and reserves Sonnet for vision and complex agent tasks — 5× cost savings at scale.",
  flow: [
    "User signs in with Clerk and gets isolated DB access",
    "Imports transactions via CSV or uploads a receipt",
    "Asks questions in natural language or picks a suggested chip",
    "Intent router classifies: simple_query → Haiku, receipt/lookup → Sonnet",
    "Pre-computed monthly aggregates feed a compact LLM context (~1,500 tokens)",
    "Response renders with charts, alerts and inline action chips",
  ],
  modules: [
    { name: "Overview dashboard", text: "Balance card, spending donut, recent transactions, and a one-tap 'Ask assistant' prompt.", img: financeaiHero },
    { name: "AI assistant", text: "Chat UI with suggested questions, receipt upload, streaming-ready answers, and user memory.", img: financeaiLaptop },
    { name: "Transaction list", text: "Paginated, colour-coded by category, with CSV import and deduplication.", img: financeaiMobile },
    { name: "Budgets", text: "Set via chat or UI. Progress bars turn red when over budget. Alerts fire at 80% and 100%.", img: financeaiTablet },
    { name: "Trends", text: "Stacked bar chart by category across 12 months, driven by pre-computed aggregates." },
    { name: "Anomalies & subscriptions", text: "Z-score (2σ) anomaly detection vs 12-month history, plus recurring-payment pattern matching." },
  ],
},
{
  slug: "ai-visibility",
  accent: "#8b5cf6",
  title: "AI Visibility & Search Intelligence",
  tagline: "Track whether your brand appears when buyers ask ChatGPT, Claude, or Perplexity.",
  liveUrl: "",
  sourceUrl: "https://github.com/engrmumtazali0112/AI-Visibility-Search-Intelligence-Platform",
  category: "AI SaaS Platform",
  year: "2025",
  duration: "3 Months",
  cover: aiVisibilityHero,
  hero: aiVisibilityHero,
  role: "Full-stack developer",
  stack: ["Flask", "React", "Claude API", "PostgreSQL", "Vite"],
  overviewImg: aiVisibilityLaptop,
  overviewText:
    "AI Visibility & Search Intelligence answers a modern marketing question: does your brand show up when buyers ask an AI search engine? Register a business profile, let the platform discover relevant queries, run a 3-agent Claude pipeline (discovery, visibility scoring, content recommendation), and track AI mentions, search volume, impressions, share-of-voice, and top opportunities over time.",
  flow: [
    "Register a business with domain, industry and competitors",
    "Pipeline discovers the queries buyers actually ask AI engines",
    "3-agent Claude pipeline scores visibility + opportunity per query",
    "Dashboard shows mentions, volume, impressions, SOV and top sources",
    "Content recommendations flag the biggest gaps to close next",
  ],
  modules: [
    { name: "Dashboard", text: "Cards for each business profile with query count, avg opportunity score and pipeline status.", img: aiVisibilityHero },
    { name: "Register profile", text: "Form for business name, domain, industry, description, and competitor domains.", img: aiVisibilityTablet },
    { name: "Profile detail", text: "Metrics grid (mentions, volume, impressions, top sources/brands) and AI Visibility Score with week-over-week delta.", img: aiVisibilityMobile },
    { name: "Recent mentions", text: "Filterable table of every tracked query with platform (ChatGPT/Claude/Google), mentioned status, SOV, location, and last-checked timestamp.", img: aiVisibilityLaptop },
    { name: "Top opportunities", text: "Horizontal bar chart ranking queries by opportunity score — sorted by highest upside." },
    { name: "Volume vs difficulty", text: "Scatter plot where points represent queries; top-left quadrant = high volume, low difficulty — the best targets." },
  ],
},
];

export default caseStudies;
