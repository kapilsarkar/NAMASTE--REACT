import { useState } from "react";
import { ABOUT_IMG } from "../utils/constant";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about-container">
      <h1 className="about-head">
        Welcome to The<span className="about-head-main">Food App</span>
      </h1>
      <div className="about-profile-container">
        {show ? (
          <>
            <Link to={"/about"}>
              <button className="profile-btn" onClick={() => setShow(false)}>
                Hide My Profile
              </button>
            </Link>
            <Outlet />
          </>
        ) : (
          <Link to={"profile"}>
            <button className="profile-btn" onClick={() => setShow(true)}>
              Show My Profile
            </button>
          </Link>
        )}
      </div>
      <img className="about-img" src={ABOUT_IMG} />
    </div>
  );
};

export default About;
