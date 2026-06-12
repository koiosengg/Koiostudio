import React, { useEffect, useRef, useState } from "react";

function Counter({ target, duration, suffix = "" }) {
  const [count, setCount] = useState(1);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (target - 1) + 1));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [target, duration]);

  return <>{count}{suffix}</>;
}

function Numbers() {
  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStarted(true);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="about-numbers" ref={sectionRef}>
      <div className="about-numbers-set white-top-border">
        <h3>
          {hasStarted ? <Counter target={2022} duration={1500} /> : "1"}
        </h3>
        <p>Founded</p>
      </div>
      <div className="about-numbers-set white-top-border">
        <h3>
          {hasStarted ? <Counter target={80} duration={1500} suffix="+" /> : "1+"}
        </h3>
        <p>Projects</p>
      </div>
      <div className="about-numbers-set white-top-border">
        <h3>
          {hasStarted ? <Counter target={15} duration={1500} suffix="+" /> : "1+"}
        </h3>
        <p>Clients</p>
      </div>
    </section>
  );
}

export default Numbers;
