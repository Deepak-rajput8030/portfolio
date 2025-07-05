import React from "react";
import "./About.css";
import aboutMeImg from "./../../assets/about_me.jpg";

function About() {
  return (
    <section id="About" className="about-section">
      <h2 className="section-heading">About me</h2>

      <div className="about-container">
        <img src={aboutMeImg} id="about-img"></img>

        <div id="about-text">
          <p>
            I am a Computer Science graduate with a solid foundation in software
            development and a strong interest in working across various domains
            of the tech industry. I have hands-on experience in frontend
            technologies like HTML, CSS, JavaScript, and React.js, and I also
            possess working knowledge of backend tools such as Firebase and core
            Java at an intermediate level. Additionally, I am familiar with
            using Tailwind CSS to build clean and responsive user interfaces. I
            am actively seeking developer roles—whether in frontend, backend, or
            full-stack—where I can apply my skills, continue learning, and
            contribute to building meaningful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
