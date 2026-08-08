import React from "react";
import { Link } from "react-router-dom";
import DesktopBanner from "../../../assets/Portfolio/Applications/Desktop Banner.webp";
import MobileBanner from "../../../assets/Portfolio/Applications/Mobile Banner.webp";
function Banner() {
  return (
    <div className="portfolio-applications-banner" id="banner">
      <img
        src={DesktopBanner}
        className="portfolio-home-banner-background notMobile"
      />
      <img
        src={MobileBanner}
        className="portfolio-home-banner-background mobile"
      />
      <div className="portfolio-home-banner-container">
        <section>
          <h2>Design & Development</h2>
          <h1>
            Applications
            <br />
            <span>to Inspire</span>
          </h1>
          <p>
            Smart user friendly applications that drive innovation and inspire
            action.
          </p>
        </section>
        <Link to="/contact" className="portfolio-primary-button">
          <div className="portfolio-primary-button-background"></div>
          <p>Build Your Website with us </p>
        </Link>
      </div>
    </div>
  );
}

export default Banner;
