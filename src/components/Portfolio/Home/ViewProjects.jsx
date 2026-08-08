import React from "react";
import { Link } from "react-router-dom";
import ViewProjectsImg1 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 1.webp";
import ViewProjectsImg2 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 2.webp";
import ViewProjectsImg3 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 3.webp";
import ViewProjectsImg4 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 4.webp";
import ViewProjectsImg5 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 5.webp";
import ViewProjectsImg6 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 6.webp";
import ViewProjectsImg7 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 7.webp";
import ViewProjectsImg8 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 8.webp";
import ViewProjectsImg9 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 9.webp";
import ViewProjectsImg10 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 10.webp";
import ViewProjectsImg11 from "../../../assets/Portfolio/Home/View Projects/View Projects Img 11.webp";

function ViewProjects() {
  const track1 = [
    ViewProjectsImg1, ViewProjectsImg2, ViewProjectsImg3,
    ViewProjectsImg4, ViewProjectsImg5, ViewProjectsImg6,
  ];
  const track1Images = [...track1, ...track1, ...track1, ...track1];

  const track2 = [
    ViewProjectsImg7, ViewProjectsImg8, ViewProjectsImg9,
    ViewProjectsImg10, ViewProjectsImg11,
  ];
  const track2Images = [...track2, ...track2, ...track2, ...track2, ...track2, ...track2];

  return (
    <div className="portfolio-home-view-projects">
      <div className="portfolio-home-view-projects-wrapper">
        <div className="portfolio-home-view-projects-marquee">
          {track1Images.map((img, idx) => (
            <img key={`t1-${idx}`} src={img} alt={`koiostudio showcase screenshot ${idx + 1}`} />
          ))}
        </div>
      </div>
      <div className="portfolio-home-view-projects-wrapper">
        <div className="portfolio-home-view-projects-marquee portfolio-home-view-projects-marquee-rev">
          {track2Images.map((img, idx) => (
            <img key={`t2-${idx}`} src={img} alt={`koiostudio showcase screenshot ${idx + 7}`} />
          ))}
        </div>
      </div>
      <div className="portfolio-home-view-projects-container">
        <Link to="/portfolio/websites" className="portfolio-primary-button" aria-label="View all portfolio projects">
          <div className="portfolio-primary-button-background"></div>
          <p>View Projects</p>
        </Link>
      </div>
    </div>
  );
}

export default ViewProjects;
