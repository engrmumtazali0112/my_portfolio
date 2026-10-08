// src/Components/Bio.js
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./BioStyle.css";

const Bio = () => {
  const stats = [
    { value: "2+",     label: "Years Experience" },
    { value: "20+",    label: "Projects Shipped" },
    { value: "4",      label: "Companies Served" },
    { value: "99.9%",  label: "Prod Uptime" },
  ];

  return (
    <section className="bio-section">
      <div className="bio-container">
        <div className="bio-grid">
                    <div className="bio-left">
            <span className="section-eyebrow">{"// About me"}</span>
            <h2 className="section-title">
              A short introduction to <span className="accent">who I am</span> and
              what I do.
            </h2>
          </div>

          <div className="bio-right">
            <p className="bio-text">
              I'm <strong>Mumtaz Ali</strong>, a Full-Stack AI/ML Developer currently
              working at <strong>Wonder Crafts (Lahore)</strong>. Over the last 2+ years
              I've delivered production web apps, RESTful APIs, and AI-powered systems
              for clients across Pakistan and Italy.
            </p>
            <p className="bio-text">
              My toolkit spans <strong>Python</strong> (Django, Flask, FastAPI),
              <strong> JavaScript</strong> (React, Next.js, Node.js), modern
              databases (PostgreSQL, MongoDB, MySQL), and applied ML with
              PyTorch, TensorFlow, LangChain, and OpenCV. I care deeply about clean
              architecture, performance, and shipping on time.
            </p>

            <Link to="/about" className="bio-link">
              Read my full story <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="bio-stats">
          {stats.map((s) => (
            <div key={s.label} className="bio-stat">
              <span className="bio-stat-value">{s.value}</span>
              <span className="bio-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;