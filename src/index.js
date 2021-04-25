import React from "react";
import { render } from "react-dom";

function HelloWorld() {
  return <p>Hello wolrd</p>;
}

render(<HelloWorld />, document.getElementById("app"));
