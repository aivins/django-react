import React from "react";
import graphql from "babel-plugin-relay/macro";
import { usePreloadedQuery } from "react-relay/hooks";
import { loadQuery } from "../environment";
import { flatten } from "../lib/utils";

const query = graphql`
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
`;

const preloaded = loadQuery(query, {});

const Countries = ({ render, preloadedQuery }) => {
  const data = flatten(usePreloadedQuery(query, preloaded));

  // const { loading, error, data, refetch } = usePreloadedQuery(COUNTRIES, {
  //   notifyOnNetworkStatusChange: true,
  // });
  return render({ data: data?.countries });
  // return <h1>Maybe loaded some stuff</h1>;
};

export default Countries;
