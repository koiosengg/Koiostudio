import React from "react";
import Image from "../../../assets/Designing/Types/Responsive Website Design.png";
import Tick from "../../../assets/Designing/Types/Tick.svg";

function ResponsiveWebsiteDesign() {
  return (
    <>
      <h2>
        Responsive <span>Website Design</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Responsive Website Design"
        />
        <div className="designing-types-text">
          <p>
            Your website should feel great no matter the screen size, and that’s
            exactly what we focus on. We design layouts that adjust naturally,
            so nothing looks squeezed or misplaced. Content stays clear, buttons
            remain easy to tap, and browsing feels smooth everywhere. From
            desktop to mobile, your website will look consistent, organised, and
            easy to use.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Mobile + desktop friendly</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Quick loading layouts</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Consistent design across screens</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>User-focused structure</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResponsiveWebsiteDesign;
