import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "./Navbar";
import Heading from "./Heading";

const Page = ({ title, children }) => (
  <Container style={{ marginTop: 20 }}>
    <Heading>{title}</Heading>
    {children}
  </Container>
);
export default Page;
