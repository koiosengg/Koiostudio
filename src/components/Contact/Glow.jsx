import React, { useEffect, useRef, useState } from "react";
import DesktopBackground from "../../assets/Contact/Glow/Desktop Background.png";

function Glow() {
  const [opacity, setOpacity] = useState(0);
  const bannerRef = useRef(null);
  const hasFadedIn = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFadedIn.current) {
          setOpacity(1);
          hasFadedIn.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (bannerRef.current) observer.observe(bannerRef.current);

    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current);
    };
  }, []);

  return (
    <section className="home-banner" ref={bannerRef} style={{ height: "auto" }}>
      <img
        src={DesktopBackground}
        alt=" Background"
        style={{ opacity, height: "auto", position: "relative" }}
        className="home-banner-background"
      />
    </section>
  );
}

export default Glow;
