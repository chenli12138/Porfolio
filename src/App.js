import React from "react";
import NaviBig from "./components/naviBig";
import NaviBurger from "./components/naviBurger";
import Profile from "./components/profile";
import AboutMe from "./components/aboutMe";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NaviBig />
      <NaviBurger />
      <section id="profile">
        <Profile />
      </section>
      <section id="about">
        <AboutMe />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </>
  );
}

export default App;
