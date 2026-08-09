import React, { useState } from "react";
import Tertiary from "../../Buttons/Tertiary";
import Micronix from "../../../assets/Portfolio/Branding/Projects/Micronix.webp";
import Nirmalyam from "../../../assets/Portfolio/Branding/Projects/Nirmalyam.webp";
import GOATCafe from "../../../assets/Portfolio/Branding/Projects/GOAT Cafe.webp";
import Aerovidya from "../../../assets/Portfolio/Branding/Projects/Aerovidya.webp";
import Motard from "../../../assets/Portfolio/Branding/Projects/Motard.webp";
import CoffeeCulture from "../../../assets/Portfolio/Branding/Projects/Coffee Culture.webp";
import SmilevieuImg from "../../../assets/Projects/Smilevieu/3.webp";
import VoltusImg from "../../../assets/Projects/Voltus/voltus1.webp";
import GreenTaraImg from "../../../assets/Projects/Green Tara/1.webp";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { img: Micronix, title: "Micronix", desc: "EV Batteries", toLink: "/portfolio/projects/Micronix" },
    { img: Nirmalyam, title: "Nirmalyam", desc: "Food Industry", toLink: "/portfolio/projects/Nirmalyam" },
    { img: GOATCafe, title: "GOAT Cafe", desc: "Food Industry", toLink: "/portfolio/projects/GOAT" },
    { img: Aerovidya, title: "Aerovidya", desc: "Branding", toLink: "/portfolio/projects/Aerovidya" },
    { img: CoffeeCulture, title: "Coffee Culture", desc: "Food Industry", toLink: "/portfolio/projects/Coffee_Culture" },
    { img: Motard, title: "Motard", desc: "Biking Club & Gear", toLink: "/portfolio/projects/Motard" },
    { img: SmilevieuImg, title: "Smilevieu", desc: "Healthcare & Branding", toLink: "/portfolio/projects/Smilevieu" },
    { img: VoltusImg, title: "Voltus", desc: "Energy & Technology", toLink: "/portfolio/projects/Voltus" },
    { img: GreenTaraImg, title: "Green Tara", desc: "Eco Wellness", toLink: "/portfolio/projects/Green_Tara" },
  ];

  const slideWidth = 406 + 16;

  const handleNext = () => {
    if (currentIndex < slides.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section className="template gallery">
      <div className="template-heading">
        <p>Gallery of Success</p>
        <h2>
          Showcasing<br />
          Creativity &amp; Impact
        </h2>
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
                  <Tertiary
                    toLink={slide.toLink}
                    buttonLabel="Read More"
                    ariaLabel={`Read more about ${slide.title} project`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ transform: "rotate(180deg)" }}>
              <path d="M12.5645 10L5.77479 3.02242C5.71889 2.96619 5.6747 2.89944 5.64477 2.82601C5.61484 2.75259 5.59976 2.67396 5.60042 2.59467C5.60108 2.51539 5.61746 2.43702 5.6486 2.3641C5.67975 2.29119 5.72505 2.22517 5.78187 2.16988C5.8387 2.11458 5.90593 2.07111 5.97967 2.04197C6.05341 2.01283 6.1322 1.9986 6.21147 2.00011C6.29075 2.00162 6.36894 2.01883 6.44151 2.05076C6.51409 2.08269 6.57961 2.12869 6.6343 2.18611L13.8301 9.58184C13.9391 9.69379 14 9.84381 14 10C14 10.1562 13.9391 10.3062 13.8301 10.4182L6.6343 17.8139C6.57961 17.8713 6.51409 17.9173 6.44151 17.9492C6.36894 17.9812 6.29075 17.9984 6.21147 17.9999C6.1322 18.0014 6.05341 17.9872 5.97967 17.958C5.90593 17.9289 5.8387 17.8854 5.78187 17.8301C5.72505 17.7748 5.67975 17.7088 5.6486 17.6359C5.61746 17.563 5.60108 17.4846 5.60042 17.4053C5.59976 17.326 5.61484 17.2474 5.64477 17.174C5.6747 17.1006 5.71889 17.0338 5.77479 16.9776L12.5645 10Z" fill="white" />
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
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5645 10L5.77479 3.02242C5.71889 2.96619 5.6747 2.89944 5.64477 2.82601C5.61484 2.75259 5.59976 2.67396 5.60042 2.59467C5.60108 2.51539 5.61746 2.43702 5.6486 2.3641C5.67975 2.29119 5.72505 2.22517 5.78187 2.16988C5.8387 2.11458 5.90593 2.07111 5.97967 2.04197C6.05341 2.01283 6.1322 1.9986 6.21147 2.00011C6.29075 2.00162 6.36894 2.01883 6.44151 2.05076C6.51409 2.08269 6.57961 2.12869 6.6343 2.18611L13.8301 9.58184C13.9391 9.69379 14 9.84381 14 10C14 10.1562 13.9391 10.3062 13.8301 10.4182L6.6343 17.8139C6.57961 17.8713 6.51409 17.9173 6.44151 17.9492C6.36894 17.9812 6.29075 17.9984 6.21147 17.9999C6.1322 18.0014 6.05341 17.9872 5.97967 17.958C5.90593 17.9289 5.8387 17.8854 5.78187 17.8301C5.72505 17.7748 5.67975 17.7088 5.6486 17.6359C5.61746 17.563 5.60108 17.4846 5.60042 17.4053C5.59976 17.326 5.61484 17.2474 5.64477 17.174C5.6747 17.1006 5.71889 17.0338 5.77479 16.9776L12.5645 10Z" fill="white" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
