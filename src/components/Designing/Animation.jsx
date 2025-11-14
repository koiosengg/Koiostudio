import React from "react";
import LeftBackground from "../../assets/Designing/Animation/Left Background.png";
import RightBackground from "../../assets/Designing/Animation/Right Background.png";
import Smiley from "../../assets/Designing/Animation/Smiley.png";
import Toggle from "../../assets/Designing/Animation/Toggle.png";
import Letters from "../../assets/Designing/Animation/Letters.png";
import Click from "../../assets/Designing/Animation/Click.png";
import Mouse from "../../assets/Designing/Animation/Mouse.png";
import Design from "../../assets/Designing/Animation/Design.png";
import Edit from "../../assets/Designing/Animation/Edit.png";

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
                <div className="circle-background">
                  <img src={Smiley} alt="On Delay" />
                </div>
              </div>
              <p>On Delay</p>
            </div>
            <div className="designing-animation-bottom-set white-top-border">
              <div className="designing-animation-bottom-set-image">
                <div className="toggle">
                  <div className="toggle-background">
                    <span></span>
                  </div>
                  <div className="toggle-background">
                    <span></span>
                  </div>
                </div>
              </div>
              <p>Loop</p>
            </div>
            <div className="designing-animation-bottom-set white-top-border">
              <div className="designing-animation-bottom-set-image hover">
                <h4>
                  <span>D</span>
                  <span>e</span>
                  <span>s</span>
                  <span>i</span>
                  <span>g</span>
                  <span>n</span>
                </h4>
              </div>
              <p>Hover</p>
            </div>
            <div className="designing-animation-bottom-set white-top-border">
              <div className="designing-animation-bottom-set-image">
                <div className="click-background">
                  <img src={Click} alt="Click" />
                  <img src={Mouse} alt="Mouse" />
                </div>
                <div className="click-background-1">
                  <img src={Design} alt="Design" />
                </div>
                <div className="click-background-2">
                  <img src={Edit} alt="Edit" />
                </div>
              </div>
              <p>Click</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Animation;
