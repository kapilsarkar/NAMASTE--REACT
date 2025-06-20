import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  const isDarkMode = useSelector((store) => store.theme.darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
        <Header />
        <Outlet />
      </div>
    </>
  );
};
export default Layout;
