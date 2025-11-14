import React from "react";
import LeftBackground from "../../assets/Development/Animation/Left Background.png";

function Animation() {
  return (
    <section className="template">
      <div className="template-heading">
        <h2>
          Comprehensive
          <br className="desktop" />
          Design Services
        </h2>
        <span>
          Lorem ipsum dolor sit amet consectetur. Suspendisse phasellus non
          faucibus morbi. Lacinia hendrerit nunc donec vulputate eu
        </span>
      </div>
      <div className="designing-animation development-animation">
        <div className="development-animation-left">
          <div className="designing-animation-heading">
            <h3>The Art Of Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus.
            </p>
          </div>
          <img src={LeftBackground} alt="Background" />
        </div>
        <div className="development-animation-top">
          <div className="designing-animation-heading">
            <h3>Unleashing Creativity In Code</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus.
            </p>
          </div>
        </div>
        <div className="development-animation-bottom">
          <div className="designing-animation-heading">
            <h3>Specialized Services</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus suspendisse dolor quis. Vel mi ac est
            </p>
          </div>
          {/* <img src={BottomBackground} alt="Background" /> */}
        </div>
      </div>
    </section>
  );
}

export default Animation;
