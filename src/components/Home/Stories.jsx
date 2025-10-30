import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Stars from "../../assets/Home/Stories/Stars.png";

function Stories() {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    team: 0,
  });
  const [hasCounted, setHasCounted] = useState(false);
  const numberSectionRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const pages = [
    {
      title: "Website Development",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
    {
      title: "Website Design",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
    {
      title: "App Development",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
    {
      title: "Company Branding",
      desc: "Responsive, UI/UX, Web design",
      link: "/",
    },
  ];

  const filteredPages = pages.filter((page) =>
    page.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasCounted) {
          setHasCounted(true);

          const targets = { clients: 37, projects: 54, team: 45 };
          const duration = 3000;
          const steps = 60;
          const intervalTime = duration / steps;
          let step = 0;

          const counter = setInterval(() => {
            step++;
            setCounts({
              clients: Math.min(
                Math.floor((targets.clients / steps) * step),
                targets.clients
              ),
              projects: Math.min(
                Math.floor((targets.projects / steps) * step),
                targets.projects
              ),
              team: Math.min(
                Math.floor((targets.team / steps) * step),
                targets.team
              ),
            });

            if (step >= steps) clearInterval(counter);
          }, intervalTime);
        }
      },
      { threshold: 0.5 }
    );

    if (numberSectionRef.current) observer.observe(numberSectionRef.current);

    return () => {
      if (numberSectionRef.current)
        observer.unobserve(numberSectionRef.current);
    };
  }, [hasCounted]);

  return (
    <section className="home-stories">
      <img src={Stars} className="home-stories-stars" alt="Stars" />

      <div className="home-stories-left">
        <div className="home-stories-left-text">
          <h2>We Got You Covered</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et
          </p>
        </div>

        <div className="home-stories-left-search">
          <input
            id="search"
            type="text"
            placeholder="Search pages..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="home-stories-left-search-container no-scrollbar">
            {filteredPages.length > 0 ? (
              filteredPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.link}
                  className="home-stories-left-search-set"
                >
                  <h3>{page.title}</h3>
                  <p>{page.desc}</p>
                </Link>
              ))
            ) : (
              <div className="home-stories-left-search-set">
                <p>No results found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="home-stories-right" ref={numberSectionRef}>
        <div className="home-stories-right-text">
          <h2>Our Success Stories</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et
          </p>
        </div>

        <div className="home-stories-right-numbers">
          <div className="home-stories-right-numbers-set">
            <h3>{counts.clients}</h3>
            <p>Clients</p>
          </div>

          <div className="home-stories-right-numbers-set">
            <h3>
              {counts.projects < 10 ? `0${counts.projects}` : counts.projects}
            </h3>
            <p>Projects</p>
          </div>

          <div className="home-stories-right-numbers-set">
            <h3>{counts.team}</h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
