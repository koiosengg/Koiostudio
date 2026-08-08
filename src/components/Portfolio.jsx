import React, { useState, useEffect } from "react";
import "./Portfolio/portfolio.css";
import PortfolioBanner from "./Home/PortfolioBanner";
import Sidebar from "./Portfolio/Sidebar";
import Marquee from "./Portfolio/Home/Marquee";
import Services from "./Portfolio/Home/Services";
import ViewProjects from "./Portfolio/Home/ViewProjects";
import Numbers from "./Portfolio/Home/Numbers";
import Gallery from "./Portfolio/Home/Gallery";
import Identities from "./Portfolio/Home/Identities";
import FAQ from "./Portfolio/Home/FAQ";
import Testimony from "./Portfolio/Home/Testimony";
import Socials from "./Portfolio/Home/Socials";
import Footer from "./Portfolio/Home/Footer";

function Portfolio() {
  const [isOnBanner, setIsOnBanner] = useState(true);

  const handleScroll = () => {
    const bannerElement = document.getElementById("banner") || document.querySelector(".portfolio-home-banner");
    if (bannerElement) {
      const bannerHeight = bannerElement.offsetHeight;
      setIsOnBanner(window.scrollY < bannerHeight);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="portfolio portfolio-home">
      <PortfolioBanner />
      <Sidebar isOnBanner={isOnBanner} />
      <Marquee />
      <Services />
      <ViewProjects />
      <Numbers />
      <Gallery />
      <Identities />
      <FAQ />
      <Testimony />
      <Socials />
      <Footer />
    </div>
  );
}

export default Portfolio;
