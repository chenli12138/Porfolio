import React from "react";
import arrowIcon from "../assets/arrow.png";
import ExpTag from "./expTag";

const Experience = () => {
  return (
    <>
      <p className="section__text__p1">Explore My</p>
      <h1 className="title exp-gap ">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <ExpTag code="HTML" lvl="Experienced" />
              <ExpTag code="CSS" lvl="Experienced" />
              <ExpTag code="React" lvl="Advanced" />
              <ExpTag code="TypeScript" lvl="Advanced" />
              <ExpTag code="Material UI" lvl="Experienced" />
              <ExpTag code="Tailwind" lvl="Skillful" />
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <ExpTag code="PHP" lvl="Experienced" />
              <ExpTag code="Node" lvl="Experienced" />
              <ExpTag code="MySQL" lvl="Experienced" />
              <ExpTag code="REST API" lvl="Experienced" />
              <ExpTag code="Git" lvl="Advanced" />
              <ExpTag code="Docker" lvl="Experienced" />
              <ExpTag code="Linux" lvl="Experienced" />
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
