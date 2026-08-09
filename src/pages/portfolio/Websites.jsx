import React, { useState, useEffect } from "react";
import "@/components/Portfolio/portfolio.css";
import Banner from "@/components/Portfolio/Websites/Banner";
import Sidebar from "@/components/Portfolio/Sidebar";
import Responsive from "@/components/Portfolio/Websites/Responsive";
import Projects from "@/components/Portfolio/Websites/Projects";

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
      <Projects />
    </div>
  );
}

export default Websites;
