import React from "react";
import linkedInImg from "../assets/linkedin.png";
import emailImg from "../assets/email.png";

const Contact = () => {
  return (
    <>
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={emailImg}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a
              href="#"
              onClick={() =>
                (window.location.href = "mailto:lgf130031@gmail.com")
              }
            >
              chenli.dev@outlook.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedInImg}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/chen-li-dev/">LinkedIn</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
