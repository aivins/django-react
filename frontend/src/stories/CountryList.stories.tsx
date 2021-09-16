/* eslint-disable relay/must-colocate-fragment-spreads */
import React from "react";
import graphql from "babel-plugin-relay/macro";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Countries, CountriesProps } from "../components";
import withMockedFragment from "./withMockedFragment";
import faker from "faker";

// eslint-disable-next-line @typescript-eslint/ban-types
const connectionFromArray = <T extends object>(
  arr: T[] = []
  // eslint-disable-next-line @typescript-eslint/ban-types
): object => {
  if (!arr || arr.length === 0) {
    return {
      edges: [],
      totalCount: 0,
      count: 0,
      endCursorOffset: 0,
      startCursorOffset: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false
      }
    };
  }

  return {
    edges: arr.map((node) => ({ node })),
    totalCount: arr.length,
    count: arr.length,
    endCursorOffset: arr.length,
    startCursorOffset: 0,
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false
    }
  };
};

const CountriesWrapper = withMockedFragment<CountriesProps>(
  Countries,
  () => ({
    CountryNode: (_, generateId) => {
      return {
        id: `${generateId()}`,
        name: faker.address.country(),
        code: faker.address.countryCode()
      };
    },
    CountryNodeConnection: () => {
      return connectionFromArray(Array(10).fill({}));
    }
  }),
  graphql`
    query CountryListQuery {
      countries {
        ...Countries_edges
      }
    }
  `
);

export default {
  title: "Components/CountryList",
  component: Countries,
  parameters: {
    docs: {
      source: {
        code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
      }
    }
  }
} as ComponentMeta<typeof Countries>;

const Template: ComponentStory<typeof CountriesWrapper> = (args, context) => {
  return <CountriesWrapper {...args} {...context} />;
};

export const List = Template.bind({});
