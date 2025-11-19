import React from "react";
import Image from "../../../assets/Marketing/Types/GMB Setup and Optimisation.png";
import Tick from "../../../assets/Marketing/Types/Tick.svg";

function GMBSetupAndOptimisation() {
  return (
    <>
      <h2>
        GMB Setup and <span> Optimisation</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="GMB Setup and Optimisation"
        />
        <div className="designing-types-text">
          <p>
            Show up where it matters most right on Google Maps and search
            results. We set up and optimize your profile so customers can easily
            find you, call you, and trust your business instantly. We manage
            everything, ensuring your local presence shines.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Better visibility for local customers</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Accurate business details & updates</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Professional profile management</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Increases calls & store visits</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GMBSetupAndOptimisation;
