import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React New Element </span>

//React Element =>

const heading = (<h1 className="head">{elem},React Element : Namaste React using JSX 🚀</h1>

);
console.log(heading);

const Title = ()=>{
  return <h1 className="head">Title Component : Namaste React using JSX 🚀</h1>
}
const number = 1000
//React Functional Component

const HeadingComponent = () => (
  <div id="container">
    <Title/>
    <h2>{number}</h2>
    <h3>{heading}</h3>
    <h1 className="heading">Namaste React Functional Component-1</h1>
  </div>
);

const HeadingComponent2 = () => {
  return <h1 className="heading2">Namaste React Functional Component-2</h1>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
