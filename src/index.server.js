import React from "react";
import ReactDOMServer from "react-dom/server";
const html = ReactDOMServer.renderToString(
  <div>
    <h1>Hello server render</h1>
  </div>
);
