import React, { useState, useEffect } from "react";
import "@/components/Portfolio/portfolio.css";
import Banner from "@/components/Portfolio/Applications/Banner";
import Sidebar from "@/components/Portfolio/Sidebar";
import Gallery from "@/components/Portfolio/Applications/Gallery";
import Numbers from "@/components/Portfolio/Applications/Numbers";
import Projects from "@/components/Portfolio/Applications/Projects";

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
    <div className="portfolio portfolio-application">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Gallery />
      <Numbers />
      <Projects />
    </div>
  );
}

export default Applications;
