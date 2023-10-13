import React, { useState, useEffect } from "react";

export const DonationCounter = () => {
  const [platesServed, setPlatesServed] = useState(0);
  const [kitchens, setKitchens] = useState(0);

  useEffect(() => {
    // Simulate the increase in plates served and kitchens
    const updateCounters = () => {
      if (platesServed < 7600000) {
        setPlatesServed((prevCount) => prevCount + 10000); // Increment plates by 10,000
      }
      if (kitchens < 110) {
        setKitchens((prevCount) => prevCount + 1); // Increment kitchens by 1
      }
    };

    const interval = setInterval(updateCounters, 100); // Update counters every 100 milliseconds

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [platesServed, kitchens]);

  return (
    <div className="donation-counter">
      <div className="counter-item">
        <div className="counter-value">{platesServed.toLocaleString()}</div>
        <div className="counter-label">plates served since 2020</div>
      </div>
      <div className="counter-item">
        <div className="counter-value">{kitchens}</div>
        <div className="counter-label">kitchens across India</div>
      </div>
    </div>
  );
};

