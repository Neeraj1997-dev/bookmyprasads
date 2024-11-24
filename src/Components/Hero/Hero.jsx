import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

import arrow_icon from '../Assets/arrow.png'
//import prasad_img from '../Assets/prasad.jpg'
import prasad_img from '../Assets/vaishno1.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>दिव्य आशीर्वाद आपके द्वार तक!</h2>
        <div>
          <p>शुद्ध, ताजा और पवित्र—हमारा वैष्णो देवी प्रसाद दिव्यता का प्रतीक है।</p>
        </div>
        <Link style={{ textDecoration: "none" }} to="/productpage">
          <div className="order-now-btn">
            <div>अभी ऑर्डर करें</div>
            <img src={arrow_icon} alt="arrow-icon" />
          </div>
        </Link>
      </div>
      <div className="hero-right">
        <img src={prasad_img} alt="prasad_img" />
      </div>
    </div>
  );
}

export default Hero
