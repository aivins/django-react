import React from "react";

import Page from "./Page";
import Athletes from "./Athletes";
import AthletesContainer from "../containers/Athletes";

const AthletesPage = () => (
  <Page title="List of Athletes">
    <AthletesContainer render={(props) => <Athletes {...props} />} />
  </Page>
);

export default AthletesPage;
