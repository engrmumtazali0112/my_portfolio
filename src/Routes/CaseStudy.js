// src/Routes/CaseStudy.js
import React from "react";
import { useParams, Navigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CaseStudyHero from "../Components/CaseStudy/CaseStudyHero";
import CaseStudyOverview from "../Components/CaseStudy/CaseStudyOverview";
import CaseStudyFeatures from "../Components/CaseStudy/CaseStudyFeatures";
import CaseStudyProblem from "../Components/CaseStudy/CaseStudyProblem";
import CaseStudyProcess from "../Components/CaseStudy/CaseStudyProcess";
import CaseStudySolution from "../Components/CaseStudy/CaseStudySolution";
import CaseStudyResults from "../Components/CaseStudy/CaseStudyResults";
import CaseStudyCTA from "../Components/CaseStudy/CaseStudyCTA";
import caseStudies from "../data/caseStudies";
import "../Components/CaseStudy/CaseStudyStyles.css";

const CaseStudy = () => {
  const { slug } = useParams();
  const data = caseStudies[slug];

  if (!data) return <Navigate to="/project" replace />;

  return (
    <div className="case-study-page">
      <Navbar />
      <CaseStudyHero data={data} />
      <CaseStudyOverview data={data} />
      <CaseStudyFeatures data={data} />
      <CaseStudyProblem data={data} />
      <CaseStudyProcess data={data} />
      <CaseStudySolution data={data} />
      <CaseStudyResults data={data} />
      <CaseStudyCTA data={data} />
      <Footer />
    </div>
  );
};

export default CaseStudy;