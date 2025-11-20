import React from "react";
import DesktopBackground from "../../assets/About/Company/Desktop Background.png";

function Company() {
  return (
    <section className="template ">
      <div className="home-about">
        <img src={DesktopBackground} className="home-about-background" />
        <div className="home-about-text-container">
          <div className="template-heading">
            <p>About Us</p>
            <h2>
              Empowering <br className="desktop" />
              Connections & Innovations
            </h2>
          </div>
          <div className="home-about-text">
            <p>
              Koios Engineering Solutions is your trusted one-stop destination
              for advanced mechanical and automobile design and manufacturing
              services. We specialize in electric vehicles and offer website and
              brand development solutions to craft impactful digital presence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Company;
