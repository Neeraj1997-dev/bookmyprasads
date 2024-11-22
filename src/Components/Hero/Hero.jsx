import React from 'react'
import './Hero.css'
import { Link } from 'react-router-dom'

import arrow_icon from '../Assets/arrow.png'
import prasad_img from '../Assets/prasad.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Divine Blessings Delivered to your Doorstep!</h2>
        <div>
          <p>Pure, fresh and sacred: Our Vaishno Devi Prasad</p>
        </div>
        <Link style={{ textDecoration: "none" }} to="/productpage">
          <div className="order-now-btn">
            <div>Order Now</div>
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
