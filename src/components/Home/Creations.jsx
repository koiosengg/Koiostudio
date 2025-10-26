import React, { useEffect, useState } from "react";
import Layouts from "../../assets/Home/Creations/Layouts.png";
import Design from "../../assets/Home/Creations/Design.png";
function Creations() {
  const text = "Stand Out With Creativity & Innovation";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isPaused) {
      const timeout = setTimeout(() => {
        if (!isDeleting && index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          setIndex((prev) => prev + 1);
        } else if (isDeleting && index > 0) {
          setDisplayedText(text.slice(0, index - 1));
          setIndex((prev) => prev - 1);
        } else if (!isDeleting && index === text.length) {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(true);
            setIsPaused(false);
          }, 5000);
        } else if (isDeleting && index === 0) {
          setIsPaused(true);
          setTimeout(() => {
            setIsDeleting(false);
            setIsPaused(false);
          }, 2000);
        }
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [index, isDeleting, text, isPaused]);

  useEffect(() => {
    let blinkInterval;
    if (isPaused) {
      blinkInterval = setInterval(() => {
        setCursorVisible((prev) => !prev);
      }, 500);
    } else {
      setCursorVisible(true);
    }
    return () => clearInterval(blinkInterval);
  }, [isPaused]);

  return (
    <section className="template">
      <div className="template-heading">
        <p>Dynamic Creations</p>
        <h2>
          Crafting Captivating
          <br className="desktop" />
          Creations
        </h2>
      </div>
      <div className="home-creations">
        <div className="home-creations-left">
          <img src={Layouts} alt="Company Images Layout" />
        </div>
        <div className="home-creations-right white-top-border">
          <div className="home-creations-right-text">
            <h3>Get Unique Designs</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Suspendisse convallis
              placerat id ultrices purus suspendisse dolor quis. Vel mi ac est
              facilisi sem tortor massa maecenas.
            </p>
          </div>
          <div className="home-creations-right-typewriter">
            <p>{displayedText}</p>
            <div
              className="cursor"
              style={{ opacity: cursorVisible ? 1 : 0 }}
            ></div>
          </div>
          <div className="home-creations-right-img">
            <img src={Design} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Creations;
