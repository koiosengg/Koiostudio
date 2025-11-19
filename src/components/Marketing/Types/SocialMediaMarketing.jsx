import React from "react";
import Image from "../../../assets/Marketing/Types/Social Media Marketing.png";
import Tick from "../../../assets/Marketing/Types/Tick.svg";

function SocialMediaMarketing() {
  return (
    <>
      <h2>
        Social Media <span> Marketing</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Social Media Marketing"
        />
        <div className="designing-types-text">
          <p>
            Stay in front of your audience with content that feels genuine and
            sparks conversation. We help build your brand identity online by
            creating posts, campaigns, and communication that people want to
            engage with. You focus on what you do best we take care of the buzz.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Builds real online presence</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Engaging and consistent content</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Strong brand storytelling</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Better audience reach & trust</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialMediaMarketing;
