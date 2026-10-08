// src/Components/Navbar.js
import { Link, useLocation } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

// Core sections: Home, About, Projects, Experience / Resume, Contact.
// Other pages (/services, /certificate, /review) still exist as routes.
const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/project", label: "Projects" },
  { path: "/education", label: "Experience" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setOpen((v) => !v);
  const closeMenu = () => setOpen(false);

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
        <img src="/mylogo.png" alt="Mumtaz Ali logo" className="logo-img" />
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
          <li className="nav-cta-item">
            <Link to="/contact" onClick={closeMenu} className="nav-cta">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <div
        className={open ? "menu-overlay active" : "menu-overlay"}
        onClick={closeMenu}
      />
    </header>
  );
};

export default Navbar;