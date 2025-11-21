import React from "react";
import DesktopBackground from "../../assets/About/Vertical/Desktop Background.png";
import Koiostudio from "../../assets/About/Vertical/Koiostudio.png";
import Engg from "../../assets/About/Vertical/Koios Enginerring Solutions.png";

function Vertical() {
  return (
      <section className="home-about">
        <img src={DesktopBackground} className="home-about-background" />
        <div className="about-vertical">
          <div className="about-vertical-container">
            <h2>Koios Studios</h2>
            <p>is a vertical of</p>
            <h2>Koios Engineering Solutions</h2>
            <img src={Koiostudio} alt="Koiostudio" />
            <img src={Engg} alt="Koios Enginerring Solutions" />
          </div>
        </div>
      </section>
  );
}

export default Vertical;
