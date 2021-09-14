import React from "react";
import { Container } from "react-bootstrap";
import { Spinner } from "react-bootstrap";
import Heading from "./Heading";

const { Suspense } = React;

const Page = ({ title, children }) => (
  <Container style={{ marginTop: 20 }}>
    <Heading>{title}</Heading>
    <Suspense fallback={<Spinner animation="border" />}>{children}</Suspense>
  </Container>
);
export default Page;
