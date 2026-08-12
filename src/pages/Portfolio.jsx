import React, { useState, useEffect } from "react";
import "@/components/Portfolio/portfolio.css";
import PortfolioBanner from "@/components/Home/PortfolioBanner";
import Sidebar from "@/components/Portfolio/Sidebar";
import Marquee from "@/components/Portfolio/Home/Marquee";
import Services from "@/components/Portfolio/Home/Services";
import ViewProjects from "@/components/Portfolio/Home/ViewProjects";
import Numbers from "@/components/Portfolio/Home/Numbers";
import Projects from "@/components/Portfolio/Websites/Projects";
import Gallery from "@/components/Portfolio/Home/Gallery";
import Identities from "@/components/Portfolio/Home/Identities";
import FAQ from "@/components/Portfolio/Home/FAQ";
import Testimony from "@/components/Portfolio/Home/Testimony";
import Socials from "@/components/Portfolio/Home/Socials";
import Footer from "@/components/Portfolio/Home/Footer";

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
      <Projects />
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
