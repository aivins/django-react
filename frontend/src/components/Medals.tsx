import React from "react";
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
          code={row.original.country_code}
          style={{ marginRight: 5 }}
        />
        {row.original.country}
      </span>
    ),
  },
  {
    Header: <MedalHeader>🥇</MedalHeader>,
    accessor: "gold",
  },
  {
    Header: <MedalHeader>🥈</MedalHeader>,
    accessor: "silver",
  },
  {
    Header: <MedalHeader>🥉</MedalHeader>,
    accessor: "bronze",
  },
  {
    Header: "Total",
    accessor: "total",
  },
];

const Medals = (props) => <DataTable {...props} columns={columns} />;

export default Medals;
