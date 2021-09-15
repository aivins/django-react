import graphql from "babel-plugin-relay/macro";
import CountriesComponent, { CountriesProps } from "../components/Countries";
import { withLazyLoadQuery } from "../lib/";

const Countries = withLazyLoadQuery<CountriesProps>(
  CountriesComponent,
  graphql`
    query CountriesQuery {
      countries {
        ...Countries_edges
      }
    }
  `,
  {}
);

export default Countries;
