import React from "react";
import MarqueeImg1 from "../../../assets/Portfolio/Home/Marquee/Marquee  (1).webp";
import MarqueeImg2 from "../../../assets/Portfolio/Home/Marquee/Marquee  (2).webp";
import MarqueeImg3 from "../../../assets/Portfolio/Home/Marquee/Marquee  (3).webp";
import MarqueeImg4 from "../../../assets/Portfolio/Home/Marquee/Marquee  (4).webp";
import MarqueeImg5 from "../../../assets/Portfolio/Home/Marquee/Marquee  (5).webp";
import MarqueeImg6 from "../../../assets/Portfolio/Home/Marquee/Marquee  (6).webp";
import MarqueeImg7 from "../../../assets/Portfolio/Home/Marquee/Marquee  (7).webp";
import MarqueeImg8 from "../../../assets/Portfolio/Home/Marquee/Marquee  (8).webp";
import MarqueeImg9 from "../../../assets/Portfolio/Home/Marquee/Marquee  (9).webp";
import MarqueeImg10 from "../../../assets/Portfolio/Home/Marquee/Marquee  (10).webp";
import MarqueeImg11 from "../../../assets/Portfolio/Home/Marquee/Marquee  (11).webp";
import MarqueeImg12 from "../../../assets/Portfolio/Home/Marquee/Marquee  (12).webp";
import MarqueeImg13 from "../../../assets/Portfolio/Home/Marquee/Marquee  (13).webp";
import MarqueeImg14 from "../../../assets/Portfolio/Home/Marquee/Marquee  (14).webp";
import MarqueeImg15 from "../../../assets/Portfolio/Home/Marquee/Marquee  (15).webp";
import MarqueeImg16 from "../../../assets/Portfolio/Home/Marquee/Marquee  (16).webp";
import MarqueeImg17 from "../../../assets/Portfolio/Home/Marquee/Marquee  (17).webp";
import MarqueeImg18 from "../../../assets/Portfolio/Home/Marquee/Marquee  (18).webp";
import MarqueeImg19 from "../../../assets/Portfolio/Home/Marquee/Marquee  (19).webp";
import MarqueeImg20 from "../../../assets/Portfolio/Home/Marquee/Marquee  (20).webp";

function Marquee() {
  const marqueeImages = [
    MarqueeImg1, MarqueeImg2, MarqueeImg3, MarqueeImg4, MarqueeImg5,
    MarqueeImg6, MarqueeImg7, MarqueeImg8, MarqueeImg9, MarqueeImg10,
    MarqueeImg11, MarqueeImg12, MarqueeImg13, MarqueeImg14, MarqueeImg15,
    MarqueeImg16, MarqueeImg17, MarqueeImg18, MarqueeImg19, MarqueeImg20,
  ];

  return (
    <div className="portfolio-home-marquee">
      <div className="portfolio-home-marquee-container">
        <div className="portfolio-home-marquee-track">
          <div className="portfolio-home-marquee-slide">
            {marqueeImages.map((img, i) => (
              <img key={`slide1-${i}`} src={img} alt={`koiostudio client logo ${i + 1}`} />
            ))}
          </div>

          <div className="portfolio-home-marquee-slide">
            {marqueeImages.map((img, i) => (
              <img key={`slide2-${i}`} src={img} alt={`koiostudio client logo ${i + 1} duplicate`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
