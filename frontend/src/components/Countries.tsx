import React from "react";
import DataTable from "./DataTable";
import CountryFlag from "./CountryFlag";

const columns = [
  {
    Header: "Country",
    accessor: "node.name"
  },
  {
    Header: "Flag",
    accessor: "node.country.node.name",
    Cell: ({ row }) => <CountryFlag code={row.original.node.code} />
  },
  {
    Header: "Country Code",
    accessor: "node.code"
  }
];

interface CountriesProps {
  countries: {
    edges: [];
  };
}

const Countries: React.FC<CountriesProps> = (props: CountriesProps) => {
  return <DataTable data={props.countries.edges} columns={columns} />;
};

export default Countries;
