// src/Components/ProjectFilters.js
import React from "react";
import { FaThLarge, FaLaptopCode, FaMobileAlt, FaBrain, FaChartBar } from "react-icons/fa";
import "./ProjectFiltersStyles.css";

export const FILTERS = [
  { id: "all",    label: "All Projects",     icon: <FaThLarge /> },
  { id: "web",    label: "Web Applications", icon: <FaLaptopCode /> },
  { id: "mobile", label: "Mobile Apps",      icon: <FaMobileAlt /> },
  { id: "ai-ml",  label: "AI / ML",          icon: <FaBrain /> },
  { id: "data",   label: "Data Analytics",   icon: <FaChartBar /> },
];

const ProjectFilters = ({ active, onChange, counts }) => {
  return (
    <div className="project-filters">
      {FILTERS.map((f) => (
        <button
          key={f.id}
          type="button"
          className={`project-filter ${active === f.id ? "active" : ""}`}
          onClick={() => onChange(f.id)}
        >
          <span className="project-filter-icon">{f.icon}</span>
          <span className="project-filter-label">{f.label}</span>
          <span className="project-filter-count">{counts[f.id] || 0}</span>
        </button>
      ))}
    </div>
  );
};

export default ProjectFilters;