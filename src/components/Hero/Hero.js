import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./hero.scss";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-down" className="section-hero" id="hero">
      <p className="section-hero-greeting">Hello, my name is</p>
      <p className="section-hero-name">Thuan Nguyen.</p>
      <p className="section-hero-job">I build things for the web.</p>
      <p className="section-hero-about">
        I'm a frontend engineer from Vietnam who is passionate about visuals and
        design. I enjoy developing visual-related stuff, learning up-to-date
        technologies, and getting inspired by awesomeness.
      </p>
      <a href="#contact" className="section-hero-cta">
        Let's talk!
      </a>
    </section>
  );
};

export default Hero;
