import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>अपने ईमेल पर विशेष प्रस्ताव प्राप्त करें।</h1>
      <p>हमारे न्यूज़लेटर की सदस्यता लें और अपडेट रहें।</p>
      <div className="newsletter-input-container">
        <input type="email" placeholder="आपकी ईमेल आईडी" />
        <button>सदस्य बनें</button>
      </div>
    </div>
  );
};

export default NewsLetter;
