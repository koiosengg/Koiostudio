import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Banner from "./Branding/Banner";
import Sidebar from "./Sidebar";
import Gallery from "./Branding/Gallery";
import Designs from "./Branding/Designs";
import Mission from "./Branding/Mission";

function Branding() {
  const [isOnBanner, setIsOnBanner] = useState(true);

  const handleScroll = () => {
    const bannerElement = document.getElementById("banner");
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
    <div className="portfolio portfolio-branding">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Designs />
      <Mission />
      <Gallery />
    </div>
  );
}

export default Branding;

