import React from "react";
import arrowIcon from "../assets/arrow.png";
import ExpTag from "./expTag";

const Experience = () => {
  return (
    <>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <ExpTag code="HTML" lvl="Experienced" />
              <ExpTag code="CSS" lvl="Experienced" />
              <ExpTag code="React" lvl="Intermediate" />
              <ExpTag code="JavaScript" lvl="Intermediate" />
              <ExpTag code="Material UI" lvl="Intermediate" />
              <ExpTag code="TypeScript" lvl="Basic" />
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <ExpTag code="PHP" lvl="Experienced" />
              <ExpTag code="MySQL" lvl="Experienced" />
              <ExpTag code="REST API" lvl="Experienced" />
              <ExpTag code="Git" lvl="Intermediate" />
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => (window.location.href = "#projects")}
      />
    </>
  );
};

export default Experience;
