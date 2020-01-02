//import React from "react";
//import ReactDOM from "react-dom";

const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed)
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    { id: "something-important" },
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Perdita",
      animal: "Dog",
      breed: "Mixed"
    }),
    React.createElement(Pet, {
      name: "Lume",
      animal: "Dog",
      breed: "Labrador"
    }),
    React.createElement(Pet, {
      name: "Pancita",
      animal: "Hamster",
      breed: "Sirio"
    })
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
