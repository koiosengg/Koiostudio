import React, { useEffect, useRef } from "react";
import TopBackground from "../../assets/Marketing/Animation/Top Background.png";
import Search from "../../assets/Marketing/Animation/Search.png";
import Google from "../../assets/Marketing/Animation/Google.png";
import Meta from "../../assets/Marketing/Animation/Meta.png";
import Click from "../../assets/Marketing/Animation/Click.png";

function Animation() {
  const topRef = useRef(null);
  const searchRef = useRef(null);

  useEffect(() => {
    const topEl = topRef.current;
    const searchEl = searchRef.current;

    let x = 0;
    let y = 0;
    let dx = 2;
    let dy = 1.5;

    const animate = () => {
      const width = topEl.offsetWidth - 120;
      const height = topEl.offsetHeight - 120;

      x += dx;
      y += dy;

      if (x <= 0 || x >= width) dx = -dx;

      if (y <= 0 || y >= height) dy = -dy;

      searchEl.style.left = `${x}px`;
      searchEl.style.top = `${y}px`;

      topEl.style.setProperty("--x", `${x + 60}px`);
      topEl.style.setProperty("--y", `${y + 60}px`);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <section className="template">
      <div className="template-heading">
        <h2>
          Comprehensive
          <br className="desktop" />
          Design Services
        </h2>
        <span>
          Lorem ipsum dolor sit amet consectetur. Suspendisse phasellus non
          faucibus morbi. Lacinia hendrerit nunc donec vulputate eu
        </span>
      </div>

      <div className="designing-animation development-animation">
        <div className="development-animation-left marketing-animation-left">
          <h3>
            Digital <br /> Marketing <br />
            <span>is</span>
          </h3>
          <div className="marketing-animation-left-wrapper">
            <div className="marketing-animation-left-marquee">
              <div className="marquee-group">
                <h4>
                  Visibility, Engagement, Reach, Conversion, Analytics,
                  Growth,&nbsp;
                </h4>
                <h4>
                  Visibility, Engagement, Reach, Conversion, Analytics,
                  Growth,&nbsp;
                </h4>
              </div>
              <div className="marquee-group">
                <h4>
                  Visibility, Engagement, Reach, Conversion, Analytics,
                  Growth,&nbsp;
                </h4>
                <h4>
                  Visibility, Engagement, Reach, Conversion, Analytics,
                  Growth,&nbsp;
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className="development-animation-top marketing-animation-top"
          ref={topRef}
        >
          <img
            src={TopBackground}
            alt="Top Background"
            className="marketing-animation-top-background"
          />
          <div className="search" ref={searchRef}>
            <img src={Search} alt="Search" />
          </div>
        </div>

        <div className="development-animation-bottom marketing-animation-bottom">
          <img src={Google} alt="Google" className="google" />
          <img src={Meta} alt="Meta" className="meta" />
          <img src={Click} alt="Mouse Click" className="click" />
          <h3>AD SUCCESS</h3>
        </div>
      </div>
    </section>
  );
}

export default Animation;
