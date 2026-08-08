import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Banner from "./Websites/Banner";
import Sidebar from "./Sidebar";
import Responsive from "./Websites/Responsive";
import Porjects from "./Websites/Projects";

function Websites() {
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
    <div className="portfolio portfolio-website">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Responsive />
      <Porjects />
    </div>
  );
}

export default Websites;
