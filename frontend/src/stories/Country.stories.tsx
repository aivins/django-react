/* eslint-disable relay/must-colocate-fragment-spreads */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { MockPayloadGenerator } from "relay-test-utils";
import { Country, CountryProps } from "../components";
import useMockedFragment from "./useMockedFragment";
import withMockedFragment from "./withMockedFragment";

// const CountryWrapper = withMockedFragment

export default {
  title: "Country",
  component: Country
} as ComponentMeta<typeof Country>;

const CountryWrapper = ({ name, code, environment }) => {
  const data = useMockedFragment<CountryProps>(
    environment,
    {
      CountryNode: () => {
        return {
          id: "Q291bnRyeU5vZGU6MQ==",
          name,
          code
        };
      }
    },
    graphql`
      query CountryQuery {
        country(id: "Q291bnRyeU5vZGU6MQ==") {
          ...Country_node
        }
      }
    `
  );

  return <Country {...data} />;
};

const Template: ComponentStory<typeof CountryWrapper> = (args, context) => {
  const { environment } = context;
  return <CountryWrapper {...args} environment={environment} />;
};

export const Australia = Template.bind({});
Australia.args = {
  name: "Australia",
  code: "AU"
};
Australia.parameters = {
  docs: {
    source: {
      code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
    }
  }
};

export const GreatBritain = Template.bind({});
GreatBritain.args = {
  name: "Great Britain",
  code: "GB"
};
GreatBritain.parameters = {
  docs: {
    source: {
      code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
    }
  }
};
