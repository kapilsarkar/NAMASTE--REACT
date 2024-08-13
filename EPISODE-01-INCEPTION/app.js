//Nested HTML  structure
// <div id ="parent">
//<div id="children1">
//<h1>Hi I am h1 tag created by Kapil</h1>
//<h2>Hi am a an h2 tag created by kapil</h2>
//</div>
//<div id="children2">
//<h1>Hi I am h1 tag created by Kapil</h1>
//<h2>Hi am a an h2 tag created by kapil</h2>
//</div>
//</div>

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am an h1 tag created by Kapil"),
    React.createElement("h2", {}, "Hi i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 tag created by Piku"),
    React.createElement("h2", {}, "Hi i am h2 tag"),
  ]),
]);
console.log(parent);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React by Kapil Sarkar"
);
console.log(heading); //this will return an object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
root.render(parent);
