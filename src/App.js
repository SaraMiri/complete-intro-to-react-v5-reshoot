import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

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

render(React.createElement(App), document.getElementById("root"));
