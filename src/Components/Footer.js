// src/Components/Footer.js
import "./FooterStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowRight,
  FaCalendarCheck,
} from "react-icons/fa";
import site from "../config/site";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ---------- TOP ---------- */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="brand-mark">MA</div>
              <h2>Mumtaz Ali</h2>
            </div>
            <p className="brand-tagline">
              Full-Stack AI/ML Developer — building production web apps, APIs,
              and AI-powered systems for clients worldwide.
            </p>
            <p className="brand-location">
              <FaMapMarkerAlt />
              <span>
                Islamabad &amp; Lahore, Pakistan · <strong>Onsite</strong> &amp;{" "}
                <strong>Remote</strong>
              </span>
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Navigate</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/education">Experience</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><Link to="/services">Web Applications</Link></li>
                <li><Link to="/services">AI / ML Solutions</Link></li>
                <li><Link to="/services">API Integration</Link></li>
                <li><Link to="/services">Cloud Deployment</Link></li>
              </ul>
            </div>

            <div className="footer-column contact-column">
              <h3>Get in Touch</h3>
              <a
                href={`mailto:${site.email}`}
                className="contact-link-item"
              >
                <FaEnvelope /> {site.email}
              </a>
              <a href="tel:+923370690080" className="contact-link-item">
                <FaPhone /> +92 337 0690080
              </a>
              <a href="tel:+923476338292" className="contact-link-item">
                <FaPhone /> +92 347 6338292
              </a>
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-item"
              >
                <FaCalendarCheck /> Book a free call
              </a>
              <span className="contact-link-item">
                <FaMapMarkerAlt /> Islamabad · Lahore, Pakistan
              </span>
            </div>
          </div>
        </div>

        {/* ---------- SOCIAL + CTA ---------- */}
        <div className="footer-social-section">
          <div className="social-links">
            <a
              href="https://github.com/engrmumtazali0112"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/mumtazali1223"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="social-icon"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.linkedin.com/in/mumtazali12/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://discord.gg/DZgwHzEb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="social-icon"
            >
              <FaDiscord />
            </a>
          </div>

          <Link to="/contact" className="connect-cta">
            <span>Let's Connect</span>
            <FaArrowRight className="connect-arrow" />
          </Link>
        </div>

        {/* ---------- BOTTOM ---------- */}
        <div className="footer-bottom">
          <p className="copyright">
            <FaHeart className="heart-icon" /> © {new Date().getFullYear()}{" "}
            Mumtaz Ali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;