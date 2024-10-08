import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import City from "./components/City";
import Body from "./components/Body";
import Footer from "./components/Footer";
const AppLayout = () => {
    return (
      <div className="app">
        <Header/>
        <City/>
        <Body/>
        <Footer/>
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);