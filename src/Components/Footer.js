// src/Components/Footer.js
import "./FooterStyles.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook, FaGithub, FaInstagram, FaLinkedin,
  FaPhone, FaTwitter, FaYoutube, FaDiscord,
  FaMapMarkerAlt, FaEnvelope, FaHeart
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <div className="brand-mark">MA</div>
              <h2>Mumtaz Ali</h2>
            </div>
            <p className="brand-tagline">
              Full-Stack AI/ML Developer — building production web apps, APIs, and
              AI-powered systems for clients worldwide.
            </p>
            <p className="brand-location">
              <FaMapMarkerAlt /> Lahore, Pakistan · Available worldwide (remote)
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
              <a href="mailto:engrmumtazali01@gmail.com" className="contact-link-item">
                <FaEnvelope /> engrmumtazali01@gmail.com
              </a>
              <a href="tel:+923370690080" className="contact-link-item">
                <FaPhone /> +92 337 0690080
              </a>
              <span className="contact-link-item">
                <FaMapMarkerAlt /> Lahore, Pakistan
              </span>
            </div>
          </div>
        </div>

        <div className="footer-social-section">
          <span className="social-label">Connect</span>
          <div className="social-links">
            <a href="https://github.com/engrmumtazali0112" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/mumtazali12/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="https://x.com/mumtazali1223" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://www.instagram.com/its_maliyzi" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=100072570194916L" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
            <a href="http://www.youtube.com/@MumtazAli-nm6cz" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
            <a href="https://discord.gg/DZgwHzEb" target="_blank" rel="noopener noreferrer" aria-label="Discord"><FaDiscord /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            <FaHeart className="heart-icon" /> © {new Date().getFullYear()} Mumtaz Ali. All rights reserved.
          </p>
          <span className="footer-badge">Available for freelance</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;