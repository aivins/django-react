import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => (
  <Navbar
    bg="dark"
    expand="lg"
    style={{ padding: "0 0 0 0", height: 50, alignItems: "initial" }}
  >
    {/* <Container> */}
    <div
      style={{
        backgroundColor: "#dd5900",
        padding: "10px 0 0 10px",
      }}
    >
      <Navbar.Brand href="#home" style={{ color: "white" }}>
        Django React Demo
      </Navbar.Brand>
    </div>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link
          className="nav-link"
          role="button"
          to="/medals"
          style={{ color: "white" }}
        >
          Medals
        </Link>
        <Link
          className="nav-link"
          role="button"
          style={{ color: "white" }}
          to="/countries"
        >
          Countries
        </Link>
        <Link
          className="nav-link"
          role="button"
          style={{ color: "white" }}
          to="/sports"
        >
          Sports
        </Link>
        <Link
          className="nav-link"
          role="button"
          style={{ color: "white" }}
          to="/athletes"
        >
          Athletes
        </Link>
      </Nav>
    </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
);

export default CustomNavbar;
