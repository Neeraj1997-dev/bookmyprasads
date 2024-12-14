import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const location = useLocation();
  const { getTotalCartItems } = useContext(ShopContext);
  const [menu, setMenu] = useState(
    location.pathname === "/"
      ? "Home"
      : location.pathname === "/About"
      ? "About"
      : location.pathname === "/productpage"
      ? "Services"
      : location.pathname === "/Contact"
      ? "Contact Us"
      : ""
  );

  return (
    <div className="navbar">
      <Link style={{ textDecoration: "none" }} to="/Services">
        <div className="nav-logo">
          <img src={logo} alt="logo_img" />
          <p>प्रसाद ऑर्डर करें</p>
        </div>
      </Link>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("Home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            होम
          </Link>
          {menu === "Home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("About");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/About">
            संबंधित
          </Link>
          {menu === "About" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Services");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/productpage">
            प्रसाद
          </Link>
          {menu === "Services" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Contact Us");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/Contact">
            संपर्क करें
          </Link>
          {menu === "Contact Us" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="cart">
          {" "}
          <img src={cart_icon} alt="cart_icon" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
