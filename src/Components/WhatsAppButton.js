// src/Components/WhatsAppButton.js
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import site from "../config/site";
import "./WhatsAppButtonStyles.css";

const WhatsAppButton = () => {
  const href = `${site.whatsappUrl}?text=${encodeURIComponent(
    site.whatsappMessage
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-fab-icon" />
      <span className="whatsapp-fab-tooltip">Chat on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;