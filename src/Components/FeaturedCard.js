// src/Components/FeaturedCard.js
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./FeaturedCardStyles.css";

const FeaturedCard = ({ project }) => {
  const isExternal = /^https?:\/\//.test(project.view);

  return (
    <div className="featured-card">
      <div className="featured-image">
        <span className="featured-badge">⭐ Flagship Project</span>
        <img src={project.imgsrc} alt={project.title} />
      </div>

      <div className="featured-content">
        <div className="featured-meta">
          <span className="featured-category">{project.category}</span>
          <span className="featured-year">{project.year}</span>
          <span className="featured-duration">{project.duration}</span>
        </div>

        <h2 className="featured-title">{project.title}</h2>
        <p className="featured-text">{project.text}</p>

        <div className="featured-stack">
          {project.stack.map((tech) => (
            <span key={tech} className="featured-pill">
              {tech}
            </span>
          ))}
        </div>

        <div className="featured-actions">
          {isExternal ? (
            <a
              href={project.view}
              target="_blank"
              rel="noreferrer"
              className="featured-cta"
            >
              View Live <FaArrowRight />
            </a>
          ) : (
            <Link to={project.view} className="featured-cta">
              Read the case study <FaArrowRight />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;