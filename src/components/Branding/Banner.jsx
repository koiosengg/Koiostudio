import React, { useEffect, useRef, useState } from "react";
import DesktopBackground from "../../assets/Branding/Banner/Desktop Background.png";

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
        <h1>Company Branding</h1>
        <p>
          At Koios, we understand the challenges of web design and its
          overwhelming process. Hence, our approach ensures you stay informed
          and in control every step of the way, making the process smoother and
          more collaborative.
        </p>
      </div>
    </section>
  );
}

export default Banner;
