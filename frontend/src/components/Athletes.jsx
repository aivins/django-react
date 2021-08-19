import React from "react";
import { GenderMale, GenderFemale } from "react-bootstrap-icons";

import DataTable from "./DataTable";
import CountryFlag from "./CountryFlag";

const columns = [
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
    Cell: ({ row }) =>
      row.original.gender === "M" ? <GenderMale /> : <GenderFemale />,
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
    ),
  },
];

const Countries = (props) => <DataTable {...props} columns={columns} />;

export default Countries;
