import React from "react";
import DataTable from "./DataTable";

const columns = [
  {
    Header: "Sport",
    accessor: "name",
  },
];

const Countries = (props) => <DataTable {...props} columns={columns} />;

export default Countries;
