import React from "react";
import LeftBackground from "../../assets/Designing/Animation/Left Background.png";
import RightBackground from "../../assets/Designing/Animation/Right Background.png";
import Smiley from "../../assets/Designing/Animation/Smiley.png";
import Toggle from "../../assets/Designing/Animation/Toggle.png";
import Letters from "../../assets/Designing/Animation/Letters.png";
import Click from "../../assets/Designing/Animation/Click.png";

function Animation() {
  return (
    <section className="template">
      <div className="template-heading">
        <h2>
          Enhance your Site With <br className="desktop" />
          Interactive Design
        </h2>
        <span>
          Lorem ipsum dolor sit amet consectetur. Suspendisse phasellus non
          faucibus morbi. Lacinia hendrerit nunc donec vulputate eu{" "}
        </span>
      </div>
      <div className="designing-animation">
        <div className="designing-animation-left">
          <div className="designing-animation-heading">
            <h3>Lorem Ipsum</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus.
            </p>
          </div>
          <img src={LeftBackground} alt="Background" />
        </div>
        <div className="designing-animation-right">
          <div className="designing-animation-heading">
            <h3>Get Unique Designs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus suspendisse dolor quis. Vel mi ac est
            </p>
          </div>
          <div className="home-creations-right-img">
            <img src={RightBackground} alt="Background" />
          </div>
        </div>
        <div className="designing-animation-bottom">
          <div className="designing-animation-heading">
            <h3>Creative Effects</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus. Lorem ipsum dolor sit amet
              consectetur. Suspendisse convalli
            </p>
          </div>
          <div className="designing-animation-bottom-container">
            <div className="designing-animation-bottom-set white-top-border">
              <div className="designing-animation-bottom-set-image">
                <img src={Smiley} alt="On Delay" />
              </div>
              <span>On Delay</span>
            </div>
            <div className="designing-animation-bottom-set white-top-border">
              <div className="designing-animation-bottom-set-image">
                <img src={Toggle} alt="Loop" />
              </div>
              <span>Loop</span>
            </div>
            <div className="designing-animation-bottom-set white-top-border">
              <div className="designing-animation-bottom-set-image">
                <img src={Letters} alt="Hover" />
              </div>
              <span>Hover</span>
            </div>
            <div className="designing-animation-bottom-set white-top-border">
              <div className="designing-animation-bottom-set-image">
                <img src={Click} alt="Click" />
              </div>
              <span>Click</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Animation;
