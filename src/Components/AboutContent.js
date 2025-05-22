import { Link } from "react-router-dom";
import React from 'react';
import "./AboutContentStyles.css";
// import React1 from "../assets/BackImg.jpg";
import React1 from "../assets/profile.jpg.png";
//import React2 from "../assets/ab1.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
  <h1>Who I am?</h1>
  <p>
  I'm a Python Developer with experience in Django and FastAPI. I specialize in backend development, building efficient, scalable web applications and APIs.
  </p>
  <p>
  My journey started with Python, expanding to frameworks like Django for web apps and FastAPI for fast, high-performance APIs. I’m skilled in database management (PostgreSQL, MySQL) and server-side integration.
  </p>
  <p>
  I’ve worked on real-world projects, improving user experiences and optimizing performance. I'm committed to continuous learning and eager to contribute to innovative software solutions.
  </p>
  <p>
  I kick-started my professional journey with internships focused on data analysis, Python development, and AI. During my internship with **Data-Analysis-Projects**, I showcased my skills in exploratory data analysis (EDA) and data visualization using Jupyter Notebooks. I also contributed to **Cardi-Good-Fitness-Case-Study**, analyzing customer profiles and purchase patterns for AdRight’s market research.
</p>

  <p>
    Beyond technical skills, I am committed to continuous learning and staying at the forefront of the ever-evolving software engineering landscape. I am excited to contribute to the tech industry, leveraging my expertise in Python Development  and AI  solutions.
  </p>
  <Link to="/contact">
    <button className="btn">Contact</button>
  </Link>
</div>


      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true" />
          </div>

          {/* <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
