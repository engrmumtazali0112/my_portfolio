// src/Components/Education.js
// src/Components/Education.js

import React from "react";

import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaBuilding,
  FaChartLine,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";
import "./EducationStyles.css";

const Education = () => {
  /* ---------- STATS ---------- */
  const stats = [
    { value: "2+",     label: "Years Experience" },
    { value: "5",      label: "Companies" },
    { value: "22+",    label: "Projects Shipped" },
    { value: "7+",     label: "Certifications" },
  ];

  /* ---------- EXPERIENCE ---------- */
const experiences = [
  {
    id: "truebluebio",
    company: "True Blue Bio",
    role: "SQA Engineer / Full Stack",
    type: "Part-time",
    period: "Present",
    location: "Rawalpindi, Pakistan",
    current: true,                     // ← green CURRENT badge
    summary:
      "Software quality assurance across web and mobile applications for a B2B lab supply platform with 24 modules and 100+ features.",
    achievements: [
      "Executed 150+ end-to-end workflows across catalog, checkout, invoicing, and payments.",
      "Filed and triaged prioritized bugs (P0–P2) with severity classification.",
      "Contributed to QA process improvements and structured test documentation.",
    ],
    tech: ["QA Testing", "Postman", "Playwright", "Jira", "SQL"],
    color: "#ec4899",
    icon: <FaBriefcase />,
  },
  {
    id: "wonder-crafts",
    company: "Wonder Crafts",
    role: "Full Stack AI/ML Developer",
    type: "Full-time",
    period: "May 2026 — Present",
    location: "Lahore, Pakistan",
    current: false,                    // ← removed green badge here
    summary:
      "Building scalable web applications and production-ready RESTful APIs using Django, FastAPI, and React.js across the full development lifecycle.",
    achievements: [
      "Awarded Certificate of Appreciation by CTO Bilal Saeed for outstanding contribution.",
      "Shipping production features on tight timelines across cross-functional teams.",
      "Implemented robust authentication, authorization, and data validation for enterprise apps.",
    ],
    tech: ["Django", "FastAPI", "React.js", "PostgreSQL", "Docker", "AWS"],
    color: "#4f46e5",
    icon: <FaBriefcase />,
  },
  {
    id: "virevo",
    company: "Virevo S.r.l.",
    role: "Full Stack Developer",
    type: "Remote · Contract",
    period: "Dec 2025 — Apr 2026",
    location: "Dekali, Italy (Remote)",
    current: false,
    summary:
      "Delivered international client projects using Django, FastAPI, React.js, and Next.js with AWS deployments and Docker containerization.",
    achievements: [
      "Received Certificate of Appreciation within 5 months — first international recognition.",
      "Collaborated with Italian stakeholders across time zones to ship scalable solutions.",
      "Built high-performance, production-grade APIs serving real client workloads.",
    ],
    tech: ["Django", "FastAPI", "Next.js", "AWS", "Docker", "PostgreSQL"],
    color: "#06b6d4",
    icon: <FaBriefcase />,
  },
  {
    id: "axaura",
    company: "Axaura Tech",
    role: "Full Stack Developer Intern (MERN)",
    type: "Internship",
    period: "Aug 2025 — Dec 2025",
    location: "Pakistan",
    current: false,
    summary:
      "Built full-stack web applications using React.js, Node.js, Express.js, and MongoDB end-to-end.",
    achievements: [
      "Covered frontend, backend APIs, and database design independently.",
      "Followed clean code practices and Git-based collaborative workflows.",
      "Completed MERN Stack Development internship with a Certificate of Achievement.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    color: "#22c55e",
    icon: <FaBriefcase />,
  },
  {
    id: "den",
    company: "Digital Empowerment Network",
    role: "Full Stack Developer",
    type: "Full-time",
    period: "Dec 2024 — Mar 2025",
    location: "Pakistan",
    current: false,
    summary:
      "Built and deployed end-to-end web solutions applying industry-standard backend engineering and database design practices.",
    achievements: [
      "Drove 25% task-completion uplift across 1,000+ citizens via community cleanup platform.",
      "Reduced fire-hazard incident response time by ~3 hours per cycle for 2,500+ residents.",
      "Optimized API infrastructure to handle 500+ daily transactions at 99.9% uptime.",
    ],
    tech: ["Django", "PostgreSQL", "Python", "REST APIs"],
    color: "#f59e0b",
    icon: <FaBriefcase />,
  },
];

  /* ---------- EDUCATION ---------- */
  const education = [
    {
      id: "bscs",
      degree: "BS Computer Software Engineering",
      school: "University of Engineering & Technology, Mardan",
      period: "2021 — 2025",
      score: "CGPA 3.42 / 4.0",
      icon: <FaGraduationCap />,
      color: "#4f46e5",
    },
    {
      id: "fsc",
      degree: "FSc Pre-Engineering",
      school: "Govt. Post Graduate College, Mardan",
      period: "2019 — 2021",
      score: "718 / 1100",
      icon: <FaGraduationCap />,
      color: "#06b6d4",
    },
    {
      id: "matric",
      degree: "Matriculation (Science)",
      school: "Govt. Higher Secondary School, Mian Khan, Mardan",
      period: "2017 — 2019",
      score: "912 / 1100",
      icon: <FaGraduationCap />,
      color: "#22c55e",
    },
  ];

  /* ---------- CERTIFICATIONS ---------- */
  const certifications = [
    { name: "Wonder Crafts — Appreciation",       issuer: "CTO Bilal Saeed",  year: "2026" },
    { name: "Virevo S.r.l. — Appreciation",       issuer: "CEO Amini Mogtaba", year: "2026" },
    { name: "Axaura Tech — Achievement",          issuer: "MERN Stack",       year: "2025" },
    { name: "PythonWebDevPro — Web Dev",          issuer: "Flask · Django",   year: "2024" },
    { name: "Inter Universities Programming",     issuer: "AI Community PK",  year: "2024" },
    { name: "EcodeCamp — Python Development",     issuer: "Virtual Internship", year: "2024" },
    { name: "DEN Coding Cup",                     issuer: "ID: DENP1942",     year: "2024" },
  ];

  return (
    <section className="exp-page">
      {/* ============ HERO ============ */}
      <div className="exp-hero">
        <div className="exp-hero-inner">
          <div className="exp-hero-photo">
            <img src={profileImg} alt="Mumtaz Ali" />
            <span className="exp-hero-status">
              <span className="exp-hero-dot" /> Available
            </span>
          </div>

          <div className="exp-hero-text">
            <span className="exp-eyebrow">$ cat experience.log</span>
            <h1 className="exp-title">
              My professional journey so far
            </h1>
            <p className="exp-subtitle">
              Two years of shipping production-grade web apps, APIs, and AI systems
              across Pakistan, Italy, and the US. Here's where I've worked, what
              I've built, and what I've learned.
            </p>

            <div className="exp-hero-meta">
              <span>
                <FaMapMarkerAlt /> Islamabad · Lahore, Pakistan
              </span>
              <span>
                <FaBriefcase /> Onsite & Remote
              </span>
              <span>
                <FaCalendarAlt /> 2+ years experience
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="exp-stats">
          {stats.map((s) => (
            <div key={s.label} className="exp-stat">
              <span className="exp-stat-value">{s.value}</span>
              <span className="exp-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ============ WORK EXPERIENCE ============ */}
      <div className="exp-section">
        <div className="exp-section-head">
          <span className="exp-section-eyebrow">{"// experience"}</span>
          <h2 className="exp-section-title">
            <FaBriefcase /> Work Experience
          </h2>
          <p className="exp-section-sub">
            {experiences.length} roles across 5 companies — production work, real
            clients, measurable impact.
          </p>
        </div>

        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <article
              key={exp.id}
              className={`exp-card ${exp.current ? "exp-card-current" : ""}`}
              style={{ "--accent": exp.color }}
            >
              {/* Left icon rail */}
              <div className="exp-card-rail">
                <div className="exp-card-icon">{exp.icon}</div>
                {idx !== experiences.length - 1 && (
                  <div className="exp-card-line" />
                )}
              </div>

              {/* Card body */}
              <div className="exp-card-body">
                <header className="exp-card-head">
                  <div>
                    <div className="exp-card-company">
                      <FaBuilding />
                      <span>{exp.company}</span>
                      {exp.current && (
                        <span className="exp-badge-current">
                          <span className="exp-pulse-dot" /> Current
                        </span>
                      )}
                    </div>
                    <h3 className="exp-card-role">{exp.role}</h3>
                  </div>
                  <div className="exp-card-meta">
                    <span className="exp-meta-pill">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="exp-meta-pill">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="exp-meta-pill exp-meta-type">
                      {exp.type}
                    </span>
                  </div>
                </header>

                <p className="exp-card-summary">{exp.summary}</p>

                <div className="exp-card-achievements">
                  <h4>
                    <FaChartLine /> Key Achievements
                  </h4>
                  <ul>
                    {exp.achievements.map((a, i) => (
                      <li key={i}>
                        <FaCheckCircle className="exp-check" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="exp-card-tech">
                  {exp.tech.map((t) => (
                    <span key={t} className="exp-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ============ EDUCATION ============ */}
      <div className="exp-section">
        <div className="exp-section-head">
          <span className="exp-section-eyebrow">{"// education"}</span>
          <h2 className="exp-section-title">
            <FaGraduationCap /> Academic Background
          </h2>
          <p className="exp-section-sub">
            Formal education that laid the foundation for everything above.
          </p>
        </div>

        <div className="exp-edu-grid">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="exp-edu-card"
              style={{ "--accent": edu.color }}
            >
              <div className="exp-edu-icon">{edu.icon}</div>
              <h3 className="exp-edu-degree">{edu.degree}</h3>
              <p className="exp-edu-school">{edu.school}</p>
              <div className="exp-edu-meta">
                <span>
                  <FaCalendarAlt /> {edu.period}
                </span>
                <span className="exp-edu-score">{edu.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ============ CERTIFICATIONS ============ */}
      <div className="exp-section">
        <div className="exp-section-head">
          <span className="exp-section-eyebrow">{"// certifications"}</span>
          <h2 className="exp-section-title">
            <FaAward /> Certifications & Awards
          </h2>
          <p className="exp-section-sub">
            Recognitions from employers, universities, and international clients.
          </p>
        </div>

        <div className="exp-cert-grid">
          {certifications.map((c, i) => (
            <div key={i} className="exp-cert-card">
              <div className="exp-cert-icon">
                <FaAward />
              </div>
              <div className="exp-cert-text">
                <h4>{c.name}</h4>
                <p>
                  {c.issuer} · {c.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;