import React from "react";

import Page from "./Page";
import Sports from "./Sports";
import SportsContainer from "../containers/Sports";

const SportsPage = () => (
  <Page title="List of Sports">
    <SportsContainer render={(props) => <Sports {...props} />} />
  </Page>
);

export default SportsPage;
