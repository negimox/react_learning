import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const number = 100;

//React Func Compo
const HeadingCompo = () => (
  <div id="container">
    {/* Also known as Component Composition */}
    <h1 className="heading">This is a React Function Component.</h1>
  </div>
);

// JSX
const JsxHeader = (
  <h1 id="jsxhead" className="Hell">
    This is a jsx heading.
    {HeadingCompo()}
  </h1>
);

//Just another way of creating single line function.

root.render(JsxHeader);
