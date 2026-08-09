import React from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../../../assets/Portfolio/Section Heading Design.webp";
import ResponsiveImg from "../../../assets/Portfolio/Websites/Responsive Img.webp";

function Responsive() {
  return (
    <div className="portfolio-websites-responsive">
      <div className="portfolio-section-heading">
        <img src={HeadingDesign} className="portfolio-section-heading-img" alt="Decorative heading accent design" />
        <h2>
          <span>Responsive Design </span> that feels Right
        </h2>
        <p>
          Every brand deserves a digital presence that feels natural and
          effortless across all screens. With responsive design at the core,
          each website is crafted to engage audiences seamlessly, creating
          experiences that not only look stunning but also connect in the right
          way, every time.
        </p>
        <a href="#footer" className="portfolio-primary-button" aria-label="Scroll to contact form: Your turn to shine">
          <div className="portfolio-primary-button-background"></div>
          <p>Your turn to shine</p>
        </a>
      </div>
      <div className="portfolio-websites-responsive-img">
        <img src={ResponsiveImg} alt="Preview of responsive web design across desktop and mobile screens" />
      </div>
    </div>
  );
}

export default Responsive;
