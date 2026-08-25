import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CONNECTIONS_SHEET_ENDPOINT } from "@/config/api";

const LOCATIONS_OPTIONS = [
  "Local (same city)",
  "Karnataka",
  "Pan India",
  "International (Online)",
  "International (On-ground)",
  "Other",
];

const CATEGORY_OPTIONS = [
  "Branding",
  "UI UX",
  "Website / App Development",
  "Marketing",
  "Photography / Videography",
  "Consulting",
  "Coaching / Training",
  "Design Services",
  "Manufacturing",
  "Tech / SaaS",
  "Recruiting / HR",
  "Health & Wellness",
  "Finance",
  "Legal",
  "Baking",
  "Gifting",
  "Food Industry / Hospitality",
  "Other",
];

const TEAM_OPTIONS = [
  "Solo",
  "Small team ( 2- 8 )",
  "Full-scale agency",
  "Depends on the project",
  "Other",
];

const REFERRAL_OPTIONS = [
  "Yes, absolutely",
  "Yes, but only when relevant",
  "Not right now",
];

const INITIAL_STATE = {
  fullName: "",
  email: "",
  whatsapp: "",
  phone: "",
  sameAsWhatsapp: false,
  state: "",
  city: "",
  companyName: "",
  locationsServed: "",
  locationsServedOther: "",
  servicesOffered: "",
  category: "",
  categoryOther: "",
  keywords: "",
  teamSetup: "",
  teamSetupOther: "",
  targetClients: "",
  openForReferrals: "",
  referralTypes: "",
  portfolioLinks: "",
  introPitch: "",
};

