import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="built-by">Built by Thuan Nguyen </p>
      <p className="design-by">
        Based on the design of{" "}
        <a
          href="https://github.com/bchiang7/v4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
};

export default Footer;
