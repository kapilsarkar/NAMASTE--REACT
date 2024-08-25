import React from "react";
import ReactDOM from "react-dom/client";

//React Element =>

const heading = <h1 className="head">Namaste React using JSX 🚀</h1>;
console.log(heading);

//React Functional Component

const HeadingComponent = () => (
  <h1 className="heading">Namaste React Functional Component-1</h1>
);

const HeadingComponent2 = ()=>{
    return <h1 className="heading2">Namaste React Functional Component-2</h1>
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
