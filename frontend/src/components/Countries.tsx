import React, { useState } from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";
import { Modal } from "react-bootstrap";
import DataTable from "./DataTable";
import CountryFlag from "./CountryFlag";
import Country from "./Country";
import type { Countries_edges$key } from "./__generated__/Countries_edges.graphql";

const columns = [
  {
    Header: "Country",
    accessor: "name"
  },
  {
    Header: "Flag",
    Cell: ({ row }) => <CountryFlag code={row.original.code} />
  },
  {
    Header: "Country Code",
    accessor: "code"
  }
];
export interface CountriesProps {
  countries: Countries_edges$key;
}

const Countries = (props: CountriesProps): JSX.Element => {
  const [selectedCountry, selectCountry] = useState(null);

  const data = useFragment(
    graphql`
      fragment Countries_edges on CountryNodeConnection {
        edges {
          node {
            id
            name
            code
            ...Country_node
          }
        }
      }
    `,
    props.countries
  );

  const handleClose = () => {
    selectCountry(null);
  };

  const handleRowClick = (row) => {
    selectCountry(row);
  };

  const countries = data.edges
    .map((edge) => edge.node)
    .map((node) => ({ id: node.id, name: node.name, code: node.code }));

  return (
    <>
      <Modal show={selectedCountry} onHide={handleClose}>
        <Modal.Header closeButton>Country</Modal.Header>
        <Modal.Body>
          <Country {...selectedCountry} />
        </Modal.Body>
      </Modal>
      <DataTable
        data={countries}
        columns={columns}
        onRowClick={handleRowClick}
      />
    </>
  );
};

export default Countries;
