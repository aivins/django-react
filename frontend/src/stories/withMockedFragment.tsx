import React from "react";
import { GraphQLTaggedNode } from "relay-runtime";
import useMockedFragment from "./useMockedFragment";

interface MockedFragmentComponentProps {
  environment: any;
}

const withMockedFragment = <
  T extends MockedFragmentComponentProps = MockedFragmentComponentProps
>(
  Component: React.ComponentType<T>,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mockResolver: any,
  query: GraphQLTaggedNode,
  variables = {}
): React.FC<T> => {
  const WrapperComponent = (props: T): JSX.Element => {
    const { environment } = props;
    const data = useMockedFragment(environment, mockResolver, query, variables);
    return <Component {...data} {...(props as T)} />;
  };

  const displayName = Component.displayName || Component.name || "Component";
  WrapperComponent.displayName = `withMockedFragment(${displayName})`;

  return WrapperComponent;
};

export default withMockedFragment;
