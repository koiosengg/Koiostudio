import React, { useEffect } from "react";
import ConnectionsForm from "@/components/Connections/ConnectionsForm";
import "@/components/Connections/Connections.css";

function Connections() {
  useEffect(() => {
    document.title = "Mahi’s Circle – Trusted Connections & Referrals | Koiostudio";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Welcome to Mahi’s Circle: Trusted Connections & Referrals. Share your details and services so I can connect you with the right opportunities."
      );
    }
  }, []);

  return (
    <main className="connections-page">
      {/* Background ambient lighting */}
      <div className="connections-glow-bg">
        <div className="conn-glow-orb-1" />
        <div className="conn-glow-orb-2" />
        <div className="conn-glow-orb-3" />
      </div>

      <ConnectionsForm />
    </main>
  );
}

export default Connections;
