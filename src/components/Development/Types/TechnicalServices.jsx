import React from "react";
import Image from "../../../assets/Development/Types/Technical Services.png";
import Tick from "../../../assets/Development/Types/Tick.svg";

function TechnicalServices() {
  return (
    <>
      <h2>
        Technical <span>Services </span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Technical Services"
        />
        <div className="designing-types-text">
          <p>
            We help you manage all the tech behind your business so things run
            smoothly without hassle. From integrations to maintenance, we make
            sure everything works the way it should. Whether it’s solving
            issues, upgrading systems, or managing servers, we keep things
            stable and reliable. You get clean, dependable support without the
            stress.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Smooth system management</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Issue troubleshooting</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Reliable optimisation</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Secure, stable setup</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnicalServices;
