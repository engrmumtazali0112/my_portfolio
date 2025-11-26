import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube, FaDiscord, FaMapMarkerAlt, FaEnvelope, FaHeart, FaCode, FaRocket } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#1a1a2e" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="brand-logo">
              <FaCode className="logo-icon" />
              <h2>Mumtaz Ali</h2>
            </div>
            <p className="brand-tagline">
              <FaRocket className="tagline-icon" />
              Crafting Digital Excellence
            </p>
            <p className="brand-description">
              Computer Science Student & Full Stack Developer specializing in Python, Django, 
              and modern web technologies. Transforming ideas into innovative digital solutions.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/project">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li><a href="#web-development">Web Development</a></li>
                <li><a href="#app-development">App Development</a></li>
                <li><a href="#ui-design">UI/UX Design</a></li>
                <li><a href="#consulting">Consulting</a></li>
              </ul>
            </div>

            <div className="footer-column contact-column">
              <h3>Get In Touch</h3>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-details">
                  <p>Charsadda Rd, Mardan</p>
                  <p>Khyber Pakhtunkhwa, Pakistan</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-details">
                  <a href="tel:+923476338292">+92-347-6338292</a>
                  <a href="tel:+923370690080">+92-337-0690080</a>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-details">
                  <a href="mailto:engrmumtazali01@gmail.com">engrmumtazali01@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-social-section">
          <h3>Connect With Me</h3>
          <div className="social-links">
            <a href="https://www.facebook.com/profile.php?id=100072570194916L" target="_blank" rel="noopener noreferrer" className="social-link facebook">
              <FaFacebook />
            </a>
            <a href="https://x.com/mumtazali1223/status/1846913595021328672?s=51" target="_blank" rel="noopener noreferrer" className="social-link twitter">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/its_maliyzi?igsh=MWR1Y2x1a2xpazBpOA" target="_blank" rel="noopener noreferrer" className="social-link instagram">
              <FaInstagram />
            </a>
            <a href="http://www.youtube.com/@MumtazAli-nm6cz" target="_blank" rel="noopener noreferrer" className="social-link youtube">
              <FaYoutube />
            </a>
            <a href="https://www.linkedin.com/in/mumtazali12/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
              <FaLinkedin />
            </a>
            <a href="https://github.com/engrmumtazali0112" target="_blank" rel="noopener noreferrer" className="social-link github">
              <FaGithub />
            </a>
            <a href="https://discord.gg/DZgwHzEb" target="_blank" rel="noopener noreferrer" className="social-link discord">
              <FaDiscord />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            <p>
              <FaHeart className="heart-icon" />
              Made with passion by Mumtaz Ali
            </p>
            <p className="copyright-year">© 2024 All rights reserved.</p>
          </div>
          <div className="footer-badge">
            <span className="badge-text">Available for Freelance</span>
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Footer;