// src/Components/Work.js
import "./WorkCardStyles.css";
import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import WorkCard from "./WorkCard";
import FeaturedCard from "./FeaturedCard";
import ProjectFilters from "./ProjectFilters";
import WorkCardData from "./WorkCardData";

const VISIBLE_ROWS = 2;

const Work = () => {
  const [filter, setFilter] = useState("all");
  const gridRef = useRef(null);
  const [scrollMaxHeight, setScrollMaxHeight] = useState(null);

  const featured = WorkCardData.find((p) => p.featured);
  const others = WorkCardData.filter((p) => !p.featured);

  const filtered = useMemo(() => {
    if (filter === "all") return others;
    return others.filter((p) => p.categories && p.categories.includes(filter));
  }, [filter, others]);

  // Clip the scroller exactly at the bottom of the 2nd row of cards,
  // whatever the card heights or column count (3 / 2 / 1) happen to be.
  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return undefined;

    const measure = () => {
      const cards = grid.querySelectorAll(".project-card");
      if (!cards.length) {
        setScrollMaxHeight(null);
        return;
      }
      const cols = Math.max(
        1,
        getComputedStyle(grid).gridTemplateColumns.split(" ").length
      );
      const last = cards[Math.min(cols * VISIBLE_ROWS, cards.length) - 1];
      // offsetTop is measured from the grid's padding edge; +8 = bottom padding
      setScrollMaxHeight(last.offsetTop + last.offsetHeight + 8);
    };

    measure();
    if (typeof ResizeObserver === "undefined") return undefined;
    const ro = new ResizeObserver(measure);
    ro.observe(grid);
    return () => ro.disconnect();
  }, [filtered]);

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
        <h1 className="project-heading">
          Products in production, not concept shots.
        </h1>
        <p className="project-subheading">
          Every project here is live, built by me, and has a full case study.
        </p>
      </div>

      {featured && <FeaturedCard project={featured} />}

      <ProjectFilters active={filter} onChange={setFilter} counts={counts} />

      {/* Fixed-height scroller (scrollbar on the left) around the 3-column grid */}
      <div
        className="projects-scroll-wrapper"
        style={scrollMaxHeight ? { maxHeight: scrollMaxHeight } : undefined}
      >
        <div className="project-container" ref={gridRef}>
          {filtered.length === 0 ? (
            <div className="project-empty">
              No projects in this category yet.
            </div>
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
    </div>
  );
};

export default Work;