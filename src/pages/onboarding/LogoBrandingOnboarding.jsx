import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BRANDING_ONBOARDING_ENDPOINT } from "@/config/api";
import "@/components/Onboarding/Onboarding.css";

const PERSONALITY_TAGS = [
  "Elegant",
  "Premium",
  "Minimal",
  "Playful",
  "Modern",
  "Vintage",
  "Cute",
  "Artistic",
  "Bold",
  "Luxury",
  "Traditional",
  "Experimental",
  "Friendly",
  "Sophisticated",
  "Youthful",
  "Warm & Cozy",
  "Organic & Natural",
  "Authentic",
];

const LOGO_TYPES = [
  "Wordmark (Text only)",
  "Lettermark (Initials/Monogram)",
  "Icon-based (Symbol + Text)",
  "Mascot Logo (Character)",
  "Minimalist Logo",
  "Emblem / Crest / Badge",
  "Combination Mark",
  "Abstract Logo",
  "Luxury Typography",
  "Handwritten / Signature Style",
  "Modern Geometric",
  "Unsure / Open to Suggestions",
];

const LOGO_FEEL_TAGS = [
  "Minimal",
  "Detailed",
  "Bold",
  "Soft",
  "Feminine",
  "Masculine",
  "Elegant",
  "Cute",
  "Fun",
  "Premium",
  "Luxury",
  "Artistic",
];

const LOGO_SHAPES = [
  "Circular",
  "Square",
  "Horizontal",
  "Vertical",
  "Badge Style",
  "Freeform / Fluid",
  "Symmetrical",
  "Minimal Line Art",
  "Open to Exploration",
];

const COLOR_PALETTE_STYLES = [
  "Pastel",
  "Earthy & Warm",
  "Neutral & Subtle",
  "Bold & Vibrant",
  "Monochrome",
  "Dark Luxury & Gold",
  "Bright & Youthful",
  "Minimal Black & White",
];

const FONT_STYLES = [
  "Serif (Classic & Editorial)",
  "Sans-Serif (Clean & Modern)",
  "Script / Handwritten",
  "Bold Modern / Display",
  "Elegant Luxury",
  "Vintage / Retro",
  "Minimalist",
  "Fun & Playful",
];

const PRINT_COLLATERALS = [
  "Business Cards",
  "Packaging Design",
  "Cake / Product Boxes",
  "Stickers & Decals",
  "Product Labels & Sleeves",
  "Thank You Cards",
  "Menu Design",
  "Flyers & Brochures",
  "Signboards & Storefront",
  "Uniform / Apron Design",
  "Tote Bags / Merch",
];

const DIGITAL_COLLATERALS = [
  "Instagram Feed & Story Templates",
  "Social Media Banners & DP",
  "Website UI Direction / Design",
  "WhatsApp Product Catalogue",
  "Instagram Highlight Covers",
  "Email Signatures",
  "Brand Pitch Presentation / Deck",
];

const STEPS = [
  { id: 1, name: "Brand & Story" },
  { id: 2, name: "Audience & Operations" },
  { id: 3, name: "Logo Design Preferences" },
  { id: 4, name: "Colors & Typography" },
  { id: 5, name: "Collaterals & Assets" },
];

const INITIAL_FORM = {
  // Step 1: Basic Info & Story
  brandName: "",
  brandNameSpelling: "",
  brandStoryMeaning: "",
  tagline: "",
  taglineOpenToSuggestions: "Yes, Open to suggestions",
  contactPerson: "",
  contactPhone: "",
  contactEmail: "",
  socialLinks: "",
  businessOverview: "",
  brandValues: "",
  desiredEmotions: "",

  // Step 2: Audience & Operations
  brandPersonality: [],
  businessType: "",
  deliveryScale: "City-wide",
  idealCustomer: "",
  targetAgeGroups: "",
  productOfferings: "",
  heroProducts: "",

  // Step 3: Logo Design Preferences
  hasExistingLogo: "No",
  existingLogoFeedback: "",
  preferredLogoTypes: [],
  logoFeel: [],
  preferredShapes: [],
  elementsWanted: "",
  elementsAvoid: "",

  // Step 4: Colors & Typography
  preferredColors: "",
  avoidColors: "",
  colorMoods: [],
  fontStyles: [],
  brandVoiceThreeWords: "",
  brandPersonified: "",

  // Step 5: Collaterals & Final Notes
  printCollaterals: [],
  digitalCollaterals: [],
  competitorReferences: "",
  moodboardLinks: "",
  visionFuture: "",
  deadlineOrLaunchDate: "",
  finalNotes: "",
};

function LogoBrandingOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Logo & Brand Discovery Questionnaire | Koiostudio";
    window.scrollTo({ top: 0, behavior: "smooth" });

    const cached = sessionStorage.getItem("koios_client_info");
    if (cached) {
      try {
        const parsed = JSON.parse(cached);
        setFormData((prev) => ({
          ...prev,
          brandName: prev.brandName || parsed.companyName || "",
          contactPerson: prev.contactPerson || parsed.contactPerson || "",
          contactEmail: prev.contactEmail || parsed.email || "",
          contactPhone: prev.contactPhone || parsed.phone || "",
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
      formType: "Logo & Brand Discovery Questionnaire",
      ...formData,
      brandPersonality: formData.brandPersonality.join(", "),
      preferredLogoTypes: formData.preferredLogoTypes.join(", "),
      logoFeel: formData.logoFeel.join(", "),
      preferredShapes: formData.preferredShapes.join(", "),
      colorMoods: formData.colorMoods.join(", "),
      fontStyles: formData.fontStyles.join(", "),
      printCollaterals: formData.printCollaterals.join(", "),
      digitalCollaterals: formData.digitalCollaterals.join(", "),
    };

    try {
      await fetch(BRANDING_ONBOARDING_ENDPOINT, {
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
        "Failed to send discovery questionnaire. Please try again.",
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
              Phase <strong>{currentStep}</strong> of {STEPS.length}
            </div>
          </div>
          <h1 className="ob-form-title">
            Logo & Brand Discovery Questionnaire
          </h1>
          <p className="ob-form-desc">
            This deep-dive helps us understand your brand DNA, values, aesthetic
            tastes, and goals before creating your bespoke visual identity
            system.
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
            <h2 className="ob-success-title">Brand Discovery Submitted!</h2>
            <p className="ob-success-desc">
              Thank you for sharing your brand vision with us. Our design team
              is reviewing your preferences, colors, and references to prepare
              your identity concept.
            </p>
            <div
              style={{ display: "flex", gap: "14px", justifyContent: "center" }}
            >
              <Link to="/onboarding" className="ob-btn-primary">
                Back to Portal
              </Link>
              <Link to="/" className="ob-btn-secondary">
                Explore Koiostudio
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* STEP 1 */}
            {currentStep === 1 && (
              <div className="ob-section">
                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="brandName">
                    Brand Name <span className="req">*</span>
                  </label>
                  <input
                    id="brandName"
                    name="brandName"
                    className="ob-input"
                    placeholder="E.g. Palav Raja / Velvet Flour"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="brandNameSpelling">
                    Preferred Brand Name Spelling & Case
                  </label>
                  <div className="ob-q-subtext">
                    (E.g. ALL CAPS, Title Case, lowercase, stylized with dots or
                    spaces)
                  </div>
                  <input
                    id="brandNameSpelling"
                    name="brandNameSpelling"
                    className="ob-input"
                    placeholder="E.g. KOIOSTUDIO or Koio Studio"
                    value={formData.brandNameSpelling}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="brandStoryMeaning">
                    Story / Meaning Behind The Brand Name
                  </label>
                  <textarea
                    id="brandStoryMeaning"
                    name="brandStoryMeaning"
                    className="ob-textarea"
                    rows={3}
                    placeholder="What inspired the name? Is there personal, cultural, or emotional meaning?"
                    value={formData.brandStoryMeaning}
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
                      <label className="ob-q-title" htmlFor="tagline">
                        Tagline / Slogan (if any)
                      </label>
                      <input
                        id="tagline"
                        name="tagline"
                        className="ob-input"
                        placeholder="E.g. Artisan Bakes & Memories"
                        value={formData.tagline}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label
                        className="ob-q-title"
                        htmlFor="taglineOpenToSuggestions"
                      >
                        Tagline Status
                      </label>
                      <select
                        id="taglineOpenToSuggestions"
                        name="taglineOpenToSuggestions"
                        className="ob-input"
                        value={formData.taglineOpenToSuggestions}
                        onChange={handleChange}
                      >
                        <option value="Final">Final</option>
                        <option value="Yes, Open to suggestions">
                          Yes, Open to suggestions
                        </option>
                      </select>
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
                      <label className="ob-q-title" htmlFor="contactPerson">
                        Founder / Contact Person <span className="req">*</span>
                      </label>
                      <input
                        id="contactPerson"
                        name="contactPerson"
                        className="ob-input"
                        placeholder="Your name"
                        value={formData.contactPerson}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="contactPhone">
                        WhatsApp Contact Number <span className="req">*</span>
                      </label>
                      <input
                        id="contactPhone"
                        name="contactPhone"
                        type="tel"
                        className="ob-input"
                        placeholder="+91 9876543210"
                        value={formData.contactPhone}
                        onChange={handleChange}
                        required
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
                      <label className="ob-q-title" htmlFor="contactEmail">
                        Email Address <span className="req">*</span>
                      </label>
                      <input
                        id="contactEmail"
                        name="contactEmail"
                        type="email"
                        className="ob-input"
                        placeholder="hello@yourbrand.com"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="socialLinks">
                        Website / Instagram Links
                      </label>
                      <input
                        id="socialLinks"
                        name="socialLinks"
                        className="ob-input"
                        placeholder="instagram.com/yourhandle"
                        value={formData.socialLinks}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="businessOverview">
                    What does your business do in detail?
                  </label>
                  <textarea
                    id="businessOverview"
                    name="businessOverview"
                    className="ob-textarea"
                    rows={4}
                    placeholder="Describe your core products, services, offerings, and specialities..."
                    value={formData.businessOverview}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="desiredEmotions">
                    What emotions should people feel when interacting with your
                    brand?
                  </label>
                  <div className="ob-q-subtext">
                    (Examples: warmth, luxury, comfort, nostalgia, excitement,
                    indulgence, trust)
                  </div>
                  <input
                    id="desiredEmotions"
                    name="desiredEmotions"
                    className="ob-input"
                    placeholder="E.g. Warmth, timeless elegance, refined taste"
                    value={formData.desiredEmotions}
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
                        !formData.brandName ||
                        !formData.contactPerson ||
                        !formData.contactPhone
                      ) {
                        alert(
                          "Please fill in the essential brand and contact details.",
                        );
                        return;
                      }
                      setCurrentStep(2);
                    }}
                  >
                    Next: Audience & Operations →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">Brand Personality Traits</div>
                  <div className="ob-q-subtext">
                    Select 3 to 6 words that best define the character of your
                    brand.
                  </div>
                  <div className="ob-options-grid">
                    {PERSONALITY_TAGS.map((tag) => (
                      <label
                        key={tag}
                        className={`ob-choice-card ${
                          formData.brandPersonality.includes(tag)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.brandPersonality.includes(tag)}
                          onChange={() =>
                            handleCheckboxArray("brandPersonality", tag)
                          }
                        />
                        <span>{tag}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="businessType">
                    Business Model & Operation Type
                  </label>
                  <input
                    id="businessType"
                    name="businessType"
                    className="ob-input"
                    placeholder="E.g. Cloud Kitchen / Storefront Boutique / D2C Brand / Agency"
                    value={formData.businessType}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="idealCustomer">
                    Who is your ideal customer?
                  </label>
                  <div className="ob-q-subtext">
                    Be as specific as possible (age, lifestyle, buying habits,
                    tastes).
                  </div>
                  <textarea
                    id="idealCustomer"
                    name="idealCustomer"
                    className="ob-textarea"
                    rows={3}
                    placeholder="E.g. Working professionals aged 25-40 who appreciate handcrafted, premium desserts for gifting and celebrations..."
                    value={formData.idealCustomer}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="productOfferings">
                    Product / Service Menu Offerings
                  </label>
                  <textarea
                    id="productOfferings"
                    name="productOfferings"
                    className="ob-textarea"
                    rows={3}
                    placeholder="List all products (Cakes, Pastries, Hampers, Custom Orders, etc.)..."
                    value={formData.productOfferings}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="heroProducts">
                    Best Sellers / Hero Products
                  </label>
                  <input
                    id="heroProducts"
                    name="heroProducts"
                    className="ob-input"
                    placeholder="Which 1-3 items are your standout best sellers?"
                    value={formData.heroProducts}
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
                    Next: Logo Preferences →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">Do you already have a logo?</div>
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
                          formData.hasExistingLogo === opt ? "selected" : ""
                        }`}
                        style={{ padding: "8px 24px" }}
                      >
                        <input
                          type="radio"
                          name="hasExistingLogo"
                          value={opt}
                          checked={formData.hasExistingLogo === opt}
                          onChange={handleChange}
                        />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                  {formData.hasExistingLogo === "Yes" && (
                    <textarea
                      name="existingLogoFeedback"
                      className="ob-textarea"
                      placeholder="What do you like and dislike about your current logo? What needs changing?"
                      value={formData.existingLogoFeedback}
                      onChange={handleChange}
                      rows={3}
                    />
                  )}
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">Preferred Logo Type</div>
                  <div className="ob-options-grid">
                    {LOGO_TYPES.map((lt) => (
                      <label
                        key={lt}
                        className={`ob-choice-card ${
                          formData.preferredLogoTypes.includes(lt)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.preferredLogoTypes.includes(lt)}
                          onChange={() =>
                            handleCheckboxArray("preferredLogoTypes", lt)
                          }
                        />
                        <span>{lt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">Logo Vibe & Feel</div>
                  <div className="ob-options-grid">
                    {LOGO_FEEL_TAGS.map((vibe) => (
                      <label
                        key={vibe}
                        className={`ob-choice-card ${
                          formData.logoFeel.includes(vibe) ? "selected" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.logoFeel.includes(vibe)}
                          onChange={() => handleCheckboxArray("logoFeel", vibe)}
                        />
                        <span>{vibe}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Preferred Logo Structures / Shapes
                  </div>
                  <div className="ob-options-grid">
                    {LOGO_SHAPES.map((shape) => (
                      <label
                        key={shape}
                        className={`ob-choice-card ${
                          formData.preferredShapes.includes(shape)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.preferredShapes.includes(shape)}
                          onChange={() =>
                            handleCheckboxArray("preferredShapes", shape)
                          }
                        />
                        <span>{shape}</span>
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
                      <label className="ob-q-title" htmlFor="elementsWanted">
                        Elements You WANT in the Logo
                      </label>
                      <input
                        id="elementsWanted"
                        name="elementsWanted"
                        className="ob-input"
                        placeholder="E.g. Whisk, wheat, crest, minimalist crown"
                        value={formData.elementsWanted}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="elementsAvoid">
                        Elements to AVOID
                      </label>
                      <input
                        id="elementsAvoid"
                        name="elementsAvoid"
                        className="ob-input"
                        placeholder="E.g. Overly cartoony icons, cursive scripts"
                        value={formData.elementsAvoid}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
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
                    Next: Colors & Typography →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
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
                      <label className="ob-q-title" htmlFor="preferredColors">
                        Preferred Brand Colors
                      </label>
                      <input
                        id="preferredColors"
                        name="preferredColors"
                        className="ob-input"
                        placeholder="E.g. Warm Terracotta, Gold, Cream"
                        value={formData.preferredColors}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="avoidColors">
                        Colors You DO NOT Want
                      </label>
                      <input
                        id="avoidColors"
                        name="avoidColors"
                        className="ob-input"
                        placeholder="E.g. Neon green, bright purple"
                        value={formData.avoidColors}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">Color Palette Style & Mood</div>
                  <div className="ob-options-grid">
                    {COLOR_PALETTE_STYLES.map((style) => (
                      <label
                        key={style}
                        className={`ob-choice-card ${
                          formData.colorMoods.includes(style) ? "selected" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.colorMoods.includes(style)}
                          onChange={() =>
                            handleCheckboxArray("colorMoods", style)
                          }
                        />
                        <span>{style}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Typography & Font Preferences
                  </div>
                  <div className="ob-options-grid">
                    {FONT_STYLES.map((font) => (
                      <label
                        key={font}
                        className={`ob-choice-card ${
                          formData.fontStyles.includes(font) ? "selected" : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.fontStyles.includes(font)}
                          onChange={() =>
                            handleCheckboxArray("fontStyles", font)
                          }
                        />
                        <span>{font}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="brandVoiceThreeWords">
                    3 Words That Define Your Brand
                  </label>
                  <input
                    id="brandVoiceThreeWords"
                    name="brandVoiceThreeWords"
                    className="ob-input"
                    placeholder="1. Artisanal  2. Indulgent  3. Unforgettable"
                    value={formData.brandVoiceThreeWords}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="brandPersonified">
                    If your brand were a person, how would you describe them?
                  </label>
                  <textarea
                    id="brandPersonified"
                    name="brandPersonified"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Describe their aesthetic, demeanor, how they dress, and speak..."
                    value={formData.brandPersonified}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-nav-row">
                  <button
                    type="button"
                    className="ob-btn-secondary"
                    onClick={() => setCurrentStep(3)}
                  >
                    ← Previous Step
                  </button>
                  <button
                    type="button"
                    className="ob-btn-primary"
                    onClick={() => setCurrentStep(5)}
                  >
                    Next: Collaterals & Final Step →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5 */}
            {currentStep === 5 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">
                    Print Branding Collaterals Needed
                  </div>
                  <div className="ob-options-grid">
                    {PRINT_COLLATERALS.map((item) => (
                      <label
                        key={item}
                        className={`ob-choice-card ${
                          formData.printCollaterals.includes(item)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.printCollaterals.includes(item)}
                          onChange={() =>
                            handleCheckboxArray("printCollaterals", item)
                          }
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Digital Branding Collaterals Needed
                  </div>
                  <div className="ob-options-grid">
                    {DIGITAL_COLLATERALS.map((item) => (
                      <label
                        key={item}
                        className={`ob-choice-card ${
                          formData.digitalCollaterals.includes(item)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.digitalCollaterals.includes(item)}
                          onChange={() =>
                            handleCheckboxArray("digitalCollaterals", item)
                          }
                        />
                        <span>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="moodboardLinks">
                    Pinterest Boards / Behance / Reference Links
                  </label>
                  <textarea
                    id="moodboardLinks"
                    name="moodboardLinks"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Paste links to Pinterest boards, Google Drive folders, or Instagram profiles you love..."
                    value={formData.moodboardLinks}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="competitorReferences">
                    Competitor References & What You Love/Dislike
                  </label>
                  <textarea
                    id="competitorReferences"
                    name="competitorReferences"
                    className="ob-textarea"
                    rows={3}
                    placeholder="List competitors in your industry and what makes you different..."
                    value={formData.competitorReferences}
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
                      <label
                        className="ob-q-title"
                        htmlFor="deadlineOrLaunchDate"
                      >
                        Target Launch Date / Deadline
                      </label>
                      <input
                        id="deadlineOrLaunchDate"
                        name="deadlineOrLaunchDate"
                        className="ob-input"
                        placeholder="E.g. Nov 15, 2026"
                        value={formData.deadlineOrLaunchDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="visionFuture">
                        1-Year & 5-Year Brand Vision
                      </label>
                      <input
                        id="visionFuture"
                        name="visionFuture"
                        className="ob-input"
                        placeholder="Expansion, branches, or retail..."
                        value={formData.visionFuture}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="finalNotes">
                    Final Notes / Specific Expectations
                  </label>
                  <textarea
                    id="finalNotes"
                    name="finalNotes"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Any non-negotiables, special requests, or additional context for our creative team..."
                    value={formData.finalNotes}
                    onChange={handleChange}
                  />
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
                    onClick={() => setCurrentStep(4)}
                  >
                    ← Previous Step
                  </button>
                  <button
                    type="submit"
                    className="ob-btn-primary"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <span className="ob-spinner" />
                        <span>Submitting Brand Discovery...</span>
                      </>
                    ) : (
                      <span>Complete Brand Discovery ✓</span>
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

export default LogoBrandingOnboarding;
