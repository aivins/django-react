import React from "react";

import Page from "./Page";
import Countries from "./Countries";
import CountriesContainer from "../containers/Countries";

const CountriesPage = () => (
  <Page title="List of Countries">
    <CountriesContainer render={(props) => <Countries {...props} />} />
  </Page>
);

export default CountriesPage;
