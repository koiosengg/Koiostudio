import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "@/components/Onboarding/Onboarding.css";

const ONBOARDING_TRACKS = [
  {
    id: "ads",
    title: "Meta & Google Ads Onboarding",
    desc: "Campaign goals, ad budgets, audience demographics, tracking pixels, and conversion targets.",
    route: "/onboarding/ads",
  },
  {
    id: "logo-and-branding",
    title: "Logo & Brand Discovery",
    desc: "Brand story, core values, logo preferences, vibe, typography, colors, and design collaterals.",
    route: "/onboarding/logo-and-branding",
  },
];

function OnboardingHub() {
  const navigate = useNavigate();

  const [clientInfo, setClientInfo] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    selectedTrack: "ads",
  });

  useEffect(() => {
    document.title = "Client Onboarding Portal | Koiostudio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Begin your client onboarding with Koiostudio. Fast, structured, and collaborative project kickoff.",
      );
    }

    // Load any existing cached info
    const cached = sessionStorage.getItem("koios_client_info");
    if (cached) {
      try {
        setClientInfo((prev) => ({ ...prev, ...JSON.parse(cached) }));
      } catch {
        // ignore parse error
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectTrack = (trackId) => {
    setClientInfo((prev) => ({ ...prev, selectedTrack: trackId }));
  };

  const handleProceed = (e) => {
    e.preventDefault();

    if (
      !clientInfo.companyName ||
      !clientInfo.contactPerson ||
      !clientInfo.email ||
      !clientInfo.phone
    ) {
      alert("Please fill in all your contact details before proceeding.");
      return;
    }

    // Save client info to sessionStorage
    sessionStorage.setItem("koios_client_info", JSON.stringify(clientInfo));

    // Route to the selected track
    const target = ONBOARDING_TRACKS.find(
      (t) => t.id === clientInfo.selectedTrack,
    );
    navigate(target ? target.route : "/onboarding/ads");
  };

  return (
    <main className="onboarding-page">
      <div className="ob-container">
        <div className="ob-hub-header">
          <h1 className="ob-hub-title">
            Let's Build Something <span>Remarkable</span>
          </h1>
          <p className="ob-hub-subtitle">
            Please share your primary contact details and choose your project
            onboarding track to begin.
          </p>
        </div>

        <form onSubmit={handleProceed} className="ob-section">
          {/* Step 1: Select Service Track */}
          <div className="ob-card">
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "8px",
                color: "#fff",
              }}
            >
              1. Select Onboarding Questionnaire
            </h2>
            <div className="ob-q-subtext">
              Choose which service questionnaire you are completing today:
            </div>

            <div className="ob-options-list" style={{ marginTop: "12px" }}>
              {ONBOARDING_TRACKS.map((track) => (
                <div
                  key={track.id}
                  className={`ob-choice-card ${
                    clientInfo.selectedTrack === track.id ? "selected" : ""
                  }`}
                  onClick={() => handleSelectTrack(track.id)}
                  style={{
                    padding: "18px 20px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type="radio"
                    name="selectedTrack"
                    value={track.id}
                    checked={clientInfo.selectedTrack === track.id}
                    onChange={() => handleSelectTrack(track.id)}
                    style={{ marginTop: "4px" }}
                  />
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "4px",
                      }}
                    >
                      <strong style={{ fontSize: "1.05rem", color: "#fff" }}>
                        {track.title}
                      </strong>
                    </div>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        color: "var(--ob-text-secondary)",
                        margin: 0,
                        lineHeight: "1.5",
                      }}
                    >
                      {track.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Basic Client Info Card */}
          <div className="ob-card">
            <h2
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "18px",
                color: "#fff",
              }}
            >
              2. Your Contact & Company Details
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "16px",
              }}
            >
              <div>
                <label className="ob-q-title" htmlFor="companyName">
                  Company / Brand Name <span className="req">*</span>
                </label>
                <input
                  id="companyName"
                  name="companyName"
                  className="ob-input"
                  placeholder="E.g. Acme Corp"
                  value={clientInfo.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="ob-q-title" htmlFor="contactPerson">
                  Point of Contact (Full Name) <span className="req">*</span>
                </label>
                <input
                  id="contactPerson"
                  name="contactPerson"
                  className="ob-input"
                  placeholder="Your full name"
                  value={clientInfo.contactPerson}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}
            >
              <div>
                <label className="ob-q-title" htmlFor="email">
                  Official Email Address <span className="req">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="ob-input"
                  placeholder="name@company.com"
                  value={clientInfo.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="ob-q-title" htmlFor="phone">
                  WhatsApp / Phone Number <span className="req">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="ob-input"
                  placeholder="+91 9876543210"
                  value={clientInfo.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
            }}
          >
            <button
              type="submit"
              className="ob-btn-primary"
              style={{ width: "100%", maxWidth: "320px", padding: "15px 36px" }}
            >
              Continue to Questionnaire →
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default OnboardingHub;
