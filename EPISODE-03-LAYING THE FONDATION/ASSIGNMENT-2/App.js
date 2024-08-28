import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/googlelogo.png";
import user from "./img/user.png"



const HeaderComponent = () => {
  return (
    <div id="container">
       
      <div className="logo">
        <img src={logo} id="imgLogo" alt="logo" />
      </div>
      <div className="searchBox">
        <input type="text" className="search" placeholder="Search" />
        <button type="submit" id="btnSubmit">Submit</button>
      </div>
      <div className="userIcon">
        <img src={user} id="user" alt="user"/>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
