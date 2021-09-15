import React from "react";
import type { Country_node$key } from "./__generated__/Country_node.graphql";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { Country } from "../../components";

export interface CountryProps {
  country: Country_node$key;
}

export default (props: CountryProps): JSX.Element => {
  const { id, name, code } = useFragment(
    graphql`
      fragment Country_node on CountryNode {
        id
        name
        code
      }
    `,
    props.country
  );

  console.log({ id, name, code });

  return <Country {...{ id, name, code }} />;
};
