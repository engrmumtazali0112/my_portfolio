import { Link } from "react-router-dom";
import "./NavbarStyle.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  // Add useEffect to handle scroll listener and cleanup
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

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/" className="logo">
        {/* Add logo image */}
        <img src="/mylogo.png" alt="Logo" className="logo-img" />
        <h1>Welcome</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link> {/* Updated Home route to "/" */}
        </li>
        <li>
          <Link to="/project">Project</Link> {/* Lowercase paths */}
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/certificate">Certificate</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <a href="/CvPic/my-Resumi.pdf" download>
            <button className="btn">Download CV</button>
        </a>

        <a href="/CvPic/Transcript.pdf" download>
            <button className="btn">Download Transcript</button>
        </a>

      </ul>

      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
