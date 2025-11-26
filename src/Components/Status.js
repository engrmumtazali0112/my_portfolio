// src/Components/Stats.js
import React, { useState, useEffect } from 'react';
import './StatsStyles.css';

const Stats = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    experience: 0,
    certifications: 0,
    clients: 0
  });

  useEffect(() => {
    const targets = {
      projects: 15,
      experience: 2,
      certifications: 6,
      clients: 10
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => {
        const updated = {};
        let allComplete = true;

        Object.keys(targets).forEach(key => {
          if (prev[key] < targets[key]) {
            updated[key] = Math.min(
              prev[key] + Math.ceil(targets[key] / steps),
              targets[key]
            );
            allComplete = false;
          } else {
            updated[key] = targets[key];
          }
        });

        if (allComplete) clearInterval(timer);
        return { ...prev, ...updated };
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { 
      icon: "🚀", 
      value: counters.projects, 
      suffix: "+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      icon: "💼", 
      value: counters.experience, 
      suffix: "+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500"
    },
    { 
      icon: "🏆", 
      value: counters.certifications, 
      suffix: "+",
      label: "Certifications",
      color: "from-orange-500 to-red-500"
    },
    { 
      icon: "😊", 
      value: counters.clients, 
      suffix: "+",
      label: "Happy Clients",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <div className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2 className="stats-title">Achievement Highlights</h2>
          <p className="stats-subtitle">Numbers that speak for themselves</p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-icon-wrapper bg-gradient-to-br ${stat.color}`}>
                <span className="stat-icon-emoji">{stat.icon}</span>
              </div>
              <div className="stat-content">
                <div className="stat-number">
                  {stat.value}{stat.suffix}
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
              <div className={`stat-glow bg-gradient-to-br ${stat.color}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;