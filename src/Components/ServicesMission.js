// src/Components/ServicesMission.js
import React from "react";
import { Link } from "react-router-dom";
import { FaBrain, FaCloud, FaMobileAlt, FaGlobe, FaChartLine } from "react-icons/fa";
import "./ServicesMissionStyles.css";

const POINTS = [
  "Built with growth in mind",
  "Supported beyond launch",
  "Optimized using real performance data",
];

// positions in % of the orbit box
const NODES = [
  { label: "AI", icon: FaBrain, x: 24, y: 28 },
  { label: "Cloud", icon: FaCloud, x: 66, y: 12 },
  { label: "Data & BI", icon: FaChartLine, x: 86, y: 44 },
  { label: "Web Apps", icon: FaGlobe, x: 68, y: 82 },
  { label: "Mobile Apps", icon: FaMobileAlt, x: 26, y: 72 },
];

const ServicesMission = () => (
  <section className="sm-section">
    <div className="sm-wrap">
      <div className="sm-text">
        <span className="sm-eyebrow">My approach</span>
        <h2>
          Why My Services Work
          <br />
          <span>Better Together</span>
        </h2>

        <p className="sm-lead">
          Most products fail after launch due to a lack of visibility,
          adoption, or a plan to grow. Building every layer myself means your
          product is:
        </p>

        <ul className="sm-list">
          {POINTS.map((p) => (
            <li key={p}>
              <i /> {p}
            </li>
          ))}
        </ul>

        <p className="sm-lead">
          This lets you work with one person instead of managing multiple
          disconnected teams.
        </p>

        <Link to="/contact" className="sm-btn">
          Get Started
        </Link>
      </div>

      <div className="sm-orbit" aria-hidden="true">
        <span className="sm-ring r1" />
        <span className="sm-ring r2" />
        <span className="sm-ring r3" />

        <div className="sm-core">Vision</div>

        {NODES.map((n, i) => {
          const I = n.icon;
          return (
            <div
              key={n.label}
              className="sm-node"
              style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * -1.1}s` }}
            >
              <span className="sm-dot"><I /></span>
              <b>{n.label}</b>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ServicesMission;