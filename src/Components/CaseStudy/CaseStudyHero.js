// src/Components/CaseStudy/CaseStudyHero.js
import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar";
import Footer from "../Footer";
import caseStudies from "./CaseStudyData";
import "./CaseStudy.css";

const CaseStudy = () => {
  const { slug } = useParams();
  const p = caseStudies.find((c) => c.slug === slug);

  if (!p) {
    return (
      <>
        <Navbar />
        <main className="cs">
          <div className="cs-not-found">
            <h1>Project not found</h1>
            <Link to="/project" className="cs-back">
              <FaArrowLeft /> Back to Projects
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="cs" style={{ "--accent": p.accent }}>
        {/* Back link */}
        <Link to="/project" className="cs-back">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* ===== HERO: 2-column, text left / image right ===== */}
        <header className="cs-hero-head">
          <div className="cs-hero-left">
            {/* Category + year + duration pills */}
            <div className="cs-pills">
              {p.category && (
                <span className="cs-pill cs-pill-cat">{p.category}</span>
              )}
              {p.year && <span className="cs-pill">📅 {p.year}</span>}
              {p.duration && <span className="cs-pill">⏱️ {p.duration}</span>}
            </div>

            {/* Big title */}
            <h1 className="cs-big-title">{p.title}</h1>

            {/* Description */}
            <p className="cs-hero-desc">{p.tagline}</p>

            {/* Stack pills */}
            <div className="cs-stack">
              {p.stack.map((tech) => (
                <span key={tech} className="cs-stack-pill">
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA — Visit Site if liveUrl exists, otherwise GitHub */}
            <div className="cs-hero-actions">
              {p.liveUrl ? (
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cs-visit-btn"
                >
                  View Live Site <FaExternalLinkAlt />
                </a>
              ) : (
                <a
                  href={p.sourceUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="cs-visit-btn"
                >
                  View on GitHub <FaExternalLinkAlt />
                </a>
              )}
            </div>
          </div>

          <div className="cs-hero-right">
            <div className="cs-hero-device">
              <img src={p.hero} alt={`${p.title} preview`} />
            </div>
          </div>
        </header>

        {/* ===== OVERVIEW ===== */}
        <section className="cs-section">
          <span className="cs-section-eyebrow">Section 01 · Overview</span>
          <h2 className="cs-section-title">Overview</h2>
          <p className="cs-lead">{p.overviewText}</p>
          {p.overviewImg && (
            <img
              className="cs-wide"
              src={p.overviewImg}
              alt={`${p.title} — interface`}
              loading="lazy"
            />
          )}
        </section>

        {/* ===== FLOW ===== */}
        <section className="cs-section">
          <span className="cs-section-eyebrow">Section 02 · Flow</span>
          <h2 className="cs-section-title">How it works</h2>
          <ol className="cs-flow">
            {p.flow.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </section>

        {/* ===== MODULES ===== */}
        <section className="cs-section">
          <span className="cs-section-eyebrow">Section 03 · Modules</span>
          <h2 className="cs-section-title">Pages and modules</h2>

          {p.modules.map((m, i) => (
            <article
              key={m.name}
              className={`cs-module ${i % 2 ? "flip" : ""} ${
                m.img ? "" : "no-img"
              }`}
            >
              <div className="cs-module-text">
                <span className="cs-module-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{m.name}</h3>
                <p>{m.text}</p>
              </div>
              {m.img && (
                <div className="cs-module-image">
                  <img src={m.img} alt={m.name} loading="lazy" />
                </div>
              )}
            </article>
          ))}
        </section>

        {/* ===== BOTTOM CTA ===== */}
        <section className="cs-bottom-cta">
          <h2>Want to build something like this?</h2>
          <p>Let's talk about your project — I usually reply within 24 hours.</p>
          <Link to="/contact" className="cs-bottom-btn">
            Get in Touch
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;