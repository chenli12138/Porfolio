import React from "react";
import aboutImg from "../assets/about-pic-2.png";
import expImg from "../assets/experience.png";
import arrowIcon from "../assets/arrow.png";
import eduImg from "../assets/education.png";

const AboutMe = () => {
  const arrowHandler = () => {
    window.location.href = "#experience";
  };
  return (
    <>
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src={aboutImg} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={expImg} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                1+ years <br />
                Full Stack Development
              </p>
            </div>
            <div className="details-container">
              <img src={eduImg} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                Bachelor of Information Technology
                <br />
                UTS
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Tech-savvy junior web developer with one year full stack
              developing experience. Streamline building intuitive and
              responsive user interfaces with a great master of HTML, CSS,
              JavaScript, and React, and server-side PHP. Hands-on experience
              taking charge of front and back-end web development across
              multiple APIs, third-party integrations and databases. Seeking to
              leverage the characters of a strong communicator, quick learner,
              and detail-oriented problem solver to perform better service for
              next opportunity.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={arrowHandler}
      />
    </>
  );
};

export default AboutMe;
