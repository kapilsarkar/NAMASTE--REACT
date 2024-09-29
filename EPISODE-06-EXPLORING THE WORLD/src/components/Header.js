import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <a href="/" className="anchor-head">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <p className="food-heading">Food App</p>
      </div>
      </a>
     
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
