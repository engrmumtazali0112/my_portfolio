// src/Components/Navbar.js
import { Link, useLocation } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState, useEffect, useMemo, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";
import MegaMenu from "./MegaMenu";
import ProjectsMegaMenu from "./ProjectsMegaMenu";
import { getServiceGroups, getFeaturedProjects } from "./megaMenuData";

const navItems = [
  { path: "/",          label: "Home" },
  { path: "/about",     label: "About" },
  { path: "/services",  label: "Services",   mega: "services" },
  { path: "/project",   label: "Projects",   mega: "projects" },
  { path: "/education", label: "Experience" },
  { path: "/contact",   label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null); // "services" | "projects" | null
  const closeTimer = useRef(null);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  // ----- mega menu hover state -----
  const megaConfig = useMemo(
    () => ({
      services: {
        groups: getServiceGroups(),
        hint: "Not sure what you need? Let's talk.",
        footerText: "See all services",
        footerTo: "/services",
      },
      projects: {
        projects: getFeaturedProjects(4),
        footerText: "See full portfolio",
        footerTo: "/project",
      },
    }),
    []
  );

  const openMega = (name) => () => {
    clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };
  // small delay so the cursor can travel from the link to the panel
  const closeMega = (immediate = false) => {
    clearTimeout(closeTimer.current);
    if (immediate === true) {
      setOpenMenu(null);
      return;
    }
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  };
  const handleNavigate = () => {
    clearTimeout(closeTimer.current);
    setOpenMenu(null);
    closeMenu();
  };

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useEffect(() => {
    closeMenu();
    setOpenMenu(null);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/" || location.pathname === "/home"
      : location.pathname.startsWith(path);

  return (
    <header className={scrolled ? "header header-scrolled" : "header"}>
      {/* LOGO — links to Home */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-text">
          <span className="logo-name">Mumtaz Ali</span>
          <span className="logo-subtitle">Full Stack Developer</span>
        </span>
      </Link>

      <nav>
        <ul className={open ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item) => {
            if (item.mega) {
              const cfg = megaConfig[item.mega];
              if (item.mega === "projects") {
                return (
                  <ProjectsMegaMenu
                    key={item.path}
                    label={item.label}
                    to={item.path}
                    isActive={isActive(item.path)}
                    projects={cfg.projects}
                    footerText={cfg.footerText}
                    footerTo={cfg.footerTo}
                    isOpen={openMenu === item.mega}
                    onOpen={openMega(item.mega)}
                    onClose={closeMega}
                    onNavigate={handleNavigate}
                  />
                );
              }
              return (
                <MegaMenu
                  key={item.path}
                  label={item.label}
                  to={item.path}
                  isActive={isActive(item.path)}
                  groups={cfg.groups}
                  hint={cfg.hint}
                  footerText={cfg.footerText}
                  footerTo={cfg.footerTo}
                  isOpen={openMenu === item.mega}
                  onOpen={openMega(item.mega)}
                  onClose={closeMega}
                  onNavigate={handleNavigate}
                />
              );
            }
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={isActive(item.path) ? "nav-link active" : "nav-link"}
                  aria-current={isActive(item.path) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="nav-theme-mobile">
            <ThemeToggle theme={theme} onToggle={toggle} />
          </li>
        </ul>
      </nav>

      <div className="nav-right">
        <ThemeToggle theme={theme} onToggle={toggle} />
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      <div
        className={open ? "menu-overlay active" : "menu-overlay"}
        onClick={closeMenu}
      />
    </header>
  );
};

export default Navbar;