import React from "react";
import type { Countries_edges$key } from "./__generated__/Countries_edges.graphql";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { Countries } from "../../components";

export interface CountriesProps {
  countries: Countries_edges$key;
}

export default (props: CountriesProps): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment Countries_edges on CountryNodeConnection {
        edges {
          node {
            id
            name
            code
          }
        }
      }
    `,
    props.countries
  );

  const countries = data?.edges
    .map((edge) => edge.node)
    .map((node) => ({ id: node.id, name: node.name, code: node.code }));

  return <Countries countries={countries} />;
};
