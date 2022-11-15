import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import "./contact.scss";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section data-aos="fade-down" className="section-contact" id="contact">
      <p className="section-contact-subheading">04. What's Next?</p>
      <h2 className="section-contact-heading">Get In Touch</h2>
      <p className="section-contact-status">
        I'm looking for opportunities as a Frontend Engineer, so my inbox is
        always open. If you have any questions or want to say hi, contact me,
        and I'll try to get back to you ASAP!
      </p>
      <a
        href="mailto:nguyentruongminhthuan111099@gmail.com"
        className="section-contact-cta"
      >
        Say Hello
      </a>
      <p className="section-contact-alternatives">Or</p>
      <p className="section-contact-subheading reset-color">Reach me at:</p>
      <ul className="section-contact-socials">
        <a
          href="https://www.linkedin.com/in/thuannguyen99/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-linkedin"></ion-icon>
        </a>
        <a
          href="https://www.facebook.com/nguyentruongminhthuan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a
          href="https://github.com/Thuan1110"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </ul>
    </section>
  );
};

export default Contact;
