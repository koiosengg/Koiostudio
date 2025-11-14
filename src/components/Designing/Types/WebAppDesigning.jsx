import React from "react";
import Image from "../../../assets/Designing/Types/Web App Designing.png";
import Tick from "../../../assets/Designing/Types/Tick.svg";

function WebAppDesigning() {
  return (
    <>
      <h2>
        Web App <span>Designing</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Web App Designing"
        />
        <div className="designing-types-text">
          <p>
            Web apps often handle heavy tasks, so our goal is to make them feel
            light and organised. We create layouts that make it easy for users
            to understand what’s happening and find what they need quickly.
            Actions stay clear, features feel accessible, and the flow remains
            uncluttered. It’s a workspace that helps people get things done with
            minimum effort.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clear screen structure</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Easy navigation of tasks</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Logical visual hierarchy</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Scales well with new features</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebAppDesigning;
