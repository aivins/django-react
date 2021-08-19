import React from "react";
import ReactDOM from "react-dom";
import components from "./src/components";

var mountNode = document.getElementById("app");
ReactDOM.render(<components.App />, mountNode);
