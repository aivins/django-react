import React from "react";

import Page from "./Page";
import Medals from "./Medals";
import MedalsContainer from "../containers/Medals";

const MedalsPage = () => (
  <Page title="List of Medals">
    <MedalsContainer render={(props) => <Medals {...props} />} />
  </Page>
);

export default MedalsPage;
