import React, { useEffect } from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { GenderMale, GenderFemale } from "react-bootstrap-icons";
import type { Athletes_edges$key } from "./__generated__/Athletes_edges.graphql";

import DataTable from "./DataTable";
import CountryFlag from "./CountryFlag";

const columns = [
  {
    Header: "Name",
    accessor: "name"
  },
  {
    Header: "Gender",
    accessor: "gender",
    Cell: ({ row }) =>
      row.original.gender === "M" ? <GenderMale /> : <GenderFemale />
  },
  {
    Header: "Country",
    accessor: "country.name",
    Cell: ({ row }) => (
      <span>
        <CountryFlag
          code={row.original.country.code}
          style={{ marginRight: 5 }}
        />
        {row.original.country.name}
      </span>
    )
  }
];

export interface AthletesProps {
  athletes: Athletes_edges$key;
}

const Countries = (props): JSX.Element => {
  const data = useFragment(
    graphql`
      fragment Athletes_edges on AthleteNodeConnection {
        edges {
          node {
            id
            name
            gender
            country {
              name
              code
            }
          }
        }
      }
    `,
    props.athletes
  );

  const athletes = data.edges
    .map(edge => edge.node)
    .map(node => ({
      id: node.id,
      name: node.name,
      gender: node.gender,
      country: node.country
    }));

  useEffect(() => {
    console.log("athletes data", data);
  }, []);

  return <DataTable data={athletes} columns={columns} />;
};

export default Countries;
