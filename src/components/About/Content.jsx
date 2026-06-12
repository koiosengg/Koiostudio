import React from "react";
import DesktopBackground from "../../assets/About/Content/Desktop Background.png";
import MobileDesktop from "../../assets/About/Content/Mobile Background.png";

function Content() {
  return (
    <section className="home-about about-content">
      <img src={DesktopBackground} alt="About content background desktop" className="home-about-background desktop" />
      <img src={MobileDesktop} alt="About content background mobile" className="home-about-background mobile" />

      <div className="home-about-text-container">
        <div className="home-about-text">
          <p>
            We've always believed in turning dreams into reality, helping people
            reach their Goals , and making perfection achievable So we rolled up
            our sleeves and made it happen.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Content;
