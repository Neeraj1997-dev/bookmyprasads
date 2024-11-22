import React from 'react'
import './CSS/Contact.css'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Mobile No." />
          <input type="text" placeholder="Write Your Query" />
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
}

export default Contact
