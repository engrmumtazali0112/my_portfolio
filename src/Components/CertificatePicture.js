import { Link } from 'react-router-dom';
import './CertificatePictureStyles.css';

import BackendDigitalEmpoermentPakistan from '../assets/BackendDigitalEmpoermentPakistan.jpg';

import EcodeCampPythondev from '../assets/EcodeCampPythondev.jpg';
import FrontendCertificate from '../assets/FrontendCertificate.jpg';
import CertificateDjanoHtmlBoostrapCssUdemy from '../assets/CertificateDjanoHtmlBoostrapCssUdemy.jpg';
import CertpythonBeginners from '../assets/CertpythonBeginners.png';
import DenCodingCup from '../assets/DenCodingCup.JPG';
import IUPC from '../assets/IUPC.jpeg';
import Transcript from '../assets/Transcript.jpg';
import React from 'react';

const FramedPicture = () => {
  return (
    <div className="framed-picture-container">
      
      
      <div className="picture-frame">
        <img src={BackendDigitalEmpoermentPakistan} alt="My Img" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={EcodeCampPythondev} alt="My Img" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={FrontendCertificate} alt="My Img" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={CertificateDjanoHtmlBoostrapCssUdemy} alt="My Img" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={CertpythonBeginners} alt="My Img" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={DenCodingCup} alt="DenCodingCup" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={Transcript} alt="Transcript" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={IUPC} alt="IUPC" className="profile-image" />
      </div>
      <Link to="/home" className="back-to-home-button">
        <h3>Go back to Home</h3>
      </Link>
      IUPC
    </div>
  );
};

export default FramedPicture;
