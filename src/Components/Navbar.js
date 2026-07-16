// src/Components/Navbar.js
import { Link, useLocation } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { 
  FaBars, FaTimes, FaHome, FaUser, FaCog, 
  FaProjectDiagram, FaCertificate, FaStar, FaEnvelope,
  FaDownload, FaFileAlt 
} from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaUser /> },
    { path: "/services", label: "Services", icon: <FaCog /> },
    { path: "/project", label: "Projects", icon: <FaProjectDiagram /> },
    { path: "/certificate", label: "Certificates", icon: <FaCertificate /> },
    { path: "/review", label: "Reviews", icon: <FaStar /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo" onClick={closeMobileMenu}>
        <div className="logo-container">
          <img src="/mylogo.png" alt="Logo" className="logo-img" />
          <div className="logo-text">
            <h1>Mumtaz Ali</h1>
            <span className="logo-subtitle">Full Stack Developer</span>
          </div>
        </div>
      </Link>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        {navItems.map((item, index) => (
          <li key={index} onClick={closeMobileMenu}>
            <Link 
              to={item.path} 
              className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
              {isActive(item.path) && <span className="nav-indicator"></span>}
            </Link>
          </li>
        ))}

        <li className="nav-buttons">
          <a href="/CvPic/my-Resumi.pdf" download className="download-btn">
            <FaDownload className="btn-icon" />
            <span>CV</span>
          </a>
        </li>
      </ul>

      <div className="hamburger" onClick={handleClick}>
        <div className={click ? "hamburger-icon active" : "hamburger-icon"}>
          {click ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      <div 
        className={click ? "menu-overlay active" : "menu-overlay"} 
        onClick={closeMobileMenu}
      ></div>
    </div>
  );
};

export default Navbar;