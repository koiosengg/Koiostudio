import React from "react";
import Image from "../../../assets/Development/Types/App Development.png";
import Tick from "../../../assets/Development/Types/Tick.svg";

function AppDevelopment() {
  return (
    <>
      <h2>
        App <span>Development </span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="App Development"
        />
        <div className="designing-types-text">
          <p>
            We turn ideas into solid, user-friendly apps that people enjoy using
            every day. From planning to launch, everything is built thoughtfully
            so the app feels smooth, stable, and easy to navigate. Whether
            Android or iOS, we make sure it looks right and performs well. It’s
            a complete build that feels natural and polished from start to
            finish.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Native + cross-platform options</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Smooth user experience</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Strong and secure build</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>End-to-end development</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AppDevelopment;
