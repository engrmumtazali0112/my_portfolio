// src/Components/ServicesOffer.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCode, FaBrain, FaCloud, FaGlobe, FaMobileAlt, FaPlug, FaShoppingCart,
  FaLayerGroup, FaComments, FaEye, FaChartBar, FaDatabase, FaDocker,
  FaRocket, FaTachometerAlt, FaServer, FaChevronRight, FaChevronDown,
} from "react-icons/fa";
import "./ServicesOfferStyles.css";

const VISIBLE = 3;

export const GROUPS = [
  {
    title: "Development",
    icon: FaCode,
    blurb: "Build reliable, scalable products using modern technologies.",
    items: [
      { icon: FaGlobe, name: "Custom Web Development", text: "Responsive, high-performing web apps on Django, FastAPI, React and Next.js." },
      { icon: FaMobileAlt, name: "Mobile App Development", text: "Cross-platform Flutter apps for Android and iOS with Firebase and push notifications." },
      { icon: FaPlug, name: "API Integration", text: "REST and GraphQL APIs and webhooks that connect your services reliably." },
      { icon: FaShoppingCart, name: "E-Commerce Systems", text: "Online stores with payments, inventory and order management." },
      { icon: FaLayerGroup, name: "SaaS & Product Engineering", text: "Multi-tenant, cloud-ready software products from idea to launch." },
    ],
  },
  {
    title: "AI & Data",
    icon: FaBrain,
    blurb: "Turn your data into automation, insight and better decisions.",
    items: [
      { icon: FaBrain, name: "AI / ML Solutions", text: "Predictive models and applied machine learning shipped as real products." },
      { icon: FaComments, name: "LLM & RAG Assistants", text: "Chat assistants and automations that answer from your own documents." },
      { icon: FaEye, name: "Computer Vision", text: "Image and video analysis with PyTorch and OpenCV." },
      { icon: FaChartBar, name: "Data Analytics & BI", text: "ETL pipelines and Power BI or Tableau dashboards for clear reporting." },
      { icon: FaDatabase, name: "Database Design", text: "Schema design and query tuning across SQL and NoSQL systems." },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    blurb: "Ship faster and keep it running, without surprise bills.",
    items: [
      { icon: FaCloud, name: "AWS Deployment", text: "Secure, scalable infrastructure set up and documented for your team." },
      { icon: FaRocket, name: "CI/CD Pipelines", text: "Automated builds, tests and releases so deploys become routine." },
      { icon: FaDocker, name: "Containerization", text: "Docker-based environments that behave the same everywhere." },
      { icon: FaTachometerAlt, name: "Performance Optimization", text: "Faster load times through caching, CDN and database tuning." },
      { icon: FaServer, name: "Monitoring & Logging", text: "Alerts and dashboards that flag problems before users do." },
    ],
  },
];

const Column = ({ group }) => {
  const [open, setOpen] = useState(false);
  const Icon = group.icon;
  const shown = open ? group.items : group.items.slice(0, VISIBLE);
  const more = group.items.length - VISIBLE;

  return (
    <div className="so-col">
      <div className="so-col-head">
        <Icon className="so-col-icon" />
        <span className="so-count">{group.items.length} Services</span>
        <h3>{group.title}</h3>
        <p>{group.blurb}</p>
      </div>

      <div className="so-col-body">
        {shown.map((it) => {
          const I = it.icon;
          return (
            <div className="so-item" key={it.name}>
              <div className="so-item-top">
                <span className="so-item-icon"><I /></span>
                <h4>{it.name}</h4>
              </div>
              <p>{it.text}</p>
              <Link to="/contact" className="so-more">
                Learn More <FaChevronRight />
              </Link>
            </div>
          );
        })}

        {more > 0 && (
          <button
            type="button"
            className="so-toggle"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
          >
            {open ? "Show Less" : `Show More (${more} more)`}
            <FaChevronDown className={open ? "is-open" : ""} />
          </button>
        )}
      </div>
    </div>
  );
};

const ServicesOffer = () => (
  <section className="so-section">
    <div className="so-wrap">
      <div className="so-head">
        <span className="so-eyebrow">What I offer</span>
        <h2>My Services</h2>
        <p>
          Comprehensive solutions to help your business build, automate and
          scale in the digital landscape.
        </p>
      </div>

      <div className="so-grid">
        {GROUPS.map((g) => (
          <Column key={g.title} group={g} />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesOffer;