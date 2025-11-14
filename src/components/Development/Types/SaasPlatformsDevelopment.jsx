import React from "react";
import Image from "../../../assets/Development/Types/Saas Platforms Development.png";
import Tick from "../../../assets/Development/Types/Tick.svg";

function SaasPlatformsDevelopment() {
  return (
    <>
      <h2>
        Saas Platforms <span>Development </span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Saas Platforms Development"
        />
        <div className="designing-types-text">
          <p>
            We build SaaS platforms that feel powerful but still simple to
            manage. Everything is structured so users can easily understand
            features and workflows from day one. The platform grows with your
            business, adding new modules or tools without breaking the
            experience. It’s built to scale, stay secure, and keep performance
            steady.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Modular + scalable</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Secure backend</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clear workflows</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Custom integrations</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaasPlatformsDevelopment;
