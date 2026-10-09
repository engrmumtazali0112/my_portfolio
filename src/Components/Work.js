// src/Components/Work.js
import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import FeaturedCard from "./FeaturedCard";
import WorkCardData from "./WorkCardData";
import React from "react";

const Work = () => {
  const featured = WorkCardData.find((p) => p.featured);
  const others = WorkCardData.filter((p) => !p.featured);

  return (
    <div className="work-container">
      <h1 className="project-heading">PROJECTS.</h1>
      <p className="project-subheading">
        Products in production, not concept shots. Every project here is live,
        built by me, and has a full case study.
      </p>

      {featured && <FeaturedCard project={featured} />}

      <div className="project-container">
        {others.map((val, ind) => (
          <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            category={val.category}
            year={val.year}
            duration={val.duration}
            stack={val.stack}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;