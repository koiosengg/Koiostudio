import React from "react";
import { Link } from "react-router-dom";
import DesktopBanner from "../../assets/Portfolio/Banner/Desktop Banner.webp";
import MobileBanner from "../../assets/Portfolio/Banner/Mobile Banner.webp";
import Icon1 from "../../assets/Portfolio/Banner/Icon 1.webp";
import Icon2 from "../../assets/Portfolio/Banner/Icon 2.webp";
import Icon3 from "../../assets/Portfolio/Banner/Icon 3.webp";

function PortfolioBanner() {
  return (
    <div className="portfolio-home-banner" id="portfolio-banner">
      <img
        src={DesktopBanner}
        alt="Koios Studio portfolio desktop banner"
        className="portfolio-home-banner-background notMobile"
      />
      <img
        src={MobileBanner}
        alt="Koios Studio portfolio mobile banner"
        className="portfolio-home-banner-background mobile"
      />
      <div className="portfolio-home-banner-container">
        <section>
          <h2>PORTFOLIO</h2>
          <h1>
            Our Design Journey <br />
            <span>Vision to Reality</span>
          </h1>
          <p>
            Turning imagination into impactful designs, we ensure your brand
            story is expressed with elegance and precision.
          </p>
        </section>
        <Link to="/contact" className="portfolio-primary-button" aria-label="Build your website with Koios Studio">
          <div className="portfolio-primary-button-background"></div>
          <p>Build Your Website with us </p>
        </Link>
        <div className="portfolio-home-banner-icons">
          <img src={Icon1} alt="Koios Studio design icon" className="portfolio-home-banner-icon-1" />
          <img src={Icon2} alt="Koios Studio design icon" className="portfolio-home-banner-icon-2" />
          <img src={Icon3} alt="Koios Studio design icon" className="portfolio-home-banner-icon-3" />
        </div>
      </div>
    </div>
  );
}

export default PortfolioBanner;
