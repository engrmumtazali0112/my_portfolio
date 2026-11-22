// src/Components/MegaMenu.js
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown, FaArrowRight } from "react-icons/fa";

/**
 * One nav item with: desktop trigger + hover panel, and a mobile accordion
 * (shown inside the hamburger drawer). Visibility is switched in CSS at 900px.
 */
export default function MegaMenu({
  label, to, isActive,
  groups, hint, footerText, footerTo,
  isOpen, onOpen, onClose, onNavigate,
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

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
      <div className="mega-panel" aria-label={`${label} menu`}>
        <div className="mega-grid" style={{ "--cols": groups.length }}>
          {groups.map(({ id, title, Icon, links, moreTo, count }) => (
            <div className="mega-col" key={id}>
              <div className="mega-col-head">
                <span className="mega-icon"><Icon /></span>
                <h4>{title}</h4>
              </div>
              <ul className="mega-list">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link className="mega-link" to={l.to} onClick={onNavigate}>
                      <span>{l.label}</span>
                    </Link>
                  </li>
                ))}
                {moreTo && count > links.length && (
                  <li>
                    <Link className="mega-link mega-more" to={moreTo} onClick={onNavigate}>
                      View all {count} →
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mega-footer">
          <span>{hint}</span>
          <Link className="mega-footer-link" to={footerTo} onClick={onNavigate}>
            {footerText} <FaArrowRight />
          </Link>
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
            {groups.map(({ id, title, Icon, links }) => (
              <div className="mega-mobile-group" key={id}>
                <div className="mega-col-head">
                  <span className="mega-icon"><Icon /></span>
                  <h4>{title}</h4>
                </div>
                {links.map((l) => (
                  <Link key={l.label} className="mega-mobile-link" to={l.to} onClick={onNavigate}>
                    {l.label}
                  </Link>
                ))}
              </div>
            ))}
            <Link className="mega-mobile-all" to={footerTo} onClick={onNavigate}>
              {footerText} <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </li>
  );
}
