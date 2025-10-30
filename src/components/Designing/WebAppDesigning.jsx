import React from "react";
import Image from "../../assets/Designing/Types/Web App Designing.png";
import Tick from "../../assets/Designing/Types/Tick.svg";

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
            Lorem ipsum dolor sit amet consectetur. Tempor ultrices netus
            aliquet nec eu sollicitudin interdum turpis neque. Lobortis
            venenatis egestas fringilla nunc tincidunt at nec in tortor. Nunc
            sed ridiculus dolor vitae tincidunt magna commodo quam enim. Lectus
            convallis amet neque massa feugiat arcu feugiat. Tempor ultrices
            netus aliquet nec eu sollicitudin interdum turpis neque. Lobortis
            venenatis egestas fringilla nunc tincidunt at nec in tortor. Nunc
            sed ridiculus dolor vitae tincidunt magna commodo quam enim. Lectus
            convallis amet neque massa feugiat arcu feugiat.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Lorem ipsum dolor sitor</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Lorem ipsum dolor amet consectetur</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Lorem ipsum dolor sitor</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Lorem ipsum amet consectetur</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Lorem amet consectetur</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebAppDesigning;
