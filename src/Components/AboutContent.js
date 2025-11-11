import { Link } from "react-router-dom";
import React from 'react';
import "./AboutContentStyles.css";
import React1 from "../assets/profile.jpg.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I am?</h1>
        <p>
          I'm <strong>Mumtaz Ali</strong>, a proficient Python Developer with <strong>2 years of professional experience</strong> at Digital Empowerment Network (DEN) of Pakistan. I specialize in full-stack web development, RESTful API design, and building scalable applications using Django, Flask, and FastAPI.
        </p>
        <p>
          My technical expertise spans across <strong>Python, JavaScript, and SQL</strong>, with strong proficiency in frameworks like Django Rest Framework, React.js, and data manipulation tools including Pandas, NumPy, and Matplotlib. I excel in creating responsive front-end interfaces while managing robust database systems (PostgreSQL, MySQL, SQLite).
        </p>
        <p>
          I'm experienced in modern development practices including <strong>Git/GitHub version control</strong>, pytest testing frameworks, and <strong>Docker containerization</strong>. I implement <strong>CI/CD pipelines on AWS</strong> for efficient deployment and maintain high code quality standards across all projects.
        </p>
        <p>
          My portfolio includes diverse projects: a <strong>Full-Stack Hostel Management System</strong>, <strong>AI-Powered Hand Gesture Drawing System</strong> using OpenCV and Mediapipe, real-time object detection systems with TensorFlow, and dynamic e-commerce platforms. Each project demonstrates my commitment to creating efficient, user-friendly solutions.
        </p>
        <p>
          I hold a <strong>BSc from the University of Engineering and Technology Mardan</strong> and have earned multiple certifications including PythonWebDevPro, Inter Universities Programming Challenge recognition, and completed intensive internships at EcodeCamp specializing in data analysis and backend programming.
        </p>
        <p>
          Beyond technical skills, I am passionate about continuous learning and staying at the forefront of the ever-evolving software engineering landscape. I'm excited to contribute to innovative tech solutions, leveraging my expertise in full-stack development, AI integration, and cloud deployment.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="Mumtaz Ali - Python Developer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;