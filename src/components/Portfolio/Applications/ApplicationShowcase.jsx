import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../../../assets/Portfolio/Section Heading Design.webp";

// Sample app screens matching the screenshot style
const screens = [
  {
    id: 1,
    title: "Travel & Stay",
    content: (
      <div className="phone-screen-content travel-app">
        <div className="phone-status-bar">
          <span>9:41</span>
          <div className="phone-icons">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
              <path d="M0 8h2v2H0V8zm3-3h2v5H3V5zm3-3h2v8H6V2zm3-2h2v10H9V0z" />
            </svg>
          </div>
        </div>
        <div className="phone-nav-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="app-header">
          <p className="greeting">Hi Rishab,</p>
          <h3>What’s on your mind?</h3>
        </div>
        <div className="search-bar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span>Search destination</span>
        </div>
        <div className="main-card">
          <img
            src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=600&q=80"
            alt="Dehradun Camping"
          />
          <div className="card-overlay">
            <h4>Dehradun, India</h4>
          </div>
        </div>
        <div className="grid-cards">
          <div className="sub-card">
            <img
              src="https://images.unsplash.com/photo-1514222709107-a180c68d72b4?auto=format&fit=crop&w=300&q=80"
              alt="Diwali"
            />
            <div className="sub-card-text">
              <h5>Diwali</h5>
              <p>25 Oct - 28 Oct</p>
            </div>
          </div>
          <div className="sub-card">
            <img
              src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=300&q=80"
              alt="Long Weekends"
            />
            <div className="sub-card-text">
              <h5>Long Weekends?</h5>
            </div>
          </div>
        </div>
        <div className="guests-bar">
          <span>Guests</span>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "E-Commerce Store",
    content: (
      <div className="phone-screen-content shop-app">
        <div className="phone-status-bar">
          <span>9:41</span>
          <div className="phone-icons">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
              <path d="M0 8h2v2H0V8zm3-3h2v5H3V5zm3-3h2v8H6V2zm3-2h2v10H9V0z" />
            </svg>
          </div>
        </div>
        <div className="phone-nav-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="app-header">
          <p className="greeting">Exclusive Drop</p>
          <h3>Urban Streetwear</h3>
        </div>
        <div className="main-card">
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80"
            alt="Fashion Apparel"
          />
          <div className="card-overlay">
            <h4>Autumn Collection '26</h4>
          </div>
        </div>
        <div className="grid-cards">
          <div className="sub-card">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80"
              alt="Sneakers"
            />
            <div className="sub-card-text">
              <h5>Sneakers</h5>
              <p>$180</p>
            </div>
          </div>
          <div className="sub-card">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80"
              alt="Watches"
            />
            <div className="sub-card-text">
              <h5>Accessories</h5>
              <p>$240</p>
            </div>
          </div>
        </div>
        <div className="guests-bar shop-btn">
          <span>Add To Cart</span>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Food & Dining",
    content: (
      <div className="phone-screen-content food-app">
        <div className="phone-status-bar">
          <span>9:41</span>
          <div className="phone-icons">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
              <path d="M0 8h2v2H0V8zm3-3h2v5H3V5zm3-3h2v8H6V2zm3-2h2v10H9V0z" />
            </svg>
          </div>
        </div>
        <div className="phone-nav-back">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </div>
        <div className="app-header">
          <p className="greeting">Delivering To</p>
          <h3>Indiranagar, Blr 📍</h3>
        </div>
        <div className="main-card">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80"
            alt="Artisanal Pizza"
          />
          <div className="card-overlay">
            <h4>Artisanal Pizza • 20 mins</h4>
          </div>
        </div>
        <div className="grid-cards">
          <div className="sub-card">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=300&q=80"
              alt="Gourmet Burger"
            />
            <div className="sub-card-text">
              <h5>Burgers</h5>
              <p>4.9 ★</p>
            </div>
          </div>
          <div className="sub-card">
            <img
              src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=300&q=80"
              alt="Desserts"
            />
            <div className="sub-card-text">
              <h5>Desserts</h5>
              <p>4.8 ★</p>
            </div>
          </div>
        </div>
        <div className="guests-bar">
          <span>Order Now</span>
        </div>
      </div>
    ),
  },
];

function ApplicationShowcase() {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  return (
    <div className="portfolio-applications-showcase">
      <div className="portfolio-applications-showcase-left">
        <div className="portfolio-section-heading">
          <img
            src={HeadingDesign}
            className="portfolio-section-heading-img"
            alt="Decorative heading design"
          />
          <h2>
            Your <span>Application</span> - Designed To Impress
          </h2>
          <p className="desc">
            Every application is crafted with attention to detail, combining
            intuitive functionality with striking design. The result is a
            digital experience that not only meets needs but leaves a lasting
            impression on every user.
          </p>

          <Link
            to="/portfolio/applications"
            className="portfolio-primary-button"
            aria-label="View all applications"
          >
            <div className="portfolio-primary-button-background"></div>
            <p>
              View All{" "}
              <svg
                width="14"
                height="10"
                viewBox="0 0 14 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "8px", display: "inline-block" }}
              >
                <path
                  d="M9 1L13 5M13 5L9 9M13 5H1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>
          </Link>
        </div>

        <div className="portfolio-applications-magic-section">
          <div className="magic-label-row">
            <svg
              className="magic-arrow-svg"
              width="45"
              height="35"
              viewBox="0 0 45 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 5 C 15 25, 25 30, 40 25"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                fill="none"
              />
              <path
                d="M34 20 L 40 25 L 35 30"
                stroke="#ffffff"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
            <span className="magic-text">
              Click for <span>✨Magic✨</span>
            </span>
          </div>

          <div className="portfolio-applications-thumbnails">
            {screens.map((screen, idx) => (
              <div
                key={screen.id}
                className={`portfolio-applications-thumb ${
                  activeScreenIndex === idx ? "active" : ""
                }`}
                onClick={() => setActiveScreenIndex(idx)}
                title={screen.title}
              >
                <div className="thumb-preview-mini">
                  {screen.id === 1 && (
                    <img
                      src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=200&q=80"
                      alt="Travel Screen"
                    />
                  )}
                  {screen.id === 2 && (
                    <img
                      src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=200&q=80"
                      alt="Shop Screen"
                    />
                  )}
                  {screen.id === 3 && (
                    <img
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=200&q=80"
                      alt="Food Screen"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="portfolio-applications-showcase-right">
        <div className="phone-mockup-frame">
          <div className="phone-mockup-notch"></div>
          <div className="phone-mockup-screen">
            {screens[activeScreenIndex].content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationShowcase;
