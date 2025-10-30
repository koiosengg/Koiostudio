import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Stars from "../../assets/Home/Stories/Stars.png";

function Stories() {
  const [searchTerm, setSearchTerm] = useState("");
  const [projectCount, setProjectCount] = useState(1);
  const [hasCounted, setHasCounted] = useState(false);
  const projectRef = useRef(null);

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
          let start = 1;
          const end = 54;
          const duration = 5000;
          const stepTime = Math.abs(Math.floor(duration / (end - start)));
          const counter = setInterval(() => {
            setProjectCount((prev) => {
              if (prev < end) return prev + 1;
              clearInterval(counter);
              return end;
            });
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (projectRef.current) observer.observe(projectRef.current);

    return () => {
      if (projectRef.current) observer.unobserve(projectRef.current);
    };
  }, [hasCounted]);

  return (
    <section className="home-stories">
      <img src={Stars} className="home-stories-stars" />

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
            id="seacrh"
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

      <div className="home-stories-right">
        <div className="home-stories-right-text">
          <h2>Our Success Stories</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
            sed mauris ut et
          </p>
        </div>
        <div className="home-stories-right-numbers">
          <div className="home-stories-right-numbers-set">
            <h3>37</h3>
            <p>Clients</p>
          </div>

          <div className="home-stories-right-numbers-set" ref={projectRef}>
            <h3>{projectCount < 10 ? `0${projectCount}` : projectCount}</h3>
            <p>Projects</p>
          </div>

          <div className="home-stories-right-numbers-set">
            <h3>45</h3>
            <p>Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stories;
