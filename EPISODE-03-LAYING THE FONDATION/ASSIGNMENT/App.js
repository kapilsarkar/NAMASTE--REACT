import React from "react";
import ReactDOM from "react-dom/client";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class "title")
const parentElement = React.createElement(
  "div",
  { className: "title", key: "title" },
  [
    React.createElement(
      "h1",
      { key: "h1" },
      "This is h1 tag using React.createElement 🚀"
    ),
    React.createElement(
      "h2",
      { key: "h2" },
      "This is h2 tag using React.createElement  🚀"
    ),
    React.createElement(
      "h3",
      { key: "h3" },
      "This is h3 tag using React.createElement  🚀"
    ),
  ]
);

// Create the same element using JSX
const ParentElementByjSX = (
  <div className="title" key="titleJSX">
    <h1 key="h1">This is h1 tag using JSX 🚀</h1>
    <h2 key="h2">This is h2 tag using JSX 🚀</h2>
    <h3 key="h3">This is h3 tag using JSX 🚀</h3>
  </div>
);

//Create a functional component of the same with JSX and Passing attribute into the tag in JSX
const ParentFunctionalComponent = () => {
  return (
    <div className="title" key="title3">
      <h1 style={{color:"red"}} key="h1">This is h1 tag using Functional Component 🚀</h1>
      <h2 style={{color:"blue"}} key="h2">This is h2 tag using Functional Component 🚀</h2>
      <h3 style={{color:"green"}} key="h3">This is h3 tag using Functional Component 🚀</h3>
    </div>
  );
};

//Composition of Component (Add a component inside another)
const CompositionComponent = ()=>{
    return <h1>This is Composition of Component Adding a component inside another🚀</h1>
}

//{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.


const MainComponent = () => {
  return (
    <div id="container">
      {parentElement},{ParentElementByjSX},
      <ParentFunctionalComponent/>
      <CompositionComponent/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainComponent />);
