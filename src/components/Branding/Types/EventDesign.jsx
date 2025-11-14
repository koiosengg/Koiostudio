import React from "react";
import Image from "../../../assets/Branding/Types/Event Design.png";
import Tick from "../../../assets/Branding/Types/Tick.svg";

function EventDesign() {
  return (
    <>
      <h2>
        Event <span>Design</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Event Design"
        />
        <div className="designing-types-text">
          <p>
            Events deserve a look that matches the excitement. We design
            creatives that set the right mood classy, fun, or bold whatever the
            occasion calls for. From invites to digital banners, everything
            feels connected and well thought out. The goal is simple: make your
            event look as good as it feels.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Custom theme styling</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Designs for print + digital</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Consistent event identity</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Flexible for all event sizes</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDesign;
