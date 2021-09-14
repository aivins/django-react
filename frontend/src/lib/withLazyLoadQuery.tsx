import React from "react";
import { GraphQLTaggedNode, useLazyLoadQuery } from "react-relay/hooks";

const withLazyLoadQuery = (
  Component: React.FC,
  query: GraphQLTaggedNode,
  variables = {}
): React.FC => {
  const Wrapper = (props) => {
    const data = useLazyLoadQuery(query, variables);
    return <Component {...data} {...props} />;
  };
  return Wrapper;
};

export default withLazyLoadQuery;
