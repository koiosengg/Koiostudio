import React, { useState, useRef, useEffect } from "react";
import UserInterfaceDesigning from "./Types/UserInterfaceDesigning";
import ResponsiveWebsiteDesign from "./Types/ResponsiveWebsiteDesign";
import AppDesigning from "./Types/AppDesigning";
import WebAppDesigning from "./Types/WebAppDesigning";
import SaasPlatformsDesigning from "./Types/SaasPlatformsDesigning";

function Types() {
  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRefs = useRef([]);

  const types = [
    {
      title: "User Interface Designing",
      component: <UserInterfaceDesigning />,
    },
    {
      title: "Responsive Website Design",
      component: <ResponsiveWebsiteDesign />,
    },
    {
      title: "App Designing",
      component: <AppDesigning />,
    },
    {
      title: "Web App Designing",
      component: <WebAppDesigning />,
    },
    {
      title: "Saas Platforms Designing",
      component: <SaasPlatformsDesigning />,
    },
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
