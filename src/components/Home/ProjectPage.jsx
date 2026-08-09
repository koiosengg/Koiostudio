import React from "react";
import { Link } from "react-router-dom";
import HeadingDesign from "../../assets/Portfolio/Section Heading Design.webp";
import Projects from "@/components/Portfolio/Websites/Projects";

/**
 * Reusable project detail page template used by all individual project pages.
 * Props:
 *   - category: "Website" | "Application" | "Branding"
 *   - title: project name
 *   - industry: e.g. "Human Resources"
 *   - websiteUrl: optional external link
 *   - cover: cover image src
 *   - overview, challenges, approach, results: text strings
 *   - developmentStrategies: text (optional for branding)
 *   - images: array of image srcs (branding) or [[row1...], [row2...]] (standard)
 *   - isBranding: use branding-specific gallery layout
 */
function ProjectPage({
  category,
  title,
  industry,
  websiteUrl,
  cover,
  overview,
  challenges,
  approach,
  results,
  developmentStrategies,
  images = [],
  isBranding = false,
}) {
  return (
    <div className="portfolio portfolio-projects">
      {/* Banner */}
      <div className="portfolio-projects-banner" id="portfolio-project-banner">
        <div className="portfolio-home-banner-container">
          <section>
            <h2>{category}</h2>
            <h1>
              <span>{title}</span>
            </h1>
            <p>{industry}</p>
          </section>
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-primary-button"
              aria-label={`Visit ${title} live website`}
            >
              <div className="portfolio-primary-button-background"></div>
              <p>Visit Website</p>
            </a>
          )}
        </div>
      </div>

      {/* Cover */}
      <div className="portfolio-projects-cover">
        <img src={cover} alt={`${title} project cover image`} />
      </div>

      {/* Design Secrets */}
      <div className="portfolio-projects-info-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" alt="Decorative section heading accent design" />
          <h2>
            <span>Design </span>Secrets
          </h2>
        </div>
        <div className="portfolio-projects-info">
          <div className="portfolio-projects-info-set">
            <h2>Overview</h2>
            <p>{overview}</p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Challenges</h2>
            <p>{challenges}</p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Approach</h2>
            <p>{approach}</p>
          </div>
          <div className="portfolio-projects-info-set">
            <h2>Results</h2>
            <p>{results}</p>
          </div>
        </div>
      </div>

      {/* Development Strategies */}
      <div className="portfolio-projects-info-container">
        <div className="portfolio-section-heading">
          <img src={HeadingDesign} className="portfolio-section-heading-img" alt="Decorative section heading accent design" />
          <h2>
            <span>Development </span>Strategies
          </h2>
          <p>{developmentStrategies}</p>
        </div>
      </div>

      {/* Wireframes / Branding Gallery */}
      {images.length > 0 && (
        <div className="portfolio-projects-gallery">
          {!isBranding && (
            <div className="portfolio-section-heading">
              <img src={HeadingDesign} className="portfolio-section-heading-img" alt="Decorative section heading accent design" />
              <h2>Wireframes</h2>
            </div>
          )}
          {isBranding ? (
            <div className="portfolio-projects-gallery-container branding">
              {images.map((imgSrc, imgIdx) => {
                if (Array.isArray(imgSrc)) {
                  return (
                    <section key={imgIdx}>
                      {imgSrc.map((s, i) => (
                        <img key={i} src={s} alt={`${title} brand design preview ${i + 1}`} />
                      ))}
                    </section>
                  );
                }
                return <img key={imgIdx} src={imgSrc} alt={`${title} brand design preview ${imgIdx + 1}`} />;
              })}
            </div>
          ) : (
            <div className="portfolio-projects-gallery-container">
              {images.map((row, rowIdx) => (
                <section key={rowIdx}>
                  {row.map((imgSrc, imgIdx) => (
                    <img key={imgIdx} src={imgSrc} alt={`${title} wireframe design preview ${rowIdx + 1}-${imgIdx + 1}`} />
                  ))}
                </section>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Other Projects */}
      <Projects heading="Other Projects" currentProjectTitle={title} />
    </div>
  );
}

export default ProjectPage;
