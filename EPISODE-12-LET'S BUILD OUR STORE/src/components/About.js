import { useState } from "react";
import { ABOUT_IMG } from "../utils/constant";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full">
      <h1 className="mt-3 p-2 font-bold text-xl md:text-3xl text-center">
        Welcome to The
        <span className=" ml-1.5 rounded-xl text-white bg-orange-500 p-2">
          Food App
        </span>
      </h1>
      <div className="flex justify-center mt-2">
        {show ? (
          <>
            <Link to={"/about"}>
              <button
                className="cursor-pointer text-white bg-orange-600 border-none rounded-xs p-3 font-bold"
                onClick={() => setShow(false)}
              >
                Hide Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button
              className="cursor-pointer text-white bg-orange-600 border-none rounded-xs p-3 font-bold"
              onClick={() => setShow(true)}
            >
              Show Profile
            </button>
          </Link>
        )}
      </div>
      <img className="w-full" src={ABOUT_IMG} />
    </div>
  );
};

export default About;
