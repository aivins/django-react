import React from "react";

import { DataTable } from "../components";

const data = [
  "Andrew",
  "Leon",
  "John",
  "Hiral",
  "Felipe",
  "Monza",
  "Hasan",
  "Zoe",
].map((name, id) => ({
  id,
  name,
}));

const columns = [
  {
    Header: "Id",
    accessor: "id",
  },
  {
    Header: "Country",
    accessor: "name",
  },
];

export default {
  title: "Standardised Work/Components/DataTable",
  component: DataTable,
  args: {
    sortable: true,
    variant: "default",
    striped: true,
    bordered: true,
    hover: true,
    size: "default",
    loading: false,
  },
  argTypes: {
    variant: {
      options: ["default", "dark"],
      control: { type: "radio", labels: { default: "Default", dark: "Dark" } },
    },
    size: {
      options: ["default", "sm"],
      control: { type: "radio", labels: { default: "Default", sm: "Small" } },
    },
  },
};

const Template = (args) => <DataTable {...args} />;

export const Simple = Template.bind({});
Simple.storyName = "DataTable";
Simple.args = {
  data,
  columns,
};
