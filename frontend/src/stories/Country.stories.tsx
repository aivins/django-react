/* eslint-disable relay/must-colocate-fragment-spreads */
import React from "react";
import graphql from "babel-plugin-relay/macro";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Country, CountryProps } from "../components";
import withMockedFragment from "./withMockedFragment";

const CountryWrapper = withMockedFragment<CountryProps>(
  Country,
  (args) => ({
    CountryNode: () => {
      return {
        id: "Q291bnRyeU5vZGU6MQ==",
        ...args
      };
    }
  }),
  graphql`
    query CountryQuery {
      country(id: "Q291bnRyeU5vZGU6MQ==") {
        ...Country_node
      }
    }
  `
);

export default {
  title: "Components/Country",
  component: Country,
  parameters: {
    docs: {
      source: {
        code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
      }
    }
  }
} as ComponentMeta<typeof Country>;

const Template: ComponentStory<typeof CountryWrapper> = (args, context) => {
  return <CountryWrapper {...args} {...context} />;
};

export const Australia = Template.bind({});
Australia.args = {
  name: "Australia",
  code: "AU"
};

export const GreatBritain = Template.bind({});
GreatBritain.args = {
  name: "Great Britain",
  code: "GB"
};
