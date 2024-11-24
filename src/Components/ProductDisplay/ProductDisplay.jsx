import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
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
          हमारे दिव्य आशीर्वाद प्रसाद संग्रह के साथ एक आध्यात्मिक यात्रा पर
          निकलें। वैष्णो देवी के पवित्र माहौल की गूंज को समर्पित, प्रत्येक
          प्रसाद सकारात्मक ऊर्जा का संचार करता है और भक्ति का प्रतीक है। इन
          पवित्र धरोहरों के माध्यम से अपने आध्यात्मिक स्थान को ऊँचा करें और
          दिव्य से जुड़ने का अनुभव करें।.
        </div>
        <div className="buttontocart">
          <button
            onClick={() => {
              addToCart(product.id);
            }}
          >
            कार्ट में जोड़ें
          </button>
          <Link style={{ textDecoration: "none" }} to="/cart">
            <button
              className="buynow-btn"
              onClick={() => {
                addToCart(product.id);
              }}
            >
              अभी खरीदें
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
