import React, { useEffect } from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import type { Medals_edges$key } from "./__generated__/Medals_edges.graphql";

import DataTable from "./DataTable";
import CountryFlag from "./CountryFlag";

const MedalHeader = ({ children }) => (
  <div style={{ textAlign: "center" }}>
    <span style={{ fontSize: 36 }}>{children}</span>
  </div>
);

const columns = [
  {
    Header: "Country",
    accessor: "country",
    Cell: ({ row }) => (
      <span>
        <CountryFlag
          code={row.original.country.code}
          style={{ marginRight: 5 }}
        />
        {row.original.country.name}
      </span>
    )
  },
  {
    Header: <MedalHeader>🥇</MedalHeader>,
    accessor: "gold"
  },
  {
    Header: <MedalHeader>🥈</MedalHeader>,
    accessor: "silver"
  },
  {
    Header: <MedalHeader>🥉</MedalHeader>,
    accessor: "bronze"
  },
  {
    Header: "Total",
    accessor: "total"
  }
];

export interface MedalsProps {
  medals: Medals_edges$key;
}

const Medals = (props): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment Medals_edges on MedalNodeConnection {
        edges {
          node {
            id
            medal
          }
        }
      }
    `,
    props.medals
  );

  const medals = data.edges
    .map(edge => edge.node)
    .map(node => ({
      id: node.id,
      medal: node.medal
    }));

  useEffect(() => {
    console.log("athletes data", data);
  }, []);

  return <DataTable data={medals} columns={columns} />;
};

export default Medals;
