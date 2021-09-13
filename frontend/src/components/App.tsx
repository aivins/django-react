import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import { RelayEnvironment } from "../environment";

import Styles from "../containers/Styles";
import MedalsPage from "./MedalsPage";
import CountriesPage from "./CountriesPage";
import AthletesPage from "./AthletesPage";
import SportsPage from "./SportsPage";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Styles>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/athletes" default>
            <AthletesPage />
          </Route>
          <Route path="/sports" default>
            <SportsPage />
          </Route>
          <Route path="/countries" default>
            <CountriesPage />
          </Route>
          <Route path="/medals" default>
            <MedalsPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Styles>
  </RelayEnvironmentProvider>
);
export default App;
