import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement =>ReactElement -JS Object => HTMLElement(render)

//JSX 

const jsxHeading = <h1 className="head">Namaste React using JSX  🚀</h1>
console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
