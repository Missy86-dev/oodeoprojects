import { useState, useEffect } from "react";
import "./hotlineService.css"

const pulseStyle = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.35; }
  }
`;

export default function HelpLinePro() {
  const [calling, setCalling] = useState(false);

  const handleCall = () => {
    setCalling(true);
    setTimeout(() => setCalling(false), 2500);
  };

  return (
    <>
      <style>{pulseStyle}</style>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f5f3ee",
          fontFamily: "'Georgia', serif",
          padding: "2rem",
        }}
      >
        <div
          style={{
            backgroundColor: "#edeae2",
            borderRadius: "16px",
            padding: "3rem 4rem",
            textAlign: "center",
            maxWidth: "620px",
            width: "100%",
          }}
        >
          {/* Live badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              backgroundColor: "#dff0e0",
              color: "#2e5e35",
              fontSize: "13px",
              fontFamily: "'Helvetica Neue', sans-serif",
              padding: "5px 14px",
              borderRadius: "20px",
              marginBottom: "1.4rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#3a7d44",
                display: "inline-block",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
            Lines open 24/7
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "700",
              color: "#1a1a18",
              margin: "0 0 0.5rem",
              fontFamily: "'Georgia', serif",
              letterSpacing: "-0.3px",
            }}
          >
            HelpLine Pro
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "15px",
              color: "#555550",
              margin: "0 0 2rem",
              fontFamily: "'Helvetica Neue', sans-serif",
              fontWeight: "400",
            }}
          >
            Talk to a real person, anytime. We're here to help.
          </p>

          {/* Phone number */}
          <p
            style={{
              fontSize: "36px",
              fontWeight: "400",
              color: "#1a1a18",
              letterSpacing: "6px",
              margin: "0 0 2rem",
              fontFamily: "'Courier New', monospace",
            }}
          >
            0800 123 4567
          </p>

          {/* Call now button — centered */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              onClick={handleCall}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                backgroundColor: calling ? "#2e6b3e" : "transparent",
                color: calling ? "#dff0e0" : "#1a1a18",
                border: "1px solid #b0aca2",
                borderRadius: "8px",
                padding: "11px 28px",
                fontSize: "15px",
                fontFamily: "'Helvetica Neue', sans-serif",
                fontWeight: "500",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.87a16 16 0 0 0 6.12 6.12l1.77-1.77a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {calling ? "Connecting…" : "Call now"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
