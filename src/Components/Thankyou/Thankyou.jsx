import React from 'react'
import './Thankyou.css'
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div className="thankyou">
      <div className="container-info">
        <h2>Delivery Information:</h2>
        <p>
          Your sacred prasad is on its way to you! We estimate that it will
          reach your doorstep within 10 days. Our team is carefully preparing
          your order to ensure it arrives with the blessings of Vaishno Devi.
        </p>
      </div>
      <div className="container-info">
        <h2>Need Assistance?</h2>
        <p>
          If you have any questions or concerns regarding your order, feel free
          to reach out to our dedicated customer support team.
        </p>
        <p>
          Email:
          <a href="mailto:neeraj@aisv.in">    neeraj@aisv.in</a>
        </p>
        <p>
          Phone: <a href="tel:7056330417">   7056330417</a>
        </p>
      </div>
      <div className="container-info">
        <h2>Continue Your Spiritual Journey:</h2>
        <p>
          While you wait, why not explore more sacred offerings on our website?
          Click the button below to continue your spiritual journey:
        </p>
        <Link style={{ textDecoration: "none" }} to="/Services">
          <div className="order-now-btn-1">Go Back to Home Page</div>
        </Link>
      </div>
    </div>
  );
}

export default Thankyou
