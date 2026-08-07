// src/Components/Education.js
import React from "react";
import "./EducationStyles.css";

const Education = () => {
  const degree = {
    hash: "a1b2c3d",
    degree: "BS Computer Software Engineering",
    school: "University of Engineering & Technology, Mardan",
    period: "2021 — 2025",
    cgpa: 3.42,
    cgpaMax: 4.0
  };

  const priorEducation = [
    {
      hash: "e4f5a6b",
      title: "FSc Pre-Engineering",
      school: "Govt. Post Graduate College, Mardan",
      period: "2021",
      score: 718,
      scoreMax: 1100
    },
    {
      hash: "c7d8e9f",
      title: "Matriculation (Science)",
      school: "Govt. Higher Secondary School, Mian Khan, Mardan",
      period: "2019",
      score: 912,
      scoreMax: 1100
    }
  ];

  const certifications = [
    { name: "wonder-crafts-appreciation.cert", note: "Full-Stack Developer" },
    { name: "virevo-srl-appreciation.cert", note: "Full-Stack Development" },
    { name: "axaura-tech-achievement.cert", note: "MERN Stack Development" },
    { name: "pythonwebdevpro.cert", note: "Flask · Django · HTML/CSS · Bootstrap" },
    { name: "iu-programming-challenge.cert", note: "Inter Universities Programming Challenge, 2024" },
    { name: "ecodecamp-python-dev.cert", note: "Virtual Internship" },
    { name: "den-coding-cup.cert", note: "ID: DENP1942" }
  ];

  const pct = (val, max) => Math.round((val / max) * 100);

  return (
    <section id="education" className="edu-section">
      <div className="edu-wrap">
        <div className="edu-head">
          <span className="edu-eyebrow">$ cat education.log</span>
          <h2 className="edu-title">Academic Record &amp; Certifications</h2>
          <p className="edu-sub">A version history of what I've learned, formally and otherwise.</p>
        </div>

        {/* Degree — primary commit */}
        <div className="edu-panel">
          <div className="edu-panel-label">// degree</div>
          <div className="commit commit-primary">
            <div className="commit-row">
              <span className="commit-hash">{degree.hash}</span>
              <span className="commit-period">{degree.period}</span>
            </div>
            <h3 className="commit-msg">{degree.degree}</h3>
            <div className="commit-school">{degree.school}</div>
            <div className="commit-metric">
              <div className="metric-row">
                <span>CGPA</span>
                <span className="metric-value">{degree.cgpa.toFixed(2)} / {degree.cgpaMax.toFixed(1)}</span>
              </div>
              <div className="metric-bar">
                <div
                  className="metric-fill"
                  style={{ width: `${pct(degree.cgpa, degree.cgpaMax)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Prior education — commit log */}
        <div className="edu-panel">
          <div className="edu-panel-label">// pre-university</div>
          <div className="commit-log">
            {priorEducation.map((item) => (
              <div className="commit" key={item.hash}>
                <div className="commit-row">
                  <span className="commit-hash">{item.hash}</span>
                  <span className="commit-period">{item.period}</span>
                </div>
                <h4 className="commit-msg commit-msg-sm">{item.title}</h4>
                <div className="commit-school">{item.school}</div>
                <div className="commit-metric">
                  <div className="metric-row">
                    <span>Score</span>
                    <span className="metric-value">{item.score} / {item.scoreMax}</span>
                  </div>
                  <div className="metric-bar">
                    <div
                      className="metric-fill metric-fill-dim"
                      style={{ width: `${pct(item.score, item.scoreMax)}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications — file listing */}
        <div className="edu-panel">
          <div className="edu-panel-label">// ls certifications/</div>
          <div className="cert-list">
            {certifications.map((cert, i) => (
              <div className="cert-row" key={i}>
                <span className="cert-icon">▸</span>
                <span className="cert-name">{cert.name}</span>
                <span className="cert-note">{cert.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;