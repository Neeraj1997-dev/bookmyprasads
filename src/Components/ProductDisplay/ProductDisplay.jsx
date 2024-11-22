import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext);
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-image">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt="product-img"
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_icon} alt="star-img" />
          <img src={star_dull_icon} alt="star-img" />
          <p>565</p>
        </div>
        <div className="product-display-right-prices">
          <div className="productdisplay-right-prices-old">
            {product.old_price} Rs
          </div>
          <div className="productdisplay-right-prices-new">
            {product.new_price} Rs
          </div>
        </div>
        <div className="productdisplay-right-description">
          Embark on a spiritual journey with our Divine Blessings Prasad
          Collection. Carefully curated to echo the sacred ambiance of Vaishno
          Devi, each offering radiates positive energy and symbolizes devotion.
          Elevate your spiritual space and connect with the divine through these
          sacred treasures.
        </div>
        <div className="buttontocart">
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            ADD TO CART
          </button>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <button
              className="buynow-btn"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay
