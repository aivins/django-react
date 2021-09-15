import React from "react";

import Page from "./Page";
import Countries from "../containers/queries/Countries";

const CountriesPage = (): React.ReactNode => (
  <Page title="List of Countries">
    <Countries />
  </Page>
);

export default CountriesPage;
