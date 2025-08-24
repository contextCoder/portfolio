import React, { useState, useEffect } from "react";
import "./walking.css";

export default function WalkingGreeter() {
  const [showGreeting, setShowGreeting] = useState(false);
  const [vanish, setVanish] = useState(false);

  useEffect(() => {
    // Show greeting after walking ends (4s)
    const greetTimer = setTimeout(() => setShowGreeting(true), 4000);

    // Vanish after greeting shows (2s later)
    const vanishTimer = setTimeout(() => setVanish(true), 6000);

    return () => {
      clearTimeout(greetTimer);
      clearTimeout(vanishTimer);
    };
  }, []);

  return (
    <div className={`walker-wrapper ${vanish ? "vanish" : ""}`}>
      <div className="walker">🚶‍♂️</div>
      {showGreeting && (
        <div className="speech-bubble">👋 Hello, Welcome!</div>
      )}
    </div>
  );
}
