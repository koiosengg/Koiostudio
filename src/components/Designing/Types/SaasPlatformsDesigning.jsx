import React from "react";
import Image from "../../../assets/Designing/Types/Saas Platforms Designing.png";
import Tick from "../../../assets/Designing/Types/Tick.svg";

function SaasPlatformsDesigning() {
  return (
    <>
      <h2>
        Saas Platforms <span>Designing</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Saas Platforms Designing"
        />
        <div className="designing-types-text">
          <p>
            SaaS platforms can be packed with features, so we design them to
            feel both powerful and easy to use. Dashboards stay clean, workflows
            stay clear, and users always know where to go next. Even complex
            tools are presented in a friendly, organised way that new users can
            pick up quickly. As your product grows, the design naturally adapts
            to support more.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Scalable design system</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Smooth onboarding</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clean, structured dashboards</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>User-centric workflow</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SaasPlatformsDesigning;
