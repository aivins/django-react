import React from "react";

import { ColumnToggle as ColumnToggleComponent } from "../components";

const columnArgs = {
  getToggleHiddenProps: () => {},
};

export default {
  title: "Standardised Work/Components/ColumnToggle",
  component: ColumnToggleComponent,
  args: {
    columns: [
      { Header: "Id", id: "id", ...columnArgs },
      { Header: "First Name", id: "first_name", ...columnArgs },
      { Header: "Last Name", id: "last_name", ...columnArgs },
    ],
  },
};

export const ColumnToggle = (args) => <ColumnToggleComponent {...args} />;
ColumnToggle.storyName = "ColumnToggle";
