import React from "react";
import DesktopBackground from "../../assets/About/Vertical/Desktop Background.png";
import Koiostudio from "../../assets/About/Vertical/Koiostudio.png";
import Engg from "../../assets/About/Vertical/Koios Enginerring Solutions.png";

function Vertical() {
  return (
      <section className="home-about about-vertical-div">
        <img src={DesktopBackground} alt="Vertical relation background" className="home-about-background" />
        <div className="about-vertical">
          <div className="about-vertical-container">
            <h2>Koios Studios</h2>
            <p>is a vertical of</p>
            <h2>Koios Engineering Solutions</h2>
            <img src={Koiostudio} alt="Koios Studios logo" />
            <img src={Engg} alt="Koios Engineering Solutions logo" />
          </div>
        </div>
      </section>
  );
}

export default Vertical;
