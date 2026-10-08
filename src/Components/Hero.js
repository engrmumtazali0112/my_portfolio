// src/Components/Hero.js
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import "./HeroStyle.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-bg-accent" aria-hidden="true" />

      <div className="hero-container">
        {/* Left — Text */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for freelance & full-time roles
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="hero-name">Mumtaz Ali</span>.
            <br />
            I build <span className="hero-highlight">AI-powered web apps</span>
            <br />
            that ship to production.
          </h1>

          <p className="hero-subheading">
            Full-Stack AI/ML Developer based in Lahore, Pakistan. I specialize in
            Python (Django, FastAPI), JavaScript (React, Next.js), and applied
            machine learning — delivering scalable APIs and AI features for clients
            in Pakistan, Italy, and beyond.
          </p>

          <div className="hero-actions">
            <Link to="/project" className="btn-primary">
              View Projects <FaArrowRight className="btn-arrow" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/engrmumtazali0112" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/mumtazali12" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:engrmumtazali01@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Right — Profile image */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={profileImg} alt="Mumtaz Ali" className="hero-image" />
          </div>
          <div className="hero-stat-card hero-stat-1">
            <span className="hero-stat-value">2+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat-card hero-stat-2">
            <span className="hero-stat-value">20+</span>
            <span className="hero-stat-label">Projects Shipped</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;