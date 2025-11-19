import React, { useState } from "react";
import SEO from "./Types/SEO";
import GMBSetupAndOptimisation from "./Types/GMBSetupAndOptimisation";
import SocialMediaMarketing from "./Types/SocialMediaMarketing";
import GoogleAdsAndMetaAds from "./Types/GoogleAdsAndMetaAds";

function Types() {
  const [activeIndex, setActiveIndex] = useState(0);

  const types = [
    {
      title: "SEO",
      component: <SEO />,
    },
    {
      title: "GMB Setup and Optimisation",
      component: <GMBSetupAndOptimisation />,
    },
    { title: "Social Media Marketing", component: <SocialMediaMarketing /> },
    {
      title: "Google Ads and Meta Ads",
      component: <GoogleAdsAndMetaAds />,
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
