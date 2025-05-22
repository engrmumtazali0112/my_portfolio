import { Link } from 'react-router-dom';
import './FramedPictureStyles.css';
import profilePic2 from '../assets/MyPic (2).jpg';
import IMG_E5300 from '../assets/IMG_E5300.JPG';
import Mumtaz2 from '../assets/Mumtaz2.jpg';

import FB_IMG_1661066670483 from '../assets/FB_IMG_1661066670483.jpg';
import IMG_20240310_WA0081 from '../assets/IMG-20240310-WA0081.jpg';
import Mumtaz4 from '../assets/Mumtaz4.jpg';
import Mumtaz3 from '../assets/Mumtaz3.jpg';
import IMG_8241 from '../assets/IMG_8241.HEIC';
import IMG_8305 from '../assets/IMG_8305.HEIC';
import IMG_8328 from '../assets/IMG_8328.HEIC';
import IMG_8280 from '../assets/IMG_8280.HEIC';
import React from 'react';

const FramedPicture = () => {
  return (
    <div className="framed-picture-container">
      
      <div className="picture-frame">
        <img src={profilePic2} alt="My Img" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={IMG_E5300} alt="My Img" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={Mumtaz2} alt="DSCN9841-1-1" className="profile-image" />
      </div>
      
      <div className="picture-frame">
        <img src={FB_IMG_1661066670483} alt="FB_IMG_1661066670483" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={IMG_20240310_WA0081} alt="IMG-20240310-WA0081" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={Mumtaz4} alt="Mumtaz4" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={IMG_8241} alt="IMG_8241" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={IMG_8305} alt="IMG_8305" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={IMG_8280} alt="IMG_8280" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={IMG_8328} alt="IMG_8328" className="profile-image" />
      </div>
      <div className="picture-frame">
        <img src={Mumtaz3} alt="Mumtaz3" className="profile-image" />
      </div>
      
      <Link to="/home" className="back-to-home-button">
        <h3>Go back to Home</h3>
      </Link>
    </div>
  );
};

export default FramedPicture;
