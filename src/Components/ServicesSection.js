// src/Components/ServicesSection.js
import React from 'react';
import './ServicesSectionStyles.css';

const ServicesSection = () => {
  const services = [
    {
      id: "01",
      title: "Web Applications",
      description: "Backend-heavy web apps built on Django, Flask, and FastAPI, paired with React.js or Next.js on the front end.",
      stack: ["Django", "FastAPI", "React.js"]
    },
    {
      id: "02",
      title: "Mobile Applications",
      description: "Cross-platform Android/iOS apps in Flutter with Firebase auth, push notifications, and REST integration.",
      stack: ["Flutter", "Firebase", "Android"]
    },
    {
      id: "03",
      title: "AI / ML Solutions",
      description: "Applied ML systems — predictive models, computer vision, NLP, and LLM-powered features — shipped as working products.",
      stack: ["PyTorch", "OpenCV", "LangChain"]
    },
    {
      id: "04",
      title: "Data Analytics & BI",
      description: "ETL pipelines, statistical analysis, and dashboards that turn raw data into decisions.",
      stack: ["Pandas", "Power BI", "Tableau"]
    },
    {
      id: "05",
      title: "Database Design",
      description: "Schema design, query optimization, and data modeling across relational and NoSQL systems.",
      stack: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      id: "06",
      title: "API Integration",
      description: "REST and GraphQL APIs that connect your services and move data reliably between them.",
      stack: ["REST", "GraphQL", "Webhooks"]
    },
    {
      id: "07",
      title: "E-Commerce Systems",
      description: "Online stores with payment integration, inventory, and order management built for real transactions.",
      stack: ["Stripe", "Cart Logic", "Order Tracking"]
    },
    {
      id: "08",
      title: "SaaS & Cloud Deployment",
      description: "Containerized, multi-tenant platforms deployed on AWS with automated CI/CD pipelines.",
      stack: ["Docker", "AWS", "CI/CD"]
    },
    {
      id: "09",
      title: "Performance Optimization",
      description: "Faster load times through caching, query tuning, and infrastructure-level optimization.",
      stack: ["Caching", "CDN", "DB Tuning"]
    }
  ];

  return (
    <section id="services" className="svc-section">
      <div className="svc-wrap">
        <div className="svc-head">
          <span className="svc-eyebrow">$ ./services --list</span>
          <h2 className="svc-title">What I Build</h2>
          <p className="svc-sub">Six things I get asked for most, end to end.</p>
        </div>

        <div className="svc-grid">
          {services.map((service) => (
            <div key={service.id} className="svc-card">
              <div className="svc-card-top">
                <span className="svc-id">{service.id}</span>
                <span className="svc-run">run</span>
              </div>
              <h3 className="svc-name">{service.title}</h3>
              <p className="svc-desc">{service.description}</p>
              <div className="svc-stack">
                {service.stack.map((tech, idx) => (
                  <span key={idx} className="svc-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;