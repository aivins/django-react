import React from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { createMockEnvironment } from "relay-test-utils";
import { Styles } from "../src/containers";

const { Suspense } = React;

const RelayEnvironmentDecorator = (Story) => {
  const environment = createMockEnvironment();
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<h1>Loading....</h1>}>
        <Story environment={environment} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

const StyleDecorator = (Story) => {
  return (
    <Styles>
      <Story />
    </Styles>
  );
};

export { StyleDecorator, RelayEnvironmentDecorator };
