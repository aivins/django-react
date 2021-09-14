import graphql from "babel-plugin-relay/macro";
import Countries from "../components/Countries";
import withLazyLoadQuery from "../lib/withLazyLoadQuery";

export default withLazyLoadQuery(
  Countries,
  graphql`
    query CountriesQuery {
      countries {
        edges {
          node {
            id
            name
            code
          }
        }
      }
    }
  `,
  {}
);
