import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../../assets/Home/Gallery/Projects/Section Heading Design.webp";
import NEStructures from "../../assets/Home/Gallery/Projects/NE Structures.webp";
import Mobiglide from "../../assets/Home/Gallery/Projects/Mobiglide.webp";
import XLR8 from "../../assets/Home/Gallery/Projects/XLR8.webp";
import Cilkencave from "../../assets/Home/Gallery/Projects/Cilkencave.webp";
import Akarswift from "../../assets/Home/Gallery/Projects/Akarswift.webp";
import ISKAutoIndustries from "../../assets/Home/Gallery/Projects/ISK Auto Industries.webp";
import HappyGummies from "../../assets/Home/Gallery/Projects/Happy Gummies.webp";
import Talankey from "../../assets/Home/Gallery/Projects/Talankey.webp";
import Fourstor from "../../assets/Home/Gallery/Projects/Fourstor.webp";
import UrbanSphere from "../../assets/Home/Gallery/Projects/Urban Sphere.webp";
import BalajiProtoTools from "../../assets/Home/Gallery/Projects/Balaji Proto Tools.webp";
import MRIndustries from "../../assets/Home/Gallery/Projects/MR Industries.webp";
import GMW from "../../assets/Home/Gallery/Projects/GMW.webp";
import Ameya from "../../assets/Home/Gallery/Projects/Ameya.webp";
import SIMMFA from "../../assets/Home/Gallery/Projects/SIMMFA.webp";
import ClayfulHomes from "../../assets/Home/Gallery/Projects/Clayful Homes.webp";
import ScaleCraft from "../../assets/Home/Gallery/Projects/Scale Craft.webp";
import MachineMovers from "../../assets/Home/Gallery/Projects/Machine Movers.webp";
import AirportrImg from "../../assets/Home/Gallery/Projects/Airportr.webp";
import LMGImg from "../../assets/Home/Gallery/Projects/LMG.webp";
import NegiluImg from "../../assets/Home/Gallery/Projects/Negilu.webp";
import IdaviFoodsImg from "../../assets/Home/Gallery/Projects/Idavi Foods.webp";
import MicronixImg from "../../assets/Home/Gallery/Projects/Micronix.webp";
import NirmalyamImg from "../../assets/Home/Gallery/Projects/Nirmalyam.webp";
import GOATImg from "../../assets/Home/Gallery/Projects/GOAT Cafe.webp";
import AerovidyaImg from "../../assets/Home/Gallery/Projects/Aerovidya.webp";
import CoffeeCultureImg from "../../assets/Home/Gallery/Projects/Coffee Culture.webp";
import MotardImg from "../../assets/Home/Gallery/Projects/Motard.webp";
import SmilevieuImg from "../../assets/Projects/Smilevieu/3.webp";
import VoltusImg from "../../assets/Projects/Voltus/voltus1.webp";
import GreenTaraImg from "../../assets/Projects/Green Tara/1.webp";

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14 16L18 12M18 12L14 8M18 12H6" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function PortfolioProjects({ heading = "Projects", currentProjectTitle }) {
  const containerRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(window.innerWidth < 1200 ? 1 : 4);

  const rawProjects = [
    { to: "/portfolio/projects/Mobiglide", img: Mobiglide, title: "Mobiglide", industry: "Human Resources" },
    { to: "/portfolio/projects/NE_Structures", img: NEStructures, title: "NE Structures", industry: "Construction Industries" },
    { to: "/portfolio/projects/ISK_Auto_Industries", img: ISKAutoIndustries, title: "ISK Auto Industries", industry: "Automotive Component Manufacturers" },
    { to: "/portfolio/projects/Balaji_Proto_Tools", img: BalajiProtoTools, title: "Balaji Proto Tools", industry: "Automotive and Manufacturing Industry" },
    { to: "/portfolio/projects/Happy_Gummies", img: HappyGummies, title: "Happy Gummies", industry: "Healthcare Products" },
    { to: "/portfolio/projects/Fourstor", img: Fourstor, title: "Fourstor", industry: "Automation Industry" },
    { to: "/portfolio/projects/Talankey", img: Talankey, title: "Talankey", industry: "Mechanical / Manufacturing Industry" },
    { to: "/portfolio/projects/Urban_Sphere", img: UrbanSphere, title: "Urban Sphere", industry: "Automotive Industry" },
    { to: "/portfolio/projects/Cilkencave", img: Cilkencave, title: "Cilkencave", industry: "Semi Conductor Industry" },
    { to: "/portfolio/projects/MR_Industries", img: MRIndustries, title: "MR Industries", industry: "Automotive Wiring Harness Manufacturing Industry" },
    { to: "/portfolio/projects/GMW", img: GMW, title: "GMW", industry: "Automotive Industry" },
    { to: "/portfolio/projects/Ameya", img: Ameya, title: "Ameya", industry: "Homestays and Hospitality" },
    { to: "/portfolio/projects/XLR8", img: XLR8, title: "XLR8", industry: "EV and Automobile Go-kart" },
    { to: "/portfolio/projects/Akarswift", img: Akarswift, title: "Akarswift", industry: "Logistics Solutions" },
    { to: "/portfolio/projects/Clayful_Homes", img: ClayfulHomes, title: "Clayful Homes", industry: "Pottery E-commerce" },
    { to: "/portfolio/projects/SIMMFA", img: SIMMFA, title: "SIMMFA", industry: "Music Academy" },
    { to: "/portfolio/projects/Scale_Craft", img: ScaleCraft, title: "Scale Craft", industry: "F&B Business Consultancy" },
    { to: "/portfolio/projects/Machine_Movers", img: MachineMovers, title: "Machine Movers", industry: "Branding Consultancy" },
    { to: "/portfolio/projects/Airportr", img: AirportrImg, title: "Airportr", industry: "Goods Tracking App" },
    { to: "/portfolio/projects/LMG", img: LMGImg, title: "LMG", industry: "Tourism & Hospitality" },
    { to: "/portfolio/projects/Negilu", img: NegiluImg, title: "Negilu", industry: "Agriculture & Agritech" },
    { to: "/portfolio/projects/Idavi_Foods", img: IdaviFoodsImg, title: "Idavi Foods", industry: "Food Industry" },
    { to: "/portfolio/projects/Micronix", img: MicronixImg, title: "Micronix", industry: "EV Batteries" },
    { to: "/portfolio/projects/Nirmalyam", img: NirmalyamImg, title: "Nirmalyam", industry: "Food Industry" },
    { to: "/portfolio/projects/GOAT", img: GOATImg, title: "GOAT Cafe", industry: "Food Industry" },
    { to: "/portfolio/projects/Aerovidya", img: AerovidyaImg, title: "Aerovidya", industry: "Branding" },
    { to: "/portfolio/projects/Coffee_Culture", img: CoffeeCultureImg, title: "Coffee Culture", industry: "Food Industry" },
    { to: "/portfolio/projects/Motard", img: MotardImg, title: "Motard", industry: "Biking Club & Gear" },
    { to: "/portfolio/projects/Smilevieu", img: SmilevieuImg, title: "Smilevieu", industry: "Healthcare & Branding" },
    { to: "/portfolio/projects/Voltus", img: VoltusImg, title: "Voltus", industry: "Energy & Technology" },
    { to: "/portfolio/projects/Green_Tara", img: GreenTaraImg, title: "Green Tara", industry: "Eco Wellness" },
  ];

  const projects = currentProjectTitle
    ? rawProjects.filter((p) => p.title.toLowerCase() !== currentProjectTitle.toLowerCase())
    : rawProjects;

  useEffect(() => {
    const updateLayout = () => {
      const newVisibleSlides = window.innerWidth < 1200 ? 1 : 4;
      setVisibleSlides(newVisibleSlides);

      if (containerRef.current) {
        const sets = containerRef.current.querySelectorAll(".portfolio-websites-projects-set");
        setTotalSlides(sets.length);
        const containerWidth = containerRef.current.clientWidth;
        const calculatedWidth = (containerWidth - 12 * (newVisibleSlides - 1)) / newVisibleSlides;
        setSlideWidth(calculatedWidth);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const handlePrev = () => {
    if (slideIndex > 0) setSlideIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (slideIndex < totalSlides - visibleSlides) setSlideIndex((prev) => prev + 1);
  };

  return (
    <div className="portfolio-websites-projects">
      <div className="portfolio-websites-projects-heading">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" alt="Decorative section heading design border" />
          <h2>{heading}</h2>
        </div>
        <div className="portfolio-websites-projects-controls">
          <button
            className="portfolio-websites-projects-control"
            onClick={handlePrev}
            disabled={slideIndex === 0}
            aria-label="Previous project slide"
            style={{ opacity: slideIndex === 0 ? 0.2 : 1, pointerEvents: slideIndex === 0 ? "none" : "auto" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.9998 12.9V19.2L4.7998 12L11.9998 4.80005V11.1H19.1998V12.9H11.9998Z" fill="#433E43" />
            </svg>
          </button>
          <button
            className="portfolio-websites-projects-control"
            onClick={handleNext}
            disabled={slideIndex >= totalSlides - visibleSlides}
            aria-label="Next project slide"
            style={{ opacity: slideIndex >= totalSlides - visibleSlides ? 0.2 : 1, pointerEvents: slideIndex >= totalSlides - visibleSlides ? "none" : "auto" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12.0002 12.9V19.2L19.2002 12L12.0002 4.80005V11.1H4.8002V12.9H12.0002Z" fill="#433E43" />
            </svg>
          </button>
        </div>
      </div>
      <div className="portfolio-websites-projects-container" ref={containerRef}>
        <div
          className="portfolio-websites-projects-container-slide"
          style={{
            transform: `translateX(-${slideIndex * (slideWidth + 12)}px)`,
            transition: "transform 0.3s ease",
            display: "flex",
            gap: "12px",
          }}
        >
          {projects.map((project, idx) => (
            <Link key={idx} to={project.to} className="portfolio-websites-projects-set" aria-label={`View ${project.title} project details`}>
              <div className="portfolio-websites-projects-set-img">
                <img src={project.img} alt={`Screenshot of ${project.title} project`} />
              </div>
              <div className="portfolio-websites-projects-set-info">
                <section>
                  <h3>{project.title}</h3>
                  <ArrowIcon />
                </section>
                <p>{project.industry}</p>
              </div>
              <div className="portfolio-websites-projects-set-glow"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortfolioProjects;
