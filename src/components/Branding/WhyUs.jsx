import React from "react";
import Point1 from "../../assets/Branding/Why Us/Point 1.png";
import Point2 from "../../assets/Branding/Why Us/Point 2.png";
import Point3 from "../../assets/Branding/Why Us/Point 3.png";

function WhyUs() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Why Us</p>
        <h2>
          Branding That Speaks, Connects,
          <br className="desktop" />
          and Converts
        </h2>
      </div>
      <div className="designing-why-us">
        <div className="designing-why-us-set white-top-border">
          <img src={Point1} alt="Design" />
          <p>Transforming ideas into memorable visual identities.</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point2} alt="Design" />
          <p>Cohesive brand touchpoints across all mediums.</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point3} alt="Design" />
          <p>Designs that stick in minds effortlessly.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
