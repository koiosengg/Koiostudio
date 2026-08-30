import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PACKAGING_ONBOARDING_ENDPOINT } from "@/config/api";
import "@/components/Onboarding/Onboarding.css";

const PACKAGING_TYPES = [
  "Rigid Luxury Box",
  "Folding Carton / Paper Box",
  "Pouch / Stand-up Pouch",
  "Glass Jar / Bottle Label",
  "Sleeve / Belly Band",
  "Tin / Metal Container",
  "Shipping / Mailer Box",
  "Custom Hamper / Gift Set",
  "Product Hangtag / Header Card",
  "Stickers / Tamper-evident Seal",
];

const FINISHES = [
  "Matte Lamination",
  "Gloss Lamination",
  "Gold / Rose Gold Foil Stamping",
  "Spot UV / Raised Gloss",
  "Embossing / Debossing",
  "Kraft / Eco-friendly Texture",
  "Soft-Touch Velvet Finish",
  "Metallic / Holographic Sheen",
];

const REGULATORY_ELEMENTS = [
  "FSSAI / FDA License & Logo",
  "Veg / Non-Veg Indicator",
  "Nutritional Information Panel",
  "Ingredients List",
  "Barcode / QR Code",
  "Net Quantity & MRP",
  "Manufacturer & Expiry Details",
  "Recycling / Eco Badges",
  "Storage Instructions",
];

const COLLATERALS_NEEDED = [
  "Custom Printed Butter Paper / Tissue",
  "Custom Packaging Tape",
  "Thank You / Brand Story Insert",
  "Shopping / Carry Bag",
  "Product Catalogue / Menu Leaflet",
  "3D Photorealistic Packaging Renders",
  "Social Media Launch Graphics",
];

const STEPS = [
  { id: 1, name: "Brand & Project Info" },
  { id: 2, name: "Packaging Scope & SKUs" },
  { id: 3, name: "Finishing & Regulations" },
  { id: 4, name: "Assets & References" },
];

const INITIAL_FORM = {
  // Step 1
  brandName: "",
  contactPerson: "",
  contactPhone: "",
  contactEmail: "",
  industry: "",
  currentWebsite: "",
  targetLaunchDate: "",
  projectObjective: "",

  // Step 2
  packagingTypes: [],
  skuCount: "1 - 3 SKUs",
  productDimensions: "",
  hasExistingDielines: "No, Need agency to create dielines",
  packagingMaterials: "",

  // Step 3
  finishingPreferences: [],
  mandatoryElements: [],
  printerDetails: "",

  // Step 4
  collateralsNeeded: [],
  referenceDriveLinks: "",
  competitorReferences: "",
  budgetRange: "",
  finalInstructions: "",
};

function BrandingPackagingOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.title = "Branding & Packaging Design Onboarding | Koiostudio";
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
      formType: "Branding & Packaging Design Onboarding",
      ...formData,
      packagingTypes: formData.packagingTypes.join(", "),
      finishingPreferences: formData.finishingPreferences.join(", "),
      mandatoryElements: formData.mandatoryElements.join(", "),
      collateralsNeeded: formData.collateralsNeeded.join(", "),
    };

    try {
      await fetch(PACKAGING_ONBOARDING_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
      setErrorMessage("Failed to send packaging onboarding. Please try again.");
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
          <h1 className="ob-form-title">Branding & Packaging Design Intake</h1>
          <p className="ob-form-desc">
            Define your product packaging requirements, SKU lineup, dielines,
            print finishes, and compliance elements to begin custom packaging
            design.
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
            <h2 className="ob-success-title">Packaging Scope Submitted!</h2>
            <p className="ob-success-desc">
              Thank you for sharing your packaging specifications. Our
              industrial & brand design specialists will review your SKU
              requirements and reach out with the creative rollout plan.
            </p>
            <div
              style={{ display: "flex", gap: "14px", justifyContent: "center" }}
            >
              <Link to="/onboarding" className="ob-btn-primary">
                Back to Portal
              </Link>
              <Link to="/" className="ob-btn-secondary">
                Go to Koiostudio
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
                    Brand / Company Name <span className="req">*</span>
                  </label>
                  <input
                    id="brandName"
                    name="brandName"
                    className="ob-input"
                    placeholder="E.g. SPINTeQ / Artisan Goods"
                    value={formData.brandName}
                    onChange={handleChange}
                    required
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
                      <label className="ob-q-title" htmlFor="contactPhone">
                        Phone / WhatsApp Number <span className="req">*</span>
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
                        placeholder="contact@company.com"
                        value={formData.contactEmail}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="industry">
                        Industry / Category
                      </label>
                      <input
                        id="industry"
                        name="industry"
                        className="ob-input"
                        placeholder="E.g. Gourmet Food / Cosmetics / D2C"
                        value={formData.industry}
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
                      <label className="ob-q-title" htmlFor="currentWebsite">
                        Website / Social Media URL
                      </label>
                      <input
                        id="currentWebsite"
                        name="currentWebsite"
                        className="ob-input"
                        placeholder="https://yourwebsite.com"
                        value={formData.currentWebsite}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="ob-q-title" htmlFor="targetLaunchDate">
                        Expected Production / Launch Date
                      </label>
                      <input
                        id="targetLaunchDate"
                        name="targetLaunchDate"
                        className="ob-input"
                        placeholder="E.g. Mid Next Month"
                        value={formData.targetLaunchDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="projectObjective">
                    Project Overview & Main Goal
                  </label>
                  <textarea
                    id="projectObjective"
                    name="projectObjective"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Describe what product line this is for and what you want to achieve with this packaging..."
                    value={formData.projectObjective}
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
                          "Please fill in the required brand and contact details.",
                        );
                        return;
                      }
                      setCurrentStep(2);
                    }}
                  >
                    Next: Packaging Scope & SKUs →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {currentStep === 2 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">
                    Packaging Format Types Needed
                  </div>
                  <div className="ob-q-subtext">
                    Select all formats required for your products:
                  </div>
                  <div className="ob-options-grid">
                    {PACKAGING_TYPES.map((type) => (
                      <label
                        key={type}
                        className={`ob-choice-card ${
                          formData.packagingTypes.includes(type)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.packagingTypes.includes(type)}
                          onChange={() =>
                            handleCheckboxArray("packagingTypes", type)
                          }
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Number of SKUs / Product Variants
                  </div>
                  <div className="ob-options-grid">
                    {[
                      "1 - 2 SKUs",
                      "3 - 5 SKUs",
                      "6 - 10 SKUs",
                      "10+ SKUs / Full Range",
                    ].map((count) => (
                      <label
                        key={count}
                        className={`ob-choice-card ${
                          formData.skuCount === count ? "selected" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="skuCount"
                          value={count}
                          checked={formData.skuCount === count}
                          onChange={handleChange}
                        />
                        <span>{count}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Do you have technical dielines / knife templates?
                  </div>
                  <div className="ob-options-list">
                    {[
                      "Yes, I have printer-provided dielines ready (AI/PDF)",
                      "No, Need Koiostudio to create standard dielines",
                      "Manufacturer will provide dielines during the project",
                    ].map((dielineOpt) => (
                      <label
                        key={dielineOpt}
                        className={`ob-choice-card ${
                          formData.hasExistingDielines === dielineOpt
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="hasExistingDielines"
                          value={dielineOpt}
                          checked={formData.hasExistingDielines === dielineOpt}
                          onChange={handleChange}
                        />
                        <span>{dielineOpt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="productDimensions">
                    Product & Box Dimensions (L x W x H in mm/inches)
                  </label>
                  <textarea
                    id="productDimensions"
                    name="productDimensions"
                    className="ob-textarea"
                    rows={2}
                    placeholder="E.g. Box 1: 150mm x 150mm x 80mm, Bottle: 200ml jar (70mm diameter x 90mm height)"
                    value={formData.productDimensions}
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
                    Next: Finishes & Regulations →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {currentStep === 3 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">
                    Preferred Print Finishes & Effects
                  </div>
                  <div className="ob-options-grid">
                    {FINISHES.map((finish) => (
                      <label
                        key={finish}
                        className={`ob-choice-card ${
                          formData.finishingPreferences.includes(finish)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.finishingPreferences.includes(
                            finish,
                          )}
                          onChange={() =>
                            handleCheckboxArray("finishingPreferences", finish)
                          }
                        />
                        <span>{finish}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <div className="ob-q-title">
                    Mandatory Regulatory & Back-of-Pack Elements
                  </div>
                  <div className="ob-options-grid">
                    {REGULATORY_ELEMENTS.map((el) => (
                      <label
                        key={el}
                        className={`ob-choice-card ${
                          formData.mandatoryElements.includes(el)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.mandatoryElements.includes(el)}
                          onChange={() =>
                            handleCheckboxArray("mandatoryElements", el)
                          }
                        />
                        <span>{el}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="printerDetails">
                    Packaging Manufacturer / Printing Vendor Info (if
                    identified)
                  </label>
                  <input
                    id="printerDetails"
                    name="printerDetails"
                    className="ob-input"
                    placeholder="Vendor Name, contact, or 'None yet - need recommendations'"
                    value={formData.printerDetails}
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
                    Next: Assets & References →
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {currentStep === 4 && (
              <div className="ob-section">
                <div className="ob-card">
                  <div className="ob-q-title">
                    Complementary Unboxing & Brand Collaterals
                  </div>
                  <div className="ob-options-grid">
                    {COLLATERALS_NEEDED.map((col) => (
                      <label
                        key={col}
                        className={`ob-choice-card ${
                          formData.collateralsNeeded.includes(col)
                            ? "selected"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.collateralsNeeded.includes(col)}
                          onChange={() =>
                            handleCheckboxArray("collateralsNeeded", col)
                          }
                        />
                        <span>{col}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="referenceDriveLinks">
                    Inspiration / Moodboard / Google Drive Links
                  </label>
                  <textarea
                    id="referenceDriveLinks"
                    name="referenceDriveLinks"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Paste Pinterest links, competitor examples, Google Drive folder with photos, etc..."
                    value={formData.referenceDriveLinks}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="competitorReferences">
                    Benchmark Brands / Benchmark Packaging You Admire
                  </label>
                  <input
                    id="competitorReferences"
                    name="competitorReferences"
                    className="ob-input"
                    placeholder="E.g. Blue Tokai, Forest Essentials, Apple, etc."
                    value={formData.competitorReferences}
                    onChange={handleChange}
                  />
                </div>

                <div className="ob-card">
                  <label className="ob-q-title" htmlFor="finalInstructions">
                    Any Additional Notes or Non-Negotiables
                  </label>
                  <textarea
                    id="finalInstructions"
                    name="finalInstructions"
                    className="ob-textarea"
                    rows={3}
                    placeholder="Specific design preferences, eco-friendly certifications, or timeline notes..."
                    value={formData.finalInstructions}
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
                    onClick={() => setCurrentStep(3)}
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
                        <span>Submitting Packaging Scope...</span>
                      </>
                    ) : (
                      <span>Submit Packaging Intake ✓</span>
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

export default BrandingPackagingOnboarding;
