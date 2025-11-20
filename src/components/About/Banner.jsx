import React, { useEffect, useRef, useState } from "react";
import DesktopBackground from "../../assets/About/Banner/Desktop Background.svg";

function Banner() {
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
    <section className="home-banner" ref={bannerRef}>
      <img
        src={DesktopBackground}
        alt="Designing Banner Background"
        style={{ opacity }}
        className="home-banner-background"
      />
      <div className="home-banner-text">
        <h1>About Us</h1>
        <p>
          Welcome to a world where we blend design thinking, a solution-driven
          approach, and a quest for perfection and make your goals become our
          mission.
        </p>
      </div>
    </section>
  );
}

export default Banner;
