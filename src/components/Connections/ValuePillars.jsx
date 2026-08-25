import React from "react";

const PILLARS = [
  {
    number: "01",
    title: "Direct Introductions",
    description:
      "When clients, founders, or leaders in my circle need a specialist, I introduce you directly to high-intent opportunities.",
  },
  {
    number: "02",
    title: "Collaborative Referrals",
    description:
      "For large ecosystem projects or multidisciplinary mandates, I bring trusted domain experts into our client deals.",
  },
  {
    number: "03",
    title: "Strategic Ecosystem",
    description:
      "Continuous peer connections, mastermind syncs, and co-pitching opportunities built on mutual trust and high execution standards.",
  },
];

function ValuePillars() {
  return (
    <section className="conn-pillars-section" id="how-it-works">
      <div className="conn-section-header">
        <div className="conn-section-eyebrow">Collaboration Model</div>
        <h2 className="conn-section-title">
          Business happens <em>three ways</em>.
        </h2>
      </div>

      <div className="conn-pillars-grid">
        {PILLARS.map((pillar, idx) => (
          <div className="conn-pillar-card" key={idx}>
            <div className="conn-pillar-number">{pillar.number}</div>
            <h3 className="conn-pillar-title">{pillar.title}</h3>
            <p className="conn-pillar-desc">{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValuePillars;
