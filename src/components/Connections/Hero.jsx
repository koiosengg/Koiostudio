import React from "react";

function Hero() {
  const scrollToForm = (e) => {
    e.preventDefault();
    const formElement = document.getElementById("rolodex-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="conn-hero">
      <div className="conn-hero-grid">
        <div className="conn-hero-content">
          <div className="conn-badge">
            <span className="conn-pulse-dot" />
            <span>Mahi's Circle • Trusted Referrals</span>
          </div>

          <h1 className="conn-hero-title">
            Help me refer <em>you</em>.
          </h1>

          <p className="conn-hero-desc">
            When someone in my network asks, <strong>"Do you know someone great who does this?"</strong>,
            I want to be able to recommend you instantly. Share your details, services, and ideal clients
            so I can connect you with the right opportunities.
          </p>

          <div className="conn-hero-actions">
            <a href="#rolodex-form" onClick={scrollToForm} className="conn-btn-primary">
              Join the Circle
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
            <a href="#how-it-works" className="conn-btn-secondary">
              How It Works
            </a>
          </div>
        </div>

        <div className="conn-quote-card">
          <p className="conn-quote-text">
            "The most direct path to meaningful collaboration starts with knowing <em>exactly</em> who you are and what you excel at."
          </p>
          <div className="conn-quote-author">
            <div className="conn-author-avatar">M</div>
            <div className="conn-author-info">
              <h4>Mahi</h4>
              <p>Koiostudio & Trusted Network</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
