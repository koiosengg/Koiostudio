import React, { useRef, useEffect, useState } from "react";
import DesktopBackground from "../../assets/Blogs/Connection/Desktop Background.png";
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
        className="home-connection-background"
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      />
      <div className="home-connection-container">
        <div className="home-connection-text">
          <h2>
            Lets Establish A <br className="desktop" /> Connection
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Viverra maecenas faucibus
            feugiat quam nibh.
          </p>
        </div>

        <div className="home-connection-buttons">
          <Primary text="Call Us" toLink="/" />
          <Secondary text="Mail Us" toLink="/" />
        </div>
      </div>
    </section>
  );
}

export default Connection;
