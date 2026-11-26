import React, { useState, useEffect } from "react";
import Banner from "@/components/Portfolio/Branding/Banner";
import Sidebar from "@/components/Portfolio/Sidebar";
import Designs from "@/components/Portfolio/Branding/Designs";
import Projects from "@/components/Portfolio/Projects";
import { BRANDING_PROJECTS } from "@/data/portfolioProjects";
import Mission from "@/components/Portfolio/Branding/Mission";
import Gallery from "@/components/Portfolio/Branding/Gallery";

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
      <Projects slides={BRANDING_PROJECTS} />
      <Gallery />
      <Mission />
      <Designs />
    </div>
  );
}

export default Branding;
