import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantOnlineMenu from "./components/RestaurantOnlineMenu";
import Error from "./components/Error";
import UserContext from "./utils/userContext";

const AppLayout = () => {
  //Authentication
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Kapil Sarkar",
    };
    setUserName(data.name);
  }, [])

  return (
    <UserContext.Provider value={{ loggedInUser: userName,setUserName }}>
      <div className="app">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            //nested routing
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantOnlineMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
