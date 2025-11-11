import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaYoutube, FaDiscord,    } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#4169E1", marginRight: "1rem" }} />
            <div>
              <p>Mumtaz Ali</p>
              <p>Charsadda Rd, Mardan, Khyber Pakhtunkhwa 23200, Pakistan</p>
              <p>Pakistan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "green", marginRight: "1rem" }} /> 
              +92-3476338292
            </h4>
            <h4>
              <FaPhone size={20} style={{ color: "green", marginRight: "1rem" }} /> 
              +92-3370690080
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#FFA500", marginRight: "1rem" }} /> 
              <a href="mailto:engrmumtazali01@gmail.com">engrmumtazali01@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>This is Mumtaz ali, Computer Science Student and Python Django Developer for more...   <a href="https://www.linkedin.com/in/mumtazali12//">(Click Me!)</a>.</p>
          <div className="our-social"><p>See Our Social's:</p></div>
          <div className="social">
            <a href="https://www.facebook.com/profile.php?id=100072570194916L" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={{ color: "#1877F2", marginRight: "0.5rem" }} />
            </a>
            <a href="https://x.com/mumtazali1223/status/1846913595021328672?s=51" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={30} style={{ color: "#1DA1F2", marginRight: "0.5rem" }} />
            </a>
            <a href="https://www.instagram.com/its_maliyzi?igsh=MWR1Y2x1a2xpazBpOA" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={30} style={{ color: "#E4405F", marginRight: "0.5rem" }} />
            </a>
            <a href="http://www.youtube.com/@MumtazAli-nm6cz" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={30} style={{ color: "#``FF0000", marginRight: "0.5rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/mumtazali12/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#0077B5", marginRight: "0.5rem" }} />
            </a>
            <a href="https://github.com/engrmumtazali0112" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "0.5rem" }} />
            </a>
            <a href="https://discord.gg/DZgwHzEb" target="_blank" rel="noopener noreferrer">
              <FaDiscord size={30} style={{ color: "#fff", backgroundColor: "#7289da", borderRadius: "50%", padding: "0.3rem", marginRight: "0.5rem" }} />
            </a>

          </div>
        </div>
      </div>
      {/* Copyright Notice */}
      <div className="copyright">
        <p>2024 All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
