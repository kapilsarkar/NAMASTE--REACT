import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.js";
const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  //console.log(loggedInUser);
  return (
    <div className="w-full flex justify-evenly items-center shadow-2xl">
      <div className="p-3 flex text-2xl font-bold">
        <img className="w-12 animate-pulse" src={LOGO_URL} />
        <h3 className="mt-6 text-orange-500 antialiased">Food App</h3>
      </div>
      <p className=" font-bold text-center text-xl text-green-600">
        {loggedInUser}
      </p>
      <div className="hidden md:block">
        <div className=" flex justify-center text-sm font-bold">
          <ul className=" flex gap-2 justify-between p-2 cursor-pointer">
            <li className="p-1.5 animate-pulse">
              Online Status {onlineStatus ? "🟢" : "🔴"}
            </li>
            <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
              <Link to="/about">About</Link>
            </li>
            <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
              <Link to="/contact">Contact</Link>{" "}
            </li>
            <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="p-1.5 rounded-xs hover:duration-300 hover:ease-in-out hover:bg-orange-500 hover:text-white">
              <i className="fa-solid fa-cart-shopping"></i>
            </li>
            <button
              className=" cursor-pointer bg-orange-600 text-white px-1.5 py-1 rounded-b-xl rounded-t-sm"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
