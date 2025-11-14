import React from "react";
import Image from "../../../assets/Designing/Types/User Interface Designing.png";
import Tick from "../../../assets/Designing/Types/Tick.svg";

function UserInterfaceDesigning() {
  return (
    <>
      <h2>
        User Interface <span>Designing</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="User Interface Designing"
        />
        <div className="designing-types-text">
          <p>
            Good UI feels effortless the user shouldn’t have to think twice. We
            design clean, intuitive layouts that guide people naturally from one
            step to the next. Every button, color, and interaction is
            thoughtfully crafted to make things simple and enjoyable. Whether
            it’s a fresh product or a redesign, we make it look modern and easy
            to use.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clean, intuitive layouts</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Smooth navigation flow</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Modern visual approach</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Designed for real users</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInterfaceDesigning;
