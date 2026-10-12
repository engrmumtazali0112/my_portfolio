// src/Components/ServicesHero.js
import React from "react";
import { Link } from "react-router-dom";
import "./ServicesHeroStyles.css";

// deterministic "falling data" streaks (no randomness, so no hydration flicker)
const STREAKS = Array.from({ length: 22 }, (_, i) => ({
  left: (i * 47) % 100,
  delay: ((i * 13) % 90) / 10,
  dur: 7 + ((i * 5) % 7),
  h: 60 + ((i * 29) % 110),
}));

const ServicesHero = () => (
  <section className="sh-section">
    <div className="sh-streaks" aria-hidden="true">
      {STREAKS.map((s, i) => (
        <span
          key={i}
          style={{
            left: `${s.left}%`,
            height: `${s.h}px`,
            animationDelay: `-${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        />
      ))}
    </div>

    <div className="sh-inner">
      <span className="sh-pill">
        <i /> Our services
      </span>

      <h1 className="sh-title">Turn Your Vision into Working Software</h1>

      <p className="sh-sub">
        From web apps and mobile to AI and cloud, I help businesses launch,
        grow, and succeed in the digital world.
      </p>

      <Link to="/contact" className="sh-btn">
        Let's Connect
      </Link>
    </div>
  </section>
);

export default ServicesHero;