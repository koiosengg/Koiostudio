import React from "react";
import Image from "../../../assets/Marketing/Types/SEO.png";
import Tick from "../../../assets/Marketing/Types/Tick.svg";

function SEO() {
  return (
    <>
      <h2>
        SEO<span> </span>
      </h2>
      <div className="designing-types-content">
        <img src={Image} className="designing-types-content-img" alt="SEO" />
        <div className="designing-types-text">
          <p>
            Boost your visibility and get discovered by the right people. We
            make your website search-friendly so you can rank higher without
            lifting a finger. Relax while you focus on your business, we handle
            the strategy, improvements, and growth. While you focus on running
            your business, we quietly take care of the strategy, improvements,
            and monthly growth.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Improves your ranking naturally</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Brings in highquality traffic</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Fully handled by our expert team</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Consistent performance tracking</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SEO;
