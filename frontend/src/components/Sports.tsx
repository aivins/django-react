import React from "react";
import DataTable from "./DataTable";

const columns = [
  {
    Header: "Sport",
    accessor: "name"
  }
];

const Sports = (props) => <DataTable {...props} columns={columns} />;

export default Sports;
