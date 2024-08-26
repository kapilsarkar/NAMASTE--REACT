import React from "react";
import ReactDOM from "react-dom/client";

const heading = <h1 className="heading">Assignment -(Namaste React) Episode-03(Laying the Foundation) 🚀</h1>

const HeadingComponent = ()=>{
    return <div id="container">
        {heading}
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>)