import React from "react";
import Point1 from "../../assets/Designing/Why Us/Point 1.png";
import Point2 from "../../assets/Designing/Why Us/Point 2.png";
import Point3 from "../../assets/Designing/Why Us/Point 3.png";

function WhyUs() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Why Us</p>
        <h2>
          More Than Design,
          <br className="desktop" />
          We Solve Real Problems.
        </h2>
      </div>
      <div className="designing-why-us">
        <div className="designing-why-us-set white-top-border">
          <img src={Point1} alt="Design" />
          <p>Designs crafted to resonate with real users.</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point2} alt="Design" />
          <p>Every element focuses on measurable business impact.</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point3} alt="Design" />
          <p>Blending timeless usability with future-forward aesthetics.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
