import React from "react";
import Point1 from "../../assets/Marketing/Why Us/Point 1.png";
import Point2 from "../../assets/Marketing/Why Us/Point 2.png";
import Point3 from "../../assets/Marketing/Why Us/Point 3.png";

function WhyUs() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Why Us</p>
        <h2>
          Digital Strategies That
          <br className="desktop" />
          Grow Your Business
        </h2>
      </div>
      <div className="designing-why-us">
        <div className="designing-why-us-set white-top-border">
          <img src={Point1} alt="Design" />
          <p>Strategies fueled by analytics, not guesswork.</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point2} alt="Design" />
          <p>Visibility amplified across digital ecosystems.</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point3} alt="Design" />
          <p>Campaigns engineered for measurable business growth.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
