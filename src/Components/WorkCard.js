import "./WorkCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const isExternal = (url = "") => /^https?:\/\//.test(url);

const WorkCard = (props) => (
  <div className="project-card">
    <img src={props.imgsrc} alt={props.title} />
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
      <p>{props.text}</p>
      <div className="pro-btns">
        {isExternal(props.view) ? (
          <a href={props.view} className="btn" target="_blank" rel="noreferrer">View</a>
        ) : (
          <Link to={props.view} className="btn">View</Link>
        )}
        <a href={props.source} className="btn" target="_blank" rel="noreferrer">Source</a>
      </div>
    </div>
  </div>
);

export default WorkCard;