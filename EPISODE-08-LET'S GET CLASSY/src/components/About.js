import { DefaultContext } from "react-icons";
import { ABOUT_IMG } from "../utils/constant";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-head">
        Welcome to The<span className="about-head-main">Food App</span>
      </h1>
      <img className="about-img" src={ABOUT_IMG} />
      <User/>
      <UserClass/>
    </div>
  );
};

export default About;
