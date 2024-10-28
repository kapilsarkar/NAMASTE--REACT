import { LOGO_URL } from "../utils/constant";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import City from "./City";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return (
    <div>
      <div className="header">
        <Link href="/" className="anchor-head">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
            <h3 className="food-heading">Food App</h3>
          </div>
        </Link>

        <div className="nav-items">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
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
      <City/>
    </div>
  );
};
export default Header;
