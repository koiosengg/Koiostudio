import React, { useState, useRef } from "react";
import DesktopBackground from "../../../assets/Portfolio/Home/Desktop Numbers.webp";
import HeadingDesign from "../../../assets/Portfolio/Home/Section Heading Design.webp";
import Testimony1 from "../../../assets/Portfolio/Home/Testimony/Testimony 1.webp";
import Testimony2 from "../../../assets/Portfolio/Home/Testimony/Testimony 2.webp";
import Testimony3 from "../../../assets/Portfolio/Home/Testimony/Testimony 3.webp";
import Testimony4 from "../../../assets/Portfolio/Home/Testimony/Testimony 4.webp";

const testimonials = [
  {
    id: 1,
    text: "I had a fantastic experience with koiostudio when they redesigned our company website. Their team was not only professional but also incredibly creative and skilled.",
    image: Testimony1,
    alt: "koiostudio client testimonial one",
  },
  {
    id: 2,
    text: "Highly professional team very creative at work",
    image: Testimony2,
    alt: "koiostudio client testimonial two",
  },
  {
    id: 3,
    text: "Dedicated and highly motivated professionals who work smart and work hard to deliver excellent results with an approachable and adaptive attitude.",
    image: Testimony3,
    alt: "koiostudio client testimonial three",
  },
  {
    id: 4,
    text: "Excellent experience working with the koios team. All the designers are very professional",
    image: Testimony4,
    alt: "koiostudio client testimonial four",
  },
];

function Testimony() {
  const [cursorPos, setCursorPos] = useState({ x: 250, y: 250 });
  const [activeTestimony, setActiveTestimony] = useState(0);
  const divRef = useRef(null);
  const touchStartX = useRef(null);

  const handleMouseMove = (e) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();

      const rawX = e.clientX - rect.left;
      const rawY = e.clientY - rect.top;

      const x = Math.max(250, Math.min(rawX, rect.width - 100));
      const y = Math.max(150, Math.min(rawY, rect.height - 150));

      setCursorPos({ x, y });
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // swipe left -> next
        setActiveTestimony((prev) => (prev + 1) % testimonials.length);
      } else {
        // swipe right -> prev
        setActiveTestimony((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="portfolio-home-numbers portfolio-testimony">
      <div className="portfolio-home-numbers-container">
        <div className="portfolio-section-heading">
          <img
            src={HeadingDesign}
            alt="koiostudio section heading design border"
            className="portfolio-section-heading-img"
          />
          <h2>
            Hear Our <br className="notMobile" /> <span>Happy Clients</span>
          </h2>
          <p>Discover how our solutions have made a difference.</p>
        </div>
        <div
          className="portfolio-home-numbers-div"
          ref={divRef}
          onMouseMove={handleMouseMove}
        >
          {/* Desktop background and flashlight visual effects */}
          <img
            src={DesktopBackground}
            alt="koiostudio client testimonials background"
            className="portfolio-home-numbers-background notMobile"
          />
          <div
            className="portfolio-home-cursor-glow notMobile"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
            }}
          ></div>
          <div
            className="portfolio-home-flashlight-overlay notMobile"
            style={{
              maskImage: `radial-gradient(circle 180px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 80%)`,
              WebkitMaskImage: `radial-gradient(circle 180px at ${cursorPos.x}px ${cursorPos.y}px, rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 80%)`,
            }}
          ></div>

          {/* Desktop Version: Staggered arc with hover/click reveal */}
          <div className="portfolio-testimony-container notMobile">
            {testimonials.map((item, index) => (
              <div
                key={item.id}
                className={`portfolio-testimony-set ${
                  activeTestimony === index ? "active" : ""
                }`}
                onMouseEnter={() => setActiveTestimony(index)}
                onClick={() => setActiveTestimony(index)}
              >
                <p>{item.text}</p>
                <img src={item.image} alt={item.alt} />
              </div>
            ))}
          </div>

          {/* Mobile & Tablet Version: Responsive interactive testimonial card & avatar switcher */}
          <div
            className="portfolio-testimony-mobile mobile"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Avatars row */}
            <div className="portfolio-testimony-mobile-avatars">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`portfolio-testimony-mobile-avatar-btn ${
                    activeTestimony === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTestimony(index)}
                  aria-label={`View testimonial from client ${index + 1}`}
                >
                  <img src={item.image} alt={item.alt} />
                </button>
              ))}
            </div>

            {/* Testimonial speech bubble card */}
            <div className="portfolio-testimony-mobile-card-wrapper">
              <div
                className="portfolio-testimony-mobile-notch"
                style={{
                  left: `${activeTestimony * 25 + 12.5}%`,
                }}
              ></div>
              <div
                key={activeTestimony}
                className="portfolio-testimony-mobile-card"
              >
                <span className="portfolio-testimony-mobile-quote">“</span>
                <p>{testimonials[activeTestimony].text}</p>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="portfolio-testimony-mobile-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`portfolio-testimony-mobile-dot ${
                    activeTestimony === index ? "active" : ""
                  }`}
                  onClick={() => setActiveTestimony(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimony;
