import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import avatar from "../../assets/About/removebg.png";
import "./about.scss";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-down" className="section-about" id="about">
      <div className="section-about-info">
        <h2 className="section-about-info-heading">
          <span>01.</span> About me
        </h2>
        <p>
          Hello! My name is Thuan. I studied at
          <span className="section-about-info-highlight">
            {" "}
            FPT University
          </span>{" "}
          in
          <span className="section-about-info-highlight">
            {" "}
            Ho Chi Minh City, Vietnam
          </span>
          . My major is{" "}
          <span className="section-about-info-highlight">
            {" "}
            Software Engineering
          </span>{" "}
          and I enjoy creating things that live on the internet. My interest in
          web development started back in 2018 when I was studying web design,
          during my studies, I was taught a lot about HTML & CSS. After the
          course, I realized that I interested in creating user interfaces.
        </p>
        <p>
          With a{" "}
          <span className="section-about-info-highlight">
            passion for UI/UX
          </span>{" "}
          as well as for{" "}
          <span className="section-about-info-highlight">web development</span>,
          I continue to study and train myself to become a good engineer in the
          future.
        </p>
        <p>Here are technologies and tools I've been working with recently:</p>
        <ul className="section-about-info-techs">
          <li>HTML</li>
          <li>CSS</li>
          <li>SASS / SCSS</li>
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>ReactJS</li>
          <li>Redux</li>
          <li>Material-UI</li>
          <li>Styled-components</li>
          <li>Figma</li>
          <li>Vscode</li>
          <li>Git</li>
        </ul>
      </div>
      <div className="section-about-img">
        <img src={avatar} alt="Thuan Nguyen" title="Oh, It's me!" />
        <p className="welcome-text">Oh, It's me 😁</p>
      </div>
    </section>
  );
};

export default About;
