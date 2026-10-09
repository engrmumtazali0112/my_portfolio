// src/Components/WorkCard.js
import "./WorkCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const MAX_PILLS = 4;

const WorkCard = (props) => {
  const isExternal = /^https?:\/\//.test(props.view);
  const stack = props.stack || [];
  const visiblePills = stack.slice(0, MAX_PILLS);
  const extraCount = stack.length - MAX_PILLS;

  const CardWrapper = ({ children }) =>
    isExternal ? (
      <a
        href={props.view}
        target="_blank"
        rel="noreferrer"
        className="project-card"
      >
        {children}
      </a>
    ) : (
      <Link to={props.view} className="project-card">
        {children}
      </Link>
    );

  return (
    <CardWrapper>
      <div className="project-card-image">
        <img src={props.imgsrc} alt={props.title} loading="lazy" />
      </div>

      <div className="project-card-body">
        {/* Meta row: category · year · duration */}
        <div className="project-card-meta">
          {props.category && (
            <span className="project-card-category">{props.category}</span>
          )}
          {props.year && <span className="project-card-meta-dot">•</span>}
          {props.year && <span>{props.year}</span>}
          {props.duration && <span className="project-card-meta-dot">•</span>}
          {props.duration && <span>{props.duration}</span>}
        </div>

        <h2 className="project-title">{props.title}</h2>
        <p className="project-desc">{props.text}</p>

        {stack.length > 0 && (
          <div className="project-card-stack">
            {visiblePills.map((tech) => (
              <span key={tech} className="project-card-pill">
                {tech}
              </span>
            ))}
            {extraCount > 0 && (
              <span className="project-card-pill project-card-pill-more">
                +{extraCount} more
              </span>
            )}
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default WorkCard;