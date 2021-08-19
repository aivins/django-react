import React from "react";

import Styles from "../src/containers/Styles";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  storySort: {
    order: ["Components", ["Button", "*"], "Pages", "*"],
  },
};

export const decorators = [
  (Story) => (
    <Styles>
      <Story />
    </Styles>
  ),
];
