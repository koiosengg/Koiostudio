import React from "react";
import Rocket from "../../assets/Home/Problems/Rocket.mp4";
import Round from "../../assets/Home/Problems/Elips round.mp4";
import Star from "../../assets/Home/Problems/Star.mp4";
import Dots from "../../assets/Home/Problems/dots move.mp4";
import Circle from "../../assets/Home/Problems/Circle.mp4";
import ExtraCicle from "../../assets/Home/Problems/Extra elips.mp4";

function Problems() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Why Us</p>
        <h2>
          More Than Design, <br className="desktop" />
          We Solve Real Problems.
        </h2>
      </div>
      <div className="home-problems">
        <div className="home-problems-set white-top-border">
          <div className="home-problems-set-img">
            <video src={Rocket} autoPlay loop muted playsInline />
          </div>
          <div className="home-problems-set-text">
            <h3>Launching a new product but don’t know where to start?</h3>
            <p>
              We handle everything from strategy to launch, ensuring your
              product reaches the right audience fast.
            </p>
          </div>
        </div>
        <div className="home-problems-set white-top-border">
          <div className="home-problems-set-img">
            <video src={Round} autoPlay loop muted playsInline />
          </div>
          <div className="home-problems-set-text">
            <h3>Your brand feels stuck in time?</h3>
            <p>
              We handle everything from strategy to launch, ensuring your
              product reaches the right audience fast.
            </p>
          </div>
        </div>
        <div className="home-problems-set white-top-border">
          <div className="home-problems-set-img">
            <video src={Circle} autoPlay loop muted playsInline />
          </div>
          <div className="home-problems-set-text">
            <h3>Expanding services but need a modern platform?</h3>
            <p>
              We handle everything from strategy to launch, ensuring your
              product reaches the right audience fast.
            </p>
          </div>
        </div>
        <div className="home-problems-set white-top-border">
          <div className="home-problems-set-img">
            <video src={Dots} autoPlay loop muted playsInline />
          </div>
          <div className="home-problems-set-text">
            <h3>Don’t have a digital presence?</h3>
            <p>
              We handle everything from strategy to launch, ensuring your
              product reaches the right audience fast.
            </p>
          </div>
        </div>
        <div className="home-problems-set white-top-border">
          <div className="home-problems-set-img">
            <video src={ExtraCicle} autoPlay loop muted playsInline />
          </div>
          <div className="home-problems-set-text">
            <h3>Need to reach a larger audience?</h3>
            <p>
              We handle everything from strategy to launch, ensuring your
              product reaches the right audience fast.
            </p>
          </div>
        </div>
        <div className="home-problems-set white-top-border">
          <div className="home-problems-set-img">
            <video src={Star} autoPlay loop muted playsInline />
          </div>
          <div className="home-problems-set-text">
            <h3>Marketing efforts aren’t giving results?</h3>
            <p>
              We handle everything from strategy to launch, ensuring your
              product reaches the right audience fast.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Problems;
