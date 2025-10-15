import React from "react";
import Clients from "../../assets/Home/Features/Clients.png";
import Growth from "../../assets/Home/Features/Growth.png";
import Lead from "../../assets/Home/Features/Lead.png";

function Features() {
  return (
    <section className="template">
      <div className="template-heading">
        <p>Features</p>
        <h2>Build . Trust . Boost</h2>
      </div>
      <div className="home-features">
        <div className="home-features-set">
          <img src={Clients} alt="Client Clicks" />
          <div className="home-features-set-text">
            <h3>Client Clicks</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit lectus turpis dui nisl
              nisl senectus turpis.
            </p>
          </div>
        </div>
        <div className="home-features-set">
          <img src={Growth} alt="Fuel Your Growth" />
          <div className="home-features-set-text">
            <h3>Fuel Your Growth</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit lectus turpis dui nisl
              nisl senectus turpis.
            </p>
          </div>
        </div>
        <div className="home-features-set">
          <img src={Lead} alt="Lead the Way" />
          <div className="home-features-set-text">
            <h3>Lead the Way</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Sit lectus turpis dui nisl
              nisl senectus turpis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
