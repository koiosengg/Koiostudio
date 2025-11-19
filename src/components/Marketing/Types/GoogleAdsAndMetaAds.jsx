import React from "react";
import Image from "../../../assets/Marketing/Types/Google Ads and Meta Ads.png";
import Tick from "../../../assets/Marketing/Types/Tick.svg";

function GoogleAdsAndMetaAds() {
  return (
    <>
      <h2>
        Google Ads and Meta Ads <span></span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Google Ads and Meta Ads"
        />
        <div className="designing-types-text">
          <p>
            Reach the right customers at the right time with smart, data-driven
            ad campaigns. We handle everything from planning to optimization, so
            your money goes where it actually matters. You get results without
            learning a single ad dashboard.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Strategically targeted campaigns</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Real leads, not just clicks</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Complete setup & management</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Maximum return on your budget</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GoogleAdsAndMetaAds;
