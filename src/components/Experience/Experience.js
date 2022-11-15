import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./experience.scss";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      data-aos="fade-down"
      className="section-experience"
      id="experience"
    >
      <h2 className="section-experience-heading">
        <span>02.</span> Where I've Worked
      </h2>
      <div className="section-experience-container">
        <div className="section-experience-container-company">FPT Software</div>
        <div className="section-experience-container-detail">
          <p className="job-title">
            Software Engineer Intern <span>@</span>{" "}
            <a
              className="company-link"
              href="https://www.fpt-software.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              FPT Software
            </a>
          </p>
          <p className="duration">2019 - 2020 (4 months)</p>
          <ul className="description">
            <li>Trained to work with SAP ABAP by mentor.</li>
            <li>Learned how to work in a professional environment.</li>
            <li>Learned how to work as a team.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
