import React from "react";
import BackgroundImage from "../../assets/Home/Pride/Background Image.png";
import LML from "../../assets/Home/Pride/LML.png";
import LastMinGuru from "../../assets/Home/Pride/Last Min Guru.png";
import Staidrich from "../../assets/Home/Pride/Staidrich.png";
import ISK from "../../assets/Home/Pride/ISK.png";
import CilkenCave from "../../assets/Home/Pride/Cilken Cave.png";
import XLR8 from "../../assets/Home/Pride/XLR8.png";
import NEStructures from "../../assets/Home/Pride/NE Structures.png";
import SEG from "../../assets/Home/Pride/SEG.png";
import TMS from "../../assets/Home/Pride/TMS.png";

function Pride() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Our Pride</p>
        <h2>
          Our Works & <br className="desktop" />
          Collaborations
        </h2>
      </div>

      <div className="home-pride">
        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img src={LML} alt="LML" className="company-image" />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img
            src={LastMinGuru}
            alt="Last Min Guru"
            className="company-image"
          />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img src={Staidrich} alt="Staidrich" className="company-image" />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img src={ISK} alt="ISK" className="company-image" />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img src={CilkenCave} alt="Cilken Cave" className="company-image" />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img src={XLR8} alt="XLR8" className="company-image" />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img
            src={NEStructures}
            alt="NE Structures"
            className="company-image"
          />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img src={SEG} alt="SEG" className="company-image" />
        </div>

        <div className="home-pride-set">
          <img src={BackgroundImage} className="background-image" alt="" />
          <img src={TMS} alt="TMS" className="company-image" />
        </div>
      </div>
    </section>
  );
}

export default Pride;
