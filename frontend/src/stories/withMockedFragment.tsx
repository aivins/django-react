import React from "react";
import { GraphQLTaggedNode } from "relay-runtime";
import useMockedFragment from "./useMockedFragment";

interface MockedFragmentComponentProps {
  environment: any;
}

const withMockedFragment = <
  ComponentProps,
  T extends MockedFragmentComponentProps = MockedFragmentComponentProps
>(
  Component: React.ComponentType<ComponentProps>,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mockResolver: any,
  query: GraphQLTaggedNode,
  variables = {}
): React.FC<T> => {
  const WrapperComponent = (props: T): JSX.Element => {
    const { environment, ...args } = props;
    const data = useMockedFragment(
      environment,
      mockResolver(args),
      query,
      variables
    );
    return <Component {...(data as ComponentProps)} />;
  };

  const displayName = Component.displayName || Component.name || "Component";
  WrapperComponent.displayName = `withMockedFragment(${displayName})`;

  return WrapperComponent;
};

export default withMockedFragment;
