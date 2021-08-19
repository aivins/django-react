import React from "react";

import { Home } from "../components";

export default {
  title: "Standardised Work/Pages/List Countries",
  component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.storyName = "List Countries";
