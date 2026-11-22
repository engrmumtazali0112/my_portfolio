// src/Components/ProjectsMegaMenu.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

/**
 * "Featured Work" mega menu: left sidebar list + right 2x2 image grid.
 * Hovering a sidebar item (or a card) highlights the matching pair.
 * On mobile (<= 900px) it becomes an accordion inside the hamburger drawer.
 */
export default function ProjectsMegaMenu({
  label, to, isActive,
  projects, footerText, footerTo,
  isOpen, onOpen, onClose, onNavigate,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState(projects[0]?.id);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // every time the panel opens, start on the first project again
  useEffect(() => {
    if (isOpen && projects[0]) setActiveId(projects[0].id);
  }, [isOpen, projects]);

  return (
    <li
      className={`mega-item${isOpen ? " is-open" : ""}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose(true);
      }}
    >
      {/* ---------- Desktop trigger ---------- */}
      <Link
        to={to}
        className={`nav-link mega-trigger${isActive ? " active" : ""}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-current={isActive ? "page" : undefined}
        onClick={onNavigate}
        onFocus={onOpen}
      >
        {label}
        <FaChevronDown className="mega-caret" aria-hidden="true" />
      </Link>

      {/* ---------- Desktop panel ---------- */}
      <div className="mega-panel mega-projects-panel" aria-label={`${label} menu`}>
        <div className="mega-proj-body">
          {/* Left sidebar */}
          <aside className="mega-proj-sidebar">
            <span className="mega-proj-label">Featured work</span>
            <ul className="mega-proj-list">
              {projects.map((p) => (
                <li key={p.id}>
                  <Link
                    to={p.link}
                    className={`mega-proj-link${activeId === p.id ? " is-active" : ""}`}
                    onMouseEnter={() => setActiveId(p.id)}
                    onFocus={() => setActiveId(p.id)}
                    onClick={onNavigate}
                  >
                    <span className="mega-proj-text">
                      <strong>{p.title}</strong>
                      <small>{p.category}</small>
                    </span>
                    <FiArrowUpRight className="mega-proj-arrow" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link className="mega-proj-all" to={footerTo} onClick={onNavigate}>
              {footerText} <FiArrowUpRight aria-hidden="true" />
            </Link>
          </aside>

          {/* Right 2x2 grid */}
          <div className="mega-proj-grid-wrap">
            <div className="mega-proj-grid">
              {projects.map((p) => (
                <Link
                  key={p.id}
                  to={p.link}
                  className={`mega-proj-card${activeId === p.id ? " is-active" : ""}`}
                  onMouseEnter={() => setActiveId(p.id)}
                  onClick={onNavigate}
                  tabIndex={-1}
                  aria-label={`${p.title} — ${p.category}`}
                >
                  <span className="mega-proj-thumb">
                    <img src={p.image} alt="" loading="lazy" />
                  </span>
                  <span className="mega-proj-meta">
                    <span className="mega-proj-text">
                      <strong>{p.title}</strong>
                      <small>{p.category}</small>
                    </span>
                    <FiArrowUpRight className="mega-proj-arrow" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Mobile accordion ---------- */}
      <div className="mega-mobile">
        <button
          type="button"
          className={`mega-mobile-toggle${isActive ? " active" : ""}`}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {label}
          <FaChevronDown className={mobileOpen ? "rot" : ""} aria-hidden="true" />
        </button>

        {mobileOpen && (
          <div className="mega-mobile-body">
            {projects.map((p) => (
              <Link key={p.id} className="mega-mobile-link mega-mobile-project" to={p.link} onClick={onNavigate}>
                {p.title}
                <span className="mega-mobile-sub">{p.category}</span>
              </Link>
            ))}
            <Link className="mega-mobile-all" to={footerTo} onClick={onNavigate}>
              {footerText} <FiArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </li>
  );
}
