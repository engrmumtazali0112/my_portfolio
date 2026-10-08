// src/Components/CaseStudy/CaseStudyHero.js
import React from "react";
import { Link, useParams } from "react-router-dom";
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
          <p>Project not found.</p>
          <Link to="/project" className="cs-back">← Back to Projects</Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="cs" style={{ "--accent": p.accent }}>
        <Link to="/project" className="cs-back">← Back to Projects</Link>

        <header className="cs-head">
          <h1>{p.title}</h1>
          <p className="cs-tagline">{p.tagline}</p>
          <dl className="cs-meta">
            <div><dt>Role</dt><dd>{p.role}</dd></div>
            <div><dt>Stack</dt><dd>{p.stack.join(", ")}</dd></div>
          </dl>
        </header>

        <img
          className="cs-hero"
          src={p.hero}
          alt={`${p.title} on desktop and mobile`}
        />

        <section className="cs-section">
          <h2>Overview</h2>
          <p className="cs-lead">{p.overviewText}</p>
          {p.overviewImg && (
            <img
              className="cs-wide"
              src={p.overviewImg}
              alt={`${p.title} screens`}
            />
          )}
        </section>

        <section className="cs-section">
          <h2>How it works</h2>
          <ol className="cs-flow">
            {p.flow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="cs-section">
          <h2>Pages and modules</h2>
          {p.modules.map((m, i) => (
            <article
              key={m.name}
              className={`cs-module ${i % 2 ? "flip" : ""} ${
                m.img ? "" : "no-img"
              }`}
            >
              <div className="cs-module-text">
                <h3>{m.name}</h3>
                <p>{m.text}</p>
              </div>
              {m.img && <img src={m.img} alt={m.name} loading="lazy" />}
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CaseStudy;