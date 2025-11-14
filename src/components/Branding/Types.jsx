import React, { useState } from "react";
import LogoDesigning from "./Types/LogoDesigning";
import CompanyBranding from "./Types/CompanyBranding";
import BrochureDesign from "./Types/BrochureDesign";
import PosterDesigning from "./Types/PosterDesigning";
import EventDesign from "./Types/EventDesign";
import CompanyCollaterals from "./Types/CompanyCollaterals";

function Types() {
  const [activeIndex, setActiveIndex] = useState(0);

  const types = [
    {
      title: "Logo Designing",
      component: <LogoDesigning />,
    },
    {
      title: "Company Branding",
      component: <CompanyBranding />,
    },
    {
      title: "Brochure Design",
      component: <BrochureDesign />,
    },
    { title: "Poster Designing", component: <PosterDesigning /> },
    {
      title: "Event Design",
      component: <EventDesign />,
    },
    {
      title: "Company Collaterals",
      component: <CompanyCollaterals />,
    },
  ];

  return (
    <section className="designing-types">
      <div className="designing-types-left">
        <h2>Types</h2>
        <div className="designing-types-container">
          {types.map((item, index) => (
            <div
              key={index}
              className={`designing-types-set ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <hr />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="designing-types-right">
        {types[activeIndex].component}
      </div>
    </section>
  );
}

export default Types;
