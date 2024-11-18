import { LOGO_URL } from "../utils/constant";
import { FaCartArrowDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameREact] = useState("Login");
  console.log("Header Called")
  useEffect(()=>{
    console.log("useEffect called")
  },[])
  return (
    <div className="header">
      <Link to="/" className="anchor-head">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
          <h3 className="food-heading">Food App</h3>
        </div>
      </Link>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li> <Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>
            <FaCartArrowDown />
          </li>
        </ul>
      </div>
      <button
        className="loginBtn"
        onClick={() => {
          btnNameReact === "Login"
            ? setBtnNameREact("Logout")
            : setBtnNameREact("Login");
        }}
      >
        {btnNameReact}
      </button>
    </div>
  );
};

export default Header;
