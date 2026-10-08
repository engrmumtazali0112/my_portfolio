import tbbHome from "../../assets/projects/tbb-home.webp";
import tbbProduct from "../../assets/projects/tbb-product.webp";
import tbbAdmin from "../../assets/projects/tbb-admin.webp";
import luxeHero from "../../assets/projects/luxe-hero.webp";
import luxeOverview from "../../assets/projects/luxe-overview.webp";
import luxeHome from "../../assets/projects/luxe-home.webp";
import luxeProduct from "../../assets/projects/luxe-product.webp";
import luxeAdmin from "../../assets/projects/luxe-admin.webp";
import hostelHero from "../../assets/projects/hostel-hero.webp";
import hostelOverview from "../../assets/projects/hostel-overview.webp";
import hostelDashboard from "../../assets/projects/hostel-dashboard.webp";
import hostelAttendance from "../../assets/projects/hostel-attendance.webp";
import hostelPayment from "../../assets/projects/hostel-payment.webp";

const caseStudies = [
  {
    slug: "true-blue-bio",
    accent: "#2563eb",
    title: "True Blue Bio",
    tagline: "B2B laboratory supplies store with quotes, Net-30 invoicing and an operations admin.",
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
];

export default caseStudies;