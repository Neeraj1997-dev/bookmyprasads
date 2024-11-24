import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
  const { getTotalCartAmount, data, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>उत्पाद</p>
        <p>शीर्षक</p>
        <p>कीमत</p>
        <p>मात्रा</p>
        <p>कुल</p>
        <p>हटाएं</p>
      </div>
      <div className="cartitems-format-main-mobile">
        {data.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartitems-format-main-mobile-item margin-top">
                  <p>उत्पाद</p>
                  <img
                    src={e.image}
                    alt=""
                    className="cart-icon-product-icon"
                  />
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>शीर्षक</p>
                  <p>{e.name}</p>
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>कीमत</p>
                  <p>{e.new_price} ₹</p>
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>मात्रा</p>
                  <button>{cartItems[e.id]}</button>
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>कुल</p>
                  <p>{e.new_price * cartItems[e.id]} ₹</p>
                </div>
                <div className="cartitems-format-main-mobile-item give-margin">
                  <p>हटाएं</p>
                  <img
                    className="carticon-remove-icon"
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
      </div>
      <hr />
      {data.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="cart-icon-product-icon" />
                <p>{e.name}</p>
                <p>{e.new_price} ₹</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]} ₹</p>
                <img
                  className="carticon-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>कार्ट कुल</h1>
          <div>
            <div className="cartitems-total-item">
              <p>उप-कुल</p>
              <p>{getTotalCartAmount()} ₹</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>शिपिंग शुल्क</p>
              <p>मुफ्त</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>कुल</h3>
              <h3>{getTotalCartAmount()} ₹</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/delivery">
            <button>चेकआउट पर जाएं</button>
          </Link>
        </div>
        <div className="cartitems-promocode">
          <p>यदि आपके पास कोई प्रोमो कोड है, तो यहां दर्ज करें।</p>
          <div className="cartitems-promobox">
            <div className="promobox-input">
              <input type="text" placeholder="प्रोमोकोड" />
            </div>
            <button>सबमिट करें</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
