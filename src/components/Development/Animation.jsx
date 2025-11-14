import React from "react";
import LeftBackground from "../../assets/Development/Animation/Left Background.png";
import BottomBackground from "../../assets/Development/Animation/Bottom Background.png";
import RightTopImg from "../../assets/Development/Animation/Right Top.png";
function Animation() {
  return (
    <section className="template">
      <div className="template-heading">
        <h2>
          Engineered for
          <br className="desktop" />
          Excellence
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
          <div className="development-animation-section">
            <div className="development-animation-section-left">
              <div className="development-animation-wrapper">
                <div className="development-animation-marquee">
                  <p>Html</p>
                  <p>CSS</p>
                  <p>React</p>
                  <p>Node</p>
                  <p>Express</p>
                  <p>SQL</p>
                </div>
                <div className="development-animation-marquee">
                  <p>Html</p>
                  <p>CSS</p>
                  <p>React</p>
                  <p>Node</p>
                  <p>Express</p>
                  <p>SQL</p>
                </div>
              </div>
            </div>
            <div className="development-animation-section-right">
              <img
                src={RightTopImg}
                alt="Right Top Image"
                className="development-animation-section-right-top"
              />
              <div className="development-animation-section-right-center">
                <p>
                  https.//website.<span>koiossoftwaresolutions</span>
                </p>
              </div>
              <h4>Development.</h4>
            </div>
          </div>
        </div>
        <div className="development-animation-bottom">
          <div className="designing-animation-heading">
            <h3>Creative Integration</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus.
            </p>
          </div>
          <img src={BottomBackground} alt="Background" />
        </div>
      </div>
    </section>
  );
}

export default Animation;
