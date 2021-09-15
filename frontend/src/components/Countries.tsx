import React from "react";
import DataTable from "./DataTable";
import CountryFlag from "./CountryFlag";

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
interface CountriesProps {
  countries: [];
}

const Countries = (props: CountriesProps): JSX.Element => {
  return <DataTable data={props.countries} columns={columns} />;
};

export default Countries;
