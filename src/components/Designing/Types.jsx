import React, { useState } from "react";
import UserInterfaceDesigning from "./UserInterfaceDesigning";
import ResponsiveWebsiteDesign from "./ResponsiveWebsiteDesign";
import AppDesigning from "./AppDesigning";
import WebAppDesigning from "./WebAppDesigning";
import SaasPlatformsDesigning from "./SaasPlatformsDesigning";

function Types() {
  const [activeIndex, setActiveIndex] = useState(0);

  const types = [
    {
      title: "User Interface Designing",
      component: <UserInterfaceDesigning />,
    },
    {
      title: "Responsive Website Design",
      component: <ResponsiveWebsiteDesign />,
    },
    { title: "App Designing", component: <AppDesigning /> },
    { title: "Web App Designing", component: <WebAppDesigning /> },
    {
      title: "Saas Platforms Designing",
      component: <SaasPlatformsDesigning />,
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
