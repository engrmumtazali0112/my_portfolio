// src/Components/AboutContent.js
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./AboutContentStyles.css";
import profileImg from "../assets/profile.jpg";

const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    { icon: "💼", label: "Experience", value: "2+ Years" },
    { icon: "🌍", label: "Clients Served", value: "PK · IT · US" },
    { icon: "🏆", label: "Projects Shipped", value: "22+ Delivered" },
    { icon: "⭐", label: "Certifications", value: "7+ Earned" },
  ];

  return (
    <div className={`about-modern ${isVisible ? "fade-in" : ""}`}>
      <div className="about-container">
        {/* LEFT: Profile Card */}
        <div className="about-left">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <div className="profile-ring"></div>
              <div className="profile-ring-2"></div>
              <img
                src={profileImg}
                className="profile-img"
                alt="Mumtaz Ali — Full Stack Developer"
              />
              
            </div>

            <div className="profile-info">
              <h2 className="profile-name">Mumtaz Ali</h2>
              <p className="profile-title">Full-Stack AI/ML Developer</p>
              <p className="profile-subtitle">Python · MERN · DevOps</p>

              <div className="profile-stats">
                {highlights.map((item, index) => (
                  <div key={index} className="stat-item">
                    <span className="stat-icon">{item.icon}</span>
                    <div className="stat-details">
                      <span className="stat-value">{item.value}</span>
                      <span className="stat-label">{item.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/contact" className="contact-link">
                <button className="btn-modern">
                  <span>Let's Connect</span>
                  <span className="btn-icon">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="about-right">
          <div className="section-badge">
            <span className="badge-dot"></span>
            About Me
          </div>

          <h1 className="about-title">
            Building <span className="gradient-text">production software</span> that
            clients actually use.
          </h1>

          <div className="about-content">
            <div className="content-block">
              <div className="block-icon">🚀</div>
              <div className="block-text">
                <h3>Who I Am</h3>
                <p>
                  I'm <strong>Mumtaz Ali</strong> — a Full-Stack AI/ML Developer
                  based in <strong>Islamabad · Lahore, Pakistan</strong>, working
                  with clients across <strong>Pakistan, Italy, and the US</strong>.
                  Currently employed at <strong>Wonder Crafts</strong> (Lahore) as a
                  Full-Stack AI/ML Developer, and shipping QA + engineering work
                  for <strong>True Blue Bio</strong> (Rawalpindi), a B2B
                  laboratory-supply SaaS platform. I have <strong>2+ years</strong>{" "}
                  of hands-on experience delivering production web apps, RESTful
                  APIs, and AI-powered systems.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">💻</div>
              <div className="block-text">
                <h3>Technical Excellence</h3>
                <p>
                  My core stack is <strong>Python</strong> (Django, Flask,
                  FastAPI) and <strong>JavaScript</strong> (React, Next.js,
                  Node.js), backed by PostgreSQL, MongoDB, MySQL, and Redis. On the
                  AI/ML side, I work with{" "}
                  <span className="highlight-tech">
                    PyTorch, TensorFlow, LangChain, Hugging Face
                  </span>
                  , RAG pipelines, LLM integrations, and computer vision using{" "}
                  <span className="highlight-tech">OpenCV and YOLO</span>. I also
                  build mobile apps in Flutter and native Android, and I bring QA
                  experience (Playwright, Postman, manual + automation) to every
                  project I ship.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">⚙️</div>
              <div className="block-text">
                <h3>Modern DevOps & Deployment</h3>
                <p>
                  I deploy on <strong>AWS</strong> (EC2, S3, Lambda, CodePipeline),
                  containerize with <strong>Docker</strong>, and automate releases
                  through <strong>GitHub Actions</strong> CI/CD. I optimize model
                  inference with <span className="highlight-tech">ONNX and
                  quantization</span>, build <strong>RAG pipelines</strong> on top
                  of vector databases (Pinecone, FAISS, Chroma), and design
                  data-heavy backends that hold up under real traffic.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🎯</div>
              <div className="block-text">
                <h3>Recent Work</h3>
                <p>
                  My recent portfolio includes{" "}
                  <strong>True Blue Bio</strong> — a three-app B2B lab-supply
                  platform (Next.js storefront, React admin panel, Express API)
                  with Stripe (card + ACH), Microsoft Teams chat handoff, and a
                  21-permission RBAC system — plus{" "}
                  <strong>Promzia</strong> (AI prompt library serving 3,000+
                  prompts via MCP), <strong>FinanceAI</strong> (multi-tenant
                  personal finance assistant), <strong>Dubai Land Department
                  analytics</strong> (real-estate data pipelines), and{" "}
                  <strong>Sufrah</strong> (9-app restaurant management platform
                  serving Islamabad & Rawalpindi).
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🏆</div>
              <div className="block-text">
                <h3>Recognition & Achievements</h3>
                <p>
                  I hold a <strong>BSc in Computer Software Engineering</strong>{" "}
                  from UET Mardan (CGPA 3.42/4.0). I've received{" "}
                  <strong>Certificates of Appreciation</strong> from Wonder Crafts
                  (issued by CTO Bilal Saeed) and Virevo S.r.l. Italy (issued by
                  CEO Amini Mogtaba) within 5 months of joining — plus an
                  Achievement certificate from Axaura Tech for MERN internship
                  completion. My work has driven measurable outcomes: 99.9% API
                  uptime across 500+ daily transactions, 25% task-completion uplift
                  for 1,000+ citizens, and reduced incident response by ~3 hours
                  per cycle for 2,500+ residents.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🌟</div>
              <div className="block-text">
                <h3>What I'm Building Next</h3>
                <p>
                  I'm deeply focused on bridging the gap between{" "}
                  <span className="highlight-tech">
                    AI/ML models and production-grade applications
                  </span>{" "}
                  — building RAG systems, LLM-powered features, and vision-based
                  tools that ship to real users. I'm currently open to{" "}
                  <strong>freelance projects</strong> and{" "}
                  <strong>full-time roles</strong> in full-stack engineering,
                  AI/ML engineering, or backend development (remote or onsite in
                  Islamabad / Lahore).
                </p>
              </div>
            </div>
          </div>

          {/* Core Competencies */}
          <div className="competencies">
            <h3 className="competencies-title">Core Competencies</h3>
            <div className="competencies-grid">
              <div className="competency-tag">Full-Stack Development</div>
              <div className="competency-tag">AI / ML Engineering</div>
              <div className="competency-tag">RAG & LLM Systems</div>
              <div className="competency-tag">Cloud (AWS · GCP)</div>
              <div className="competency-tag">Docker & CI/CD</div>
              <div className="competency-tag">Computer Vision</div>
              <div className="competency-tag">Database Design</div>
              <div className="competency-tag">RESTful APIs</div>
              <div className="competency-tag">Flutter / Android</div>
              <div className="competency-tag">QA & Automation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;