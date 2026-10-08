// src/Components/CaseStudy/CaseStudyHero.js
import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

const CaseStudyHero = ({ data }) => {
  return (
    <section className="cs-hero">
      <div className="cs-hero-inner">
        <div className="cs-hero-left">
          <div className="cs-hero-tags">
            <span className="cs-tag-pill">{data.category}</span>
            <span className="cs-tag-pill">{data.year}</span>
            <span className="cs-tag-pill">{data.duration}</span>
          </div>

          <h1 className="cs-hero-title">
            {data.name} — {data.tagline.split(".")[0]}
          </h1>

          <p className="cs-hero-desc">{data.tagline}</p>

          <div className="cs-hero-stack">
            {data.stack.slice(0, 5).map((tech) => (
              <span key={tech} className="cs-tech-pill">
                {tech}
              </span>
            ))}
            {data.extraStack && (
              <span className="cs-tech-pill cs-tech-more">{data.extraStack}</span>
            )}
          </div>

          <div className="cs-hero-actions">
            {data.liveUrl && (
              <a
                href={data.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn-primary"
              >
                Visit Site <FaArrowUpRightFromSquare />
              </a>
            )}
            {data.githubUrl && (
              <a
                href={data.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cs-btn-secondary"
              >
                <FaGithub /> Source Code
              </a>
            )}
          </div>
        </div>

        <div className="cs-hero-right">
          <img src={data.heroImage} alt={`${data.name} hero`} />
        </div>
      </div>
    </section>
  );
};

export default CaseStudyHero;