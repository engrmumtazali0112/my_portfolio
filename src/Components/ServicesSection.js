// src/Components/ServicesSection.js
import React from 'react';
import './ServicesSectionStyles.css';

const ServicesSection = () => {
  const services = [
    {
      icon: "🌐",
      title: "Web Applications",
      description: "Tailored web apps built with the latest technologies.",
      technologies: ["Django", "Flask", "FastAPI", "React.js"]
    },
    {
      icon: "🛒",
      title: "E-commerce Websites",
      description: "Secure online stores with user-friendly shopping.",
      technologies: ["PostgreSQL", "Payment Gateway", "Cart System"]
    },
    {
      icon: "⚡",
      title: "API Integration",
      description: "Seamless integration for smooth data sharing.",
      technologies: ["REST API", "GraphQL", "Webhooks"]
    },
    {
      icon: "🤖",
      title: "AI/ML Solutions",
      description: "Intelligent systems using cutting-edge AI technologies.",
      technologies: ["TensorFlow", "PyTorch", "OpenCV", "LLMs"]
    },
    {
      icon: "🚀",
      title: "Speed Optimization",
      description: "Boost performance with faster load times and optimization.",
      technologies: ["Caching", "CDN", "Database Optimization"]
    },
    {
      icon: "☁️",
      title: "Website Management",
      description: "Easy content management systems with flexible controls.",
      technologies: ["Docker", "AWS", "CI/CD", "Monitoring"]
    }
  ];

  return (
    <div className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-title-box">
            <h2>SERVICES</h2>
          </div>
          <p className="services-subtitle">Transforming ideas into powerful digital solutions</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                <span>{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-tech">
                {service.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;