// src/Components/CertificatePicture.js
import { Link } from 'react-router-dom';
import './CertificatePictureStyles.css';

// Original Certificates
import BackendDigitalEmpoermentPakistan from '../assets/BackendDigitalEmpoermentPakistan.jpg';
import EcodeCampPythondev from '../assets/EcodeCampPythondev.jpg';
import FrontendCertificate from '../assets/FrontendCertificate.jpg';
import CertificateDjanoHtmlBoostrapCssUdemy from '../assets/CertificateDjanoHtmlBoostrapCssUdemy.jpg';
import CertpythonBeginners from '../assets/CertpythonBeginners.png';
import DenCodingCup from '../assets/DenCodingCup.JPG';
import IUPC from '../assets/IUPC.jpeg';
import Transcript from '../assets/Transcript.jpeg';

// ✅ NEW CERTIFICATES (FIXED IMPORTS)
import PSEB_Certificate from '../assets/PSEB_Certificate.pdf'; 
import WonderCraftsAppreciation from '../assets/Wonder Crafts Appreciation Certificate.jpg';


import React from 'react';

const FramedPicture = () => {
  const certificates = [
    { src: BackendDigitalEmpoermentPakistan, alt: "Backend Digital Empowerment Pakistan" },
    { src: EcodeCampPythondev, alt: "EcodeCamp Python Development" },
    { src: FrontendCertificate, alt: "Frontend Certificate" },
    { src: CertificateDjanoHtmlBoostrapCssUdemy, alt: "Django HTML Bootstrap CSS Udemy" },
    { src: CertpythonBeginners, alt: "Python for Beginners" },
    { src: DenCodingCup, alt: "DEN Coding Cup" },
    { src: Transcript, alt: "Academic Transcript" },
    { src: IUPC, alt: "IUPC Certificate" },
    { src: PSEB_Certificate, alt: "PSEB Freelancer Registration" },
    { src: WonderCraftsAppreciation, alt: "Wonder Crafts Appreciation Certificate" },

  
  ];

  return (
    <div className="certificate-container">
      <div className="certificate-wrapper">
        <div className="certificate-header">
          <h2>My Certificates</h2>
          <p>Professional certifications and achievements</p>
        </div>

        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div key={index} className="certificate-frame">
              {cert.src.endsWith('.pdf') ? (
                <a href={cert.src} target="_blank" rel="noopener noreferrer" style={{ width: '100%', textDecoration: 'none' }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    padding: '40px 20px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    minHeight: '200px'
                  }}>
                    <span style={{ fontSize: '3rem', marginBottom: '10px' }}>📄</span>
                    <p style={{ color: '#b8b8b8', textAlign: 'center', margin: 0 }}>
                      Click to view<br/>
                      <strong>{cert.alt}</strong>
                    </p>
                  </div>
                </a>
              ) : (
                <img 
                  src={cert.src} 
                  alt={cert.alt} 
                  className="certificate-image" 
                  loading="lazy"
                />
              )}
            </div>
          ))}
        </div>

        <div className="back-home-btn-wrapper">
          <Link to="/home" className="back-to-home-button">
            <h3>← Go back to Home</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FramedPicture;