import React from "react";
import DesktopBackground from "../../assets/Home/About/Desktop Background.png";
import MobileBackground from "../../assets/Home/About/Mobile Background.png";
import Secondary from "../Buttons/Secondary";

function About() {
  return (
    <section className="template ">
      <div className="home-about">
        <img
          src={DesktopBackground}
          className="home-about-background desktop"
        />
        <img src={MobileBackground} className="home-about-background mobile" />
        <div className="home-about-text-container">
          <div className="template-heading">
            <p>About Us</p>
            <h2>
              Empowering <br />
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
            <Secondary text="View more" toLink="/" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
