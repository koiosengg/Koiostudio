import React, { useState } from "react";
import Food from "../../assets/Home/Industries/Food.svg";
import Automobile from "../../assets/Home/Industries/Food.svg";

function Industries() {
  const [rotation, setRotation] = useState(270);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSets = 6;
  const stepAngle = 60;

  const rotateLeft = () => {
    setRotation((prev) => prev - stepAngle);
    setActiveIndex((prev) => (prev + 1) % totalSets);
  };

  const rotateRight = () => {
    setRotation((prev) => prev + stepAngle);
    setActiveIndex((prev) => (prev - 1 + totalSets) % totalSets);
  };

  const industryData = [
    {
      title: "Automobile Industry",
      img: Automobile,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu vel sed morbi risus tincidunt. Auctor lorem leo purus tellus.",
    },
    {
      title: "Food & Beverage Industry",
      img: Food,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu vel sed morbi risus tincidunt. Auctor lorem leo purus tellus.",
    },
    {
      title: "Pharmaceutical Industry",
      img: Food,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu vel sed morbi risus tincidunt. Auctor lorem leo purus tellus.",
    },
    {
      title: "Electronics Industry",
      img: Food,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu vel sed morbi risus tincidunt. Auctor lorem leo purus tellus.",
    },
    {
      title: "Textile Industry",
      img: Food,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu vel sed morbi risus tincidunt. Auctor lorem leo purus tellus.",
    },
    {
      title: "Construction Industry",
      img: Food,
      description:
        "Lorem ipsum dolor sit amet consectetur. Eu vel sed morbi risus tincidunt. Auctor lorem leo purus tellus.",
    },
  ];

  return (
    <section className="template">
      <div className="template-heading">
        <p>Industries We Empower</p>
        <h2>
          Supporting Industries with <br className="desktop" />
          Tailored Expertise
        </h2>
      </div>

      <div className="home-industries">
        <div
          className="home-industries-container"
          style={{
            transform: `translateY(10%) rotate(${rotation}deg)`,
            transition: "transform 1s ease-in-out",
          }}
        >
          {industryData.map((item, index) => (
            <div
              key={index}
              className={`home-industries-set white-top-border ${
                index === activeIndex ? "active-home-industries-set" : ""
              }`}
            >
              <img src={item.img} alt={item.title} />
              <div className="home-industries-set-text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="home-industries-controls">
          <div className="home-industries-control" onClick={rotateLeft}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.43552 10L14.2252 3.02242C14.2811 2.96619 14.3253 2.89944 14.3552 2.82601C14.3852 2.75259 14.4002 2.67396 14.3996 2.59467C14.3989 2.51539 14.3825 2.43702 14.3514 2.3641C14.3202 2.29119 14.275 2.22517 14.2181 2.16988C14.1613 2.11458 14.0941 2.07111 14.0203 2.04197C13.9466 2.01283 13.8678 1.9986 13.7885 2.00011C13.7093 2.00162 13.6311 2.01883 13.5585 2.05076C13.4859 2.08269 13.4204 2.12869 13.3657 2.18611L6.16985 9.58184C6.06094 9.69379 6 9.84381 6 10C6 10.1562 6.06094 10.3062 6.16985 10.4182L13.3657 17.8139C13.4204 17.8713 13.4859 17.9173 13.5585 17.9492C13.6311 17.9812 13.7093 17.9984 13.7885 17.9999C13.8678 18.0014 13.9466 17.9872 14.0203 17.958C14.0941 17.9289 14.1613 17.8854 14.2181 17.8301C14.275 17.7748 14.3202 17.7088 14.3514 17.6359C14.3825 17.563 14.3989 17.4846 14.3996 17.4053C14.4002 17.326 14.3852 17.2474 14.3552 17.174C14.3253 17.1006 14.2811 17.0338 14.2252 16.9776L7.43552 10Z"
                fill="white"
              />
            </svg>
          </div>

          <div className="home-industries-control" onClick={rotateRight}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M12.5645 10L5.77479 3.02242C5.71889 2.96619 5.6747 2.89944 5.64477 2.82601C5.61484 2.75259 5.59976 2.67396 5.60042 2.59467C5.60108 2.51539 5.61746 2.43702 5.6486 2.3641C5.67975 2.29119 5.72505 2.22517 5.78187 2.16988C5.8387 2.11458 5.90593 2.07111 5.97967 2.04197C6.05341 2.01283 6.1322 1.9986 6.21147 2.00011C6.29075 2.00162 6.36894 2.01883 6.44151 2.05076C6.51409 2.08269 6.57961 2.12869 6.6343 2.18611L13.8301 9.58184C13.9391 9.69379 14 9.84381 14 10C14 10.1562 13.9391 10.3062 13.8301 10.4182L6.6343 17.8139C6.57961 17.8713 6.51409 17.9173 6.44151 17.9492C6.36894 17.9812 6.29075 17.9984 6.21147 17.9999C6.1322 18.0014 6.05341 17.9872 5.97967 17.958C5.90593 17.9289 5.8387 17.8854 5.78187 17.8301C5.72505 17.7748 5.67975 17.7088 5.6486 17.6359C5.61746 17.563 5.60108 17.4846 5.60042 17.4053C5.59976 17.326 5.61484 17.2474 5.64477 17.174C5.6747 17.1006 5.71889 17.0338 5.77479 16.9776L12.5645 10Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Industries;
