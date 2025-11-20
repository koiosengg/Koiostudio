import React, { useState, useRef, useEffect } from "react";
import LogoDesigning from "./Types/LogoDesigning";
import CompanyBranding from "./Types/CompanyBranding";
import BrochureDesign from "./Types/BrochureDesign";
import PosterDesigning from "./Types/PosterDesigning";
import EventDesign from "./Types/EventDesign";
import CompanyCollaterals from "./Types/CompanyCollaterals";

function Types() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef([]);

  const types = [
    { title: "Logo Designing", component: <LogoDesigning /> },
    { title: "Company Branding", component: <CompanyBranding /> },
    { title: "Brochure Design", component: <BrochureDesign /> },
    { title: "Poster Designing", component: <PosterDesigning /> },
    { title: "Event Design", component: <EventDesign /> },
    { title: "Company Collaterals", component: <CompanyCollaterals /> },
  ];

  sectionRefs.current = types.map(
    (_, i) => sectionRefs.current[i] ?? React.createRef()
  );

  const handleClick = (index) => {
    const el = sectionRefs.current[index].current;
    const top = el.getBoundingClientRect().top + window.scrollY - 154;

    window.scrollTo({
      top: top,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 2;

      sectionRefs.current.forEach((ref, i) => {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          setActiveIndex(i);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
              onClick={() => handleClick(index)}
            >
              <hr />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="designing-types-right">
        {types.map((item, index) => (
          <div
            key={index}
            ref={sectionRefs.current[index]}
            className="designing-types-section"
          >
            {item.component}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Types;
