import React from "react";

import Page from "./Page";
import Countries from "../containers/Countries";

const CountriesPage = (): React.ReactNode => (
  <Page title="List of Countries">
    <Countries />
  </Page>
);

export default CountriesPage;
