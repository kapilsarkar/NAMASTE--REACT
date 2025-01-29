import { DefaultContext } from "react-icons";
import { ABOUT_IMG } from "../utils/constant";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props){
    super(props);
    console.log("Parent Constructor")
  }
  componentDidMount(){
    console.log("Parent Component Did Mount Parent")
  }
  componentWillUnmount(){
    console.log("Component will Unmount");
  }
  render() {
    console.log("Parent Render")
    return (
      <div className="about-container">
        <h1 className="about-head">
          Welcome to The<span className="about-head-main">Food App</span>
        </h1>
        <img className="about-img" src={ABOUT_IMG} />
        <h2>About Class Component</h2>
        <UserClass name={"Kapil Sarkar (class)"} location={"Asansol(class)"} />
      </div>
    );
  }
}

export default About;
