// src/Components/Navbar.js
import { Link, useLocation } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";

const navItems = [
  { path: "/",          label: "Home" },
  { path: "/about",     label: "About" },
  { path: "/services",  label: "Services" },
  { path: "/project",   label: "Projects" },
  { path: "/education", label: "Experience" },
  { path: "/contact",   label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

  useEffect(() => {
    closeMenu();
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
      <Link to="/" className="logo" onClick={closeMenu}>
        <span className="logo-text">
          <span className="logo-name">Mumtaz Ali</span>
          <span className="logo-subtitle">Full Stack Developer</span>
        </span>
      </Link>

      <nav>
        <ul className={open ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item) => (
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
          ))}
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