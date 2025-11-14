import React from "react";
import Image from "../../../assets/Branding/Types/Logo Designing.png";
import Tick from "../../../assets/Branding/Types/Tick.svg";

function LogoDesigning() {
  return (
    <>
      <h2>
        Logo <span>Designing</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Logo Designing"
        />
        <div className="designing-types-text">
          <p>
            Your logo is often the first hello your audience gets, so we make
            sure it says the right things. Clean, memorable, and flexible we
            craft logos that look great everywhere, from your website to a
            street banner. We start by understanding your vibe and build visuals
            that feel truly yours. Whether bold or minimal, we give you a mark
            that stands out without trying too hard.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Unique concepts tailored to your style</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Works across digital</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clean, modern, memorable</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Creativity design</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogoDesigning;
