import React, { useEffect, useRef, useState } from "react";
import DesktopBackground from "../../assets/Home/Banner/Desktop Background.svg";
import MobileBackground from "../../assets/Home/Banner/Mobile Background.svg";

function Banner() {
  const [opacity, setOpacity] = useState(0);
  const bannerRef = useRef(null);
  const hasFadedIn = useRef(false);

  useEffect(() => {
    const currentBanner = bannerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFadedIn.current) {
          setOpacity(1);
          hasFadedIn.current = true;
        }
      },
      { threshold: 0.3 }
    );

    if (currentBanner) observer.observe(currentBanner);

    return () => {
      if (currentBanner) observer.unobserve(currentBanner);
    };
  }, []);

  return (
    <section className="home-banner" ref={bannerRef}>
      <img
        src={DesktopBackground}
        alt="Decorative Koios Studio home banner glowing background design"
        style={{ opacity }}
        className="home-banner-background desktop"
      />
      <img
        src={MobileBackground}
        alt="Decorative Koios Studio home banner glowing background design"
        style={{ opacity }}
        className="home-banner-background mobile"
      />
      <div className="home-banner-text">
        <h1>
          Implementing <br /> Your Ideas To Reality
        </h1>
        {/* <p>
          At Koios, we understand the challenges of web design and its
          overwhelming process. Hence, our approach ensures you stay informed
          and in control every step of the way, making the process smoother and
          more collaborative.
        </p> */}
      </div>
    </section>
  );
}

export default Banner;
