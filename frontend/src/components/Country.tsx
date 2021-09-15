import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import CountryFlag from "./CountryFlag";
import type { Country_node$key } from "./__generated__/Country_node.graphql";

export type { Country_node$key };
export interface CountryProps {
  country: Country_node$key;
}

const Country = (props: CountryProps): JSX.Element => {
  const { name, code } = useFragment(
    graphql`
      fragment Country_node on CountryNode {
        name
        code
      }
    `,
    props.country
  );
  return (
    <h1>
      <CountryFlag code={code} size={64} />
      &nbsp;{name}
    </h1>
  );
};

export default Country;
