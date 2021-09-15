/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom";
import * as components from "../components";

const mountComponent = (
  elementId: string,
  Component: React.FC,
  props: Record<string, unknown>
): void => {
  const mountNode = document.getElementById(elementId);
  ReactDOM.render(<Component {...props} />, mountNode);
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.mountComponent = mountComponent;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
window.components = components;

export default mountComponent;
