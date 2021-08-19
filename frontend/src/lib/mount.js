import React from "react";
import ReactDOM from "react-dom";

const mountComponent = (elementId, Component, props) => {
  const mountNode = document.getElementById(elementId);
  ReactDOM.render(<Component {...props} />, mountNode);
};

window.mountComponent = mountComponent;
