// src/Components/Work.js
import "./WorkCardStyles.css";
import React, { useState, useMemo } from "react";
import WorkCard from "./WorkCard";
import FeaturedCard from "./FeaturedCard";
import ProjectFilters from "./ProjectFilters";
import WorkCardData from "./WorkCardData";

const Work = () => {
  const [filter, setFilter] = useState("all");

  const featured = WorkCardData.find((p) => p.featured);
  const others = WorkCardData.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    if (filter === "all") return others;
    return others.filter((p) => p.categories && p.categories.includes(filter));
  }, [filter, others]);

  const counts = useMemo(() => {
    const base = { all: others.length };
    others.forEach((p) => {
      (p.categories || []).forEach((c) => {
        base[c] = (base[c] || 0) + 1;
      });
    });
    return base;
  }, [others]);

  return (
    <div className="work-container">
      <div className="work-header">
        <span className="work-eyebrow">— Selected Work</span>
        <h1 className="project-heading">Products in production, not concept shots.</h1>
        <p className="project-subheading">
          Every project here is live, built by me, and has a full case study.
        </p>
      </div>

      {featured && <FeaturedCard project={featured} />}

      <ProjectFilters active={filter} onChange={setFilter} counts={counts} />

      <div className="project-container">
        {filtered.length === 0 ? (
          <div className="project-empty">No projects in this category yet.</div>
        ) : (
          filtered.map((val, ind) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default Work;