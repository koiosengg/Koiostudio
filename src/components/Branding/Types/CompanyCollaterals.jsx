import React from "react";
import Image from "../../../assets/Branding/Types/Company Collaterals.png";
import Tick from "../../../assets/Branding/Types/Tick.svg";

function CompanyCollaterals() {
  return (
    <>
      <h2>
        Company <span>Collaterals</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Company Collaterals"
        />
        <div className="designing-types-text">
          <p>
            From business cards to letterheads, we make sure your brand looks
            consistent everywhere. We design pieces that feel professional yet
            warm so your business leaves the right impression. Everything aligns
            visually, keeping things clean, simple, and easy to use across
            teams. Whether it’s digital files or print ready art, it’s all
            sorted and neatly delivered.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Business cards, letterheads, envelopes</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>On-brand layouts + colours</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Print-ready files included</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Designed for everyday use</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyCollaterals;
