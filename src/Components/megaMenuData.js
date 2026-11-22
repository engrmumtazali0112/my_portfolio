// src/Components/megaMenuData.js
import {
  FaLaptopCode, FaMobileAlt, FaBrain, FaChartBar, FaFolderOpen,
} from "react-icons/fa";
import { GROUPS as SERVICE_GROUPS } from "./ServicesOffer";
import { FILTERS } from "./ProjectFilters";
import projects from "./WorkCardData";

const PROJECT_ICONS = {
  web: FaLaptopCode,
  mobile: FaMobileAlt,
  "ai-ml": FaBrain,
  data: FaChartBar,
};

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");
const isInternal = (url = "") => url.startsWith("/");
const shortTitle = (t = "") => t.split(/\s[—–-]\s/)[0].trim();

export const getServiceGroups = () =>
  SERVICE_GROUPS.map((g) => ({
    id: slug(g.title),
    title: g.title,
    Icon: g.icon,
    links: g.items.map((it) => ({ label: it.name, to: "/services" })),
  }));

export const getProjectGroups = () =>
  FILTERS.filter((f) => f.id !== "all")
    .map((f) => {
      const matches = projects.filter((p) => (p.categories || []).includes(f.id));
      const ordered = [...matches].sort(
        (a, b) => Number(isInternal(b.view)) - Number(isInternal(a.view))
      );
      const filterTo = `/project?filter=${f.id}`;
      return {
        id: f.id,
        title: f.label,
        Icon: PROJECT_ICONS[f.id] || FaFolderOpen,
        count: matches.length,
        moreTo: filterTo,
        links: ordered.slice(0, 4).map((p) => ({
          label: shortTitle(p.title),
          to: isInternal(p.view) ? p.view : filterTo,
        })),
      };
    })
    .filter((g) => g.links.length > 0);