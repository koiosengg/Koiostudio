import React from "react";
import Image from "../../../assets/Branding/Types/Brochure Design.png";
import Tick from "../../../assets/Branding/Types/Tick.svg";

function BrochureDesign() {
  return (
    <>
      <h2>
        Brochure <span>Design</span>
      </h2>
      <div className="designing-types-content">
        <img
          src={Image}
          className="designing-types-content-img"
          alt="Brochure Design"
        />
        <div className="designing-types-text">
          <p>
            A good brochure should say a lot without feeling heavy so we keep it
            simple and sharp. We organize your content in a way that’s easy to
            read and looks clean, turning information into a smooth story.
            Whether it’s digital or print, the final design feels polished and
            engaging. It’s not just a handout; it becomes a small showcase of
            who you are.
          </p>
          <div className="designing-types-text-points">
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Clean, readable layouts</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Print + digital formats</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Designed to highlight key info</p>
            </div>
            <div className="designing-types-text-point">
              <img src={Tick} alt="Yellow Tick" />
              <p>Thoughtful use of visuals + text</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrochureDesign;
