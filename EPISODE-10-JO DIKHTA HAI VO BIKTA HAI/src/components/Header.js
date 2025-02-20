import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="w-full flex justify-evenly items-center shadow-2xl">
      <div className="p-3 flex text-2xl font-bold">
        <img className="w-16 animate-pulse" src={LOGO_URL} />
        <h3 className="mt-6">Food App</h3>
      </div>
      <div className=" flex justify-center font-bold">
        <ul className=" flex gap-2 justify-between p-2 cursor-pointer">
          <li className="p-1.5 animate-pulse">
            Online Status {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
            <Link to="/">Home</Link>
          </li>
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
            <Link to="/contact">Contact Us</Link>{" "}
          </li>
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
            Cart
          </li>
          <button
            className=" cursor-pointer bg-orange-600 text-white px-1.5 py-1 rounded-b-xl rounded-t-sm"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
