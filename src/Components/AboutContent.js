// ============================================
// FILE 2: src/Components/AboutContent.js
// ============================================
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import "./AboutContentStyles.css";
import profileImg from "../assets/profile.jpg.png";

const AboutContent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    { icon: "💼", label: "Experience", value: "2+ Years" },
    { icon: "🎓", label: "Education", value: "BSc Computer Science" },
    { icon: "🏆", label: "Projects", value: "15+ Completed" },
    { icon: "⭐", label: "Certifications", value: "6+ Earned" }
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
              <img src={profileImg} className="profile-img" alt="Mumtaz Ali - Python Developer" />
              <div className="status-badge">
                <span className="status-dot"></span>
                Available for Work
              </div>
            </div>
            
            <div className="profile-info">
              <h2 className="profile-name">Mumtaz Ali</h2>
              <p className="profile-title">Full-Stack Python Developer</p>
              <p className="profile-subtitle">AI/ML Engineer</p>
              
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
            Transforming Ideas into 
            <span className="gradient-text"> Digital Reality</span>
          </h1>

          <div className="about-content">
            <div className="content-block">
              <div className="block-icon">🚀</div>
              <div className="block-text">
                <h3>Professional Journey</h3>
                <p>
                  I'm <strong>Mumtaz Ali</strong>, a proficient Python Developer with <strong>2 years of professional experience</strong> at Digital Empowerment Network (DEN) of Pakistan. I specialize in full-stack web development, RESTful API design, and building scalable applications using <span className="highlight-tech">Django, Flask, and FastAPI</span>.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">💻</div>
              <div className="block-text">
                <h3>Technical Excellence</h3>
                <p>
                  My technical expertise spans across <strong>Python, JavaScript, and SQL</strong>, with strong proficiency in frameworks like Django Rest Framework, React.js, and data manipulation tools including Pandas, NumPy, and Matplotlib. I excel in creating responsive front-end interfaces while managing robust database systems (<span className="highlight-tech">PostgreSQL, MySQL, SQLite</span>).
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">⚙️</div>
              <div className="block-text">
                <h3>Modern Development Practices</h3>
                <p>
                  I'm experienced in modern development practices including <strong>Git/GitHub version control</strong>, pytest testing frameworks, and <strong>Docker containerization</strong>. I implement <strong>CI/CD pipelines on AWS</strong> for efficient deployment and maintain high code quality standards across all projects.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🎯</div>
              <div className="block-text">
                <h3>Notable Projects</h3>
                <p>
                  My portfolio includes diverse projects: a <strong>Full-Stack Hostel Management System</strong>, <strong>AI-Powered Hand Gesture Drawing System</strong> using OpenCV and Mediapipe, real-time object detection systems with TensorFlow, and dynamic e-commerce platforms. Each project demonstrates my commitment to creating efficient, user-friendly solutions.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🎓</div>
              <div className="block-text">
                <h3>Education & Certifications</h3>
                <p>
                  I hold a <strong>BSc from the University of Engineering and Technology Mardan</strong> and have earned multiple certifications including PythonWebDevPro, Inter Universities Programming Challenge recognition, and completed intensive internships at EcodeCamp specializing in data analysis and backend programming.
                </p>
              </div>
            </div>

            <div className="content-block">
              <div className="block-icon">🌟</div>
              <div className="block-text">
                <h3>Vision & Passion</h3>
                <p>
                  Beyond technical skills, I am passionate about continuous learning and staying at the forefront of the ever-evolving software engineering landscape. I'm excited to contribute to innovative tech solutions, leveraging my expertise in <span className="highlight-tech">full-stack development, AI integration, and cloud deployment</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Key Competencies */}
          <div className="competencies">
            <h3 className="competencies-title">Core Competencies</h3>
            <div className="competencies-grid">
              <div className="competency-tag">Full-Stack Development</div>
              <div className="competency-tag">RESTful APIs</div>
              <div className="competency-tag">AI/ML Integration</div>
              <div className="competency-tag">Cloud Deployment</div>
              <div className="competency-tag">Database Design</div>
              <div className="competency-tag">DevOps & CI/CD</div>
              <div className="competency-tag">Web Scraping</div>
              <div className="competency-tag">Computer Vision</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;