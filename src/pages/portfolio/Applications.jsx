import React, { useState, useEffect } from "react";
import "@/components/Portfolio/portfolio.css";
import Banner from "@/components/Portfolio/Applications/Banner";
import Sidebar from "@/components/Portfolio/Sidebar";
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
    <div className="portfolio">
      <Banner />
      <Sidebar isOnBanner={isOnBanner} />
      <Numbers />
      <Projects />
    </div>
  );
}

export default Applications;
