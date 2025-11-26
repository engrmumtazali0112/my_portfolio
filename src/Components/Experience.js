// src/Components/Experience.js
import React from 'react';
import './ExperienceStyles.css';

const Experience = () => {
  const experiences = [
    {
      company: "Digital Empowerment Network (DEN)",
      role: "Full-Stack Python Developer & AI/ML Engineer",
      period: "2022 - Present",
      location: "Pakistan",
      type: "Full-time",
      description: "Specializing in scalable web applications and cutting-edge AI solutions.",
      achievements: [
        "Built full-stack applications using Django, Flask, and FastAPI",
        "Developed RESTful APIs and integrated AI/ML models",
        "Implemented CI/CD pipelines and Docker containerization",
        "Led development of multiple production-ready projects"
      ],
      icon: "💼",
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "EcodeCamp",
      role: "Python Development Intern",
      period: "Sep 2024 - Oct 2024",
      location: "Virtual",
      type: "Internship",
      description: "Completed intensive virtual internship specializing in data analysis and backend programming.",
      achievements: [
        "Mastered data analysis with Pandas and NumPy",
        "Built backend systems using Python and Django",
        "Completed multiple real-world projects",
        "Received excellent performance rating"
      ],
      icon: "🎓",
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "EcodeCamp",
      role: "Python Developer Intern",
      period: "Earlier 2024",
      location: "Virtual",
      type: "Internship",
      description: "Focused on Python development and data manipulation techniques.",
      achievements: [
        "Developed Python scripts for automation",
        "Worked on data manipulation projects",
        "Implemented web scraping solutions",
        "Enhanced backend development skills"
      ],
      icon: "🐍",
      color: "from-green-500 to-teal-500"
    },
    {
      company: "Digital Empowerment Network (DEN)",
      role: "Full Stack Development Intern",
      period: "12-Week Program",
      location: "Pakistan",
      type: "Internship",
      description: "Intensive 12-week program mastering full-stack development skills.",
      achievements: [
        "Completed comprehensive full-stack curriculum",
        "Built end-to-end web applications",
        "Collaborated on team projects",
        "Gained hands-on industry experience"
      ],
      icon: "🚀",
      color: "from-orange-500 to-red-500"
    }
  ];

  const education = [
    {
      degree: "BSc in Computer Science",
      institution: "University of Engineering and Technology Mardan",
      period: "2021 - 2025",
      location: "Mardan, Pakistan",
      icon: "🎓",
      highlights: [
        "Specialized in Software Engineering",
        "Focus on AI/ML and Full-Stack Development",
        "Participated in programming competitions",
        "Active member of tech communities"
      ]
    },
    {
      degree: "FSc (Pre-Engineering)",
      institution: "Govt Post Graduate College Mardan",
      period: "2019 - 2021",
      location: "Mardan, Pakistan",
      icon: "📚",
      highlights: [
        "Foundation in Mathematics and Physics",
        "Strong analytical skills development"
      ]
    },
    {
      degree: "O-LEVEL",
      institution: "Govt Higher Secondary School Mian Khan",
      period: "2017 - 2019",
      location: "Pakistan",
      icon: "🏫",
      highlights: [
        "Early education foundation",
        "Academic excellence"
      ]
    }
  ];

  return (
    <div className="experience-section">
      <div className="experience-container">
        {/* Work Experience */}
        <div className="experience-header">
          <div className="section-badge-exp">
            <span className="badge-dot"></span>
            Career Journey
          </div>
          <h2 className="experience-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="experience-subtitle">
            Building expertise through hands-on development
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <div className={`marker-icon bg-gradient-to-br ${exp.color}`}>
                  {exp.icon}
                </div>
                {index !== experiences.length - 1 && <div className="timeline-line"></div>}
              </div>
              
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <div className="header-left">
                      <h3 className="company-name">{exp.company}</h3>
                      <h4 className="role-name">{exp.role}</h4>
                    </div>
                    <div className="header-right">
                      <span className="period-badge">{exp.period}</span>
                      <span className="type-badge">{exp.type}</span>
                    </div>
                  </div>
                  
                  <p className="location">📍 {exp.location}</p>
                  <p className="description">{exp.description}</p>
                  
                  <div className="achievements">
                    <h5>Key Achievements:</h5>
                    <ul>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="education-section">
          <div className="section-header">
            <div className="section-badge-exp">
              <span className="badge-dot"></span>
              Academic Background
            </div>
            <h2 className="section-title">
              <span className="gradient-text">Education</span>
            </h2>
          </div>

          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="edu-icon">{edu.icon}</div>
                <h3 className="degree">{edu.degree}</h3>
                <h4 className="institution">{edu.institution}</h4>
                <div className="edu-info">
                  <span className="edu-period">{edu.period}</span>
                  <span className="edu-location">📍 {edu.location}</span>
                </div>
                <ul className="highlights">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;