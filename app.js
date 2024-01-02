import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1",{},"React hello");

console.log(heading);
const jsxHeading = <h1 id="head">Hello JSX.</h1>;
console.log(jsxHeading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);


