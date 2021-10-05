/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable relay/must-colocate-fragment-spreads */
import { GraphQLTaggedNode, useLazyLoadQuery } from "react-relay/hooks";
import { MockPayloadGenerator } from "relay-test-utils";

const useMockedFragment = <TProps>(
  environment: any,
  mockResolver: any,
  query: GraphQLTaggedNode,
  variables = {}
): TProps => {
  environment.mock.queueOperationResolver((operation) => {
    const payload = MockPayloadGenerator.generate(operation, mockResolver);
    return payload;
  });

  return useLazyLoadQuery(query, variables) as TProps;
};

export default useMockedFragment;
