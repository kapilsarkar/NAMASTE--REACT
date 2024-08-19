import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "This is Namaste React by Akshay Saini sir 🚀  "),
      React.createElement("h2", {}, "Hello Kapil Enjoy your Namaste React Learning"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am an h1 tag created by Piku"),
      React.createElement("h2", {}, "Hi i am h2 tag"),
    ]),
  ]);
  //console.log(parent);
  
  const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World From React by Kapil Sarkar"
  );
  console.log(heading); //this will return an object
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  root.render(heading);
  root.render(parent);