function ConnectionsForm() {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "sameAsWhatsapp") {
      setFormData((prev) => ({
        ...prev,
        sameAsWhatsapp: checked,
        phone: checked ? prev.whatsapp : prev.phone,
      }));
    } else if (name === "whatsapp" && formData.sameAsWhatsapp) {
      setFormData((prev) => ({
        ...prev,
        whatsapp: value,
        phone: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleRadioSelect = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Prepare payload, substituting "Other" values if selected
    const payload = {
      ...formData,
      locationsServed:
        formData.locationsServed === "Other" && formData.locationsServedOther
          ? `Other: ${formData.locationsServedOther}`
          : formData.locationsServed,
      category:
        formData.category === "Other" && formData.categoryOther
          ? `Other: ${formData.categoryOther}`
          : formData.category,
      teamSetup:
        formData.teamSetup === "Other" && formData.teamSetupOther
          ? `Other: ${formData.teamSetupOther}`
          : formData.teamSetup,
    };

    try {
      await fetch(CONNECTIONS_SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage("Something went wrong while sending your submission. Please try again.");
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_STATE);
    setStatus("idle");
    setErrorMessage("");
  };

  return (
    <div className="conn-form-container">
      {/* Header Card matching Google Form description */}
      <div className="conn-form-header-card">
        <div className="conn-header-accent-bar" />
        <div className="conn-badge">
          <span className="conn-pulse-dot" />
          <span>Mahi's Circle</span>
        </div>
        <h1 className="conn-form-main-title">
          Mahi’s Circle – Trusted Connections & Referrals
        </h1>
        <div className="conn-form-main-desc">
          <p>Welcome to Mahi’s Circle.</p>
          <p>
            I use this space to understand what you do, what you offer, and how I can introduce you to the right people when opportunities show up.
          </p>
          <p>
            Share your details, your services, and anything you want others in the network to know about you.
          </p>
          <p>
            <strong>My goal is simple:</strong> help great people meet other great people.
          </p>
        </div>
        <div className="conn-required-indicator">* Indicates required question</div>
      </div>

      {status === "success" ? (
        <div className="conn-question-card conn-success-card">
          <div className="conn-success-icon">
            <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h2 className="conn-success-title">Your response has been recorded.</h2>
          <p className="conn-success-desc">
            Thank you for sharing your details. When an aligned opportunity shows up, we'll reach out directly.
          </p>
          <div className="conn-success-actions">
            <button onClick={resetForm} className="conn-btn-primary">
              Submit another response
            </button>
            <Link to="/" className="conn-btn-secondary">
              Back to Koiostudio
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="conn-questions-list">
          {/* Question 1: Full Name */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="fullName">
              Full Name <span className="req">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Your answer"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="conn-input"
            />
          </div>

          {/* Question 2: Company Email */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="email">
              Company Email Address <span className="req">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your answer"
              value={formData.email}
              onChange={handleChange}
              required
              className="conn-input"
            />
          </div>

          {/* Question 3: WhatsApp Phone Number */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="whatsapp">
              Whatsapp Phone Number <span className="req">*</span>
            </label>
            <input
              id="whatsapp"
              name="whatsapp"
              type="tel"
              placeholder="Your answer"
              value={formData.whatsapp}
              onChange={handleChange}
              required
              className="conn-input"
            />
          </div>

          {/* Question 4: Phone number to call */}
          <div className="conn-question-card">
            <div className="conn-q-title-row">
              <label className="conn-q-title" htmlFor="phone">
                Phone number to call
              </label>
              <label className="conn-checkbox-toggle">
                <input
                  type="checkbox"
                  name="sameAsWhatsapp"
                  checked={formData.sameAsWhatsapp}
                  onChange={handleChange}
                />
                Same as WhatsApp
              </label>
            </div>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your answer"
              value={formData.phone}
              onChange={handleChange}
              disabled={formData.sameAsWhatsapp}
              className="conn-input"
            />
          </div>

          {/* Question 5: State */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="state">
              Which state do you operate from?
            </label>
            <div className="conn-q-subtext">Example : Karnataka etc.</div>
            <input
              id="state"
              name="state"
              type="text"
              placeholder="Your answer"
              value={formData.state}
              onChange={handleChange}
              className="conn-input"
            />
          </div>

          {/* Question 6: City */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="city">
              Which city do work from ?
            </label>
            <div className="conn-q-subtext">
              Example : Bangalore, Delhi, Pune, Hyderabad etc.
            </div>
            <input
              id="city"
              name="city"
              type="text"
              placeholder="Your answer"
              value={formData.city}
              onChange={handleChange}
              className="conn-input"
            />
          </div>

          {/* Question 7: Company / Brand Name */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="companyName">
              Your Company / Brand Name ( If you have multiple verticals - you can fill this form again with that particular vertical) <span className="req">*</span>
            </label>
            <input
              id="companyName"
              name="companyName"
              type="text"
              placeholder="Your answer"
              value={formData.companyName}
              onChange={handleChange}
              required
              className="conn-input"
            />
          </div>

          {/* Question 8: Locations served */}
          <div className="conn-question-card">
            <div className="conn-q-title">What locations do you serve?</div>
            <div className="conn-options-list">
              {LOCATIONS_OPTIONS.map((opt) => (
                <label key={opt} className="conn-radio-label">
                  <input
                    type="radio"
                    name="locationsServed"
                    value={opt}
                    checked={formData.locationsServed === opt}
                    onChange={() => handleRadioSelect("locationsServed", opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
              {formData.locationsServed === "Other" && (
                <input
                  type="text"
                  name="locationsServedOther"
                  placeholder="Please specify other location"
                  value={formData.locationsServedOther}
                  onChange={handleChange}
                  className="conn-input conn-input-other"
                />
              )}
            </div>
          </div>

          {/* Question 9: Services/Products Offered */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="servicesOffered">
              What do you offer? ( Services/Products)
            </label>
            <textarea
              id="servicesOffered"
              name="servicesOffered"
              placeholder="Your answer"
              value={formData.servicesOffered}
              onChange={handleChange}
              rows={3}
              className="conn-textarea"
            />
          </div>

          {/* Question 10: Business Category */}
          <div className="conn-question-card">
            <div className="conn-q-title">Select your business category</div>
            <div className="conn-options-grid">
              {CATEGORY_OPTIONS.map((cat) => (
                <label key={cat} className="conn-radio-label">
                  <input
                    type="radio"
                    name="category"
                    value={cat}
                    checked={formData.category === cat}
                    onChange={() => handleRadioSelect("category", cat)}
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
            {formData.category === "Other" && (
              <input
                type="text"
                name="categoryOther"
                placeholder="Please specify other category"
                value={formData.categoryOther}
                onChange={handleChange}
                className="conn-input conn-input-other"
              />
            )}
          </div>

          {/* Question 11: Keywords */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="keywords">
              Keywords that describe what you do.
            </label>
            <div className="conn-q-subtext">
              Example: branding, reels, social media, content writing, fitness coaching, etc.
            </div>
            <textarea
              id="keywords"
              name="keywords"
              placeholder="Your answer"
              value={formData.keywords}
              onChange={handleChange}
              rows={2}
              className="conn-textarea"
            />
          </div>

          {/* Question 12: Team Setup */}
          <div className="conn-question-card">
            <div className="conn-q-title">Do you work solo or with a team?</div>
            <div className="conn-options-list">
              {TEAM_OPTIONS.map((opt) => (
                <label key={opt} className="conn-radio-label">
                  <input
                    type="radio"
                    name="teamSetup"
                    value={opt}
                    checked={formData.teamSetup === opt}
                    onChange={() => handleRadioSelect("teamSetup", opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
              {formData.teamSetup === "Other" && (
                <input
                  type="text"
                  name="teamSetupOther"
                  placeholder="Please specify"
                  value={formData.teamSetupOther}
                  onChange={handleChange}
                  className="conn-input conn-input-other"
                />
              )}
            </div>
          </div>

          {/* Question 13: Target Audience */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="targetClients">
              Who do you usually work with?
            </label>
            <div className="conn-q-subtext">
              (Example: startups, e-commerce brands, founders, real estate, corporate teams, etc.)
            </div>
            <textarea
              id="targetClients"
              name="targetClients"
              placeholder="Your answer"
              value={formData.targetClients}
              onChange={handleChange}
              rows={2}
              className="conn-textarea"
            />
          </div>

          {/* Question 14: Open for referrals */}
          <div className="conn-question-card">
            <div className="conn-q-title">Are you open for referrals?</div>
            <div className="conn-options-list">
              {REFERRAL_OPTIONS.map((opt) => (
                <label key={opt} className="conn-radio-label">
                  <input
                    type="radio"
                    name="openForReferrals"
                    value={opt}
                    checked={formData.openForReferrals === opt}
                    onChange={() => handleRadioSelect("openForReferrals", opt)}
                  />
                  <span>{opt}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Question 15: Referral Types */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="referralTypes">
              What type of referrals are you looking for?
            </label>
            <textarea
              id="referralTypes"
              name="referralTypes"
              placeholder="Your answer"
              value={formData.referralTypes}
              onChange={handleChange}
              rows={3}
              className="conn-textarea"
            />
          </div>

          {/* Question 16: Links */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="portfolioLinks">
              Your Website / Portfolio / LinkedIn Link
            </label>
            <div className="conn-q-subtext">(Add as many links as you want)</div>
            <textarea
              id="portfolioLinks"
              name="portfolioLinks"
              placeholder="Your answer"
              value={formData.portfolioLinks}
              onChange={handleChange}
              rows={2}
              className="conn-textarea"
            />
          </div>

          {/* Question 17: Elevator Pitch */}
          <div className="conn-question-card">
            <label className="conn-q-title" htmlFor="introPitch">
              If I introduces you to someone amazing, how should they introduce you?
            </label>
            <textarea
              id="introPitch"
              name="introPitch"
              placeholder="Your answer"
              value={formData.introPitch}
              onChange={handleChange}
              rows={3}
              className="conn-textarea"
            />
          </div>

          {errorMessage && (
            <div style={{ color: "#ef4444", fontSize: "0.95rem", textAlign: "center", marginBottom: "16px" }}>
              {errorMessage}
            </div>
          )}

          {/* Submit Action Block */}
          <div className="conn-form-submit-row">
            <button
              type="submit"
              className="conn-btn-primary conn-submit-btn"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? (
                <>
                  <span className="conn-spinner" />
                  <span>Submitting...</span>
                </>
              ) : (
                <span>Submit</span>
              )}
            </button>
            <button
              type="button"
              className="conn-clear-btn"
              onClick={resetForm}
            >
              Clear form
            </button>
          </div>

          <p className="conn-privacy-note">
            Never submit passwords through this form.
          </p>
        </form>
      )}
    </div>
  );
}

export default ConnectionsForm;
