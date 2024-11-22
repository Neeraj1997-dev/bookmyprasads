import React from 'react'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="thankyou">
      <div className="container-info">
        <h2>Our Divine Journey:</h2>
        <p>
          At BookMyPrasad, we embark on a sacred journey to connect devotees
          with the divine blessings of Vaishno Devi. Our story is woven with
          threads of faith, tradition, and a deep commitment to bring the
          spiritual experience of Vaishno Devi directly to your doorstep.
        </p>
      </div>
      <div className="container-info">
        <h2>Roots in Tradition:</h2>
        <p>
          Inspired by the rich traditions of our culture, BookMyPrasad is a
          labor of love that grew from a simple idea — to make the sacred prasad
          of Vaishno Devi accessible to everyone, irrespective of geographical
          boundaries.
        </p>
      </div>
      <div className="container-info">
        <h2>A Commitment to Purity:</h2>
        <p>
          We understand the sacredness of prasad and uphold the highest
          standards of purity in our offerings. Each prasad pack is carefully
          curated and packed with devotion, ensuring that you receive the divine
          blessings in its purest form.
        </p>
      </div>
      <div className="container-info">
        <h2>Environmental Responsibility:</h2>
        <p>
          Our commitment to the environment is as strong as our devotion. We use
          eco-friendly packaging to ensure that our service aligns with the
          values of sustainability and respect for Mother Earth.
        </p>
      </div>
      <div className="container-info">
        <h2>Connecting Devotees Worldwide:</h2>
        <p>
          Beyond borders and time zones, we strive to create a global community
          of devotees who can experience the grace of Vaishno Devi in the
          comfort of their homes. BookMyPrasad is not just a service; it's a
          bridge that connects hearts with the divine.
        </p>
      </div>
      <div className="container-info">
        <h2> Customer-Centric Approach:</h2>
        <p>
          Your satisfaction is at the core of our mission. Our customer support
          team is dedicated to ensuring a seamless and joyous experience for
          you. Feel free to reach out; we're here to serve you with the utmost
          care.
        </p>
      </div>
      <div className="container-info">
        <h2>Join Us on this Spiritual Journey:</h2>
        <p>
          Whether you are a devout follower or a curious seeker, we invite you
          to join us on this spiritual journey. BookMyPrasad is more than a
          service; it's a community united by faith, love, and the pursuit of
          divine blessings.
        </p>
      </div>
      <div className="container-info">
        <h2>May Your Journey Be Blessed:</h2>
        <p>
          As you explore the offerings on our platform, may your journey be
          filled with the divine energy of Vaishno Devi. Thank you for choosing
          BookMyPrasad as your companion on this sacred path.
        </p>
        <Link style={{ textDecoration: "none" }} to="/productpage">
          <div className="order-now-btn-1">Explore Our Prasad</div>
        </Link>
      </div>
    </div>
  );
}

export default About
