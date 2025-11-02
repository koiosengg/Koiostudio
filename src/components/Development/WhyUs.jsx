import React from "react";
import Point1 from "../../assets/Development/Why Us/Point 1.png";
import Point2 from "../../assets/Development/Why Us/Point 2.png";
import Point3 from "../../assets/Development/Why Us/Point 3.png";

function WhyUs() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Why Us</p>
        <h2>
          Smarter, Faster, Better
          <br className="desktop" />
          Development for You
        </h2>
      </div>
      <div className="designing-why-us">
        <div className="designing-why-us-set white-top-border">
          <img src={Point1} alt="Design" />
          <p>Built to grow with your business needs</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point2} alt="Design" />
          <p>Speed without compromising quality or innovation.</p>
        </div>
        <div className="designing-why-us-set white-top-border">
          <img src={Point3} alt="Design" />
          <p>Flawless performance across devices and platforms.</p>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
