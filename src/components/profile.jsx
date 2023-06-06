import React from "react";
import profileImg from "../assets/profile-pic.png";
import linkedInImg from "../assets/linkedin.png";
import gitHubImg from "../assets/github.png";

const Profile = () => {
  const linkedInUrl = "https://linkedin.com/";
  const gitURL = "https://github.com/";
  const linkHandler = (url) => {
    window.location.href = url;
  };

  const handleDownload = () => {
    const url = "./Chen_Li_Resume.pdf";
    const filename = "Chen_Li_Resume.pdf";
    fetch(url).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
      });
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
    console.log("working");
  };

  return (
    <>
      <div className="section__pic-container">
        <img src={profileImg} alt="Chen Li profile" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Chen Li</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={handleDownload}>
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={scrollToContact}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedInImg}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => linkHandler(linkedInUrl)}
          />
          <img
            src={gitHubImg}
            alt="My Github profile"
            className="icon"
            onClick={() => linkHandler(gitURL)}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
