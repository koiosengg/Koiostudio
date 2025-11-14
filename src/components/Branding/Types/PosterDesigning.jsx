import React from "react";
import Image from "../../../assets/Branding/Types/Poster Designing.png";
import Tick from "../../../assets/Branding/Types/Tick.svg";

function PosterDesigning() {
  return (
    <>
      <h2>
        Poster <span>Designing</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Poster Designing"
        />
        <div className="designing-types-text">
          <p>
            Posters need to grab attention fast, so we focus on bold messaging
            and clean visuals that stop people mid-scroll or mid-walk. We
            understand the purpose promote, inform and design around that
            energy. Every piece feels fresh, striking, and easy to understand at
            a glance. Perfect for events, campaigns, or anything that needs a
            spotlight.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Strong visual messaging</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Eye-catching colour + layout</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Works for digital + print</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Fast turnaround options</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PosterDesigning;
