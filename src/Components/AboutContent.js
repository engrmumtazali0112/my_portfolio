// ============================================
// FILE 2: src/Components/AboutContent.js
// ============================================
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./AboutContentStyles.css";
import profileImg from "../assets/profile.jpg";

const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    { icon: "💼", label: "Experience", value: "2+ Years" },
    { icon: "🌍", label: "International Clients", value: "Italy & Pakistan" },
    { icon: "🏆", label: "Projects", value: "20+ Completed" },
    { icon: "⭐", label: "Certifications", value: "7+ Earned" }
  ];

  return (
    <div className={`about-modern ${isVisible ? 'fade-in' : ''}`}>
      <div className="about-container">
        {/* Left Section - Profile */}
        <div className="about-left">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <div className="profile-ring"></div>
              <div className="profile-ring-2"></div>
              <img src={profileImg} className="profile-img" alt="Mumtaz Ali - Full Stack Developer" />
              <div className="status-badge">
                <span className="status-dot"></span>
                Employed at Wonder Crafts
              </div>
            </div>
            
            <div className="profile-info">
              <h2 className="profile-name">Mumtaz Ali</h2>
              <p className="profile-title">Full-Stack AI/ML Developer</p>
              <p className="profile-subtitle">MERN & Python Specialist</p>
              
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

        {/* Right Section - Content */}
        <div className="about-right">
          <div className="section-badge">
            <span className="badge-dot"></span>
            About Me
          </div>
          
          <h1 className="about-title">
            Building Scalable 
            <span className="gradient-text"> AI & Web Solutions</span>
          </h1>

          <div className="about-content">
            <div className="content-block">
              <div className="block-icon">🚀</div>
              <div className="block-text">
                <h3>Professional Journey</h3>
                <p>
                  I'm <strong>Mumtaz Ali</strong>, a Full-Stack AI/ML Developer currently working at <strong>Wonder Crafts (Lahore)</strong>. I have <strong>2+ years of experience</strong> delivering high-performance web applications and RESTful APIs for both local and international clients. I am highly proficient in Python (Django, Flask, FastAPI) and JavaScript (React.js, Next.js).
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">💻</div>
              <div className="block-text">
                <h3>Technical Excellence</h3>
                <p>
                  My technical expertise spans across <strong>Python, JavaScript, and SQL</strong>. I excel in full-stack frameworks like Django, FastAPI, and React.js. Additionally, I am skilled in AI/ML frameworks (<span className="highlight-tech">PyTorch, TensorFlow, LangChain</span>), Computer Vision (OpenCV, YOLO), and managing robust databases like <span className="highlight-tech">PostgreSQL, MongoDB, and MySQL</span>.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">⚙️</div>
              <div className="block-text">
                <h3>Modern Development & DevOps</h3>
                <p>
                  I have strong command over <strong>Docker containerization</strong> and <strong>AWS cloud infrastructure (EC2, S3)</strong>. I implement <strong>CI/CD pipelines using GitHub Actions</strong> for efficient deployment. I am also experienced in building <strong>AI RAG pipelines</strong>, integrating LLMs, and optimizing models using <span className="highlight-tech">ONNX and Quantization</span>.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🎯</div>
              <div className="block-text">
                <h3>Notable Projects & Experience</h3>
                <p>
                  I have worked on international client projects with <strong>Virevo S.r.l. (Italy)</strong> and developed complex systems. My portfolio includes a <strong>Dubai Land Department (DLD) Real Estate Analytics Platform</strong>, an <strong>AI Prompt Library (Promzia)</strong>, and an <strong>AI-Powered Retail Analytics Copilot (RAG + SQL)</strong>. I also build full-stack systems like the <strong>Student Complaint Management System</strong> and <strong>University Hostel Management</strong>.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🎓</div>
              <div className="block-text">
                <h3>Education & Certifications</h3>
                <p>
                  I hold a <strong>BSc in Computer Software Engineering from UET Mardan (CGPA 3.42/4.0)</strong>. I have been awarded multiple Certificates of Appreciation from <strong>Wonder Crafts</strong> and <strong>Virevo S.r.l. (Italy)</strong> for my outstanding full-stack contributions. I have also completed internships with Axaura Tech and EcodeCamp.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🌟</div>
              <div className="block-text">
                <h3>Vision & Passion</h3>
                <p>
                  Beyond technical skills, I am passionate about continuous learning and bridging the gap between <span className="highlight-tech">AI/ML models and production-ready applications</span>. I am eager to contribute to innovative tech solutions, leveraging my expertise in <span className="highlight-tech">full-stack development, AI integration, and cloud deployment</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Key Competencies */}
          <div className="competencies">
            <h3 className="competencies-title">Core Competencies</h3>
            <div className="competencies-grid">
              <div className="competency-tag">Full-Stack Development</div>
              <div className="competency-tag">AI/ML Integration</div>
              <div className="competency-tag">RAG & LLM Systems</div>
              <div className="competency-tag">Cloud Deployment (AWS)</div>
              <div className="competency-tag">Docker & CI/CD</div>
              <div className="competency-tag">Computer Vision</div>
              <div className="competency-tag">Database Design</div>
              <div className="competency-tag">RESTful APIs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;