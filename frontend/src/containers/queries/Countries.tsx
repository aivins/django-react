import graphql from "babel-plugin-relay/macro";
import Countries, { CountriesProps } from "../fragments/Countries";
import withLazyLoadQuery from "../../lib/withLazyLoadQuery";

export default withLazyLoadQuery<CountriesProps>(
  Countries,
  graphql`
    query CountriesQuery {
      countries {
        ...Countries_edges
      }
    }
  `,
  {}
);
