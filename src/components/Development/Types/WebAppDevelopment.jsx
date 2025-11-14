import React from "react";
import Image from "../../../assets/Development/Types/Web App Development.png";
import Tick from "../../../assets/Development/Types/Tick.svg";

function WebAppDevelopment() {
  return (
    <>
      <h2>
        Web App <span>Development </span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Web App Development"
        />
        <div className="designing-types-text">
          <p>
            Web apps need to be quick, reliable, and easy for people to get
            things done. We build clean, structured systems that handle tasks
            without feeling heavy. The interface stays organised, while the
            backend quietly does the hard work. From dashboards to tools,
            everything is built to run smooth and scale as you grow.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Stable and scalable build</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Simple, organised interface</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Secure architecture</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Custom features and workflowsr</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebAppDevelopment;
