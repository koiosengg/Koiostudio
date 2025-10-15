import React, { useEffect, useRef, useState } from "react";
import Grey from "/assets/Glow/Grey.svg";
import Yellow from "/assets/Glow/Yellow.svg";

function Glow() {
  const glowRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
        });
      },
      { threshold: 1 }
    );

    if (glowRef.current) {
      observer.observe(glowRef.current);
    }

    return () => {
      if (glowRef.current) {
        observer.unobserve(glowRef.current);
      }
    };
  }, []);

  return (
    <div className="glow" ref={glowRef}>
      <div className={`glow-container ${isActive ? "active-glow" : ""}`}>
        <img src={Grey} alt="Koiostudio" />
        <img src={Yellow} alt="Koiostudio" />
      </div>
    </div>
  );
}

export default Glow;
