import React from "react";
import Image from "../../../assets/Branding/Types/Company Branding.png";
import Tick from "../../../assets/Branding/Types/Tick.svg";

function CompanyBranding() {
  return (
    <>
      <h2>
        Company <span>Branding</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Company Branding"
        />
        <div className="designing-types-text">
          <p>
            Branding is more than a look it’s the personality people remember.
            We help you shape your identity with visuals, tone, and style that
            feel effortless and real. From colors to messaging, everything
            connects nicely so your brand feels consistent everywhere. Think of
            it like giving your business a voice and attitude people instantly
            relate to.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Complete visual identity</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clear brand tone and personality</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Colour palette + typography</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Strong, cohesive storytelling</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyBranding;
