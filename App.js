const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading h1"),
    React.createElement("h2", {}, "I am heading h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am heading h1"),
    React.createElement("h2", {}, "I am heading h2"),
  ]),
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
