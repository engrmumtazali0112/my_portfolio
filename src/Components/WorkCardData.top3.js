// Paste these three imports at the top of WorkCardData.js
import tbbCover from "../assets/projects/tbb-home.webp";
import luxeCover from "../assets/projects/luxe-hero.webp";
import hostelCover from "../assets/projects/hostel-hero.webp";

// ...and these three entries at the start of the ProjectCardData array.
// "view" is now an internal route to the case study; "source" is your GitHub link.
// (Replace the two GitHub URLs with your real repos.)
const topThree = [
  {
    imgsrc: tbbCover,
    title: "True Blue Bio — Lab Supplies Store",
    text: "A B2B laboratory supplies store with account-specific pricing, bulk quote requests, Stripe and Net-30 checkout, and an operations admin for orders, invoices and vendors.",
    view: "/work/true-blue-bio",
    source: "https://github.com/engrmumtazali0112/true-blue-bio",
  },
  {
    imgsrc: luxeCover,
    title: "Luxe Jewelry — E-Commerce Store",
    text: "A full e-commerce flow for fine jewelry: collections with filters, product gallery with size selector, cart, three-step checkout, order confirmation and an admin panel.",
    view: "/work/luxe-jewelry-store",
    source: "https://github.com/engrmumtazali0112/Jewelry-Shop---Django-E-commerce",
  },
  {
    imgsrc: hostelCover,
    title: "University Administration Management System",
    text: "A role-based hostel and campus system covering room allocation, fee payments, mess, visitors, complaints and biometric attendance for admins and students.",
    view: "/work/university-administration-system",
    source: "https://github.com/engrmumtazali0112/SmartHostelManagmentSystem_FYP",
  },
];