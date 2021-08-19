import React from "react";
import DataTable from "./DataTable";
import CountryFlag from "./CountryFlag";

const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Country",
    accessor: "name",
  },
  {
    Header: "Flag",
    accessor: "country.name",
    Cell: ({ row }) => <CountryFlag code={row.original.code} />,
  },
  {
    Header: "Country Code",
    accessor: "code",
  },
];

const Countries = (props) => <DataTable {...props} columns={columns} />;

export default Countries;
