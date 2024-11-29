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

      {/* How to Book a Puja with Ghar Mandir Section */}
      {/* <div className="puja-booking-steps">
        <h2>घर मंदिर से पूजा कैसे बुक करें?</h2>
        <ol>
          <li><strong>1. मंदिर चुनें:</strong> अपनी पसंद का मंदिर चुनें।</li>
          <li><strong>2. पूजा/चढ़ावा बुक करें:</strong> अपनी पसंद के मंदिर में ऑनलाइन पूजा बुक करें या चढ़ावा अर्पित करें।</li>
          <li><strong>3. छवि/वीडियो प्राप्त करें:</strong> हमारे छवियों और वीडियो के जरिए सकारात्मक ऊर्जा और आध्यात्मिक मंत्रों को अपने घर में महसूस करें।</li>
          <li><strong>4. प्रसाद की होम डिलीवरी:</strong> घर बैठे प्रसाद का आनंद लें और देवी-देवताओं का आशीर्वाद प्राप्त करें।</li>
        </ol>
      </div> */}
    </div>
  );
};

export default NewsLetter;
