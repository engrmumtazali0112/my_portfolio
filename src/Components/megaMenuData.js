// src/Components/megaMenuData.js
// Derives both menus from data that already exists — nothing is duplicated here.
import { GROUPS as SERVICE_GROUPS } from "./ServicesOffer";
import projects from "./WorkCardData";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const isInternal = (url = "") => url.startsWith("/");

// "True Blue Bio — Lab Supplies Store"  -> "True Blue Bio"
const shortTitle = (t = "") => t.split(/\s[—–-]\s/)[0].trim();
// "Full-Stack · B2B SaaS" -> "B2B SaaS", "Agency Platform" -> "Agency"
const shortCategory = (c = "") =>
  c.split(" · ").pop().replace(/\s+Platform$/i, "").trim();

// ---- Services: from ServicesOffer GROUPS ---------------------------------
export const getServiceGroups = () =>
  SERVICE_GROUPS.map((g) => ({
    id: slug(g.title),
    title: g.title,
    Icon: g.icon,
    links: g.items.map((it) => ({ label: it.name, to: "/services" })),
  }));

// ---- Projects: top featured work from WorkCardData ------------------------
// Only projects that have an in-site case study (/work/...) are used.
// `featured: true` projects come first, then the rest in file order.
export const getFeaturedProjects = (limit = 4) => {
  const withCaseStudy = projects.filter((p) => isInternal(p.view));
  const ordered = [
    ...withCaseStudy.filter((p) => p.featured),
    ...withCaseStudy.filter((p) => !p.featured),
  ];
  return ordered.slice(0, limit).map((p) => ({
    id: slug(p.view),
    title: shortTitle(p.title),
    category: shortCategory(p.category),
    image: p.imgsrc,
    link: p.view,
  }));
};
