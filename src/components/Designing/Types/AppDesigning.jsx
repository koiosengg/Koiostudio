import React from "react";
import Image from "../../../assets/Designing/Types/App Designing.png";
import Tick from "../../../assets/Designing/Types/Tick.svg";

function AppDesigning() {
  return (
    <>
      <h2>
        App <span>Designing</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="App Designing"
        />
        <div className="designing-types-text">
          <p>
            Apps are part of everyday life, so they should feel simple,
            welcoming, and fast to use. We design screens that guide people
            effortlessly from onboarding to daily actions without feeling
            overwhelming. Every page is thoughtfully built to make the
            experience smooth and visually pleasing. Whether for Android or iOS,
            the app feels familiar and easy to pick up.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Simple, friendly flow</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Platform-native feel</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Easy interactions</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clean, modern visuals</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDesigning;
