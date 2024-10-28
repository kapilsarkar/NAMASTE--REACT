import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import  Error  from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Footer from "./components/Footer";
import Kolkata from "./components/Kolkata";
const AppLayout = () => {
    return (
      <div className="app">
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    );
  };
const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children:[
      {
         path:"/",
         element:<Body/>,
      },
      {
        path:"/about",
        element: <About/>, 
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu/>,
      },
      {
        path:"/kolkata",
        element:<Kolkata/>,
      },
    ],
    errorElement: <Error/>,
  },
 
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);