import React from 'react';
import './CSS/Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>संपर्क करें</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="आपका नाम" />
          <input type="email" placeholder="ईमेल पता" />
          <input type="text" placeholder="मोबाइल नंबर" />
          <input type="text" placeholder="अपनी समस्या लिखें" />
        </div>
        <button>जारी रखें</button>
      </div>
    </div>
  );
}

export default Contact;
