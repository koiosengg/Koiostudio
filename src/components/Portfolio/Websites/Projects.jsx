import React, { useState } from "react";
import Tertiary from "../../Buttons/Tertiary";
import NEStructures from "../../../assets/Portfolio/Websites/Projects/NE Structures.webp";
import Mobiglide from "../../../assets/Portfolio/Websites/Projects/Mobiglide.webp";
import XLR8 from "../../../assets/Portfolio/Websites/Projects/XLR8.webp";
import Cilkencave from "../../../assets/Portfolio/Websites/Projects/Cilkencave.webp";
import Akarswift from "../../../assets/Portfolio/Websites/Projects/Akarswift.webp";
import ISKAutoIndustries from "../../../assets/Portfolio/Websites/Projects/ISK Auto Industries.webp";
import HappyGummies from "../../../assets/Portfolio/Websites/Projects/Happy Gummies.webp";
import KoiostudioImg from "../../../assets/Portfolio/Websites/Projects/Koiostudio.webp";
import Talankey from "../../../assets/Portfolio/Websites/Projects/Talankey.webp";
import KoiosEngineering from "../../../assets/Portfolio/Websites/Projects/Koios Engineering.webp";
import Fourstor from "../../../assets/Portfolio/Websites/Projects/Fourstor.webp";
import UrbanSphere from "../../../assets/Portfolio/Websites/Projects/Urban Sphere.webp";
import BalajiProtoTools from "../../../assets/Portfolio/Websites/Projects/Balaji Proto Tools.webp";
import MRIndustries from "../../../assets/Portfolio/Websites/Projects/MR Industries.webp";
import GMW from "../../../assets/Portfolio/Websites/Projects/GMW.webp";
import Ameya from "../../../assets/Portfolio/Websites/Projects/Ameya.webp";
import SIMMFA from "../../../assets/Portfolio/Websites/Projects/SIMMFA.webp";
import ClayfulHomes from "../../../assets/Portfolio/Websites/Projects/Clayful Homes.webp";
import ScaleCraft from "../../../assets/Portfolio/Websites/Projects/Scale Craft.webp";
import MachineMovers from "../../../assets/Portfolio/Websites/Projects/Machine Movers.webp";
import AirportrImg from "../../../assets/Portfolio/Applications/Projects/Airportr.webp";
import LMGImg from "../../../assets/Portfolio/Applications/Projects/LMG.webp";
import NegiluImg from "../../../assets/Portfolio/Applications/Projects/Negilu.webp";
import IdaviFoodsImg from "../../../assets/Portfolio/Applications/Projects/Idavi Foods.webp";
import MicronixImg from "../../../assets/Portfolio/Branding/Projects/Micronix.webp";
import NirmalyamImg from "../../../assets/Portfolio/Branding/Projects/Nirmalyam.webp";
import GOATImg from "../../../assets/Portfolio/Branding/Projects/GOAT Cafe.webp";
import AerovidyaImg from "../../../assets/Portfolio/Branding/Projects/Aerovidya.webp";
import MotardImg from "../../../assets/Portfolio/Branding/Projects/Motard.webp";
import CoffeeCultureImg from "../../../assets/Portfolio/Branding/Projects/Coffee Culture.webp";

