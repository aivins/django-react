/* eslint-disable relay/must-colocate-fragment-spreads */
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay/hooks";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import { Country, CountryProps } from "../components";

const { Suspense } = React;

const environment = createMockEnvironment();

const mockResolver = {
  CountryNode: () => {
    return {
      id: "Q291bnRyeU5vZGU6MQ==",
      name: "Australia",
      code: "AU"
    };
  }
};

export default {
  title: "Country",
  component: Country
} as ComponentMeta<typeof Country>;

const CountryWrapper = () => {
  environment.mock.queueOperationResolver((operation) => {
    return MockPayloadGenerator.generate(operation, mockResolver);
  });

  const data = useLazyLoadQuery(
    graphql`
      query CountryQuery {
        country(id: "Q291bnRyeU5vZGU6MQ==") {
          # Spread the fragment you want to test here
          ...Country_node
        }
      }
    `,
    {}
  ) as CountryProps;

  console.log({ data });

  return <Country {...data} />;
};

const Template: ComponentStory<typeof Country> = () => {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={<h1>Loading....</h1>}>
        <CountryWrapper />
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button"
};
Primary.parameters = {
  docs: {
    source: {
      code: "Disabled for this story, see https://github.com/storybookjs/storybook/issues/11554"
    }
  }
};
