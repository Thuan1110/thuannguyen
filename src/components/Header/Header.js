import React, { useEffect, useState } from "react";
import Resume from "../../assets/Resume/CV_Nguyen Truong Minh Thuan_Fresher Frontend Developer.pdf";
import "./header.scss";

const Header = () => {
  const [fix, setFix] = useState(false);
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  const setFixed = () => {
    if (window.scrollY >= 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixed);
    return () => window.removeEventListener("scroll", setFixed);
  }, []);

  const btnClickedHandler = () => {
    setIsNavExpanded((prevState) => !prevState);
  };

  return (
    <header className={fix ? "header scrolled" : "header"}>
      <a onClick={btnClickedHandler} href="#hero" className="logo">
        TN.
      </a>

      <nav className={isNavExpanded ? "main-nav expanded " : "main-nav "}>
        <ul className="main-nav-list">
          <li>
            <a
              onClick={btnClickedHandler}
              href="#about"
              className="main-nav-link"
            >
              <span>01.</span> About
            </a>
          </li>
          <li>
            <a
              onClick={btnClickedHandler}
              href="#experience"
              className="main-nav-link"
            >
              <span>02.</span> Experiences
            </a>
          </li>
          <li>
            <a
              onClick={btnClickedHandler}
              href="#projects"
              className="main-nav-link"
            >
              <span>03.</span> Projects
            </a>
          </li>
          <li>
            <a
              onClick={btnClickedHandler}
              href="#contact"
              className="main-nav-link"
            >
              <span>04.</span> Contact
            </a>
          </li>
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="main-nav-link main-nav-resume"
          >
            Resume
          </a>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={btnClickedHandler}>
        {isNavExpanded ? (
          <ion-icon name="close-outline" class="icon-mobile-nav"></ion-icon>
        ) : (
          <ion-icon name="menu-outline" class="icon-mobile-nav"></ion-icon>
        )}
      </button>
    </header>
  );
};

export default Header;
