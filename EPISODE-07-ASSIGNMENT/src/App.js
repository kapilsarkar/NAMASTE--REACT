import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
const AppLayout = () => {
    return (
      <div className="app">
        <Header/>
        <Body/>
      </div>
    );
  };
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
  },
  {
    path:"/about",
    element: <About/>, 
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);