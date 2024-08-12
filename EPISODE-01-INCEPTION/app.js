//Nested HTML  structure
// <div id ="parent">
    //<div id="children">
       //<h1></h1>
    //</div>
//</div>

const parent = React.createElement()

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React by Kapil Sarkar"
);
console.log(heading) //this will return an object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
