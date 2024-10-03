import { LOGO_URL } from "../utils/constant";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <h3 className="food-heading">Food App</h3>
      </div>
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
      <button
        className="loginBtn"
        onClick={() => {
          btnNameReact === "Login"
            ? setBtnNameReact("Logout")
            : setBtnNameReact("Login");
        }}
      >
        {btnNameReact}
      </button>
    </div>
  );
};

export default Header;
