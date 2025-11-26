import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaHome, FaUser, FaCog, FaProjectDiagram, FaCertificate, FaStar, FaImages, FaEnvelope, FaDownload, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [color, setColor] = useState(false);

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

    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/about", label: "About", icon: <FaUser /> },
    { path: "/service", label: "Service", icon: <FaCog /> },
    { path: "/project", label: "Project", icon: <FaProjectDiagram /> },
    { path: "/certificate", label: "Certificate", icon: <FaCertificate /> },
    { path: "/review", label: "Review", icon: <FaStar /> },
    { path: "/gallery", label: "Gallery", icon: <FaImages /> },
    { path: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

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
            <Link to={item.path} className="nav-link">
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          </li>
        ))}

        <li className="nav-buttons">
          <a href="/CvPic/my-Resumi.pdf" download className="download-btn">
            <FaDownload className="btn-icon" />
            <span>CV</span>
          </a>
          <a href="/CvPic/Transcript.pdf" download className="download-btn transcript-btn">
            <FaFileAlt className="btn-icon" />
            <span>Transcript</span>
          </a>
        </li>
      </ul>

      {/* Animated Navigation Cursor Indicator */}
      <div className="nav-cursor-track">
        <div className="nav-cursor-line"></div>
        <div className="nav-cursor"></div>
      </div>

      <div className="hamburger" onClick={handleClick}>
        <div className={click ? "hamburger-icon active" : "hamburger-icon"}>
          {click ? (
            <FaTimes size={24} />
          ) : (
            <FaBars size={24} />
          )}
        </div>
      </div>

      {/* Overlay for mobile menu */}
      <div 
        className={click ? "menu-overlay active" : "menu-overlay"} 
        onClick={closeMobileMenu}
      ></div>
    </div>
  );
};

export default Navbar;