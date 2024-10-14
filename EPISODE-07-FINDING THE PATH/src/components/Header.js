import { LOGO_URL } from "../utils/constant";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  
  return (
    <div className="header">
      <a href="/" className="anchor-head">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
          <h3 className="food-heading">Food App</h3>
        </div>
      </a>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>
            <FaCartArrowDown />
          </li>
        </ul>
      </div>
      <button className="loginBtn">Login</button>
    </div>
  );
};

export default Header
