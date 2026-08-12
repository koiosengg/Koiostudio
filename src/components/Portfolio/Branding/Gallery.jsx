import React, { useState, useRef, useEffect } from "react";
import GalleryBackground1 from "../../../assets/Portfolio/Branding/Gallery Background 1.webp";
import GalleryBackground2 from "../../../assets/Portfolio/Branding/Gallery Background 2.webp";
import GalleryBackground3 from "../../../assets/Portfolio/Branding/Gallery Background 3.webp";
import GalleryBackground4 from "../../../assets/Portfolio/Branding/Gallery Background 4.webp";
import GalleryBackground5 from "../../../assets/Portfolio/Branding/Gallery Background 5.webp";

import GalleryOption1 from "../../../assets/Portfolio/Branding/Gallery Option 1.webp";
import GalleryOption2 from "../../../assets/Portfolio/Branding/Gallery Option 2.webp";
import GalleryOption3 from "../../../assets/Portfolio/Branding/Gallery Option 3.webp";
import GalleryOption4 from "../../../assets/Portfolio/Branding/Gallery Option 4.webp";
import GalleryOption5 from "../../../assets/Portfolio/Branding/Gallery Option 5.webp";

import GalleryImage1 from "../../../assets/Portfolio/Branding/Gallery Image 1.webp";
import GalleryImage2 from "../../../assets/Portfolio/Branding/Gallery Image 2.webp";

function Gallery() {
  const containerRef = useRef(null);
  const [gap, setGap] = useState(0);
  const [calculatedGap, setCalculatedGap] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const updateGap = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;

        let newCalculatedGap;

        if (window.innerWidth < 1200) {
          newCalculatedGap = (containerWidth - 80 * 2 - 120) / 2;
        } else {
          newCalculatedGap = (containerWidth - 244 * 2 - 528) / 2;
        }

        setCalculatedGap(newCalculatedGap);
        setGap(newCalculatedGap);
      }
    };

    // Initial run
    updateGap();

    // Add resize event listener
    window.addEventListener("resize", updateGap);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateGap);
  }, []);

  const findIndexOfActiveOption = (event) => {
    const images = document.querySelectorAll(
      ".portfolio-branding-gallery-options-slide img"
    );
    for (let i = 0; i < images.length; i++) {
      if (images[i] === event.target) {
        return i;
      }
    }
    return -1;
  };

  const handleOptionClick = (event) => {
    const clickedIndex = findIndexOfActiveOption(event);
    if (clickedIndex === -1) return;

    if (clickedIndex > activeIndex) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex + 1;
      if (newIndex > 4) newIndex = 4;
      return newIndex;
    });
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => {
      let newIndex = prevIndex - 1;
      if (newIndex < 0) newIndex = 0;
      return newIndex;
    });
  };

  const calculateTranslateX = () => {
    const baseWidth = window.innerWidth < 1200 ? 80 : 244;
    const translateValue = (calculatedGap + baseWidth) * activeIndex;
    return `-${translateValue}px`;
  };

  const backgroundImages = [
    GalleryBackground1,
    GalleryBackground2,
    GalleryBackground3,
    GalleryBackground4,
    GalleryBackground5,
  ];

  return (
    <div className="portfolio-branding-gallery">
      <div className="portfolio-branding-gallery-container" ref={containerRef}>
        <h2 className={activeIndex % 2 === 0 ? "even" : "odd"}>POSTERS</h2>

        <div className="portfolio-branding-gallery-background">
          <img
            key={activeIndex}
            src={backgroundImages[activeIndex]}
            alt="Background"
          />
        </div>

        <div className="portfolio-branding-gallery-options">
          <div
            className="portfolio-branding-gallery-options-slide"
            style={{
              gap: `${gap}px`,
              transform: `translateX(${calculateTranslateX()})`,
            }}
          >
            <div className="image-container" style={{ cursor: "not-allowed" }}>
              <img src={GalleryImage1} alt="Branding Poster 1" />
            </div>
            <div
              className={`image-container ${
                activeIndex === 0 ? "active-option" : "inactive-option"
              }`}
            >
              <div className="image-container-background"></div>
              <img src={GalleryOption1} onClick={handleOptionClick} alt="Poster option 1" />
            </div>
            <div
              className={`image-container ${
                activeIndex === 1 ? "active-option" : "inactive-option"
              }`}
            >
              <div className="image-container-background"></div>
              <img src={GalleryOption2} onClick={handleOptionClick} alt="Poster option 2" />
            </div>
            <div
              className={`image-container ${
                activeIndex === 2 ? "active-option" : "inactive-option"
              }`}
            >
              <div className="image-container-background"></div>
              <img src={GalleryOption3} onClick={handleOptionClick} alt="Poster option 3" />
            </div>
            <div
              className={`image-container ${
                activeIndex === 3 ? "active-option" : "inactive-option"
              }`}
            >
              <div className="image-container-background"></div>
              <img src={GalleryOption4} onClick={handleOptionClick} alt="Poster option 4" />
            </div>
            <div
              className={`image-container ${
                activeIndex === 4 ? "active-option" : "inactive-option"
              }`}
            >
              <div className="image-container-background"></div>
              <img src={GalleryOption5} onClick={handleOptionClick} alt="Poster option 5" />
            </div>
            <div className="image-container" style={{ cursor: "not-allowed" }}>
              <img src={GalleryImage2} alt="Branding Poster 2" />
            </div>
          </div>
          <div className="portfolio-branding-gallery-indicator">
            <p>
              0{activeIndex + 1}/0{backgroundImages.length}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
