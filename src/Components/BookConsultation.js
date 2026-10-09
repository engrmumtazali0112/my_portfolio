// src/Components/BookConsultation.js
import React from "react";
import { FaCalendarCheck, FaArrowRight } from "react-icons/fa";
import site from "../config/site";
import "./BookConsultationStyles.css";

const BookConsultation = ({
  variant = "primary",
  label = "Book a Free Consultation",
}) => {
  return (
    <a
      href={site.calendlyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`book-consult-btn book-consult-${variant}`}
    >
      <FaCalendarCheck className="book-consult-icon" />
      <span>{label}</span>
      <FaArrowRight className="book-consult-arrow" />
    </a>
  );
};

export default BookConsultation;