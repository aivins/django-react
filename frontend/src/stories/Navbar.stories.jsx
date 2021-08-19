import React from "react";
import { Button as ButtonComponent } from "react-bootstrap";
import { Navbar as NavbarComponent } from "../components";

export default {
  title: "Standardised Work/Components/Navbar",
  component: NavbarComponent,
};

export const Navbar = (args) => <NavbarComponent {...args} />;
