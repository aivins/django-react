import {
  CacheConfig,
  Environment,
  GraphQLTaggedNode,
  Network,
  OperationType,
  RecordSource,
  Store,
  Variables
} from "relay-runtime";
import fetchGraphQL from "./fetchGraphql";
import {
  loadQuery as relayLoadQuery,
  PreloadableConcreteRequest,
  PreloadFetchPolicy,
  PreloadedQuery,
  EnvironmentProviderOptions
} from "react-relay/hooks";

async function fetchRelay(params, variables) {
  return fetchGraphQL(params.text, variables);
}

const RelayEnvironment = new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource())
});

const loadQuery = (
  preloadableRequest:
    | GraphQLTaggedNode
    | PreloadableConcreteRequest<OperationType>,
  variables: Variables,
  options?: Readonly<{
    fetchPolicy?: PreloadFetchPolicy;
    networkCacheConfig?: CacheConfig;
    onQueryAstLoadTimeout?: () => void;
  }>,
  environmentProviderOptions?: EnvironmentProviderOptions
): PreloadedQuery<OperationType, EnvironmentProviderOptions> =>
  relayLoadQuery(
    RelayEnvironment,
    preloadableRequest,
    variables,
    options,
    environmentProviderOptions
  );

export { RelayEnvironment, loadQuery };
