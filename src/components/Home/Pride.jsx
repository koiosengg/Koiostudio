import React from "react";
import Mahi from "../../assets/Home/Pride/Mahi.webp";
import AllOk from "../../assets/Home/Pride/AllOk.webp";
import Jason from "../../assets/Home/Pride/Jason.webp";
import TMS from "../../assets/Home/Pride/TMS.webp";
import XLR8 from "../../assets/Home/Pride/XLR8.webp";
import Muth from "../../assets/Home/Pride/Muth.webp";
import Malgudi from "../../assets/Home/Pride/Malgudi.webp";
import Jukebox from "../../assets/Home/Pride/Jukebox.webp";
import Prima from "../../assets/Home/Pride/Prima.webp";
import CilkenCave from "../../assets/Home/Pride/CilkenCave.webp";

const logos = [
  { src: Mahi, alt: "Mahi" },
  { src: AllOk, alt: "AllOk" },
  { src: Jason, alt: "Jason" },
  { src: TMS, alt: "TMS" },
  { src: XLR8, alt: "XLR8" },
  { src: Muth, alt: "Muth" },
  { src: Malgudi, alt: "Malgudi" },
  { src: Jukebox, alt: "Jukebox" },
  { src: Prima, alt: "Prima" },
  { src: CilkenCave, alt: "CilkenCave" },
];

function Pride() {
  return (
    <section className="template home-pride-template">
      <div className="template-heading">
        <p>Our Pride</p>
        <h2>
          Our Works & <br className="desktop" />
          Collaborations
        </h2>
      </div>

      <div className="home-pride">
        <div className="home-pride-marquee">
          <div className="home-pride-track">
            {logos.concat(logos).map((logo, index) => (
              <img key={`t1-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
          <div className="home-pride-track" aria-hidden="true">
            {logos.concat(logos).map((logo, index) => (
              <img key={`t2-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pride;
