// src/Components/Heroimg.js
import "./HeroimgStyle.css";
import React from 'react';
import Introimg from "../assets/UniPic.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa"; // Make sure to install react-icons if you haven't

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        {/* Small Badge */}
        <div className="hero-badge">
          <span className="badge-dot"></span> Available for Projects
        </div>

        {/* Main Heading */}
        <h1 className="hero-title">
          I'm <span className="gradient-text">Mumtaz Ali</span>
        </h1>

        {/* Subheading */}
        <p className="hero-subtitle">
          Full-Stack AI/ML Developer &nbsp;·&nbsp; Python Specialist
        </p>

        {/* Description */}
        <p className="hero-description">
          Building high-performance web apps, RESTful APIs, and AI-powered solutions for clients worldwide.
        </p>

        {/* Buttons */}
        <div className="herobtn">
          <Link to="/Project" className="btn btn-primary">
            View My Work <FaArrowRight className="btn-icon" />
          </Link>
          <Link to="/Contact" className="btn btn-outline">
            Let's Talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;