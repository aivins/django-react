import React from "react";
import { GraphQLTaggedNode, useLazyLoadQuery } from "react-relay/hooks";

const withLazyLoadQuery = <Props,>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.FC<Props>,
  query: GraphQLTaggedNode,
  variables = {}
): React.FC => {
  const Wrapper = (props: Props) => {
    const data = useLazyLoadQuery(query, variables);
    return <Component {...data} {...props} />;
  };
  return Wrapper;
};

export default withLazyLoadQuery;
