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
        {/* LEFT: Text */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for freelance & full-time roles
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="hero-name">Mumtaz Ali</span>.
            <br />
            I help teams ship{" "}
            <span className="hero-highlight">production software</span> — web
            apps, APIs, and AI systems.
          </h1>

          <p className="hero-subheading">
            Based in <strong>Islamabad · Lahore</strong> and working with clients
            across <strong>Pakistan, Italy, and the US</strong>. I specialize in{" "}
            <strong>Python</strong> (Django, FastAPI),{" "}
            <strong>JavaScript</strong> (React, Next.js, Node), and{" "}
            <strong>applied ML</strong> (RAG, LLM integrations, computer vision) —
            with a strong DevOps foundation (Docker, AWS, CI/CD). Currently
            building at <strong>Wonder Crafts</strong> and shipping QA +
            full-stack engineering for <strong>True Blue Bio</strong>, a B2B
            lab-supply platform.
          </p>

          <div className="hero-actions">
            <Link to="/project" className="btn-primary">
              View Projects <FaArrowRight className="btn-arrow" />
            </Link>
            <Link to="/contact" className="btn-secondary">
              Get in Touch
            </Link>
          </div>

       <div className="hero-now">
  <span className="hero-now-dot" />
  <span>
    Currently at <strong>True Blue Bio</strong> · Open to new projects
  </span>
</div>

          <div className="hero-socials">
            <a
              href="https://github.com/engrmumtazali0112"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/mumtazali12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:engrmumtazali01@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT: Visual */}
        <div className="hero-visual">
          <div className="hero-image-frame">
            <img src={profileImg} alt="Mumtaz Ali" className="hero-image" />
          </div>
          <div className="hero-stat-card hero-stat-1">
            <span className="hero-stat-value">2+</span>
            <span className="hero-stat-label">Years Experience</span>
          </div>
          <div className="hero-stat-card hero-stat-2">
            <span className="hero-stat-value">22+</span>
            <span className="hero-stat-label">Projects Shipped</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;