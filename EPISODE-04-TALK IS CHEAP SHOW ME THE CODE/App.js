import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.shutterstock.com/image-vector/food-finder-app-logo-design-260nw-1328492696.jpg"/>
            </div>
            <div className="nav-items">
             
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return(
        <div className="app">
          //Header
          //Body
          //Footer
        </div>
    )
       
    
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render()