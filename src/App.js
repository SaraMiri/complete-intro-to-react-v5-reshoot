import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <Pet name="Perdita" animal="Dog" breed="Mixed" />
      <Pet name="Lume" animal="Dog" breed="Labrador" />
      <Pet name="Pancita" animal="Hamster" breed="Syrian" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
