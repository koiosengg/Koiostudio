import React from "react";
import Image from "../../../assets/Development/Types/Responsive Website Development.png";
import Tick from "../../../assets/Development/Types/Tick.svg";

function ResponsiveWebsiteDevelopment() {
  return (
    <>
      <h2>
        Responsive Website<span> Design</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Responsive Website Development"
        />
        <div className="designing-types-text">
          <p>
            We build web apps that work smoothly on every screen, whether
            someone is on a laptop, tablet, or mobile. The layout adjusts
            naturally so the experience always feels organised and easy to use.
            Pages load fast, actions feel effortless, and nothing looks cramped
            or out of place. No matter the device, your users get a clean,
            consistent experience.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Works across all screen sizes</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Fast and clean performance</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Consistent user experience</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Modern tech stack</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsiveWebsiteDevelopment;
