import { Link } from "react-router-dom";
import React from 'react';
import "./AboutContentStyles.css";
import React1 from "../assets/MicAb2.avif";
import React2 from "../assets/ab1.avif";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who I am?</h1>
        <p>
          I'm a passionate Software Engineering student, currently pursuing my degree at the renowned Pak-Austria Fachhochschule Institute of Applied Science and Technology.
        </p>
        <p>
          My academic journey commenced with a strong foundation in programming, starting with a deep dive into the intricacies of C++ during my first semester. In my second semester, I further expanded my knowledge by mastering the principles of Object-Oriented Programming (OOP).
        </p>
        <p>
          My profound interest in technology, particularly web development, led me to explore various web development languages and tools, including HTML, CSS, and JavaScript. I've also become proficient in React.js, which I used to create the website you're currently visiting.
        </p>
        <p>
          I kick-started my professional journey with an enriching internship in web development at Subzland. This valuable experience provided me with practical insights into real-world web development and its challenges.
        </p>
        <p>
          I'm committed to continuous learning and staying at the forefront of the ever-evolving field of software engineering. I'm excited to leverage my skills and knowledge to make a meaningful contribution to the tech industry.
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

          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
