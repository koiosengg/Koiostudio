import React, { useState, useEffect } from "react";
import RightAnimationClick from "../../assets/Branding/Animation/Right Animation Click.png";
import RightAnimationImg1 from "../../assets/Branding/Animation/Right Animation Image 1.png";
import RightAnimationImg2 from "../../assets/Branding/Animation/Right Animation Image 2.png";
import RightAnimationImg3 from "../../assets/Branding/Animation/Right Animation Image 3.png";
import BrandingAnimationTopBackground from "../../assets/Branding/Animation/Branding Animation Top Background.png";
import TopAnimationClick from "../../assets/Branding/Animation/Top Animation Click.png";
import BottomAnimationImg1 from "../../assets/Branding/Animation/Bottom Animation Image 1.png";
import BottomAnimationImg2 from "../../assets/Branding/Animation/Bottom Animation Image 2.png";
import BottomAnimationClick from "../../assets/Branding/Animation/Bottom Animation Click.png";

function Animation() {
  const [activeSetIndex, setActiveSetIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSetIndex((prev) => (prev + 1) % 5);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="template">
      <div className="template-heading">
        <h2>
          Comprehensive
          <br className="desktop" />
          Design Services
        </h2>
        <span>
          Lorem ipsum dolor sit amet consectetur. Suspendisse phasellus non
          faucibus morbi. Lacinia hendrerit nunc donec vulputate eu
        </span>
      </div>
      <div className="designing-animation development-animation">
        <div className="development-animation-left branding-animation-left">
          <div className="branding-animation-left-heading">
            <h3>BRANDING</h3>
            <h3>MERCHANDISE</h3>
            <img src={RightAnimationClick} />
          </div>
          <div className="branding-animation-left-container">
            <div className="branding-animation-left-container-1">
              <img src={RightAnimationImg1} />
              <img src={RightAnimationImg2} />
            </div>
            <div className="branding-animation-left-container-2">
              <img src={RightAnimationImg3} />
            </div>
          </div>
        </div>
        <div className="development-animation-top branding-animation-top">
          <img
            src={BrandingAnimationTopBackground}
            className="branding-animation-top-background"
          />
          <div className="branding-animation-top-container">
            <h3>Our Offerings</h3>
            <div className="branding-animation-top-search-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5002 17.4999L13.881 13.8808M13.881 13.8808C14.5001 13.2617 14.9912 12.5267 15.3262 11.7179C15.6612 10.909 15.8337 10.0421 15.8337 9.16659C15.8337 8.29109 15.6612 7.42416 15.3262 6.61531C14.9912 5.80645 14.5001 5.0715 13.881 4.45243C13.2619 3.83335 12.527 3.34228 11.7181 3.00724C10.9093 2.6722 10.0423 2.49976 9.16684 2.49976C8.29134 2.49976 7.42441 2.6722 6.61555 3.00724C5.80669 3.34228 5.07174 3.83335 4.45267 4.45243C3.2024 5.7027 2.5 7.39844 2.5 9.16659C2.5 10.9347 3.2024 12.6305 4.45267 13.8808C5.70295 15.131 7.39868 15.8334 9.16684 15.8334C10.935 15.8334 12.6307 15.131 13.881 13.8808Z"
                  stroke="#B9B9B9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Search</p>
            </div>
            <div className="branding-animation-top-set-container">
              {[
                "Logo Designing",
                "Color Palettes",
                "Letter Heads",
                "Brochures",
                "Menu Design",
              ].map((label, index) => (
                <div
                  key={index}
                  className={`branding-animation-top-set ${
                    activeSetIndex === index ? "active-set" : ""
                  }`}
                >
                  <span>{index + 1}</span>
                  <p>{label}</p>
                </div>
              ))}

              <img
                src={TopAnimationClick}
                style={{
                  top: `${16 + activeSetIndex * 47}px`,
                  transition: "top 0.3s ease",
                }}
              />
            </div>
          </div>
        </div>
        <div className="development-animation-bottom branding-animation-bottom">
          <div className="designing-animation-heading">
            <h3>Specialized Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus suspendisse dolor quis. Vel mi ac est
            </p>
          </div>
          <div className="branding-animation-bottom-container">
            <div className="branding-animation-bottom-container-img">
              <img src={BottomAnimationImg1} />
              <img src={BottomAnimationImg2} />
              <img src={BottomAnimationClick} />
              <div className="branding-animation-bottom-text">
                <p>We also design</p>
                <h4>BUSINESS CARDS</h4>
                <h4>EMAIL TEMPLATES</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Animation;
