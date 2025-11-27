import React, { useRef, useEffect, useState } from "react";
import DesktopBackground from "../../assets/Home/Connection/Desktop Background.png";
import MobileBackground from "../../assets/Home/Connection/Mobile Background.png";
import Primary from "../Buttons/Primary";
import Secondary from "../Buttons/Secondary";

function Connection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="home-connection">
      <img
        src={DesktopBackground}
        alt="Background"
        className="home-connection-background desktop"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      <img
        src={MobileBackground}
        alt="Background"
        className="home-connection-background mobile"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div className="home-connection-container">
        <h2>
          Lets Establish A <br /> Connection
        </h2>
        <div className="home-connection-buttons">
          <Primary text="Call Us" toLink="/" />
          <Secondary text="Mail Us" toLink="/" />
        </div>
      </div>
    </section>
  );
}

export default Connection;
