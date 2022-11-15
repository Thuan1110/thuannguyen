import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import Omnifood from "../../assets/Projects/Omnifood.png";
import ReactMovies from "../../assets/Projects/ReactMovies.png";
import ReactQuiz from "../../assets/Projects/ReactQuiz.png";
import "./projects.scss";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-down" className="section-projects" id="projects">
      <h2 className="section-projects-heading">
        <span>03.</span> Something I've built
      </h2>
      <div className="section-projects-container">
        <div className="project-img">
          <img src={Omnifood} alt="Omnifood" />
        </div>
        <div className="project-details">
          <p className="project-type">Pet Project</p>
          <p className="project-name">Omnifood</p>
          <div className="project-description">
            <p>
              A landing page of Omnifood - A startup that uses AI to create and
              deliver custom healthy meals.
            </p>
          </div>
          <ul className="project-tech">
            <li>HTML</li>
            <li>CSS</li>
            <li>Responsive Design</li>
          </ul>
          <ul className="project-links">
            <a
              href="https://github.com/Thuan1110/Omnifood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github" class="link"></ion-icon>
            </a>
            <a
              href="https://thuan1110.github.io/Omnifood/"
              target="_blank"
              rel="noopener noreferrer"
              title="Demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="link"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>

      <div className="section-projects-container reverse">
        <div className="project-details">
          <p className="project-type">Pet Project</p>
          <p className="project-name">React Movies</p>
          <div className="project-description">
            <p>
              An app allows users to see the information including descriptions,
              casts, release dates, types, and trailers of trending, popular
              movies or tv shows.
            </p>
          </div>
          <ul className="project-tech">
            <li>ReactJS</li>
            <li>React Router</li>
            <li>SwiperJS</li>
            <li>React Youtube</li>
          </ul>
          <ul className="project-links">
            <a
              href="https://github.com/Thuan1110/react-movies"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github" class="link"></ion-icon>
            </a>
            <a
              href="https://thuan1110.github.io/react-movies/"
              target="_blank"
              rel="noopener noreferrer"
              title="Demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="link"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </ul>
        </div>

        <div className="project-img">
          <img src={ReactMovies} alt="React Movies" />
        </div>
      </div>

      <div className="section-projects-container reset-margin">
        <div className="project-img">
          <img src={ReactQuiz} alt="React Quiz" />
        </div>
        <div className="project-details">
          <p className="project-type">Pet Project</p>
          <p className="project-name">React Quiz</p>
          <div className="project-description">
            <p>
              An app allows users to choose the type of question and do a quiz
              game base on that type.
            </p>
          </div>
          <ul className="project-tech">
            <li>ReactJS</li>
            <li>TypeScript</li>
            <li>Material-UI</li>
          </ul>
          <ul className="project-links">
            <a
              href="https://github.com/Thuan1110/react-quiz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github" class="link"></ion-icon>
            </a>
            <a
              href="https://thuan1110.github.io/react-quiz/"
              target="_blank"
              rel="noopener noreferrer"
              title="Demo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="link"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </ul>
        </div>
      </div>
      <div className="projects-cta">
        <a
          href="https://github.com/Thuan1110"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-learn-more"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Projects;
