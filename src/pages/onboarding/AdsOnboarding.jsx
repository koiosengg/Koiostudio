import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ADS_ONBOARDING_ENDPOINT } from "@/config/api";
import "@/components/Onboarding/Onboarding.css";

const CAMPAIGN_GOALS = [
  "Generate Leads",
  "Increase Sales",
  "Website Traffic",
  "Brand Awareness",
  "App Installs",
  "Store Visits",
  "Phone Calls",
  "WhatsApp Messages",
  "Form Submissions",
  "Catalogue Sales",
  "Video Views",
];

const CURRENT_CHANNELS = [
  "Google Ads",
  "Facebook Ads",
  "Instagram Ads",
  "SEO",
  "LinkedIn Ads",
  "Email Marketing",
  "WhatsApp Marketing",
  "Influencer Marketing",
  "Organic Social Media",
];

const CREATIVE_ASSETS_LIST = [
  "Logo Files",
  "Brand Guidelines",
  "Product Images",
  "Brand Videos / Reels",
  "Testimonials & Reviews",
  "Brochures / Catalogues",
  "Case Studies",
  "Brand Fonts & Color Codes",
  "Existing Ad Creatives",
  "Landing Pages",
];

const GOOGLE_ACCESS_LIST = [
  "Google Ads",
  "Google Analytics 4 (GA4)",
  "Google Tag Manager (GTM)",
  "Google Search Console",
  "Google Merchant Center",
  "Google Business Profile",
  "YouTube Channel",
];

const META_ACCESS_LIST = [
  "Meta Business Manager",
  "Facebook Page",
  "Instagram Account",
  "Ad Account",
  "Meta Pixel",
  "Product Catalogue",
  "WhatsApp Business API",
];

const CMS_OPTIONS = [
  "WordPress / WooCommerce",
  "Shopify",
  "Wix",
  "Custom / React / Next.js",
  "Other",
];

const REPORTING_FREQ = ["Weekly", "Fortnightly", "Monthly"];

const STEPS = [
  { id: 1, name: "Business Info" },
  { id: 2, name: "Objectives & Audience" },
  { id: 3, name: "Budget & Strategy" },
  { id: 4, name: "Assets, Tracking & KPIs" },
];

const INITIAL_FORM = {
  // Step 1: Business Information
  businessName: "",
  website: "",
  industry: "",
  businessAddress: "",
  contactPerson: "",
  designation: "",
  phone: "",
  email: "",
  gstNumber: "",
  businessOverview: "",

  // Step 2: Objectives & Audience
  campaignGoals: [],
  primaryObjectiveDetails: "",
  targetAge: "",
  targetGender: "All genders",
  targetLocations: "",
  targetLanguages: "",
  targetInterests: "",
  targetIncomeGroup: "",
  competitors: "",
  productsToAdvertise: "",

  // Step 3: Budget & Strategy
  googleAdsBudget: "",
  metaAdsBudget: "",
  dailyBudgetPreference: "",
  expectedCampaignDuration: "",
  currentChannels: [],
  previousAdExperience: "No",
  previousAdDetails: "",
  usp: "",
  currentOffers: "",

  // Step 4: Assets, Tracking & KPIs
  creativeAssets: [],
  googleAccess: [],
  metaAccess: [],
  cms: "",
  cmsOther: "",
  websiteLogin: "",
  trackingSetup: [],
  leadManagement: "",
  targetCPL: "",
  targetROAS: "",
  monthlyLeadTarget: "",
  reportingFrequency: "Weekly",
  additionalNotes: "",
  acceptedTerms: false,
};

function AdsOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Meta & Google Ads Client Onboarding | Koiostudio";
    window.scrollTo({ top: 0, behavior: "smooth" });

    const cached = sessionStorage.getItem("koios_client_info");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setFormData((prev) => ({
          ...prev,
          businessName: prev.businessName || parsed.companyName || "",
          contactPerson: prev.contactPerson || parsed.contactPerson || "",
          email: prev.email || parsed.email || "",
          phone: prev.phone || parsed.phone || "",
        }));
      } catch {
        // ignore
      }
    }
  }, [currentStep]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCheckboxArray = (field, value) => {
    setFormData((prev) => {
      const arr = prev[field] || [];
      const updated = arr.includes(value)
        ? arr.filter((item) => item !== value)
        : [...arr, value];
      return { ...prev, [field]: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      formType: "Meta & Google Ads Onboarding",
      ...formData,
      campaignGoals: formData.campaignGoals.join(", "),
      currentChannels: formData.currentChannels.join(", "),
      creativeAssets: formData.creativeAssets.join(", "),
      googleAccess: formData.googleAccess.join(", "),
      metaAccess: formData.metaAccess.join(", "),
      trackingSetup: formData.trackingSetup.join(", "),
    };

    try {
      await fetch(ADS_ONBOARDING_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage(
        "Failed to send onboarding submission. Please try again.",
      );
    }
  };

  return (
    <main className="onboarding-page">
      <div className="ob-container">
        {/* Header Banner */}
        <div className="ob-header-card">
          <div className="ob-top-badge-row">
            <div className="ob-step-indicator">
              Step <strong>{currentStep}</strong> of {STEPS.length}
            </div>
          </div>
          <h1 className="ob-form-title">Meta & Google Ads Client Onboarding</h1>
          <p className="ob-form-desc">
            Help us understand your business, campaign objectives, audience, and
            ad budgets so we can architect high-converting advertising
            campaigns.
          </p>

          <div className="ob-step-pills">
            {STEPS.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`ob-step-pill ${
                  currentStep === s.id
                    ? "active"
                    : currentStep > s.id
                      ? "completed"
                      : ""
                }`}
                onClick={() => setCurrentStep(s.id)}
              >
                {s.id}. {s.name}
              </button>
            ))}
          </div>

          <div className="ob-progress-container">
            <div className="ob-progress-track">
              <div
                className="ob-progress-fill"
                style={{ width: `${(currentStep / STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {status === "success" ? (
          <div className="ob-card ob-success-card">
            <div className="ob-success-icon">✓</div>
            <h2 className="ob-success-title">Onboarding Details Received!</h2>
            <p className="ob-success-desc">
              Thank you for completing the Ads Onboarding questionnaire. Our
              performance team will review your target audience, assets, and
              tracking setup to prepare your ad strategy.
            </p>
            <div
              style={{ display: "flex", gap: "14px", justifyContent: "center" }}
            >
              <Link to="/onboarding" className="ob-btn-primary">
                Back to Onboarding Portal
              </Link>
              <Link to="/" className="ob-btn-secondary">
                Go to Homepage
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="ob-section">
                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="businessName">
                    Business / Brand Name <span className="req">*</span>
                  </label>
                  <input
                    id="businessName"
                    name="businessName"
                    className="ob-input"
                    placeholder="E.g. Acme Corp"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="website">
                    Website URL <span className="req">*</span>
                  </label>
                  <input
                    id="website"
                    name="website"
                    type="url"
                    className="ob-input"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="industry">
                    Industry / Niche
                  </label>
                  <input
                    id="industry"
                    name="industry"
                    className="ob-input"
                    placeholder="E.g. E-commerce / Fashion / B2B SaaS"
                    value={formData.industry}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <label className="ob-q-title" htmlFor="contactPerson">
                        Contact Person <span className="req">*</span>
                      </label>
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        className="ob-input"
                        placeholder="Your full name"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="designation">
                        Designation / Role
                      </label>
                      <input
                        id="designation"
                        name="designation"
                        className="ob-input"
                        placeholder="Founder / Marketing Head"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <label className="ob-q-title" htmlFor="phone">
                        Phone / WhatsApp Number <span className="req">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="ob-input"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="email">
                        Official Email <span className="req">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="ob-input"
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="businessAddress">
                    Business Address / City & State
                  </label>
                  <input
                    id="businessAddress"
                    name="businessAddress"
                    className="ob-input"
                    placeholder="Bangalore, Karnataka, India"
                    value={formData.businessAddress}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="businessOverview">
                    Business Overview (2–5 sentences)
                  </label>
                  <div className="ob-q-subtext">
                    What products/services do you offer? What makes your
                    business different? Why do customers choose you?
                  </div>
                  <textarea
                    id="businessOverview"
                    name="businessOverview"
                    className="ob-textarea"
                    rows={4}
                    placeholder="Explain what you do and your core value proposition..."
                    value={formData.businessOverview}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-nav-row">
                  <Link to="/onboarding" className="ob-btn-secondary">
                    ← Portal Home
                  </Link>
                  <button
                    type="button"
                    className="ob-btn-primary"
                    onClick={() => {
                      if (
                        !formData.businessName ||
                        !formData.email ||
                        !formData.phone
                      ) {
                        alert(
                          "Please fill in the required business details first.",
                        );
                        return;
                      }
                      setCurrentStep(2);
                    }}
                  >
                    Next: Objectives & Audience →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">Primary Campaign Goals</div>
                  <div className="ob-q-subtext">
                    Select all objectives that apply to your current campaign
                    priorities.
                  </div>
                  <div className="ob-options-grid">
                    {CAMPAIGN_GOALS.map((goal) => (
                      <label
                        key={goal}
                        className={`ob-choice-card ${
                          formData.campaignGoals.includes(goal)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.campaignGoals.includes(goal)}
                          onChange={() =>
                            handleCheckboxArray("campaignGoals", goal)
                          }
                        />
                        <span>{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label
                    className="ob-q-title"
                    htmlFor="primaryObjectiveDetails"
                  >
                    Detailed Campaign Objective
                  </label>
                  <textarea
                    id="primaryObjectiveDetails"
                    name="primaryObjectiveDetails"
                    className="ob-textarea"
                    placeholder="Describe specific milestones (e.g. 200 leads/mo at <₹500 CPL)..."
                    value={formData.primaryObjectiveDetails}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Ideal Target Audience Demographics
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                      marginTop: "10px",
                    }}
                  >
                    <div>
                      <label className="ob-q-subtext" htmlFor="targetAge">
                        Target Age Bracket (e.g. 24–45)
                      </label>
                      <input
                        id="targetAge"
                        name="targetAge"
                        className="ob-input"
                        placeholder="22 - 45"
                        value={formData.targetAge}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="ob-q-subtext" htmlFor="targetGender">
                        Target Gender
                      </label>
                      <select
                        id="targetGender"
                        name="targetGender"
                        className="ob-input"
                        value={formData.targetGender}
                        onChange={handleChange}
                      >
                        <option value="All genders">All genders</option>
                        <option value="Men only">Men only</option>
                        <option value="Women only">Women only</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="targetLocations">
                    Target Geographic Locations (Cities / States / Countries /
                    Radius)
                  </label>
                  <input
                    id="targetLocations"
                    name="targetLocations"
                    className="ob-input"
                    placeholder="E.g. Metro Cities (Bangalore, Mumbai, Delhi-NCR) or Pan-India"
                    value={formData.targetLocations}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="targetInterests">
                    Audience Interests, Job Roles & Income Group
                  </label>
                  <textarea
                    id="targetInterests"
                    name="targetInterests"
                    className="ob-input"
                    rows={2}
                    placeholder="E.g. Startup founders, luxury buyers, fitness enthusiasts..."
                    value={formData.targetInterests}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="competitors">
                    Top Competitor Brands & Website Links
                  </label>
                  <textarea
                    id="competitors"
                    name="competitors"
                    className="ob-textarea"
                    rows={3}
                    placeholder="List 2-4 competitor names and URLs..."
                    value={formData.competitors}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="productsToAdvertise">
                    Products / Services to Advertise & Landing Pages
                  </label>
                  <textarea
                    id="productsToAdvertise"
                    name="productsToAdvertise"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Product name | Landing page URL | Priority (High/Medium/Low)"
                    value={formData.productsToAdvertise}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-nav-row">
                  <button
                    type="button"
                    className="ob-btn-secondary"
                    onClick={() => setCurrentStep(1)}
                  >
                    ← Previous Step
                  </button>
                  <button
                    type="button"
                    className="ob-btn-primary"
                    onClick={() => setCurrentStep(3)}
                  >
                    Next: Budget & Strategy →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <label className="ob-q-title" htmlFor="metaAdsBudget">
                        Meta (FB/Insta) Monthly Budget
                      </label>
                      <input
                        id="metaAdsBudget"
                        name="metaAdsBudget"
                        className="ob-input"
                        placeholder="E.g. ₹50,000 / month"
                        value={formData.metaAdsBudget}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="googleAdsBudget">
                        Google Ads Monthly Budget
                      </label>
                      <input
                        id="googleAdsBudget"
                        name="googleAdsBudget"
                        className="ob-input"
                        placeholder="E.g. ₹50,000 / month"
                        value={formData.googleAdsBudget}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Current Marketing Channels in Use
                  </div>
                  <div className="ob-options-grid">
                    {CURRENT_CHANNELS.map((ch) => (
                      <label
                        key={ch}
                        className={`ob-choice-card ${
                          formData.currentChannels.includes(ch)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.currentChannels.includes(ch)}
                          onChange={() =>
                            handleCheckboxArray("currentChannels", ch)
                          }
                        />
                        <span>{ch}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Have you previously run digital ads?
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "16px",
                      marginTop: "8px",
                      marginBottom: "14px",
                    }}
                  >
                    {["Yes", "No"].map((opt) => (
                      <label
                        key={opt}
                        className={`ob-choice-card ${
                          formData.previousAdExperience === opt
                            ? "selected"
                            : ""
                        }`}
                        style={{ padding: "8px 24px" }}
                      >
                        <input
                          type="radio"
                          name="previousAdExperience"
                          value={opt}
                          checked={formData.previousAdExperience === opt}
                          onChange={handleChange}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                  {formData.previousAdExperience === "Yes" && (
                    <textarea
                      name="previousAdDetails"
                      className="ob-textarea"
                      placeholder="Platforms used, past budget, results achieved, and key challenges faced..."
                      value={formData.previousAdDetails}
                      onChange={handleChange}
                      rows={3}
                    />
                  )}
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="usp">
                    Unique Selling Proposition (USP)
                  </label>
                  <div className="ob-q-subtext">
                    What makes your brand dramatically better or different than
                    alternatives?
                  </div>
                  <textarea
                    id="usp"
                    name="usp"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Your core differentiator..."
                    value={formData.usp}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="currentOffers">
                    Active Offers, Discounts or Hooks
                  </label>
                  <div className="ob-q-subtext">
                    (E.g., Free Consultation, 20% Off First Order, Buy 1 Get 1,
                    Free Trial)
                  </div>
                  <input
                    id="currentOffers"
                    name="currentOffers"
                    className="ob-input"
                    placeholder="E.g. Free 30-min strategy session + 15% Welcome Discount"
                    value={formData.currentOffers}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-nav-row">
                  <button
                    type="button"
                    className="ob-btn-secondary"
                    onClick={() => setCurrentStep(2)}
                  >
                    ← Previous Step
                  </button>
                  <button
                    type="button"
                    className="ob-btn-primary"
                    onClick={() => setCurrentStep(4)}
                  >
                    Next: Assets & KPIs →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">Available Creative Assets</div>
                  <div className="ob-q-subtext">
                    Select what assets you can provide:
                  </div>
                  <div className="ob-options-grid">
                    {CREATIVE_ASSETS_LIST.map((item) => (
                      <label
                        key={item}
                        className={`ob-choice-card ${
                          formData.creativeAssets.includes(item)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.creativeAssets.includes(item)}
                          onChange={() =>
                            handleCheckboxArray("creativeAssets", item)
                          }
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Accounts / Access You Can Grant
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                      marginTop: "10px",
                    }}
                  >
                    <div>
                      <div
                        className="ob-q-subtext"
                        style={{ fontWeight: 600, color: "#fff" }}
                      >
                        Google Assets:
                      </div>
                      <div className="ob-options-list">
                        {GOOGLE_ACCESS_LIST.map((acc) => (
                          <label
                            key={acc}
                            className={`ob-choice-card ${
                              formData.googleAccess.includes(acc)
                                ? "selected"
                                : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.googleAccess.includes(acc)}
                              onChange={() =>
                                handleCheckboxArray("googleAccess", acc)
                              }
                            />
                            <span>{acc}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div
                        className="ob-q-subtext"
                        style={{ fontWeight: 600, color: "#fff" }}
                      >
                        Meta Assets:
                      </div>
                      <div className="ob-options-list">
                        {META_ACCESS_LIST.map((acc) => (
                          <label
                            key={acc}
                            className={`ob-choice-card ${
                              formData.metaAccess.includes(acc)
                                ? "selected"
                                : ""
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={formData.metaAccess.includes(acc)}
                              onChange={() =>
                                handleCheckboxArray("metaAccess", acc)
                              }
                            />
                            <span>{acc}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">Website Platform / CMS</div>
                  <div className="ob-options-grid">
                    {CMS_OPTIONS.map((c) => (
                      <label
                        key={c}
                        className={`ob-choice-card ${
                          formData.cms === c ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="cms"
                          value={c}
                          checked={formData.cms === c}
                          onChange={handleChange}
                        />
                        <span>{c}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "14px",
                    }}
                  >
                    <div>
                      <label className="ob-q-title" htmlFor="targetCPL">
                        Target Cost Per Lead (CPL) / CPA
                      </label>
                      <input
                        id="targetCPL"
                        name="targetCPL"
                        className="ob-input"
                        placeholder="E.g. Under ₹400 per qualified lead"
                        value={formData.targetCPL}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="targetROAS">
                        Target ROAS (Return on Ad Spend)
                      </label>
                      <input
                        id="targetROAS"
                        name="targetROAS"
                        className="ob-input"
                        placeholder="E.g. 3.5x - 5x"
                        value={formData.targetROAS}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Preferred Reporting Frequency
                  </div>
                  <div className="ob-options-grid">
                    {REPORTING_FREQ.map((rf) => (
                      <label
                        key={rf}
                        className={`ob-choice-card ${
                          formData.reportingFrequency === rf ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="reportingFrequency"
                          value={rf}
                          checked={formData.reportingFrequency === rf}
                          onChange={handleChange}
                        />
                        <span>{rf}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="additionalNotes">
                    Additional Notes / Instructions
                  </label>
                  <textarea
                    id="additionalNotes"
                    name="additionalNotes"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Anything else our ad strategy team should know..."
                    value={formData.additionalNotes}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label
                    className="ob-choice-card selected"
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      type="checkbox"
                      name="acceptedTerms"
                      checked={formData.acceptedTerms}
                      onChange={handleChange}
                      required
                    />
                    <span style={{ fontSize: "0.88rem", lineHeight: "1.5" }}>
                      I confirm that the shared information is accurate and
                      agree that ad performance and timeline depend on prompt
                      asset sharing, account access, and market dynamics.{" "}
                      <span className="req">*</span>
                    </span>
                  </label>
                </div>

                {errorMessage && (
                  <div
                    style={{
                      color: "#ef4444",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

                <div className="ob-nav-row">
                  <button
                    type="button"
                    className="ob-btn-secondary"
                    onClick={() => setCurrentStep(3)}
                  >
                    ← Previous Step
                  </button>
                  <button
                    type="submit"
                    className="ob-btn-primary"
                    disabled={
                      status === "submitting" || !formData.acceptedTerms
                    }
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="ob-spinner" />
                        <span>Submitting Onboarding...</span>
                      </>
                    ) : (
                      <span>Complete & Submit Questionnaire ✓</span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </main>
  );
}

export default AdsOnboarding;
