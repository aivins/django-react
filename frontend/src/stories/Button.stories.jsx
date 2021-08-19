import React from "react";
import { Button as ButtonComponent } from "react-bootstrap";

export default {
  title: "Standardised Work/Components/Button",
  component: ButtonComponent,
};

export const Button = (args) => <ButtonComponent {...args} />;
