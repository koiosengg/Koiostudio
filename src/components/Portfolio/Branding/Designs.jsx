import React, { useState, useEffect } from "react";
import HeadingDesign from "../../../assets/Portfolio/Section Heading Design.webp";
import EventDesign1 from "../../../assets/Portfolio/Branding/Event Design 1.webp";
import EventDesign2 from "../../../assets/Portfolio/Branding/Event Design 2.webp";
import EventDesign3 from "../../../assets/Portfolio/Branding/Event Design 3.webp";
import EventDesign4 from "../../../assets/Portfolio/Branding/Event Design 4.webp";

const brandingDesigns = [
  {
    title: "Identity Card",
    description:
      "Lorem ipsum dolor sit amet consectetur Augue id dictum hendrerit adipiscing tellus pretium varius",
    image: EventDesign1,
  },
  {
    title: "Sunboard",
    description:
      "Turpis morbi praesent ac velit. Non in adipiscing tortor pretium varius nunc.",
    image: EventDesign2,
  },
  {
    title: "Table Tent",
    description:
      "Hendrerit adipiscing tellus pretium varius nunc. Turpis morbi praesent ac velit.",
    image: EventDesign3,
  },
  {
    title: "Lanyard",
    description:
      "Augue id dictum hendrerit adipiscing tellus pretium varius nunc. Non in adipiscing.",
    image: EventDesign4,
  },
];

function Designs() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex(
          (prevIndex) => (prevIndex + 1) % brandingDesigns.length
        );
        setFade(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentDesign = brandingDesigns[currentIndex];

  return (
    <div className="portfolio-branding-designs">
      <div className="portfolio-section-heading">
        <img
          src={HeadingDesign}
          className="portfolio-section-heading-img"
          alt="Section Heading"
        />
        <h2>
          <span>Event</span> Branding Designs
        </h2>
        <p>
          Visual storytelling that elevates every gathering and celebration.
        </p>
      </div>

      <div className="portfolio-branding-designs-container">
        <section>
          <h3>{currentDesign.title}</h3>
          <p>{currentDesign.description}</p>
        </section>
        <div className="portfolio-branding-designs-container-img">
          <div className="portfolio-branding-designs-container-img-container">
            <img
              src={currentDesign.image}
              alt={currentDesign.title}
              className={fade ? "fade-out" : "fade-in"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designs;
