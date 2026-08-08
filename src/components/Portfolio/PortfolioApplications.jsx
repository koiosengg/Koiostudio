import React, { useState, useEffect } from "react";
import "./portfolio.css";
import Banner from "./Applications/Banner";
import Sidebar from "./Sidebar";
import Numbers from "./Applications/Numbers";
import Gallery from "./Applications/Gallery";

function Applications() {
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
    <div className="portfolio">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Numbers />
      <Gallery />
    </div>
  );
}

export default Applications;