function Projects({ heading, currentProjectTitle }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const rawSlides = [
    { img: NEStructures, title: "NE Structures", desc: "Construction Industries", toLink: "/portfolio/projects/NE_Structures" },
    { img: Mobiglide, title: "Mobiglide", desc: "Human Resources", toLink: "/portfolio/projects/Mobiglide" },
    { img: XLR8, title: "XLR8", desc: "EV & Automobile Go-kart", toLink: "/portfolio/projects/XLR8" },
    { img: ISKAutoIndustries, title: "ISK Auto Industries", desc: "Automotive Component Manufacturers", toLink: "/portfolio/projects/ISK_Auto_Industries" },
    { img: BalajiProtoTools, title: "Balaji Proto Tools", desc: "Automotive and Manufacturing Industry", toLink: "/portfolio/projects/Balaji_Proto_Tools" },
    { img: HappyGummies, title: "Happy Gummies", desc: "Healthcare Products", toLink: "/portfolio/projects/Happy_Gummies" },
    { img: Fourstor, title: "Fourstor", desc: "Automation Industry", toLink: "/portfolio/projects/Fourstor" },
    { img: Talankey, title: "Talankey", desc: "Mechanical / Manufacturing Industry", toLink: "/portfolio/projects/Talankey" },
    { img: UrbanSphere, title: "Urban Sphere", desc: "Automotive Industry", toLink: "/portfolio/projects/Urban_Sphere" },
    { img: Cilkencave, title: "Cilkencave", desc: "Semi Conductor Industry", toLink: "/portfolio/projects/Cilkencave" },
    { img: MRIndustries, title: "MR Industries", desc: "Automotive Wiring Harness Manufacturing", toLink: "/portfolio/projects/MR_Industries" },
    { img: GMW, title: "GMW", desc: "Automotive Industry", toLink: "/portfolio/projects/GMW" },
    { img: Ameya, title: "Ameya", desc: "Homestays and Hospitality", toLink: "/portfolio/projects/Ameya" },
    { img: Akarswift, title: "Akarswift", desc: "Logistics Solutions", toLink: "/portfolio/projects/Akarswift" },
    { img: ClayfulHomes, title: "Clayful Homes", desc: "Pottery E-commerce", toLink: "/portfolio/projects/Clayful_Homes" },
    { img: SIMMFA, title: "SIMMFA", desc: "Music Academy", toLink: "/portfolio/projects/SIMMFA" },
    { img: ScaleCraft, title: "Scale Craft", desc: "F&B Business Consultancy", toLink: "/portfolio/projects/Scale_Craft" },
    { img: MachineMovers, title: "Machine Movers", desc: "Branding Consultancy", toLink: "/portfolio/projects/Machine_Movers" },
    { img: KoiostudioImg, title: "Koiostudio", desc: "Design & Development Studio", toLink: "/" },
    { img: KoiosEngineering, title: "Koios Engineering", desc: "Mechanical / Manufacturing Industry", toLink: "https://www.koiosengg.com/" },
    { img: AirportrImg, title: "Airportr", desc: "Goods Tracking App", toLink: "/portfolio/projects/Airportr" },
    { img: LMGImg, title: "LMG", desc: "Tourism & Hospitality", toLink: "/portfolio/projects/LMG" },
    { img: NegiluImg, title: "Negilu", desc: "Agriculture & Agritech", toLink: "/portfolio/projects/Negilu" },
    { img: IdaviFoodsImg, title: "Idavi Foods", desc: "Food Industry", toLink: "/portfolio/projects/Idavi_Foods" },
    { img: MicronixImg, title: "Micronix", desc: "EV Batteries", toLink: "/portfolio/projects/Micronix" },
    { img: NirmalyamImg, title: "Nirmalyam", desc: "Food Industry", toLink: "/portfolio/projects/Nirmalyam" },
    { img: GOATImg, title: "GOAT Cafe", desc: "Food Industry", toLink: "/portfolio/projects/GOAT" },
    { img: AerovidyaImg, title: "Aerovidya", desc: "Branding", toLink: "/portfolio/projects/Aerovidya" },
    { img: CoffeeCultureImg, title: "Coffee Culture", desc: "Food Industry", toLink: "/portfolio/projects/Coffee_Culture" },
    { img: MotardImg, title: "Motard", desc: "Biking Club & Gear", toLink: "/portfolio/projects/Motard" },
  ];

  const slides = currentProjectTitle
    ? rawSlides.filter((s) => s.title.toLowerCase() !== currentProjectTitle.toLowerCase())
    : rawSlides;

  const slideWidth = 406 + 16;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="template gallery">
      <div className="template-heading">
        {heading ? (
          <h2>{heading}</h2>
        ) : (
          <>
            <p>Gallery of Success</p>
            <h2>
              Showcasing<br />
              Creativity &amp; Impact
            </h2>
          </>
        )}
      </div>

      <div className="gallery-container">
        <span>PORTFOLIO</span>
        <div className="gallery-set-container">
          <div
            className="gallery-slide"
            style={{
              display: "flex",
              gap: "16px",
              transform: `translateX(-${currentIndex * slideWidth}px)`,
              transition: "transform 0.5s ease",
            }}
          >
            {slides.map((slide, index) => (
              <div className="gallery-set" key={index}>
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="gallery-set-background"
                />
                <div className="our-blogs-set-content">
                  <div className="our-blogs-set-text">
                    <h3>{slide.title}</h3>
                    <p>{slide.desc}</p>
                  </div>
                  {slide.toLink.startsWith("http") ? (
                    <a
                      href={slide.toLink}
                      target="_blank"
                      rel="noreferrer"
                      className="tertiary-btn"
                      aria-label={`Read more about ${slide.title} project`}
                    >
                      <p>
                        Read More <span className="sr-only">about {slide.title}</span>
                      </p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="8"
                        height="14"
                        viewBox="0 0 8 14"
                        fill="none"
                      >
                        <path
                          d="M1.81139 13.707L0.400391 12.293L5.68938 6.99997L0.400391 1.70697L1.81539 0.292969L7.10038 5.58597C7.47532 5.96102 7.68595 6.46964 7.68595 6.99997C7.68595 7.5303 7.47532 8.03891 7.10038 8.41397L1.81139 13.707Z"
                          fill="#FFBF00"
                        />
                      </svg>
                    </a>
                  ) : (
                    <Tertiary
                      toLink={slide.toLink}
                      buttonLabel="Read More"
                      ariaLabel={`Read more about ${slide.title} project`}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div
          className="gallery-controls"
          style={{ gap: "20px", justifyContent: "center", marginTop: "20px" }}
        >
          <div
            className="gallery-controls-buttons"
            onClick={handlePrev}
            style={{
              opacity: currentIndex === 0 ? 0.4 : 1,
              cursor: currentIndex === 0 ? "not-allowed" : "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M12.5645 10L5.77479 3.02242C5.71889 2.96619 5.6747 2.89944 5.64477 2.82601C5.61484 2.75259 5.59976 2.67396 5.60042 2.59467C5.60108 2.51539 5.61746 2.43702 5.6486 2.3641C5.67975 2.29119 5.72505 2.22517 5.78187 2.16988C5.8387 2.11458 5.90593 2.07111 5.97967 2.04197C6.05341 2.01283 6.1322 1.9986 6.21147 2.00011C6.29075 2.00162 6.36894 2.01883 6.44151 2.05076C6.51409 2.08269 6.57961 2.12869 6.6343 2.18611L13.8301 9.58184C13.9391 9.69379 14 9.84381 14 10C14 10.1562 13.9391 10.3062 13.8301 10.4182L6.6343 17.8139C6.57961 17.8713 6.51409 17.9173 6.44151 17.9492C6.36894 17.9812 6.29075 17.9984 6.21147 17.9999C6.1322 18.0014 6.05341 17.9872 5.97967 17.958C5.90593 17.9289 5.8387 17.8854 5.78187 17.8301C5.72505 17.7748 5.67975 17.7088 5.6486 17.6359C5.61746 17.563 5.60108 17.4846 5.60042 17.4053C5.59976 17.326 5.61484 17.2474 5.64477 17.174C5.6747 17.1006 5.71889 17.0338 5.77479 16.9776L12.5645 10Z"
                fill="white"
              />
            </svg>
          </div>

          <div
            className="gallery-controls-buttons"
            onClick={handleNext}
            style={{
              opacity: currentIndex === slides.length - 1 ? 0.4 : 1,
              cursor: currentIndex === slides.length - 1 ? "not-allowed" : "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5645 10L5.77479 3.02242C5.71889 2.96619 5.6747 2.89944 5.64477 2.82601C5.61484 2.75259 5.59976 2.67396 5.60042 2.59467C5.60108 2.51539 5.61746 2.43702 5.6486 2.3641C5.67975 2.29119 5.72505 2.22517 5.78187 2.16988C5.8387 2.11458 5.90593 2.07111 5.97967 2.04197C6.05341 2.01283 6.1322 1.9986 6.21147 2.00011C6.29075 2.00162 6.36894 2.01883 6.44151 2.05076C6.51409 2.08269 6.57961 2.12869 6.6343 2.18611L13.8301 9.58184C13.9391 9.69379 14 9.84381 14 10C14 10.1562 13.9391 10.3062 13.8301 10.4182L6.6343 17.8139C6.57961 17.8713 6.51409 17.9173 6.44151 17.9492C6.36894 17.9812 6.29075 17.9984 6.21147 17.9999C6.1322 18.0014 6.05341 17.9872 5.97967 17.958C5.90593 17.9289 5.8387 17.8854 5.78187 17.8301C5.72505 17.7748 5.67975 17.7088 5.6486 17.6359C5.61746 17.563 5.60108 17.4846 5.60042 17.4053C5.59976 17.326 5.61484 17.2474 5.64477 17.174C5.6747 17.1006 5.71889 17.0338 5.77479 16.9776L12.5645 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
