import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount,data, cartItems, removeFromCart} = useContext(ShopContext)
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <div className="cartitems-format-main-mobile">
        {data.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartitems-format-main-mobile-item margin-top">
                  <p>Products</p>
                  <img
                    src={e.image}
                    alt=""
                    className="cart-icon-product-icon"
                  />
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>Title</p>
                  <p>{e.name}</p>
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>Price</p>
                  <p>{e.new_price} Rs</p>
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>Quantity</p>
                  <button>{cartItems[e.id]}</button>
                </div>
                <div className="cartitems-format-main-mobile-item">
                  <p>Total</p>
                  <p>{e.new_price * cartItems[e.id]} Rs</p>
                </div>
                <div className="cartitems-format-main-mobile-item give-margin">
                  <p>Remove</p>
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
                <p>{e.new_price} Rs</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]} Rs</p>
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
          <h1>Card Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()} Rs</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()} Rs</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/delivery">
            {" "}
            <button>PROCEED TO CHECKOUT</button>
          </Link>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code enter it here.</p>
          <div className="cartitems-promobox">
            <div className="promobox-input">
              <input type="text" placeholder="promocode" />
            </div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems
