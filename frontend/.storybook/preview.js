import "@storybook/addon-console";
import { StyleDecorator, RelayEnvironmentDecorator } from "./decorators";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// decorators wrap each other in the order listed below
export const decorators = [RelayEnvironmentDecorator, StyleDecorator];
