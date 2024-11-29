import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

import arrow_icon from '../Assets/arrow.png';
import vaishno_img from '../Assets/maa.jpg';
import baba_dham_img from '../Assets/baba1.avif';
import mahakal_img from '../Assets/maha.jpg';

const Hero = () => {
  const temples = [
    {
      name: "वैष्णो देवी",
      description: "शुद्ध, ताजा और पवित्र—हमारा वैष्णो देवी प्रसाद दिव्यता का प्रतीक है।",
      image: vaishno_img,
      link: "/product/1",
      className: "vaishno",
    },
    {
      name: "बाबा धाम",
      description: "बाबा बैद्यनाथ के आशीर्वाद का प्रतीक हमारा प्रसाद, घर बैठे प्राप्त करें।",
      image: baba_dham_img,
      link: "/product/2",
      className: "baba-dham",
    },
    {
      name: "महाकाल",
      description: "महाकालेश्वर के पावन प्रसाद से अपने जीवन में शुभता लाएँ।",
      image: mahakal_img,
      link: "/product/3",
      className: "mahakal",
    },
  ];

  return (
    <div className="hero">
      {temples.map((temple, index) => (
        <div key={index} className={`hero-section ${temple.className}`}>
          <div className="hero-left">
            <h2>दिव्य आशीर्वाद: {temple.name}</h2>
            <p>{temple.description}</p>
            <Link style={{ textDecoration: "none" }} to={temple.link}>
              <div className="order-now-btn">
                <div>अभी ऑर्डर करें</div>
                <img src={arrow_icon} alt="arrow-icon" />
              </div>
            </Link>
          </div>
          <div className="hero-right">
            <img src={temple.image} alt={`${temple.name} प्रसाद`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
