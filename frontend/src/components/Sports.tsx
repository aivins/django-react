import React, { useEffect } from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import DataTable from "./DataTable";
import type { Sports_edges$key } from "./__generated__/Sports_edges.graphql";

const columns = [
  {
    Header: "Sport",
    accessor: "name"
  }
];

export interface SportsProps {
  sports: Sports_edges$key;
}

const Sports = (props: SportsProps): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment Sports_edges on SportNodeConnection {
        edges {
          node {
            id
            name
          }
        }
      }
    `,
    props.sports
  );

  const sports = data.edges
    .map(edge => edge.node)
    .map(node => ({ id: node.id, name: node.name }));

  useEffect(() => {
    console.log("sports data", data);
  }, []);

  return <DataTable data={sports} columns={columns} />;
};

export default Sports;
